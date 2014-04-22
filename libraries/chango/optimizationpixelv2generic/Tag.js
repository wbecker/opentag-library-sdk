//:include tagsdk-current.js
var version = "";
var classPath = "chango.optimizationpixelv2generic" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Optimization Pixel  [v2] - Generic",
		async: true,
		description: "Chango's optimization pixel is a site-wide data gathering tool used to improve retargeting services. It should fire on every page.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Chango.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "ID",
			description: "",
			token: "ID",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/


		var __cho__ = {
			"data": {
				"pt": "",
				"crt": "",
				"na": "",
				"op": "",
				"sp": "",
				"sku": "",
				"pc": ""
			},
			"pid": this.valueForToken("ID"),
			"puid2": ""
		};
		(function() {
			var c = document.createElement('script');
			c.type = 'text/javascript';
			c.async = true;
			c.src = document.location.protocol + '//cc.chango.com/static/o.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(c, s);
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