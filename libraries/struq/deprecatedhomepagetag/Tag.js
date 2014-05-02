//:include tagsdk-current.js
var version = "";
var classPath = "struq.deprecatedhomepagetag" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "[Deprecated] Home Page Tag",
		async: true,
		description: "To be placed on the homepage only",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/struq.png",
		locationDetail: "",
		isPrivate: true,
		url: "media.struq.com/content/scripts/Struq_Pixel_Injector_min_v1-5.js",
		usesDocWrite: false,
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