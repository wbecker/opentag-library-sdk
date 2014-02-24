//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("lyris.clicktracksgenerictag.Tag", {
    config: {/*DATA*/
	id: 28161,
	name: "Click Tracks Generic Tag",
	async: true,
	description: "All pages except confirmation page",
	html: "",
	imageUrl: ".",
	locationDetail: "",
	priv: false,
	url: "stats2.clicktracks.com/cgi-bin/ctasp-server.cgi?i=${id}",
	usesDocWrite: true,
	parameters: [
	{
		id: 27689,
		name: "Click Tracks ID",
		description: "",
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
