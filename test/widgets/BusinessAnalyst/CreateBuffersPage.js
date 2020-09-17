// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/BusinessAnalyst/CreateBuffersPage.html":'\x3cdiv\x3e\r\n\t\x3cdiv\x3e${nls.addRingsDtWt}\x3c/div\x3e\r\n\t\x3cbr\x3e\r\n    \x3cdiv style\x3d"width: 350 px; height: 110px"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"ringDtWtTabContainer" style\x3d"width: 100%; height: 110px;"\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"ringsContentPane" title\x3d"${nls.rings}" style\x3d"margin-top: 15px;"\x3e\r\n\t\t\t\t${nls.radius}\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"dijit/form/TextBox" style\x3d"width: 42px;" data-dojo-props\x3d"value: 1" data-dojo-attach-point\x3d"ringsBufferRadii1"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"dijit/form/TextBox" style\x3d"width: 42px;" data-dojo-props\x3d"value: 3" data-dojo-attach-point\x3d"ringsBufferRadii2"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"dijit/form/TextBox" style\x3d"width: 42px;" data-dojo-props\x3d"value: 5" data-dojo-attach-point\x3d"ringsBufferRadii3"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"ringsBufferUnits"\x3e\r\n\t\t\t\t\t\x3coption value\x3d"esriMiles" selected\x3d"selected"\x3e${nls.miles}\x3c/option\x3e\r\n\t\t\t\t\t\x3coption value\x3d"esriKilometers"\x3e${nls.km}\x3c/option\x3e\r\n\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"ringValidationErrorMessage" class\x3d"validationErrorMessage hidden"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3ca href\x3d"https://doc.arcgis.com/en/arcgis-online/reference/credits.htm" target\x3d"_blank" class\x3d"esriFloatTrailing esriSmallFont" style\x3d"position: absolute; right: 0px; top: 94px;"\x3e${nls.creditInformation}\x3c/a\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"driveTimeContentPane" title\x3d"${nls.driveTime}" style\x3d"margin-top: 15px;"\x3e\r\n\t\t\t\t${nls.time}\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"dijit/form/TextBox" style\x3d"width: 42px;" data-dojo-props\x3d"value: 5" data-dojo-attach-point\x3d"driveTimeBufferRadii1"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"dijit/form/TextBox" style\x3d"width: 42px;" data-dojo-props\x3d"value: 10" data-dojo-attach-point\x3d"driveTimeBufferRadii2"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"dijit/form/TextBox" style\x3d"width: 42px;" data-dojo-props\x3d"value: 15" data-dojo-attach-point\x3d"driveTimeBufferRadii3"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"driveTimeBufferUnits"\x3e\r\n\t\t\t\t\t\x3coption value\x3d"Minutes" selected\x3d"selected"\x3e${nls.minutes}\x3c/option\x3e\r\n\t\t\t\t\t\x3coption value\x3d"esriMiles"\x3e${nls.miles}\x3c/option\x3e\r\n\t\t\t\t\t\x3coption value\x3d"esriKilometers"\x3e${nls.km}\x3c/option\x3e\r\n\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"driveTimeValidationErrorMessage" class\x3d"validationErrorMessage hidden"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3ca href\x3d"https://doc.arcgis.com/en/arcgis-online/reference/credits.htm" target\x3d"_blank" class\x3d"esriFloatTrailing esriSmallFont" style\x3d"position: absolute; right: 0px; top: 94px;"\x3e${nls.creditInformation}\x3c/a\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"walkTimeContentPane" title\x3d"${nls.walkTime}" style\x3d"margin-top: 15px;"\x3e\r\n\t\t\t\t${nls.time}\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"dijit/form/TextBox" style\x3d"width: 42px;" data-dojo-props\x3d"value: 5" data-dojo-attach-point\x3d"walkTimeBufferRadii1"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"dijit/form/TextBox" style\x3d"width: 42px;" data-dojo-props\x3d"value: 10" data-dojo-attach-point\x3d"walkTimeBufferRadii2"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"dijit/form/TextBox" style\x3d"width: 42px;" data-dojo-props\x3d"value: 15" data-dojo-attach-point\x3d"walkTimeBufferRadii3"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"walkTimeBufferUnits"\x3e\r\n\t\t\t\t\t\x3coption value\x3d"Minutes" selected\x3d"selected"\x3e${nls.minutes}\x3c/option\x3e\r\n\t\t\t\t\t\x3coption value\x3d"esriMiles"\x3e${nls.miles}\x3c/option\x3e\r\n\t\t\t\t\t\x3coption value\x3d"esriKilometers"\x3e${nls.km}\x3c/option\x3e\r\n\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"walkTimeValidationErrorMessage" class\x3d"validationErrorMessage hidden"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3ca href\x3d"https://doc.arcgis.com/en/arcgis-online/reference/credits.htm" target\x3d"_blank" class\x3d"esriFloatTrailing esriSmallFont" style\x3d"position: absolute; right: 0px; top: 94px;"\x3e${nls.creditInformation}\x3c/a\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv style\x3d"margin-top: 10px;" class\x3d"jimu-btn jimu-btn-vacation"  data-dojo-attach-point\x3d"backBtn" data-dojo-attach-event\x3d"onclick:backOnClick"\x3e${nls.back}\x3c/div\x3e\r\n\t\x3cdiv style\x3d"margin-top: 10px;" class\x3d"jimu-btn"  data-dojo-attach-point\x3d"createBufferBtn" data-dojo-attach-event\x3d"onclick:applyBuffer"\x3e${nls.apply}\x3c/div\x3e\r\n\r\n\t\x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingIndicator" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_TemplatedMixin dijit/_WidgetBase dijit/_WidgetsInTemplateMixin esri/dijit/geoenrichment/_WizardPage esri/geometry/Polygon esri/symbols/SimpleFillSymbol esri/symbols/SimpleLineSymbol esri/Color esri/graphic ./utils/GEUtil ./utils/TravelModeUtil ./utils/ValidationUtil ./utils/SiteUtil dojo/text!./CreateBuffersPage.html jimu/dijit/TabContainer3 dijit/form/TextBox".split(" "),function(q,v,w,x,y,z,t,l,p,A,B,C,c,u,D,E){return q([w,v,y,x],{templateString:D,postCreate:function(){this.inherited(arguments);
this.tab=new E({tabs:[{title:this.nls.rings,content:this.ringsContentPane},{title:this.nls.driveTime,content:this.driveTimeContentPane},{title:this.nls.walkTime,content:this.walkTimeContentPane}],selected:this.nls.rings});this.tab.placeAt(this.ringDtWtTabContainer);this.tab.startup();this._setConfigDefaults()},startup:function(){this.inherited(arguments)},refresh:function(){this._showHideTabs()},_setConfigDefaults:function(){this._setRadii(this.config.ringDefaults,this.ringsBufferRadii1,this.ringsBufferRadii2,
this.ringsBufferRadii3);this.ringsBufferUnits.set("value",this.config.ringUnitDefault);this._setRadii(this.config.driveTimeDefaults,this.driveTimeBufferRadii1,this.driveTimeBufferRadii2,this.driveTimeBufferRadii3);this.driveTimeBufferUnits.set("value",this.config.driveTimeUnitDefault);this._setRadii(this.config.walkTimeDefaults,this.walkTimeBufferRadii1,this.walkTimeBufferRadii2,this.walkTimeBufferRadii3);this.walkTimeBufferUnits.set("value",this.config.walkTimeUnitDefault)},_showHideTabs:function(){this.config.ringDisabled&&
this.tab.removeTab(this.nls.rings);this.config.driveTimeDisabled&&this.tab.removeTab(this.nls.driveTime);this.config.walkTimeDisabled&&this.tab.removeTab(this.nls.walkTime);this.tab.getSelectedTitle()===this.nls.rings&&this.config.ringDisabled&&this.tab.selectTab(this.nls.driveTime);this.tab.getSelectedTitle()===this.nls.driveTime&&this.config.driveTimeDisabled&&this.tab.selectTab(this.nls.walkTime);this.tab.getSelectedTitle()===this.nls.walkTime&&this.config.walkTimeDisabled&&this.tab.selectTab(this.nls.driveTime)},
applyBuffer:function(){if(this._validateInput()){this.shelter.show();var a=this,c=[[16,59,143,1],[0,204,51,1],[204,51,0,1]],d=0,b={},m="",r="",h="",e=10,g;this.tab.getSelectedTitle()===this.nls.rings?(b.areaType="RingBuffer",b.bufferUnits=this.ringsBufferUnits.get("value"),h=this.ringsBufferUnits._getDisplayedValueAttr(),b.bufferRadii=this._getRadii(this.ringsBufferRadii1,this.ringsBufferRadii2,this.ringsBufferRadii3),m=this.nls.ring):this.tab.getSelectedTitle()===this.nls.driveTime?(b.areaType="NetworkServiceArea",
b.bufferUnits=this.driveTimeBufferUnits.get("value"),h=this.driveTimeBufferUnits._getDisplayedValueAttr(),b.bufferRadii=this._getRadii(this.driveTimeBufferRadii1,this.driveTimeBufferRadii2,this.driveTimeBufferRadii3),m=this.nls.driveTime,r="Driving "+("Minutes"===b.bufferUnits?"Time":"Distance"),e=(g=b.bufferRadii?u.getMaxRadiusInKilometers(b,!1):0)&&Math.max(1,Math.log(g/8)*Math.LOG2E),e=g*Math.min(e,5)):(b.areaType="NetworkServiceArea",b.bufferUnits=this.walkTimeBufferUnits.get("value"),h=this.walkTimeBufferUnits._getDisplayedValueAttr(),
b.bufferRadii=this._getRadii(this.walkTimeBufferRadii1,this.walkTimeBufferRadii2,this.walkTimeBufferRadii3),m=this.nls.walkTime,r="Walking "+("Minutes"===b.bufferUnits?"Time":"Distance"),e=(g=b.bufferRadii?u.getMaxRadiusInKilometers(b,!0):0)&&Math.max(1,Math.log(g/8)*Math.LOG2E),e=g*Math.min(e,3));var q=[];C.getTravelMode(r,e).then(function(k){k&&(b.travelMode=k);B.createRingOrDriveTimes({geometry:a.wizard.selectedPoint.geometry,studyAreasOptions:b,sourceCountry:a.wizard.selectedCountryID}).then(function(k){a.wizard.clearSelectedPointBuffers();
a.wizard.selectedPoint.areadesc2=m+a.nls.colon+" "+b.bufferRadii.join(", ")+" "+a.nls["headerDescription_"+h]+" "+a.nls.radii;k=k.results[0].value.FeatureSet[0].features.reverse();var e=b.bufferRadii.reverse(),g;for(g in k){var n=new z({rings:k[g].geometry.rings,spatialReference:{wkid:102100}});if(a.tab.getSelectedTitle()==a.nls.rings)var f=new t(l.STYLE_SOLID,new l(l.STYLE_SOLID,new p(c[d]),2),new p([255,0,15,0]));else f=new p(c[d]),f.a=.5,f=new t(l.STYLE_SOLID,new l(l.STYLE_SOLID,new p(c[d]),2),
f);n=new A(n,f);f={};f.graphic=n;f.name=a.wizard.selectedPoint.locationName+" - "+e[d]+" "+h;f.shortName=e[d]+" "+h;f.AREA_DESC=e[d]+" "+h;f.AREA_DESC2=m+a.nls.colon+" "+e[d]+" "+a.nls["headerDescription_"+h]+" "+a.nls.radius_lowercase;a.wizard.selectedPoint.tradeAreas.push(f);a.map.graphics.add(n);q.push(n);d++}a.wizard.selectedPoint.tradeAreas=a.wizard.selectedPoint.tradeAreas.reverse();a.map.setExtent(a.wizard.selectedPoint.tradeAreas[a.wizard.selectedPoint.tradeAreas.length-1].graphic._extent);
a.shelter.hide();a.onNext()},function(b){alert("Error: "+b);a.shelter.hide()})})}},backOnClick:function(){this.onBack()},_getRadii:function(a,c,d){a=a.get("value");c=c.get("value");d=d.get("value");var b=[];""!==a&&b.push(a);""!==c&&b.push(c);""!==d&&b.push(d);return b},_setRadii:function(a,c,d,b){0<a.length?c.set("value",a[0]):c.set("value","");1<a.length?d.set("value",a[1]):d.set("value","");2<a.length?b.set("value",a[2]):b.set("value","")},_validateInput:function(){var a=!0,a=this.tab.getSelectedTitle()===
this.nls.rings?c.validateInvalidValues(this.ringsBufferRadii1,this.ringsBufferRadii2,this.ringsBufferRadii3,this.ringValidationErrorMessage,this.nls.thisEntryIsNotValid):this.tab.getSelectedTitle()===this.nls.driveTime?c.validateInvalidValues(this.driveTimeBufferRadii1,this.driveTimeBufferRadii2,this.driveTimeBufferRadii3,this.driveTimeValidationErrorMessage,this.nls.thisEntryIsNotValid):c.validateInvalidValues(this.walkTimeBufferRadii1,this.walkTimeBufferRadii2,this.walkTimeBufferRadii3,this.walkTimeValidationErrorMessage,
this.nls.thisEntryIsNotValid);return a?(a=this.tab.getSelectedTitle()===this.nls.rings?c.validateMinMaxValues(this.ringsBufferRadii1,this.ringsBufferRadii2,this.ringsBufferRadii3,c.MIN_RINGS_VALUE,c.MAX_RINGS_VALUE,this.ringValidationErrorMessage,this.nls.invalidValueRing):this.tab.getSelectedTitle()===this.nls.driveTime?c.validateMinMaxValues(this.driveTimeBufferRadii1,this.driveTimeBufferRadii2,this.driveTimeBufferRadii3,c.MIN_DTWT_VALUE,c.MAX_DTWT_VALUE,this.driveTimeValidationErrorMessage,this.nls.invalidValueDTWT):
c.validateMinMaxValues(this.walkTimeBufferRadii1,this.walkTimeBufferRadii2,this.walkTimeBufferRadii3,c.MIN_DTWT_VALUE,c.MAX_DTWT_VALUE,this.walkTimeValidationErrorMessage,this.nls.invalidValueDTWT))?!0:!1:!1}})});