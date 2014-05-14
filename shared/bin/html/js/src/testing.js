
var testSuiteCodeTemplateURL = "/shared/templates/TestsSuite.js";
function addEditTests(node, template) {
	GET(testSuiteCodeTemplateURL, function (message, xhr) {
		if (xhr.status !== 200) {
      logError(message);
    } else {
			addEditStandardTests(node, message);
		}
	});
}

function addEditStandardTests(node, template) {
  node = getLibraryReferenceNode(node);
  if (node) {
    var tag = node.reference;
    var data = template.replace("_PACKAGE_", tag.PACKAGE_NAME);
    data = data.replace("_TAG_", tag.PACKAGE_NAME + ".Tag");
    var path = tag.PACKAGE_NAME.split(".").join("/");
    data = data.replace("_TAGPATH_", path + "/Tag.js");
    openInEditorAndCreate(
            "libraries." + tag.PACKAGE_NAME + ".local",
            "TestsSuite.js",
            true, data);
  }
}

var bddSuiteCodeTemplateURL = "/shared/templates/BDDSuite.js";
function addEditDescribeTests(node) {
	GET(bddSuiteCodeTemplateURL, function (message, xhr) {
		if (xhr.status != 200) {
      logError(message);
    } else {
			addEditBDDTests(node, message);
		}
	});
}

function addEditBDDTests(node, template) {
  node = getLibraryReferenceNode(node);
  if (node) {
    var tag = node.reference;
    var data = template.replace("_PACKAGE_", tag.PACKAGE_NAME);
    data = data.replace("_TAG_", tag.PACKAGE_NAME + ".Tag");
    var path = tag.PACKAGE_NAME.split(".").join("/");
    data = data.replace("_TAGPATH_", path + "/Tag.js");
    openInEditorAndCreate(
            "libraries." + tag.PACKAGE_NAME + ".local",
            "BDDSuite.js",
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
      reloadBDDTests(refNode);
    }
  });
}
//refactor to sinle - reload file in local and rebuild page
function reloadBDDTests(refNode) {
  var Utils = qubit.opentag.Utils;
  var tagRef = refNode.reference;
  var data = ("classPath=libraries." +
          tagRef.PACKAGE_NAME + ".local&file=BDDSuite.js");
  
  POST("/getClassPath", data, function(msg, httpr) {
    if (httpr.status !== 200) {
      log("Error loading test (probably no tests). " + msg);
    }
    try {
      var cfg = getParametersAndConfigForTagNode(refNode, true, true);
      try {
        Utils.getObjectUsingPath(tagRef.PACKAGE_NAME)
                .local.BDDSuite = undefined;
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

var testsRunning = false;
function runAllTests(callback) {
  if (testsRunning) {
    info("Wait for currently running tests to finish.");
    return;
  }
  testsRunning = true;
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
      runTestsHandler(node, function () {
        ++counted;
        if (counted < total) {
          setTimeout(function() {
            sequence(counted);
          }, 5);
        }
        if (counted === total) {
          testsRunning = false;
          if (callback) {
            callback();
          }
        }
      });
    } catch (e) {
    }
  };
  
  sequence(0);
  
  theProgressBar("Running test suites...", function () {
    if (counted === 0) {
      return 0;
    }
    return 100 * (counted/(total));
  });
}

function runTestsHandler(referencingNode, callback) {
  try {
    var tagRef = referencingNode.reference;
    var Utils = qubit.opentag.Utils;
    var suite = Utils
          .getObjectUsingPath(tagRef.PACKAGE_NAME + ".local.TestsSuite");
  
    var bddSuite = Utils
          .getObjectUsingPath(tagRef.PACKAGE_NAME + ".local.BDDSuite");
    
    var allSuitesFinished = function () {
      var notFinished = false;
      if (suite && !suite.isFinished()) {
        notFinished = true;
      } else if (bddSuite && !bddSuite.isFinished) { //finished is used to distinkt jasmine
        notFinished = true;
      }
      
      if (!notFinished) {
        
//        add tests check for jasmine tests
        var bddfailed = false;
        if (bddSuite) {
          var tests = bddSuite.children;
          for (var i = 0; i < tests.length; i++) {
            if (tests[i].result.status === "failed") {
              bddfailed = true;
              break;
            }
          }
        }
        
        var failed = false;
        
        if (suite && suite.failedTests && suite.failedTests.length > 0) {
            failed = true;
        }
        
        if (bddSuite || suite) { 
          if (failed || bddfailed) {
            Utils.addClass(referencingNode, "tests-failed");
          } else {
            Utils.addClass(referencingNode, "tests-passed");
          }
        }
        
        if (callback) {
          callback();
        }
      }
    };
    
    if (suite || bddSuite) {
      if (suite) {
        runSuite(suite, allSuitesFinished);
      }
      if (bddSuite) {
        runBDDSuite(bddSuite, allSuitesFinished);
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

function runBDDSuite(bddSuite, callback) {
    if (bddSuite) {
      var zuper = bddSuite.resultCallback;
      bddSuite.resultCallback = function () {
        zuper.apply(bddSuite, arguments);
        bddSuite.isFinished = true;
        if (callback) {
          try {
            callback();
          } catch (ex) {
            alert(ex);
          }
        }
      };
      bddSuite.execute();
    } else {
      if (callback) {
        bddSuite.isFinished = true;
        callback();
      }
    }
}
