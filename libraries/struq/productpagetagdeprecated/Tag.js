//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("struq.productpagetagdeprecated.Tag", {
    config: {
      /*DATA*/
	id: 35159,
	name: "Product Page Tag DEPRECATED-",
	async: true,
	description: "To be placed on the product page only",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/struq.png",
	locationDetail: "",
	priv: true,
	url: "media.struq.com/content/scripts/Struq_Pixel_Injector_min_v1-5.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 34158,
		name: "Product ID",
		description: "ID for the product on the current page",
		token: "product_id",
		uv: "universal_variable.product.id"
	}
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
  data: [{
    title: "detail",
    pid: "" + this.getValueForToken("product_id") + ""
  }],
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
