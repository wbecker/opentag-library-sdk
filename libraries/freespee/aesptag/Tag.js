//:include tagsdk-current.js
var version = "";
var classPath = "freespee.aesptag.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "AESP TAG",
		async: true,
		description: "Blah",
		html: "",
		imageUrl: "#",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Test Param 1",
			description: "Test",
			token: "test_param2",
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
