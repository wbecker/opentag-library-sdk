//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("zanox.ZanoxBasketPage", {
    config: {/*DATA*/
	id: 36657,
	name: "Zanox Basket Page",
	async: true,
	description: "Basket Page Master Tag",
	html: "<div class=\"zx_${id} zx_mediaslot\"></div>\n",
	imageUrl: ".",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 35657,
		name: "ID",
		description: "client/page specific ID",
		token: "id",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

(function ()
{
   var waitForElement = function ()
   {
      if (document.getElementsByClassName('zx_' + this.getValueForToken("id") + ' zx_mediaslot').length === 1)
      {
         window._zx = window._zx || [];
         window._zx.push({"id":"" + this.getValueForToken("id") + ""});
         (function(d) 
         { 
             var s = d.createElement("script"); 
             s.async = true;
             s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//static.zanox.com/scripts/zanox.js";
             var a = d.getElementsByTagName("script")[0]; 
             a.parentNode.insertBefore(s, a);
         }(document));
      }
      else
      {
         setTimeout(waitForElement, 100);
      }
   };

   waitForElement();
})();


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
