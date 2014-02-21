//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("google.GoogleDynamicRemarketingTagConfirmationPage", {
    config: {/*DATA*/
	id: 37662,
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
		id: 36678,
		name: "Product IDs",
		description: "Product IDs",
		token: "product_ids",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 36679,
		name: "Product Categories",
		description: "Product Categories",
		token: "product_categories",
		uv: "universal_variable.transaction.line_items[#].product.category"
	},
	{
		id: 36680,
		name: "Page Category",
		description: "Page Category",
		token: "page_category",
		uv: "universal_variable.page.category"
	},
	{
		id: 36681,
		name: "Product Values",
		description: "Product Values",
		token: "product_values",
		uv: "universal_variable.transaction.line_items[#].product.unit_price"
	},
	{
		id: 36682,
		name: "Google Conversion ID",
		description: "Google Conversion ID",
		token: "google_conversion_id",
		uv: ""
	},
	{
		id: 36683,
		name: "Google Conversion Label",
		description: "Google Conversion Label",
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
