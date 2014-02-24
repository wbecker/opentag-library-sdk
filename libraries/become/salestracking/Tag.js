//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("become.salestracking.Tag", {
    config: {
      /*DATA*/
	id: 36157,
	name: "Sales Tracking",
	async: true,
	description: "Sales tracking tag to be placed on the confirmation page, for customers with Pangora IDs to track more sale information.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Become.png",
	locationDetail: "",
	priv: false,
	url: "https://clicks.pangora.com/sales-tracking/salesTracker.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 35157,
		name: "Pangora Merchant ID",
		description: "Your Merchant ID that is provided by Pangora. This ID is essential for a working tracking.",
		token: "merchant_id",
		uv: ""
	},
	{
		id: 35158,
		name: "Order ID",
		description: "Your customer’s order number through which purchases can be confirmed.",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 35159,
		name: "Order Total",
		description: "Total value of shopping cart. A full stop must be used as decimal separator.",
		token: "cart_value",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 35160,
		name: "Returning Customer",
		description: "Whether the customer is new or existing. Set to true for existing customers.",
		token: "customer_flag",
		uv: "universal_variable.user.returning"
	},
	{
		id: 35161,
		name: "Product IDs",
		description: "List of product IDs the customer purchased in this order.",
		token: "product_ids",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 35162,
		name: "Product Names",
		description: "List of names for products the customer purchased in this order.",
		token: "product_names",
		uv: "universal_variable.transaction.line_items[#].product.name"
	},
	{
		id: 35163,
		name: "Product Prices",
		description: "List of prices for products the customer purchased in this order.",
		token: "product_prices",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 35164,
		name: "Product Counts",
		description: "List of quantities for products the customer purchased in this order.",
		token: "product_qtys",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 35165,
		name: "Currency",
		description: "Currency used for submitting the total value. The value must match ISO 4217.",
		token: "currency",
		uv: "universal_variable.transaction.currency"
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
var pg_pangora_merchant_id = '' + this.getValueForToken("merchant_id") + '';
var pg_order_id = '' + this.getValueForToken("order_id") + '';
var pg_cart_value = '' + this.getValueForToken("cart_value") + '';
var pg_currency = '' + this.getValueForToken("currency") + '';
var pg_customer_flag = this.getValueForToken("customer_flag") ? 'old' : 'new';
var pg_product_id = '';
var pg_product_name = '';
var pg_product_price = '';
var pg_product_units = '';
var pg_cart_size = 0;

//Build CSVs and get cart size.
(function() {
  for (var i = 0; i < this.getValueForToken("product_ids").length; i++){
    var tempid = this.getValueForToken("product_ids")[i];
    var tempnm = this.getValueForToken("product_names")[i];
    var temppr = this.getValueForToken("product_prices")[i];
    var tempqt = this.getValueForToken("product_qtys")[i];

    //Build the cart size sum
    pg_cart_size += Number(tempqt);

    //Start each string with a comma, so long as it's not the first.
    var startString = (i === 0) ? '' : ',';
    pg_product_id += startString + String(tempid);
    pg_product_name += startString + String(tempnm);
    pg_product_price += startString + String(temppr);
    pg_product_units += startString + String(tempqt);
  }
  pg_cart_size = String(pg_cart_size);
})();
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
