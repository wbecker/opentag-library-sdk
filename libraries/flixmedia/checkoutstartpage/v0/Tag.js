//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("flixmedia.checkoutstartpage.v0.Tag", {
	config: {
		/*DATA*/
		name: "Checkout Start Page",
		async: true,
		description: "To fire on the page that loads right after the user clicks on the checkout button.",
		html: "<script type=\"text/javascript\" src=\"//media.flixcar.com/delivery/static/js/sio_ty.js\"></script><!--@SRC@-->\n<script type=\"text/javascript\"> \n(function ()\n{\n    var products = [];\n     \n    for (var i=0; i< ${skus}.length; i++)\n    {\n        products.push({\n           \"mpn\" : ${skus}[i]+\"\",\n           \"price\" : ${prices}[i],\n           \"quantity\" : ${quants}[i]\n        });\n    }\n  \n    FLIXSio.sioTy({\n       \"distributor_id\" : \"\",\n       \"language\" : \"\",\n       \"event\" : \"start\",\n       \"basket_id\" : \"${id}\",\n       \"basket\" : products \n    }); \n})();\n</script>",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Array of product SKU codes",
			description: "Array of product SKU codes",
			token: "skus",
			uv: "universal_variable.basket.line_items[#].product.sku_code"
		}, {
			name: "Array of product prices",
			description: "Array of product prices",
			token: "prices",
			uv: "universal_variable.basket.line_items[#].product.unit_sale_price"
		}, {
			name: "Array of product quantities",
			description: "Array of product quantities",
			token: "quants",
			uv: "universal_variable.basket.line_items[#].quantity"
		}, {
			name: "Unique Checkout ID",
			description: "It should match with the Checkout End Page tag Unique Checkout ID",
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
