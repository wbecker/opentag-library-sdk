//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("clotheshorse.productpage.Tag", {
    config: {
      /*DATA*/
	id: 33175,
	name: "Product Page",
	async: true,
	description: "To be placed on all product pages of the website.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/ClothesHorse.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 32224,
		name: "Clothes Horse Client Token",
		description: "The token specific to the client using Clothes Horse",
		token: "client_token",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

    var ch212 = ch212 || []; 
    ch212['token'] = '' + this.getValueForToken("client_token") + ''; 
    ch212['ts'] = new Date().getTime();

    (function(){
      var ch = document.createElement('script'); 
      ch.type = 'text/javascript'; 
      ch.async = true;
      ch.src = '//script.clotheshor.se/widget/script?token=' + ch212['token'] + 
                    '&ts=' + ch212['ts'];
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(ch, s);
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
