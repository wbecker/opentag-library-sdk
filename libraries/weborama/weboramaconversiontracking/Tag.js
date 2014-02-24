//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("weborama.weboramaconversiontracking.Tag", {
	config: {
		/*DATA*/
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
			name: "Client Id",
			description: "Set your client id here",
			token: "CLIENT_ID",
			uv: ""
		},
		{
			name: "Amount",
			description: "Set total price here",
			token: "AMOUNT",
			uv: "universal_variable.transaction.total"
		},
		{
			name: "Invoice Id",
			description: "set your invoice id or order Id",
			token: "ORDERID",
			uv: "universal_variable.transaction.order_id"
		},
		{
			name: "Quantity",
			description: "Number of items purchased",
			token: "PRODUCT_IDS",
			uv: "universal_variable.transaction.line_items[#].product.id"
		},
		{
			name: "Existing Client?",
			description: "set to 1 if the client is known",
			token: "IS_CLIENT",
			uv: "universal_variable.user.returning"
		},
		{
			name: "Optional 1",
			description: "Optional value. Set to empty string if not used.",
			token: "OPTIONAL1",
			uv: ""
		},
		{
			name: "Optional 2",
			description: "Set to empty string if no value",
			token: "OPTIONAL2",
			uv: ""
		},
		{
			name: "Customer Name",
			description: "Set to Customer Name",
			token: "CUSTOMER_NAME",
			uv: "universal_variable.user.name"
		},
		{
			name: "Host of the server",
			description: "Where should the server calls be made to",
			token: "HOST",
			uv: ""
		},
		{
			name: "Site",
			description: "Site type, numerical value",
			token: "SITE",
			uv: ""
		},
		{
			name: "Conversion Page",
			description: "Conversion Page type, numerical value",
			token: "CONVERSION_PAGE",
			uv: ""
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
		/*~PRE*/
	},
	post: function() {
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
