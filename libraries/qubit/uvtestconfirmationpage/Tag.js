//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("qubit.uvtestconfirmationpage.Tag", {
    config: {/*DATA*/
	id: 23158,
	name: "UV Test - Confirmation Page",
	async: true,
	description: "This script contains every confirmation page variable so that you can test your universal variable setup",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/qubit_Q.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 22659,
		name: "Order Id",
		description: "",
		token: "a",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 22660,
		name: "Order Total",
		description: "",
		token: "b",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 22661,
		name: "Order Sub-Total",
		description: "",
		token: "c",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 22662,
		name: "Order Tax",
		description: "",
		token: "d",
		uv: "universal_variable.transaction.tax"
	},
	{
		id: 22663,
		name: "Order Shipping Cost",
		description: "",
		token: "e",
		uv: "universal_variable.transaction.shipping_cost"
	},
	{
		id: 22664,
		name: "Order Currency",
		description: "",
		token: "f",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 22665,
		name: "Order Voucher",
		description: "",
		token: "g",
		uv: "universal_variable.transaction.voucher"
	},
	{
		id: 22666,
		name: "Product IDs",
		description: "",
		token: "h",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 22667,
		name: "Product SKUs",
		description: "",
		token: "i",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 22668,
		name: "Product Name",
		description: "",
		token: "j",
		uv: "universal_variable.transaction.line_items[#].product.name"
	},
	{
		id: 22669,
		name: "Product Manufacturer",
		description: "",
		token: "k",
		uv: "universal_variable.transaction.line_items[#].product.manufacturer"
	},
	{
		id: 22670,
		name: "Product Categories",
		description: "",
		token: "l",
		uv: "universal_variable.transaction.line_items[#].product.category"
	},
	{
		id: 22671,
		name: "Product Prices",
		description: "",
		token: "m",
		uv: "universal_variable.transaction.line_items[#].product.unit_price"
	},
	{
		id: 22672,
		name: "Product quantities",
		description: "",
		token: "n",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 22673,
		name: "Product Sale Price",
		description: "",
		token: "o",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 22674,
		name: "Product Vouchers",
		description: "",
		token: "p",
		uv: "universal_variable.transaction.line_items[#].voucher"
	},
	{
		id: 22675,
		name: "Order Billing Address - City",
		description: "",
		token: "q",
		uv: "universal_variable.transaction.billing.city"
	},
	{
		id: 22676,
		name: "Order Billing Address - State",
		description: "",
		token: "r",
		uv: "universal_variable.transaction.billing.state"
	},
	{
		id: 22677,
		name: "Order Billing Address - Country",
		description: "",
		token: "s",
		uv: "universal_variable.transaction.billing.country"
	},
	{
		id: 22678,
		name: "Order Billing Address - Postcode",
		description: "",
		token: "t",
		uv: "universal_variable.transaction.billing.postcode"
	},
	{
		id: 22679,
		name: "Order Billing Address - Address",
		description: "",
		token: "u",
		uv: "universal_variable.transaction.billing.address"
	},
	{
		id: 22680,
		name: "Transaction Shipping Address - City",
		description: "",
		token: "v",
		uv: "universal_variable.transaction.delivery.city"
	},
	{
		id: 22681,
		name: "Transaction Shipping Address - State",
		description: "",
		token: "w",
		uv: "universal_variable.transaction.delivery.state"
	},
	{
		id: 22682,
		name: "Transaction Shipping Address - Country",
		description: "",
		token: "x",
		uv: "universal_variable.transaction.delivery.country"
	},
	{
		id: 22683,
		name: "Transaction Shipping Address - Postcode",
		description: "",
		token: "y",
		uv: "universal_variable.transaction.delivery.postcode"
	},
	{
		id: 22684,
		name: "Transaction Shipping Address - Address",
		description: "",
		token: "z",
		uv: "universal_variable.transaction.delivery.address"
	},
	{
		id: 22685,
		name: "Transaction Shipping Address - Reciever name",
		description: "",
		token: "aa",
		uv: "universal_variable.transaction.delivery.name"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

console.log("" + this.getValueForToken("a") + "");
console.log("" + this.getValueForToken("b") + "");
console.log("" + this.getValueForToken("c") + "");
console.log("" + this.getValueForToken("d") + "");
console.log("" + this.getValueForToken("e") + "");
console.log("" + this.getValueForToken("f") + "");
console.log("" + this.getValueForToken("g") + "");
console.log("" + this.getValueForToken("h") + "");
console.log("" + this.getValueForToken("i") + "");
console.log("" + this.getValueForToken("j") + "");
console.log("" + this.getValueForToken("k") + "");
console.log("" + this.getValueForToken("l") + "");
console.log("" + this.getValueForToken("m") + "");
console.log("" + this.getValueForToken("n") + "");
console.log("" + this.getValueForToken("o") + "");
console.log("" + this.getValueForToken("p") + "");
console.log("" + this.getValueForToken("q") + "");
console.log("" + this.getValueForToken("r") + "");
console.log("" + this.getValueForToken("s") + "");
console.log("" + this.getValueForToken("t") + "");
console.log("" + this.getValueForToken("u") + "");
console.log("" + this.getValueForToken("v") + "");
console.log("" + this.getValueForToken("w") + "");
console.log("" + this.getValueForToken("x") + "");
console.log("" + this.getValueForToken("y") + "");
console.log("" + this.getValueForToken("z") + "");
console.log("" + this.getValueForToken("aa") + "");


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
