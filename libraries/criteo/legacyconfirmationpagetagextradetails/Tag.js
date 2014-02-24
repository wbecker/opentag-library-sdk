//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("criteo.legacyconfirmationpagetagextradetails.Tag", {
    config: {
      /*DATA*/
	id: 34665,
	name: "Legacy - Confirmation Page Tag - Extra details",
	async: true,
	description: "This is a mandatory tag and must be executed on the confirmation page after user made payment. This contains variables to specify whether the user is new and also whether the sale was post-click or post-impression.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Criteo.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: true,
	parameters: [
	{
		id: 33708,
		name: "Criteo WI Parameter",
		description: "Criteo wi parameter value",
		token: "wi",
		uv: ""
	},
	{
		id: 33709,
		name: "Criteo call parameter value",
		description: "Criteo call parameter value",
		token: "call_parameter",
		uv: ""
	},
	{
		id: 33710,
		name: "Is Post Click",
		description: "Must be a custom javascript variable which returns true only if the sale is post click",
		token: "is_post_click",
		uv: ""
	},
	{
		id: 33711,
		name: "User is returning",
		description: "User is returning",
		token: "returning",
		uv: "universal_variable.user.returning"
	},
	{
		id: 33712,
		name: "Order ID",
		description: "",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 33713,
		name: "Product IDs",
		description: "",
		token: "product_ids",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 33714,
		name: "Product Unit Sale Prices",
		description: "",
		token: "product_unit_prices",
		uv: "universal_variable.transaction.line_items[#].product.unit_price"
	},
	{
		id: 33715,
		name: "Quantities",
		description: "",
		token: "quantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

(function () {
  var src, newUser, isNotPostClick, params;
  src = [
    "https://", "sslwidget.criteo.com", "/", "" + this.getValueForToken("call_parameter") + "", "/", "display.js?", "p1="
  ];
  newUser = ("" + this.getValueForToken("returning") + "" === "true") ? "0" : "1";
  isNotPostClick = ("" + this.getValueForToken("is_post_click") + "" === "true") ? "0" : "1";
  params = [
    "v=2",
    "&s=1",
    "&nc=", newUser,
    "&dd=", isNotPostClick,
    "&wi=", "" + this.getValueForToken("wi") + "",
    "&t=", "" + this.getValueForToken("order_id") + ""
    ];

  for(var i = 0; i < this.getValueForToken("product_ids").length; i++) {
    var index = i + 1;
    params.push("&i" + index + "=" + this.getValueForToken("product_ids")[i]);
    params.push("&p" + index + "=" + this.getValueForToken("product_unit_prices")[i]);
    params.push("&q" + index + "=" + this.getValueForToken("quantities")[i])
  }
  src.push(escape(params.join("")));
  src.push("&t1=transaction&resptype=gif");
  var img = document.createElement("img");
  img.setAttribute("src", src.join(""));
  img.setAttribute("height", "1");
  img.setAttribute("width", "1");
  document.body.appendChild(img);
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
