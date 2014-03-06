//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("lyris.clicktracksconfirmationpage.Tag", {
	config: {
		/*DATA*/
		name: "Click Tracks Confirmation Page",
		async: true,
		description: "",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/lyris.png",
		locationDetail: "",
		priv: false,
		url: "stats2.clicktracks.com/cgi-bin/ctasp-server.cgi?i=${id}",
		usesDocWrite: true,
		parameters: [
		{
			name: "Click Tracks ID",
			description: "",
			token: "id",
			uv: ""
		},
		{
			name: "Order Total",
			description: "",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
window.CT_C_OrderTotal = '' + this.getValueForToken("order_total") + '';
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});
