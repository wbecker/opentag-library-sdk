//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("affiliatewindow.ConfirmationTagWithProductDetailAndPVParameter", {
    config: {/*DATA*/
	id: 39671,
	name: "Confirmation Tag with Product Detail and PV parameter",
	async: true,
	description: "Confirmation page script for pages that send product information with the same commission group for each product. This includes the PV parameter which can be used when AWin is not being affiliated to the sale but still needs to be made aware of it.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/AffiliateWindow.jpg",
	locationDetail: "",
	priv: false,
	url: "www.dwin1.com/${merchant_id}.js",
	usesDocWrite: true,
	parameters: [
	{
		id: 38705,
		name: "Affiliate Window Merchant ID",
		description: "Affiliate Window Merchant ID",
		token: "merchant_id",
		uv: ""
	},
	{
		id: 38706,
		name: "Affiliate Window Test Mode",
		description: "Enter 0 if code is on production mode; Test mode uses value 1.",
		token: "test_mode",
		uv: ""
	},
	{
		id: 38707,
		name: "Affiliate Window Commission Group",
		description: "Enter DEFAULT if no commission group is defined.",
		token: "commission_group",
		uv: ""
	},
	{
		id: 38708,
		name: "Order Total",
		description: "The total cost of the order",
		token: "order_total",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 38709,
		name: "Order Id",
		description: "A unique id for the order",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 38710,
		name: "Voucher",
		description: "The voucher by which the order was discounted",
		token: "voucher",
		uv: ""
	},
	{
		id: 38711,
		name: "Order Currency",
		description: "The currency the order was paid with",
		token: "currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 38712,
		name: "Product Ids",
		description: "The id of each product purchased",
		token: "product_ids",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 38713,
		name: "Product Name",
		description: "The name of each product purchased",
		token: "product_names",
		uv: "universal_variable.transaction.line_items[#].product.name"
	},
	{
		id: 38714,
		name: "Product Unit Price",
		description: "The price of each product purchased",
		token: "product_prices",
		uv: "universal_variable.transaction.line_items[#].product.unit_price"
	},
	{
		id: 38715,
		name: "Product Quantities",
		description: "The quantity of each product purchased",
		token: "product_quantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 38716,
		name: "Product SKUs",
		description: "The SKUs for each product in the order",
		token: "product_skus",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 38717,
		name: "Product Categories",
		description: "The category for each product purchased",
		token: "product_categories",
		uv: "universal_variable.transaction.line_items[#].product.category"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
(function () {
    var awinImgSrc = [
        "https://www.awin1.com/sread.img?tt=ns&tv=2&merchant=" + this.getValueForToken("merchant_id") + "&amount=",
        "" + this.getValueForToken("order_total") + "",
        "&ref=", "" + this.getValueForToken("order_id") + "",
        "&parts=" + this.getValueForToken("commission_group") + ":", "" + this.getValueForToken("order_total") + "",
        "&vc=", "" + this.getValueForToken("voucher") + "",
        "&testmode=" + this.getValueForToken("test_mode") + "&cr=", "" + this.getValueForToken("currency") + ""
    ].join("");
    var el = document.createElement("img");
    el.setAttribute("src", awinImgSrc);
    document.body.appendChild(el);

    var form = document.createElement("form");
    form.setAttribute("style", "display:none;");
    form.setAttribute("name", "aw_basket_form");

    var textarea = document.createElement("textarea");
    textarea.setAttribute("wrap", "physical");
    textarea.setAttribute("id", "aw_basket");

    var textareaText = [];
    for(var i = 0; i < this.getValueForToken("product_ids").length; i++) {
        textareaText.push([
            "AW:P|" + this.getValueForToken("merchant_id") + "|",
            "" + this.getValueForToken("order_id") + "", "|",
            this.getValueForToken("product_ids")[i], "|", 
            this.getValueForToken("product_names")[i], "|",
            this.getValueForToken("product_prices")[i], "|",
            this.getValueForToken("product_quantities")[i], "|",
            this.getValueForToken("product_skus")[i], "|",
            "" + this.getValueForToken("commission_group") + "|",
            this.getValueForToken("product_categories")[i], "|"
        ].join(""));
    }
    textarea.innerHTML = textareaText.join("\n");

    form.appendChild(textarea);
    document.body.appendChild(form);
})();

var AWIN = {
  Tracking: {
    Sale: {
      amount: this.getValueForToken("order_total"),
      currency: "" + this.getValueForToken("currency") + "",
      orderRef: "" + this.getValueForToken("order_id") + "",
      parts: "" + this.getValueForToken("commission_group") + ":" + this.getValueForToken("order_total"),
      voucher: "" + this.getValueForToken("voucher") + "",
      test: "" + this.getValueForToken("test_mode") + "",
      pvOnly: '1'
    }
  }
};
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
