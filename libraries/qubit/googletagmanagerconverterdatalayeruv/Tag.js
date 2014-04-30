//:include tagsdk-current.js
var version = "";
var classPath = "qubit.googletagmanagerconverterdatalayeruv" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Google Tag Manager Converter: dataLayer > UV",
		async: true,
		description: "Take the Google Tag Manager data layer and map it to UV.",
		html: "<!--@SRC@--><script type=\"text/javascript\">\n(function() {\n\n  var u = window.universal_variable = window.universal_variable || {};\n\n  var dataLayerOptions = {\n\n    from: \"dataLayer\",\n    fromType: \"gtm\",\n\n    // What we do with each variable\n    mappings: [\n\n      // Page\n      {\n        key: \"pageCategory\",\n        parent: \"page\",\n        action: function(value) {\n          value = (isArray(value)) ? value.join(\" - \") : value;\n          u.page.category = value;\n        }\n      },\n      {\n        key: \"pageSubCategory\",\n        parent: \"page\",\n        action: function(value) {\n          value = (isArray(value)) ? value.join(\" - \") : value;\n          u.page.subcategory = value;\n        }\n      },\n\n\n      // User\n      {\n        key: \"visitorId\",\n        parent: \"user\",\n        action: function (value) {\n          u.user.user_id = value;\n        }\n      },\n      {\n        key: \"visitorType\",\n        parent: \"user\",\n        action: function (value) {\n          u.user.types = u.user.types || [];\n          u.user.types.push(value);\n        }\n      },\n\n      // Conversion data\n      // tbc\n\n\n      // Transaction data\n      {\n        key: \"transactionId\",\n        parent: \"transaction\",\n        action: function (value) {\n          u.transaction.order_id = value;\n        }\n      },\n      {\n        key: \"transactionTotal\",\n        parent: \"transaction\",\n        action: function (value) {\n          u.transaction.total = value;\n          u.transaction.subtotal = value;\n        }\n      },\n      {\n        key: \"transactionShipping\",\n        parent: \"transaction\",\n        action: function (value) {\n          u.transaction.shipping_cost = value;\n        }\n      },\n      {\n        key: \"transactionTax\",\n        parent: \"transaction\",\n        action: function (value) {\n          u.transaction.tax = value;\n        }\n      },\n      {\n        key: \"transactionPaymentType\",\n        parent: \"transaction\",\n        action: function (value) {\n          u.transaction.payment_type = value;\n        }\n      },\n      {\n        key: \"transactionCurrency\",\n        parent: \"transaction\",\n        action: function (value) {\n          u.transaction.currency = value;\n        }\n      },\n      {\n        key: \"transactionShippingMethod\",\n        parent: \"transaction\",\n        action: function (value) {\n          u.transaction.shipping_method = value;\n        }\n      },\n      {\n        key: \"transactionPromoCode\",\n        parent: \"transaction\",\n        action: function (value) {\n          u.transaction.voucher = value;\n        }\n      },\n      {\n        key: \"transactionProducts\",\n        parent: \"transaction\",\n        action: function (value) {\n          var line_items = u.transaction.line_items = u.transaction.line_items || [];\n          if (!isArray(value)) return;\n          for (var i = 0; i < value.length; i++) {\n            var gtmProduct = value[i];\n            if (typeof gtmProduct === \"object\") {\n              var lineItem = {\n                product: {\n                  id: gtmProduct.id,\n                  name: gtmProduct.name,\n                  sku_code: gtmProduct.sku,\n                  category: gtmProduct.category,\n                  currency: gtmProduct.currency,\n                  unit_sale_price: gtmProduct.price,\n                  unit_price: gtmProduct.price\n                },\n                subtotal: gtmProduct.price * gtmProduct.quantity,\n                quantity: gtmProduct.quantity\n              };\n              line_items.push(lineItem);\n            }\n          }\n        }\n      },\n\n\n      // Search data \n      {\n        key: \"siteSearchTerm\",\n        parent: \"listing\",\n        action: function(value) {\n          u.listing.query = value;\n        }\n      }\n\n    ]\n\n  };\n\n  /*** Library functions ***/\n\n    var isArray = function(value) {\n      return ( Object.prototype.toString.call( value ) === \"[object Array]\" );\n    };\n\n\n  /*** Generic adapter API ***/\n\n    var Adapater = {\n\n      mappings: [],\n\n      initialize: function(options) {\n        this.options = options;\n        this.currentDataLayer = window[options.from];\n        this.convert();\n      },\n\n      convert: function() {\n        if (!this.currentDataLayer) return;\n        if (this.options.fromType === \"gtm\") {\n          this.convertGTM();\n        }\n      },\n\n      ensureUv: function(key) {\n        var u = window.universal_variable = window.universal_variable || {};\n        if (key) {\n          u[key] = u[key] || {};\n        }\n      },\n\n      // The GTM dataLayer is an array of objects. Keys can be added at any point.\n      convertGTM: function() {\n        for (var i = 0; i < this.currentDataLayer.length; i++) {\n          var arrayItem = this.currentDataLayer[i];\n          for (var key in arrayItem) {\n            var value = arrayItem[key];\n            this.map(key, value);\n          }\n        }\n      },\n\n      map: function(key, value) {\n        var info = this.getMappingInfo(key);\n        if (info && info.parent && typeof info.action === \"function\") {\n          this.ensureUv(info.parent);\n          info.action(value);\n        }\n      },\n\n      getMappingInfo: function(key) {\n        for (var i = 0; i < this.options.mappings.length; i++) {\n          if (this.options.mappings[i].key === key) {\n            return this.options.mappings[i];\n          }\n        }\n      }\n\n    };\n\n    // Start up\n    Adapater.initialize(dataLayerOptions);\n\n}());\n\n</script>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/qubit_Q.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
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
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});