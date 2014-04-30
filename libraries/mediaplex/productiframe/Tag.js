//:include tagsdk-current.js
var version = "";
var classPath = "mediaplex.productiframe" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Product iframe",
		async: true,
		description: "The product iframe passes a pageview, product SKU, and the category/subcategory the product belongs in.",
		html: "<!--@SRC@--><script type=\"text/javascript\">\n(function(){\n\n  var frame = document.createElement(\"iframe\");\n  var src = (document.location.protocol === \"https:\") ? \"https://secure.\" : \"http://\";\n  src = src + \"img-cdn.mediaplex.com/0/${client_id}/universal.html?page_name=${page_name}&${event_name}=1&Primary_Category=${category}&Sub_Category=${subcategory}&SKU=${product_sku}&mpuid=\";\n  frame.src = src;\n  frame.height = 1;\n  frame.width = 1;\n  frame.frameborder = 0;\n  document.body.appendChild(frame);\n\n})();\n</script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/mediaplex.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Mediaplex Client ID",
			description: "The ID assigned to you by Mediaplex",
			token: "client_id",
			uv: ""
		}, {
			name: "Page Name",
			description: "The name of the page being accessed. Typically all lowercase, with underscores",
			token: "page_name",
			uv: ""
		}, {
			name: "Event Name",
			description: "The name of the event triggered. Typically, this is a CamelCased version of the page name",
			token: "event_name",
			uv: ""
		}, {
			name: "Page Category",
			description: "The category of the page the user is viewing",
			token: "category",
			uv: "universal_variable.page.category"
		}, {
			name: "Page Subategory",
			description: "The subcategory of the page the user is viewing",
			token: "subcategory",
			uv: "universal_variable.page.subcategory"
		}, {
			name: "Product SKU",
			description: "The SKU of the product the user is currently viewing",
			token: "product_sku",
			uv: "universal_variable.product.sku_code"
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