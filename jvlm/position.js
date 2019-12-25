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

// Fmod for javascript from https://gist.github.com/wteuber/6241786
Math.fmod = function(a, b)
{
  return Number((a - (Math.floor(a / b) * b)).toPrecision(8));
};

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
  this.toString = function(Raw)
  {
    return this.Lat.toString(Raw) + " " + this.Lon.toString(Raw);
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

  //  Reaches a point from position using VLM Formula.
  // Compute the position of point at r * distance to point P is 1st param is a Position
  // Computes the position at Distance P, and heading r if P is a number
  // Along loxodrome from this to P
  this.ReachDistLoxo = function(PosOrDistance, RatioOrHeading)
  {
    let d = 0;
    let tc = 0;

    if (isNaN(RatioOrHeading))
    {
      throw "unsupported reaching NaN distance";
    }

    if (typeof PosOrDistance == "number")
    {
      d = Deg2Rad(PosOrDistance / 60.0);
      tc = Deg2Rad(RatioOrHeading % 360.0);
    }
    else
    {
      d = this.GetLoxoDist(PosOrDistance) / EARTH_RADIUS * RatioOrHeading;
      tc = Deg2Rad(this.GetLoxoCourse(PosOrDistance));
    }

    let Lat1 = Deg2Rad(this.Lat.Value);
    let Lon1 = Deg2Rad(this.Lon.Value);
    let Lat = 0;
    let Lon = 0;

    Lat = Lat1 + d * Math.cos(tc);
    let t_lat = (Lat1 + Lat) / 2.0;
    Lon = Lon1 + (d * Math.sin(tc)) / Math.cos(t_lat);
    if (Lon > Math.PI)
    {
      Lon -= 2 * Math.PI;
    }
    else if (Lon < -Math.PI)
    {
      Lon += 2 * Math.PI;
    }

    if (isNaN(Lon) || isNaN(Lat))
    {
      throw "Reached Nan Position!!!";
    }

    Lon = Rad2Deg(Lon);
    Lat = Rad2Deg(Lat);

    if (Lon*this.Lon.Value < 0 && Math.abs(this.Lon.Value-Lon)>90)
    {
      let Sign = 1;
      // Antimeridien crossing
      if (this.Lon.Value-Lon <0)
      {
        Sign =-1;
      }
      return new VLMPosition(Lon+360*Sign, Lat);
    }
    else
    {
      return new VLMPosition((Lon), Lat);    
    }
    


  };

  // Reaches a point from position using rhumbline from aviation formulary.
  // Compute the position of point at r * distance to point P is 1st param is a Position
  // Computes the position at Distance P, and heading r if P is a number
  // Along loxodrome from this to P
  // this.ReachDistLoxo = function(P, r)
  // {
  //   var d = 0;
  //   var tc = 0;

  //   if (isNaN(r))
  //   {
  //     throw "unsupported reaching NaN distance";
  //   }

  //   if (typeof P == "number")
  //   {
  //     d = P / EARTH_RADIUS;
  //     tc = Deg2Rad(r % 360);
  //   }
  //   else
  //   {
  //     d = this.GetLoxoDist(P) / EARTH_RADIUS * r;
  //     tc = Deg2Rad(this.GetLoxoCourse(P));
  //   }

  //   var Lat1 = Deg2Rad(this.Lat.Value);
  //   var Lon1 = -Deg2Rad(this.Lon.Value);
  //   var Lat = 0;
  //   var Lon = 0;
  //   var TOL = 0.000000000000001;
  //   var q = 0;
  //   var dPhi = 0;
  //   var dlon = 0;

  //   Lat = Lat1 + d * Math.cos(tc);
  //   if (Math.abs(Lat) > Math.PI / 2)
  //   {
  //     //'"d too large. You can't go this far along this rhumb line!"
  //     throw "Invalid distance, can't go that far";
  //   }

  //   if (Math.abs(Lat - Lat1) < Math.sqrt(TOL))
  //   {
  //     q = Math.cos(Lat1);
  //   }
  //   else
  //   {
  //     dPhi = Math.log(Math.tan(Lat / 2 + Math.PI / 4) / Math.tan(Lat1 / 2 + Math.PI / 4));
  //     q = (Lat - Lat1) / dPhi;
  //   }
  //   dlon = -d * Math.sin(tc) / q;
  //   Lon = -(((Lon1 + dlon + Math.PI) % (2 * Math.PI) - Math.PI));

  //   if (isNaN(Lon) || isNaN(Lat))
  //   {
  //     throw "Reached Nan Position!!!";
  //   }

  //   Lon = RoundPow(Rad2Deg(Lon), 9);
  //   Lat = RoundPow(Rad2Deg(Lat), 9);

  //   return new VLMPosition(NormalizeLongitudeDeg(Lon), Lat);


  // };

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
      let lon1 = Deg2Rad(this.Lon.Value);
      let lon2 = Deg2Rad(P.Lon.Value);
      let lat1 = Deg2Rad(this.Lat.Value);
      let lat2 = Deg2Rad(P.Lat.Value);
      let retval;
      if (typeof Precision == "undefined" || typeof Precision != "number")
      {
        Precision = 17;
      }

      /*IF sin(lon2-lon1)<0       
        tc1=acos((sin(lat2)-sin(lat1)*cos(d))/(sin(d)*cos(lat1)))    
      ELSE       
        tc1=2*pi-acos((sin(lat2)-sin(lat1)*cos(d))/(sin(d)*cos(lat1)))    
      ENDIF*/
      /* var d = Deg2Rad(this.GetOrthoDist(P) / 60);
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

       */

      let g, d, den;

      g = Math.fmod(lon2 - lon1, 2 * Math.PI);
      if (Math.abs(g) < 0.0000001)
      {
        /* close enough to vertical, clamp to vertical*/
        den = lat2 - lat1;
        retval = (den > 0) ? 0 : Math.PI;

      }
      else
      {
        if (g <= -Math.PI)
        {
          g += 2 * Math.PI;
        }
        else if (g > Math.PI)
        {
          g -= 2 * Math.PI;
        }
        d = Math.acos(Math.sin(lat2) * Math.sin(lat1) + Math.cos(lat2) * Math.cos(lat1) * Math.cos(g));

        den = Math.cos(lat1) * Math.sin(d);
        let lcos = (Math.sin(lat2) - Math.sin(lat1) * Math.cos(d)) / den;
        if (lcos > 1)
        {
          lcos = 1;
          console.log("Nan Catch pos");
        }
        else if (lcos < -1)
        {
          lcos = -1;
          console.log("Nan Catch neg");
        }
        if (g < 0)
        {
          retval = 2 * Math.PI - Math.acos(lcos);
        }
        else
        {
          retval = Math.acos(lcos);
        }
      }
      
      retval = Rad2Deg(retval % (2 * Math.PI));
      // if (isNaN(retval))
      // {
      //   let bkp=0;
      // }
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
    return this.Lat.toString() + ',' + this.Lon.toString();
  };
}