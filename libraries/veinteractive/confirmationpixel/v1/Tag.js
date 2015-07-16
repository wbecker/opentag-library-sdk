//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("veinteractive.confirmationpixel.v1.Tag", {
	config: {
		/*DATA*/
		name: "Confirmation Pixel",
		async: true,
		description: "Tag to be added only to the confirmation page",
		html: "<img src=\"${id}\" width=\"1\" height=\"1\"/>",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "VE Interactive Pixel",
			description: "The ID for the tag in this format XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX with dashes included",
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