//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"googleanalytics.googleanalyticsremarketing.v1.Tag", {
		config: {
			/*DATA*/
			name: "Google Analytics Remarketing",
			async: true,
			description: "A Google Analytics tracking tag which reports information to the doubleclick servers for remarketing purposes.",
			html: "",
			imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/GoogleAnalytics.png",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "GA Profile Id",
				description: "Please enter your Google Analytics profile Id here. Example: UA-123123-12",
				token: "PROFILE_ID",
				uv: ""
			}]
			/*~DATA*/
		},
		script: function() {
			/*SCRIPT*/

			window._gaq = window._gaq || [];
			_gaq.push(['_setAccount', '' + this.valueForToken("PROFILE_ID")]);
			_gaq.push(['_trackPageview']);

			var ga = document.createElement('script');
			ga.type = 'text/javascript';
			ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') +
				'stats.g.doubleclick.net/dc.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(ga, s);


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