//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("criteo.legacyconfirmationpagetag.Tag", {
    config: {/*DATA*/
	id: 36,
	name: "Legacy - Confirmation Page Tag",
	async: true,
	description: "This is a mandatory tag and must be executed on the confirmation page after user made payment.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Criteo.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: true,
	parameters: [
	{
		id: 3600,
		name: "Criteo wi parameter",
		description: "Criteo wi parameter value",
		token: "wi",
		uv: ""
	},
	{
		id: 3602,
		name: "Criteo call parameter value",
		description: "Criteo call parameter value",
		token: "call_parameter",
		uv: ""
	},
	{
		id: 3603,
		name: "Order ID",
		description: "",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 3604,
		name: "Product IDs",
		description: "",
		token: "product_ids",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 3605,
		name: "Product Unit Sale Prices",
		description: "",
		token: "product_unit_prices",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 3606,
		name: "Quantities",
		description: "",
		token: "quantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

(function () {
  var src = [
    "https://", "sslwidget.criteo.com", "/", "" + this.getValueForToken("call_parameter") + "", "/", "display.js?", "p1="
  ];
  var params = [
    "v=2",
    "&s=1",
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


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
