//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"appnexus.appnexusthankyoupagewithcustomdomain.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*DATA*/
			name: "AppNexus - Thank you page with custom domain",
			async: true,
			description: "To be placed on the confirmation page, allowing for a custom domain.",
			html: "<img src=\"https://${domain}/px?id=${id}&seg=${segment}&order_id=${order_id}&value=${subtotal}&t=${t}\" width=\"1\" height=\"1\" /> ",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "AppNexus ID",
				description: "",
				token: "id",
				uv: ""
			}, {
				name: "Domain",
				description: "The domain of the tag you wish to use. e.g. ib.adnxs.com",
				token: "domain",
				uv: ""
			}, {
				name: "Segment",
				description: "",
				token: "segment",
				uv: ""
			}, {
				name: "Order ID",
				description: "",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Order Subtotal",
				description: "",
				token: "subtotal",
				uv: "universal_variable.transaction.subtotal"
			}, {
				name: "T value",
				description: "e.g. 2",
				token: "t",
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