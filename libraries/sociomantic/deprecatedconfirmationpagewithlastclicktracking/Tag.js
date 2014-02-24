//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("sociomantic.deprecatedconfirmationpagewithlastclicktracking.Tag", {
    config: {
      /*DATA*/
	id: 36190,
	name: "{DEPRECATED} Confirmation Page (with last click tracking)",
	async: true,
	description: "As confirmation page tag, but with last click tracking",
	html: "",
	imageUrl: ".",
	locationDetail: "",
	priv: false,
	url: "eu-sonar.sociomantic.com/js/2010-07-01/adpan/${advertiser_id}",
	usesDocWrite: false,
	parameters: [
	{
		id: 35311,
		name: "Product ID List",
		description: "A list of product IDs on the confirmation page",
		token: "product_id_list",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 35312,
		name: "Amounts",
		description: "A list of transaction line item amounts",
		token: "amt_list",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 35313,
		name: "Currency",
		description: "The currency of the transaction",
		token: "trans_currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 35314,
		name: "Quantities",
		description: "A list of transaction line item quantities",
		token: "qty_list",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 35315,
		name: "Advertiser ID",
		description: "The ID relating to the client",
		token: "advertiser_id",
		uv: ""
	},
	{
		id: 35316,
		name: "Transaction ID",
		description: "The ID relating to the transaction",
		token: "trans_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 35317,
		name: "Checkout Total",
		description: "The total value of items at checkout",
		token: "trans_total",
		uv: "universal_variable.transaction.subtotal"
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
var sale = {
  confirmed: true
};

var basket = {
   products: []
};

for (var i = 0, ii = this.getValueForToken("product_id_list").length; i < ii; i++) {
   basket.products.push({
      identifier: this.getValueForToken("product_id_list")[i],
      amount: this.getValueForToken("amt_list")[i],
      currency: '' + this.getValueForToken("trans_currency") + '',
      quantity: this.getValueForToken("qty_list")[i]
   });
}

basket.transaction = '' + this.getValueForToken("trans_id") + '';
basket.amount = '' + this.getValueForToken("trans_total") + '';
basket.currency = '' + this.getValueForToken("trans_currency") + '';
window.basket = basket;
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
