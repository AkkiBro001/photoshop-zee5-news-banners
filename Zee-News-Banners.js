/*====== Constants Variables =========================================================================================*/
var NEWS_SAVE_FILE_PATH = "D:\\Office Works\\News\\";
var NEWS_MASTER_FILE_PATH = "D:\\Office Works\\News\\";
var NEWS_FILE_NAMES = ["1440_Mobile.psd", "1920_Desktop.psd", "1920_TV.psd"];
var CHANNEL_LIST = ['10 TV', 'Aaj Tak', 'ABN Telugu', 'ABP Ananda', 'ABP Asmita', 'ABP Ganga', 'ABP Majha', 'ABP Nadu', 'ABP News', 'ABP Sanjha', 'ANI', 'Asianet News Bangla', 'Asianet News Hindi', 'Asianet News Tamil', 'Asianet News Telugu', 'Asianet News', 'Asianet Newsable', 'BBC World News', 'BTV', 'CVR News', 'E24', 'Editorji', 'ESPN Cricinfo', 'Euro News', 'GNT', 'India News Gujarat', 'India News Punjab-Himachal', 'India News UP-UK', 'India News', 'India Today', 'INDIA TV', 'Kairali News', 'Latestly', 'Living India News', 'Media News Malayalam', 'News 24', 'News 9', 'News First Kannada', 'News J', 'News Nation', 'News State MP-CH', 'News State UP-UK', 'NewsX', 'NTV Telugu', 'PinkVilla', 'Polimer Tamil', 'Prag News', 'Puthiya Thalaimurai Tamil', 'R bangla', 'Republic Bharat', 'Republic TV', 'Saam TV', 'Sports Flashes', 'Suvarna News', 'TEZ', 'Times Now Navbharat', 'TV5 News', 'TV5 Telugu', 'TV9 Bangla', 'TV9 Bharatvarsh', 'TV9 Gujarati', 'TV9 Kannada', 'TV9 Marathi', 'TV9 Telugu', 'V6 Telugu', 'Vendhar TV', 'Wion', 'Zee 24 Ghanta', 'Zee 24 Kalak', 'Zee 24 Taas', 'Zee Business', 'Zee Hindustan', 'Zee News', 'Zee Punjab Himachal', 'VOD', 'Zee Bihar Jharkhand', 'Boogle Bollywood', 'ZEE MP-CH', 'Nation Next'];
var Main_Channels = ['Aaj Tak', 'ABP News', 'ANI', 'Asianet News Hindi', 'Asianet Newsable', 'BBC World News', 'E24', 'Editorji', 'ESPN Cricinfo', 'Euro News', 'GNT', 'India News UP-UK', 'India News', 'India Today', 'INDIA TV', 'Latestly', 'News 24', 'News 9', 'News J', 'News Nation', 'News State MP-CH', 'News State UP-UK', 'NewsX', 'PinkVilla', 'Republic Bharat', 'Republic TV', 'Sports Flashes', 'TEZ', 'Times Now Navbharat', 'TV9 Bharatvarsh', 'Wion', 'Zee Business', 'Zee Hindustan', 'Zee News', 'Zee Bihar Jharkhand', 'Boogle Bollywood', 'ZEE MP-CH', 'Nation Next']

var Regional_Channles = ['10 TV', 'ABN Telugu', 'ABP Ananda', 'ABP Asmita', 'ABP Ganga', 'ABP Majha', 'ABP Nadu', 'ABP Sanjha', 'Asianet News Bangla', 'Asianet News Tamil', 'Asianet News Telugu', 'Asianet News', 'BTV', 'CVR News', 'India News Gujarat', 'India News Punjab-Himachal', 'Kairali News', 'Living India News', 'Media News Malayalam', 'News First Kannada', 'NTV Telugu', 'Polimer Tamil', 'Prag News', 'Puthiya Thalaimurai Tamil', 'R bangla', 'Saam TV', 'Suvarna News', 'TV5 News', 'TV5 Telugu', 'TV9 Bangla', 'TV9 Gujarati', 'TV9 Kannada', 'TV9 Marathi', 'TV9 Telugu', 'V6 Telugu', 'Vendhar TV', 'Zee 24 Ghanta', 'Zee 24 Kalak', 'Zee 24 Taas', 'Zee Punjab Himachal']

var English_Channels = ['Asianet Newsable', 'BBC World News', 'Euro News', 'India Today', 'News 9', 'NewsX', 'Republic TV', 'Wion', "Nation Next"];

var HPBanners = ["Zee News", "NewsX"]

var FILE_NAME = {
    mobile1: "_1440_Mobile",
    mobile2: "_1170_Mobile",
    desktop: "_1920_Desktop",
    tv: "_1920_TV",
}

var JPG_QUALITY = 100

var NEWS_SIZES = {
    mobile1: [1440, 810, 72],
    mobile2: [1170, 658, 72],
    desktop: [1920, 770, 72],
}

