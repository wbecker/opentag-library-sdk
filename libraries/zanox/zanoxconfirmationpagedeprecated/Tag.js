//:include tagsdk-current.js
var version = "";
var classPath = "zanox.zanoxconfirmationpagedeprecated.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Zanox - Confirmation page DEPRECATED",
		async: true,
		description: "The Zanox confirmation page tag.",
		html: "<div class=\"zx_${zanox_page_id} zx_mediaslot\">\n  \n</div>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/zanox.png",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Zanox Mode",
			description: "e.g .2",
			token: "mode",
			uv: ""
		}, {
			name: "User ID",
			description: "",
			token: "user_id",
			uv: "universal_variable.user.user_id"
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Currency",
			description: "",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Subtotal",
			description: "",
			token: "subtotal",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Zanox Page ID",
			description: "",
			token: "zanox_page_id",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/


		// Fire the confirmation tag
		var url = "//ad.zanox.com/pps/?4711C081512345";
		url += "&mode=[[" + this.valueForToken("mode") + "]]";
		url += "&CustomerID=[[" + this.valueForToken("user_id") + "]]";
		url += "&OrderID=[[" + this.valueForToken("order_id") + "]]";
		url += "&CurrencySymbol=[[" + this.valueForToken("currency") + "]]";
		url += "&TotalPrice=[[" + this.valueForToken("subtotal") + "]]";
		var script = document.createElement('script');
		script.src = url;
		script.type = "text/javascript";
		document.body.appendChild(script);

		// Set globals for usage by the master tag
		var zx_products = [];
		var zx_transaction = "" + this.valueForToken("order_id") + "";
		var zx_total_amount = "" + this.valueForToken("subtotal") + "";
		var zx_total_currency = "" + this.valueForToken("currency") + "";

		// The standard mastertag
		window._zx = window._zx || [];
		window._zx.push({
			"id": "" + this.valueForToken("zanox_page_id") + ""
		});
		(function(d) {
			var s = d.createElement("script");
			s.async = true;
			s.src = (d.location.protocol == "https:" ? "https:" : "http:") +
				"//static.zanox.com/scripts/zanox.js";
			var a = d.getElementsByTagName("script")[0];
			a.parentNode.insertBefore(s, a);
		}(document));


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