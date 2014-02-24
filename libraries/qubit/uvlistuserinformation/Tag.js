//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("qubit.uvlistuserinformation.Tag", {
    config: {
      /*DATA*/
	id: 23660,
	name: "UV List - User Information",
	async: true,
	description: "Test Universal Variables regarding users",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/qubit_Q.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 23197,
		name: "User Full Name",
		description: "",
		token: "a",
		uv: "universal_variable.user.name"
	},
	{
		id: 23198,
		name: "User Username",
		description: "",
		token: "b",
		uv: "universal_variable.user.username"
	},
	{
		id: 23199,
		name: "User ID",
		description: "",
		token: "c",
		uv: "universal_variable.user.user_id"
	},
	{
		id: 23200,
		name: "User Email",
		description: "",
		token: "d",
		uv: "universal_variable.user.email"
	},
	{
		id: 23201,
		name: "User Language Preference",
		description: "",
		token: "e",
		uv: "universal_variable.user.language"
	},
	{
		id: 23202,
		name: "User is Returning",
		description: "",
		token: "f",
		uv: "universal_variable.user.returning"
	},
	{
		id: 23203,
		name: "User Facebook ID",
		description: "",
		token: "g",
		uv: "universal_variable.user.facebook_id"
	},
	{
		id: 23204,
		name: "User Twitter ID",
		description: "",
		token: "h",
		uv: "universal_variable.user.twitter_id"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/

console.log("" + this.getValueForToken("a") + "");
console.log("" + this.getValueForToken("b") + "");
console.log("" + this.getValueForToken("c") + "");
console.log("" + this.getValueForToken("d") + "");
console.log("" + this.getValueForToken("e") + "");
console.log("" + this.getValueForToken("f") + "");
console.log("" + this.getValueForToken("g") + "");
console.log("" + this.getValueForToken("h") + "");


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
