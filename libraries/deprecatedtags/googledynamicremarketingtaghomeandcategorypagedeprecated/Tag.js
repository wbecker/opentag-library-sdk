//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("deprecatedtags.googledynamicremarketingtaghomeandcategorypagedeprecated.Tag", {
	config: {
		/*DATA*/
		name: "Google Dynamic Remarketing Tag - Home and Category Page [DEPRECATED]",
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
			name: "Page Type",
			description: "Page Type",
			token: "page_category",
			uv: "universal_variable.page.category"
		},
		{
			name: "Google Conversion ID",
			description: "Google Conversion ID",
			token: "google_conversion_id",
			uv: ""
		},
		{
			name: "Google Conversion Label",
			description: "Google Conversion Label",
			token: "google_conversion_label",
			uv: ""
		},
		{
			name: "Page Category",
			description: "Page Category",
			token: "page_subcategory",
			uv: "universal_variable.page.subcategory"
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/


   var google_tag_params = {
        pagetype: '' + this.valueForToken("page_category") + '',
        pcat: '' + this.valueForToken("page_subcategory") + ''
   };
 
   var google_conversion_id = this.valueForToken("google_conversion_id");
   var google_conversion_label = "" + this.valueForToken("google_conversion_label") + "";
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
