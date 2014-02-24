//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("pricegrabber.thankyoupagesurvey.Tag", {
    config: {
      /*DATA*/
	id: 35181,
	name: "Thank You Page Survey",
	async: true,
	description: "Adjust the values of popup_pos_x, popup_pos_y to change the location of the popup layer on your confirmation page",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/price_grabber.png",
	locationDetail: "",
	priv: false,
	url: "https://www.pricegrabber.com/rating_merchrevpopjs.php?retid=${account_number}",
	usesDocWrite: false,
	parameters: [
	{
		id: 34310,
		name: "PriceGrabber Account Number",
		description: "",
		token: "account_number",
		uv: ""
	},
	{
		id: 34311,
		name: "PriceGrabber Popup X",
		description: "",
		token: "x",
		uv: ""
	},
	{
		id: 34312,
		name: "PriceGrabber Popup Y",
		description: "",
		token: "y",
		uv: ""
	},
	{
		id: 34313,
		name: "Order ID",
		description: "",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 34314,
		name: "PriceGrabber Popup Email",
		description: "",
		token: "email",
		uv: "universal_variable.user.email"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/
      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
window.popup_pos_x = Number("" + this.getValueForToken("x") + "");
window.popup_pos_y = Number("" + this.getValueForToken("y") + "");

window.popup_order_number = "" + this.getValueForToken("order_id") + "";
window.popup_email = "" + this.getValueForToken("email") + "";
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
