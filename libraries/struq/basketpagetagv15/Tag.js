//:include tagsdk-current.js
var version = "";
var classPath = "struq.basketpagetagv15.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Basket Page Tag v1.5",
		async: true,
		description: "To be placed on the basket page only",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/struq.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Pixel id",
			description: "The identifier unique to each Struq tag",
			token: "id",
			uv: ""
		},
		{
			name: "Product Id List",
			description: "",
			token: "product_id_list",
			uv: "universal_variable.basket.line_items[#].product.id"
		}
	]
		/*~DATA*/
	},
	script: function() {
	/*SCRIPT*/

var _struqPI = _struqPI || [];

var productArr = [];
for(var i = 0, ii = this.valueForToken("product_id_list").length; i < ii; i++) {
  productArr.push(this.valueForToken("product_id_list")[i]);
}

var productIDStr = productArr.join(",");

_struqPI.push(['injectTrackingPixel', {
  trackingPixelId: "" + this.valueForToken("id") + "",
  route: '/s/s/',
  collectData: false,
  data: [{
    title: "si",
    pid: productIDStr
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
