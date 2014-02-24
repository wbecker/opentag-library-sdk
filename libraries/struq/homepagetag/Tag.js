//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("struq.homepagetag.Tag", {
	config: {
		/*DATA*/
		name: "Homepage Tag",
		async: true,
		description: "To be placed on the homepage only",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Pixel ID",
			description: "",
			token: "id",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
var _struqPI = _struqPI || [];
_struqPI.push(['injectTrackingPixel', {
  trackingPixelId: '' + this.getValueForToken("id") + '',
  route: '/s/g/',
  collectData: false,
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
