//:include tagsdk-current.js
var version = "";
var classPath = "sovendus.sovendusrequiredfieldsonly" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Sovendus [Required Fields Only]",
		async: true,
		description: "<div id=\"gutscheinconnection-container\"></div> should first be placed on the confirmation page, and positioned (using css) exactly where you'd like the banner to appear, before activating this tag (this version of the script is leaving out all optional parameters for faster implementation)",
		html: "<!--@SRC@--><script type=\"text/javascript\">\n\n(function()\n{\n  var waitForSovendusDiv = function()\n  {\n    if (document.getElementById('gutscheinconnection-container'))\n    {\n     var sovendusNewDate = new Date();\n     var sovendusTimestamp = sovendusNewDate.getTime();\n\n     var getCookie = function (c_name)\n     {\n       var i,x,y,ARRcookies=document.cookie.split(\";\");\n       for (i=0;i<ARRcookies.length;i++)\n       {\n         x=ARRcookies[i].substr(0,ARRcookies[i].indexOf(\"=\"));\n         y=ARRcookies[i].substr(ARRcookies[i].indexOf(\"=\")+1);\n         x=x.replace(/^\\s+|\\s+$/g,\"\");\n         if (x==c_name)\n         {\n           return unescape(y);\n         }\n       }\n     };\n\n     var sovendusSessionId = getCookie(\"__utma\");\n\n     window._gconData = window._gconData || [];\n\n     _gconData.length = 0;\n\n     _gconData.push(['_shopId', '${shop_id}']);\n     _gconData.push(['_bannerId', '${banner_id}']);\n     _gconData.push(['_sessionId', sovendusSessionId]);\n     _gconData.push(['_timestamp', sovendusTimestamp]);\n     _gconData.push(['_orderId', '${order_id}']);\n     _gconData.push(['_orderValue', '${order_value}']);\n     _gconData.push(['_orderCurrency', '${order_currency}']);\n     _gconData.push(['_usedCouponCode', '${coupon_code}']);\n     _gconData.push(['_htmlElementId', 'gutscheinconnection-container']);\n\n     var sovendusScript = document.createElement('script')\n     document.body.appendChild(sovendusScript);\n     sovendusScript.type = \"text/javascript\";\n     sovendusScript.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + \"api.gutscheinconnection.de/js/client.js\" ;\n     sovendusScript.async = \"true\";\n   }\n   else\n   {\n     setTimeout(waitForSovendusDiv, 200);\n   }\n };\n\n waitForSovendusDiv();\n\n})();\n\n</script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/sovendus-logo.jpg",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Sovendus Shop ID",
			description: "The Shop ID you have received from Sovendus - e.g. 2",
			token: "shop_id",
			uv: ""
		}, {
			name: "Sovendus Banner ID",
			description: "If multiple banners - choose active banner here (e.g. 1) - usually no need to change this.",
			token: "banner_id",
			uv: ""
		}, {
			name: "Sovendus Order ID",
			description: "Unique identifier of orders for accounting - e.g. 124578",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Sovendus Order Value",
			description: "Order value -  use dot (.) as decimal separator & supply two decimal places e.g. 123.43",
			token: "order_value",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Sovendus Order Currency",
			description: "Order Currency - e.g. GBP",
			token: "order_currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Sovendus Used Coupon Code",
			description: "The coupon code just encashed to track the success rate - e.g. ABC123",
			token: "coupon_code",
			uv: "universal_variable.transaction.voucher"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
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