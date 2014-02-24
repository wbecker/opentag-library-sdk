//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("sociomantic.deprecatedconfirmationpagetag.Tag", {
    config: {
      /*DATA*/
	id: 30169,
	name: "{DEPRECATED} Confirmation Page Tag",
	async: true,
	description: "The transaction ID is required on the Confirmation page along with extra information such as currency, amounts, quantities, checkout total and product IDs",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/sociomantic.jpg",
	locationDetail: "",
	priv: false,
	url: "eu-sonar.sociomantic.com/js/2010-07-01/adpan/${advertiserid}",
	usesDocWrite: false,
	parameters: [
	{
		id: 29198,
		name: "Products Ids",
		description: "A list of product IDs currently in the basket",
		token: "product_ids",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 29199,
		name: "Amounts",
		description: "A list of prices of items currently in the basket",
		token: "amounts",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 29200,
		name: "Currency",
		description: "The current currency in the basket",
		token: "currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 29201,
		name: "Quantities",
		description: "A list of the respective quantities of corresponding items currently in the basket.",
		token: "quantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 29202,
		name: "Advertiser ID",
		description: "Identifier relating to the specific client",
		token: "advertiserid",
		uv: ""
	},
	{
		id: 29203,
		name: "Transaction ID",
		description: "Identifier relating to the current transaction",
		token: "transaction_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 29204,
		name: "Checkout Total",
		description: "The total value of items at checkout",
		token: "checkout_total",
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
var basket = {
   products: []
};

for(var i=0, ii=this.getValueForToken("product_ids").length; i < ii; i++) {
   basket.products.push({
      identifier: this.getValueForToken("product_ids")[i],
      amount: this.getValueForToken("amounts")[i],
      currency: '' + this.getValueForToken("currency") + '',
      quantity: this.getValueForToken("quantities")[i]
   });
}

basket.transaction = '' + this.getValueForToken("transaction_id") + '';
basket.amount = '' + this.getValueForToken("checkout_total") + '';
basket.currency = '' + this.getValueForToken("currency") + '';
window.basket = basket;
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
