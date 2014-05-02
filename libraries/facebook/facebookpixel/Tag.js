//:include tagsdk-current.js
var tagVersion = "";
var classPath = "facebook.facebookpixel" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Facebook Pixel",
		async: true,
		description: "",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/FacebookLogo.png",
		locationDetail: "",
		isPrivate: false,
		url: "connect.facebook.net/${url_locale}/fp.js",
		usesDocWrite: false,
		parameters: [{
			name: "FB Country Code",
			description: "e.g. en_UK ( if not sure, use : en_US )",
			token: "url_locale",
			uv: ""
		}, {
			name: "Pixel ID",
			description: "Client Specific (e.g. 6007143437659)",
			token: "pixel_id",
			uv: ""
		}, {
			name: "Value",
			description: "if not on Transaction Page, use following hardcoded value  instead : 0.00",
			token: "param_value",
			uv: "universal_variable.transaction.total"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		window.fb_param = {};
		fb_param.pixel_id = '' + this.valueForToken("pixel_id");
		fb_param.value = '' + this.valueForToken("param_value");
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});