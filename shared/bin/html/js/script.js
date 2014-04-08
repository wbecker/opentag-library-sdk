var libraryTemplate = document.getElementById("library-template").innerHTML;
/**
 * 
 * @type @exp;document@call;getElementById@pro;innerHTML
 */
function renderLibraryToNode(libraryClass ,libraryNode, className, cfg) {
  cfg = cfg || {};
  var instance = new libraryClass();
  instance.unregisterTag();
  
  if (cfg.parameters && instance.config.parameters) {
    for (var i = 0; i < cfg.parameters.length; i++) {
      var token = cfg.parameters[i].token;
      for (var j = 0; j < instance.config.parameters.length; j++) {
        if (instance.config.parameters[j].token === token) {
          instance.config.parameters[j].inputVariable =
                  cfg.parameters[i].inputVariable;
        }
      }
    }
  }
  
  var fullName = instance.PACKAGE_NAME + "." + instance.CLASS_NAME;
  
  if (!libraryNode) {
    libraryNode =  document.getElementById(fullName);
    qubit.opentag.Utils.removeClass(libraryNode, "tests-failed");
    qubit.opentag.Utils.removeClass(libraryNode, "tests-passed");
    qubit.opentag.Utils.removeClass(libraryNode, "tests-notests");
  }

  libraryNode.setAttribute("library-node", "true");

  libraryNode.innerHTML = libraryTemplate;
  libraryNode.children[0].children[1].innerHTML = instance.config.name;
  qubit.opentag.Utils.addClass(libraryNode, "library");
  if (className) {
    qubit.opentag.Utils.addClass(libraryNode, className);
  }
  libraryNode.reference = instance;
  libraryNode.classReference = libraryClass;
  libraryNode.id = fullName;

  var params = instance.config.parameters;
  var head = libraryNode.children[6].children[0];
  var contents = libraryNode.children[6].children[1];
  try {
    var configObject = qubit.opentag.Utils
            .getObjectUsingPath(instance.PACKAGE_NAME + ".local.Config");
    if (configObject && configObject.parameters) {
      mergeParameters(params, configObject.parameters);
    }
  } catch (ex) {
    //may not be in there
  }
  head.children[0].innerHTML =  
          (instance.config.imageUrl ?
            "<img class='logo' src='" + instance.config.imageUrl +
              "' align='right' />" :
            "") +
            instance.config.description;
  
  addParameters(contents, params);
  addConfig(contents, instance.config);
  addPrePostTemplate(contents, instance);
  addTestsSuite(contents, instance);
}

function mergeParameters(to, from) {
  for (var i = 0; i < to.length; i++) {
    var paramTo = to[i];
    for (var j = 0; j < from.length; j++) {
      if (paramTo.token && paramTo.token === from[j].token) {
        var value = to[i].inputVariable;
        var uvTo = to[i].uv;
        var uvFrom = from[i].uv;
        
        to[i] = from[j];
        
        if (value) {
          to[i].inputVariable = value;
        }
        
        if (uvTo) {
          to[i].uv = uvTo;
        }
        break;
      }
    }
  }
}

/**
 * 
 * Adding library function to anchor.
 * 
 * 
 * @type @exp;document@call;getElementById@pro;innerHTML
 */
function addLibrary(anchor, libraryClass) {
  var libraryNode = document.createElement("div");
  anchor.appendChild(libraryNode);
  
  var url = "/getClassPath?classPath=libraries." +
          libraryClass.prototype.PACKAGE_NAME +
          ".local&file=Config.js";
  try {
    GET(url, function(msg) {
      try {
        qubit.opentag.Utils.geval(msg);//RUN CONFIG HERE WHEN CLASS IS LOADED
      } catch (e) {}
      renderLibraryToNode(libraryClass, libraryNode, "hide");
    });
  } catch (ex) {
    //any excpetion
    renderLibraryToNode(libraryClass, libraryNode, "hide");
  }
}







var parameterTemplate = document.getElementById("parameter-template").innerHTML;
var parametersTemplate = document.getElementById("parameters-template").innerHTML;
/**
 * 
 * @param {type} anchor
 * @param {type} params
 * @returns {undefined}
 */
