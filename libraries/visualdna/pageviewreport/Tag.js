//:include tagsdk-current.js
var version = "";
var classPath = "visualdna.pageviewreport" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Page View Report",
		async: true,
		description: "This tag should fire across all pages and all other Visual DNA tags should have a dependency on this tag. If normal page transition is being used on the site, then an empty array should be assigned to the \"window.history generated URLs\" parameter, using a JS expression. Otherwise, a 2-element array (containing the current URL and the referrer URL) should be assigned to the \"window.history generated URLs\" parameter using a JS Expression.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/qubit-etc/opentaglogos/visualdna.png",
		locationDetail: "",
		isPrivate: true,
		url: "a1.vdna-assets.com/analytics.js",
		usesDocWrite: false,
		parameters: [{
			name: "API Key",
			description: "API Key",
			token: "api_key",
			uv: ""
		}, {
			name: "Array of window.history generated URLs",
			description: "See tag description for more details",
			token: "window_history",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		window.VDNA = window.VDNA || {};
		window.VDNA.queue = window.VDNA.queue || [];
		var object = {
			apiKey: "" + this.valueForToken("api_key") + "",
			method: "reportPageView"
		};
		if (this.valueForToken("window_history").length === 2) {
			object.args = this.valueForToken("window_history");
		}
		window.VDNA.queue.push(object);
		/*~POST*/
	}
});