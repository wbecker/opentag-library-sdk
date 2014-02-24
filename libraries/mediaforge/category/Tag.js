//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("mediaforge.category.Tag", {
	config: {
		/*DATA*/
		name: "Category",
		async: true,
		description: "To be placed of Product Listing pages",
		html: "<script type=\"text/javascript\" src=\"//tags.mediaforge.com/js/${merchant_id}/?catID=${category_id}\"></script>\n",
		imageUrl: ".",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "mediaFORGE Merchant ID",
			description: "The ID that relates you to mediaFORGE",
			token: "merchant_id",
			uv: ""
		},
		{
			name: "Category ID",
			description: "The name/ID that relates to the current product listing page",
			token: "category_id",
			uv: "universal_variable.page.subcategory"
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
