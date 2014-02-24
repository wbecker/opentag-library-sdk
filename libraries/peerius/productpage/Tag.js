//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("peerius.productpage.Tag", {
    config: {
      /*DATA*/
	id: 33159,
	name: "Product Page",
	async: true,
	description: "Peerius tag for the product page",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Peerius.png",
	locationDetail: "",
	priv: false,
	url: "${client_id}.peerius.com/tracker/peerius.page",
	usesDocWrite: false,
	parameters: [
	{
		id: 32167,
		name: "Peerius Language",
		description: "Language of the page the tag is on",
		token: "lang",
		uv: "universal_variable.user.language"
	},
	{
		id: 32189,
		name: "Peerius Client Name",
		description: "The name of the client for which the tag is to be implemented",
		token: "client_id",
		uv: ""
	},
	{
		id: 32208,
		name: "Peerius Product ID",
		description: "The id for the product on the current product page",
		token: "product_id",
		uv: "universal_variable.product.id"
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
var PeeriusCallbacks = {
  track: {
    type: "product",
    lang: "" + this.getValueForToken("lang") + "",
    product: {
      refCode: "" + this.getValueForToken("product_id") + ""
    }
  }
};
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
