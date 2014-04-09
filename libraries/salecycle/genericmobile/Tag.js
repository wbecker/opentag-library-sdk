//:include tagsdk-current.js
var version = "";
var classPath = "salecycle.genericmobile.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Generic [Mobile]",
		async: true,
		description: "The same as the non-confirmation tag, but for mobile.",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "d16fk4ms6rqz1v.cloudfront.net/capture/mobile/${client_name}.js",
		usesDocWrite: false,
		parameters: [
		{
			name: "Client Name",
			description: "The client name that identifies you to SaleCycle",
			token: "client_name",
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
