//:include tagsdk-current.js
var version = "";
var classPath = "mediaforge.category.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Category",
		async: true,
		description: "To be placed of Product Listing pages",
		html: "<!--@SRC@--><script type=\"text/javascript\" src=\"//tags.mediaforge.com/js/${merchant_id}/?catID=${category_id}\"></script>",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "mediaFORGE Merchant ID",
			description: "The ID that relates you to mediaFORGE",
			token: "merchant_id",
			uv: ""
		}, {
			name: "Category ID",
			description: "The name/ID that relates to the current product listing page",
			token: "category_id",
			uv: "universal_variable.page.subcategory"
		}]
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