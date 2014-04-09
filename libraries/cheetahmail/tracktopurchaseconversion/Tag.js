//:include tagsdk-current.js
var version = "";
var classPath = "cheetahmail.tracktopurchaseconversion.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Track-to-Purchase Conversion",
		async: true,
		description: "Track-to-purchase reporting is typically used by clients that utilize e-commerce components to track conversions on their site resulting from an email campaign sent through CheetahMail.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/cheetahmail.png",
		locationDetail: "",
		isPrivate: false,
		url: "//${domain}/a/r${affiliate_ids}/${client}.gif?a=${order_id}&b=${order_total}&c=${cust1}&d=${cust2}&e=${cust3}",
		usesDocWrite: false,
		parameters: [{
			name: "Client Domain",
			description: "Client domain hosted by CheetahMail",
			token: "domain",
			uv: ""
		}, {
			name: "Affiliate IDs",
			description: "Affiliate ID used to send mailings to be tracked (up to 10 IDs separated by '.' eg 11111.2222.33333)",
			token: "affiliate_ids",
			uv: ""
		}, {
			name: "Client Name",
			description: "Short alphanumeric name, usually an abbreviation of the client name",
			token: "client",
			uv: ""
		}, {
			name: "Order ID",
			description: "Code to uniquely identify each transaction (1st parameter)",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Order Total",
			description: "Total spent on each transaction. MUST BE A NUMBER - '.' is okay, ',' is bad",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Custom Value 1",
			description: "Any client specific data to be associated with each transaction - numbers only",
			token: "cust1",
			uv: ""
		}, {
			name: "Custom Value 2",
			description: "Any client specific data to be associated with each transaction - numbers only",
			token: "cust2",
			uv: ""
		}, {
			name: "Custom Value 3",
			description: "Any client specific data to be associated with each transaction - numbers only",
			token: "cust3",
			uv: ""
		}]
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
		/*~POST*/
	}
});