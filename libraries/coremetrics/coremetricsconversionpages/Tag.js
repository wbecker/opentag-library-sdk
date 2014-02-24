//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("coremetrics.coremetricsconversionpages.Tag", {
    config: {
      /*DATA*/
	name: "CoreMetrics - Conversion Pages",
	async: true,
	description: "To be placed on non-ecommerce conversion pages (e.g. user signups)",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/coremetrics.gif",
	locationDetail: "",
	priv: false,
	url: "libs.coremetrics.com/eluminate.js",
	usesDocWrite: false,
	parameters: [
	{
		name: "Client ID",
		description: "Unique 8-digit Coremetrics-assigned account code.",
		token: "client_id",
		uv: ""
	},
	{
		name: "Data collection method",
		description: "Boolean. true indicates Client Managed, false indicates Coremetrics Managed.",
		token: "data_collection_method",
		uv: ""
	},
	{
		name: "Data collection domain",
		description: "The target domain for Coremetrics data collection requests.",
		token: "data_collection_domain",
		uv: ""
	},
	{
		name: "Cookie Domain",
		description: "Should be set to the 2nd level site domain (“thesite.com”) of the domain.",
		token: "cookie_domain",
		uv: ""
	},
	{
		name: "Page ID",
		description: "Uniquely identifies the 256 given ‘page’ in Coremetrics. Can be any alphanumeric string.",
		token: "page_id",
		uv: ""
	},
	{
		name: "Category ID",
		description: "Category ID for the leaf 256 node to which this page belongs. Should match the id from a CDF file.",
		token: "category_id",
		uv: ""
	},
	{
		name: "Event ID",
		description: "A unique identifier for the type of conversion, such as “Account Creation” or “Special Registration\"",
		token: "event_id",
		uv: ""
	},
	{
		name: "Action Type",
		description: "A value of “1” or “2” depending upon whether a successful conversion is generated.",
		token: "action_type",
		uv: ""
	},
	{
		name: "Event Category ID",
		description: "Allows grouping of event IDs into categories.",
		token: "event_category_id",
		uv: ""
	},
	{
		name: "Points",
		description: "A point value used in establishing an arbitrary “value” for a conversion.",
		token: "points",
		uv: ""
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

  // Top level settings  
  cmSetClientID(
    "" + this.getValueForToken("client_id") + "",
    this.getValueForToken("data_collection_method"),
    "" + this.getValueForToken("data_collection_domain") + "",
    "" + this.getValueForToken("cookie_domain") + ""
  );

  // Extra custom attributes
  var attributeString, extraFieldString;

  // Track pageviews with whatever data we have
  cmCreatePageviewTag(
    "" + this.getValueForToken("page_id") + "",
    "" + this.getValueForToken("category_id") + ""
  );

  // Create the custom event
  cmCreateConversionEventTag(
    "" + this.getValueForToken("event_id") + "",
    "" + this.getValueForToken("action_type") + "",
    "" + this.getValueForToken("event_category_id") + "",
    "" + this.getValueForToken("points") + "",
    attributeString,
    extraFieldString
  );

}());
      /*~POST*/
    }
});
