//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("peerius.basketpage.Tag", {
    config: {/*DATA*/
	id: 33163,
	name: "Basket Page",
	async: true,
	description: "Peerius tag for the basket page",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Peerius.png",
	locationDetail: "",
	priv: false,
	url: "${client_id}.peerius.com/tracker/peerius.page",
	usesDocWrite: false,
	parameters: [
	{
		id: 32160,
		name: "Peerius Basket Currency",
		description: "The currency of the basket page items",
		token: "currency",
		uv: "universal_variable.basket.currency"
	},
	{
		id: 32161,
		name: "Peerius Language",
		description: "Language of the page with the tag on",
		token: "lang",
		uv: "universal_variable.user.language"
	},
	{
		id: 32184,
		name: "Peerius Client Name",
		description: "The name of the client for which the tag is going to be implemented",
		token: "client_id",
		uv: ""
	},
	{
		id: 32201,
		name: "Peerius Product IDs List",
		description: "A list of product IDs",
		token: "product_ids",
		uv: "universal_variable.basket.line_items[#].product.id"
	},
	{
		id: 32202,
		name: "Peerius Unit Sale Prices List",
		description: "A list of unit sale prices in the basket",
		token: "unit_sale_prices",
		uv: "universal_variable.basket.line_items[#].product.unit_sale_price"
	},
	{
		id: 32203,
		name: "Peerius Item Quantities List",
		description: "A list of basket item quantities",
		token: "item_quantities",
		uv: "universal_variable.basket.line_items[#].quantity"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
var PeeriusCallbacks = {
  track: {
    type: "basket",
    lang: "" + this.getValueForToken("lang") + "",
    basket: {
      items: [],
      currency: "" + this.getValueForToken("currency") + ""
    }
  }
};
var ii = this.getValueForToken("product_ids").length;
for (var i = 0; i < ii; i++) {
  PeeriusCallbacks.track.basket.items.push({
    refCode: this.getValueForToken("product_ids")[i],
    price: this.getValueForToken("unit_sale_prices")[i],
    qty: this.getValueForToken("item_quantities")[i]
  });
}
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
