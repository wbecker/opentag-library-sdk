//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("veinteractive.confirmationpixel.v1.Tag", {
	config: {
		/*DATA*/
		name: "Confirmation Pixel",
		async: true,
		description: "Tag to be added only to the confirmation page",
		html: "<img src=\"//drs2.veinteractive.com/DataReceiverService.asmx/Pixel?journeycode=${id}\" width=\"1\" height=\"1\"/>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/ve-interactive.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "VE Interactive ID",
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