//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("struq.listingpagetagv19.Tag", {
    config: {
      /*DATA*/
	name: "Listing Page Tag v1.9",
	async: true,
	description: "",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/struq.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		name: "Struq Listing Page Pixel ID",
		description: "",
		token: "pixelid",
		uv: ""
	},
	{
		name: "Product IDs",
		description: "",
		token: "products",
		uv: "universal_variable.listing.items[#].id"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

window._struqPI = window._struqPI || [];
var productArr = [];
for (var i = 0, ii = this.getValueForToken("products").length; i < ii; i++) {
  productArr.push(this.getValueForToken("products")[i]);
}
var productStr = productArr.join(",");
_struqPI.push(['injectTrackingPixel', {
	trackingPixelId: '' + this.getValueForToken("pixelid") + '',
	route: '/s/sa/',
	collectData: false,
    data: [
		{ title: "si", pid: productStr}
	],
	options: { timeoutMs: 2000, firstPartyDomain: '', firstPartyCookie: '', firstPartyUid: '' }
}]);

var struq = document.createElement('script'); struq.type = 'text/javascript'; struq.async = true;
struq.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'media.struq.com/content/scripts/Struq_Pixel_Injector_min_v1-9.js';
document.getElementsByTagName('head')[0].appendChild(struq);


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
