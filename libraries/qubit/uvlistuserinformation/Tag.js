//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("qubit.uvlistuserinformation.Tag", {
	config: {
		/*DATA*/
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
			name: "User Full Name",
			description: "",
			token: "a",
			uv: "universal_variable.user.name"
		},
		{
			name: "User Username",
			description: "",
			token: "b",
			uv: "universal_variable.user.username"
		},
		{
			name: "User ID",
			description: "",
			token: "c",
			uv: "universal_variable.user.user_id"
		},
		{
			name: "User Email",
			description: "",
			token: "d",
			uv: "universal_variable.user.email"
		},
		{
			name: "User Language Preference",
			description: "",
			token: "e",
			uv: "universal_variable.user.language"
		},
		{
			name: "User is Returning",
			description: "",
			token: "f",
			uv: "universal_variable.user.returning"
		},
		{
			name: "User Facebook ID",
			description: "",
			token: "g",
			uv: "universal_variable.user.facebook_id"
		},
		{
			name: "User Twitter ID",
			description: "",
			token: "h",
			uv: "universal_variable.user.twitter_id"
		}
	]
		/*~DATA*/
	},
	script: function() {
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
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});
