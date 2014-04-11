//:include tagsdk-current.js
var version = "";
var classPath = "merchenta.productlistingtag" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Product Listing Tag",
		async: true,
		description: "Place this tag on a search results page or on product listing pages to track the products visitors are viewing.",
		html: "<div id=\"mc_data\" style=\"display:none;\">\n  <div class=\"mc_event\">VIEW</div>\n  <div class=\"mc_retailer\">${MerchentaId}</div>\n</div>\n\n",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Merchenta.jpg",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Merchenta Retailer Code",
			description: "Your Merchenta account ID",
			token: "Merchenta_ID",
			uv: ""
		}, {
			name: "Product SKUs",
			description: "The SKU/ID of the products being viewed",
			token: "Product_SKUs",
			uv: "universal_variable.listing.items[#].sku_code"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		(function() {
			var i, ii, d, p = document.getElementById("mc_data");
			for (i = 0, ii = this.valueForToken("Product_SKUs").length; i < ii; i++) {
				d = document.createElement("div");
				d.className = "mc_sku";
				d.innerHTML = this.valueForToken("Product_SKUs")[i].toString();
				p.appendChild(d);
			}
		})();

		var mc_api_url = "api.merchenta.com/merchenta/t";
		(function() {
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.async = true;
			var secure = (window.parent.document.location.protocol == "https:");
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