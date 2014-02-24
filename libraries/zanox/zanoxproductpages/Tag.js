//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("zanox.zanoxproductpages.Tag", {
    config: {
      /*DATA*/
	name: "Zanox - Product Pages",
	async: true,
	description: "To be placed on product pages. Passes back product details as well as running the standard mastertag.",
	html: "<div class=\"zx_${zanoxPageId} zx_mediaslot\">\n  \n</div>",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/zanox.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		name: "Page ID",
		description: "",
		token: "zanoxPageId",
		uv: ""
	},
	{
		name: "Product ID",
		description: "",
		token: "product_id",
		uv: "universal_variable.product.id"
	},
	{
		name: "Name",
		description: "",
		token: "name",
		uv: "universal_variable.product.name"
	},
	{
		name: "Description",
		description: "",
		token: "description",
		uv: "universal_variable.product.description"
	},
	{
		name: "Category",
		description: "",
		token: "category",
		uv: "universal_variable.product.category"
	},
	{
		name: "Price",
		description: "",
		token: "unit_sale_price",
		uv: "universal_variable.product.unit_sale_price"
	},
	{
		name: "Currency",
		description: "",
		token: "currency",
		uv: "universal_variable.product.currency"
	},
	{
		name: "URL",
		description: "",
		token: "url",
		uv: "universal_variable.product.url"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/


    // Populate product fields
    var zx_identifier = "" + this.getValueForToken("product_id") + "";
    var zx_fn = "" + this.getValueForToken("name") + "";
    var zx_description = "" + this.getValueForToken("description") + "";
    var zx_category = "" + this.getValueForToken("category") + ""; 
    var zx_price = "" + this.getValueForToken("unit_sale_price") + "";
    var zx_amount = "" + this.getValueForToken("unit_sale_price") + "";
    var zx_currency = "" + this.getValueForToken("currency") + "";
    var zx_url = "" + this.getValueForToken("url") + "";

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
