//:include tagsdk-current.js
var version = "";
var classPath = "google.googleadwordsconversionsynchronousdeprecated" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Google AdWords Conversion Synchronous (Deprecated)",
		async: true,
		description: "Tracks users that have converted who previously clicked through on an ad.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Google.jpeg",
		locationDetail: "",
		isPrivate: true,
		url: "www.googleadservices.com/pagead/conversion.js",
		usesDocWrite: true,
		parameters: [{
			name: "Conversion ID",
			description: "Your google id provided in the script",
			token: "conversion_id",
			uv: ""
		}, {
			name: "Conversion Language",
			description: "The language value as seen in the script, something like \"en\" or \"en_US\"",
			token: "language",
			uv: ""
		}, {
			name: "Conversion Format",
			description: "The conversion format value as seen in the script, something like 1 or 3",
			token: "format",
			uv: ""
		}, {
			name: "Conversion Color",
			description: "The color of the displayed pixel, something like 666666 or FFFFFF",
			token: "conversion_color",
			uv: ""
		}, {
			name: "Conversion Label",
			description: "A word saying what kind of conversion this is tracking",
			token: "label",
			uv: ""
		}, {
			name: "Conversion Value",
			description: "The value of the conversion. This should be a number, or 0 if there is no value to the conversion",
			token: "value",
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
		var google_conversion_id = this.valueForToken("conversion_id");
		var google_conversion_language = "" + this.valueForToken("language") + "";
		var google_conversion_format = "" + this.valueForToken("format") + "";
		var google_conversion_color = "" + this.valueForToken("conversion_color") +
			"";
		var google_conversion_label = "" + this.valueForToken("label") + "";
		var google_conversion_value = this.valueForToken("value");

		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});