//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("weborama.WeboramaWReport", {
    config: {/*DATA*/
	id: 29670,
	name: "Weborama - WReport",
	async: true,
	description: "This tag is typically placed on all pages of a site and is used for web analytics.",
	html: "",
	imageUrl: "http://www.weborama.com/files/2012/02/Logo.jpg",
	locationDetail: "",
	priv: false,
	url: "${SOURCE_URL}",
	usesDocWrite: false,
	parameters: [
	{
		id: 28732,
		name: "WRP_ID",
		description: "Site Id",
		token: "WRP_ID",
		uv: ""
	},
	{
		id: 28733,
		name: "WRP_SECTION",
		description: "Site Section",
		token: "SECTION",
		uv: ""
	},
	{
		id: 28734,
		name: "WRP_SUBSECTION",
		description: "Site subsection",
		token: "SUBSECTION",
		uv: ""
	},
	{
		id: 28735,
		name: "Source URL",
		description: "Please put the full URL of the script here www.domain.com/path/to/script.js without http or https://",
		token: "SOURCE_URL",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
var WRP_ID= this.getValueForToken("WRP_ID");
var WRP_SECTION='' + this.getValueForToken("SECTION") + '';
var WRP_SUBSECTION='' + this.getValueForToken("SUBSECTION") + '';
wreport_ok=0;

/* Profondeur Frame */
var WRP_ACC;
    },/*~PRE*/
    post: function () {/*POST*/
if(wreport_ok==1){ var w_counter = new wreport_counter(WRP_SECTION, WRP_SUBSECTION, WRP_ID, WRP_ACC);
w_counter.count();}
    }/*~POST*/
});
