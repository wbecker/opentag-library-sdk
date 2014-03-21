//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("adgenie.productpage.Tag", {
	config: {
		/*DATA*/
		name: "Product Page",
		async: true,
		description: "This tag should be placed on all product pages.",
		html: "<img src=\"https://adverts.adgenie.co.uk/genieTracker.php?adgCompanyID=${client_id}&adgItem=${product_id}\" height=\"1\" width=\"1\" />\n<img src=\"http://ib.adnxs.com/seg?add=446533&t=2\" width=\"1\" height=\"1\" />",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/adGENIE.png",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: true,
		parameters: [
		{
			name: "adGENIE Client ID",
			description: "The ID of the company using adGENIE tag",
			token: "client_id",
			uv: ""
		},
		{
			name: "adGENIE Product ID",
			description: "The ID of the product on the page",
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
		/*~POST*/
	}
});
