//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("skimlinks.skimlinks.v1.Tag", {
	config: {
		/*DATA*/
		name: "Skimlinks",
		async: true,
		description: "Converts any normal product or merchant link in your content into its equivalent affiliate link as a user clicks on it.",
		html: "",
		imageUrl: "",
		locationDetail: "",
		isPrivate: false,
		url: "s.skimresources.com/js/${publisher_id}.skimlinks.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Publisher ID",
			description: "A publisher ID provided by Skimlinks. The format should be 0000X1111",
			token: "publisher_id",
			uv: ""
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