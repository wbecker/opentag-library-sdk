//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("lodash.lodashnoconflict.Tag", {
    config: {
      /*DATA*/
	id: 35163,
	name: "Lodash NoConflict",
	async: true,
	description: "Load Lodash from a CDN in noConflict. Compat mode is loaded, so works in IE8.",
	html: "",
	imageUrl: "http://dummyimage.com/100x100/000/fff.png&text=Lodash",
	locationDetail: "",
	priv: false,
	url: "cdnjs.cloudflare.com/ajax/libs/lodash.js/${version}/lodash.compat.min.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 34166,
		name: "Version",
		description: "The version number you wish to use e.g. \"1.2.1\"",
		token: "version",
		uv: ""
	},
	{
		id: 34167,
		name: "NoConflict Key",
		description: "The window variable name you want to assign Lodash to. E.g. \"_noConflict\"",
		token: "key",
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
window.this.getValueForToken("key") = window._.noConflict();
      /*~POST*/
    }
});
