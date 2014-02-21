//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("adgenie.ConversionTracking", {
    config: {/*DATA*/
	id: 33172,
	name: "Conversion Tracking",
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
		id: 32217,
		name: "adGENIE Company ID",
		description: "The identifier for the client using adGENIE",
		token: "client_id",
		uv: ""
	},
	{
		id: 32218,
		name: "adGENIE Product ID List",
		description: "A list of products in the basket",
		token: "product_id_list",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 32219,
		name: "adGENIE Product Price List",
		description: "A list of product unit sale prices in the basket",
		token: "prod_price_list",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 32220,
		name: "adGENIE Transaction ID",
		description: "The ID of the transaction",
		token: "trans_id",
		uv: "universal_variable.transaction.order_id"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

var img = new Image(), arr = [];

for (var i = 0, ii = this.getValueForToken("product_id_list").length; i < ii; i++) {
  arr.push(this.getValueForToken("product_id_list")[i]+":"+this.getValueForToken("prod_price_list")[i]);
}

img.src = "https://adverts.adgenie.co.uk/conversion.php?companyId=" + "" + this.getValueForToken("client_id") + "" + "&items=" + arr.join("|") + "&orderId=" + "" + this.getValueForToken("trans_id") + "";

document.body.appendChild(img);


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
