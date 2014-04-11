//:include tagsdk-current.js
var version = "";
var classPath = "google.googleremarketingonlyaynsc" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Google Remarketing Only Aynsc",
		async: true,
		description: "Remarkting Only Conversion tracking is a tool to help you measure conversions, and ultimately help you identify how effective your Ad Exchange ads are for you.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Google.jpeg",
		locationDetail: "",
		isPrivate: false,
		url: "www.googleadservices.com/pagead/conversion_async.js",
		usesDocWrite: false,
		parameters: [{
			name: "Google Conversion ID",
			description: "",
			token: "conversionid",
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
		var poll = function() {
			if (window.google_trackConversion) {
				window.google_trackConversion({
					google_conversion_id: "" + this.valueForToken("conversionid") + "",
					google_remarketing_only: true,
					google_custom_params: window.google_tag_params || {}
				});
			} else {
				setTimeout(poll, 250);
			}
		};
		poll();


		/*~POST*/
	}
});