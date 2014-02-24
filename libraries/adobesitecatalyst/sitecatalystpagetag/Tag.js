//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("adobesitecatalyst.sitecatalystpagetag.Tag", {
    config: {
      /*DATA*/
	id: 32157,
	name: "SiteCatalyst Page Tag",
	async: true,
	description: "Tag to be added to any non-conversion page. Any unused variables should be left blank.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/sitecatalyst.jpg",
	locationDetail: "",
	priv: false,
	url: "${scriptURL}",
	usesDocWrite: false,
	parameters: [
	{
		id: 31157,
		name: "Omniture S Code URL",
		description: "The custom s_code.js provided to you should be hosted on your server e.g. abc.com/scripts/s_code.js",
		token: "scriptURL",
		uv: ""
	},
	{
		id: 31158,
		name: "Page Name",
		description: "",
		token: "page_name",
		uv: "universal_variable.page.subcategory"
	},
	{
		id: 31159,
		name: "Omniture Server Address",
		description: "Server used for Omniture analytics",
		token: "server",
		uv: ""
	},
	{
		id: 31160,
		name: "Page Type",
		description: "",
		token: "page_type",
		uv: "universal_variable.page.category"
	},
	{
		id: 31161,
		name: "Omniture Events",
		description: "",
		token: "events",
		uv: ""
	},
	{
		id: 31162,
		name: "Prop 1",
		description: "",
		token: "prop1",
		uv: ""
	},
	{
		id: 31163,
		name: "Prop 2",
		description: "",
		token: "prop2",
		uv: ""
	},
	{
		id: 31164,
		name: "Prop 3",
		description: "",
		token: "prop3",
		uv: ""
	},
	{
		id: 31165,
		name: "Prop 4",
		description: "",
		token: "prop4",
		uv: ""
	},
	{
		id: 31166,
		name: "Prop 5",
		description: "",
		token: "prop5",
		uv: ""
	},
	{
		id: 31167,
		name: "Omniture Channel",
		description: "",
		token: "channel",
		uv: "universal_variable.page.category"
	},
	{
		id: 31168,
		name: "eVar 1",
		description: "",
		token: "evar1",
		uv: ""
	},
	{
		id: 31169,
		name: "eVar 2",
		description: "",
		token: "evar2",
		uv: ""
	},
	{
		id: 31170,
		name: "eVar 3",
		description: "",
		token: "evar3",
		uv: ""
	},
	{
		id: 31171,
		name: "eVar 4",
		description: "",
		token: "evar4",
		uv: ""
	},
	{
		id: 31172,
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

s.events = "" + this.getValueForToken("events") + "";
s.eVar1 = "" + this.getValueForToken("evar1") + "";
s.eVar2 = "" + this.getValueForToken("evar2") + "";
s.eVar3 = "" + this.getValueForToken("evar3") + "";
s.eVar4 = "" + this.getValueForToken("evar4") + "";
s.eVar5 = "" + this.getValueForToken("evar5") + "";

window.s_code = s.t();
      /*~POST*/
    }
});
