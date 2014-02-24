//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("peerius.confirmationpage.Tag", {
    config: {
      /*DATA*/
	id: 36158,
	name: "Confirmation Page",
	async: true,
	description: "Peerius tag for the confirmation page, where 'type' = 'order'.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Peerius.png",
	locationDetail: "",
	priv: false,
	url: "${client_id}.peerius.com/tracker/peerius.page",
	usesDocWrite: false,
	parameters: [
	{
		id: 35166,
		name: "Peerius Client Name",
		description: "The name of the client for which the tag is to be implemented",
		token: "client_id",
		uv: ""
	},
	{
		id: 35167,
		name: "Peerius Language",
		description: "Language of the page the tag is on",
		token: "lang",
		uv: "universal_variable.user.language"
	},
	{
		id: 35168,
		name: "Peerius Order ID",
		description: "The unique ID for this transaction",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 35169,
		name: "Peerius Transaction Currency",
		description: "The currency of the confirmation page the tag is on",
		token: "currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 35170,
		name: "Peerius Subtotal",
		description: "The total value of the products at the confirmation page stage, minus any shipping",
		token: "subtotal",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 35171,
		name: "Peerius Shipping Cost",
		description: "The cost of shipping at the confirmation page stage",
		token: "shipping",
		uv: "universal_variable.transaction.shipping_cost"
	},
	{
		id: 35172,
		name: "Peerius Checkout Total",
		description: "The total of item and shipping cost in confirmation page",
		token: "total",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 35173,
		name: "Peerius Product IDs List",
		description: "A list of product IDs on the confirmation page",
		token: "product_ids",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 35174,
		name: "Peerius Product Quantities List",
		description: "A list of quantities for items on the confirmation page",
		token: "product_quantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 35175,
		name: "Peerius Unit Sale Price List",
		description: "A list of unit sale prices for items on the confirmation page",
		token: "price_list",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
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
var PeeriusCallbacks = {
  track: {
    type: "order",
    lang: "" + this.getValueForToken("lang") + "",
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
var ii = this.getValueForToken("product_ids").length;
for (var i = 0; i < ii; i++) {
  PeeriusCallbacks.track.order.items.push({
    refCode: this.getValueForToken("product_ids")[i],
    qty: this.getValueForToken("product_quantities")[i],
    price: this.getValueForToken("price_list")[i]
  });
}
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
