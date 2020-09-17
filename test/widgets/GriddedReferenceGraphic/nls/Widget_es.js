// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/GriddedReferenceGraphic/nls/strings":{_widgetLabel:"Gr\u00e1fico de referencia con cuadr\u00edcula",newGRGFromAreaButtonLabel:"Definir una cuadr\u00edcula con un \u00e1rea",newGRGFromPointButtonLabel:"Definir una cuadr\u00edcula con un punto",newGRGFromAreaTitle:"Definir una cuadr\u00edcula con un \u00e1rea",newGRGFromPointTitle:"Definir una cuadr\u00edcula con un punto",newGRGBySizeButtonLabel:"Mediante dimensi\u00f3n",newGRGFromRefSystemButtonLabel:"Mediante sistema de referencia",
newGRGByTimeLabel:"Mediante tiempo y velocidad",newGRGFromNonStandardButtonLabel:"Definir cuadr\u00edcula no est\u00e1ndar",newGRGAreaBySizeTitle:"GRG de un \u00e1rea mediante dimensiones",newGRGAreaBySizeDefineAreaLabel:"\u00c1rea GRG",addGRGAreaPolygonToolTip:"Dibujar \u00e1rea GRG mediante un pol\u00edgono",addGRGAreaExtentToolTip:"Dibujar \u00e1rea GRG mediante una extensi\u00f3n",rotation:"Rotaci\u00f3n de cuadr\u00edcula",numberRowsColumnsLabel:"Definir n\u00famero de filas y columnas",newGRGAreaByRefSystemTitle:"GRG de un \u00e1rea mediante sistema de referencia",
gridSize:"Tama\u00f1o de cuadr\u00edcula",UTMZoneandBand:"Zona de cuadr\u00edcula","100000m":"100.000 metros","10000m":"10.000 metros","1000m":"1.000 metros","100m":"100 metros","10m":"10 metros",clipGrid:"Clip de cuadr\u00edcula a \u00e1rea GRG",newGRGAreaFromNonStandardTitle:"Nueva NRG",newGRGPointBySizeTitle:"GRG de un punto mediante dimensi\u00f3n",newGRGPointByRefSystemTitle:"GRG de un punto mediante sistema de referencia",newGRGPointByTimeTitle:"GRG de un punto usando tiempo y velocidad",time:"Tiempo",
rate:"Velocidad",hours:"Horas",minutes:"Minutos",seconds:"Segundos",ftPerSec:"Pies / segundo",ftPerHour:"Pies / hora",kmPerSec:"Kil\u00f3metros / segundo",kmPerHour:"Kil\u00f3metros / hora",mPerSec:"Metros / segundo",mPerHour:"Metros / hora",miPerSec:"Millas / segundo",miPerHour:"Millas / hora",nMPerSec:"Millas n\u00e1uticas / segundo",nMPerHour:"Millas n\u00e1uticas / hora",settingsTitle:"Ajustes",labelSettingsLabel:"Configuraci\u00f3n de etiqueta",labelSettingsButtonLabel:"Configurar ajustes de etiquetas",
gridSettingsLabel:"Configuraci\u00f3n de la cuadr\u00edcula",gridSettingsButtonLabel:"Configurar ajustes de cuadr\u00edcula",transparency:"Transparencia",labelStyle:"Estilo de etiqueta",font:"Fuente",textSize:"Tama\u00f1o de texto",textColor:"Color del texto",halo:"Halo",show:"Mostrar",lockSettings:"Los ajustes han sido bloqueados por el propietario de la aplicaci\u00f3n",gridSettings:{cellShape:"Forma de celda",cellUnits:"Unidades de celda",cellOutline:"Ajustes de contorno de celda",cellFill:"Ajustes de relleno de celda",
gridReferenceSystem:"Sistema de referencia",gridDatum:"Datum: WGS84",labelStartPosition:"Origen de la etiqueta",labelType:"Tipo de etiqueta",labelDirection:"Direcci\u00f3n de la etiqueta",gridOrigin:"Origen de la cuadr\u00edcula","default":"Rect\u00e1ngulo",hexagon:"Hex\u00e1gono",miles:"Millas",kilometers:"Kil\u00f3metros",feet:"Pies",meters:"Metros",yards:"Yardas","nautical-miles":"Millas n\u00e1uticas",lowerLeft:"Inferior izquierda",lowerRight:"Inferior derecha",upperLeft:"Superior izquierda",
upperRight:"Superior derecha",center:"Centro",alphaNumeric:"Alfanum\u00e9rico",alphaAlpha:"Alfa-alfa",numeric:"Num\u00e9rico",horizontal:"Horizontal",vertical:"Vertical",MGRS:"MGRS",USNG:"USNG",showLabels:"Mostrar etiquetas",colorPicker:"Selector de color",bold:"Negrita",italic:"Cursiva",underline:"Subrayado"},publishTitle:"Publicar GRG en portal",publishGRGBtn:"Publicar",GRGLayerName:"Nombre de capa GRG publicada",invalidGRGLayerName:"El nombre de la capa solo debe contener caracteres alfanum\u00e9ricos y guiones bajos",
missingGRGLayerName:"Debe indicar un nombre para el GRG",publishWorskpaceError:"ERROR: error al abrir espacio de trabajo",publishToNewLayer:"Publicar resultados en una nueva capa de entidades",publishingFailedLayerExists:"Fallo de publicaci\u00f3n: ya tiene un servicio de entidades denominado {0}. Elija otro nombre.",checkService:"Comprobar servicio: {0}",createService:"Crear servicio: {0}",unableToCreate:"Imposible crear: {0}",addToDefinition:"Agregar a definici\u00f3n: {0}",successfullyPublished:"Capa web publicada correctamente{0}Administar la capa web",
userRole:"Imposible crear el servicio porque el usuario no tiene permisos",layerNameExists:"El nombre de la capa ya existe. Utilice un nombre de capa diferente.",createGRGBtn:"Crear GRG",clearGRGBtn:"Borrar",labelFormat:"Formato de etiqueta",helpIconTooltip:"Z: Designador de zona de cuadr\u00edcula (GZD)\nS: Identificaci\u00f3n de cuadrado de cuadr\u00edcula de 100.000 metros (GSID)\nX: Valor Este (coordenada X)\nY: Valor Norte (coordinada Y)\n\nEjemplos:\nZSXY es 15SWC8081751205\nZS X,Y es 15SWC 80817,51205",
addPointToolTip:"Agregar origen de GRG",cellWidth:"Ancho de celda (x)",cellHeight:"Altura de celda (y)",invalidNumberMessage:"El valor introducido no es v\u00e1lido",invalidRangeMessage:"El valor debe ser mayor que 0",gridAngleInvalidRangeMessage:"El valor debe estar comprendido entre -89,9 y 89,9",formatIconTooltip:"Formato de entrada",coordInputLabel:"Origen de GRG",setCoordFormat:"Definir cadena de caracteres de formato de coordenadas",prefixNumbers:"Agregar prefijo '+/-' a los n\u00fameros positivos y negativos",
cancelBtn:"Cancelar",applyBtn:"Solicitar participaci\u00f3n",comfirmInputNotation:"Confirmar notaci\u00f3n de entrada",notationsMatch:"notaciones que coinciden con su entrada. Confirme cu\u00e1l desea usar:",numberOfCellsHorizontal:"N.\u00ba de celdas horizontales",numberOfCellsVertical:"N.\u00ba de celdas verticales",gridAngle:"Rotaci\u00f3n de cuadr\u00edcula",tooManyCellsErrorMessage:"Est\u00e1 intentando crear una cuadr\u00edcula que consta de m\u00e1s de 2.000 celdas. Es recomendable reducir el n\u00famero de celdas creadas, cambiando para ello el tama\u00f1o de la cuadr\u00edcula o su \u00e1rea.",
missingParametersMessage:"\x3cp\x3eEl formulario de creaci\u00f3n de GRG tiene par\u00e1metros no v\u00e1lidos o ausentes. Aseg\u00farese de que:\x3c/p\x3e\x3cul\x3e\x3cli\x3eSe haya trazado un \u00e1rea de GRG.\x3c/li\x3e\x3cli\x3eEl ancho y la altura de celda contengan valores v\u00e1lidos.\x3c/li\x3e\x3c/ul\x3e",missingOriginParametersMessage:"\x3cp\x3eEl formulario de creaci\u00f3n de GRG tiene par\u00e1metros no v\u00e1lidos o ausentes. Aseg\u00farese de que:\x3c/p\x3e\x3cul\x3e\x3cli\x3eSe haya definido un origen de GRG.\x3c/li\x3e\x3cli\x3eEl tiempo, la velocidad y los \u00e1ngulos introducidos contengan valores v\u00e1lidos.\x3c/li\x3e\x3c/ul\x3e",
invalidWidthHeightParametersMessage:"\x3cp\x3eEl formulario de creaci\u00f3n de GRG tiene par\u00e1metros no v\u00e1lidos o ausentes. Aseg\u00farese de que el ancho y la altura de celda introducidos contengan valores v\u00e1lidos.\x3c/p\x3e",invalidHorizontalVerticalParametersMessage:"\x3cp\x3eEl formulario de creaci\u00f3n de GRG tiene par\u00e1metros no v\u00e1lidos o ausentes. Aseg\u00farese de que los n\u00fameros de celdas horizontales y verticales introducidos contengan valores v\u00e1lidos.\x3c/p\x3e",
drawPointToolTip:"Haga clic para agregar un punto de origen de GRG",missingLayerNameMessage:"Debe introducir un nombre de capa v\u00e1lido antes de publicar",parseCoordinatesError:"No se pueden analizar las coordenadas. Compruebe la entrada.",grgPolarRegionError:"La extensi\u00f3n de GRG est\u00e1 dentro de una zona polar. Las celdas que caigan dentro de la regi\u00f3n polar no se crear\u00e1n.",grgPolarOriginError:"El punto de origen de GRG no puede estar dentro de una regi\u00f3n polar al crear un GRG mediante un sistema de referencia.",
deleteBtn:"Eliminar",DD:"DD",DDM:"DDM",DMS:"DMS",DDRev:"DDRev",DDMRev:"DDMRev",DMSRev:"DMSRev",USNG:"USNG",MGRS:"MGRS",UTM_H:"UTM (H)",UTM:"UTM",GARS:"GARS",GEOREF:"GEOREF",DDLatLongNotation:"Grados decimales - Latitud/longitud",DDLongLatNotation:"Grados decimales - Longitud/latitud",DDMLatLongNotation:"Grados minutos decimales - Latitud/longitud",DDMLongLatNotation:"Grados minutos decimales - Longitud/latitud",DMSLatLongNotation:"Grados minutos segundos - Latitud/longitud",DMSLongLatNotation:"Grados minutos segundos - Longitud/latitud",
GARSNotation:"GARS",GEOREFNotation:"GEOREF",MGRSNotation:"MGRS",USNGNotation:"USNG",UTMBandNotation:"UTM - Letra de banda",UTMHemNotation:"UTM - Hemisferio (N/S)",_localized:{}}});