//:include tagsdk-current.js
var version = "";
var classPath = "firefly.generictag" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Generic Tag",
		async: true,
		description: "The standard Firefly tag",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Firefly.png",
		locationDetail: "",
		isPrivate: false,
		url: "firefly-071591.s3.amazonaws.com/scripts/loaders/loader.js",
		usesDocWrite: false,
		parameters: [{
			name: "Firefly Token",
			description: "The token specific to the client using Firefly",
			token: "client_id",
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
		window.fireflyAPI = {};
		fireflyAPI.token = "" + this.valueForToken("client_id") + "";


		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});