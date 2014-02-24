//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("sociomantic.deprecatedcategorypagetag.Tag", {
    config: {
      /*DATA*/
	id: 30168,
	name: "{DEPRECATED} Category Page Tag",
	async: true,
	description: "Information about what category page the user was interested in",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/sociomantic.jpg",
	locationDetail: "",
	priv: false,
	url: "eu-sonar.sociomantic.com/js/2010-07-01/adpan/${TOKEN}",
	usesDocWrite: false,
	parameters: [
	{
		id: 29195,
		name: "Advertiser Id",
		description: "Your Sociomantic customer ID. Please only use the token that has been created and sent to you.",
		token: "TOKEN",
		uv: ""
	},
	{
		id: 29196,
		name: "Category",
		description: "Category name for the page the user was interested in",
		token: "CATEGORY",
		uv: "universal_variable.page.category"
	},
	{
		id: 29197,
		name: "Subcategory",
		description: "Subategory name for the page the user was interested in",
		token: "SUBCATEGORY",
		uv: "universal_variable.page.subcategory"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/
      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
var product = {
category : [ '' + this.getValueForToken("CATEGORY") + '', '' + this.getValueForToken("SUBCATEGORY") + '']
};
window.product = product;
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
