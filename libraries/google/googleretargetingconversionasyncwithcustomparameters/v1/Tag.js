//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"google.googleretargetingconversionasyncwithcustomparameters.v1.Tag", {
		config: {
			/*DATA*/
			name: "Google Retargeting Conversion Async with custom parameters",
			async: true,
			description: "Conversion tracking is a tool to help you measure conversions, and ultimately help you identify how effective your Ad Exchange ads are for you.",
			html: "",
			imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Google.jpeg",
			locationDetail: "",
			isPrivate: false,
			url: "www.googleadservices.com/pagead/conversion_async.js",
			usesDocWrite: false,
			parameters: [{
				name: "Conversion ID",
				description: "",
				token: "conversion_id",
				uv: ""
			}, {
				name: "Conversion Label",
				description: "",
				token: "conversion_label",
				uv: ""
			}]
			/*~DATA*/
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
				google_conversion_id: this.valueForToken("conversion_id"),
				google_conversion_label: "" + this.valueForToken("conversion_label"),
				google_custom_params: window.google_tag_params || {},
				google_remarketing_only: true
			});

			/*~POST*/
		}
	});