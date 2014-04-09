//:include tagsdk-current.js
var version = "";
var classPath = "intelligentreach.generictag.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Generic Tag",
		async: true,
		description: "Tag to be applied to all pages",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "www.ist-track.com/ContainerJavaScript.ashx?id=${id}",
		usesDocWrite: true,
		parameters: [{
			name: "Intelligent Reach ID",
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