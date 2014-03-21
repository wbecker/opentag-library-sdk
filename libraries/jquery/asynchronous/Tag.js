//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("jquery.asynchronous.Tag", {
	config: {
		/*DATA*/
		name: "Asynchronous",
		async: true,
		description: "Load any specific version of jQuery asynchronously",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/jQuery.png",
		locationDetail: "",
		priv: false,
		url: "ajax.googleapis.com/ajax/libs/jquery/${version}/jquery.min.js",
		usesDocWrite: false,
		parameters: [
		{
			name: "jQuery version",
			description: "jQuery version e.g. 1.8.3",
			token: "version",
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
