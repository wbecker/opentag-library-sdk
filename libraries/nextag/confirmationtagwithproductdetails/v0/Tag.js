//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("nextag.confirmationtagwithproductdetails.v0.Tag", {
	config: {
		/*DATA*/
		name: "Confirmation Tag with product details",
		async: true,
		description: "ROI Tag without product details",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/NexTag.png",
		locationDetail: "",
		isPrivate: false,
		url: "imgsrv.nextag.com/imagefiles/includes/roitrack.js",
		usesDocWrite: false,
		parameters: [{
			name: "Nextag ID",
			description: "",
			token: "nextag_id",
			uv: ""
		}, {
			name: "Order Sub-Total",
			description: "",
			token: "order_subtotal",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Product Categories",
			description: "",
			token: "cats",
			uv: "universal_variable.transaction.line_items[#].product.category"
		}, {
			name: "Product Names",
			description: "",
			token: "names",
			uv: "universal_variable.transaction.line_items[#].product.name"
		}, {
			name: "Product Quantities",
			description: "",
			token: "quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/

		var cats = [],
			prods = [],
			units = [];

		for (var i = 0, ii = this.valueForToken("names").length; i < ii; i++) {
			cats.push(this.valueForToken("cats")[i]);
			prods.push(this.valueForToken("names")[i]);
			units.push(this.valueForToken("quantities")[i]);
		}

		window.id = '' + this.valueForToken("nextag_id");
		window.rev = '' + this.valueForToken("order_subtotal");
		window.order = '' + this.valueForToken("order_id");
		window.cats = cats.join("|");
		window.prods = prods.join("|");
		window.units = units.join("|");


		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});
