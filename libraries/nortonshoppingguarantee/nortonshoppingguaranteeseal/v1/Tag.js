//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("nortonshoppingguarantee.nortonshoppingguaranteeseal.v1.Tag", {
	config: {
		/*DATA*/
		name: "Norton Shopping Guarantee Seal",
		async: false,
		description: "This Tag enables the Norton Shopping Guarantee Seal, and should be placed on all pages within your ecommerce site.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: [
      "//nsg.symantec.com/private/rollover/rollover.js"
    ],
		usesDocWrite: false,
		upgradeable: true,
		parameters: [
      {
        token: "Hash",
        name: "Guarantee Seal Hash",
        description: "This value will be provided to you during integration."
      }
    ]
		/*~DATA*/
	},
	script: function() {
	/*SCRIPT*/

    if(window._GUARANTEE && _GUARANTEE.Loaded) {
      // Check to see if a seal span is already present.  If not, create one.
      var id      = '_GUARANTEE_SealSpan';
      var span    = document.getElementById(id);
      if(!span) {
        span      = document.createElement('span');
        span.id   = id;
        document.body.insertBefore(span, document.body.firstChild);
      }
      // Make the Seal call
      _GUARANTEE.Hash = this.valueForToken('Hash');
      _GUARANTEE.WriteSeal(id, "GuaranteedSeal");
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
