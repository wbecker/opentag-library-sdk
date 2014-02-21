//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("intelliad.Conversion", {
    config: {/*DATA*/
	id: 39668,
	name: "Conversion",
	async: true,
	description: "The intelliAd Conversion Tracking is specifically tailored for our system and provides you and our bid management tool extensive data on individual conversions.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/IntelliAd.gif",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 38693,
		name: "Transaction Order Total",
		description: "The total amount for the conversion",
		token: "order_total",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 38694,
		name: "Transaction Order Currency",
		description: "The currency for the transaction",
		token: "order_currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 38695,
		name: "Transaction Order ID",
		description: "The unique identifier specifying the transaction.",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 38696,
		name: "Transaction Product IDs",
		description: "The array of product ID's corresponding to products in the transaction",
		token: "product_ids",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 38697,
		name: "intelliAd Conversion Type",
		description: "sale, lead, download, pageview, signup, social, call, cutom1 - custom49 for main types _[1-255] sub",
		token: "order_type",
		uv: ""
	},
	{
		id: 38698,
		name: "IntelliAd Custom Parameter 1",
		description: "Any value can be passed – used for intelliAd Reporting and Bidding (leave blank to ignore)",
		token: "custom_param1",
		uv: ""
	},
	{
		id: 38699,
		name: "IntelliAd Custom Parameter 2",
		description: "Any value can be passed – used for intelliAd Reporting and Bidding (leave blank to ignore)",
		token: "custom_param2",
		uv: ""
	},
	{
		id: 38700,
		name: "IntelliAd Custom Parameter 3",
		description: "Any value can be passed – used for intelliAd Reporting and Bidding (leave blank to ignore)",
		token: "custom_param3",
		uv: ""
	},
	{
		id: 38701,
		name: "IntelliAd Custom Parameter 4",
		description: "Any value can be passed – used for intelliAd Reporting and Bidding (leave blank to ignore)",
		token: "custom_param4",
		uv: ""
	},
	{
		id: 38722,
		name: "IntelliAd Client ID",
		description: "The id that relates the client to IntelliAd",
		token: "client_id",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

  var ia_v = "" + this.getValueForToken("order_total") + "";
  var ia_vz = "" + this.getValueForToken("order_type") + ""; // sale -> "sa", lead -> "le", signup -> "si", pageview -> "pa", download -> "do"
  var ia_vv = ("" + this.getValueForToken("order_currency") + "".length) ? "" + this.getValueForToken("order_currency") + "" : "EUR";
  var ia_po = "" + this.getValueForToken("order_id") + "";
  var ia_c1 = "" + this.getValueForToken("custom_param1") + "";
  var ia_c2 = "" + this.getValueForToken("custom_param2") + "";
  var ia_c3 = "" + this.getValueForToken("custom_param3") + "";
  var ia_c4 = "" + this.getValueForToken("custom_param4") + "";

  var productIDs = [];
  for (var i = 0; i < this.getValueForToken("product_ids").length; i++) {
    productIDs.push(this.getValueForToken("product_ids")[i]);
  }
  var ia_pi = productIDs.join("|");
  var ia_tp = "//t23.intelliad.de/tc2.js";
  var ia_cl = "" + this.getValueForToken("client_id") + "";
  var ia_rand = Math.floor(Math.random() * 11111139435231);
  var ia_link = ia_tp +
    '?cl=' + ia_cl +
    '&v=' + ia_v +
    '&vz=' + ia_vz +
    '&vv=' + ia_vv +
    '&po=' + ia_po +
    '&c1=' + ia_c1 +
    '&c2=' + ia_c2 +
    '&c3=' + ia_c3 +
    '&c4=' + ia_c4 +
    '&pi=' + ia_pi +
    '&rand=' + ia_rand;

  var script = document.createElement("script");
  script.src = ia_link;
  document.getElementsByTagName("head")[0].appendChild(script);


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
