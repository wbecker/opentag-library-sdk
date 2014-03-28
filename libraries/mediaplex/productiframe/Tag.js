//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("mediaplex.productiframe.Tag", {
	config: {
		/*DATA*/
		name: "Product iframe",
		async: true,
		description: "The product iframe passes a pageview, product SKU, and the category/subcategory the product belongs in.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/mediaplex.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Mediaplex Client ID",
			description: "The ID assigned to you by Mediaplex",
			token: "client_id",
			uv: ""
		},
		{
			name: "Page Name",
			description: "The name of the page being accessed. Typically all lowercase, with underscores",
			token: "page_name",
			uv: ""
		},
		{
			name: "Event Name",
			description: "The name of the event triggered. Typically, this is a CamelCased version of the page name",
			token: "event_name",
			uv: ""
		},
		{
			name: "Page Category",
			description: "The category of the page the user is viewing",
			token: "category",
			uv: "universal_variable.page.category"
		},
		{
			name: "Page Subategory",
			description: "The subcategory of the page the user is viewing",
			token: "subcategory",
			uv: "universal_variable.page.subcategory"
		},
		{
			name: "Product SKU",
			description: "The SKU of the product the user is currently viewing",
			token: "product_sku",
			uv: "universal_variable.product.sku_code"
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

(function(){

  var frame = document.createElement("iframe");
  var src = (document.location.protocol === "https:") ? "https://secure." : "http://";
  src = src + "img-cdn.mediaplex.com/0/" + this.valueForToken("client_id") + "/universal.html?page_name=" + this.valueForToken("page_name") + "&" + this.valueForToken("event_name") + "=1&Primary_Category=" + this.valueForToken("category") + "&Sub_Category=" + this.valueForToken("subcategory") + "&SKU=" + this.valueForToken("product_sku") + "&mpuid=";
  frame.src = src;
  frame.height = 1;
  frame.width = 1;
  frame.frameborder = 0;
  document.body.appendChild(frame);

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
