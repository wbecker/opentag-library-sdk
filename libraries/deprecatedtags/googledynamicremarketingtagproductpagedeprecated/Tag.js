//:include tagsdk-current.js
var version = "";
var classPath =
	"deprecatedtags.googledynamicremarketingtagproductpagedeprecated" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Google Dynamic Remarketing Tag - Product Page [DEPRECATED]",
		async: true,
		description: "",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Product ID",
			description: "Product ID",
			token: "product_id",
			uv: "universal_variable.product.id"
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
		}, {
			name: "Page Category",
			description: "Page Category",
			token: "page_subcategory",
			uv: "universal_variable.page.subcategory"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/


		var google_tag_params = {
			prodid: '' + this.valueForToken("product_id") + '',
			pagetype: '' + this.valueForToken("page_category") + '',
			pvalue: '' + this.valueForToken("product_value") + ''
		};

		var google_conversion_id = this.valueForToken("google_conversion_id");
		var google_conversion_label = "" + this.valueForToken(
			"google_conversion_label") + "";
		var google_custom_params = window.google_tag_params;
		var google_remarketing_only = true;

		var script = document.createElement('script');
		script.type = "text/javascript";
		script.src = "//www.googleadservices.com/pagead/conversion.js";
		document.head.appendChild(script);

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