//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("mediamind.confirmationpagetag.Tag", {
	config: {
		/*DATA*/
		name: "Confirmation Page Tag",
		async: true,
		description: "To be placed on the confirmation page only",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "MediaMind Confirmation Page Activity ID",
			description: "",
			token: "activity_id",
			uv: ""
		},
		{
			name: "Order Total",
			description: "",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		},
		{
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		},
		{
			name: "Product ID List",
			description: "",
			token: "ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		},
		{
			name: "Product SKU List",
			description: "",
			token: "skus",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		},
		{
			name: "Product Quantity List",
			description: "",
			token: "quants",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}
	]
		/*~DATA*/
	},
	script: function() {
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
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});
