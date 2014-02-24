//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("criteo.onetagcategorypage.Tag", {
    config: {/*DATA*/
	id: 35198,
	name: "OneTag - Category Page",
	async: true,
	description: "Add to a page listing products. This will pick off the first three values in the Listing Product IDs array and send them to Criteo, with (by default) the page's subcategory as keywords. INTENDED FOR: Pages which do not include a query in their UV Listing.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Criteo.png",
	locationDetail: "",
	priv: false,
	url: "static.criteo.net/js/ld/ld.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 34417,
		name: "Criteo Partner ID",
		description: "The ID assigned to you by Criteo",
		token: "partner_id",
		uv: ""
	},
	{
		id: 34418,
		name: "Customer ID",
		description: "This MUST NOT include any personally-identifiable information. Send \"\" if there is no anonymous ID.",
		token: "customer_id",
		uv: "universal_variable.user.user_id"
	},
	{
		id: 34419,
		name: "Site Type",
		description: "\"m\" for mobile or \"t\" for tablet or \"d\" for desktop",
		token: "site_type",
		uv: ""
	},
	{
		id: 34420,
		name: "Product ID List",
		description: "List of Product IDs displayed on this page",
		token: "product_ids",
		uv: "universal_variable.listing.items[#].id"
	},
	{
		id: 34421,
		name: "List Keywords",
		description: "The keywords used to generate the list.",
		token: "list_keywords",
		uv: "universal_variable.page.subcategory"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
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
    { event: "viewList", product: products, keywords: "" + this.getValueForToken("list_keywords") + "" }
  );

}());
    }/*~POST*/
});
