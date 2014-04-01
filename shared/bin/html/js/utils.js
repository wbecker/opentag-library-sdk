
function fitTextarea(txta) {
  if (txta.tagName.toLowerCase() === "textarea") {
    txta.style.overflow = 'hidden';//IE...
    txta.style.height = "0px";
    txta.scrollHeight;//...workaround
    txta.style.height = (25 + txta.scrollHeight) + "px";
    txta.style.overflow = '';//...
  }
}

function toggleShowSibling(start) {
  var next = start.nextSibling;
  while (next && !next.style) {
    next = next.nextSibling;
  }

  if (next) {
    if (next.style.display === "none") {
      next.style.display = "";
      fitTextarea(next);
    } else {
      next.style.display = "none";
    }
  }
}

function getParametersAndConfigForTagNode(referencingNode, ignoreRed, paramsOnly) {
  var inputs = referencingNode.getElementsByTagName("input");
  var tagRef = referencingNode.reference;
  var config = tagRef.config;
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].className.indexOf("red") !== -1) {
        if (!ignoreRed) {
          return "red";
        }
      } 
      
      if (inputs[i].pindex !== undefined) {
        var idx = inputs[i].pindex;
        config.parameters[idx].inputVariable = inputs[i].value;
        config.parameters[idx].variable = {
            value: inputs[i].value
        };
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
      alert("Please fill all parameter values.");
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
    instance.run();

    instance.log.INFO("Currently executed tag instance is exposed as: window.instance");

    window.instance = instance;
  } catch (ex) {
    alert("Error while executing configuration:" + ex);
  }
}

function saveConfig(refNode) {
  var tagRef = refNode.reference;
  var params = getParametersAndConfigForTagNode(refNode, true, true);
  var serial = json.serialize({parameters: params.parameters});
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
      alert(msg);
    } else {
      alert("Ok.");
    }
  });
}

function openInEditor(refNode) {
  var tagRef = refNode.reference;
  var data = "classPath=libraries." + tagRef.PACKAGE_NAME + "&file=Tag.js";
  POST("/openInEditor", data, function(msg, httpr) {
    if (!qubit.opentag.Utils.gevalAndReturn(msg).ok) {
      alert(msg);
    }
  });
}

function reloadTag(refNode) {
  var Utils = qubit.opentag.Utils;
  var tagRef = refNode.reference;
  var data = ("classPath=libraries." +
          tagRef.PACKAGE_NAME + "&file=Tag.js");
  
  POST("/getClassPath", data, function(msg, httpr) {
    if (httpr.status !== 200) {
      alert("Error: " + msg);
    }
    try {
      var cfg = getParametersAndConfigForTagNode(refNode, true, true);
      Utils.getObjectUsingPath(tagRef.PACKAGE_NAME).Tag = undefined;
      qubit.opentag.Utils.geval(msg);
      var libraryClass = Utils.getObjectUsingPath(tagRef.PACKAGE_NAME + ".Tag");
      renderLibraryToNode(libraryClass ,null, null, cfg);
    } catch (ex) {
      alert("Error loading tag: " + ex);
    }
  });
}


function runTests(referencingNode) {
  try {
    var tagRef = referencingNode.reference;
    var Utils = qubit.opentag.Utils;
    var suite = Utils
          .getObjectUsingPath(tagRef.PACKAGE_NAME + ".local.TestsSuite");
  
    suite.onFinished = function () {
      if (suite.failedTests.length > 0) {
        Utils.addClass(referencingNode, "tests-failed");
      } else if (suite.finishedTests.length > 0) {
        Utils.addClass(referencingNode, "tests-passed");
      }
    };
    
    suite.run();
  } catch (ex) {
    alert("Error while executing tests suite:" + ex);
  }
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