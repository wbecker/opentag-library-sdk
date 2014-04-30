//:include tagsdk-current.js
var version = "";
var classPath = "conexance.basketpage" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Basket Page",
		async: true,
		description: "Picks up on basket page abandonment",
		html: "<!--@SRC@--><script type=\"text/javascript\">\n(function() {\n\n  var safeLoad = function(url, variable, cb) {\n\n    var isLoading = function() {\n      window._sfloadSrcs = window._sfloadSrcs || [];\n      for (var i = 0; i < window._sfloadSrcs; i++) {\n        if (i.toLowerCase() == url.toLowerCase()) {\n          return true;\n        }\n      }\n      return false;\n    };\n\n    var waitForVariable = function() {\n      if (window[variable]) {\n        cb();\n      } else {\n        setTimeout(waitForVariable, 200);\n      }\n    };\n\n    var loadScript = function() {\n      var script = document.createElement(\"script\");\n      script.type = \"text/javascript\";\n      script.src = url;\n      document.getElementsByTagName(\"head\")[0].appendChild(script);\n      window._sfloadSrcs.push(url);\n      waitForVariable();\n    };\n\n    if (window[variable]) {\n      cb();\n    } else if (isLoading()) {\n      waitForVariable();\n    } else {\n      loadScript();\n    }\n\n  };\n\n  var run = function() {\n    for (var i = 0, ii = ${skus}.length; i < ii; i++) {\n      window.w1x1.scAdd(${skus}[i], ${quantities}[i], ${totals_novat}[i], ${totals_vat}[i], ${prices}[i], ${voucher});\n    }\n    window.w1x1.scSend();\n  };\n\n  safeLoad(\"${w1x1_function_url}\", \"_w1x1\", function() {\n    safeLoad(\"${w1x1_config_url}\", \"w1x1\", function() {\n      run();\n    });\n  });\n\n}());\n</script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Conexance.gif",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Web1b1 Function Script URL",
			description: "Full URL of your Web 1b1 script e.g. w1x1.js",
			token: "w1x1_function_url",
			uv: ""
		}, {
			name: "Web1by1 Config Script URL",
			description: "Full URL of your Web1by1 config script",
			token: "w1x1_config_url",
			uv: ""
		}, {
			name: "Basket SKU List",
			description: "Array containg sku codes of items in the user's basket",
			token: "skus",
			uv: "universal_variable.basket.line_items[#].product.sku_code"
		}, {
			name: "Basket Quantities List",
			description: "Array containg quantities of items in the user's basket",
			token: "quantities",
			uv: "universal_variable.basket.line_items[#].quantity"
		}, {
			name: "Basket Totals List - No VAT",
			description: "Array containing total values of each item in the users basket - without VAT",
			token: "totals_novat",
			uv: "universal_variable.basket.line_items[#].subtotal"
		}, {
			name: "Basket Totals List - With VAT",
			description: "Array containing total values of each item in the users basket - with VAT",
			token: "totals_vat",
			uv: "universal_variable.basket.line_items[#].subtotal"
		}, {
			name: "Basket Prices List",
			description: "Array containing single-unit values of each item in the users basket",
			token: "prices",
			uv: "universal_variable.basket.line_items[#].product.unit_price"
		}, {
			name: "Basket Voucher",
			description: "Voucher code applied to basket",
			token: "voucher",
			uv: "universal_variable.basket.voucher"
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