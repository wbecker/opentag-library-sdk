  function className(node, name) {
    try {
      
    } catch (ex) {
      
    }
  }

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
    addParameters(libraryNode.children[3], params);
    addConfig(libraryNode.children[3], instance.config);
    
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
  
  var configTemplate = document.getElementById("config-template").innerHTML;
  function addConfig(anchor ,config) {
    var e = document.createElement("div");
    e.innerHTML = "Config options";
    e.className = "config-header";
    anchor.appendChild(e);
    for(var prop in config) {
      if (prop !== "parameters" &&
              prop !== "PACKAGE" &&
              prop !== "dependencies") {
        var e = document.createElement("div");
        var p = config[prop];
        e.innerHTML = configTemplate;
        e.children[0].className = "config";
        e.getElementsByTagName("input")[0].cname = prop;
       e.getElementsByTagName("label")[0].innerHTML = prop;
        if (p !== undefined) {
          e.getElementsByTagName("input")[0].value = p;
        }
        e.getElementsByTagName("input")[0].entered = true;
        anchor.appendChild(e);
      }
    }
  }
  
  
  
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
        var libraryClass = vendor[lprop].Tag;
        var ctest = new libraryClass();
        ctest.unregisterTag();
        if ((ctest) instanceof qubit.opentag.LibraryTag) {
          vendorNode.className = "vendor";
          addLibrary(vendorNode, libraryClass);
        }
      }
      librariesNode.appendChild(vendorNode);
    }
  }

  function testTag(block) {
    var config = {
    };

    var clazz = block.classReference;
    var ref = block.reference;
    var inputs = block.getElementsByTagName("input");

    config.parameters = [];

    for (var i = 0; i < inputs.length; i++) {

      if (inputs[i].className.indexOf("red") !== -1) {
        alert("Please fill all red fields first");
        return;
      } else {
        if (inputs[i].pindex !== undefined) { 
          var idx = inputs[i].pindex;
          config.parameters[idx] = {
            token: ref.config.parameters[idx].token,
            variable: {
              value: inputs[i].value
            }
          };
          
        } else if (inputs[i].cname !== undefined) {
          config[inputs[i].cname] = inputs[i].value;
        }
      }
    }
    
    
    var instance = new clazz(config);
    instance.run();
    
    instance.log.INFO("Currently executed tag instance is exposed as: window.instance");
    
    window.instance = instance;
  }
  
window.callScript = function () {
  loadConfig();
};