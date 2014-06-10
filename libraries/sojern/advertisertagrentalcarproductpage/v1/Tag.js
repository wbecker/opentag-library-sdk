//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"sojern.advertisertagrentalcarproductpage.v1.Tag", {
		config: {
			/*DATA*/
			name: "Advertiser Tag - Rental Car Product Page",
			async: true,
			description: "",
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
				token: "id",
				uv: ""
			}]
			/*~DATA*/
		},
		script: function() {
			/*SCRIPT*/

			(new Image()).src = "https://beacon.sojern.com/p/1?rpid=" + this.valueForToken(
				"id") + "";
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