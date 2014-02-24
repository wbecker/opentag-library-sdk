//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("deprecatedtags.clicktalebalkandonotuse.Tag", {
    config: {/*DATA*/
	id: 39657,
	name: "ClickTale - balkan - donotuse",
	async: true,
	description: "do not use",
	html: "",
	imageUrl: "http://i.imgur.com/VizCSQb.jpg",
	locationDetail: "",
	priv: true,
	url: "${clicktale_url}",
	usesDocWrite: true,
	parameters: [
	{
		id: 38657,
		name: "ClickTale URL",
		description: "Set this to the JavaScript variable 'window.clicktale_url' which is created by the Pre-Script",
		token: "clicktale_url",
		uv: ""
	},
	{
		id: 38658,
		name: "ClickTale HTTPS URL",
		description: "Set this to the HTTPS URL specified in the ClickTale implementation code",
		token: "clicktale_https",
		uv: ""
	},
	{
		id: 38659,
		name: "ClickTale HTTP URL",
		description: "Set this to the HTTP URL specified in the ClickTale implementation code",
		token: "clicktale_http",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
window.WRInitTime=(new Date()).getTime();
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
