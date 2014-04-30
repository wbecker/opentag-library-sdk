//:include tagsdk-current.js
var version = "";
var classPath = "salecycle.confirmationpage" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Confirmation Page",
		async: true,
		description: "The tag loads a 1px by 1px blank image in the page by calling the SaleCycle PixelCapture.aspx page, and should be implemented on the order completion page only. Sends details of the user email and the order id.",
		html: "<!--@SRC@-->",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/salecycle.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Client ID",
			description: "Implementation consultant will provide you with your Client ID",
			token: "client_id",
			uv: ""
		}, {
			name: "Customer Email",
			description: "",
			token: "customer_email",
			uv: "universal_variable.user.email"
		}, {
			name: "Order ID",
			description: "The transaction order id",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		(function() {
			var src = [
				'//app.salecycle.com/Import/PixelCapture.aspx?',
				'c=', '' + this.valueForToken("client_id") + '',
				'&e=', '' + this.valueForToken("customer_email") + '',
				'&sfs=orderNumber^' + this.valueForToken("order_id") + ''
			].join('');
			var img = document.createElement('img');
			img.setAttribute('src', src);
			img.width = '1';
			img.height = '1';
			img.style.display = 'none';
			document.body.appendChild(img);
		})()
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