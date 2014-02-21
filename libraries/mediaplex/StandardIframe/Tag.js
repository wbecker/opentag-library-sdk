//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("mediaplex.StandardIframe", {
    config: {/*DATA*/
	id: 36163,
	name: "Standard iframe",
	async: true,
	description: "The standard iframe can be used on any page which does not send back any parameters. It simply reports that a page has been visited. Example uses: Home page, help, contact us.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/mediaplex.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 35221,
		name: "Mediaplex Client ID",
		description: "The ID assigned to you by Mediaplex",
		token: "client_id",
		uv: ""
	},
	{
		id: 35223,
		name: "Page Name",
		description: "The name of the page being accessed. Typically all lowercase, with underscores",
		token: "page_name",
		uv: ""
	},
	{
		id: 35224,
		name: "Event Name",
		description: "The name of the event triggered. Typically, this is a CamelCased version of the page name",
		token: "event_name",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

(function(){

  var frame = document.createElement("iframe");
  var src = (document.location.protocol === "https:") ? "https://secure." : "http://";
  src = src + "img-cdn.mediaplex.com/0/" + this.getValueForToken("client_id") + "/universal.html?page_name=" + this.getValueForToken("page_name") + "&" + this.getValueForToken("event_name") + "=1&mpuid=";
  frame.src = src;
  frame.height = 1;
  frame.width = 1;
  frame.frameborder = 0;
  document.body.appendChild(frame);

})();


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
