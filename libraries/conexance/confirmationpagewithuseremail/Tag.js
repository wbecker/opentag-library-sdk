//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("conexance.confirmationpagewithuseremail.Tag", {
    config: {
      /*DATA*/
	name: "Confirmation page - with user email",
	async: true,
	description: "To be placed on the confirmation page. Tracks order transactions. Order number is compulsory all other parameters should be filled with 0 if unavailable. No currency symbols allowed.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Conexance.gif",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		name: "Web1by1 Function Script URL",
		description: "The full URL of the Web1by1 functions script i.e. http://www.your-website.com/w1x1.js",
		token: "web1by1_function_script",
		uv: ""
	},
	{
		name: "Web1by1 Configuration Parameters  Script URL",
		description: "The full URL of the Web1by1 configuration parameters script (either production or test)",
		token: "web1by1_config_script",
		uv: ""
	},
	{
		name: "Confirmation ID",
		description: "The unique identifier corresponding to the current transaction",
		token: "confirmation_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		name: "Order Sub-total",
		description: "The total cost of the transaction (excluding shipping/tax)",
		token: "order_total",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		name: "Shipping Cost",
		description: "The cost of shipping for the transaction",
		token: "shipping_cost",
		uv: "universal_variable.transaction.shipping_cost"
	},
	{
		name: "Tax",
		description: "The cost of tax for the transaction",
		token: "tax",
		uv: "universal_variable.transaction.tax"
	},
	{
		name: "Other Costs",
		description: "Other costs to be included in the tag",
		token: "other",
		uv: ""
	},
	{
		name: "User email",
		description: "",
		token: "email",
		uv: "universal_variable.user.email"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

(function() {

  var require = function(url, cb) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) { //IE
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          cb();
        }
      };
    } else { //Others
      script.onload = cb;
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };

  require("" + this.getValueForToken("web1by1_function_script") + "", function() {
    require("" + this.getValueForToken("web1by1_config_script") + "", function() {
      window.w1x1.sSend("" + this.getValueForToken("confirmation_id") + "", this.getValueForToken("order_total"), this.getValueForToken("tax"), this.getValueForToken("shipping_cost"), this.getValueForToken("other"));
      window.w1x1.iSet('e','' + this.getValueForToken("email") + '');
    });
  });

}());


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
