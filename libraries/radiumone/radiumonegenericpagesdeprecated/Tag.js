//:include tagsdk-current.js
var tagVersion = "";
var classPath = "radiumone.radiumonegenericpagesdeprecated" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "RadiumOne - Generic Pages DEPRECATED",
		async: true,
		description: "",
		html: "\n\n",
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
		// Get timestamp (cachebuster)
		var time = new Date().getTime();
		// Iframe
		iframe = document.createElement('iframe');
		iframe.src = "//rs.gwallet.com/r1/pixel/x6036r" + time + "?shop_id=" +
			this.valueForToken("shop_id");
		iframe.width = 1;
		iframe.height = 1;
		iframe.frameBorder = 0;
		iframe.marginWidth = 0;
		iframe.marginHeight = 0;
		iframe.scrolling = 'no';
		document.body.appendChild(iframe);

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