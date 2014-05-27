//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("visualdna.basketadditionreport.v1.Tag", {
	config: {
		/*DATA*/
		name: "Basket Addition Report",
		async: true,
		description: "This tag should fire when a user adds an item to their basket. The tag must have a dependency on the Visual DNA Page View Report tag.",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Product ID",
			description: "Product ID",
			token: "product_id",
			uv: ""
		}, {
			name: "Product Name",
			description: "Product Name",
			token: "product_name",
			uv: ""
		}, {
			name: "Product Category",
			description: "Product Category",
			token: "product_category",
			uv: ""
		}, {
			name: "Product Unit Sale Price",
			description: "Product Unit Sale Price",
			token: "price",
			uv: ""
		}, {
			name: "Currency",
			description: "Currency",
			token: "currency",
			uv: ""
		}, {
			name: "API Key",
			description: "API Key",
			token: "api_key",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		window.VDNA = window.VDNA || {};
		window.VDNA.queue = window.VDNA.queue || [];
		window.VDNA.queue.push({
			apiKey: "" + this.valueForToken("api_key"),
			method: "reportConversion",
			args: ["added_to_basket", {
				"product_id": "" + this.valueForToken("product_id"),
				"partner_user_id_type": "" + this.valueForToken("product_id"),
				"product_name": "" + this.valueForToken("product_name"),
				"product_category_id": "" + this.valueForToken("product_category"),
				"product_price": "" + this.valueForToken("price"),
				"currency": "" + this.valueForToken("currency")
			}]
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