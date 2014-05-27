//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("struq.productpagetagv15.v1.Tag", {
	config: {
		/*DATA*/
		name: "Product Page tag v1.5",
		async: true,
		description: "To be placed on the product page only",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Pixel ID",
			description: "",
			token: "id",
			uv: ""
		}, {
			name: "Product ID",
			description: "",
			token: "product_id",
			uv: "universal_variable.product.id"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		window._struqPI = window._struqPI || [];
		_struqPI.push(['injectTrackingPixel', {
			trackingPixelId: '' + this.valueForToken("id"),
			route: '/s/s/',
			collectData: false,
			data: [{
				title: "detail",
				pid: "" + this.valueForToken("product_id")
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