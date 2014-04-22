//:include tagsdk-current.js
var version = "";
var classPath = "igodigital.igodigitalobservation" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "iGoDigital Observation",
		async: true,
		description: "Monitors the behavior of your website traffic, including user activity, intent, and outcome.",
		html: "<div id=“igdRTA”>\n 	\n           	\n</div>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/iGoDigital.png",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "rtaRetailer",
			description: "The unique client name provided by iGoDigital set on every page",
			token: "rtaRetailer",
			uv: ""
		}, {
			name: "rtaProductSKU",
			description: "Represents product SkuIDs that are being shown or recommended to the customer, such as on a product",
			token: "rtaProductSKU",
			uv: ""
		}, {
			name: "rtaCart",
			description: "Contain the entire list of SkuIDs in the customer's cart.",
			token: "rtaCart",
			uv: "universal_variable.basket.line_items[#].product.sku_code"
		}, {
			name: "rtaEmail",
			description: "This variable should be sent with the user’s email address.",
			token: "rtaEmail",
			uv: "universal_variable.user.email"
		}, {
			name: "rtaUniqueId",
			description: "Unique customer identifier is used to attach actions to the user's personal profile when no email",
			token: "rtaUniqueId",
			uv: "universal_variable.user.user_id"
		}, {
			name: "rtaConvertCart",
			description: "This is a value that should be set to “1” on the confirmation page of the order checkout process.",
			token: "rtaConvertCart",
			uv: ""
		}, {
			name: "rtaOrderNum",
			description: "This is a value that should contain the customer’s order number once a conversion event occurs.",
			token: "rtaOrderNum",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "rtaCartAmounts",
			description: "the entire list of unit prices corresponding to the cart list in the rtaCart variable.",
			token: "rtaCartAmounts",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "rtaCartQuantities",
			description: "contain the quantities of each corresponding SKU in rtaCart above",
			token: "rtaCartQuantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "rtaReportingSegment",
			description: "This is an optional value that can contain a text string to classify the click traffic for this page",
			token: "rtaReportingSegment",
			uv: ""
		}, {
			name: "rtaRating",
			description: "A numerical representation of the product rating provided by user",
			token: "rtaRating",
			uv: ""
		}, {
			name: "rtaSearch",
			description: "This variable is used to hold search terms.",
			token: "rtaSearch",
			uv: ""
		}, {
			name: "rtaCategory",
			description: "This variable should be sent on each category and subcategory page.",
			token: "rtaCategory",
			uv: "universal_variable.page.type"
		}, {
			name: "rtaSpecial",
			description: "can be set to “ownit” which will allow us to set a product as being owned by a given customer",
			token: "rtaSpecial",
			uv: ""
		}, {
			name: "rtaTags",
			description: "can be used together with rtaSpecial to store relevant information to the user’s personal profile.",
			token: "rtaTags",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/


		// iGoDigital RTA Initialization
		var rtaRetailer = “this.valueForToken("rtaRetailer")”;
		var rtaProductSKU = “this.valueForToken("rtaProductSKU")“;
		var rtaCart = “this.valueForToken("rtaCart")“;
		var rtaCartSku = “this.valueForToken("rtaEmail")“;
		var rtaEmail = “this.valueForToken("rtaUniqueId")“;
		var rtaConvertCart = “this.valueForToken("rtaConvertCart")“;
		var rtaOrderNum = “this.valueForToken("rtaOrderNum")“;
		var rtaCartAmounts = “this.valueForToken("rtaCartAmounts")“;
		var rtaCartQuantities = “this.valueForToken("rtaCartQuantities")“;
		var rtaReportingSegment1 = “this.valueForToken("rtaReportingSegment")“;
		var rtaReportingSegment2 = ““;
		var rtaRating = “this.valueForToken("rtaRating")“;
		var rtaSearch = “this.valueForToken("rtaSearch")“;
		var rtaCategory = “this.valueForToken("rtaCategory")“;
		var rtaTags = “this.valueForToken("rtaTags")“;
		var rtaSpecial = “this.valueForToken("rtaSpecial")“;
		addLoadEvent(function() {
			callRTA();
		});

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