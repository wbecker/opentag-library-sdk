//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("intelligentreach.domtrackingentrycode.Tag", {
    config: {/*DATA*/
	id: 36181,
	name: "DOM Tracking Entry Code",
	async: true,
	description: "Placed on all pages and entry points to the site, but not on any of the checkout / final confirmation pages. Async-compatible version of the code.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/IntelligentReach.png",
	locationDetail: "",
	priv: false,
	url: "www.ist-track.com/ProcessClickJavaScript.ashx?id=${id}&useDom=1",
	usesDocWrite: false,
	parameters: [
	{
		id: 35275,
		name: "IntelligentReach ID",
		description: "Unique ID assigned by IntelligentReach - must remain the same across the whole site",
		token: "id",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
