//:include tagsdk-current.js
var version = "";
var classPath = "webtrends.webtrendsscenarioanalysis" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Webtrends - Scenario analysis",
		async: true,
		description: "Analyse paths through your website to measure conversion or abandonment. Depends on the main Webtrends pageview tag.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/webtrends.jpg",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Scenario Analysis name",
			description: "Identifies the name of the Scenario Analysis. The maximum length for each Name is 64 bytes.",
			token: "name",
			uv: ""
		}, {
			name: "Step Name",
			description: "Identifies the step by name.",
			token: "step_name",
			uv: ""
		}, {
			name: "Step Position",
			description: "Identifies the step by numeric position. Must be an integer",
			token: "step_position",
			uv: ""
		}, {
			name: "Is conversion step?",
			description: "If the value is 1, the page is identified as a conversion page. Set as 0 otherwise.",
			token: "step_where_conversion_occurs",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
    var _this = this;
		window.dcsMultiTrack({
			"WT.si_n": "" + _this.valueForToken("name"),
			"WT.si_p": "" + _this.valueForToken("step_name"),
			"WT.si_x": _this.valueForToken("step_position"),
			"WT.si_cs": _this.valueForToken("step_where_conversion_occurs")
		});
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