//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("intelligentreach.confirmationpagetag.Tag", {
    config: {
      /*DATA*/
	id: 26661,
	name: "Confirmation Page Tag",
	async: true,
	description: "The tag is placed on final checkout confirmation page only.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/IntelligentReach.png",
	locationDetail: "",
	priv: false,
	url: "www.ist-track.com/ProcessPurchaseJavaScript.ashx?companyId=${id}&useDom=1",
	usesDocWrite: false,
	parameters: [
	{
		id: 26163,
		name: "Intelligent Reach ID",
		description: "Intelligent Reach client ID",
		token: "id",
		uv: ""
	},
	{
		id: 26164,
		name: "Order Id",
		description: "A unique id for the order",
		token: "orderId",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 26165,
		name: "Order Sub Total",
		description: "The total cost of the order",
		token: "orderTotal",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 26166,
		name: "Product SKU's",
		description: "An array of SKUs for each product",
		token: "productSku",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 26167,
		name: "Order Quantities",
		description: "The quantities of each product purchased",
		token: "quantity",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 26168,
		name: "Sale Amounts",
		description: "The price of each product purchased, including any discounts",
		token: "saleAmount",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 26169,
		name: "Voucher Code",
		description: "The voucher code used with the purchase, if any",
		token: "voucher",
		uv: "universal_variable.transaction.voucher"
	},
	{
		id: 26170,
		name: "User Returning",
		description: "",
		token: "userReturning",
		uv: "universal_variable.user.returning"
	},
	{
		id: 26171,
		name: "In Store Pickup",
		description: "Transaction is for in store pickup (usually hardcoded as false)",
		token: "store_pickup",
		uv: ""
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
istOrderId = "" + this.getValueForToken("orderId") + "";
istTotal = "" + this.getValueForToken("orderTotal") + "";
istItemCount = "" + this.getValueForToken("productSku").length;
istNewCustomer = "" + !this.getValueForToken("userReturning");
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
istInstorePickup = "" + this.getValueForToken("store_pickup");
istUserDefinedFieldOne = "";
istUserDefinedFieldTwo = "";
istUserDefinedFieldThree = "";
istVoucherCode = "" + this.getValueForToken("voucher") + "";
istLastAffiliateCode = "";
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
