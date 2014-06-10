//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("smartfocus.allpagescss.v1.Tag", {
	config: {
		/*DATA*/
		name: "All Pages (CSS)",
		async: true,
		description: "",
		html: "<!--@SRC@-->",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [

		]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		(function() {
			var styleContent = "";
			styleContent += ".advisor_suggestion_container .item {";
			styleContent += "    margin: 5px;";
			styleContent += "    display: inline-block;";
			styleContent += "    float: none;";
			styleContent += "}";
			styleContent += ".advisor_suggestion_container .item img {";
			styleContent += "    width: 75px;";
			styleContent += "    height: 75px;";
			styleContent += "    padding: 0.25em;";
			styleContent += "}";
			styleContent += ".advisor_suggestion_container .item_text {";
			styleContent += "    padding: 0.5em;";
			styleContent += "    width: 200px;";
			styleContent += "}";
			styleContent += ".advisor_suggestion_container .item_link {";
			styleContent += "     text-decoration:none;";
			styleContent += "}";
			styleContent += ".advisor_suggestion_container {";
			styleContent += "    width: 100%;";
			styleContent += "    align: center;";
			styleContent += "    margin: 0 auto;";
			styleContent += "    text-align: center;";
			styleContent += "    background-color: #FFFFFF;";
			styleContent += "    margin-bottom: 10px;";
			styleContent += "}";

			var style = document.createElement('style');
			style.innerHTML = styleContent;
			document.head.appendChild(style);
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