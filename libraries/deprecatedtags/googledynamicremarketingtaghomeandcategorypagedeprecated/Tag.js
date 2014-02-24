//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("deprecatedtags.googledynamicremarketingtaghomeandcategorypagedeprecated.Tag", {
    config: {
      /*DATA*/
	id: 37660,
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
		id: 36667,
		name: "Page Type",
		description: "Page Type",
		token: "page_category",
		uv: "universal_variable.page.category"
	},
	{
		id: 36668,
		name: "Google Conversion ID",
		description: "Google Conversion ID",
		token: "google_conversion_id",
		uv: ""
	},
	{
		id: 36669,
		name: "Google Conversion Label",
		description: "Google Conversion Label",
		token: "google_conversion_label",
		uv: ""
	},
	{
		id: 36676,
		name: "Page Category",
		description: "Page Category",
		token: "page_subcategory",
		uv: "universal_variable.page.subcategory"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/


   var google_tag_params = {
        pagetype: '' + this.getValueForToken("page_category") + '',
        pcat: '' + this.getValueForToken("page_subcategory") + ''
   };
 
   var google_conversion_id = this.getValueForToken("google_conversion_id");
   var google_conversion_label = "" + this.getValueForToken("google_conversion_label") + "";
   var google_custom_params = window.google_tag_params;
   var google_remarketing_only = true;

   var script = document.createElement('script');
   script.type = "text/javascript";
   script.src = "//www.googleadservices.com/pagead/conversion.js";
   document.head.appendChild(script);



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
