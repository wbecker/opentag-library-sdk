//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("struq.ConfirmationPageTag", {
    config: {/*DATA*/
	id: 35161,
	name: "Confirmation Page Tag",
	async: true,
	description: "To be placed on the confirmation page only. Make sure that the order total is a valid number and has a dot as decimal point.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/struq.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 34160,
		name: "Confirmation Product ID List",
		description: "An array of all the confirmation IDs on the confirmation page",
		token: "p_id_list",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 34161,
		name: "Confirmation Order ID",
		description: "The ID of the transaction",
		token: "confirmation_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 34162,
		name: "Confirmation Order Total",
		description: "The total cost of the transaction i.e. 233.33",
		token: "confirmation_total",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 34163,
		name: "Confirmation Currency",
		description: "The currency of the conversion/transaction",
		token: "confirmation_currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 34168,
		name: "Pixel ID",
		description: "The id specific to the client",
		token: "id",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

var _struqPI = _struqPI || [];

var productArr = [];
for(var i = 0, ii = this.getValueForToken("p_id_list").length; i < ii; i++) {
  productArr.push(this.getValueForToken("p_id_list")[i]);
}

var productIDStr = productArr.join(",");

_struqPI.push(['injectTrackingPixel', {
  trackingPixelId: '' + this.getValueForToken("id") + '',
  route: '/s/cd/',
  collectData: false,
  data: [{
    title: "li",
    pid: productIDStr,
    qty: "1",
    tv: "1"
  }, {
    title: "summary",
    oid: "" + this.getValueForToken("confirmation_id") + "",
    tot: "" + this.getValueForToken("confirmation_total") + "",
    dis: "0",
    cur: "" + this.getValueForToken("confirmation_currency") + ""
  }],
  options: {
    timeoutMs: 2000
  }
}]);
var script = document.createElement("script");
script.src = "//media.struq.com/content/scripts/Struq_Pixel_Injector_min_v1-5.js";
document.body.appendChild(script);


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
