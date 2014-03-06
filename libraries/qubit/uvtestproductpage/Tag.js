//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("qubit.uvtestproductpage.Tag", {
	config: {
		/*DATA*/
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
			name: "Product Id",
			description: "",
			token: "a",
			uv: "universal_variable.product.id"
		},
		{
			name: "Product Name",
			description: "",
			token: "b",
			uv: "universal_variable.product.name"
		},
		{
			name: "Product Manufacturer",
			description: "",
			token: "c",
			uv: "universal_variable.product.manufacturer"
		},
		{
			name: "Product Category",
			description: "",
			token: "d",
			uv: "universal_variable.product.category"
		},
		{
			name: "Product Sub-Category",
			description: "",
			token: "e",
			uv: "universal_variable.product.subcategory"
		},
		{
			name: "Product SKU",
			description: "",
			token: "f",
			uv: "universal_variable.product.sku_code"
		},
		{
			name: "Product Linked Products",
			description: "",
			token: "g",
			uv: "universal_variable.product.linked_products[#]"
		},
		{
			name: "Product Unit Price",
			description: "",
			token: "h",
			uv: "universal_variable.product.unit_price"
		},
		{
			name: "Product Unit Sale Price",
			description: "",
			token: "i",
			uv: "universal_variable.product.unit_sale_price"
		},
		{
			name: "Product Currency",
			description: "",
			token: "j",
			uv: "universal_variable.product.currency"
		},
		{
			name: "Product Stock",
			description: "",
			token: "k",
			uv: "universal_variable.product.stock"
		},
		{
			name: "Product Size",
			description: "",
			token: "l",
			uv: "universal_variable.product.size"
		},
		{
			name: "Product Color",
			description: "",
			token: "m",
			uv: "universal_variable.product.color"
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

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
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});
