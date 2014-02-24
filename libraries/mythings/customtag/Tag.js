//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("mythings.customtag.Tag", {
    config: {
      /*DATA*/
	id: 33663,
	name: "Custom  Tag",
	async: true,
	description: "This is a custom myThings tracking tag in which the action number can be specified.",
	html: "",
	imageUrl: ".",
	locationDetail: "",
	priv: false,
	url: "https://${subdomain}.mythings.com/c.aspx?atok=${advertiser_token}",
	usesDocWrite: false,
	parameters: [
	{
		id: 32672,
		name: "myThings Advertiser Token",
		description: "Token provided by myThings",
		token: "advertiser_token",
		uv: ""
	},
	{
		id: 32673,
		name: "myThings Subdomain",
		description: "Subdomain specified by myThings, if unsure use \"rainbow-uk\"",
		token: "subdomain",
		uv: ""
	},
	{
		id: 32674,
		name: "myThings Action Number",
		description: "The action number specified for the specific tag",
		token: "action_number",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/
      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
function _mt_ready(){
   if (typeof(MyThings) != "undefined") {
       MyThings.Track({
           EventType: MyThings.Event.Visit,
               Action: "" + this.getValueForToken("action_number") + ""
       });
   }
}

var mtHost = (("https:" == document.location.protocol) ? "https" : "http") + "://" + this.getValueForToken("subdomain") + ".mythings.com";
var mtAdvertiserToken = "" + this.getValueForToken("advertiser_token") + "";
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
