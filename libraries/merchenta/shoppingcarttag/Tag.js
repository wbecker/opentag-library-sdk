//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("merchenta.shoppingcarttag.Tag", {
    config: {/*DATA*/
	id: 202,
	name: "Shopping Cart Tag",
	async: true,
	description: "Place this tag on the shopping cart or basket page (Optional).",
	html: "<div id=\"mc_data\" style=\"display:none;\">\n  <div class=\"mc_event\">CART</div>\n  <div class=\"mc_retailer\">${Merchenta_Id}</div>\n</div>\n",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Merchenta.jpg",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 20200,
		name: "Merchenta Retailer Code",
		description: "Your Merchenta account ID",
		token: "Merchenta_Id",
		uv: ""
	},
	{
		id: 20201,
		name: "Product SKUs",
		description: "The SKUs/IDs of the products in the cart.",
		token: "product_ids",
		uv: "universal_variable.basket.line_items[#].product.sku_code"
	},
	{
		id: 20202,
		name: "Order/Cart Reference (optional)",
		description: "Order id for your cart - if your system doesn't provide one, just provide an empty string here.",
		token: "order_id",
		uv: "universal_variable.basket.id"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

(function () {
  var i, ii, d, p = document.getElementById("mc_data");
  d = document.createElement("div");
  d.className="mc_order_ref";
  d.innerHTML="" + this.getValueForToken("order_id") + "";
  p.appendChild(d);
  for (i = 0, ii = this.getValueForToken("product_ids").length; i < ii; i ++) {
    d = document.createElement("div");
    d.className="mc_sku";
    d.innerHTML=this.getValueForToken("product_ids")[i].toString();
    p.appendChild(d);
  }
})();


var mc_api_url = "api.merchenta.com/merchenta/t";
(function() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  var secure = (window.parent.document.location.protocol=="https:");
  if (secure) {
    script.src = "https://api.merchenta.com/track/t.js";
  } else {
    script.src = "http://cdn.merchenta.com/track/t.js";
  }
  document.getElementsByTagName('head')[0].appendChild(script);
})();


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