var NEWS_TEMPLATES = {
    regional: {
        channels: Regional_Channles,
        templatePath: "",
        masterFilePath: "E:\\Action\\Templates\\Zee 5 News\\News Creatives\\",
        folderName: "News Banners",
        mobile1: {
            size: { width: 1440, height: 810, res: 72 },
            fileName: "",
        },
        mobile2: {
            size: { width: 1170, height: 658, res: 72 },
            fileName: ""
        },
        desktop: {
            size: { width: 1920, height: 770, res: 72 },
            fileName: ""
        },
    },

    normal: {
        channels: Main_Channels,
        templatePath: "",
        masterFilePath: "E:\\Action\\Templates\\Zee 5 News\\News Creatives Updated\\",
        folderName: "News Banners",
        mobile1: {
            size: { width: 1440, height: 810, res: 72 },
            fileName: "1440_Mobile.psd",
            // fontSize: { twoLine: 128, oneLine: 32 },
            guides: {
                horizontal: [32, 50, 161, 178, 186, 588, 780],
                vertical: [384, 1208, 1240, 1385, 1417]
            },
            requiredLayers: ["Gradient"]


        },
        mobile2: {
            size: { width: 1170, height: 658, res: 72 },
            fileName: "1170_Mobile.psd"
        },
        desktop: {
            size: { width: 1920, height: 770, res: 72 },
            fileName: "1920_Desktop.psd",
            guides: {
                horizontal: [34, 65, 169, 202, 611, 726],
                vertical: [316, 1648, 1676, 1844, 1872]
            },
            requiredLayers: ["Gradient"]

        },
        tv: {
            size: { width: 1920, height: 770, res: 72 },
            fileName: "1920_TV.psd",
            fontSize: { oneLine: 56 },
            guides: {
                horizontal: [16, 48, 83, 111, 152, 184],
                vertical: [230, 1603, 1648, 1677, 1844, 1871]
            },
            textGuides: [[230, 48], [230, 152], [1648, 152], [1648, 48]],
            requiredLayers: ["Gradient", "Text Box", "Text"]

        }


    },

    hp: {
        channels: Main_Channels,
        templatePath: "",
        masterFilePath: "E:\\Action\\Templates\\Zee 5 News\\News Creatives Updated\\",
        folderName: "HP Banners",
        mobile1: {
            size: { width: 1440, height: 810, res: 72 },
            fileName: "_Mobile"
        },
        mobile2: {
            size: { width: 1170, height: 658, res: 72 },
            fileName: "_Mobile"
        },
        desktop: {
            size: { width: 1920, height: 770, res: 72 },
            fileName: "_Desktop"
        },
        tv: {
            size: { width: 1920, height: 770, res: 72 },
            fileName: "_TV"
        },
    },

    hp_android: {
        channels: HPBanners,
        templatePath: "",
        masterFilePath: "E:\\Action\\Templates\\Zee 5 News\\Android Banner News\\",
        folderName: "HP Banners",
        mobile1: {
            size: { width: 1440, height: 810, res: 72 },
            fileName: "1440_Mobile.psd",
            guides: {
                horizontal: [23, 207, 519, 552, 582, 615,],
                vertical: [384, 1223, 1407]
            },
            fontSize: { twoLine: 128, oneLine: 70 },
            textGuides: [[384, 478], [384, 655], [1440, 655], [1440, 478]],
            requiredLayers: ["Gradient", "Text Box", "Text", "Logo Circle"]

        },
        mobile2: {
            size: { width: 1170, height: 658, res: 72 },
            fileName: "1170_Mobile.psd"
        },
        desktop: {
            size: { width: 1920, height: 770, res: 72 },
            fileName: "1920_Desktop.psd",
            guides: {
                horizontal: [9, 221, 640, 669],
                vertical: [316, 1658, 1868]
            },
            textGuides: [[316, 605], [316, 703], [1920, 703], [1920, 605]],
            fontSize: { oneLine: 58 },
            requiredLayers: ["Gradient", "Text Box", "Text", "Logo Circle"]

        },
        tv: {
            size: { width: 1920, height: 770, res: 72 },
            fileName: "1920_TV.psd",
            guides: {
                horizontal: [9, 84, 112, 221],
                vertical: [230, 1613, 1658, 1868]
            },
            textGuides: [[0, 50], [0, 148], [1613, 148], [1613, 50]],
            fontSize: { oneLine: 58 },
            requiredLayers: ["Gradient", "Text Box", "Text", "Logo Circle"]
        },
    },

    vod: {
        channels: CHANNEL_LIST,
        templatePath: "",
        masterFilePath: "E:\\Action\\Templates\\Zee 5 News\\News Creatives Updated\\",
        folderName: "VOD Banners",
        mobile1: {
            size: { width: 1440, height: 810, res: 72 },
            fileName: "_Mobile"
        },
        mobile2: {
            size: { width: 1170, height: 658, res: 72 },
            fileName: "_Mobile"
        },
        desktop: {
            size: { width: 1920, height: 770, res: 72 },
            fileName: "_Desktop"
        },
        tv: {
            size: { width: 1920, height: 770, res: 72 },
            fileName: "_TV"
        },
    }
}


