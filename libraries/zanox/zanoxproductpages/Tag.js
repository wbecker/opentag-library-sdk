//:include tagsdk-current.js
var version = "";
var classPath = "zanox.zanoxproductpages" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Zanox - Product Pages",
		async: true,
		description: "To be placed on product pages. Passes back product details as well as running the standard mastertag.",
		html: "<div class=\"zx_${zanoxPageId} zx_mediaslot\">\n  \n</div>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/zanox.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Page ID",
			description: "",
			token: "zanoxPageId",
			uv: ""
		}, {
			name: "Product ID",
			description: "",
			token: "product_id",
			uv: "universal_variable.product.id"
		}, {
			name: "Name",
			description: "",
			token: "name",
			uv: "universal_variable.product.name"
		}, {
			name: "Description",
			description: "",
			token: "description",
			uv: "universal_variable.product.description"
		}, {
			name: "Category",
			description: "",
			token: "category",
			uv: "universal_variable.product.category"
		}, {
			name: "Price",
			description: "",
			token: "unit_sale_price",
			uv: "universal_variable.product.unit_sale_price"
		}, {
			name: "Currency",
			description: "",
			token: "currency",
			uv: "universal_variable.product.currency"
		}, {
			name: "URL",
			description: "",
			token: "url",
			uv: "universal_variable.product.url"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/


		// Populate product fields
		var zx_identifier = "" + this.valueForToken("product_id") + "";
		var zx_fn = "" + this.valueForToken("name") + "";
		var zx_description = "" + this.valueForToken("description") + "";
		var zx_category = "" + this.valueForToken("category") + "";
		var zx_price = "" + this.valueForToken("unit_sale_price") + "";
		var zx_amount = "" + this.valueForToken("unit_sale_price") + "";
		var zx_currency = "" + this.valueForToken("currency") + "";
		var zx_url = "" + this.valueForToken("url") + "";

		window._zx = window._zx || [];
		window._zx.push({
			"id": "" + this.valueForToken("zanoxPageId") + ""
		});
		var waitForZanoxDiv = function() {
			if (document.querySelector(".zx_" + this.valueForToken("zanoxPageId") +
				".zx_mediaslot")) {
				(function(d) {
					var s = d.createElement("script");
					s.async = true;
					s.src = (d.location.protocol == "https:" ? "https:" : "http:") +
						"//static.zanox.com/scripts/zanox.js";
					var a = d.getElementsByTagName("script")[0];
					a.parentNode.insertBefore(s, a);
				}(document));
			} else {
				setTimeout(waitForZanoxDiv, 100);
			}
		};
		waitForZanoxDiv();



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