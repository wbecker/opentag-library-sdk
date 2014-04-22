//:include tagsdk-current.js
var version = "";
var classPath = "webtrends.webtrendsbasicmultitrack" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Webtrends - basic multiTrack",
		async: true,
		description: "Use multiTrack for sending back custom data, or overriding the values from Webtrends' standard set of data.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/webtrends.jpg",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
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