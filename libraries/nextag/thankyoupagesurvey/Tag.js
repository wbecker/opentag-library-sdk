//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("nextag.thankyoupagesurvey.Tag", {
	config: {
		/*DATA*/
		name: "Thankyou Page Survey",
		async: true,
		description: "The tag to display the NexTag survey on the thanyou page. Any popup dimension can be set to a blank string to take the default value.",
		html: "<link rel=\"stylesheet\" href=\"https://merchants.nextag.com/serv/main/buyer/dhtmlpopup/dhtmlwindow.css\" type=\"text/css\" />\n\n\n\n</script>\n",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/NexTag.png",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: true,
		parameters: [
		{
			name: "Nextag Seller ID",
			description: "",
			token: "nextag_seller_id",
			uv: ""
		},
		{
			name: "Nextag Popup Left",
			description: "Default: Horizontally Centred",
			token: "pop_left",
			uv: ""
		},
		{
			name: "Nextag Popup Top",
			description: "Default: Vertically Centred",
			token: "popup_top",
			uv: ""
		},
		{
			name: "Nextag Popup Width",
			description: "Default: 345px",
			token: "popup_width",
			uv: ""
		},
		{
			name: "Nextag Popup Height",
			description: "Default: 205px",
			token: "popup_height",
			uv: ""
		},
		{
			name: "Nextag Popup Resize",
			description: "Default: 0",
			token: "popup_resize",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/


    (function () {

      window.seller_id = this.valueForToken("nextag_seller_id");

      if ("" + this.valueForToken("pop_left") + "" !== "") {
        window.popup_left = Number("" + this.valueForToken("pop_left") + "");
      }

      if ("" + this.valueForToken("popup_top") + "" !== "") {
        window.popup_top = Number("" + this.valueForToken("popup_top") + "");
      }

      if ("" + this.valueForToken("popup_width") + "" !== "") {
        window.popup_width = Number("" + this.valueForToken("popup_width") + "");
      }

      if ("" + this.valueForToken("popup_height") + "" !== "") {
        window.popup_height = Number("" + this.valueForToken("popup_height") + "");
      }

      if ("" + this.valueForToken("popup_resize") + "" !== "") {
        window.popup_resize = Number("" + this.valueForToken("popup_resize") + "");
      }


    } ());

    document.write('<'+ 'script type="text/javascript" src="https://merchants.nextag.com/seller/review/popup_include.js"><\/script>'); 

    // <script  src="https://merchants.nextag.com/seller/review/popup_include.js"
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