function addParameters(anchor, params) {
  var e = document.createElement("div");
  e.innerHTML = parametersTemplate;
  e.className = "parameters-container";
  anchor.appendChild(e);
  anchor = e.children[1];
  for (var i = 0; i < params.length; i++) {
    e = document.createElement("div");
    var parameter = params[i];
    e.innerHTML = parameterTemplate;
    var paramNode = e.getElementsByTagName("input")[0];
    paramNode.pindex = i;
    e.paramNode = paramNode; 
    e.uvNode = e.getElementsByTagName("input")[1];
    e.getElementsByTagName("label")[0].innerHTML = parameter.name
      + " (token: <pre style='display:inline'>" + parameter.token + "</pre>)";
    var uvPresent = false;
    if (parameter.uv) {
      uvPresent = true;
      e.uvNode.value = parameter.uv;
    } else {
      qubit.opentag.Utils.addClass(e.uvNode, "no-uv");
      e.uvNode.value = "edit script to set universal variable";
    }
    var enterValue = (parameter.inputVariable !== undefined) ?
                                      parameter.inputVariable : "";
    paramNode.value = enterValue;
    paramNode.className = (enterValue || uvPresent) ? "" : "red";
    
    if (uvPresent) {
      paramNode.setAttribute("onfocus", null);
      paramNode.setAttribute("onblur", null);
    }
    
    //attach changer for uv
    (function (e) {
//      e.uvNode.onclick = function () {
//        createUVPopup(e.uvNode, function (chosenValue) {
//          e.uvNode.value = chosenValue;
//        });
//      };
    })(e);
    anchor.appendChild(e);
  }
}




var excluded = [
  "parameters",
  "PACKAGE",
  "dependencies",
  "CONSTRUCTOR",
  "dedupe",
  "priv",
  "name",
  "description",
  "inactive",
  "loadDependenciesOnLoad"
];
function propertyExcludedFromConfig(prop) {
  for (var i = 0; i < excluded.length; i++) {
    if (prop === excluded[i]) {
      return true;
    }
  }
  return false;
}
var hidden = [
  "filterTimeout",
  "isPrivate", ,
  "usesDocumentWrite",
  "timeout",
  "singleton",
  "locationPlaceHolder",
  "locationDetail",
  "locationObject",
  "noMultipleLoad",
  "__proto__"
];
function propertyHiddenFromConfig(prop) {
  for (var i = 0; i < hidden.length; i++) {
    if (prop === hidden[i]) {
      return true;
    }
  }
  return false;
}
function prepareConfigElement(prop, value, configTemplate) {
  var e = document.createElement("div");
  var p = value;
  e.innerHTML = configTemplate;
  e.children[0].className = "config";
  e.getElementsByTagName("input")[0].cname = prop;
  e.getElementsByTagName("label")[0].innerHTML = prop;
  if (p !== undefined) {
    e.getElementsByTagName("input")[0].value = p;
  }
  e.getElementsByTagName("input")[0].entered = true;
  return e;
}
/**
 * 
 * @type @exp;document@call;getElementById@pro;innerHTML
 */
var configTemplate = document.getElementById("config-template").innerHTML;
var hiddenConfigTemplate = document.getElementById("toggled-config-template").innerHTML;
function addConfig(anchor, config) {
  var el = document.createElement("div");
  el.innerHTML = hiddenConfigTemplate;
  el.className = "config-header";
  var confHead = el.children[0].children[0];
  confHead.innerHTML = "+ Configuration";
  toggleShowSibling(confHead);
  var configAnchor = el.children[0].children[1];
  anchor.appendChild(el);
  for (var prop in config) {
    if (!propertyExcludedFromConfig(prop) && !propertyHiddenFromConfig(prop)) {
      var e = prepareConfigElement(prop, config[prop], configTemplate);
      configAnchor.appendChild(e);
    }
  }
  var hel = document.createElement("div");
  hel.innerHTML = hiddenConfigTemplate;
  hel.className = "config-header";
  configAnchor.appendChild(hel);
  var confHead = hel.children[0].children[0];
  configAnchor = hel.children[0].children[1];
  toggleShowSibling(confHead);
  confHead.innerHTML = "+ Advanced";
  for (var prop in config) {
    if (!propertyExcludedFromConfig(prop) && propertyHiddenFromConfig(prop)) {
      var e = prepareConfigElement(prop, config[prop], configTemplate);
      configAnchor.appendChild(e);
    }
  }
}



