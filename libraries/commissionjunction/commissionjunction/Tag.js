//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("commissionjunction.commissionjunction.Tag", {
	config: {
		/*DATA*/
		name: "Commission Junction",
		async: true,
		description: "Commission Junction is a global leader in Affiliate Marketing, Online Marketing, and Search Engine Marketing.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/CommissionJunction.png",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Commission Junction Enterprise ID",
			description: "View the Enterprise ID in your CJ Account Manager>Account>Tracking Settings area",
			token: "CID",
			uv: ""
		},
		{
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		},
		{
			name: "Type",
			description: "Parameter that is paired with the Action ID, a number assigned by Commission Junction",
			token: "TYPE",
			uv: ""
		},
		{
			name: "Item IDs",
			description: "",
			token: "ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		},
		{
			name: "Item Amounts",
			description: "",
			token: "prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		},
		{
			name: "Item Quantities",
			description: "",
			token: "quants",
			uv: "universal_variable.transaction.line_items[#].quantity"
		},
		{
			name: "Currency",
			description: "If not available in UV, hard code e.g. \"GBP\"",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/


  (function () {

    var pixel = new Image();
    var src = "https://www.emjcd.com/u?";

    var items = [];
    var item;
    var j;

    for (var i = 0, ii = this.getValueForToken("ids").length; i < ii; i++) {
      item = [];
      j = i + 1;
      item.push("ITEM" + j + "=" + this.getValueForToken("ids")[i]);
      item.push("AMT" + j + "=" + this.getValueForToken("prices")[i]);
      item.push("QTY" + j + "=" + this.getValueForToken("quants")[i]);
      items.push(item.join("&"));
    }


    var params = [
      "CID=" + this.getValueForToken("CID") + "",
      "OID=" + this.getValueForToken("order_id") + "",
      "TYPE=" + this.getValueForToken("TYPE") + "",
      items.join("&"),
      "CURRENCY=" + this.getValueForToken("currency") + "",
      "METHOD=IMG"
    ];

    pixel.src = src + params.join("&");

  }());

/*
<img src="https://www.emjcd.com/u?CID=<ENTERPRISEID>&OID=<OID>&TYPE=<ACTIONID>&ITEM1=
<ITEMID>&AMT1=<AMT>&QTY1=<QTY>&CURRENCY=<CURRENCY>&METHOD=IMG" height="1" 
width="20">*/




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
