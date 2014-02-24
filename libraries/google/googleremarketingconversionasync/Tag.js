//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("google.googleremarketingconversionasync.Tag", {
    config: {/*DATA*/
	id: 26160,
	name: "Google Remarketing Conversion Async",
	async: true,
	description: "Conversion tracking is a tool to help you measure conversions, and ultimately help you identify how effective your Ad Exchange ads are for you.",
	html: "\n",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Google.jpeg",
	locationDetail: "",
	priv: false,
	url: "www.googleadservices.com/pagead/conversion_async.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 25662,
		name: "Google Conversion ID",
		description: "Your Google id provided in the script",
		token: "conversion_id",
		uv: ""
	},
	{
		id: 25663,
		name: "Google Conversion Label",
		description: "A alphanumeric label of your conversion tracking",
		token: "label",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
	window.google_trackConversion({
	  google_conversion_id: "" + this.getValueForToken("conversion_id") + "",
	  google_conversion_label: "" + this.getValueForToken("label") + "",
	  google_custom_params: {}
	});
    }/*~POST*/
});
