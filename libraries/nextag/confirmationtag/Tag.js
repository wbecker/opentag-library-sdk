//:include tagsdk-current.js
var tagVersion = "";
var classPath = "nextag.confirmationtag" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Confirmation Tag",
		async: true,
		description: "ROI Tag without product details",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/NexTag.png",
		locationDetail: "",
		isPrivate: false,
		url: "imgsrv.nextag.com/imagefiles/includes/roitrack.js",
		usesDocWrite: false,
		parameters: [{
			name: "NexTag ID",
			description: "",
			token: "nextag_id",
			uv: ""
		}, {
			name: "Order Total",
			description: "",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		window.id = '' + this.valueForToken("nextag_id");
		window.rev = '' + this.valueForToken("order_total");
		window.order = '' + this.valueForToken("order_id");

		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});