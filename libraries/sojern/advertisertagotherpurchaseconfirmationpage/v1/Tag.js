//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"sojern.advertisertagotherpurchaseconfirmationpage.v1.Tag", {
		config: {
			/*DATA*/
			name: "Advertiser Tag - Other Purchase Confirmation Page",
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
				name: "Purchase Price",
				description: "if price is e.g. $234.23 then pass 234 only",
				token: "price",
				uv: ""
			}, {
				name: "Confirmation Number",
				description: "Confirmation Number",
				token: "id",
				uv: ""
			}, {
				name: "Number of Products Purchased",
				description: "Number of Products Purchased",
				token: "quantity",
				uv: ""
			}, {
				name: "Customer's Postcode",
				description: "Customer's Postcode",
				token: "postcode",
				uv: ""
			}]
			/*~DATA*/
		},
		script: function() {
			/*SCRIPT*/

			(new Image()).src = "https://beacon.sojern.com/p/11?op=" + this.valueForToken(
				"price") + "&oconfno" + this.valueForToken("id") + "&ono1=" + this.valueForToken(
				"quantity") + "&oz1=" + this.valueForToken("postcode") + "";
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