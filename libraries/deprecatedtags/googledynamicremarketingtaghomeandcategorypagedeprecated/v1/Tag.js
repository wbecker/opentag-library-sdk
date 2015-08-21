//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"deprecatedtags.googledynamicremarketingtaghomeandcategorypagedeprecated.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*DATA*/
			name: "Google Dynamic Remarketing Tag - Home and Category Page [DEPRECATED]",
			async: true,
			description: "",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Page Type",
				description: "Page Type",
				token: "page_category",
				uv: "universal_variable.page.category"
			}, {
				name: "Google Conversion ID",
				description: "Google Conversion ID",
				token: "google_conversion_id",
				uv: ""
			}, {
				name: "Google Conversion Label",
				description: "Google Conversion Label",
				token: "google_conversion_label",
				uv: ""
			}, {
				name: "Page Category",
				description: "Page Category",
				token: "page_subcategory",
				uv: "universal_variable.page.subcategory"
			}]
			/*~DATA*/
		};
		},
		script: function() {
			/*SCRIPT*/
			window.google_tag_params = {
				pagetype: '' + this.valueForToken("page_category"),
				pcat: '' + this.valueForToken("page_subcategory")
			};

			window.google_conversion_id = this.valueForToken("google_conversion_id");
			window.google_conversion_label = "" + 
					this.valueForToken("google_conversion_label");
			window.google_custom_params = window.google_tag_params;
			window.google_remarketing_only = true;

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