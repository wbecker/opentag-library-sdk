//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("responsys.riconversiontracking.Tag", {
    config: {
      /*DATA*/
	id: 39661,
	name: "RI Conversion Tracking",
	async: true,
	description: "Conversion Tracking allows you to evaluate how affective your email campaign is in driving a particular \npost-clickthrough action (such as making a purchase). With this feature you can monitor and report on \nthe success of a campaign (with link-tracking enabled) based on its resulting conversions.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/qubit-etc/opentaglogos/responsys-logo.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 38669,
		name: "Array of Purchased Items",
		description: "Array of Purchased Items",
		token: "purchased_items_array",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 38670,
		name: "Order ID",
		description: "Order ID",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 38671,
		name: "Order Total",
		description: "Order Total",
		token: "order_total",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 38672,
		name: "Customer ID",
		description: "usually their email - set its value to 0 if not available on page",
		token: "customer_id",
		uv: "universal_variable.user.email"
	},
	{
		id: 38673,
		name: "Client RI ID",
		description: "a 47 (approx.) character string provided by Responsys",
		token: "client_ri",
		uv: ""
	},
	{
		id: 38674,
		name: "Client EI ID",
		description: "a 23 (approx.) character string provided by Responsys",
		token: "client_ei",
		uv: ""
	},
	{
		id: 38675,
		name: "Conversion Type",
		description: "e.g. purchase",
		token: "type",
		uv: ""
	},
	{
		id: 38676,
		name: "Domain",
		description: "e.g. email.somedomain.com",
		token: "domain",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/


var customerID = "" + this.getValueForToken("customer_id") + "";

var numberOfItems = this.getValueForToken("purchased_items_array").length;

var imageSource = document.location.protocol + "//" + this.getValueForToken("domain") + "/pub/cct?_ri_=" + this.getValueForToken("client_ri") + "&_ei_=" + this.getValueForToken("client_ei") + "&action=once&OrderID=" + this.getValueForToken("order_id") + "&OrderTotal=" + this.getValueForToken("order_total") + "&numItems=" + numberOfItems;

if (customerID !== "0")
{
  imageSource += "&customerID=" + customerID;
}

imageSource += "&Type=" + this.getValueForToken("type") + "";

var image = document.createElement('img');
image.src = imageSource;
image.width = 1;
image.height = 1;

document.head.appendChild(image);



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
