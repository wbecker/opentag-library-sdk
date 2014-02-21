//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("kissmetrics.KissInsightsSurvey", {
    config: {/*DATA*/
	id: 180,
	name: "KissInsights Survey",
	async: true,
	description: "KISSInsights customer survey slider",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Kissmetrics.png",
	locationDetail: "",
	priv: false,
	url: "s3.amazonaws.com/ki.js/${account_id}/${website_id}.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 18000,
		name: "Account Id",
		description: "The account id of your KISS subscription - the first number in the URL",
		token: "account_id",
		uv: ""
	},
	{
		id: 18001,
		name: "Website Id",
		description: "The id of the particular website - the last part of the URL before ''.js",
		token: "website_id",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
var _kiq = _kiq || [];
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
