//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("adgenie.conversiontracking.v1.Tag", {
	config: {
		/*DATA*/
		name: "Conversion Tracking",
		async: true,
		description: "This should be called when a customer has successfully completed a transaction.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/adGENIE.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "adGENIE Company ID",
			description: "The identifier for the client using adGENIE",
			token: "client_id",
			uv: ""
		}, {
			name: "adGENIE Product ID List",
			description: "A list of products in the basket",
			token: "product_id_list",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "adGENIE Product Price List",
			description: "A list of product unit sale prices in the basket",
			token: "prod_price_list",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "adGENIE Transaction ID",
			description: "The ID of the transaction",
			token: "trans_id",
			uv: "universal_variable.transaction.order_id"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		var img = new Image(),
			arr = [];

		for (var i = 0, ii = this.valueForToken("product_id_list").length; i < ii; i++) {
			arr.push(this.valueForToken("product_id_list")[i] + ":" + this.valueForToken(
				"prod_price_list")[i]);
		}

		img.src = "https://adverts.adgenie.co.uk/conversion.php?companyId=" +
			this.valueForToken("client_id") + "&items=" + arr.join("|") +
			"&orderId=" + this.valueForToken("trans_id");

		document.body.appendChild(img);

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