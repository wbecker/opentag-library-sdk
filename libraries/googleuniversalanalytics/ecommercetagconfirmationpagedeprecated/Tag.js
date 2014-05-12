//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"googleuniversalanalytics.ecommercetagconfirmationpagedeprecated.Tag", {
		config: {
			/*DATA*/
			name: "Ecommerce Tag - Confirmation Page [Deprecated]",
			async: true,
			description: "Ecommerce tracking allows you to measure the number of transactions and revenue that your website generates. Place this tag on a confirmation page only.",
			html: "",
			imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/GoogleAnalytics.png",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: false,
			parameters: [{
				name: "Web Property ID",
				description: "Google Analytics Web Property ID for the Google Web Property you wish to track",
				token: "web_property_id",
				uv: ""
			}, {
				name: "Order ID",
				description: "The order ID associated with this transaction",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Store Name",
				description: "The store or affiliation from which this transaction occurred - or just a custom string",
				token: "store_name",
				uv: ""
			}, {
				name: "Revenue",
				description: "Specifies the total revenue associated with the transaction. Should include shipping and tax",
				token: "revenue",
				uv: "universal_variable.transaction.total"
			}, {
				name: "Shipping Cost",
				description: "The value of the shipping charge associated with this order",
				token: "shipping",
				uv: "universal_variable.transaction.shipping_cost"
			}, {
				name: "Tax Value",
				description: "The amount of tax charged on this order",
				token: "tax",
				uv: "universal_variable.transaction.tax"
			}, {
				name: "Currency",
				description: "The currency which this transaction was paid in",
				token: "currency",
				uv: "universal_variable.transaction.currency"
			}, {
				name: "Item ID List",
				description: "An array containing the item IDs for each product in this order",
				token: "item_ids",
				uv: "universal_variable.transaction.line_items[#].product.id"
			}, {
				name: "Item Name List",
				description: "An array of names associated with each product in this order",
				token: "item_names",
				uv: "universal_variable.transaction.line_items[#].product.name"
			}, {
				name: "Item SKU List",
				description: "An array containing SKUs associated with each product in this order",
				token: "item_skus",
				uv: "universal_variable.transaction.line_items[#].product.sku_code"
			}, {
				name: "Item Category List",
				description: "An array containing the categories associated with each product in this order",
				token: "item_cats",
				uv: "universal_variable.transaction.line_items[#].product.category"
			}, {
				name: "Item Price List",
				description: "An array containing unit prices paid for each product in this order",
				token: "item_prices",
				uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
			}, {
				name: "Item Quantities List",
				description: "An array containing quantities associated with each product in this order",
				token: "item_quantities",
				uv: "universal_variable.transaction.line_items[#].quantity"
			}, {
				name: "Site URL",
				description: "Web site URL, without the 'www.'",
				token: "url",
				uv: ""
			}]
			/*~DATA*/
		},
		script: function() {
			/*SCRIPT*/

			(function(i, s, o, g, r, a, m) {
				i['GoogleAnalyticsObject'] = r;
				i[r] = i[r] || function() {
					(i[r].q = i[r].q || []).push(arguments)
				}, i[r].l = 1 * new Date();
				a = s.createElement(o),
				m = s.getElementsByTagName(o)[0];
				a.async = 1;
				a.src = g;
				m.parentNode.insertBefore(a, m)
			})(window, document, 'script', '//www.google-analytics.com/analytics.js',
				'ga');

			ga('create', '' + this.valueForToken("web_property_id"),
				'' + this.valueForToken("url"));
			ga('send', 'pageview');
			ga('require', 'ecommerce', 'ecommerce.js');

			ga('ecommerce:addTransaction', {
				'id': "" + this.valueForToken("order_id"), //Required
				'affiliation': "" + this.valueForToken("store_name"),
				'revenue': "" + this.valueForToken("revenue"),
				'shipping': "" + this.valueForToken("shipping"),
				'tax': "" + this.valueForToken("tax"),
				'currencyCode': "" + this.valueForToken("currency")
			});

			//Loop through transaction items. Don't pollute the globe!
			for (var i = 0; i < this.valueForToken("item_names").length; i++) {
				ga('ecommerce:addItem', {
					'id': "" + this.valueForToken("order_id"), //Required
					'name': String(this.valueForToken("item_names")[i]), //Required
					'sku': String(this.valueForToken("item_skus")[i]),
					'category': String(this.valueForToken("item_cats")[i]),
					'price': String(this.valueForToken("item_prices")[i]),
					'quantity': String(this.valueForToken("item_quantities")[i])
				});
			}

			ga('ecommerce:send');


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