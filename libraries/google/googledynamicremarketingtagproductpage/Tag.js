//:include tagsdk-current.js
var version = "";
var classPath = "google.googledynamicremarketingtagproductpage" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Google Dynamic Remarketing Tag - Product Page",
		async: true,
		description: "",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Product ID",
			description: "Product ID",
			token: "product_id",
			uv: "universal_variable.product.sku_code"
		}, {
			name: "Page Type",
			description: "Page Type",
			token: "page_category",
			uv: "universal_variable.page.category"
		}, {
			name: "Product Value",
			description: "Product Value",
			token: "product_value",
			uv: "universal_variable.product.unit_price"
		}, {
			name: "Google Conversion ID",
			description: "Your Google Conversion ID",
			token: "google_conversion_id",
			uv: ""
		}, {
			name: "Google Conversion Label",
			description: "Your Google Conversion Label ID",
			token: "google_conversion_label",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		(function() {
			window.google_tag_params = {
				ecomm_prodid: '' + this.valueForToken("product_id") + '',
				ecomm_pagetype: '' + this.valueForToken("page_category") + '',
				ecomm_pvalue: '' + this.valueForToken("product_value") + ''
			};

			window.google_conversion_id = this.valueForToken("google_conversion_id");
			window.google_conversion_label = "" + this.valueForToken(
				"google_conversion_label") + "";
			window.google_custom_params = window.google_tag_params;
			window.google_remarketing_only = true;

			var script = document.createElement('script');
			script.type = "text/javascript";
			script.src = "//www.googleadservices.com/pagead/conversion.js";
			document.head.appendChild(script);
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