//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("google.googledynamicremarketingtagconfirmationpage.Tag", {
	config: {
		/*DATA*/
		name: "Google Dynamic Remarketing Tag - Confirmation Page",
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
			name: "Product IDs",
			description: "Product IDs",
			token: "product_ids",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		},
		{
			name: "Product Categories",
			description: "Product Categories",
			token: "product_categories",
			uv: "universal_variable.transaction.line_items[#].product.category"
		},
		{
			name: "Page Category",
			description: "Page Category",
			token: "page_category",
			uv: "universal_variable.page.category"
		},
		{
			name: "Product Values",
			description: "Product Values",
			token: "product_values",
			uv: "universal_variable.transaction.line_items[#].product.unit_price"
		},
		{
			name: "Google Conversion ID",
			description: "Google Conversion ID",
			token: "google_conversion_id",
			uv: ""
		},
		{
			name: "Google Conversion Label",
			description: "Google Conversion Label",
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
