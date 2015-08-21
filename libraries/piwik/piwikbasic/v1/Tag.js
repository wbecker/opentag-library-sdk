//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("piwik.piwikbasic.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "Piwik - Basic",
		async: true,
		description: "Implement the basic Piwik pageview and link tracking.",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "${piwik_url}",
		usesDocWrite: true,
		upgradeable: true,
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
		};
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
		window.piwikTracker = Piwik.getTracker(this.valueForToken("piwik_url") +
				"piwik.php", 1);
		piwikTracker.trackPageView();
		piwikTracker.enableLinkTracking();
		/*~POST*/
	}
});