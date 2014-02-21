//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("sociomantic.DEPRECATEDProductPageTag", {
    config: {/*DATA*/
	id: 30167,
	name: "{DEPRECATED} Product Page Tag",
	async: true,
	description: "This tracking code needs to go on all product pages in order to know which\nproducts user was interested in",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/sociomantic.jpg",
	locationDetail: "",
	priv: false,
	url: "eu-sonar.sociomantic.com/js/2010-07-01/adpan/${ADVERTISER_TOKEN}",
	usesDocWrite: false,
	parameters: [
	{
		id: 29191,
		name: "Advertiser Token",
		description: "Your Sociomantic customer ID. Please only use the token that has been created and sent to you.",
		token: "ADVERTISER_TOKEN",
		uv: ""
	},
	{
		id: 29194,
		name: "Product Id",
		description: "Product identifier",
		token: "PRODUCT_ID",
		uv: "universal_variable.product.id"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
var product = {
identifier: '' + this.getValueForToken("PRODUCT_ID") + ''
};
window.product = product;
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
