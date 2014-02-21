//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("google.GoogleAdWordsConversionAsync", {
    config: {/*DATA*/
	id: 24669,
	name: "Google AdWords Conversion Async",
	async: true,
	description: "Tracks users that have converted who previously clicked through on an ad.",
	html: "\n",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Google.jpeg",
	locationDetail: "",
	priv: false,
	url: "www.googleadservices.com/pagead/conversion_async.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 24207,
		name: "Conversion ID",
		description: "Your Google id provided in the script",
		token: "conversion_id",
		uv: "koko"
	},
	{
		id: 24208,
		name: "Conversion Label",
		description: "A alphanumeric label of your conversion tracking",
		token: "label",
		uv: ""
	},
	{
		id: 24209,
		name: "Conversion Value",
		description: "The value of the conversion. This should be a number, or 0 if there is no value to the conversion",
		token: "value",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 1460298932030537729,
		name: "Conversion KOKO",
		description: "Your KOKO id provided in the script",
		token: "conversion_id_KOKO",
		uv: "koko other"
	},
	{
		id: 1460299048617508866,
		name: "Conversion ID",
		description: "Your Google id provided in the script",
		token: "conversion_id",
		uv: "koko"
	},
	{
		id: 1460299147296899073,
		name: "Conversion KOKO",
		description: "Your KOKO id provided in the script",
		token: "conversion_id_KOKO",
		uv: "koko other"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
	window.google_trackConversion({
	    google_conversion_id: this.getValueForToken("conversion_id"),
	    google_conversion_label: "" + this.getValueForToken("label") + "",
	    google_conversion_value: this.getValueForToken("value"),
	    google_conversion_format: "3",
	    google_is_call: true,
	    google_custom_params: {}
	});
    }/*~POST*/
});
