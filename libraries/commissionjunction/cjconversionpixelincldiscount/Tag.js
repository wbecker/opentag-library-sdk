//:include tagsdk-current.js
var version = "";
var classPath = "commissionjunction.cjconversionpixelincldiscount" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "CJ Conversion Pixel incl. Discount",
		async: true,
		description: "The conversion pixel code to enable Commission Junction to track purchases on the confirmation pages. If individual product discounts are available (one at least), then an array of these discounts (of equal length to the number of products) should be used. If no individual product discounts are available, then a total discount should be assigned to the transaction (either zero or whatever value is available). Check documentation on how to calculate the individual product discounts.",
		html: "<!--@SRC@--><script type=\"text/javascript\">\n\n(function() \n{\n  var url = document.location.protocol + \"//www.emjcd.com/tags/c?containerTagId=${container_tag_id}&\";\n  \n  for (var i = 0; i < ${skus}.length;  i++) \n  {\n    url += \"ITEM\" + (i+1) + \"=\" + ${skus}[i] + \"&AMT\" + (i+1) + \"=\" + ${prices}[i] + \"&QTY\" + (i+1) + \"=\" + ${quantities}[i] + \"&\";\n    \n    if (${discounts}.length === ${skus}.length)\n    {\n       url += \"DCNT\" + (i+1) + \"=\" + ${discounts}[i] + \"&\";\n    }\n  }\n  \n  url += \"CID=${enterprise_id}&OID=${order_id}&TYPE=${action_id}&CURRENCY=${currency}\";\n  \n  if (${discounts}.length !== ${skus}.length)\n  {\n     url += \"&DISCOUNT=${discount}\";\n  }\n  \n  var iframe = document.createElement(\"iframe\");\n  iframe.height = 1;\n  iframe.width = 1;\n  iframe.frameBorder = 0;\n  iframe.scrolling = 0;\n  iframe.src = url;\n  document.body.appendChild(iframe);\n}());\n\n</script>",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Container Tag ID",
			description: "Container Tag ID",
			token: "container_tag_id",
			uv: ""
		}, {
			name: "Array of product SKUs",
			description: "Array of product SKUs",
			token: "skus",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Array or product unit sale prices",
			description: "Can be switched to array or product unit prices",
			token: "prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Enterprise ID",
			description: "The Commission Junction Enterprise ID",
			token: "enterprise_id",
			uv: ""
		}, {
			name: "Order ID",
			description: "Order ID",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Action ID",
			description: "Action ID",
			token: "action_id",
			uv: ""
		}, {
			name: "Currency",
			description: "Currency",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Discount",
			description: "0 if no discount or if array of individual discounts is being used.Else use Javascript to calculate.",
			token: "discount",
			uv: ""
		}, {
			name: "Array or Product Quantities",
			description: "Array or Product Quantities",
			token: "quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Array of Individual Product Discounts",
			description: "JS returning empty array if no individual discounts. Else check documentation on how to calculate.",
			token: "discounts",
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