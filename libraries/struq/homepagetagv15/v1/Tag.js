//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("struq.homepagetagv15.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "Homepage Tag v1.5",
		async: true,
		description: "To be placed on the homepage only",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Pixel ID",
			description: "",
			token: "id",
			uv: ""
		}]
		/*~DATA*/
      };
  },
	script: function() {
		/*SCRIPT*/
		window._struqPI = window._struqPI || [];
		_struqPI.push(['injectTrackingPixel', {
			trackingPixelId: '' + this.valueForToken("id"),
			route: '/s/g/',
			collectData: false,
			options: {
				timeoutMs: 2000
			}
		}]);
		var script = document.createElement("script");
		script.src =
			"//media.struq.com/content/scripts/Struq_Pixel_Injector_min_v1-5.js";
		document.body.appendChild(script);
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