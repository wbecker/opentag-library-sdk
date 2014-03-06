//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("freespee.aesptag.Tag", {
	config: {
		/*DATA*/
		name: "AESP TAG",
		async: true,
		description: "Blah",
		html: "",
		imageUrl: "#",
		locationDetail: "",
		priv: true,
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
