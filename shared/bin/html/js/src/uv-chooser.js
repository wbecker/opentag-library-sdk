
function toggleUVSelector(button) {
  if (button.innerHTML === "Close UV Browser") {
    var node = document.getElementById("uv-selector-holder");
    node.innerHTML = "";
    button.innerHTML = "Browse UV";
  } else {
    openUVVariableSelector();
     button.innerHTML = "Close UV Browser";
  }
}

function openUVVariableSelector() {
  var node = document.getElementById("uv-selector-holder");
  node.innerHTML = "";
  renderUVSelector(node);
}

var uvPopupTemplate = document.getElementById("uv-popup-template").innerHTML;
function renderUVSelector(node, selectionCallback) {
  var Utils = qubit.opentag.Utils;
  node.innerHTML = "";
  var e = document.createElement("div");
  e.innerHTML = uvPopupTemplate;
  node.appendChild(e);
  var itemsNode = e.children[0].children[1].children[0].children[0];
  var outputNode = e.children[0].children[2];
  loadUVVariables(function () {
    var UVS = window.UVS;
    for (var i = 0; i < UVS.length; i++) {
      var uv = UVS[i];
      var itemNode = renderUVSelectorItemYoNode(itemsNode, uv);
      
      (function (itemNode) {
        itemNode.onclick = function () {
          outputNode.value = itemNode.expr;
          outputNode.className = "result";
          if (selectionCallback) {
            selectionCallback(itemNode.expr);
          }
        };
      }(itemNode));
    }
  });
}

var uvPopupItemTemplate = document.getElementById("uv-popup-item-template").innerHTML;
function renderUVSelectorItemYoNode(node, uv) {
  var Utils = qubit.opentag.Utils;
  var e = document.createElement("div");
  e.innerHTML = uvPopupItemTemplate;
  var nameNode = e.children[0].children[0];
  var descNode = e.children[0].children[1];
  nameNode.innerHTML = uv.name;
  descNode.innerHTML = uv.description;
  e.expr = uv.expression;
  node.appendChild(e);
  return e;
}

function loadUVVariables(callback) {
  if (window.UVS) {
    if (callback) {
      callback(UVS);
    }
    return;
  }
  
  GET("/shared/bin/html/data/uv.data", function(msg, httpr) {
    if (httpr.status !== 200) {
      alert("Error loading UV data: " + msg);
    }
    try {
      var lines = msg.split("\n");
      var uvs = [];
      var euvs = {};
      for (var i = 0; i < lines.length; i++) {
        var parts = lines[i].split("\t");
        var uv = {
          name: parts[1],
          expression: parts[2],
          description: parts[3]
        };
        euvs[uv.expression] = uv;
        uvs.push(uv);
      }
      
      window.UVS = uvs;
      window.EUVS = euvs;//map by expression string, should be unique
      callback(uvs);
    } catch (ex) {
      logError("Error loading UVs: " + ex);
    }
  });
}
