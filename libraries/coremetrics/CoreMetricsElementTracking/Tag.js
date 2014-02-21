//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("coremetrics.CoreMetricsElementTracking", {
    config: {/*DATA*/
	id: 36195,
	name: "CoreMetrics - Element Tracking",
	async: true,
	description: "Track custom elements with CoreMetrics. Note that this tag depends on other CoreMetrics tags having already loaded on the page.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/coremetrics.gif",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 35324,
		name: "Element ID",
		description: "The unique identifier or name for the Element and the value that is displayed in the Elements report",
		token: "element_id",
		uv: ""
	},
	{
		id: 35325,
		name: "Element Category",
		description: "The category passed in the Element tag is used to populate the Element Categories report.",
		token: "element_category",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

cmCreateElementTag("" + this.getValueForToken("element_id") + "", "" + this.getValueForToken("element_category") + "");


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
