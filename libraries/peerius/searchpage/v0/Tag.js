//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("peerius.searchpage.v0.Tag", {
	config: {
		/*DATA*/
		name: "Search Page",
		async: true,
		description: "Peerius tag for the search page",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Peerius.png",
		locationDetail: "",
		isPrivate: false,
		url: "${client_id}.peerius.com/tracker/peerius.page",
		usesDocWrite: false,
		parameters: [{
			name: "Peerius Language",
			description: "Language that the site is in",
			token: "lang",
			uv: "universal_variable.user.language"
		}, {
			name: "Peerius Search Query",
			description: "The search query string",
			token: "query",
			uv: ""
		}, {
			name: "Peerius Client Name",
			description: "The name of the client for which the tag is to be implemented",
			token: "client_id",
			uv: ""
		}, {
			name: "Peerius Search Listing IDs",
			description: "The ids of the products in the search listing",
			token: "listing_ids",
			uv: "universal_variable.listing.items[#].id"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		window.PeeriusCallbacks = {
			track: {
				type: "searchresults",
				lang: "" + this.valueForToken("lang"),
				searchResults: {
					term: "" + this.valueForToken("query"),
					results: []
				}
			}
		};
		var ii = this.valueForToken("listing_ids").length;
		for (var i = 0; i < ii; i++) {
			PeeriusCallbacks.track.searchResults.results.push({
				refCode: this.valueForToken("listing_ids")[i]
			});
		}

		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});
