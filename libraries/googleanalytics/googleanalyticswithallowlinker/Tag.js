//:include tagsdk-current.js
var tagVersion = "";
var classPath = "googleanalytics.googleanalyticswithallowlinker" + "." +
	tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Google Analytics - with allowLinker",
		async: true,
		description: "Setup cross domain tracking with GA, using just setAllowLinker (assumes domain will be set dynamically elsewhere)",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/GoogleAnalytics.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "GA Profile ID",
			description: "Please enter your Google Analytics profile Id here. Example UA-123123-12",
			token: "profile_id",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/


		window._gaq = window._gaq || [];
		_gaq.push(['_setAccount', '' + this.valueForToken("profile_id")]);
		_gaq.push(['_setAllowLinker', true]);
		_gaq.push(['_trackPageview']);

		var ga = document.createElement('script');
		ga.type = 'text/javascript';
		ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' :
			'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(ga, s);


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