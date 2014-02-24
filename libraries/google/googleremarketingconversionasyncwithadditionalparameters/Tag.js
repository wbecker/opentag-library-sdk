//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("google.googleremarketingconversionasyncwithadditionalparameters.Tag", {
	config: {
		/*DATA*/
		name: "Google Remarketing Conversion Async, with additional parameters",
		async: true,
		description: "Contains additional parameters including color, language, and format.",
		html: "\n",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Google.jpeg",
		locationDetail: "",
		priv: false,
		url: "www.googleadservices.com/pagead/conversion_async.js",
		usesDocWrite: false,
		parameters: [
		{
			name: "Google Conversion ID",
			description: "Your Google id provided in the script",
			token: "conversion_id",
			uv: ""
		},
		{
			name: "Google Conversion Label",
			description: "A alphanumeric label of your conversion tracking",
			token: "label",
			uv: ""
		},
		{
			name: "Google Conversion Language",
			description: "e.g. \"en\"",
			token: "lang",
			uv: ""
		},
		{
			name: "Google Conversion Format",
			description: "The format of the conversion, e.g. \"3\"",
			token: "format",
			uv: ""
		},
		{
			name: "Google Conversion Color",
			description: "The related color to the conversion, e.g. \"ffffff\"",
			token: "color",
			uv: ""
		},
		{
			name: "Google Conversion Value",
			description: "The value associated with the conversion.",
			token: "value",
			uv: ""
		}
	]
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
	  google_conversion_id: this.getValueForToken("conversion_id"),
	  google_conversion_label: "" + this.getValueForToken("label") + "",
	  google_conversion_language: "" + this.getValueForToken("lang") + "",
	  google_conversion_format: "" + this.getValueForToken("format") + "",
	  google_conversion_color: "" + this.getValueForToken("color") + "",
	  google_conversion_value: this.getValueForToken("value"),
	  google_custom_params: window.google_tag_params || {}
	});
		/*~POST*/
	}
});
