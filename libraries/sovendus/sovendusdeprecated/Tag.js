//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("sovendus.sovendusdeprecated.Tag", {
	config: {
		/*DATA*/
		name: "Sovendus [DEPRECATED]",
		async: true,
		description: "",
		html: "<div id=\"gutscheinconnection-container\"></div>\n",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/sovendus-logo.jpg",
		locationDetail: "",
		priv: true,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Sovendus Shop ID",
			description: "The Shop ID you have received from Sovendus.",
			token: "shop_id",
			uv: ""
		},
		{
			name: "Sovendus Session ID",
			description: "The customer's session ID is used to find duplicate  requests.",
			token: "session_id",
			uv: ""
		},
		{
			name: "Sovendus Salutation",
			description: "Optional. Used to prefill the coupon request form. (e.g. Mr)",
			token: "salutation",
			uv: ""
		},
		{
			name: "Sovendus First Name",
			description: "Optional. Used to prefill the coupon request form.",
			token: "first_name",
			uv: ""
		},
		{
			name: "Sovendus Last Name",
			description: "Optional. Used to prefill the coupon request form.",
			token: "last_name",
			uv: ""
		},
		{
			name: "Sovendus Customer Email",
			description: "Optional. Used to prefill the coupon request form.",
			token: "email",
			uv: "universal_variable.user.email"
		},
		{
			name: "Sovendus Order ID",
			description: "Unique identifier of orders for accounting.",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		},
		{
			name: "Sovendus Order Value",
			description: "Order value for accounting. Please use the dot (.) as  decimal separator and supply two decimal plac",
			token: "order_value",
			uv: "universal_variable.transaction.total"
		},
		{
			name: "Sovendus Order Currency",
			description: "Order Currency",
			token: "order_currency",
			uv: "universal_variable.transaction.currency"
		},
		{
			name: "Sovendus Coupon Code",
			description: "The coupon code just encashed to track the success  rate",
			token: "coupon_code",
			uv: "universal_variable.transaction.voucher"
		},
		{
			name: "Sovendus CheckSum",
			description: "See Sovendus Technical Integration Documentation on how to implement",
			token: "checksum",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

  var sovendusNewDate = new Date();
  var sovendusTimestamp = sovendusNewDate.getTime();
 
  var _gconData = _gconData || [];
  _gconData.length = 0;
  _gconData.push(['_shopId', '' + this.getValueForToken("shop_id") + '']);
  _gconData.push(['_bannerId', '1']);
  _gconData.push(['_sessionId', '' + this.getValueForToken("session_id") + '']);
  _gconData.push(['_timestamp', sovendusTimestamp]);
  _gconData.push(['_customerSalutation', '' + this.getValueForToken("salutation") + '']);
  _gconData.push(['_customerFirstName', '' + this.getValueForToken("first_name") + '']);
  _gconData.push(['_customerLastName', '' + this.getValueForToken("last_name") + '']);
  _gconData.push(['_customerEmail', '' + this.getValueForToken("email") + '']);
  _gconData.push(['_orderId', '' + this.getValueForToken("order_id") + '']);
  _gconData.push(['_orderValue', '' + this.getValueForToken("order_value") + '']);
  _gconData.push(['_orderCurrency', '' + this.getValueForToken("order_currency") + '']);
  _gconData.push(['_usedCouponCode', '' + this.getValueForToken("coupon_code") + '']);
  _gconData.push(['_checksum', '' + this.getValueForToken("checksum") + '']);
  _gconData.push(['_htmlElementId', 'gutscheinconnection-container']);

  (function() 
  { 
    var sovendusScript = document.createElement('script');
    document.body.appendChild(sovendusScript);
    sovendusScript.type = "text/javascript";
    sovendusScript.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + "api.gutscheinconnection.de/js/client.js" ;
    sovendusScript.async = "true"; 
  })();


		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});
