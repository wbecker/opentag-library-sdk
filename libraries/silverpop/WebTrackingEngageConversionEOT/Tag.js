//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("silverpop.WebTrackingEngageConversionEOT", {
    config: {/*DATA*/
	id: 34677,
	name: "Web Tracking (Engage Conversion EOT)",
	async: true,
	description: "Web tracking if you use Engage Conversion Tracking EOT",
	html: "<meta name=\"com.silverpop.page_name\" content=\"${page_name}\"/>\n<meta name=\"com.silverpop.brandeddomains\" content=\"${branded_domains}\" />\n<meta name=\"com.silverpop.cothost\" content=\"${cot_host}\" />\n",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Silverpop.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 33759,
		name: "Page Name",
		description: "The name of the page the tag is current on",
		token: "page_name",
		uv: ""
	},
	{
		id: 33760,
		name: "Branded Domains",
		description: "The comma separated listed of qualified/unqualified branded domains i.e. www.a.com,b.com,www.c.com",
		token: "branded_domains",
		uv: ""
	},
	{
		id: 33761,
		name: "Secure Domain",
		description: "The domain for secure pages on your site provided by your Org Admin",
		token: "secure_domain",
		uv: ""
	},
	{
		id: 33762,
		name: "Non-secure Domain",
		description: "The domain for non-secure pages on your site provided by your Org Admin",
		token: "non_secure_domain",
		uv: ""
	},
	{
		id: 33763,
		name: "Engage Conversion Tracking COT Host",
		description: "The host for the Engage Conversion Tracking meta tag e.g. engage5.sliverpop.com",
		token: "cot_host",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

  var x = document.createElement("script");
  x.src = (document.location.protocol === "https:") 
    ? "" + this.getValueForToken("secure_domain") + ""
    : "" + this.getValueForToken("non_secure_domain") + "";
  x.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(x);


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
