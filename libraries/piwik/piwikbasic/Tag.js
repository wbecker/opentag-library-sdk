//:include tagsdk-current.js
var version = "";
var classPath = "piwik.piwikbasic.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Piwik - Basic",
		async: true,
		description: "Implement the basic Piwik pageview and link tracking.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Piwik.png",
		locationDetail: "",
		isPrivate: true,
		url: "${piwik_url}",
		usesDocWrite: true,
		parameters: [{
			name: "Piwik URL",
			description: "The URL of your website",
			token: "piwik_url",
			uv: ""
		}, {
			name: "Piwik Site ID",
			description: "The ID of your website",
			token: "piwik_site_id",
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
		var _paq = _paq || [];
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		var piwikTracker = Piwik.getTracker('' + this.valueForToken("piwik_url") + '' + "piwik.php", 1);
		piwikTracker.trackPageView();
		piwikTracker.enableLinkTracking();
		/*~POST*/
	}
});