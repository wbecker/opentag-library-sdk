//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("zanox.ZanoxGenericMasterTag", {
    config: {/*DATA*/
	id: 30161,
	name: "zanox Generic MasterTag",
	async: true,
	description: "The MasterTag for all pages. Different IDs needed for each page type.",
	html: "<div class=\"zx_${zanoxPageId} zx_mediaslot\">\n	\n</div>",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/zanox.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 29171,
		name: "zanox Page ID",
		description: "Unique ID for the page",
		token: "zanoxPageId",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

		window._zx = window._zx || [];
		window._zx.push({"id":"" + this.getValueForToken("zanoxPageId") + ""});
		var waitForZanoxDiv = function ()
                {
                  if (document.querySelector(".zx_" + this.getValueForToken("zanoxPageId") + ".zx_mediaslot"))
                  {
                    (function(d)
                    {
                      var s = d.createElement("script"); s.async = true;
                      s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//static.zanox.com/scripts/zanox.js";
                      var a = d.getElementsByTagName("script")[0]; a.parentNode.insertBefore(s, a);
                    }(document));
                  }
                  else
                  {
                    setTimeout(waitForZanoxDiv, 100);
                  }
                };
                waitForZanoxDiv();
	

    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
