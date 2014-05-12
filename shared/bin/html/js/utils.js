
function fitTextarea(txta) {
  if (txta.tagName.toLowerCase() === "textarea") {
    txta.style.overflow = 'hidden';//IE...
    txta.style.height = "0px";
    txta.scrollHeight;//...workaround
    txta.style.height = (25 + txta.scrollHeight) + "px";
    txta.style.overflow = '';//...
  }
}

function nextNode(from) {
  while (!from.tagName) {
    from = from.nextSibling;
  }
  return from;
}

function toggleShowSibling(start) {
  var next = start.nextSibling;
  while (next && !next.style) {
    next = next.nextSibling;
  }

  if (next) {
    var cmEditorAttachedAndHidden =
            next.cmNode && next.cmNode.style.display === "none";
    if (cmEditorAttachedAndHidden) {
      next.cmNode.style.display = "";
    } else if (!next.cmNode && next.style.display === "none") {
      next.style.display = "";
      if (next.tagName === "TEXTAREA") {
        attachEditor(next);
      }
      fitTextarea(next);
    } else {
      next.style.display = "none";
      if (next.cmNode) {
        next.cmNode.style.display = "none";
      }
    }
  }
}

function attachEditor(node) {
  node.cm = CodeMirror.fromTextArea(node, {
        lineNumbers: true,
        mode: "javascript",
        theme: "ambiance",
        tabMode: "indent",
        matchBrackets: true
      });
  node.cm.on("change", function() {
    node.value = node.cm.getValue();
  });
  node.cmNode = node.nextSibling;
}

function getParametersAndConfigForTagNode(referencingNode, ignoreRed, paramsOnly) {
  var inputs = referencingNode.getElementsByTagName("input");
  var tagRef = referencingNode.reference;
  var config = tagRef.config;
  for (var i = 0; i < inputs.length; i++) {
    if (!ignoreRed) {
      if (inputs[i].className.indexOf("red") !== -1) {
        return "red";
      }
    }

    if (inputs[i].pindex !== undefined) {
      var idx = inputs[i].pindex;
      config.parameters[idx].inputVariable = inputs[i].value;
      if (inputs[i].value) {
        try {
          var variable = qubit.opentag.Utils.gevalAndReturn(inputs[i].value);
          config.parameters[idx].variable = {
            value: variable
          };
        } catch (ex) {
          logError("Error reading configuration" + ex);
        }
      }
    } else if (!paramsOnly && inputs[i].cname !== undefined) {
      config[inputs[i].cname] = inputs[i].value;
    }
  }
  
  if (paramsOnly) {
    return {parameters: config.parameters};
  }
  return config;
}

function applyParametersAndConfigToTag(config, results) {
    config.parameters = results.parameters;
    for (var prop in results) {
      config[prop] = results[prop];
    }
}

function testTag(referencingNode) {
  try {
    var config = {};
    var clazz = referencingNode.classReference;
    var tagRef = referencingNode.reference;
    var results = getParametersAndConfigForTagNode(referencingNode);
    
    if (results === "red") {
      logError("Please fill all highlighed parameter values.\n They are required for tag to run.", 2000);
      return;
    }
    
    applyParametersAndConfigToTag(config, results);

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
    info("triggering run() for " + instance.config.name);
    instance.run();
    var message = "Currently executed tag instance is exposed as: window.instance";
    instance.log.INFO(message);
    info(message + "<br/> Please open web console to see more logs.", 5000);
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

function classPath(string) {
  if (string) {
    var chunks = string.split(".");
    for (var i = 0 ; i< chunks.length; i++) {
        var chunk = chunks[i];
        chunk = chunk.replace(/[\W+]/g, "");
        chunk = chunk.replace(/^\d+/g, "");
        chunks[i] = chunk;
    }
    var result = chunks.join(".");
    return result
            .replace(/^[\.]+/g, "")
            .replace(/[\.]+$/g, "")
            .replace(/\.+/g,".");
  } else {
    return string;
  }
}

function saveNewVersion(refNode) {
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
  
  //var newPackageName = tagRef.PACKAGE_NAME + "." + versionName;  
  var data = "location=libraries&classPath=" +
          tagRef.PACKAGE_NAME
          + "&version=" + versionName;
  
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


function openInEditor(refNode) {
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

function getLibraryReferenceNode(node) {
  while(node !== null && !node.reference) {
    node = node.parentNode;
  }
  return node;
}

function reloadTag(refNode) {
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

window.__tmp__qubit__test_page_8_ = null;
function extractFunctionOrString(expr) {
  var nexpr = qubit.opentag.Utils.trim(expr);
  if (nexpr.indexOf("function") === 0) {
    qubit.opentag.Utils.geval("window.__tmp__qubit__test_page_8_=" + nexpr);
    return window.__tmp__qubit__test_page_8_;
  } else {
    return expr;
  }
}

//============== XHR ==========
var IS_IE = false;
if (navigator.appName.indexOf("Internet Explorer") !== -1) {
  IS_IE = true;
}

function getXMLHttpRequest() {
  var request;
  try {
    request = new ActiveXObject("Microsoft.XMLHTTP");
  } catch (e) {
    try {
      request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        request = new XMLHttpRequest();
      } catch (e) {
        throw "Your browser does not support AJAX!";
      }
    }
  }
  if (!IS_IE) {
    request.onerror = function onerror() {
      //("Loading Error occured, check your connection and try again.");
    };
  } else {
    window.onerror = function onerror() {
      //("Loading Error occured, check your connection and try again.");
    };
  }
  return request;
}

function GET(url, callback, async) {
  var xmlhttp = getXMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4) {
      callback(xmlhttp.responseText, xmlhttp);
    }
  };
  async = (async === undefined) ? true : async;
  try {
    xmlhttp.onerror = function (e) {
      logError("Error while sending GET:" + e);
    };
  } catch (ex) {}

//  xmlhttp.setRequestHeader("Cache-Control", "no-cache, must-revalidate");
//  xmlhttp.setRequestHeader("Pragma", "no-cache");
  xmlhttp.open("GET", fakeParam(url), async);
  xmlhttp.send();
}

function POST(url, data, callback, async) {
  var xmlhttp = getXMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4) {
      callback(xmlhttp.responseText, xmlhttp);
    }
  };
  async = (async === undefined) ? true : async;
  try {
    xmlhttp.onerror = function (e) {
      logError("Error while sending POST:" + e);
    };
  } catch (ex) {}
//  xmlhttp.setRequestHeader("Cache-Control", "no-cache, must-revalidate");
//  xmlhttp.setRequestHeader("Pragma", "no-cache");
  xmlhttp.open("POST", fakeParam(url), async);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(data);
}

