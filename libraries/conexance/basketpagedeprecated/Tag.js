//:include tagsdk-current.js
var version = "";
var classPath = "conexance.basketpagedeprecated" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Basket Page [DEPRECATED]",
		async: true,
		description: "Picks up on basket page abandonment",
		html: "<!--@SRC@--><script type=\"text/javascript\">\n(function() {\n\nvar require = function(url, cb) {\n  var script = document.createElement(\"script\");\n  script.type = \"text/javascript\";\n  if (script.readyState) { //IE\n    script.onreadystatechange = function () {\n      if (script.readyState == \"loaded\" || script.readyState == \"complete\") {\n        script.onreadystatechange = null;\n        cb();\n      }\n    };\n  } else { //Others\n    script.onload = cb;\n  }\n  script.src = url;\n  document.getElementsByTagName(\"head\")[0].appendChild(script);\n};\n\n  require(\"${web1by1_function_script}\", function() {\n    require(\"${web1by1_config_script}\", function() {\n      for (var i = 0, ii = ${sku_list}.length; i < ii; i++) {\n        window.w1x1.scAdd(${sku_list}[i], ${quantity_list}[i]);\n      }\n      window.w1x1.scSend();\n    });\n  });\n\n}());\n</script>\n\n\n",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Conexance.gif",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Web1b1 Function Script URL",
			description: "The full URL of the Web1by1 function script i.e. http://www.your-website.com/w1x1.js",
			token: "web1by1_function_script",
			uv: ""
		}, {
			name: "Web1by1 Config Script URL",
			description: "The full URL of the Web1by1 config parameters script (either production or test)",
			token: "web1by1_config_script",
			uv: ""
		}, {
			name: "Basket SKU List",
			description: "An array containing sku codes of the items currently in the basket",
			token: "sku_list",
			uv: "universal_variable.basket.line_items[#].product.sku_code"
		}, {
			name: "Basket Quantity List",
			description: "An array of the quantities of each respective item currently in the basket",
			token: "quantity_list",
			uv: "universal_variable.basket.line_items[#].quantity"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});