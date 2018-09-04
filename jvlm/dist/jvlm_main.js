var MAP_OP_SHOW_SEL = 0;


var VLM2Prefs = new PrefMgr();

VLM2Prefs.Init();

function LoadLocalPref(PrefName, PrefDfaultValue)
{
  let ret = store.get(PrefName);
  if (typeof ret === "undefined")
  {
    ret = PrefDfaultValue;
  }

  return ret;
}

function PrefMgr()
{
  this.MapPrefs = new MapPrefs();
  this.CurTheme = "bleu-noir";

  this.MapPrefs = new MapPrefs();

  this.Init = function()
  {
    this.MapPrefs.Load();
    this.Load();
  };

  this.Load = function()
  {
    if (store.enabled)
    {
      this.CurTheme = LoadLocalPref('CurTheme', "bleu-noir");
    }
  };

  this.Save = function()
  {
    if (store.enabled)
    {
      store.set('ColorTheme', this.CurTheme);
    }

    this.MapPrefs.Save();
  };

  this.UpdateVLMPrefs = function(p)
  {
    switch (p.mapOpponents)
    {
      case "mylist":
      case "mapselboats":
      case "NULL":
      case "null":
      case "all":
        this.MapPrefs.MapOppShow = this.MapPrefs.MapOppShowOptions.ShowSel;
        break;

      case "meandtop10":
        this.MapPrefs.MapOppShow = this.MapPrefs.MapOppShowOptions.ShowTop10;
        break;

      case "my10opps":
        this.MapPrefs.MapOppShow = this.MapPrefs.MapOppShowOptions.Show10Around;
        break;

      case "my5opps":
        this.MapPrefs.MapOppShow = this.MapPrefs.MapOppShowOptions.Show5Around;
        break;

      case "maponlyme":
        this.MapPrefs.MapOppShow = this.MapPrefs.MapOppShowOptions.Show5Around;
        break;

      case "myboat":
        this.MapPrefs.MapOppShow = this.MapPrefs.MapOppShowOptions.ShowMineOnly;
        break;

      default:
        VLMAlertDanger("unexepected mapping option : " + p.mapOpponents);
    }
  };

}

function MapPrefs()
{
  this.ShowReals = true; // Do we show reals?
  this.ShowOppNames = true; // Do we show opponents names?
  this.MapOppShow = null; // Which opponents do we show on the map
  this.MapOppShowOptions = {
    ShowSel: 0,
    ShowMineOnly: 1,
    Show5Around: 2,
    ShowTop10: 3,
    Show10Around: 4
  };
  this.WindArrowsSpacing = 64; // Spacing steps for wind arrow drawing
  this.MapZoomLevel = 4;
  this.PolarVacCount = 12; // How many vacs for drawing the polar line
  this.UseUTC = false; // USe local of UTC time format for display
  this.EstTrackMouse = false;
  this.TrackEstForecast = true;
  this.ShowTopCount = 50;

  this.Load = function()
  {
    if (store.enabled)
    {
      this.ShowReals = LoadLocalPref('#ShowReals', true);
      this.ShowOppNames = LoadLocalPref("#ShowOppNames",false);
      this.MapZoomLevel = LoadLocalPref("#MapZoomLevel", 4);
      this.UseUTC = LoadLocalPref("#UseUTC", false);
      this.EstTrackMouse = LoadLocalPref("#EstTrackMouse",true);
      this.TrackEstForecast = LoadLocalPref("#TrackEstForecast",false);
      this.PolarVacCount = LoadLocalPref("#PolarVacCount", 12);
      if (!this.PolarVacCount)
      {
        // Fallback if invalid value is stored
        this.PolarVacCount = 12;
      }
      this.ShowTopCount = LoadLocalPref('ShowTopCount', 50);
    }
  };

  this.Save = function()
  {
    if (store.enabled)
    {
      store.set("#ShowReals", this.ShowReals);
      store.set("#ShowOppNames", this.ShowOppName);
      store.set("#MapZoomLevel", this.MapZoomLevel);
      store.set("#PolarVacCount", this.PolarVacCount);
      store.set("#UseUTC", this.UseUTC);
      store.set("#TrackEstForecast", this.TrackEstForecast);
      store.set("#EstTrackMouse", this.EstTrackMouse);
      store.set("ShowTopCount", this.ShowTopCount);
    }

    let MapPrefVal = "mapselboats";
    switch (this.MapOppShow)
    {
      case this.MapOppShowOptions.ShowMineOnly:
        MapPrefVal = "myboat";
        break;

      case this.MapOppShowOptions.Show5Around:
        MapPrefVal = "my5opps";
        break;

      case this.MapOppShowOptions.ShowTop10:
        MapPrefVal = "meandtop10";
        break;

      case this.MapOppShowOptions.Show10Around:
        MapPrefVal = "my10opps";
        break;


    }

    var NewVals = {
      mapOpponents: MapPrefVal
    };
    if (typeof _CurPlayer !== "undefined")
    {
      UpdateBoatPrefs(_CurPlayer.CurBoat,
      {
        prefs: NewVals
      });
    }
  };

  this.GetOppModeString = function(Mode)
  {
    switch (Mode)
    {
      case this.MapOppShowOptions.ShowSel:
        return GetLocalizedString("mapselboats");

      case this.MapOppShowOptions.ShowMineOnly:
        return GetLocalizedString("maponlyme");

      case this.MapOppShowOptions.Show5Around:
        return GetLocalizedString("mapmy5opps");

      case this.MapOppShowOptions.ShowTop10:
        return GetLocalizedString("mapmeandtop10");

      case this.MapOppShowOptions.Show10Around:
        return GetLocalizedString("mapmy10opps");

      default:
        return Mode;
    }
  };

}
//
// Class to handle autopilot orders and services
//

function AutoPilotOrder(Boat, Number)
{
  // Default construction
  this.Date = new Date(new Date().getTime() - new Date().getTime() % (5 * 60 * 1000) + 5 * 1.5 * 60 * 1000);
  this.PIM = PM_HEADING;
  this.PIP_Value = 0;
  this.PIP_Coords = new VLMPosition(0, 0);
  this.PIP_WPAngle = -1;
  this.ID = -1;

  if (typeof Boat !== 'undefined' && Boat)
  {
    if (!(Number - 1 in Boat.VLMInfo.PIL))
    {
      alert("Invalid Pilototo order number. Report error to devs.");
      return;
    }
    var PilOrder = Boat.VLMInfo.PIL[Number - 1];

    this.Date = new Date(parseInt(PilOrder.TTS, 10) * 1000);
    this.PIM = parseInt(PilOrder.PIM, 10);
    this.ID = parseInt(PilOrder.TID, 10);

    switch (this.PIM)
    {
      case PM_ANGLE:
      case PM_HEADING:
        this.PIP_Value = parseInt(PilOrder.PIP, 10);
        break;
      case PM_ORTHO:
      case PM_VMG:
      case PM_VBVMG:
        var l1 = PilOrder.PIP.split(",");
        var l2 = l1[1].split("@");
        this.PIP_Coords.Lat.Value = parseFloat(l1[0]);
        this.PIP_Coords.Lon.Value = parseFloat(l2[0]);
        this.PIP_WPAngle = parseFloat(l2[1]);
        break;
    }
  }

  this.GetOrderDateString = function()
  {
    return this.Date.getDate() + "/" + (this.Date.getMonth() + 1) + "/" + this.Date.getFullYear();
  };

  this.GetOrderTimeString = function()
  {
    return this.Date.getHours() + ":" + this.Date.getMinutes() + ":15";
  };

  this.GetPIMString = function()
  {
    switch (this.PIM)
    {
      case PM_HEADING:
        return GetLocalizedString("autopilotengaged");
      case PM_ANGLE:
        return GetLocalizedString("constantengaged");
      case PM_ORTHO:
        return GetLocalizedString("orthodromic");
      case PM_VMG:
        return "VMG";
      case PM_VBVMG:
        return "VBVMG";
    }
  };

  this.GetPIPString = function()
  {
    switch (this.PIM)
    {
      case PM_HEADING:
      case PM_ANGLE:
        return this.PIP_Value;
      case PM_ORTHO:
      case PM_VMG:
      case PM_VBVMG:
        return this.PIP_Coords.GetVLMString() + "@" + PIP_WPAngle;
    }
  };
}

function HandleSendAPUpdate(e)
{
  var verb = 'add';

  if ((typeof _CurAPOrder === "undefined") || (!_CurAPOrder))
  {
    return;
  }

  var OrderData = {
    idu: _CurPlayer.CurBoat.IdBoat,
    tasktime: Math.round(_CurAPOrder.Date / 1000),
    pim: _CurAPOrder.PIM
  };


  if (_CurAPOrder.ID !== -1)
  {
    verb = "update";
    OrderData.taskid = _CurAPOrder.ID;
  }

  switch (_CurAPOrder.PIM)
  {
    case PM_HEADING:
    case PM_ANGLE:
      OrderData.pip = _CurAPOrder.PIP_Value;
      break;
    case PM_ORTHO:
    case PM_VMG:
    case PM_VBVMG:
      OrderData.pip = {};
      OrderData.pip.targetlat = _CurAPOrder.PIP_Coords.Lat.Value;
      OrderData.pip.targetlong = _CurAPOrder.PIP_Coords.Lon.Value;
      OrderData.pip.targetandhdg = (_CurAPOrder.PIP_WPAngle === -1 ? null : _CurAPOrder.PIP_WPAngle);
      break;
  }

  $.post('/ws/boatsetup/pilototo_' + verb + '.php',
    "parms=" + JSON.stringify(OrderData),
    function(ap_return)
    {
      if (ap_return.success)
      {
        // Order Success
        RefreshCurrentBoat(false, true, 'AutoPilot');
      }
      else
      {
        alert(ap_return.error.msg);
      }
    }
  );
}

function HandleAPFieldChange(e)
{
  var Target = e.target;

  if (typeof Target.attributes.id === "undefined")
  {
    return;
  }

  switch (Target.attributes.id.value)
  {
    case "AP_PIP":
      _CurAPOrder.PIP_Value = parseFloat(Target.value);
      if (_CurAPOrder.PIP_Value.toString() !== Target.Value)
      {
        Target.value = _CurAPOrder.PIP_Value.toString();
      }
      break;

    case "AP_WPLat":
      CheckFloatInput(_CurAPOrder.PIP_Coords.Lat, Target);
      break;

    case "AP_WPLon":
      CheckFloatInput(_CurAPOrder.PIP_Coords.Lon, Target);
      break;

    case "AP_WPAt":
      var Stub = {}; // beurk beurk
      Stub.Value = _CurAPOrder.PIP_WPAngle;
      CheckFloatInput(Stub, Target);
      _CurAPOrder.PIP_WPAngle = Stub.Value;
      break;
  }
}

function CheckFloatInput(DestObj, SrcObj)
{
  var ObjValue;
  if (typeof DestObj === "object")
  {
    DestObj.Value = parseFloat(SrcObj.value);
    ObjValue = DestObj.Value;
  }
  else
  {
    DestObj = parseFloat(SrcObj.value);
    ObjValue = DestObj;
  }
  if (ObjValue.toString() !== SrcObj.Value)
  {
    SrcObj.value = ObjValue.toString();
  }
}
/* Contributors : paparazzia@gmail.com, ...
 * Code is licencesed under the AGPL license
 * See Copying file
 */

/** 
 * @requires OpenLayers/ControlSwitch.js
 */



/* Class: OpenLayers.Control.ControlSwitch
 * Inherits from:
 *  - <OpenLayers.Control>
 */

OpenLayers.Control.ControlSwitch =
  OpenLayers.Class(OpenLayers.Control,
  {

    label: "controlswitch",

    /**
     * APIProperty: roundedCorner
     * {Boolean} If true the Rico library is used for rounding the corners
     */
    roundedCorner: true,

    /**  
     * APIProperty: roundedCornerColor
     * {String} The color of the rounded corners, only applies if roundedCorner
     *     is true, defaults to "darkblue".
     */
    roundedCornerColor: "darkblue",

    // DOM Elements

    /** 
     * Property: baseDiv
     * {DOMElement}
     */
    baseDiv: null,

    /** 
     * Property: minimizeDiv
     * {DOMElement} 
     */
    minimizeDiv: null,

    /** 
     * Property: maximizeDiv
     * {DOMElement} 
     */
    maximizeDiv: null,

    /**
     * Constructor: OpenLayers.Control.ControlSwitch
     * 
     * Parameters:
     * options - {Object}
     */
    initialize: function(options)
    {
      OpenLayers.Control.prototype.initialize.apply(this, arguments);
    },

    /**
     * APIMethod: destroy 
     */
    destroy: function()
    {

      OpenLayers.Event.stopObservingElement(this.div);

      OpenLayers.Event.stopObservingElement(this.minimizeDiv);
      OpenLayers.Event.stopObservingElement(this.maximizeDiv);

      OpenLayers.Control.prototype.destroy.apply(this, arguments);
    },

    /**
     * Method: draw
     *
     * Returns:
     * {DOMElement} A reference to the DIV DOMElement containing the 
     *     switcher tabs.
     */
    draw: function()
    {
      OpenLayers.Control.prototype.draw.apply(this);

      // create layout divs
      this.loadContents();

      // set mode to minimize
      if (!this.outsideViewport)
      {
        this.minimizeControl();
      }

      // populate div with current info
      this.redraw();

      return this.div;
    },


    /** 
     * Method: redraw
     *
     * Returns: 
     * {DOMElement} A reference to the DIV DOMElement containing the control
     */
    redraw: function()
    {
      //if the state hasn't changed since last redraw, no need 
      // to do anything. Just return the existing div.
      /*        if (!this.checkRedraw()) { 
                  return this.div; 
              } */

      this.baseDiv.innerHTML = "";
      this.drawBaseDiv();
      /*
              OpenLayers.Event.observe(labelSpan, "click", 
                  OpenLayers.Function.bindAsEventListener(this.onInputClick,
                                                          context)
              );
      */
      return this.div;
    },

    drawBaseDiv: function()
    {
      this.baseDiv.innerHTML = "Base Class, Control Switch";
    },


    /** 
     * Method: maximizeControl
     * Set up the labels and divs for the control
     * 
     * Parameters:
     * e - {Event} 
     */
    maximizeControl: function(e)
    {

      // set the div's width and height to empty values, so
      // the div dimensions can be controlled by CSS
      this.div.style.width = "";
      this.div.style.height = "";

      this.showControls(false);

      if (e != null)
      {
        OpenLayers.Event.stop(e);
      }
    },

    /** 
     * Method: minimizeControl
     * Hide all the contents of the control, shrink the size, 
     *     add the maximize icon
     *
     * Parameters:
     * e - {Event} 
     */
    minimizeControl: function(e)
    {

      // to minimize the control we set its div's width
      // and height to 0px, we cannot just set "display"
      // to "none" because it would hide the maximize
      // div
      this.div.style.width = "0px";
      this.div.style.height = "0px";

      this.showControls(true);

      if (e != null)
      {
        OpenLayers.Event.stop(e);
      }
    },

    /**
     * Method: showControls
     * Hide/Show all LayerSwitcher controls depending on whether we are
     *     minimized or not
     * 
     * Parameters:
     * minimize - {Boolean}
     */
    showControls: function(minimize)
    {

      this.maximizeDiv.style.display = minimize ? "" : "none";
      this.minimizeDiv.style.display = minimize ? "none" : "";

      this.baseDiv.style.display = minimize ? "none" : "";
    },

    /** 
     * Method: loadContents
     * Set up the labels and divs for the control
     */
    loadContents: function()
    {

      //configure main div

      OpenLayers.Event.observe(this.div, "mouseup",
        OpenLayers.Function.bindAsEventListener(this.mouseUp, this));
      OpenLayers.Event.observe(this.div, "click",
        this.ignoreEvent);
      OpenLayers.Event.observe(this.div, "mousedown",
        OpenLayers.Function.bindAsEventListener(this.mouseDown, this));
      OpenLayers.Event.observe(this.div, "dblclick", this.ignoreEvent);

      this.baseDiv = document.createElement("div");
      this.baseDiv.id = this.id + "_baseDiv";
      OpenLayers.Element.addClass(this.baseDiv, "baseDiv");

      this.div.appendChild(this.baseDiv);

      if (this.roundedCorner)
      {
        OpenLayers.Rico.Corner.round(this.div,
        {
          corners: "tl bl",
          bgColor: "transparent",
          color: this.roundedCornerColor,
          blend: false
        });
        OpenLayers.Rico.Corner.changeOpacity(this.baseDiv, 0.75);
      }

      let imgLocation = OpenLayers.Util.getImagesLocation();
      let sz = new OpenLayers.Size(18, 18);

      // maximize button div
      let img = imgLocation + 'layer-switcher-maximize.png';
      this.maximizeDiv = OpenLayers.Util.createAlphaImageDiv(
        "OpenLayers_Control_MaximizeDiv",
        null,
        sz,
        img,
        "absolute");
      OpenLayers.Element.addClass(this.maximizeDiv, "maximizeDiv");
      this.maximizeDiv.style.display = "none";
      OpenLayers.Event.observe(this.maximizeDiv, "click",
        OpenLayers.Function.bindAsEventListener(this.maximizeControl, this)
      );

      this.div.appendChild(this.maximizeDiv);

      // minimize button div
      img = imgLocation + 'layer-switcher-minimize.png';
      sz = new OpenLayers.Size(18, 18);
      this.minimizeDiv = OpenLayers.Util.createAlphaImageDiv(
        "OpenLayers_Control_MinimizeDiv",
        null,
        sz,
        img,
        "absolute");
      OpenLayers.Element.addClass(this.minimizeDiv, "minimizeDiv");
      this.minimizeDiv.style.display = "none";
      OpenLayers.Event.observe(this.minimizeDiv, "click",
        OpenLayers.Function.bindAsEventListener(this.minimizeControl, this)
      );

      this.div.appendChild(this.minimizeDiv);
    },

    /** 
     * Method: ignoreEvent
     * 
     * Parameters:
     * evt - {Event} 
     */
    ignoreEvent: function(evt)
    {
      OpenLayers.Event.stop(evt);
    },

    /** 
     * Method: mouseDown
     * Register a local 'mouseDown' flag so that we'll know whether or not
     *     to ignore a mouseUp event
     * 
     * Parameters:
     * evt - {Event}
     */
    mouseDown: function(evt)
    {
      this.isMouseDown = true;
      this.ignoreEvent(evt);
    },

    /** 
     * Method: mouseUp
     * If the 'isMouseDown' flag has been set, that means that the drag was 
     *     started from within the LayerSwitcher control, and thus we can 
     *     ignore the mouseup. Otherwise, let the Event continue.
     *  
     * Parameters:
     * evt - {Event} 
     */
    mouseUp: function(evt)
    {
      if (this.isMouseDown)
      {
        this.isMouseDown = false;
        this.ignoreEvent(evt);
      }
    },

    CLASS_NAME: "OpenLayers.Control.ControlSwitch"
  });


function BoatEstimate(Est)
{
  this.Position = null;
  this.Date = null;
  this.PrevDate = null;
  this.Mode = null;
  this.Value = null;
  this.Meteo = null;
  this.CurWP = new VLMPosition(0,0);
  this.HdgAtWP = -1;
  this.RaceWP = 1;
  this.Heading = null;
  
  if (typeof Est!== "undefined" && Est)
  {
    this.Position =  new VLMPosition(Est.Position.Lon.Value, Est.Position.Lat.Value);
    this.Date = new Date(Est.Date);
    this.PrevDate = new Date(Est.PrevDate);
    this.Mode = Est.Mode;
    this.Value = Est.Value;

    if (typeof Est.Meteo !== "undefined" && Est.Meteo)
    {
      this.Meteo = new WindData(
                        {
                          Speed : Est.Meteo.Speed,
                          Heading : Est.Meteo.Heading
                        });
    }
    this.CurWP = Est.CurWP;
    this.RaceWP = Est.RaceWP;
    this.Heading = Est.Heading;
  }

}

function Estimator(Boat)
{
  if (typeof Boat === 'undefined' || ! Boat)
  {
    throw "Boat must exist for tracking....";
  }

  this.Boat = Boat;
  this.MaxVacEstimate = 0;      
  this.CurEstimate = new BoatEstimate();
  this.Running = false;
  this.EstimateTrack=[];
  this.EstimatePoints=[];
  this.ProgressCallBack = null;
  this.ErrorCount = 0;
  this.EstimateMapFeatures = []; // Current estimate position
  
  this.Stop = function ()
  {
    // Stop the estimator if Running
    if (this.Running)
    {
      this.Running=false;
      this.ReportProgress(true);
      
      //Estimate complete, DrawBoat track
      DrawBoat(this.Boat);
      
    }

    return;
  };

  this.Start = function(ProgressCallBack)
  {
    this.ProgressCallBack = ProgressCallBack;
    if (this.Running)
    {
      return;
    }

    this.Running = true;
    GribMgr.Init();

    if (typeof this.Boat.VLMInfo === "undefined")
    {
      this.Stop();
      return;
    }

    this.CurEstimate.Position = new VLMPosition(this.Boat.VLMInfo.LON,this.Boat.VLMInfo.LAT);
    this.CurEstimate.PrevDate = new Date (this.Boat.VLMInfo.LUP*1000);
    this.CurEstimate.Date = new Date (this.Boat.VLMInfo.LUP*1000 + 1000* this.Boat.VLMInfo.VAC);
    if (this.CurEstimate.Date < new Date())
    {
      if (typeof this.Boat.RaceInfo === "undefined")
      {
        // Use cur date for estimate before start
        this.CurEstimate.Date = new Date();
      }
      else
      {
        // Set Start to 1st VAC after start +6s 
        let StartDate = new Date(parseInt(this.Boat.RaceInfo.deptime,10)*1000+ 1000* this.Boat.VLMInfo.VAC+6000);
        this.CurEstimate.Date = StartDate;
        this.CurEstimate.PrevDate =  new Date(parseInt(this.Boat.RaceInfo.deptime,10)*1000);
      }
      
    }


    
    this.CurEstimate.Mode = parseInt(this.Boat.VLMInfo.PIM,10);
    this.CurEstimate.CurWP = new VLMPosition(this.Boat.VLMInfo.WPLON, this.Boat.VLMInfo.WPLAT);
    this.CurEstimate.HdgAtWP = parseFloat(this.Boat.VLMInfo["H@WP"]);
    this.CurEstimate.RaceWP = parseInt(this.Boat.VLMInfo.NWP,10);

    if ((this.CurEstimate.Mode == PM_HEADING) || (this.CurEstimate.Mode == PM_ANGLE))
    {
      this.CurEstimate.Value = parseFloat(this.Boat.VLMInfo.PIP);
    }

    this.CurEstimate.PilOrders = [];
    for (let index in this.Boat.VLMInfo.PIL)
    {
      var Order =  this.Boat.VLMInfo.PIL[index];
      var NewOrder = {PIP: Order.PIP,
                      PIM: Order.PIM,
                      STS: Order.STS,
                      TTS: Order.TTS
                    };
      this.CurEstimate.PilOrders.push(NewOrder);
    }
    
    this.EstimateTrack=[];
    this.EstimatePoints=[];

    this.MaxVacEstimate = new Date(GribMgr.MaxWindStamp); 
    this.ReportProgress(false);
    // Add Start point to estimate track
    this.EstimateTrack.push(new BoatEstimate( this.CurEstimate));
    this.ErrorCount = 0;
    setTimeout(this.Estimate.bind(this),0);
    
  };

  this.Estimate = function(Boat)
  {
      
    if (!this.Running || this.CurEstimate.Date >= this.MaxVacEstimate)
    {
      this.Stop();
      return;
    }

    let MI;
    do
    {
      MI = GribMgr.WindAtPointInTime(this.CurEstimate.PrevDate,this.CurEstimate.Position.Lat.Value,this.CurEstimate.Position.Lon.Value);
      
      if (!MI)
      {
        if (this.ErrorCount > 10)
        {
          this.Stop();
          return;
        }
        this.ErrorCount ++;
        setTimeout(this.Estimate.bind(this),1000);
        return;
      }

      this.ErrorCount=0;

      if (isNaN(MI.Speed))
      {
        var Bkpt=1;
        alert("Looping on NaN WindSpeed");
      }
    } while (isNaN(MI.Speed));
    
    this.CurEstimate.Meteo = MI;

    // Ok, got meteo, move the boat, and ask for new METEO

    // Check if an update is required from AutoPilot;
    for (let index in this.CurEstimate.PilOrders)
    {
      var Order = this.CurEstimate.PilOrders[index];

      if (Order && Order.STS === "pending")
      {
        var OrderTime = new Date(parseInt(Order.TTS,10)*1000.0);

        if (OrderTime <= this.CurEstimate.Date)
        {
          // Use pilot order to update the current Mode
          this.CurEstimate.Mode = parseInt(Order.PIM,10);

          switch(this.CurEstimate.Mode)
          {
            case PM_ANGLE:
            case PM_HEADING:
              this.CurEstimate.Value = parseFloat(Order.PIP);
              break;

            case PM_ORTHO:
            case PM_VMG:
            case PM_VBVMG:
              let p1 = Order.PIP.split("@");
              let Dest = p1[0].split(",");
              this.CurEstimate.CurWP = new VLMPosition(parseFloat(Dest[1]),parseFloat(Dest[0]));
              this.CurEstimate.HdgAtWP = parseFloat(p1[1]);
              break;
              
            default :
              alert("unsupported pilototo mode");
              this.Stop();
              return;
          }


          this.CurEstimate.PilOrders[index]=null;
          break;
        }
      }
      
    }

    let Hdg = this.CurEstimate.Value;
    let Speed = 0;
    let NewPos = null;
    let Dest = null;
    switch (this.CurEstimate.Mode)
    {
      case PM_ANGLE:  // This goes just before Heading, since we only update the Hdg, rest is the same
        // Going fixed angle, get bearing, compute speed, move
        Hdg = MI.Heading+this.CurEstimate.Value;
        Speed = PolarsManager.GetBoatSpeed(this.Boat.VLMInfo.POL,MI.Speed,MI.Heading,Hdg);
        NewPos = this.CurEstimate.Position.ReachDistLoxo(Speed/3600.0*this.Boat.VLMInfo.VAC, Hdg);
        break;    

      case PM_HEADING:
        // Going fixed bearing, get boat speed, move along loxo
        
        Speed = PolarsManager.GetBoatSpeed(this.Boat.VLMInfo.POL,MI.Speed,MI.Heading,Hdg);
        NewPos = this.CurEstimate.Position.ReachDistLoxo(Speed/3600.0*this.Boat.VLMInfo.VAC, Hdg);
        
        break;

      case PM_ORTHO:
      case PM_VMG:
      case PM_VBVMG:
        Dest = this.GetNextWPCoords(this.CurEstimate);
        
        if (this.CurEstimate.Mode == PM_ORTHO)
        {
          Hdg = this.CurEstimate.Position.GetOrthoCourse(Dest);
          Speed = PolarsManager.GetBoatSpeed(this.Boat.VLMInfo.POL,MI.Speed,MI.Heading,Hdg);
          NewPos = this.CurEstimate.Position.ReachDistOrtho(Speed/3600.0*this.Boat.VLMInfo.VAC, Hdg);          
        }
        else
        {
          if (this.CurEstimate.Mode == PM_VMG)
          {
            Hdg = PolarsManager.GetVMGCourse(this.Boat.VLMInfo.POL,MI.Speed,MI.Heading,this.CurEstimate.Position, Dest);
          }
          else
          {
            Hdg = PolarsManager.GetVBVMGCourse(this.Boat.VLMInfo.POL,MI.Speed,MI.Heading,this.CurEstimate.Position, Dest);
          }

          Speed = PolarsManager.GetBoatSpeed(this.Boat.VLMInfo.POL,MI.Speed,MI.Heading,Hdg);
          NewPos = this.CurEstimate.Position.ReachDistLoxo(Speed/3600.0*this.Boat.VLMInfo.VAC, Hdg);
        
        }

        this.CheckWPReached(Dest,this.CurEstimate.Position,NewPos);
        break;


      default:
        throw "Unsupported pilotmode for estimate..." + this.CurEstimate.Mode;
    }

    console.log(this.CurEstimate.Date + this.CurEstimate.Position.ToString(true) + "=> " + NewPos.Lon.ToString(true) + " " + NewPos.Lat.ToString(true) + " Wind : " + RoundPow(MI.Speed,4) + "@" + RoundPow(MI.Heading,4) + " Boat " + RoundPow(Speed,4) + "kts" + RoundPow(((Hdg+360.0)%360.0),4));

    var RaceComplete = false;

    if (this.CheckGateValidation(NewPos))
    {
      RaceComplete = this.GetNextRaceWP();
    }

    this.CurEstimate.Heading = Hdg;
    this.CurEstimate.Position = NewPos;
    this.EstimateTrack.push(new BoatEstimate( this.CurEstimate));

    // Start next point computation....
    this.CurEstimate.PrevDate=this.CurEstimate.Date;
    this.CurEstimate.Date = new Date((this.CurEstimate.Date/1000+this.Boat.VLMInfo.VAC)*1000);
    if (RaceComplete)
    {
      this.Stop();
      return;
    }
    else
    {
      setTimeout(this.Estimate.bind(this),0);
      this.ReportProgress(false);
    }
  };

  this.GetNextRaceWP = function()
  {
    var NbWP = Object.keys(this.Boat.RaceInfo.races_waypoints).length;
    if ( this.CurEstimate.RaceWP === NbWP)
    {
      //Race Complete
      return true;
    }
    for (i = this.CurEstimate.RaceWP+1; i <= NbWP; i++)
    {
        if (!(this.Boat.RaceInfo.races_waypoints[i].wpformat & WP_ICE_GATE))
        {
          this.CurEstimate.RaceWP = i;
          break;
        }
    }
    return false;
  };

  this.CheckGateValidation = function( NewPos)
  {
    let GateSeg = this.GetNextGateSegment(this.CurEstimate);
    let Gate = this.Boat.RaceInfo.races_waypoints[this.CurEstimate.RaceWP];
    let CurSeg = {P1 : this.CurEstimate.Position, P2 : NewPos};

    let RetVal =  VLMMercatorTransform.SegmentsIntersect(GateSeg,CurSeg);
    return RetVal;
    
  };

  this.CheckWPReached = function (Dest,PrevPos,NewPos)
  {
    if (!this.CurEstimate.CurWP.Lat.value && !this.CurEstimate.CurWP.Lon.Value)
    {
      // AutoWP, nothing to do
      return;
    }
    // VLM REF from CheckWayPointCrossing
    // On lache le WP perso si il est plus pres que la distance parcourue à la dernière VAC.
    //if ( $distAvant < $fullUsersObj->boatspeed*$fullUsersObj->hours || $distApres < $fullUsersObj->boatspeed*$fullUsersObj->hours ) {
    let BeforeDist = Dest.GetOrthoDist(PrevPos);
    let AfterDist = Dest.GetOrthoDist(NewPos);
    let CurDist = PrevPos.GetOrthoDist(NewPos);
    if ((BeforeDist < CurDist)|| AfterDist < CurDist)
    {
      // WP Reached revert to AutoWP
      this.CurEstimate.CurWP = new VLMPosition(0,0);
      if (this.CurEstimate.HdgAtWP != -1)
      {
        this.CurEstimate.Mode = PM_HEADING;
        this.CurEstimate.Value = this.CurEstimate.HdgAtWP;

      }
      console.log("WP Reached");
    }
    
  };

  this.GetNextWPCoords = function (Estimate)
  {
    if (Estimate.CurWP.Lat.value || Estimate.CurWP.Lon.Value)
    {
      return Estimate.CurWP;
    }
    else
    {
     return this.Boat.GetNextWPPosition (Estimate.RaceWP, Estimate.Position, Estimate.CurWP);
    }
  };

  this.GetNextGateSegment = function(Estimate)
  {
    return this.Boat.GetNextGateSegment(Estimate.RaceWP);
  };

  this.ReportProgress = function (Complete)
  {
    let Pct = 0;

    if (this.ProgressCallBack)
    {
      if (!Complete)
      {
        if (this.EstimateTrack.length > 1)
        {
          Pct =  (this.MaxVacEstimate - this.EstimateTrack[this.EstimateTrack.length - 1].Date)/ (this.MaxVacEstimate - this.EstimateTrack[0].Date);
          Pct = RoundPow((1 - Pct)*100.0,1);
        }
      }
      this.ProgressCallBack(Complete,Pct, this.CurEstimate.Date);
    }
  };

  this.GetClosestEstimatePoint = function (Param)
  {
    if (Param instanceof VLMPosition)
    {
      return this.GetClosestEstimatePointFromPosition(Param);
    }
    else if (Param instanceof Date)
    {
      return this.GetClosestEstimatePointFromTime(Param);
    }
    else
    {
      return null;
    }
  };

  this.GetClosestEstimatePointFromTime = function (Time)
  {
    if (!Time || !Object.keys(this.EstimateTrack).length)
    {
      return null;
    }

    let Index = 0;
    let Delta;

    for (Index = 0; Index < Object.keys(this.EstimateTrack).length;Index++)
    {
      if (this.EstimateTrack[Index])
      {
        if (Time > this.EstimateTrack[Index].Date)
        {
          Delta = Time - this.EstimateTrack[Index].Date;
        }
        else
        {
          break;
        }
      }
    }

    if (Index< Object.keys(this.EstimateTrack).length)
    {
      let Delta2 = Time - this.EstimateTrack[Index+1].Date;

      if (Math.abs(Delta2)< Math.abs(Delta))
      {
        Index++;
      }
    }

    RetValue = this.EstimateTrack[Index];
    return RetValue;
  };

  this.GetClosestEstimatePointFromPosition = function(Pos)
  {
    if (!Pos)
    {
      return null;
    }

    var Dist = 1e30;
    var index;
    var RetValue = null;

    for (index = 0; index < Object.keys(this.EstimateTrack).length;index++)
    {
      if (this.EstimateTrack[index])
      {
        var d = Pos.GetEuclidianDist2(this.EstimateTrack[index].Position);

        if (d < Dist)
        {
          RetValue = this.EstimateTrack[index];
          Dist=d;
        }
      }
    }

    return RetValue;
  };

  this.ClearEstimatePosition = function(Boat)
  {
    this.ShowEstimatePosition(Boat,null);
  };

  this.ShowEstimatePosition = function(Boat, Estimate)
  {
    // Track Estimate closest point to mousemove
    if (this.EstimateMapFeatures)
    {
      for (let index in this.EstimateMapFeatures)
      {
        if (this.EstimateMapFeatures[index])
        {
          VLMBoatsLayer.removeFeatures(this.EstimateMapFeatures);
        }
      }
      this.EstimateMapFeatures = [];
    }

    if (Estimate && Estimate.Position && Boat.VLMInfo.LON !== Estimate.Position.Lon.Value && Boat.VLMInfo.LAT !== Estimate.Position.Lat.Value)
    {
      let Position = Estimate.Position;
      let EstPos = new OpenLayers.Geometry.Point(Position.Lon.Value, Position.Lat.Value);
      let EstPos_Transformed = EstPos.transform(MapOptions.displayProjection, MapOptions.projection);

      // Estimate point marker
      var Marker=  new OpenLayers.Feature.Vector(
        EstPos_Transformed,
        {},
        { externalGraphic: 'images/target.svg',
          opacity: 0.8, 
          graphicHeight: 48, 
          graphicWidth: 48,
          rotation: Estimate.Heading }
      );
      VLMBoatsLayer.addFeatures(Marker);
      this.EstimateMapFeatures.push(Marker);

      if (typeof Estimate.Meteo !== "undefined")
      {
        var scale = VLM2Prefs.MapPrefs.PolarVacCount;
        var PolarPointList = PolarsManager.GetPolarLine(Boat.VLMInfo.POL, Estimate.Meteo.Speed, DrawBoat, Boat);
        var Polar = [];

        BuildPolarLine(Boat, PolarPointList, Polar, Position, scale, Estimate.Date);
        var BoatPolar = new OpenLayers.Feature.Vector(
          new OpenLayers.Geometry.LineString(Polar),
          {
            "type": "Polar",
            "WindDir": Estimate.Meteo.Heading
          });

        this.EstimateMapFeatures.push(BoatPolar);
        VLMBoatsLayer.addFeatures(BoatPolar);
      }  
    }
  };

}

/*
function HandleEstimatorStart(e)
{
  var e = new Estimator(_CurPlayer.CurBoat);
}
*/

// Copyright 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


// Known Issues:
//
// * Patterns only support repeat.
// * Radial gradient are not implemented. The VML version of these look very
//   different from the canvas one.
// * Clipping paths are not implemented.
// * Coordsize. The width and height attribute have higher priority than the
//   width and height style values which isn't correct.
// * Painting mode isn't implemented.
// * Canvas width/height should is using content-box by default. IE in
//   Quirks mode will draw the canvas using border-box. Either change your
//   doctype to HTML5
//   (http://www.whatwg.org/specs/web-apps/current-work/#the-doctype)
//   or use Box Sizing Behavior from WebFX
//   (http://webfx.eae.net/dhtml/boxsizing/boxsizing.html)
// * Non uniform scaling does not correctly scale strokes.
// * Optimize. There is always room for speed improvements.

// Only add this code if we do not already have a canvas implementation
if (!document.createElement('canvas').getContext)
{

  (function()
  {

    // alias some functions to make (compiled) code shorter
    var m = Math;
    var mr = m.round;
    var ms = m.sin;
    var mc = m.cos;
    var abs = m.abs;
    var sqrt = m.sqrt;

    // this is used for sub pixel precision
    var Z = 10;
    var Z2 = Z / 2;

    var IE_VERSION = +navigator.userAgent.match(/MSIE ([\d.]+)?/)[1];

    /**
     * This funtion is assigned to the <canvas> elements as element.getContext().
     * @this {HTMLElement}
     * @return {CanvasRenderingContext2D_}
     */
    function getContext()
    {
      return this.context_ ||
        (this.context_ = new CanvasRenderingContext2D_(this));
    }

    var slice = Array.prototype.slice;

    /**
     * Binds a function to an object. The returned function will always use the
     * passed in {@code obj} as {@code this}.
     *
     * Example:
     *
     *   g = bind(f, obj, a, b)
     *   g(c, d) // will do f.call(obj, a, b, c, d)
     *
     * @param {Function} f The function to bind the object to
     * @param {Object} obj The object that should act as this when the function
     *     is called
     * @param {*} var_args Rest arguments that will be used as the initial
     *     arguments when the function is called
     * @return {Function} A new function that has bound this
     */
    function bind(f, obj, var_args)
    {
      var a = slice.call(arguments, 2);
      return function()
      {
        return f.apply(obj, a.concat(slice.call(arguments)));
      };
    }

    function encodeHtmlAttribute(s)
    {
      return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
    }

    function addNamespace(doc, prefix, urn)
    {
      if (!doc.namespaces[prefix])
      {
        doc.namespaces.add(prefix, urn, '#default#VML');
      }
    }

    function addNamespacesAndStylesheet(doc)
    {
      addNamespace(doc, 'g_vml_', 'urn:schemas-microsoft-com:vml');
      addNamespace(doc, 'g_o_', 'urn:schemas-microsoft-com:office:office');

      // Setup default CSS.  Only add one style sheet per document
      if (!doc.styleSheets.ex_canvas_)
      {
        var ss = doc.createStyleSheet();
        ss.owningElement.id = 'ex_canvas_';
        ss.cssText = 'canvas{display:inline-block;overflow:hidden;' +
          // default size is 300x150 in Gecko and Opera
          'text-align:left;width:300px;height:150px}';
      }
    }

    // Add namespaces and stylesheet at startup.
    addNamespacesAndStylesheet(document);

    var G_vmlCanvasManager_ = {
      init: function(opt_doc)
      {
        var doc = opt_doc || document;
        // Create a dummy element so that IE will allow canvas elements to be
        // recognized.
        doc.createElement('canvas');
        doc.attachEvent('onreadystatechange', bind(this.init_, this, doc));
      },

      init_: function(doc)
      {
        // find all canvas elements
        var els = doc.getElementsByTagName('canvas');
        for (var i = 0; i < els.length; i++)
        {
          this.initElement(els[i]);
        }
      },

      /**
       * Public initializes a canvas element so that it can be used as canvas
       * element from now on. This is called automatically before the page is
       * loaded but if you are creating elements using createElement you need to
       * make sure this is called on the element.
       * @param {HTMLElement} el The canvas element to initialize.
       * @return {HTMLElement} the element that was created.
       */
      initElement: function(el)
      {
        if (!el.getContext)
        {
          el.getContext = getContext;

          // Add namespaces and stylesheet to document of the element.
          addNamespacesAndStylesheet(el.ownerDocument);

          // Remove fallback content. There is no way to hide text nodes so we
          // just remove all childNodes. We could hide all elements and remove
          // text nodes but who really cares about the fallback content.
          el.innerHTML = '';

          // do not use inline function because that will leak memory
          el.attachEvent('onpropertychange', onPropertyChange);
          el.attachEvent('onresize', onResize);

          var attrs = el.attributes;
          if (attrs.width && attrs.width.specified)
          {
            // TODO: use runtimeStyle and coordsize
            // el.getContext().setWidth_(attrs.width.nodeValue);
            el.style.width = attrs.width.nodeValue + 'px';
          }
          else
          {
            el.width = el.clientWidth;
          }
          if (attrs.height && attrs.height.specified)
          {
            // TODO: use runtimeStyle and coordsize
            // el.getContext().setHeight_(attrs.height.nodeValue);
            el.style.height = attrs.height.nodeValue + 'px';
          }
          else
          {
            el.height = el.clientHeight;
          }
          //el.getContext().setCoordsize_()
        }
        return el;
      }
    };

    function onPropertyChange(e)
    {
      var el = e.srcElement;

      switch (e.propertyName)
      {
        case 'width':
          el.getContext().clearRect();
          el.style.width = el.attributes.width.nodeValue + 'px';
          // In IE8 this does not trigger onresize.
          el.firstChild.style.width = el.clientWidth + 'px';
          break;
        case 'height':
          el.getContext().clearRect();
          el.style.height = el.attributes.height.nodeValue + 'px';
          el.firstChild.style.height = el.clientHeight + 'px';
          break;
      }
    }

    function onResize(e)
    {
      var el = e.srcElement;
      if (el.firstChild)
      {
        el.firstChild.style.width = el.clientWidth + 'px';
        el.firstChild.style.height = el.clientHeight + 'px';
      }
    }

    G_vmlCanvasManager_.init();

    // precompute "00" to "FF"
    var decToHex = [];
    for (var i = 0; i < 16; i++)
    {
      for (var j = 0; j < 16; j++)
      {
        decToHex[i * 16 + j] = i.toString(16) + j.toString(16);
      }
    }

    function createMatrixIdentity()
    {
      return [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
      ];
    }

    function matrixMultiply(m1, m2)
    {
      var result = createMatrixIdentity();

      for (var x = 0; x < 3; x++)
      {
        for (var y = 0; y < 3; y++)
        {
          var sum = 0;

          for (var z = 0; z < 3; z++)
          {
            sum += m1[x][z] * m2[z][y];
          }

          result[x][y] = sum;
        }
      }
      return result;
    }

    function copyState(o1, o2)
    {
      o2.fillStyle = o1.fillStyle;
      o2.lineCap = o1.lineCap;
      o2.lineJoin = o1.lineJoin;
      o2.lineWidth = o1.lineWidth;
      o2.miterLimit = o1.miterLimit;
      o2.shadowBlur = o1.shadowBlur;
      o2.shadowColor = o1.shadowColor;
      o2.shadowOffsetX = o1.shadowOffsetX;
      o2.shadowOffsetY = o1.shadowOffsetY;
      o2.strokeStyle = o1.strokeStyle;
      o2.globalAlpha = o1.globalAlpha;
      o2.font = o1.font;
      o2.textAlign = o1.textAlign;
      o2.textBaseline = o1.textBaseline;
      o2.arcScaleX_ = o1.arcScaleX_;
      o2.arcScaleY_ = o1.arcScaleY_;
      o2.lineScale_ = o1.lineScale_;
    }

    var colorData = {
      aliceblue: '#F0F8FF',
      antiquewhite: '#FAEBD7',
      aquamarine: '#7FFFD4',
      azure: '#F0FFFF',
      beige: '#F5F5DC',
      bisque: '#FFE4C4',
      black: '#000000',
      blanchedalmond: '#FFEBCD',
      blueviolet: '#8A2BE2',
      brown: '#A52A2A',
      burlywood: '#DEB887',
      cadetblue: '#5F9EA0',
      chartreuse: '#7FFF00',
      chocolate: '#D2691E',
      coral: '#FF7F50',
      cornflowerblue: '#6495ED',
      cornsilk: '#FFF8DC',
      crimson: '#DC143C',
      cyan: '#00FFFF',
      darkblue: '#00008B',
      darkcyan: '#008B8B',
      darkgoldenrod: '#B8860B',
      darkgray: '#A9A9A9',
      darkgreen: '#006400',
      darkgrey: '#A9A9A9',
      darkkhaki: '#BDB76B',
      darkmagenta: '#8B008B',
      darkolivegreen: '#556B2F',
      darkorange: '#FF8C00',
      darkorchid: '#9932CC',
      darkred: '#8B0000',
      darksalmon: '#E9967A',
      darkseagreen: '#8FBC8F',
      darkslateblue: '#483D8B',
      darkslategray: '#2F4F4F',
      darkslategrey: '#2F4F4F',
      darkturquoise: '#00CED1',
      darkviolet: '#9400D3',
      deeppink: '#FF1493',
      deepskyblue: '#00BFFF',
      dimgray: '#696969',
      dimgrey: '#696969',
      dodgerblue: '#1E90FF',
      firebrick: '#B22222',
      floralwhite: '#FFFAF0',
      forestgreen: '#228B22',
      gainsboro: '#DCDCDC',
      ghostwhite: '#F8F8FF',
      gold: '#FFD700',
      goldenrod: '#DAA520',
      grey: '#808080',
      greenyellow: '#ADFF2F',
      honeydew: '#F0FFF0',
      hotpink: '#FF69B4',
      indianred: '#CD5C5C',
      indigo: '#4B0082',
      ivory: '#FFFFF0',
      khaki: '#F0E68C',
      lavender: '#E6E6FA',
      lavenderblush: '#FFF0F5',
      lawngreen: '#7CFC00',
      lemonchiffon: '#FFFACD',
      lightblue: '#ADD8E6',
      lightcoral: '#F08080',
      lightcyan: '#E0FFFF',
      lightgoldenrodyellow: '#FAFAD2',
      lightgreen: '#90EE90',
      lightgrey: '#D3D3D3',
      lightpink: '#FFB6C1',
      lightsalmon: '#FFA07A',
      lightseagreen: '#20B2AA',
      lightskyblue: '#87CEFA',
      lightslategray: '#778899',
      lightslategrey: '#778899',
      lightsteelblue: '#B0C4DE',
      lightyellow: '#FFFFE0',
      limegreen: '#32CD32',
      linen: '#FAF0E6',
      magenta: '#FF00FF',
      mediumaquamarine: '#66CDAA',
      mediumblue: '#0000CD',
      mediumorchid: '#BA55D3',
      mediumpurple: '#9370DB',
      mediumseagreen: '#3CB371',
      mediumslateblue: '#7B68EE',
      mediumspringgreen: '#00FA9A',
      mediumturquoise: '#48D1CC',
      mediumvioletred: '#C71585',
      midnightblue: '#191970',
      mintcream: '#F5FFFA',
      mistyrose: '#FFE4E1',
      moccasin: '#FFE4B5',
      navajowhite: '#FFDEAD',
      oldlace: '#FDF5E6',
      olivedrab: '#6B8E23',
      orange: '#FFA500',
      orangered: '#FF4500',
      orchid: '#DA70D6',
      palegoldenrod: '#EEE8AA',
      palegreen: '#98FB98',
      paleturquoise: '#AFEEEE',
      palevioletred: '#DB7093',
      papayawhip: '#FFEFD5',
      peachpuff: '#FFDAB9',
      peru: '#CD853F',
      pink: '#FFC0CB',
      plum: '#DDA0DD',
      powderblue: '#B0E0E6',
      rosybrown: '#BC8F8F',
      royalblue: '#4169E1',
      saddlebrown: '#8B4513',
      salmon: '#FA8072',
      sandybrown: '#F4A460',
      seagreen: '#2E8B57',
      seashell: '#FFF5EE',
      sienna: '#A0522D',
      skyblue: '#87CEEB',
      slateblue: '#6A5ACD',
      slategray: '#708090',
      slategrey: '#708090',
      snow: '#FFFAFA',
      springgreen: '#00FF7F',
      steelblue: '#4682B4',
      tan: '#D2B48C',
      thistle: '#D8BFD8',
      tomato: '#FF6347',
      turquoise: '#40E0D0',
      violet: '#EE82EE',
      wheat: '#F5DEB3',
      whitesmoke: '#F5F5F5',
      yellowgreen: '#9ACD32'
    };


    function getRgbHslContent(styleString)
    {
      var start = styleString.indexOf('(', 3);
      var end = styleString.indexOf(')', start + 1);
      var parts = styleString.substring(start + 1, end).split(',');
      // add alpha if needed
      if (parts.length != 4 || styleString.charAt(3) != 'a')
      {
        parts[3] = 1;
      }
      return parts;
    }

    function percent(s)
    {
      return parseFloat(s) / 100;
    }

    function clamp(v, min, max)
    {
      return Math.min(max, Math.max(min, v));
    }

    function hslToRgb(parts)
    {
      var r, g, b, h, s, l;
      h = parseFloat(parts[0]) / 360 % 360;
      if (h < 0)
        h++;
      s = clamp(percent(parts[1]), 0, 1);
      l = clamp(percent(parts[2]), 0, 1);
      if (s == 0)
      {
        r = g = b = l; // achromatic
      }
      else
      {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hueToRgb(p, q, h + 1 / 3);
        g = hueToRgb(p, q, h);
        b = hueToRgb(p, q, h - 1 / 3);
      }

      return '#' + decToHex[Math.floor(r * 255)] +
        decToHex[Math.floor(g * 255)] +
        decToHex[Math.floor(b * 255)];
    }

    function hueToRgb(m1, m2, h)
    {
      if (h < 0)
        h++;
      if (h > 1)
        h--;

      if (6 * h < 1)
        return m1 + (m2 - m1) * 6 * h;
      else if (2 * h < 1)
        return m2;
      else if (3 * h < 2)
        return m1 + (m2 - m1) * (2 / 3 - h) * 6;
      else
        return m1;
    }

    var processStyleCache = {};

    function processStyle(styleString)
    {
      if (styleString in processStyleCache)
      {
        return processStyleCache[styleString];
      }

      let str, alpha = 1;

      styleString = String(styleString);
      if (styleString.charAt(0) == '#')
      {
        str = styleString;
      }
      else if (/^rgb/.test(styleString))
      {
        var parts = getRgbHslContent(styleString);
        let str = '#',
          n;
        for (var i = 0; i < 3; i++)
        {
          if (parts[i].indexOf('%') != -1)
          {
            n = Math.floor(percent(parts[i]) * 255);
          }
          else
          {
            n = +parts[i];
          }
          str += decToHex[clamp(n, 0, 255)];
        }
        alpha = +parts[3];
      }
      else if (/^hsl/.test(styleString))
      {
        let parts = getRgbHslContent(styleString);
        str = hslToRgb(parts);
        alpha = parts[3];
      }
      else
      {
        str = colorData[styleString] || styleString;
      }
      processStyleCache[styleString] = {
        color: str,
        alpha: alpha
      };
      return processStyleCache[styleString];
    }

    var DEFAULT_STYLE = {
      style: 'normal',
      variant: 'normal',
      weight: 'normal',
      size: 10,
      family: 'sans-serif'
    };

    // Internal text style cache
    var fontStyleCache = {};

    function processFontStyle(styleString)
    {
      if (fontStyleCache[styleString])
      {
        return fontStyleCache[styleString];
      }

      var el = document.createElement('div');
      var style = el.style;
      try
      {
        style.font = styleString;
      }
      catch (ex)
      {
        // Ignore failures to set to invalid font.
      }

      fontStyleCache[styleString] = {
        style: style.fontStyle || DEFAULT_STYLE.style,
        variant: style.fontVariant || DEFAULT_STYLE.variant,
        weight: style.fontWeight || DEFAULT_STYLE.weight,
        size: style.fontSize || DEFAULT_STYLE.size,
        family: style.fontFamily || DEFAULT_STYLE.family
      };
      return fontStyleCache[styleString];
    }

    function getComputedStyle(style, element)
    {
      var computedStyle = {};

      for (var p in style)
      {
        computedStyle[p] = style[p];
      }

      // Compute the size
      var canvasFontSize = parseFloat(element.currentStyle.fontSize),
        fontSize = parseFloat(style.size);

      if (typeof style.size == 'number')
      {
        computedStyle.size = style.size;
      }
      else if (style.size.indexOf('px') != -1)
      {
        computedStyle.size = fontSize;
      }
      else if (style.size.indexOf('em') != -1)
      {
        computedStyle.size = canvasFontSize * fontSize;
      }
      else if (style.size.indexOf('%') != -1)
      {
        computedStyle.size = (canvasFontSize / 100) * fontSize;
      }
      else if (style.size.indexOf('pt') != -1)
      {
        computedStyle.size = fontSize / 0.75;
      }
      else
      {
        computedStyle.size = canvasFontSize;
      }

      // Different scaling between normal text and VML text. This was found using
      // trial and error to get the same size as non VML text.
      computedStyle.size *= 0.981;

      return computedStyle;
    }

    function buildStyle(style)
    {
      return style.style + ' ' + style.variant + ' ' + style.weight + ' ' +
        style.size + 'px ' + style.family;
    }

    var lineCapMap = {
      'butt': 'flat',
      'round': 'round'
    };

    function processLineCap(lineCap)
    {
      return lineCapMap[lineCap] || 'square';
    }

    /**
     * This class implements CanvasRenderingContext2D interface as described by
     * the WHATWG.
     * @param {HTMLElement} canvasElement The element that the 2D context should
     * be associated with
     */
    function CanvasRenderingContext2D_(canvasElement)
    {
      this.m_ = createMatrixIdentity();

      this.mStack_ = [];
      this.aStack_ = [];
      this.currentPath_ = [];

      // Canvas context properties
      this.strokeStyle = '#000';
      this.fillStyle = '#000';

      this.lineWidth = 1;
      this.lineJoin = 'miter';
      this.lineCap = 'butt';
      this.miterLimit = Z * 1;
      this.globalAlpha = 1;
      this.font = '10px sans-serif';
      this.textAlign = 'left';
      this.textBaseline = 'alphabetic';
      this.canvas = canvasElement;

      var cssText = 'width:' + canvasElement.clientWidth + 'px;height:' +
        canvasElement.clientHeight + 'px;overflow:hidden;position:absolute';
      var el = canvasElement.ownerDocument.createElement('div');
      el.style.cssText = cssText;
      canvasElement.appendChild(el);

      var overlayEl = el.cloneNode(false);
      // Use a non transparent background.
      overlayEl.style.backgroundColor = 'red';
      overlayEl.style.filter = 'alpha(opacity=0)';
      canvasElement.appendChild(overlayEl);

      this.element_ = el;
      this.arcScaleX_ = 1;
      this.arcScaleY_ = 1;
      this.lineScale_ = 1;
    }

    var contextPrototype = CanvasRenderingContext2D_.prototype;
    contextPrototype.clearRect = function()
    {
      if (this.textMeasureEl_)
      {
        this.textMeasureEl_.removeNode(true);
        this.textMeasureEl_ = null;
      }
      this.element_.innerHTML = '';
    };

    contextPrototype.beginPath = function()
    {
      // TODO: Branch current matrix so that save/restore has no effect
      //       as per safari docs.
      this.currentPath_ = [];
    };

    contextPrototype.moveTo = function(aX, aY)
    {
      var p = getCoords(this, aX, aY);
      this.currentPath_.push(
      {
        type: 'moveTo',
        x: p.x,
        y: p.y
      });
      this.currentX_ = p.x;
      this.currentY_ = p.y;
    };

    contextPrototype.lineTo = function(aX, aY)
    {
      var p = getCoords(this, aX, aY);
      this.currentPath_.push(
      {
        type: 'lineTo',
        x: p.x,
        y: p.y
      });

      this.currentX_ = p.x;
      this.currentY_ = p.y;
    };

    contextPrototype.bezierCurveTo = function(aCP1x, aCP1y,
      aCP2x, aCP2y,
      aX, aY)
    {
      var p = getCoords(this, aX, aY);
      var cp1 = getCoords(this, aCP1x, aCP1y);
      var cp2 = getCoords(this, aCP2x, aCP2y);
      bezierCurveTo(this, cp1, cp2, p);
    };

    // Helper function that takes the already fixed cordinates.
    function bezierCurveTo(self, cp1, cp2, p)
    {
      self.currentPath_.push(
      {
        type: 'bezierCurveTo',
        cp1x: cp1.x,
        cp1y: cp1.y,
        cp2x: cp2.x,
        cp2y: cp2.y,
        x: p.x,
        y: p.y
      });
      self.currentX_ = p.x;
      self.currentY_ = p.y;
    }

    contextPrototype.quadraticCurveTo = function(aCPx, aCPy, aX, aY)
    {
      // the following is lifted almost directly from
      // http://developer.mozilla.org/en/docs/Canvas_tutorial:Drawing_shapes

      var cp = getCoords(this, aCPx, aCPy);
      var p = getCoords(this, aX, aY);

      var cp1 = {
        x: this.currentX_ + 2.0 / 3.0 * (cp.x - this.currentX_),
        y: this.currentY_ + 2.0 / 3.0 * (cp.y - this.currentY_)
      };
      var cp2 = {
        x: cp1.x + (p.x - this.currentX_) / 3.0,
        y: cp1.y + (p.y - this.currentY_) / 3.0
      };

      bezierCurveTo(this, cp1, cp2, p);
    };

    contextPrototype.arc = function(aX, aY, aRadius,
      aStartAngle, aEndAngle, aClockwise)
    {
      aRadius *= Z;
      var arcType = aClockwise ? 'at' : 'wa';

      var xStart = aX + mc(aStartAngle) * aRadius - Z2;
      var yStart = aY + ms(aStartAngle) * aRadius - Z2;

      var xEnd = aX + mc(aEndAngle) * aRadius - Z2;
      var yEnd = aY + ms(aEndAngle) * aRadius - Z2;

      // IE won't render arches drawn counter clockwise if xStart == xEnd.
      if (xStart == xEnd && !aClockwise)
      {
        xStart += 0.125; // Offset xStart by 1/80 of a pixel. Use something
        // that can be represented in binary
      }

      var p = getCoords(this, aX, aY);
      var pStart = getCoords(this, xStart, yStart);
      var pEnd = getCoords(this, xEnd, yEnd);

      this.currentPath_.push(
      {
        type: arcType,
        x: p.x,
        y: p.y,
        radius: aRadius,
        xStart: pStart.x,
        yStart: pStart.y,
        xEnd: pEnd.x,
        yEnd: pEnd.y
      });

    };

    contextPrototype.rect = function(aX, aY, aWidth, aHeight)
    {
      this.moveTo(aX, aY);
      this.lineTo(aX + aWidth, aY);
      this.lineTo(aX + aWidth, aY + aHeight);
      this.lineTo(aX, aY + aHeight);
      this.closePath();
    };

    contextPrototype.strokeRect = function(aX, aY, aWidth, aHeight)
    {
      var oldPath = this.currentPath_;
      this.beginPath();

      this.moveTo(aX, aY);
      this.lineTo(aX + aWidth, aY);
      this.lineTo(aX + aWidth, aY + aHeight);
      this.lineTo(aX, aY + aHeight);
      this.closePath();
      this.stroke();

      this.currentPath_ = oldPath;
    };

    contextPrototype.fillRect = function(aX, aY, aWidth, aHeight)
    {
      var oldPath = this.currentPath_;
      this.beginPath();

      this.moveTo(aX, aY);
      this.lineTo(aX + aWidth, aY);
      this.lineTo(aX + aWidth, aY + aHeight);
      this.lineTo(aX, aY + aHeight);
      this.closePath();
      this.fill();

      this.currentPath_ = oldPath;
    };

    contextPrototype.createLinearGradient = function(aX0, aY0, aX1, aY1)
    {
      var gradient = new CanvasGradient_('gradient');
      gradient.x0_ = aX0;
      gradient.y0_ = aY0;
      gradient.x1_ = aX1;
      gradient.y1_ = aY1;
      return gradient;
    };

    contextPrototype.createRadialGradient = function(aX0, aY0, aR0,
      aX1, aY1, aR1)
    {
      var gradient = new CanvasGradient_('gradientradial');
      gradient.x0_ = aX0;
      gradient.y0_ = aY0;
      gradient.r0_ = aR0;
      gradient.x1_ = aX1;
      gradient.y1_ = aY1;
      gradient.r1_ = aR1;
      return gradient;
    };

    contextPrototype.drawImage = function(image, var_args)
    {
      var dx, dy, dw, dh, sx, sy, sw, sh;

      // to find the original width we overide the width and height
      var oldRuntimeWidth = image.runtimeStyle.width;
      var oldRuntimeHeight = image.runtimeStyle.height;
      image.runtimeStyle.width = 'auto';
      image.runtimeStyle.height = 'auto';

      // get the original size
      var w = image.width;
      var h = image.height;

      // and remove overides
      image.runtimeStyle.width = oldRuntimeWidth;
      image.runtimeStyle.height = oldRuntimeHeight;

      if (arguments.length == 3)
      {
        dx = arguments[1];
        dy = arguments[2];
        sx = sy = 0;
        sw = dw = w;
        sh = dh = h;
      }
      else if (arguments.length == 5)
      {
        dx = arguments[1];
        dy = arguments[2];
        dw = arguments[3];
        dh = arguments[4];
        sx = sy = 0;
        sw = w;
        sh = h;
      }
      else if (arguments.length == 9)
      {
        sx = arguments[1];
        sy = arguments[2];
        sw = arguments[3];
        sh = arguments[4];
        dx = arguments[5];
        dy = arguments[6];
        dw = arguments[7];
        dh = arguments[8];
      }
      else
      {
        throw Error('Invalid number of arguments');
      }

      var d = getCoords(this, dx, dy);

      var w2 = sw / 2;
      var h2 = sh / 2;

      var vmlStr = [];

      var W = 10;
      var H = 10;

      // For some reason that I've now forgotten, using divs didn't work
      vmlStr.push(' <g_vml_:group',
        ' coordsize="', Z * W, ',', Z * H, '"',
        ' coordorigin="0,0"',
        ' style="width:', W, 'px;height:', H, 'px;position:absolute;');

      // If filters are necessary (rotation exists), create them
      // filters are bog-slow, so only create them if abbsolutely necessary
      // The following check doesn't account for skews (which don't exist
      // in the canvas spec (yet) anyway.

      if (this.m_[0][0] != 1 || this.m_[0][1] ||
        this.m_[1][1] != 1 || this.m_[1][0])
      {
        var filter = [];

        // Note the 12/21 reversal
        filter.push('M11=', this.m_[0][0], ',',
          'M12=', this.m_[1][0], ',',
          'M21=', this.m_[0][1], ',',
          'M22=', this.m_[1][1], ',',
          'Dx=', mr(d.x / Z), ',',
          'Dy=', mr(d.y / Z), '');

        // Bounding box calculation (need to minimize displayed area so that
        // filters don't waste time on unused pixels.
        var max = d;
        var c2 = getCoords(this, dx + dw, dy);
        var c3 = getCoords(this, dx, dy + dh);
        var c4 = getCoords(this, dx + dw, dy + dh);

        max.x = m.max(max.x, c2.x, c3.x, c4.x);
        max.y = m.max(max.y, c2.y, c3.y, c4.y);

        vmlStr.push('padding:0 ', mr(max.x / Z), 'px ', mr(max.y / Z),
          'px 0;filter:progid:DXImageTransform.Microsoft.Matrix(',
          filter.join(''), ", sizingmethod='clip');");

      }
      else
      {
        vmlStr.push('top:', mr(d.y / Z), 'px;left:', mr(d.x / Z), 'px;');
      }

      vmlStr.push(' ">',
        '<g_vml_:image src="', image.src, '"',
        ' style="width:', Z * dw, 'px;',
        ' height:', Z * dh, 'px"',
        ' cropleft="', sx / w, '"',
        ' croptop="', sy / h, '"',
        ' cropright="', (w - sx - sw) / w, '"',
        ' cropbottom="', (h - sy - sh) / h, '"',
        ' />',
        '</g_vml_:group>');

      this.element_.insertAdjacentHTML('BeforeEnd', vmlStr.join(''));
    };

    contextPrototype.stroke = function(aFill)
    {
      var lineStr = [];
      var lineOpen = false;

      var W = 10;
      var H = 10;

      lineStr.push('<g_vml_:shape',
        ' filled="', !!aFill, '"',
        ' style="position:absolute;width:', W, 'px;height:', H, 'px;"',
        ' coordorigin="0,0"',
        ' coordsize="', Z * W, ',', Z * H, '"',
        ' stroked="', !aFill, '"',
        ' path="');

      var newSeq = false;
      var min = {
        x: null,
        y: null
      };
      var max = {
        x: null,
        y: null
      };

      for (var i = 0; i < this.currentPath_.length; i++)
      {
        var p = this.currentPath_[i];
        var c;

        switch (p.type)
        {
          case 'moveTo':
            c = p;
            lineStr.push(' m ', mr(p.x), ',', mr(p.y));
            break;
          case 'lineTo':
            lineStr.push(' l ', mr(p.x), ',', mr(p.y));
            break;
          case 'close':
            lineStr.push(' x ');
            p = null;
            break;
          case 'bezierCurveTo':
            lineStr.push(' c ',
              mr(p.cp1x), ',', mr(p.cp1y), ',',
              mr(p.cp2x), ',', mr(p.cp2y), ',',
              mr(p.x), ',', mr(p.y));
            break;
          case 'at':
          case 'wa':
            lineStr.push(' ', p.type, ' ',
              mr(p.x - this.arcScaleX_ * p.radius), ',',
              mr(p.y - this.arcScaleY_ * p.radius), ' ',
              mr(p.x + this.arcScaleX_ * p.radius), ',',
              mr(p.y + this.arcScaleY_ * p.radius), ' ',
              mr(p.xStart), ',', mr(p.yStart), ' ',
              mr(p.xEnd), ',', mr(p.yEnd));
            break;
        }


        // TODO: Following is broken for curves due to
        //       move to proper paths.

        // Figure out dimensions so we can do gradient fills
        // properly
        if (p)
        {
          if (min.x == null || p.x < min.x)
          {
            min.x = p.x;
          }
          if (max.x == null || p.x > max.x)
          {
            max.x = p.x;
          }
          if (min.y == null || p.y < min.y)
          {
            min.y = p.y;
          }
          if (max.y == null || p.y > max.y)
          {
            max.y = p.y;
          }
        }
      }
      lineStr.push(' ">');

      if (!aFill)
      {
        appendStroke(this, lineStr);
      }
      else
      {
        appendFill(this, lineStr, min, max);
      }

      lineStr.push('</g_vml_:shape>');

      this.element_.insertAdjacentHTML('beforeEnd', lineStr.join(''));
    };

    function appendStroke(ctx, lineStr)
    {
      var a = processStyle(ctx.strokeStyle);
      var color = a.color;
      var opacity = a.alpha * ctx.globalAlpha;
      var lineWidth = ctx.lineScale_ * ctx.lineWidth;

      // VML cannot correctly render a line if the width is less than 1px.
      // In that case, we dilute the color to make the line look thinner.
      if (lineWidth < 1)
      {
        opacity *= lineWidth;
      }

      lineStr.push(
        '<g_vml_:stroke',
        ' opacity="', opacity, '"',
        ' joinstyle="', ctx.lineJoin, '"',
        ' miterlimit="', ctx.miterLimit, '"',
        ' endcap="', processLineCap(ctx.lineCap), '"',
        ' weight="', lineWidth, 'px"',
        ' color="', color, '" />'
      );
    }

    function appendFill(ctx, lineStr, min, max)
    {
      var fillStyle = ctx.fillStyle;
      var arcScaleX = ctx.arcScaleX_;
      var arcScaleY = ctx.arcScaleY_;
      var width = max.x - min.x;
      var height = max.y - min.y;
      if (fillStyle instanceof CanvasGradient_)
      {
        // TODO: Gradients transformed with the transformation matrix.
        var angle = 0;
        var focus = {
          x: 0,
          y: 0
        };

        // additional offset
        var shift = 0;
        // scale factor for offset
        var expansion = 1;

        if (fillStyle.type_ == 'gradient')
        {
          var x0 = fillStyle.x0_ / arcScaleX;
          var y0 = fillStyle.y0_ / arcScaleY;
          var x1 = fillStyle.x1_ / arcScaleX;
          var y1 = fillStyle.y1_ / arcScaleY;
          var p0 = getCoords(ctx, x0, y0);
          var p1 = getCoords(ctx, x1, y1);
          var dx = p1.x - p0.x;
          var dy = p1.y - p0.y;
          angle = Math.atan2(dx, dy) * 180 / Math.PI;

          // The angle should be a non-negative number.
          if (angle < 0)
          {
            angle += 360;
          }

          // Very small angles produce an unexpected result because they are
          // converted to a scientific notation string.
          if (angle < 1e-6)
          {
            angle = 0;
          }
        }
        else
        {
          let p0 = getCoords(ctx, fillStyle.x0_, fillStyle.y0_);
          focus = {
            x: (p0.x - min.x) / width,
            y: (p0.y - min.y) / height
          };

          width /= arcScaleX * Z;
          height /= arcScaleY * Z;
          var dimension = m.max(width, height);
          shift = 2 * fillStyle.r0_ / dimension;
          expansion = 2 * fillStyle.r1_ / dimension - shift;
        }

        // We need to sort the color stops in ascending order by offset,
        // otherwise IE won't interpret it correctly.
        var stops = fillStyle.colors_;
        stops.sort(function(cs1, cs2)
        {
          return cs1.offset - cs2.offset;
        });

        var length = stops.length;
        var color1 = stops[0].color;
        var color2 = stops[length - 1].color;
        var opacity1 = stops[0].alpha * ctx.globalAlpha;
        var opacity2 = stops[length - 1].alpha * ctx.globalAlpha;

        var colors = [];
        for (var i = 0; i < length; i++)
        {
          var stop = stops[i];
          colors.push(stop.offset * expansion + shift + ' ' + stop.color);
        }

        // When colors attribute is used, the meanings of opacity and o:opacity2
        // are reversed.
        lineStr.push('<g_vml_:fill type="', fillStyle.type_, '"',
          ' method="none" focus="100%"',
          ' color="', color1, '"',
          ' color2="', color2, '"',
          ' colors="', colors.join(','), '"',
          ' opacity="', opacity2, '"',
          ' g_o_:opacity2="', opacity1, '"',
          ' angle="', angle, '"',
          ' focusposition="', focus.x, ',', focus.y, '" />');
      }
      else if (fillStyle instanceof CanvasPattern_)
      {
        if (width && height)
        {
          var deltaLeft = -min.x;
          var deltaTop = -min.y;
          lineStr.push('<g_vml_:fill',
            ' position="',
            deltaLeft / width * arcScaleX * arcScaleX, ',',
            deltaTop / height * arcScaleY * arcScaleY, '"',
            ' type="tile"',
            // TODO: Figure out the correct size to fit the scale.
            //' size="', w, 'px ', h, 'px"',
            ' src="', fillStyle.src_, '" />');
        }
      }
      else
      {
        var a = processStyle(ctx.fillStyle);
        var color = a.color;
        var opacity = a.alpha * ctx.globalAlpha;
        lineStr.push('<g_vml_:fill color="', color, '" opacity="', opacity,
          '" />');
      }
    }

    contextPrototype.fill = function()
    {
      this.stroke(true);
    };

    contextPrototype.closePath = function()
    {
      this.currentPath_.push(
      {
        type: 'close'
      });
    };

    function getCoords(ctx, aX, aY)
    {
      var m = ctx.m_;
      return {
        x: Z * (aX * m[0][0] + aY * m[1][0] + m[2][0]) - Z2,
        y: Z * (aX * m[0][1] + aY * m[1][1] + m[2][1]) - Z2
      };
    }

    contextPrototype.save = function()
    {
      var o = {};
      copyState(this, o);
      this.aStack_.push(o);
      this.mStack_.push(this.m_);
      this.m_ = matrixMultiply(createMatrixIdentity(), this.m_);
    };

    contextPrototype.restore = function()
    {
      if (this.aStack_.length)
      {
        copyState(this.aStack_.pop(), this);
        this.m_ = this.mStack_.pop();
      }
    };

    function matrixIsFinite(m)
    {
      return isFinite(m[0][0]) && isFinite(m[0][1]) &&
        isFinite(m[1][0]) && isFinite(m[1][1]) &&
        isFinite(m[2][0]) && isFinite(m[2][1]);
    }

    function setM(ctx, m, updateLineScale)
    {
      if (!matrixIsFinite(m))
      {
        return;
      }
      ctx.m_ = m;

      if (updateLineScale)
      {
        // Get the line scale.
        // Determinant of this.m_ means how much the area is enlarged by the
        // transformation. So its square root can be used as a scale factor
        // for width.
        var det = m[0][0] * m[1][1] - m[0][1] * m[1][0];
        ctx.lineScale_ = sqrt(abs(det));
      }
    }

    contextPrototype.translate = function(aX, aY)
    {
      var m1 = [
        [1, 0, 0],
        [0, 1, 0],
        [aX, aY, 1]
      ];

      setM(this, matrixMultiply(m1, this.m_), false);
    };

    contextPrototype.rotate = function(aRot)
    {
      var c = mc(aRot);
      var s = ms(aRot);

      var m1 = [
        [c, s, 0],
        [-s, c, 0],
        [0, 0, 1]
      ];

      setM(this, matrixMultiply(m1, this.m_), false);
    };

    contextPrototype.scale = function(aX, aY)
    {
      this.arcScaleX_ *= aX;
      this.arcScaleY_ *= aY;
      var m1 = [
        [aX, 0, 0],
        [0, aY, 0],
        [0, 0, 1]
      ];

      setM(this, matrixMultiply(m1, this.m_), true);
    };

    contextPrototype.transform = function(m11, m12, m21, m22, dx, dy)
    {
      var m1 = [
        [m11, m12, 0],
        [m21, m22, 0],
        [dx, dy, 1]
      ];

      setM(this, matrixMultiply(m1, this.m_), true);
    };

    contextPrototype.setTransform = function(m11, m12, m21, m22, dx, dy)
    {
      var m = [
        [m11, m12, 0],
        [m21, m22, 0],
        [dx, dy, 1]
      ];

      setM(this, m, true);
    };

    /**
     * The text drawing function.
     * The maxWidth argument isn't taken in account, since no browser supports
     * it yet.
     */
    contextPrototype.drawText_ = function(text, x, y, maxWidth, stroke)
    {
      var m = this.m_,
        delta = 1000,
        left = 0,
        right = delta,
        offset = {
          x: 0,
          y: 0
        },
        lineStr = [];

      var fontStyle = getComputedStyle(processFontStyle(this.font),
        this.element_);

      var fontStyleString = buildStyle(fontStyle);

      var elementStyle = this.element_.currentStyle;
      var textAlign = this.textAlign.toLowerCase();
      switch (textAlign)
      {
        case 'left':
        case 'center':
        case 'right':
          break;
        case 'end':
          textAlign = elementStyle.direction == 'ltr' ? 'right' : 'left';
          break;
        case 'start':
          textAlign = elementStyle.direction == 'rtl' ? 'right' : 'left';
          break;
        default:
          textAlign = 'left';
      }

      // 1.75 is an arbitrary number, as there is no info about the text baseline
      switch (this.textBaseline)
      {
        case 'hanging':
        case 'top':
          offset.y = fontStyle.size / 1.75;
          break;
        case 'middle':
          break;
        default:
        case null:
        case 'alphabetic':
        case 'ideographic':
        case 'bottom':
          offset.y = -fontStyle.size / 2.25;
          break;
      }

      switch (textAlign)
      {
        case 'right':
          left = delta;
          right = 0.05;
          break;
        case 'center':
          left = right = delta / 2;
          break;
      }

      var d = getCoords(this, x + offset.x, y + offset.y);

      lineStr.push('<g_vml_:line from="', -left, ' 0" to="', right, ' 0.05" ',
        ' coordsize="100 100" coordorigin="0 0"',
        ' filled="', !stroke, '" stroked="', !!stroke,
        '" style="position:absolute;width:1px;height:1px;">');

      if (stroke)
      {
        appendStroke(this, lineStr);
      }
      else
      {
        // TODO: Fix the min and max params.
        appendFill(this, lineStr,
        {
          x: -left,
          y: 0
        },
        {
          x: right,
          y: fontStyle.size
        });
      }

      var skewM = m[0][0].toFixed(3) + ',' + m[1][0].toFixed(3) + ',' +
        m[0][1].toFixed(3) + ',' + m[1][1].toFixed(3) + ',0,0';

      var skewOffset = mr(d.x / Z) + ',' + mr(d.y / Z);

      lineStr.push('<g_vml_:skew on="t" matrix="', skewM, '" ',
        ' offset="', skewOffset, '" origin="', left, ' 0" />',
        '<g_vml_:path textpathok="true" />',
        '<g_vml_:textpath on="true" string="',
        encodeHtmlAttribute(text),
        '" style="v-text-align:', textAlign,
        ';font:', encodeHtmlAttribute(fontStyleString),
        '" /></g_vml_:line>');

      this.element_.insertAdjacentHTML('beforeEnd', lineStr.join(''));
    };

    contextPrototype.fillText = function(text, x, y, maxWidth)
    {
      this.drawText_(text, x, y, maxWidth, false);
    };

    contextPrototype.strokeText = function(text, x, y, maxWidth)
    {
      this.drawText_(text, x, y, maxWidth, true);
    };

    contextPrototype.measureText = function(text)
    {
      if (!this.textMeasureEl_)
      {
        var s = '<span style="position:absolute;' +
          'top:-20000px;left:0;padding:0;margin:0;border:none;' +
          'white-space:pre;"></span>';
        this.element_.insertAdjacentHTML('beforeEnd', s);
        this.textMeasureEl_ = this.element_.lastChild;
      }
      var doc = this.element_.ownerDocument;
      this.textMeasureEl_.innerHTML = '';
      this.textMeasureEl_.style.font = this.font;
      // Don't use innerHTML or innerText because they allow markup/whitespace.
      this.textMeasureEl_.appendChild(doc.createTextNode(text));
      return {
        width: this.textMeasureEl_.offsetWidth
      };
    };

    /******** STUBS ********/
    contextPrototype.clip = function()
    {
      // TODO: Implement
    };

    contextPrototype.arcTo = function()
    {
      // TODO: Implement
    };

    contextPrototype.createPattern = function(image, repetition)
    {
      return new CanvasPattern_(image, repetition);
    };

    // Gradient / Pattern Stubs
    function CanvasGradient_(aType)
    {
      this.type_ = aType;
      this.x0_ = 0;
      this.y0_ = 0;
      this.r0_ = 0;
      this.x1_ = 0;
      this.y1_ = 0;
      this.r1_ = 0;
      this.colors_ = [];
    }

    CanvasGradient_.prototype.addColorStop = function(aOffset, aColor)
    {
      aColor = processStyle(aColor);
      this.colors_.push(
      {
        offset: aOffset,
        color: aColor.color,
        alpha: aColor.alpha
      });
    };

    function CanvasPattern_(image, repetition)
    {
      assertImageIsValid(image);
      switch (repetition)
      {
        case 'repeat':
        case null:
        case '':
          this.repetition_ = 'repeat';
          break;
        case 'repeat-x':
        case 'repeat-y':
        case 'no-repeat':
          this.repetition_ = repetition;
          break;
        default:
          throwException('SYNTAX_ERR');
      }

      this.src_ = image.src;
      this.width_ = image.width;
      this.height_ = image.height;
    }

    function throwException(s)
    {
      throw new DOMException_(s);
    }

    function assertImageIsValid(img)
    {
      if (!img || img.nodeType != 1 || img.tagName != 'IMG')
      {
        throwException('TYPE_MISMATCH_ERR');
      }
      if (img.readyState != 'complete')
      {
        throwException('INVALID_STATE_ERR');
      }
    }

    function DOMException_(s)
    {
      this.code = this[s];
      this.message = s + ': DOM Exception ' + this.code;
    }
    var p = DOMException_.prototype = new Error();
    p.INDEX_SIZE_ERR = 1;
    p.DOMSTRING_SIZE_ERR = 2;
    p.HIERARCHY_REQUEST_ERR = 3;
    p.WRONG_DOCUMENT_ERR = 4;
    p.INVALID_CHARACTER_ERR = 5;
    p.NO_DATA_ALLOWED_ERR = 6;
    p.NO_MODIFICATION_ALLOWED_ERR = 7;
    p.NOT_FOUND_ERR = 8;
    p.NOT_SUPPORTED_ERR = 9;
    p.INUSE_ATTRIBUTE_ERR = 10;
    p.INVALID_STATE_ERR = 11;
    p.SYNTAX_ERR = 12;
    p.INVALID_MODIFICATION_ERR = 13;
    p.NAMESPACE_ERR = 14;
    p.INVALID_ACCESS_ERR = 15;
    p.VALIDATION_ERR = 16;
    p.TYPE_MISMATCH_ERR = 17;

    // set up externs
    G_vmlCanvasManager = G_vmlCanvasManager_;
    CanvasRenderingContext2D = CanvasRenderingContext2D_;
    CanvasGradient = CanvasGradient_;
    CanvasPattern = CanvasPattern_;
    DOMException = DOMException_;
  })();

} // if

//
// Coords Class
// Basic coordinates conversions and formating
//
//
function Coords(v, IsLon)
{
  if (typeof v == 'number')
  {
    this.Value=v;
  }
  else
  {
    this.Value=parseFloat(v);
  }
  this.IsLon = IsLon;
  
  // Returns the degree part of a coordinate is floating format
  this.Deg=function()
  {
    return Math.abs(this.Value);
  };

  // Returns the minutes part of a coordinate in floating format
  this.Min=function()
  {
    return (Math.abs(this.Value) - Math.floor(this.Deg()))*60;
  };

  // Returns the second part of a coordinate in floating format
  this.Sec=function()
  {
    return (this.Min() - Math.floor(this.Min()))*60;
  };
  
  // Basic string formatting of a floating coordinate
  this.ToString=function(Raw)
  {
    if (Raw)
    {
      return this.Value;
    }
    else
    {
      let Side="";

      if (typeof this.IsLon == 'undefined' || this.IsLon==0)
      {
        Side = (this.Value>=0?' N':' S');
      }
      else
      {
        Side = (this.Value>=0?' E':' W');
      }
      
      return Math.floor(this.Deg()) +"° "+ Math.floor(this.Min()) + "' " + Math.floor(this.Sec()) + '"' + Side;
    }
  };
}

//
// Returns the deg, min, sec parts of a coordinate in decimal number
//
function GetDegMinSecFromNumber(n,d,m,s)
{
  var DecPart;
  
  SplitNumber(n,d,DecPart);
  SplitNumber(DecPart*60,m,DecPart);
  SplitNumber(DecPart*60,s,DecPart);
  return;
}

//
// Split a number between its integer and decimal part
function SplitNumber(n,i,d)
{
  i=Math.floor(n);
  d=n-i;
}
/*
/* Contributors : paparazzia@gmail.com, ...
 * Code is licencesed under the AGPL license
 * See Copying file
 */

/* TODO:
 * this is rough draft
 * - for better drawing an BC compatibility with OL, the Gribmap layer should use the renderer or the vector base layer (?)
 * - windarea are stored in an objet (pseudo key=>value array) => should be stored in arrays with indexes
 */

/**
 * @requires OpenLayers.js
 * @requires ControlSwitch.js
 * @requires OpenLayers/Pixel.js
 */


Gribmap = {}; //Module container
ErrorCatching = -1; //DEBUG: Set this > 0 to catch pixel out of wind grid

var SrvIndex = 1;
Gribmap.ServerURL = function()
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

Gribmap.windgrid_uribase = function()
{
  return Gribmap.ServerURL() + "/ws/windinfo/windgrid.php";
};

Gribmap.griblist_uribase = '/ws/windinfo/list.php';

// Class wind info - just a basic vector
function Wind(wspeed, wheading)
{
  this.wspeed = wspeed;
  this.wheading = wheading;
}

// Normalize longitude -180 < long <= 180
function normalizeLongitude0(longitude)
{
  var l;
  l = longitude % 360.0;
  if (l > 180.0)
  {
    l -= 360.0;
  }
  else if (l <= -180.0)
  {
    l += 360.0;
  }
  return l;
}

// Normalize longitude 0 <= long < 360
function normalizeLongitude360(longitude)
{
  var l;
  l = longitude % 360.0;
  if (l < 0.0)
  {
    l += 360.0;
  }
  return l;
}

// point in the canvas - subclassed from OL.Pixel to make transform easier
Gribmap.Pixel = OpenLayers.Class(OpenLayers.Pixel,
{
  moveBy: function(offset)
  {
    //this is the same as the base.offset() func, but without cloning the object
    this.x += offset.x;
    this.y += offset.y;
  },

  moveByPolar: function(ro, theta)
  {
    var angle = (theta - 90.0) * Math.PI / 180.0;
    this.x += ro * Math.cos(angle);
    this.y += ro * Math.sin(angle);
  },

  CLASS_NAME: "Gribmap.Pixel"
});


//Store information (windAreas, i.e. bloc of grib datas)
Gribmap.WindLevel = OpenLayers.Class(
{
  basestep: 0.5,
  gribLevel: 0,
  blocx: 360.0,
  blocy: 180.0,
  step: 2.0,
  stepmultiple: 4.0,
  windAreas:
  {},
  layer: null,

  initialize: function(griblevel, stepmultiple, blocx, blocy, layer)
  {
    this.gribLevel = griblevel;
    this.windAreas = [];
    this.stepmultiple = stepmultiple;
    this.step = this.basestep * stepmultiple; //FIXME: useless without proper step handling
    this.blocx = blocx;
    this.blocy = blocy;
    this.layer = layer;
  },

  //FIXME : should we use native index in place of hash array ?
  getGribLeftLimit: function(lon)
  {
    return this.getGribLeftId(lon) * this.blocx - 180;
  },

  getGribLeftId: function(lon)
  {
    return Math.floor((lon + 180) / this.blocx);
  },

  getGribBottomLimit: function(lat)
  {
    return this.getGribBottomId(lat) * this.blocy - 90;
  },

  getGribBottomId: function(lat)
  {
    return Math.floor((lat + 90) / this.blocy);
  },

  notifyLoad: function(time, windarea)
  {
    if (this.layer &&
      this.gribLevel === this.layer.gribLevel &&
      this.layer.isInTimeRange(time) &&
      this.layer.getExtent().transform(
        new OpenLayers.Projection("EPSG:900913"), // from Spherical Mercator Projection
        new OpenLayers.Projection("EPSG:4326") // transform to WGS 1984
      ).intersectsBounds(windarea)
    )
    {
      this.extendWindArea(windarea);
      this.layer.redraw();
    }
  },

  //Get all wind areas inside bounds, and call checkWindArea() for each
  getWindAreas: function(bounds)
  {
    //bounds in LAT-LON
    var blocks = [];
    var bc = 0;
    var left = this.getGribLeftLimit(bounds.left);
    var bottom = null;
    var newblock = null;

    while (left < bounds.right)
    {
      bottom = this.getGribBottomLimit(bounds.bottom);
      while (bottom < bounds.top)
      {
        newblock = new Gribmap.WindArea(left, bottom, this);
        blocks[bc] = this.checkWindArea(newblock);
        bottom += this.blocy;
        bc += 1;
      }
      left += this.blocx;
    }
    return blocks;
  },

  checkWindArea: function(windarea)
  {
    if (typeof(this.windAreas[windarea.toString()]) == 'undefined')
    {
      //Unknown windarea, we just use it.
      this.windAreas[windarea.toString()] = windarea;
    }
    else
    {
      windarea = this.windAreas[windarea.toString()];
    }
    windarea.checkWindArray(this.layer.gribtimeBefore);
    windarea.checkWindArray(this.layer.gribtimeAfter);
    return windarea;
  },

  extendWindArea: function(windarea)
  {
    var tl = this.layer.getGribTimeList();
    for (var i = 0; i < tl.length; i++)
    {
      windarea.checkWindArray(tl[i]);
    }
  },

  getWindInfo: function(lat, lon)
  {
    var left = this.getGribLeftLimit(lon);
    var bottom = this.getGribBottomLimit(lat);
    var wa = new Gribmap.WindArea(left, bottom, this);
    //on n'appelle pas checkWindArea car on suppose que c'est déjà  OK.
    //mais on mets ça dans une clausse d'exception pour ne pas avoir de soucis
    try
    {
      var w_area = this.windAreas[wa.toString()];
      if (typeof w_area !== "undefined" && w_area)
      {
        return (w_area.getWindInfo(lat, lon, this.layer.time, this.layer.gribtimeBefore, this.layer.gribtimeAfter));
      }
      else
      {
        return null;
      }
    }
    catch (error)
    {
      return null;
    }
  },

  CLASS_NAME: "Gribmap.WindLevel"

});


//Wind array container
Gribmap.WindArray = OpenLayers.Class(
{
  time: null,
  winddatas: null,
  status: 'void',
  windArea: null, //for back notification after loading

  initialize: function(time, windArea)
  {
    this.status = 'void';
    this.time = time;
    this.windArea = windArea;
  },

  isLoaded: function()
  {
    return (this.status == 'loaded');
  },

  isLoading: function()
  {
    return (this.status == 'loading');
  },

  notifyLoad: function()
  {
    if (this.windArea)
    {
      this.windArea.notifyLoad(this.time);
    }
  },

  handleWindGridReply: function(request)
  {
    if (request.status == 200)
    {
      var jsonArray;
      jsonArray = JSON.parse(request.responseText);
      this.winddatas = this.transformRawWindArray(jsonArray);
      this.status = 'loaded';
      this.notifyLoad();
      HidePb("#PbGribLoginProgress");
    }
    else
    {
      this.status = "void";
    }
  },

  // transform the information retrieved in JSON form the wind service
  // in VLM into a two-dimensional pseudo-array
  // parameter:
  // jsonArray, the raw array in JSON
  // return:
  // a two dimensional pseudo-array with index step 0.5
  transformRawWindArray: function(jsonArray)
  {
    var wind_array = [];
    var windNodeIdx, windNode, windInfo;

    for (windNodeIdx in jsonArray)
    {
      if (jsonArray[windNodeIdx])
      {
        windNode = jsonArray[windNodeIdx];
        if (typeof(wind_array[windNode.lat]) == 'undefined')
        {
          wind_array[windNode.lat] = [];
        }
        windInfo = new Wind(windNode.wspd, windNode.whdg);
        wind_array[windNode.lat][windNode.lon] = windInfo;
        if (windNode.lon === 180.0)
        {
          wind_array[windNode.lat][-windNode.lon] = windInfo;
        }
      }
    }
    return wind_array;
  },

  getWindGrid: function()
  {
    if (this.isLoaded() || this.isLoading()) return;
    if (this.time == 0) return;
    this.status = 'loading';
    var reqeast = this.windArea.right % 360;
    var reqwest = this.windArea.left % 360;
    if (reqeast < -180)
    {
      reqeast += 360;
    }
    if (reqeast > 180)
    {
      reqeast -= 360;
    }
    if (reqwest < -180)
    {
      reqwest += 360;
    }
    if (reqwest > 180)
    {
      reqwest -= 360;
    }

    ShowPb("#PbGribLoginProgress");
    var request = OpenLayers.Request.GET(
    {
      url: Gribmap.windgrid_uribase(),
      params:
      {
        north: this.windArea.top,
        south: this.windArea.bottom,
        east: reqeast,
        west: reqwest,
        timerequest: this.time,
        stepmultiple: this.windArea.windlevel.stepmultiple
      },
      async: true,
      headers:
      {
        'Accept': 'application/json'
      },
      callback: this.handleWindGridReply,
      scope: this
    });
  },
  CLASS_NAME: "Gribmap.WindArray"
});

/* Class: WindArea
 */

Gribmap.WindArea = OpenLayers.Class(OpenLayers.Bounds,
{
  windlevel: null, //pointer to WindLevel ?
  windArrays: null,

  initialize: function(left, bottom, windlevel)
  {
    this.windlevel = windlevel;
    this.windArrays = [];
    this.left = left;
    this.bottom = bottom;
    this.right = left + windlevel.blocx;
    this.top = bottom + windlevel.blocy;
  },

  notifyLoad: function(time)
  {
    if ((this.windlevel != null))
    {
      this.windlevel.notifyLoad(time, this);
    }
  },

  checkWindArray: function(ts)
  {
    if (this.exists(ts) || ts == 0) return;
    this.windArrays[ts] = new Gribmap.WindArray(ts, this);
    this.windArrays[ts].getWindGrid();
  },

  exists: function(ts)
  {
    return (typeof(this.windArrays[ts]) != 'undefined');
  },

  isLoaded: function(ts)
  {
    return (this.exists(ts) && this.windArrays[ts].isLoaded());
  },

  isLoading: function(ts)
  {
    return (this.exists(ts) && this.windArrays[ts].isLoading());
  },

  toString: function()
  {
    //        return 'gribresol=('+this.windlevel['griblevel']+") coord=("+normalizeLongitude0(this.left)+","+this.bottom+")";
    return 'gribresol=(' + this.windlevel.griblevel + ") " + OpenLayers.Bounds.prototype.toString.apply(this, arguments);
  },

  getWindInfo: function(lat, lon, time, time_ante, time_post)
  {
    //FIXME should clean all these API
    return this.getWindInfo2(lat, lon, time, this.windArrays[time_ante], this.windArrays[time_post]);
  },

  getWindInfo2: function(lat, lon, time, windarray_ante, windarray_post)
  {
    //You should be sure before calling this that all the grib data you need are already loaded.
    var ne_wind, nw_wind, se_wind, sw_wind;
    var s_limit, n_limit, e_limit, w_limit;
    var n_wspeed, s_wspeed, wspeed, wspeed_ante, wspeed_post;
    var t_angle1, t_angle2, wangle, t_val1, t_val2;
    var n_u, n_v, s_u, s_v, u_ante, v_ante, u_post, v_post, u, v;
    var stepwind = this.windlevel.step;
    var timecoeff, loncoeff, latcoeff;

    //Normalisation & coeff
    lon = normalizeLongitude0(lon);

    s_limit = Math.floor(lat / stepwind) * stepwind;
    n_limit = Math.ceil(lat / stepwind) * stepwind;
    w_limit = Math.floor(lon / stepwind) * stepwind;
    e_limit = Math.ceil(lon / stepwind) * stepwind;

    loncoeff = (lon - w_limit) / stepwind;
    latcoeff = (lat - s_limit) / stepwind;

    //ANTE

    // Sanity checks
    if ((typeof windarray_ante.winddatas === "undefined") ||
      (!windarray_ante.winddatas) ||
      (!(n_limit in windarray_ante.winddatas)) ||
      (!(s_limit in windarray_ante.winddatas))
    )
    {
      return null;
    }
    else if ((!(e_limit in windarray_ante.winddatas[n_limit])) ||
      (!(w_limit in windarray_ante.winddatas[n_limit])) ||
      (!(e_limit in windarray_ante.winddatas[s_limit])) ||
      (!(w_limit in windarray_ante.winddatas[s_limit])))
    {
      return null;
    }
    //4 corners
    ne_wind = windarray_ante.winddatas[n_limit][e_limit];
    nw_wind = windarray_ante.winddatas[n_limit][w_limit];
    se_wind = windarray_ante.winddatas[s_limit][e_limit];
    sw_wind = windarray_ante.winddatas[s_limit][w_limit];

    //Windspeed : linear north, linear south, then linear        
    n_wspeed = nw_wind.wspeed + loncoeff * (ne_wind.wspeed - nw_wind.wspeed);
    s_wspeed = sw_wind.wspeed + loncoeff * (se_wind.wspeed - sw_wind.wspeed);
    wspeed_ante = s_wspeed + latcoeff * (n_wspeed - s_wspeed);

    //radians
    t_angle1 = nw_wind.wheading * Math.PI / 180.0;
    t_angle2 = ne_wind.wheading * Math.PI / 180.0;
    t_val1 = nw_wind.wspeed * Math.cos(t_angle1);
    t_val2 = ne_wind.wspeed * Math.cos(t_angle2);
    n_u = t_val1 + loncoeff * (t_val2 - t_val1);
    t_val1 = nw_wind.wspeed * Math.sin(t_angle1);
    t_val2 = ne_wind.wspeed * Math.sin(t_angle2);
    n_v = t_val1 + loncoeff * (t_val2 - t_val1);

    t_angle1 = sw_wind.wheading * Math.PI / 180.0;
    t_angle2 = se_wind.wheading * Math.PI / 180.0;
    t_val1 = sw_wind.wspeed * Math.cos(t_angle1);
    t_val2 = se_wind.wspeed * Math.cos(t_angle2);
    s_u = t_val1 + loncoeff * (t_val2 - t_val1);
    t_val1 = sw_wind.wspeed * Math.sin(t_angle1);
    t_val2 = se_wind.wspeed * Math.sin(t_angle2);
    s_v = t_val1 + loncoeff * (t_val2 - t_val1);

    u_ante = s_u + latcoeff * (n_u - s_u);
    v_ante = s_v + latcoeff * (n_v - s_v);

    //POST
    // Sanity checks
    if ((typeof windarray_post.winddatas === "undefined") ||
      (!windarray_post.winddatas) ||
      (!(n_limit in windarray_post.winddatas)) ||
      (!(s_limit in windarray_post.winddatas))
    )
    {
      return null;
    }
    else if ((!(e_limit in windarray_post.winddatas[n_limit])) ||
      (!(w_limit in windarray_post.winddatas[n_limit])) ||
      (!(e_limit in windarray_post.winddatas[s_limit])) ||
      (!(w_limit in windarray_post.winddatas[s_limit])))
    {
      return null;
    }

    //4 corners
    ne_wind = windarray_post.winddatas[n_limit][e_limit];
    nw_wind = windarray_post.winddatas[n_limit][w_limit];
    se_wind = windarray_post.winddatas[s_limit][e_limit];
    sw_wind = windarray_post.winddatas[s_limit][w_limit];

    //Windspeed : linear north, linear south, then linear        
    n_wspeed = nw_wind.wspeed + loncoeff * (ne_wind.wspeed - nw_wind.wspeed);
    s_wspeed = sw_wind.wspeed + loncoeff * (se_wind.wspeed - sw_wind.wspeed);
    wspeed_post = s_wspeed + latcoeff * (n_wspeed - s_wspeed);

    //radians
    t_angle1 = nw_wind.wheading * Math.PI / 180.0;
    t_angle2 = ne_wind.wheading * Math.PI / 180.0;
    t_val1 = nw_wind.wspeed * Math.cos(t_angle1);
    t_val2 = ne_wind.wspeed * Math.cos(t_angle2);
    n_u = t_val1 + loncoeff * (t_val2 - t_val1);
    t_val1 = nw_wind.wspeed * Math.sin(t_angle1);
    t_val2 = ne_wind.wspeed * Math.sin(t_angle2);
    n_v = t_val1 + loncoeff * (t_val2 - t_val1);

    t_angle1 = sw_wind.wheading * Math.PI / 180.0;
    t_angle2 = se_wind.wheading * Math.PI / 180.0;
    t_val1 = sw_wind.wspeed * Math.cos(t_angle1);
    t_val2 = se_wind.wspeed * Math.cos(t_angle2);
    s_u = t_val1 + loncoeff * (t_val2 - t_val1);
    t_val1 = sw_wind.wspeed * Math.sin(t_angle1);
    t_val2 = se_wind.wspeed * Math.sin(t_angle2);
    s_v = t_val1 + loncoeff * (t_val2 - t_val1);

    u_post = s_u + latcoeff * (n_u - s_u);
    v_post = s_v + latcoeff * (n_v - s_v);

    //Interpolation temporelle
    timecoeff = (time - windarray_ante.time) / (windarray_post.time - windarray_ante.time);
    wspeed = wspeed_ante + timecoeff * (wspeed_post - wspeed_ante);
    u = u_ante + timecoeff * (u_post - u_ante);
    v = v_ante + timecoeff * (v_post - v_ante);
    wangle = 180.0 * Math.acos(u / Math.sqrt(u * u + v * v)) / Math.PI;
    if (v < 0)
    {
      wangle = 360.0 - wangle;
    }

    return new Wind(wspeed, wangle);
  },

  CLASS_NAME: "Gribmap.WindArea"
});

/* Class: Gribmap.
Layer
 * 
 * Inherits from:
 *  - <OpenLayers.Layer>
 */
Gribmap.Layer = OpenLayers.Class(OpenLayers.Layer,
{

  /* APIProperty: isBaseLayer
   * {Boolean} Gribmap layer is never a base layer.
   */
  isBaseLayer: false,

  /* Property: canvas
   * {DOMElement} Canvas element.
   */
  canvas: null,

  /* List of windLevels */
  windLevels: [],

  /* define pixel grid */
  arrowstep: VLM2Prefs.MapPrefs.WindArrowsSpacing,

  /* offset from now */
  timeoffset: 0,

  /* current grib timestamp */
  time: 0,
  gribtimeBefore: 0,
  gribtimeAfter: 0,

  /* Property: griblist
   * List of timestamp for gribs
   */
  griblist: null,
  timeDelta: 6 * 3600,

  /* Constructor: Gribmap.Layer
   * Create a gribmap layer.
   *
   * Parameters:
   * name - {String} Name of the Layer
   * options - {Object} Hashtable of extra options to tag onto the layer
   */
  initialize: function(name, options)
  {
    var i;
    OpenLayers.Layer.prototype.initialize.apply(this, arguments);

    this.getGribList(); //Async call

    //init resolutions
    this.windLevels[0] = new Gribmap.WindLevel(0, 4, 120, 60, this);
    this.windLevels[1] = new Gribmap.WindLevel(1, 2, 60, 30, this);
    this.windLevels[2] = new Gribmap.WindLevel(2, 1, 20, 20, this);

    this.canvas = document.createElement('canvas');

    // code for IE browsers
    if (typeof G_vmlCanvasManager !== 'undefined')
    {
      G_vmlCanvasManager.initElement(this.canvas);
    }
    this.canvas.style.position = 'absolute';

    // For some reason OpenLayers.Layer.setOpacity assumes there is
    // an additional div between the layer's div and its contents.
    var sub = document.createElement('div');
    sub.appendChild(this.canvas);
    this.div.appendChild(sub);

  },

  //Time management
  addTimeOffset: function(delta)
  {
    this.timeoffset += delta;
    this.setTimeSegmentFromOffset();
  },

  timereset: function()
  {
    this.addTimeOffset(-this.timeoffset);
  },

  timeforward: function()
  {
    this.addTimeOffset(3600);
  },

  timebackward: function()
  {
    this.addTimeOffset(-3600);
  },

  getGribList: function()
  {
    var request = OpenLayers.Request.GET(
    {
      url: Gribmap.griblist_uribase,
      async: true,
      headers:
      {
        'Accept': 'application/json'
      },
      callback: this.handleGribListReply,
      scope: this
    });
  },

  handleGribListReply: function(request)
  {
    if (request.status == 200)
    {
      var rep = JSON.parse(request.responseText);
      this.griblist = rep.grib_timestamps;
      this.gribupdatetime = rep.update_time;
      this.maxtime = Math.max.apply(null, this.griblist);
      this.mintime = Math.min.apply(null, this.griblist);
    }
    var now = new Date();
    this.setTimeSegment(now.getTime() / 1000.0);
  },

  setTimeSegmentFromOffset: function()
  {
    var now = new Date();
    this.setTimeSegment(now.getTime() / 1000 + this.timeoffset);
  },

  isInTimeRange: function(time)
  {
    return ((time >= this.gribtimeBefore) && (time <= this.gribtimeAfter));
  },

  getGribTimeList: function()
  {
    var timelist = [];

    for (var i = 0; i < this.griblist.length; i++)
    {
      if ((this.griblist[i] >= (this.time - this.timeDelta)) && (this.griblist[i] <= (this.time + this.timeDelta)))
      {
        timelist.push(this.griblist[i]);
      }
    }

    return timelist;
  },

  setTimeSegment: function(time)
  {
    time = Math.floor(time);
    var i = 0;
    var gribtimebefore = this.mintime;
    var gribtimeafter = this.maxtime;
    for (i = 0; i < this.griblist.length; i++)
    {
      delta = this.griblist[i] - time;
      if (this.griblist[i] >= gribtimebefore && this.griblist[i] <= time)
      {
        gribtimebefore = this.griblist[i];
      }
      if (this.griblist[i] <= gribtimeafter && this.griblist[i] >= time)
      {
        gribtimeafter = this.griblist[i];
      }
    }
    this.gribtimeBefore = gribtimebefore;
    this.gribtimeAfter = gribtimeafter;
    this.time = time;
    this.redraw();
  },

  setGribLevel: function(bounds)
  {
    //bounds in LATLON
    var i;
    widthlon = Math.abs(bounds.left - bounds.right);
    heightlat = Math.abs(bounds.top - bounds.bottom);
    for (i = this.windLevels.length - 1; i >= 0; i--)
    {
      if ((widthlon < 2 * this.windLevels[i].blocx) && (heightlat < 2 * this.windLevels[i].blocy)) break;
    }
    this.gribLevel = Math.max(i, 0);
    return (i);
  },

  windAtPosition: function(latlon)
  {
    return this.windLevels[this.gribLevel].getWindInfo(latlon.lat, latlon.lon);
  },

  /**
   * Method: moveTo
   *
   * Parameters:
   * bounds - {<OpenLayers.Bounds>}
   * zoomChanged - {Boolean}
   * dragging - {Boolean}
   */
  moveTo: function(bounds, zoomChanged, dragging)
  {
    let windarea, bl;

    OpenLayers.Layer.prototype.moveTo.apply(this, arguments);

    // The code is currently too slow to update the rendering during dragging.
    if (dragging) return;

    //define region in pixel and in lat/lon
    var posstart = this.map.getLayerPxFromLonLat(new OpenLayers.LonLat(bounds.left, bounds.top));
    var poslimit = this.map.getLayerPxFromLonLat(new OpenLayers.LonLat(bounds.right, bounds.bottom));
    poslimit.x -= posstart.x;
    poslimit.y -= posstart.y;


    let boundsLonLat = bounds.transform(
      new OpenLayers.Projection("EPSG:900913"), // from Spherical Mercator Projection
      new OpenLayers.Projection("EPSG:4326") // transform to WGS 1984
    );

    let BigGrib = Math.abs(bounds.left - bounds.right) > 30 || Math.abs(bounds.top - bounds.bottom) > 30;
    this.UpdateGribMap(BigGrib);
    //console.log("BigGrib"+BigGrib+" "+bounds.left+" "+bounds.right+" "+bounds.top+" "+bounds.bottom);

    //canvas object
    var ctx = this.canvas.getContext('2d');

    // Unfortunately OpenLayers does not currently support layers that
    // remain in a fixed position with respect to the screen location
    // of the base layer, so this puts this layer manually back into
    // that position using one point's offset as determined earlier.
    ctx.canvas.style.left = (posstart.x) + 'px';
    ctx.canvas.style.top = (posstart.y) + 'px';
    ctx.canvas.width = poslimit.x;
    ctx.canvas.height = poslimit.y;

    //Fix some feature of the canvas
    this.drawContext(ctx);

    //Get griblevel // FIXME : should use the native zoom level
    if (BigGrib)
    {
      this.setGribLevel(boundsLonLat);
      bl = this.windLevels[this.gribLevel].getWindAreas(boundsLonLat);
      for (i = 0; i < bl.length; i++)
      {

        windarea = bl[i]; //la zone

        if (!windarea.isLoaded(this.gribtimeBefore) || !windarea.isLoaded(this.gribtimeAfter)) continue; //pas chargÃ©, on passe

        //Passe en sphÃ©rique
        bounds = windarea.clone();
        bounds.transform(
          new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
          new OpenLayers.Projection("EPSG:900913") // to Spherical Mercator Projection
        );

        //passe en pixel
        start = this.map.getLayerPxFromLonLat(new OpenLayers.LonLat(bounds.left, bounds.top));
        end = this.map.getLayerPxFromLonLat(new OpenLayers.LonLat(bounds.right, bounds.bottom));

        //rÃ©aligne le premier pixel de la zone
        start.x -= posstart.x;
        start.y -= posstart.y;
        end.x -= posstart.x;
        end.y -= posstart.y;

        //aligne le dÃ©but des flÃªches a un multiple de la grille
        start.x = Math.ceil(start.x / this.arrowstep) * this.arrowstep;
        start.y = Math.ceil(start.y / this.arrowstep) * this.arrowstep;

        //On trace sur une partie visible
        if (start.x < 0) start.x = 0;
        if (start.y < 0) start.y = 0;
        if (end.x > poslimit.x) end.x = poslimit.x;
        if (end.y > poslimit.y) end.y = poslimit.y;

        //tracé proprement dit
        this.drawWindAreaBig(start, end, windarea, ctx);
      }
    }
    else
    {
      bounds.transform(
        new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
        new OpenLayers.Projection("EPSG:900913") // to Spherical Mercator Projection
      );

      //passe en pixel
      start = this.map.getLayerPxFromLonLat(new OpenLayers.LonLat(bounds.left, bounds.top));
      end = this.map.getLayerPxFromLonLat(new OpenLayers.LonLat(bounds.right, bounds.bottom));

      //réaligne le premier pixel de la zone
      start.x -= posstart.x;
      start.y -= posstart.y;
      end.x -= posstart.x;
      end.y -= posstart.y;

      //aligne le début des flêches a un multiple de la grille
      start.x = Math.ceil(start.x / this.arrowstep) * this.arrowstep;
      start.y = Math.ceil(start.y / this.arrowstep) * this.arrowstep;

      //On trace sur une partie visible
      if (start.x < 0) start.x = 0;
      if (start.y < 0) start.y = 0;
      if (end.x > poslimit.x) end.x = poslimit.x;
      if (end.y > poslimit.y) end.y = poslimit.y;

      //tracé proprement dit
      this.drawWindAreaSmall(start, end, windarea, ctx);
    }
  },

  drawWindArea: function(p, poslimit, windarea, ctx, InCallBack)
  {
    throw "Deprecated drawWindArea";
  },

  drawWindAreaBig: function(p, poslimit, windarea, ctx, InCallBack)
  {
    var bstep = this.arrowstep;
    var wante = windarea.windArrays[this.gribtimeBefore];
    var wpost = windarea.windArrays[this.gribtimeAfter];

    //FIXME: faire un bench pour comparer le cas de re crÃ©ation d'objet Pixel()

    while (p.x < poslimit.x)
    {
      p.y = 0; //FIXME: pourquoi 0 ? on devrait stocker p.y et le rÃ©injecter...
      while (p.y < poslimit.y)
      {
        //passage du pixel en latlon (gÃ©ographique)
        LonLat = this.map.getLonLatFromPixel(p).transform(
          new OpenLayers.Projection("EPSG:900913"), // from Spherical Mercator Projection
          new OpenLayers.Projection("EPSG:4326") // transform to WGS 1984
        );

        //Récupère le vent et l'affiche en l'absence d'erreur
        try
        {
          winfo = windarea.getWindInfo2(LonLat.lat, LonLat.lon, this.time, wante, wpost);
          this.drawWind(ctx, p.x, p.y, winfo);

        }
        catch (error)
        {
          if (ErrorCatching > 0)
          {
            alert(LonLat + " / " + winfo.wspeed + " / " + winfo.wheading);
            ErrorCatching -= 1;
          }
        }
        p.y += bstep;
      }
      p.x += bstep;
    }
  },

  UpdateGribMap: function(BigGrib)
  {
    if (BigGrib)
    {
      $(".BigGrib").css("display", "block");
      $(".SmallGrib").css("display", "none");
    }
    else
    {
      $(".BigGrib").css("display", "none");
      $(".SmallGrib").css("display", "block");
    }
  },

  drawWindAreaSmall: function(p, poslimit, windarea, ctx, InCallBack)
  {
    let bstep = this.arrowstep;
    //var wante = windarea.windArrays[this.gribtimeBefore];
    //var wpost = windarea.windArrays[this.gribtimeAfter];

    //FIXME: faire un bench pour comparer le cas de re création d'objet Pixel()

    while (p.x < poslimit.x)
    {
      p.y = 0; //FIXME: pourquoi 0 ? on devrait stocker p.y et le réinjecter...
      while (p.y < poslimit.y)
      {
        //passage du pixel en latlon (géographique)
        LonLat = this.map.getLonLatFromPixel(p).transform(
          new OpenLayers.Projection("EPSG:900913"), // from Spherical Mercator Projection
          new OpenLayers.Projection("EPSG:4326") // transform to WGS 1984
        );

        //Récupère le vent et l'affiche en l'absence d'erreur
        try
        {
          //winfo = windarea.getWindInfo2(LonLat.lat, LonLat.lon, this.time, wante, wpost);
          //this.drawWind(ctx, p.x, p.y, winfo);
          let self = this;
          let MI = GribMgr.WindAtPointInTime(new Date(this.time * 1000), LonLat.lat, LonLat.lon,
            /* jshint -W083*/
            InCallBack ? null : function()
            {
              self.drawWindArea(p, poslimit, windarea, ctx, true);
            });
          /*jshint +W083*/
          if (MI)
          {
            winfo = new Wind(MI.Speed, MI.Heading);
            this.drawWind(ctx, p.x, p.y, winfo);
          }
          else
          {
            //InCallBack=true;
          }

        }
        catch (error)
        {
          if (ErrorCatching > 0)
          {
            alert(LonLat + " / " + winfo.wspeed + " / " + winfo.wheading);
            ErrorCatching -= 1;
          }
        }
        p.y += bstep;
      }
      p.x += bstep;
    }
  },

  // return the color based on the wind speed
  // parameters:
  // wspeed: the wind speed.
  windSpeedToColor: function(wspeed)
  {
    if (wspeed <= 10.0)
    {
      if (wspeed <= 3.0)
      {
        if (wspeed <= 1.0)
        {
          return '#FFFFFF';
        }
        else
        {
          return '#9696E1';
        }
      }
      else
      {
        if (wspeed <= 6.0)
        {
          return '#508CCD';
        }
        else
        {
          return '#3C64B4';
        }
      }
    }
    else
    {
      if (wspeed <= 33.0)
      {
        if (wspeed <= 21.0)
        {
          if (wspeed <= 15.0)
          {
            return '#41B464';
          }
          else
          {
            return '#B4CD0A';
          }
        }
        else
        {
          if (wspeed <= 26.0)
          {
            return '#D2D216';
          }
          else
          {
            return '#E1D220';
          }
        }
      }
      else
      {
        if (wspeed <= 40.0)
        {
          return '#FFB300';
        }
        if (wspeed <= 47.0)
        {
          return '#FF6F00';
        }
        if (wspeed <= 55.0)
        {
          return '#FF2B00';
        }
        if (wspeed <= 63.0)
        {
          return '#E60000';
        }
      }
    }
    return '#7F0000';
  },

  drawWindTriangle: function(context, x, y, pos_wind)
  {
    var a, b, c, bary, offset;
    var wheading;
    var wspdlog;

    windarrow_minsize = 4; // FIXME external constants ?
    windarrow_minwidth = 0;

    wspdlog = Math.log(pos_wind.wspeed + 1);
    wheading = (pos_wind.wheading + 180.0) % 360.0;

    a = new Gribmap.Pixel(x, y);
    b = new Gribmap.Pixel(x, y);
    c = new Gribmap.Pixel(x, y);

    a.moveByPolar(windarrow_minsize + wspdlog * 4.0, wheading);
    b.moveByPolar(windarrow_minwidth + wspdlog, wheading - 90.0);
    c.moveByPolar(windarrow_minwidth + wspdlog, wheading + 90.0);

    bary = new Gribmap.Pixel((a.x + b.x + c.x) / 3, (a.y + b.y + c.y) / 3);
    offset = new Gribmap.Pixel(x - bary.x, y - bary.y);
    a.moveBy(offset);
    b.moveBy(offset);
    c.moveBy(offset);

    context.toffset = offset;
    context.midx = (a.x + x) / 2;

    context.beginPath();
    context.moveTo(a.x, a.y);
    context.lineTo(b.x, b.y);
    context.lineTo(c.x, c.y);
    context.fill();
    context.stroke();
    context.closePath();
  },

  // draw wind information around the arrow
  // parameters:
  // context, the canvas context
  // x, y, the coordinates in the window
  // wspeed, wheading, wind speed and wind heading
  drawWindText: function(context, x, y, pos_wind)
  {
    var text_x = context.midx;
    var text_y = y + context.toffset.y;
    var wind_direction = pos_wind.wheading;

    if (wind_direction > 90.0 && wind_direction < 270.0)
    {
      //  text_y +=10;
      text_y += 13 + 5 * Math.cos(wind_direction * Math.PI / 180.0);
    }
    else
    {
      //  text_y -=5;
      text_y -= 7 - 5 * Math.cos(wind_direction * Math.PI / 180.0);
    }
    context.fillText("" + Math.round(pos_wind.wspeed) + "/" +
      Math.round(wind_direction) + "°",
      text_x, text_y);
  },

  drawContext: function(context)
  {
    context.font = '8px sans-serif';
    context.textAlign = 'center';
    context.strokeStyle = '#fff';
    context.lineWidth = 0.5;

  },

  // draw wind information, wind arrows and text in the color relative
  // to the wind speed
  // parameters:
  // context, the canvas context
  // x, y, the coordinates in the window
  // wspeed, wheading, wind speed and wind heading
  drawWind: function(context, x, y, pos_wind)
  {
    if (pos_wind === null)
    {
      return;
    }
    context.fillStyle = this.windSpeedToColor(pos_wind.wspeed);
    this.drawWindTriangle(context, x, y, pos_wind);
    context.fillStyle = '#626262';
    this.drawWindText(context, x, y, pos_wind);
  },


  CLASS_NAME: 'Gribmap.Layer'

});

/**
 * Class: Gribmap.ControlWind
 *
 * Inherits from:
 *  - <OpenLayers.Control.ControlSwitch>
 */
Gribmap.ControlWind =
  OpenLayers.Class(OpenLayers.Control.ControlSwitch,
  {

    label: "Gribmap.ControlWind",

    timeOffsetSpan: null,

    initialize: function(options)
    {
      OpenLayers.Control.prototype.initialize.apply(this, arguments);
    },

    drawBaseDiv: function()
    {
      this.baseDiv.appendChild(this.imgButton("west-mini.png", "Gribmap_Backward", this.onClickBackward));
      this.timeOffsetSpan = this.textButton(" 0h ", "reset", this.onClickReset);
      this.baseDiv.appendChild(this.timeOffsetSpan);
      this.baseDiv.appendChild(this.imgButton("east-mini.png", "Gribmap_Forward", this.onClickForward));

    },

    imgButton: function(imgname, imgid, callback)
    {

      var imgLocation = OpenLayers.Util.getImagesLocation();
      var sz = new OpenLayers.Size(18, 18);

      // maximize button div
      var img = imgLocation + imgname;
      var button = OpenLayers.Util.createAlphaImageDiv(
        imgid,
        null,
        sz,
        img,
        "relative");
      OpenLayers.Event.observe(button, "click", OpenLayers.Function.bind(callback, this, img));
      return button;
    },

    textButton: function(text, textid, callback)
    {
      var textSpan = document.createElement("span");
      OpenLayers.Element.addClass(textSpan, textid);
      textSpan.innerHTML = text;
      OpenLayers.Event.observe(textSpan, "click", OpenLayers.Function.bind(callback, this, textSpan));
      return textSpan;
    },

    getGribmapLayer: function()
    {
      if (this.gribmap) return this.gribmap;
      if (this.map)
      {
        this.gribmap = this.map.getLayersByClass("Gribmap.Layer")[0];
      }
      return this.gribmap;
    },

    onClickReset: function(ctrl, evt)
    {
      OpenLayers.Event.stop(evt ? evt : window.event);
      l = this.getGribmapLayer();
      l.timereset();
      this.timeOffsetSpan.innerHTML = " " + Math.round(l.timeoffset / 3600) + "h ";
    },

    onClickForward: function(ctrl, evt)
    {
      OpenLayers.Event.stop(evt ? evt : window.event);
      l = this.getGribmapLayer();
      l.timeforward();
      this.timeOffsetSpan.innerHTML = " " + Math.round(l.timeoffset / 3600) + "h ";
    },

    onClickBackward: function(ctrl, evt)
    {
      OpenLayers.Event.stop(evt ? evt : window.event);
      l = this.getGribmapLayer();
      l.timebackward();
      this.timeOffsetSpan.innerHTML = " " + Math.round(l.timeoffset / 3600) + "h ";
    },


    CLASS_NAME: "Gribmap.ControlWind hidden"
  });

/**
 * Class: Gribmap.MousePosition
 *
 * Inherits from:
 *  - <OpenLayers.Control.MousePosition>
 */
Gribmap.MousePosition =
  OpenLayers.Class(OpenLayers.Control.MousePosition,
  {

    gribmap: null,

    initialize: function(options)
    {
      OpenLayers.Control.prototype.initialize.apply(this, arguments);
    },

    formatOutput: function(lonLat)
    {
      var retstr = OpenLayers.Util.getFormattedLonLat(lonLat.lat, 'lat', 'dms');
      retstr += " " + OpenLayers.Util.getFormattedLonLat(lonLat.lon, 'lon', 'dms');
      GM_Pos = lonLat;

      // Fix me, use map date for showing the grib info
      var MI = GribMgr.WindAtPointInTime(new Date(), lonLat.lat, lonLat.lon);
      if (MI)
      {
        winfo = new Wind(MI.Speed, MI.Heading);
        retstr += " - " + Math.round(MI.Speed * 10) / 10 + "n / " + Math.round(MI.Heading * 10) / 10 + "°";
      }

      return retstr;
    },
    CLASS_NAME: "Gribmap.MousePosition"
  });
// Create and init a manager
var GribMgr = new VLM2GribManager();

GribMgr.Init();

function GribData(InitStruct)
{
  this.UGRD = NaN;
  this.VGRD = NaN;
  this.TWS = NaN;

  if (typeof InitStruct !== "undefined")
  {
    this.UGRD = InitStruct.UGRD;
    this.VGRD = InitStruct.VGRD;
    this.TWS = InitStruct.TWS;
  }

  this.Strength = function()
  {
    return Math.sqrt(this.UGRD * this.UGRD + this.VGRD * this.VGRD) * 1.9438445; //* 3.6 / 1.852
  };

  this.Direction = function()
  {
    var t_speed = Math.sqrt(this.UGRD * this.UGRD + this.VGRD * this.VGRD);
    dir = Math.acos(-this.VGRD / t_speed);

    if (this.UGRD > 0)
    {
      dir = 2 * Math.PI - dir;
    }
    dir = (dir / Math.PI * 180) % 360;

    if (dir < 0)
    {
      dir += 360;
    }
    else if (dir >= 360)
    {
      dir -= 360;
    }

    return dir;
  };
}

function WindData(InitStruct)
{
  this.Speed = NaN;
  this.Heading = NaN;
  this.IsValid = function()
  {
    return (!isNaN(this.Speed)) && (!isNaN(this.Heading));
  };

  if (typeof InitStruct !== "undefined")
  {
    this.Speed = InitStruct.Speed;
    this.Heading = InitStruct.Heading;
  }

}

function VLM2GribManager()
{
  this.Tables = [];
  this.TableTimeStamps = [];
  this.Inited = false;
  this.Initing = false;
  this.MinWindStamp = 0;
  this.MaxWindStamp = 0;
  this.WindTableLength = 0;
  this.LoadQueue = [];
  this.GribStep = 0.5; // Grib Grid resolution
  this.LastGribDate = new Date(0);

  this.Init = function()
  {
    if (this.Inited || this.Initing)
    {
      return;
    }
    this.Initing = true;
    $.get("/ws/windinfo/list.php?v=" + Math.round(new Date().getTime() / 1000 / 60 / 3), this.HandleGribList.bind(this));
  };

  this.HandleGribList = function(e)
  {
    this.TableTimeStamps = e.grib_timestamps;
    this.Inited = true;
    this.Initing = false;
    this.MinWindStamp = new Date(this.TableTimeStamps[0] * 1000);
    this.MaxWindStamp = new Date(this.TableTimeStamps[this.TableTimeStamps.length - 1] * 1000);
    this.WindTableLength = this.TableTimeStamps.length;
  };

  this.WindAtPointInTime = function(Time, Lat, Lon, callback)
  {
    if (!this.Inited)
    {
      return false;
    }

    const GribGrain = 3.0 * 3600.0; // 1 grib every 3 hours.
    var TableIndex = Math.floor((Time / 1000.0 - this.MinWindStamp / 1000) / (GribGrain));

    if (TableIndex < 0)
    {
      // Before avaible grib 
      return false;
    }

    if (TableIndex + 1 >= this.TableTimeStamps.length)
    {
      // To far in the future
      return false;
    }

    let RetInfo = new WindData();

    if (Math.abs(Lat) > 85)
    {
      RetInfo.Heading = 0;
      RetInfo.Speed = 0;
      return RetInfo;
    }

    // Precheck to force loading the second grib, and avoid optimization not checking 2nd when first is needs loading
    let t1 = this.CheckGribLoaded(TableIndex, Lat, NormalizeLongitudeDeg(Lon));
    let t2 = this.CheckGribLoaded(TableIndex + 1, Lat + this.GribStep, NormalizeLongitudeDeg(Lon + this.GribStep), callback);

    if (t1 && !t2)
    {
      //alert("anomaly at "+Lat+this.GribStep+ "/" + NormalizeLongitudeDeg(Lon+this.GribStep))
      t2 = this.CheckGribLoaded(TableIndex + 1, Lat + this.GribStep, NormalizeLongitudeDeg(Lon + this.GribStep));
    }
    if (!t1 || !t2)
    {
      return false;
    }

    // Ok, now we have the grib data in the table before and after requested time for requested position
    var MI0 = this.GetHydbridMeteoAtTimeIndex(TableIndex, Lat, Lon);
    var MI1 = this.GetHydbridMeteoAtTimeIndex(TableIndex + 1, Lat, Lon);


    var u0 = MI0.UGRD;
    var v0 = MI0.VGRD;
    var u1 = MI1.UGRD;
    var v1 = MI1.VGRD;

    var DteOffset = Time / 1000 - this.TableTimeStamps[TableIndex];


    var GInfo = new GribData(
    {
      UGRD: u0 + DteOffset / GribGrain * (u1 - u0),
      VGRD: v0 + DteOffset / GribGrain * (v1 - v0)
    });

    RetInfo.Heading = GInfo.Direction();
    RetInfo.Speed = MI0.TWS + DteOffset / GribGrain * (MI1.TWS - MI0.TWS);

    return RetInfo;
  };

  this.GetHydbridMeteoAtTimeIndex = function(TableIndex, Lat, Lon)
  {

    // Compute grid index to get the values
    var LonIdx1 = 180 / this.GribStep + Math.floor(Lon / this.GribStep);
    var LatIdx1 = 90 / this.GribStep + Math.floor(Lat / this.GribStep);
    var LonIdx2 = (LonIdx1 + 1) % (360 / this.GribStep);
    var LatIdx2 = (LatIdx1 + 1) % (360 / this.GribStep);

    var dX = (Lon / this.GribStep - Math.floor(Lon / this.GribStep));
    var dY = (Lat / this.GribStep - Math.floor(Lat / this.GribStep));

    // Get UVS for each 4 grid points
    var U00 = this.Tables[TableIndex][LonIdx1][LatIdx1].UGRD;
    var U01 = this.Tables[TableIndex][LonIdx1][LatIdx2].UGRD;
    var U10 = this.Tables[TableIndex][LonIdx2][LatIdx1].UGRD;
    var U11 = this.Tables[TableIndex][LonIdx2][LatIdx2].UGRD;

    var V00 = this.Tables[TableIndex][LonIdx1][LatIdx1].VGRD;
    var V01 = this.Tables[TableIndex][LonIdx1][LatIdx2].VGRD;
    var V10 = this.Tables[TableIndex][LonIdx2][LatIdx1].VGRD;
    var V11 = this.Tables[TableIndex][LonIdx2][LatIdx2].VGRD;

    var S00 = this.Tables[TableIndex][LonIdx1][LatIdx1].Strength();
    var S01 = this.Tables[TableIndex][LonIdx1][LatIdx2].Strength();
    var S10 = this.Tables[TableIndex][LonIdx2][LatIdx1].Strength();
    var S11 = this.Tables[TableIndex][LonIdx2][LatIdx2].Strength();

    tws = this.QuadraticAverage(S00, S01, S10, S11, dX, dY);

    var retmeteo = new GribData(
    {
      UGRD: this.QuadraticAverage(U00, U01, U10, U11, dX, dY),
      VGRD: this.QuadraticAverage(V00, V01, V10, V11, dX, dY),
      TWS: tws
    });

    return retmeteo;
  };

  this.QuadraticAverage = function(V00, V01, v10, V11, dX, dY)
  {
    var V0 = V00 + dY * (V01 - V00);
    var V1 = v10 + dY * (V11 - v10);
    return V0 + dX * (V1 - V0);
  };

  this.CheckGribLoaded = function(TableIndex, Lat, Lon, callback)
  {
    var LonIdx1 = 180 / this.GribStep + Math.floor(Lon / this.GribStep);
    var LatIdx1 = 90 / this.GribStep + Math.floor(Lat / this.GribStep);
    var LonIdx2 = 180 / this.GribStep + Math.ceil(Lon / this.GribStep);
    var LatIdx2 = 90 / this.GribStep + Math.ceil(Lat / this.GribStep);

    if (TableIndex in this.Tables)
    {

      if (this.Tables[TableIndex][LonIdx1] && this.Tables[TableIndex][LonIdx1][LatIdx1] && this.Tables[TableIndex][LonIdx1][LatIdx2] &&
        this.Tables[TableIndex][LonIdx2] && this.Tables[TableIndex][LonIdx2][LatIdx1] && this.Tables[TableIndex][LonIdx2][LatIdx2])
      {
        return true;
      }
    }

    //console.log("need "+Lat+" " +Lon);
    this.CheckGribLoadedIdx(TableIndex, LonIdx1, LatIdx1, callback);
    this.CheckGribLoadedIdx(TableIndex, LonIdx1, LatIdx2, callback);
    this.CheckGribLoadedIdx(TableIndex, LonIdx2, LatIdx1, callback);
    this.CheckGribLoadedIdx(TableIndex, LonIdx2, LatIdx2, callback);

    return false;

  };

  this.CheckGribLoadedIdx = function(TableIndex, LonIdx, LatIdx, callback)
  {

    if (isNaN(LonIdx) || isNaN(LatIdx))
    {
      var dbgpt = 0;
    }

    if (this.Tables.length && this.Tables[TableIndex] && this.Tables[TableIndex][LonIdx] && this.Tables[TableIndex][LonIdx][LatIdx])
    {
      return;
    }

    //Getting there means we need to load from server
    // Get samrtgrib list for the current request position
    var RequestSize = 5; // Assume 5° zone even though VLM request is for 15°. Most request will only return 1 zone.
    var Lat = (LatIdx * this.GribStep - 90);
    var Lon = (LonIdx * this.GribStep - 180);
    var SouthStep = Math.floor(Lat / RequestSize) * RequestSize;
    var WestStep = Math.floor(Lon / RequestSize) * RequestSize;
    var NorthStep, EastStep;

    if (Lat < SouthStep)
    {
      NorthStep = SouthStep;
      SouthStep = NorthStep - 2 * RequestSize;
    }
    else
    {
      NorthStep = SouthStep + 2 * RequestSize;
    }

    if (Lon < WestStep)
    {
      EastStep = WestStep;
      WestStep = EastStep - 2 * RequestSize;
    }
    else
    {
      EastStep = WestStep + 2 * RequestSize;
    }

    if (EastStep > 180)
    {
      EastStep = 180;
      this.CheckGribLoadedIdx(TableIndex, 0, LatIdx, callback);
    }
    if (WestStep < -180)
    {
      WestStep = -180;
      this.CheckGribLoadedIdx(TableIndex, 180 / this.GribStep - 1, LatIdx, callback);
    }

    let LoadKey = "0/" + WestStep + "/" + EastStep + "/" + NorthStep + "/" + SouthStep;
    this.AddGribLoadKey(LoadKey, NorthStep, SouthStep, WestStep, EastStep);

  };

  this.AddGribLoadKey = function(LoadKey, NorthStep, SouthStep, WestStep, EastStep)
  {
    if (!(LoadKey in this.LoadQueue))
    {
      //console.log("requesting " + LoadKey );
      this.LoadQueue[LoadKey] = {
        length: 0,
        CallBacks: []
      };
      this.LoadQueue[LoadKey].Length = 0;
      $.get(Gribmap.ServerURL() + "/ws/windinfo/smartgribs.php?north=" + NorthStep + "&south=" + (SouthStep) + "&west=" + (WestStep) + "&east=" + (EastStep) + "&seed=" + (0 + new Date()),
        this.HandleGetSmartGribList.bind(this, LoadKey));
    }

    if (typeof callback !== "undefined" && callback)
    {
      this.LoadQueue[LoadKey].CallBacks.push(callback);
      //console.log("Adding to callback load queue "+ LoadKey + ":"+this.LoadQueue[LoadKey].CallBacks.length);

    }
  };

  this.HandleGetSmartGribList = function(LoadKey, e)
  {
    if (e.success)
    {

      // Handle grib change
      if (this.LastGribDate !== parseInt(e.GribCacheIndex, 10))
      {
        // Grib changed, record, and clear Tables, force reinit
        this.LastGribDate = e.GribCacheIndex;
        this.Tables = [];
        this.Inited = false;
        this.Init();
      }

      for (let index in e.gribs_url)
      {
        if (e.gribs_url[index])
        {
          let url = e.gribs_url[index].replace(".grb", ".txt");
          let seed = 0; //parseInt((new Date).getTime());
          //console.log("smartgrib points out " + url);
          $.get("/cache/gribtiles/" + url + "&v=" + seed, this.HandleSmartGribData.bind(this, LoadKey, url));
          this.LoadQueue[LoadKey].Length++;
        }
      }


    }
    else
    {
      console.log(e);
    }

  };

  this.HandleSmartGribData = function(LoadKey, Url, e)
  {
    this.ProcessInputGribData(Url, e, LoadKey);

    this.LoadQueue[LoadKey].Length--;

    if (!this.LoadQueue[LoadKey].Length)
    {

      // Successfull load of one item from the loadqueue
      // Clear all pending callbacks for this call
      for (let index in this.LoadQueue[LoadKey].CallBacks)
      {
        if (this.LoadQueue[LoadKey].CallBacks[index])
        {
          this.LoadQueue[LoadKey].CallBacks[index]();
        }
      }

      delete this.LoadQueue[LoadKey];
    }
  };

  this.ForceReloadGribCache = function(LoadKey, Url)
  {
    var Seed = 0; //parseInt(new Date().getTime(),10);
    $.get("/cache/gribtiles/" + Url + "&force=yes&seed=" + Seed, this.HandleSmartGribData.bind(this, LoadKey, Url));
    this.LoadQueue[LoadKey].Length++;
  };

  this.ProcessInputGribData = function(Url, Data, LoadKey)
  {
    var Lines = Data.split("\n");
    var TotalLines = Lines.length;
    var Catalog = [];
    var HeaderCompleted = false;

    // Handle cache mess
    if (Data === "--\n")
    {
      /*var Parms = Url.split("/")
      this.LoadQueue[LoadKey]++;
      if (Parms[2] != 15)
      {
        var i = 0;    
      }
      //$.get("/gribtiles.php?south="+ Parms[0]+"&west="+Parms[1]+"&step="+ Parms[2]+"&fmt=txt",this.HandleSmartGribData .bind(this,LoadKey, Url));
      */
      this.ForceReloadGribCache(LoadKey, Url);
      return;
    }
    else if (Data.search("invalid") !== -1)
    {
      console.log("invalid request :" + Url);
      return;
    }

    // Loop data catalog
    for (let i = 0; i < TotalLines; i++)
    {
      var Line = Lines[i];

      if (Line === "--")
      {
        break;
      }
      Catalog.push(this.ProcessCatalogLine(Line));
    }

    if (Catalog.length < this.WindTableLength)
    {
      // Force reloading, it table is shorter than windlist
      this.ForceReloadGribCache(LoadKey, Url);
      return;
    }

    // Now Process the data
    var ZoneOffsets = Url.split("/");
    var DataStartIndex = Catalog.length + 1;
    for (let i = 0; i < Catalog.length; i++)
    {
      if (typeof Lines[DataStartIndex] === "undefined" || Lines[DataStartIndex] === "")
      {
        // Somehow sometimes, the data is incomplete, just get out, until next request.
        //console.log("Incomplete data file. Forcing rebuild..." + Url);
        this.ForceReloadGribCache(LoadKey, Url);
        break;
      }
      var DataSize = Lines[DataStartIndex].split(" ");
      var NbLon = parseInt(DataSize[0], 10);
      var NbLat = parseInt(DataSize[1], 10);

      var StartLon = 180 / this.GribStep + parseInt(ZoneOffsets[1], 10) / this.GribStep;

      for (var LonIdx = 0; LonIdx < NbLon; LonIdx++)
      {
        // Offset by NbLat in grib since the zone is reference by bottom lat, but counts down from top lat
        var StartLat = NbLat + 90 / this.GribStep + parseInt(ZoneOffsets[0], 10) / this.GribStep;

        for (var LatIdx = 0; LatIdx < NbLat; LatIdx++)
        {
          if (!(Catalog[i].DateIndex in this.Tables))
          {
            this.Tables[Catalog[i].DateIndex] = [];
          }

          var CurTable = this.Tables[Catalog[i].DateIndex];

          if (!(StartLon + LonIdx in CurTable))
          {
            CurTable[StartLon + LonIdx] = [];
          }
          if (!((StartLat - LatIdx - 1) in CurTable[StartLon + LonIdx]))
          {
            CurTable[StartLon + LonIdx][StartLat - LatIdx - 1] = null;
          }

          var GribPoint = this.Tables[Catalog[i].DateIndex][StartLon + LonIdx][StartLat - LatIdx - 1];

          if (typeof GribPoint === "undefined" || !GribPoint)
          {
            GribPoint = new GribData();
            this.Tables[Catalog[i].DateIndex][StartLon + LonIdx][StartLat - LatIdx - 1] = GribPoint;
          }

          GribPoint[Catalog[i].Type] = parseFloat(Lines[DataStartIndex + 1 + LatIdx * NbLon + LonIdx]);
        }
      }
      /*console.log("Loaded table "+ Catalog[i].DateIndex);
      console.log("Loaded lon index  "+ StartLon + "->" + (StartLon+NbLon));
      console.log("Loaded lat index  "+ (StartLat-1) + "->" + (StartLat-NbLat-1));
      */
      DataStartIndex += NbLon * NbLat + 1;
    }

  };

  this.ProcessCatalogLine = function(Line)
  {
    const POS_TYPE = 3;
    const POS_INDEX = 12;
    var Ret = new WindCatalogLine();
    var Fields = Line.split(":");

    Ret.Type = Fields[POS_TYPE];
    if ((typeof Fields[POS_INDEX] === "undefined") || (Fields[POS_INDEX] === "anl"))
    {
      Ret.DateIndex = 0;
    }
    else
    {
      Ret.DateIndex = parseInt(Fields[POS_INDEX].substring(0, Fields[POS_INDEX].indexOf("hr")), 10) / 3;
    }

    return Ret;
  };
}

function WindCatalogLine()
{
  this.Type = "";
  this.DateIndex = 0;
}

function WindTable()
{
  this.GribStep = 0.5;
  this.Table = [];
  this.TableDate = 0;

  this.Init = function(TableDate)
  {
    for (lat = -90; lat <= 90; lat += this.GribStep)
    {
      for (lon = -90; lon <= 90; lon += this.GribStep)
      {
        this.Table[lat][lon] = null;
      }
    }
  };
}

function HandleGribTestClick(e)
{
  var Boat = _CurPlayer.CurBoat;

  for (var index = 0; index <= 0; index++)
  {
    var time = new Date(Boat.VLMInfo.LUP * 1000 + index * Boat.VLMInfo.VAC * 1000);
    var Mi = GribMgr.WindAtPointInTime(time, Boat.VLMInfo.LAT, Boat.VLMInfo.LON);

    if (Mi)
    {
      console.log(time + " " + Mi.Speed + "@" + Mi.Heading);
    }
    else
    {
      console.log("no meteo yet at time : " + time);
    }
  }
}
//
//
// Some consts 
var RACE_TYPE_CLASSIC = 0;
var RACE_TYPE_RECORD = 1;
var RACE_TYPE_OMORMB = 2;

var FIELD_MAPPING_TEXT = 0;
var FIELD_MAPPING_VALUE = 1;
var FIELD_MAPPING_CHECK = 2;
var FIELD_MAPPING_IMG = 3;
var FIELD_MAPPING_CALLBACK = 4;

var MAX_PILOT_ORDERS = 5;

var BoatRacingStatus = ["RAC", "CST", "LOC", "DNS"];
var BoatArrivedStatus = ["ARR"];
var BoatNotRacingStatus = ["DNF", "HC", "HTP"];
var BoatRacingClasses = {
  "RAC": "ft_class_racing",
  "CST": "ft_class_oncoast",
  "LOC": "ft_class_locked",
  "DNS": "ft_class_dns"
};

// Global (beurk) holding last position return by OL mousemove.
var GM_Pos = null;
var GribWindController = null;

// Ranking related globals
var Rankings = [];
var PilototoFt = null;
var RankingFt = null;
var RaceHistFt = null;
var ICS_WPft = null;
var NSZ_WPft = null;

var RC_PwdResetReq = null;
var RC_PwdResetConfirm = null;
var OnPlayerLoadedCallBack = null;


// On ready get started with vlm management
$(document).ready(
  function()
  {

    ///////////////////////////////////////////////////
    //
    //Debug only this should not stay when releasing
    //
    //$("#TestGrib").click(HandleGribTestClick)
    //$("#StartEstimator").click(HandleEstimatorStart)

    //
    // End Debug only
    //
    ///////////////////////////////////////////////////

    // Setup global ajax error handling
    //setup ajax error handling
    $.ajaxSetup(
    {
      error: function(x, status, error)
      {
        if ((x.status === 401) || (x.status === 403))
        {
          window.location.replace("jvlm?login");
          //on access denied try reviving the session
          //OnLoginRequest();
        }
        else if (x.status === 404)
        {
          // Code removed until ranking exist for not started races.
          //$("#ErrorRedirectPanel").modal('show');
        }
        else
        {
          VLMAlertDanger("An error occurred: " + status + "nError: " + error);
        }
      }
    });
    // Start converse
    //InitXmpp();

    // Init maps
    OLInit();

    // Load translation strings
    InitLocale();

    // Init Menus()
    InitMenusAndButtons();

    // Start-Up Polars manager
    PolarsManager.Init();

    // Init Alerts
    InitAlerts();

    // Handle page parameters if any
    CheckPageParameters();

    // Start the page clocks
    setInterval(PageClock, 1000);

    // Load flags list (keep at the end since it takes a lot of time)
    GetFlagsList();

  }
);

let PasswordResetInfo = [];

function HandlePasswordResetLink(PwdKey)
{
  PasswordResetInfo = unescape(PwdKey).split("|");
  initrecaptcha(false, true);
  $("#ResetaPasswordConfirmation").modal("show");
}

function CheckPageParameters()
{
  let url = window.location.search;
  let RacingBarMode = true;

  if (url)
  {
    let getQuery = url.split('?')[1];
    let params = getQuery.split('&');
    // params is ['param1=value', 'param2=value2'] 
    for (let param in params)
    {
      if (params[param])
      {
        let PArray = params[param].split("=");

        switch (PArray[0])
        {
          case "PwdResetKey":
            HandlePasswordResetLink(PArray[1]);
            break;

          case "RaceRank":
            RacingBarMode = false;
            /* jshint -W083*/
            RankingFt.OnReadyTable = function()
            {
              HandleShowOtherRaceRank(PArray[1]);
            };
            /* jshint +W083*/
            break;

          case "ICSRace":
            RacingBarMode = false;
            HandleShowICS(PArray[1]);
            break;
        }
      }
    }
  }
  if (RacingBarMode)
  {
    $(".RaceNavBar").css("display", "inherit");
    $(".OffRaceNavBar").css("display", "none");
  }
  else
  {
    $(".RaceNavBar").css("display", "none");
    $(".OffRaceNavBar").css("display", "inherit");
    ShowApropos(false);
  }
}

function HandleShowICS(raceid)
{
  let CallBack = function(result)
  {
    if (result)
    {
      FillRaceInstructions(result);
      $("#RacesInfoForm").modal("show");
    }
  };
  LoadRaceInfo(raceid, null, CallBack);
}


function LoadRaceInfo(RaceId, RaceVersion, CallBack)
{
  if (!RaceVersion)
  {
    RaceVersion = '';
  }
  $.get("/ws/raceinfo/desc.php?idrace=" + RaceId + "&v=" + RaceVersion, CallBack);
}

function HandleShowOtherRaceRank(RaceId)
{
  OnPlayerLoadedCallBack = function()
  {
    let CallBack = function(Result)
    {
      FillRaceInfoHeader(Result);
    };
    LoadRaceInfo(RaceId, 0, CallBack);
    LoadRankings(RaceId, OtherRaceRankingLoaded);
    RankingFt.RaceRankingId = RaceId;
  };

  if (typeof _CurPlayer !== "undefined" && _CurPlayer && _CurPlayer.CurBoat)
  {
    OnPlayerLoadedCallBack();
    OnPlayerLoadedCallBack = null;
  }
}

function OtherRaceRankingLoaded()
{
  $("#Ranking-Panel").show();
  SortRanking("RAC");
  console.log("off race ranking loaded");
}

function OLInit()
{

  //Pour tenter le rechargement des tiles quand le temps de calcul est > au timeout
  OpenLayers.IMAGE_RELOAD_ATTEMPTS = 5;

  var default_latitude = 45.5;
  var default_longitude = -30.0;
  var default_zoom = 4;

  if (typeof VLM2Prefs !== "undefined" && VLM2Prefs.MapPrefs)
  {
    default_zoom = VLM2Prefs.MapPrefs.MapZoomLevel;
  }

  var layeroption = {
    //sphérique
    sphericalMercator: true,
    transitionEffect: "resize",
    //pour passer l'ante-meridien sans souci
    wrapDateLine: true
  };

  //MAP

  map = new OpenLayers.Map(
    "jVlmMap", //identifiant du div contenant la carte openlayer
    MapOptions);

  //NB: see config.js file. Le layer VLM peut utiliser plusieurs sous-domaine pour paralélliser les téléchargements des tiles.
  var urlArray = tilesUrlArray;

  var vlm = new OpenLayers.Layer.XYZ(
    "VLM Layer",
    urlArray,
    layeroption
  );



  //Le calque de vent made in Vlm
  var grib = new Gribmap.Layer("Gribmap", layeroption);
  //grib.setOpacity(0.9); //FIXME: faut il garder une transparence du vent ?

  //La minimap utilise le layer VLM
  var vlmoverview = vlm.clone();

  //Et on ajoute tous les layers à la map.
  //map.addLayers([ VLMBoatsLayer,vlm, wms, bingroad, bingaerial, binghybrid, gphy, ghyb, gsat, grib]);
  map.addLayers([grib, VLMBoatsLayer, vlm]);
  //map.addLayers([vlm, grib]); //FOR DEBUG

  //Controle l'affichage des layers
  //map.addControl(new OpenLayers.Control.LayerSwitcher());

  //Controle l'affichage de la position ET DU VENT de la souris
  map.addControl(new Gribmap.MousePosition(
  {
    gribmap: grib
  }));

  //Affichage de l'échelle
  map.addControl(new OpenLayers.Control.ScaleLine());

  //Le Permalink
  //FIXME: éviter que le permalink soit masqué par la minimap ?
  map.addControl(new OpenLayers.Control.Permalink('permalink'));

  //FIXME: Pourquoi le graticule est il un control ?
  map.addControl(new OpenLayers.Control.Graticule());

  //Navigation clavier
  map.addControl(new OpenLayers.Control.KeyboardDefaults());

  //Le panel de vent

  GribWindController = new Gribmap.ControlWind();
  map.addControl(GribWindController);

  //Evite que le zoom molette surcharge le js du navigateur
  var nav = map.getControlsByClass("OpenLayers.Control.Navigation")[0];
  nav.handlers.wheel.cumulative = false;
  nav.handlers.wheel.interval = 100;

  //Minimap
  var ovmapOptions = {
    maximized: true,
    layers: [vlmoverview]
  };
  map.addControl(new OpenLayers.Control.OverviewMap(ovmapOptions));

  //Pour centrer quand on a pas de permalink dans l'url
  if (!map.getCenter())
  {
    // Don't do this if argparser already did something...
    var lonlat = new OpenLayers.LonLat(default_longitude, default_latitude);
    lonlat.transform(MapOptions.displayProjection, MapOptions.projection);
    map.setCenter(lonlat, default_zoom);
  }

  // Click handler
  var click = new OpenLayers.Control.Click();
  map.addControl(click);
  click.activate();
}

function initrecaptcha(InitPasswordReset, InitResetConfirm)
{
  if (InitPasswordReset && !RC_PwdResetReq)
  {
    RC_PwdResetReq = grecaptcha.render('recaptcha-PwdReset1');
  }

  if (InitResetConfirm && !RC_PwdResetConfirm)
  {
    RC_PwdResetConfirm = grecaptcha.render('recaptcha-PwdReset2');
  }
}

function InitMenusAndButtons()
{
  // Handle modal sizing to fit screen
  $('div.vresp.modal').on('show.bs.modal', function()
  {
    $(this).show();
    setModalMaxHeight(this);
  });

  $(window).resize(function()
  {
    if ($('.modal.in').length != 0)
    {
      setModalMaxHeight($('.modal.in'));
    }
  });

  // Handle password change button
  $("#BtnChangePassword").on("click", function(e)
  {
    e.preventDefault();
    HandlePasswordChangeRequest(e);
  });

  // Handle password reset request, and confirmation
  $("#ResetPasswordButton").on("click", function(e)
  {
    if (RC_PwdResetReq !== null)
    {
      grecaptcha.execute(RC_PwdResetReq);
    }
  });
  $("#ConfirmResetPasswordButton").on("click", function(e)
  {
    if (RC_PwdResetConfirm !== null)
    {
      grecaptcha.execute(RC_PwdResetConfirm);
    }
  });

  // Handle showing/hide of a-propos depending on login dialog status
  $("#LoginForm").on('show.bs.modal', function(e)
  {
    ShowApropos(false);
  });
  $("#LoginForm").on('hide.bs.modal', function(e)
  {
    ShowApropos(true);
  });
  $(".logindlgButton").on('click',
    function(e)
    {
      // Show Login form
      // hide apropos
      $("#LoginForm").modal('show');
    }
  );


  $(".logOutButton").on('click',
    function(e)
    {
      // Logout user
      Logout();
    }
  );

  $("#Menu").menu();
  $("#Menu").hide();

  $("input[type=submit],button")
    .button()
    .click(function(event)
    {
      event.preventDefault();
    });

  // Theme tabs
  $(".JVLMTabs").tabs();

  // Hide all progressbars
  HidePb("#PbLoginProgress");
  HidePb("#PbGetBoatProgress");
  HidePb("#PbGribLoginProgress");

  // Add handler to set the WPMode controller in the proper tab
  $(".BCPane.WP_PM_Mode").click(
    function()
    {
      // Beurk , direct access by indexes :(
      // Assumes second class element is the id of target
      var target = "#" + $(this)[0].classList[2];
      MoveWPBoatControlerDiv(target);
    }
  );

  // Display setting dialog
  $(".BtnRaceList").click(
    function()
    {
      LoadRacesList();
      $("#RacesListForm").modal("show");
    }
  );

  // Handle clicking on ranking button, and ranking sub tabs
  $("#Ranking-Panel").on('shown.bs.collapse',
    function(e)
    {
      HandleRaceSortChange(e);
    }
  );
  // Handle clicking on ranking button, and ranking sub tabs
  $(document.body).on('click', "[RnkSort]", function(e)
  {
    HandleRaceSortChange(e);
  });
  $("#Ranking-Panel").on('hide.bs.collapse',
    function(e)
    {
      ResetRankingWPList(e);
    }
  );


  // Init event handlers
  // Login button click event handler
  $("#LoginButton").click(
    function()
    {
      OnLoginRequest();
    }
  );

  //valide par touche retour
  $('#LoginPanel').keypress(
    function(e)
    {
      if (e.which === '13')
      {
        OnLoginRequest();
        $('#LoginForm').modal('hide');
      }
    }
  );

  // Display setting dialog
  $("#BtnSetting").click(
    function()
    {
      LoadVLMPrefs();
      SetDDTheme(VLM2Prefs.CurTheme);
      $("#SettingsForm").modal("show");
    }
  );

  // Handle SettingsSave button
  $('#SettingValidateButton').click(SaveBoatAndUserPrefs);

  // Handle SettingsSave button
  $('#SettingCancelButton').click(
    function()
    {
      LoadVLMPrefs();
      SetDDTheme(VLM2Prefs.CurTheme);
      $("#SettingsForm").modal("show");
    }
  );

  // Handle SettingsSave button
  $('#SettingValidateButton').click(SaveBoatAndUserPrefs);
  // Handle SettingsSave button
  $('#SettingCancelButton').click(function()
  {
    SetDDTheme(VLM2Prefs.CurTheme);
  });


  // Do fixed heading button
  $("#BtnPM_Heading").click(
    function()
    {
      SendVLMBoatOrder(PM_HEADING, $("#PM_Heading")[0].value);
    }

  );

  // Do fixed angle button
  $("#BtnPM_Angle").click(
    function()
    {
      SendVLMBoatOrder(PM_ANGLE, $("#PM_Angle")[0].value);
    }

  );

  // Tack
  $("#BtnPM_Tack").click(
    function()
    {
      $("#PM_Angle")[0].value = -$("#PM_Angle")[0].value;
    }
  );

  $("#BtnCreateAccount").click(
    function()
    {
      HandleCreateUser();
    }
  );

  $('.CreatePassword').pstrength();
  $('#NewPlayerEMail').blur(
    function(e)
    {
      $("#NewPlayerEMail").verimail(
      {
        messageElement: "#verimailstatus",
        language: _CurLocale
      });
    }
  );

  // Handler for Set WP on click
  $("#SetWPOnClick").click(HandleStartSetWPOnClick);
  $("#SetWPOffClick").click(HandleCancelSetWPOnClick);
  HandleCancelSetWPOnClick();

  // Add handlers for autopilot buttons
  $('body').on('click', '.PIL_EDIT', HandlePilotEditDelete);
  $('body').on('click', '.PIL_DELETE', HandlePilotEditDelete);

  $("#AutoPilotAddButton").click(HandleOpenAutoPilotSetPoint);
  $("#AP_SetTargetWP").click(HandleClickToSetWP);

  // AP datetime pickers
  $("#AP_Time").datetimepicker(
  {
    locale: _CurLocale,
    format: 'DD MM YYYY, HH:mm:ss'
    //language: 'fr-FR',
    //parentEl: '#AutoPilotSettingDlg'
  });
  $("#AP_Time").on('dp.change', HandleDateChange);
  $("#APValidateButton").click(HandleSendAPUpdate);
  $(".APField").on('change', HandleAPFieldChange);
  $(".APMode").on('click', HandleAPModeDDClick);

  // Draggable info window
  $(".Draggable").draggable(
  {
    handle: ".modal-header,.modal-body"
  });

  $("#MapPrefsToggle").click(HandleShowMapPrefs);

  $(".chkprefstore").on('change', HandleMapPrefOptionChange);
  $(".MapOppShowLi").click(HandleMapOppModeChange);

  $(".DDTheme").click(HandleDDlineClick);

  // Handle Start Boat Estimator button
  $("#StartEstimator").on('click', HandleStartEstimator);
  $("#EstimatorStopButton").on('click', HandleStopEstimator);

  InitGribSlider();

  InitFootables();

  // Handle clicking on ranking table link
  $(document.body).on('click', ".RaceHistLink", function(e)
  {
    HandleShowBoatRaceHistory(e);
  });

  // Add handler to refresh content of eth pilototo table when showing tab content
  $("[PilRefresh]").on('click', HandleUpdatePilototoTable);

  // Handler for not racing boat palmares
  $("#HistRankingButton").on('click', function(e)
  {
    ShowUserRaceHistory(_CurPlayer.CurBoat.IdBoat);
  });

  // Go To WP Ortho, VMG, VBVMG Modes
  $("#BtnPM_Ortho, #BtnPM_VMG, #BtnPM_VBVMG").click(
    function()
    {
      var WpH = -1;
      var PMMode = PM_ORTHO;
      var Lat = $("#PM_Lat")[0].value;
      var Lon = $("#PM_Lon")[0].value;

      WpH = parseInt($("#PM_WPHeading")[0].value, 10);

      switch ($(this)[0].id)
      {
        case "BtnPM_Ortho":
          PMMode = PM_ORTHO;
          break;

        case "BtnPM_VMG":
          PMMode = PM_VMG;
          break;

        case "BtnPM_VBVMG":
          PMMode = PM_VBVMG;
          break;

      }
      SendVLMBoatOrder(PMMode, Lon, Lat, WpH);
    }
  );

  // InitCalendar link
  $("#CalendarPanel").on("shown.bs.modal", function(e)
  {
    HandleShowAgenda();
  });

  // Handle boat selector selection change
  //
  $(".BoatSelectorDropDownList").on("click", HandleBoatSelectionChange);

  $('#cp11').colorpicker(
  {
    useAlpha: false,
    format: false
  });

  $(document.body).on('click', ".ShowICSButton",
    function(e)
    {
      HandleFillICSButton(e);
    }
  );

  $("#PolarTab").on("click", HandlePolarTabClik);

  CheckLogin();

  UpdateVersionLine();
}

function UpdateVersionLine()
{
  let Build = new moment(BuildDate);
  $("#BuildDate").text("Build : " + Build.fromNow());
  $('[data-toggle="tooltip"]').tooltip();
}
let _CachedRaceInfo = null;

function HandlePolarTabClik()
{
  if (_CachedRaceInfo)
  {
    DrawPolar(_CachedRaceInfo);
  }
}

function InitPolar(RaceInfo)
{
  _CachedRaceInfo = RaceInfo;
}

function HandleFillICSButton(e)
{

  // Race Instruction
  if (typeof _CurPlayer !== "undefined" && _CurPlayer && _CurPlayer.CurBoat && _CurPlayer.CurBoat.RaceInfo)
  {
    FillRaceInstructions(_CurPlayer.CurBoat.RaceInfo);
  }
  else if (typeof e !== "undefined" && e)
  {
    let b = e.target;
    let RaceId = $(e.currentTarget).attr('idRace');

    if (typeof RaceId !== "undefined" && RaceId)
    {
      HandleShowICS(RaceId);
    }
  }
}

let CalInited = false;

function HandleShowAgenda()
{
  jQuery('#Calendar').fullCalendar('destroy');
  jQuery('#Calendar').fullCalendar(
  {
    locale: _CurLocale,
    editable: false,
    header:
    {
      left: 'title',
      center: '',
      right: 'today prev,next'
    },
    firstDay: 1,
    events: "/feed/races.fullcalendar.php",
    data: function()
    { // a function that returns an object
      return {
        jvlm: 1
      };
    },
    timeFormat: 'H:mm',
    loading: function(bool)
    {
      if (bool) jQuery('#loading').show();
      else jQuery('#loading').hide();
    }
  });
  CalInited = true;

  $("#Infos").modal("hide");
}

function HandlePasswordChangeRequest(e)
{
  // Check non empty value for oldpassword
  let OldPwd = $("#CurPassword")[0].value;
  let NewPwd1 = $("#NewPassword1")[0].value;
  let NewPwd2 = $("#NewPassword2")[0].value;

  $(".Password").val("");

  if (!OldPwd || OldPwd === "")
  {
    VLMAlertDanger(GetLocalizedString("CurPwdRequired"));
    return;
  }
  else if (NewPwd1 !== NewPwd2)
  {
    VLMAlertDanger(GetLocalizedString("CurPwdRequired"));
    return;
  }
  else if (NewPwd1 === "")
  {
    VLMAlertDanger(GetLocalizedString("NewPwdRequired"));
    return;
  }

  let PostData = {
    OldPwd: OldPwd,
    NewPwd: NewPwd1
  };

  $.post(
    "/ws/playersetup/password_change.php",
    "parms=" + JSON.stringify(PostData),
    function(e)
    {
      HandlePasswordChangeResult(e);
    }
  );

}

function HandlePasswordChangeResult(e)
{
  if (e.success)
  {
    VLMAlertInfo();
  }
  else
  {
    VLMAlertDanger(GetLocalizedString(e.error.msg));
  }
}

function SendResetPassword(RecaptchaCode)
{
  let PostData = {
    email: PasswordResetInfo[0],
    seed: PasswordResetInfo[1],
    key: RecaptchaCode
  };

  $.get("/ws/playersetup/password_reset.php?email=" + PasswordResetInfo[0] + "&seed=" + PasswordResetInfo[1] + "&key=" + RecaptchaCode,
    function(e)
    {
      HandlePasswordReset(e, true);
    });
}

function SendResetPasswordLink(RecaptchaCode)
{
  let UserMail = $(".UserName").val();


  if (UserMail === "")
  {
    VLMAlertDanger(GetLocalizedString("Enter your email for resetting your password"));
    grecaptcha.reset(RC_PwdResetReq);
    return;
  }

  let PostData = {
    email: UserMail,
    key: RecaptchaCode
  };

  $.post("/ws/playersetup/password_reset.php",
    "parms=" + JSON.stringify(PostData),
    function(e)
    {
      HandlePasswordReset(e, false);
    });
}

function HandlePasswordReset(e, Validation)
{
  if (e.success)
  {
    if (Validation)
    {
      VLMAlertInfo(GetLocalizedString('Check your inbox to get your new password.'));
      grecaptcha.reset(RC_PwdResetReq);
    }
    else
    {
      VLMAlertInfo(GetLocalizedString('An email has been sent. Click on the link to validate.'));
      grecaptcha.reset(RC_PwdResetConfirm);
    }
  }
  else
  {
    VLMAlertDanger("Something went wrong :(");
    grecaptcha.reset(RC_PwdResetReq);
    grecaptcha.reset(RC_PwdResetConfirm);
  }

}

function InitFooTable(Id)
{
  let ret = FooTable.init("#" + Id,
  {
    'name': Id,
    'on':
    {
      'ready.ft.table': HandleReadyTable,
      'after.ft.paging': HandlePagingComplete,
      'postdraw.ft.table': HandleTableDrawComplete
    }
  });
  ret.DrawPending = true;
  ret.CallbackPending = null;
  return ret;
}

function InitFootables()
{
  // Handle race discontinuation request
  $("#DiscontinueRaceButton").on('click', HandleDiscontinueRaceRequest);

  // Init Pilototo footable, and get pointer to object          
  PilototoFt = InitFooTable("PilototoTable");
  RankingFt = InitFooTable("RankingTable");
  RaceHistFt = InitFooTable("BoatRaceHist");
  ICS_WPft = InitFooTable("RaceWayPoints");
  NSZ_WPft = InitFooTable("NSZPoints");
}

function HandleUpdatePilototoTable(e)
{
  UpdatePilotInfo(_CurPlayer.CurBoat);
}

function InitSlider(SliderId, HandleId, min, max, value, SlideCallback)
{
  let handle = $("#" + HandleId);
  $("#" + SliderId).slider(
  {
    orientation: "vertical",
    min: min,
    max: max,
    value: value,
    create: function()
    {
      handle.text($(this).slider("value"));
    },
    slide: function(event, ui)
    {
      SlideCallback(event, ui);
    }
  });

}

function InitGribSlider()
{
  InitSlider("GribSlider", "GribSliderHandle", 0, 72, 0, HandleGribSlideMove);
}

function HandleRaceSortChange(e)
{
  let Target = $(e.currentTarget).attr('rnksort');

  //$("[rnksort]").removeClass("active")
  switch (Target)
  {
    case 'WP':
      SortRanking(Target, $(e.currentTarget).attr('WPRnk'));
      break;
    case 'DNF':
    case 'HTP':
    case 'HC':
    case 'ABD':
    case 'RAC':
    case 'ARR':
      SortRanking(Target);
      break;

    default:
      console.log("Sort change request" + e);
  }

}

function HandleGribSlideMove(event, ui)
{
  let handle = $("#GribSliderHandle");
  handle.text(ui.value);
  let l = GribWindController.getGribmapLayer();
  let GribEpoch = new Date().getTime();
  l.setTimeSegment(GribEpoch / 1000 + ui.value * 3600);

  if (VLM2Prefs.MapPrefs.TrackEstForecast && _CurPlayer.CurBoat.Estimator)
  {
    let EstPos = _CurPlayer.CurBoat.GetClosestEstimatePoint(new Date(GribEpoch + ui.value * 3600 * 1000));
    RefreshEstPosLabels(EstPos);
  }
}

function HandleDiscontinueRaceRequest()
{
  GetUserConfirmation(GetLocalizedString('unsubscribe'), true, HandleRaceDisContinueConfirmation);
}

function HandleRaceDisContinueConfirmation(State)
{
  if (State)
  {
    //construct base
    let BoatId = _CurPlayer.CurBoat.IdBoat;
    let RaceId = _CurPlayer.CurBoat.Engaged;
    DiconstinueRace(BoatId, RaceId);
    $("#ConfirmDialog").modal('hide');
    $("#RacesInfoForm").modal('hide');
  }
  else
  {
    VLMAlertDanger("Ouf!");
  }
}

function HandleStopEstimator(e)
{
  var CurBoat = _CurPlayer.CurBoat;

  if (typeof CurBoat === "undefined" || !CurBoat)
  {
    // Something's wrong, just ignore
    return;
  }

  CurBoat.Estimator.Stop();
}

function HandleStartEstimator(e)
{
  var CurBoat = _CurPlayer.CurBoat;

  if (typeof CurBoat === "undefined" || !CurBoat)
  {
    // Something's wrong, just ignore
    return;
  }

  CurBoat.Estimator.Start(HandleEstimatorProgress);
}

var LastPct = -1;

function HandleEstimatorProgress(Complete, Pct, Dte)
{
  if (Complete)
  {
    $("#StartEstimator").removeClass("hidden");
    $("#PbEstimatorProgressBar").addClass("hidden");
    //$("#PbEstimatorProgressText").addClass("hidden")
    $("#EstimatorStopButton").addClass("hidden");
    LastPct = -1;
  }
  else if (Pct - LastPct > 0.15)
  {
    $("#EstimatorStopButton").removeClass("hidden");
    $("#StartEstimator").addClass("hidden");
    $("#PbEstimatorProgressBar").removeClass("hidden");
    $("#PbEstimatorProgressText").removeClass("hidden");
    $("#PbEstimatorProgressText").text(Pct);
    $("#PbEstimatorProgress").css("width", Pct + "%");
    $("#PbEstimatorProgress").attr("aria-valuenow", Pct);
    $("#PbEstimatorProgress").attr("aria-valuetext", Pct);
    LastPct = Pct;
  }
}

function HandleFlagLineClick(e)
{
  var Flag = e.target.attributes.flag.value;

  SelectCountryDDFlag(Flag);

}

function HandleCancelSetWPOnClick()
{
  SetWPPending = false;
  $("#SetWPOnClick").show();
  $("#SetWPOffClick").hide();
}

function HandleStartSetWPOnClick()
{
  SetWPPending = true;
  WPPendingTarget = "WP";
  $("#SetWPOnClick").hide();
  $("#SetWPOffClick").show();

}

function ClearBoatSelector()
{
  $(".BoatSelectorDropDownList").empty();
}

function AddBoatToSelector(boat, isfleet)
{
  BuildUserBoatList(boat, isfleet);
}

function BuildUserBoatList(boat, IsFleet)
{
  $(".BoatSelectorDropDownList").append(GetBoatDDLine(boat, IsFleet));
}

function GetBoatDDLine(Boat, IsFleet)
{
  var Line = '<li class="DDLine" BoatID="' + Boat.IdBoat + '">';
  Line = Line + GetBoatInfoLine(Boat, IsFleet) + '</li>';
  return Line;
}

function GetBoatInfoLine(Boat, IsFleet)
{
  var Line = "";
  var BoatStatus = "racing";

  if (!Boat.Engaged)
  {
    BoatStatus = "Docked";
  }

  if ((typeof Boat.VLMInfo !== "undefined") && Boat.VLMInfo["S&G"])
  {
    BoatStatus = "stranded";
  }

  if (!IsFleet)
  {
    Line = Line + '<span class="badge">BS';
  }

  Line = Line + '<img class="BoatStatusIcon" src="images/' + BoatStatus + '.png" />';
  if (!IsFleet)
  {
    Line = Line + '</span>';
  }

  Line = Line + '<span>-</span><span>' + HTMLDecode(Boat.BoatName) + '</span>';
  return Line;
}

function ShowBgLoad()
{
  $("#BgLoadProgress").css("display", "block");
}

function HideBgLoad()
{
  $("#BgLoadProgress").css("display", "block");
}

function ShowPb(PBName)
{
  $(PBName).show();
  //LocalizeString();
}

function HidePb(PBName)
{
  $(PBName).hide();
}

function DisplayLoggedInMenus(LoggedIn)
{
  var LoggedInDisplay;
  var LoggedOutDisplay;
  if (LoggedIn)
  {
    LoggedInDisplay = "block";
    LoggedOutDisplay = "none";
  }
  else
  {
    LoggedInDisplay = "none";
    LoggedOutDisplay = "block";
  }
  $("[LoggedInNav='true']").css("display", LoggedInDisplay);
  $("[LoggedInNav='false']").css("display", LoggedOutDisplay);

  if (typeof _CurPlayer !== 'undefined' && _CurPlayer && _CurPlayer.IsAdmin)
  {
    $("[AdminNav='true']").css("display", "block");
  }
  else
  {
    $("[AdminNav='true']").css("display", "none");
  }

  // Display apropos
  ShowApropos(LoggedIn);

}

function ShowApropos(DisplayModal)
{
  $('#Apropos').modal(DisplayModal ? 'hide' : 'show');
}

function HandleRacingDockingButtons(IsRacing)
{
  if (IsRacing)
  {
    $('[RacingBtn="true"]').removeClass("hidden");
    $('[RacingBtn="false"]').addClass("hidden");
  }
  else
  {
    $('[RacingBtn="true"]').addClass("hidden");
    $('[RacingBtn="false"]').removeClass("hidden");
  }
}


function UpdateInMenuDockingBoatInfo(Boat)
{
  var IsRacing = (typeof Boat !== "undefined") && (typeof Boat.VLMInfo !== "undefined") && parseInt(Boat.VLMInfo.RAC, 10);
  HandleRacingDockingButtons(IsRacing);
}

function SetTWASign(Boat)
{
  var twd = Boat.VLMInfo.TWD;
  var heading = Boat.VLMInfo.HDG;

  twa = twd - heading;
  if (twa < -180)
  {
    twa += 360;
  }

  if (twa > 180)
  {
    twa -= 360;
  }


  var winddir = (360 - twd) % 360 + 90;
  var boatdir = (360 - heading) % 360 + 90;

  if (twa * Boat.VLMInfo.TWA > 0)
  {
    Boat.VLMInfo.TWA = -Boat.VLMInfo.TWA;
  }

}


function UpdateInMenuRacingBoatInfo(Boat, TargetTab)
{
  var NorthSouth;
  var EastWest;

  if (!Boat || typeof Boat === "undefined")
  {
    return;
  }

  HandleRacingDockingButtons(true);
  // Put a sign to the TWA
  SetTWASign(Boat);

  // Fix HDG when boat is mooring
  if (Boat.VLMInfo.PIM === "2" && Boat.VLMInfo.PIP === "0")
  {
    // Mooring 
    Boat.VLMInfo.HDG = Boat.VLMInfo.TWD;
    Boat.VLMInfo.BSP = 0;
  }


  // Update GUI for current player
  // Todo Get Rid of Coords Class
  var lon = new Coords(Boat.VLMInfo.LON, true);
  var lat = new Coords(Boat.VLMInfo.LAT);

  // Create field mapping array
  // 0 for text fields
  // 1 for input fields
  var BoatFieldMappings = [];
  BoatFieldMappings.push([FIELD_MAPPING_TEXT, "#BoatLon", lon.ToString()]);
  BoatFieldMappings.push([FIELD_MAPPING_TEXT, "#BoatLat", lat.ToString()]);
  BoatFieldMappings.push([FIELD_MAPPING_TEXT, ".BoatSpeed", RoundPow(Boat.VLMInfo.BSP, 2)]);
  BoatFieldMappings.push([FIELD_MAPPING_TEXT, ".BoatHeading", RoundPow(Boat.VLMInfo.HDG, 1)]);
  BoatFieldMappings.push([FIELD_MAPPING_VALUE, "#PM_Heading", RoundPow(Boat.VLMInfo.HDG, 2)]);
  BoatFieldMappings.push([FIELD_MAPPING_TEXT, "#BoatAvg", RoundPow(Boat.VLMInfo.AVG, 1)]);
  BoatFieldMappings.push([FIELD_MAPPING_TEXT, "#BoatDNM", RoundPow(Boat.VLMInfo.DNM, 1)]);
  BoatFieldMappings.push([FIELD_MAPPING_TEXT, "#BoatLoch", RoundPow(Boat.VLMInfo.LOC, 1)]);
  BoatFieldMappings.push([FIELD_MAPPING_TEXT, "#BoatOrtho", RoundPow(Boat.VLMInfo.ORT, 1)]);
  BoatFieldMappings.push([FIELD_MAPPING_TEXT, "#BoatLoxo", RoundPow(Boat.VLMInfo.LOX, 1)]);
  BoatFieldMappings.push([FIELD_MAPPING_TEXT, "#BoatVMG", RoundPow(Boat.VLMInfo.VMG, 1)]);
  BoatFieldMappings.push([FIELD_MAPPING_TEXT, ".BoatWindSpeed", RoundPow(Boat.VLMInfo.TWS, 1)]);
  BoatFieldMappings.push([FIELD_MAPPING_TEXT, "#BoatWindDirection", RoundPow(Boat.VLMInfo.TWD, 1)]);
  BoatFieldMappings.push([FIELD_MAPPING_CHECK, "#PM_WithWPHeading", Boat.VLMInfo['H@WP'] !== "-1.0"]);
  BoatFieldMappings.push([FIELD_MAPPING_TEXT, "#RankingBadge", Boat.VLMInfo.RNK]);
  BoatFieldMappings.push([FIELD_MAPPING_VALUE, "#PM_WPHeading", Boat.VLMInfo['H@WP']]);
  BoatFieldMappings.push([FIELD_MAPPING_TEXT, ".BoatClass", Boat.VLMInfo.POL.substring(5)]);
  BoatFieldMappings.push([FIELD_MAPPING_TEXT, ".RaceName", Boat.VLMInfo.RAN]);

  WP = new VLMPosition(Boat.VLMInfo.WPLON, Boat.VLMInfo.WPLAT);
  BoatFieldMappings.push([FIELD_MAPPING_VALUE, "#PM_Lat", WP.Lat.Value]);
  BoatFieldMappings.push([FIELD_MAPPING_VALUE, "#PM_Lon", WP.Lon.Value]);

  if ((WP.Lon.Value === 0) && (WP.Lat.Value === 0))
  {
    WP = Boat.GetNextWPPosition();
  }

  if (typeof WP !== "undefined" && WP)
  {
    BoatFieldMappings.push([FIELD_MAPPING_TEXT, "#PM_CurWPLat", WP.Lat.ToString()]);
    BoatFieldMappings.push([FIELD_MAPPING_TEXT, "#PM_CurWPLon", WP.Lon.ToString()]);
  }
  else
  {
    BoatFieldMappings.push([FIELD_MAPPING_TEXT, "#PM_CurWPLat", "N/A"]);
    BoatFieldMappings.push([FIELD_MAPPING_TEXT, "#PM_CurWPLon", "N/A"]);
  }

  if (parseInt(Boat.VLMInfo.PIM, 10) === PM_ANGLE)
  {
    BoatFieldMappings.push([FIELD_MAPPING_TEXT, ".BoatWindAngle", RoundPow(Math.abs(Boat.VLMInfo.PIP), 1)]);
    BoatFieldMappings.push([FIELD_MAPPING_VALUE, "#PM_Angle", Boat.VLMInfo.PIP]);
  }
  else
  {
    BoatFieldMappings.push([FIELD_MAPPING_TEXT, ".BoatWindAngle", RoundPow(Math.abs(Boat.VLMInfo.TWA), 1)]);
    BoatFieldMappings.push([FIELD_MAPPING_VALUE, "#PM_Angle", RoundPow(Boat.VLMInfo.TWA, 1)]);
  }

  FillFieldsFromMappingTable(BoatFieldMappings);

  // Change color depênding on windangle
  var WindColor = "lime";
  if (Boat.VLMInfo.TWA > 0)
  {
    WindColor = "red";
  }
  $(".BoatWindAngle").css("color", WindColor);

  // Get WindAngleImage
  var wHeading = Math.round((Boat.VLMInfo.TWD + 180) * 100) / 100;
  var wSpeed = Math.round(Boat.VLMInfo.TWS * 100) / 100;
  var BoatType = Boat.VLMInfo.POL;
  var BoatHeading = Math.round(Boat.VLMInfo.HDG * 100) / 100;
  var WindSpeed = Math.round(Boat.VLMInfo.TWS * 100) / 100;
  var OrthoToWP = Math.round(Boat.VLMInfo.ORT * 100) / 100;


  $("#ImgWindAngle").attr('src', 'windangle.php?wheading=' + wHeading + '&boatheading=' + BoatHeading + '&wspeed=' + WindSpeed + '&roadtoend=' + OrthoToWP + '&boattype=' + BoatType + "&jvlm=" + Boat.VLMInfo.NOW);
  $("#ImgWindAngle").css("transform", "rotate(" + wHeading + "deg)");
  $("#DeckImage").css("transform", "rotate(" + BoatHeading + "deg)");


  // Set active PM mode display
  $(".PMActiveMode").css("display", "none");
  $(".BCPane").removeClass("active");
  var TabID = ".ActiveMode_";
  var ActivePane = "";

  switch (Boat.VLMInfo.PIM)
  {
    case "1":
      TabID += 'Heading';
      ActivePane = "BearingMode";
      break;
    case "2":
      TabID += 'Angle';
      ActivePane = "AngleMode";
      break;
    case "3":
      TabID += 'Ortho';
      ActivePane = "OrthoMode";
      break;
    case "4":
      TabID += 'VMG';
      ActivePane = "VMGMode";
      break;
    case "5":
      TabID += 'VBVMG';
      ActivePane = "VBVMGMode";
      break;

    default:
      VLMAlert("Unsupported VLM PIM Mode, expect the unexpected....", "alert-info");

  }

  // Override PIM Tab if requested
  /*if (typeof TargetTab !== "undefined" && TargetTab=='AutoPilot')
  {
    TabID+='AutoPilotTab';
    ActivePane=TargetTab;
    UpdatePilotInfo(Boat);
  }*/

  $(TabID).css("display", "inline");
  $("." + ActivePane).addClass("active");
  $("#" + ActivePane).addClass("active");

  UpdatePilotInfo(Boat);
  UpdatePolarImages(Boat);

}

function FillFieldsFromMappingTable(MappingTable)
{
  // Loop all mapped fields to their respective location
  for (let index in MappingTable)
  {
    if (MappingTable[index])
    {
      switch (MappingTable[index][0])
      {
        case FIELD_MAPPING_TEXT:
          $(MappingTable[index][1]).text(MappingTable[index][2]);
          break;

        case FIELD_MAPPING_VALUE:
          $(MappingTable[index][1]).val(MappingTable[index][2]);
          break;

        case FIELD_MAPPING_CHECK:
          $(MappingTable[index][1]).prop('checked', (MappingTable[index][2]));
          break;

        case FIELD_MAPPING_IMG:
          $(MappingTable[index][1]).attr('src', (MappingTable[index][2]));
          break;

        case FIELD_MAPPING_CALLBACK:
          MappingTable[index][2](MappingTable[index][1]);
          break;


      }
    }
  }
}

function FillRaceInstructions(RaceInfo)
{

  if (typeof RaceInfo === "undefined" || !RaceInfo)
  {
    return;
  }

  let HideDiscontinueTab = true;
  if (typeof _CurPlayer !== "undefined" && _CurPlayer && _CurPlayer.CurBoat && _CurPlayer.CurBoat.RaceInfo)
  {
    HideDiscontinueTab = (_CurPlayer.CurBoat.RaceInfo.idraces !== RaceInfo.idraces);
  }

  if (HideDiscontinueTab)
  {
    $("#DiscontinueRaceTab").addClass("hidden");
  }
  else
  {
    $("#DiscontinueRaceTab").removeClass("hidden");
  }

  let Instructions = [];
  FillRaceInfoHeader(RaceInfo);
  FillRaceWaypointList(RaceInfo);
  InitPolar(RaceInfo);

  $.get("/ws/raceinfo/exclusions.php?idr=" + RaceInfo.idraces + "&v=" + RaceInfo.VER,
    function(result)
    {
      if (result && result.success)
      {
        FillNSZList(result.Exclusions);
      }
    }
  );

}

let PolarSliderInited = false;

function FillRaceInfoHeader(RaceInfo)
{
  if (typeof RaceInfo === 'undefined' || !RaceInfo)
  {
    return;
  }
  let BoatFieldMappings = [];
  BoatFieldMappings.push([FIELD_MAPPING_TEXT, ".ICSRaceName", RaceInfo.racename]);
  BoatFieldMappings.push([FIELD_MAPPING_TEXT, ".RaceId", RaceInfo.idraces]);
  BoatFieldMappings.push([FIELD_MAPPING_TEXT, ".BoatType", RaceInfo.boattype.substring(5)]);
  BoatFieldMappings.push([FIELD_MAPPING_TEXT, ".VacFreq", parseInt(RaceInfo.vacfreq, 10)]);
  BoatFieldMappings.push([FIELD_MAPPING_TEXT, "#EndRace", parseInt(RaceInfo.firstpcttime, 10)]);
  BoatFieldMappings.push([FIELD_MAPPING_TEXT, "#RaceStartDate", GetLocalUTCTime(parseInt(RaceInfo.deptime, 10) * 1000, true, true)]);
  BoatFieldMappings.push([FIELD_MAPPING_TEXT, "#RaceLineClose", GetLocalUTCTime(parseInt(RaceInfo.closetime, 10) * 1000, true, true)]);
  BoatFieldMappings.push([FIELD_MAPPING_IMG, "#RaceImageMap", "/cache/racemaps/" + RaceInfo.idraces + ".png"]);
  FillFieldsFromMappingTable(BoatFieldMappings);
}

function HandlePolarSpeedSlide(event, ui, RaceInfo)
{
  let handle = $("#PolarSpeedHandle");
  handle.text(ui.value);
  DrawPolar(RaceInfo);
}

function DrawPolar(RaceInfo)
{
  let Canvas = $("#PolarCanvas")[0];
  let WindSpeed = 25;

  if (PolarSliderInited)
  {
    WindSpeed = parseFloat($("#PolarSpeedHandle").text());
  }
  let PolarLine = PolarsManager.GetPolarLine(RaceInfo.boattype, WindSpeed, function()
  {
    DrawPolar(RaceInfo);
  }, null, 1);

  if (PolarLine)
  {
    if (!PolarSliderInited)
    {
      InitSlider("PolarSpeedSlider", "PolarSpeedHandle", 0, 60, WindSpeed, function(e, ui)
      {
        HandlePolarSpeedSlide(e, ui, RaceInfo);
      });
      PolarSliderInited = true;
    }

    Canvas.width = $("#PolarCanvas").width();
    Canvas.height = Canvas.width;
    let Context = Canvas.getContext("2d");
    let First = true;
    let dAlpha = Math.PI / PolarLine.length; // Not counting 0 helps here
    let Cx = 3;
    let Cy = Canvas.width / 2;
    let S = Canvas.width / 2;
    let MaxSpeed = PolarsManager.GetPolarMaxSpeed(RaceInfo.boattype, WindSpeed);
    let PrevL = 0;
    let VMGAngle = 0;
    let RedZone = true;
    let PrevX;
    let PrevY;

    Context.beginPath();
    Context.lineWidth = "1";
    Context.strokeStyle = "#FF0000";

    for (let index in PolarLine)
    {
      if (PolarLine[index])
      {
        let l = PolarLine[index];
        index = parseInt(index, 10);
        let a = index * dAlpha;
        let y = Cy + S * l * Math.cos(a);
        let x = Cx + S * l * Math.sin(a);

        let VMG = Math.cos(a + VMGAngle) * l;
        if (RedZone && (VMG <= PrevL))
        {
          Context.stroke();
          Context.beginPath();
          Context.moveTo(PrevX, PrevY);
          Context.strokeStyle = "#FFFFFF";
          RedZone = false;
        }
        else if (!RedZone && (VMG >= PrevL))
        {
          Context.stroke();
          Context.beginPath();
          Context.moveTo(PrevX, PrevY);
          Context.strokeStyle = "#FF0000";
          RedZone = true;
        }

        PrevL = VMG;

        if (First)
        {
          Context.moveTo(x, y);
          First = false;
        }
        else
        {
          Context.lineTo(x, y);
        }
        PrevX = x;
        PrevY = y;
      }
    }
    Context.stroke(); // Draw it
    // Draw axes
    Context.beginPath();
    Context.lineWidth = "1";
    Context.strokeStyle = "#00FF00";
    Context.moveTo(Cx, 0);
    Context.lineTo(Cx, Canvas.height);
    Context.stroke();
    Context.moveTo(Cx - 1, Canvas.height / 2);
    Context.lineTo(Cx + Canvas.width, Canvas.height / 2);
    Context.stroke();

    // Draw Speed circles & legends
    let As = Math.round(MaxSpeed / 5);

    if (!As)
    {
      As = 1;
    }

    for (index = 1; As * index - 1 <= MaxSpeed; index++)
    {
      Context.beginPath();
      Context.strokeStyle = "#7FFFFF";
      Context.arc(Cx, Cy, S * index * As / MaxSpeed, Math.PI / 2, 1.5 * Math.PI, true);
      Context.stroke();
      Context.strokeText(" " + As * index, Cx + 1 + As * S * index / MaxSpeed, Cy + 10);
    }
  }


}

function UpdatePolarImages(Boat)
{
  var PolarName = Boat.VLMInfo.POL.substring(5);
  var Angle;
  var HTML = "";
  for (Angle = 0; Angle <= 45; Angle += 15)
  {
    HTML += '<li><img class="polaire" src="/scaledspeedchart.php?boattype=boat_' + PolarName + '&amp;minws=' + Angle + '&amp;maxws=' + (Angle + 15) + '&amp;pas=2" alt="speedchart"></li>';
  }

  $("#PolarList").empty();
  $("#PolarList").append(HTML);
}

function BackupFooTable(ft, TableId, RestoreId)
{
  if (!ft.DOMBackup)
  {
    ft.DOMBackup = $(TableId);
    ft.RestoreId = RestoreId;
  }
  else if (typeof $(TableId)[0] === "undefined")
  {
    $(ft.RestoreId).append(ft.DOMBackup);
    console.log("Restored footable " + TableId);
  }
}

function UpdatePilotInfo(Boat)
{
  if ((typeof Boat === "undefined") || (!Boat) || PilototoFt.DrawPending)
  {
    return;
  }

  BackupFooTable(PilototoFt, "#PilototoTable", "#PilototoTableInsertPoint");


  PilRows = [];
  if (Boat.VLMInfo.PIL.length > 0)
  {
    for (let index in Boat.VLMInfo.PIL)
    {
      if (Boat.VLMInfo.PIL[index])
      {
        var PilLine = GetPilototoTableLigneObject(Boat, index);
        PilRows.push(PilLine);
      }


    }


    if (Boat.VLMInfo.PIL.length < MAX_PILOT_ORDERS)
    {
      $("#AutoPilotAddButton").removeClass("hidden");
    }
    else
    {
      $("#AutoPilotAddButton").addClass("hidden");
    }
  }

  PilototoFt.DrawPending = true;
  PilototoFt.loadRows(PilRows, false);
  console.log("loaded pilototo table");

  UpdatePilotBadge(Boat);
}

function HandleReadyTable(e, ft)
{
  console.log("Table ready" + ft);
  ft.DrawPending = false;
  if (ft.OnReadyTable)
  {
    ft.OnReadyTable();
  }
}

function HandlePagingComplete(e, ft)
{
  let classes = {
    ft_class_myboat: "rnk-myboat",
    ft_class_friend: "rnk-friend",
    ft_class_oncoast: "rnk-oncoast",
    ft_class_racing: "rnk-racing",
    ft_class_locked: "rnk-locked",
    ft_class_dns: "rnk-dns"
  };

  let index;

  for (let index in classes)
  {
    if (classes[index])
    {
      $('td').closest('tr').removeClass(classes[index]);
    }
  }
  for (index in classes)
  {
    if (classes[index])
    {
      $('td:contains("' + index + '")').closest('tr').addClass(classes[index]);
    }
  }

  ft.DrawPending = false;

}

function HandleTableDrawComplete(e, ft)
{
  console.log("TableDrawComplete " + ft.id);
  ft.DrawPending = false;
  if (ft === RankingFt)
  {
    setTimeout(function()
    {
      DeferedGotoPage(e, ft);
    }, 500);
  }
  else if (ft.CallbackPending)
  {
    setTimeout(function()
    {
      ft.CallbackPending();
      ft.CallbackPending = null;
    }, 500);
    return;
  }
}

function DeferedGotoPage(e, ft)
{
  if (RankingFt.TargetPage)
  {
    RankingFt.gotoPage(RankingFt.TargetPage);
    RankingFt.TargetPage = 0;
  }
  setTimeout(function()
  {
    DeferedPagingStyle(e, ft);
  }, 200);
}

function DeferedPagingStyle(e, ft)
{
  HandlePagingComplete(e, ft);
}

function GetPilototoTableLigneObject(Boat, Index)
{
  let PilOrder = Boat.VLMInfo.PIL[Index];
  let OrderDate = GetLocalUTCTime(PilOrder.TTS * 1000, true, true);
  let PIMText = GetPilotModeName(PilOrder.PIM);

  // Force as number and rebase from 1
  Index = parseInt(Index, 10) + 1;

  // Adapt the template to current order
  $("#EditCellTemplate .PIL_EDIT").attr('pil_id', Index);
  $("#DeleteCellTemplate .PIL_DELETE").attr("TID", PilOrder.TID).attr('pil_id', Index);

  let Ret = {
    date: OrderDate,
    PIM: PIMText,
    PIP: PilOrder.PIP,
    Status: PilOrder.STS,
    Edit: $("#EditCellTemplate").first().html(),
    Delete: $("#DeleteCellTemplate").first().html()
  };


  return Ret;
}

function ShowAutoPilotLine(Boat, Index)
{
  var Id = "#PIL" + Index;
  var PilOrder = Boat.VLMInfo.PIL[Index - 1];
  var OrderDate = new Date(PilOrder.TTS * 1000);
  var PIMText = GetPilotModeName(PilOrder.PIM);

  if (typeof $(Id)[0] === "undefined")
  {
    let bpkt = 0;
  }

  $(Id)[0].attributes.TID = PilOrder.TID;
  SetSubItemValue(Id, "#PIL_DATE", OrderDate);
  SetSubItemValue(Id, "#PIL_PIM", PIMText);
  SetSubItemValue(Id, "#PIL_PIP", PilOrder.PIP);
  SetSubItemValue(Id, "#PIL_STATUS", PilOrder.STS);
  $(Id).show();
}

function GetPILIdParentElement(item)
{
  var done = false;
  var RetValue = item;
  do {
    if (typeof RetValue === "undefined")
    {
      return;
    }
    if ('id' in RetValue.attributes)
    {
      var ItemId = RetValue.attributes.id.value;
      if ((ItemId.length === 4) && (ItemId.substring(0, 3) === "PIL"))
      {
        return RetValue;
      }
    }

    RetValue = RetValue.parentElement;

  } while (!done);
}

function HandlePilotEditDelete(e)
{
  var ClickedItem = $(this)[0];
  var ItemId = ClickedItem.attributes['class'].value;
  var Boat = _CurPlayer.CurBoat;

  var OrderIndex = parseInt(ClickedItem.attributes.pil_id.value, 10);

  if (ItemId === "PIL_EDIT")
  {
    HandleOpenAutoPilotSetPoint(e);
  }
  else if (ItemId === "PIL_DELETE")
  {
    DeletePilotOrder(Boat, ClickedItem.attributes.TID.value);
  }

}

function GetPilotModeName(PIM)
{
  switch (parseInt(PIM, 10))
  {
    case 1:
      return GetLocalizedString('autopilotengaged');

    case 2:
      return GetLocalizedString('constantengaged');

    case 3:
      return GetLocalizedString('orthoengaged');

    case 4:
      return GetLocalizedString('bestvmgengaged');

    case 5:
      return GetLocalizedString('vbvmgengaged');

    default:
      return "PIM ???" + PIM + "???";
  }
}

function SetSubItemValue(SourceElementName, TargetElementName, NewVaue)
{
  let El = $(SourceElementName).find(TargetElementName);
  if (El.length > 0)
  {
    El.text(NewVaue);
  }
}


function UpdatePilotBadge(Boat)
{
  var index;
  var PendingOrdersCount = 0;

  if ((typeof Boat === "undefined") || (!Boat))
  {
    return;
  }

  var Pilot = Boat.VLMInfo.PIL;

  if (Pilot.length)
  {
    for (index in Pilot)
    {
      if (Pilot[index].STS === "pending")
      {
        PendingOrdersCount++;
      }
    }
  }

  if (PendingOrdersCount > 0)
  {
    $(".PilotOrdersBadge").show();
    $(".PilotOrdersBadge").text(PendingOrdersCount);
  }
  else
  {
    $(".PilotOrdersBadge").hide();
  }


}

function MoveWPBoatControlerDiv(target)
{
  var div = $(target).prepend($("#PM_WPMode_Div"));
}

function UpdatePrefsDialog(Boat)
{
  // Hide prefs setting button is not boat or no vlminfo yet...
  if (typeof Boat === "undefined")
  {
    $("#BtnSetting").addClass("hidden");
  }
  else
  {
    $("#BtnSetting").removeClass("hidden");
    $("#pref_boatname").val(Boat.BoatName);

    if (typeof Boat.VLMInfo !== 'undefined')
    {
      SelectCountryDDFlag(Boat.VLMInfo.CNT);
      var ColString = SafeHTMLColor(Boat.VLMInfo.COL);

      $("#pref_boatcolor").val(ColString);
      $("#cp11").colorpicker(
      {
        useAlpha: false,
        format: false,
        color: ColString
      });
    }
  }



}

let RaceSorter = function RaceSortEvaluator(r1, r2)
{
  if (r1.CanJoin === r2.CanJoin)
  {
    if (r1.deptime > r2.deptime)
    {
      return -1;
    }
    else if (r1.deptime === r2.deptime)
    {
      if (r1.racename > r2.racename)
      {
        return 1;
      }
      else if (r1.racename === r2.racename)
      {
        return 0;
      }
      else
      {
        return -1;
      }
    }
    else
    {
      return 1;
    }

  }
  else if (r1.CanJoin)
  {
    return 1;
  }
  else
  {
    return -1;
  }
};

function LoadRacesList()
{
  let CurUser = _CurPlayer.CurBoat.IdBoat;
  $.get("/ws/raceinfo/list.php?iduser=" + CurUser,
    function(result)
    {
      var racelist = result;

      // Clear previous elements
      $("#RaceListPanel").empty();
      let RaceArray = [];
      for (let index in racelist)
      {
        if (racelist[index])
        {
          RaceArray.push(racelist[index]);
        }
      }
      RaceArray.sort(RaceSorter);
      for (let index in RaceArray)
      {
        if (RaceArray[index])
        {
          AddRaceToList(RaceArray[index]);
        }
      }
    }
  );
}

function AddRaceToList(race)
{
  let base = $("#RaceListPanel").first();


  let d = new Date(0); // The there is the key, which sets the date to the epoch
  //d.setUTCSeconds(utcSeconds);
  let RaceJoinStateClass;
  let StartMoment;

  if (race.CanJoin)
  {
    let Now = new Date();
    let RaceStart = new Date(race.deptime * 1000);
    if (RaceStart <= Now)
    {
      RaceJoinStateClass = 'CanJoinRace';
      StartMoment = GetLocalizedString("closerace") + " " + moment("/date(" + race.closetime * 1000 + ")/").fromNow();
    }
    else
    {
      RaceJoinStateClass = 'CanJoinRaceNotStarted';
      StartMoment = GetLocalizedString("departuredate") + " " + moment("/date(" + race.deptime * 1000 + ")/").fromNow();
    }
  }
  else
  {
    RaceJoinStateClass = 'NoJoinRace';
  }

  let code = '<div class="raceheaderline panel panel-default ' + RaceJoinStateClass + '" )>' +
    '  <div data-toggle="collapse" href="#RaceDescription' + race.idraces + '" class="panel-body collapsed " data-parent="#RaceListPanel" aria-expanded="false">' +
    '    <div class="col-xs-4">' +
    '      <img class="racelistminimap" src="/cache/minimaps/' + race.idraces + '.png" ></img>' +
    '    </div>' +
    '    <div class="col-xs-4">' +
    '      <span ">' + race.racename +
    '      </span>' +
    '    </div>' +
    '    <div class="' + (race.CanJoin ? '' : 'hidden') + ' col-xs-4">' +
    '      <button id="JoinRaceButton" type="button" class="btn-default btn-md" IdRace="' + race.idraces + '"  >' + GetLocalizedString("subscribe") +
    '      </button>' +
    '    </div>' + (StartMoment ?
      '    <div class="col-xs-12">' +
      '       <span "> ' + StartMoment +
      '       </span>' +
      '    </div>' : "") +
    '  <div id="RaceDescription' + race.idraces + '" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">' +
    '  <div class="panel-body">' +
    '   <div class="col-xs-12"><img class="img-responsive" src="/cache/racemaps/' + race.idraces + '.png" width="530px"></div>' +
    '    <div class="col-xs-9"><p>' + GetLocalizedString('race') + ' : ' + race.racename + '</p>' +
    '     <p>Départ : ' + GetLocalUTCTime(race.deptime * 1000, true, true) + '</p>' +
    '     <p>' + GetLocalizedString('boattype') + ' : ' + race.boattype.substring(5) + '</p>' +
    '     <p>' + GetLocalizedString('crank') + ' : ' + race.vacfreq + '\'</p>' +
    '     <p>' + GetLocalizedString('closerace') + GetLocalUTCTime(race.closetime * 1000, true, true) + '</p>' +
    '    </div>' +
    '    <div class="col-xs-3"><p>' +
    '     <div class="col-xs-12">' +
    '      <button type="button" class="ShowICSButton btn-default btn-md" IdRace="' + race.idraces + '"  >' + GetLocalizedString('ic') +
    '     </div>' +
    '     <div class="col-xs-12 hidden">' +
    '      <button type="button" class="ShowRankingButton btn-default btn-md" IdRace="' + race.idraces + '"  >' + GetLocalizedString('ranking') +
    '     </div>' +
    '    </div>' +
    '   </div>' +
    '  </div>';

  base.prepend(code);

  // Handler for the join race button
  $("#JoinRaceButton").click(
    function(e)
    {
      var RaceId = e.currentTarget.attributes.idrace.value;

      EngageBoatInRace(RaceId, _CurPlayer.CurBoat.IdBoat);


    }
  );

  // Handler for ShowICSButtons
  //$(".ShowICSButton").on("click", HandleFillICSButton);

}

function PageClock()
{

  if (typeof _CurPlayer !== "undefined" && typeof _CurPlayer.CurBoat !== "undefined")
  {

    // Display race clock if a racing boat is selected
    var CurBoat = _CurPlayer.CurBoat;

    if (typeof CurBoat !== "undefined" && typeof CurBoat.RaceInfo !== "undefined")
    {
      var ClockValue = GetRaceClock(CurBoat.RaceInfo, CurBoat.VLMInfo.UDT);
      var Chrono = $(".RaceChrono");
      if (ClockValue < 0)
      {
        Chrono.removeClass("ChronoRaceStarted").addClass("ChronoRacePending");
      }
      else
      {
        Chrono.addClass("ChronoRaceStarted").removeClass("ChronoRacePending");
      }

      $("#RefreshAge").text(moment(_CurPlayer.CurBoat.LastRefresh).fromNow());

      var LastBoatUpdate = new Date(CurBoat.VLMInfo.LUP * 1000);
      var TotalVac = CurBoat.VLMInfo.VAC;
      var TimeToNextUpdate = TotalVac - ((new Date() - LastBoatUpdate) / 1000) % TotalVac;
      var Delay = 1000;
      if (TimeToNextUpdate >= TotalVac - 1)
      {
        Delay = 100;
      }
      $("#pbar_innerdivvac").css("width", +Math.round((TimeToNextUpdate % 60) * 100.0 / 60.0) + "px");
      $("#pbar_innerdivmin").css("width", Math.round((TimeToNextUpdate / TotalVac) * 100.0) + "px");

      Chrono.text(GetFormattedChronoString(ClockValue));
    }
  }
}

function GetRaceClock(RaceInfo, UserStartTimeString)
{
  var CurDate = new Date();
  var Epoch = new Date(RaceInfo.deptime * 1000);

  if (!(RaceInfo.racetype & RACE_TYPE_RECORD))
  {
    // non Permanent race chrono counts from race start time
    return Math.floor((CurDate - Epoch) / 1000);
  }
  else
  {
    var UDT = parseInt(UserStartTimeString, 10);

    if (UDT === -1)
    {
      return 0;
    }
    else
    {
      var StartDate = new Date(UDT * 1000);
      return Math.floor((CurDate - StartDate) / 1000);
    }
  }


}

function DisplayCurrentDDSelectedBoat(Boat)
{
  $('.BoatDropDown:first-child').html(
    '<span BoatID=' + Boat.IdBoat + '>' + GetBoatInfoLine(Boat, Boat.IdBoat in _CurPlayer.Fleet) + '</span>' +
    '<span class="caret"></span>'
  );
}

function PadLeftZero(v)
{
  if (v < 100)
  {
    return ("00" + v).slice(-2);
  }
  else
  {
    return v;
  }
}

function GetFormattedChronoString(Value)
{
  if (Value < 0)
  {
    Value = -Value;
  }
  else if (Value === 0)
  {
    return "--:--:--";
  }

  var Sec = PadLeftZero(Value % 60);
  var Min = PadLeftZero(Math.floor(Value / 60) % 60);
  var Hrs = PadLeftZero(Math.floor(Value / 3600) % 24);
  var Days = PadLeftZero(Math.floor(Value / 3600 / 24));

  var Ret = Hrs.toString() + ":" + Min.toString() + ":" + Sec.toString();
  if (Days > 0)
  {
    Ret = Days.toString() + " d " + Ret;
  }
  return Ret;
}

function RefreshCurrentBoat(SetCenterOnBoat, ForceRefresh, TargetTab)
{
  var BoatIDSpan = $('.BoatDropDown > span');

  if (typeof BoatIDSpan !== "undefined" && typeof BoatIDSpan[0] !== "undefined" && ('BoatId' in BoatIDSpan[0].attributes || 'boatid' in BoatIDSpan[0].attributes))
  {
    BoatId = BoatIDSpan[0].attributes.BoatID.value;
    SetCurrentBoat(GetBoatFromIdu(BoatId), SetCenterOnBoat, ForceRefresh, TargetTab);
  }

}

function UpdateLngDropDown()
{
  // Init the language combo to current language
  var lng = GetCurrentLocale();

  $('#SelectionLanguageDropDown:first-child').html(
    '<img class=" LngFlag" lang="' + lng + '" src="images/lng-' + lng + '.png" alt="' + lng + '">' +
    '<span class="caret"></span>'
  );

}

var _CurAPOrder = null;

function HandleOpenAutoPilotSetPoint(e)
{
  var Target = e.target;
  var TargetId;

  if ('id' in Target.attributes)
  {
    TargetId = Target.attributes.id.nodeValue;
  }
  else if ('class' in Target.attributes)
  {
    TargetId = Target.attributes["class"].nodeValue;
  }
  else
  {
    VLMAlert("Something bad has happened reload this page....", "alert-danger");
    return;
  }
  switch (TargetId)
  {
    case "AutoPilotAddButton":
      // Create a new autopilot order
      _CurAPOrder = new AutoPilotOrder();
      break;
    case "PIL_EDIT":
      // Load AP Order from vlminfo structure
      var OrderIndex = parseInt(Target.attributes.pil_id.value, 10);
      _CurAPOrder = new AutoPilotOrder(_CurPlayer.CurBoat, OrderIndex);

      $("#AutoPilotSettingForm").modal('show');
      break;
    default:
      VLMalert("Something bad has happened reload this page....", "alert-danger");
      return;

  }

  RefreshAPDialogFields();

}

function RefreshAPDialogFields()
{
  // Update dialog content from APOrder object
  $("#AP_Time").data('DateTimePicker').date(_CurAPOrder.Date);

  $('#AP_PIM:first-child').html(
    '<span>' + _CurAPOrder.GetPIMString() + '</span>' +
    '<span class="caret"></span>'
  );
  $("#AP_PIP").val(_CurAPOrder.PIP_Value);
  $("#AP_WPLat").val(_CurAPOrder.PIP_Coords.Lat.Value);
  $("#AP_WPLon").val(_CurAPOrder.PIP_Coords.Lon.Value);
  $("#AP_WPAt").val(_CurAPOrder.PIP_WPAngle);


  UpdatePIPFields(_CurAPOrder.PIM);

}

function HandleDateChange(ev)
{
  _CurAPOrder.Date = ev.date;
}

function HandleClickToSetWP()
{
  SetWPPending = true;
  WPPendingTarget = "AP";
  $("#AutoPilotSettingForm").modal("hide");
}

function HandleAPModeDDClick(e)
{
  var NewMode = e.target.attributes.PIM.value;

  _CurAPOrder.PIM = parseInt(NewMode, 10);
  $('#AP_PIM:first-child').html(
    '<span>' + _CurAPOrder.GetPIMString() + '</span>' +
    '<span class="caret"></span>'
  );

  UpdatePIPFields(_CurAPOrder.PIM);

}

function UpdatePIPFields(PIM)
{
  var IsPip = true;
  switch (PIM)
  {
    case PM_HEADING:
    case PM_ANGLE:
      IsPip = true;
      break;
    case PM_ORTHO:
    case PM_VMG:
    case PM_VBVMG:
      IsPip = false;
      break;
  }

  if (IsPip)
  {
    $(".AP_PIPRow").removeClass("hidden");
    $(".AP_WPRow").addClass("hidden");
  }
  else
  {
    $(".AP_PIPRow").addClass("hidden");
    $(".AP_WPRow").removeClass("hidden");
  }
}

function SaveBoatAndUserPrefs(e)
{
  // Check boat prefs
  var NewVals = {};
  var BoatUpdateRequired = false;
  var PlayerUpdateRequired = false;

  // Get Theme
  var NewTheme = $("#SelectionThemeDropDown").attr("SelTheme");

  if (typeof NewTheme !== "undefined")
  {
    VLM2Prefs.CurTheme = NewTheme;
  }

  VLM2Prefs.Save();

  if (!ComparePrefString($("#pref_boatname")[0].value, _CurPlayer.CurBoat.BoatName))
  {
    NewVals.boatname = encodeURIComponent($("#pref_boatname")[0].value);
    BoatUpdateRequired = true;
  }

  if (!ComparePrefString($("#pref_boatcolor")[0].value, SafeHTMLColor(_CurPlayer.CurBoat.VLMInfo.COL)))
  {
    NewVals.color = $("#pref_boatcolor")[0].value.substring(1);
    BoatUpdateRequired = true;
  }

  var NewCountry = GetPrefSelFlag();
  if (!ComparePrefString(NewCountry, _CurPlayer.CurBoat.VLMInfo.CNT))
  {
    NewVals.country = encodeURIComponent(NewCountry);
    BoatUpdateRequired = true;
  }

  //NewVals["country"]=$("#FlagSelector")[0].value;
  //NewVals["color"]=$("#pref_boatcolor")[0].value;
  if (BoatUpdateRequired)
  {
    UpdateBoatPrefs(_CurPlayer.CurBoat,
    {
      prefs: NewVals
    });
  }
}

function GetPrefSelFlag()
{
  var Item = $('#CountryDropDown:first-child [flag]')[0];
  return Item.attributes.flag.value;

}

function ComparePrefString(Obj1, Obj2)
{

  return Obj1.toString() === Obj2.toString();
}

function SelectCountryDDFlag(Country)
{
  $('#CountryDropDown:first-child').html('<div>' + GetCountryDropDownSelectorHTML(Country, false) + '<span class="caret"></span></div>');

}

function ResetCollapsiblePanels(e)
{
  $(".collapse").collapse("hide");

}

function HandleBoatSelectionChange(e)
{
  ResetCollapsiblePanels();

  let BoatId = $(e.target).closest('li').attr('BoatID');
  let Boat = GetBoatFromIdu(BoatId);

  if (typeof Boat === "undefined" || !Boat)
  {
    VLMAlertDanger(GetLocalizedString('Error Reload'));
    return;
  }
  SetCurrentBoat(Boat, true, false);
  DisplayCurrentDDSelectedBoat(Boat);
}

var LastMouseMoveCall = 0;

function HandleMapMouseMove(e)
{

  if (GM_Pos && (typeof _CurPlayer !== "undefined") && (typeof _CurPlayer.CurBoat !== 'undefined') && (typeof _CurPlayer.CurBoat.VLMInfo !== "undefined"))
  {
    var Pos = new VLMPosition(GM_Pos.lon, GM_Pos.lat);
    var CurPos = new VLMPosition(_CurPlayer.CurBoat.VLMInfo.LON, _CurPlayer.CurBoat.VLMInfo.LAT);
    var WPPos = _CurPlayer.CurBoat.GetNextWPPosition();
    var EstimatePos = null;
    var Estimated = new Date() - LastMouseMoveCall > 300;

    if (VLM2Prefs.MapPrefs.EstTrackMouse && Estimated)
    {
      // Throttle estimate update to 3/sec
      EstimatePos = _CurPlayer.CurBoat.GetClosestEstimatePoint(Pos);
      LastMouseMoveCall = new Date();
    }


    $("#MI_Lat").text(Pos.Lat.ToString());
    $("#MI_Lon").text(Pos.Lon.ToString());
    $("#MI_LoxoDist").text(CurPos.GetLoxoDist(Pos, 2) + " nM");
    $("#MI_OrthoDist").text(CurPos.GetOrthoDist(Pos, 2) + " nM");
    $("#MI_Loxo").text(CurPos.GetLoxoCourse(Pos, 2) + " °");
    $("#MI_Ortho").text(CurPos.GetOrthoCourse(Pos, 2) + " °");

    if (typeof WPPos !== "undefined" && WPPos)
    {
      $("#MI_WPLoxoDist").text(WPPos.GetLoxoDist(Pos, 2) + " nM");
      $("#MI_WPOrthoDist").text(WPPos.GetOrthoDist(Pos, 2) + " nM");
      $("#MI_WPLoxo").text(WPPos.GetLoxoCourse(Pos, 2) + " °");
      $("#MI_WPOrtho").text(WPPos.GetOrthoCourse(Pos, 2) + " °");
    }
    else
    {
      $("#MI_WPLoxoDist").text("--- nM");
      $("#MI_WPOrthoDist").text("--- nM");
      $("#MI_WPLoxo").text("--- °");
      $("#MI_WPOrtho").text("--- °");
    }

    if (Estimated)
    {
      RefreshEstPosLabels(EstimatePos);
    }

  }
}

function RefreshEstPosLabels(Pos)
{
  if (Pos && typeof Pos.Date !== "undefined")
  {
    $("#MI_EstDate").text(GetLocalUTCTime(Pos.Date,false,true));
  }
  else
  {
    $("#MI_EstDate").text("");
  }
}

function GetWPrankingLI(WPInfo)
{
  return '<li id="RnkWP' + WPInfo.wporder + '" RnkSort="WP" WPRnk="' + WPInfo.wporder + '"><a href="#DivRnkRAC" RnkSort="WP" WPRnk="' + WPInfo.wporder + '">WP ' + WPInfo.wporder + ' : ' + WPInfo.libelle + '</a></li>';
}

function ResetRankingWPList(e)
{
  $("[WPRnk]").remove();
  $("#RnkTabsUL").addClass("WPNotInited");

}

function CheckWPRankingList(Boat, OtherRaceWPs)
{
  let InitNeeded = $(".WPNotInited");
  let RaceId = GetRankingRaceId(Boat);
  let InitComplete = false;

  if (typeof InitNeeded !== "undefined" && InitNeeded && RaceId)
  {

    let index;

    if (typeof Boat !== "undefined" && Boat && (typeof Boat.RaceInfo !== "undefined") && Boat.RaceInfo && (RaceId === Boat.RaceInfo.RaceId))
    {
      BuildWPTabList(index, InitNeeded);
      InitComplete = true;
    }
    else if (OtherRaceWPs)
    {
      BuildWPTabList(OtherRaceWPs, InitNeeded);
      InitComplete = true;
    }
    else
    {
      let Version = 0;

      if (typeof Boat.VLMInfo !== "undefined")
      {
        Version = Boat.VLMInfo.VER;
      }
      $.get("/ws/raceinfo/desc.php?idrace=" + RaceId + "&v=" + Version,
        function(result)
        {
          CheckWPRankingList(Boat, result);
        }
      );
    }

  }

  if (InitComplete)
  {
    $(InitNeeded).removeClass("WPNotInited");
    $(".JVLMTabs").tabs("refresh");
  }

}

function BuildWPTabList(WPInfos, TabsInsertPoint)
{
  let index;

  if (typeof TabsInsertPoint === "undefined" || !TabsInsertPoint)
  {
    return;
  }
  if (typeof WPInfos === "undefined" || !WPInfos)
  {
    WPInfos = Boat.RaceInfo.races_waypoints;
  }

  for (index in WPInfos.races_waypoints)
  {
    if (WPInfos.races_waypoints[index])
    {
      let WPInfo = WPInfos.races_waypoints[index];
      let html = GetWPrankingLI(WPInfo);
      $(TabsInsertPoint).append(html);
    }

  }

}


function SortRanking(style, WPNum)
{

  //$('#RankingTableBody').empty();
  let Boat = _CurPlayer.CurBoat;

  CheckWPRankingList(Boat);

  if (typeof Boat === "undefined" || !Boat)
  {
    return;
  }

  let Friends = null;
  if (Boat.VLMPrefs && Boat.VLMPrefs.mapPrefOpponents)
  {
    Friends = Boat.VLMPrefs.mapPrefOpponents.split(",");
  }


  switch (style)
  {
    case "WP":
      SetRankingColumns(style);
      WPNum = parseInt(WPNum, 10);
      SortRankingData(Boat, style, WPNum);
      FillWPRanking(Boat, WPNum, Friends);
      break;

    case 'DNF':
    case 'HC':
    case 'ARR':
    case 'HTP':
    case 'ABD':
      SetRankingColumns(style);
      SortRankingData(Boat, style);
      FillStatusRanking(Boat, style, Friends);
      break;
      //case 'RAC':
    default:
      SetRankingColumns('RAC');
      CurRnk = SortRankingData(Boat, 'RAC');
      FillRacingRanking(Boat, Friends);

  }

}

function SetRankingColumns(style)
{
  switch (style)
  {
    case "WP":
      SetWPRankingColumns();
      break;

    case 'DNF':
    case 'HC':
    case 'ARR':
    case 'HTP':
    case 'ABD':
      SetNRClassRankingColumns();
      break;
      //case 'RAC':
    default:
      SetRacingClassRankingColumns();

  }
}

let RACColumnHeader = ["Rank", "Name", "Distance", "Time", "Loch", "Lon", "Lat", "Last1h", "Last3h", "Last24h", "Delta1st"];
let NRColumnHeader = ["Rank", "Name", "Distance"];
let WPColumnHeader = ["Rank", "Name", "Time", "Loch"];
let RACColumnHeaderLabels = ["ranking", "boatname", "distance", "racingtime", "Loch", "Lon", "Lat", "Last1h", "Last3h", "Last24h", "ecart"];
let NRColumnHeaderLabels = ["ranking", "boatname", "status"];
let WPColumnHeaderLabels = ["ranking", "boatname", "racingtime", "ecart"];


function SetRacingClassRankingColumns()
{

  SetColumnsVisibility(RACColumnHeader, RACColumnHeaderLabels);

}

function SetNRClassRankingColumns()
{
  SetColumnsVisibility(NRColumnHeader, NRColumnHeaderLabels);
}

function SetWPRankingColumns()
{
  SetColumnsVisibility(WPColumnHeader, WPColumnHeaderLabels);
}

function SetColumnsVisibility(cols, labels)
{
  let index;
  for (index = 0; index < RankingFt.columns.array.length; index++)
  {
    if (RankingFt.columns.array[index])
    {
      let ColIdx = cols.indexOf(RankingFt.columns.array[index].name);
      if (ColIdx > -1)
      {
        //RankingFt.columns.array[index].title = GetLocalizedString( labels[ColIdx])
        $("[data-name='" + cols[ColIdx] + "']").attr("I18n", labels[ColIdx]);

      }
      RankingFt.columns.array[index].visible = ColIdx > -1;

    }
  }

  // use localization to change titles. Hummz creative but title does not seem to update the column header.
  LocalizeItem($("[I18n][data-name]").get());

}

function RnkIsArrived(rnk)
{
  if (typeof rnk === "undefined" || typeof rnk.status === "undefined" || !rnk.status)
  {
    return false;
  }
  return BoatArrivedStatus.indexOf(rnk.status) !== -1;
}

function RnkIsRacing(rnk)
{
  if (typeof rnk === "undefined" || typeof rnk.status === "undefined" || !rnk.status)
  {
    return false;
  }
  return BoatRacingStatus.indexOf(rnk.status) !== -1;
}

function Sort2ArrivedBoats(rnk1, rnk2)
{
  let Total1 = parseInt(rnk1.duration, 10) + parseInt(rnk1.penalty, 10);
  let Total2 = parseInt(rnk2.duration, 10) + parseInt(rnk2.penalty, 10);

  if (Total1 > Total2)
  {
    DebugRacerSort(rnk1, rnk2, 1);
    return 1;
  }
  else if (Total1 < Total2)
  {
    DebugRacerSort(rnk1, rnk2, -1);
    return -1;
  }
  else
  {
    DebugRacerSort(rnk1, rnk2, 0);
    return 0;
  }
}

function Sort2RacingBoats(rnk1, rnk2)
{
  let nwp1 = parseInt(rnk1.nwp, 10);
  let nwp2 = parseInt(rnk2.nwp, 10);

  if (nwp1 === nwp2)
  {
    let dnm1 = parseFloat(rnk1.dnm);
    let dnm2 = parseFloat(rnk2.dnm);

    if (dnm1 > dnm2)
    {
      DebugRacerSort(rnk1, rnk2, 1);
      return 1;
    }
    else if (dnm1 === dnm2)
    {
      DebugRacerSort(rnk1, rnk2, 0);
      let SortFlag = ((rnk1.country > rnk2.country) ? 1 : ((rnk1.country === rnk2.country) ? 0 : -1));

      if (SortFlag)
      {
        return SortFlag;
      }
      else
      {
        let SortIdu = ((rnk1.idusers > rnk2.idusers) ? 1 : ((rnk1.idusers === rnk2.idusers) ? 0 : -1));
        return SortIdu;
      }
    }
    else
    {
      DebugRacerSort(rnk1, rnk2, -1);
      return -1;
    }

  }
  else if (nwp1 > nwp2)
  {
    DebugRacerSort(rnk1, rnk2, -1);
    return -1;
  }
  else
  {
    DebugRacerSort(rnk1, rnk2, 1);
    return 1;
  }

}

function GetWPDuration(Rnk, WPNum)
{
  if (Rnk && Rnk.WP && Rnk.WP[WPNum - 1] && Rnk.WP[WPNum - 1].duration)
  {
    return parseInt(Rnk.WP[WPNum - 1].duration, 10);
  }
  else
  {
    return 9999999999;
  }
}

function WPRaceSort(index)
{
  return function(a, b)
  {
    let wp1 = GetWPDuration(a, index);
    let wp2 = GetWPDuration(b, index);

    return wp1 - wp2;
  };
}

function RacersSort(rnk1, rnk2)
{

  if (RnkIsRacing(rnk1) && RnkIsRacing(rnk2))
  {
    return Sort2RacingBoats(rnk1, rnk2);
  }
  else if (RnkIsArrived(rnk1) && RnkIsArrived(rnk2))
  {
    return Sort2ArrivedBoats(rnk1, rnk2);
  }
  else if (RnkIsArrived(rnk1))
  {
    DebugRacerSort(rnk1, rnk2, -1);
    return -1;
  }
  else if (RnkIsArrived(rnk2))
  {
    DebugRacerSort(rnk1, rnk2, 1);
    return 1;
  }
  else if (RnkIsRacing(rnk1))
  {
    DebugRacerSort(rnk1, rnk2, 1);
    return -1;
  }
  else if (RnkIsRacing(rnk2))
  {
    DebugRacerSort(rnk1, rnk2, 1);
    return 1;
  }
  else
  {
    return Sort2NonRacing(rnk1, rnk2);
  }
}

let DebugCount = 1;

function DebugRacerSort(rnk1, rnk2, res)
{
  let debug = false;

  if (debug)
  {
    console.log((DebugCount++) + "sort " + rnk1.idusers + " vs " + rnk2.idusers + " =>" + res);
  }

}

function Sort2NonRacing(rnk1, rnk2)
{

  if (typeof rnk1.idusers !== "undefined" && typeof rnk2.idusers !== "undefined")
  {
    let SortFlag = ((rnk1.country > rnk2.country) ? 1 : ((rnk1.country === rnk2.country) ? 0 : -1));

    if (SortFlag)
    {
      return SortFlag;
    }
    else
    {
      let IdUser1 = parseInt(rnk1.idusers, 10);
      let IdUser2 = parseInt(rnk2.idusers, 10);

      if (IdUser1 > IdUser2)
      {
        DebugRacerSort(rnk1, rnk2, 1);
        return 1;
      }
      else if (IdUser1 < IdUser2)
      {
        DebugRacerSort(rnk1, rnk2, -1);
        return -1;
      }
      else
      {
        DebugRacerSort(rnk1, rnk2, 0);
        return 0;
      }
    }
  }
  else if (typeof IdUser1 !== "undefined")
  {
    return -1;
  }
  else if (typeof IdUser2 !== "undefined")
  {
    return -1;
  }
  else
  {
    let ar = [rnk1, rnk2];
    ar.sort();

    if (ar[0] === rnk1)
    {
      return 1;
    }
    else
    {
      return -1;
    }
  }
}

function GetRankingRaceId(Boat, RaceId)
{
  if (!RaceId && !RankingFt.RaceRankingId)
  {
    return Boat.Engaged;
  }
  else if (!RaceId)
  {
    return RankingFt.RaceRankingId;
  }
  else
  {
    return RaceId;
  }
}

function SortRankingData(Boat, SortType, WPNum, RaceId)
{

  RaceId = GetRankingRaceId(Boat, RaceId);

  if (!Boat || !Rankings[RaceId])
  {
    return;
  }


  if (Rankings && Rankings[RaceId] &&
    (typeof Rankings[RaceId].RacerRanking === "undefined")) //|| Rankings[RaceId].RacerRanking.length !== Rankings[RaceId]+1))
  {
    let index;

    Rankings[RaceId].RacerRanking = [];

    for (index in Rankings[RaceId])
    {
      if (Rankings[RaceId][index])
      {
        //Rankings[index].idusers=index;
        Rankings[RaceId].RacerRanking.push(Rankings[RaceId][index]);
      }
    }
  }

  switch (SortType)
  {
    case "WP":
      Rankings[RaceId].RacerRanking.sort(WPRaceSort(WPNum));
      break;

    case 'RAC':
    case 'DNF':
    case 'HC':
    case 'HTP':
    case 'ABD':
    case 'ARR':

      Rankings[RaceId].RacerRanking.sort(RacersSort);
      break;

    default:
      VLMAlertInfo("unexpected sort option : " + SortType);

  }

  let rnk = 1;
  let index = 0;

  for (index in Rankings[RaceId].RacerRanking)
  {
    if (Rankings[RaceId].RacerRanking[index] && Boat.IdBoat === index)
    {
      rnk = index + 1;
      break;
    }

  }

  return rnk;
}

function FillWPRanking(Boat, WPNum, Friends)
{
  let index;
  let RowNum = 1;
  let BestTime = 0;
  let Rows = [];

  if (!Boat || !RankingFt || RankingFt.DrawPending)
  {
    return;
  }

  let RaceId = GetRankingRaceId(Boat);

  BackupRankingTable();

  for (index in Rankings[RaceId].RacerRanking)
  {
    if (Rankings[RaceId].RacerRanking[index])
    {
      let RnkBoat = Rankings[RaceId].RacerRanking[index];

      if (RnkBoat.WP && RnkBoat.WP[WPNum - 1] && !RnkBoat.WP[WPNum - 1].Delta)
      {
        if (!BestTime)
        {
          BestTime = RnkBoat.WP[WPNum - 1].duration;
          RnkBoat.WP[WPNum - 1].Delta = 0;
          RnkBoat.WP[WPNum - 1].Pct = 0;
        }
        else
        {
          RnkBoat.WP[WPNum - 1].Delta = RnkBoat.WP[WPNum - 1].duration - BestTime;
          RnkBoat.WP[WPNum - 1].Pct = 100 * (RnkBoat.WP[WPNum - 1].duration / BestTime - 1);
        }
      }

      if (RnkBoat.WP && RnkBoat.WP[WPNum - 1])
      {
        Rows.push(GetRankingObject(RnkBoat, parseInt(index, 10) + 1, WPNum, Friends));
        if (Boat.IdBoat === parseInt(RnkBoat.idusers, 10))
        {
          RowNum = Rows.length;
        }
      }
    }
  }

  let TargetPage = RoundPow(RowNum / 20, 0) + (RowNum % 20 >= 10 ? 0 : 1);
  RankingFt.DrawPending = true;
  RankingFt.loadRows(Rows);
  RankingFt.TargetPage = TargetPage;

}

function BackupICS_WPTable()
{
  BackupFooTable(ICS_WPft, "#RaceWayPoints", "#RaceWayPointsInsertPoint");
}


function getWaypointHTMLSymbols(WPFormat)
{
  WPSymbols = "";
  switch (WPFormat & (WP_CROSS_CLOCKWISE | WP_CROSS_ANTI_CLOCKWISE))
  {
    case WP_CROSS_ANTI_CLOCKWISE:
      WPSymbols += "&#x21BA; ";
      break;
    case WP_CROSS_CLOCKWISE:
      WPSymbols += "&#x21BB; ";
      break;
    default:
  }
  if ((WPFormat & WP_CROSS_ONCE) == WP_CROSS_ONCE)
  {
    WPSymbols += "&#x2285; ";
  }

  switch (WPFormat & (WP_ICE_GATE_N | WP_ICE_GATE_S))
  {
    case WP_ICE_GATE_S:
      WPSymbols += "&#x27F0;";
      break;
    case WP_ICE_GATE_N:
      WPSymbols += "&#x27F1;";
      break;
    default:
  }
  return WPSymbols.trim();
}

function getWaypointHTMLSymbolsDescription(WPFormat)
{
  WPDesc = "";
  switch (WPFormat & (WP_CROSS_CLOCKWISE | WP_CROSS_ANTI_CLOCKWISE))
  {
    case WP_CROSS_ANTI_CLOCKWISE:
      WPDesc += GetLocalizedString("Anti-clockwise") + " ";
      break;
    case WP_CROSS_CLOCKWISE:
      WPDesc += GetLocalizedString("Clockwise") + " ";
      break;
    default:
  }

  if ((WPFormat & WP_CROSS_ONCE) == WP_CROSS_ONCE)
  {
    WPDesc += GetLocalizedString("Only once");
  }

  switch (WPFormat & (WP_ICE_GATE_N | WP_ICE_GATE_S))
  {
    case WP_ICE_GATE_S:
      WPDesc += GetLocalizedString("Ice gate") + "(" + GetLocalizedString("South") + ") ";
      break;

    case WP_ICE_GATE_N:
      WPDesc += GetLocalizedString("Ice gate") + "(" + GetLocalizedString("North") + ") ";
      break;

    default:
  }
  if (WPDesc !== "")
  {
    WPDesc = GetLocalizedString("Crossing") + " : " + WPDesc;
  }
  return WPDesc.trim();
}

function NormalizeRaceInfo(RaceInfo)
{
  if (typeof RaceInfo === "undefined" || !RaceInfo || RaceInfo.IsNormalized)
  {
    return;
  }
  RaceInfo.startlat /= VLM_COORDS_FACTOR;
  RaceInfo.startlong /= VLM_COORDS_FACTOR;

  for (let index in RaceInfo.races_waypoints)
  {
    if (RaceInfo.races_waypoints[index])
    {
      let WP = RaceInfo.races_waypoints[index];
      WP.latitude1 /= VLM_COORDS_FACTOR;
      WP.longitude1 /= VLM_COORDS_FACTOR;
      if (typeof WP.latitude2 !== "undefined")
      {
        WP.latitude2 /= VLM_COORDS_FACTOR;
        WP.longitude2 /= VLM_COORDS_FACTOR;
      }
    }
  }
  RaceInfo.IsNormalized = true;
}

function FillRaceWaypointList(RaceInfo)
{

  if (ICS_WPft.DrawPending)
  {
    if (!ICS_WPft.CallbackPending)
    {
      ICS_WPft.CallbackPending = function()
      {
        FillRaceWaypointList(RaceInfo);
      };
    }
    return;
  }

  BackupICS_WPTable();

  if (RaceInfo)
  {
    NormalizeRaceInfo(RaceInfo);
    let Rows = [];
    // Insert the start point
    let Row = {};
    Row.WaypointId = 0;
    Row.WP1 = RaceInfo.startlat + "<BR>" + RaceInfo.startlong;
    Row.WP2 = "";
    Row.Spec = "";
    Row.Type = GetLocalizedString("startmap");
    Row.Name = "";
    Rows.push(Row);

    for (let index in RaceInfo.races_waypoints)
    {
      if (RaceInfo.races_waypoints[index])
      {
        let WP = RaceInfo.races_waypoints[index];
        let Row = {};

        let WPSpec;
        Row.WaypointId = WP.wporder;
        Row.WP1 = WP.latitude1 + "<BR>" + WP.longitude1;
        if (typeof WP.latitude2 !== "undefined")
        {
          Row.WP2 = WP.latitude2 + "<BR>" + WP.longitude2;
        }
        else
        {
          Row.WP2 = "@"+WP.laisser_au;
        }
        Row.Spec = "<span title='" + getWaypointHTMLSymbolsDescription(WP.wpformat) + "'>" + getWaypointHTMLSymbols(WP.wpformat) + "</span>";
        Row.Type = GetLocalizedString(WP.wptype);
        Row.Name = WP.libelle;

        Rows.push(Row);
      }
    }

    ICS_WPft.loadRows(Rows);
  }
}

function BackupNSZ_Table()
{
  BackupFooTable(NSZ_WPft, "NSZPoints", "NSZPointsInsertPoint");
}

function FillNSZList(Exclusions)
{

  if (NSZ_WPft.DrawPending)
  {
    if (!NSZ_WPft.CallbackPending)
    {
      NSZ_WPft.CallbackPending = function()
      {
        FillNSZList(Exclusions);
      };
    }
    return;
  }

  BackupNSZ_Table();

  if (Exclusions)
  {
    let Rows = [];

    for (let index in Exclusions)
    {
      if (Exclusions[index])
      {
        let Seg = Exclusions[index];
        let row = {};
        row.NSZId = index;
        row.Lon1 = Seg[0][1];
        row.Lat1 = Seg[0][0];
        row.Lon2 = Seg[1][1];
        row.Lat2 = Seg[1][0];

        Rows.push(row);
      }
    }

    NSZ_WPft.loadRows(Rows);
  }
}

function BackupRankingTable()
{
  BackupFooTable(RankingFt, "#RankingTable", "#my-rank-content");
}

function FillStatusRanking(Boat, Status, Friends)
{
  let index;
  let RowNum = 1;
  let Rows = [];
  let RaceId = GetRankingRaceId(Boat);

  BackupRankingTable();

  for (index in Rankings[RaceId].RacerRanking)
  {
    if (Rankings[RaceId].RacerRanking[index])
    {
      let RnkBoat = Rankings[RaceId].RacerRanking[index];

      if (RnkBoat.status === Status)
      {
        Rows.push(GetRankingObject(RnkBoat, parseInt(index, 10) + 1, null, Friends));
        if (Boat.IdBoat === parseInt(RnkBoat.idusers, 10))
        {
          RowNum = Rows.length;
        }
      }
    }
  }

  let TargetPage = RoundPow(RowNum / 20, 0) + (RowNum % 20 >= 10 ? 0 : 1);
  RankingFt.loadRows(Rows);
  RankingFt.TargetPage = TargetPage;
  RankingFt.DrawPending = true;
}

function FillRacingRanking(Boat, Friends)
{
  let index;
  let Rows = [];
  let RowNum = 0;
  let Refs = {
    Arrived1stTime: null,
    Racer1stPos: null
  };

  BackupRankingTable();

  let RaceId = GetRankingRaceId(Boat);
  let CurWP = 0;
  if (RaceId && typeof Rankings !== "undefined" && typeof Rankings[RaceId] !== "undefined" && Rankings[RaceId] && Rankings[RaceId].RacerRanking)
  {
    for (index in Rankings[RaceId].RacerRanking)
    {
      if (Rankings[RaceId].RacerRanking[index])
      {
        let RnkBoat = Rankings[RaceId].RacerRanking[index];

        if (Boat.IdBoat === parseInt(RnkBoat.idusers, 10))
        {
          RowNum = Rows.length;
        }

        if (RnkIsArrived(RnkBoat) || RnkIsRacing(RnkBoat))
        {
          if (!Refs.Arrived1stTime && RnkIsArrived(RnkBoat))
          {
            // First arrived, store time
            Refs.Arrived1stTime = parseInt(RnkBoat.duration, 10);
          }

          if (RnkIsRacing(RnkBoat) && (!Refs.Racer1stPos || RnkBoat.nwp !== CurWP))
          {
            Refs.Racer1stPos = RnkBoat.dnm;
            CurWP = RnkBoat.nwp;
          }
          Rows.push(GetRankingObject(RnkBoat, parseInt(index, 10) + 1, null, Friends, Refs));
        }
        else
        {
          break;
        }
      }
    }
  }

  let TargetPage = RoundPow(RowNum / 20, 0) + (RowNum % 20 >= 10 ? 0 : 1);
  RankingFt.loadRows(Rows);
  RankingFt.TargetPage = TargetPage;
  RankingFt.DrawPending = true;
}

function GetBoatInfoLink(RnkBoat)
{
  let IdUser = parseInt(RnkBoat.idusers, 10);
  let BoatName = RnkBoat.boatname;
  let ret = "";

  if (RnkBoat.country)
  {
    ret = GetCountryFlagImgHTML(RnkBoat.country);

    if (typeof ret === "undefined")
    {
      ret = "";
    }
  }

  //ret += '<a class="RaceHistLink" href="/palmares.php?type=user&idusers='+IdUser+'" target ="_'+IdUser +'">'+BoatName+'</a>';
  ret += '<a class="RaceHistLink" boatid ="' + IdUser + '">' + BoatName + '</a>';

  return ret;
}

function GetRankingObject(RankBoat, rank, WPNum, Friends, Refs)
{

  let boatsearchstring = ''; //'<img class="BoatFinder" src="images/search.png" id=RnkUsr"'+RankBoat.idusers+'"></img>   '
  if (typeof RankBoat.Challenge !== "undefined" && RankBoat.Challenge[1])
  {
    boatsearchstring = '<img class="RnkLMNH" src="images/LMNH.png"></img>' + boatsearchstring;
  }

  boatsearchstring += GetBoatInfoLink(RankBoat);

  let RetObject = {
    Rank: rank,
    Name: boatsearchstring,
    Distance: "",
    Time: "",
    Loch: "",
    Lon: "",
    Lat: "",
    Last1h: "",
    Last3h: "",
    Last24h: "",
    Class: "",
    Delta1st: ""
  };

  if (parseInt(RankBoat.idusers, 10) === _CurPlayer.CurBoat.IdBoat)
  {
    RetObject.Class += " ft_class_myboat";
  }

  if (typeof Friends !== "undefined" && Friends)
  {
    if (Friends.indexOf(RankBoat.idusers) !== -1)
    {
      RetObject.Class += " ft_class_friend";
    }
  }

  if (RnkIsRacing(RankBoat) && !WPNum)
  {
    // General ranking layout
    let NextMark = '[' + RankBoat.nwp + '] -=> ' + RoundPow(RankBoat.dnm, 2);

    if (rank > 1 && Refs && Refs.Racer1stPos)
    {
      let P = new VLMPosition(RankBoat.longitude, RankBoat.latitude);
      RetObject.Delta1st = RoundPow(RankBoat.dnm - Refs.Racer1stPos, 2);
    }

    RetObject.Distance = NextMark;
    let RacingTime = Math.round((new Date() - new Date(parseInt(RankBoat.deptime, 10) * 1000)) / 1000);
    RetObject.Time = (RankBoat.deptime === "-1" ? "" : GetFormattedChronoString(RacingTime));
    RetObject.Loch = RankBoat.loch;
    RetObject.lon = RankBoat.longitude;
    RetObject.Lat = RankBoat.latitude;
    RetObject.Last1h = RankBoat.last1h;
    RetObject.Last3h = RankBoat.last3h;
    RetObject.Last24h = RankBoat.last24h;

    for (let index in BoatRacingStatus)
    {
      if (RankBoat.status === BoatRacingStatus[index])
      {
        RetObject.Class += "  " + BoatRacingClasses[BoatRacingStatus[index]];
      }
    }
  }
  else if (!WPNum)
  {
    // Non General ranking layout
    let NextMark = GetLocalizedString("status_" + RankBoat.status);
    RetObject.Distance = NextMark;
    let Duration = parseInt(RankBoat.duration, 10);
    RetObject.Time = GetFormattedChronoString(Duration);
    if (Refs && Duration !== Refs.Arrived1stTime)
    {
      RetObject.Time += " ( +" + RoundPow(Duration / Refs.Arrived1stTime * 100 - 100, 2) + "% )";

    }
    RetObject.Loch = RankBoat.loch;
    RetObject.lon = RankBoat.longitude;
    RetObject.Lat = RankBoat.latitude;
  }
  else
  {
    RetObject.Time = GetFormattedChronoString(parseInt(RankBoat.WP[WPNum - 1].duration, 10));
    let DeltaStr;
    if (RankBoat.WP[WPNum - 1].Delta)
    {
      let PctString = RoundPow(RankBoat.WP[WPNum - 1].Pct, 2);
      DeltaStr = GetFormattedChronoString(RankBoat.WP[WPNum - 1].Delta) + " (+" + PctString + " %)";
    }
    else
    {
      DeltaStr = GetLocalizedString("winner");
    }
    RetObject.Loch = DeltaStr;
  }

  return RetObject;
}


function HandleShowMapPrefs(e)
{
  //Load prefs
  $("#DisplayReals").attr('checked', VLM2Prefs.MapPrefs.ShowReals);
  $("#DisplayNames").attr('checked', VLM2Prefs.MapPrefs.ShowOppNames);
  $("#EstTrackMouse").attr('checked', VLM2Prefs.MapPrefs.EstTrackMouse);
  $("#TrackEstForecast").attr('checked', VLM2Prefs.MapPrefs.TrackEstForecast);
  $("#UseUTC").attr('checked', VLM2Prefs.MapPrefs.UseUTC);

  $('#DDMapSelOption:first-child').html(
    '<span Mode=' + VLM2Prefs.MapPrefs.MapOppShow + '>' + VLM2Prefs.MapPrefs.GetOppModeString(VLM2Prefs.MapPrefs.MapOppShow) + '</span>' +
    '<span class="caret"></span>'
  );

  if (VLM2Prefs.MapPrefs.MapOppShow === VLM2Prefs.MapPrefs.MapOppShowOptions.ShowTop10)
  {
    $("#NbDisplayBoat").removeClass("hidden");
    $("#NbDisplayBoat").val(VLM2Prefs.MapPrefs.ShowTopCount);
  }
  else
  {
    $("#NbDisplayBoat").addClass("hidden");
  }

  $("#VacPol").val(VLM2Prefs.MapPrefs.PolarVacCount);


}

function HandleMapPrefOptionChange(e)
{
  var target = e.target;

  if (typeof target === "undefined" || typeof target.attributes.id === "undefined")
  {
    return;
  }

  var Id = target.attributes.id.value;
  var Value = target.checked;

  switch (Id)
  {
    /*case "DisplayReals":
      //VLM2Prefs.MapPrefs.ShowReals = Value;
      //break;
    case "DisplayNames":
      //VLM2Prefs.MapPrefs.ShowOppName = Value;
      //break;*/

    case "DisplayReals":
    case "ShowReals":
    case "UseUTC":
    case "DisplayNames":
    case "ShowOppNames":
    case "EstTrackMouse":
    case "TrackEstForecast":
      VLM2Prefs.MapPrefs[Id] = Value;
      break;

    case "VacPol":
      let VacPol = parseInt($("#VacPol").val(), 10);

      if (VacPol > 0 && VacPol < 120)
      {
        VLM2Prefs.MapPrefs.PolarVacCount = VacPol;
      }
      else
      {
        $("#VacPol").value(12);
      }
      break;

    case "NbDisplayBoat":
      let TopCount = parseInt($("#NbDisplayBoat").val(), 10);
      VLM2Prefs.MapPrefs.ShowTopCount = TopCount;
      break;

    default:
      console.log("unknown pref storage called : " + Id);
      return;

  }

  VLM2Prefs.Save();
  RefreshCurrentBoat(false, false);
}

function SafeHTMLColor(Color)
{
  Color = "" + Color;

  if (Color.length < 6)
  {
    Color = ("000000" + Color).slice(-6);
  }

  if (Color.substring(0, 1) !== "#")
  {
    Color = "#" + Color;
  }
  else if (Color.substring(1, 2) === "#")
  {
    Color = Color.substring(1);
  }

  return Color;
}

function HandleMapOppModeChange(e)
{
  var t = e.target;
  var Mode = parseInt(t.attributes.Mode.value, 10);

  VLM2Prefs.MapPrefs.MapOppShow = Mode;
  VLM2Prefs.Save();
  HandleShowMapPrefs(e);

}

function SetActiveStyleSheet(title)
{
  var i, a, main;
  for (i = 0;
    (a = document.getElementsByTagName("link")[i]); i++)
  {
    if ((a.getAttribute("rel").indexOf("style") !== -1) && a.getAttribute("title"))
    {
      a.disabled = true;
      if (a.getAttribute("title") === title)
      {
        a.disabled = false;
      }
    }
  }
}

function SetDDTheme(Theme)
{
  SetActiveStyleSheet(Theme);
  $("#SelectionThemeDropDown:first-child").html(Theme + '<span class="caret"></span>');
  $("#SelectionThemeDropDown").attr("SelTheme", Theme);
}

function HandleDDlineClick(e)
{
  var Target = e.target;
  //var Theme = Target.closest(".DDTheme").attributes["DDTheme"].value;
  var Theme = e.target.attributes.ddtheme.value;

  SetDDTheme(Theme);
}

var AlertTemplate;

function InitAlerts()
{
  // Init default alertbox
  $("#AlertBox").css("display", "block");
  AlertTemplate = $("#AlertBox")[0];
  $("#AlertBoxContainer").empty();
  $("#AlertBoxContainer").removeClass("hidden");

}

function VLMAlertSuccess(Text)
{
  VLMAlert(Text, "alert-success");
}

function VLMAlertDanger(Text)
{
  VLMAlert(Text, "alert-danger");
}

function VLMAlertInfo(Text)
{
  VLMAlert(Text, "alert-info");
}

let AlertIntervalId = null;

function VLMAlert(Text, Style)
{
  if (AlertIntervalId)
  {
    clearInterval(AlertIntervalId);
  }

  if (typeof Style === "undefined" || !Style)
  {
    Style = "alert-info";
  }

  $("#AlertBoxContainer").empty().append(AlertTemplate).show();

  $("#AlertText").text(Text);
  $("#AlertBox").removeClass("alert-sucess");
  $("#AlertBox").removeClass("alert-warning");
  $("#AlertBox").removeClass("alert-info");
  $("#AlertBox").removeClass("alert-danger");
  $("#AlertBox").addClass(Style);
  $("#AlertBox").show();
  $("#AlertCloseBox").unbind().on('click', AutoCloseVLMAlert);

  if (AlertIntervalId)
  {
    clearInterval(AlertIntervalId);
  }
  AlertIntervalId = setTimeout(AutoCloseVLMAlert, 5000);
}

function AutoCloseVLMAlert()
{
  $("#AlertBox").hide();
}

function GetUserConfirmation(Question, IsYesNo, CallBack)
{
  $("#ConfirmDialog").modal('show');
  if (IsYesNo)
  {
    $("#OKBtn").hide();
    $("#CancelBtn").hide();
    $("#YesBtn").show();
    $("#NoBtn").show();
  }
  else
  {
    $("#OKBtn").show();
    $("#CancelBtn").show();
    $("#YesBtn").hide();
    $("#NoBtn").hide();
  }
  $("#ConfirmText").text(Question);
  $(".OKBtn").unbind().on("click", function()
  {
    $("#ConfirmDialog").modal('hide');
    CallBack(true);
  });
  $(".NOKBtn").unbind().on("click", function()
  {
    $("#ConfirmDialog").modal('hide');
    CallBack(false);
  });

}

function GetRaceRankingLink(RaceInfo)
{
  return '<a href="/jvlm?RaceRank=' + RaceInfo.idrace + '" target="RankTab">' + RaceInfo.racename + '</a>';
}

function FillBoatPalmares(data, status, b, c, d, f)
{
  let index;

  if (status === "success")
  {
    let rows = [];
    for (index in data.palmares)
    {
      if (data.palmares[index])
      {
        let palmares = data.palmares[index];
        let RowsData = {
          RaceId: data.palmares[index].idrace,
          RaceName: GetRaceRankingLink(data.palmares[index]),
          Ranking: palmares.ranking.rank + " / " + palmares.ranking.racercount
        };

        rows.push(RowsData);
      }
    }
    RaceHistFt.loadRows(rows);
  }

  let str = GetLocalizedString("palmares");
  str = str.replace("%s", data.boat.name);
  $("#palmaresheaderline").text(str);
}

function ShowUserRaceHistory(BoatId)
{

  $("#RaceHistory").modal("show");
  $.get("/ws/boatinfo/palmares.php?idu=" + BoatId, function(e, a, b, c, d, f)
  {
    FillBoatPalmares(e, a, b, c, d, f);
  });

}

function HandleShowBoatRaceHistory(e)
{
  let BoatId = $(e.target).attr("boatid");

  if (BoatId)
  {
    ShowUserRaceHistory(BoatId);
  }
}

function HandleCreateUserResult(data, status)
{
  if (status === "success" && data)
  {
    $(".ValidationMark").addClass("hidden");

    if (data.success)
    {
      $(".ValidationMark.Valid").removeClass("hidden");
      VLMAlertSuccess(GetLocalizedString('An email has been sent. Click on the link to validate.'));
      $("#InscriptForm").modal("hide");
      $("#LoginForm").modal("hide");
    }
    else if (data.request && data.request.errorstring)
    {
      VLMAlertDanger(GetLocalizedString(data.request.errorstring));
    }
    else
    {
      VLMAlertDanger(GetLocalizedString(data.error.msg));
    }


    if (data.request)
    {
      if (data.request.MailOK)
      {
        $(".ValidationMark.Email.Valid").removeClass("hidden");
      }
      else
      {
        $(".ValidationMark.Email.Invalid").removeClass("hidden");
      }
      if (data.request.PasswordOK)
      {
        $(".ValidationMark.Password.Valid").removeClass("hidden");
      }
      else
      {
        $(".ValidationMark.Password.Invalid").removeClass("hidden");
      }
      if (data.request.PlayerNameOK)
      {
        $(".ValidationMark.Pseudo.Valid").removeClass("hidden");
      }
      else
      {
        $(".ValidationMark.Pseudo.Invalid").removeClass("hidden");
      }
    }
    else if (data.error)
    {
      switch (data.error.code)
      {
        case "NEWPLAYER01":
          $(".ValidationMark.Email.Invalid").removeClass("hidden");
          break;

        case "NEWPLAYER02":
          $(".ValidationMark.Pseudo.Invalid").removeClass("hidden");
          break;

        case "NEWPLAYER03":
          $(".ValidationMark.Password.Invalid").removeClass("hidden");
          break;
      }
    }
  }
  $("#BtnCreateAccount").show();


}

function HandleCreateUser()
{
  let txtplayername = $("#NewPlayerPseudo")[0].value;
  let txtemail = $("#NewPlayerEMail")[0].value;
  let txtPwd = $("#NewPlayerPassword")[0].value;
  let PostData = {
    emailid: txtemail,
    password: txtPwd,
    pseudo: txtplayername
  };
  $("#BtnCreateAccount").hide();
  $.post("/ws/playerinfo/player_create.php",
    PostData,
    function(e, status)
    {
      HandleCreateUserResult(e, status);
    });
}

function setModalMaxHeight(element)
{
  this.$element = $(element);
  this.$content = this.$element.find('.modal-content');
  var borderWidth = this.$content.outerHeight() - this.$content.innerHeight();
  var dialogMargin = $(window).width() < 768 ? 20 : 60;
  var contentHeight = $(window).height() - (dialogMargin + borderWidth);
  var headerHeight = this.$element.find('.modal-header').outerHeight() || 0;
  var footerHeight = this.$element.find('.modal-footer').outerHeight() || 0;
  var maxHeight = contentHeight - (headerHeight + footerHeight);

  this.$content.css(
  {
    'overflow': 'hidden'
  });

  this.$element
    .find('.modal-body').css(
    {
      'max-height': maxHeight,
      'overflow-y': 'auto'
    });
}

// Return a moment in UTC or Local according to VLM2 Local Pref
function GetLocalUTCTime(d, IsUTC, AsString)
{
  let m = d;
  let UTCSuffix = "";

  if (!moment.isMoment(d))
  {
    if (IsUTC)
    {
      m = moment(d).utc();
    }
    else
    {
      m = moment(d);
    }
  }
  if (VLM2Prefs.MapPrefs.UseUTC)
  {
    if (!IsUTC)
    {
      m = m.utc();
    }
    UTCSuffix = " Z";
  }
  else
  {
    if (IsUTC)
    {
      m = m.local();
    }
  }

  if (AsString)
  {
    return m.format("LLLL") + UTCSuffix;
  }
  else
  {
    return m;
  }


}
/**!
 * jQuery Progress Timer - v1.0.5 - 6/8/2015
 * http://www.thomasnorberg.com
 * Copyright (c) 2015 Thomas Norberg;
 * Licensed MIT
 */

/*
 <div class="progress">
 <div class="progress-bar progress-bar-success progress-bar-striped"
 role="progressbar" aria-valuenow="40" aria-valuemin="0"
 aria-valuemax="100" style="width: 40%">
 <span class="sr-only">40% Complete (success)</span>
 </div>
 </div>
 */
if (typeof jQuery === "undefined") {
    throw new Error("jQuery progress timer requires jQuery");
}
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

(function ($, window, document, undefined) {
    "use strict";
    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.

    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in your plugin).

    // Create the defaults once
    var pluginName = "progressTimer",
        defaults = {
            //total number of seconds
            timeLimit: 60,
            //seconds remaining triggering switch to warning color
            warningThreshold: 5,
            //invoked once the timer expires
            onFinish: function () {
            },
            //bootstrap progress bar style at the beginning of the timer
            baseStyle: "",
            //bootstrap progress bar style in the warning phase
            warningStyle: "progress-bar-danger",
            //bootstrap progress bar style at completion of timer
            completeStyle: "progress-bar-success",
            //show html on progress bar div area
            showHtmlSpan: true,
            //set the error text when error occurs
            errorText: "ERROR!",
            //set the success text when succes occurs
            successText: "100%"
        };

    // The actual plugin constructor
    var Plugin = function (element, options) {
        this.element = element;
        this.$elem = $(element);
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.metadata = this.$elem.data("plugin-options");
        this.init();
    };

    Plugin.prototype.constructor = Plugin;

    Plugin.prototype.init = function () {
        var t = this;
        $(t.element).empty();
        t.span = $("<span/>");
        t.barContainer = $("<div>").addClass("progress");
        t.bar = $("<div>").addClass("progress-bar active progress-bar-striped").addClass(t.options.baseStyle)
            .attr("role", "progressbar")
            .attr("aria-valuenow", "0")
            .attr("aria-valuemin", "0")
            .attr("aria-valuemax", t.options.timeLimit);
        t.span.appendTo(t.bar);
        if (!t.options.showHtmlSpan) {
            t.span.addClass("sr-only");
        }
        t.bar.appendTo(t.barContainer);
        t.barContainer.appendTo(t.element);
        t.start = new Date();
        t.limit = t.options.timeLimit * 1000;
        t.warningThreshold = t.options.warningThreshold * 1000;
        t.interval = window.setInterval(function () {
            t._run.call(t);
        }, 250);
        t.bar.data("progress-interval", t.interval);
        return true;
    };

    Plugin.prototype.destroy = function(){
        this.$elem.removeData();
    };

    Plugin.prototype._run = function () {
        var t = this;
        var elapsed = new Date() - t.start,
            width = ((elapsed / t.limit) * 100);
        t.bar.attr("aria-valuenow", width);
        t.bar.width(width + "%");
        var percentage = width.toFixed(2);
        if (percentage >= 100) {
            percentage = 100;
        }
        if (t.options.showHtmlSpan) {
            t.span.html(percentage + "%");
        }
        if (elapsed >= t.warningThreshold) {
            t.bar.removeClass(this.options.baseStyle)
                .removeClass(this.options.completeStyle)
                .addClass(this.options.warningStyle);
        }
        if (elapsed >= t.limit) {
            t.complete.call(t);
        }
        return true;
    };

    Plugin.prototype.removeInterval = function () {
        var t = this,
            bar = $(".progress-bar", t.element);
        if (typeof bar.data("progress-interval") !== "undefined") {
            var interval = bar.data("progress-interval");
            window.clearInterval(interval);
        }
        return bar;
    };

    Plugin.prototype.complete = function () {
        var t = this,
            bar = t.removeInterval.call(t),
            args = arguments;
        if(args.length !== 0 && typeof args[0] === "object"){
            t.options = $.extend({}, t.options, args[0]);
        }
        bar.removeClass(t.options.baseStyle)
            .removeClass(t.options.warningStyle)
            .addClass(t.options.completeStyle);
        bar.width("100%");
        if (t.options.showHtmlSpan) {
            $("span", bar).html(t.options.successText);
        }
        bar.attr("aria-valuenow", 100);
        setTimeout(function () {
            t.options.onFinish.call(bar);
        }, 500);
        t.destroy.call(t);
    };

    Plugin.prototype.error = function () {
        var t = this,
            bar = t.removeInterval.call(t),
            args = arguments;
        if(args.length !== 0 && typeof args[0] === "object"){
            t.options = $.extend({}, t.options, args[0]);
        }
        bar.removeClass(t.options.baseStyle)
            .addClass(t.options.warningStyle);
        bar.width("100%");
        if (t.options.showHtmlSpan) {
            $("span", bar).html(t.options.errorText);
        }
        bar.attr("aria-valuenow", 100);
        setTimeout(function () {
            t.options.onFinish.call(bar);
        }, 500);
        t.destroy.call(t);
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
        var args = arguments;
        if (options === undefined || typeof options === "object") {
            // Creates a new plugin instance
            return this.each(function () {
                if (!$.data(this, "plugin_" + pluginName)) {
                    $.data(this, "plugin_" + pluginName, new Plugin(this, options));
                }
            });
        } else if (typeof options === "string" && options[0] !== "_" && options !== "init") {
            // Call a public plugin method (not starting with an underscore) and different
            // from the "init" one
            if (Array.prototype.slice.call(args, 1).length === 0 && $.inArray(options, $.fn[pluginName].getters) !== -1) {
                // If the user does not pass any arguments and the method allows to
                // work as a getter then break the chainability so we can return a value
                // instead the element reference.
                var instance = $.data(this[0], "plugin_" + pluginName);
                return instance[options].apply(instance, Array.prototype.slice.call(args, 1));
            } else {
                // Invoke the specified method on each selected element
                return this.each(function() {
                    var instance = $.data(this, "plugin_" + pluginName);
                    if (instance instanceof Plugin && typeof instance[options] === "function") {
                        instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                    }
                });
            }
        }
    };

    $.fn[pluginName].getters = ["complete", "error"];

})(jQuery, window, document, undefined);
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function ($) {

  // Detect touch support
  $.support.touch = 'ontouchend' in document;

  // Ignore browsers without touch support
  if (!$.support.touch) {
    return;
  }

  var mouseProto = $.ui.mouse.prototype,
      _mouseInit = mouseProto._mouseInit,
      _mouseDestroy = mouseProto._mouseDestroy,
      touchHandled;

  /**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */
  function simulateMouseEvent (event, simulatedType) {

    // Ignore multi-touch events
    if (event.originalEvent.touches.length > 1) {
      return;
    }

    event.preventDefault();

    var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents');
    
    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(
      simulatedType,    // type
      true,             // bubbles                    
      true,             // cancelable                 
      window,           // view                       
      1,                // detail                     
      touch.screenX,    // screenX                    
      touch.screenY,    // screenY                    
      touch.clientX,    // clientX                    
      touch.clientY,    // clientY                    
      false,            // ctrlKey                    
      false,            // altKey                     
      false,            // shiftKey                   
      false,            // metaKey                    
      0,                // button                     
      null              // relatedTarget              
    );

    // Dispatch the simulated event to the target element
    event.target.dispatchEvent(simulatedEvent);
  }

  /**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */
  mouseProto._touchStart = function (event) {

    var self = this;

    // Ignore the event if another widget is already being handled
    if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
      return;
    }

    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;

    // Track movement to determine if interaction was a click
    self._touchMoved = false;

    // Simulate the mouseover event
    simulateMouseEvent(event, 'mouseover');

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');

    // Simulate the mousedown event
    simulateMouseEvent(event, 'mousedown');
  };

  /**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */
  mouseProto._touchMove = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Interaction was not a click
    this._touchMoved = true;

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
  };

  /**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */
  mouseProto._touchEnd = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Simulate the mouseup event
    simulateMouseEvent(event, 'mouseup');

    // Simulate the mouseout event
    simulateMouseEvent(event, 'mouseout');

    // If the touch interaction did not move, it should trigger a click
    if (!this._touchMoved) {

      // Simulate the click event
      simulateMouseEvent(event, 'click');
    }

    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
  };

  /**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */
  mouseProto._mouseInit = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.bind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
  };

  /**
   * Remove the touch event handlers
   */
  mouseProto._mouseDestroy = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.unbind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse destroy method
    _mouseDestroy.call(self);
  };

})(jQuery);
 var _LocaleDict;
 var _EnDict;
 var _CurLocale= 'en';  // Default to english unless otherwise posted

function LocalizeString()
{
  //console.log("Localizing...");
  LocalizeItem($("[I18n]").get());
  
  // Handle flag clicks
  $(".LngFlag").click(
    function(event,ui)
    {
      OnLangFlagClick($(this).attr('lang'));
      UpdateLngDropDown();
    }
  );
  
  return true;
}

function OnLangFlagClick(Lang)
{
  InitLocale(Lang);
}

function LocalizeItem( Elements )
{
  try
  {
    var child;
    
    //console.log(Elements);
    for ( child in Elements )
    {
      var el = Elements[child];
      var Attr = el.attributes.I18n.value;
      
      if (typeof _LocaleDict != "undefined")
      {
        el.innerHTML=GetLocalizedString(Attr);
      }      
    }

  } 
  finally
  {
  }    
  return true;
}

function InitLocale(Lang)
{
  var query = "/ws/serverinfo/translation.php";
  
  if (Lang)
  {
    query += "?lang=" + Lang;
  }
  $.get( query,
          function(result)
          {
            if (result.success == true)
            {
              _CurLocale = result.request.lang;
              _LocaleDict=result.strings;
              moment.locale(_CurLocale);
              LocalizeString();
              UpdateLngDropDown();
            }
            else
            {
              alert("Localization string table load failure....");
            }
          }
         );

	if (typeof _EnDict == 'undefined')
  {
    // Load english dictionnary as fall back on 1st call
    $.get( "/ws/serverinfo/translation.php?lang=en",
          function(result)
          {
            if (result.success == true)
            {
              _EnDict=result.strings;
            }
            else
            {
              alert("Fallback localization string table load failure....");
            }
          }
         );
  }  
}

function HTMLDecode(String)
{
  let txt = document.createElement("textarea");
  txt.innerHTML = String;
  let RetString = txt.value;
  let EOLSigns = ["\n\r","\r\n","\n","\r"];

  for (let index in EOLSigns)
  {
    while (EOLSigns[index] && RetString.indexOf(EOLSigns[index]) !== -1)
    {
      RetString = RetString.replace(EOLSigns[index],"<br>");
    }
  } 

  return RetString;
}

function GetLocalizedString(StringId)
{
  let RetString = "";
    
  if (StringId in _LocaleDict)
  {
    RetString = HTMLDecode( _LocaleDict[StringId]);
  }
  else if ((typeof _EnDict !=="undefined") && (_EnDict) &&  (StringId in _EnDict))
  {
    RetString = HTMLDecode(_EnDict[StringId]);
  }
  else
  {
    RetString = StringId;
  }

  return RetString;
}

function GetCurrentLocale()
{
  return _CurLocale;
}

var VLMMercatorTransform = new MercatorTransform();

function MercatorTransform ()
{
  this.Width = 10000;
  this.Height = 10000;
  this.LonOffset = 0;
  this.LatOffset = 0;
  this.Scale = 10000/180;

  this.LonToMapX = function(Lon)
  {
    return this.Width / 2.0 + (Lon - this.LonOffset) * this.Scale;
  };

  this.LatToMapY = function(Lat)
  {
    Lat = Deg2Rad(Lat);
    Lat = Math.log(Math.tan(Lat) + 1 / Math.cos(Lat));
    Lat = Rad2Deg(Lat);
    
    return this.Height / 2.0 - (Lat - this.LatOffset) * this.Scale;
     
  };

  this.SegmentsIntersect = function (Seg1, Seg2)
  {
    
    var Ax = this.LonToMapX(Seg1.P1.Lon.Value);
    var Ay = this.LatToMapY(Seg1.P1.Lat.Value);
    var Bx = this.LonToMapX(Seg1.P2.Lon.Value);
    var By = this.LatToMapY(Seg1.P2.Lat.Value);
    var Cx = this.LonToMapX(Seg2.P1.Lon.Value);
    var Cy = this.LatToMapY(Seg2.P1.Lat.Value);
    var Dx = this.LonToMapX(Seg2.P2.Lon.Value);
    var Dy = this.LatToMapY(Seg2.P2.Lat.Value);

    //  Fail if either line is undefined.
    if ((Seg1.P1.Lon.Value === Seg1.P2.Lon.Value && Seg1.P1.Lat.Value === Seg1.P2.Lat.Value) || 
        (Seg2.P1.Lon.Value === Seg2.P2.Lon.Value && Seg2.P1.Lat.Value === Seg2.P2.Lat.Value)) 
    {
      return false;
    }


    // (1) Translate the system so that point A is on the origin.
    Bx -= Ax;
    By -= Ay;
    Cx -= Ax;
    Cy -= Ay;
    Dx -= Ax;
    Dy -= Ay;
    Ax = 0;
    Ay = 0;

    // Discover the length of segment A-B.
    var DistAB = Math.sqrt(Bx * Bx + By * By);
        
    // (2) Rotate the system so that point B is on the positive X axis.
    var theCos = Bx / DistAB;
    var theSin = By / DistAB;
    var newX = Cx * theCos + Cy * theSin;
    Cy = Cy * theCos - Cx * theSin;
    Cx = newX;
    newX = Dx * theCos + Dy * theSin;
    Dy = Dy * theCos - Dx * theSin;
    Dx = newX;

    // Fail if the lines are parallel.
    if (Cy === Dy)
    {
      return false;
    }

    //  (3) Discover the position of the intersection point along line A-B.
    var ABpos = Dx + (Cx - Dx) * Dy / (Dy - Cy);


    var Ratio = ABpos / DistAB;


    if (Ratio >= 0 && Ratio <= 1) 
    {

      // Possible Success
      // Check other segment ratio

      // Get Intersect coords
      var Ix = Ax + ABpos;
      var Iy = Ay;
      var Ratio2 ;

      if (Dx - Cx) 
      {
        // Seg is not vertical
        Ratio2 = (Ix - Cx) / (Dx - Cx);
      }
      else if  (Dy - Cy) 
      {
        // Seg is vertical
        Ratio2 = (Iy - Cy) / (Dy - Cy);
      }
      else 
      {
        // No segment !!
        return false;
      }

      if ((Ratio2 >= 0) && (Ratio2 <= 1)) 
      {
        return true;
      }
      else 
      {
        return false;
      }
    }
    else 
    {
      // Segments do not intersect
      return false;
    }
  };
  
  /*
  Public Function CanvasToLat(ByVal C As Double) Implements IMapTransform.CanvasToLat
    Debug.Assert(Scale <> 0)
    var Ret = (ActualHeight / 2 - C) / Scale + LatOffset
    Ret = Ret / 180 * PI
    return (Math.Atan(Math.Sinh(Ret)) / PI * 180)
  End Function

  Public Function CanvasToLon(ByVal V As Double) Implements IMapTransform.CanvasToLon
    Debug.Assert(Scale <> 0)
    var Ret = ((V - ActualWidth / 2) / Scale + LonOffset) 
    return Ret
  End Function
  */
}
//
// Module for handling boat polars
//

var PolarsManager = new PolarManagerClass();
    

function PolarManagerClass()
{
  this.Polars =[];

  this.Init = function()
  {
    this.Polars=[];
    // Bg load the list of boats with a polar in VLM
    $.get("/ws/polarlist.php",
            function (Data)
            {
              //Parse WS data, build polarlist and URL
              // Build list of boat for lazy loading
              for (let index in Data.list)
              {
                PolarsManager.Polars["boat_"+Data.list[index]]=null;
              }
            }
        );
  };

  this.GetBoatSpeed=function(PolarName, WindSpeed, WindBearing, BoatBearing)
  {
    if (! (PolarName in this.Polars))
    {
        return NaN;
    }
    if (!this.Polars[PolarName])
    {
      // Polar not loaded yet, load it
      $.get("/Polaires/"+ PolarName +".csv",this.HandlePolarLoaded.bind(this, PolarName,null, null));

      return NaN;
    }
    else
    {
      var alpha = WindAngle (BoatBearing , WindBearing);
      var Speed = GetPolarAngleSpeed(this.Polars[PolarName],alpha, WindSpeed);

      return Speed;
    }

  };
  
  this.HandlePolarLoaded = function(PolarName,callback,Boat, data)
  {
    var polar = $.csv.toArrays(data,{separator:";"});

    // Convert back all values to floats.
    for (let row in polar)
    {
      if (polar[row])
      {
        for (let col in polar[row])
        {
          if (polar[row][col])
          {
            polar[row][col]=parseFloat(polar[row][col]);
          }
        }
      }
    }
    PolarsManager.Polars[PolarName]={};
    PolarsManager.Polars[PolarName].SpeedPolar=polar;
    PolarsManager.Polars[PolarName].WindLookup=[];
    PolarsManager.Polars[PolarName].AngleLookup=[];

    if (callback && Boat)
    {
      callback(Boat);
    }
    else if (callback)
    {
      callback();
    }
  };

  this.GetPolarLine=function(PolarName,WindSpeed, callback, boat, Step)
  {
    if (!Step)
    {
      Step = 5;
    }
    if (typeof this.Polars[PolarName] === "undefined")
    {
        alert("Unexpected polarname : " + PolarName);
        return null;
    }
    if (this.Polars[PolarName] === null)
    {
      // Polar not loaded yet, load it
      $.get("/Polaires/"+ PolarName +".csv",this.HandlePolarLoaded.bind(this, PolarName,callback,boat));
    }
    else
    {
      var RetPolar = [];

      var alpha;
      var MaxSpeed = 0;
      // Loop to get speedvalue per angle

      for (alpha = 0; alpha <= 180 ; alpha+=Step)
      {
        var Speed = GetPolarAngleSpeed(this.Polars[PolarName],alpha, WindSpeed);

        if (MaxSpeed < Speed)
        {
          MaxSpeed=Speed;
        }
        RetPolar.push (Speed);
      }

      // Scale Polar to 1
      for (let index in RetPolar)
      {
        if (RetPolar[index])
        {
          RetPolar[index]/=MaxSpeed;
        }
      }

      return RetPolar;
    }
  };

  var DebugVMG = 0;
  this.GetVMGCourse = function(Polar,WindSpeed,WindBearing,StartPos, DestPos)
  {
    var OrthoBearing = StartPos.GetOrthoCourse(DestPos);
    var BestAngle = 0;
    var BestVMG = -1e10;

    for (var dir =-1 ; dir <= 1 ; dir +=2)
    {
      for (var angle = 0.0; angle <=90; angle += 0.1)
      {
        var CurSpeed = this.GetBoatSpeed (Polar,WindSpeed,WindBearing,OrthoBearing + angle*dir);
        var CurVMG = CurSpeed * Math.cos(Deg2Rad(angle));

        if (DebugVMG )
        {
          console.log ("VMG "+ RoundPow((OrthoBearing + angle*dir+360.0) % 360.0 ,3) + " " + RoundPow(CurSpeed,3) + " " + RoundPow(CurVMG,3) + " " + RoundPow(BestVMG,3) + " " + (CurVMG >= BestVMG?"BEST":"") );
        }

        if (CurVMG >= BestVMG)
        {
          BestVMG = CurVMG;
          BestAngle = OrthoBearing+ angle*dir;
        }
      }   
    }

    DebugVMG = 0;
    return BestAngle;
  };

  this.GetVBVMGCourse = function(Polar,WindSpeed,WindBearing,StartPos, DestPos)
  {
    var Dist = StartPos.GetOrthoDist(DestPos);
    var CapOrtho  = StartPos.GetOrthoCourse(DestPos);
    var b_Alpha = 0;
    var b_Beta = 0;
    var SpeedAlpha = 0;
    var SpeedBeta = 0;
        
    var Speed = this.GetBoatSpeed(Polar, WindSpeed, WindBearing, CapOrtho);
    if (Speed > 0) 
    {
      t_min = Dist / Speed;
    }
    else
    {
      t_min = 365 * 24;
    }
    var angle = WindBearing - CapOrtho;

    if (angle < -90) 
    {
      angle += 360;
    }
    else if (angle > 90) 
    {
      angle -= 360;
    }
    
    if (angle > 0) 
    {
      ISigne = -1;
    }
    else
    {
      ISigne = 1;
    }
    
    for (var i = 1; i<=  90; i++)
    {
      alpha = i * Math.PI / 180;
      TanAlpha = Math.tan(alpha);
      D1HypotRatio = Math.sqrt(1 + TanAlpha * TanAlpha);
      SpeedT1 = this.GetBoatSpeed(Polar, WindSpeed, WindBearing, CapOrtho - i * ISigne);
      
      if (isNaN(SpeedT1))
      {
        throw "Nan SpeedT1 exception";
      }
      if (SpeedT1 > 0) 
      {

        for (j = -89 ; j<= 0; j++)
        {
          beta = j * Math.PI / 180;
          D1 = Dist * (Math.tan(-beta) / (TanAlpha + Math.tan(-beta)));
          L1 = D1 * D1HypotRatio;
          
          T1 = L1 / SpeedT1;
          if ((T1 < 0) || (T1 > t_min)) 
          {
            continue ;
          }
          
          D2 = Dist - D1;
          
          SpeedT2 = this.GetBoatSpeed(Polar, WindSpeed, WindBearing, CapOrtho -j * ISigne);
          
          if (isNaN(SpeedT2))
          {
            throw "Nan SpeedT2 exception";
          }
          
          if (SpeedT2 <= 0) 
          {
            continue ;
          }
          
          TanBeta = Math.tan(-beta);
          L2 = D2 * Math.sqrt(1 + TanBeta * TanBeta);
          
          T2 = L2 / SpeedT2;
          
          T = T1 + T2;
          if (T < t_min) 
          {
            t_min = T;
            b_Alpha = i;
            b_Beta = j;
            b_L1 = L1;
            b_L2 = L2;
            b_T1 = T1;
            b_T2 = T2;
            SpeedAlpha = SpeedT1;
            SpeedBeta = SpeedT2;
          }
        }
      }

    }

    
    VMGAlpha = SpeedAlpha * Math.cos(Deg2Rad(b_Alpha));
    VMGBeta = SpeedBeta * Math.cos(Deg2Rad(b_Beta));

    if (isNaN(VMGAlpha) || isNaN(VMGBeta))
    {
      throw "NaN VMG found";
    }

    if (VMGAlpha > VMGBeta) 
    {
      return CapOrtho - b_Alpha * ISigne;
    }
    else
    {
      return CapOrtho - b_Beta * ISigne;
    }
  };

  this.GetPolarMaxSpeed = function(PolarName,WindSpeed)
  {
    // Assume polar is already loaded
    if (!this.Polars[PolarName])
    {
      return null;
    }

    let Alpha ;
    let MaxSpeed = 0;

    for (Alpha = 0 ; Alpha <= 180; Alpha+=1)
    {
      let S = GetPolarAngleSpeed(this.Polars[PolarName],Alpha,WindSpeed);
      if (S > MaxSpeed)
      {
        MaxSpeed = S;
      }
    }

    return MaxSpeed;
  };

}// End PolarManagerClass

// Returns the speed at given angle for a polar
function GetPolarAngleSpeed  (PolarObject,Alpha, WindSpeed)
{
  let SpeedCol1;
  let SpeedCol2;
  let AlphaRow1;
  let AlphaRow2;

  // Loop and index index <= Speed
  let Polar = PolarObject.SpeedPolar;
  let IntWind = Math.floor(WindSpeed);

  if ((typeof PolarObject.WindLookup !== "undefined") &&  (IntWind in PolarObject.WindLookup))
  {
    SpeedCol1=PolarObject.WindLookup[IntWind];
  }
  else
  {
    for ( let index in Polar[0])
    {
      if ((index >0) && (Polar[0][index])>WindSpeed)
      {
        break;
      }
      PolarObject.WindLookup[IntWind]=Math.floor(index);
      SpeedCol1=Math.floor(index);
    }
  }

  SpeedCol2=(SpeedCol1 < Polar[0].length-1)?SpeedCol1+1:SpeedCol1;

  // loop Rows to find angle <= alpha
  while (Alpha < 0)
  {
    Alpha += 360.0;
  }

  if (Alpha >= 360)
  {
    Alpha%=360.0;
  }
  
  if (Alpha > 180.0)
  {
    Alpha = 360.0 - Alpha;
  }

  var IntAlpha = Math.floor(Alpha);
  if ( (typeof PolarObject.AngleLookup !== "undefined") && (IntAlpha in PolarObject.AngleLookup))
  {
    AlphaRow1 = PolarObject.AngleLookup[IntAlpha];
  }
  else
  {

    for (let index in Polar)
    {
      if ((index > 0) && (Polar[index][0]>Alpha))
      {
        break;
      }
      PolarObject.AngleLookup[IntAlpha] = Math.floor(index);
      AlphaRow1=Math.floor(index);
    }
  }
  AlphaRow2=(AlphaRow1< Polar.length-1)?AlphaRow1+1:AlphaRow1;

  let v1 = GetAvgValue(WindSpeed,Polar[0][SpeedCol1], Polar[0][SpeedCol2],Polar[AlphaRow1][SpeedCol1], Polar[AlphaRow1][SpeedCol2]);
  let v2 = GetAvgValue(WindSpeed,Polar[0][SpeedCol1], Polar[0][SpeedCol2],Polar[AlphaRow2][SpeedCol1], Polar[AlphaRow2][SpeedCol2]);
  let RetValue=  GetAvgValue(Alpha,Polar[AlphaRow1][0], Polar[AlphaRow2][0],v1,v2);   

  if (isNaN(RetValue))
  {
    // Start over for debugging (will crash the stack!!)
    // GetPolarAngleSpeed  (PolarObject,Alpha, WindSpeed)
    throw "GetAvgValue was NaN";
  }
  return RetValue;

}

function WindAngle (BoatBearing, WindBearing)
{

  var I = 0;

  if (BoatBearing >= WindBearing) 
  {
    if ((BoatBearing - WindBearing) <= 180.0) 
    {
        I = BoatBearing - WindBearing;
    }
    else
    {
      I = 360 - BoatBearing + WindBearing;
    }
  }
  else
  {
    if ((WindBearing - BoatBearing) <= 180.0) 
    {
      I = WindBearing - BoatBearing;
    }
    else
    {
      I = 360 - WindBearing + BoatBearing;
    }
  }

  return I;

}

// Return Linear interpolated y for x on line (Rx1,Ry1)(Rx2,Ry2)
function GetAvgValue(x,Rx1,Rx2,Ry1,Ry2)
{
  // Cast all params as numbers
  /*x=parseFloat(x);
  Rx1=parseFloat(Rx1);
  Rx2=parseFloat(Rx2);
  Ry1=parseFloat(Ry1);
  Ry2=parseFloat(Ry2);
  */

  if ((x === Rx1) || (Rx1 === Rx2) || (Ry1 === Ry2) )
  {
    // Trivial & corner cases
    return Ry1;
  }
  else
  {
    return Ry1+(x-Rx1)/(Rx2-Rx1)*(Ry2-Ry1);
  }
}
//
// Position class
//
// Formating, conversion, and geo computation
//
//

const POS_FORMAT_DEFAULT = 0;
// Earth radius for all calculation of distance in Naut. Miles
const EARTH_RADIUS = 3443.84;
const VLM_DIST_ORTHO = 1;


function Deg2Rad(v)
{
  return v / 180.0 * Math.PI;
}

function Rad2Deg(v)
{
  return v / Math.PI * 180.0;
}

function RoundPow(v, P)
{
  if (typeof P !== 'undefined')
  {
    var Div = Math.pow(10, P);
    return Math.round(v * Div) / Div;
  }
  else
  {
    return v;
  }
}

function NormalizeLongitudeDeg(Lon)
{
  if (Lon < -180)
  {
    Lon += 360;
  }
  else if (Lon > 180)
  {
    Lon -= 360;
  }

  return Lon;
}

// Constructor
function VLMPosition(lon, lat, format)
{
  if (typeof format == 'undefined' || format == POS_FORMAT_DEFAULT)
  {
    // Default constructor, lon and lat in degs flaoting format
    this.Lon = new Coords(lon, 1);
    this.Lat = new Coords(lat, 0);
  }

  // Default string formating
  this.ToString = function(Raw)
  {
    return this.Lat.ToString(Raw) + " " + this.Lon.ToString(Raw);
  };

  this.GetEuclidianDist2 = function(P)
  {
    var dLat = (this.Lat.Value - P.Lat.Value) % 90;
    var dLon = (this.Lon.Value - P.Lon.Value) % 180;

    return dLat * dLat + dLon * dLon;
  };

  // function GetLoxoDist
  // Returns the loxodromic distance to another point
  this.GetLoxoDist = function(P, Precision)
  {

    var Lat1 = Deg2Rad(this.Lat.Value);
    var Lat2 = Deg2Rad(P.Lat.Value);
    var Lon1 = -Deg2Rad(this.Lon.Value);
    var Lon2 = -Deg2Rad(P.Lon.Value);


    var TOL = 0.000000000000001;
    var d = 0;
    var q = 0;
    if (Math.abs(Lat2 - Lat1) < Math.sqrt(TOL))
    {
      q = Math.cos(Lat1);
    }
    else
    {
      q = (Lat2 - Lat1) / Math.log(Math.tan(Lat2 / 2 + Math.PI / 4) / Math.tan(Lat1 / 2 + Math.PI / 4));
    }

    d = Math.sqrt(Math.pow(Lat2 - Lat1, 2) + q * q * (Lon2 - Lon1) * (Lon2 - Lon1));
    var RetVal = EARTH_RADIUS * d;


    return RoundPow(RetVal, Precision);
  };

  // Reaches a point from position using rhumbline.
  // Compute the position of point at r * distance to point P is 1st param is a Position
  // Computes the position at Distance P, and heading r if P is a number
  // Along loxodrome from this to P
  this.ReachDistLoxo = function(P, r)
  {
    var d = 0;
    var tc = 0;

    if (isNaN(r))
    {
      throw "unsupported reaching NaN distance";
    }

    if (typeof P == "number")
    {
      d = P / EARTH_RADIUS;
      tc = Deg2Rad(r % 360);
    }
    else
    {
      d = this.GetLoxoDist(P) / EARTH_RADIUS * r;
      tc = Deg2Rad(this.GetLoxoCourse(P));
    }

    var Lat1 = Deg2Rad(this.Lat.Value);
    var Lon1 = -Deg2Rad(this.Lon.Value);
    var Lat = 0;
    var Lon = 0;
    var TOL = 0.000000000000001;
    var q = 0;
    var dPhi = 0;
    var dlon = 0;

    Lat = Lat1 + d * Math.cos(tc);
    if (Math.abs(Lat) > Math.PI / 2)
    {
      //'"d too large. You can't go this far along this rhumb line!"
      throw "Invalid distance, can't go that far";
    }

    if (Math.abs(Lat - Lat1) < Math.sqrt(TOL))
    {
      q = Math.cos(Lat1);
    }
    else
    {
      dPhi = Math.log(Math.tan(Lat / 2 + Math.PI / 4) / Math.tan(Lat1 / 2 + Math.PI / 4));
      q = (Lat - Lat1) / dPhi;
    }
    dlon = -d * Math.sin(tc) / q;
    Lon = -(((Lon1 + dlon + Math.PI) % (2 * Math.PI) - Math.PI));

    if (isNaN(Lon) || isNaN(Lat))
    {
      throw "Reached Nan Position!!!";
    }

    Lon = RoundPow(Rad2Deg(Lon), 9);
    Lat = RoundPow(Rad2Deg(Lat), 9);

    return new VLMPosition(NormalizeLongitudeDeg(Lon), Lat);


  };

  //
  // Return loxodromic course from this to P in °
  //
  this.GetLoxoCourse = function(P, Precision)
  {
    var Lon1 = -Deg2Rad(this.Lon.Value);
    var Lon2 = -Deg2Rad(P.Lon.Value);
    var Lat1 = Deg2Rad(this.Lat.Value);
    var Lat2 = Deg2Rad(P.Lat.Value);

    if (typeof Precision == "undefined" || typeof Precision != "number")
    {
      Precision = 17;
    }

    /*if (Lon1 > 0)
    {
        Lon2 += 2 * Math.PI
    }
    else
    {   
        Lon2 -= 2 * Math.PI
    }*/
    var dlon_w = (Lon2 - Lon1) % (2 * Math.PI);
    var dlon_e = (Lon1 - Lon2) % (2 * Math.PI);
    var dphi = Math.log(Math.tan(Lat2 / 2 + Math.PI / 4) / Math.tan(Lat1 / 2 + Math.PI / 4));
    var tc;


    if (dlon_w < dlon_e)
    { // Westerly rhumb line is the shortest
      tc = Math.atan2(dlon_w, dphi) % (2 * Math.PI);
    }
    else
    {
      tc = Math.atan2(-dlon_e, dphi) % (2 * Math.PI);
    }

    var ret = (720 - (tc / Math.PI * 180)) % 360;

    return RoundPow(ret, Precision);
  };

  if (VLM_DIST_ORTHO)
  {

    // Function GetOrthoDist
    // Return ortho distance from this to P
    this.GetOrthoDist = function(P, Precision)
    {
      var lon1 = -Deg2Rad(this.Lon.Value);
      var lon2 = -Deg2Rad(P.Lon.Value);
      var lat1 = Deg2Rad(this.Lat.Value);
      var lat2 = Deg2Rad(P.Lat.Value);

      if (typeof Precision == "undefined" || typeof Precision != "number")
      {
        Precision = 17;
      }

      //d=acos(sin(lat1)*sin(lat2)+cos(lat1)*cos(lat2)*cos(lon1-lon2))
      var retval = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon1 - lon2));

      return RoundPow(60 * Rad2Deg(retval), Precision);
    };

    //
    // Return orthodromic course from this to P
    //
    this.GetOrthoCourse = function(P, Precision)
    {
      var lon1 = -Deg2Rad(this.Lon.Value);
      var lon2 = -Deg2Rad(P.Lon.Value);
      var lat1 = Deg2Rad(this.Lat.Value);
      var lat2 = Deg2Rad(P.Lat.Value);

      if (typeof Precision == "undefined" || typeof Precision != "number")
      {
        Precision = 17;
      }

      /*IF sin(lon2-lon1)<0       
        tc1=acos((sin(lat2)-sin(lat1)*cos(d))/(sin(d)*cos(lat1)))    
      ELSE       
        tc1=2*pi-acos((sin(lat2)-sin(lat1)*cos(d))/(sin(d)*cos(lat1)))    
      ENDIF*/
      var d = Deg2Rad(this.GetOrthoDist(P) / 60);
      var retval = (Math.sin(lat2) - Math.sin(lat1) * Math.cos(d)) / (Math.sin(d) * Math.cos(lat1));
      if ((retval >= -1) && (retval <= 1))
      {
        if (Math.sin(lon2 - lon1) < 0)
        {
          retval = Math.acos(retval);
        }
        else
        {
          retval = 2 * Math.PI - Math.acos(retval);
        }
      }
      else if (lat1 < lat2)
      {
        retval = 0;
      }
      else
      {
        retval = Math.PI;
      }

      retval = Rad2Deg(retval % (2 * Math.PI));
      return RoundPow(retval, Precision);
    };

  }
  else
  {
    // Function GetOrthoDist
    // Return ortho distance from this to P
    this.GetOrthoDist = function(P, Precision)
    {
      var lon1 = -Deg2Rad(this.Lon.Value);
      var lon2 = -Deg2Rad(P.Lon.Value);
      var lat1 = Deg2Rad(this.Lat.Value);
      var lat2 = Deg2Rad(P.Lat.Value);

      if (typeof Precision == "undefined" || typeof Precision != "number")
      {
        Precision = 17;
      }
      //        d=2*asin(sqrt((sin((lat1-lat2)/2))^2 + 
      //                 cos(lat1)*cos(lat2)*(sin((lon1-lon2)/2))^2))

      var retval = 2 * Math.asin(Math.sqrt(Math.pow((Math.sin((lat1 - lat2) / 2)), 2) +
        Math.pow(Math.cos(lat1) * Math.cos(lat2) * (Math.sin((lon1 - lon2) / 2)), 2)));

      return RoundPow(EARTH_RADIUS * retval, Precision);
    };

    //
    // Return orthodromic course from this to P
    //
    this.GetOrthoCourse = function(P, Precision)
    {
      var lon1 = -Deg2Rad(this.Lon.Value);
      var lon2 = -Deg2Rad(P.Lon.Value);
      var lat1 = Deg2Rad(this.Lat.Value);
      var lat2 = Deg2Rad(P.Lat.Value);

      if (typeof Precision == "undefined" || typeof Precision != "number")
      {
        Precision = 17;
      }

      //tc1=mod(atan2(sin(lon1-lon2)*cos(lat2),
      //   cos(lat1)*sin(lat2)-sin(lat1)*cos(lat2)*cos(lon1-lon2)), 2*pi)
      var retval = Math.atan2(Math.sin(lon1 - lon2) * Math.cos(lat2), Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon1 - lon2));
      retval = Rad2Deg(retval % (2 * Math.PI));
      return RoundPow(retval, Precision);
    };
  }
  this.ReachDistOrtho = function(dist, bearing)
  {
    let lat;
    let dlon;
    let d = dist / EARTH_RADIUS;
    let tc = Deg2Rad(bearing);
    let CurLat = Deg2Rad(this.Lat.Value);
    let CurLon = Deg2Rad(-this.Lon.Value);

    lat = Math.asin(Math.sin(CurLat) * Math.cos(d) + Math.cos(CurLat) * Math.sin(d) * Math.cos(tc));
    dlon = Math.atan2(Math.sin(tc) * Math.sin(d) * Math.cos(CurLat), Math.cos(d) - Math.sin(CurLat) * Math.sin(lat));
    lon = ((CurLon - dlon + Math.PI) % (2 * Math.PI)) - Math.PI;
    return new VLMPosition(NormalizeLongitudeDeg(Rad2Deg(-lon)), Rad2Deg(lat));

  };

  this.GetVLMString = function()
  {
    return this.Lat.ToString() + ',' + this.Lon.ToString();
  };
}
 var _IsLoggedIn;


 function Boat(vlmboat)
 {
   // Default init
   this.IdBoat = -1;
   this.Engaged = false;
   this.BoatName = '';
   this.BoatPseudo = '';
   this.VLMInfo = {}; // LastBoatInfoResult
   this.RaceInfo = {}; // Race Info for the boat
   this.Exclusions = []; // Exclusions Zones for this boat
   this.Track = []; // Last 24H of boat Track
   this.RnkObject = {}; // Ranking table
   this.OppTrack = []; // Opponents tracks table
   this.OppList = []; // Opponents list to limit how many boats are shown
   this.Reals = []; // Reals Boat array
   this.VLMPrefs = []; // Preferences Array;
   this.NextServerRequestDate = null; // Next VAC Start date
   this.Estimator = new Estimator(this); // Estimator object for current boat
   this.EstimatePos = null; // Position marker on estimate track

   if (typeof vlmboat !== 'undefined')
   {
     this.IdBoat = vlmboat.idu;
     this.Engaged = vlmboat.engaged;
     this.BoatName = vlmboat.boatname;
     this.BoatPseudo = vlmboat.boatpseudo;
     this.VLMInfo = vlmboat.VLMInfo;
     this.RaceInfo = vlmboat.RaceInfo;
     this.Exclusions = vlmboat.Exclusions;
     this.Track = vlmboat.Track;
     this.RnkObject = vlmboat.RnkObject;
   }

   this.GetNextGateSegment = function(NWP)
   {

     if (typeof NWP === "string")
     {
       NWP = parseInt(NWP, 10);
     }

     if (typeof this.RaceInfo === "undefined")
     {
       return null;
     }

     var Gate = this.RaceInfo.races_waypoints[NWP];

     do {
       // Make sure gate type is handled as a number
       if (typeof Gate === "string")
       {
         Gate = parseInt(Gate, 10);
       }

       if (Gate.wpformat & WP_ICE_GATE)
       {
         NWP++;
         if (NWP >= this.RaceInfo.races_waypoints)
         {
           throw "Oops could not find requested gate type";
         }
         Gate = this.RaceInfo.races_waypoints[NWP];
       }

     } while (Gate.wpformat & WP_ICE_GATE);

     var P1 = new VLMPosition(Gate.longitude1, Gate.latitude1);
     var P2 = {};
     if ((Gate.format & WP_GATE_BUOY_MASK) === WP_TWO_BUOYS)
     {
       P2 = new VLMPosition(Gate.longitude2, Gate.latitude2);
     }
     else
     {
       throw "not implemented 1 buoy gate";
     }

     return {
       P1: P1,
       P2: P2
     };


   };

   this.GetClosestEstimatePoint = function(Pos)
   {
     if (typeof Pos === "undefined" || !Pos)
     {
       return null;
     }

     if (this.Estimator)
     {
       var Est = this.Estimator.GetClosestEstimatePoint(Pos);
       if (Est)
       {
         this.Estimator.ShowEstimatePosition(this.Estimator.Boat, Est);
       }
       else
       {
         this.Estimator.ClearEstimatePosition(this.Estimator.Boat);
       }
       return Est;
     }
     else
     {
       // this.Estimator.ShowEstimatePosition(null,null)
       return null;
     }
   };


   this.GetNextWPPosition = function(NWP, Position, NWPPosition)
   {

     if (typeof this.VLMInfo === "undefined")
     {
       // Should not come here without some kind of VLMInfo...
       return null;
     }
     
     // Assume if we get there, there is a boat with RaceInfo and VLMInfo loaded
     var WPIndex = this.VLMInfo.NWP;

     //If there is a defined WP, then return it
     if ((typeof NWPPosition === "undefined" || (!NWPPosition)) && ((this.VLMInfo.WPLON !== 0) || (this.VLMInfo.WPLAT !== 0)))
     {
       return new VLMPosition(this.VLMInfo.WPLON, this.VLMInfo.WPLAT);
     }
     else if (typeof NWPPosition !== "undefined" && NWPPosition && NWPPosition.Lon.Value !== 0 && NWPPosition.Lat.Value !== 0)
     {
       return new VLMPosition(NWPPosition.Lon.Value, NWPPosition.Lat.Value);
     }
     else
     {
       // Get CurRaceWP
       // Compute closest point (using bad euclidian method)
       // Return computed point

       var CurWP = this.VLMInfo.NWP;
       if (typeof NWP !== "undefined" && NWP)
       {
         CurWP = NWP;
       }
       var Seg = this.GetNextGateSegment(CurWP);

       if (typeof Seg === "undefined" || (!Seg))
       {
         return null;
       }
       var Loxo1 = Seg.P1.GetLoxoCourse(Seg.P2);
       var CurPos;
       if (typeof Position !== "undefined" && Position)
       {
         CurPos = Position;
       }
       else
       {
         CurPos = new VLMPosition(this.VLMInfo.LON, this.VLMInfo.LAT);
       }
       var Loxo2 = Seg.P1.GetLoxoCourse(CurPos);
       var Delta = Loxo1 - Loxo2;

       if (Delta > 180)
       {
         Delta -= 360.0;
       }
       else if (Delta < -180)
       {
         Delta += 360.0;
       }

       Delta = Math.abs(Delta);

       if (Delta > 90)
       {
         return Seg.P1;
       }
       else
       {
         var PointDist = Seg.P1.GetLoxoDist(CurPos);
         try
         {
           var SegDist = PointDist * Math.cos(Deg2Rad(Delta));
           var SegLength = Seg.P1.GetLoxoDist(Seg.P2);
           if (SegLength > SegDist)
           {
             return Seg.P1.ReachDistLoxo(SegDist, Loxo1);
           }
           else
           {
             return Seg.P2;
           }
         }
         catch (e)
         {
           return null;
         }

       }
     }


   };
 }


 function User()
 {
   this.IdPlayer = -1;
   this.IsAdmin = false;
   this.PlayerName = '';
   this.PlayerJID = '';
   this.Fleet = [];
   this.BSFleet = [];
   this.CurBoat = {};

   this.LastLogin = 0;

   this.KeepAlive = function()
   {
     console.log("Keeping login alive...");
     CheckLogin();
   };

   // Send Login every 10'
   setInterval(this.KeepAlive, 600000);

 }

 function IsLoggedIn()
 {
   return _IsLoggedIn;
 }


 function OnLoginRequest()
 {


   CheckLogin(true);

 }

 function GetPHPSessId()
 {
   let Session = document.cookie.split(";");
   let index;

   for (index in Session)
   {
     if (Session[index])
     {
       let f = Session[index].split("=");

       if (f[0] && f[0].trim() === "PHPSESSID")
       {
         return f[0];
       }
     }
   }

   return null;

 }

 function CheckLogin(GuiRequest)
 {
   let user = $(".UserName").val();
   let password = $(".UserPassword").val();
   let PhpSessId = GetPHPSessId();

   if (PhpSessId || (typeof user === "string" && typeof password === "string" && user.trim().length > 0 && password.trim().length > 0))
   {
     ShowPb("#PbLoginProgress");
     $.post("/ws/login.php",
       {
         VLM_AUTH_USER: user.trim(),
         VLM_AUTH_PW: password.trim()
       },
       function(result)
       {
         var LoginResult = JSON.parse(result);
         var CurLoginStatus = _IsLoggedIn;
         var CurBoatID = null;


         if (CurLoginStatus)
         {
           CurBoatID = _CurPlayer.CurBoatID;
         }

         _IsLoggedIn = LoginResult.success === true;

         HandleCheckLoginResponse(GuiRequest);

         if (CurBoatID)
         {
           SetCurrentBoat(GetBoatFromIdu(select), false);
         }
       }
     );
   }
   else
   {
     HandleCheckLoginResponse(GuiRequest);
   }

 }

 function HandleCheckLoginResponse(GuiRequest)
 {
   if (_IsLoggedIn)
   {
     GetPlayerInfo();
   }
   else if (GuiRequest)
   {
     VLMAlertDanger(GetLocalizedString("authfailed"));
     $(".UserPassword").val("");
     // Reopened login dialog
     setTimeout(function()
     {
       $("#LoginForm").modal("hide").modal("show");
     }, 1000);
     initrecaptcha(true, false);
     $("#ResetPasswordLink").removeClass("hidden");

   }
   HidePb("#PbLoginProgress");
   DisplayLoggedInMenus(_IsLoggedIn);

 }

 function Logout()
 {
   DisplayLoggedInMenus(false);
   $.post("/ws/logout.php",
     function(result)
     {
       var i = result;
       if (!result.success)
       {
         VLMAlertDanger("Something bad happened while logging out. Restart browser...");
         windows.location.reload();
       }
       else
       {
         window.location.reload();
       }
     }
   );
   _IsLoggedIn = false;

 }

 function GetPlayerInfo()
 {
   ShowBgLoad();
   $.get("/ws/playerinfo/profile.php",
     function(result)
     {
       if (result.success)
       {
         // Ok, create a user from profile
         if (typeof _CurPlayer === 'undefined')
         {
           _CurPlayer = new User();
         }
         _CurPlayer.IdPlayer = result.profile.idp;
         _CurPlayer.IsAdmin = result.profile.admin;
         _CurPlayer.PlayerName = result.profile.playername;

         $.get("/ws/playerinfo/fleet_private.php", HandleFleetInfoLoaded);

         RefreshPlayerMenu();
       }
       else
       {
         // Something's wrong, act as not logged in
         Logout();
         return;
       }
     }
   );


 }

 function HandleFleetInfoLoaded(result)
 {
   let i = result;
   let select;

   if (typeof _CurPlayer === 'undefined')
   {
     _CurPlayer = new User();
   }

   if (typeof _CurPlayer.Fleet === "undefined")
   {
     _CurPlayer.Fleet = [];
   }

   for (let boat in result.fleet)
   {
     if (typeof _CurPlayer.Fleet[boat] === "undefined")
     {
       _CurPlayer.Fleet[boat] = (new Boat(result.fleet[boat]));
       if (typeof select === "undefined")
       {
         select = _CurPlayer.Fleet[boat];
       }
     }
   }


   if (typeof _CurPlayer.fleet_boatsit === "undefined")
   {
     _CurPlayer.fleet_boatsit = [];
   }

   for (let boat in result.fleet_boatsit)
   {
     if (typeof _CurPlayer.BSFleet[boat] === "undefined")
     {
       _CurPlayer.BSFleet[boat] = (new Boat(result.fleet_boatsit[boat]));
     }
   }

   RefreshPlayerMenu();
   if (typeof select !== "undefined" && select)
   {
     DisplayCurrentDDSelectedBoat(select);
     SetCurrentBoat(GetBoatFromIdu(select), true);
     RefreshCurrentBoat(true, false);
   }
 }

 function RefreshPlayerMenu()
 {


   // Update GUI for current player
   $("#PlayerId").text(_CurPlayer.PlayerName);

   // Update the combo to select the current boat
   ClearBoatSelector();
   for (let boat in _CurPlayer.Fleet)
   {
     AddBoatToSelector(_CurPlayer.Fleet[boat], true);
   }
   for (let boat in _CurPlayer.BSFleet)
   {
     if (_CurPlayer.BSFleet[boat])
     {
       AddBoatToSelector(_CurPlayer.BSFleet[boat], false);
     }
   }

   DisplayLoggedInMenus(true);
   HideBgLoad("#PbLoginProgress");
 }

 function SetupUserMenu()
 {
   // Set position in center of screen
   var destx = $(document).width() / 2 - $(".UserMenu").width() / 2 + 'px';
   var desty = 0;

   // Show Panel
   $(".UserMenu").show();
   $(".UserMenu").animate(
   {
     left: destx,
     top: desty
   }, 0);

 }

 function GetBoatFromIdu(Id)
 {
   if (typeof _CurPlayer === "undefined")
   {
     return;
   }
   var RetBoat = GetBoatFromBoatArray(_CurPlayer.Fleet, Id);

   if (typeof RetBoat === 'undefined')
   {
     RetBoat = GetBoatFromBoatArray(_CurPlayer.BSFleet, Id);
   }

   return RetBoat;
 }

 function GetBoatFromBoatArray(BoatsArray, Id)
 {
   Id = parseInt(Id, 10);

   for (let boat in BoatsArray)
   {
     if (BoatsArray[boat] && (BoatsArray[boat].IdBoat === Id))
     {
       return BoatsArray[boat];
     }
   }
   return;
 }

 function GetFlagsList()
 {
   $.get("/ws/serverinfo/flags.php",
     function(result)
     {
       let i = result;
       if (result.success)
       {
         var DropDown = $("#CountryDropDownList");
         var flagindex = 0;
         for (let index in result.flags)
         {
           if (result.flags[index])
           {
             let title = result.flags[index];
             DropDown.append("<li class='FlagLine DDLine' flag='" + title + "'>" + GetCountryDropDownSelectorHTML(title, true, flagindex++) + "</li>");
           }
         }
       }

       // Catch flag selection change
       $(".FlagLine").on('click', HandleFlagLineClick);

     }
   );
 }

 var FlagsIndexCache = [];

 function GetCountryDropDownSelectorHTML(title, loadflag, CountryIndex)
 {
   if (loadflag)
   {
     // Get line to build DropDown
     //var RetString1 = " <img class='flag' src='/cache/flags/flagsmap.png' flag='"+title+"' title='"+title+"' alt='"+title+"'></img>"
     let RetString1 = GetCountryFlagImg(title, CountryIndex);
     let RetString2 = " <span  class='FlagLabel' flag='" + title + "'> - " + title + "</span>";

     FlagsIndexCache[title] = RetString1;
   }
   let RetString2 = " <span  class='FlagLabel' flag='" + title + "'> - " + title + "</span>";
   return FlagsIndexCache[title] + RetString2;
 }

 function GetCountryFlagImgHTML(country)
 {
   return FlagsIndexCache[country];
 }

 function GetCountryFlagImg(Title, CountryIndex)
 {
   var row = 20 * Math.floor(CountryIndex / 16);
   var col = 30 * (CountryIndex % 16);
   var RetString1 = " <div class='FlagIcon' style='background-position: -" + col + "px -" + row + "px' flag='" + Title + "'></div>";

   return RetString1;
 }
//
// VLMBoat layer handling displaying vlm boats, traj
//

/*const BOAT_ICON = 0
const BOAT_WP_MARKER = 1
const BOAT_TRACK = 2
const BOAT_FORECAST_TRACK = 3
const BOAT_POLAR = 4
*/
const VLM_COORDS_FACTOR = 1000;

// Default map options
var MapOptions = {
  // Projection mercator sphÃ©rique (type google map ou osm)
  projection: new OpenLayers.Projection("EPSG:900913"),
  // projection pour l'affichage des coordonnÃ©es
  displayProjection: new OpenLayers.Projection("EPSG:4326"),
  // unitÃ© : le m
  units: "m",
  maxResolution: 156543.0339,
  maxExtent: new OpenLayers.Bounds(-20037508.34, -20037508.34,
    20037508.34, 20037508.34),
  restrictedExtent: new OpenLayers.Bounds(-40037508.34, -20037508.34,
    40037508.34, 20037508.34),
  eventListeners:
  {
    "zoomend": HandleMapZoomEnd,
    "featureover": HandleFeatureOver,
    "featureout": HandleFeatureOut,
    "featureclick": HandleFeatureClick,
    "mousemove": HandleMapMouseMove
  }
};

// Click handler for handling map clicks.
OpenLayers.Control.Click = OpenLayers.Class(OpenLayers.Control,
{
  defaultHandlerOptions:
  {
    'single': true,
    'double': false,
    'pixelTolerance': 0,
    'stopSingle': false,
    'stopDouble': false
  },

  initialize: function(options)
  {
    this.handlerOptions = OpenLayers.Util.extend(
    {}, this.defaultHandlerOptions);
    OpenLayers.Control.prototype.initialize.apply(
      this, arguments
    );
    this.handler = new OpenLayers.Handler.Click(
      this,
      {
        'click': this.trigger
      }, this.handlerOptions
    );
  },

  trigger: function(e)
  {

    var MousePos = GetVLMPositionFromClick(e.xy);
    if (typeof GM_Pos !== "object" || !GM_Pos)
    {
      GM_Pos = {};
    }
    GM_Pos.lon = MousePos.Lon.Value;
    GM_Pos.lat = MousePos.Lat.Value;

    HandleMapMouseMove(e);
    if (SetWPPending)
    {
      if (WPPendingTarget === "WP")
      {
        CompleteWPSetPosition(e, e.xy);
        HandleCancelSetWPOnClick();
      }
      else if (WPPendingTarget === "AP")
      {
        SetWPPending = false;
        _CurAPOrder.PIP_Coords = GetVLMPositionFromClick(e.xy);
        $("#AutoPilotSettingForm").modal("show");
        RefreshAPDialogFields();

      }
      else
      {
        SetWPPending = false;
      }
    }
  }

});

// Control to handle drag of User WP
// var DrawControl = null;
var BoatFeatures = [];
var OppPopups = [];
var StartSetWPOnClick = false;

function SetCurrentBoat(Boat, CenterMapOnBoat, ForceRefresh, TargetTab)
{
  CheckBoatRefreshRequired(Boat, CenterMapOnBoat, ForceRefresh, TargetTab);
}

var BoatLoading = new Date(0);

function CheckBoatRefreshRequired(Boat, CenterMapOnBoat, ForceRefresh, TargetTab)
{
  // Check Params.
  if (typeof Boat === "undefined" || !Boat)
  {
    return;
  }
  var CurDate = new Date();
  var NeedPrefsRefresh = (typeof Boat !== "undefined" && (typeof Boat.VLMInfo === "undefined" || typeof Boat.VLMInfo.AVG === "undefined"));

  // Update preference screen according to current selected boat
  UpdatePrefsDialog(Boat);

  if ((typeof Boat.VLMInfo === 'undefined') || (typeof Boat.VLMInfo.LUP === 'undefined'))
  {
    ForceRefresh = true;
  }

  //if ((CurDate > BoatLoading) && (ForceRefresh || CurDate >= Boat.NextServerRequestDate))
  if ((ForceRefresh) || (CurDate >= Boat.NextServerRequestDate))
  {
    BoatLoading = CurDate + 3000;
    console.log("Loading boat info from server....");
    // request current boat info
    ShowPb("#PbGetBoatProgress");

    $.get("/ws/boatinfo.php?forcefmt=json&select_idu=" + Boat.IdBoat,
      function(result)
      {
        // Check that boat Id Matches expectations
        if (Boat.IdBoat === parseInt(result.IDU, 10))
        {
          // Set Current Boat for player
          _CurPlayer.CurBoat = Boat;


          // LoadPrefs
          LoadVLMPrefs();

          // Store BoatInfo, update map
          Boat.VLMInfo = result;

          // Store next request Date (once per minute)
          Boat.NextServerRequestDate = new Date((parseInt(Boat.VLMInfo.LUP, 10) + parseInt(Boat.VLMInfo.VAC, 10)) * 1000);
          Boat.LastRefresh = new Date();

          // Fix Lon, and Lat scale
          Boat.VLMInfo.LON /= VLM_COORDS_FACTOR;
          Boat.VLMInfo.LAT /= VLM_COORDS_FACTOR;

          //console.log(GribMgr.WindAtPointInTime(new Date(Boat.VLMInfo.LUP*1000),Boat.VLMInfo.LAT,Boat.VLMInfo.LON ));
          //GribMgr.WindAtPointInTime(new Date(),0,0 );

          // force refresh of settings if was not initialized
          if (NeedPrefsRefresh)
          {
            UpdatePrefsDialog(Boat);
          }

          // update map if racing
          if (Boat.VLMInfo.RAC !== "0")
          {

            if (typeof Boat.RaceInfo === "undefined" || typeof Boat.RaceInfo.idraces === 'undefined')
            {
              // Get race info if first request for the boat
              GetRaceInfoFromServer(Boat, TargetTab);
              GetRaceExclusionsFromServer(Boat);
            }
            else
            {
              //Redraw gates and exclusions from cache
              DrawRaceGates(Boat.RaceInfo, Boat.VLMInfo.NWP);
              DrawRaceExclusionZones(VLMBoatsLayer, Boat.Exclusions);
            }


            // Get boat track for the last 24h
            GetTrackFromServer(Boat);

            // Get Rankings
            if (Boat.VLMInfo && Boat.VLMInfo.RAC)
            {
              LoadRankings(Boat.VLMInfo.RAC);
            }

            // Get Reals
            LoadRealsList(Boat);

            // Draw Boat, course, tracks....
            DrawBoat(Boat, CenterMapOnBoat);

            // Update Boat info in main menu bar
            UpdateInMenuRacingBoatInfo(Boat, TargetTab);

          }
          else
          {
            // Boat is not racing
            //GetLastRacehistory();
            UpdateInMenuDockingBoatInfo(Boat);
          }
        }

        HidePb("#PbGetBoatProgress");

        if (OnPlayerLoadedCallBack)
        {
          OnPlayerLoadedCallBack();
          OnPlayerLoadedCallBack = null;
        }
      }
    );


  }
  else if (Boat)
  {
    // Draw from last request
    UpdateInMenuDockingBoatInfo(Boat);
    DrawBoat(Boat, CenterMapOnBoat);
    DrawRaceGates(Boat.RaceInfo, Boat.VLMInfo.NWP);
    DrawRaceExclusionZones(VLMBoatsLayer, Boat.Exclusions);
  }
}

function GetTrackFromServer(Boat)
{
  var end = Math.floor(new Date() / 1000);
  var start = end - 24 * 3600;
  $.get("/ws/boatinfo/tracks_private.php?idu=" + Boat.IdBoat + "&idr=" + Boat.VLMInfo.RAC + "&starttime=" + start + "&endtime=" + end, function(result)
  {
    if (result.success)
    {
      if (typeof Boat.Track !== "undefined")
      {
        Boat.Track.length = 0;
      }
      else
      {
        Boat.Track = [];
      }
      for (let index in result.tracks)
      {
        if (result.tracks[index])
        {
          var P = new VLMPosition(result.tracks[index][1] / 1000.0, result.tracks[index][2] / 1000.0);
          Boat.Track.push(P);
        }
      }
      DrawBoat(Boat);
    }
  });
}

function GetRaceExclusionsFromServer(Boat)
{
  $.get("/ws/raceinfo/exclusions.php?idrace=" + Boat.VLMInfo.RAC + "&v=" + Boat.VLMInfo.VER, function(result)
  {
    if (result.success)
    {
      let Polygons = [];
      let CurEndPoint;
      let CurPolyPointsList = [];
      let index;
      for (index in result.Exclusions)
      {
        if (result.Exclusions[index])
        {
          var Seg = result.Exclusions[index];
          if (typeof CurEndPoint === 'undefined' || (CurEndPoint[0] !== Seg[0][0] && CurEndPoint[1] !== Seg[0][1]))
          {
            if (typeof CurEndPoint !== 'undefined')
            {
              // Changing Polygons
              Polygons.push(CurPolyPointsList);
              CurPolyPointsList = [];
            }
            // Add segment Start to current point list
            CurPolyPointsList.push(Seg[0]);
          }
          CurEndPoint = Seg[1];
          // Add segment end  to current point list
          CurPolyPointsList.push(Seg[1]);
        }
      }
      Polygons.push(CurPolyPointsList);
      Boat.Exclusions = Polygons;
      DrawRaceExclusionZones(VLMBoatsLayer, Polygons);
    }
  });
}

function GetRaceInfoFromServer(Boat, TargetTab)
{
  $.get("/ws/raceinfo/desc.php?idrace=" + Boat.VLMInfo.RAC + "&v=" + Boat.VLMInfo.VER, function(result)
  {
    // Save raceinfo with boat
    Boat.RaceInfo = result;
    DrawRaceGates(Boat.RaceInfo, Boat.VLMInfo.NWP);
    UpdateInMenuRacingBoatInfo(Boat, TargetTab);
  });
}

var DrawBoatTimeOutHandle = null;
var DeferredCenterValue = false;

function DrawBoat(Boat, CenterMapOnBoat)
{
  if (typeof CenterMapOnBoat !== "undefined")
  {
    DeferredCenterValue = (DeferredCenterValue || CenterMapOnBoat);
  }
  console.log("Call DrawbBoat (" + CenterMapOnBoat + ") deferred : " + DeferredCenterValue);
  if (DrawBoatTimeOutHandle)
  {
    console.log("Pushed DrawBoat");
    clearTimeout(DrawBoatTimeOutHandle);
  }
  DrawBoatTimeOutHandle = setTimeout(ActualDrawBoat, 100, Boat, DeferredCenterValue);
}

function ActualDrawBoat(Boat, CenterMapOnBoat)
{
  console.log("ClearDrawBoat " + CenterMapOnBoat);
  DeferredCenterValue = false;
  DrawBoatTimeOutHandle = null;
  if (typeof Boat === "undefined" || !Boat)
  {
    if (typeof _CurPlayer !== "undefined" && _CurPlayer && typeof _CurPlayer.CurBoat !== "undefined" && _CurPlayer.CurBoat)
    {
      // Fallback to currently selected Boat
      Boat = _CurPlayer.CurBoat;
    }
    else
    {
      // Ignore call, if no boat is provided...
      return;
    }
  }

  // Remove features, before recreate and re-add
  // Can't figure how to move/update the features properly
  for (let index in BoatFeatures)
  {
    // Beurk, but does the job anyways
    if (BoatFeatures[index])
    {
      VLMBoatsLayer.removeFeatures(BoatFeatures[index]);
    }
  }
  BoatFeatures = [];


  //WP Marker
  let WP = null;
  if (typeof Boat !== "undefined" && Boat && Boat.GetNextWPPosition)
  {
    WP = Boat.GetNextWPPosition();
  }

  if (typeof WP !== "undefined" && WP)
  {
    //console.log ("WP : " + WP.Lon.Value);

    let WPTransformed = new OpenLayers.Geometry.Point(WP.Lon.Value, WP.Lat.Value).transform(MapOptions.displayProjection, MapOptions.projection);
    // Waypoint marker    
    let WPMarker = new OpenLayers.Feature.Vector(
      WPTransformed,
      {},
      {
        externalGraphic: 'images/WP_Marker.gif',
        graphicHeight: 48,
        graphicWidth: 48
      }
    );

    BoatFeatures.push(WPMarker);
    VLMBoatsLayer.addFeatures(WPMarker);
  }

  // Boat Marker
  if (typeof Boat.VLMInfo !== undefined && Boat.VLMInfo && (Boat.VLMInfo.LON || Boat.VLMInfo.LAT))
  {
    let Pos = new OpenLayers.Geometry.Point(Boat.VLMInfo.LON, Boat.VLMInfo.LAT);
    let PosTransformed = Pos.transform(MapOptions.displayProjection, MapOptions.projection);
    let BoatIcon = new OpenLayers.Feature.Vector(
      PosTransformed,
      {
        "Id": Boat.IdBoat
      },
      {
        externalGraphic: 'images/target.svg',
        graphicHeight: 64,
        graphicWidth: 64,
        rotation: Boat.VLMInfo.HDG
      }
    );
    VLMBoatsLayer.addFeatures(BoatIcon);
    BoatFeatures.push(BoatIcon);

    // Draw polar
    var PolarPointList = PolarsManager.GetPolarLine(Boat.VLMInfo.POL, Boat.VLMInfo.TWS, DrawBoat, Boat);
    var Polar = [];

    // MakePolar in a 200x200 square
    //var BoatPosPixel = map.getPixelFromLonLat(new OpenLayers.LonLat(Boat.VLMInfo.LON, Boat.VLMInfo.LAT));
    var BoatPosPixel = map.getViewPortPxFromLonLat(PosTransformed);
    //var scale = 50 * map.resolution;
    var scale = VLM2Prefs.MapPrefs.PolarVacCount;
    var StartPos = new VLMPosition(Boat.VLMInfo.LON, Boat.VLMInfo.LAT);

    BuildPolarLine(Boat, PolarPointList, Polar, StartPos, scale, new Date(Boat.VLMInfo.LUP * 1000), function()
    {
      DrawBoat(Boat, CenterMapOnBoat);
    });
    //BuilPolarLine(Boat, PolarPointList, Polar, PosTransformed, scale, false);

    var BoatPolar = new OpenLayers.Feature.Vector(
      new OpenLayers.Geometry.LineString(Polar),
      {
        "type": "Polar",
        "WindDir": Boat.VLMInfo.TWD
      });

    BoatFeatures.push(BoatPolar);
    VLMBoatsLayer.addFeatures(BoatPolar);
  }


  //console.log("Added Pos Feature "+ WPMarker.id);
  // Last 24h track  
  if (typeof Boat.Track !== "undefined" && Boat.Track.length > 0)
  {
    let PointList = [];
    let TrackLength = Boat.Track.length;
    let PrevLon = 99999;
    let LonOffSet = 0;

    for (index = 0; index < TrackLength; index++)
    {
      let P = Boat.Track[index];
      if (PrevLon !== 99999)
      {
        LonOffSet += GetLonOffset(PrevLon, P.Lon.Value);
      }
      PrevLon = P.Lon.Value;
      let P1 = new OpenLayers.Geometry.Point(P.Lon.Value + LonOffSet, P.Lat.Value);
      let P1_PosTransformed = P1.transform(MapOptions.displayProjection, MapOptions.projection);

      PointList.push(P1_PosTransformed);

    }

    var TrackColor = Boat.VLMInfo.COL;

    if (TrackColor[0] !== "#")
    {
      TrackColor = "#" + TrackColor;
    }

    var BoatTrack = new OpenLayers.Feature.Vector(
      new OpenLayers.Geometry.LineString(PointList),
      {
        "type": "HistoryTrack",
        "TrackColor": TrackColor
      });
    VLMBoatsLayer.addFeatures(BoatTrack);
    BoatFeatures.push(BoatTrack);
  }


  // Forecast Track

  if (Boat.Estimator && (Boat.Estimator.EstimateTrack.length !== Boat.Estimator.EstimatePoints.length))
  {
    Boat.Estimator.EstimatePoints[0] = [];

    let TrackIndex = 0;
    let PrevLon = 99999;
    let LonOffSet = 0;
    for (let index in Boat.Estimator.EstimateTrack)
    {
      if (Boat.Estimator.EstimateTrack[index])
      {
        let Est = Boat.Estimator.EstimateTrack[index];

        if (PrevLon !== 99999)
        {
          LonOffSet += GetLonOffset(PrevLon, Est.Position.Lon.Value);
        }
        PrevLon = Est.Position.Lon.Value;
        P1 = new OpenLayers.Geometry.Point(Est.Position.Lon.Value + LonOffSet, Est.Position.Lat.Value);
        P1_PosTransformed = P1.transform(MapOptions.displayProjection, MapOptions.projection);

        Boat.Estimator.EstimatePoints[TrackIndex].push(P1_PosTransformed);
      }
    }
  }

  if (typeof Boat.Estimator !== "undefined" && Boat.Estimator && Boat.Estimator.EstimatePoints)
  {
    for (let index in Boat.Estimator.EstimatePoints)
    {
      if (Boat.Estimator.EstimatePoints[index])
      {
        var TrackPointList = Boat.Estimator.EstimatePoints[index];

        var TrackForecast = new OpenLayers.Feature.Vector(
          new OpenLayers.Geometry.LineString(TrackPointList),
          {
            "type": "ForecastPos"
          });

        BoatFeatures.push(TrackForecast);
        VLMBoatsLayer.addFeatures(TrackForecast);
      }
    }
  }


  // opponents  
  DrawOpponents(Boat, VLMBoatsLayer, BoatFeatures);

  // Draw OppTracks, if any is selected
  if (typeof Boat.OppTrack !== "undefined" && Object.keys(Boat.OppTrack).length > 0)
  {
    for (let TrackIndex in Boat.OppTrack)
    {
      var T = Boat.OppTrack[TrackIndex];

      if (T && T.Visible && T.DatePos.length > 1)
      {
        if (!T.OLTrackLine)
        {
          var TrackPoints = [];
          var TLen = Object.keys(T.DatePos).length;
          for (var PointIndex = 0; PointIndex < TLen; PointIndex++)
          {
            var k = Object.keys(T.DatePos)[PointIndex];
            P = T.DatePos[k];
            var Pi = new OpenLayers.Geometry.Point(P.lon, P.lat);
            var Pi_PosTransformed = Pi.transform(MapOptions.displayProjection, MapOptions.projection);

            TrackPoints.push(Pi_PosTransformed);
          }
          T.OLTrackLine = TrackPoints;
        }

        var OppTrack = new OpenLayers.Feature.Vector(
          new OpenLayers.Geometry.LineString(T.OLTrackLine),
          {
            "type": "HistoryTrack",
            "TrackColor": T.TrackColor
          });
        T.LastShow = new Date();
        VLMBoatsLayer.addFeatures(OppTrack);
        BoatFeatures.push(OppTrack);
      }
    }
  }


  if (CenterMapOnBoat && typeof Boat.VLMInfo !== "undefined" && Boat.VLMInfo)
  {
    // Set Map Center to current boat position
    var l = new OpenLayers.LonLat(Boat.VLMInfo.LON, Boat.VLMInfo.LAT).transform(MapOptions.displayProjection, MapOptions.projection);

    // Fix Me : find a way to use a proper zoom factor (dist to next WP??)
    if (isNaN(l.lat) || isNaN(l.lon))
    {
      var i = 0;
    }

    map.setCenter(l);

  }
  else if (CenterMapOnBoat)
  {
    let BkpPt = 1;
  }

  console.log("ActualDrawBoatComplete");

}

function BuildPolarLine(Boat, PolarPointList, Polar, StartPos, scale, StartDate, Callback)
{
  var CurDate = StartDate;

  if (!CurDate || CurDate < new Date().getTime())
  {
    CurDate = new Date().getTime();
  }
  var MI = GribMgr.WindAtPointInTime(CurDate, StartPos.Lat.Value, StartPos.Lon.Value, Callback);

  if (MI)
  {
    var hdg = parseFloat(Boat.VLMInfo.HDG);
    var index;

    for (index = 0; index <= 180; index += 5)
    {
      Speed = PolarsManager.GetBoatSpeed(Boat.VLMInfo.POL, MI.Speed, MI.Heading, MI.Heading + index);

      if (isNaN(Speed))
      {
        // Just abort in case of not yet loaded polar. Next display should fix it.
        // FixMe - Should we try later or will luck do it for us??
        return;
      }

      var Side;

      for (Side = -1; Side <= 1; Side += 2)
      {
        var PolarPos = StartPos.ReachDistLoxo(Speed / 3600.0 * Boat.VLMInfo.VAC * scale, MI.Heading + index * Side);
        var PixPos = new OpenLayers.Geometry.Point(PolarPos.Lon.Value, PolarPos.Lat.Value);
        var PixPos_Transformed = PixPos.transform(MapOptions.displayProjection, MapOptions.projection);

        //var P = map.getLonLatFromPixel(PixPos);
        //var PPoint = new OpenLayers.Geometry.Point(PixPos);
        Polar[180 + Side * index] = PixPos_Transformed;
      }
    }
  }
}

function GetVLMPositionFromClick(pixel)
{
  var dest = map.getLonLatFromPixel(pixel);
  var WGSDest = dest.transform(new OpenLayers.Projection("EPSG:900913"), new OpenLayers.Projection("EPSG:4326"));
  return new VLMPosition(WGSDest.lon, WGSDest.lat);
}

function CompleteWPSetPosition(feature, pixel)
{

  var PDest = GetVLMPositionFromClick(pixel);

  console.log("DragComplete " + feature.id);
  VLMBoatsLayer.removeFeatures(feature);
  // Use CurPlayer, since the drag layer is not associated to the proper boat
  SendVLMBoatWPPos(_CurPlayer.CurBoat, PDest);
  //DrawControl.deactivate();
  //DrawControl.activate();
}

// allow testing of specific renderers via "?renderer=Canvas", etc
var renderer = OpenLayers.Util.getParameters(window.location.href).renderer;
renderer = (renderer) ? [renderer] : OpenLayers.Layer.Vector.prototype.renderers;

var VectorStyles = new OpenLayers.Style(
{
  strokeColor: "#00FF00",
  strokeOpacity: 1,
  strokeWidth: 3,
  fillColor: "#FF5500",
  fillOpacity: 0.5
},
{
  rules: [
    new OpenLayers.Rule(
    {
      // a rule contains an optional filter
      filter: new OpenLayers.Filter.Comparison(
      {
        type: OpenLayers.Filter.Comparison.EQUAL_TO,
        property: "type", // the "foo" feature attribute
        value: 'buoy'
      }),
      symbolizer:
      {
        // if a feature matches the above filter, use this symbolizer
        label: "${name}\n${Coords}",
        pointerEvents: "visiblePainted",
        fontSize: "1.5em",
        labelAlign: "left", //${align}",
        labelXOffset: "4", //${xOffset}",
        labelYOffset: "-12", //${yOffset}",
        externalGraphic: "images/${GateSide}",
        graphicWidth: 36,
        graphicHeight: 72,
        fillOpacity: 1
      }
    }),
    new OpenLayers.Rule(
    {
      // a rule contains an optional filter
      filter: new OpenLayers.Filter.Comparison(
      {
        type: OpenLayers.Filter.Comparison.EQUAL_TO,
        property: "type", // the "foo" feature attribute
        value: "crossonce"
      }),
      symbolizer:
      {
        xOffset: 1,
        yOffset: 1,
        strokeColor: "black",
        strokeOpacity: 0.5,
        strokeWidth: 4,
        strokeDashstyle: "dashdot"
      }
    }),

    new OpenLayers.Rule(
    {
      // a rule contains an optional filter
      filter: new OpenLayers.Filter.Comparison(
      {
        type: OpenLayers.Filter.Comparison.EQUAL_TO,
        property: "type", // the "foo" feature attribute
        value: "marker"
      }),
      symbolizer:
      {
        externalGraphic: "images/${BuoyName}",
        rotation: "${CrossingDir}",
        graphicWidth: 48
      }
    }),
    new OpenLayers.Rule(
    {
      // a rule contains an optional filter
      filter: new OpenLayers.Filter.Comparison(
      {
        type: OpenLayers.Filter.Comparison.EQUAL_TO,
        property: "type", // the "foo" feature attribute
        value: "NextGate"
      }),
      symbolizer:
      {
        strokeColor: "#FF0000",
        strokeOpacity: 1,
        strokeWidth: 3
      }
    }),
    new OpenLayers.Rule(
    {
      // a rule contains an optional filter
      filter: new OpenLayers.Filter.Comparison(
      {
        type: OpenLayers.Filter.Comparison.EQUAL_TO,
        property: "type", // the "foo" feature attribute
        value: "ValidatedGate"
      }),
      symbolizer:
      {
        strokeColor: "#0000FF",
        strokeOpacity: 0.5,
        strokeWidth: 3
      }
    }),
    new OpenLayers.Rule(
    {
      // a rule contains an optional filter
      filter: new OpenLayers.Filter.Comparison(
      {
        type: OpenLayers.Filter.Comparison.EQUAL_TO,
        property: "type", // the "foo" feature attribute
        value: "FutureGate"
      }),
      symbolizer:
      {
        strokeColor: "#FF0000",
        strokeOpacity: 0.5,
        strokeWidth: 3
      }
    }),
    new OpenLayers.Rule(
    {
      // a rule contains an optional filter
      filter: new OpenLayers.Filter.Comparison(
      {
        type: OpenLayers.Filter.Comparison.EQUAL_TO,
        property: "type", // the "foo" feature attribute
        value: "ForecastPos"
      }),
      symbolizer:
      {
        strokeColor: "black",
        strokeOpacity: 0.75,
        strokeWidth: 1
        //strokeDashstyle: "dot"
      }
    }),
    new OpenLayers.Rule(
    {
      // a rule contains an optional filter
      filter: new OpenLayers.Filter.Comparison(
      {
        type: OpenLayers.Filter.Comparison.EQUAL_TO,
        property: "type", // the "foo" feature attribute
        value: "HistoryTrack"
      }),
      symbolizer:
      {
        strokeOpacity: 0.5,
        strokeWidth: 2,
        strokeColor: "${TrackColor}"
      }
    }),
    new OpenLayers.Rule(
    {
      // a rule contains an optional filter
      filter: new OpenLayers.Filter.Comparison(
      {
        type: OpenLayers.Filter.Comparison.EQUAL_TO,
        property: "type", // the "foo" feature attribute
        value: "Polar"
      }),
      symbolizer:
      {
        strokeColor: "white",
        strokeOpacity: 0.75,
        strokeWidth: 2
      }
    }),
    new OpenLayers.Rule(
    {
      // a rule contains an optional filter
      filter: new OpenLayers.Filter.Comparison(
      {
        type: OpenLayers.Filter.Comparison.EQUAL_TO,
        property: "type", // the "foo" feature attribute
        value: "ExclusionZone"
      }),
      symbolizer:
      {
        strokeColor: "red",
        strokeOpacity: 0.95,
        strokeWidth: 2,
        fillColor: "#FF5500",
        fillOpacity: 0.5
      }
    }),
    new OpenLayers.Rule(
    {
      // a rule contains an optional filter
      filter: new OpenLayers.Filter.Comparison(
      {
        type: OpenLayers.Filter.Comparison.EQUAL_TO,
        property: "type", // the "foo" feature attribute
        value: 'opponent'
      }),
      symbolizer:
      {
        // if a feature matches the above filter, use this symbolizer
        label: "${name}",
        //pointRadius: 6,
        pointerEvents: "visiblePainted",
        // label with \n linebreaks

        //fontColor: "${favColor}",
        fontSize: "1.5em",
        //fontFamily: "Courier New, monospace",
        //fontWeight: "bold",
        labelAlign: "left", //${align}",
        labelXOffset: "4", //${xOffset}",
        labelYOffset: "-12", //${yOffset}",
        //labelOutlineColor: "white",
        //labelOutlineWidth: 2
        externalGraphic: "images/opponent${IsTeam}.png",
        graphicWidth: "${IsFriend}",
        fillOpacity: 1
      }
    }),
    new OpenLayers.Rule(
      {
        // a rule contains an optional filter
        elsefilter: true,
        symbolizer:
        {}
      }

    )


  ]
});


var VLMBoatsLayer = new OpenLayers.Layer.Vector("VLM Boats and tracks",
{
  styleMap: new OpenLayers.StyleMap(VectorStyles),
  renderers: renderer
});

// Background load controller from ext html file
function GetBoatControllerPopup()
{
  $("#BoatController").load("BoatController.html");
  return '<div id="BoatController"></div>';
}

const WP_TWO_BUOYS = 0;
const WP_ONE_BUOY = 1;
const WP_GATE_BUOY_MASK = 0x000F;
/* leave space for 0-15 types of gates using buoys
   next is bitmasks */
const WP_DEFAULT = 0;
const WP_ICE_GATE_N = (1 << 4);
const WP_ICE_GATE_S = (1 << 5);
const WP_ICE_GATE_E = (1 << 6);
const WP_ICE_GATE_W = (1 << 7);
const WP_ICE_GATE = (WP_ICE_GATE_E | WP_ICE_GATE_N | WP_ICE_GATE_S | WP_ICE_GATE_W);
const WP_GATE_KIND_MASK = 0xFFF0;
/* allow crossing in one direction only */
const WP_CROSS_CLOCKWISE = (1 << 8);
const WP_CROSS_ANTI_CLOCKWISE = (1 << 9);
/* for future releases */
const WP_CROSS_ONCE = (1 << 10);

var RaceGates = [];
var Exclusions = [];

function DrawRaceGates(RaceInfo, NextGate)
{

  for (let index in RaceGates)
  {
    if (RaceGates[index])
    {
      VLMBoatsLayer.removeFeatures(RaceGates[index]);
    }
  }
  // Loop all gates
  for (let index in RaceInfo.races_waypoints)
  {
    if (RaceInfo.races_waypoints[index])
    {
      // Draw a single race gates
      var WP = RaceInfo.races_waypoints[index];

      // Fix coords scales
      NormalizeRaceInfo(RaceInfo);
      var cwgate = !(WP.wpformat & WP_CROSS_ANTI_CLOCKWISE);

      // Draw WP1
      AddBuoyMarker(VLMBoatsLayer, RaceGates, "WP" + index + " " + WP.libelle + '\n', WP.longitude1, WP.latitude1, cwgate);


      // Second buoy (if any)
      if ((WP.wpformat & WP_GATE_BUOY_MASK) === WP_TWO_BUOYS)
      {
        // Add 2nd buoy marker
        AddBuoyMarker(VLMBoatsLayer, RaceGates, "", WP.longitude2, WP.latitude2, !cwgate);
      }
      else
      {
        // No Second buoy, compute segment end
        var P = new VLMPosition(WP.longitude1, WP.latitude1);
        var complete = false;
        var Dist = 2500;
        while (!complete)
        {
          try
          {
            Dest = P.ReachDistLoxo(Dist, 180 + parseFloat(WP.laisser_au));
            complete = true;
          }
          catch (e)
          {
            Dist *= 0.7;
          }
        }

        WP.longitude2 = Dest.Lon.Value;
        WP.latitude2 = Dest.Lat.Value;
      }

      // Draw Gate Segment
      index = parseInt(index, 10);
      NextGate = parseInt(NextGate, 10);
      AddGateSegment(VLMBoatsLayer, RaceGates, WP.longitude1, WP.latitude1, WP.longitude2, WP.latitude2, (NextGate === index), (index < NextGate), (WP.wpformat & WP_GATE_KIND_MASK));
    }
  }
}

function DrawRaceExclusionZones(Layer, Zones)
{

  let index;

  for (index in Exclusions)
  {
    if (Exclusions[index])
    {
      Layer.removeFeatures(Exclusions[index]);
    }
  }

  for (index in Zones)
  {
    if (Zones[index])
    {
      DrawRaceExclusionZone(Layer, Exclusions, Zones[index]);
    }
  }

}

function DrawRaceExclusionZone(Layer, ExclusionZones, Zone)
{

  var index;
  var PointList = [];

  for (index in Zone)
  {
    if (Zone[index])
    {
      var P = new OpenLayers.Geometry.Point(Zone[index][1], Zone[index][0]);
      var P_PosTransformed = P.transform(MapOptions.displayProjection, MapOptions.projection);

      PointList.push(P_PosTransformed);
    }
  }
  var Attr = null;

  Attr = {
    type: "ExclusionZone"
  };
  var ExclusionZone = new OpenLayers.Feature.Vector(
    new OpenLayers.Geometry.Polygon(new OpenLayers.Geometry.LinearRing(PointList)), Attr, null);

  Layer.addFeatures(ExclusionZone);
  ExclusionZones.push(ExclusionZone);

}

function GetLonOffset(L1, L2)
{
  if (L1 * L2 >= 0)
  {
    return 0;
  }
  else if (Math.abs(L2 - L1) > 90)
  {
    if (L1 > 0)
    {
      return 360;
    }
    else
    {
      return -360;
    }
  }

  return 0;
}

function AddGateSegment(Layer, Gates, lon1, lat1, lon2, lat2, IsNextWP, IsValidated, GateType)
{
  let P1 = new OpenLayers.Geometry.Point(lon1, lat1);
  let LonOffset = GetLonOffset(lon1, lon2);
  let P2 = new OpenLayers.Geometry.Point(lon2 + LonOffset, lat2);
  var P1_PosTransformed = P1.transform(MapOptions.displayProjection, MapOptions.projection);
  var P2_PosTransformed = P2.transform(MapOptions.displayProjection, MapOptions.projection);
  var PointList = [];

  PointList.push(P1_PosTransformed);
  PointList.push(P2_PosTransformed);

  var Attr = null;

  if (IsNextWP)
  {
    Attr = {
      type: "NextGate"
    };
  }
  else if (IsValidated)
  {
    Attr = {
      type: "ValidatedGate"
    };
  }
  else
  {
    Attr = {
      type: "FutureGate"
    };
  }
  var WP = new OpenLayers.Feature.Vector(
    new OpenLayers.Geometry.LineString(PointList), Attr, null);

  Layer.addFeatures(WP);
  Gates.push(WP);
  if (GateType !== WP_DEFAULT)
  {
    // Debug testing of the geo calculation functions
    /*{
      // Rumb line LAX-JFK = 2164.6 nm
      var P1 = new Position(  -(118+(24/60)),33+ (57/60));
      var P2 = new Position (-(73+(47/60)),40+(38/60));
      console.log("loxo dist : " + P1.GetLoxoDist(P2));
      console.log("loxo angle: " + P1.GetLoxoCourse(P2));

    }*/
    P1 = new VLMPosition(lon1, lat1);
    P2 = new VLMPosition(lon2, lat2);
    var MarkerDir = P1.GetLoxoCourse(P2);
    var MarkerPos = P1.ReachDistLoxo(P2, 0.5);
    // Gate has special features, add markers
    if (GateType & WP_CROSS_ANTI_CLOCKWISE)
    {
      MarkerDir -= 90;
      AddGateDirMarker(VLMBoatsLayer, Gates, MarkerPos.Lon.Value, MarkerPos.Lat.Value, MarkerDir);
    }
    else if (GateType & WP_CROSS_CLOCKWISE)
    {
      MarkerDir += 90;
      AddGateDirMarker(VLMBoatsLayer, Gates, MarkerPos.Lon.Value, MarkerPos.Lat.Value, MarkerDir);
    }
    else if (GateType & WP_ICE_GATE)
    {
      AddGateIceGateMarker(VLMBoatsLayer, Gates, MarkerPos.Lon.Value, MarkerPos.Lat.Value);
    }

    if (GateType & WP_CROSS_ONCE)
    {
      // Draw the segment again as dashed line for cross once gates
      WP = new OpenLayers.Feature.Vector(
        new OpenLayers.Geometry.LineString(PointList),
        {
          type: "crossonce"
        },
        null);

      Layer.addFeatures(WP);
      Gates.push(WP);
    }

  }


}

const MAX_BUOY_INDEX = 16;
var BuoyIndex = Math.floor(Math.random() * MAX_BUOY_INDEX);

function AddGateDirMarker(Layer, Gates, Lon, Lat, Dir)
{
  AddGateCenterMarker(Layer, Gates, Lon, Lat, "BuoyDirs/BuoyDir" + BuoyIndex + ".png", Dir, true);
  // Rotate dir marker...
  BuoyIndex++;
  BuoyIndex %= (MAX_BUOY_INDEX + 1);

}

function AddGateIceGateMarker(Layer, Gates, Lon, Lat)
{
  AddGateCenterMarker(Layer, Gates, Lon, Lat, "icegate.png", "");

}



function AddGateCenterMarker(Layer, Gates, Lon, Lat, Marker, Dir, IsIceGate)
{
  var MarkerCoords = new VLMPosition(Lon, Lat);
  var MarkerPos = new OpenLayers.Geometry.Point(MarkerCoords.Lon.Value, MarkerCoords.Lat.Value);
  var MarkerPosTransformed = MarkerPos.transform(MapOptions.displayProjection, MapOptions.projection);
  var MarkerObj = new OpenLayers.Feature.Vector(MarkerPosTransformed,
  {
    "type": "marker",
    "BuoyName": Marker,
    "CrossingDir": Dir,
    "yOffset": IsIceGate ? -18 : 0
  });

  Layer.addFeatures(MarkerObj);
  Gates.push(Marker);
}


function AddBuoyMarker(Layer, Gates, Name, Lon, Lat, CW_Crossing)
{
  var WP_Coords = new VLMPosition(Lon, Lat);
  var WP_Pos = new OpenLayers.Geometry.Point(WP_Coords.Lon.Value, WP_Coords.Lat.Value);
  var WP_PosTransformed = WP_Pos.transform(MapOptions.displayProjection, MapOptions.projection);
  var WP;

  if (CW_Crossing)
  {
    WP = new OpenLayers.Feature.Vector(WP_PosTransformed,
    {
      "name": Name,
      "Coords": WP_Coords.ToString(),
      "type": 'buoy',
      "GateSide": "Buoy1.png"
    });
  }
  else
  {
    WP = new OpenLayers.Feature.Vector(WP_PosTransformed,
    {
      "name": Name,
      "Coords": WP_Coords.ToString(),
      "type": 'buoy',
      "GateSide": "Buoy2.png"
    });
  }


  Layer.addFeatures(WP);
  Gates.push(WP);
}

const PM_HEADING = 1;
const PM_ANGLE = 2;
const PM_ORTHO = 3;
const PM_VMG = 4;
const PM_VBVMG = 5;

function SendVLMBoatWPPos(Boat, P)
{
  var orderdata = {
    idu: Boat.IdBoat,
    pip:
    {
      targetlat: P.Lat.Value,
      targetlong: P.Lon.Value,
      targetandhdg: -1 //Boat.VLMInfo.H@WP
    }

  };

  PostBoatSetupOrder(Boat.IdBoat, 'target_set', orderdata);
}

function SendVLMBoatOrder(Mode, AngleOrLon, Lat, WPAt)
{
  var request = {};

  var verb = "pilot_set";

  if (typeof _CurPlayer === 'undefined' || typeof _CurPlayer.CurBoat === 'undefined')
  {
    VLMAlertDanger("Must select a boat to send an order");
    return;
  }

  // Build WS command accoridng to required pilot mode
  switch (Mode)
  {
    case PM_HEADING:
    case PM_ANGLE:
      request = {
        idu: _CurPlayer.CurBoat.IdBoat,
        pim: Mode,
        pip: AngleOrLon
      };
      break;

    case PM_ORTHO:
    case PM_VBVMG:
    case PM_VMG:
      request = {
        idu: _CurPlayer.CurBoat.IdBoat,
        pim: Mode,
        pip:
        {
          targetlong: parseFloat(AngleOrLon),
          targetlat: parseFloat(Lat),
          targetandhdg: WPAt
        }
      };
      //PostBoatSetupOrder (_CurPlayer.CurBoat.IdBoat,"target_set",request);
      break;

    default:
      return;

  }

  // Post request
  PostBoatSetupOrder(_CurPlayer.CurBoat.IdBoat, verb, request);


}

function PostBoatSetupOrder(idu, verb, orderdata)
{
  // Now Post the order
  $.post("/ws/boatsetup/" + verb + ".php?selectidu" + idu,
    "parms=" + JSON.stringify(orderdata),
    function(Data, TextStatus)
    {
      if (Data.success)
      {
        RefreshCurrentBoat(false, true);
      }
      else
      {
        VLMAlertDanger(GetLocalizedString("BoatSetupError") + '\n' + Data.error.code + " " + Data.error.msg);
      }
    });

}

function EngageBoatInRace(RaceID, BoatID)
{
  $.post("/ws/boatsetup/race_subscribe.php",
    "parms=" + JSON.stringify(
    {
      idu: BoatID,
      idr: parseInt(RaceID, 10)
    }),
    function(data)
    {

      if (data.success)
      {
        let Msg = GetLocalizedString("youengaged");
        $("#RacesListForm").modal('hide');
        VLMAlertSuccess(Msg);
      }
      else
      {
        let Msg = data.error.msg + '\n' + data.error.custom_error_string;
        VLMAlertDanger(Msg);
      }
    }
  );
}

function DiconstinueRace(BoatId, RaceId)
{
  $.post("/ws/boatsetup/race_unsubscribe.php",
    "parms=" + JSON.stringify(
    {
      idu: BoatId,
      idr: parseInt(RaceId, 10)
    }),
    function(data)
    {

      if (data.success)
      {
        VLMAlertSuccess("Bye Bye!");
      }
      else
      {
        var Msg = data.error.msg + '\n' + data.error.custom_error_string;
        VLMAlertDanger(Msg);
      }
    }
  );
}

function HandleMapZoomEnd(object, element)
{
  var Zoom = VLMBoatsLayer.getZoomForResolution(VLMBoatsLayer.getResolution());
  VLM2Prefs.MapPrefs.MapZoomLevel = Zoom;
  VLM2Prefs.Save();
  RefreshCurrentBoat(false);
}

function LoadRealsList(Boat)
{
  if ((typeof Boat === "undefined") || !Boat || (typeof Boat.VLMInfo === "undefined"))
  {
    return;
  }

  $.get("/ws/realinfo/realranking.php?idr=" + Boat.VLMInfo.RAC,
    function(result)
    {
      if (result.success)
      {
        Boat.Reals = result;
        DrawBoat(Boat, false);
      }
      else
      {
        Boat.Reals = [];
      }
    }
  );
}

function LoadRankings(RaceId, CallBack)
{
  if (RaceId && (typeof RaceId === 'object'))
  {
    VLMAlertDanger("NOt updated call to LoadRankings");
  }


  /*if ((typeof Boat === "undefined") || !Boat || (typeof Boat.VLMInfo === "undefined"))
  {
    return;
  }*/

  $.get("/cache/rankings/rnk_" + RaceId + ".json?d=" + (new Date().getTime()),
    function(result)
    {
      if (result)
      {
        Rankings[RaceId] = result.Boats;
        if (CallBack)
        {
          CallBack();
        }
        else
        {
          DrawBoat(null, false);
        }
      }
      else
      {
        Rankings[RaceId] = null;
      }
    }
  );


}

function contains(a, obj)
{
  for (var i = 0; i < a.length; i++)
  {
    if (a[i] === obj)
    {
      return true;
    }
  }
  return false;
}

function DrawOpponents(Boat, VLMBoatsLayer, BoatFeatures)
{
  if (!Boat || typeof Rankings === "undefined")
  {
    return;
  }

  // Get Friends
  let friends = [];
  let index;


  // Map friend only if selection is active
  if (VLM2Prefs.MapPrefs.MapOppShow === VLM2Prefs.MapPrefs.MapOppShowOptions.ShowSel)
  {
    if ((typeof Boat.VLMInfo !== "undefined") && (typeof Boat.VLMInfo.MPO !== "undefined"))
    {
      friends = Boat.VLMInfo.MPO.split(',');
    }

    for (index in friends)
    {
      if (friends[index])
      {
        let Opp = Rankings[friends[index]];

        if ((typeof Opp !== 'undefined') && (parseInt(Opp.idusers, 10) !== Boat.IdBoat))
        {
          AddOpponent(Boat, VLMBoatsLayer, BoatFeatures, Opp, true);
        }
      }
    }
  }
  // Get Reals
  if (VLM2Prefs.MapPrefs.ShowReals && (typeof Boat.Reals !== "undefined") && (typeof Boat.Reals.ranking !== "undefined"))
    for (index in Boat.Reals.ranking)
    {
      var RealOpp = Boat.Reals.ranking[index];
      AddOpponent(Boat, VLMBoatsLayer, BoatFeatures, RealOpp, true);
    }

  let MAX_LEN = 150;
  let ratio = MAX_LEN / Object.keys(Rankings).length;
  let count = 0;
  let BoatList = Rankings;

  if (typeof Boat.OppList !== "undefined" && Boat.OppList.length > 0)
  {
    BoatList = Boat.OppList;
    ratio = 1;
  }

  switch (VLM2Prefs.MapPrefs.MapOppShow)
  {
    case VLM2Prefs.MapPrefs.MapOppShowOptions.Show10Around:
      BoatList = GetClosestOpps(Boat, 10);
      ratio = 1;
      break;
    case VLM2Prefs.MapPrefs.MapOppShowOptions.Show5Around:
      BoatList = GetClosestOpps(Boat, 5);
      ratio = 1;
      break;
    case VLM2Prefs.MapPrefs.MapOppShowOptions.ShowTop10:
      let BoatCount = 0;
      let RaceID = Boat.Engaged;
      MAX_LEN = VLM2Prefs.MapPrefs.ShowTopCount;

      BoatList = [];

      for (index in Rankings[RaceID])
      {
        if (Rankings[RaceID][index].rank <= VLM2Prefs.MapPrefs.ShowTopCount)
        {
          BoatList[index] = Rankings[RaceID][index];
          BoatCount++;
          if (BoatCount > MAX_LEN)
          {
            break;
          }
        }
      }

      if (BoatCount > MAX_LEN)
      {
        MAX_LEN = BoatCount;
      }
      ratio = 1;
      break;

    case VLM2Prefs.MapPrefs.MapOppShowOptions.ShowMineOnly:
      BoatList = [];
      ratio = 1;
      break;

  }

  // Sort racers to be able to show proper opponents
  SortRankingData(Boat, 'RAC', null, Boat.Engaged);

  if (Boat.Engaged && typeof Rankings[Boat.Engaged] !== "undefined" && typeof Rankings[Boat.Engaged].RacerRanking !== "undefined" && Rankings[Boat.Engaged].RacerRanking)
  {
    for (index in Rankings[Boat.Engaged].RacerRanking)
    {
      if (index in Rankings[Boat.Engaged].RacerRanking)
      {
        var Opp = Rankings[Boat.Engaged].RacerRanking[index];

        if ((parseInt(Opp.idusers, 10) !== Boat.IdBoat) && BoatList[Opp.idusers] && (!contains(friends, Opp.idusers)) && RnkIsRacing(Opp) && (Math.random() <= ratio) && (count < MAX_LEN))
        {
          AddOpponent(Boat, VLMBoatsLayer, BoatFeatures, Opp, false);
          count += 1;
          if (typeof Boat.OppList === "undefined")
          {
            Boat.OppList = [];
          }
          Boat.OppList[index] = Opp;
        }
        else if (count >= MAX_LEN)
        {
          break;
        }
      }
    }
  }
}

function CompareDist(a, b)
{
  if (a.dnm < b.dnm)
    return -1;
  if (a.dnm > b.dnm)
    return 1;
  return 0;
}

function GetClosestOpps(Boat, NbOpps)
{
  let CurBoat = Rankings[Boat.IdBoat];

  if (typeof CurBoat === 'undefined' || !Boat)
  {
    CurBoat = {
      dnm: 0,
      nwm: 1
    };
  }

  let RaceId = null;

  if (Boat && Boat.VLMInfo)
  {
    RaceId = Boat.VLMInfo.RAC;
  }
  let RetArray = [];

  if (RaceId)
  {
    let CurDnm = parseFloat(CurBoat.dnm);
    let CurWP = CurBoat.nwp;
    let List = [];

    for (let index in Rankings[RaceId])
    {
      if (Rankings[RaceId][index])
      {
        if (CurWP === Rankings[RaceId][index].nwp)
        {
          var O = {
            id: index,
            dnm: Math.abs(CurDnm - parseFloat(Rankings[RaceId][index].dnm))
          };
          List.push(O);
        }
      }
    }


    List = List.sort(CompareDist);
    for (let index in List.slice(0, NbOpps - 1))
    {
      RetArray[List[index].id] = Rankings[RaceId][List[index].id];
    }
  }
  return RetArray;

}

function AddOpponent(Boat, Layer, Features, Opponent, isFriend)
{
  var Opp_Coords = new VLMPosition(Opponent.longitude, Opponent.latitude);
  var Opp_Pos = new OpenLayers.Geometry.Point(Opp_Coords.Lon.Value, Opp_Coords.Lat.Value);
  var Opp_PosTransformed = Opp_Pos.transform(MapOptions.displayProjection, MapOptions.projection);
  var OL_Opp;
  var OppData = {
    "name": Opponent.idusers + " - " + Opponent.boatname,
    "Coords": Opp_Coords.ToString(),
    "type": 'opponent',
    "idboat": Opponent.idusers,
    "rank": Opponent.rank,
    "Last1h": Opponent.last1h,
    "Last3h": Opponent.last3h,
    "Last24h": Opponent.last24h,
    "IsTeam": (Opponent.country == Boat.VLMInfo.CNT) ? "team" : "",
    "IsFriend": (isFriend ? 24 : 12),
    "color": Opponent.color
  };

  if (!VLM2Prefs.MapPrefs.ShowOppNames)
  {
    OppData.name = "";
  }

  OL_Opp = new OpenLayers.Feature.Vector(Opp_PosTransformed, OppData);

  Layer.addFeatures(OL_Opp);
  Features.push(OL_Opp);
}

function ShowOpponentPopupInfo(e)
{
  var ObjType = e.feature.data.type;
  let index;

  if (ObjType == "opponent")
  {
    let Boat = GetOppBoat(e.feature.attributes.idboat);
    let Pos = new VLMPosition(Boat.longitude, Boat.latitude);
    let PopupFields = [];
    let feature = e.feature;

    if (OppPopups[e.feature.attributes.idboat])
    {
      map.removePopup(OppPopups[e.feature.attributes.idboat]);
      OppPopups[e.feature.attributes.idboat] = null;
    }

    let popup = new OpenLayers.Popup.FramedCloud("popup",
      OpenLayers.LonLat.fromString(feature.geometry.toShortString()),
      null,
      BuildBoatPopupInfo(e.feature.attributes.idboat),
      null,
      true,
      null
    );
    popup.autoSize = true;
    popup.maxSize = new OpenLayers.Size(400, 800);
    popup.fixedRelativePosition = true;
    feature.popup = popup;
    map.addPopup(popup);
    OppPopups[e.feature.attributes.idboat] = popup;


    PopupFields.push([FIELD_MAPPING_TEXT, "#__BoatName" + e.feature.attributes.idboat, Boat.boatname]);
    PopupFields.push([FIELD_MAPPING_TEXT, "#__BoatId" + e.feature.attributes.idboat, e.feature.attributes.idboat]);
    PopupFields.push([FIELD_MAPPING_TEXT, "#__BoatRank" + e.feature.attributes.idboat, e.feature.attributes.rank]);
    PopupFields.push([FIELD_MAPPING_TEXT, "#__BoatLoch" + e.feature.attributes.idboat, RoundPow(Boat.loch)]);
    PopupFields.push([FIELD_MAPPING_TEXT, "#__BoatPosition" + e.feature.attributes.idboat, Pos.GetVLMString()]);
    PopupFields.push([FIELD_MAPPING_TEXT, "#__Boat1HAvg" + e.feature.attributes.idboat, RoundPow(parseFloat(Boat.last1h), 2)]);
    PopupFields.push([FIELD_MAPPING_TEXT, "#__Boat3HAvg" + e.feature.attributes.idboat, RoundPow(parseFloat(Boat.last3h), 2)]);
    PopupFields.push([FIELD_MAPPING_TEXT, "#__Boat24HAvg" + e.feature.attributes.idboat, RoundPow(parseFloat(Boat.last24h), 2)]);
    FillFieldsFromMappingTable(PopupFields);

  }

}

function GetOppBoat(BoatId)
{
  let CurBoat = _CurPlayer.CurBoat;

  if (typeof CurBoat !== "undefined" && CurBoat && CurBoat.OppList)
  {
    for (let i in CurBoat.OppList)
    {
      if (CurBoat.OppList[i])
      {
        let Opp = CurBoat.OppList[i];
        if (Opp.idusers === BoatId)
        {
          return Opp;
        }
      }
    }
  }

  return null;
}

function BuildBoatPopupInfo(BoatId)
{
  let RetStr =
    '<div class="MapPopup_InfoHeader">' +
    ' <img class="flag" src="https://v-l-m.org/cache/flags/ZZ-T4F.png">' +
    ' <span id="__BoatName' + BoatId + '" class="PopupBoatNameNumber ">BoatName</span>' +
    ' <span id="__BoatId' + BoatId + '" class="PopupBoatNameNumber ">BoatNumber</span>' +
    ' <div id="__BoatRank' + BoatId + '" class="TxtRank">Rank</div>' +
    '</div>' +
    '<div class="MapPopup_InfoBody">' +
    ' <fieldset>' +
    '   <span class="PopupHeadText " I18n="loch">' + GetLocalizedString('loch') + '</span><span class="PopupText"> : </span><span id="__BoatLoch' + BoatId + '" class="loch PopupText">0.9563544</span>' +
    '   <BR><span class="PopupHeadText " I18n="position">' + GetLocalizedString('position') + '</span><span class="PopupText"> : </span><span id="__BoatPosition' + BoatId + '" class=" PopupText">0.9563544</span>' +
    '   <BR><span class="PopupHeadText " I18n="NextWP">' + GetLocalizedString('NextWP') + '</span><span class="strong"> : </span><span id="__BoatNWP' + BoatId + '" class="PopupText">[1] 4.531856536865234</span>' +
    '   <BR><span class="PopupHeadText " I18n="Moyennes">' + GetLocalizedString('Moyennes') + ' </span><span class="PopupText"> : </span>' +
    '   <span class="PopupHeadText ">[1h]</span><span id="__Boat1HAvg' + BoatId + '" class="PopupText">[1H] </strong>0.946785,[3H] 0.946785,[24H] 0.946785 </span>' +
    '   <span class="PopupHeadText ">[3h]</span><span id="__Boat3HAvg' + BoatId + '" class="PopupText">[1H] </strong>0.946785,[3H] 0.946785,[24H] 0.946785 </span>' +
    '   <span class="PopupHeadText ">[24h]</span><span id="__Boat24HAvg' + BoatId + '" class="PopupText">[1H] </strong>0.946785,[3H] 0.946785,[24H] 0.946785 </span>' +
    ' </fieldset>' +
    '</div>';


  return RetStr;
}

function HandleFeatureOver(e)
{
  var ObjType = e.feature.data.type;
  let index;

  if (ObjType == "opponent")
  {
    // Clear previous tracks
    for (index in _CurPlayer.CurBoat.OppTrack)
    {
      _CurPlayer.CurBoat.OppTrack[index].Visible = false;
    }

    DrawOpponentTrack(e.feature.data);
  }
  //console.log("HoverOn "+ ObjType)
  /*e.feature.renderIntent = "select";
  e.feature.layer.drawFeature(e.feature);
  Console.log("Map says: Pointer entered " + e.feature.id + " on " + e.feature.layer.name);
  */
}

function HandleFeatureClick(e)
{
  // Clicking oppenent will show the track, and popup info (later)
  HandleFeatureOver(e);
  ShowOpponentPopupInfo(e);

}

function HandleFeatureOut(e)
{

  if (typeof _CurPlayer === "undefined" || typeof _CurPlayer.CurBoat === "undefined" || typeof _CurPlayer.CurBoat.OppTrack === "undefined")
  {
    return;
  }

  // Clear previously displayed tracks.
  for (let index in _CurPlayer.CurBoat.OppTrack)
  {
    _CurPlayer.CurBoat.OppTrack[index].Visible = false;
  }


}

var TrackPendingRequests = [];

var LastTrackRequest = 0;

function DrawOpponentTrack(FeatureData)
{
  let B = _CurPlayer.CurBoat;
  let IdBoat = FeatureData.idboat;
  let CurDate = new Date();
  let PendingID = null;
  if (typeof B !== "undefined" && B && CurDate > LastTrackRequest)
  {
    LastTrackRequest = new Date(CurDate / 1000 + 0.5);
    if (typeof B.OppTrack !== "undefined" || !(IdBoat in B.OppTrack) || (IdBoat in B.OppTrack && (B.OppTrack[IdBoat].LastShow <= new Date(B.VLMInfo.LUP * 1000))))
    {

      let StartTime = new Date() / 1000 - 48 * 3600;
      let IdRace = B.VLMInfo.RAC;
      let CurDate = new Date();
      PendingID = IdBoat.toString() + "/" + IdRace.toString();

      if (IdBoat in B.OppTrack)
      {
        B.OppTrack[IdBoat].Visible = true;
      }

      if (!(PendingID in TrackPendingRequests) || (CurDate > TrackPendingRequests[PendingID]))
      {
        TrackPendingRequests[PendingID] = new Date(CurDate.getTime() + 60 * 1000);
        console.log("GetTrack " + PendingID + " " + StartTime);
        if (parseInt(IdBoat) > 0)
        {
          GetBoatTrack(B, IdBoat, IdRace, StartTime, FeatureData);
        }
        else if (parseInt(IdBoat))
        {
          GetRealBoatTrack(B, IdBoat, IdRace, StartTime, FeatureData);
        }
      }
    }
    else
    {
      console.log(" GetTrack ignore before next update" + PendingID + " " + StartTime);
    }
    DrawBoat(B);
  }
}

function GetRealBoatTrack(Boat, IdBoat, IdRace, StartTime, FeatureData)
{
  $.get("/ws/realinfo/tracks.php?idr=" + IdRace + "&idreals=" + (-IdBoat) + "&starttime=" + StartTime,
    function(e)
    {
      if (e.success)
      {
        AddBoatOppTrackPoints(Boat, IdBoat, e.tracks, FeatureData.color);
        RefreshCurrentBoat(false, false);
      }
    }
  );
}

var TrackRequestPending = false;

function GetBoatTrack(Boat, IdBoat, IdRace, StartTime, FeatureData)
{
  if (TrackRequestPending)
  {
    return;
  }
  else
  {
    TrackRequestPending = true;
  }
  $.get("/ws/boatinfo/smarttracks.php?idu=" + IdBoat + "&idr=" + IdRace + "&starttime=" + StartTime,
    function(e)
    {
      TrackRequestPending = false;
      if (e.success)
      {
        var index;

        AddBoatOppTrackPoints(Boat, IdBoat, e.tracks, FeatureData.color);

        for (index in e.tracks_url)
        {
          if (index > 10)
          {
            break;
          }
          /* jshint -W083*/
          $.get('/cache/tracks/' + e.tracks_url[index],
            function(e)
            {
              if (e.success)
              {
                AddBoatOppTrackPoints(Boat, IdBoat, e.tracks, FeatureData.color);
                RefreshCurrentBoat(false, false);
              }
            }
          );
          /* jshint +W083*/

        }
        RefreshCurrentBoat(false, false);
      }
    }
  );

}

function AddBoatOppTrackPoints(Boat, IdBoat, Track, TrackColor)
{


  if (!(IdBoat in Boat.OppTrack))
  {
    TrackColor = SafeHTMLColor(TrackColor);

    Boat.OppTrack[IdBoat] = {
      LastShow: 0,
      TrackColor: TrackColor,
      DatePos: [],
      Visible: true,
      OLTrackLine: null
    };
  }

  //
  for (let index in Track)
  {
    var Pos = Track[index];

    Boat.OppTrack[IdBoat].DatePos[Pos[0]] = {
      lat: Pos[2] / 1000,
      lon: Pos[1] / 1000
    };
  }
  Boat.OppTrack[IdBoat].LastShow = 0;
  Boat.OppTrack[IdBoat].OLTrackLine = null;



}

function DeletePilotOrder(Boat, OrderId)
{
  $.post("/ws/boatsetup/pilototo_delete.php?", "parms=" + JSON.stringify(
    {
      idu: Boat.IdBoat,
      taskid: parseInt(OrderId)
    }),
    function(e)
    {
      if (e.success)
      {
        RefreshCurrentBoat(false, true, 'AutoPilot');
      }
    }
  );
}

function UpdateBoatPrefs(Boat, NewVals)
{
  NewVals.idu = Boat.IdBoat;
  $.post("/ws/boatsetup/prefs_set.php", "parms=" + JSON.stringify(NewVals),
    function(e)
    {
      if (e.success)
      {
        // avoid forced full round trip
        RefreshCurrentBoat(false, false);
      }
      else
      {
        VLMAlertDanger(GetLocalizedString("UpdateFailed"));
      }
    }
  );
}

function LoadVLMPrefs()
{
  var Boat;

  if (typeof _CurPlayer === "undefined")
  {
    return;
  }
  Boat = _CurPlayer.CurBoat;

  SetDDTheme(VLM2Prefs.CurTheme);

  $.get("/ws/boatinfo/prefs.php?idu=" + Boat.IdBoat, HandlePrefsLoaded);
}

function HandlePrefsLoaded(e)
{
  if (e.success)
  {
    var Boat = _CurPlayer.CurBoat;

    Boat.VLMPrefs = e.prefs;
    VLM2Prefs.UpdateVLMPrefs(e.prefs);
  }
  else
  {
    VLMAlertDanger("Error communicating with VLM, try reloading the browser page...");
  }
}

//require [converse];

function InitXmpp()
{
    converse.initialize({
            bosh_service_url: 'https://bind.conversejs.org', // Please use this connection manager only for testing purposes
            i18n: locales.en, // Refer to ./locale/locales.js to see which locales are supported
            show_controlbox_by_default: true,
            roster_groups: true
        });
}