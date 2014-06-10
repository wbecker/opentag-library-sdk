//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("webtrends.webtrendsproductpages.v1.Tag", {
	config: {
		/*DATA*/
		name: "Webtrends - Product pages",
		async: true,
		description: "To be placed on product pages. Should be dependent on the main Webtrends tracking tag.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Product SKU",
			description: "",
			token: "sku",
			uv: "universal_variable.product.sku_code"
		}, {
			name: "Product ID",
			description: "",
			token: "id",
			uv: "universal_variable.product.id"
		}, {
			name: "Product Category",
			description: "",
			token: "category",
			uv: "universal_variable.product.category"
		}, {
			name: "Product Manufacturer",
			description: "",
			token: "manufacturer",
			uv: "universal_variable.product.manufacturer"
		}, {
			name: "Product Subcategory",
			description: "",
			token: "subcategory",
			uv: "universal_variable.product.subcategory"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		window.dcsMultiTrack({
			"WT.pn_sku": "" + this.valueForToken("sku"),
			"WT.pn_id": "" + this.valueForToken("id"),
			"WT.pn_fa": "" + this.valueForToken("category"),
			"WT.pn_ma": "" + this.valueForToken("manufacturer"),
			"WT.pn_sc": "" + this.valueForToken("subcategory")
		});

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