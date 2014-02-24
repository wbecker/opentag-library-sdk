//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("google.googledynamicremarketingtagproductpage.Tag", {
	config: {
		/*DATA*/
		name: "Google Dynamic Remarketing Tag - Product Page",
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
			name: "Product ID",
			description: "Product ID",
			token: "product_id",
			uv: "universal_variable.product.sku_code"
		},
		{
			name: "Page Type",
			description: "Page Type",
			token: "page_category",
			uv: "universal_variable.page.category"
		},
		{
			name: "Product Value",
			description: "Product Value",
			token: "product_value",
			uv: "universal_variable.product.unit_price"
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
