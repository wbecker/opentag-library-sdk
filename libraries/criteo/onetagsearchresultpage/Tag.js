//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("criteo.onetagsearchresultpage.Tag", {
    config: {
      /*DATA*/
	id: 35201,
	name: "OneTag - Search Result Page",
	async: true,
	description: "Add to a page listing products. This will pick off the first three values in the Listing Product IDs array and send them to Criteo, with (by default) the search query as keywords. INTENDED FOR: Pages which include a query in their UV Listing.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Criteo.png",
	locationDetail: "",
	priv: false,
	url: "static.criteo.net/js/ld/ld.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 34433,
		name: "Criteo Partner ID",
		description: "The ID assigned to you by Criteo",
		token: "partner_id",
		uv: ""
	},
	{
		id: 34434,
		name: "Customer ID",
		description: "This MUST NOT include any personally-identifiable information. Send \"\" if there is no anonymous ID.",
		token: "customer_id",
		uv: "universal_variable.user.user_id"
	},
	{
		id: 34435,
		name: "Site Type",
		description: "\"m\" for mobile or \"t\" for tablet or \"d\" for desktop",
		token: "site_type",
		uv: ""
	},
	{
		id: 34436,
		name: "Search Query",
		description: "The query used to return this page's listing. NOTE: Words should be separated by spaces",
		token: "search_query",
		uv: "universal_variable.listing.query"
	},
	{
		id: 34437,
		name: "Product ID List",
		description: "Listing of Product IDs this search has produced.",
		token: "product_ids",
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
      /*~PRE*/
    },
    post: function () {
      /*POST*/
(function() {

  //Criteo suggests that this list should only be 3 products long.
  var products = [];

  var ii = (this.getValueForToken("product_ids").length < 3) ? this.getValueForToken("product_ids").length : 3;

  for (i=0; i<ii; i++){
    products.push(this.getValueForToken("product_ids")[i]);
  }

  var user_id = "" + this.getValueForToken("customer_id") + "";
  //Remove email if present.
  if (user_id.indexOf("@") > -1){
    user_id = "";
  }

  window.criteo_q = window.criteo_q || [];
  window.criteo_q.push(
    { event: "setAccount", account: this.getValueForToken("partner_id") },
    { event: "setCustomerId", id: user_id },
    { event: "setSiteType", type: "" + this.getValueForToken("site_type") + "" },
    { event: "viewList", product: products, keywords: "" + this.getValueForToken("search_query") + "" }
  );

}());
      /*~POST*/
    }
});
