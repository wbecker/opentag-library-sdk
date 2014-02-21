//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("google.GoogleDynamicRemarketingTagHomeAndCategoryPage", {
    config: {/*DATA*/
	id: 37664,
	name: "Google Dynamic Remarketing Tag - Home and Category Page",
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
		id: 36687,
		name: "Page Type",
		description: "Page Type",
		token: "page_category",
		uv: "universal_variable.page.category"
	},
	{
		id: 36690,
		name: "Google Conversion ID",
		description: "Your Google Conversion ID",
		token: "google_conversion_id",
		uv: ""
	},
	{
		id: 36691,
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
