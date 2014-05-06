//:include tagsdk-current.js
var tagVersion = "";
var classPath = "drawbridge.drawbridge" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Drawbridge",
		async: true,
		description: "Drawbridge provides advertisers with the unique capability of reaching 3rd party Desktop audiences on mobile devices.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Drawbridge.png",
		locationDetail: "",
		isPrivate: false,
		url: "api.adsymptotic.com/js/trackconversion.js",
		usesDocWrite: true,
		parameters: [{
			name: "Drawbridge Partner ID",
			description: "The partner ID given to you by Drawbridge",
			token: "partner_id",
			uv: ""
		}, {
			name: "Drawbridge Partner Sign",
			description: "The partner sign provided to you by Drawbridge",
			token: "partner_sign",
			uv: ""
		}, {
			name: "Drawbridge App ID",
			description: "The application ID provided to you by Drawbridge",
			token: "app_id",
			uv: ""
		}, {
			name: "Drawbridge Label",
			description: "The label for the specific implementation of Drawbridge",
			token: "label",
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
		window.drawbridge_partner_id  =  "" + this.valueForToken("partner_id");
		window.drawbridge_partner_sign  =  "" + this.valueForToken("partner_sign");
		window.drawbridge_app_id  =  "" + this.valueForToken("app_id");
		window.drawbridge_label  =  "" + this.valueForToken("label");

		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});