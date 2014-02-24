//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("deprecatedtags.googleremarketingconversionasyncold.Tag", {
    config: {
      /*DATA*/
	id: 24670,
	name: "Google Remarketing Conversion Async - old",
	async: true,
	description: "Conversion tracking is a tool to help you measure conversions, and ultimately help you identify how effective your Ad Exchange ads are for you.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Google.jpeg",
	locationDetail: "",
	priv: true,
	url: "www.googleadservices.com/pagead/conversion_async.js",
	usesDocWrite: true,
	parameters: [
	{
		id: 24210,
		name: "Google Conversion ID",
		description: "Your Google id provided in the script",
		token: "conversion_id",
		uv: ""
	},
	{
		id: 24211,
		name: "Google Conversion Label",
		description: "A alphanumeric label of your conversion tracking",
		token: "label",
		uv: ""
	},
	{
		id: 24212,
		name: "Google Conversion Value",
		description: "The value of the conversion. This should be a number, or 0 if there is no value to the conversion",
		token: "value",
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
  google_conversion_id: "" + this.getValueForToken("conversion_id") + "",
  google_conversion_label: "" + this.getValueForToken("label") + "",
  google_custom_params: {}
});
      /*~POST*/
    }
});
