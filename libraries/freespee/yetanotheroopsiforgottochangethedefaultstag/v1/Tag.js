//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"freespee.yetanotheroopsiforgottochangethedefaultstag.v1.Tag", {
		config: {
			/*DATA*/
			name: "Yet another \"oops I forgot to change the defaults\" tag",
			async: true,
			description: "The transaction ID is required on the Confirmation page along with extra information such as currency, amounts, quantities, checkout total and product IDs. Now includes optional user ID support",
			html: "",
			imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/sociomantic.jpg",
			locationDetail: "",
			isPrivate: true,
			url: "eu-sonar.sociomantic.com/js/2010-07-01/adpan/${advertiserid}",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [

			]
			/*~DATA*/
		},
		script: function() {
			/*SCRIPT*/
			/*~SCRIPT*/
		},
		pre: function() {
			/*PRE*/
			window.basket = {
				products: []
			};

			for (var i = 0, ii = this.valueForToken("product_ids").length; i < ii; i++) {
				basket.products.push({
					identifier: this.valueForToken("product_ids")[i],
					amount: this.valueForToken("amounts")[i],
					currency: '' + this.valueForToken("currency"),
					quantity: this.valueForToken("quantities")[i]
				});
			}

			basket.transaction = '' + this.valueForToken("transaction_id");
			basket.amount = '' + this.valueForToken("checkout_total");
			basket.currency = '' + this.valueForToken("currency");
			window.basket = basket;

			//Allows for custom scripts altering the customer object. Skipped over if user_id is false-like
			var uid = this.valueForToken("user_id");
			if (uid) {
				var customer = window.customer || {};
				customer.identifier = uid;
			}

			/*~PRE*/
		},
		post: function() {
			/*POST*/
			/*~POST*/
		}
	});