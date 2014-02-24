//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("salecycle.salecycleconfirmationpagetag.Tag", {
    config: {
      /*DATA*/
	name: "SaleCycle Confirmation Page Tag",
	async: true,
	description: "The tag loads a 1px by 1px blank image in the page by calling the SaleCycle PixelCapture.aspx page, and should be implemented on the order completion page only. Sends details of the user email and the order id.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/salecycle.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		name: "Client ID",
		description: "Implementation consultant will provide you with your Client ID",
		token: "client_id",
		uv: ""
	},
	{
		name: "Customer Email",
		description: "",
		token: "customer_email",
		uv: "universal_variable.user.email"
	},
	{
		name: "Order ID",
		description: "The transaction order id",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

(function () {
  var src = [
    '//app.salecycle.com/Import/PixelCapture.aspx?',
    'c=', '' + this.getValueForToken("client_id") + '',
    '&e=', '' + this.getValueForToken("customer_email") + '',
    '&sfs=orderNumber^' + this.getValueForToken("order_id") + ''
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
    pre: function () {
      /*PRE*/
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
