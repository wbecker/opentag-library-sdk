//:include tagsdk-current.js
var version = "";
var classPath = "liveclicker.conversiontagdeprecated.Tag";

qubit.opentag.LibraryTag.define(classPath + version, {
	config: {
		/*DATA*/
		name: "Conversion Tag DEPRECATED",
		async: true,
		description: "Should be placed on the confirmation page only",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Liveclicker.png",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
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

		(function() {
			var revenue = parseFloat(this.valueForToken("order_total")) * 100;
			var script = document.createElement('script');

			script.src = 'https://sc.liveclicker.net/service/track?kind=order&account_id=' + this.valueForToken("account_id") + '&value=' + revenue;

			document.getElementsByTagName('head')[0].appendChild(script);
		})();
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