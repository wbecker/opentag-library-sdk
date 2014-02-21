//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("deprecatedtags.GoogleRemarketingWithCustomParametersDEPRECATED", {
    config: {/*DATA*/
	id: 36661,
	name: "Google Remarketing with custom parameters DEPRECATED",
	async: true,
	description: "The standard GA re-marketing tag, but allows for custom parameter as per the guide: http://bit.ly/14iZMqu. Return an object within an anonymous function to populate the parameters.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Google.jpeg",
	locationDetail: "",
	priv: true,
	url: "www.googleadservices.com/pagead/conversion_async.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 35681,
		name: "Google Conversion ID",
		description: "Your Google id provided in the script",
		token: "conversion_id",
		uv: ""
	},
	{
		id: 35682,
		name: "Google Conversion Label",
		description: "A alphanumeric label of your conversion tracking",
		token: "label",
		uv: ""
	},
	{
		id: 35683,
		name: "Custom parameters",
		description: "Use a JavaScript-based parameter to return an object within an anonymous function.",
		token: "custom_parameters",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
var options = {
  google_conversion_id: "" + this.getValueForToken("conversion_id") + "",
  google_conversion_label: "" + this.getValueForToken("label") + "",
  google_custom_params: this.getValueForToken("custom_parameters")
};

console.debug(options);

window.google_trackConversion(options);
    }/*~POST*/
});
