//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("clicktale.clicktalebalkan.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "ClickTale - Balkan",
		async: true,
		description: "New Balkan version of ClickTale mouse tracking",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "${clicktale_url}",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "ClickTale URL",
			description: "Fill this dynamically with HTTPS or HTTP URL using JavaScript variable",
			token: "clicktale_url",
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
		window.WRInitTime = (new Date()).getTime();

		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});