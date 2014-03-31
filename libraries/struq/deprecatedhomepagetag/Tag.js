//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("struq.deprecatedhomepagetag.Tag", {
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
var _struqPI = _struqPI || [];

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
