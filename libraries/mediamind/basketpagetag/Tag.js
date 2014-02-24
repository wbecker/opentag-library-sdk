//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("mediamind.basketpagetag.Tag", {
    config: {
      /*DATA*/
	id: 29657,
	name: "Basket Page Tag",
	async: true,
	description: "To be placed only on the basket",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/mediamind.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 28673,
		name: "MediaMind Basket Activity ID",
		description: "",
		token: "activity_id",
		uv: ""
	},
	{
		id: 28674,
		name: "Basket Sub Total",
		description: "",
		token: "order_total",
		uv: "universal_variable.basket.subtotal"
	},
	{
		id: 28675,
		name: "Order ID",
		description: "",
		token: "order_id",
		uv: "universal_variable.basket.id"
	},
	{
		id: 28676,
		name: "Basket ID List",
		description: "",
		token: "ids",
		uv: "universal_variable.basket.line_items[#].product.id"
	},
	{
		id: 28678,
		name: "Basket SKU List",
		description: "",
		token: "skus",
		uv: "universal_variable.basket.line_items[#].product.sku_code"
	},
	{
		id: 28680,
		name: "Basket Quantity List",
		description: "",
		token: "quants",
		uv: "universal_variable.basket.line_items[#].quantity"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

var ebRev = "" + this.getValueForToken("order_total") + "";
var ebOrderID = "" + this.getValueForToken("order_id") + "";
var ebProductID = "";
var ebProductInfo = "";
var ebQuantity = 0;
var ebRand = Math.random() * 1000000;


(function() {
  var i = 0, ii = this.getValueForToken("ids").length, script;

  for (; i < ii; i++){
    ebProductID += this.getValueForToken("ids")[i] + ",";
    ebProductInfo += this.getValueForToken("skus")[i] + ",";
    ebQuantity += parseInt(this.getValueForToken("quants")[i]);
  }
  
  ebProductID = ebProductID.slice(0, -1);
  ebProductInfo = ebProductInfo.slice(0, -1);
  ebQuantity = ebQuantity.toString();
  
  var script = document.createElement("script");
  script.src = "//bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&ActivityID=" + this.getValueForToken("activity_id") + "&rnd=" + ebRand + "&Value=" + 
  ebRev + "&OrderID=" + ebOrderID + "&ProductID=" + ebProductID + "&ProductInfo=" + ebProductInfo + "&Quantity=" + ebQuantity;
  document.getElementsByTagName("head")[0].appendChild(script);

})()



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
