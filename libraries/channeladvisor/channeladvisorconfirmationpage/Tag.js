//:include tagsdk-current.js
var version = "";
var classPath = "channeladvisor.channeladvisorconfirmationpage" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Channel Advisor - Confirmation Page",
		async: true,
		description: "Use this tag to track confirmation pages with ChannelAdvisor.",
		html: "<!--@SRC@--><script type=\"text/javascript\">\n(function() {\n  var src = \"https://tracking.searchmarketing.com/thankyou.asp?SMCID=${client_id}\";\n  src += \"&oVal=${total}\";\n  src += \"&OrderID=${order_id}\";\n  src += \"&ProductID=\"; \n\n  // Add the product ids\n  var i=0, ii=${product_id_list}.length, arr = [];\n  for (; i<ii; i++) {\n    arr.push(${product_id_list}[i]);\n  }\n  src += arr.join(',');\n\n  // Append to body\n  var img = document.createElement('image');\n  img.src = src;\n  img.width = 1;\n  img.height = 1;\n  img.style.display = 'none';\n  document.body.appendChild(img);\n}());\n</script>",
		imageUrl: "http://dummyimage.com/100x100/000/fff.png&text=ChannelAdvisor",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Client ID",
			description: "The unique client id",
			token: "client_id",
			uv: ""
		}, {
			name: "Order Total",
			description: "",
			token: "total",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Product IDs",
			description: "",
			token: "product_id_list",
			uv: "universal_variable.transaction.line_items[#].product.id"
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