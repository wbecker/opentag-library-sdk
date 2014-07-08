//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("firefly.generictag.v1.Tag", {
	config: {
		/*DATA*/
		name: "Generic Tag",
		async: true,
		description: "The standard Firefly tag",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "firefly-071591.s3.amazonaws.com/scripts/loaders/loader.js",
		usesDocWrite: false,
		upgradeable: true,
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
		fireflyAPI.token = "" + this.valueForToken("client_id");
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});