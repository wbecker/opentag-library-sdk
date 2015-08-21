//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("microsoft.universaleventracking.v1.Tag", {
    getDefaultConfig: function () {
      return {
      /*DATA*/
      name: "Universal Event Tracking",
      async: false,
      description: "Universal Event Tracking (UET) Tag is a snippet of JavaScript code that is used for track conversions and re-messaging.",
      html: "",
      locationDetail: "",
      isPrivate: false,
      url: "",
      usesDocWrite: false,
      upgradeable: true,
      parameters: [{
        name: "Tag ID",
        description: "The Microsoft TagID for your account.",
        token: "tagID"
      }]
      /*~DATA*/
		};
    },
    script: function() {
      /*SCRIPT*/
      (function(w, d, t, r, u) {
        var f, n, i;
        w[u] = w[u] || [], f = function() {
          var o = {
            ti: this.valueForToken("tagID") + ""
          };
          o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad")
        }, n = d.createElement(t), n.src = r, n.async = 1, n.onload = n.onreadystatechange = function() {
          var s = this.readyState;
          s && s !== "loaded" && s !== "complete" || (f(), n.onload = n.onreadystatechange = null)
        }, i = d.getElementsByTagName(t)[0], i.parentNode.insertBefore(n, i)
      })(window, document, "script", "//bat.bing.com/bat.js", "uetq");
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