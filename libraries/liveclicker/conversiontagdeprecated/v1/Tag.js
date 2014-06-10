//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("liveclicker.conversiontagdeprecated.v1.Tag", {
	config: {
		/*DATA*/
		name: "Conversion Tag DEPRECATED",
		async: true,
		description: "Should be placed on the confirmation page only",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Order Total",
			description: "",
			token: "order_total",
			uv: "universal_variable.transaction.total"
		}, {
			name: "Liveclicker Account ID",
			description: "",
			token: "account_id",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		var revenue = parseFloat(this.valueForToken("order_total")) * 100;
		var script = document.createElement('script');

		script.src =
			'https://sc.liveclicker.net/service/track?kind=order&account_id=' +
			this.valueForToken("account_id") + '&value=' + revenue;

		document.getElementsByTagName('head')[0].appendChild(script);

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