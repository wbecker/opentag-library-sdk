//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("webtrends.webtrendsproductpages.Tag", {
    config: {
      /*DATA*/
	id: 36659,
	name: "Webtrends - Product pages",
	async: true,
	description: "To be placed on product pages. Should be dependent on the main Webtrends tracking tag.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/webtrends.jpg",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 35672,
		name: "Product SKU",
		description: "",
		token: "sku",
		uv: "universal_variable.product.sku_code"
	},
	{
		id: 35673,
		name: "Product ID",
		description: "",
		token: "id",
		uv: "universal_variable.product.id"
	},
	{
		id: 35674,
		name: "Product Category",
		description: "",
		token: "category",
		uv: "universal_variable.product.category"
	},
	{
		id: 35675,
		name: "Product Manufacturer",
		description: "",
		token: "manufacturer",
		uv: "universal_variable.product.manufacturer"
	},
	{
		id: 35676,
		name: "Product Subcategory",
		description: "",
		token: "subcategory",
		uv: "universal_variable.product.subcategory"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

dcsMultiTrack({
  "WT.pn_sku": "" + this.getValueForToken("sku") + "",
  "WT.pn_id": "" + this.getValueForToken("id") + "",
  "WT.pn_fa": "" + this.getValueForToken("category") + "",
  "WT.pn_ma": "" + this.getValueForToken("manufacturer") + "",
  "WT.pn_sc": "" + this.getValueForToken("subcategory") + ""
});


      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