/**
 * 
 * @type @exp;document@call;getElementById@pro;innerHTML
 */
var prePostTemplate = document.getElementById("pre-post-script-template").innerHTML;
function addPrePostTemplate(anchor, tag) {
  var e = document.createElement("div");
  e.innerHTML = prePostTemplate;
  var txtAreas = e.getElementsByTagName("textarea");
  //we know order
  var pre = txtAreas[0];
  var post = txtAreas[1];
  var script = txtAreas[2];

  var pre_value = tag.config.pre ? tag.config.pre : String(tag.pre);
  var post_value = tag.config.post ? tag.config.post : String(tag.post);
  var script_value = tag.config.script ? tag.config.script : String(tag.script);

  pre.value = String(pre_value);
  post.value = String(post_value);
  script.value = String(script_value);

  pre.style.display = "none";
  post.style.display = "none";
  script.style.display = "none";

  tag.preNode = pre;
  tag.postNode = post;
  tag.scriptNode = script;

  //@TODO add case config.prop is a function...
  anchor.appendChild(e);
}






/**
 * Tests section
 * 
 */
var testTemplate = document.getElementById("unit-test-template").innerHTML;
function addTest(anchor, testInstance) {
  var e = document.createElement("div");
  e.innerHTML = testTemplate;
  e.className = "unit-test";
  testInstance.testNode = e;
  
  testInstance.statusNode = e.children[0];
  testInstance.nameNode = e.children[1];
  
  testInstance.nameNode.innerHTML = testInstance.name;
  
  testInstance.onFinished = function () {
    var Utils = qubit.opentag.Utils;
    if (this.failed) {
      Utils.addClass(this.statusNode, "failed");
    } else if (this.passed) {
      Utils.addClass(this.statusNode, "passed");
    }
  };
  
  //@TODO add case config.prop is a function...
  anchor.appendChild(e);
}
function addBDDTest(anchor, child) {
  var e = document.createElement("div");
  e.innerHTML = testTemplate;
  e.className = "unit-test";
  child.testNode = e;
  
  child.statusNode = e.children[0];
  child.nameNode = e.children[1];
  
  child.nameNode.innerHTML = child.description;
  
  var zuper = child.resultCallback;
  child.resultCallback = function (result) {
    zuper.apply(child, arguments);
    var Utils = qubit.opentag.Utils;
    if (child.result.status === "failed") {
      Utils.addClass(child.statusNode, "failed");
    } else if (child.result.status === "passed") {
      Utils.addClass(child.statusNode, "passed");
    }
  };
  
  //@TODO add case config.prop is a function...
  anchor.appendChild(e);
}

var testsSuiteTemplate = document.getElementById("unit-tests-suite-template").innerHTML;
function addTestsSuite(anchor, tagInstance) {
  var e = document.createElement("div");
  e.className = "unit-tests-suite";
  e.innerHTML = testsSuiteTemplate;
  
  var Utils = qubit.opentag.Utils;
  var suite = Utils
          .getObjectUsingPath(tagInstance.PACKAGE_NAME + ".local.TestsSuite");
  var bddSuite = Utils
          .getObjectUsingPath(tagInstance.PACKAGE_NAME + ".local.BDDSuite");
  anchor.appendChild(e);
//    e.children[1].children[0].innerHTML = suite.before ? String(suite.before) : "";
//    e.children[2].children[0].innerHTML = suite.after ? String(suite.after) : "";
    var unitTestsNode = e.children[1];
    renderTestsToNode(unitTestsNode, suite, bddSuite);
}
function renderTestsToNode(unitTestsNode, suite, bddSuite) {
  unitTestsNode.innerHTML = "";
  if (bddSuite) {
    bddSuite.unitTestsNode = unitTestsNode;
    var tests = bddSuite.children;
    for (var i = 0; i < tests.length; i++) {
      addBDDTest(unitTestsNode, tests[i]);
    }
  }
  if (suite) {
    suite.unitTestsNode = unitTestsNode;
    var tests = suite.tests;
    for (var i = 0; i < tests.length; i++) {
      addTest(unitTestsNode, tests[i]);
    }
  }
}



