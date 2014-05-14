//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"googleanalytics.localcurrencysettingdependency.v0.Tag", {
		config: {
			/*DATA*/
			name: "Local Currency Setting (Dependency)",
			async: true,
			description: "Allows setting of a currency for the current transaction, which Google will automatically convert to the account's currency using an estimated exchange rate for reports. If used, this tag MUST be set as a dependency for the associated ecommerce tag.",
			html: "",
			imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/GoogleAnalytics.png",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			parameters: [{
				name: "Local Currency",
				description: "The currency code for the transaction's payment, eg 'GBP', 'EUR', or 'USD'",
				token: "currency",
				uv: "universal_variable.transaction.currency"
			}]
			/*~DATA*/
		},
		script: function() {
			/*SCRIPT*/

			window._gaq = window._gaq || [];
			_gaq.push(['_set', 'currencyCode', '' + this.valueForToken("currency")]);

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
