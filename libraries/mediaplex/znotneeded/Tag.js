//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("mediaplex.znotneeded.Tag", {
    config: {
      /*DATA*/
	id: 36166,
	name: "z Not Needed",
	async: true,
	description: "Converted all pixels to use the same protocol as the page.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/mediaplex.png",
	locationDetail: "",
	priv: true,
	url: "https://secure.img-cdn.mediaplex.com/0/${client_id}/universal.html?page_name=${page_name}&${event_name}=1&mpuid=",
	usesDocWrite: false,
	parameters: [
	{
		id: 35214,
		name: "Mediaplex Client ID",
		description: "The ID assigned to you by Mediaplex",
		token: "client_id",
		uv: ""
	},
	{
		id: 35215,
		name: "Page Name",
		description: "The name of the page being accessed. Typically all lowercase, with underscores",
		token: "page_name",
		uv: ""
	},
	{
		id: 35216,
		name: "Event Name",
		description: "The name of the event triggered. Typically, this is a CamelCased version of the page name",
		token: "event_name",
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
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
