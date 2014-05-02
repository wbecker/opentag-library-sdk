//:include tagsdk-current.js
var version = "";
var classPath = "conexance.basketpagedeprecated" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Basket Page [DEPRECATED]",
		async: true,
		description: "Picks up on basket page abandonment",
		html: "\n\n\n",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Conexance.gif",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Web1b1 Function Script URL",
			description: "The full URL of the Web1by1 function script i.e. http://www.your-website.com/w1x1.js",
			token: "web1by1_function_script",
			uv: ""
		}, {
			name: "Web1by1 Config Script URL",
			description: "The full URL of the Web1by1 config parameters script (either production or test)",
			token: "web1by1_config_script",
			uv: ""
		}, {
			name: "Basket SKU List",
			description: "An array containing sku codes of the items currently in the basket",
			token: "sku_list",
			uv: "universal_variable.basket.line_items[#].product.sku_code"
		}, {
			name: "Basket Quantity List",
			description: "An array of the quantities of each respective item currently in the basket",
			token: "quantity_list",
			uv: "universal_variable.basket.line_items[#].quantity"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
    var _this = this;
    var require = function(url, cb) {
      var script = document.createElement("script");
      script.type = "text/javascript";
      if (script.readyState) { //IE
        script.onreadystatechange = function() {
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

    require("" + _this.valueForToken("web1by1_function_script"), function() {
      require("" + _this.valueForToken("web1by1_config_script"), function() {
        for (var i = 0, ii = _this.valueForToken("sku_list").length; i < ii; i++) {
          window.w1x1.scAdd(
            _this.valueForToken("sku_list")[i],
            _this.valueForToken("quantity_list")[i]);
        }
        window.w1x1.scSend();
      });
    });
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