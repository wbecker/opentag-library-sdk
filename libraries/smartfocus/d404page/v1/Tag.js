//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("smartfocus.d404page.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "404 Page",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "js.advisor.smartfocus.com/advisor.min.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "div ID or Class",
			description: "div ID or Class",
			token: "selector",
			uv: ""
		}, {
			name: "Title",
			description: "e.g. Recommendations for You",
			token: "title",
			uv: ""
		}]
		/*~DATA*/
		};
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		window._advisorq = window._advisorq || [];
		_advisorq.push({
			_404page: {}
		});

		window._advisorq.push({
			_suggest: {
				code: "404",
				layout: {
					selector: "" + this.valueForToken("selector"),
					title: "" + this.valueForToken("title")
				}
			}
		});
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});