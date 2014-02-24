//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("struq.homepagetagdeprecated.Tag", {
    config: {
      /*DATA*/
	id: 35157,
	name: "Home Page Tag DEPRECATED-",
	async: true,
	description: "To be placed on the homepage only",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/struq.png",
	locationDetail: "",
	priv: true,
	url: "media.struq.com/content/scripts/Struq_Pixel_Injector_min_v1-5.js",
	usesDocWrite: false,
	parameters: [

	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/
      /*~SCRIPT*/
    },
    pre: function () {
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
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
