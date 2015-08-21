//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("sojern.datapartnertaghomepage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "Data Partner Tag - Homepage",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "pixel.sojern.com/partner/${sojern_partner_key}/hp?n=${page_name}",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Sojern Partner Key",
			description: "Sojern Partner Key",
			token: "sojern_partner_key",
			uv: ""
		}, {
			name: "Page Type Identifier",
			description: "Page Type Identifier",
			token: "page_name",
			uv: ""
		}]
		/*~DATA*/
      };
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