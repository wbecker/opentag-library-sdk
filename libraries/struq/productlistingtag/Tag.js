//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("struq.productlistingtag.Tag", {
    config: {
      /*DATA*/
	id: 28660,
	name: "Product Listing Tag",
	async: true,
	description: "To be placed only on product listing/search result pages",
	html: "",
	imageUrl: ".",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 28165,
		name: "Pixel ID",
		description: "",
		token: "id",
		uv: ""
	},
	{
		id: 28166,
		name: "Product ID List",
		description: "",
		token: "product_id_list",
		uv: "universal_variable.listing.items[#].id"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

var _struqPI = _struqPI || [];
var productArr = [];
for (var i = 0, ii = this.getValueForToken("product_id_list").length; i < ii; i++) {
  productArr.push(this.getValueForToken("product_id_list")[i]);
}
var productStr = productArr.join(",");

_struqPI.push(['injectTrackingPixel', {
  trackingPixelId: '' + this.getValueForToken("id") + '',
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
var script = document.createElement("script");
script.src = "//media.struq.com/content/scripts/Struq_Pixel_Injector_min_v1-5.js";
document.body.appendChild(script);


      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
