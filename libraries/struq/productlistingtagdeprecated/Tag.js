//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("struq.productlistingtagdeprecated.Tag", {
    config: {/*DATA*/
	id: 35158,
	name: "Product Listing Tag DEPRECATED-",
	async: true,
	description: "To be placed only on product listing/search result pages",
	html: "",
	imageUrl: ".",
	locationDetail: "",
	priv: true,
	url: "media.struq.com/content/scripts/Struq_Pixel_Injector_min_v1-5.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 34157,
		name: "Product ID Listing",
		description: "An array containing a list of product IDs",
		token: "product_id_list",
		uv: "universal_variable.listing.items[#].id"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
var _struqPI = _struqPI || [];
var productArr = [];
for (var i = 0, ii = this.getValueForToken("product_id_list").length; i < ii; i++) {
  productArr.push(this.getValueForToken("product_id_list")[i]);
}
var productStr = productArr.join(",");

_struqPI.push(['injectTrackingPixel', {
  trackingPixelId: 'PixelID',
  route: '/s/s/',
  collectData: false,
  data: [{
    title: "si",
    pid: productStr
  }],
  options: {
    timeoutMs: 2000
  }
}]);
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
