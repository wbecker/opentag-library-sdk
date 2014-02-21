//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("qubit.UVListProductListingPage", {
    config: {/*DATA*/
	id: 23659,
	name: "UV List - Product Listing Page",
	async: true,
	description: "Test Universal Variables on a search or category page",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/qubit_Q.png",
	locationDetail: "",
	priv: true,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 23185,
		name: "Product Listing - Query",
		description: "",
		token: "a",
		uv: "universal_variable.listing.query"
	},
	{
		id: 23186,
		name: "Product Listing - Product ID List",
		description: "",
		token: "b",
		uv: "universal_variable.listing.items[#].id"
	},
	{
		id: 23187,
		name: "Product Listing - Product URL List",
		description: "",
		token: "c",
		uv: "universal_variable.listing.items[#].url"
	},
	{
		id: 23188,
		name: "Product Listing - Product Name List",
		description: "",
		token: "d",
		uv: "universal_variable.listing.items[#].name"
	},
	{
		id: 23189,
		name: "Product Listing - Product Manufacturer List",
		description: "",
		token: "e",
		uv: "universal_variable.listing.items[#].manufacturer"
	},
	{
		id: 23190,
		name: "Product Listing - Product Category List",
		description: "",
		token: "f",
		uv: "universal_variable.listing.items[#].category"
	},
	{
		id: 23191,
		name: "Product Listing - Product Sub-Category List",
		description: "",
		token: "g",
		uv: "universal_variable.listing.items[#].subcategory"
	},
	{
		id: 23192,
		name: "Product Listing - Product Color List",
		description: "",
		token: "h",
		uv: "universal_variable.listing.items[#].color"
	},
	{
		id: 23193,
		name: "Product Listing - Product Currency List",
		description: "",
		token: "i",
		uv: "universal_variable.listing.items[#].currency"
	},
	{
		id: 23194,
		name: "Product Listing - Product Unit Price List",
		description: "",
		token: "j",
		uv: "universal_variable.listing.items[#].unit_price"
	},
	{
		id: 23195,
		name: "Product Listing - Product Unit Sale Price List",
		description: "",
		token: "k",
		uv: "universal_variable.listing.items[#].unit_sale_price"
	},
	{
		id: 23196,
		name: "Product Listing - Product SKU List",
		description: "",
		token: "l",
		uv: "universal_variable.listing.items[#].sku_code"
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


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
