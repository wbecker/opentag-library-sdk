//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("struq.basketpagetagv19us.Tag", {
    config: {
      /*DATA*/
	id: 39159,
	name: "Basket Page Tag v1.9 (US)",
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
		id: 38180,
		name: "Struq Basket Page Pixel ID",
		description: "",
		token: "pixelid",
		uv: ""
	},
	{
		id: 38181,
		name: "Struq Product List",
		description: "",
		token: "products",
		uv: "universal_variable.basket.line_items[#].product.id"
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
struq.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'media.struq.com/content/scripts/Struq_Us_Pixel_Injector_min_v1-9.js';
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
