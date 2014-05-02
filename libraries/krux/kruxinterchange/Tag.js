//:include tagsdk-current.js
var tagVersion = "";
var classPath = "krux.kruxinterchange" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Krux Interchange",
		async: true,
		description: "Leverage data to inform first party targeting of advertising, content, or commerce on your own web properties",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Krux.png",
		locationDetail: "",
		isPrivate: false,
		url: "http://cdn.krxd.net/krux.js",
		usesDocWrite: false,
		parameters: [{
			name: "Publisher Id",
			description: "Your unique publisher id",
			token: "publisher_id",
			uv: ""
		}, {
			name: "Site Domain",
			description: "The domain of your site",
			token: "site_url",
			uv: ""
		}, {
			name: "Page Section",
			description: "The section of your website that the tag is being loaded on - this may change from page to page",
			token: "section",
			uv: "universal_variable.page.category"
		}, {
			name: "Page Sub-section",
			description: "The subsection of the site that is being shown",
			token: "subsection",
			uv: "universal_variable.page.subcategory"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		window.KRUXSetup = {
			pubid: "" + this.valueForToken("publisher_id"),
			site: "" + this.valueForToken("site_url"),
			section: "" + this.valueForToken("section"),
			subSection: "" + this.valueForToken("subsection"),
			async: true
		};
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});