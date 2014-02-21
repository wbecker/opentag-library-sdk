//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("clicktale.ClickTaleBalkan", {
    config: {/*DATA*/
	id: 39658,
	name: "ClickTale - Balkan",
	async: true,
	description: "New Balkan version of ClickTale mouse tracking",
	html: "",
	imageUrl: "http://i.imgur.com/VizCSQb.jpg",
	locationDetail: "",
	priv: false,
	url: "${clicktale_url}",
	usesDocWrite: true,
	parameters: [
	{
		id: 38660,
		name: "ClickTale URL",
		description: "Fill this dynamically with HTTPS or HTTP URL using JavaScript variable",
		token: "clicktale_url",
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
