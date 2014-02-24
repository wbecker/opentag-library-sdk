//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("silverpop.webtracking.Tag", {
    config: {
      /*DATA*/
	id: 34668,
	name: "Web Tracking",
	async: true,
	description: "Engage Web Tracking is a tool that tracks visits to your Web sites. You can link this data to individual contacts \nand then target communications to contacts based on their Web behaviors.",
	html: "<meta name=\"com.silverpop.page_name\" content=\"${page_name}\"/>\n<meta name=\"com.silverpop.brandeddomains\" content=\"${branded_domains}\" />\n",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Silverpop.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 33730,
		name: "Secure Domain URL",
		description: "The domain for secure pages on your site provided by your Org Admin",
		token: "secure_domain",
		uv: ""
	},
	{
		id: 33731,
		name: "Non-Secure Domain URL",
		description: "The domain for non-secure pages on your site provided by your Org Admin",
		token: "non_secure_domain",
		uv: ""
	},
	{
		id: 33732,
		name: "Branded Domains",
		description: "The comma separated listed of qualified/unqualified branded domains i.e. www.a.com,b.com,www.c.com",
		token: "branded_domains",
		uv: ""
	},
	{
		id: 33758,
		name: "Page Name",
		description: "The name for the page the tag is currently firing on",
		token: "page_name",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

  var x = document.createElement("script");
  x.src = (document.location.protocol === "https:") 
    ? "" + this.getValueForToken("secure_domain") + ""
    : "" + this.getValueForToken("non_secure_domain") + "";
  x.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(x);


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
