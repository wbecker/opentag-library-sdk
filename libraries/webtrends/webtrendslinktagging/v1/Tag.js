//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("webtrends.webtrendslinktagging.v1.Tag", {
	config: {
		/*DATA*/
		name: "Webtrends link tagging",
		async: true,
		description: "Designed to replace inline on click tagging. Usually you'll want one tag per link tagged. Uses jQuery selectors, so jQuery is required to exist on the page.",
		html: "",
		imageUrl: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "jQuery name",
			description: "This tag requires jQuery. Input the variable jQuery is assigned to on the page.",
			token: "jquery_name",
			uv: ""
		}, {
			name: "jQuery selector",
			description: "The jQuery selector for the link you wish to tag. Learn about selectors here: http://bit.ly/1b6OPdn.",
			token: "selector",
			uv: ""
		}, {
			name: "Page title",
			description: "The title of the page being linked to.",
			token: "title",
			uv: ""
		}, {
			name: "URL path",
			description: "The URL path of the page being linked to, e.g. /about/contact",
			token: "url",
			uv: ""
		}, {
			name: "Type",
			description: "Used to identify different types of web activity with a numeric value. See http://bit.ly/194oAXH.",
			token: "type",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		var _this = this;

		var $ = window["" + _this.valueForToken("jquery_name")];

		$(document).ready(function() {
			$("" + _this.valueForToken("selector")).click(function() {
				Webtrends.multiTrack({
					element: this,
					argsa: [
						"WT.ti", "" + _this.valueForToken("title"),
						"DCS.dcsuri", "" + _this.valueForToken("url"),
						'WT.dl', "" + _this.valueForToken("type")
					]
				});
			});
		});


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