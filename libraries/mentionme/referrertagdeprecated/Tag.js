//:include tagsdk-current.js
var tagVersion = "";
var classPath = "mentionme.referrertagdeprecated" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Referrer Tag [Deprecated]",
		async: true,
		description: "The implementation can be either as a modal popup or embedded in the page using an iFrame, both of which lead to a popup where the customer can register to become a referrer. If the client requires, they can set the implementation parameter to 'embed', in which case the content is loaded into an iframe within the page. This is inserted within a DIV <div id=\"mmWrapper\"></div> which should be on the page.\n\nAll parameters marked with * are optional (if not used populate with empty hardcoded value, even if default is 'uses universal variable')",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/MentionMe.png",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Email",
			description: "The customer's email address e.g. waldosmith@mention-me.com",
			token: "email",
			uv: "universal_variable.user.email"
		}, {
			name: "Order Number",
			description: "The unique order identifier from your system e.g. 752109",
			token: "order_number",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Order Total",
			description: "The total amount of the order e.g. 102",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Order Currency",
			description: "The three character currency code that the order total is in, default is GBP",
			token: "order_currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Situation",
			description: "Where you are including this tag within your site (postpurchase, homepage, dashboard)",
			token: "situation",
			uv: ""
		}, {
			name: "Surname*",
			description: "The name of the customer (leave blank string \"\" if not used)",
			token: "surname",
			uv: "universal_variable.user.name"
		}, {
			name: "First name*",
			description: "The customer's firstname e.g. Waldo (leave blank string \"\" if not used)",
			token: "firstname",
			uv: ""
		}, {
			name: "Customer ID*",
			description: "The unique customer identifier from your system e.g. 374507 (leave blank string \"\" if not used)",
			token: "customer_id",
			uv: "universal_variable.user.user_id"
		}, {
			name: "Custom Field*",
			description: "Any piece of custom data you wish to pass to us (leave blank string \"\" if not used)",
			token: "custom_field",
			uv: ""
		}, {
			name: "Coupon Code*",
			description: "The coupon code used by the customer (leave blank string \"\" if not used)",
			token: "coupon_code",
			uv: "universal_variable.transaction.voucher"
		}, {
			name: "Address Line 1*",
			description: "The customer's address line 1 (leave blank string \"\" if not used)",
			token: "address_line1",
			uv: "universal_variable.transaction.billing.address"
		}, {
			name: "Address Line 2*",
			description: "The customer's address line 2 (leave blank string \"\" if not used)",
			token: "address_line2",
			uv: ""
		}, {
			name: "Address City*",
			description: "The customer's address city (leave blank string \"\" if not used)",
			token: "address_city",
			uv: "universal_variable.transaction.billing.city"
		}, {
			name: "Address County*",
			description: "The customer's address county (leave blank string \"\" if not used)",
			token: "address_county",
			uv: ""
		}, {
			name: "Address Postcode*",
			description: "The customer's address postcode (leave blank string \"\" if not used)",
			token: "address_postcode",
			uv: "universal_variable.transaction.billing.postcode"
		}, {
			name: "Address Country*",
			description: "The customer's address country",
			token: "address_country",
			uv: "universal_variable.transaction.billing.country"
		}, {
			name: "Partner Code",
			description: "The partner id given to you by MentionMe",
			token: "partner_code",
			uv: ""
		}, {
			name: "Script Domain",
			description: "Domain for the script: 'tag-demo.mention-me.com' for testing, 'tag.mention-me.com' for production",
			token: "domain",
			uv: ""
		}, {
			name: "Implementation*",
			description: "Override the way the flow is implemented ('embed' or 'popup'). Leave blank string \"\" if not used",
			token: "implementation",
			uv: ""
		}, {
			name: "Segment*",
			description: "String representing the customer segment ('new' or 'existing'). Used to select by user segment.",
			token: "segment",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		var baseUrl = "https://" + this.valueForToken("domain") +
			"/api/v2/referreroffer/" + this.valueForToken("partner_code") + "?";
		var paramArr = [];
		var paramObj = {
			email: "" + this.valueForToken("email"),
			order_number: "" + this.valueForToken("order_number"),
			order_date: dateTime(),
			order_total: "" + this.valueForToken("order_total"),
			order_currency: "" + this.valueForToken("order_currency"),
			situation: "" + this.valueForToken("situation")
		};

		if (("" + this.valueForToken("customer_id")).length)
			paramObj["customer_id"] = "" + this.valueForToken("customer_id");
		if (("" + this.valueForToken("custom_field")).length)
			paramObj["custom_field"] = "" + this.valueForToken("custom_field");
		if (("" + this.valueForToken("surname")).length)
			paramObj["surname"] = "" + this.valueForToken("surname");
		if (("" + this.valueForToken("firstname")).length)
			paramObj["firstname"] = "" + this.valueForToken("firstname");
		if (("" + this.valueForToken("coupon_code")).length)
			paramObj["coupon_code"] = "" + this.valueForToken("coupon_code");
		if (("" + this.valueForToken("address_line1")).length)
			paramObj["address_line1"] = "" + this.valueForToken("address_line1");
		if (("" + this.valueForToken("address_line2")).length)
			paramObj["address_line2"] = "" + this.valueForToken("address_line2");
		if (("" + this.valueForToken("address_city")).length)
			paramObj["address_city"] = "" + this.valueForToken("address_city");
		if (("" + this.valueForToken("address_postcode")).length)
			paramObj["address_postcode"] = "" + this.valueForToken("address_postcode");
		if (("" + this.valueForToken("address_country")).length)
			paramObj["address_country"] = "" + this.valueForToken("address_country");
		if (("" + this.valueForToken("address_county")).length)
			paramObj["address_county"] = "" + this.valueForToken("address_county");
		if (("" + this.valueForToken("implementation")).length)
			paramObj["implementation"] = "" + this.valueForToken("implementation");
		if (("" + this.valueForToken("segment")).length)
			paramObj["segment"] = "" + this.valueForToken("segment");

		for (var param in paramObj) {
			var value = paramObj[param];
			paramArr.push(param + "=" + escape(value));
		}

		var mmScript = document.createElement("script");
		mmScript.src = baseUrl + paramArr.join("&");
		document.body.appendChild(mmScript);

		function dateTime() {
			var date = new Date();
			var day = beginningZero(date.getUTCDay());
			var monthOffset = parseInt(date.getUTCMonth() + 1, 10);
			var month = beginningZero(monthOffset);
			var hours = beginningZero(date.getUTCHours());
			var minutes = beginningZero(date.getUTCMinutes());
			var seconds = beginningZero(date.getUTCSeconds());
			var time = hours + ":" + minutes + ":" + seconds + date.getUTCMilliseconds();
			return date.getUTCFullYear() + "-" + month + "-" + day + "GMT" + time;
		}

		function beginningZero(digit) {
			return (digit < 10) ? "0" + digit : "" + digit;
		}

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