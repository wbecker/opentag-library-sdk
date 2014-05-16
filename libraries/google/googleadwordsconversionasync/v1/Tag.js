//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("google.googleadwordsconversionasync.v1.Tag", {
	config: {
		/*DATA*/
		name: "Google AdWords Conversion Async",
		async: true,
		description: "Tracks users that have converted who previously clicked through on an ad.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Google.jpeg",
		locationDetail: "",
		isPrivate: false,
		url: "www.googleadservices.com/pagead/conversion_async.js",
		usesDocWrite: false,
		parameters: [{
			name: "Conversion ID",
			description: "Your Google id provided in the script",
			token: "conversion_id",
			uv: ""
		}, {
			name: "Conversion Label",
			description: "A alphanumeric label of your conversion tracking",
			token: "label",
			uv: ""
		}, {
			name: "Conversion Value",
			description: "The value of the conversion. This should be a number, or 0 if there is no value to the conversion",
			token: "value",
			uv: "universal_variable.transaction.subtotal"
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
			google_conversion_label: "" + this.valueForToken("label"),
			google_conversion_value: this.valueForToken("value"),
			google_conversion_format: "3",
			google_is_call: true,
			google_custom_params: {}
		});

		/*~POST*/
	}
});