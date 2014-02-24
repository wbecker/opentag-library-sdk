//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("sub2.sub2confirmationpagedependsuponsub2mainscriptallpages.Tag", {
    config: {/*DATA*/
	id: 39676,
	name: "Sub2 - Confirmation Page (depends upon \"Sub2 - Main Script - All pages\")",
	async: true,
	description: "The script should be added to the Order Confirmation page on the website. The purpose of this script is to capture the relevant details relating to the user's order.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/qubit-etc/opentaglogos/sub2_logo.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 38742,
		name: "Order ID",
		description: "Order ID",
		token: "orderId",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 38743,
		name: "Affiliation",
		description: "Voucher Code",
		token: "affiliation",
		uv: "universal_variable.transaction.voucher"
	},
	{
		id: 38744,
		name: "Order Total excluding Shipping Cost",
		description: "Order Total",
		token: "total",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 38745,
		name: "Order Tax",
		description: "Order Tax",
		token: "tax",
		uv: "universal_variable.transaction.tax"
	},
	{
		id: 38746,
		name: "Shipping Cost",
		description: "Shipping Cost",
		token: "shipping",
		uv: "universal_variable.transaction.shipping_cost"
	},
	{
		id: 38747,
		name: "City",
		description: "City",
		token: "city",
		uv: "universal_variable.transaction.delivery.city"
	},
	{
		id: 38748,
		name: "County",
		description: "Leave blank if not available",
		token: "county",
		uv: ""
	},
	{
		id: 38749,
		name: "Country",
		description: "Country",
		token: "country",
		uv: "universal_variable.transaction.delivery.country"
	},
	{
		id: 38750,
		name: "List of Product IDs",
		description: "List of Purchased Items",
		token: "product_id",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 38751,
		name: "List of Product Names",
		description: "List of Product Names",
		token: "product_name",
		uv: "universal_variable.transaction.line_items[#].product.name"
	},
	{
		id: 38752,
		name: "List of Product Categories",
		description: "List of Product Categories",
		token: "category_unit",
		uv: "universal_variable.transaction.line_items[#].product.category"
	},
	{
		id: 38753,
		name: "List of Product Prices",
		description: "List of Product Prices",
		token: "unit_price",
		uv: "universal_variable.transaction.line_items[#].product.unit_price"
	},
	{
		id: 38754,
		name: "List of Product Quantities",
		description: "List of Product Quantities",
		token: "quantity",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 38755,
		name: "List of Product SKUs",
		description: "List of Product SKUs",
		token: "sku",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 38809,
		name: "Title",
		description: "Mr, Mrs, Ms",
		token: "title",
		uv: ""
	},
	{
		id: 38810,
		name: "Forename",
		description: "forename",
		token: "forename",
		uv: ""
	},
	{
		id: 38811,
		name: "Last Name",
		description: "last name",
		token: "lastname",
		uv: ""
	},
	{
		id: 38812,
		name: "Address 1",
		description: "Address 1",
		token: "address1",
		uv: "universal_variable.transaction.billing.address"
	},
	{
		id: 38813,
		name: "Address 2",
		description: "Address 2",
		token: "address2",
		uv: "universal_variable.transaction.billing.city"
	},
	{
		id: 38814,
		name: "Address 3",
		description: "Address 3",
		token: "address3",
		uv: "universal_variable.transaction.billing.state"
	},
	{
		id: 38815,
		name: "Address 4",
		description: "Address 4",
		token: "address4",
		uv: "universal_variable.transaction.billing.country"
	},
	{
		id: 38816,
		name: "Postcode",
		description: "postcode",
		token: "postcode",
		uv: "universal_variable.transaction.billing.postcode"
	},
	{
		id: 38817,
		name: "Email",
		description: "Email",
		token: "email",
		uv: "universal_variable.user.email"
	},
	{
		id: 38818,
		name: "Landline",
		description: "Landline",
		token: "landline",
		uv: ""
	},
	{
		id: 38819,
		name: "Mobile",
		description: "Mobile",
		token: "mobile",
		uv: ""
	},
	{
		id: 38820,
		name: "OptIns",
		description: "User Opted for SignUp Or Not",
		token: "optins",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/


(function ()
{
  var ii = 0;
  var waitForConfirmationScripts =function ()
  {
    if ((typeof S2Tech_addOrder === 'function') && (typeof S2Tech_addItem === 'function') && (typeof S2Tech_MatchData_NA === 'function'))
    {
      S2Tech_addOrder("" + this.getValueForToken("orderId") + "", "" + this.getValueForToken("affiliation") + "", "" + this.getValueForToken("total") + "", "" + this.getValueForToken("tax") + "", "" + this.getValueForToken("shipping") + "", "" + this.getValueForToken("city") + "", "" + this.getValueForToken("county") + "", "" + this.getValueForToken("country") + "");

      for (var i = 0; i < this.getValueForToken("product_id").length; i++)
      {
        S2Tech_addItem("" + this.getValueForToken("orderId") + "", this.getValueForToken("sku")[i], this.getValueForToken("product_id")[i], this.getValueForToken("product_name")[i], this.getValueForToken("category_unit")[i], this.getValueForToken("unit_price")[i], this.getValueForToken("quantity")[i]);
      }
      
      S2Tech_MatchData_NA(this.getValueForToken("title"), this.getValueForToken("forename"), this.getValueForToken("lastname"), this.getValueForToken("address1"), this.getValueForToken("address2"), this.getValueForToken("address3"), this.getValueForToken("address4"), this.getValueForToken("postcode"), this.getValueForToken("email"), this.getValueForToken("landline"), this.getValueForToken("mobile"), this.getValueForToken("optins"));
    }
    else if (ii < 50)
    {
       ii++;
       setTimeout(waitForConfirmationScripts, 100);
    }
  };

  waitForConfirmationScripts();

})();



    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
