//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("linkshare.linkshareconfirmationpagepixel.Tag", {
    config: {
      /*DATA*/
	id: 24672,
	name: "LinkShare Confirmation Page Pixel",
	async: true,
	description: "Reports transactions to linkshare server",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/linkshare.gif",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 24214,
		name: "LinkShare Merchant ID",
		description: "A static numeric merchant ID constant provided to you by  LinkShare.",
		token: "mid",
		uv: ""
	},
	{
		id: 24215,
		name: "Order ID",
		description: "This is a unique transaction orderID composed of 1 to 40  non-blank characters.",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 24216,
		name: "SKU List",
		description: "This is a unique product identifier. When several different products are included in a single order",
		token: "sku_list",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 24217,
		name: "Quantity List",
		description: "This is the quantity value. Should be in the same order as SKU List.",
		token: "q_list",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 24218,
		name: "Amount List",
		description: "List of all the unit sale prices",
		token: "amt_list",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 24219,
		name: "Currency",
		description: "Alphanumeric 3 characters.",
		token: "cur",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 24220,
		name: "Product Name List",
		description: "This is the product name value.",
		token: "name_list",
		uv: "universal_variable.transaction.line_items[#].product.name"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

(function () {

  var x = document.createElement("img");

  var skuList = [], qList = [], amtList = [], nameList = [], i, ii;

  for (i = 0, ii =this.getValueForToken("q_list").length; i<ii; i++) {
    skuList.push(this.getValueForToken("sku_list")[i]);
    qList.push(this.getValueForToken("q_list")[i]);
    nameList.push(this.getValueForToken("name_list")[i]);
    amtList.push(parseInt(parseFloat(this.getValueForToken("amt_list")[i])*100)*parseInt(this.getValueForToken("q_list")[i]));
  }
  
  x.src = "//track.linksynergy.com/ep?mid=" + this.getValueForToken("mid") + "&ord=" + this.getValueForToken("order_id") + "&skulist="+ skuList.join("|") +"&qlist="+ qList.join("|") +"&amtlist="+ amtList.join("|") +"&cur=" + this.getValueForToken("cur") + "&namelist="+ nameList.join("|");
  document.body.appendChild(x);
})();


      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
