//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("sojern.advertisertagotherproductpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "Advertiser Tag - Other Product Page",
		async: true,
		description: "",
		html: "",
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
		}, {
			name: "Product Name",
			description: "Product Name",
			token: "name",
			uv: ""
		}, {
			name: "Product Date",
			description: "Product Date",
			token: "date",
			uv: ""
		}]
		/*~DATA*/
      };
  },
	script: function() {
		/*SCRIPT*/
		(new Image()).src = "https://beacon.sojern.com/p/1?opid=" + this.valueForToken(
			"id") + "&opn=" + this.valueForToken("name") + "&date" + this.valueForToken(
			"date");
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