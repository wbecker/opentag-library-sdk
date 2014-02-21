//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("conexance.BasketPage", {
    config: {/*DATA*/
	id: 34662,
	name: "Basket Page",
	async: true,
	description: "Picks up on basket page abandonment",
	html: "\n",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Conexance.gif",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 33681,
		name: "Web1b1 Function Script URL",
		description: "The full URL of the Web1by1 function script i.e. http://www.your-website.com/w1x1.js",
		token: "web1by1_function_script",
		uv: ""
	},
	{
		id: 33682,
		name: "Web1by1 Config Script URL",
		description: "The full URL of the Web1by1 config parameters script (either production or test)",
		token: "web1by1_config_script",
		uv: ""
	},
	{
		id: 33683,
		name: "Basket SKU List",
		description: "An array containing sku codes of the items currently in the basket",
		token: "sku_list",
		uv: "universal_variable.basket.line_items[#].product.sku_code"
	},
	{
		id: 33684,
		name: "Basket Quantity List",
		description: "An array of the quantities of each respective item currently in the basket",
		token: "quantity_list",
		uv: "universal_variable.basket.line_items[#].quantity"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

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
      for (var i = 0, ii = this.getValueForToken("sku_list").length; i < ii; i++) {
        window.w1x1.scAdd(this.getValueForToken("sku_list")[i], this.getValueForToken("quantity_list")[i]);
      }
      window.w1x1.scSend();
    });
  });

}());


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
