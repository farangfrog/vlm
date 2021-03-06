#!/usr/bin/env python
# -*- coding: utf-8 -*-

import urllib
import sys, zipfile, os
import time
import xml.etree.ElementTree as ElementTree


import getposlib as gp
import sys, time

#Generate with basedatas
def baseboat(rid):
    vlmboatidfirst = 2400
    return {'vlmid' : -vlmboatidfirst-int(rid)}
    
vlmidrace = 20141231
vlmusernameprefix = "B2B - "
basefilename = "B2B%d" % vlmidrace
raceBaseUrl = "http://barcelonaworldrace.geovoile.org/2015/_elements/data/race/"
geotree = gp.GeovoileTree(raceBaseUrl+"static.hwz?v=" + str(int(time.time())), basefilename)
coordfactor = geotree.factors()

boats = geotree.boats()

geotreeLive = gp.GeovoileTree(raceBaseUrl+"live.hwz?v=" + str(int(time.time())), basefilename+"live")
geotreeUpdate = gp.GeovoileTree(raceBaseUrl+"update.hwz?v=" + str(int(time.time())), basefilename+"update")

for rid in boats.keys() :
    bb = baseboat(int(rid))
    boats[rid]['boatid'] = rid
    boats[rid]['vlmid'] = -bb['vlmid']
    boats[rid]['vlmboatname'] = "%03d - %s" % (rid, boats[rid]['name'])
    boats[rid]['vlmusername'] = "%s%03d" % (vlmusernameprefix, rid)

for track in geotreeUpdate.tracks(tagid='id',liveData=0):
      #20091108|1|1257681600|-729|BT|Sébastien Josse - Jean François Cuzon|50.016000|-1.891500|85.252725|4651.600000
     rid, t, lat, lon = track
     
     if time.time() - t < 48*3600 and t < time.time():
     
         print "%d|0|%d|%d|%s|BAR|%f|%f|0.|0." % (vlmidrace, t, -boats[rid]['vlmid'], boats[rid]['name'].encode('utf8'), lat/coordfactor, lon/coordfactor)


for track in geotreeLive.tracks(tagid='id',liveData=1):
      #20091108|1|1257681600|-729|BT|Sébastien Josse - Jean François Cuzon|50.016000|-1.891500|85.252725|4651.600000
     rid, t, lat, lon = track
     
     if time.time() - t < 48*3600 and t < time.time():
     
         print "%d|0|%d|%d|%s|BAR|%f|%f|0.|0." % (vlmidrace, t, -boats[rid]['vlmid'], boats[rid]['name'].encode('utf8'), lat/coordfactor, lon/coordfactor)
