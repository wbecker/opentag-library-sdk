//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("peerius.productpagewithsmartrecs.v1.Tag", {
	config: {
		/*DATA*/
		name: "Product Page (with SmartRecs)",
		async: true,
		description: "Peerius tag for the product pages. SmartRecs uses the global function renderRecsProduct, which needs to be defined on the window.",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "${client_name}.peerius.com/tracker/peerius.page",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Peerius Client Name",
			description: "The client name given to you from Peerius",
			token: "client_name",
			uv: ""
		}, {
			name: "Peerius Language",
			description: "The language for the product page view",
			token: "peerius_language",
			uv: "universal_variable.user.language"
		}, {
			name: "Peerius Product ID",
			description: "The product ID for the current product page view",
			token: "peerius_product_id",
			uv: "universal_variable.product.id"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		window.PeeriusCallbacks = {
			track: {
				type: "product",
				lang: "" + this.valueForToken("peerius_language"),
				product: {
					refCode: "" + this.valueForToken("peerius_product_id")
				}
			},
			smartRecs: function(jsonData) {
				if (window.renderRecsProduct) {
					window.renderRecsProduct(jsonData);
				}
			}
		}

		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});