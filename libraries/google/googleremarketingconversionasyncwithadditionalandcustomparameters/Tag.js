//:include tagsdk-current.js
var version = "";
var classPath =
	"google.googleremarketingconversionasyncwithadditionalandcustomparameters" +
	version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Google Remarketing Conversion Async, with additional and custom parameters",
		async: true,
		description: "Contains additional parameters including color, language, and format. Also includes custom parameter support.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Google.jpeg",
		locationDetail: "",
		isPrivate: true,
		url: "www.googleadservices.com/pagead/conversion_async.js",
		usesDocWrite: false,
		parameters: [{
			name: "Google Conversion ID",
			description: "Your Google ID provided in the script.",
			token: "conversion_id",
			uv: ""
		}, {
			name: "Google Conversion Label",
			description: "An alphanumeric label of your conversion tracking.",
			token: "label",
			uv: ""
		}, {
			name: "Google Conversion Language",
			description: "e.g. \"en\"",
			token: "lang",
			uv: ""
		}, {
			name: "Google Conversion Format",
			description: "The format of the conversion, e.g. \"3\"",
			token: "format",
			uv: ""
		}, {
			name: "Google Conversion Color",
			description: "The color related with the conversion, e.g. \"ffffff\"",
			token: "color",
			uv: ""
		}, {
			name: "Google Conversion Value",
			description: "The value associated with the conversion.",
			token: "value",
			uv: ""
		}, {
			name: "Google Custom Parameters",
			description: "Arbitrary parameters defined in the form of a javascript object. An empty object \"{ }\" is valid.",
			token: "custom",
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
			google_conversion_label: "" + this.valueForToken("label") + "",
			google_conversion_language: "" + this.valueForToken("lang") + "",
			google_conversion_format: "" + this.valueForToken("format") + "",
			google_conversion_color: "" + this.valueForToken("color") + "",
			google_conversion_value: this.valueForToken("value"),
			google_custom_params: this.valueForToken("custom")
		});
		/*~POST*/
	}
});