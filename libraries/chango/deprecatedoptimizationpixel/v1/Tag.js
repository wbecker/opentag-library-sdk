//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("chango.deprecatedoptimizationpixel.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "[DEPRECATED] Optimization Pixel",
		async: true,
		description: "Chango's optimization pixel is a site-wide data gathering tool used to improve retargeting services. It should fire on every page.",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "//cc.chango.com/static/o.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Account ID",
			description: "Your Chango Account ID",
			token: "id",
			uv: ""
		}]
		/*~DATA*/
		};
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		window.__cho__ = {
			"pid": this.valueForToken("id")
		};
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});