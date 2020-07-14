// Server index for multiple grib/tile servers
var SrvIndex = 1;

// Minimum map zoom fo rgrib requests
var MIN_MAP_ZOOM = 5;

// Global GribMap Manager
var GribMap = {};

GribMap.ServerURL = function()
{
  if (typeof WindGridServers !== "undefined" && WindGridServers)
  {
    SrvIndex = ((SrvIndex + 1) % WindGridServers.length);
    if (SrvIndex === 0)
    {
      SrvIndex = 1;
    }
    return WindGridServers[SrvIndex];
  }
  else
  {
    return "";
  }
};

// point in the canvas
class Pixel
{
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
    this.moveBy = function(offset)
    {
      //this is the same as the base.offset() func, but without cloning the object
      this.x += offset.x;
      this.y += offset.y;
    };

    this.moveByPolar = function(ro, theta)
    {
      var angle = (theta - 90.0) * Math.PI / 180.0;
      this.x += ro * Math.cos(angle);
      this.y += ro * Math.sin(angle);
    };
  }
}

//var BeaufortColors = ['#FFFFFF', '#9696E1', '#508CCD', '#3C64B4', '#41B464', '#B4CD0A', '#D2D216', '#E1D220', '#FFB300', '#FF6F00', '#FF2B00', '#E60000', '#7F0000'];
var BeaufortColors = ['#FFFFFF', '#7878c4', '#4070ac', '#305093', '#349350', '#B4CD0A', '#b2b212', '#c4b21a', '#ff9200', '#ff5800', '#ff2200', '#cb0000', '#650000'];
// Leaflet Extension layet to draw wind arrows
// Highly inspired from Leaflet Heat plugin
// https://github.com/Leaflet/Leaflet.heat/blob/gh-pages/src/HeatLayer.js

