//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("tradedoubler.confirmationpagetagdeprecated.Tag", {
    config: {/*DATA*/
	id: 35178,
	name: "Confirmation Page Tag [DEPRECATED]",
	async: true,
	description: "DO NOT USE",
	html: "",
	imageUrl: ".",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 34291,
		name: "TD Unique Identifier",
		description: "Your TradeDoubler unique identifier",
		token: "tduid_cookie_name",
		uv: ""
	},
	{
		id: 34292,
		name: "Product Categories",
		description: "",
		token: "productCategories",
		uv: "universal_variable.transaction.line_items[#].product.category"
	},
	{
		id: 34293,
		name: "Product IDs",
		description: "List of all product IDs in basket",
		token: "productIDs",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 34294,
		name: "Product Names",
		description: "List of all product names in basket",
		token: "productNames",
		uv: "universal_variable.transaction.line_items[#].product.name"
	},
	{
		id: 34295,
		name: "Product Prices",
		description: "List of each product unit sale price in basket",
		token: "productPrices",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 34296,
		name: "Product Quantities",
		description: "List of all product quantities",
		token: "productQuantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 34297,
		name: "Organization",
		description: "Your TradeDoubler organization ID, provided by TradeDoubler.",
		token: "organization",
		uv: ""
	},
	{
		id: 34298,
		name: "Event",
		description: "Provided by TradeDoubler, this parameter is linked to our organization and used for reporting.",
		token: "event",
		uv: ""
	},
	{
		id: 34299,
		name: "Currency",
		description: "Transaction currency",
		token: "currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 34300,
		name: "Order Number",
		description: "Transaction Order ID",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 34301,
		name: "Encoding",
		description: "set to 3 unless encoding is not  UTF-8 - see TD manual for more info",
		token: "encoding",
		uv: ""
	},
	{
		id: 34302,
		name: "Tracking type",
		description: "Enter hard coded value s for sales tracking or l for lead tracking",
		token: "tracking_type",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/


(function ()
{
  function readCookie(name)
  {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++)
    {
      var c = ca[i];
      while (c.charAt(0) === ' ')
      {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0)
      {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  }
  var tduidCookie = readCookie("" + this.getValueForToken("tduid_cookie_name") + "");
  tduidCookie = tduidCookie ? tduidCookie : "";

  var basket = "";

  for (var i = 0; i < this.getValueForToken("productNames").length; i++)
  {
    basket = basket + "pr(gr(" + this.getValueForToken("productCategories")[i] + ")i(" + this.getValueForToken("productIDs")[i] + ")n(" + this.getValueForToken("productNames")[i] + ")v(" + this.getValueForToken("productPrices")[i] + ")q(" + this.getValueForToken("productQuantities")[i]+ "))";
  }

  var src = "https://tb" + this.getValueForToken("tracking_type") + ".tradedoubler.com/report?";
  src += "o=(" + this.getValueForToken("organization") + ")";
  src += "event=(" + this.getValueForToken("event") + ")";
  src += "ordnum=(" + this.getValueForToken("order_id") + ")";
  src += "curr=(" + this.getValueForToken("currency") + ")";
  src += "tduid=(" + tduidCookie + ")";
  src += "enc(" + this.getValueForToken("encoding") + ")";
  src += "basket(" + basket + ")";

  var img = document.createElement("img");
  img.src = src;
  document.body.appendChild(img);
})();



    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
