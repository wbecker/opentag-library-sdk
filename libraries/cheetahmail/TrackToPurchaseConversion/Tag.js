//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("cheetahmail.TrackToPurchaseConversion", {
    config: {/*DATA*/
	id: 36175,
	name: "Track-to-Purchase Conversion",
	async: true,
	description: "Track-to-purchase reporting is typically used by clients that utilize e-commerce components to track conversions on their site resulting from an email campaign sent through CheetahMail.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/cheetahmail.png",
	locationDetail: "",
	priv: false,
	url: "//${domain}/a/r${affiliate_ids}/${client}.gif?a=${order_id}&b=${order_total}&c=${cust1}&d=${cust2}&e=${cust3}",
	usesDocWrite: false,
	parameters: [
	{
		id: 35242,
		name: "Client Domain",
		description: "Client domain hosted by CheetahMail",
		token: "domain",
		uv: ""
	},
	{
		id: 35243,
		name: "Affiliate IDs",
		description: "Affiliate ID used to send mailings to be tracked (up to 10 IDs separated by '.' eg 11111.2222.33333)",
		token: "affiliate_ids",
		uv: ""
	},
	{
		id: 35244,
		name: "Client Name",
		description: "Short alphanumeric name, usually an abbreviation of the client name",
		token: "client",
		uv: ""
	},
	{
		id: 35245,
		name: "Order ID",
		description: "Code to uniquely identify each transaction (1st parameter)",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 35246,
		name: "Order Total",
		description: "Total spent on each transaction. MUST BE A NUMBER - '.' is okay, ',' is bad",
		token: "order_total",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 35247,
		name: "Custom Value 1",
		description: "Any client specific data to be associated with each transaction - numbers only",
		token: "cust1",
		uv: ""
	},
	{
		id: 35248,
		name: "Custom Value 2",
		description: "Any client specific data to be associated with each transaction - numbers only",
		token: "cust2",
		uv: ""
	},
	{
		id: 35249,
		name: "Custom Value 3",
		description: "Any client specific data to be associated with each transaction - numbers only",
		token: "cust3",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
