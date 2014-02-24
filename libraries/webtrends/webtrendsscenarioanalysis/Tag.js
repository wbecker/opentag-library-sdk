//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("webtrends.webtrendsscenarioanalysis.Tag", {
    config: {
      /*DATA*/
	id: 36660,
	name: "Webtrends - Scenario analysis",
	async: true,
	description: "Analyse paths through your website to measure conversion or abandonment. Depends on the main Webtrends pageview tag.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/webtrends.jpg",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 35677,
		name: "Scenario Analysis name",
		description: "Identifies the name of the Scenario Analysis. The maximum length for each Name is 64 bytes.",
		token: "name",
		uv: ""
	},
	{
		id: 35678,
		name: "Step Name",
		description: "Identifies the step by name.",
		token: "step_name",
		uv: ""
	},
	{
		id: 35679,
		name: "Step Position",
		description: "Identifies the step by numeric position. Must be an integer",
		token: "step_position",
		uv: ""
	},
	{
		id: 35680,
		name: "Is conversion step?",
		description: "If the value is 1, the page is identified as a conversion page. Set as 0 otherwise.",
		token: "step_where_conversion_occurs",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

window.dcsMultiTrack({
  "WT.si_n": "" + this.getValueForToken("name") + "",
  "WT.si_p": "" + this.getValueForToken("step_name") + "",
  "WT.si_x": this.getValueForToken("step_position"),
  "WT.si_cs": this.getValueForToken("step_where_conversion_occurs")
});


      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
