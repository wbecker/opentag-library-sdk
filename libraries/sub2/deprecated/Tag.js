//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("sub2.deprecated.Tag", {
	config: {
		/*DATA*/
		name: "DEPRECATED",
		async: true,
		description: "The script should be added to the Order Confirmation page on the website. The purpose of this script is to capture the relevant details relating to the user's order.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/qubit-etc/opentaglogos/sub2_logo.png",
		locationDetail: "",
		priv: true,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Order ID",
			description: "Transaction Order ID",
			token: "orderId",
			uv: "universal_variable.transaction.order_id"
		},
		{
			name: "Affiliation",
			description: "Voucher Code",
			token: "affiliation",
			uv: "universal_variable.transaction.voucher"
		},
		{
			name: "Order Total excluding Shipping Cost",
			description: "Order Total",
			token: "total",
			uv: "universal_variable.transaction.subtotal"
		},
		{
			name: "Order Tax",
			description: "Order Tax",
			token: "tax",
			uv: "universal_variable.transaction.tax"
		},
		{
			name: "Shipping Cost",
			description: "Shipping Cost",
			token: "shipping",
			uv: "universal_variable.transaction.shipping_cost"
		},
		{
			name: "City",
			description: "City",
			token: "city",
			uv: "universal_variable.transaction.delivery.city"
		},
		{
			name: "Country",
			description: "Country",
			token: "country",
			uv: "universal_variable.transaction.delivery.country"
		},
		{
			name: "List of Product IDs",
			description: "List of Purchased items",
			token: "product_id",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/


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
        S2Tech_addItem("" + this.getValueForToken("orderId") + "", this.getValueForToken("sku")[i], this.getValueForToken("product_name")[i], this.getValueForToken("category_unit")[i], this.getValueForToken("unit_price")[i], this.getValueForToken("quantity")[i]);
      }
      
      S2Tech_MatchData_NA("" + this.getValueForToken("title") + "", "" + this.getValueForToken("forename") + "", "" + this.getValueForToken("lastname") + "", "" + this.getValueForToken("address1") + "", "" + this.getValueForToken("address2") + "", "" + this.getValueForToken("address3") + "", "" + this.getValueForToken("address4") + "", "" + this.getValueForToken("postcode") + "", "" + this.getValueForToken("email") + "", "" + this.getValueForToken("landline") + "", "" + this.getValueForToken("mobile") + "", "" + this.getValueForToken("optins") + "");
    }
    else if (ii < 50)
    {
       ii++;
       setTimeout(waitForConfirmationScripts, 100);
    }
  };

  waitForConfirmationScripts();

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
