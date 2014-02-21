//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("peerius.ConfirmationPageAsync", {
    config: {/*DATA*/
	id: 39680,
	name: "Confirmation Page (Async)",
	async: true,
	description: "For use in single page checkouts, when transaction can happen after page load (virtual page views)",
	html: "",
	imageUrl: ".",
	locationDetail: "",
	priv: false,
	url: "${client_id}.peerius.com/tracker/peerius.page",
	usesDocWrite: false,
	parameters: [
	{
		id: 38765,
		name: "Peerius Client ID",
		description: "The client ID given to you from Peerius",
		token: "client_id",
		uv: ""
	},
	{
		id: 38766,
		name: "Transaction Order ID",
		description: "The ID for the transaction",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 38767,
		name: "Transaction Order Currency",
		description: "The currency used for the order",
		token: "currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 38768,
		name: "Transaction Order Language",
		description: "The language used in the transaction",
		token: "language",
		uv: "universal_variable.user.language"
	},
	{
		id: 38769,
		name: "Transaction Sub-total",
		description: "The total cost for the transaction excluding shipping cost and tax",
		token: "subtotal",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 38770,
		name: "Transaction Total",
		description: "The total cost for the order including tax and shipping",
		token: "total",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 38771,
		name: "Transaction Order Shipping",
		description: "The cost of shipping",
		token: "shipping",
		uv: "universal_variable.transaction.shipping_cost"
	},
	{
		id: 38772,
		name: "Transaction Product ID List",
		description: "The list of IDs for products in the order",
		token: "product_id_list",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 38773,
		name: "Transaction Product Quantity List",
		description: "The list of quantities for products in the basket",
		token: "product_qty_list",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 38774,
		name: "Transaction Unit Sale Price List",
		description: "The list of unit sale prices corresponding to items in the order",
		token: "unit_sale_price_list",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 38804,
		name: "AJAX Url Start",
		description: "The start of the URL in the ajax request: often just the Peerius client ID",
		token: "url_start",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
var PeeriusCallbacks = {
  track: {
    type: "order",
    lang: "" + this.getValueForToken("language") + "",
    order: {
      orderNo: "" + this.getValueForToken("order_id") + "",
      items: [],
      currency: "" + this.getValueForToken("currency") + "",
      subtotal: "" + this.getValueForToken("subtotal") + "",
      shipping: "" + this.getValueForToken("shipping") + "",
      total: "" + this.getValueForToken("total") + ""
    }
  }
};
var ii = this.getValueForToken("product_id_list").length;
for (var i = 0; i < ii; i++) {
  PeeriusCallbacks.track.order.items.push({
    refCode: this.getValueForToken("product_id_list")[i],
    qty: this.getValueForToken("product_qty_list")[i],
    price: this.getValueForToken("unit_sale_price_list")[i]
  });
}
    },/*~PRE*/
    post: function () {/*POST*/
var orderString = JSON.stringify(PeeriusCallbacks.track.order);
var order = encodeURIComponent(orderString);
Peerius.sendAjax("" + this.getValueForToken("url_start") + "" + "/order/add.pagex?order=" + order);
    }/*~POST*/
});
