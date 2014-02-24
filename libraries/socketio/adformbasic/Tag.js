//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("socketio.adformbasic.Tag", {
    config: {
      /*DATA*/
	id: 29664,
	name: "AdForm - Basic",
	async: true,
	description: "To be placed on any page except order confirmation pages.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/adform.png",
	locationDetail: "",
	priv: false,
	url: "track.adform.net/serving/scripts/trackpoint/async/",
	usesDocWrite: false,
	parameters: [
	{
		id: 28697,
		name: "Adform Campaign ID",
		description: "The unique client ID for the AdForm tracking script",
		token: "campaignid",
		uv: ""
	},
	{
		id: 28699,
		name: "AdForm Point ID",
		description: "Point ID for the tag. Usually unique to page type.",
		token: "pointid",
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
(function() {
 console.log("Im just a pre!");
  window._adftrack = {
    pm: this.getValueForToken("campaignid"),
    id: this.getValueForToken("pointid")
  };

})();
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
