//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("deprecatedtags.clicktalebalkandonotuse.v1.Tag", {
	config: {
		/*DATA*/
		name: "ClickTale - balkan - donotuse",
		async: true,
		description: "do not use",
		html: "",
		imageUrl: "http://i.imgur.com/VizCSQb.jpg",
		locationDetail: "",
		isPrivate: true,
		url: "${clicktale_url}",
		usesDocWrite: true,
		parameters: [{
			name: "ClickTale URL",
			description: "Set this to the JavaScript variable 'window.clicktale_url' which is created by the Pre-Script",
			token: "clicktale_url",
			uv: ""
		}, {
			name: "ClickTale HTTPS URL",
			description: "Set this to the HTTPS URL specified in the ClickTale implementation code",
			token: "clicktale_https",
			uv: ""
		}, {
			name: "ClickTale HTTP URL",
			description: "Set this to the HTTP URL specified in the ClickTale implementation code",
			token: "clicktale_http",
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
		window.WRInitTime = (new Date()).getTime();

		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});