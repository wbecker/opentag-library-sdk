//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("lyris.clicktracksconfirmationpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "Click Tracks Confirmation Page",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "stats2.clicktracks.com/cgi-bin/ctasp-server.cgi?i=${id}",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "Click Tracks ID",
			description: "",
			token: "id",
			uv: ""
		}, {
			name: "Order Total",
			description: "",
			token: "order_total",
			uv: "universal_variable.transaction.total"
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
		window.CT_C_OrderTotal = '' + this.valueForToken("order_total");
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});