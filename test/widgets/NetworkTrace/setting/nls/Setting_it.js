// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"dijit/_editor/nls/commands":{bold:"Grassetto",copy:"Copia",cut:"Taglia","delete":"Elimina",indent:"Rientro",insertHorizontalRule:"Righello orizzontale",insertOrderedList:"Elenco numerato",insertUnorderedList:"Elenco puntato",italic:"Corsivo",justifyCenter:"Allinea al centro",justifyFull:"Giustifica",justifyLeft:"Allinea a sinistra",justifyRight:"Allinea a destra",outdent:"Annulla rientro",paste:"Incolla",redo:"Ripristina",removeFormat:"Rimuovi formato",selectAll:"Seleziona tutto",strikethrough:"Barrato",
subscript:"Pedice",superscript:"Apice",underline:"Sottolinea",undo:"Annulla",unlink:"Rimuovi collegamento",createLink:"Crea collegamento",toggleDir:"Attiva/Disattiva direzione",insertImage:"Inserisci immagine",insertTable:"Inserisci/Modifica tabella",toggleTableBorder:"Attiva/Disattiva bordo tabella",deleteTable:"Elimina tabella",tableProp:"Propriet\u00e0 tabella",htmlToggle:"Origine HTML",foreColor:"Colore primo piano",hiliteColor:"Colore sfondo",plainFormatBlock:"Stile paragrafo",formatBlock:"Stile paragrafo",
fontSize:"Dimensione carattere",fontName:"Nome carattere",tabIndent:"Rientro tabulazione",fullScreen:"Attiva/Disattiva schermo intero",viewSource:"Visualizza origine HTML",print:"Stampa",newPage:"Nuova pagina",systemShortcut:'La azione "${0}" \u00e8 disponibile solo nel browser tramite un tasto di scelta rapida. Utilizzare ${1}.',ctrlKey:"ctrl+${0}",appleKey:"\u2318${0}",_localized:{}},"dijit/_editor/nls/FontChoice":{fontSize:"Dimensione",fontName:"Carattere",formatBlock:"Formato",serif:"serif","sans-serif":"sans-serif",
monospace:"spaziatura fissa",cursive:"corsivo",fantasy:"fantasy",noFormat:"Nessuna",p:"Paragrafo",h1:"Intestazione",h2:"Sottointestazione",h3:"Sottointestazione secondaria",pre:"Preformattato",1:"piccolissimo",2:"molto piccolo",3:"piccolo",4:"medio",5:"grande",6:"molto grande",7:"grandissimo",_localized:{}},"dojox/editor/plugins/nls/Preview":{preview:"Anteprima",_localized:{}},"dojox/editor/plugins/nls/FindReplace":{findLabel:"Trova:",findTooltip:"Immettere il testo da ricercare",replaceLabel:"Sostituisci con:",
replaceTooltip:"Immettere il testo con cui sostituire",findReplace:"Trova e sostituisci",matchCase:"Corrispondenza maiuscolo/minuscolo",matchCaseTooltip:"Corrispondenza maiuscolo/minuscolo",backwards:"Indietro",backwardsTooltip:"Ricercare il testo all'indietro",replaceAllButton:"Sostituisci tutti",replaceAllButtonTooltip:"Sostituisci tutto il testo",findButton:"Trova",findButtonTooltip:"Trova il testo",replaceButton:"Sostituisci",replaceButtonTooltip:"Sostituisci il testo",replaceDialogText:"Sostituite ${0} ricorrenze.",
eofDialogText:"Ultime ${0} ricorrenze",eofDialogTextFind:"trovato",eofDialogTextReplace:"sostituito",_localized:{}},"dojox/editor/plugins/nls/PasteFromWord":{pasteFromWord:"Incolla da Word",instructions:"Incollare i contenuti da Word nella seguente casella di testo. Quando si \u00e8 deciso quali contenuti inserire, fare clic sul pulsante incolla. Per interrompere l'inserimento del testo premere il pulsante annulla.",_localized:{}},"dojox/editor/plugins/nls/InsertAnchor":{insertAnchor:"Inserisci ancoraggio",
title:"Propriet\u00e0 ancoraggio",anchor:"Nome:",text:"Descrizione:",set:"Imposta",cancel:"Annulla",_localized:{}},"dojox/editor/plugins/nls/Blockquote":{blockquote:"Blockquote",_localized:{}},"widgets/NetworkTrace/setting/nls/strings":{taskUrl:"URL attivit\u00e0",setTask:"Imposta",setTaskPopupTitle:"Imposta attivit\u00e0",validate:"Imposta",inValidGPService:"Immettere un servizio di geoprocessing valido.",noOutputParameterWithGeometryType:"Il servizio di geoprocessing selezionato deve avere almeno un parametro di output con un tipo di geometria specificato. Selezionare un servizio di geoprocessing diverso.",
invalidOutputGeometry:"Il tipo di geometria di output del servizio di geoprocessing selezionato non \u00e8 compatibile con le impostazioni del progetto. Non \u00e8 possibile memorizzare i risultati del servizio di geoprocessing.",GPFeatureRecordSetLayerERR:"Immettere un servizio di geoprocessing solo con input di tipo 'GPFeatureRecordSetLayer'.",invalidInputParameters:"Il numero di parametri di input \u00e8 inferiore a 1 o superiore a 3. Immettere un servizio di geoprocessing valido.",projectSetting:{title:"Impostazioni di progetto",
note:"Nota: le impostazioni del progetto sono opzionali, una volta che l'utente configurato \u00e8 in grado di memorizzare il progetto nei layer della mappa Web desiderati con l'area di interruzione della rete e i parametri di input. L'utente pu\u00f2 memorizzare altri parametri di output dalla scheda \"Output\".",projectPolygonLayer:"Layer poligonale di progetto",outputParameterName:"Nome parametro di output",projectPointLayer:"Layer puntuale di progetto",selectLabel:"Seleziona",polygonLayerHelp:"\x3cp\x3eSaranno mostrati i layer poligonali con le seguenti condizioni:\x3cbr/\x3e\x3cul\x3e\x3cli\x3eIl layer deve avere funzionalit\u00e0 di modifica ovvero Crea, Elimina e Aggiorna\x3c/li\x3e\x3cli\x3eIl layer deve avere 2 campi con il nome e i tipi di dati esatti:\x3c/li\x3e\x3cul\x3e\x3cli\x3ename (campo tipo stringa)\x3c/li\x3e\x3cli\x3eglobalid (campo tipo GlobalID)\x3c/li\x3e\x3c/ul\x3e\x3c/ul\x3e\x3cp/\x3e",
outputParameterHelp:"\x3cp\x3eSaranno mostrati i layer poligonali di output dell\u2019URL attivit\u00e0\x3cp/\x3e",pointLayerHelp:"\x3cp\x3eSaranno mostrati i layer puntuali con le seguenti condizioni: \x3cbr/\x3e\x3cul\x3e\x3cli\x3eIl layer deve avere funzionalit\u00e0 di modifica ovvero Crea, Elimina e Aggiorna\x3c/li\x3e\x3cli\x3eIl layer deve avere 2 campi con il nome e i tipi di dati esatti:\x3c/li\x3e\x3cul\x3e\x3cli\x3einputtype (campo tipo stringa)\x3c/li\x3e\x3cli\x3eprojectid (campo tipo GUID)\x3c/li\x3e\x3c/ul\x3e\x3c/ul\x3e\x3cp/\x3e"},
inputOutputTab:{flag:"Flag",barrier:"Barriera",skip:"Ignora",title:"Input",inputTooltip:"Descrizione comandi",typeText:"Tipo",symbol:"Simbolo",summaryEditorText:"Testo di riepilogo",summaryTextTitle:"Fornire testo da visualizzare per la scheda di input"},summaryTab:{title:"Output",summaryFieldsetText:"Impostazioni di riepilogo",inputOutput:"Input/Output",field:"Campo",operator:"Operatore",inputOperatorCountOption:"Conteggio",outputOperatorCountOption:"Conteggio",outputOperatorSkipCountOption:"SkipCount",
fieldOperatorSumOption:"Somma",fieldOperatorMinOption:"Minima",fieldOperatorMaxOption:"Massima",fieldOperatorMeanOption:"Medio",expressionAddButtonText:"Aggiungi",expressionVerifyButtonText:"Verifica",summaryEditorText:"Testo di riepilogo",zoomText:"Zoom automatico dopo traccia",summarSettingTooltipText:"Aggiungere conteggio di input/output",symbol:"Simbolo",outputParametersText:"Parametri di output",skipText:"Salta",visibilityText:"Visibile",exportToCsvText:"Esporta in CSV",settitngstext:"Impostazioni",
saveToLayerText:"Salva come layer (opzionale)",inputLabel:"Etichetta",inputTooltip:"Descrizione comandi",outputDisplay:"Visualizza testo",addFieldTitle:"Aggiungi campo",setScale:"Imposta scala",enterDisplayText:"Immetti testo da mostrare",saveToLayerHelp:"\x3cp\x3eSaranno mostrati i layer con le seguenti condizioni:\x3cbr/\x3e\x3cul\x3e\x3cli\x3eIl layer deve avere funzionalit\u00e0 di modifica ovvero Crea, Elimina e Aggiorna\x3c/li\x3e\x3cli\x3eIl layer deve avere due campi con il nome e i tipi di dati:\x3c/li\x3e\x3cul\x3e\x3cli\x3eparametername (campo tipo stringa)\x3c/li\x3e\x3cli\x3eprojectid (campo tipo Guid)\x3c/li\x3e\x3c/ul\x3e\x3c/ul\x3e\x3cp/\x3e",
exportToCsvDisplayText:"CSV",summaryTextTitle:"Fornire testo di riepilogo da visualizzare sulla scheda di output",addSummaryItemsTitle:"Aggiungi elementi di riepilogo"},validationErrorMessage:{webMapError:"Nessun layer disponibile nella mappa Web. Selezionare una mappa Web valida.",inputTypeFlagGreaterThanError:"L\u2019input di tipo flag non pu\u00f2 essere pi\u00f9 di uno.",inputTypeFlagLessThanError:"\u00c8 necessario almeno un input del flag tipo.",inputTypeBarrierErr:"L\u2019input di tipo barriera non pu\u00f2 essere pi\u00f9 di uno.",
inputTypeSkipErr:"L\u2019input di tipo salto non pu\u00f2 essere pi\u00f9 di uno.",displayTextForButtonError:"Visualizza testo per il pulsante 'Esegui' on pu\u00f2 essere vuoto.",UnableToLoadGeoprocessError:"Impossibile caricare servizio di geoprocessing.",invalidSummaryExpression:"Espressione non valida.",validSummaryExpression:"Operazione riuscita!",invalidProjectSettings:"Impostazioni di progetto non valide.\x3cbr/\x3e Selezionare un valore valido in '${projectSetting}'."},hintText:{labelTextHint:"Suggerimento: fornire un'etichetta di visualizzazione per il pannello dei risultati del parametro di output.",
displayTextHint:"Suggerimento: verr\u00e0 visualizzato nel pannello dei dettagli per questo parametro di output.",inputTextHint:"Suggerimento: creare l\u2019espressione seguente utilizzando il pulsante per l'aggiunta degli elementi di riepilogo.",expressionHint:"Suggerimento: selezionare gli elementi e fare clic su Aggiungi per creare un'espressione."},_localized:{}}});