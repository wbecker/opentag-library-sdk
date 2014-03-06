//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("intelligentreach.productpagetag.Tag", {
	config: {
		/*DATA*/
		name: "Product Page Tag",
		async: true,
		description: "This tag should be applied to product pages only",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		priv: false,
		url: "www.ist-track.com/ContainerItemJavaScript.ashx?id=${id}",
		usesDocWrite: true,
		parameters: [
		{
			name: "Intelligent Reach ID",
			description: "",
			token: "id",
			uv: ""
		},
		{
			name: "Product ID",
			description: "",
			token: "product_id",
			uv: "universal_variable.product.id"
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
istCompanyId = "" + this.getValueForToken("id") + "";
istItem = "" + this.getValueForToken("product_id") + "";
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});
