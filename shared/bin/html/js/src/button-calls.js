//:include utils.js
function runTagHandler(referencingNode) {
	var configWithParams = getParametersAndConfigForTagNode(referencingNode);

	if (configWithParams === "red") {
		logError("Please fill all highlighed parameter values.\n " +
				"They are required for tag to run.", 2000);
		return;
	}
	
	var tagRef = referencingNode.reference;
	var url = "/getClassPath?classPath=libraries." +
			tagRef.PACKAGE_NAME + ".local&file=UVConf.js";
	
	GET(url, function (message, xhr) {
		var evalIt = true;
		if (xhr.status !== 200) {
			evalIt = false;
      log("UVConfig not found. Proceeding normally.");
    }
		try {
			if (evalIt) {
				log("Evaluating UVConf.js from " + url); 
				qubit.opentag.Utils.geval(message);
			}
		} catch (ex) {
			error("Exception while running UVConf.js: " + ex);
		} finally {
			runTag(referencingNode, configWithParams);
		}
	});
	 
}
function runTag(referencingNode, configWithParams) {
  try {
    var config = {};
    var clazz = referencingNode.classReference;
    var tagRef = referencingNode.reference;
    
    
    applyParametersAndConfigToTag(config, configWithParams);

    var preVal = tagRef.preNode.value;
    if (String(preVal) !== tagRef.config.pre &&
            String(preVal) !== String(tagRef.pre)) {
      config.pre = extractFunctionOrString(preVal);
    }

    var postVal = tagRef.postNode.value;
    if (String(postVal) !== tagRef.config.post &&
            String(postVal) !== String(tagRef.post)) {
      config.post = extractFunctionOrString(postVal);
    }

    var scriptVal = tagRef.scriptNode.value;
    if (String(scriptVal) !== tagRef.config.script &&
            String(scriptVal) !== String(tagRef.script)) {
      config.script = extractFunctionOrString(scriptVal);
    }

    var instance = new clazz(config);
    info("triggering run() for " + instance.config.name + " ...");
    instance.run();
    var message = "Currently executed tag instance is exposed as: window.instance";
    instance.log.INFO(message);
    info(message + "<br/> Please open web console to see more logs." +
				" To view library the logs run:<pre>\ninstance.log.rePrint(5);\n</pre>" +
				"in web console.", 5000);
    window.instance = instance;
  } catch (ex) {
    logError("Error while executing configuration:" + ex);
  }
}

function saveConfig(refNode) {
  refNode = getLibraryReferenceNode(refNode);
  var tagRef = refNode.reference;
  var params = getParametersAndConfigForTagNode(refNode, true, true);
  
  //rm variables! it must save basics
  for (var i = 0; i < params.parameters.length; i++) {
    params.parameters[i].variable = undefined;
    delete params.parameters[i].variable;
  }
  
  var serial = json.serialize({parameters: params.parameters}, {prettyPrint: true});
  var newPackageName = tagRef.PACKAGE_NAME + ".local";
  var includes = "//:include tagsdk-current.js\n";
  var mkpackage = "qubit.opentag.Utils.namespace('" + newPackageName + "');\n";
  
  var data = "classPath=libraries." +
          tagRef.PACKAGE_NAME + ".local"
          + "&config=" +
          encodeURIComponent(includes + mkpackage + newPackageName +
                            ".Config = " + serial + ";");
  
  POST("/saveConfig", data, function(msg, httpr) {
    if (!qubit.opentag.Utils.gevalAndReturn(msg).ok) {
      logError(msg);
    } else {
      info("Saved");
    }
  });
}

function saveNewVersion(refNode, e) {
	var event = e || window.event;
	event.ignoreEvent = true;
  refNode = getLibraryReferenceNode(refNode);
  var tagRef = refNode.reference;
  var versionName =
            prompt("Please enter the name of the new version, eg 'v1'.\n\n");
  
  if (!versionName) {
    return;
  }
  
  versionName = classPath(versionName);
  var proceed = true; /*confirm(
        "New library version to be created.\n\n" +
        "Version name: " + versionName + "\n\n" +
        "Location: " + (tagRef.PACKAGE_NAME + "." + versionName)
          .replace(/\./g, "/") +
        "\n\n\nPlease confirm.\n\n");*/
  
  if (!proceed) {
    return;
  }
  
	var cpChunks = tagRef.PACKAGE_NAME.split(".");
	//vendor + tag library cp name
	var cp = cpChunks[0] + "." + cpChunks[1];
	
  //var newPackageName = tagRef.PACKAGE_NAME + "." + versionName;  
  var data = "location=libraries&classPath=" +
				tagRef.PACKAGE_NAME + "&version=" + cp + "." + versionName;
  
  POST("/saveNewVersion", data, function(msg, httpr) {
    if (!qubit.opentag.Utils.gevalAndReturn(msg).ok) {
      logError("Error while creating new version: " + msg);
    } else {
      info("Created new version.");
      info("Rebuilding system...", 10000);
      rebuildAndReload();
    }
  });
}

function rebuildAndReload() {
  if (window.buildLocationString) {
    var data = "path=" +  encodeURIComponent(window.buildLocationString);
    GET("/rebuild?" + data, function(msg, httpr) {
      if (!qubit.opentag.Utils.gevalAndReturn(msg).ok) {
        logError("Rebuild failed! " + msg);
      } else {
        info("System has been rebuilt for " + window.buildLocationString, 10000);
        info("Reloading page.");
        location.reload();
      }
    });
  }
}

var editUVURL = "/shared/templates/UVConf.js";
function editUVURLHandler(node) {
	GET(editUVURL, function (message, xhr) {
		if (xhr.status !== 200) {
      logError(message);
    } else {
			editUV(node, message);
		}
	});
}

function editUV(refNode, template) {
  var tagRef = refNode.reference;
  openInEditorAndCreate(
			"libraries." + tagRef.PACKAGE_NAME + ".local",
			"UVConf.js",
			true,
			template);
}

function openInEditorHandler(refNode) {
  var tagRef = refNode.reference;
  openInEditorAndCreate("libraries." + tagRef.PACKAGE_NAME, "Tag.js", false);
}

function openInEditorAndCreate(package, file, create, data) {
  var data = "classPath=" + package
    + "&file=" + file
          + "&create=" + !!create
          + "&data=" +  encodeURIComponent(data);
  POST("/openInEditor", data, function(msg, httpr) {
    if (!qubit.opentag.Utils.gevalAndReturn(msg).ok) {
      logError(msg);
      logError("Make sure that CLASSPATH of your library matches its location!");
    }
  });
}


function reloadTagHandler(refNode) {
  var Utils = qubit.opentag.Utils;
  var tagRef = refNode.reference;
  var data = ("classPath=libraries." +
          tagRef.PACKAGE_NAME + "&file=Tag.js");
  reloadTests(refNode);
  POST("/getClassPath", data, function(msg, httpr) {
    if (httpr.status !== 200) {
      logError("Error loading tag: " + msg);
    }
    try {
      var cfg = getParametersAndConfigForTagNode(refNode, true, true);
      Utils.getObjectUsingPath(tagRef.PACKAGE_NAME).Tag = undefined;
      qubit.opentag.Utils.geval(msg);
      var libraryClass = Utils.getObjectUsingPath(tagRef.PACKAGE_NAME + ".Tag");
      renderLibraryToNode(libraryClass ,null, null, cfg);
    } catch (ex) {
      logError("Error loading tag: " + ex);
    }
  });
}

function cancelEvent(e) {
	if (e.stopPropagation) {
		e.stopPropagation();
	} else {
		e.cancelBubble = true;
	}
}