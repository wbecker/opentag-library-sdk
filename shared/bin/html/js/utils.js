
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
        try {
          var variable = qubit.opentag.Utils.gevalAndReturn(inputs[i].value);
          config.parameters[idx].variable = {
              value: variable
          };
        } catch (ex) {
          config.parameters[idx].variable = {
              value: undefined
          };
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
      logError("Please fill all parameter values.");
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
    logError("Error while executing configuration:" + ex);
  }
}

function saveConfig(refNode) {
  refNode = getLibraryReferenceNode(refNode);
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
      logError(msg);
    } else {
      log("Saved");
    }
  });
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
    }
  });
}

function getLibraryReferenceNode(node) {
  while(node !== null && !node.reference) {
    node = node.parentNode;
  }
  return node;
}

var testSuiteCodeTemplate = 
"/**ignore at merge**/\n" +
"//:include tagsdk-current.js\n" +
"//:include _TAGPATH_\n" +
"\n" +
"var tag = null;\n" +
"\n" +
"/*\n" +
" * This is a simple tests suite, all that tests must do is to pass or fail.\n" +
" * Only one test will be run at the time, untill pass or fail method will \n" +
" * be called - test will block runner to wait for test.\n" +
" */\n" +
"var TestsSuite = new Suite({\n" +
"\n" +
"  \"it shall fail as true is never falsy...\": function() {\n" +
"    this.fail(true, \"Failed.\");\n" +
"  },\n" +
"\n" +
"  \"it shall not fail as true is naturally true...\": function() {\n" +
"    this.pass(true, \"Passed.\");\n" +
"  },\n" +
"\n" +
"  \"it shall again not fail as true is naturally true...\": function() {\n" +
"    this.pass(true, \"Passed again.\");\n" +
"  },\n" +
"\n" +
"  \"it shall fail later, in two seconds\": function() {\n" +
"    var _this = this;\n" +
"    setTimeout(function() {\n" +
"      _this.fail(true, \"failed after 2 seconds\");\n" +
"    }, 2000);\n" +
"  }\n" +
"});\n" +
"\n" +
"TestsSuite.beforeEach = function(test) {\n" +
"  tag = new _TAG_({\n" +
"    name: \"Specify a name here\"\n" +
"  });\n" +
"};\n" +
"\n" +
"TestsSuite.afterEach = function(test) {\n" +
"\n" +
"};\n" +
"\n" +
"qubit.opentag.Utils.namespace('_PACKAGE_.local.TestsSuite', TestsSuite);";

function addEditTests(node) {
  node = getLibraryReferenceNode(node);
  if (node) {
    var tag = node.reference;
    var data = testSuiteCodeTemplate.replace("_PACKAGE_", tag.PACKAGE_NAME);
    data = data.replace("_TAG_", tag.PACKAGE_NAME + ".Tag");
    var path = tag.PACKAGE_NAME.split(".").join("/");
    data = data.replace("_TAGPATH_", path + "/Tag.js");
    openInEditorAndCreate(
            "libraries." + tag.PACKAGE_NAME + ".local",
            "TestsSuite.js",
            true, data);
  }
}


var jasmineSuiteCodeTemplate = 
"/**ignore at merge**/\n" +
"//:include tagsdk-current.js\n" +
"//:include _TAGPATH_\n" +
"\n" +
"/*\n" +
" * Jasmine tests are well known unit tests supporting API used by mocha and\n" +
" * other test runners. Please see more info about how to use them online.\n" +
" */\n" +
"var suite = describe(\"when song has been paused\", function() {\n" +
"\n" +
"  var tag = null;\n" +
"\n" +
"  beforeEach(function() {\n" +
"    tag = new _TAG_({\n" +
"      name: \"Specify a name here\"\n" +
"    });\n" +
"  });\n" +
"\n" +
"  afterEach(function() {\n" +
"\n" +
"  });\n" +
"\n" +
"  it(\"shall fail as true is never falsy...\", function() {\n" +
"    expect(true).toBeFalsy();\n" +
"  });\n" +
"\n" +
"  it(\"it shall not fail as true is naturally true...\", function() {\n" +
"    expect(true).toBeTruthy();\n" +
"  });\n" +
"\n" +
"  it(\"it shall again not fail as true is naturally true...\", function() {\n" +
"    expect(true).toBeTruthy();\n" +
"  });\n" +
"\n" +
"  it(\"shall fail later, in two seconds\", function() {\n" +
"    var flag = false;\n" +
"\n" +
"    setTimeout(function() {\n" +
"      flag = true;\n" +
"    }, 2000);\n" +
"\n" +
"    waitsFor(function() {\n" +
"      return flag;\n" +
"    }, \"timed out\", 5000);\n" +
"\n" +
"    runs(function() {\n" +
"      expect(flag).toEqual(\"not expected value\");\n" +
"    });\n" +
"  });\n" +
"});\n" +
"\n" +
"qubit.opentag.Utils.namespace('_PACKAGE_.local.JasmineSuite', suite);";

function addEditDescribeTests(node) {
  node = getLibraryReferenceNode(node);
  if (node) {
    var tag = node.reference;
    var data = jasmineSuiteCodeTemplate.replace("_PACKAGE_", tag.PACKAGE_NAME);
    data = data.replace("_TAG_", tag.PACKAGE_NAME + ".Tag");
    var path = tag.PACKAGE_NAME.split(".").join("/");
    data = data.replace("_TAGPATH_", path + "/Tag.js");
    openInEditorAndCreate(
            "libraries." + tag.PACKAGE_NAME + ".local",
            "JasmineSuite.js",
            true, data);
  }
}

