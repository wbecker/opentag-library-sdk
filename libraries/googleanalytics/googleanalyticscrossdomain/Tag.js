//:include tagsdk-current.js
var version = "";
var classPath = "googleanalytics.googleanalyticscrossdomain" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Google Analytics - Cross domain",
		async: true,
		description: "Setup cross domain tracking with GA, using setDomainName and setAllowLinker.",
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
		}, {
			name: "Domain Name",
			description: "The custom domain you want to use, e.g. mydomain.com, subdomain.mydomain.com",
			token: "domain_name",
			uv: ""
		}, {
			name: "Allow Linker",
			description: "Set to true if you want to enable cross domain tracking, set to false otherwise. (boolean)",
			token: "allow_linker",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/


		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', '' + this.valueForToken("profile_id") + '']);
		_gaq.push(['_setDomainName', '' + this.valueForToken("domain_name") + '']);
		_gaq.push(['_setAllowLinker', this.valueForToken("allow_linker")]);
		_gaq.push(['_trackPageview']);

		(function() {
			var ga = document.createElement('script');
			ga.type = 'text/javascript';
			ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' :
				'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(ga, s);
		})();


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