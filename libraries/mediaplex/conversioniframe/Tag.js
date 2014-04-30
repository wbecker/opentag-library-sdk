//:include tagsdk-current.js
var version = "";
var classPath = "mediaplex.conversioniframe" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Conversion iframe",
		async: true,
		description: "The conversion iframe sends order details such as total, id, item count, and currency.",
		html: "<!--@SRC@--><script type=\"text/javascript\">\n(function(){\n  var item_count = 0;\n  for (var i=0; i < ${item_qtys}.length; i++){\n    item_count += ${item_qtys}[i];\n  }\n\n  var frame = document.createElement(\"iframe\");\n  var src = \"https://secure.img-cdn.mediaplex.com/0/${client_id}/universal.html?page_name=${page_name}&${event_name}=1&Currency=${currency}&Quantity=\" + item_count + \"&Amount=${order_total}&mpuid=${order_id}\";\n  frame.src = src;\n  frame.height = 1;\n  frame.width = 1;\n  frame.frameborder = 0;\n  document.body.appendChild(frame);\n})();\n</script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/mediaplex.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
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