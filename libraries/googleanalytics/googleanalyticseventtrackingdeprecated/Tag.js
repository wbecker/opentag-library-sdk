//:include tagsdk-current.js
var tagVersion = "";
var classPath = "googleanalytics.googleanalyticseventtrackingdeprecated" + "." +
	tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Google Analytics Event Tracking DEPRECATED",
		async: true,
		description: "Allow the tracking of custom events on the page through Google Analytics. NOTE: This module does not load in Google Analytics, it simply allows for event tracking. The main GA script should be added separately.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Google.jpeg",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Tag Id",
			description: "Individual Container Id",
			token: "TAG_ID",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		window._gaq = window._gaq || [];
		window._gaq.push(['_trackEvent',
			'' + this.valueForToken("category"),
			'' + this.valueForToken("action"),
			'' + this.valueForToken("label"),
			'' + this.valueForToken("value"),
			'' + this.valueForToken("non_interaction")
		]);

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