//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("adobesitecatalyst.sitecatalystpagetag.Tag", {
	config: {
		/*DATA*/
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
			name: "Omniture S Code URL",
			description: "The custom s_code.js provided to you should be hosted on your server e.g. abc.com/scripts/s_code.js",
			token: "scriptURL",
			uv: ""
		},
		{
			name: "Page Name",
			description: "",
			token: "page_name",
			uv: "universal_variable.page.subcategory"
		},
		{
			name: "Omniture Server Address",
			description: "Server used for Omniture analytics",
			token: "server",
			uv: ""
		},
		{
			name: "Page Type",
			description: "",
			token: "page_type",
			uv: "universal_variable.page.category"
		},
		{
			name: "Omniture Events",
			description: "",
			token: "events",
			uv: ""
		},
		{
			name: "Prop 1",
			description: "",
			token: "prop1",
			uv: ""
		},
		{
			name: "Prop 2",
			description: "",
			token: "prop2",
			uv: ""
		},
		{
			name: "Prop 3",
			description: "",
			token: "prop3",
			uv: ""
		},
		{
			name: "Prop 4",
			description: "",
			token: "prop4",
			uv: ""
		},
		{
			name: "Prop 5",
			description: "",
			token: "prop5",
			uv: ""
		},
		{
			name: "Omniture Channel",
			description: "",
			token: "channel",
			uv: "universal_variable.page.category"
		},
		{
			name: "eVar 1",
			description: "",
			token: "evar1",
			uv: ""
		},
		{
			name: "eVar 2",
			description: "",
			token: "evar2",
			uv: ""
		},
		{
			name: "eVar 3",
			description: "",
			token: "evar3",
			uv: ""
		},
		{
			name: "eVar 4",
			description: "",
			token: "evar4",
			uv: ""
		},
		{
			name: "eVar 5",
			description: "",
			token: "evar5",
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
