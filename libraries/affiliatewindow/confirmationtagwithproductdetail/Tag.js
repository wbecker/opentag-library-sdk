//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("affiliatewindow.confirmationtagwithproductdetail.Tag", {
    config: {/*DATA*/
	id: 31,
	name: "Confirmation Tag with Product Detail",
	async: true,
	description: "Confirmation page script for pages that send product information with the same commission group for each product.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/AffiliateWindow.jpg",
	locationDetail: "",
	priv: false,
	url: "www.dwin1.com/${merchant_id}.js",
	usesDocWrite: true,
	parameters: [
	{
		id: 3100,
		name: "Affiliate Window Merchant ID",
		description: "Affiliate Window Merchant ID",
		token: "merchant_id",
		uv: ""
	},
	{
		id: 3101,
		name: "Affiliate Window Test Mode",
		description: "Enter 0 if the code is on production mode; Test mode uses value 1.",
		token: "testmode",
		uv: ""
	},
	{
		id: 3102,
		name: "Affiliate Window Commission Group",
		description: "Enter DEFAULT if there is no commission group is defined.",
		token: "commission_group",
		uv: ""
	},
	{
		id: 3103,
		name: "Order Total",
		description: "The total cost of the order",
		token: "orderTotal",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 3104,
		name: "Order Id",
		description: "A unique id for the order",
		token: "orderId",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 3105,
		name: "Voucher",
		description: "The voucher by which the order was discounted",
		token: "voucher",
		uv: "universal_variable.transaction.voucher"
	},
	{
		id: 3106,
		name: "Order Currency",
		description: "The currency the order was paid with",
		token: "orderCurrency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 3107,
		name: "Product Ids",
		description: "The id of each product purchased",
		token: "productId",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 3108,
		name: "Product Name",
		description: "The name of each product purchased",
		token: "productName",
		uv: "universal_variable.transaction.line_items[#].product.name"
	},
	{
		id: 3109,
		name: "Product Unit Price",
		description: "The price of each product purchased",
		token: "productUnitPrice",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 3110,
		name: "Product Quantities",
		description: "The quantity of each product purchased",
		token: "quantity",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 3111,
		name: "Product SKUs",
		description: "The SKUs for each product in the order",
		token: "productSku",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 3112,
		name: "Product Categories",
		description: "The category for each product purchased",
		token: "productCategory",
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
        "" + this.getValueForToken("orderTotal") + "",
        "&ref=", "" + this.getValueForToken("orderId") + "",
        "&parts=" + this.getValueForToken("commission_group") + ":", "" + this.getValueForToken("orderTotal") + "",
        "&vc=", "" + this.getValueForToken("voucher") + "",
        "&testmode=" + this.getValueForToken("testmode") + "&cr=", "" + this.getValueForToken("orderCurrency") + ""
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
    for(var i = 0; i < this.getValueForToken("productId").length; i++) {
        textareaText.push([
            "AW:P|" + this.getValueForToken("merchant_id") + "|",
            "" + this.getValueForToken("orderId") + "", "|",
            this.getValueForToken("productId")[i], "|", 
            this.getValueForToken("productName")[i], "|",
            this.getValueForToken("productUnitPrice")[i], "|",
            this.getValueForToken("quantity")[i], "|",
            this.getValueForToken("productSku")[i], "|",
            "" + this.getValueForToken("commission_group") + "|",
            this.getValueForToken("productCategory")[i], "|"
        ].join(""));
    }
    textarea.innerHTML = textareaText.join("\n");

    form.appendChild(textarea);
    document.body.appendChild(form);
})();

var AWIN = {
  Tracking: {
    Sale: {
      amount: this.getValueForToken("orderTotal"),
      currency: "" + this.getValueForToken("orderCurrency") + "",
      orderRef: "" + this.getValueForToken("orderId") + "",
      parts: "" + this.getValueForToken("commission_group") + ":" + this.getValueForToken("orderTotal"),
      voucher: "" + this.getValueForToken("voucher") + "",
      test: "" + this.getValueForToken("testmode") + ""
    }
  }
};
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
