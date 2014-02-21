//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("become.ROI", {
    config: {/*DATA*/
	id: 35184,
	name: "ROI",
	async: true,
	description: "ROI script to be placed on the Confirmation Page",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Become.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 34328,
		name: "Merchant ID",
		description: "The ID specific to the merchant using the Become tag",
		token: "become_merchant_id",
		uv: ""
	},
	{
		id: 34331,
		name: "Transaction Order ID",
		description: "The transaction order identifier for the purchase",
		token: "order_number",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 34335,
		name: "Transaction Product Quantity List",
		description: "A list of quantities for all purchased items in the transaction",
		token: "product_quantity_list",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 34336,
		name: "Transaction Product ID List",
		description: "A list of product IDs on the transaction page",
		token: "product_id_list",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 34337,
		name: "Transaction Product Category List",
		description: "A list of product categories on the transaction page",
		token: "product_category_list",
		uv: "universal_variable.transaction.line_items[#].product.category"
	},
	{
		id: 34338,
		name: "Transaction Product Price List",
		description: "A list of the prices for items in the transaction page (unit sale price)",
		token: "product_price_list",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

var become_merchant_id = '' + this.getValueForToken("become_merchant_id") + '';
var become_order_num = '' + this.getValueForToken("order_number") + ''; 
var become_purchased_items = [];

for (var i = 0; i < this.getValueForToken("product_quantity_list").length; i++) {
  var become_item = {
    productid: this.getValueForToken("product_id_list")[i],
    category: this.getValueForToken("product_category_list")[i],
    price: this.getValueForToken("product_price_list")[i], 
    quantity: this.getValueForToken("product_quantity_list")[i]
  }; 
  become_purchased_items.push(become_item); 
}

var script = document.createElement("script");
script.src = "https://partner.become.com/roi-tracker2/conversion.js";
document.body.appendChild(script);


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
