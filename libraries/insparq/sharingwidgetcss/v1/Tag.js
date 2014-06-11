//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("insparq.sharingwidgetcss.v1.Tag", {
	config: {
		/*DATA*/
		name: "Sharing Widget - CSS",
		async: true,
		description: "Put these CSS links on every page",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "url",
			description: "URL Path to Sharing Widget CSS",
			token: "url",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
			var link = document.createElement('link');
			link.media = "all";
			link.rel = "stylesheet";
			link.type = "text/css";
			link.href = "//pinboard.insparq.com/assets/insparq.css";
			document.head.appendChild(link);

			link = document.createElement('link');
			link.media = "all";
			link.rel = "stylesheet";
			link.type = "text/css";
			link.href = this.valueForToken("url");
			document.head.appendChild(link);

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