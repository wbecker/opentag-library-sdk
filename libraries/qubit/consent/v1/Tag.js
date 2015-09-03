//:import sdk.releases.Current

qubit.Quick.library("qubit.consent.v1.Tag", {
  getDefaultConfig: function () { 
    return {
    /*config*/
    name: "Qubit Consent Library",
    async: true,
    active: false,
    description: "Consent library allows to easy create cookie consent banner.",
    html: "",
    locationDetail: "",
    isPrivate: false,
    url: "d3c3cq33003psk.cloudfront.net/consent/consent-widget-1.1.0.min.js",
    usesDocWrite: false,
    upgradeable: true,
    consentConfig: null,
    parameters: []
    /*~config*/
		};
  },
  script: function () {
    /*script*/
    /*~script*/
  },
  pre: function () {
    /*pre*/
    var container = qubit.opentag.Tags.findTagContainers(this)[0];
    if (container) {
      var clientId = container.config.clientId;
      var profileId = container.getContainerId();
      this.openConsent(clientId, profileId);
    } else {
      this.openConsent();
    }
    /*~pre*/
  },
  post: function () {
    /*post*/
    /*~post*/
  },
  openConsent: function (clientId, profileId) {
    var _q_pd = document.createElement("script");
    _q_pd.src = "//d3c3cq33003psk.cloudfront.net/PostData.js";
    document.getElementsByTagName("head")[0].appendChild(_q_pd);
    var _q_ping = function (type, reason) {
      if (!window._q_) {
        setTimeout(function () {
          _q_ping(type);
        }, 100);
      } else {
        if (clientId && profileId) {
          window._q_.PostData(
            "//pong.qubitproducts.com/s?tid=" + clientId + "_" + profileId +
            "&time=" + new Date().getTime() +
            "&type=" + type +
            "&r=" + reason);
        }
      }
    };

    //=Q=

    var qcw = this.getDefaultConfiguration();
    window.qcw = qcw;

    //=E=

    var consentConfig = this.config.consentConfig;
    
    //override defaults wherever defined.
    if (consentConfig) {
      for (var prop in consentConfig) {
        if (consentConfig.hasOwnProperty(prop) 
                && prop !== "status"
                && prop !== "popup") {
          qcw[prop] = consentConfig[prop];
        }
      }
      var status = consentConfig.status;
      if (status) {
        for (var prop in status) {
          if (status.hasOwnProperty(prop)) {
            qcw.status[prop] = status[prop];
          }
        }
      }
      var popup = consentConfig.popup;
      if (popup) {
        for (var prop in popup) {
          if (popup.hasOwnProperty(prop)) {
            qcw.popup[prop] = popup[prop];
          }
        }
      }
    }

    //=E=

    qcw.onUserAccept = function (reason) {
      if (window.opentag_consentGiven) {
        window.opentag_consentGiven();
      }
      if (window._q_ping) {
        window._q_ping("consentAccept", reason);
      }
    };
    qcw.onUserDecline = function (reason) {
      if (window._q_ping) {
        window._q_ping("consentDecline", reason);
      }
    };
    qcw.onPostCreate = function (reason) {
      if (window._q_ping) {
        window._q_ping("consentShown", reason);
      }
    };
    qcw.onUserDismiss = function (reason) {
      if (window._q_ping) {
        window._q_ping("consentDismiss", reason);
      }
    };
  },
  getDefaultConfiguration: function () {
    var background =
      'https://d3c3cq33003psk.cloudfront.net/consent/img/background-image.png';
    var cImage = 'https://d3c3cq33003psk.cloudfront.net/consent/img/cbg_w.png';
    return {
      // Popup display configuration
      mode: "notification",
      acceptButtonText: "Enable Cookies",
      declineButtonText: "No, Thank You",
      acceptButtonId: "buttonAccept",
      declineButtonId: "buttonDecline",
      cookieStatusId: "cookieStatus",
      cookieAndPrivacyAndPolicyId: "cookieAndPrivacy",
      closeButtonText: "Dismiss",
      closeButtonId: "closePopup",
      statusAcceptedText: "Cookies Enabled",
      statusDeclinedText: "Cookies Disabled",
      cookieAndprivacyPolicyText: "privacy and cookies policy",
      cookieAndprivacyPolicyUrl:
              "http://www.yoursite.com/privacy",
      cookieDomain: "",
      whenIgnoredShowPopup: true, // When cookie not set, show popup?
      whenIgnoredShowStatus: true, // When cookie not set, show status?
      whenAcceptedHideStatus: true, // hide status on acceptance
      onIgnoreShowEvery: 2, // Message repeat (minutes)
      sampleRate: 1, // Message repeat (minutes)
      hidePopupOnBlur: true, // hide when clicked outside of popup
      onUserAccept: null, // Callback
      onUserDecline: null, // Callback
      onUserDismiss: null, // Callback
      onPreCreate: null, // Callback, before content is appended
      onPostCreate: null, // Callback after content is appended
      name: "internal config",
      cookieExpiryDays: 365, // Use by Cookie (session vs persitent)

      popup: {
        iframeCss: [
          'top: 0;\n',
          'left: 0;\n',
          'height: 185px;\n',
          'width: 100%;\n',
          'box-shadow: 0 0 20px 0px #888;\n',
          'z-index: 2147483647;' // note: Safari 3 will use 16777271
        ].join("\n"),
        headerHtml: [
          '<div class="content">\n',
          '  <div class="action-header">\n',
          '    <div class="close" id="{{closeButtonId}}">\n',
          '      {{closeButtonText}}\n',
          '    </div>\n',
          '  </div>\n',
          '</div>\n'
        ].join("\n"),
        contentCss: [
          'body {\n',
          '  padding-top: 8px;\n',
          '  text-align: center;\n',
          '  background: url("',
          cImage,
          '") repeat;\n',
          '  font-size: 12px;\n',
          '  line-height: 17px;\n',
          '  font-family: arial, helvetica;\n',
          '  color: #555;\n',
          '  text-shadow: 0px 0px 1px #CCC;\n',
          '}\n',
          '.content {\n',
          '  text-align: left;\n',
          '  width: 800px;\n',
          '  margin: 0 auto;\n',
          '  padding-top: 5px;\n',
          '}\n',
          'body p {\n',
          '  margin: 5px 0px;\n',
          '}\n',
          'a {\n',
          '  color: #2e9dc5;\n',
          '}\n',
          'h1 {\n',
          '  font-size: 1.4em;\n',
          '}\n',
          '.action-footer {\n',
          '  margin-top: 0px;\n',
          '}\n',
          '.action-footer .button {\n',
          '  padding: 5px 8px;\n',
          '  line-height: 16px;\n',
          '  cursor: pointer;\n',
          '}\n',
          '#{{closeButtonId}} {\n', // close button
          '  vertical-align: middle\n',
          '  color: #939598;\n',
          '  padding: 5px 10px 5px 10px;\n',
          '  font-size: 13px;\n',
          '  text-decoration: none;\n',
          '  margin-top: 0px;\n',
          '  float: right;\n',
          '  cursor: pointer;\n',
          '  border: 1px solid #EEE;\n',
          '  background: #EEE;\n',
          '  border-radius: 5px;\n',
          '}\n',
          '.action-footer #{{acceptButtonId}} {\n',
          '  -moz-box-shadow:inset 0px 1px 0px 0px #bbdaf7;\n',
          '  -webkit-box-shadow:inset 0px 1px 0px 0px #bbdaf7;\n',
          '  box-shadow:inset 0px 1px 0px 0px #bbdaf7;\n',
          '  background:-webkit-gradient( linear, left top, left ' +
                  'bottom, color-stop(0.05, #35b7de), color-stop(1, #0189a1));\n',
          '  background:-moz-linear-gradient( center top, #35b7de 5%,' +
                  ' #0189a1 100% );\n',
          '  filter:progid:DXImageTransform.Microsoft.gradient(' +
                  'startColorstr="#35b7de", endColorstr="#0189a1");\n',
          '  background-color:#35b7de;\n',
          '  -moz-border-radius:4px;\n',
          '  -webkit-border-radius:4px;\n',
          '  border-radius:4px;\n',
          '  border:1px solid #0189a1;\n',
          '  display:inline-block;\n',
          '  color:#fff;\n',
          '  font-weight:normal;\n',
          '  text-decoration:none;\n',
          '  vertical-align: middle;\n',
          '  float:right;\n',
          '}\n',
          '.action-footer #{{acceptButtonId}}:hover {\n',
          '  background:-webkit-gradient( linear, left top, left ' +
                  'bottom, color-stop(0.05, #0189a1), color-stop(1, #35b7de));\n',
          '  background:-moz-linear-gradient( center top,' +
                  ' #0189a1 5%, #35b7de 100% );\n',
          '  filter:progid:DXImageTransform.Microsoft.gradient(' +
                  'startColorstr="#0189a1", endColorstr="#35b7de");\n',
          '  background-color:#0189a1;\n',
          '}\n',
          '.action-footer #{{acceptButtonId}}:active {\n',
          '  position:relative;\n',
          '  top: 1px;\n',
          '}\n',
          '.action-footer #{{declineButtonId}} {\n',
          '  color: #555;\n',
          '  float:right;\n',
          '  margin-right: 15px;\n',
          '}\n'
        ].join("\n"),
        contentHtml: [
          '<div class="content">\n',
          '  <h1>Privacy and Cookies</h1>\n',
          '  <p>\n',
          '    For this website to run at its best, we ask the browser\n',
          '    (like Google Chrome and Internet Explorer) for a little \n',
          '    personal information. Nothing drastic, just enough to \n',
          '    remember your preferences, login ID, and what you like to \n',
          '    look at (on our site). Having this information to hand  \n',
          '    helps us understand your needs and improve our\n',
          '    service to you. \n',
          '  </p>\n',
          '  <p>\n',
          '  If you would like to learn more about the information we \n',
          '  store, how it is used or how to disable Cookies please read our\n',
          '    <a href="{{cookieAndprivacyPolicyUrl}}" \n',
          '      target = "_blank"\n',
          '      id="{{cookieAndPrivacyAndPolicyId}}">\n',
          '      {{cookieAndprivacyPolicyText}}\n',
          '    </a>.\n',
          '  </p>\n',
          '</div>\n'
        ].join("\n"),
        footerHtml: [
          '<div class="content">\n',
          '   <div class="actions action-footer">\n',
          '     <div class="button" id="{{acceptButtonId}}">\n',
          '       {{acceptButtonText}}\n',
          '     </div>\n',
          '     <div class="button" id="{{declineButtonId}}">\n',
          '        {{declineButtonText}}\n',
          '     </div>\n',
          '   </div>\n',
          '</div>\n'
        ].join("\n")
      }, // end popup

      status: {
        iframeCss: [
          'bottom: 0;\n',
          'left: 0;\n',
          'height: 20px;\n',
          'width: 100%;\n',
          'z-index: 2147483647;\n' // note: Safari 3 will use 16777271
        ].join("\n"),
        headerHtml: '\n',
        contentCss: [
          'body {\n',
          '  background: transparent;\n',
          '  margin: 0;\n',
          '  padding: 0;\n',
          '  font-family: arial, helvetica;\n',
          '  text-align: center;\n',
          '  vertical-align: middle;\n',
          '  font-size: 12px;\n',
          '  line-height: 18px;\n',
          '}\n',
          '.content {\n',
          '  width: 800px;\n',
          '  margin: 0 auto;\n',
          '  text-align: left;\n',
          '}\n',
          'html>body #{{cookieStatusId}} {\n',
          '  width: auto;\n',
          '}\n',
          '#{{cookieStatusId}} {\n',
          '  padding: 1px 10px 0px 22px;\n',
          '  width: 11.5em;\n',
          '  cursor: pointer; !important\n',
          '}\n',
          '.icon {\n',
          '  background-image: url("',
          background,
          '");\n',
          '  width: 20px;\n',
          '  height: 20px;\n',
          '  position: absolute;\n',
          '  background-position: 6px -116px;\n',
          '  background-repeat: no-repeat;\n',
          '  z-index: 199999;\n',
          '}\n',
          '.declined #{{cookieStatusId}} {\n',
          // button customisation settings below
          '  -webkit-box-shadow:inset 0px 1px 0px 0px #f5978e;\n',
          '  box-shadow:inset 0px 1px 0px 0px #f5978e;\n',
          '  background:-webkit-gradient( linear, left top, left ' +
                  'bottom, color-stop(0.05, #f24537), color-stop(1, #c62d1f) );\n',
          '  background:-moz-linear-gradient( center top, #f24537 5%,' +
                  ' #c62d1f 100% );\n',
          '  filter:progid:DXImageTransform.Microsoft.gradient(' +
                  'startColorstr="#f24537", endColorstr="#c62d1f");\n',
          '  background-color:#f24537;\n',
          '  -moz-border-radius:5px 5px 0px 0px;\n',
          '  -webkit-border-radius:5px 5px 0px 0px;\n',
          '  border-radius:5px 5px 0px 0px;\n',
          '  border:1px solid #d02718;\n',
          '  display:inline-block;\n',
          '  color:#ffffff;\n',
          '  font-family:arial;\n',
          '  font-size:12px;\n',
          '  text-decoration:none;\n',
          '}\n',
          '.declined #{{cookieStatusId}}:hover {\n',
          '  background:-webkit-gradient( linear, left top, left ' +
                  'bottom, color-stop(0.05, #c62d1f), color-stop(1, #f24537) );\n',
          '  background:-moz-linear-gradient( center top, #c62d1f 5%,' +
                  ' #f24537 100% );\n',
          '  filter:progid:DXImageTransform.Microsoft.gradient(' +
                  'startColorstr="#c62d1f", endColorstr="#f24537");\n',
          '  background-color:#c62d1f;\n',
          '}\n',
          '.declined #{{cookieStatusId}}:active {\n',
          '  position:relative;\n',
          '  top: 1px;\n',
          '}\n',
          '.accepted #{{cookieStatusId}} {\n',
          '  -moz-box-shadow:inset 0px 1px 0px 0px #6ebf26;\n',
          '  -webkit-box-shadow:inset 0px 1px 0px 0px #6ebf26;\n',
          '  box-shadow:inset 0px 1px 0px 0px #6ebf26;\n',
          '  background:-webkit-gradient( linear, left top, left ' +
                  'bottom, color-stop(0.05, #7ca814), color-stop(1, #5e8007) );\n',
          '  background:-moz-linear-gradient( center top, #7ca814 5%,' +
                  '#5e8007 100% );\n',
          '  filter:progid:DXImageTransform.Microsoft.' +
                  'gradient(startColorstr="#7ca814", endColorstr="#5e8007");\n',
          '  background-color:#7ca814;\n',
          '  -moz-border-radius:5px 5px 0px 0px;\n',
          '  -webkit-border-radius:5px 5px 0px 0px;\n',
          '  border-radius:5px 5px 0px 0px;\n',
          '  border:1px solid #619908;\n',
          '  display:inline-block;\n',
          '  color:#ffffff;\n',
          '  font-family:arial;\n',
          '  font-size:12px;\n',
          '  font-weight:normal;\n',
          '  text-decoration:none;\n',
          '}\n',
          '.accepted #{{cookieStatusId}}:hover {\n',
          '  background:-webkit-gradient( linear, left top, left bottom,' +
                  ' color-stop(0.05, #5e8007), color-stop(1, #7ca814) );\n',
          '  background:-moz-linear-gradient( center top, #5e8007 5%, ' +
                  '#7ca814 100% );\n',
          '  filter:progid:DXImageTransform.Microsoft.gradient(' +
                  'startColorstr="#5e8007", endColorstr="#7ca814");\n',
          '  background-color:#5e8007;\n',
          '}\n',
          '.accepted #{{cookieStatusId}}:active {\n',
          '  position:relative;\n',
          '  top: 1px;\n',
          '}\n'
        ].join("\n"),
        contentHtml: [
          '<div class="content">\n',
          '  <div class="icon"></div>\n',
          '  <div id="{{cookieStatusId}}"></div>\n',
          '</div>\n'
        ].join("\n"),
        footerHtml: ''
      }
    };
  },
  consentModes: {
    notification: "Notification Only",
    implicit: "Implicit consent",
    explicit: "Explicit Consent"
  }
});
