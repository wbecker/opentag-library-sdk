//:include tagsdk-current.js
var version = "";
var classPath = "fitsme.virtualfittingroomtagwithdatapopulation.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Virtual Fitting Room Tag - With Data Population",
		async: true,
		description: "This product page tag adds the code needed to populate the \"fitsme_launcher\" div and makes sure GA is properly prepared (if present). This tag also populates the FitsMeData object prior to loading the code.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/FitsMe.png",
		locationDetail: "",
		isPrivate: false,
		url: "www.fits.me/vfr.js",
		usesDocWrite: false,
		parameters: [{
			name: "Product SKU",
			description: "The SKU identifying the current product",
			token: "sku",
			uv: "universal_variable.product.sku_code"
		}, {
			name: "Product Title",
			description: "The name of the product, localized if necessary.",
			token: "name",
			uv: "universal_variable.product.name"
		}, {
			name: "Product Category",
			description: "The primary category this product belongs in.",
			token: "category",
			uv: "universal_variable.product.category"
		}, {
			name: "Product Subcategory",
			description: "The secondary category this product belongs in.",
			token: "subcategory",
			uv: "universal_variable.product.subcategory"
		}, {
			name: "Product Image URL",
			description: "URL to a high-quality image representing this product.",
			token: "prodimg",
			uv: ""
		}, {
			name: "Size ID Array",
			description: "An array of sizeIDs of the same length and in the same order as the Size Title / Size Price arrays.",
			token: "sizeids",
			uv: ""
		}, {
			name: "Size Title Array",
			description: "An array of size titles of the same length and in the same order as the Size ID / Size Price arrays.",
			token: "titles",
			uv: ""
		}, {
			name: "Size Price Array",
			description: "An array of size prices of the same length and in the same order as the Size Title / Size ID arrays.",
			token: "prices",
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
		(function() {
			var fm_categories = (function() {
				var temp = [];
				if ("" + this.valueForToken("category") + "") temp.push("" + this.valueForToken("category") + "");
				if ("" + this.valueForToken("subcategory") + "") temp.push("" + this.valueForToken("subcategory") + "");
				return temp;
			})();

			var fm_sizes = (function() {
				var temp = [];
				for (var i = 0; i < this.valueForToken("sizeids").length; i++) {
					temp.push({
						"ID": String(this.valueForToken("sizeids")[i]),
						"Title": String(this.valueForToken("titles")[i]),
						"Price": String(this.valueForToken("prices")[i])
					});
				}
				return temp;
			})();

			var fmd = window.FitsMeData || {};
			fmd.SKU = fmd.SKU || "" + this.valueForToken("sku") + "";
			fmd.ProductTitle = fmd.ProductTitle || "" + this.valueForToken("name") + "";
			fmd.ProductImageUrl = fmd.ProductImageUrl || "" + this.valueForToken("prodimg") + "";
			if (!fmd.ProductCategories || fmd.ProductCategories.length === 0) {
				fmd.ProductCategories = fm_categories;
			}
			if (!fmd.Sizes || fmd.Sizes.length === 0) {
				fmd.Sizes = fm_sizes;
			}

			window.FitsMeData = fmd;

			var _gaq = _gaq || [];
			_gaq.push(['_setAllowLinker', true]);
			_gaq.push(['_setAllowHash', false]);
		})();
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});