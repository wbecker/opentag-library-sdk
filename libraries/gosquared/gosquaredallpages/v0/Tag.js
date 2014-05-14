//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("gosquared.gosquaredallpages.v0.Tag", {
	config: {
		/*DATA*/
		name: "GoSquared - all pages",
		async: true,
		description: "Real-time analytics for your website. GoSquared helps you understand and improve your online presence.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/gosquared.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Account ID",
			description: "The ID specific to your GoSquared account.",
			token: "account_no",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		window.GoSquared = {};
		GoSquared.acct = "" + this.valueForToken("account_no");
		(function(w) {
			function gs() {
				w._gstc_lt = +(new Date);
				var d = document;
				var g = d.createElement("script");
				g.type = "text/javascript";
				g.async = true;
				g.src = "//d1l6p2sc9645hc.cloudfront.net/tracker.js";
				var s = d.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(g, s);
			}
			w.addEventListener ? w.addEventListener("load", gs, false) : w.attachEvent(
				"onload", gs);
		})(window);

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
