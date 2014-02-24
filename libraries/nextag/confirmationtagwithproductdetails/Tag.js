//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("nextag.confirmationtagwithproductdetails.Tag", {
    config: {/*DATA*/
	id: 35183,
	name: "Confirmation Tag with product details",
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
		id: 34321,
		name: "Nextag ID",
		description: "",
		token: "nextag_id",
		uv: ""
	},
	{
		id: 34322,
		name: "Order Sub-Total",
		description: "",
		token: "order_subtotal",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 34323,
		name: "Order ID",
		description: "",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 34324,
		name: "Product Categories",
		description: "",
		token: "cats",
		uv: "universal_variable.transaction.line_items[#].product.category"
	},
	{
		id: 34325,
		name: "Product Names",
		description: "",
		token: "names",
		uv: "universal_variable.transaction.line_items[#].product.name"
	},
	{
		id: 34326,
		name: "Product Quantities",
		description: "",
		token: "quantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
(function () {

  var cats = [], prods = [], units = [];

  for (var i = 0, ii = this.getValueForToken("names").length; i < ii; i++) {
    cats.push(this.getValueForToken("cats")[i]);
    prods.push(this.getValueForToken("names")[i]);
    units.push(this.getValueForToken("quantities")[i]);
  }

  window.id = '' + this.getValueForToken("nextag_id") + '';
  window.rev = '' + this.getValueForToken("order_subtotal") + '';
  window.order = '' + this.getValueForToken("order_id") + '';
  window.cats = cats.join("|");
  window.prods = prods.join("|");
  window.units = units.join("|");

}());
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
