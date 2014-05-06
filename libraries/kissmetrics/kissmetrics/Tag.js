//:include tagsdk-current.js
var tagVersion = "";
var classPath = "kissmetrics.kissmetrics" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Kiss Metrics",
		async: true,
		description: "KISSMetrics tracking tag - ASync",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Kissmetrics.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "API Key",
			description: "Your KISS metrics API key",
			token: "API_KEY",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		var _this = this;
		window._kmq = window._kmq || [];
		(function(w, d) {
			function _kms(u) {
				setTimeout(function() {
					var s = d.createElement('script');
					var f = d.getElementsByTagName('script')[0];
					s.type = 'text/javascript';
					s.async = true;
					s.src = u;
					f.parentNode.insertBefore(s, f);
				}, 1);
			}

			function kmg() {
				_kms('//i.kissmetrics.com/i.js');
				_kms('//doug1izaerwt3.cloudfront.net/' + _this.valueForToken("API_KEY") +
					'.1.js');
			}
			if (w.addEventListener) {
				w.addEventListener("load", kmg, false);
			} else if (w.attachEvent) {
				w.attachEvent("onload", kmg);
			}
		}(window, document))

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