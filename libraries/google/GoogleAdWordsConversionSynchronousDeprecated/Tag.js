//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("google.GoogleAdWordsConversionSynchronousDeprecated", {
    config: {/*DATA*/
	id: 130,
	name: "Google AdWords Conversion Synchronous (Deprecated)",
	async: true,
	description: "Tracks users that have converted who previously clicked through on an ad.",
	html: "\n",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Google.jpeg",
	locationDetail: "",
	priv: true,
	url: "www.googleadservices.com/pagead/conversion.js",
	usesDocWrite: true,
	parameters: [
	{
		id: 13000,
		name: "Conversion ID",
		description: "Your google id provided in the script",
		token: "conversion_id",
		uv: ""
	},
	{
		id: 13001,
		name: "Conversion Language",
		description: "The language value as seen in the script, something like \"en\" or \"en_US\"",
		token: "language",
		uv: ""
	},
	{
		id: 13002,
		name: "Conversion Format",
		description: "The conversion format value as seen in the script, something like 1 or 3",
		token: "format",
		uv: ""
	},
	{
		id: 13003,
		name: "Conversion Color",
		description: "The color of the displayed pixel, something like 666666 or FFFFFF",
		token: "conversion_color",
		uv: ""
	},
	{
		id: 13004,
		name: "Conversion Label",
		description: "A word saying what kind of conversion this is tracking",
		token: "label",
		uv: ""
	},
	{
		id: 13005,
		name: "Conversion Value",
		description: "The value of the conversion. This should be a number, or 0 if there is no value to the conversion",
		token: "value",
		uv: ""
	},
	{
		id: 1460461096585396225,
		name: "Conversion Value",
		description: "The value of the conversion. This should be a number, or 0 if there is no value to the conversion",
		token: "value",
		uv: ""
	},
	{
		id: 1460461536267993089,
		name: "Conversion Value",
		description: "The value of the conversion. This should be a number, or 0 if there is no value to the conversion",
		token: "value",
		uv: ""
	},
	{
		id: 1460462415049129985,
		name: "Conversion Value",
		description: "The value of the conversion. This should be a number, or 0 if there is no value to the conversion",
		token: "value",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
	var google_conversion_id =this.getValueForToken("conversion_id"); 
	var google_conversion_language = "" + this.getValueForToken("language") + ""; 
	var google_conversion_format = "" + this.getValueForToken("format") + "";
	var google_conversion_color = "" + this.getValueForToken("conversion_color") + ""; 
	var google_conversion_label = "" + this.getValueForToken("label") + ""; 
	var google_conversion_value = this.getValueForToken("value");
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
