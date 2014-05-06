//:include tagsdk-current.js
var tagVersion = "";
var classPath = "decibelinsight.allpagestag" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "All Pages Tag",
		async: true,
		description: "Decibel Insight’s ground-breaking visual analytics software introduces the most advanced, innovative and complete heatmapping tool in the world, designed to help businesses of all types and sizes generate better results from their websites.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Decibel.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Decibel Insight Account ID",
			description: "The ID specific to your account given by Decibel",
			token: "account_id",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		window._da_ = window._da_ || [];
		var _da_oldErr = window.onerror;

		_da_.err = [];
		window.onerror = function(e) {
			_da_.err.push(e);
			_da_oldErr && _da_oldErr(e);
		};
		var _this = this;
		(function(d) {
			var da = d.createElement('script');
			da.type = 'text/javascript';
			da.async = 'async';
			da.src = location.protocol + '//decibelinsight.net/i/' +
				_this.valueForToken("account_id") + '/di.js';
			d.getElementsByTagName('head')[0].appendChild(da);
		})(document);

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