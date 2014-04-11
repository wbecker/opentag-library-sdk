//:include tagsdk-current.js
var version = "";
var classPath = "google.googleremarketingconversionasync" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Google Remarketing Conversion Async",
		async: true,
		description: "Conversion tracking is a tool to help you measure conversions, and ultimately help you identify how effective your Ad Exchange ads are for you.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Google.jpeg",
		locationDetail: "",
		isPrivate: false,
		url: "www.googleadservices.com/pagead/conversion_async.js",
		usesDocWrite: false,
		parameters: [{
			name: "Google Conversion ID",
			description: "Your Google id provided in the script",
			token: "conversion_id",
			uv: ""
		}, {
			name: "Google Conversion Label",
			description: "A alphanumeric label of your conversion tracking",
			token: "label",
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
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		window.google_trackConversion({
			google_conversion_id: "" + this.valueForToken("conversion_id") + "",
			google_conversion_label: "" + this.valueForToken("label") + "",
			google_custom_params: {}
		});

		/*~POST*/
	}
});