//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("google.exampleoflibrary.Tag", {
    config: {
      /*DATA*/
	name: "Example of Library",
	async: true,
	description: "Just an example",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Google.jpeg",
	locationDetail: "",
	priv: true,
	url: "",
	usesDocWrite: true,
	parameters: [
	{
		name: "Conversion Value",
		description: "The value of the conversion. This should be a number, or 0 if there is no value to the conversion",
		token: "value",
		uv: ""
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/
	//here we are!
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
