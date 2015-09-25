//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("facebook.productaudiencespurchase.v1.Tag", {
	config: {
		/*DATA*/
		name: "Product Audiences - Purchase",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "FB Country Code",
			description: "e.g. en_UK ( if not sure, use : en_US )",
			token: "url_locale",
			uv: ""
		}, {
			name: "Pixel ID",
			description: "Client Specific (e.g. 6007143437659)",
			token: "pixel_id",
			uv: ""
		}, {
			name: "Value",
			description: "Product price, if none, use following hardcoded value  instead : 0.00",
			token: "product_value",
			uv: "universal_variable.product.unit_price"
		}, {
			name: "Currency",
			description: "",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Product ID",
			description: "Product ID(s)",
			token: "content_id",
			uv: "universal_variable.product.id"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
		n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
		t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
		document,'script','//connect.facebook.net/' + this.valueForToken("url_locale") + '/fbevents.js');
		// Insert Your Custom Audience Pixel ID below.
		fbq('init', this.valueForToken("pixel_id"));

		fbq('track', 'Purchase', {
		  content_ids: this.valueForToken("content_id"),
		  content_type: 'product',
		  value: this.valueForToken("product_value"),
		  currency: this.valueForToken("currency")
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
