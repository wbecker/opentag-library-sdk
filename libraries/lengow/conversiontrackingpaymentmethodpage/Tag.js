//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"lengow.conversiontrackingpaymentmethodpage.Tag", {
		config: {
			/*DATA*/
			name: "Conversion Tracking - Payment Method Page",
			async: true,
			description: "To ensure that your sales are tracked and show up in the “Statistics” section of the Solution, you \nneed to implement a tracking tag. You can choose to implement a simple tag (Payment Method Page tag) or to implement a double tag (both the Payment Method Page & Confirmation page tags).\nIf you only place a simple tag, all sales will show up in your Statistics board, whether they have been \nconfirmed and validated by a bank or other payment method or not.\n\nWe recommend that you place this conversion tracking tag on the page of the choice of payment \nmethod.\n\nIf you do not have the order ID generated on your payment page, you can place this tracker on \nyour confirmation page.",
			html: "",
			imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/lengow_logo.jpg",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			parameters: [{
				name: "Lengow Customer ID",
				description: "(mandatory) Your Lengow customer ID (integer value)",
				token: "lengow_customer_id",
				uv: ""
			}, {
				name: "Lengow Group ID",
				description: "(mandatory) Your Lengow Group ID (integer value)",
				token: "lengow_group_id",
				uv: ""
			}, {
				name: "Lengow Order Value",
				description: "[mandatory] the order amount (float value e.g.1254.54)",
				token: "lengow_order_value",
				uv: "universal_variable.transaction.total"
			}, {
				name: "Lengow Order ID",
				description: "[mandatory] the order ID (integer value)",
				token: "lengow_order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Lengow Payment Method",
				description: "[optional] payment’s method (string value)",
				token: "lengow_payment_method",
				uv: "universal_variable.transaction.payment_type"
			}, {
				name: "Product Name List",
				description: "[optional] javascript array of purchased product names",
				token: "lengow_product_name_list",
				uv: "universal_variable.transaction.line_items[#].product.name"
			}]
			/*~DATA*/
		},
		script: function() {
			/*SCRIPT*/

			var lengowProductNamesString = "";

			for (var i = 0; i < this.valueForToken("lengow_product_name_list").length; i++) {
				lengowProductNamesString = lengowProductNamesString +
					this.valueForToken("lengow_product_name_list")[i];

				if (this.valueForToken("lengow_product_name_list").length !== 1 && i <
					this.valueForToken("lengow_product_name_list").length - 1) {
					lengowProductNamesString = lengowProductNamesString + "|";
				}
			}

			var lengowTrackPixel = new Image();

			lengowTrackPixel.src = "https://tracking.lengow.com/lead.php?idClient=" +
				this.valueForToken("lengow_customer_id") + "&idGroup=" +
				this.valueForToken("lengow_group_id") + "&price=" +
				this.valueForToken("lengow_order_value") + "&idCommande=" +
				this.valueForToken("lengow_order_id") + "&modePaiement=" +
				this.valueForToken("lengow_payment_method") + "&listingProduit=" +
				lengowProductNamesString;

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