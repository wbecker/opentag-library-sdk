//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("bing.bingadcentercampaignanalyticsdeprecated.Tag", {
    config: {
      /*DATA*/
	id: 160,
	name: "Bing AdCenter Campaign Analytics DEPRECATED",
	async: true,
	description: "Script to generate reports on the success of your advertising campaigns via Bing Search",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Bing.png",
	locationDetail: "",
	priv: true,
	url: "flex.atdmt.com/mstag/site/${url_guid}/mstag.js",
	usesDocWrite: true,
	parameters: [
	{
		id: 16000,
		name: "URL ID",
		description: "The id in the url of the script, eg fb9804c9-b48f-46d1-a20e-88c3ff3302cc",
		token: "url_guid",
		uv: ""
	},
	{
		id: 16001,
		name: "Domain ID",
		description: "The id common to all bing tracking tags",
		token: "domain_id",
		uv: ""
	},
	{
		id: 16002,
		name: "Action Id",
		description: "The id unique to this tracking tag",
		token: "action_id",
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
(function () {
if (!window.mstag) {
  window.mstag = {
    loadTag : function(){},
    time : (new Date()).getTime()
  };
}
})();
      /*~PRE*/
    },
    post: function () {
      /*POST*/
(function () {
window.mstag.loadTag("analytics",  {
    dedup:"1",
    domainId:"" + this.getValueForToken("domain_id") + "",
    type:"1",
    actionid:"" + this.getValueForToken("action_id") + ""
  });
})();
      /*~POST*/
    }
});
