//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("peerius.searchpage.Tag", {
    config: {
      /*DATA*/
	id: 33166,
	name: "Search Page",
	async: true,
	description: "Peerius tag for the search page",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Peerius.png",
	locationDetail: "",
	priv: false,
	url: "${client_id}.peerius.com/tracker/peerius.page",
	usesDocWrite: false,
	parameters: [
	{
		id: 32157,
		name: "Peerius Language",
		description: "Language that the site is in",
		token: "lang",
		uv: "universal_variable.user.language"
	},
	{
		id: 32158,
		name: "Peerius Search Query",
		description: "The search query string",
		token: "query",
		uv: ""
	},
	{
		id: 32190,
		name: "Peerius Client Name",
		description: "The name of the client for which the tag is to be implemented",
		token: "client_id",
		uv: ""
	},
	{
		id: 32209,
		name: "Peerius Search Listing IDs",
		description: "The ids of the products in the search listing",
		token: "listing_ids",
		uv: "universal_variable.listing.items[#].id"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/
      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
var PeeriusCallbacks = {
  track: {
    type: "searchresults",
    lang: "" + this.getValueForToken("lang") + "",
    searchResults: {
      term: "" + this.getValueForToken("query") + "",
      results: []
    }
  }
};
var ii = this.getValueForToken("listing_ids").length;
for (var i = 0; i < ii; i++) {
  PeeriusCallbacks.track.searchResults.results.push({
    refCode: this.getValueForToken("listing_ids")[i]
  });
}
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
