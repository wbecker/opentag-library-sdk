//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("intelligentreach.generictag.Tag", {
	config: {
		/*DATA*/
		name: "Generic Tag",
		async: true,
		description: "Tag to be applied to all pages",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		priv: false,
		url: "www.ist-track.com/ContainerJavaScript.ashx?id=${id}",
		usesDocWrite: true,
		parameters: [
		{
			name: "Intelligent Reach ID",
			description: "",
			token: "id",
			uv: ""
		}
	]
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
