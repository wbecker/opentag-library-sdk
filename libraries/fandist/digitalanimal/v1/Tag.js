//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("fandist.digitalanimal.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "Digital Animal",
		async: true,
		description: "This will enable fandi.st to show you what impact your Campaigns are having on your site.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Fandi.st Client ID",
			description: "The ID relating the script to you",
			token: "client_id",
			uv: ""
		}]
		/*~DATA*/
		};
	},
	script: function() {
		/*SCRIPT*/
		var uv = window.universal_variable || {};
		var src = "//a.fandi.st/pixel.gif?acc=" + this.valueForToken("client_id") +
			"&camp=1&d=" + window.encodeURIComponent(JSON.stringify(uv));
		var fandImage = new Image();
		fandImage.src = src;
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});