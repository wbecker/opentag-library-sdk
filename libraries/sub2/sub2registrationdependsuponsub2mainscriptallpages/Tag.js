//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("sub2.sub2registrationdependsuponsub2mainscriptallpages.Tag", {
	config: {
		/*DATA*/
		name: "Sub2 - Registration (depends upon \"Sub2 - Main Script - All Pages\")",
		async: true,
		description: "This script should be added to all pages on the site which capture customer contact details, such as email address. \nThe code can be placed on the page such as the Thank You page following registration/newsletter sign up or can be executed \non clicking on the submit button.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/qubit-etc/opentaglogos/sub2_logo.png",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "First Name",
			description: "If not available, leave blank",
			token: "firstname",
			uv: ""
		},
		{
			name: "Last Name",
			description: "If not available, leave blank",
			token: "lastname",
			uv: ""
		},
		{
			name: "Email",
			description: "If not available, leave blank",
			token: "email",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/


(function ()
{
  var waitFor_S2Tech_StoreRegistrationData = setInterval(function ()
  {
    if (typeof S2Tech_StoreRegistrationData === 'function')
    {
      clearInterval(waitFor_S2Tech_StoreRegistrationData);

      S2Tech_StoreRegistrationData("" + this.getValueForToken("firstname") + "", "" + this.getValueForToken("lastname") + "", "" + this.getValueForToken("email") + "");
    }
  }, 100);

  setTimeout(function ()
  {
    clearInterval(waitFor_S2Tech_StoreRegistrationData);
  }, 5000);

})();

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
