  function className(node, name) {
    try {
      
    } catch (ex) {
      
    }
  }
  /**
   * 
   * @type @exp;document@call;getElementById@pro;innerHTML
   */
  var libraryTemplate = document.getElementById("library-template").innerHTML;
  function addLibrary(anchor, libraryClass) {
    var instance = new libraryClass({});
    instance.unregisterTag();
    var libraryNode = document.createElement("div");
    libraryNode.innerHTML = libraryTemplate;
    libraryNode.children[0].innerHTML = instance.config.name;
    libraryNode.className = "library hide";
    libraryNode.reference = instance;
    libraryNode.classReference = libraryClass;
    
    anchor.appendChild(libraryNode);

    var params = instance.config.parameters;
    var contents = libraryNode.children[4];
    
    addParameters(contents, params);
    addConfig(contents, instance.config);
    addPrePostTemplate(contents, instance);
    
  }
  
  var parameterTemplate = document.getElementById("parameter-template").innerHTML;
  function addParameters(anchor ,params) {
    var e = document.createElement("div");
    e.innerHTML = "Parameters";
    e.className = "parameter-header";
    anchor.appendChild(e);
    for(var i = 0; i < params.length; i++) {
      e = document.createElement("div");
      var p = params[i];
      e.innerHTML = parameterTemplate;
      e.getElementsByTagName("input")[0].pindex = i;
      e.getElementsByTagName("label")[0].innerHTML = p.name;
      e.getElementsByTagName("input")[0].value = "enter value...";
      e.getElementsByTagName("input")[0].className = "red";
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
     "isPrivate",
     "inactive",
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
  function addConfig(anchor ,config) {
    var el = document.createElement("div");
    el.innerHTML = "Config options";
    el.className = "config-header";
    anchor.appendChild(el);
    for(var prop in config) {
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
    for(var prop in config) {
      if (propertyHiddenFromConfig(prop)) {
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
  
  /**
   * 
   * @returns {undefined}
   */
  function loadConfig() {
    var librariesNode = document.getElementById("libraries");
    var vendors = qubit.opentag.libraries;
    for(var vprop in vendors) {
      var vendor = vendors[vprop];
      var vendorNode = document.createElement("div");
      vendorNode.innerHTML = "<a class='plain' href='#-2'>" + vprop +"</a>";
      
      vendorNode.children[0].onclick = function () {
        var hs = !this.ishidden ? "hide" : "show";
        this.ishidden = !this.ishidden;
        this.parentNode.className = "vendor " + hs;
      };
      
      for (var lprop in vendor) {
        try {
          var libraryClass = vendor[lprop].Tag;
          var ctest = new libraryClass();
          ctest.unregisterTag();
          if ((ctest) instanceof qubit.opentag.LibraryTag) {
            vendorNode.className = "vendor";
            addLibrary(vendorNode, libraryClass);
          }
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
  
window.callScript = function () {
  loadConfig();
};


//================================================================== UTILS

function fitTextarea(txta) {
    txta.style.overflow = 'hidden';//IE...
    txta.style.height = "0px";
    txta.scrollHeight;//...workaround
    txta.style.height = (25 + txta.scrollHeight) + "px";
    txta.style.overflow = '';//...
}

function toggleShowSibling(start) {
  var next = start.nextSibling;
  while(next && !next.style) {
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

  /**
   * 
   * @param {type} referencingNode
   * @returns {undefined}
   */
  function testTag(referencingNode) {
    try {
      var config = {};

      var clazz = referencingNode.classReference;
      var tagRef = referencingNode.reference;
      var inputs = referencingNode.getElementsByTagName("input");

      config.parameters = [];

      for (var i = 0; i < inputs.length; i++) {

        if (inputs[i].className.indexOf("red") !== -1) {
          alert("Please fill all red fields first");
          return;
        } else {
          if (inputs[i].pindex !== undefined) {
            var idx = inputs[i].pindex;
            config.parameters[idx] = {
              token: tagRef.config.parameters[idx].token,
              variable: {
                value: inputs[i].value
              }
            };

          } else if (inputs[i].cname !== undefined) {
            config[inputs[i].cname] = inputs[i].value;
          }
        }
      }

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
  
  function saveConfig(refNode){
    alert("Saving is not implemented yet.");
  }
  
  
  window.__tmp__qubit__test_page_8_ = null;
  function extractFunctionOrString (expr) {
    var nexpr = qubit.opentag.Utils.trim(expr);
    if (nexpr.indexOf("function") === 0) {
      qubit.opentag.Utils.geval("window.__tmp__qubit__test_page_8_=" + nexpr);
      return window.__tmp__qubit__test_page_8_;
    } else {
      return expr;
    }
  }