//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("piwik.piwikbasic.Tag", {
    config: {/*DATA*/
	id: 29669,
	name: "Piwik - Basic",
	async: true,
	description: "Implement the basic Piwik pageview and link tracking.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Piwik.png",
	locationDetail: "",
	priv: true,
	url: "${piwik_url}",
	usesDocWrite: true,
	parameters: [
	{
		id: 28730,
		name: "Piwik URL",
		description: "The URL of your website",
		token: "piwik_url",
		uv: ""
	},
	{
		id: 28731,
		name: "Piwik Site ID",
		description: "The ID of your website",
		token: "piwik_site_id",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
var _paq = _paq || [];
    },/*~PRE*/
    post: function () {/*POST*/
var piwikTracker = Piwik.getTracker('' + this.getValueForToken("piwik_url") + ''+"piwik.php", 1);
piwikTracker.trackPageView();
piwikTracker.enableLinkTracking();
    }/*~POST*/
});
