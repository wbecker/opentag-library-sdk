//:include tagsdk-current.js
var version = "";
var classPath = "googleanalytics.googleanalyticsecommercecustomdomainsonlyrequiredparameters.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Google Analytics Ecommerce - Custom Domains, only required parameters",
		async: true,
		description: "Ecommerce tracking with basic parameters, custom domains, and setAllowLinker set to true.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/GoogleAnalytics.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "GA Profile ID",
			description: "",
			token: "profile_id",
			uv: ""
		}, {
			name: "GA Domain Name",
			description: "",
			token: "domain_name",
			uv: ""
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Item SKUs",
			description: "",
			token: "item_skus",
			uv: "universal_variable.transaction.line_items[#].product.sku_code"
		}, {
			name: "Item Names",
			description: "",
			token: "item_names",
			uv: "universal_variable.transaction.line_items[#].product.name"
		}, {
			name: "Item Unit Prices",
			description: "",
			token: "item_unit_prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_price"
		}, {
			name: "Item Quantities",
			description: "",
			token: "item_quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Order Total",
			description: "",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		(function() {
			window._gaq = window._gaq || [];
			_gaq.push(['_setAccount', '' + this.valueForToken("profile_id") + '']);
			_gaq.push(['_setDomainName', '' + this.valueForToken("domain_name") + '']);
			_gaq.push(['_setAllowLinker', true]);
			_gaq.push(['_trackPageview']);
			_gaq.push(['_addTrans',
				'' + this.valueForToken("order_id") + '',
				'',
				'' + this.valueForToken("order_total") + '',
				'',
				'',
				'',
				'',
				''
			]);
			var i, ii;
			for (i = 0, ii = this.valueForToken("item_skus").length; i < ii; i += 1) {
				_gaq.push(['_addItem',
					'' + this.valueForToken("order_id") + '',
					this.valueForToken("item_skus")[i],
					this.valueForToken("item_names")[i],
					'',
					this.valueForToken("item_unit_prices")[i],
					this.valueForToken("item_quantities")[i]
				]);
			}
			_gaq.push(['_trackTrans']);

			var ga = document.createElement('script');
			ga.type = 'text/javascript';
			ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(ga, s);
		})();

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