//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"google.googleremarketingconversionasyncdeprecated.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*DATA*/
			name: "Google Remarketing Conversion Async [DEPRECATED]",
			async: true,
			description: "Conversion tracking is a tool to help you measure conversions, and ultimately help you identify how effective your Ad Exchange ads are for you.",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "www.googleadservices.com/pagead/conversion_async.js",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Google Conversion ID",
				description: "Your Google id provided in the script",
				token: "conversion_id",
				uv: ""
			}, {
				name: "Google Conversion Label",
				description: "A alphanumeric label of your conversion tracking",
				token: "label",
				uv: ""
			}]
			/*~DATA*/
		};
		},
		script: function() {
			/*SCRIPT*/
			/*~SCRIPT*/
		},
		pre: function() {
			/*PRE*/
			/*~PRE*/
		},
		post: function() {
			/*POST*/
			window.google_trackConversion({
				google_conversion_id: "" + this.valueForToken("conversion_id"),
				google_conversion_label: "" + this.valueForToken("label"),
				google_custom_params: {}
			});
			/*~POST*/
		}
	});