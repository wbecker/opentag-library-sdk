//:include tagsdk-current.js
var version = "";
var classPath = "flixmedia.flixmediacheckoutstartorendpage" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Flixmedia - Checkout Start or End page",
		async: true,
		description: "",
		html: "<!--@SRC@--><script type=\"text/javascript\" src=\"//media.flixcar.com/delivery/static/js/sio_ty.js\"></script>\n<script type=\"text/javascript\"> \n(function ()\n{\n    var products = [];\n     \n    for (var i=0; i< ${skus}.length; i++)\n    {\n        products.push({\n           \"mpn\" : \"${skus}[i]\",\n           \"price\" : ${prices}[i],\n           \"quantity\" : ${quantities}[i]\n        });\n    }\n  \n    FLIXSio.sioTy({\n       \"distributor_id\" : \"\",\n       \"language\" : \"\",\n       \"event\" : \"basket_${start_or_end}\",\n       \"basket_id\" : \"${unique_id}\",\n       \"basket\" : products \n    }); \n})();\n</script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/qubit-etc/opentaglogos/flixmedia.png",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Array of product sku codes",
			description: "Array of product sku codes",
			token: "skus",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Array of product unit sale prices",
			description: "Array of product unit sale prices",
			token: "prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Array of product quantities",
			description: "Array of product quantities",
			token: "quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Unique Basket/Order ID",
			description: "Unique Basket/Order ID",
			token: "unique_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Basket Start or End page",
			description: "\"start\" for Transaction Start page or \"end\" for Transaction Confirmation page (without quotes)",
			token: "start_or_end",
			uv: ""
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