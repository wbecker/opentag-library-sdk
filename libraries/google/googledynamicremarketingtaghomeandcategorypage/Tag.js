//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("google.googledynamicremarketingtaghomeandcategorypage.Tag", {
	config: {
		/*DATA*/
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
			name: "Page Type",
			description: "Page Type",
			token: "page_category",
			uv: "universal_variable.page.category"
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
