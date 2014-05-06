//:include tagsdk-current.js
var tagVersion = "";
var classPath = "exacttarget.landingpage" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Landing Page",
		async: true,
		description: "This tag should fire on the page where a subscriber lands when they click the landing page link in the ExactTarget email. The URL of such an Exact Target landing page should look like this : http://*your site's landing page URL*?j=*JobIDvalue*&l=*ListIDvalue*&e=*emailValue*&u=*LinkIDvalue*&jb=*BatchIDvalue*&mid=*MemberIDvalue*. The tag will drop a cookie for each of these query parameters found in the URL (along with their values) : job ID (identifier of this email send), subscriber email address, list ID, ID of the landing page URL, job batch ID, your ExactTarget account number (member ID). These values will be picked up later by the Conversion Page tag.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/qubit-etc/opentaglogos/exacttarget.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Cookie Duration",
			description: "Number of days the cookie should last",
			token: "expire",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		var ExpireDays = this.valueForToken("expire");
		qstr = document.location.search;
		qstr = qstr.substring(1, qstr.length);

		function SetCookie(cookieName, cookieValue, nDays) {
			var today = new Date();
			var expire = new Date();
			if (nDays == null || nDays == 0) nDays = 1;
			expire.setTime(today.getTime() + 3600000 * 24 * nDays);
			document.cookie = cookieName + "=" + escape(cookieValue) + "; expires=" +
				expire.toGMTString() + "; path=/";
		}

		thevars = qstr.split("&");
		for (i = 0; i < thevars.length; i++) {
			cookiecase = thevars[i].split("=");
			switch (cookiecase[0]) {
				case "e":
					e = cookiecase[1];
					SetCookie("EmailAddr", e, ExpireDays);
					break;
				case "j":
					j = cookiecase[1];
					SetCookie("JobID", j, ExpireDays);
					break;
				case "l":
					l = cookiecase[1];
					SetCookie("ListID", l, ExpireDays);
					break;
				case "jb":
					jb = cookiecase[1];
					SetCookie("BatchID", jb, ExpireDays);
					break;
				case "u":
					u = cookiecase[1];
					SetCookie("UrlID", u, ExpireDays);
					break;
				case "mid":
					mid = cookiecase[1];
					SetCookie("MemberID", mid, ExpireDays);
					break;
				default:
					break;
			}
		}

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