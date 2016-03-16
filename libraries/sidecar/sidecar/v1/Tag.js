//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("sidecar.sidecar.v1.Tag", {
	config: {
		/*DATA*/
		name: "Sidecar",
		async: true,
		description: "Site wide tracking library - please add the name of the js file we give you.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "d3v27wwd40f0xu.cloudfront.net/js/tracking/${sidecarJS}",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Javascript File",
			description: "Name of sidecar js file",
			token: "sidecarJS",
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