GribMap.Layer = L.Layer.extend(
{

  initialize: function(config)
  {
    if (!config)
    {
      config = {};
    }
    this.cfg = config;
    this._canvas = L.DomUtil.create('canvas');
    this._data = [];
    this._max = 1;
    this._min = 0;
    this.cfg.container = this._canvas;
    this._Density = 10;
    this._Time = new Date();
    this.DrawWindDebugCnt = 0;
    this.DrawWindDebugDepth = 0;
    this.UpdateCount = 0;
    this.PrevUpdateCount = 0;
    /*setInterval(function()
    {
      this.HandleIntervalDebug();
    }.bind(this), 1000);
  },
  HandleIntervalDebug: function()
  {
    if (this.PrevUpdateCount != this.UpdateCount)
    {
      console.log("UpdateCountDelta:" + (this.UpdateCount - this.PrevUpdateCount));
      this.PrevUpdateCount = this.UpdateCount;
    }*/
  },
  GetGribMapTime: function()
  {
    return this._Time;
  },
  SetGribMapTime: function(epoch)
  {
    if (!epoch)
    {
      epoch = new Date().getTime();
    }
    this.UpdateCount++;
    if (this._Time !== epoch)
    {
      this._Time = epoch;
      this._update();
    }
  },
  _CheckDensity(ctx)
  {
    let TxtWidth = ctx.measureText("XX.X/XXX.X°");
    this._Density = Math.floor(this._width / 1.5 / TxtWidth.width);
    /*if (this._width < 500 || this.height < 500)
    {
      this._Density = 10;
    }
    else
    {
      this._Density = 30;
    }*/
  },
  onAdd: function(map)
  {
    let size = map.getSize();

    this._map = map;

    this._width = size.x;
    this._height = size.y;
    this._canvas.width = size.x;
    this._canvas.height = size.y;
    //this._CheckDensity();

    this._canvas.style.width = size.x + 'px';
    this._canvas.style.height = size.y + 'px';
    this._canvas.style.position = 'absolute';

    this._origin = this._map.layerPointToLatLng(new L.Point(0, 0));

    map.getPanes().overlayPane.appendChild(this._canvas);

    // this resets the origin and redraws whenever
    // the zoom changed or the map has been moved
    map.on('moveend', this._reset, this);
    this._reset();
    this._draw();
  },

  addTo: function(map)
  {
    map.addLayer(this);
    return this;
  },
  onRemove: function(map)
  {
    // remove layer's DOM elements and listeners
    map.getPanes().overlayPane.removeChild(this._canvas);

    map.off('moveend', this._reset, this);
  },
  _draw: function()
  {
    if (!this._map)
    {
      return;
    }

    this._update();
  },
  _update: function(InCallBack)
  {
    let ctx = this._canvas.getContext('2d');
    this._CheckDensity(ctx);
    ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._DrawWindArea(ctx, InCallBack);

  },
  _DrawWindArea: function(ctx)
  {

    this.DrawWindDebugCnt++;
    //this.DrawWindDebugDepth = InCallBack ? this.DrawWindDebugDepth + 1 : 0;
    // " + this.DrawWindDebugCnt + " " + this.DrawWindDebugDepth);

    let bstep = this.arrowstep;
    let bounds, zoom;
    let ErrorCatching = 1;
    bounds = this._map.getBounds();
    zoom = this._map.getZoom();

    if (zoom < MIN_MAP_ZOOM)
    {
      return;
    }

    //let StartTick = new Date().getTime();
    let MinX = bounds.getWest();
    let MaxX = bounds.getEast();
    let MaxY = bounds.getNorth();
    let MinY = bounds.getSouth();
    let DX = (MaxX - MinX) / this._Density;
    let DY = (MaxY - MinY) / this._Density;
    let LatLng = L.latLng(MaxY, MinX);
    let p0 = map.project(LatLng, zoom);
    let MI = null;
    let MissedQueue = false;
    this.Strings = [];
    for (let x = MinX; x <= MaxX; x += DX)
    {
      for (let y = MinY; y <= MaxY; y += DY)
      {
        //Récupère le vent et l'affiche en l'absence d'erreur
        try
        {
          //winfo = windarea.getWindInfo2(LonLat.lat, LonLat.lon, this.time, wante, wpost);
          //this.drawWind(ctx, p.x, p.y, winfo);

          let self = this;
          MI = GribMgr.WindAtPointInTime(this._Time, y, x
            /*,
                      InCallBack ? null : function()
                      {
                        self._update(true, x, y);
                      }*/
          );

          if (MI)
          {
            let LatLng = L.latLng(y, x);
            let p = map.project(LatLng, zoom);
            this._drawWind(ctx, p.x - p0.x, p.y - p0.y, zoom, MI.Speed, MI.Heading);
          }
          else
          {
            MissedQueue = true;
          }
        }
        catch (error)
        {
          if (ErrorCatching > 0)
          {
            console.log('_DrawWindArea ' + x + " / " + y + " / <br>" + error);
            ErrorCatching -= 1;
          }

        }

      }
    }

    ctx.fillStyle = '#620062';
    for (let index in this.Strings)
    {
      if (this.Strings[index])
      {
        let S = this.Strings[index];
        ctx.fillText(S[0],S[1],S[2]);
      }
    }

    if (MissedQueue)
    {
      setTimeout(this._update.bind(this), 250);
    }

    //let EndTick = new Date().getTime();
    //console.log("GribMap Update in "+ (EndTick-StartTick)+" µs");
  },
  _drawWind: function(context, x, y, z, WindSpeed, WindHeading)
  {
    let YOffset = this._drawWindTriangle(context, x, y, WindSpeed, WindHeading);
    //context.fillStyle = '#620062';
    this._drawWindText(context, x, YOffset + 2, WindSpeed, WindHeading);
  },
  // draw wind information around the arrow
  // parameters:
  // context, the canvas context
  // x, y, the coordinates in the window
  // wspeed, wheading, wind speed and wind heading
  _drawWindText: function(context, x, y, WindSpeed, WindHeading)
  {
    let text_x = x;
    let text_y = y;
    let TextString = '?? / ???';

    if (WindSpeed || WindHeading)
    {
      if (WindHeading > 90.0 && WindHeading < 270.0)
      {
        //  text_y +=10;
        text_y += 13 + 5 * Math.cos(WindHeading * Math.PI / 180.0);
      }
      else
      {
        //  text_y -=5;
        text_y += 7 - 5 * Math.cos(WindHeading * Math.PI / 180.0);
      }
      TextString = String(RoundPow(WindSpeed, 1));
      TextString += "/";
      TextString += RoundPow(WindHeading, 1);
      TextString += "°";

    }

    if (!this.XOffset)
    {
      this.XOffset = context.measureText("88.0 / 888.8").width / 2;
    }
    //let xoffset = context.measureText(TextString).width / 2;
    this.Strings.push([TextString, text_x - this.XOffset, text_y])
    //context.fillText(TextString, text_x - this.XOffset, text_y);
    //console.log("Drawing "+x+"/"+y+" "+TextString);
  },
  _drawWindTriangle: function(context, x, y, WindSpeed, WindHeading)
  {
    let a, b, c, bary, offset;
    let wheading;
    let wspdlog;

    if (!WindHeading && !WindSpeed)
    {
      return 0;
    }


    let windarrow_minsize = 2; // FIXME external constants ?
    let windarrow_minwidth = 0;

    wspdlog = Math.log(WindSpeed + 1);
    wheading = (WindHeading + 180.0) % 360.0;

    a = new Pixel(x, y);
    b = new Pixel(x, y);
    c = new Pixel(x, y);

    a.moveByPolar(windarrow_minsize + wspdlog * 3.0, wheading);
    b.moveByPolar(windarrow_minwidth + wspdlog * 2.0, wheading - 135.0);
    c.moveByPolar(windarrow_minwidth + wspdlog * 2.0, wheading + 135.0);

    bary = new Pixel((a.x + b.x + c.x) / 3, (a.y + b.y + c.y) / 3);
    offset = new Pixel(x - bary.x, y - bary.y);
    a.moveBy(offset);
    b.moveBy(offset);
    c.moveBy(offset);

    let color = this.windSpeedToColor(WindSpeed);
    context.fillStyle = color;
    if (WindSpeed < 2)
    {
      context.strokeStyle = 0;
    }
    else
    {
      context.strokeStyle = color;
    }

    context.beginPath();
    context.moveTo(a.x, a.y);
    context.lineTo(b.x, b.y);
    context.lineTo(c.x, c.y);
    context.fill();
    context.stroke();
    context.closePath();
    let RetY = Math.max(a.y, b.y, c.y);
    return RetY;
  },
  // return the color based on the wind speed
  // parameters:
  // wspeed: the wind speed.
  windSpeedToColor: function(wspeed)
  {
    let Beaufort = GribMgr.GetBeaufort(wspeed);

    return BeaufortColors[Beaufort];
  },
  _reset: function()
  {
    var topLeft = this._map.containerPointToLayerPoint([0, 0]);
    L.DomUtil.setTransform(this._canvas, topLeft, 1);

    var size = this._map.getSize();

    if (this._width !== size.x)
    {
      this._canvas.width = size.x;
      this._width = size.x;
      //this._CheckDensity();
    }
    if (this._height !== size.y)
    {
      this._canvas.height = size.y;
      this._height = size.y;
      //this._CheckDensity();
    }

    this._draw();
  },
  _animateZoom: function(e)
  {
    var scale = this._map.getZoomScale(e.zoom),
      offset = this._map._getCenterOffset(e.center)._multiplyBy(-scale).subtract(this._map._getMapPanePos());

    if (L.DomUtil.setTransform)
    {
      L.DomUtil.setTransform(this._canvas, offset, scale);
    }
    else
    {
      this._canvas.style[L.DomUtil.TRANSFORM] = L.DomUtil.getTranslateString(offset) + ' scale(' + scale + ')';
    }
  },
});