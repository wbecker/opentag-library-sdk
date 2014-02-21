//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("nextag.ConfirmationTag", {
    config: {/*DATA*/
	id: 26162,
	name: "Confirmation Tag",
	async: true,
	description: "ROI Tag without product details",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/NexTag.png",
	locationDetail: "",
	priv: false,
	url: "imgsrv.nextag.com/imagefiles/includes/roitrack.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 25665,
		name: "NexTag ID",
		description: "",
		token: "nextag_id",
		uv: ""
	},
	{
		id: 25666,
		name: "Order Total",
		description: "",
		token: "order_total",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 25667,
		name: "Order ID",
		description: "",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
window.id = '' + this.getValueForToken("nextag_id") + '';
window.rev = '' + this.getValueForToken("order_total") + '';
window.order = '' + this.getValueForToken("order_id") + '';
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
