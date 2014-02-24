//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("adobesitecatalyst.sitecatalystcustomtag.Tag", {
    config: {
      /*DATA*/
	id: 31659,
	name: "SiteCatalyst Custom Tag",
	async: true,
	description: "Generic script which can be configured to send up to 5 custom eVars and props. Any unused variables should be left blank. Advised only for advanced use.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/sitecatalyst.png",
	locationDetail: "",
	priv: false,
	url: "${scriptURL}",
	usesDocWrite: false,
	parameters: [
	{
		id: 30668,
		name: "Omniture S Code URL",
		description: "The custom s_code.js provided to you should be hosted on your server e.g. abc.com/scripts/s_code.js",
		token: "scriptURL",
		uv: ""
	},
	{
		id: 30669,
		name: "Page Name",
		description: "",
		token: "page_name",
		uv: ""
	},
	{
		id: 30670,
		name: "Omniture Server Address",
		description: "Server used for Omniture analytics",
		token: "server",
		uv: ""
	},
	{
		id: 30671,
		name: "Omniture Channel",
		description: "",
		token: "channel",
		uv: ""
	},
	{
		id: 30672,
		name: "Page Type",
		description: "",
		token: "page_type",
		uv: ""
	},
	{
		id: 30673,
		name: "Campaign Name",
		description: "",
		token: "campaign",
		uv: ""
	},
	{
		id: 30674,
		name: "Address - State",
		description: "",
		token: "state",
		uv: ""
	},
	{
		id: 30675,
		name: "Address - Zip Code",
		description: "",
		token: "zip",
		uv: ""
	},
	{
		id: 30676,
		name: "Omniture Events",
		description: "",
		token: "events",
		uv: ""
	},
	{
		id: 30677,
		name: "Product List",
		description: "",
		token: "products",
		uv: ""
	},
	{
		id: 30678,
		name: "Order ID",
		description: "",
		token: "purchase_id",
		uv: ""
	},
	{
		id: 30679,
		name: "Prop 1",
		description: "",
		token: "prop1",
		uv: ""
	},
	{
		id: 30680,
		name: "Prop 2",
		description: "",
		token: "prop2",
		uv: ""
	},
	{
		id: 30681,
		name: "Prop 3",
		description: "",
		token: "prop3",
		uv: ""
	},
	{
		id: 30682,
		name: "Prop 4",
		description: "",
		token: "prop4",
		uv: ""
	},
	{
		id: 30683,
		name: "Prop 5",
		description: "",
		token: "prop5",
		uv: ""
	},
	{
		id: 30684,
		name: "eVar 1",
		description: "",
		token: "evar1",
		uv: ""
	},
	{
		id: 30685,
		name: "eVar 2",
		description: "",
		token: "evar2",
		uv: ""
	},
	{
		id: 30686,
		name: "eVar 3",
		description: "",
		token: "evar3",
		uv: ""
	},
	{
		id: 30687,
		name: "eVar 4",
		description: "",
		token: "evar4",
		uv: ""
	},
	{
		id: 30688,
		name: "eVar 5",
		description: "",
		token: "evar5",
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
var s = window.s;

s.pageName = "" + this.getValueForToken("page_name") + "";
s.server = "" + this.getValueForToken("server") + "";
s.channel = "" + this.getValueForToken("channel") + "";
s.pageType = "" + this.getValueForToken("page_type") + "";
s.prop1 = "" + this.getValueForToken("prop1") + "";
s.prop2 = "" + this.getValueForToken("prop2") + "";
s.prop3 = "" + this.getValueForToken("prop3") + "";
s.prop4 = "" + this.getValueForToken("prop4") + "";
s.prop5 = "" + this.getValueForToken("prop5") + "";

/* Conversion Variables */
s.campaign = "" + this.getValueForToken("campaign") + "";
s.state = "" + this.getValueForToken("state") + "";
s.zip = "" + this.getValueForToken("zip") + "";
s.events = "" + this.getValueForToken("events") + "";
s.products = "" + this.getValueForToken("products") + "";
s.purchaseID = "" + this.getValueForToken("purchase_id") + "";
s.eVar1 = "" + this.getValueForToken("evar1") + "";
s.eVar2 = "" + this.getValueForToken("evar2") + "";
s.eVar3 = "" + this.getValueForToken("evar3") + "";
s.eVar4 = "" + this.getValueForToken("evar4") + "";
s.eVar5 = "" + this.getValueForToken("evar5") + "";

window.s_code = s.t();
      /*~POST*/
    }
});