function prepareVendorNode(name) {
  var vendorNode = document.createElement("div");
  vendorNode.innerHTML = "<a class='plain' href='#-2'>" + name + "</a>";
  vendorNode.className = "vendor";
  vendorNode.children[0].onclick = function() {
    var hs = !this.ishidden ? "hide" : "show";
    this.ishidden = !this.ishidden;
    this.parentNode.className = "vendor " + hs;
  };
  return vendorNode;
}

/**
 * 
 * @returns {undefined}
 */
function renderAllLibrariesToPage() {
  var librariesNode = document.getElementById("libraries");
  librariesNode.innerHTML = "";
  var vendors = qubit.opentag.libraries;
  for (var vprop in vendors) {
    var vendor = vendors[vprop];
    var vendorNode = prepareVendorNode(vprop);

    for (var lprop in vendor) {
      try {
        var libraryClass = vendor[lprop].Tag;
        var ctest = new libraryClass({});
        ctest.unregisterTag();
        if ((ctest) instanceof qubit.opentag.LibraryTag) {
          addLibrary(vendorNode, libraryClass);
        }
      } catch (ex) {
        //must prompt
        if (window.console && console.log) {
          console.log("Failed to load tag configuration," +
                  " possible syntax error:" + ex);
        } else {
          logError("Failed to load tag configuration," +
                  " possible syntax error:" + ex);
        }
      }
    }
    librariesNode.appendChild(vendorNode);
  }
}

var scripts = [];
var totalScripts = 0;
var total = 1;
var counted = 0;
function loadAllLibs() {
  createProgressBar("Loading scipts", function () {
    if (counted === 0) {
      return 0;
    }
    return 100 * (counted/(totalScripts+total));
  });
  var srcs = document.getElementsByTagName("font");
  totalScripts = srcs.length;
  var counter = 0;
    var loader =function () {
      if (counter === srcs.length) {
        return;
      }
      var index = counter;
      counter++;
      var url = srcs[index].getAttribute("link");
      setTimeout(function () {_loadLibrary(url, index, loader);}, 0);
    };
    loader();
}
function _loadLibrary(url, index, callback) {
  GET(url, function(msg, xhrobj) {
    try {
      scripts[index] = {
        expr: msg,
        url: url
      };
      log(url);
      counted++;
      if (totalScripts === counted) {
        for (var x = 0; x < scripts.length; x++) {
          try {
            eval(scripts[x].expr);
          } catch (ex) {
            logError("Failed to load: " + scripts[x].url + "\nException: " + ex);
          }
        }
        createProgressBar.title += ", rendering... ";
        listScripts();
        setTimeout(function () {
          renderAllLibrariesToPage();
          counted++;
          window.toggleConsole();
        }, 50);
      }
    } finally {
      if (callback) {
        callback();
      }
    }
  });
}

function listScripts() {
  var html = "<div>";
  var scripts = document.getElementsByTagName("font");
  for (var i = 0; i < scripts.length; i++) {
    var src = scripts[i].getAttribute("link");
    if (src) {
      html += "<a href='" + src + "' target='frame" + i + "' >" +
              src +
              "</a><br/>";
    }
  }
  html += "</div>";
  document.getElementById("sources").innerHTML = html;
}

/*
 * Ugly main.
 * 
 * 
 */

window.Main = function () {
  window.qlog = new qconsole();
  window.toggleConsole = function () {
    qlog.hidden ? qlog.show() : qlog.hide();
  };
  window.logError = function (m) {
    log("<span style='font-weight:bolder;color: red'>" + m + "</span>");
    qlog.show();
  };
  window.log = function (m) {
    qlog.log(m);
    //try {console.log(m);} catch (e) {}
  };
  
  Suite.log = Test.log = function (msg) {
    log(msg);
  };
  
  //delay shortly so IE6 can apply styling
  loadAllLibs();
};
