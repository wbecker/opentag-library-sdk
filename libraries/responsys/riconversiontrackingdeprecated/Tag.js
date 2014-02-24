//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("responsys.riconversiontrackingdeprecated.Tag", {
    config: {/*DATA*/
	id: 39659,
	name: "RI Conversion Tracking [DEPRECATED]",
	async: true,
	description: "Conversion Tracking allows you to evaluate how affective your email campaign is in driving a particular \npost-clickthrough action (such as making a purchase). With this feature you can monitor and report on \nthe success of a campaign (with link-tracking enabled) based on its resulting conversions.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/qubit-etc/opentaglogos/responsys-logo.png",
	locationDetail: "",
	priv: true,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 38661,
		name: "List of Purchased Items",
		description: "array of purchased items",
		token: "purchased_items_array",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 38662,
		name: "Order ID",
		description: "Order ID",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 38663,
		name: "Order Total",
		description: "Order Total",
		token: "order_total",
		uv: "universal_variable.transaction.total"
	},
	{
		id: 38664,
		name: "Customer ID",
		description: "Usually their email - If customer ID is not available on the page then set its value to 0",
		token: "customer_id",
		uv: "universal_variable.user.email"
	},
	{
		id: 38665,
		name: "Client RI ID",
		description: "a 47 (approx.) character string provided by Responsys",
		token: "client_ri",
		uv: ""
	},
	{
		id: 38666,
		name: "Conversion Type",
		description: "Type of Conversion, e.g. \"purchase\", \"quote\", etc.",
		token: "type",
		uv: ""
	},
	{
		id: 38667,
		name: "Client EI ID",
		description: "a 23 (approx.) character string provided by Responsys",
		token: "client_ei",
		uv: ""
	},
	{
		id: 38668,
		name: "Domain",
		description: "e.g. email.somedomain.net",
		token: "domain",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/


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



    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
