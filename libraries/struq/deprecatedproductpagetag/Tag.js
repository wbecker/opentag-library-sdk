//:include tagsdk-current.js
var version = "";
var classPath = "struq.deprecatedproductpagetag" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "[Deprecated] Product Page Tag",
		async: true,
		description: "To be placed on the product page only",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/struq.png",
		locationDetail: "",
		isPrivate: true,
		url: "media.struq.com/content/scripts/Struq_Pixel_Injector_min_v1-5.js",
		usesDocWrite: false,
		parameters: [{
			name: "Product ID",
			description: "ID for the product on the current page",
			token: "product_id",
			uv: "universal_variable.product.id"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		var _struqPI = _struqPI || [];

		_struqPI.push(['injectTrackingPixel', {
			trackingPixelId: 'PixelID',
			route: '/s/s/',
			collectData: false,
			data: [{
				title: "detail",
				pid: "" + this.valueForToken("product_id") + ""
			}],
			options: {
				timeoutMs: 2000
			}
		}]);

		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});