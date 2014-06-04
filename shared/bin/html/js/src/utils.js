
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
		var plus = false;
    var cmEditorAttachedAndHidden =
            next.cmNode && next.cmNode.style.display === "none";
    if (cmEditorAttachedAndHidden) {
      next.cmNode.style.display = "";
			plus = true;
    } else if (!next.cmNode && next.style.display === "none") {
      next.style.display = "";
			plus = true;
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
		
		var plusNode = start.children[0];
		if (plusNode && plusNode.getAttribute("plus") === "true") {
			if (plus) {
				plusNode.innerHTML = "-";
			} else {
				plusNode.innerHTML = "+";
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
        matchBrackets: true,
				extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
				foldGutter: true,
				gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
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

function classPath(string) {
  if (string) {
    var chunks = string.split(".");
    for (var i = 0 ; i< chunks.length; i++) {
        var chunk = chunks[i];
				chunk = chunk.replace(/\s+/g,"_");
        chunk = chunk.replace(/[\W+]/g, "");
        if (chunk.match(/^\d+/)) {
					chunk = "_" + chunk;
				}
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

function getLibraryReferenceNode(node) {
  while(node !== null && !node.reference) {
    node = node.parentNode;
  }
  return node;
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
function theProgressBar(title, updater) {
  var progressRunning = false;
  var progressBarTemplate = document.getElementById("progress-bar-template").innerHTML;
  if (progressRunning) {
    return false;
  }
  theProgressBar.title = title;
  progressRunning = true;
  var e = document.createElement("div");
  e.className = "progress-bar";
  e.innerHTML = progressBarTemplate;
  document.body.appendChild(e);
  e.bar = e.children[0].children[0];
  e.titleNode = e.bar.children[0];
  e.titleNode.innerHTML = theProgressBar.title;
  e.progress = e.bar.children[1];
  var checkAgainProgress = function () {
    var val = updater();
    if (val >= 100) {
      e.titleNode.innerHTML = theProgressBar.title + " 100% Done.";
      e.progress.style.width = "100%";
      setTimeout(function () {
        progressRunning = false;
        document.body.removeChild(e);
      }, 200);
    } else {
      e.titleNode.innerHTML = theProgressBar.title + " " + Math.floor(val) + "%";
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

