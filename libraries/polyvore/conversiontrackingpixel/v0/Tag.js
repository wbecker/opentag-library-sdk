//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("polyvore.conversiontrackingpixel.v0.Tag", {
	config: {
		/*DATA*/
		name: "Conversion Tracking Pixel",
		async: true,
		description: "Increased visibility on your campaign enables you to better react and optimize to meet business objectives. Integrating the Polyvore conversion tracking pixel provides you access to the following metrics through the Promoted Products Report: Orders, Sales, Conversion-to-sale, Average order size, Return on ad spend",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/qubit-etc/opentaglogos/polyvore.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Array of Product SKU codes",
			description: "Array of Product SKU codes",
			token: "skus",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Hostname",
			description: "The host name of your website. It should match the displayed host name of your products on Polyvore.",
			token: "hostname",
			uv: ""
		}, {
			name: "Order Value",
			description: "Order Value",
			token: "subtotal",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Order ID",
			description: "Order ID",
			token: "id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Order Currency",
			description: "e.g. GBP or USD or EUR etc.",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		var skus = "";
		for (var i = 0; i < this.valueForToken("skus").length; i++) {
			if (i > 0) {
				skus += ",";
			}
			skus += this.valueForToken("skus")[i];
		}
		new Image().src = document.location.protocol +
			"//www.polyvore.com/conversion/beacon.gif?adv=" +
			this.valueForToken("hostname") + "&amt=" +
			this.valueForToken("subtotal") + "&oid=" +
			this.valueForToken("id") + "&skus=" + skus + "&cur=" +
			this.valueForToken("currency");

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
