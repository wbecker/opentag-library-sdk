//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("googleanalytics.googleanalyticscustomdomains.Tag", {
    config: {/*DATA*/
	id: 30159,
	name: "Google Analytics - Custom Domains",
	async: true,
	description: "Allows the collecting of visits to multiple domains in a single profile—as if they were a single site rather than two separate ones.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/GoogleAnalytics.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 29168,
		name: "GA Profile ID",
		description: "Profile ID of your Google Analytics account",
		token: "PROFILE_ID",
		uv: ""
	},
	{
		id: 29169,
		name: "Domain URL",
		description: "In the format www.yourdomain.com or subdomain.yourdomain.com",
		token: "DOMAIN",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

 
 var _gaq = _gaq || [];
 _gaq.push(['_setAccount', '' + this.getValueForToken("PROFILE_ID") + '']);
 _gaq.push(['_setDomainName', '' + this.getValueForToken("DOMAIN") + '']);
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
