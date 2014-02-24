//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("googleanalytics.googleanalyticscrossdomain.Tag", {
    config: {
      /*DATA*/
	id: 34678,
	name: "Google Analytics - Cross domain",
	async: true,
	description: "Setup cross domain tracking with GA, using setDomainName and setAllowLinker.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/GoogleAnalytics.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 33764,
		name: "GA Profile ID",
		description: "Please enter your Google Analytics profile Id here. Example UA-123123-12",
		token: "profile_id",
		uv: ""
	},
	{
		id: 33765,
		name: "Domain Name",
		description: "The custom domain you want to use, e.g. mydomain.com, subdomain.mydomain.com",
		token: "domain_name",
		uv: ""
	},
	{
		id: 33766,
		name: "Allow Linker",
		description: "Set to true if you want to enable cross domain tracking, set to false otherwise. (boolean)",
		token: "allow_linker",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

 
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', '' + this.getValueForToken("profile_id") + '']);
  _gaq.push(['_setDomainName', '' + this.getValueForToken("domain_name") + '']);
  _gaq.push(['_setAllowLinker', this.getValueForToken("allow_linker")]);
  _gaq.push(['_trackPageview']);
 
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
 


      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
