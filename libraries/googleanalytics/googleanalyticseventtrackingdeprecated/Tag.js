//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("googleanalytics.googleanalyticseventtrackingdeprecated.Tag", {
	config: {
		/*DATA*/
		name: "Google Analytics Event Tracking DEPRECATED",
		async: true,
		description: "Allow the tracking of custom events on the page through Google Analytics. NOTE: This module does not load in Google Analytics, it simply allows for event tracking. The main GA script should be added separately.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Google.jpeg",
		locationDetail: "",
		priv: true,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Tag Id",
			description: "Individual Container Id",
			token: "TAG_ID",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

  window._gaq = window._gaq || [];
  window._gaq.push(['_trackEvent', '' + this.getValueForToken("category") + '', '' + this.getValueForToken("action") + '', '' + this.getValueForToken("label") + '', '' + this.getValueForToken("value") + '', '' + this.getValueForToken("non_interaction") + '']);
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
