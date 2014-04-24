//:include tagsdk-current.js
var version = "";
var classPath = "adform.globaltrackingpointpageviewonly" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Global Tracking Point (Pageview only)",
		async: true,
		description: "Adform's Global Tracking Point is a tracking point which can be inserted on all your web pages automatically via your CMS. This solution is geared towards e-commerce platforms and other websites with a large number of pages to be tracked. This point provides only pageview tracking.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/adform.png",
		locationDetail: "",
		isPrivate: true,
		url: "//track.adform.net/serving/scripts/trackpoint/async/",
		usesDocWrite: false,
		parameters: [{
			name: "Page Name",
			description: "Unique name defining the page being viewed, without any url parameters.",
			token: "page_name",
			uv: ""
		}, {
			name: "Adform Campaign ID",
			description: "The campaign ID Adform has assigned to you.",
			token: "campaign_id",
			uv: ""
		}, {
			name: "Page Divider",
			description: "The token used to divide sections of the page name - '/' for urls, for example.",
			token: "divider",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		var adfname = '' + this.valueForToken("page_name") + '';
		var _adftrack = {
			pm: '' + this.valueForToken("campaign_id") + '',
			pagename: encodeURIComponent(adfname),
			divider: encodeURIComponent('' + this.valueForToken("divider") + '')
		};

		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});