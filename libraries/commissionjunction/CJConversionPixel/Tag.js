//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("commissionjunction.CJConversionPixel", {
    config: {/*DATA*/
	id: 37161,
	name: "CJ Conversion Pixel",
	async: true,
	description: "The conversion pixel code to enable Commission Junction to track purchases on the confirmation pages.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/CommissionJunction.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 36170,
		name: "Item IDs",
		description: "Item IDs",
		token: "item_ids",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 36171,
		name: "Item SKUs",
		description: "Item SKUs",
		token: "item_skus",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 36172,
		name: "Item Quantites",
		description: "Item Quantites",
		token: "item_quantites",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 36173,
		name: "Item Prices",
		description: "Item Prices",
		token: "item_prices",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 36174,
		name: "Order ID",
		description: "Order ID",
		token: "orderid",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 36175,
		name: "Enterprise ID",
		description: "The Commission Junction Enterprise ID",
		token: "cid",
		uv: ""
	},
	{
		id: 36176,
		name: "Currency",
		description: "Currency",
		token: "currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 36177,
		name: "Action ID",
		description: "Action ID",
		token: "actionid",
		uv: ""
	},
	{
		id: 36178,
		name: "Container Tag ID",
		description: "Container Tag ID",
		token: "containerid",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

(function() {
  for (var i = 0, ii = this.getValueForToken("item_ids").length; i < ii; i++) {
    var url = "https://www.emjcd.com/tags/c?containerTagId=" + this.getValueForToken("containerid") + "&ITEM" + (i+1) + "=" + this.getValueForToken("item_skus")[i] + "&AMT" + (i+1) + "=" + this.getValueForToken("item_prices")[i] + "&QTY" + (i+1) + "=" + this.getValueForToken("item_quantites")[i] + "&CID=" + this.getValueForToken("cid") + "&OID=" + this.getValueForToken("orderid") + "&TYPE=" + this.getValueForToken("actionid") + "&CURRENCY=" + this.getValueForToken("currency") + "";
    var iframe = document.createElement("iframe");
    iframe.height = 1;
    iframe.width = 1;
    iframe.frameBorder = 0;
    iframe.scrolling = 0;
    iframe.src = url;
    document.body.appendChild(iframe);
  }
}());


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