/*====== Default Function =========================================================================================*/
function hasTransparancy() {
    var transp = true;

    var d = new ActionDescriptor();

    var r = new ActionReference();

    r.putProperty(charIDToTypeID("Chnl"), charIDToTypeID("fsel"));

    d.putReference(charIDToTypeID("null"), r);

    var r2 = new ActionReference();

    r2.putEnumerated(charIDToTypeID("Chnl"), charIDToTypeID("Chnl"), charIDToTypeID("Trsp"));

    r2.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Mrgd"));

    d.putReference(charIDToTypeID("T   "), r2);

    try {

        executeAction(charIDToTypeID("setd"), d, DialogModes.NO);

        activeDocument.selection.invert();

        try { activeDocument.selection.bounds; } catch (e) { transp = false; }

    }

    catch (e) { transp = false; }

    activeDocument.selection.deselect();

    if (transp) {
        return true
    } else {
        return false
    }

}

function selectAllLayers() {

    cTID = function (s) { return cTID[s] || (cTID[s] = app.charIDToTypeID(s)); };
    sTID = function (s) { return app.stringIDToTypeID(s); };

    var ref = new ActionReference();
    ref.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    var desc = new ActionDescriptor();
    desc.putReference(cTID('null'), ref);
    executeAction(sTID('selectAllLayers'), desc, DialogModes.NO);

}

function groupLayersets() {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putClass(stringIDToTypeID('layerSection'));
    desc.putReference(charIDToTypeID('null'), ref);
    var ref = new ActionReference();
    ref.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
    desc.putReference(charIDToTypeID('From'), ref);

    executeAction(charIDToTypeID('Mk  '), desc, DialogModes.NO);

};

function savePSD(saveFile) {
    var psdFile = new File(saveFile);
    psdSaveOptions = new PhotoshopSaveOptions();
    psdSaveOptions.embedColorProfile = true;
    psdSaveOptions.alphaChannels = true;
    activeDocument.saveAs(psdFile, psdSaveOptions, false, Extension.LOWERCASE);
}

function saveForWeb(saveFile, jpegQuality) {
    var sfwOptions = new ExportOptionsSaveForWeb();
    sfwOptions.format = SaveDocumentType.JPEG;
    sfwOptions.includeProfile = false;
    sfwOptions.interlaced = 0;
    sfwOptions.optimized = true;
    sfwOptions.quality = jpegQuality; //0-100   
    app.activeDocument.exportDocument(File(saveFile), ExportType.SAVEFORWEB, sfwOptions);
}


function saveJPGFile(filePath) {
    var jpegOptions = new JPEGSaveOptions();
    jpegOptions.quality = 12;
    jpegOptions.embedColorProfile = true;
    jpegOptions.matte = MatteType.NONE;
    app.activeDocument.saveAs(new File(filePath), jpegOptions, true);
}

function select_layer(nm, add) {

    try {

        var r = new ActionReference();

        r.putName(stringIDToTypeID("layer"), nm);

        var d = new ActionDescriptor();

        d.putReference(stringIDToTypeID("null"), r);

        if (add == true) d.putEnumerated(stringIDToTypeID("selectionModifier"), stringIDToTypeID("selectionModifierType"), stringIDToTypeID("addToSelection"));

        executeAction(stringIDToTypeID("select"), d, DialogModes.NO);

    }

    catch (e) { alert(e); throw (e); }

}

function findLayer(ref, name) {
    // declare local variables
    var layers = ref.layers;
    var len = layers.length;
    var match = false;

    // iterate through layers to find a match
    for (var i = 0; i < len; i++) {
        // test for matching layer
        var layer = layers[i];
        if (layer.name.toLowerCase() == name.toLowerCase()) {
            // select matching layer
            activeDocument.activeLayer = layer;
            match = true;
            break;
        }
        // handle groups (layer sets)
        else if (layer.typename == 'LayerSet') {
            match = findLayer(layer, name);
            if (match) {
                break;
            }
        }
    }
    return match;
}

function InteractiveTransform() {

    cTID = function (s) { return app.charIDToTypeID(s); };

    sTID = function (s) { return app.stringIDToTypeID(s); };


    var desc1 = new ActionDescriptor();

    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Mn  '), cTID('MnIt'), cTID('FrTr'));

    desc1.putReference(cTID('null'), ref1);

    //For Error Appears for this syntex if not transform element
    //So used try catch for ignore error
    try {
        executeAction(cTID('slct'), desc1, DialogModes.NO);
    } catch (e) { }

}

