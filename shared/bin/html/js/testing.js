
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

var bddSuiteCodeTemplate = 
"/**ignore at merge**/\n" +
"//:include tagsdk-current.js\n" +
"//:include _TAGPATH_\n" +
"\n" +
"/*\n" +
" * BDD tests are well known unit tests supporting API used by mocha and\n" +
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
"    expect(true).to.be(false);\n" +
"  });\n" +
"\n" +
"  it(\"it shall not fail as true is naturally true...\", function() {\n" +
"    expect(true).to.be(true);\n" +
"  });\n" +
"\n" +
"  it(\"it will throw an exception...\", function() {\n" +
"    throw \"exception!\";\n" +
"  });\n" +
"});\n" +
"\n" +
"qubit.opentag.Utils.namespace('_PACKAGE_.local.BDDSuite', suite);";

function addEditDescribeTests(node) {
  node = getLibraryReferenceNode(node);
  if (node) {
    var tag = node.reference;
    var data = bddSuiteCodeTemplate.replace("_PACKAGE_", tag.PACKAGE_NAME);
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
        var failed = false;
        if (bddSuite) {
          var tests = bddSuite.children;
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
        
        if (bddSuite || suite) { 
          if (failed) {
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
