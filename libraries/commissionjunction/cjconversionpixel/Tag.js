//:include tagsdk-current.js
var version = "";
var classPath = "commissionjunction.cjconversionpixel" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "CJ Conversion Pixel",
		async: true,
		description: "The conversion pixel code to enable Commission Junction to track purchases on the confirmation pages.",
		html: "<!--@SRC@--><script type=\"text/javascript\">\n(function() {\n  var url = \"https://www.emjcd.com/tags/c?containerTagId=${containerid}&\";\n  for (var i = 0, ii = ${item_ids}.length; i < ii; i++) {\n    url = url + \"ITEM\" + (i+1) + \"=\" + ${item_skus}[i] + \"&AMT\" + (i+1) + \"=\" + ${item_prices}[i] + \"&QTY\" + (i+1) + \"=\" + ${item_quantites}[i] + \"&\";\n  }\n  url = url + \"CID=${cid}&OID=${orderid}&TYPE=${actionid}&CURRENCY=${currency}\";\n  var iframe = document.createElement(\"iframe\");\n  iframe.height = 1;\n  iframe.width = 1;\n  iframe.frameBorder = 0;\n  iframe.scrolling = 0;\n  iframe.src = url;\n  document.body.appendChild(iframe);\n}());\n</script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/CommissionJunction.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Item IDs",
			description: "Item IDs",
			token: "item_ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Item SKUs",
			description: "Item SKUs",
			token: "item_skus",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Item Quantites",
			description: "Item Quantites",
			token: "item_quantites",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Item Prices",
			description: "Item Prices",
			token: "item_prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Order ID",
			description: "Order ID",
			token: "orderid",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Enterprise ID",
			description: "The Commission Junction Enterprise ID",
			token: "cid",
			uv: ""
		}, {
			name: "Currency",
			description: "Currency",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Action ID",
			description: "Action ID",
			token: "actionid",
			uv: ""
		}, {
			name: "Container Tag ID",
			description: "Container Tag ID",
			token: "containerid",
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