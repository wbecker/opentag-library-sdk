//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("webtrends.webtrendsbasicmultitrack.v1.Tag", {
	config: {
		/*DATA*/
		name: "Webtrends - basic multiTrack",
		async: true,
		description: "Use multiTrack for sending back custom data, or overriding the values from Webtrends' standard set of data.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Custom variables",
			description: "You should return an object (key/value) from within a self executing anonymous function.",
			token: "data",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		Webtrends.multiTrack({
			args: this.valueForToken("data")
		});
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