function align(method) {
    var desc = new ActionDescriptor();

    var ref = new ActionReference();

    ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));

    desc.putReference(charIDToTypeID("null"), ref);

    desc.putEnumerated(charIDToTypeID("Usng"), charIDToTypeID("ADSt"), charIDToTypeID(method));

    try {

        executeAction(charIDToTypeID("Algn"), desc, DialogModes.NO);

    }

    catch (e) { }

}

function ungroupLayerset() {
    var m_Dsc01 = new ActionDescriptor();
    var m_Ref01 = new ActionReference();
    m_Ref01.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
    m_Dsc01.putReference(cTID("null"), m_Ref01);

    executeAction(sTID("ungroupLayersEvent"), m_Dsc01, DialogModes.NO);

    function cTID(s) { return charIDToTypeID(s) }
    function sTID(s) { return stringIDToTypeID(s) }
}

function openAllFilesFromFolder(folderPath, extention){
    
    
    if(extention === "psd"){

        for(i = !(fls = Folder(folderPath).getFiles(/.psd$/i)); i < fls.length;) open(fls[i++])
    }else if(extention === "jpg"){
        for(i = !(fls = Folder(folderPath).getFiles(/.jpg$/i)); i < fls.length;) open(fls[i++])

    }
}

/*====== Custom Function =========================================================================================*/
function grabDateFolders() {
    var date = new Date();
    var Month = (function () {
        var m = date.getMonth() + 1;
        if (m.toString().length === 1) {
            return "0" + m;
        } else {
            return m;
        }
    })();

    var dataArr = date.toLocaleDateString().split(" ");

    return {
        Year: date.getFullYear(),
        Month: Month + "-" + dataArr[1],
        Date: dataArr[2] + "-" + Month + "-" + date.getFullYear(),
        FolderPath: date.getFullYear() + '\\' + Month + "-" + dataArr[1] + '\\' + dataArr[2] + "-" + Month + "-" + date.getFullYear()
    }

}

function channelList(TypeOfTemplate) {


    var channelsList = NEWS_TEMPLATES[TypeOfTemplate]["channels"]


    var list = "";

    for (var i = 0; i < channelsList.length; i++) {
        list += i + ":\t" + channelsList[i] + "\n";
    }

    alert(list, "Channel List")
    var index = prompt("Select Channel Index\nBetween 0-" + (channelsList.length - 1), "")
    if (isNaN(index) || index == "" || parseInt(index) < 0 || parseInt(index) > channelsList.length - 1) return null;
    return channelsList[index];
}

function savePathGenrator(channel, isRef, tempType, fileName, extention) {
    var path = NEWS_SAVE_FILE_PATH + grabDateFolders().FolderPath + "\\" + NEWS_TEMPLATES[tempType]["folderName"];
    var counter = 1;

    function isPathExists() {
        if (isRef) {
            var Ref = "Ref"
        } else {
            var Ref = "";
        }
        var folderPath = new Folder(path + "\\" + channel + "\\" + Ref)
        if (!folderPath.exists) {
            folderPath.create()
            return path + "\\" + channel + "\\" + Ref
        } else {
            folderPath = new Folder(path + "\\" + channel + "_" + counter + "\\" + Ref)
            if (folderPath.exists) {
                counter++;
                return isPathExists()
            } else {
                folderPath.create()
                return path + "\\" + channel + "_" + counter + "\\" + Ref
            }
        }
    }

    if (fileName === null && extention === null) {
        return isPathExists()
    }
    //!For HP to Normal Banners
    else {
        return isPathExists() + "\\" + fileName + extention
    }
}

function pathGenerator(documentInfo, fileName, extention) {
    if (!documentInfo["isRef"]) {

        var cleanPath = documentInfo["docPath"]["cleanPath"];
        return cleanPath + "\\" + documentInfo["channelName"] + fileName + extention
    }
}

function handleUnsaveRefFile(doc) {
    alert("Select Template Type\n1:\tRegional\n2:\tNormal\n3:\tHP\n4:\tHP Android\n5:\tVOD", "Type Of Templates")
    var TypeOfTemplate = prompt("Enter Index of Template", "1");
    if (TypeOfTemplate == "" || isNaN(TypeOfTemplate) || parseInt(TypeOfTemplate) > 5 || parseInt(TypeOfTemplate) < 1) return alert("Wrong Input", false)
    var tempType;

    switch (TypeOfTemplate) {
        case "1": tempType = "regional";
            break;
        case "2": tempType = "normal";
            break;
        case "3": tempType = "hp";
            break;
        case "4": tempType = "hp_android";
            break;
        case "5": tempType = "vod";
            break;
        default:
            break;
    }

    var channel = channelList(tempType)

    if (hasTransparancy() || doc.layers.length > 1) { //save PSD
        selectAllLayers()
        groupLayersets()
        doc.activeLayer.name = "Image";

        if (channel == null) return alert("Wrong Input", "Error", false)
        var fileName = prompt("Enter File Name", "untitled")
        savePSD(savePathGenrator(channel, true, tempType, fileName, ".psd"))
    } else { //save JPG
        if (channel == null) return alert("Wrong Input", "Error", false)
        var fileName = prompt("Enter File Name", "untitled")
        var filePath = savePathGenrator(channel, true, tempType, fileName, ".jpg")
        saveJPGFile(filePath);
        doc.close(SaveOptions.DONOTSAVECHANGES)
        app.open(new File(filePath))
    }
}

