//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("mediaplex.conversioniframe.v1.Tag", {
	config: {
		/*DATA*/
		name: "Conversion iframe",
		async: true,
		description: "The conversion iframe sends order details such as total, id, item count, and currency.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Mediaplex Client ID",
			description: "The ID assigned to you by Mediaplex",
			token: "client_id",
			uv: ""
		}, {
			name: "Page Name",
			description: "The name of the page being accessed. Typically all lowercase, with underscores",
			token: "page_name",
			uv: ""
		}, {
			name: "Event Name",
			description: "The name of the event triggered. Typically, this is a CamelCased version of the page name",
			token: "event_name",
			uv: ""
		}, {
			name: "Currency",
			description: "The currency the user paid in",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Item Quantity List",
			description: "An array of quantities for each product purchased in this order.",
			token: "item_qtys",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Order Total",
			description: "The total value of all products purchased in this order",
			token: "order_total",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Order ID",
			description: "The unique order ID for this purchase.",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		var item_count = 0;
		for (var i = 0; i < this.valueForToken("item_qtys").length; i++) {
			item_count += this.valueForToken("item_qtys")[i];
		}

		var frame = document.createElement("iframe");
		var src = "https://secure.img-cdn.mediaplex.com/0/" +
			this.valueForToken("client_id") + "/universal.html?page_name=" +
			this.valueForToken("page_name") + "&" +
			this.valueForToken("event_name") + "=1&Currency=" +
			this.valueForToken("currency") + "&Quantity=" + item_count + "&Amount=" +
			this.valueForToken("order_total") + "&mpuid=" +
			this.valueForToken("order_id");
		frame.src = src;
		frame.height = 1;
		frame.width = 1;
		frame.frameborder = 0;
		document.body.appendChild(frame);
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