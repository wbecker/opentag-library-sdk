//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("sovendus.sovendusallfields.Tag", {
    config: {
      /*DATA*/
	id: 30657,
	name: "Sovendus [All Fields]",
	async: true,
	description: "<div id=\"gutscheinconnection-container\"></div> (the banner) should first be placed on the confirmation page, and positioned (using css) exactly where you'd like the banner to appear, before activating this tag on the confirmation page",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/sovendus-logo.jpg",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 29657,
		name: "Sovendus Shop ID",
		description: "The Shop ID you have received from Sovendus - e.g. 1",
		token: "shop_id",
		uv: ""
	},
	{
		id: 29658,
		name: "Sovendus Banner ID",
		description: "If multiple banners - choose active banner here (e.g. 1) - usually no need to change this",
		token: "banner_id",
		uv: ""
	},
	{
		id: 29659,
		name: "Sovendus Session ID",
		description: "The customer's session ID is used to find duplicate requests - e.g. 876ABC312",
		token: "session_id",
		uv: ""
	},
	{
		id: 29660,
		name: "Sovendus Customer Salutation",
		description: "Optional. Used to prefill the coupon request form - e.g. Mr",
		token: "salutation",
		uv: ""
	},
	{
		id: 29661,
		name: "Sovendus Customer First Name",
		description: "Optional. Used to prefill the coupon request form - e.g. Max",
		token: "first_name",
		uv: ""
	},
	{
		id: 29662,
		name: "Sovendus Customer Last Name",
		description: "Optional. Used to prefill the coupon request form.",
		token: "last_name",
		uv: ""
	},
	{
		id: 29663,
		name: "Sovendus Order ID",
		description: "Unique identifier of orders for accounting - e.g. 124578",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 29664,
		name: "Sovendus Order Value",
		description: "Order value for accounting. Use dot (.) as decimal separator & supply 2 decimal places - e.g. 123.54",
		token: "order_value",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 29665,
		name: "Sovendus Order Currency",
		description: "Order Currency - e.g. GBP",
		token: "order_currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 29666,
		name: "Sovendus Used Coupon Code",
		description: "The coupon code just encashed to track the success rate. - e.g. ABC123",
		token: "coupon_code",
		uv: "universal_variable.transaction.voucher"
	},
	{
		id: 29667,
		name: "Sovendus Customer Email",
		description: "Optional. Used to prefill the coupon request form. - e.g. max@example.com",
		token: "email",
		uv: "universal_variable.user.email"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/


(function()
{
  var waitForSovendusDiv = function()
  {
    if (document.getElementById('gutscheinconnection-container'))
    {
      var sovendusNewDate = new Date();
      var sovendusTimestamp = sovendusNewDate.getTime();

      var getCookie = function (c_name)
      {
        var i,x,y,ARRcookies=document.cookie.split(";");
        for (i=0;i<ARRcookies.length;i++)
        {
          x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
          y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
          x=x.replace(/^\s+|\s+$/g,"");
          if (x==c_name)
          {
            return unescape(y);
          }
        }
      };

      var sovendusSessionId = getCookie("__utma");

      window._gconData = window._gconData || [];

      _gconData.length = 0;

      _gconData.push(['_shopId', '' + this.getValueForToken("shop_id") + '']);
      _gconData.push(['_bannerId', '' + this.getValueForToken("banner_id") + '']);
      _gconData.push(['_sessionId', sovendusSessionId]);
      _gconData.push(['_timestamp', sovendusTimestamp]);
      _gconData.push(['_customerSalutation', '' + this.getValueForToken("salutation") + '']);
      _gconData.push(['_customerFirstName', '' + this.getValueForToken("first_name") + '']);   
      _gconData.push(['_customerLastName', '' + this.getValueForToken("last_name") + '']); 
      _gconData.push(['_customerEmail', '' + this.getValueForToken("email") + '']);
      _gconData.push(['_orderId', '' + this.getValueForToken("order_id") + '']);
      _gconData.push(['_orderValue', '' + this.getValueForToken("order_value") + '']);
      _gconData.push(['_orderCurrency', '' + this.getValueForToken("order_currency") + '']);
      _gconData.push(['_usedCouponCode', '' + this.getValueForToken("coupon_code") + '']);
      _gconData.push(['_htmlElementId', 'gutscheinconnection-container']);

      var sovendusScript = document.createElement('script')
      document.body.appendChild(sovendusScript);
      sovendusScript.type = "text/javascript";
      sovendusScript.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + "api.gutscheinconnection.de/js/client.js" ;
      sovendusScript.async = "true";
    }
    else
    {
      setTimeout(waitForSovendusDiv, 200);
    }
  };

  waitForSovendusDiv();

})();



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
