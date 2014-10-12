//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("microsoft.trackevent.v1.Tag", {
    config: {
      /*DATA*/
      name: "Track Event",
      async: false,
      description: "Track an event in Universal Event Tracking",
      html: "",
      locationDetail: "",
      isPrivate: false,
      url: "",
      usesDocWrite: false,
      upgradeable: true,
      parameters: [{
        name: "Event Category",
        description: "The category of the event",
        token: "ec"
      }, {
        name: "Event Action",
        description: "The action value for the event",
        token: "ea"
      }, {
        name: "Event Label",
        description: "The label for the event",
        token: "el"
      }, {
        name: "Event Value",
        description: "The value for the event",
        token: "ev"
      }]
      /*~DATA*/
    },
    script: function() {
      /*SCRIPT*/
      window.uetq = window.uetq || [];
      window.uetq.push({
        'ec': this.valueForToken('ec') + '',
        'ea': this.valueForToken('ea') + '',
        'el': this.valueForToken('el') + '',
        'ev': this.valueForToken('ev') + ''
      });

      /*~SCRIPT*/
    },
    pre: function() {
      /*PRE*/
      /*~PRE*/
	},
	post: function() {
	/*POST*/
	/* ~POST*/
}
});