//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("affiliatewindow.ConfirmationTagWithProductAndCommissionGroupDetail", {
    config: {/*DATA*/
	id: 24668,
	name: "Confirmation Tag with Product and Commission Group Detail",
	async: true,
	description: "Use this if you have different commission groups per product.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/AffiliateWindow.jpg",
	locationDetail: "",
	priv: false,
	url: "www.dwin1.com/${merchant_id}.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 24194,
		name: "Affiliate Window Merchant ID",
		description: "Affiliate Window Merchant ID",
		token: "merchant_id",
		uv: ""
	},
	{
		id: 24195,
		name: "Affiliate Window Test Mode",
		description: "Enter 0 if the code is on production mode; Test mode uses value 1.",
		token: "testmode",
		uv: ""
	},
	{
		id: 24196,
		name: "Order Sub Total",
		description: "The total cost of the order",
		token: "orderTotal",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 24197,
		name: "Order Id",
		description: "A unique id for the order",
		token: "orderId",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 24198,
		name: "Voucher",
		description: "The voucher by which the order was discounted",
		token: "voucher",
		uv: "universal_variable.transaction.voucher"
	},
	{
		id: 24199,
		name: "Order Currency",
		description: "The currency the order was paid with",
		token: "orderCurrency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 24200,
		name: "Product Ids",
		description: "The id of each product purchased",
		token: "productId",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 24201,
		name: "Product Name",
		description: "The name of each product purchased",
		token: "productName",
		uv: "universal_variable.transaction.line_items[#].product.name"
	},
	{
		id: 24202,
		name: "Product Unit Price",
		description: "The price of each product purchased",
		token: "productUnitPrice",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 24203,
		name: "Product Quantities",
		description: "The quantity of each product purchased",
		token: "quantity",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 24204,
		name: "Product SKUs",
		description: "The SKUs for each product in the order",
		token: "productSku",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 24205,
		name: "Product Categories",
		description: "The category for each product purchased",
		token: "productCategory",
		uv: "universal_variable.transaction.line_items[#].product.category"
	},
	{
		id: 24206,
		name: "Product Commission Groups",
		description: "The commission group for every product purchased",
		token: "commission_groups",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
(function () {

    var i, cg, cg_groups = {}, parts;
    for (i = 0; i < this.getValueForToken("productId").length; i++) {
      cg = this.getValueForToken("commission_groups")[i];
      if (cg !== "IGNORE_ITEM") {
        if (!cg_groups[cg]) {
          cg_groups[cg] = 0;
        }
        cg_groups[cg] += parseFloat(this.getValueForToken("productUnitPrice")[i]) * parseInt(this.getValueForToken("quantity")[i]);
      }
    }
    parts = [];
    for (i in cg_groups) {
      if (cg_groups.hasOwnProperty(i)) {
        parts.push(i + ":" + cg_groups[i].toFixed(2));
      }
    }
    parts = parts.join("|");
    var awinImgSrc = [
        "https://www.awin1.com/sread.img?tt=ns&tv=2&merchant=" + this.getValueForToken("merchant_id") + "&amount=",
        "" + this.getValueForToken("orderTotal") + "",
        "&ref=", "" + this.getValueForToken("orderId") + "",
        "&parts=", parts,
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
    for (i = 0; i < this.getValueForToken("productId").length; i++) {
      if (this.getValueForToken("commission_groups")[i] !== "IGNORE_ITEM") {
        textareaText.push([
            "AW:P|" + this.getValueForToken("merchant_id") + "|",
            "" + this.getValueForToken("orderId") + "", "|",
            this.getValueForToken("productId")[i], "|", 
            this.getValueForToken("productName")[i], "|",
            this.getValueForToken("productUnitPrice")[i], "|",
            this.getValueForToken("quantity")[i], "|",
            this.getValueForToken("productSku")[i], "|",
            this.getValueForToken("commission_groups")[i], "|",
            this.getValueForToken("productCategory")[i]
        ].join(""));
      }
    }
    textarea.innerHTML = textareaText.join("\n");

    form.appendChild(textarea);
    document.body.appendChild(form);

    window.AWIN = {
      Tracking: {
        Sale: {
          amount: this.getValueForToken("orderTotal"),
          currency: "" + this.getValueForToken("orderCurrency") + "",
          orderRef: "" + this.getValueForToken("orderId") + "",
          parts: parts,
          voucher: "" + this.getValueForToken("voucher") + "",
          test: "" + this.getValueForToken("testmode") + ""
        }
      }
    };

})();
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
