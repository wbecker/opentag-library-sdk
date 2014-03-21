//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("mythings.productpagetag.Tag", {
	config: {
		/*DATA*/
		name: "Product Page Tag",
		async: true,
		description: "Only place the following tag on ALL products pages",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/mythings.png",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: true,
		parameters: [
		{
			name: "Advertiser Token",
			description: "advertiser token provided by myThings",
			token: "token",
			uv: ""
		},
		{
			name: "Subdomain",
			description: "subdomain value provided by myThings",
			token: "subdomain",
			uv: ""
		},
		{
			name: "Product ID",
			description: "",
			token: "productId",
			uv: "universal_variable.product.id"
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

function _mt_ready(){
   if (typeof(MyThings) != "undefined") {
       MyThings.Track({
           EventType: MyThings.Event.Visit,
               Action: "1010",
               ProductID: "" + this.valueForToken("productId") + ""
       });
   }
}
var mtHost = (("https:" == document.location.protocol) ? "https" : "http") + "://" + this.valueForToken("subdomain") + ".mythings.com";
var mtAdvertiserToken = "" + this.valueForToken("token") + "";
document.write(unescape("%3Cscript src='" + mtHost + "/c.aspx?atok="+mtAdvertiserToken+"' type='text/javascript'%3E%3C/script%3E"));
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
