//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("lyris.clicktracksgenerictag.Tag", {
    config: {
      /*DATA*/
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
		name: "Click Tracks ID",
		description: "",
		token: "id",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/
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
