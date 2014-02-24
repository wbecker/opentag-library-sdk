//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("hubspot.analytics.Tag", {
    config: {/*DATA*/
	id: 35179,
	name: "Analytics",
	async: true,
	description: "For all Professional and Enterprise HubSpot customers that want to use HubSpot's website analytics on a non-HubSpot hosted website.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/HubSpot.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 34303,
		name: "Hubspot ID",
		description: "",
		token: "id",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

  (function(d,s,i,r) {
    if (d.getElementById(i)){return;}
    var n=d.createElement(s),e=d.getElementsByTagName(s)[0];
    n.id=i;n.src='//js.hubspot.com/analytics/'+(Math.ceil(new Date()/r)*r)+'/' + this.getValueForToken("id") + '.js';
    e.parentNode.insertBefore(n, e);
  })(document,"script","hs-analytics",300000);


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
