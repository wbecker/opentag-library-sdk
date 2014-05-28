//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("intelligentreach.basketpagetag.v1.Tag", {
	config: {
		/*DATA*/
		name: "Basket Page Tag",
		async: true,
		description: "The tag is placed on basket page only.",
		html: "",
		imageUrl: "",
		locationDetail: "",
		isPrivate: false,
		url: "www.ist-track.com/ContainerBasketJavaScript.ashx?companyId=${id}",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "Basket SKU List",
			description: "",
			token: "productSku",
			uv: "universal_variable.basket.line_items[#].product.sku_code"
		}, {
			name: "Intelligent Reach ID",
			description: "",
			token: "id",
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
		window.istCompanyId = "" + this.valueForToken("id");
		window.istItemCount = this.valueForToken("productSku").length;
		window.istBasketItems = "";

		for (var i = 0; i < this.valueForToken("productSku").length; i++) {
			istBasketItems += this.valueForToken("productSku")[i];

			if (this.valueForToken("productSku").length !== (i + 1)) {
				istBasketItems += "|";
			}
		}
		window.istUserDefinedFieldOne = "";
		window.istUserDefinedFieldTwo = "";
		window.istUserDefinedFieldThree = "";

		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});