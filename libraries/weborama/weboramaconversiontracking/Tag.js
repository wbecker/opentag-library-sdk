//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("weborama.weboramaconversiontracking.Tag", {
    config: {
      /*DATA*/
	id: 28157,
	name: "Weborama - Conversion Tracking",
	async: true,
	description: "Conversion tracking script",
	html: "",
	imageUrl: "http://www.weborama.com/files/2012/02/Logo.jpg",
	locationDetail: "",
	priv: false,
	url: "cstatic.weborama.fr/js/advertiserv2/adperf_conversion.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 27657,
		name: "Client Id",
		description: "Set your client id here",
		token: "CLIENT_ID",
		uv: ""
	},
	{
		id: 27658,
		name: "Amount",
		description: "Set total price here",
		token: "AMOUNT",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 27659,
		name: "Invoice Id",
		description: "set your invoice id or order Id",
		token: "ORDERID",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 27660,
		name: "Quantity",
		description: "Number of items purchased",
		token: "PRODUCT_IDS",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 27661,
		name: "Existing Client?",
		description: "set to 1 if the client is known",
		token: "IS_CLIENT",
		uv: "universal_variable.user.returning"
	},
	{
		id: 27662,
		name: "Optional 1",
		description: "Optional value. Set to empty string if not used.",
		token: "OPTIONAL1",
		uv: ""
	},
	{
		id: 27663,
		name: "Optional 2",
		description: "Set to empty string if no value",
		token: "OPTIONAL2",
		uv: ""
	},
	{
		id: 27664,
		name: "Customer Name",
		description: "Set to Customer Name",
		token: "CUSTOMER_NAME",
		uv: "universal_variable.user.name"
	},
	{
		id: 27665,
		name: "Host of the server",
		description: "Where should the server calls be made to",
		token: "HOST",
		uv: ""
	},
	{
		id: 27666,
		name: "Site",
		description: "Site type, numerical value",
		token: "SITE",
		uv: ""
	},
	{
		id: 27667,
		name: "Conversion Page",
		description: "Conversion Page type, numerical value",
		token: "CONVERSION_PAGE",
		uv: ""
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
      /*~PRE*/
    },
    post: function () {
      /*POST*/
var adperftrackobj = {
    client : "" + this.getValueForToken("CLIENT_ID") + "",
    amount : "" + this.getValueForToken("AMOUNT") + "",
    invoice_id : "" + this.getValueForToken("ORDERID") + "",
    quantity : this.getValueForToken("PRODUCT_IDS").length,
    is_client : this.getValueForToken("IS_CLIENT"),
    optional_parameters : {
        "N1" : "" + this.getValueForToken("OPTIONAL1") + "",
        "N2" : "" + this.getValueForToken("OPTIONAL2") + "",
        "customer_name" : "" + this.getValueForToken("CUSTOMER_NAME") + "" 
    },

    fullhost : '' + this.getValueForToken("HOST") + '',
    site : this.getValueForToken("SITE"),
    conversion_page : this.getValueForToken("CONVERSION_PAGE")
}
try{adperfTracker.track( adperftrackobj );}catch(err){}
      /*~POST*/
    }
});