function docInfo(doc) {
    var docPath = doc.path;

    var pathArr = (function () {
        return docPath.toString().replace(/%20/g, ' ').split("/").slice(1)
    })()

    var isRef = pathArr[pathArr.length - 1] == "Ref"

    var channelName;
    if (isRef) {
        channelName = pathArr[pathArr.length - 2]
    } else {
        channelName = pathArr[pathArr.length - 1]
    }

    if (channelName.indexOf("_") > -1) {
        channelName = channelName.split("_")[0]
    }

    var typeOfBanner, category;
    for (var i = 0; i < pathArr.length; i++) {

        if (pathArr[i] == "News") {
            category = pathArr[i];
        }

        if (pathArr[i].indexOf("Banners") > -1) {
            typeOfBanner = pathArr[i];
        }

    }

    var isHPBanner = HPBanners.join("_").indexOf(channelName) > -1 && typeOfBanner === "HP Banners";
    var template
    if (isHPBanner) {
        template = "hp_android"
    } else if (Regional_Channles.join("-").indexOf(channelName) > -1) {
        template = "regional"
    } else {
        template = "normal"
    }

    return {
        docName: doc.name.split(".")[0],
        docExtention: doc.name.split(".")[doc.name.split(".").length - 1],
        docWidth: doc.width.value,
        docHeight: doc.height.value,
        docRes: doc.resolution,
        docPath: {
            normalPath: docPath,
            cleanPath: pathArr[0] + ':\\' + pathArr.slice(1).join("\\"),
            arrPath: pathArr
        },
        isRef: isRef,
        category: category,
        channelName: channelName,
        typeOfBanner: typeOfBanner,
        isHPBanner: isHPBanner,
        template: template,
    }



}

function ResizeImage(Category, TargetSize, doc) {
    var scale = Math.max(TargetSize.width / doc.width.value, TargetSize.height / doc.height.value)
    if (Category == "News") {



        if (doc.width.value * scale == TargetSize.width) {
            doc.resizeImage(UnitValue(doc.width.value * scale, "px"), null, TargetSize.res, ResampleMethod.BICUBIC); //For Width
            doc.resizeCanvas(null, UnitValue(TargetSize['height'], "px"), AnchorPosition.TOPCENTER); //For Height
        } else {

            doc.resizeImage(null, UnitValue(doc.height.value * scale, "px"), TargetSize.res, ResampleMethod.BICUBIC); //For Height
            doc.resizeCanvas(UnitValue(TargetSize['width'], "px"), null, AnchorPosition.MIDDLECENTER); //For Width
        }

    }
}

function createGuides(guides) {
    var doc = app.activeDocument;
    for (var h = 0; h < guides["horizontal"].length; h++) {
        doc.guides.add(Direction.HORIZONTAL, guides["horizontal"][h]);
    }

    for (var v = 0; v < guides["vertical"].length; v++) {
        doc.guides.add(Direction.VERTICAL, guides["vertical"][v]);
    }
}

function grabLayersFromTemp(doc, tempDoc, layerList, channel, template) {

    

    if (doc.name.indexOf("_Desktop") > -1 && HPBanners.join("-").indexOf(channel) > -1 && template === "hp_android") {
        var tempArr = [];
        for (var i = 0; i < layerList.length; i++) {
            if (layerList[i] != "Text") {
                tempArr.push(layerList[i])
            }
        }

        layerList = tempArr;
    }

    app.activeDocument = tempDoc;
    if (typeof layerList == "object") {
        for (var layer = 0; layer < layerList.length; layer++) {

            if (findLayer(tempDoc, layerList[layer])) {
                if (layerList[layer] === "Text" && English_Channels.join("_").indexOf(channel) === -1) {
                    continue;
                } else {

                    tempDoc.activeLayer.duplicate(doc, ElementPlacement.PLACEATBEGINNING)
                }

            }

        }

        if (channel) {
            findLayer(tempDoc, channel)
            tempDoc.activeLayer.duplicate(doc, ElementPlacement.PLACEATBEGINNING)
        }
    }
}

