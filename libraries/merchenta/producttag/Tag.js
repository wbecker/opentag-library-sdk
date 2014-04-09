//:include tagsdk-current.js
var version = "";
var classPath = "merchenta.producttag.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Product Tag",
		async: true,
		description: "Place this tag on each product page to track the products visitors are viewing.",
		html: "<div id=\"mc_data\" style=\"display:none;\">\n  <div class=\"mc_event\">VIEW</div>\n  <div class=\"mc_retailer\">${Merchenta_ID}</div>\n  <div class=\"mc_sku\">${Product_code}</div>\n</div>\n\n",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Merchenta.jpg",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Merchenta Retailer Code",
			description: "Your Merchenta account ID",
			token: "Merchenta_ID",
			uv: ""
		},
		{
			name: "Product SKU",
			description: "The SKU/ID of the product being viewed",
			token: "Product_code",
			uv: "universal_variable.product.sku_code"
		}
	]
		/*~DATA*/
	},
	script: function() {
	/*SCRIPT*/

var mc_api_url = "api.merchenta.com/merchenta/t";
(function() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  var secure = (window.parent.document.location.protocol=="https:");
  if (secure) {
    script.src = "https://api.merchenta.com/track/t.js";
  } else {
    script.src = "http://cdn.merchenta.com/track/t.js";
  }
  document.getElementsByTagName('head')[0].appendChild(script);
})();
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
