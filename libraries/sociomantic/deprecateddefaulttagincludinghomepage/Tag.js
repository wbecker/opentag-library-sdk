//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("sociomantic.deprecateddefaulttagincludinghomepage.Tag", {
	config: {
		/*DATA*/
		name: "{DEPRECATED} Default Tag (including Home Page)",
		async: true,
		description: "Homepage tracking code as Default for all pages that can't be assigned to a specific page type",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/sociomantic.jpg",
		locationDetail: "",
		isPrivate: false,
		url: "eu-sonar.sociomantic.com/js/2010-07-01/adpan/${TOKEN}",
		usesDocWrite: false,
		parameters: [
		{
			name: "Advertiser Token",
			description: "Your Sociomantic customer ID. Please only use the token that has been created and sent to you.",
			token: "TOKEN",
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
