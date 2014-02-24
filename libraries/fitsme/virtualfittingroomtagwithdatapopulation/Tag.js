//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("fitsme.virtualfittingroomtagwithdatapopulation.Tag", {
    config: {/*DATA*/
	id: 36186,
	name: "Virtual Fitting Room Tag - With Data Population",
	async: true,
	description: "This product page tag adds the code needed to populate the \"fitsme_launcher\" div and makes sure GA is properly prepared (if present). This tag also populates the FitsMeData object prior to loading the code.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/FitsMe.png",
	locationDetail: "",
	priv: false,
	url: "www.fits.me/vfr.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 35293,
		name: "Product SKU",
		description: "The SKU identifying the current product",
		token: "sku",
		uv: "universal_variable.product.sku_code"
	},
	{
		id: 35294,
		name: "Product Title",
		description: "The name of the product, localized if necessary.",
		token: "name",
		uv: "universal_variable.product.name"
	},
	{
		id: 35295,
		name: "Product Category",
		description: "The primary category this product belongs in.",
		token: "category",
		uv: "universal_variable.product.category"
	},
	{
		id: 35296,
		name: "Product Subcategory",
		description: "The secondary category this product belongs in.",
		token: "subcategory",
		uv: "universal_variable.product.subcategory"
	},
	{
		id: 35297,
		name: "Product Image URL",
		description: "URL to a high-quality image representing this product.",
		token: "prodimg",
		uv: ""
	},
	{
		id: 35298,
		name: "Size ID Array",
		description: "An array of sizeIDs of the same length and in the same order as the Size Title / Size Price arrays.",
		token: "sizeids",
		uv: ""
	},
	{
		id: 35299,
		name: "Size Title Array",
		description: "An array of size titles of the same length and in the same order as the Size ID / Size Price arrays.",
		token: "titles",
		uv: ""
	},
	{
		id: 35300,
		name: "Size Price Array",
		description: "An array of size prices of the same length and in the same order as the Size Title / Size ID arrays.",
		token: "prices",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
(function () {
  var fm_categories = (function () {
    var temp = [];
    if ("" + this.getValueForToken("category") + "") temp.push("" + this.getValueForToken("category") + "");
    if ("" + this.getValueForToken("subcategory") + "") temp.push("" + this.getValueForToken("subcategory") + "");
    return temp;
  })();

  var fm_sizes = (function () {
    var temp = [];
    for (var i = 0; i < this.getValueForToken("sizeids").length; i++) {
      temp.push({
        "ID" : String(this.getValueForToken("sizeids")[i]),
        "Title" : String(this.getValueForToken("titles")[i]),
        "Price" : String(this.getValueForToken("prices")[i])
      });
    }
    return temp;
  })();

  var fmd = window.FitsMeData || {};
  fmd.SKU = fmd.SKU || "" + this.getValueForToken("sku") + "";
  fmd.ProductTitle = fmd.ProductTitle || "" + this.getValueForToken("name") + "";
  fmd.ProductImageUrl = fmd.ProductImageUrl || "" + this.getValueForToken("prodimg") + "";
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
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
