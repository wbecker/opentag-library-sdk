//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("google.googledynamicremarketingtagbasketorsthelse.Tag", {
    config: {/*DATA*/
	id: 37661,
	name: "Google Dynamic Remarketing Tag - Basket or Sth else",
	async: true,
	description: "",
	html: "\n",
	imageUrl: ".",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 36670,
		name: "Product Categories",
		description: "Product Categories",
		token: "product_categories",
		uv: "universal_variable.basket.line_items[#].product.category"
	},
	{
		id: 36671,
		name: "Page Type",
		description: "Page Type",
		token: "page_category",
		uv: "universal_variable.page.category"
	},
	{
		id: 36672,
		name: "Product IDs",
		description: "Product IDs",
		token: "product_ids",
		uv: "universal_variable.basket.line_items[#].product.sku_code"
	},
	{
		id: 36673,
		name: "Product Values",
		description: "Product Values",
		token: "product_values",
		uv: "universal_variable.basket.line_items[#].product.unit_price"
	},
	{
		id: 36674,
		name: "Google Conversion ID",
		description: "Your Google Conversion ID",
		token: "google_conversion_id",
		uv: ""
	},
	{
		id: 36675,
		name: "Google Conversion Label",
		description: "Your Google Conversion Label ID",
		token: "google_conversion_label",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
