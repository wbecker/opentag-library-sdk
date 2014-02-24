//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("qubit.uvtestproductpage.Tag", {
    config: {/*DATA*/
	id: 23657,
	name: "UV Test - Product Page",
	async: true,
	description: "test opentag on a product page",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/qubit_Q.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 23157,
		name: "Product Id",
		description: "",
		token: "a",
		uv: "universal_variable.product.id"
	},
	{
		id: 23158,
		name: "Product Name",
		description: "",
		token: "b",
		uv: "universal_variable.product.name"
	},
	{
		id: 23159,
		name: "Product Manufacturer",
		description: "",
		token: "c",
		uv: "universal_variable.product.manufacturer"
	},
	{
		id: 23160,
		name: "Product Category",
		description: "",
		token: "d",
		uv: "universal_variable.product.category"
	},
	{
		id: 23161,
		name: "Product Sub-Category",
		description: "",
		token: "e",
		uv: "universal_variable.product.subcategory"
	},
	{
		id: 23162,
		name: "Product SKU",
		description: "",
		token: "f",
		uv: "universal_variable.product.sku_code"
	},
	{
		id: 23163,
		name: "Product Linked Products",
		description: "",
		token: "g",
		uv: "universal_variable.product.linked_products[#]"
	},
	{
		id: 23164,
		name: "Product Unit Price",
		description: "",
		token: "h",
		uv: "universal_variable.product.unit_price"
	},
	{
		id: 23165,
		name: "Product Unit Sale Price",
		description: "",
		token: "i",
		uv: "universal_variable.product.unit_sale_price"
	},
	{
		id: 23166,
		name: "Product Currency",
		description: "",
		token: "j",
		uv: "universal_variable.product.currency"
	},
	{
		id: 23167,
		name: "Product Stock",
		description: "",
		token: "k",
		uv: "universal_variable.product.stock"
	},
	{
		id: 23168,
		name: "Product Size",
		description: "",
		token: "l",
		uv: "universal_variable.product.size"
	},
	{
		id: 23169,
		name: "Product Color",
		description: "",
		token: "m",
		uv: "universal_variable.product.color"
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


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
