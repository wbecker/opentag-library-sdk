//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("affiliatewindow.confirmationtagwithproductdetailchannel.Tag", {
	config: {
		/*DATA*/
		name: "Confirmation Tag with Product Detail & Channel",
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
			name: "Affiliate Window Merchant ID",
			description: "",
			token: "merchant_id",
			uv: ""
		},
		{
			name: "Affiliate Window Test Mode",
			description: "",
			token: "testmode",
			uv: ""
		},
		{
			name: "Affiliate Window Commission Group",
			description: "",
			token: "commission_group",
			uv: ""
		},
		{
			name: "Order Total",
			description: "",
			token: "orderTotal",
			uv: "universal_variable.transaction.total"
		},
		{
			name: "Order ID",
			description: "",
			token: "orderId",
			uv: "universal_variable.transaction.order_id"
		},
		{
			name: "Voucher",
			description: "",
			token: "voucher",
			uv: "universal_variable.transaction.voucher"
		},
		{
			name: "Order Currency",
			description: "",
			token: "orderCurrency",
			uv: "universal_variable.transaction.currency"
		},
		{
			name: "Product Ids",
			description: "",
			token: "productId",
			uv: "universal_variable.transaction.line_items[#].product.id"
		},
		{
			name: "Product Name",
			description: "",
			token: "productName",
			uv: "universal_variable.transaction.line_items[#].product.name"
		},
		{
			name: "Product Unit Price",
			description: "",
			token: "productUnitPrice",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		},
		{
			name: "Product Quantities",
			description: "",
			token: "quantity",
			uv: "universal_variable.transaction.line_items[#].quantity"
		},
		{
			name: "Product SKUs",
			description: "",
			token: "productSku",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		},
		{
			name: "Product Categories",
			description: "",
			token: "productCategory",
			uv: "universal_variable.transaction.line_items[#].product.category"
		},
		{
			name: "Traffic Channel",
			description: "The traffic source - should be aw if AWIN referrer",
			token: "channel",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
(function () {
    var awinImgSrc = [
        "https://www.awin1.com/sread.img?tt=ns&tv=2",
        "&merchant=" + this.getValueForToken("merchant_id") + "",
        "&amount=" + this.getValueForToken("orderTotal") + "",
        "&ref=" + this.getValueForToken("orderId") + "",
        "&parts=" + this.getValueForToken("commission_group") + ":" + this.getValueForToken("orderTotal") + "",
        "&vc=" + this.getValueForToken("voucher") + "",
        "&testmode=" + this.getValueForToken("testmode") + "", 
        "&cr=" + this.getValueForToken("orderCurrency") + "",
        "&ch=" + this.getValueForToken("channel") + ""
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
      test: "" + this.getValueForToken("testmode") + "",
      channel: "" + this.getValueForToken("channel") + ""
    }
  }
};
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});
