//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("mentionme.referrertag.Tag", {
    config: {/*DATA*/
	id: 39683,
	name: "Referrer Tag",
	async: true,
	description: "The implementation can be either as a modal popup or embedded in the page using an iFrame, both of which lead to a popup where the customer can register to become a referrer. If the client requires, they can set the implementation parameter to 'embed', in which case the content is loaded into an iframe within the page. This is inserted within a DIV <div id=\"mmWrapper\"></div> which should be on the page. All parameters marked with * are optional (if not used populate with empty hardcoded value, even if default is 'uses universal variable')",
	html: "",
	imageUrl: ".",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 38784,
		name: "Email",
		description: "The customer's email address e.g. waldosmith@mention-me.com",
		token: "email",
		uv: "universal_variable.user.email"
	},
	{
		id: 38785,
		name: "Order Number",
		description: "The unique order identifier e.g. 752109",
		token: "order_number",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 38786,
		name: "Order Total",
		description: "The total amount for the order e.g. 102",
		token: "order_total",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 38787,
		name: "Order Currency",
		description: "The three character currency code that the order total is in e.g. GBP",
		token: "order_currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 38788,
		name: "Situation",
		description: "Where you are including this tag within your site (e.g. postpurchase, homepage, dashboard)",
		token: "situation",
		uv: ""
	},
	{
		id: 38789,
		name: "Full Name*",
		description: "The full name of the customer (leave blank if not used)",
		token: "fullname",
		uv: "universal_variable.user.name"
	},
	{
		id: 38790,
		name: "Customer ID*",
		description: "The ID assigned to the customer (leave blank if not used)",
		token: "customer_id",
		uv: "universal_variable.user.user_id"
	},
	{
		id: 38791,
		name: "Custom Field*",
		description: "Any piece of custom data you wish to pass to MentionMe (leave blank if not used)",
		token: "custom_field",
		uv: ""
	},
	{
		id: 38792,
		name: "Coupon Code*",
		description: "Coupon code ysed for the customer (leave blank if not used)",
		token: "coupon_code",
		uv: "universal_variable.transaction.voucher"
	},
	{
		id: 38793,
		name: "Address Line 1*",
		description: "The customer's first line of address (leave blank if not used)",
		token: "address_line1",
		uv: "universal_variable.transaction.billing.address"
	},
	{
		id: 38794,
		name: "Address Line 2*",
		description: "The customer's last line of address (leave blank if not used)",
		token: "address_line2",
		uv: ""
	},
	{
		id: 38795,
		name: "Address City",
		description: "The customer's city (leave blank if not used)",
		token: "address_city",
		uv: "universal_variable.transaction.billing.city"
	},
	{
		id: 38796,
		name: "Address County*",
		description: "The customer's country (leave blank if not used)",
		token: "address_county",
		uv: ""
	},
	{
		id: 38797,
		name: "Address Postcode*",
		description: "The customer's postcode (leave blank if not used)",
		token: "address_postcode",
		uv: "universal_variable.transaction.billing.postcode"
	},
	{
		id: 38798,
		name: "Address Country*",
		description: "The customer's country (leave blank if not used)",
		token: "address_country",
		uv: "universal_variable.transaction.billing.country"
	},
	{
		id: 38799,
		name: "Partner Code",
		description: "The partner ID given to you by MentionMe (leave blank if not used)",
		token: "partner_code",
		uv: ""
	},
	{
		id: 38800,
		name: "Script Domain",
		description: "Domain for the script 'tag-demo.mention-me.com' for testing and 'tag.mention-me.com' for production",
		token: "domain",
		uv: ""
	},
	{
		id: 38801,
		name: "Implementation*",
		description: "Override the way the flow is implemented ('embed' or 'popup') (leave blank if not used)",
		token: "implementation",
		uv: ""
	},
	{
		id: 38802,
		name: "Segment*",
		description: "String representing the customer segment 'new' or 'existing' (leave blank if not used)",
		token: "segment",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

var baseUrl = "https://" + this.getValueForToken("domain") + "/api/v2/referreroffer/" + this.getValueForToken("partner_code") + "?";
var paramArr = [];
var paramObj = {
  email: "" + this.getValueForToken("email") + "",
  order_number: "" + this.getValueForToken("order_number") + "",
  order_date: dateTime(),
  order_total: "" + this.getValueForToken("order_total") + "",
  order_currency: "" + this.getValueForToken("order_currency") + "",
  situation: "" + this.getValueForToken("situation") + ""
};

if ("" + this.getValueForToken("customer_id") + "".length) paramObj["customer_id"] = "" + this.getValueForToken("customer_id") + "";
if ("" + this.getValueForToken("custom_field") + "".length) paramObj["custom_field"] = "" + this.getValueForToken("custom_field") + "";
if ("" + this.getValueForToken("fullname") + "".length) paramObj["fullname"] = "" + this.getValueForToken("fullname") + "";
if ("" + this.getValueForToken("coupon_code") + "".length) paramObj["coupon_code"] = "" + this.getValueForToken("coupon_code") + "";
if ("" + this.getValueForToken("address_line1") + "".length) paramObj["address_line1"] = "" + this.getValueForToken("address_line1") + "";
if ("" + this.getValueForToken("address_line2") + "".length) paramObj["address_line2"] = "" + this.getValueForToken("address_line2") + "";
if ("" + this.getValueForToken("address_city") + "".length) paramObj["address_city"] = "" + this.getValueForToken("address_city") + "";
if ("" + this.getValueForToken("address_postcode") + "".length) paramObj["address_postcode"] = "" + this.getValueForToken("address_postcode") + "";
if ("" + this.getValueForToken("address_country") + "".length) paramObj["address_country"] = "" + this.getValueForToken("address_country") + "";
if ("" + this.getValueForToken("address_county") + "".length) paramObj["address_county"] = "" + this.getValueForToken("address_county") + "";
if ("" + this.getValueForToken("implementation") + "".length) paramObj["implementation"] = "" + this.getValueForToken("implementation") + "";
if ("" + this.getValueForToken("segment") + "".length) paramObj["segment"] = "" + this.getValueForToken("segment") + "";

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


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