function reloadTests(refNode) {
  var Utils = qubit.opentag.Utils;
  var tagRef = refNode.reference;
  var data = ("classPath=libraries." +
          tagRef.PACKAGE_NAME + ".local&file=TestsSuite.js");
  
  POST("/getClassPath", data, function(msg, httpr) {
    if (httpr.status !== 200) {
      log("Error loading test (probably no tests). " + msg);
    }
    try {
      var cfg = getParametersAndConfigForTagNode(refNode, true, true);
      try {
        Utils.getObjectUsingPath(tagRef.PACKAGE_NAME)
                .local.TestsSuite = undefined;
      } catch (e) {
        
      }
      qubit.opentag.Utils.geval(msg);
      var libraryClass = Utils.getObjectUsingPath(tagRef.PACKAGE_NAME + ".Tag");
      renderLibraryToNode(libraryClass ,null, null, cfg);
    } catch (ex) {
      log("Error loading test: " + ex);
    } finally {
      reloadJasmineTests(refNode);
    }
  });
}
//refactor to sinle - reload file in local and rebuild page
function reloadJasmineTests(refNode) {
  var Utils = qubit.opentag.Utils;
  var tagRef = refNode.reference;
  var data = ("classPath=libraries." +
          tagRef.PACKAGE_NAME + ".local&file=JasmineSuite.js");
  
  POST("/getClassPath", data, function(msg, httpr) {
    if (httpr.status !== 200) {
      log("Error loading test (probably no tests). " + msg);
    }
    try {
      var cfg = getParametersAndConfigForTagNode(refNode, true, true);
      try {
        Utils.getObjectUsingPath(tagRef.PACKAGE_NAME)
                .local.JasmineSuite = undefined;
      } catch (e) {
        
      }
      qubit.opentag.Utils.geval(msg);
      var libraryClass = Utils.getObjectUsingPath(tagRef.PACKAGE_NAME + ".Tag");
      renderLibraryToNode(libraryClass ,null, null, cfg);
    } catch (ex) {
      log("Error loading test: " + ex);
    }
  });
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

function runAllTests() {
  var elements = document.getElementsByTagName("div");
  var total = 0;
  var counted = 0;
  var testNodes = [];
  for (var i = 0; i < elements.length; i++) {
    var node = elements[i];
    if (node.getAttribute("library-node") === "true") {
      ++total;
      testNodes.push(node);
    }
  }
  
  var sequence = function(index) {
    try {
      var node = testNodes[index];
      if (!node) {return;}
      runTests(node, function() {
        ++counted;
        if (counted < total) {
          setTimeout(function() {
            sequence(counted);
          }, 5);
        }
      });
    } catch (e) {
    }
  };
  
  sequence(0);
  
  createProgressBar("Running test suites...", function () {
    if (counted === 0) {
      return 0;
    }
    return 100 * (counted/(total));
  });
}

function runTests(referencingNode, callback) {
  try {
    var tagRef = referencingNode.reference;
    var Utils = qubit.opentag.Utils;
    var suite = Utils
          .getObjectUsingPath(tagRef.PACKAGE_NAME + ".local.TestsSuite");
  
    var jasmineSuite = Utils
          .getObjectUsingPath(tagRef.PACKAGE_NAME + ".local.JasmineSuite");
    
    var allSuitesFinished = function () {
      var notFinished = false;
      if (suite && !suite.isFinished()) {
        notFinished = true;
      } else if (jasmineSuite && !jasmineSuite.isFinished) { //finished is used to distinkt jasmine
        notFinished = true;
      }
      
      if (!notFinished) {
        
//        add tests check for jasmine tests
        var failed = false;
        if (jasmineSuite) {
          var tests = jasmineSuite.children;
          for (var i = 0; i < tests.length; i++) {
            if (tests[i].result.status === "failed") {
              failed = true;
              break;
            }
          }
        }
        
        if (suite) {
          if ( (suite.failedTests && suite.failedTests.length > 0) ) {
            failed = true;
          } else if (suite.finishedTests && suite.finishedTests.length > 0) {
            failed = failed || false;
          }
        }
        
        if (jasmineSuite || suite) { 
          if ( failed ) {
            Utils.addClass(referencingNode, "tests-failed");
          } else if (suite.finishedTests && suite.finishedTests.length > 0) {
            Utils.addClass(referencingNode, "tests-passed");
          }
        }
        
        if (callback) {
          callback();
        }
      }
    };
    
    if (suite || jasmineSuite) {
      if (suite) {
        runSuite(suite, allSuitesFinished);
      }
      if (jasmineSuite) {
        runJasmineSuite(jasmineSuite, allSuitesFinished);
      }
    } else {
      if (callback) {
        callback();
      }
      Utils.addClass(referencingNode, "tests-notests");
      log("No tests detected for " + tagRef.config.name);
    }
    
  } catch (ex) {
    logError("Error while executing tests suite:" + ex);
  }
}

function runSuite(suite, callback) {
    if (suite) {
      suite.onFinished = function () {
        if (callback) {
          callback();
        }
      };
      suite.run();
    } else {
      if (callback) {
        callback();
      }
    }
}

function runJasmineSuite(jasmineSuite, callback) {
    if (jasmineSuite) {
      jasmineSuite.resultCallback = function () {
        jasmineSuite.isFinished = true;
        if (callback) {
          try {
            callback();
          } catch (ex) {
            alert(ex);
          }
        }
      };
      jasmineSuite.execute();
    } else {
      if (callback) {
        jasmineSuite.isFinished = true;
        callback();
      }
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

