//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("mentionme.alternativeordertrackingtag.Tag", {
    config: {
      /*DATA*/
	id: 35164,
	name: "Alternative Order Tracking Tag",
	async: true,
	description: "Generic tag for MentionMe. All parameters marked with * are optional (if not used populate with empty hardcoded value, even if default is 'uses universal variable')",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/MentionMe.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 34171,
		name: "Email",
		description: "The email address of the customer",
		token: "email",
		uv: "universal_variable.user.email"
	},
	{
		id: 34172,
		name: "Order Number",
		description: "The identifier relating to the order transaction",
		token: "order_number",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 34173,
		name: "Order Total",
		description: "The total value of the order",
		token: "order_total",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 34174,
		name: "Order Currency",
		description: "The currency of the order",
		token: "order_currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 34175,
		name: "Customer ID*",
		description: "The identifier relating to the customer (leave as blank string \"\" if not used)",
		token: "customer_id",
		uv: "universal_variable.user.user_id"
	},
	{
		id: 34176,
		name: "Custom Field*",
		description: "Any piece of custom data you wish to pass to MentionMe (leave as blank string \"\" if not used)",
		token: "custom_field",
		uv: ""
	},
	{
		id: 34177,
		name: "Coupon Code*",
		description: "The coupon code used byt the customer (leave as blank string \"\" if not used)",
		token: "coupon_code",
		uv: "universal_variable.transaction.voucher"
	},
	{
		id: 34178,
		name: "Address Line 1*",
		description: "The first line of the customers address (leave as blank string \"\" if not used)",
		token: "address_line1",
		uv: "universal_variable.transaction.billing.address"
	},
	{
		id: 34179,
		name: "Address Line 2*",
		description: "The customer's second address line (leave as blank string \"\" if not used)",
		token: "address_line2",
		uv: ""
	},
	{
		id: 34180,
		name: "Address City*",
		description: "The customer's address city (leave as blank string \"\" if not used)",
		token: "address_city",
		uv: "universal_variable.transaction.billing.city"
	},
	{
		id: 34181,
		name: "Address County*",
		description: "The customer's address county (leave as blank string \"\" if not used)",
		token: "address_county",
		uv: ""
	},
	{
		id: 34198,
		name: "Address Postcode*",
		description: "The customer's address postcode (leave blank string \"\" if not used)",
		token: "address_postcode",
		uv: "universal_variable.transaction.billing.postcode"
	},
	{
		id: 34199,
		name: "Address Country*",
		description: "The customer's address country (leave blank string \"\" if not used)",
		token: "address_country",
		uv: "universal_variable.transaction.billing.country"
	},
	{
		id: 34200,
		name: "Partner Code",
		description: "The code given to you from MentionMe",
		token: "partner_code",
		uv: ""
	},
	{
		id: 34209,
		name: "Script Domain",
		description: "Domain for the script: 'tag-demo.mention-me.com' for testing, 'tag.mention-me.com' for production",
		token: "domain",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

var baseUrl = "https://" + this.getValueForToken("domain") + "/api/v2/order/" + this.getValueForToken("partner_code") + "?";
var paramArr = [];
var paramObj = {
  email: "" + this.getValueForToken("email") + "",
  order_number: "" + this.getValueForToken("order_number") + "",
  order_date: dateTime(),
  order_total: "" + this.getValueForToken("order_total") + "",
  order_currency: "" + this.getValueForToken("order_currency") + ""
};

if ("" + this.getValueForToken("customer_id") + "".length) paramObj["customer_id"] = "" + this.getValueForToken("customer_id") + "";
if ("" + this.getValueForToken("custom_field") + "".length) paramObj["custom_field"] = "" + this.getValueForToken("custom_field") + "";
if ("" + this.getValueForToken("coupon_code") + "".length) paramObj["coupon_code"] = "" + this.getValueForToken("coupon_code") + "";
if ("" + this.getValueForToken("address_line1") + "".length) paramObj["address_line1"] = "" + this.getValueForToken("address_line1") + "";
if ("" + this.getValueForToken("address_line2") + "".length) paramObj["address_line2"] = "" + this.getValueForToken("address_line2") + "";
if ("" + this.getValueForToken("address_city") + "".length) paramObj["address_city"] = "" + this.getValueForToken("address_city") + "";
if ("" + this.getValueForToken("address_postcode") + "".length) paramObj["address_postcode"] = "" + this.getValueForToken("address_postcode") + "";
if ("" + this.getValueForToken("address_country") + "".length) paramObj["address_country"] = "" + this.getValueForToken("address_country") + "";
if ("" + this.getValueForToken("address_county") + "".length) paramObj["address_county"] = "" + this.getValueForToken("address_county") + "";

for (var param in paramObj) {
  var value = paramObj[param];
  paramArr.push(param + "=" + escape(value));
}

var mmScript = document.createElement("script");
mmScript.src = baseUrl + paramArr.join("&");
document.body.appendChild(mmScript);

function dateTime() {
  var date = new Date();
  var day = beginningZero(date.getUTCDay());
  var monthOffset = parseInt(date.getUTCMonth() + 1, 10);
  var month = beginningZero(monthOffset);
  var hours = beginningZero(date.getUTCHours());
  var minutes = beginningZero(date.getUTCMinutes());
  var seconds = beginningZero(date.getUTCSeconds());
  var time = hours + ":" + minutes + ":" + seconds + date.getUTCMilliseconds();
  return date.getUTCFullYear() + "-" + month + "-" + day + "GMT" + time;
}

function beginningZero(digit) {
  return (digit < 10) ? "0" + digit : "" + digit;
}


      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