function grabBannerTemplate(doc, documentInfo, format) {
    var template = documentInfo.template;

    var requiredLayers = NEWS_TEMPLATES[template][format]["requiredLayers"];
    var guides = NEWS_TEMPLATES[template][format]["guides"];
    var FileName = NEWS_TEMPLATES[template][format]["fileName"];
    var channel = documentInfo["channelName"];


    app.open(new File(NEWS_TEMPLATES[template]["masterFilePath"] + NEWS_TEMPLATES[template][format]["fileName"]))
    var tempDoc = app.activeDocument;
    grabLayersFromTemp(doc, tempDoc, requiredLayers, channel, template)

    tempDoc.close(SaveOptions.DONOTSAVECHANGES)
    app.activeDocument = doc;
    select_layer("Image")
    clearGuides()
    createGuides(guides)
    if(template === "normal" && HPBanners.join("_").indexOf(channel) > -1){
        //No InteractiveTransform for HP to Normal Banners.
    }else{
        InteractiveTransform()
    }
    var path = documentInfo["docPath"]["cleanPath"].replace(/Ref/g, "")
    savePSD(path + '\\' + channel + "_" + FileName)

}


function isEnglishBanners(doc, channel) {
    if (English_Channels.join("-").indexOf(channel) == -1) {
        if (findLayer(doc, "Text")) {
            doc.activeLayer.remove()
        }
        return false;

    } else {
        if (findLayer(doc, "Text")) {

            return true;
        }
    }
}

function processVectorText(doc, documentInfo, format) {
    var template = documentInfo["template"]
    var FontHeight = NEWS_TEMPLATES[documentInfo["template"]][format]["fontSize"];
    var TextGuides = NEWS_TEMPLATES[documentInfo["template"]][format]["textGuides"];
    if (format !== "tv" || (format === "tv" && template === "normal")) {
        var actLyr = doc.activeLayer;
        actLyr.move(doc.layers.getByName('Text Box'), ElementPlacement.PLACEBEFORE)
        var lyrWidth = actLyr.bounds[2] - actLyr.bounds[0]; //Grab the W value
        var lyrHeight = actLyr.bounds[3] - actLyr.bounds[1]; //Grab the H value

        app.documents.add(lyrWidth, lyrHeight, documentInfo["docRes"], "TextDoc", NewDocumentMode.RGB, DocumentFill.TRANSPARENT);

        var TextDoc = app.activeDocument;

        app.activeDocument = doc;
        doc.activeLayer.duplicate(TextDoc, ElementPlacement.PLACEATBEGINNING)
        app.activeDocument = TextDoc;
        TextDoc.selection.selectAll()
        align('AdCH');
        align('AdCV');
        TextDoc.activeLayer.name = "Text";

        if (documentInfo["docName"].indexOf("1440") > -1 && documentInfo["docWidth"] == 1440) {
            if (TextDoc.width.value > 45) {
                TextDoc.resizeImage(null, UnitValue(FontHeight["twoLine"], "px"), null, ResampleMethod.BICUBIC);
            } else {
                TextDoc.resizeImage(null, UnitValue(FontHeight["oneLine"], "px"), null, ResampleMethod.BICUBIC);
            }
        } else {

            TextDoc.resizeImage(null, UnitValue(FontHeight["oneLine"], "px"), null, ResampleMethod.BICUBIC);
        }

        TextDoc.activeLayer.duplicate(doc.layers.getByName("Text Box"), ElementPlacement.PLACEBEFORE)

        TextDoc.close(SaveOptions.DONOTSAVECHANGES)

        app.activeDocument = doc;

        if (findLayer(app.activeDocument, "Vector Smart Object")) {
            doc.activeLayer.remove()
        }
        select_layer("Text")
    }



    doc.selection.select(TextGuides)

    align('AdCV');

    if (template == 'hp_android' && format == "tv") {
        align('AdRg');
    } else {

        align('AdLf');
    }

    doc.selection.deselect()

    InteractiveTransform()

    select_layer("Text")
    select_layer("Text Box", true)
    groupLayersets()
    doc.activeLayer.name = "Text Element"

}

function clearGuides() {
    for (i = 0; i < app.activeDocument.guides.length; i++) {
        app.activeDocument.guides[i].remove();
        i--
    }
}

function deleteLayers(doc, exception) {

    var layers_bucket = []

    for (var d = 0; d < doc.layers.length; d++) {

        if (exception.join("-").indexOf(doc.layers[d].name) === -1) {
            layers_bucket.push(doc.layers[d])
        }

    }

    for (var d = 0; d < layers_bucket.length; d++) {
        select_layer(layers_bucket[d].name)
        doc.activeLayer.remove()
    }


}

function SaveForWebBulk() {

    for (var doc = app.documents.length - 1; doc >= 0; doc--) {

        var activeDocument = app.documents[doc]
        app.activeDocument = activeDocument;
        var path = String(activeDocument.path + "/" + activeDocument.name.replace(".psd", ".jpg"), 100)
        saveForWeb(path, JPG_QUALITY)
        activeDocument.close(SaveOptions.SAVECHANGES)
    }
}


