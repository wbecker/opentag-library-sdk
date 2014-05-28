//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("jquery.asynchronous.v1.Tag", {
	config: {
		/*DATA*/
		name: "Asynchronous",
		async: true,
		description: "Load any specific version of jQuery asynchronously",
		html: "",
		imageUrl: "",
		locationDetail: "",
		isPrivate: false,
		url: "ajax.googleapis.com/ajax/libs/jquery/${version}/jquery.min.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "jQuery version",
			description: "jQuery version e.g. 1.8.3",
			token: "version",
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