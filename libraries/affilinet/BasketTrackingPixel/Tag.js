//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("affilinet.BasketTrackingPixel", {
    config: {/*DATA*/
	id: 37172,
	name: "Basket Tracking Pixel",
	async: true,
	description: "The affilinet basket tracking system allows you to submit shopping basket information on item level to affilinet. \nThat information enables you to perform detailed statistical analyses and allows your publishers to optimise their \nmarketing activities even further. If you would like to make use of this tracking functionality, please call your \naccount manager to activate basket tracking and change the registersale call on your order confirmation page.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/affilinet.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 36203,
		name: "Affilinet Tracking Domain",
		description: "Domain of the affilinet country you are working with, e.g.  partners.webmasterplan.com",
		token: "affilinet_tracking_domain",
		uv: ""
	},
	{
		id: 36204,
		name: "Site",
		description: "Your program ID",
		token: "program_id",
		uv: ""
	},
	{
		id: 36205,
		name: "Order ID",
		description: "Order ID",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 36206,
		name: "Basket Items SKUs",
		description: "",
		token: "basket_items_skus",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 36207,
		name: "Basket Items Names",
		description: "",
		token: "basket_items_names",
		uv: "universal_variable.transaction.line_items[#].product.name"
	},
	{
		id: 36208,
		name: "Basket Items Categories",
		description: "",
		token: "basket_items_categories",
		uv: "universal_variable.transaction.line_items[#].product.category"
	},
	{
		id: 36209,
		name: "Basket Items Quantities",
		description: "",
		token: "basket_items_quantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 36210,
		name: "Basket Items Prices",
		description: "",
		token: "basket_items_prices",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

var iFrame = document.createElement('iframe');
iFrame.style.display = 'none';
iFrame.style.width = "1px";
iFrame.style.height = "1px";
iFrame.id = "affilinet-tracking-form-iframe";
document.body.appendChild(iFrame);

var iFrameDom = iFrame.contentDocument || iFrame.contentWindow.document;

var form = iFrameDom.createElement('form');
form.name = "affilinetTrackingForm";
form.method = "post";
form.action = document.location.protocol + "//" + this.getValueForToken("affilinet_tracking_domain") + "/registersale.asp";
form.id = "affilinetTrackingForm";
iFrameDom.body.appendChild(form);

var input = iFrameDom.createElement('input');
input.type = "hidden";
input.id = "site";
input.name = "site";
input.value = "" + this.getValueForToken("program_id") + "";
iFrameDom.getElementById("affilinetTrackingForm").appendChild(input);

var input = iFrameDom.createElement('input');
input.type = "hidden";
input.id = "order";
input.name = "order";
input.value = "" + this.getValueForToken("order_id") + "";
iFrameDom.getElementById("affilinetTrackingForm").appendChild(input);

var textarea = iFrameDom.createElement('textarea');
textarea.type = "text";
textarea.id = "basket";
textarea.name = "basket";
iFrameDom.getElementById("affilinetTrackingForm").appendChild(textarea);


var basketItemsData= "";

for (var i = 0; i < this.getValueForToken("basket_items_skus").length; i++)
{
  if (i>0)
  {
    basketItemsData += "&";
  }
  
  basketItemsData += "articlenb=" + escape(this.getValueForToken("basket_items_skus")[i]) + "&productname=" + escape(this.getValueForToken("basket_items_names")[i]) + "&category=" + escape(this.getValueForToken("basket_items_categories")[i]) + "&quantity=" + escape(this.getValueForToken("basket_items_quantities")[i]) + "&singleprice=" + escape(this.getValueForToken("basket_items_prices")[i]) + "&brand=";  
}                                                       

iFrameDom.getElementById("basket").innerHTML = basketItemsData;

iFrameDom.getElementById('affilinetTrackingForm').submit();


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
