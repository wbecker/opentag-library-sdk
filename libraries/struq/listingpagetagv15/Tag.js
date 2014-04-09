//:include tagsdk-current.js
var version = "";
var classPath = "struq.listingpagetagv15.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Listing Page Tag v1.5",
		async: true,
		description: "To be placed only on product listing/search result pages",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Pixel ID",
			description: "",
			token: "id",
			uv: ""
		}, {
			name: "Product ID List",
			description: "",
			token: "product_id_list",
			uv: "universal_variable.listing.items[#].id"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		var _struqPI = _struqPI || [];
		var productArr = [];
		for (var i = 0, ii = this.valueForToken("product_id_list").length; i < ii; i++) {
			productArr.push(this.valueForToken("product_id_list")[i]);
		}
		var productStr = productArr.join(",");

		_struqPI.push(['injectTrackingPixel', {
			trackingPixelId: '' + this.valueForToken("id") + '',
			route: '/s/s/',
			collectData: false,
			data: [{
				title: "si",
				pid: productStr
			}],
			options: {
				timeoutMs: 2000
			}
		}]);
		var script = document.createElement("script");
		script.src = "//media.struq.com/content/scripts/Struq_Pixel_Injector_min_v1-5.js";
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