function fakeParam(url) {
  if (url && url.lastIndexOf('?') !== -1) {
    return url + '&fparam=' + (new Date().getTime()) * Math.random();
  } else {
    return url + '?fparam=' + (new Date().getTime()) * Math.random();
  }
}

/* codes
 !,      *       '       (       )       ;       :       @       &       =       +       $       ,       /       ?       %       #       [       ]
 %21     %2A     %27     %28     %29     %3B     %3A     %40     %26     %3D     %2B     %24     %2C     %2F     %3F     %25     %23     %5B     %5D
 */
//function encodeAmp(str) {
//  return str.replace('\\', ' ', 'g')
//            .replace('|', '%7C', 'g')
//            .replace('%', '%25', 'g')
//            .replace('&', '%26', 'g')
//            .replace('+', '%2B', 'g');
//}


//progres bar
function createProgressBar(title, updater) {
  var progressRunning = false;
  var progressBarTemplate = document.getElementById("progress-bar-template").innerHTML;
  if (progressRunning) {
    return false;
  }
  createProgressBar.title = title;
  progressRunning = true;
  var e = document.createElement("div");
  e.className = "progress-bar";
  e.innerHTML = progressBarTemplate;
  document.body.appendChild(e);
  e.bar = e.children[0].children[0];
  e.titleNode = e.bar.children[0];
  e.titleNode.innerHTML = createProgressBar.title;
  e.progress = e.bar.children[1];
  var checkAgainProgress = function () {
    var val = updater();
    if (val >= 100) {
      e.titleNode.innerHTML = createProgressBar.title + " 100% Done.";
      e.progress.style.width = "100%";
      setTimeout(function () {
        progressRunning = false;
        document.body.removeChild(e);
      }, 200);
    } else {
      e.titleNode.innerHTML = createProgressBar.title + " " + Math.floor(val) + "%";
      e.progress.style.width = Math.floor(val) + "%";
      setTimeout(checkAgainProgress, 20);
    }
  };
  checkAgainProgress();
  return true;
}

function qconsole() {
  this.init = function () {
    if (this.initialized) {
      return;
    }
    this.initialized = true;
    var consoleTemplate = document.getElementById("console-template").innerHTML;
    this.container = document.createElement("div");
    this.container.className = "qconsole";
    this.container.innerHTML = consoleTemplate;
    this.msgContainer = this.container.children[1];
    document.body.appendChild(this.container);
    this.msgContainer.scrollTop = this.msgContainer.scrollHeight;
    
    var _this = this;
    
    this.container.ondblclick = function () {
      info("[double click] Clearing & hiding console...");
      _this.clear();
      _this.hide();
    };
  };

  this.log = function (msg) {
    var consoleMsgTemplate = document.getElementById("console-msg-template").innerHTML;
    var e = document.createElement("div");
    e.className = "msg";
    e.innerHTML = consoleMsgTemplate;
    e.msg = e.children[1];
    e.header = e.children[0];
    e.msg.innerHTML = " >>> " + msg;
    this.msgContainer.appendChild(e);
    this.msgContainer.scrollTop = this.msgContainer.scrollHeight;
  };

  this.clear = function () {
    this.msgContainer.innerHTML = "";
  };
  
  this.show = function () {
    qubit.opentag.Utils.addClass(this.container, "shown");
    qubit.opentag.Utils.removeClass(this.container, "hidden");
    this.hidden = false;
  };
  
  this.hide = function () {
    qubit.opentag.Utils.removeClass(this.container, "shown");
    qubit.opentag.Utils.addClass(this.container, "hidden");
    this.hidden = true;
  };
  this.init();
}

