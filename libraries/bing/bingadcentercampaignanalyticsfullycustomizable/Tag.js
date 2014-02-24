//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("bing.bingadcentercampaignanalyticsfullycustomizable.Tag", {
    config: {/*DATA*/
	id: 28662,
	name: "Bing AdCenter Campaign Analytics - Fully Customizable",
	async: true,
	description: "Script to generate reports on the success of your advertising campaigns via Bing Search. Fully customizable.",
	html: "<iframe src=\"//flex.atdmt.com/mstag/tag/${URL_ID}/analytics.html?dedup=${DEDUPE}&domainId=${DOMAIN_ID}&type=${TYPE}&revenue=${REVENUE}&actionid=${ACTION_ID}\" frameborder=\"0\" scrolling=\"no\" width=\"1\" height=\"1\" style=\"visibility:hidden;display:none\">",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Bing.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: true,
	parameters: [
	{
		id: 28167,
		name: "URL ID",
		description: "The id in the url of the script, eg fb9804c9-b48f-46d1-a20e-88c3ff3302cc",
		token: "URL_ID",
		uv: ""
	},
	{
		id: 28168,
		name: "Domain Id",
		description: "The id common to all bing tracking tags",
		token: "DOMAIN_ID",
		uv: ""
	},
	{
		id: 28169,
		name: "Dedupe",
		description: "Dedupe settings eg 1",
		token: "DEDUPE",
		uv: ""
	},
	{
		id: 28170,
		name: "Type",
		description: "Type eg 1",
		token: "TYPE",
		uv: ""
	},
	{
		id: 28171,
		name: "Revenue",
		description: "Revenue",
		token: "REVENUE",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 28172,
		name: "Action Id",
		description: "Action Id. Eg 948565",
		token: "ACTION_ID",
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
