//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("googleanalytics.googleanalyticswithdisplayadvertisingsupport.Tag", {
    config: {/*DATA*/
	id: 36668,
	name: "Google Analytics with display advertising support",
	async: true,
	description: "See https://support.google.com/analytics/answer/2444872 for details.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/GoogleAnalytics.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 35726,
		name: "Profile ID",
		description: "Your unique profile id for GA, e.g. UA-1234567",
		token: "profile_id",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', '' + this.getValueForToken("profile_id") + '']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();



    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
