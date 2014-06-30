//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("drawbridge.drawbridge.v1.Tag", {
	config: {
		/*DATA*/
		name: "Drawbridge",
		async: true,
		description: "Drawbridge provides advertisers with the unique capability of reaching 3rd party Desktop audiences on mobile devices.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "api.adsymptotic.com/js/trackconversion.js",
		usesDocWrite: true,
		upgradeable: true,
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