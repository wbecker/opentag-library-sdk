//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("weborama.weboramawreport.Tag", {
	config: {
		/*DATA*/
		name: "Weborama - WReport",
		async: true,
		description: "This tag is typically placed on all pages of a site and is used for web analytics.",
		html: "",
		imageUrl: "http://www.weborama.com/files/2012/02/Logo.jpg",
		locationDetail: "",
		isPrivate: false,
		url: "${SOURCE_URL}",
		usesDocWrite: false,
		parameters: [
		{
			name: "WRP_ID",
			description: "Site Id",
			token: "WRP_ID",
			uv: ""
		},
		{
			name: "WRP_SECTION",
			description: "Site Section",
			token: "SECTION",
			uv: ""
		},
		{
			name: "WRP_SUBSECTION",
			description: "Site subsection",
			token: "SUBSECTION",
			uv: ""
		},
		{
			name: "Source URL",
			description: "Please put the full URL of the script here www.domain.com/path/to/script.js without http or https://",
			token: "SOURCE_URL",
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
var WRP_ID= this.valueForToken("WRP_ID");
var WRP_SECTION='' + this.valueForToken("SECTION") + '';
var WRP_SUBSECTION='' + this.valueForToken("SUBSECTION") + '';
wreport_ok=0;

/* Profondeur Frame */
var WRP_ACC;
		/*~PRE*/
	},
	post: function() {
		/*POST*/
if(wreport_ok==1){ var w_counter = new wreport_counter(WRP_SECTION, WRP_SUBSECTION, WRP_ID, WRP_ACC);
w_counter.count();}
		/*~POST*/
	}
});