function process_HP_to_Normal(doc, documentInfo) {
    var docCleanPath = documentInfo.docPath.cleanPath;
    var channel = documentInfo.channelName;
    var template = documentInfo.template;
    var docName = documentInfo.docName;
    //!Open All HP files (1920_Desktop & 1920_TV)
    app.open(new File(docCleanPath + "\\" + doc.name.replace(/_\d+_\w+/g, "_1920_Desktop")))
    app.open(new File(docCleanPath + "\\" + doc.name.replace(/_\d+_\w+/g, "_1920_TV")))

    var NormalBannersSavePath = savePathGenrator(channel, false, "normal", null, null)

    //!Go throw all banners and process one by one
    for (var doc = 0; doc < app.documents.length; doc++) {
        var activeDoc = app.documents[doc]
        app.activeDocument = activeDoc;

        //*Delete unwanted layers
        if (activeDoc.name.indexOf("_1920_TV") > -1) {
            if (findLayer(activeDoc, "Text Element")) {
                ungroupLayerset()
            }
            deleteLayers(activeDoc, ["Text", "Image"])
        } else {
            deleteLayers(activeDoc, ["Image"])
        }

        savePSD(NormalBannersSavePath + activeDoc.name)

        var activeDocInfo = docInfo(activeDoc);
        var template = activeDocInfo.template;

        //*Process Normal 1440_Mobile & 1170_Mobile
        if (activeDocInfo.docName.indexOf("_1440_Mobile") > -1) {
            
            grabBannerTemplate(activeDoc, activeDocInfo, "mobile1")

            

            activeDoc.resizeImage(null, UnitValue(NEWS_TEMPLATES[template]["mobile2"]["size"]["height"], "px"), null, ResampleMethod.BICUBIC);

            savePSD(NormalBannersSavePath + activeDoc.name.replace("1440", "1170"))
        }

        //*Process Normal 1920_Desktop
        else if(activeDocInfo.docName.indexOf("_1920_Desktop") > -1){
            grabBannerTemplate(activeDoc, activeDocInfo, "desktop")

        //*Process Normal 1920_TV   
        }else{
            if(findLayer(activeDoc, "Text")){

                var getTextCopy = activeDoc.activeLayer.textItem.contents;
                activeDoc.activeLayer.remove()
            }
            grabBannerTemplate(activeDoc, activeDocInfo, "tv")
            if(findLayer(activeDoc, "Text")){
                activeDoc.activeLayer.move (activeDoc.layers.getByName('Text Box') , ElementPlacement.PLACEBEFORE)
                activeDoc.activeLayer.textItem.contents = getTextCopy;
                //Align Text
                activeDoc.selection.select(NEWS_TEMPLATES[template]["tv"]["textGuides"])
                align('AdCV')
                align('AdLf')
                activeDoc.selection.deselect()
            }
            
        }

        activeDoc.save()
    }

    openAllFilesFromFolder(NormalBannersSavePath, "psd");

    

}


