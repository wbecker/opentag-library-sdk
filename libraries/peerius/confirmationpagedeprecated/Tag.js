//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("peerius.confirmationpagedeprecated.Tag", {
    config: {/*DATA*/
	id: 33164,
	name: "Confirmation Page - DEPRECATED",
	async: true,
	description: "Peerius tag for the confirmation page",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Peerius.png",
	locationDetail: "",
	priv: true,
	url: "${client_id}.peerius.com/tracker/peerius.page",
	usesDocWrite: false,
	parameters: [
	{
		id: 32169,
		name: "Peerius Language",
		description: "Language of the page the tag is on",
		token: "lang",
		uv: "universal_variable.user.language"
	},
	{
		id: 32170,
		name: "Peerius Transaction Currency",
		description: "The currency of the confirmation page the tag is on",
		token: "currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 32171,
		name: "Peerius Subtotal",
		description: "The total value of the products at the confirmation page stage, minus any shipping",
		token: "subtotal",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 32172,
		name: "Peerius Shipping Cost",
		description: "The cost of shipping at the confirmation page stage",
		token: "shipping",
		uv: "universal_variable.transaction.shipping_cost"
	},
	{
		id: 32173,
		name: "Peerius Checkout Total",
		description: "The total of item and shipping cost in confirmation page",
		token: "total",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 32186,
		name: "Peerius Client Name",
		description: "The name of the client for which the tag is to be implemented",
		token: "client_id",
		uv: ""
	},
	{
		id: 32205,
		name: "Peerius Product IDs List",
		description: "A list of product IDs on the confirmation page",
		token: "product_ids",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 32206,
		name: "Peerius Product Quantities List",
		description: "A list of quantities for items on the confirmation page",
		token: "product_quantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 32207,
		name: "Peerius Unit Sale Price List",
		description: "A list of unit sale prices for items on the confirmation page",
		token: "price_list",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
var PeeriusCallbacks = {
  track: {
    type: "checkout",
    lang: "" + this.getValueForToken("lang") + "",
    checkout: {
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
  PeeriusCallbacks.track.checkout.items.push({
    refCode: this.getValueForToken("product_ids")[i],
    qty: this.getValueForToken("product_quantities")[i],
    price: this.getValueForToken("price_list")[i]
  });
}
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
