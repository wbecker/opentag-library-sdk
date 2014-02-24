//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("pricerunner.pricerunnersalepixel.Tag", {
    config: {/*DATA*/
	id: 50,
	name: "Price Runner Sale Pixel",
	async: true,
	description: "",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Pricerunner.jpg",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 5000,
		name: "Enterprise ID",
		description: "The Enterprise ID is an ID that enables a single integration across multiple Commission Junction products. This parameter is static and can be hard-coded into the URL call for the image.",
		token: "enterprise_id",
		uv: ""
	},
	{
		id: 5001,
		name: "Action ID",
		description: "Parameter that is paired with the Action ID, a Commission Junction-assigned number that identifies an action that has occurred. The Action ID is static and can be hard-coded into the URL call for the image.",
		token: "action_id",
		uv: ""
	},
	{
		id: 5002,
		name: "Order ID",
		description: "",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 5003,
		name: "Product ID List",
		description: "",
		token: "ids",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 5004,
		name: "Product Unit Price List",
		description: "",
		token: "unit_prices",
		uv: "universal_variable.transaction.line_items[#].product.unit_price"
	},
	{
		id: 5005,
		name: "Product Quantity List",
		description: "",
		token: "quantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 5006,
		name: "Currency",
		description: "",
		token: "currency",
		uv: "universal_variable.transaction.currency"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

(function () {
  var img = document.createElement("img");
  var src = [
   "https://www.emjcd.com/u?",
   "CID=" + this.getValueForToken("enterprise_id") + "",
   "&OID=" + this.getValueForToken("order_id") + "",
   "&TYPE=" + this.getValueForToken("action_id") + ""
  ];
  for (var i = 0; i < this.getValueForToken("ids").length; i++) {
   var item = [];
    var index  = i + 1;
   item.push("&item" + index + "=" + this.getValueForToken("ids")[i]);
   item.push("&amt"  + index + "=" + this.getValueForToken("unit_prices")[i]);
   item.push("&qty"  + index + "=" + this.getValueForToken("quantities")[i]);
    src.push(item.join(""));
  }
 src.push("&currency=" + this.getValueForToken("currency") + "");
  src.push("&method=img");
  img.setAttribute("src", src.join(""));
  img.setAttribute("height", "1");
  img.setAttribute("width", "20");
  document.body.appendChild(img);
})();


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
