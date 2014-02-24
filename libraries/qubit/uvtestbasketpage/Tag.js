//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("qubit.uvtestbasketpage.Tag", {
    config: {/*DATA*/
	id: 23658,
	name: "UV Test - Basket Page",
	async: true,
	description: "Test Universal Variables on a basket page",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/qubit_Q.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 23170,
		name: "Basket Total",
		description: "",
		token: "a",
		uv: "universal_variable.basket.total"
	},
	{
		id: 23171,
		name: "Basket Sub-Total",
		description: "",
		token: "b",
		uv: "universal_variable.basket.subtotal"
	},
	{
		id: 23172,
		name: "Basket Tax",
		description: "",
		token: "c",
		uv: "universal_variable.basket.tax"
	},
	{
		id: 23173,
		name: "Basket Shipping Cost",
		description: "",
		token: "d",
		uv: "universal_variable.basket.shipping_cost"
	},
	{
		id: 23174,
		name: "Basket Currency",
		description: "",
		token: "e",
		uv: "universal_variable.basket.currency"
	},
	{
		id: 23175,
		name: "Basket Line Items - Product Id List",
		description: "",
		token: "f",
		uv: "universal_variable.basket.line_items[#].product.id"
	},
	{
		id: 23176,
		name: "Basket Line Items - Product SKU List",
		description: "",
		token: "g",
		uv: "universal_variable.basket.line_items[#].product.sku_code"
	},
	{
		id: 23177,
		name: "Basket Line Items - Product Name List",
		description: "",
		token: "h",
		uv: "universal_variable.basket.line_items[#].product.name"
	},
	{
		id: 23178,
		name: "Basket Line Items - Product Manufacturer List",
		description: "",
		token: "i",
		uv: "universal_variable.basket.line_items[#].product.manufacturer"
	},
	{
		id: 23179,
		name: "Basket Line Items - Product Sub-Category List",
		description: "",
		token: "j",
		uv: "universal_variable.basket.line_items[#].product.sub_category"
	},
	{
		id: 23180,
		name: "Basket Line Items - Product Unit Price List",
		description: "",
		token: "k",
		uv: "universal_variable.basket.line_items[#].product.unit_price"
	},
	{
		id: 23181,
		name: "Basket Line Items - Quantity List",
		description: "",
		token: "l",
		uv: "universal_variable.basket.line_items[#].quantity"
	},
	{
		id: 23182,
		name: "Basket Line Items - Sub-Total List",
		description: "",
		token: "m",
		uv: "universal_variable.basket.line_items[#].subtotal"
	},
	{
		id: 23183,
		name: "Basket Line Items - Product Unit Sale Price List",
		description: "",
		token: "n",
		uv: "universal_variable.basket.line_items[#].product.unit_sale_price"
	},
	{
		id: 23184,
		name: "Basket Id",
		description: "",
		token: "o",
		uv: "universal_variable.basket.id"
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


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
