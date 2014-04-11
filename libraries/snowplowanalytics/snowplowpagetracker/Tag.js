//:include tagsdk-current.js
var version = "";
var classPath = "snowplowanalytics.snowplowpagetracker" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Snowplow PageTracker",
		async: true,
		description: "Snowplow Analytics is a web analytics platform. Rather than deliver a canned set of reports, Snowplow delivers your granular, event-level and customer-level data into your own data warehouse, so you can perform any analysis on that data you want, with any tool you want, including Tableau, Excel, R, ChartIO etc.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/snowplow.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Cloudfront Domain",
			description: "Your cloudfront domain hosting Snowplow",
			token: "cloudfront",
			uv: ""
		}, {
			name: "Site ID",
			description: "The ID of your site",
			token: "siteid",
			uv: ""
		}, {
			name: "Cookie Domain",
			description: "The cookie domain for your tracking",
			token: "cookiedomain",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		var _snaq = _snaq || [];

		_snaq.push(['setCollectorCf', '' + this.valueForToken("cloudfront") + '']);
		_snaq.push(['setAppId', '' + this.valueForToken("siteid") + '']);
		_snaq.push(['setCookieDomain', '' + this.valueForToken("cookiedomain") + ''])
		_snaq.push(['trackPageView']);

		(function() {
			var sp = document.createElement('script');
			sp.type = 'text/javascript';
			sp.async = true;
			sp.defer = true;
			sp.src = ('https:' == document.location.protocol ? 'https' : 'http') +
				'://d1fc8wv8zag5ca.cloudfront.net/0.12.0/sp.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(sp, s);
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