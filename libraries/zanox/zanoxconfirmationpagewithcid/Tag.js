//:include tagsdk-current.js
var version = "";
var classPath = "zanox.zanoxconfirmationpagewithcid" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Zanox - Confirmation page with CID",
		async: true,
		description: "The Zanox confirmation page tag with CID parameter",
		html: "<!--@SRC@--><div class=\"zx_${zanox_page_id} zx_mediaslot\">\n  <script type=\"text/javascript\">\n(function() {\n    // Fire the confirmation tag\n    var url = \"//ad.zanox.com/pps/?${program_id}\";\n        url += \"&mode=[[${mode}]]\";\n        url += \"&CID=[[${cid}]]\";\n        url += \"&CustomerID=[[${user_id}]]\";\n        url += \"&OrderID=[[${order_id}]]\";\n        url += \"&CurrencySymbol=[[${currency}]]\";\n        url += \"&TotalPrice=[[${subtotal}]]\";\n        var script = document.createElement('script');\n    script.src = url;\n    script.type = \"text/javascript\";\n    document.body.appendChild(script);\n\n    // Set globals for usage by the master tag\n    var zx_products = [];\n    var zx_transaction = \"${order_id}\";\n    var zx_total_amount = \"${subtotal}\";\n    var zx_total_currency = \"${currency}\";\n\n    // The standard mastertag\n    window._zx = window._zx || [];\n    window._zx.push({\"id\":\"${zanox_page_id}\"});\n    var waitForZanoxDiv = function ()\n    {\n      if (document.querySelector(\".zx_${zanox_page_id}.zx_mediaslot\"))\n      {\n        (function(d)\n        {\n          var s = d.createElement(\"script\"); s.async = true;\n          s.src = (d.location.protocol == \"https:\" ? \"https:\" : \"http:\") + \"//static.zanox.com/scripts/zanox.js\";\n          var a = d.getElementsByTagName(\"script\")[0]; a.parentNode.insertBefore(s, a);\n        }(document));\n      }\n      else\n      {\n        setTimeout(waitForZanoxDiv, 100);\n      }\n    };\n    waitForZanoxDiv();\n})();\n\n  </script>\n</div>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/zanox.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: true,
		parameters: [{
			name: "Zanox Program ID",
			description: "",
			token: "program_id",
			uv: ""
		}, {
			name: "Zanox Test Mode",
			description: "",
			token: "mode",
			uv: ""
		}, {
			name: "Zanox CID",
			description: "Commission Group/User Status",
			token: "cid",
			uv: "universal_variable.user.returning"
		}, {
			name: "Customer ID",
			description: "",
			token: "user_id",
			uv: "universal_variable.user.user_id"
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Currency",
			description: "",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Order Subtotal",
			description: "",
			token: "subtotal",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Zanox Converison Page ID",
			description: "",
			token: "zanox_page_id",
			uv: ""
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