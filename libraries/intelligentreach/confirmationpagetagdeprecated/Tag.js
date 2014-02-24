//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("intelligentreach.confirmationpagetagdeprecated.Tag", {
    config: {
      /*DATA*/
	id: 34,
	name: "Confirmation Page Tag - Deprecated",
	async: true,
	description: "The tag is placed on final checkout confirmation page only.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/IntelligentReach.png",
	locationDetail: "",
	priv: true,
	url: "www.ist-track.com/ProcessPurchaseJavaScript.ashx?companyId=${id}",
	usesDocWrite: true,
	parameters: [
	{
		id: 3400,
		name: "Ultimate Feed ID",
		description: "Ultimate Feed client ID",
		token: "id",
		uv: ""
	},
	{
		id: 3401,
		name: "Order Id",
		description: "A unique id for the order",
		token: "orderId",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 3402,
		name: "Order Total",
		description: "The total cost of the order",
		token: "orderTotal",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 3403,
		name: "Product SKUs",
		description: "An array of SKUs for each product",
		token: "productSku",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 3404,
		name: "Order Quantities",
		description: "The quantities of each product purchased",
		token: "quantity",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 3405,
		name: "Sale Amounts",
		description: "The price of each product purchased, including any discounts",
		token: "saleAmount",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 3406,
		name: "Voucher Code",
		description: "The voucher code used with the purchase, if any",
		token: "voucher",
		uv: "universal_variable.transaction.voucher"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/
      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
istCompanyId = "" + this.getValueForToken("id") + "";
istOrderId = this.getValueForToken("orderId");
istTotal = this.getValueForToken("orderTotal");
istItemCount = this.getValueForToken("productSku").length;
istNewCustomer = false;
istPurchasedItems = "";
istPurchasedItemQuantities = "";
istPurchasedItemPrices = "";
for(var i = 0; i < this.getValueForToken("productSku").length; i++) {
  istPurchasedItems += this.getValueForToken("productSku")[i];
  istPurchasedItemQuantities += this.getValueForToken("quantity")[i].toString();
  istPurchasedItemPrices += this.getValueForToken("saleAmount")[i].toString();

  if (this.getValueForToken("productSku").length !== (i + 1)) {
    istPurchasedItems += "|";
    istPurchasedItemQuantities += "|";
    istPurchasedItemPrices += "|";
  }
}
istInstorePickup = false;
istUserDefinedFieldOne = "";
istUserDefinedFieldTwo = "";
istUserDefinedFieldThree = "";
istVoucherCode = this.getValueForToken("voucher");
istLastAffiliateCode = "";
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
