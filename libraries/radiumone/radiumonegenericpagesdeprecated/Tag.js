//:include tagsdk-current.js
var version = "";
var classPath = "radiumone.radiumonegenericpagesdeprecated" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "RadiumOne - Generic Pages DEPRECATED",
		async: true,
		description: "",
		html: "<!--@SRC@--><script type=\"text/javascript\">\n\n(function() {\n\n  // Get timestamp (cachebuster)\n  var time = new Date().getTime();\n\n  // Iframe\n  iframe = document.createElement('iframe');\n  iframe.src = \"//rs.gwallet.com/r1/pixel/x6036r\"+time+\"?shop_id=${shop_id}\";\n  iframe.width = 1;\n  iframe.height = 1;\n  iframe.frameBorder = 0;\n  iframe.marginWidth = 0;\n  iframe.marginHeight = 0;\n  iframe.scrolling = 'no';\n  document.body.appendChild(iframe);\n\n})();\n\n</script>\n\n",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/radiumone.png",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Shop ID",
			description: "The unique ID for the store",
			token: "shop_id",
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