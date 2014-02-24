//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("struq.productpagetagv19.Tag", {
    config: {
      /*DATA*/
	id: 38160,
	name: "Product Page Tag v1.9",
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
		id: 37159,
		name: "Product Page Pixel ID",
		description: "",
		token: "pixelid",
		uv: ""
	},
	{
		id: 37160,
		name: "Product ID",
		description: "",
		token: "productid",
		uv: "universal_variable.product.id"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

window._struqPI = window._struqPI || [];
_struqPI.push(['injectTrackingPixel', {
	trackingPixelId: '' + this.getValueForToken("pixelid") + '',
	route: '/s/sa/',
	collectData: false,
    data: [
		{ title: "detail", pid: "" + this.getValueForToken("productid") + ""}
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
