//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("lyris.clicktracksconfirmationpage.Tag", {
    config: {/*DATA*/
	id: 25657,
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
		id: 25157,
		name: "Click Tracks ID",
		description: "",
		token: "id",
		uv: ""
	},
	{
		id: 27690,
		name: "Order Total",
		description: "",
		token: "order_total",
		uv: "universal_variable.transaction.total"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
window.CT_C_OrderTotal = '' + this.getValueForToken("order_total") + '';
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
