//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("salecycle.DEPRECATEDSaleCycleConfirmationPageTag", {
    config: {/*DATA*/
	id: 24662,
	name: "DEPRECATED SaleCycle Confirmation Page Tag",
	async: true,
	description: "The tag loads a 1px by 1px blank image in the page by calling the SaleCycle PixelCapture.aspx page, and should be implemented on the order completion page only, as close to the top of the page as possible within the <body> tags.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/salecycle.png",
	locationDetail: "",
	priv: true,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 24184,
		name: "Client ID",
		description: "Implementation consultant will provide you with your Client ID",
		token: "clientID",
		uv: ""
	},
	{
		id: 24185,
		name: "Customer Email",
		description: "",
		token: "userEmail",
		uv: "universal_variable.user.email"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

(function () {
  var src = [
    'https://app.salecycle.com/Import/PixelCapture.aspx?',
    'c=', '' + this.getValueForToken("clientID") + '',
    '&e=', '' + this.getValueForToken("userEmail") + ''
  ].join('');
  var img = document.createElement('img');
  img.setAttribute('src', src);
  document.body.append(img);
})()


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
