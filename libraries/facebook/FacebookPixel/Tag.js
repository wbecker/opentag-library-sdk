//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("facebook.FacebookPixel", {
    config: {/*DATA*/
	id: 33177,
	name: "Facebook Pixel",
	async: true,
	description: "",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/FacebookLogo.png",
	locationDetail: "",
	priv: false,
	url: "connect.facebook.net/${url_locale}/fp.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 32226,
		name: "FB Country Code",
		description: "e.g. en_UK ( if not sure, use : en_US )",
		token: "url_locale",
		uv: ""
	},
	{
		id: 32227,
		name: "Pixel ID",
		description: "Client Specific (e.g. 6007143437659)",
		token: "pixel_id",
		uv: ""
	},
	{
		id: 32228,
		name: "Value",
		description: "if not on Transaction Page, use following hardcoded value  instead : 0.00",
		token: "param_value",
		uv: "universal_variable.transaction.total"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
var fb_param = {};
fb_param.pixel_id = '' + this.getValueForToken("pixel_id") + '';
fb_param.value = '' + this.getValueForToken("param_value") + '';
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
