//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("drawbridge.drawbridge.Tag", {
    config: {/*DATA*/
	id: 39685,
	name: "Drawbridge",
	async: true,
	description: "Drawbridge provides advertisers with the unique capability of reaching 3rd party Desktop audiences on mobile devices.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Drawbridge.png",
	locationDetail: "",
	priv: false,
	url: "api.adsymptotic.com/js/trackconversion.js",
	usesDocWrite: true,
	parameters: [
	{
		id: 38805,
		name: "Drawbridge Partner ID",
		description: "The partner ID given to you by Drawbridge",
		token: "partner_id",
		uv: ""
	},
	{
		id: 38806,
		name: "Drawbridge Partner Sign",
		description: "The partner sign provided to you by Drawbridge",
		token: "partner_sign",
		uv: ""
	},
	{
		id: 38807,
		name: "Drawbridge App ID",
		description: "The application ID provided to you by Drawbridge",
		token: "app_id",
		uv: ""
	},
	{
		id: 38808,
		name: "Drawbridge Label",
		description: "The label for the specific implementation of Drawbridge",
		token: "label",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
var drawbridge_partner_id = "" + this.getValueForToken("partner_id") + "";
var drawbridge_partner_sign = "" + this.getValueForToken("partner_sign") + "";
var drawbridge_app_id = "" + this.getValueForToken("app_id") + "";
var drawbridge_label = "" + this.getValueForToken("label") + "";
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
