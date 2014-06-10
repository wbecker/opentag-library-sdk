//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("chango.deprecatedconversionpixelv2.v1.Tag", {
	config: {
		/*DATA*/
		name: "[DEPRECATED] Conversion Pixel [v2]",
		async: true,
		description: "The conversion pixel passes back information about the order placed and should be placed only on the confirmation page.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Chango.png",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Conversion ID",
			description: "",
			token: "ID",
			uv: ""
		}, {
			name: "Quantity",
			description: "",
			token: "QUANTITY",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Order ID",
			description: "",
			token: "ORDER_ID",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Cost",
			description: "",
			token: "COST",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Customer ID",
			description: "",
			token: "CUSTOMER_ID",
			uv: "universal_variable.user.user_id"
		}, {
			name: "Sku List",
			description: "",
			token: "SKUs",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Page Type",
			description: "",
			token: "PAGE_TYPE",
			uv: "universal_variable.page.type"
		}, {
			name: "Payment Type",
			description: "",
			token: "PAYMENT_TYPE",
			uv: "universal_variable.transaction.payment_type"
		}, {
			name: "Conversion Type",
			description: "",
			token: "CONVERSION_TYPE",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		var totalQuantity = (function() {
			var total = 0;
			for (var i = 0; i < this.valueForToken("QUANTITY").length; i++) {
				total += this.valueForToken("QUANTITY")[i];
			}
			return total;
		})();

		var skuList = (function() {
			var str = "";
			for (var i = 0; i < this.valueForToken("SKUs").length; i++) {
				str += this.valueForToken("SKUs")[i];
				if ((i + 1) < this.valueForToken("SKUs").length) {
					str += ","
				}
			}
			return str;
		})();

		var __chconv__ = {
			"conversion_id": this.valueForToken("ID"),
			"quantity": totalQuantity,
			"order_id": "" + this.valueForToken("ORDER_ID") + "",
			"cost": "" + this.valueForToken("COST") + "",
			"u1": "" + this.valueForToken("CUSTOMER_ID") + "",
			"u2": skuList,
			"u3": "" + this.valueForToken("PAGE_TYPE") + "",
			"u4": "" + this.valueForToken("PAYMENT_TYPE") + "",
			"u5": "" + this.valueForToken("CONVERSION_TYPE") + ""
		};
		(function() {
			if (typeof(__chconv__) == "undefined") return;
			var e = encodeURIComponent;
			var p = [];
			for (var i in __chconv__) {
				p.push(e(i) + "=" + e(__chconv__[i]))
			}
			(new Image()).src = document.location.protocol + '//as.chango.com/conv/i;' +
				(new Date()).getTime() + '?' + p.join("&");
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