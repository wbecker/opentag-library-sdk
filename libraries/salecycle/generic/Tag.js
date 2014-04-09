//:include tagsdk-current.js
var version = "";
var classPath = "salecycle.generic" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Generic",
		async: true,
		description: "To implement SaleCycle, SaleCycle code must be pasted into the relevant web pages on your live website.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/salecycle.png",
		locationDetail: "",
		isPrivate: false,
		url: "d16fk4ms6rqz1v.cloudfront.net/capture/${clientName}.js",
		usesDocWrite: false,
		parameters: [{
			name: "Client Name",
			description: "needs to be changed to reflect your company name minus any spaces",
			token: "clientName",
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