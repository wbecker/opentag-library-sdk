//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("linkshare.linkshareconfirmationpagepixeldeprecated2.Tag", {
	config: {
		/*DATA*/
		name: "LinkShare Confirmation Page Pixel - DEPRECATED 2",
		async: true,
		description: "Reports transactions to linkshare server",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/linkshare.gif",
		locationDetail: "",
		priv: true,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "LinkShare Merchant ID",
			description: "A static numeric merchant ID constant provided to you by  LinkShare.",
			token: "mid",
			uv: ""
		},
		{
			name: "Order ID",
			description: "This is a unique transaction orderID composed of 1 to 40  non-blank characters.",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		},
		{
			name: "SKU List",
			description: "This is a unique product identifier. When several different products are included in a single order",
			token: "sku_list",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		},
		{
			name: "Quantity List",
			description: "This is the quantity value. Should be in the same order as SKU List.",
			token: "q_list",
			uv: "universal_variable.transaction.line_items[#].quantity"
		},
		{
			name: "Amount List",
			description: "List of all the unit prices",
			token: "amt_list",
			uv: "universal_variable.transaction.line_items[#].product.unit_price"
		},
		{
			name: "Currency",
			description: "Alphanumeric 3 characters.",
			token: "cur",
			uv: "universal_variable.transaction.currency"
		},
		{
			name: "Product Name List",
			description: "This is the product name value.",
			token: "name_list",
			uv: "universal_variable.transaction.line_items[#].product.name"
		},
		{
			name: "Discount Amount List",
			description: "List of product amounts with discount applied - should be same as normal price if no discount.",
			token: "disc_list",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		},
		{
			name: "Voucher Discount",
			description: "Voucher discount amount (set to 0 if no discount)",
			token: "voucher_discount",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

(function () {

  var x = document.createElement("img");

  var skuList = [], qList = [], amtList = [], nameList = [], i, ii;

  for (i = 0, ii = this.getValueForToken("q_list").length; i<ii; i++) {
    skuList.push(this.getValueForToken("sku_list")[i]);
    qList.push(this.getValueForToken("q_list")[i]);
    nameList.push(this.getValueForToken("name_list")[i]);
    var amt = parseInt(parseFloat(this.getValueForToken("disc_list")[i])*100)*parseInt(this.getValueForToken("q_list")[i]);
    if (this.getValueForToken("voucher_discount") > 0) {
      amt -= this.getValueForToken("voucher_discount")/this.getValueForToken("q_list").length;
    }
    amtList.push(amt);
  }

  if (this.getValueForToken("voucher_discount") > 0) {
    skuList.push("Discount");
    qList.push("0");
    amtList.push(-discount);
    nameList.push("Discount");
  }
  
  x.src = "//track.linksynergy.com/ep?mid=" + this.getValueForToken("mid") + "&ord=" + this.getValueForToken("order_id") + "&skulist="+ skuList.join("|") +"&qlist="+ qList.join("|") +"&amtlist="+ amtList.join("|") +"&cur=" + this.getValueForToken("cur") + "&namelist="+ nameList.join("|");
  document.body.appendChild(x);
})();
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
