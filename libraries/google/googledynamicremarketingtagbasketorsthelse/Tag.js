//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("google.googledynamicremarketingtagbasketorsthelse.Tag", {
	config: {
		/*DATA*/
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
			name: "Product Categories",
			description: "Product Categories",
			token: "product_categories",
			uv: "universal_variable.basket.line_items[#].product.category"
		},
		{
			name: "Page Type",
			description: "Page Type",
			token: "page_category",
			uv: "universal_variable.page.category"
		},
		{
			name: "Product IDs",
			description: "Product IDs",
			token: "product_ids",
			uv: "universal_variable.basket.line_items[#].product.sku_code"
		},
		{
			name: "Product Values",
			description: "Product Values",
			token: "product_values",
			uv: "universal_variable.basket.line_items[#].product.unit_price"
		},
		{
			name: "Google Conversion ID",
			description: "Your Google Conversion ID",
			token: "google_conversion_id",
			uv: ""
		},
		{
			name: "Google Conversion Label",
			description: "Your Google Conversion Label ID",
			token: "google_conversion_label",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
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
