//:include tagsdk-current.js
var tagVersion = "";
var classPath = "struq.conversiontagv15" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Conversion Tag v1.5",
		async: true,
		description: "To be placed on the confirmation page only. Make sure that the order total is a valid number and has a dot as decimal point.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/struq.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Confirmation Product ID List",
			description: "An array of all the confirmation IDs on the confirmation page",
			token: "p_id_list",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Confirmation Order ID",
			description: "The ID of the transaction",
			token: "confirmation_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Confirmation Order Total",
			description: "The total cost of the transaction i.e. 233.33",
			token: "confirmation_total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Confirmation Currency",
			description: "The currency of the conversion/transaction",
			token: "confirmation_currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Pixel ID",
			description: "The id specific to the client",
			token: "id",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		window._struqPI = window._struqPI || [];

		var productArr = [];
		for (var i = 0, ii = this.valueForToken("p_id_list").length; i < ii; i++) {
			productArr.push(this.valueForToken("p_id_list")[i]);
		}

		window.productIDStr = productArr.join(",");

		_struqPI.push(['injectTrackingPixel', {
			trackingPixelId: '' + this.valueForToken("id"),
			route: '/s/cd/',
			collectData: false,
			data: [{
				title: "li",
				pid: productIDStr,
				qty: "1",
				tv: "1"
			}, {
				title: "summary",
				oid: "" + this.valueForToken("confirmation_id"),
				tot: "" + this.valueForToken("confirmation_total"),
				dis: "0",
				cur: "" + this.valueForToken("confirmation_currency")
			}],
			options: {
				timeoutMs: 2000
			}
		}]);
		var script = document.createElement("script");
		script.src =
			"//media.struq.com/content/scripts/Struq_Pixel_Injector_min_v1-5.js";
		document.body.appendChild(script);
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