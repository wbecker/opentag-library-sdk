//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("adgenie.conversiontrackingkoko.Tag", {
	config: {
		/*DATA*/
		name: "Conversion Tracking KOKO",
		async: true,
		description: "This should be called when a customer has successfully completed a transaction.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/adGENIE.png",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "adGENIE Company ID",
			description: "The identifier for the client using adGENIE",
			token: "client_id",
			uv: ""
		},
		{
			name: "adGENIE Product ID List",
			description: "A list of products in the basket",
			token: "product_id_list",
			uv: "universal_variable.transaction.line_items[#].product.id"
		},
		{
			name: "adGENIE Product Price List",
			description: "A list of product unit sale prices in the basket",
			token: "prod_price_list",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		},
		{
			name: "adGENIE Transaction ID",
			description: "The ID of the transaction",
			token: "trans_id",
			uv: "universal_variable.transaction.order_id"
		},
		{
			name: "adGENIE Company ID",
			description: "The identifier for the client using adGENIE",
			token: "client_id+a",
			uv: ""
		},
		{
			name: "adGENIE Product ID List",
			description: "A list of products in the basket",
			token: "product_id_list+b",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
    var img = new Image(), arr = [];
    
    var i = 0, ii = this.getValueForToken("product_id_list").length;
    
    for (; i < ii; i++) {
      arr.push(this.getValueForToken("product_id_list")[i]
              + ":"
              + this.getValueForToken("prod_price_list")[i]);
    }

    img.src = "https://adverts.adgenie.co.uk/conversion.php?companyId="
            + this.getValueForToken("client_id")
            + "&items=" + arr.join("|")
            + "&orderId=" + "" + this.getValueForToken("trans_id") + "";

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
