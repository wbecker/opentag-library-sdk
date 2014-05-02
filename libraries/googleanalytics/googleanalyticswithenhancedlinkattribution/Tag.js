//:include tagsdk-current.js
var version = "";
var classPath = "googleanalytics.googleanalyticswithenhancedlinkattribution" +
	version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Google Analytics with Enhanced Link Attribution",
		async: true,
		description: "Enhanced link attribution offers more-detailed reports, and disambiguates clicks to the same destination page that come from more than one element on the page. However, the additional detail comes at the cost of some speed in generating the report, so only turn it on if you need it.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/GoogleAnalytics.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "GA Profile Id",
			description: "Please enter your Google Analytics profile Id here. Example UA-123123-12",
			token: "PROFILE_ID",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		window._gaq = window._gaq || [];
		var pluginUrl =
			'//www.google-analytics.com/plugins/ga/inpage_linkid.js';
		_gaq.push(['_require', 'inpage_linkid', pluginUrl]);
		_gaq.push(['_setAccount', '' + this.valueForToken("PROFILE_ID")]);
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