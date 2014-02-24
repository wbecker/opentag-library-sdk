//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("google.googleadwordswithadditionalparametersdeprecated.Tag", {
    config: {
      /*DATA*/
	id: 33179,
	name: "Google AdWords with additional parameters DEPRECATED",
	async: true,
	description: "Tracks users that have converted who previously clicked through on an ad.",
	html: "\n",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Google.jpeg",
	locationDetail: "",
	priv: true,
	url: "www.googleadservices.com/pagead/conversion_async.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 32229,
		name: "Conversion ID",
		description: "",
		token: "conversion_id",
		uv: ""
	},
	{
		id: 32230,
		name: "Conversion Label",
		description: "",
		token: "conversion_label",
		uv: ""
	},
	{
		id: 32231,
		name: "Conversion Format",
		description: "",
		token: "conversion_format",
		uv: ""
	},
	{
		id: 32232,
		name: "Conversion Color",
		description: "",
		token: "conversion_color",
		uv: ""
	},
	{
		id: 32233,
		name: "Conversion Language",
		description: "",
		token: "conversion_language",
		uv: ""
	},
	{
		id: 32234,
		name: "Conversion Value",
		description: "",
		token: "conversion_value",
		uv: "universal_variable.transaction.subtotal"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/
      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
      /*~PRE*/
    },
    post: function () {
      /*POST*/
	window.google_trackConversion({
	  google_conversion_id: this.getValueForToken("conversion_id"),
	  google_conversion_label: "" + this.getValueForToken("conversion_label") + "",
	  google_conversion_format: "" + this.getValueForToken("conversion_format") + "",
	  google_conversion_color: "" + this.getValueForToken("conversion_color") + "",
	  google_conversion_language: "" + this.getValueForToken("conversion_language") + "",
	  google_conversion_value: this.getValueForToken("conversion_value")
	});
      /*~POST*/
    }
});
