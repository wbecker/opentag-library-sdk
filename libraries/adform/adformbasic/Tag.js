//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("adform.adformbasic.Tag", {
	config: {
		/*DATA*/
		name: "AdForm - Basic",
		async: true,
		description: "To be placed on any page except order confirmation pages.",
		html: "",
		imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQqhMX8uPEM4jbCulqkPVVjAeLHE5Cjx5SkFKlqrtxPL0S4tJDOCJXoQ7kT",
		locationDetail: "",
		isPrivate: false,
		url: "track.adform.net/serving/scripts/trackpoint/async/",
		usesDocWrite: false,
		parameters: [
		{
			name: "Adform Campaign ID",
			description: "The unique client ID for the AdForm tracking script",
			token: "campaignid",
			uv: ""
		},
		{
			name: "AdForm Point ID",
			description: "Point ID for the tag. Usually unique to page type.",
			token: "pointid",
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
	    window._adftrack = {
		pm: this.valueForToken("campaignid"),
		id: this.valueForToken("pointid")
	    };
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});
