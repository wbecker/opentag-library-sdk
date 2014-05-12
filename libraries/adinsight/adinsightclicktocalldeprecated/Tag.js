//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("adinsight.adinsightclicktocalldeprecated.Tag", {
	config: {
		/*DATA*/
		name: "AdInsight Click to Call DEPRECATED",
		async: true,
		description: "DEPRECATED",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Adinsight.png",
		locationDetail: "",
		isPrivate: true,
		url: "static.adinsight.eu/static/scripts/adiTrack.min.js",
		usesDocWrite: false,
		parameters: [{
			name: "Account Id",
			description: "Your AdInsight account id, generally a 3 digit number",
			token: "Account_Id",
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
		window.adiInit = "" + this.valueForToken("Account_Id");

		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});