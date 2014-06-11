//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("responsys.wrstagversion19.v1.Tag", {
	config: {
		/*DATA*/
		name: "WRS Tag - version 1.9",
		async: true,
		description: "",
		html: "<script type=\"text/javascript\">\n\nvar _riTrack;\n\nfunction _riInit() \n{ \n  _riTrack = riTrack.init(\"${account_id}\");\n  \n  var customerID = \"${customer_id}\";\n  if (customerID.length) _riTrack.setCustomer(customerID);\n  \n  if (${track_page_view}) \n  {\n    var pageID = \"${page_id}\";\n    if (pageID.length) _riTrack.trackPageView(pageID); \n    else _riTrack.trackPageView(); \n  }\n\n  var productCategory = \"${category_page_id}\";\n  if (productCategory.length) _riTrack.trackViewProductCategory(productCategory);\n\n  var productViewedID = \"${product_viewed_id}\";\n  if (productViewedID.length) _riTrack.trackViewProduct(productViewedID); \n\n  var productAddedID = \"${product_added}\";\n  if (productAddedID.length) _riTrack.trackAddProductToCart(productAddedID);\n  \n  for (var i=0; i<${product_removed}.length; i++)\n  {\n    _riTrack.trackRemoveProductFromCart(${product_removed}[i]+\"\");\n  }\n\n  var cartID = \"${basket_id}\";\n  if (cartID.length) _riTrack.setCartID(cartID);\n\n  if (${track_checkout_start})\n  {\n    var cartID = \"${checkout_id}\";\n    if (cartID.length) _riTrack.trackCartCheckout(cartID); \n    else _riTrack.trackCartCheckout(); \n  }\n\n  var confirmationID = \"${confirmation_id}\";\n  if (confirmationID.length) _riTrack.trackCartPurchased(confirmationID);\n};\n</script><script type=\"text/javascript\" src=\"//custom-wrs.api.responsys.net/ts-wrs/js/ri.min.js\"></script>\n",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Customer ID",
			description: "Set a Customer ID or leave blank",
			token: "customer_id",
			uv: ""
		}, {
			name: "Track Page View",
			description: "set to true (if tracking a page view) or false",
			token: "track_page_view",
			uv: ""
		}, {
			name: "Page View ID",
			description: "if you're tracking a page view, set the page ID here or leave blank if not available",
			token: "page_id",
			uv: ""
		}, {
			name: "Category Page ID",
			description: "Leave blank if you don't want to track a Category page view",
			token: "category_page_id",
			uv: ""
		}, {
			name: "Product Viewed ID",
			description: "Leave blank if you don't want to track a product page view",
			token: "product_viewed_id",
			uv: ""
		}, {
			name: "Product Added ID",
			description: "Set product ID of a product just added to the basket or leave blank if not applicable",
			token: "product_added",
			uv: ""
		}, {
			name: "Product Removed ID",
			description: "Array of product IDs removed from the basket or empty array if not applicable",
			token: "product_removed",
			uv: ""
		}, {
			name: "Basket ID",
			description: "Set a Basket ID as soon as the 1st product is added or leave blank if not applicable",
			token: "basket_id",
			uv: ""
		}, {
			name: "Track Checkout Start",
			description: "Set to true (if user just clicked on the Checkout button) or false",
			token: "track_checkout_start",
			uv: ""
		}, {
			name: "Checkout ID",
			description: "If tracking the start of Checkout, set a Checkout ID here or leave blank",
			token: "checkout_id",
			uv: ""
		}, {
			name: "Confirmation ID",
			description: "If you want to track a confirmed purchase, set the Confirmation ID or leave blank if not applicable",
			token: "confirmation_id",
			uv: ""
		}, {
			name: "Account ID",
			description: "Account ID",
			token: "account_id",
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