/*====== Initial Function =========================================================================================*/
function init(msg) {

    if (!msg) msg = "Do you want to process ";
    preferences.rulerUnits = Units.PIXELS

    if (app.documents.length === 0) return

    //!1. Check if file is saved
    var doc = app.activeDocument;
    try {
        var docPath = doc.path;
    } catch (e) {
        handleUnsaveRefFile(doc)
        return init()
    }

    //!2. Extract Information from file
    var documentInfo = docInfo(doc)
    var docName = documentInfo.docName;
    var docExt = documentInfo.docExtention;
    var channel = documentInfo.channelName;
    var template = documentInfo.template;
    var docCleanPath = documentInfo.docPath.cleanPath;
    var isReady_convert_hp_to_normal = false;

    if (template === "hp_android" && docName.indexOf("_1440_Mobile") > -1 && docExt == "psd") {
        var TVFile = new File(documentInfo.docPath.cleanPath + "\\" + doc.name.replace(/_\d+_\w+/g, "_1920_TV"))
        if (TVFile.exists) {
            isReady_convert_hp_to_normal = true
        }

    }

    if (documentInfo.category === "News") {

        //!Process JPG to Open All documents
        if ((app.documents.length === 4 || app.documents.length === 3) && !documentInfo.isRef) {

            if (template === "hp_android") {

                var mobile1File = documentInfo.docPath.cleanPath + "\\" + doc.name.replace(/_\d+_\w+/g, "_1440_Mobile");
            }

            if (confirm("Do you want to process JPG for all files ?")) {

                SaveForWebBulk()

                //*intial action for HP to Normal Banner
                if (template === "hp_android" && confirm("Do you want to convert HP Banners to Normal Banners ?")) {
                app.open(new File(mobile1File))
                return init()
                }
            }

            

        }

        //*convert HP Banners to Normal Banners
        else if (isReady_convert_hp_to_normal && template === "hp_android") {
            process_HP_to_Normal(doc, documentInfo)
        }

        //*Process 1440 Mobile
        else if (documentInfo.isRef && confirm(msg + documentInfo.category)) {
            if (docExt === "jpg") {

                executeAction(stringIDToTypeID("newPlacedLayer"))
                doc.activeLayer.name = "Image"
            }

            //!4. Resize Image (1440 x 810)
            ResizeImage(documentInfo.category, NEWS_TEMPLATES[template]["mobile1"]["size"], doc);

            //!5. Grab Templates (1440 x 810)
            grabBannerTemplate(doc, documentInfo, "mobile1")




            if (isEnglishBanners(doc, channel) && (template === "hp" || template === "hp_android")) {
                doc.activeLayer.textItem.contents = prompt("Enter English Copy", "")
                select_layer("Text")
                select_layer("Text Box", true)
                groupLayersets()
                doc.activeLayer.name = "Text Element"
                select_layer("Text Element")
            }


        }

        //*Process Text
        else if (docName.indexOf("_1440_Mobile") > -1 && docExt == "psd" && findLayer(doc, "Vector Smart Object")) {

            processVectorText(doc, documentInfo, "mobile1")

            doc.save()


        }

        //*Process 1170 mobile & 1920 desktop
        else if (docName.indexOf("_1440_Mobile") > -1 && docExt == "psd") {
            doc.save()
            doc.duplicate()
            var tempDoc = app.activeDocument;
            tempDoc.resizeImage(null, UnitValue(NEWS_TEMPLATES[template]["mobile2"]["size"]["height"], "px"), null, ResampleMethod.BICUBIC);
            savePSD(docCleanPath + "\\" + channel + "_" + NEWS_TEMPLATES[template]["mobile2"]["fileName"])
            tempDoc.close(SaveOptions.DONOTSAVECHANGES)

            //*Process 1920 Desktop
            deleteLayers(doc, ["Image"])


            ResizeImage(documentInfo.category, NEWS_TEMPLATES[template]["desktop"]["size"], doc);

            grabBannerTemplate(doc, documentInfo, "desktop")



            if (isEnglishBanners(doc, channel) && (template === "hp" || template === "hp_android")) {
                doc.activeLayer.textItem.contents = prompt("Enter English Copy", "")

                select_layer("Text")
                select_layer("Text Box", true)
                groupLayersets()
                doc.activeLayer.name = "Text Element"
            }
            doc.save()

        }

        //*1920 desktop text
        else if (docName.indexOf("_1920_Desktop") > -1 && docExt == "psd" && findLayer(doc, "Vector Smart Object")) {

            processVectorText(doc, documentInfo, "desktop")

            doc.save()
        }

        //*1920 TV
        else if (docName.indexOf("_1920_Desktop") > -1 && docExt == "psd") {
            if (findLayer(doc, "Text Element")) {

                ungroupLayerset()

                deleteLayers(doc, ["Text", "Image"])
            } else {
                deleteLayers(doc, ["Image"])
            }

            grabBannerTemplate(doc, documentInfo, "tv")
            if (template === "hp_android") {


                //*Process existing Text
                select_layer("Text");
                doc.activeLayer.move(doc.layers.getByName('Text Box'), ElementPlacement.PLACEBEFORE)

                processVectorText(doc, documentInfo, "tv")
                doc.save()

            } else {


                if (template === "normal" && English_Channels.join("_").indexOf(channel) > -1) {
                    select_layer("Text")
                    var copyText = prompt("Paste English Copy Here", "")
                    doc.activeLayer.textItem.contents = copyText;

                } else if (template === "normal") {
                    return
                }
            }

            

            //!Open all psd file from current folder
            
            openAllFilesFromFolder(documentInfo.docPath.cleanPath , "psd")


            // if (template !== "regional") {

            //     app.open(new File(pathGenerator(documentInfo, FILE_NAME.mobile1, ".psd")))
            //     app.open(new File(pathGenerator(documentInfo, FILE_NAME.mobile2, ".psd")))
            //     app.open(new File(pathGenerator(documentInfo, FILE_NAME.desktop, ".psd")))
            //     app.open(new File(pathGenerator(documentInfo, FILE_NAME.tv, ".psd")))
            // }

            return init()

        }
        //*Process TV for Normal Banners
        else if (docName.indexOf("_1920_TV") > -1 && docExt == "psd" && template === "normal" && findLayer(doc, "Vector Smart Object")) {
            processVectorText(doc, documentInfo, "tv")
            doc.save()
            
            //!Open all psd file from current folder
            openAllFilesFromFolder(documentInfo.docPath.cleanPath, "psd")
            // app.open(new File(pathGenerator(documentInfo, FILE_NAME.mobile1, ".psd")))
            // app.open(new File(pathGenerator(documentInfo, FILE_NAME.mobile2, ".psd")))
            // app.open(new File(pathGenerator(documentInfo, FILE_NAME.desktop, ".psd")))
            // app.open(new File(pathGenerator(documentInfo, FILE_NAME.tv, ".psd")))

            return init()
        }


    } else {
        alert("Opps")
    }

}

init()