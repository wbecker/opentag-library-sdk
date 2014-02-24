//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("google.googleadwordswithadditionalparameters.Tag", {
    config: {
      /*DATA*/
	id: 38657,
	name: "Google AdWords with additional parameters",
	async: true,
	description: "Tracks users that have converted who previously clicked through on an ad.",
	html: "\n",
	imageUrl: ".",
	locationDetail: "",
	priv: false,
	url: "www.googleadservices.com/pagead/conversion_async.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 37657,
		name: "Conversion ID",
		description: "",
		token: "conversion_id",
		uv: ""
	},
	{
		id: 37658,
		name: "Conversion Label",
		description: "",
		token: "conversion_label",
		uv: ""
	},
	{
		id: 37659,
		name: "Conversion Format",
		description: "",
		token: "conversion_format",
		uv: ""
	},
	{
		id: 37660,
		name: "Conversion Color",
		description: "",
		token: "conversion_color",
		uv: ""
	},
	{
		id: 37661,
		name: "Conversion Language",
		description: "",
		token: "conversion_language",
		uv: ""
	},
	{
		id: 37662,
		name: "Conversion Value",
		description: "",
		token: "conversion_value",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 37663,
		name: "Remarketing Boolean",
		description: "A true / false value indicating whether to only use remarketing version",
		token: "remarketing",
		uv: ""
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
	  google_conversion_value: this.getValueForToken("conversion_value"),
	  google_remarketing_only: this.getValueForToken("remarketing")
	});
      /*~POST*/
    }
});
