//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("criteo.LegacyBasketPageTag", {
    config: {/*DATA*/
	id: 39,
	name: "Legacy - Basket Page Tag",
	async: true,
	description: "The basket tag has to be integrated on the basket or checkout page.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Criteo.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: true,
	parameters: [
	{
		id: 1460577144001265665,
		name: "Criteo",
		description: "A Parameter wi provided by Criteo",
		token: "wi",
		uv: ""
	},
	{
		id: 3900,
		name: "Criteo wi Parameter",
		description: "A Parameter wi provided by Criteo",
		token: "wi",
		uv: ""
	},
	{
		id: 3902,
		name: "Criteo Call Parameter",
		description: "Call Parameter provided by Criteo",
		token: "call_parameter",
		uv: ""
	},
	{
		id: 3903,
		name: "Product IDs",
		description: "",
		token: "product_ids",
		uv: "universal_variable.basket.line_items[#].product.id"
	},
	{
		id: 3904,
		name: "Product Unit Prices",
		description: "",
		token: "product_unit_prices",
		uv: "universal_variable.basket.line_items[#].product.unit_sale_price"
	},
	{
		id: 3905,
		name: "Quantities",
		description: "",
		token: "quantities",
		uv: "universal_variable.basket.line_items[#].quantity"
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
    "&wi=", "" + this.getValueForToken("wi") + "",
    "&s=0"
    ];

  for(var i = 0; i < this.getValueForToken("product_ids").length; i++) {
    var index = i + 1;
    params.push("&i" + index + "=" + this.getValueForToken("product_ids")[i]);
    params.push("&p" + index + "=" + this.getValueForToken("product_unit_prices")[i]);
    params.push("&q" + index + "=" + this.getValueForToken("quantities")[i]);
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
