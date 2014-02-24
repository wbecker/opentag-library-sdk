//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("sub2.sub2contactdetailsdependsuponsub2mainscriptallpages.Tag", {
    config: {/*DATA*/
	id: 39675,
	name: "Sub2 - Contact Details (depends upon \"Sub2 - Main Script - All pages\")",
	async: true,
	description: "The purpose of this script is to capture the relevant contact details of any visitor to the site who has provided these details as part of the order, account creation or brochure request process. It should fire on all pages that contain these details.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/qubit-etc/opentaglogos/sub2_logo.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 38733,
		name: "Title",
		description: "e.g. Mr - if not available, leave blank",
		token: "title",
		uv: ""
	},
	{
		id: 38734,
		name: "First Name",
		description: "e.g. John - if not available, leave blank",
		token: "firstname",
		uv: ""
	},
	{
		id: 38735,
		name: "Last Name",
		description: "e.g. Smith - if not available, leave blank",
		token: "lastname",
		uv: ""
	},
	{
		id: 38736,
		name: "Address",
		description: "e.g. 20 Some Street - if not available, leave blank",
		token: "address",
		uv: ""
	},
	{
		id: 38737,
		name: "Postcode",
		description: "e.g. W1F 8HT - if not available, leave blank",
		token: "postcode",
		uv: ""
	},
	{
		id: 38738,
		name: "Email",
		description: "e.g. john.smith@someemail.com - if not available, leave blank",
		token: "email",
		uv: ""
	},
	{
		id: 38739,
		name: "Landline",
		description: "e.g. 07123456789 - if not available, leave blank",
		token: "landline",
		uv: ""
	},
	{
		id: 38740,
		name: "Mobile",
		description: "e.g. 07123456789 - if not available, leave blank",
		token: "mobile",
		uv: ""
	},
	{
		id: 38741,
		name: "OptIns",
		description: "Y if user wants to be contacted, N if not",
		token: "OptIns",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/


(function ()
{  
  var waitFor_S2Tech_MatchData_NA = setInterval(function ()
  {
    if (typeof S2Tech_MatchData_NA === 'function')
    {
      clearInterval(waitFor_S2Tech_MatchData_NA);

      S2Tech_MatchData_NA("" + this.getValueForToken("title") + "","" + this.getValueForToken("firstname") + "","" + this.getValueForToken("lastname") + "","" + this.getValueForToken("address") + "","" + this.getValueForToken("postcode") + "","" + this.getValueForToken("email") + "", "" + this.getValueForToken("landline") + "", "" + this.getValueForToken("mobile") + "", "" + this.getValueForToken("OptIns") + "");
    }
  }, 100);

  setTimeout(function ()
  {
    clearInterval(waitFor_S2Tech_MatchData_NA);
  }, 5000);

})();



    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
