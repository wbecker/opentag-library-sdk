//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("connextra.datacapturetag.Tag", {
    config: {
      /*DATA*/
	id: 39664,
	name: "Data Capture Tag",
	async: true,
	description: "The Data Capture feature will allow Connextra to locate content relating to the Account Name and the \namount bet or deposited from your website and store into Connextra stats for analytical purposes. For \ndata protection, you are required to encrypt any sensitive information about your customers.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/connextra.png",
	locationDetail: "",
	priv: true,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 38689,
		name: "Connextra Client ID",
		description: "Your Connextra account ID",
		token: "client_id",
		uv: ""
	},
	{
		id: 38690,
		name: "Connextra Page Type",
		description: "The page type you want this view to track as",
		token: "page_type",
		uv: ""
	},
	{
		id: 38691,
		name: "Connextra Config Server",
		description: "The Connextra address which holds your configuration data.",
		token: "conf_server",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

      var cxt_conf = cxt_conf || {};
      cxt_conf.clientId = cxt_conf.clientId || '' + this.getValueForToken("client_id") + '';
      cxt_conf.pageType = cxt_conf.pageType || '' + this.getValueForToken("page_type") + '';
      cxt_conf.server = '' + this.getValueForToken("conf_server") + '';

      (function() {
            var ca = document.createElement('script');
            ca.type = 'text/javascript';
            ca.async = true;
            ca.src = cxt_conf.server + '/script/ca.js';
            ca.onload = function() {
                  cxtdcs()();
            };
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ca, s);
      })();


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
