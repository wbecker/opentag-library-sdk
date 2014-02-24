//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("struq.conversiontagv19.Tag", {
    config: {
      /*DATA*/
	id: 38163,
	name: "Conversion Tag v1.9",
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
		id: 37165,
		name: "Struq Conversion Pixel ID",
		description: "",
		token: "pixelid",
		uv: ""
	},
	{
		id: 37166,
		name: "Order Total",
		description: "",
		token: "ordertotal",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 37167,
		name: "Order ID",
		description: "",
		token: "orderid",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 37168,
		name: "Products",
		description: "",
		token: "products",
		uv: "universal_variable.transaction.line_items[#].product.id"
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
	route: '/s/cda/',
	collectData: false,
	data: [
		{ title: "li", pid: productStr, qty: "1", tv: "1"},
		{ title: "summary", oid: "" + this.getValueForToken("orderid") + "", tot: "" + this.getValueForToken("ordertotal") + "", dis: "0", cur: ""}
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
