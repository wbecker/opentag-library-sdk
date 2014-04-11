//:include tagsdk-current.js
var version = "";
var classPath = "clicktale.clicktalebalkan" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "ClickTale - Balkan",
		async: true,
		description: "New Balkan version of ClickTale mouse tracking",
		html: "",
		imageUrl: "http://i.imgur.com/VizCSQb.jpg",
		locationDetail: "",
		isPrivate: false,
		url: "${clicktale_url}",
		usesDocWrite: true,
		parameters: [{
			name: "ClickTale URL",
			description: "Fill this dynamically with HTTPS or HTTP URL using JavaScript variable",
			token: "clicktale_url",
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