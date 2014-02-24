//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("googleanalytics.googleanalyticssingledomain.Tag", {
    config: {/*DATA*/
	id: 4,
	name: "Google Analytics - Single domain",
	async: true,
	description: "Google Analytics is the enterprise class web analytics solution that gives you rich insights into your website traffic and marketing effectiveness. Powerful, flexible and easy to use features now let you see and analyze your traffic data in an entirely new way. With Google Analytics, you're more prepared to write better targeted ads, strengthen your marketing initiatives and create higher converting websites.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/GoogleAnalytics.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 2,
		name: "GA Profile Id",
		description: "Please enter your Google Analytics profile Id here. Example UA-123123-12",
		token: "PROFILE_ID",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', '' + this.getValueForToken("PROFILE_ID") + '']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();



    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
