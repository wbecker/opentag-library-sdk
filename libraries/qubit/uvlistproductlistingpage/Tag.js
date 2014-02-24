//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("qubit.uvlistproductlistingpage.Tag", {
	config: {
		/*DATA*/
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
			name: "Product Listing - Query",
			description: "",
			token: "a",
			uv: "universal_variable.listing.query"
		},
		{
			name: "Product Listing - Product ID List",
			description: "",
			token: "b",
			uv: "universal_variable.listing.items[#].id"
		},
		{
			name: "Product Listing - Product URL List",
			description: "",
			token: "c",
			uv: "universal_variable.listing.items[#].url"
		},
		{
			name: "Product Listing - Product Name List",
			description: "",
			token: "d",
			uv: "universal_variable.listing.items[#].name"
		},
		{
			name: "Product Listing - Product Manufacturer List",
			description: "",
			token: "e",
			uv: "universal_variable.listing.items[#].manufacturer"
		},
		{
			name: "Product Listing - Product Category List",
			description: "",
			token: "f",
			uv: "universal_variable.listing.items[#].category"
		},
		{
			name: "Product Listing - Product Sub-Category List",
			description: "",
			token: "g",
			uv: "universal_variable.listing.items[#].subcategory"
		},
		{
			name: "Product Listing - Product Color List",
			description: "",
			token: "h",
			uv: "universal_variable.listing.items[#].color"
		},
		{
			name: "Product Listing - Product Currency List",
			description: "",
			token: "i",
			uv: "universal_variable.listing.items[#].currency"
		},
		{
			name: "Product Listing - Product Unit Price List",
			description: "",
			token: "j",
			uv: "universal_variable.listing.items[#].unit_price"
		},
		{
			name: "Product Listing - Product Unit Sale Price List",
			description: "",
			token: "k",
			uv: "universal_variable.listing.items[#].unit_sale_price"
		},
		{
			name: "Product Listing - Product SKU List",
			description: "",
			token: "l",
			uv: "universal_variable.listing.items[#].sku_code"
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
