//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("deprecatedtags.GoogleDynamicRemarketingTagProductPageDEPRECATED", {
    config: {/*DATA*/
	id: 37659,
	name: "Google Dynamic Remarketing Tag - Product Page [DEPRECATED]",
	async: true,
	description: "",
	html: "",
	imageUrl: ".",
	locationDetail: "",
	priv: true,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 36662,
		name: "Product ID",
		description: "Product ID",
		token: "product_id",
		uv: "universal_variable.product.id"
	},
	{
		id: 36663,
		name: "Page Type",
		description: "Page Type",
		token: "page_category",
		uv: "universal_variable.page.category"
	},
	{
		id: 36664,
		name: "Product Value",
		description: "Product Value",
		token: "product_value",
		uv: "universal_variable.product.unit_price"
	},
	{
		id: 36665,
		name: "Google Conversion ID",
		description: "Your Google Conversion ID",
		token: "google_conversion_id",
		uv: ""
	},
	{
		id: 36666,
		name: "Google Conversion Label",
		description: "Your Google Conversion Label ID",
		token: "google_conversion_label",
		uv: ""
	},
	{
		id: 36677,
		name: "Page Category",
		description: "Page Category",
		token: "page_subcategory",
		uv: "universal_variable.page.subcategory"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/


   var google_tag_params = {
      prodid: '' + this.getValueForToken("product_id") + '',
      pagetype: '' + this.getValueForToken("page_category") + '',
      pvalue: '' + this.getValueForToken("product_value") + ''
   };
 
   var google_conversion_id = this.getValueForToken("google_conversion_id");
   var google_conversion_label = "" + this.getValueForToken("google_conversion_label") + "";
   var google_custom_params = window.google_tag_params;
   var google_remarketing_only = true;

   var script = document.createElement('script');
   script.type = "text/javascript";
   script.src = "//www.googleadservices.com/pagead/conversion.js";
   document.head.appendChild(script);



    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
