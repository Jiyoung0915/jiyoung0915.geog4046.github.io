// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/DataAggregation/nls/strings":{_widgetLabel:"\u8cc7\u6599\u532f\u805a",startPage:{defaultStartPageInstructions:"\u6b64 widget \u5c07\u5354\u52a9\u8655\u7406\u6a94\u6848\u7684\u8cc7\u6599\uff0c\u4e26\u5c07\u8a72\u8cc7\u6599\u63d0\u4ea4\u5230\u5730\u5716\u7684\u9078\u5b9a\u5716\u5c64\u3002\x3cbr/\x3e \x3cbr/\x3e \u5fc5\u9808\u4ee5\u9017\u865f\u3001\u9801\u7c64\u3001\u5206\u865f\u6216\u5782\u76f4\u5217\u5206\u9694\u6a94\u6848\u4e2d\u7684\u503c\u3002",dragDrop:"\u62d6\u653e",browse:"\u700f\u89bd\u5230\u6a94\u6848",
or:"OR",userPrivilege:"\u60a8\u7684\u5e33\u865f\u6c92\u6709\u5efa\u7acb\u6216\u4fee\u6539\u8cc7\u6599\u7684\u6b0a\u9650\u3002",userCredits:"${widgetName} \u9700\u8981\u9ede\u6578\u624d\u80fd\u4f7f\u7528 ${locator} \u5b9a\u4f4d\u5668\u3002",contactAdmin:"\u8acb\u806f\u7d61\u7d44\u7e54\u7684\u7ba1\u7406\u54e1\u4ee5\u8981\u6c42\u5176\u4ed6\u9ede\u6578\u3002",contactAdminEdit:"\u8acb\u806f\u7d61\u7d44\u7e54\u7684\u7ba1\u7406\u54e1\u4ee5\u8acb\u6c42\u7de8\u8f2f\u6b0a\u9650\u3002",canUseLocator:"${locator} \u5b9a\u4f4d\u5668\u5c07\u7528\u4f86\u5b9a\u4f4d\u5716\u5fb5\u3002",
notEnoughCredits:"\u9ede\u6578\u4e0d\u8db3\u3002",locationAndField:"\u4f4d\u7f6e\u548c\u6b04\u4f4d\u8cc7\u8a0a",locationAndFieldHint:"\u5f9e\u5fc5\u9808\u7528\u4f86\u66f4\u65b0\u76ee\u6a19\u5716\u5c64\u7684\u6a94\u6848\u4e2d\u9078\u64c7\u503c\u3002",cannotUseLocator:"\u7121\u6cd5\u4f7f\u7528 ${widgetName}",noAnonymousEdit:"${layerName} \u5716\u5c64\u4e0d\u652f\u63f4\u533f\u540d\u7de8\u8f2f\u3002",pleaseLogin:"\u767b\u5165 ${org} \u7d44\u7e54\u6216\u806f\u7d61\u7d44\u7e54\u7684\u7ba1\u7406\u54e1\u4ee5\u8acb\u6c42\u555f\u7528\u533f\u540d\u7de8\u8f2f\u3002",
invalidEdit:"\u6b0a\u9650\u7121\u6548",unableToAccess:"\u7121\u6cd5\u5b58\u53d6 ${layerName}",appropriateCredentials:"\u78ba\u8a8d\u60a8\u5df2\u4f7f\u7528\u9069\u7576\u7684\u6191\u8b49\u767b\u5165\u3002",shared:"\u806f\u7d61\u7d44\u7e54\u7684\u7ba1\u7406\u54e1\u4ee5\u7533\u8acb ${layerName} \u5716\u5c64\u7684\u5b58\u53d6\u6b0a\u3002",targetLayerLabel:"\u76ee\u6a19\u5716\u5c64",homeButtonLabel:"\u9996\u9801"},mapping:{schemaMapping:"\u6b04\u4f4d\u8cc7\u8a0a",schemaMappingHint:"\u5f9e\u6a94\u6848\u4e2d\u9078\u64c7\u8207\u5716\u5c64\u4e2d\u6b04\u4f4d\u76f8\u95dc\u7684\u6b04\u4f4d\u3002",
locationMapping:"\u4f4d\u7f6e\u8cc7\u8a0a",locationMappingHint:"\u9078\u64c7\u9810\u671f\u5f9e\u6a94\u6848\u53d6\u5f97\u7684\u5730\u5740\u6216\u5ea7\u6a19\u8cc7\u8a0a\u7684\u985e\u578b\u3002"},locationMapping:{locationMappingPageHint:"\u9078\u64c7\u4f4d\u7f6e\u985e\u578b",useAddress:"\u4f7f\u7528\u5730\u5740\u5b9a\u4f4d",useAddressHint:"\u8cc7\u6599\u5305\u542b\u5730\u5740\u8cc7\u8a0a",useCoordinates:"\u4f7f\u7528\u5ea7\u6a19\u5b9a\u4f4d",useCoordinatesHint:"\u8cc7\u6599\u5305\u542b X/Y \u5ea7\u6a19\u503c"},
address:{addressPageHint:"\u9078\u64c7\u5730\u5740\u985e\u578b",singleField:"\u55ae\u4e00\u6b04\u4f4d",singleFieldHint:"\u9078\u64c7\u5305\u542b\u5730\u5740\u8cc7\u8a0a\u7684\u6b04\u4f4d",multiField:"\u591a\u500b\u6b04\u4f4d",multiFieldHint:"\u9078\u64c7\u5305\u542b\u5730\u5740\u8cc7\u8a0a\u7684\u6b04\u4f4d"},coordinates:{coordinatesPageHint:"\u9078\u64c7\u5305\u542b\u5ea7\u6a19\u8cc7\u6599\u7684\u6b04\u4f4d"},fieldMapping:{fieldMappingPageHint:"\u9078\u64c7\u5c0d\u61c9\u5230\u76ee\u6a19\u6b04\u4f4d\u7684\u4f86\u6e90\u6b04\u4f4d",
sourceField:"\u5165\u5c0d\u4f86\u6e90\u6b04\u4f4d",targetField:"\u76ee\u6a19\u6b04\u4f4d"},buttons:{addToMap:"\u65b0\u589e\u5230\u5730\u5716",submit:"\u63d0\u4ea4",download:"\u4e0b\u8f09"},review:{matched:"\u767c\u73fe",reviewMatched:"\u767c\u73fe\u4f4d\u7f6e",reviewMatchedHint:"\u6aa2\u95b1\u627e\u5230\u7684\u4f4d\u7f6e\u3002",unMatched:"\u627e\u4e0d\u5230",reviewUnMatched:"\u627e\u4e0d\u5230\u4f4d\u7f6e",reviewUnMatchedHint:"\u6aa2\u95b1\u627e\u4e0d\u5230\u7684\u4f4d\u7f6e\u3002 \u4e0d\u6703\u63d0\u4ea4\u672a\u66f4\u6b63\u7684\u9805\u76ee\u3002",
duplicate:"\u91cd\u8907",reviewDuplicate:"\u91cd\u8907\u4f4d\u7f6e",reviewDuplicateHint:"\u6aa2\u95b1\u5df2\u5728\u5716\u5c64\u4e2d\u627e\u5230\u7684\u4f4d\u7f6e\u3002 \u4e0d\u6703\u63d0\u4ea4\u672a\u5b9a\u5740\u7684\u9805\u76ee\u3002",reviewLabelWithCount:"${totalMatchedFeatures} ${headerString} ${headerStringHint}",use:"\u4f7f\u7528:",fromLayer:"\u76ee\u6a19\u8cc7\u8a0a",target:"\u76ee\u6a19",source:"\u4f86\u6e90",fromFile:"\u4f86\u6e90\u8cc7\u8a0a",locationControlHint:"\u6aa2\u95b1\u5730\u5740\u8cc7\u8a0a",
duplicateAction:"\u9078\u64c7\u52d5\u4f5c",item:"\u8a18\u9304:",locateFeature:"\u5b9a\u4f4d\u5716\u5fb5",removeFeature:"\u79fb\u9664\u5716\u5fb5",featureLocated:"\u627e\u5230\u4f4d\u7f6e",valuesDoNotMatch:"\u4e0d\u7b26\u5408\u73fe\u6709\u503c",sync:"\u4f7f\u7528\u6b04\u4f4d\u8cc7\u8a0a\u4f86\u540c\u6b65\u5730\u5740\u8cc7\u8a0a",noFeaturesSaved:"\u672a\u6210\u529f\u5132\u5b58\u4efb\u4f55\u5716\u5fb5",someFeaturesSaved:"\u5df2\u6210\u529f\u5132\u5b58 ${num} \u500b\u5716\u5fb5\u3002",someFeaturesNotSaved:"\u672a\u6210\u529f\u5132\u5b58 ${num} \u500b\u5716\u5fb5\u3002",
feature:"\u6aa2\u95b1\u5716\u5fb5\u8cc7\u8a0a",locationInfo:"\u6aa2\u95b1\u4f4d\u7f6e\u8cc7\u8a0a",selectValue:"\u9078\u64c7\u503c",reviewData:"\u6aa2\u95b1\u8cc7\u6599",reviewDataHint:"\u5148\u6aa2\u95b1\u60a8\u7684\u8cc7\u6599\u518d\u63d0\u4ea4\u5230\u5716\u5c64\u3002",reviewFeatureHint:"\u6aa2\u95b1\u6216\u7de8\u8f2f\u60a8\u7684\u5716\u5fb5\u548c\u4f4d\u7f6e\u8cc7\u8a0a\u3002",duplicateModify:"\u91cd\u8907\uff0c\u9700\u8981\u8b8a\u66f4",duplicateSave:"\u53e6\u5b58\u70ba\u65b0\u5716\u5fb5"},warningsAndErrors:{invalidCSV:"\u5f9e CSV \u64f7\u53d6\u9805\u76ee\u6642\u767c\u751f\u932f\u8aa4\uff0c\u8acb\u6aa2\u67e5\u662f\u5426\u9078\u53d6\u6709\u6548\u7684 CSV \u6a94\u6848\u3002",
noLayersWarning:"\u672a\u914d\u7f6e\u6709\u6548\u7684\u76ee\u6a19\u5716\u5c64\uff0c\u8acb\u6aa2\u67e5\u914d\u7f6e\u3002",loadWarning:"\u6b64 widget \u9700\u8981\u5716\u5fb5\u670d\u52d9\u8cc7\u6599\u4f86\u6e90\u3002 \u8acb\u914d\u7f6e widget \u4f86\u5b9a\u7fa9\u8cc7\u6599\u4f86\u6e90\u3002",saveError:"\u5132\u5b58\u5716\u5fb5\u6642\u51fa\u932f\u3002",consumesCredits:"\u4f7f\u7528 ArcGIS Online \u4e16\u754c\u5730\u7406\u7de8\u78bc\u670d\u52d9\u6642\uff0c\u6b64\u5de5\u5177\u6703\u8017\u7528\u9ede\u6578",
noValue:"\u9078\u64c7\u6b04\u4f4d",mappingTitle:"",locationMappingComplete:"\u4f4d\u7f6e\u88fd\u5716\u5b8c\u6210",fieldMappingComplete:"\u73fe\u5834\u88fd\u5716\u5b8c\u6210",settingsCleared:"\u5c07\u6e05\u9664\u8a2d\u5b9a\u3002",proceed:"\u662f\u5426\u8981\u7e7c\u7e8c?",itemMoveMatch:"\u6703\u5c0b\u627e\u9805\u76ee\u4e26\u5c07\u5176\u79fb\u5230\u300c\u627e\u5230\u4f4d\u7f6e\u300d\u6e05\u55ae",itemMoveUnMatched:"\u7121\u6cd5\u627e\u5230\u9805\u76ee\u3002 \u79fb\u81f3\u300c\u627e\u4e0d\u5230\u4f4d\u7f6e\u300d\u6e05\u55ae\u3002",
itemWillBeLocated:"\u5c07\u5f9e\u300c\u91cd\u8907\u4f4d\u7f6e\u300d\u6e05\u55ae\u4e2d\u79fb\u9664\u9805\u76ee\u3002",cannotLocate:"\u7121\u6cd5\u627e\u5230\u9805\u76ee\u3002 \u78ba\u8a8d\u4f4d\u7f6e\u8cc7\u8a0a\u3002",invalidMessage:"\u7121\u6548\u503c\u3002",rangeMessage:"\u503c\u5fc5\u9808\u5c11\u65bc ${num} \u500b\u5b57\u5143\u3002",locatorError:"\u5b9a\u4f4d\u5668\u7121\u6548\u6216\u7121\u6cd5\u5b58\u53d6\u3002",notConfigured:"\u672a\u91dd\u5c0d\u76ee\u524d\u5b9a\u4f4d\u9078\u9805\u914d\u7f6e\u5b9a\u4f4d\u5668",
noMoreLocators:"\u672a\u914d\u7f6e\u5176\u4ed6\u5b9a\u4f4d\u5668"},featureToolbar:{locate:"\u5b9a\u4f4d",save:"\u5132\u5b58\u8a18\u9304",cancel:"\u53d6\u6d88\u7de8\u8f2f",cancelTitle:"\u53d6\u6d88\u7de8\u8f2f",cancelMessage:"\u53d6\u6d88\u76ee\u524d\u8a18\u9304\u7684\u7de8\u8f2f?"},_localized:{}}});