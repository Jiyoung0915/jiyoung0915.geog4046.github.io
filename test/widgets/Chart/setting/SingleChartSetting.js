// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Chart/setting/SingleChartSetting.html":'\x3cdiv\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"tabDiv" style\x3d"height: 100%;"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"settingsTabNode" style\x3d"height: 100%;"\x3e\r\n\t\t\t\x3c!--general settings--\x3e\r\n\t\t\t\x3cdiv class\x3d"part-setting-title"\x3e${nls.generalSettingsTip}\x3c/div\x3e\r\n\t\t\t\x3ctable class\x3d"part-setting-table gereral-table" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\r\n\t\t\t\t\x3ccolgroup\x3e\r\n\t\t\t\t\t\x3ccol width\x3d"10px;"\x3e\x3c/col\x3e\r\n\t\t\t\t\t\x3ccol width\x3d"116px" align\x3d"left"\x3e\x3c/col\x3e\r\n\t\t\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t\t\x3c/colgroup\x3e\r\n\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t\t\t\x3ctd class\x3d"text-middle" style\x3d"vertical-align: top;"\x3e\r\n\t\t\t\t\t\t\t\x3cspan style\x3d"line-height:30px;" title\x3d"${nls.dataSource}"\x3e${nls.dataSource}\x3c/span\x3e\r\n\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\x3cdiv style\x3d"position:relative;overflow:hidden;width:100%;height:30px;"\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv class\x3d"url-text-box" data-dojo-attach-point\x3d"urlTextBox"\r\n\t\t\t\t\t\t\t\tdata-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n\t\t\t\t\t\t\t\tdata-dojo-props\x3d\'required:true,trim:true,disabled:true\'\r\n\t\t\t\t\t\t\t\tstyle\x3d"display:inline-block;width:380px;min-width:380px;height:100%;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv class\x3d"filter-icon" title\x3d"${nls.addFilterTip}" data-dojo-attach-point\x3d"filterIcon"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv class\x3d"jimu-btn btn-data-source jimu-float-trailing" data-dojo-attach-point\x3d"btnSetSource" data-dojo-attach-event\x3d"onclick:_onBtnSetClicked" title\x3d"${nls.set}"\x3e${nls.set}\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t\t\t\x3ctd class\x3d"text-middle"\x3e\r\n\t\t\t\t\t\t\t\x3cspan title\x3d"${nls.chartTitle}"\x3e${nls.chartTitle}\x3c/span\x3e\r\n\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"chartNameTextBox"\r\n\t\t\t\t\t\t\tdata-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n\t\t\t\t\t\t\tdata-dojo-props\x3d\'required:true,trim:true\'\r\n\t\t\t\t\t\t\tdata-dojo-attach-event\x3d"change:_onChartNameChanged,blur:_onChartNameBlurred"\r\n\t\t\t\t\t\t\tstyle\x3d"width:100%;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t\t\t\x3ctd class\x3d"text-middle"\x3e\r\n\t\t\t\t\t\t\t\x3cspan title\x3d"${nls.description}"\x3e${nls.description}\x3c/span\x3e\r\n\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\x3ctextarea data-dojo-attach-point\x3d"descriptionTA"\r\n\t\t\t\t\t\t\tdata-dojo-attach-event\x3d"blur:_onDescriptionBlurred"\r\n\t\t\t\t\t\t\tstyle\x3d"width:100%;height:34px;resize:none;"\x3e\x3c/textarea\x3e\r\n\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\x3c/table\x3e\r\n\r\n\r\n\t\t\t\x3c!--chart mode setting--\x3e\r\n\t\t\t\x3cdiv class\x3d"part-setting-title"\x3e${nls.chartModeSettingTip}\x3c/div\x3e\r\n\t\t\t\x3ctable class\x3d"part-setting-table chart-mode-table" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\r\n\t\t\t\t\x3ccolgroup\x3e\r\n\t\t\t\t\t\x3ccol width\x3d"10px"\x3e\x3c/col\x3e\r\n\t\t\t\t\t\x3ccol width\x3d"116px" align\x3d"left"\x3e\x3c/col\x3e\r\n\t\t\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t\t\x3c/colgroup\x3e\r\n\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t\t\t\x3ctd class\x3d"text-middle"\x3e\r\n\t\t\t\t\t\t\t\x3cspan title\x3d"${nls.chartingMode}"\x3e${nls.chartingMode}\x3c/span\x3e\r\n\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\x3cselect data-dojo-attach-point\x3d"chartModeSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"change:_onChartModeChanged" style\x3d"width:100%;"\x3e\r\n\t\t\t\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\x3c/table\x3e\r\n\r\n\r\n\t\t\t\x3c!--detail setting--\x3e\r\n\t\t\t\x3cdiv class\x3d"part-setting-title" style\x3d"margin-bottom:15px;"\x3e${nls.detailsSettingTip}\x3c/div\x3e\r\n\t\t\t\x3ctable data-dojo-attach-point\x3d"detailsTable" class\x3d"part-setting-table details-table" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\r\n\t\t\t  \x3ccolgroup\x3e\r\n\t\t\t\t\x3ccol width\x3d"10px"\x3e\x3c/col\x3e\r\n\t\t\t\t\x3ccol width\x3d"116px" align\x3d"left"\x3e\x3c/col\x3e\r\n\t\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t  \x3c/colgroup\x3e\r\n\t\t\t  \x3ctbody calss\x3d"details-tbody"\x3e\r\n\t\t\t   \x3ctr class\x3d"detail-tr category-tr count-tr"\x3e\r\n\t\t\t\t  \t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t  \t\x3ctd class\x3d"text-middle"\x3e\r\n\t\t\t\t  \t\t\x3cspan title\x3d"${nls.categoryField}"\x3e${nls.categoryField}\x3c/span\x3e\r\n\t\t\t\t  \t\x3c/td\x3e\r\n\t\t\t\t  \t\x3ctd\x3e\r\n\t\t\t\t  \t\t\x3cdiv style\x3d"position:relative;overflow:hidden;width:100%;height:30px;"\x3e\r\n\t\t\t\t  \t\t\t\x3cselect data-dojo-attach-point\x3d"categoryFieldSelect" data-dojo-type\x3d"dijit/form/Select" style\x3d"width:100%;height:100%;"\x3e\r\n\t\t\t\t  \t\t\t\x3c/select\x3e\r\n\t\t\t\t  \t\t\x3c/div\x3e\r\n\t\t\t\t  \t\x3c/td\x3e\r\n\t\t\t\t \x3c/tr\x3e\r\n\r\n\t\t\t\t \x3ctr class\x3d"detail-tr feature-tr category-tr field-tr"\x3e\r\n\t\t\t\t  \t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t  \t\x3ctd class\x3d"text-middle" style\x3d"vertical-align:top;"\x3e\r\n\t\t\t\t  \t\t\x3cspan style\x3d"line-height:30px;" title\x3d"${nls.valueFields}"\x3e${nls.valueFields}\x3c/span\x3e\r\n\t\t\t\t  \t\x3c/td\x3e\r\n\t\t\t\t  \t\x3ctd\x3e\r\n\t\t\t\t  \t\t\x3cdiv data-dojo-attach-point\x3d"dataFieldsDiv"\x3e\x3c/div\x3e\r\n\t\t\t\t  \t\x3c/td\x3e\r\n\t\t\t\t \x3c/tr\x3e\r\n\r\n\t\t\t\t \x3ctr class\x3d"detail-tr feature-tr"\x3e\r\n\t\t\t\t \t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t \t\x3ctd class\x3d"text-middle"\x3e\r\n\t\t\t\t \t\t\x3cspan title\x3d"${nls.axisLabel}"\x3e${nls.axisLabel}\x3c/span\x3e\r\n\t\t\t\t \t\x3c/td\x3e\r\n\t\t\t\t \t\x3ctd\x3e\r\n\t\t\t\t \t\t\x3cdiv style\x3d"position:relative;overflow:hidden;width:100%;height:30px;"\x3e\r\n\t\t\t\t  \t\t\t\x3cselect data-dojo-attach-point\x3d"featureAxisLabelSelect" data-dojo-type\x3d"dijit/form/Select" style\x3d"width:100%;height:100%;"\x3e\r\n\t\t\t\t  \t\t\t\x3c/select\x3e\r\n\t\t\t\t  \t\t\x3c/div\x3e\r\n\t\t\t\t \t\x3c/td\x3e\r\n\t\t\t\t \x3c/tr\x3e\r\n\r\n\t\t\t\t \x3ctr class\x3d"detail-tr category-tr"\x3e\r\n\t\t\t\t  \t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t  \t\x3ctd class\x3d"text-middle"\x3e\r\n\t\t\t\t  \t\t\x3cspan title\x3d"${nls.operation}"\x3e${nls.operation}\x3c/span\x3e\r\n\t\t\t\t  \t\x3c/td\x3e\r\n\t\t\t\t  \t\x3ctd\x3e\r\n\t\t\t\t  \t\t\x3cselect data-dojo-attach-point\x3d"categoryOperationSelect" data-dojo-type\x3d"dijit/form/Select" style\x3d"width:100%;"\x3e\r\n\t\t\t\t  \t\t\t\x3coption value\x3d"sum"\x3e${nls.sumOption}\x3c/option\x3e\r\n\t\t\t\t  \t\t\t\x3coption value\x3d"average"\x3e${nls.averageOption}\x3c/option\x3e\r\n\t\t\t\t  \t\t\t\x3coption value\x3d"min"\x3e${nls.minOption}\x3c/option\x3e\r\n\t\t\t\t  \t\t\t\x3coption value\x3d"max"\x3e${nls.maxOption}\x3c/option\x3e\r\n\t\t\t\t  \t\t\x3c/select\x3e\r\n\t\t\t\t  \t\x3c/td\x3e\r\n\t\t\t\t \x3c/tr\x3e\r\n\r\n\t\t\t\t \x3ctr class\x3d"detail-tr field-tr"\x3e\r\n\t\t\t\t  \t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t  \t\x3ctd class\x3d"text-middle"\x3e\r\n\t\t\t\t  \t\t\x3cspan title\x3d"${nls.operation}"\x3e${nls.operation}\x3c/span\x3e\r\n\t\t\t\t  \t\x3c/td\x3e\r\n\t\t\t\t  \t\x3ctd\x3e\r\n\t\t\t\t  \t\t\x3cselect data-dojo-attach-point\x3d"fieldOperationSelect" data-dojo-type\x3d"dijit/form/Select" style\x3d"width:100%;"\x3e\r\n\t\t\t\t  \t\t\t\x3coption value\x3d"sum"\x3e${nls.sumOption}\x3c/option\x3e\r\n\t\t\t\t  \t\t\t\x3coption value\x3d"average"\x3e${nls.averageOption}\x3c/option\x3e\r\n\t\t\t\t  \t\t\t\x3coption value\x3d"min"\x3e${nls.minOption}\x3c/option\x3e\r\n\t\t\t\t  \t\t\t\x3coption value\x3d"max"\x3e${nls.maxOption}\x3c/option\x3e\r\n\t\t\t\t  \t\t\x3c/select\x3e\r\n\t\t\t\t  \t\x3c/td\x3e\r\n\t\t\t\t \x3c/tr\x3e\r\n\r\n\t\t\t\t \x3ctr style\x3d"margin-top: 5px;" class\x3d"detail-tr feature-tr category-tr count-tr field-tr chart-types-tr"\x3e\r\n\t\t\t\t  \t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t  \t\x3ctd class\x3d"mul-td-label" style\x3d"line-height: normal;height: auto;"\x3e\r\n\t\t\t\t  \t\t\x3cdiv class\x3d"part-label" title\x3d"${nls.chartType}"\x3e${nls.chartType}\x3c/div\x3e\r\n\t\t\t\t  \t\x3c/td\x3e\r\n\t\t\t\t  \t\x3ctd class\x3d"charts-td" style\x3d"line-height: 17px;"\x3e\r\n\t\t\t\t  \t\t\x3cdiv class\x3d"cbx-tr"\x3e\r\n\t\t\t\t  \t\t\t\x3cdiv class\x3d"cbx-td"\x3e\r\n\t\t\t\t  \t\t\t\t\x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"columnCbx"\x3e\x3c/div\x3e\r\n\t\t\t\t  \t\t\t\t\x3cdiv class\x3d"edit-div" data-dojo-attach-point\x3d"columnEdit"\x3e\x3c/div\x3e\r\n\t\t\t\t  \t\t\t\x3c/div\x3e\r\n\t\t\t\t  \t\t\t\x3cdiv class\x3d"cbx-td"\x3e\r\n\t\t\t\t  \t\t\t\t\x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"pieCbx"\x3e\x3c/div\x3e\r\n\t\t\t\t  \t\t\t\t\x3cdiv class\x3d"edit-div" data-dojo-attach-point\x3d"pieEdit"\x3e\x3c/div\x3e\r\n\t\t\t\t  \t\t\t\x3c/div\x3e\r\n\t\t\t\t  \t\t\x3c/div\x3e\r\n\r\n\t\t\t\t  \t\t\x3cdiv class\x3d"cbx-tr"\x3e\r\n\t\t\t\t\t\t\t\x3cdiv class\x3d"cbx-td"\x3e\r\n\t\t\t\t\t  \t\t\t\x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"barCbx"\x3e\x3c/div\x3e\r\n\t\t\t\t\t  \t\t\t\x3cdiv class\x3d"edit-div" data-dojo-attach-point\x3d"barEdit"\x3e\x3c/div\x3e\r\n\t\t\t\t\t  \t\t\x3c/div\x3e\r\n\t\t\t\t\t  \t\t\x3cdiv class\x3d"cbx-td"\x3e\r\n\t\t\t\t  \t\t\t\t\x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"lineCbx"\x3e\x3c/div\x3e\r\n\t\t\t\t  \t\t\t\t\x3cdiv class\x3d"edit-div" data-dojo-attach-point\x3d"lineEdit"\x3e\x3c/div\x3e\r\n\t\t\t\t  \t\t\t\x3c/div\x3e\t\t\t\t  \t\t\t\r\n\t\t\t\t  \t\t\x3c/div\x3e\r\n\t\t\t\t  \t\x3c/td\x3e\r\n\t\t\t\t \x3c/tr\x3e\r\n\t\t\t  \x3c/tbody\x3e\r\n\t\t\t\x3c/table\x3e\r\n\r\n\t\t\t\x3cdiv class\x3d"part-sort"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"part-label" title\x3d"${nls.sortBy}"\x3e${nls.sortBy}\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"SortDiv" class\x3d"part-content"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\r\n\r\n\t\t\t\x3c!--symbol setting--\x3e\r\n\t\t\t\x3cdiv class\x3d"part-setting-title"\x3e${nls.symbolSettingTip}\x3c/div\x3e\r\n\t\t\t\x3cdiv style\x3d"margin-left:10px;"\x3e\r\n\t\t\t\t\x3cdiv style\x3d"margin-top:20px;overflow:hidden;"\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"jimu-float-leading symbol-tip"\x3e${nls.setSymbol}:\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"symbolPicker" data-dojo-type\x3d"jimu/dijit/SymbolPicker"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3cdiv style\x3d"margin-top:30px;overflow:hidden;padding-bottom:10px;"\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"jimu-float-leading hightlight-tip"\x3e${nls.setHighLightColor}:\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"colorPicker" data-dojo-type\x3d"jimu/dijit/ColorPicker" data-dojo-props\x3d\'color:"${_highLightColor}"\' style\x3d"display:inline-block;width:25px;height:25px;"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"previewTabNode"\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"previewDiv" class\x3d"preview-div"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingIndicator" data-dojo-props\x3d"hidden:true"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/_base/query dojo/_base/Color dojo/on dojo/Evented dojo/Deferred dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./SingleChartSetting.html dijit/TooltipDialog dijit/popup jimu/dijit/Popup jimu/utils jimu/dijit/TabContainer3 jimu/dijit/Filter jimu/dijit/_FeaturelayerSourcePopup jimu/dijit/Message jimu/dijit/StatisticsChart jimu/LayerInfos/LayerInfos ./DataFields ./Sort ./utils jimu/dijit/_StatisticsChartSettings esri/tasks/query esri/tasks/QueryTask esri/symbols/jsonUtils dijit/Tooltip dijit/form/Select dijit/form/ValidationTextBox jimu/dijit/SymbolPicker jimu/dijit/SimpleTable jimu/dijit/LoadingIndicator jimu/dijit/CheckBox".split(" "),
function(u,d,g,e,m,q,h,v,w,x,y,z,A,B,r,C,l,D,E,F,G,H,I,J,K,n,p,L,t,M){return u([x,v,y,z],{baseClass:"jimu-widget-singlechart-setting",templateString:A,mediaSelector:null,config:null,map:null,nls:null,tr:null,folderUrl:"",appConfig:null,_webMapLayerId:null,_filterParts:null,maxPreviewFeaturesCount:50,_layerDefinition:null,_highLightColor:"#ff0000",_oidFieldType:"esriFieldTypeOID",_stringFieldType:"esriFieldTypeString",_numberFieldTypes:["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle",
"esriFieldTypeDouble"],_dateFieldType:"esriFieldTypeDate",postCreate:function(){this.inherited(arguments);n.layerInfosObj=I.getInstanceSync();this._initSelf()},destroy:function(){this.tr=null;delete this.tr;this._hideAllTooltipDialogs();this._destroyTooltipDialog("filterTooltipDialog");this._destroyTooltipDialog("sortOrderTooltipDialog");this._destroyTooltipDialog("columnTTD");this._destroyTooltipDialog("barTTD");this._destroyTooltipDialog("lineTTD");this._destroyTooltipDialog("pieTTD");this.filter&&
this.filter.destroy();this.jimuPopup&&(this.jimuPopup.onClose=d.hitch(this,function(){return!0}),this.jimuPopup.close());this.inherited(arguments)},_destroyTooltipDialog:function(a){var b=this[a];b&&(this._hideTooltipDialog(b),b.destroy());b=null;this[a]=null},_hideAllTooltipDialogs:function(){this._hideTooltipDialog(this.filterTooltipDialog);this._hideTooltipDialog(this.sortOrderTooltipDialog);this._hideAllParamsTooltipDialogs()},_hideAllParamsTooltipDialogs:function(){this.columnTTD&&this._hideTooltipDialog(this.columnTTD);
this.barTTD&&this._hideTooltipDialog(this.barTTD);this.lineTTD&&this._hideTooltipDialog(this.lineTTD);this.pieTTD&&this._hideTooltipDialog(this.pieTTD)},_hideTooltipDialog:function(a){a&&(r.close(a),a.isOpendNow=!1)},_showTooltipDialog:function(a,b,c){a&&(b={popup:a,around:b},c&&(b.orient=c),r.open(b),a.isOpendNow=!0)},startup:function(){this._started||this.inherited(arguments);this._started=!0},_updateUrlTextBoxLength:function(){try{var a=e.getMarginBox(this.btnSetSource),b=e.getContentBox(this.descriptionTA);
e.setStyle(this.urlTextBox.domNode,"width",Math.max(b.w-a.w-10,380)+"px")}catch(c){console.error(c)}},setConfig:function(a){if(this._isObject(a)){this.config=a;this._filterParts=a.filter;var b=a.url||"";b&&"string"===typeof b&&(a=a.webMapLayerId,this._layerDefinition&&this._layerDefinition.url===b?this._resetByConfig(this.config,this._layerDefinition):(this._layerDefinition=null,this.showBigShelter(),n.getLayerDefinitionByLayerIdOrUrl(a,b).then(function(a){this.domNode&&(this.hideBigShelter(),this._layerDefinition=
a,this._layerDefinition.url=b,this._resetByConfig(this.config,this._layerDefinition))}.bind(this),function(a){console.error(a);this.domNode&&this.hideBigShelter()}.bind(this))))}},getConfig:function(a){var b={url:"",filter:"",description:"",symbol:"",webMapLayerId:this._webMapLayerId,mode:"",name:"",highLightColor:"",types:[]};b.url=this.urlTextBox.get("value");var c=this.filter.toJson();if(!c||!c.expr)return a&&(this.tab.viewStack.getSelectedLabel()!==this.nls.preview&&this._showTooltipDialog(this.filterTooltipDialog,
this.urlTextBox.domNode),this._showMessage(this.nls.setFilterTip)),!1;b.filter=c;c=this.chartNameTextBox.get("value");c=l.stripHTML(c);if(!c)return a&&this._showMessage(this.nls.setChartTitleTip),!1;b.name=c;b.description=l.stripHTML(this.descriptionTA.value);b.mode=this.chartModeSelect.get("value");this.columnCbx.checked&&b.types.push({type:"column",display:this.columnParameters.getConfig()});this.pieCbx.checked&&b.types.push({type:"pie",display:this.pieParameters.getConfig()});this.barCbx.checked&&
b.types.push({type:"bar",display:this.barParameters.getConfig()});this.lineCbx.checked&&b.types.push({type:"line",display:this.lineParameters.getConfig()});if(0===b.types.length&&a)return this._showMessage(this.nls.setChartTypeTip),!1;if("feature"===b.mode){c={labelField:"",valueFields:[],sortOrder:{}};c.labelField=this.featureAxisLabelSelect.get("value");var k=this.valueFields.getSelectedFieldNames();if(0===k.length)return a&&this._showMessage(this.nls.setDataFieldTip),!1;c.valueFields=k;c.sortOrder=
this._getSortOrder();b=d.mixin(b,c)}else if("category"===b.mode){c={categoryField:"",operation:"",valueFields:[],sortOrder:{}};c.categoryField=this.categoryFieldSelect.get("value");c.operation=this.categoryOperationSelect.get("value");k=this.valueFields.getSelectedFieldNames();if(0===k.length)return a&&this._showMessage(this.nls.setDataFieldTip),!1;c.valueFields=k;c.sortOrder=this._getSortOrder();b=d.mixin(b,c)}else if("count"===b.mode)a={categoryField:"",sortOrder:{}},a.categoryField=this.categoryFieldSelect.get("value"),
a.sortOrder=this._getSortOrder(),b=d.mixin(b,a);else if("field"===b.mode){c={operation:"",valueFields:[],sortOrder:{}};c.operation=this.fieldOperationSelect.get("value");k=this.valueFields.getSelectedFieldNames();if(0===k.length)return a&&this._showMessage(this.nls.setDataFieldTip),!1;c.valueFields=k;c.sortOrder=this._getSortOrder();b=d.mixin(b,c)}this.config=d.clone(b);if(a=this.symbolPicker.getSymbol())b.symbol=a.toJson();else return!1;a=this.colorPicker.getColor();b.highLightColor=a.toHex();this.tr._layerDefinition=
this._layerDefinition;return d.clone(b)},showBigShelter:function(){this.emit("show-shelter")},_getSortOrder:function(){return this.sortDijit.getConfig()},hideBigShelter:function(){this.emit("hide-shelter")},_showMessage:function(a){new G({message:a})},_isObject:function(a){return a&&"object"===typeof a},_initSelf:function(){this._initCheckBox();this._initTabs();this._initChartTypes();this._initFilter();this._initSortOrder();this._initDataFields();this._initPreview();this._updateUIByMode(this.config&&
this.config.mode)},_initCheckBox:function(){this.columnCbx.setLabel(this.nls.column);this.pieCbx.setLabel(this.nls.pie);this.barCbx.setLabel(this.nls.bar);this.lineCbx.setLabel(this.nls.line)},_initTabs:function(){var a={title:this.nls.preview,content:this.previewTabNode};this.tab=new D({tabs:[{title:this.nls.settings,content:this.settingsTabNode},a]});this.tab.placeAt(this.tabDiv);this.own(h(this.tab,"tabChanged",d.hitch(this,function(b){this._hideAllTooltipDialogs();b===a.title&&this._updatePreview()})))},
_initFilter:function(){var a=e.toDom('\x3cdiv\x3e\x3cdiv class\x3d"filter-div"\x3e\x3c/div\x3e\x3cdiv class\x3d"operations" style\x3d"overflow:hidden;"\x3e\x3cdiv class\x3d"jimu-btn  jimu-float-trailing btn-cancel"\x3e\x3c/div\x3e\x3cdiv class\x3d"jimu-btn  jimu-float-trailing btn-ok"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e'),b=m(".filter-div",a)[0],c=m(".btn-ok",a)[0],k=m(".btn-cancel",a)[0];c.innerHTML=this.nls.ok;k.innerHTML=this.nls.close;window.isRTL?c.style.marginLeft="20px":c.style.marginRight=
"20px";this.jimuPopup=new C({width:700,content:a,hasTitle:!1,enableMoveable:!1,autoHeight:!0,hiddenAfterInit:!0,onClose:d.hitch(this,function(){this.resetFilter(this._filterParts);this._hideJimuPopup();return!1}),buttons:[]});this.filter=new E({autoSwitchMode:!1,runtime:!0});this.filter.allExpsBox.style.maxHeight="300px";this.filter.allExpsBox.style.overflowY="auto";this.filter.placeAt(b);this.filter.startup();this.own(h(c,"click",d.hitch(this,function(){(this._filterParts=this.filter.toJson())?this._hideJimuPopup():
this._showMessage(this.nls.setFilterTip)})));this.own(h(k,"click",d.hitch(this,function(){this.resetFilter(this._filterParts);this._hideJimuPopup()})));this.own(h(this.filterIcon,"click",d.hitch(this,function(){this.jimuPopup&&(this.jimuPopup.show(),this.jimuPopup.resize())})))},_hideJimuPopup:function(){this.jimuPopup&&this.jimuPopup.hide()},_initSortOrder:function(){this.sortDijit=new K({nls:this.nls});this.sortDijit.placeAt(this.SortDiv)},_initDataFields:function(){this.valueFields=new J({nls:this.nls});
this.valueFields.placeAt(this.dataFieldsDiv);this.valueFields.startup();this.own(h(this.valueFields,"change",d.hitch(this,function(){this._updateChartTypes();this._updateSortFields();this._updateParametersDijit()})))},_updateParametersDijit:function(){var a=this.chartModeSelect.get("value");"feature"===a||"category"===a?1===this.valueFields.getSelectedFieldNames().length?(this.columnParameters.showSingleColor(),this.barParameters.showSingleColor(),this.lineParameters.showSingleColor()):(this.columnParameters.showMultiColor(),
this.barParameters.showMultiColor(),this.lineParameters.showMultiColor()):(this.columnParameters.showSingleColor(),this.barParameters.showSingleColor(),this.lineParameters.showSingleColor());this._updateChartModeOfChartParamters(a)},_updateChartTypes:function(){this.pieCbx.setStatus(!0);var a=this.chartModeSelect.get("value");("feature"===a||"category"===a)&&1<this.valueFields.getSelectedFieldNames().length&&(this.pieCbx.setValue(!1),this.pieCbx.setStatus(!1))},_initChartTypes:function(){var a=this.folderUrl+
"common/images";this.columnParameters=new p({type:"column",imagesUrl:a,isInWidget:!1,singleColor:!1,nls:this.nls,config:null});this.columnTTD=this._createParametersDialog(this.columnCbx,this.columnEdit,this.columnParameters);this.pieParameters=new p({type:"pie",imagesUrl:a,isInWidget:!1,singleColor:!1,nls:this.nls,config:null});this.pieTTD=this._createParametersDialog(this.pieCbx,this.pieEdit,this.pieParameters);this.barParameters=new p({type:"bar",imagesUrl:a,isInWidget:!1,singleColor:!1,nls:this.nls,
config:null});this.barTTD=this._createParametersDialog(this.barCbx,this.barEdit,this.barParameters);this.lineParameters=new p({type:"line",imagesUrl:a,isInWidget:!1,singleColor:!1,nls:this.nls,config:null});this.lineTTD=this._createParametersDialog(this.lineCbx,this.lineEdit,this.lineParameters);this.own(h(document.body,"click",d.hitch(this,function(a){var c=a.target||a.srcElement;this._unselectEditDivs();var b=null,d=b=null,f=a=null;if(e.hasClass(c,"checkbox"))b=c;else if(e.hasClass(c,"label")){var g=
c.previousElementSibling;e.hasClass(g,"checkbox")&&(b=g)}g=c===this.columnEdit||c===this.pieEdit||c===this.barEdit||c===this.lineEdit;b===this.columnCbx.checkNode||b===this.pieCbx.checkNode||b===this.barCbx.checkNode||b===this.lineCbx.checkNode?(b===this.columnCbx.checkNode?(d=this.columnCbx,a=this.columnEdit,f=this.columnTTD):b===this.pieCbx.checkNode?(d=this.pieCbx,a=this.pieEdit,f=this.pieTTD):b===this.barCbx.checkNode?(d=this.barCbx,a=this.barEdit,f=this.barTTD):b===this.lineCbx.checkNode&&(d=
this.lineCbx,a=this.lineEdit,f=this.lineTTD),b=!!f.isOpendNow,this._hideAllParamsTooltipDialogs(),d.checked?(this._showEditDiv(a),e.addClass(a,"selected"),this._showTooltipDialog(f,a)):(this._hideTooltipDialog(f),this._hideEditDiv(a))):g?(a=c,a===this.columnEdit?f=this.columnTTD:a===this.pieEdit?f=this.pieTTD:a===this.barEdit?f=this.barTTD:a===this.lineEdit&&(f=this.lineTTD),b=!!f.isOpendNow,this._hideAllParamsTooltipDialogs(),b?this._hideTooltipDialog(f):(this._showTooltipDialog(f,a),e.addClass(a,
"selected"))):(this.columnTTD.isOpendNow?(a=this.columnEdit,f=this.columnTTD):this.pieTTD.isOpendNow?(a=this.pieEdit,f=this.pieTTD):this.barTTD.isOpendNow?(a=this.barEdit,f=this.barTTD):this.lineTTD.isOpendNow&&(a=this.lineEdit,f=this.lineTTD),f?(d=c===f.domNode,c=e.isDescendant(c,f.domNode),d||c?(this._hideAllParamsTooltipDialogs(),this._showTooltipDialog(f,a),e.addClass(a,"selected")):this._hideAllParamsTooltipDialogs()):this._hideAllParamsTooltipDialogs())})))},_createParametersDialog:function(a,
b,c){a=e.create("div");c.placeAt(a);return new B({content:a})},_unselectEditDivs:function(){e.removeClass(this.columnEdit,"selected");e.removeClass(this.pieEdit,"selected");e.removeClass(this.barEdit,"selected");e.removeClass(this.lineEdit,"selected")},_showEditDiv:function(a){e.setStyle(a,"display","inline-block")},_hideEditDiv:function(a){e.setStyle(a,"display","none")},_initPreview:function(){this.preview=new H({map:null,isBigPreview:!1,showSettingIcon:!1,showZoomIcon:!1,zoomToFeaturesWhenClick:!1});
this.preview.placeAt(this.previewDiv);this.preview.startup()},_updateUIByMode:function(a){var b=(a||this.chartModeSelect.get("value")||"")+"-tr";a=m(".detail-tr",this.detailsTable);g.forEach(a,d.hitch(this,function(a){e.hasClass(a,b)?e.addClass(a,"show-tr"):e.removeClass(a,"show-tr")}));this._updateChartTypes();this._updateParametersDijit();this.sortDijit&&(this.sortDijit.reset(),this._updateSortFields())},_onChartModeChanged:function(){if(!this.ignoreChangeEvents){var a=this.chartModeSelect.get("value")||
"";this._updateUIByMode(a)}},_updateSortFields:function(){var a=this.chartModeSelect.get("value");this.sortDijit&&("count"===a||"field"===a?this.sortDijit.setFieldOptions():(a=this._generateSortFieldOption(a),this.sortDijit.setFieldOptions(a)))},_generateSortFieldOption:function(){var a=this.valueFields.getSelectedFieldNames();if(a&&!(1>=a.length))return a.map(function(a){return{label:n.getAliasByFieldName(a,this._layerDefinition),value:a}}.bind(this))},_updateChartModeOfChartParamters:function(a){a&&
(this.columnParameters&&this.columnParameters._updateLegendDisplayByMode(a),this.pieParameters&&this.pieParameters._updateLegendDisplayByMode(a),this.barParameters&&this.barParameters._updateLegendDisplayByMode(a),this.lineParameters&&this.lineParameters._updateLegendDisplayByMode(a))},_onChartNameBlurred:function(){var a=l.stripHTML(this.chartNameTextBox.get("value"));this.chartNameTextBox.set("value",a)},_onChartNameChanged:function(){this.emit("name-change",this.chartNameTextBox.get("value"))},
_onDescriptionBlurred:function(){this.descriptionTA.value=l.stripHTML(this.descriptionTA.value)},_clear:function(){this._layerDefinition=null;this.urlTextBox.set("value","");this.filter.reset();this.chartNameTextBox.set("value","");this.descriptionTA.value="";this.chartModeSelect.removeOption(this.chartModeSelect.getOptions());this.categoryFieldSelect.removeOption(this.categoryFieldSelect.getOptions());this.categoryOperationSelect.set("value","sum");this.fieldOperationSelect.set("value","sum");this.valueFields.clear();
this.featureAxisLabelSelect.removeOption(this.featureAxisLabelSelect.getOptions());this.columnCbx.setValue(!1);this.pieCbx.setValue(!1);this.barCbx.setValue(!1);this.lineCbx.setValue(!1);this.columnParameters.reset();this.pieParameters.reset();this.barParameters.reset();this.lineParameters.reset();this.symbolPicker.reset();this.colorPicker.setColor(new q(this._highLightColor));this.sortDijit.reset(!0);this.preview.clear()},_onBtnSetClicked:function(){var a=new F({titleLabel:this.nls.setDataSource,
dijitArgs:{multiple:!1,createMapResponse:this.map.webMapResponse,portalUrl:this.appConfig.portalUrl,style:{height:"100%"}}});this.own(h(a,"ok",d.hitch(this,function(b){var c=a.getSelectedRadioType();a.close();a=null;var d=b.layerInfo&&b.layerInfo.id,e=b.url;this.showBigShelter();n.getLayerDefinitionByLayerIdOrUrl(d,e).then(function(a){this.hideBigShelter();b.definition=null;b.definition=a;this.setNewLayerDefinition(b,c,null)}.bind(this),function(a){console.error(a);this.hideBigShelter()}.bind(this))})));
this.own(h(a,"cancel",d.hitch(this,function(){a.close();a=null})));a.startup()},_hasNumberFields:function(a){var b=!1;(a=a.fields)&&0<a.length&&(b=g.some(a,d.hitch(this,function(a){return 0<=this._numberFieldTypes.indexOf(a.type)})));return b},setNewLayerDefinition:function(a,b,c){a.definition.name=a.name;a.definition.url=a.url;a.url!==(this._layerDefinition&&this._layerDefinition.url)&&this._resetByNewLayerDefinition(a,b,c)},_resetByNewLayerDefinition:function(a,b,c){var d=a.definition;this._addAliasForLayerInfo(d);
this._clear();if(d){var e=null;"map"===b&&a.layerInfo&&(e=a.layerInfo.id);this._layerDefinition=d;this._webMapLayerId=e;a=d.url;this.urlTextBox.set("value",a);this.filter.reset();this._layerDefinition&&this.filter.build({featureLayerId:this._webMapLayerId,url:a,partsObj:null,layerDefinition:this._layerDefinition});this.chartNameTextBox.set("value",c||d.name);this._resetFieldsDijitsByLayerInfo(this._layerDefinition);c=l.getTypeByGeometryType(d.geometryType);d="";"point"===c?d="marker":"polyline"===
c?d="line":"polygon"===c&&(d="fill");d&&this.symbolPicker.showByType(d)}},_resetFieldsDijitsByLayerInfo:function(a){this.chartModeSelect.removeOption(this.chartModeSelect.getOptions());this._hasNumberFields(a)?(this.chartModeSelect.addOption({value:"feature",label:this.nls.featureOption}),this.chartModeSelect.addOption({value:"category",label:this.nls.categoryOption}),this.chartModeSelect.addOption({value:"count",label:this.nls.countOption}),this.chartModeSelect.addOption({value:"field",label:this.nls.fieldOption}),
this.chartModeSelect.set("value","feature")):(this.chartModeSelect.addOption({value:"count",label:this.nls.countOption}),this.chartModeSelect.set("value","count"));var b=a.displayField;a=d.clone(a.fields);var c=[this._stringFieldType,this._dateFieldType],c=c.concat(d.clone(this._numberFieldTypes)),e=g.filter(a,d.hitch(this,function(a){return 0<=c.indexOf(a.type)}));this.categoryFieldSelect.removeOption(this.categoryFieldSelect.getOptions());var h="";g.forEach(e,d.hitch(this,function(a){this.categoryFieldSelect.addOption({value:a.name,
label:a.alias||a.name});a.name===b&&(h=b)}));this.categoryFieldSelect.set("value",h);var f=[this._stringFieldType,this._oidFieldType,this._dateFieldType].concat(d.clone(this._numberFieldTypes)),e=g.filter(a,d.hitch(this,function(a){return 0<=f.indexOf(a.type)}));this.featureAxisLabelSelect.removeOption(this.featureAxisLabelSelect.getOptions());var l="";g.forEach(e,d.hitch(this,function(a){var c={value:a.name,label:a.alias||a.name};b?a.name===b&&(l=a.name):a.type===this._oidFieldType&&(l=a.name);this.featureAxisLabelSelect.addOption(c)}));
this.featureAxisLabelSelect.set("value",l);a=g.filter(a,d.hitch(this,function(a){return 0<=this._numberFieldTypes.indexOf(a.type)}));this.valueFields.setFields(a)},_addAliasForLayerInfo:function(a){a&&a.fields&&0<a.fields.length&&g.forEach(a.fields,d.hitch(this,function(a){a.name&&!a.alias&&(a.alias=a.name)}))},_ignoreEvent:function(){this.ignoreChangeEvents=!0},_careEvent:function(){setTimeout(function(){this.ignoreChangeEvents=!1}.bind(this),200)},resetFilter:function(a){this.filter&&this._layerDefinition&&
this.filter.build({featureLayerId:this._webMapLayerId,url:this._layerDefinition.url,partsObj:a,layerDefinition:this._layerDefinition})},_resetByConfig:function(a,b){this._ignoreEvent();this._addAliasForLayerInfo(b);this._clear();var c=d.clone(a);this._layerDefinition=b;this._webMapLayerId=c.webMapLayerId;this.urlTextBox.set("value",c.url);this.filter.build({featureLayerId:this._webMapLayerId,url:c.url,partsObj:c.filter,layerDefinition:this._layerDefinition});this.chartNameTextBox.set("value",c.name||
b.name||"");this.descriptionTA.value=c.description||"";this._resetFieldsDijitsByLayerInfo(b);this.chartModeSelect.set("value",c.mode);a=d.hitch(this,function(){var a=this._getChartTypeDisplayConfig(c,"pie");a&&(this.pieParameters.setConfig(a),this.pieCbx.setValue(!0),this._showEditDiv(this.pieEdit))});"feature"===c.mode?(this.featureAxisLabelSelect.set("value",c.labelField),this.valueFields.selectFields(c.valueFields),1>=c.valueFields.length&&a()):"category"===c.mode?(this.categoryFieldSelect.set("value",
c.categoryField),this.categoryOperationSelect.set("value",c.operation),this.valueFields.selectFields(c.valueFields),1>=c.valueFields.length&&a()):"count"===c.mode?(this.categoryFieldSelect.set("value",c.categoryField),a()):"field"===c.mode&&(this.fieldOperationSelect.set("value",c.operation),this.valueFields.selectFields(c.valueFields),a());if(a=this._getChartTypeDisplayConfig(c,"column"))this.columnParameters.setConfig(a),this.columnCbx.setValue(!0),this._showEditDiv(this.columnEdit);if(a=this._getChartTypeDisplayConfig(c,
"bar"))this.barParameters.setConfig(a),this.barCbx.setValue(!0),this._showEditDiv(this.barEdit);if(a=this._getChartTypeDisplayConfig(c,"line"))this.lineParameters.setConfig(a),this.lineCbx.setValue(!0),this._showEditDiv(this.lineEdit);c.sortOrder&&this.sortDijit.setConfig(c.sortOrder);a=M.fromJson(c.symbol);this.symbolPicker.showBySymbol(a);this.colorPicker.setColor(new q(c.highLightColor));this._careEvent()},_getChartTypeDisplayConfig:function(a,b){if(a&&a.types&&0<a.types.length)for(var c=0;c<a.types.length;c++)if(a.types[c].type===
b)return a.types[c].display;return null},_updatePreview:function(){this.preview.clear();var a=this.getConfig(!0);if(a){var b=new L;b.returnGeometry=!1;b.where=a.filter.expr||"1\x3d1";b.outFields=[];"feature"===a.mode?(b.outFields=d.clone(a.valueFields),0>b.outFields.indexOf(a.labelField)&&(b.outFields=[a.labelField].concat(b.outFields))):"category"===a.mode?(b.outFields=d.clone(a.valueFields),0>b.outFields.indexOf(a.categoryField)&&(b.outFields=[a.categoryField].concat(b.outFields))):"count"===a.mode?
b.outFields=[a.categoryField]:"field"===a.mode&&(b.outFields=d.clone(a.valueFields));this.tab.showShelter();this.showBigShelter();this._queryFeatures(b,a.url).then(d.hitch(this,function(c){if(this.domNode){var b=e.getContentBox(this.domNode.parentNode);e.setStyle(this.preview.domNode,"height",Math.max(b.h-60,150)+"px");c=c.slice(0,this.maxPreviewFeaturesCount);this.preview.createClientCharts(this._layerDefinition.url,c,a);this.tab.hideShelter();this.hideBigShelter()}}),d.hitch(this,function(a){this.domNode&&
(console.error(a),this.tab.hideShelter(),this.hideBigShelter())}))}},_queryFeatures:function(a,b){var c=new w;(new t(b)).execute(a).then(d.hitch(this,function(a){c.resolve(a.features||[])}),d.hitch(this,function(e){e&&400===e.code?(a.outFields=["*"],(new t(b)).execute(a).then(d.hitch(this,function(a){c.resolve(a)}),d.hitch(this,function(a){c.reject(a)}))):c.reject(e)}));return c}})});