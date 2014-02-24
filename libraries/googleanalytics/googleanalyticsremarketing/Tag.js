//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("googleanalytics.googleanalyticsremarketing.Tag", {
    config: {/*DATA*/
	id: 36172,
	name: "Google Analytics Remarketing",
	async: true,
	description: "A Google Analytics tracking tag which reports information to the doubleclick servers for remarketing purposes.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/GoogleAnalytics.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 35231,
		name: "GA Profile Id",
		description: "Please enter your Google Analytics profile Id here. Example: UA-123123-12",
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
    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();



    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
