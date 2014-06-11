//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("insparq.sharingwidgetbuttons.v1.Tag", {
	config: {
		/*DATA*/
		name: "Sharing Widget - Buttons",
		async: true,
		description: "On your product detail page template, place the following code where you would like to load the Sharing Widget buttons. This also enables the recipient popout coupon.",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "api.insparq.com/v2.0.0/widget/scripts/issw.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Client API Key",
			description: "Client API Key",
			token: "key",
			uv: ""
		}, {
			name: "jQuery Element Selector",
			description: "e.g. insertAfter(...)  ,  appendTo(...)  , insertBefore(....) etc.",
			token: "selector",
			uv: ""
		}, {
			name: "jQuery",
			description: "e,g, jQuery , $ , myJquery etc.",
			token: "jQuery",
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
		var html = '<div id="issw" data-issw-publisher-id="' +
				this.valueForToken("key") +
				'" data-issw-load-config="1" data-issw-page-mode="normal"></div>';
		//?
		this.valueForToken("jQuery")(html).this.valueForToken("selector");
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});