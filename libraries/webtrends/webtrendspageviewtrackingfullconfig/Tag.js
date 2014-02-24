//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("webtrends.webtrendspageviewtrackingfullconfig.Tag", {
    config: {
      /*DATA*/
	id: 36193,
	name: "Webtrends pageview tracking - full config",
	async: true,
	description: "The main WebTrends tag with full configuration options. Should be placed on every page. See http://help.webtrends.com/en/jstag/ for full details of the different parameters.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/webtrends.jpg",
	locationDetail: "",
	priv: false,
	url: "d22rutvoghj3db.cloudfront.net/opentag-cdn/webtrends.min.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 35327,
		name: "SmartSource Site ID",
		description: "The SmartSource Site id (DCSID).",
		token: "id",
		uv: ""
	},
	{
		id: 35328,
		name: "Data Collection Server URI",
		description: "The hostname for the tracking pixels e.g. pdx-sdc.webtrends.com",
		token: "domain",
		uv: ""
	},
	{
		id: 35329,
		name: "Timezone",
		description: "(int) The Web server time zone field contains the time zone of your web server. Use 0 for GMT.",
		token: "timezone",
		uv: ""
	},
	{
		id: 35330,
		name: "Cookie Name",
		description: "What do you want to call the first party tracking cookie? e.g. \"mysite_webtrends\"",
		token: "cookie_name",
		uv: ""
	},
	{
		id: 35331,
		name: "First party cookie domain",
		description: "Specifies the primary domain of the web site you want to track e.g: \".yourbusiness.com\"",
		token: "fpc_domain",
		uv: ""
	},
	{
		id: 35332,
		name: "Disable 3rd party cookies?",
		description: "(boolean) Disable the WebTrends 3rd party cookie for cross domain tracking?",
		token: "disabled_cookie",
		uv: ""
	},
	{
		id: 35333,
		name: "User ID",
		description: "The id of the logged in user.",
		token: "user_id",
		uv: "universal_variable.user.user_id"
	},
	{
		id: 35334,
		name: "Preserve config",
		description: "(boolean) Set to true for regular functionality.",
		token: "preserve_config",
		uv: ""
	},
	{
		id: 35335,
		name: "Meta tag fields",
		description: "CSV list of meta tags you wish to read the content attribute from e.g \"fruit1,fruit2,fruit3\"",
		token: "meta_names",
		uv: ""
	},
	{
		id: 35336,
		name: "Tracking Delay",
		description: "Maximum wait time to wait for a callback function in multiTrack in ms. Set to 120 for the standard.",
		token: "tracking_delay",
		uv: ""
	},
	{
		id: 35337,
		name: "Tracking enabled",
		description: "(boolean) Set to true to enable tracking. Set to false for a global way of disabling all tracking.",
		token: "data_collection_on",
		uv: ""
	},
	{
		id: 35338,
		name: "Internationalization",
		description: "(boolean) Turns internationalization support on, used for the encoding conversion plug-in.",
		token: "internationalization",
		uv: ""
	},
	{
		id: 35339,
		name: "Cookie Types",
		description: "Types of cookies to use: either use \"firstPartyOnly\", \"none\", \"all\"",
		token: "cookieTypes",
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
window.webtrendsAsyncInit = function() {

  var options = {

    // Top level settings
    dcsid: "" + this.getValueForToken("id") + "", 
    domain: "" + this.getValueForToken("domain") + "",
    timezone: this.getValueForToken("timezone"), // int

    // Cookie settings
    fpc: "" + this.getValueForToken("cookie_name") + "",
    fpcdom: "" + this.getValueForToken("fpc_domain") + "",
    cookieTypes: "" + this.getValueForToken("cookieTypes") + "",
    disablecookie: this.getValueForToken("disabled_cookie"), // bool 

    // Tracking functionality
    preserve: this.getValueForToken("preserve_config"),   // bool 
    metanames: "" + this.getValueForToken("meta_names") + "",
    dcsdelay: this.getValueForToken("tracking_delay"), // int

    // Misc
    enabled: this.getValueForToken("data_collection_on"), // bool
    i18n: this.getValueForToken("internationalization"),  // bool
    
  };

    // User id
  var userId = "" + this.getValueForToken("user_id") + "";
  if (userId) options.vtid = userId;

  var dcs = new Webtrends.dcs(options);
  dcs.init(options);
  dcs.track();

};
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
