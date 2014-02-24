//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("affilinet.normaltrackingpixel.Tag", {
    config: {/*DATA*/
	id: 34667,
	name: "Normal Tracking Pixel",
	async: true,
	description: "",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/affilinet.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 33722,
		name: "Program ID",
		description: "Program ID is fixed and defined by the platform when the advertiser is setup",
		token: "program_id",
		uv: ""
	},
	{
		id: 33723,
		name: "Mode",
		description: "Mode is either pps (record a commission by % of order) or ppl (record a fixed rate commission)",
		token: "mode",
		uv: ""
	},
	{
		id: 33724,
		name: "Ltype",
		description: "Ltype number is  the rate ID on our system, i.e. rate 1 could be 5% of order value rate 2 could be",
		token: "type",
		uv: ""
	},
	{
		id: 33725,
		name: "Subtotal",
		description: "",
		token: "subtotal",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 33726,
		name: "Order ID",
		description: "",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 33727,
		name: "Currency",
		description: "",
		token: "currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 33728,
		name: "Voucher Code",
		description: "",
		token: "voucher_code",
		uv: "universal_variable.transaction.voucher"
	},
	{
		id: 33729,
		name: "Domain",
		description: "Affilinet domain, excluding https:// and http://",
		token: "domain",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

(function() {

 var src = "//" + this.getValueForToken("domain") + "/registersale.asp"
         + "?site=" + this.getValueForToken("program_id") + ""
         + "&mode=" + this.getValueForToken("mode") + ""
         + "&ltype=" + this.getValueForToken("type") + ""
         + "&price=" + this.getValueForToken("subtotal") + ""
         + "&order=" + this.getValueForToken("order_id") + ""
         + "&curr=" + this.getValueForToken("currency") + ""
         + "&vcode=" + this.getValueForToken("voucher_code") + "";

 var image = new Image();
 image.src = src;

}());


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
