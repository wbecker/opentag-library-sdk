//:include tagsdk-current.js
var version = "";
var classPath = "adroll.confirmationpagetag" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Confirmation Page Tag",
		async: true,
		description: "Tag must be implemented on the confirmation page after user has made payment.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/AdRoll.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: true,
		parameters: [{
			name: "AdRoll Advertiser ID",
			description: "The identifier for the advertiser",
			token: "adroll_ad_id",
			uv: ""
		}, {
			name: "AdRoll Pixel ID",
			description: "The identifier for the pixel",
			token: "adroll_pix_id",
			uv: ""
		}, {
			name: "Transaction Order Total",
			description: "The total value of the order",
			token: "total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Transaction Order ID",
			description: "The identifier relating to the transaction",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Transaction User ID",
			description: "The identifier relating to the user",
			token: "user_id",
			uv: "universal_variable.user.user_id"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		window.adroll_adv_id = "" + this.valueForToken("adroll_ad_id") + "";
		window.adroll_pix_id = "" + this.valueForToken("adroll_pix_id") + "";
		window.adroll_conversion_value_in_dollars = this.valueForToken("total");
		window.adroll_custom_data = {
			"ORDER_ID": "" + this.valueForToken("order_id") + "",
			"USER_ID": "" + this.valueForToken("user_id") + ""
		};

		(function() {
			var oldonload = window.onload;
			window.onload = function() {
				window.__adroll_loaded = true;
				var scr = document.createElement("script");
				var host = (("https:" === document.location.protocol) ?
					"https://s.adroll.com" : "http://a.adroll.com");
				scr.setAttribute('async', 'true');
				scr.type = "text/javascript";
				scr.src = host + "/j/roundtrip.js";
				((document.getElementsByTagName('head') || [null])[0] || document.getElementsByTagName(
					'script')[0].parentNode).appendChild(scr);

				if (oldonload) oldonload();
			};
		}());


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