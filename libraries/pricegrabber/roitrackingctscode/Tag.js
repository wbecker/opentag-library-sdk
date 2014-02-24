//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("pricegrabber.roitrackingctscode.Tag", {
    config: {/*DATA*/
	id: 35182,
	name: "ROI Tracking (CTS Code)",
	async: true,
	description: "Tracking tag to be placed on the confirmation page",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/price_grabber.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 34315,
		name: "Account ID",
		description: "",
		token: "account_id",
		uv: ""
	},
	{
		id: 34316,
		name: "Manufacturers",
		description: "",
		token: "manufacturers",
		uv: "universal_variable.transaction.line_items[#].product.manufacturer"
	},
	{
		id: 34317,
		name: "Prices",
		description: "",
		token: "prices",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 34318,
		name: "SKUs",
		description: "",
		token: "skus",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 34319,
		name: "ID List",
		description: "",
		token: "ids",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 34320,
		name: "Quantity List",
		description: "",
		token: "quants",
		uv: "universal_variable.transaction.line_items[#].quantity"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/


  (function () {

    var pixel = new Image();
    var source = "https://www.pricegrabber.com/conversion.php?retid=" + this.getValueForToken("account_id") + "";
    var item, items = "";

    for (var i = 0, ii = this.getValueForToken("ids").length; i < ii; i++) {
      item = [
        this.getValueForToken("manufacturers")[i],
        "",
        this.getValueForToken("prices")[i],
        this.getValueForToken("skus")[i],
        this.getValueForToken("ids")[i],
        this.getValueForToken("quants")[i]
      ];
      items += "&item" + (i + 1) + "=" + item.join("|");
    }

    source += items;
    pixel.src = source;

  }());



    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
