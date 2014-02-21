//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("channeladvisor.ChannelAdvisorConfirmationPage", {
    config: {/*DATA*/
	id: 34659,
	name: "Channel Advisor - Confirmation Page",
	async: true,
	description: "Use this tag to track confirmation pages with ChannelAdvisor.",
	html: "",
	imageUrl: "http://dummyimage.com/100x100/000/fff.png&text=ChannelAdvisor",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 33670,
		name: "Client ID",
		description: "The unique client id",
		token: "client_id",
		uv: ""
	},
	{
		id: 33671,
		name: "Order Total",
		description: "",
		token: "total",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 33672,
		name: "Order ID",
		description: "",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 33673,
		name: "Product IDs",
		description: "",
		token: "product_id_list",
		uv: "universal_variable.transaction.line_items[#].product.id"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

(function() {
  var src = "https://tracking.searchmarketing.com/thankyou.asp?SMCID=" + this.getValueForToken("client_id") + "";
  src += "&oVal=" + this.getValueForToken("total") + "";
  src += "&OrderID=" + this.getValueForToken("order_id") + "";
  src += "&ProductID="; 

  // Add the product ids
  var i=0, ii=this.getValueForToken("product_id_list").length, arr = [];
  for (; i<ii; i++) {
    arr.push(this.getValueForToken("product_id_list")[i]);
  }
  src += arr.join(',');

  // Append to body
  var img = document.createElement('image');
  img.src = src;
  img.width = 1;
  img.height = 1;
  img.style.display = 'none';
  document.body.appendChild(img);
}());


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
