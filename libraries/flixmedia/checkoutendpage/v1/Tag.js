//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("flixmedia.checkoutendpage.v1.Tag", {
	config: {
		/*DATA*/
		name: "Checkout End Page",
		async: true,
		description: "To fire on the confirmation page. The page that loads right after the order has been placed.",
		html: "<script type=\"text/javascript\" src=\"//media.flixcar.com/delivery/static/js/sio_ty.js\"></script><!--@SRC@-->\n<script type=\"text/javascript\"> \n(function ()\n{\n    var products = [];\n     \n    for (var i=0; i< ${skus}.length; i++)\n    {\n        products.push({\n           \"mpn\" : ${skus}[i]+\"\",\n           \"price\" : ${prices}[i],\n           \"quantity\" : ${quantities}[i]\n        });\n    }\n  \n    FLIXSio.sioTy({\n       \"distributor_id\" : \"\",\n       \"language\" : \"\",\n       \"event\" : \"end\",\n       \"basket_id\" : \"${id}\",\n       \"basket\" : products \n    }); \n})();\n</script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/qubit-etc/opentaglogos/flixmedia.png",
		locationDetail: "",
		isPrivate: false,
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
			name: "Unique Checkout ID",
			description: "It should match with the Checkout Start Page tag Unique Checkout ID",
			token: "id",
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