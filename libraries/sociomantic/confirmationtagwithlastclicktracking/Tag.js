//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("sociomantic.confirmationtagwithlastclicktracking.Tag", {
    config: {/*DATA*/
	id: 38166,
	name: "Confirmation Tag (with last click tracking)",
	async: true,
	description: "As confirmation page tag, but with last click tracking. Now includes optional user ID support. MUST be set as dependent on CryptoJS SHA1 (Web Utilities in the tag library)",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/sociomantic.jpg",
	locationDetail: "",
	priv: false,
	url: "eu-sonar.sociomantic.com/js/2010-07-01/adpan/${advertiserid}",
	usesDocWrite: false,
	parameters: [
	{
		id: 37186,
		name: "Advertiser ID",
		description: "An identifier for the client",
		token: "advertiserid",
		uv: ""
	},
	{
		id: 37187,
		name: "User ID",
		description: "User's identifier - return false to safely exclude it",
		token: "user_id",
		uv: "universal_variable.user.user_id"
	},
	{
		id: 37188,
		name: "Transaction ID",
		description: "Identifier relating to the current transaction",
		token: "transaction_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 37189,
		name: "Checkout Total",
		description: "The total value of items at checkout",
		token: "checkout_total",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 37190,
		name: "Product Ids",
		description: "A list of identifiers relating to products in the order",
		token: "product_ids",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 37191,
		name: "Prices",
		description: "A list of sale prices for each item in the order",
		token: "prices",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 37192,
		name: "Currency",
		description: "The currency for the current order",
		token: "currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 37193,
		name: "Quantities",
		description: "A list of quantities for items relating to respective items currently in the order",
		token: "quantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 37202,
		name: "User Email",
		description: "User's email - return false to safely exclude it - will be hashed before sending (no PII is sent)",
		token: "user_email",
		uv: "universal_variable.user.email"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
var sale = {
  confirmed: true
};

var basket = {
   products: []
};

for (var i = 0, ii = this.getValueForToken("product_ids").length; i < ii; i++) {
   basket.products.push({
      identifier: this.getValueForToken("product_ids")[i],
      amount: this.getValueForToken("prices")[i],
      currency: '' + this.getValueForToken("currency") + '',
      quantity: this.getValueForToken("quantities")[i]
   });
}

basket.transaction = '' + this.getValueForToken("transaction_id") + '';
basket.amount = '' + this.getValueForToken("checkout_total") + '';
basket.currency = '' + this.getValueForToken("currency") + '';
window.basket = basket;
window.customer = window.customer || {};

//Allows for custom scripts altering the customer object. Skipped over if user_id or user_email is false-like
var email = '' + this.getValueForToken("user_email") + '';
if (email && email.toLowerCase() !== "false"){
  email = email;
  email = CryptoJS.SHA1(email).toString();
  var date = new Date();
  date.setTime(date.getTime()+(90*24*60*60*1000));
  var expires = "; expires="+date.toGMTString();
  document.cookie = "qb_sm_mhash=" + email + expires + ";";
  window.customer.mhash = email;
}else{
  var parts = document.cookie.split("qb_sm_mhash=");
  if (parts.length == 2) window.customer.mhash = parts.pop().split(";").shift();
}

var user_id = '' + this.getValueForToken("user_id") + '';
if (user_id && user_id.toLowerCase() !== "false"){
  user_id = user_id;
  var date = new Date();
  date.setTime(date.getTime()+(90*24*60*60*1000));
  var expires = "; expires="+date.toGMTString();
  document.cookie = "qb_sm_uid=" + email + expires + ";";
  window.customer.identifier = user_id;
}else{
  var parts = document.cookie.split("qb_sm_uid=");
  if (parts.length == 2) window.customer.identifier = parts.pop().split(";").shift();
}
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
