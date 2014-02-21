//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("mythings.VisitorTag", {
    config: {/*DATA*/
	id: 23665,
	name: "Visitor Tag",
	async: true,
	description: "This tag should be placed on ALL pages",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/mythings.png",
	locationDetail: "",
	priv: false,
	url: "${subdomain}.mythings.com/c.aspx?atok=${token}",
	usesDocWrite: true,
	parameters: [
	{
		id: 23222,
		name: "myThings Advertiser Token",
		description: "Value of mtAdvertiserToken",
		token: "token",
		uv: ""
	},
	{
		id: 23223,
		name: "myThings Subdomain",
		description: "subdomian provided for tracking",
		token: "subdomain",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
function _mt_ready(){
   if (typeof(MyThings) != "undefined") {
       MyThings.Track({
           EventType: MyThings.Event.Visit,
               Action: "300"
       });
   }
}

  window.mtHost = (("https:" == document.location.protocol) ? "https://" + this.getValueForToken("subdomain") + "" : "http://" + this.getValueForToken("subdomain") + "") + ".mythings.com";
  window.mtAdvertiserToken = "" + this.getValueForToken("token") + "";
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
