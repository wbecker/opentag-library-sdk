//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("bazaarvoice.displayintegrationcode.Tag", {
	config: {
		/*DATA*/
		name: "Display Integration Code",
		async: true,
		description: "Requirement: 1) Place the following code on every product page where you want to display the ratings summary. <div id=\"BVRRSummaryContainer\"></div> 2) Place the following code on every product page where you want to display review content. <div id=\"BVRRContainer\"></div>",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/bazaarvoice.jpg",
		locationDetail: "",
		priv: false,
		url: "${client_code}.ugc.bazaarvoice.com/static/${display_code}/bvapi.js",
		usesDocWrite: false,
		parameters: [
		{
			name: "Client Code",
			description: "Represents your client code",
			token: "client_code",
			uv: ""
		},
		{
			name: "Display Code",
			description: "Represents your display code",
			token: "display_code",
			uv: ""
		},
		{
			name: "Product ID",
			description: "The ID of the product displayed on the page",
			token: "product_id",
			uv: "universal_variable.product.id"
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
$BV.ui("rr", "show_reviews", {
  productId: "" + this.valueForToken("product_id") + ""
});
		/*~POST*/
	}
});
