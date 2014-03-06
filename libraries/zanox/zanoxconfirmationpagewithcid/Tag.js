//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("zanox.zanoxconfirmationpagewithcid.Tag", {
	config: {
		/*DATA*/
		name: "Zanox - Confirmation page with CID",
		async: true,
		description: "The Zanox confirmation page tag with CID parameter",
		html: "<div class=\"zx_${zanox_page_id} zx_mediaslot\">\n  \n</div>",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/zanox.png",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: true,
		parameters: [
		{
			name: "Zanox Program ID",
			description: "",
			token: "program_id",
			uv: ""
		},
		{
			name: "Zanox Test Mode",
			description: "",
			token: "mode",
			uv: ""
		},
		{
			name: "Zanox CID",
			description: "Commission Group/User Status",
			token: "cid",
			uv: "universal_variable.user.returning"
		},
		{
			name: "Customer ID",
			description: "",
			token: "user_id",
			uv: "universal_variable.user.user_id"
		},
		{
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		},
		{
			name: "Currency",
			description: "",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		},
		{
			name: "Order Subtotal",
			description: "",
			token: "subtotal",
			uv: "universal_variable.transaction.subtotal"
		},
		{
			name: "Zanox Converison Page ID",
			description: "",
			token: "zanox_page_id",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

(function() {
    // Fire the confirmation tag
    var url = "//ad.zanox.com/pps/?" + this.getValueForToken("program_id") + "";
        url += "&mode=[[" + this.getValueForToken("mode") + "]]";
        url += "&CID=[[" + this.getValueForToken("cid") + "]]";
        url += "&CustomerID=[[" + this.getValueForToken("user_id") + "]]";
        url += "&OrderID=[[" + this.getValueForToken("order_id") + "]]";
        url += "&CurrencySymbol=[[" + this.getValueForToken("currency") + "]]";
        url += "&TotalPrice=[[" + this.getValueForToken("subtotal") + "]]";
        var script = document.createElement('script');
    script.src = url;
    script.type = "text/javascript";
    document.body.appendChild(script);

    // Set globals for usage by the master tag
    var zx_products = [];
    var zx_transaction = "" + this.getValueForToken("order_id") + "";
    var zx_total_amount = "" + this.getValueForToken("subtotal") + "";
    var zx_total_currency = "" + this.getValueForToken("currency") + "";

    // The standard mastertag
    window._zx = window._zx || [];
    window._zx.push({"id":"" + this.getValueForToken("zanox_page_id") + ""});
    var waitForZanoxDiv = function ()
    {
      if (document.querySelector(".zx_" + this.getValueForToken("zanox_page_id") + ".zx_mediaslot"))
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
