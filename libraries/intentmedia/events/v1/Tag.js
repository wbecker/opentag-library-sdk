qubit.opentag.LibraryTag.define("intentmedia.events.v1.Tag", {
  getDefaultConfig: function () {
      return {
    /*DATA*/
    name: "Intent Media - Events",
    description: "To be used in conjunction with the Search Compare Ads Tag to handle Intent Media events",
    upgradeable: true,
    html: "",
    async: true,
    parameters: [{
        name: "Intent Media Event",
        description: "Intent Media event to be triggered (e.g.,'open_exit_unit', 'fill_exit_unit', 'page_id_updated', 'onpage_ads_redraw')",
        token: "im_event",
        uv: "",
        defaultValue: ""
    }]
	/*~DATA*/
		};
  },

  script: function () {
    /*SCRIPT*/
      if(this.valueForToken("im_event")) {
          if(IntentMedia && IntentMedia.trigger) {
              IntentMedia.trigger(this.valueForToken("im_event"));
          }
      }
  	/*~SCRIPT*/
  },

  pre: function () {
    /*PRE*/
  	/*~PRE*/
  },

  post: function() {
    /*POST*/
    /*~POST*/
  }
});
