//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("google.GoogleDynamicRemarketingTagProductPage", {
    config: {/*DATA*/
	id: 37663,
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
		id: 36684,
		name: "Product ID",
		description: "Product ID",
		token: "product_id",
		uv: "universal_variable.product.sku_code"
	},
	{
		id: 36685,
		name: "Page Type",
		description: "Page Type",
		token: "page_category",
		uv: "universal_variable.page.category"
	},
	{
		id: 36686,
		name: "Product Value",
		description: "Product Value",
		token: "product_value",
		uv: "universal_variable.product.unit_price"
	},
	{
		id: 36688,
		name: "Google Conversion ID",
		description: "Your Google Conversion ID",
		token: "google_conversion_id",
		uv: ""
	},
	{
		id: 36689,
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
