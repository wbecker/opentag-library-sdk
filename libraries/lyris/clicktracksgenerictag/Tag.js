//:include tagsdk-current.js
var version = "";
var classPath = "lyris.clicktracksgenerictag.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Click Tracks Generic Tag",
		async: true,
		description: "All pages except confirmation page",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "stats2.clicktracks.com/cgi-bin/ctasp-server.cgi?i=${id}",
		usesDocWrite: true,
		parameters: [{
			name: "Click Tracks ID",
			description: "",
			token: "id",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
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