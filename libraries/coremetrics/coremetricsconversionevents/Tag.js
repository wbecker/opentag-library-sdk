//:include tagsdk-current.js
var version = "";
var classPath = "coremetrics.coremetricsconversionevents" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "CoreMetrics - Conversion Events",
		async: true,
		description: "Track custom conversion events with CoreMetrics. Note that this tag depends on other CoreMetrics tags having already loaded on the page.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/coremetrics.gif",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Event ID",
			description: "A unique identifier for the type of conversion, such as “Account Creation” or “Special Registration\"",
			token: "event_id",
			uv: ""
		}, {
			name: "Action Type",
			description: "A value of “1” or “2” depending upon whether a successful conversion is generated.",
			token: "action_type",
			uv: ""
		}, {
			name: "Event category id",
			description: "Allows grouping of event IDs into categories.",
			token: "event_category_id",
			uv: ""
		}, {
			name: "Points",
			description: "A point value used in establishing an arbitrary “value” for a conversion.",
			token: "points",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		cmCreateConversionEventTag(
			"" + this.valueForToken("event_id") + "",
			"" + this.valueForToken("action_type") + "",
			"" + this.valueForToken("event_category_id") + "",
			"" + this.valueForToken("points") + ""
		);

		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});