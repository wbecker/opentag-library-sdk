//:include tagsdk-current.js
var tagVersion = "";
var classPath = "chango.conversionpixel" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Conversion Pixel",
		async: true,
		description: "The conversion pixel passes back information about the order placed and should be placed only on the confirmation page.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Chango.png",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Conversion ID",
			description: "This is a value provided by Chango when they generate the conversion tag for you",
			token: "cid",
			uv: ""
		}, {
			name: "Order ID",
			description: "The unique Order ID for this transaction",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Order Value",
			description: "The total value of the order",
			token: "total",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Product Quantities",
			description: "An array of quantities associated with each unique product in the order",
			token: "qtys",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		window.__chconv__ = {
			"order_id": "" + this.valueForToken("order_id"),
			"cost": "" + this.valueForToken("total"),
			"conversion_id": this.valueForToken("cid"),
			"quantity": "" + getQty()
		};

		function getQty() {
			var tmp = 0;
			for (var i = 0; i < this.valueForToken("qtys").length; i++) {
				tmp += this.valueForToken("qtys")[i];
			}
			return tmp;
		}
		if (typeof(__chconv__) == "undefined") return;
		var e = encodeURIComponent;
		var p = [];
		for (var i in __chconv__) {
			p.push(e(i) + "=" + e(__chconv__[i]))
		}
		(new Image()).src = document.location.protocol + '//as.chango.com/conv/i;' +
			(new Date()).getTime() + '?' + p.join("&");
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