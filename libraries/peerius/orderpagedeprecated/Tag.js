//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("peerius.orderpagedeprecated.Tag", {
    config: {/*DATA*/
	id: 33165,
	name: "Order Page DEPRECATED",
	async: true,
	description: "DO NOT USE. Peerius tag for the order page",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Peerius.png",
	locationDetail: "",
	priv: true,
	url: "pt.peerius.com/tracker/peerius.page",
	usesDocWrite: false,
	parameters: [
	{
		id: 32178,
		name: "Peerius Language",
		description: "The language of the page that the current tag is on",
		token: "lang",
		uv: "universal_variable.user.language"
	},
	{
		id: 32179,
		name: "Peerius Order No",
		description: "Order number of the order on the page",
		token: "order_no",
		uv: ""
	},
	{
		id: 32180,
		name: "Peerius Currency",
		description: "Currency of the order page",
		token: "currency",
		uv: ""
	},
	{
		id: 32181,
		name: "Peerius Order Subtotal",
		description: "Subtotal of the items in the order",
		token: "subtotal",
		uv: ""
	},
	{
		id: 32182,
		name: "Peerius Order Shipping",
		description: "The shipping cost for the order",
		token: "shipping",
		uv: ""
	},
	{
		id: 32183,
		name: "Peerius Order Total",
		description: "The total of the order and other expenses like shipping",
		token: "total",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
var PeeriusCallbacks = {
  track: {
    type: "order",
    lang: "" + this.getValueForToken("lang") + "",
    order: {
      orderNo: "" + this.getValueForToken("order_no") + ""
      items: [],
      currency: "" + this.getValueForToken("currency") + "",
      subtotal: "" + this.getValueForToken("subtotal") + "",
      shipping: "" + this.getValueForToken("shipping") + "",
      total: "" + this.getValueForToken("total") + ""
    }
  }
};
var ii = window.universal_variable.basket.line_items.length;
for (var i = 0; i < ii; i++) {
  PeeriusCallbacks.track.checkout.items.push({
    refCode: window.universal_variable.basket.line_items[i].product.id,
    qty: window.universal_variable.basket.line_items[i].quantity,
    price: window.universal_variable.basket.line_items[i].product.unit_sale_price
  });
}
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
