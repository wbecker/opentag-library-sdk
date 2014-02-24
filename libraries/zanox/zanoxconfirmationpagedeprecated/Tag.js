//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("zanox.zanoxconfirmationpagedeprecated.Tag", {
    config: {
      /*DATA*/
	id: 34672,
	name: "Zanox - Confirmation page DEPRECATED",
	async: true,
	description: "The Zanox confirmation page tag.",
	html: "<div class=\"zx_${zanox_page_id} zx_mediaslot\">\n  \n</div>",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/zanox.png",
	locationDetail: "",
	priv: true,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 33738,
		name: "Zanox Mode",
		description: "e.g .2",
		token: "mode",
		uv: ""
	},
	{
		id: 33739,
		name: "User ID",
		description: "",
		token: "user_id",
		uv: "universal_variable.user.user_id"
	},
	{
		id: 33740,
		name: "Order ID",
		description: "",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 33741,
		name: "Currency",
		description: "",
		token: "currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 33742,
		name: "Subtotal",
		description: "",
		token: "subtotal",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 33743,
		name: "Zanox Page ID",
		description: "",
		token: "zanox_page_id",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/


    // Fire the confirmation tag
    var url = "//ad.zanox.com/pps/?4711C081512345";
        url += "&mode=[[" + this.getValueForToken("mode") + "]]";
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
    (function(d) { 
      var s = d.createElement("script"); s.async = true;
      s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//static.zanox.com/scripts/zanox.js";
      var a = d.getElementsByTagName("script")[0]; a.parentNode.insertBefore(s, a);
    }(document));

  

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
