//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("struq.deprecatedhomepagetag.v1.Tag", {
	config: {
		/*DATA*/
		name: "[Deprecated] Home Page Tag",
		async: true,
		description: "To be placed on the homepage only",
		html: "",
		imageUrl: "",
		locationDetail: "",
		isPrivate: true,
		url: "media.struq.com/content/scripts/Struq_Pixel_Injector_min_v1-5.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [

		]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		window._struqPI = window._struqPI || [];

		_struqPI.push(['injectTrackingPixel', {
			trackingPixelId: 'PixelID',
			route: '/s/s/',
			collectData: false,
			options: {
				timeoutMs: 2000
			}
		}]);

		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});