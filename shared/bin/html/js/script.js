
/**
 * 
 * @type @exp;document@call;getElementById@pro;innerHTML
 */
function addLibrary(anchor, libraryClass) {
  var libraryNode = document.createElement("div");
  anchor.appendChild(libraryNode);
  
  var url = "/getClassPath?classPath=libraries." +libraryClass.prototype.PACKAGE_NAME +
          ".local&file=Config.js";
  try {
    GET(url, function(msg) {
      try {
        qubit.opentag.Utils.geval(msg);//RUN CONFIG HERE WHEN CLASS IS LOADED
      } catch (e) {
      }
      renderLibraryToNode(libraryClass, libraryNode, "hide");
    });
  } catch (ex) {
    //any excpetion
    renderLibraryToNode(libraryClass, libraryNode, "hide");
  }
}

var libraryTemplate = document.getElementById("library-template").innerHTML;
function renderLibraryToNode(libraryClass ,libraryNode, hide, cfg) {
  cfg = cfg || {};
  var instance = new libraryClass(cfg);
  instance.unregisterTag();
  
  var fullName = instance.PACKAGE_NAME + "." + instance.CLASS_NAME;
  libraryNode = libraryNode || document.getElementById(fullName);
  
  libraryNode.innerHTML = libraryTemplate;
  libraryNode.children[0].innerHTML = instance.config.name;
  libraryNode.className = "library " + hide;
  libraryNode.reference = instance;
  libraryNode.classReference = libraryClass;
  libraryNode.id = fullName;

  var params = instance.config.parameters;
  var contents = libraryNode.children[6];
  try {
    var configObject = qubit.opentag.Utils
            .getObjectUsingPath(instance.PACKAGE_NAME + ".local.Config");
    if (configObject && configObject.parameters) {
      params = configObject.parameters;
    }
  } catch (ex) {
    //may not be in there
  }
  addParameters(contents, params);
  addConfig(contents, instance.config);
  addPrePostTemplate(contents, instance);
}

var parameterTemplate = document.getElementById("parameter-template").innerHTML;
function addParameters(anchor, params) {
  var e = document.createElement("div");
  e.innerHTML = "Parameters";
  e.className = "parameter-header";
  anchor.appendChild(e);
  for (var i = 0; i < params.length; i++) {
    e = document.createElement("div");
    var parameter = params[i];
    e.innerHTML = parameterTemplate;
    e.getElementsByTagName("input")[0].pindex = i;
    e.getElementsByTagName("label")[0].innerHTML = parameter.name;
    var enterValue = parameter.inputVariable ? parameter.inputVariable : "";
    e.getElementsByTagName("input")[0].value = enterValue;
    e.getElementsByTagName("input")[0].className = 
            parameter.inputVariable ? "" : "red";
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
  el.innerHTML = "Config options";
  el.className = "config-header";
  anchor.appendChild(el);
  for (var prop in config) {
    if (!propertyExcludedFromConfig(prop) && !propertyHiddenFromConfig(prop)) {
      var e = prepareConfigElement(prop, config[prop], configTemplate);
      anchor.appendChild(e);
    }
  }
  var hel = document.createElement("div");
  hel.innerHTML = hiddenConfigTemplate;
  hel.className = "config-header";
  anchor.appendChild(hel);
  anchor = hel.children[0].children[1];
  toggleShowSibling(hel.children[0].children[0])
  for (var prop in config) {
    if (!propertyExcludedFromConfig(prop) && propertyHiddenFromConfig(prop)) {
      var e = prepareConfigElement(prop, config[prop], configTemplate);
      anchor.appendChild(e);
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

function prepareLibrary(libraryClass, node) {
  var ctest = new libraryClass({});
  ctest.unregisterTag();
  if ((ctest) instanceof qubit.opentag.LibraryTag) {
    addLibrary(node, libraryClass);
  }
}

/**
 * 
 * @returns {undefined}
 */
function loadConfig() {
  var librariesNode = document.getElementById("libraries");
  librariesNode.innerHTML = "";
  var vendors = qubit.opentag.libraries;
  for (var vprop in vendors) {
    var vendor = vendors[vprop];
    var vendorNode = prepareVendorNode(vprop);

    for (var lprop in vendor) {
      try {
        var libraryClass = vendor[lprop].Tag;
        prepareLibrary(libraryClass, vendorNode);
      } catch (ex) {
        //must prompt
        if (window.console && console.log) {
          console.log("Failed to load tag configuration," +
                  " possible syntax error:" + ex);
        } else {
          alert("Failed to load tag configuration," +
                  " possible syntax error:" + ex);
        }
      }
    }
    librariesNode.appendChild(vendorNode);
  }
}

var scripts = [];
window.callScript = function () {
  var srcs = document.getElementsByTagName("font");
  var total = srcs.length;
  var counted = 0;
  for (var i = 0; i < srcs.length; i++) {
    (function (j) {
      
      var url = srcs[i].getAttribute("link");
      GET(url, function(msg, xhrobj) {
        scripts[j] = msg;
        console.log(url);
        ++counted;
        if (total === counted) {
          for (var x = 0; x < scripts.length; x++) {
            try {
              eval(scripts[x]);
            } catch (ex) {}
          }
          listScripts();
          loadConfig();
        }
      });

    })(i);
  }
};
  function listScripts() {
    var html = "<div>";
    var scripts = document.getElementsByTagName("font");
    for(var i =0 ; i < scripts.length; i++) {
      var src = scripts[i].getAttribute("link");
      if (src) {
        html += "<a href='" +  src + "' target='frame" + i + "' >" +
                src +
                "</a><br/>";
      }
    }
    html += "</div>";
    document.getElementById("sources").innerHTML = html;
  }
 