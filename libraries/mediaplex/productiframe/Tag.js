//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("mediaplex.productiframe.Tag", {
    config: {
      /*DATA*/
	id: 36169,
	name: "Product iframe",
	async: true,
	description: "The product iframe passes a pageview, product SKU, and the category/subcategory the product belongs in.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/mediaplex.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 35201,
		name: "Mediaplex Client ID",
		description: "The ID assigned to you by Mediaplex",
		token: "client_id",
		uv: ""
	},
	{
		id: 35202,
		name: "Page Name",
		description: "The name of the page being accessed. Typically all lowercase, with underscores",
		token: "page_name",
		uv: ""
	},
	{
		id: 35203,
		name: "Event Name",
		description: "The name of the event triggered. Typically, this is a CamelCased version of the page name",
		token: "event_name",
		uv: ""
	},
	{
		id: 35204,
		name: "Page Category",
		description: "The category of the page the user is viewing",
		token: "category",
		uv: "universal_variable.page.category"
	},
	{
		id: 35205,
		name: "Page Subategory",
		description: "The subcategory of the page the user is viewing",
		token: "subcategory",
		uv: "universal_variable.page.subcategory"
	},
	{
		id: 35206,
		name: "Product SKU",
		description: "The SKU of the product the user is currently viewing",
		token: "product_sku",
		uv: "universal_variable.product.sku_code"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

(function(){

  var frame = document.createElement("iframe");
  var src = (document.location.protocol === "https:") ? "https://secure." : "http://";
  src = src + "img-cdn.mediaplex.com/0/" + this.getValueForToken("client_id") + "/universal.html?page_name=" + this.getValueForToken("page_name") + "&" + this.getValueForToken("event_name") + "=1&Primary_Category=" + this.getValueForToken("category") + "&Sub_Category=" + this.getValueForToken("subcategory") + "&SKU=" + this.getValueForToken("product_sku") + "&mpuid=";
  frame.src = src;
  frame.height = 1;
  frame.width = 1;
  frame.frameborder = 0;
  document.body.appendChild(frame);

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
