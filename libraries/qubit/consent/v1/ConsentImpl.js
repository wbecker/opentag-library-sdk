
/* ===========================================================
 * consent-widget.js v1.1.0
 * QuBit Consent Widget
 * http://www.qubitproducts.com
 * Copyright 2012, QuBit Group
 * =========================================================== */

!function (container, window, doc, newConfig, undefined) {

  /* Import Custom JSON2 lib during build */

  // <%= javascript_json2 %>

  function createModule ()  {


  var init,
    api,
    /* Default Consent Widget Configuration
     * ====================================== */
    defaultConfig = {
      /* Widget Modes
       * ===============================================================
       * "implicit"
       * By default if use do not disable, it sets to cookie accepted.
       * "explicit"
       * Explicit mode does not set cookie unless user specifed
       * "notification"
       * It sets to accepted by default, only shows dismiss. User has to
       * visit the privacy page to enalbe or disable the cookie tracking
       * ================================================================ */
      mode: "notification",
      sampleRate: 1.0,
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
        "http://www.example.com/privacy",
      cookieDomain: "",

      whenIgnoredShowPopup: true, // When cookie not set, show popup?
      whenIgnoredShowStatus: true, // When cookie not set, show status?
      whenAcceptedHideStatus: true, // hide status on acceptance
      onIgnoreShowEvery: 2, // Message repeat (minutes)
      hidePopupOnBlur : true, // hide when clicked outside of popup
      onUserAccept: null, // Callback
      onUserDecline: null, // Callback
      onUserDismiss: null, // Callback
      onPreCreate: null, // Callback, before content is appended
      onPostCreate: null, // Callback after content is appended
      name: "internal config",
      cookieExpiryDays: 365, // Use by Cookie (session vs persitent)

      // Default styles for the consent view
      popup: {
        iframeCss: [
          'top: 0;',
          'left: 0;',
          'height: 185px;',
          'width: 100%;',
          'box-shadow: 0 0 20px 0px #888;',
          'z-index: 2147483647;' // note: Safari 3 will use 16777271
        ].join("\n"),

        headerHtml: [
          '<div class="content">',
          '  <div class="action-header">',
          '    <div class="close" id="{{closeButtonId}}">',
          '      {{closeButtonText}}',
          '    </div>',
          '  </div>',
          '</div>'
        ].join("\n"),

        contentCss: [
          'body {',
          '  padding-top: 8px;',
          '  text-align: center;',
          '  background: url(https://d3c3cq33003psk.cloudfront.net/consent/img/cbg_w.png) repeat;',
          '  font-size: 12px;',
          '  line-height: 17px;',
          '  font-family: arial, helvetica;',
          '  color: #555;',
          '  text-shadow: 0px 0px 1px #CCC;',
          '}',

          '.content {',
          '  text-align: left;',
          '  max-width: 800px;',
          '  margin: 0 auto;',
          '  padding-top: 5px;',
          '}',

          '.content.consent {',
          '  max-width: 800px;',
          '}',

          'body p {',
          '  margin: 5px 0px;',
          '}',

          'a {',
          '  color: #2e9dc5;',
          '}',

          'h1 {',
          '  font-size: 1.4em;',
          '}',

          '.action-footer {',
          '  margin-top: 0px;',
          '}',

          '.action-footer .button {',
          '  padding: 5px 8px;',
          '  line-height: 16px;',
          '  cursor: pointer;',
          '}',

          '#{{closeButtonId}} {', // close button
          '  vertical-align: middle',
          '  color: #939598;',
          '  padding: 5px 10px 5px 10px;',
          '  font-size: 13px;',
          '  text-decoration: none;',
          '  margin-top: 0px;',
          '  float: right;',
          '  cursor: pointer;',
          '  border: 1px solid #EEE;',
          '  background: #EEE;',
          '  border-radius: 5px;',
          '}',

          '.action-footer #{{acceptButtonId}} {',
          '  -moz-box-shadow:inset 0px 1px 0px 0px #bbdaf7;',
          '  -webkit-box-shadow:inset 0px 1px 0px 0px #bbdaf7;',
          '  box-shadow:inset 0px 1px 0px 0px #bbdaf7;',
          '  background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #35b7de), color-stop(1, #0189a1) );',
          '  background:-moz-linear-gradient( center top, #35b7de 5%, #0189a1 100% );',
          '  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#35b7de", endColorstr="#0189a1");',
          '  background-color:#35b7de;',
          '  -moz-border-radius:4px;',
          '  -webkit-border-radius:4px;',
          '  border-radius:4px;',
          '  border:1px solid #0189a1;',
          '  display:inline-block;',
          '  color:#fff;',
          '  font-weight:normal;',
          '  text-decoration:none;',
          '  vertical-align: middle;',
          '  float:right;',
          '}',

          '.action-footer #{{acceptButtonId}}:hover {',
          '  background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #0189a1), color-stop(1, #35b7de) );',
          '  background:-moz-linear-gradient( center top, #0189a1 5%, #35b7de 100% );',
          '  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#0189a1", endColorstr="#35b7de");',
          '  background-color:#0189a1;',
          '}',

          '.action-footer #{{acceptButtonId}}:active {',
            'position:relative;',
            'top:1px;',
          '}',

          '.action-footer #{{declineButtonId}} {',
          '  color: #555;',
          '  float:right;',
          '  margin-right: 15px;',
          '}'
        ].join("\n"),

        contentHtml: [
          '<div class="content consent">',
          '  <h1>Privacy and Cookies</h1>',
          '  <p>',
          '    For this website to run at its best, we ask the browser',
          '    (like Google Chrome and Internet Explorer) for a little ',
          '    personal information. Nothing drastic, just enough to ',
          '    remember your preferences, login ID, and what you like to ',
          '    look at (on our site). Having this information to hand  ',
          '    helps us understand your needs and improve our',
          '    service to you. ',
          '  </p>',
          '  <p>',
          '  If you would like to learn more about the information we ',
          '  store, how it is used or how to disable Cookies please read our',
          '    <a href="{{cookieAndprivacyPolicyUrl}}" ',
          '      target = "_blank"',
          '      id="{{cookieAndPrivacyAndPolicyId}}">',
          '      {{cookieAndprivacyPolicyText}}',
          '    </a>.',
          '  </p>',
          '</div>'
        ].join("\n"),

        footerHtml: [
          '<div class="content">',
          '   <div class="actions action-footer">',
          '     <div class="button" id="{{acceptButtonId}}">',
          '       {{acceptButtonText}}',
          '     </div>',
          '     <div class="button" id="{{declineButtonId}}">',
          '        {{declineButtonText}}',
          '     </div>',
          '   </div>',
          '</div>'
        ].join("\n")
      }, // end popup

      // Default styles for the status view
      status: {
        iframeCss: [
          'bottom: 0;',
          'left: 0;',
          'height: 20px;',
          'width: 100%;',
          'z-index: 2147483647;' // note: Safari 3 will use 16777271
        ].join("\n"),

        headerHtml: '',

        contentCss: [

          'body {',
          '  background: transparent;',
          '  margin: 0;',
          '  padding: 0;',
          '  font-family: arial, helvetica;',
          '  text-align: center;',
          '  vertical-align: middle;',
          '  font-size: 12px;',
          '  line-height: 18px;',
          '}',

          '.content {',
          '  width: 800px;',
          '  margin: 0 auto;',
          '  text-align: left;',
          '}',

          'html>body #{{cookieStatusId}} {',
          '  width: auto;',
          '}',

          '#{{cookieStatusId}} {',
          '  padding: 1px 10px 0px 22px;',
          '  width: 11.5em;',
          '  cursor: pointer; !important',
          '}',

          '.icon {',
          '  background-image: url("https://d3c3cq33003psk.cloudfront.net/consent/img/background-image.png");',
          '  width: 20px;',
          '  height: 20px;',
          '  position: absolute;',
          '  background-position: 6px -116px;',
          '  background-repeat: no-repeat;',
          '  z-index: 199999;',
          '}',

          '.declined #{{cookieStatusId}} {',
          // button customisation settings below
          '  -webkit-box-shadow:inset 0px 1px 0px 0px #f5978e;',
          '  box-shadow:inset 0px 1px 0px 0px #f5978e;',
          '  background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #f24537), color-stop(1, #c62d1f) );',
          '  background:-moz-linear-gradient( center top, #f24537 5%, #c62d1f 100% );',
          '  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#f24537", endColorstr="#c62d1f");',
          '  background-color:#f24537;',
          '  -moz-border-radius:5px 5px 0px 0px;',
          '  -webkit-border-radius:5px 5px 0px 0px;',
          '  border-radius:5px 5px 0px 0px;',
          '  border:1px solid #d02718;',
          '  display:inline-block;',
          '  color:#ffffff;',
          '  font-family:arial;',
          '  font-size:12px;',
          '  text-decoration:none;',
          '}',

          '.declined #{{cookieStatusId}}:hover {',
          '  background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #c62d1f), color-stop(1, #f24537) );',
          '  background:-moz-linear-gradient( center top, #c62d1f 5%, #f24537 100% );',
          '  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#c62d1f", endColorstr="#f24537");',
          '  background-color:#c62d1f;',
          '}',

          '.declined #{{cookieStatusId}}:active {',
          '  position:relative;',
          '  top: 1px;',
          '}',

          '.accepted #{{cookieStatusId}} {',
          '  -moz-box-shadow:inset 0px 1px 0px 0px #6ebf26;',
          '  -webkit-box-shadow:inset 0px 1px 0px 0px #6ebf26;',
          '  box-shadow:inset 0px 1px 0px 0px #6ebf26;',
          '  background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #7ca814), color-stop(1, #5e8007) );',
          '  background:-moz-linear-gradient( center top, #7ca814 5%, #5e8007 100% );',
          '  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#7ca814", endColorstr="#5e8007");',
          '  background-color:#7ca814;',
          '  -moz-border-radius:5px 5px 0px 0px;',
          '  -webkit-border-radius:5px 5px 0px 0px;',
          '  border-radius:5px 5px 0px 0px;',
          '  border:1px solid #619908;',
          '  display:inline-block;',
          '  color:#ffffff;',
          '  font-family:arial;',
          '  font-size:12px;',
          '  font-weight:normal;',
          '  text-decoration:none;',
          '}',

          '.accepted #{{cookieStatusId}}:hover {',
          '  background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #5e8007), color-stop(1, #7ca814) );',
          '  background:-moz-linear-gradient( center top, #5e8007 5%, #7ca814 100% );',
          '  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#5e8007", endColorstr="#7ca814");',
          '  background-color:#5e8007;',
          '}',

          '.accepted #{{cookieStatusId}}:active {',
          '  position:relative;',
          '  top: 1px;',
          '}'
        ].join("\n"),

        contentHtml: [
          '<div class="content">',
          '  <div class="icon"></div>',
          '  <div id="{{cookieStatusId}}"></div>',
          '</div>'
        ].join("\n"),

        footerHtml: ''
      } // end status
    },

    CONSENT_COOKIE = "qubitconsent",
    VIEWED_CONSENT_COOKIE = "qubitconsentviewed",
    CONSENT_SAMPLE_COOKIE = "_qb_ccsr",
    FRAME_ID_CONSENT = "qb_cookie_consent_main",
    FRAME_ID_STATUS = "qb_cookie_consent_status",
    STATUS_ACCEPTED = "Accepted",
    STATUS_DECLINED = "Declined",
    MODE_NOTIFICATION = "notification",
    MODE_EXPLICIT = "explicit",
    MODE_IMPLICIT = "implicit",
    HTML5_HEADER = [
      '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Strict//EN">',
      '<html lang="en"> ',
      '  <head>',
      '    <meta name="viewport" content="width=device-width" >',
      '    <meta charset="utf-8" >',
      '    <title></title>',
      '  </head>',
      '  <body>'
    ].join("\n"),
    HTML5_FOOTER = [
      '  </body>',
      '</html>'
    ].join("\n"),
    pollReady = null,
    opts = {},
    config = null,
    viewedTimer = null,
    POLL_CONSENT_DISPLAY = (10 * 1000),
    hasScriptFiredOnLoad = false;

  config = newConfig || defaultConfig;

  init = function() {
    if (isUnsupportedBrowser()) { // not for IE6
      return;
    }
    initailzeConfiguration();
    waitTillReady();
  }(); // self invoking

  function onReady() {
    initailzeConsentView();
  }

  function onPageReady() {
    updateStatusView();
    appendHeadStyles();
  }

  function getCurrentTime() {
    return new Date().getTime();
  }

  function isPrivacyPage() {
    var configurationUrl = config.cookieAndprivacyPolicyUrl.
    replace(/^https?:\/\//, '').
    replace(/^www./, ''),
      isPrivacyPage = document.location.href.indexOf(configurationUrl) >= 0;
    return isPrivacyPage;
  }

  /**
   * Returns the consent status value
   * The cookie value can be 'Accepted', 'Declined'
   * or null if the consent cookie is not set.
   */

  function getConsentCookieStatus() {
    return readCookie(CONSENT_COOKIE);
  }

  /**
   * Returns true if the consent cookie status 'Accepted'
   */

  function isConsentCookieAccepted() {
    return getConsentCookieStatus() === STATUS_ACCEPTED;
  }

  /**
   * Returns true if the consent cookie status 'Declined'
   */

  function isConsentCookieDeclined() {
    return getConsentCookieStatus() === STATUS_DECLINED;
  }

  function doesConsentCookieExist() {
    return isConsentCookieAccepted() || isConsentCookieDeclined();
  }

  function updateStatusView() {
    if (doesConsentCookieExist() && getConsentStatusFrame()) {
      var statusDocument = getConsentStatusFrame().contentWindow.document,
        cookieStatus = statusDocument.getElementById("cookieStatus"),
        isAccepted = isConsentCookieAccepted(),
        // populate display status from cookie status, get text from config
        statusText = isAccepted ? config.statusAcceptedText : config.statusDeclinedText,
        statusClass = isAccepted ? 'accepted' : 'declined',
        indicatorClass = isAccepted ? "label-success" : "label-important",
        iconClass = isAccepted ? "icon-ok" : "icon-remove";
      if (statusDocument && cookieStatus) {
        cookieStatus.className = 'label ' + indicatorClass;
        cookieStatus.innerHTML = statusText;
        // add status contextual CSS class to body of iframe
        statusDocument.body.className = statusClass;
      }
    }
  }

  /*
   * Decide whether the Consent View should show after
   * predefined interval
   */

  function canShowConsentViewAfterAnInterval() {
    var lastViewed = readCookie(VIEWED_CONSENT_COOKIE);
    if (parseInt(getCurrentTime(), 10) >= (parseInt(lastViewed, 10) + (config.onIgnoreShowEvery * 60 * 1000))) { // minutes
      showConsentView();
    }
  }


  function showConsentViewAfterAnInterval() {
    if (viewedTimer === null || viewedTimer === undefined) {
      viewedTimer = window.setInterval(
      canShowConsentViewAfterAnInterval, POLL_CONSENT_DISPLAY);
    }
  }

  function clearReShowConsentViewTimer() {
    window.clearInterval(viewedTimer);
    viewedTimer = null;
  }

  /*
   * Should be called when user gives consent
   */

  function doAccept(reason) {
    clearReShowConsentViewTimer();
    writeCookie(CONSENT_COOKIE, STATUS_ACCEPTED,
      config.cookieExpiryDays, config.cookieDomain);

    executeScripts(reason);

    validateAndShowStatusView();
    updateStatusView();
    removeStatusView();
    if (reason.indexOf("FirstVisit") < 0) {
      removeConsentView();
    }
  }

  function executeScripts(reason) {
    // callback for custom onUserAccept event
    if (config.onUserAccept && !hasScriptFiredOnLoad) {
      config.onUserAccept(reason);
    }
    // indicating the script has fired and when enable
    // cookie tracking , it
    hasScriptFiredOnLoad = true;
  }

  /*
   * Should be called when user declines consent
   */

  function doDecline(reason) {
    clearReShowConsentViewTimer();
    // persistent cookie
    writeCookie(CONSENT_COOKIE, STATUS_DECLINED,
      config.cookieExpiryDays, config.cookieDomain);
    // session cookie
    writeCookie(VIEWED_CONSENT_COOKIE, getCurrentTime(),
      null, config.cookieDomain);
    if (config.onUserDecline) {
      config.onUserDecline(reason); // callback
    }

    removeConsentView();
    if (getConsentStatusFrame()) {
      updateStatusView();
    } else {
      validateAndShowStatusView();
    }
    showConsentViewAfterAnInterval();
  }

  /*
   * Should be called when user clicks dismiss
   */

  function doDismiss(reason) {
    clearReShowConsentViewTimer();
    // persistent cookie
    writeCookie(CONSENT_COOKIE, STATUS_ACCEPTED,
      config.cookieExpiryDays, config.cookieDomain);
    // session cookie
    writeCookie(VIEWED_CONSENT_COOKIE, getCurrentTime(),
      null, config.cookieDomain);
    if (config.onUserDismiss) {
      config.onUserDismiss(reason);
    }
    removeConsentView();
    validateAndShowStatusView();
    updateStatusView();
    removeStatusView();
  }

  function clickedOutside() {
    // session cookie
    writeCookie(VIEWED_CONSENT_COOKIE, getCurrentTime(), null, config.cookieDomain);
    var reason = config.mode + "ClickedOutside";
    if (config.mode === MODE_IMPLICIT) {
      doAccept(reason);
    } else {
      doDismiss(reason);
    }
    removeConsentView();
  }

  /*
   * Checks if the browser is spported or not.
   * Currently the widget does not support IE6,
   * and Blackberry devices
   */
  function isUnsupportedBrowser() {
    var userAgent = navigator.userAgent.toLowerCase();

    return userAgent.indexOf("msie 6") >= 0 ||
      userAgent.indexOf("playbook") >= 0 ||
      userAgent.indexOf("blackberry") >= 0 ||
      userAgent.indexOf("bb10") >= 0;
  }

  function waitTillReady() {
    if (document.body && document.getElementById) {
      window.clearTimeout(window.pollReady);
      window.pollReady = null;
      onReady();
    } else {
      window.pollReady = setTimeout(function() {
        waitTillReady();
      }, 100);
    }
  }

  function showConsentView(event) {
    createIframe(
    config.popup.iframeCss, consentViewLoaded, FRAME_ID_CONSENT);
  }

  /**
   * Displays the consent status View
   */

  function showStatusView() {
    createIframe(config.status.iframeCss,
      statusLoaded, FRAME_ID_STATUS);
  }

  function autoResizeIframeHeight(obj) {
    var d = obj.contentWindow.document;
    var height = Math.max(
        Math.max(d.body.scrollHeight, d.documentElement.scrollHeight),
        Math.max(d.body.offsetHeight, d.documentElement.offsetHeight),
        Math.max(d.body.clientHeight, d.documentElement.clientHeight)
    );


    obj.style.height = "0px";
    setTimeout(function () {
        obj.style.height = height + 20 + "px";
    }, 50);
  }

  /**
   * Returns the consent box view DOM iframe,
   * null if the HTML element does not exists
   */

  function getConsentFrame() {
    return document.getElementById(FRAME_ID_CONSENT);
  }

  /**
   * Returns the consent status view DOM iframe,
   * null if the HTML element does not exists
   */

  function getConsentStatusFrame() {
    return document.getElementById(FRAME_ID_STATUS);
  }

  /**
   * Returns true if the consent is in Notification mode
   */

  function isNotificationMode() {
    return config.mode === MODE_NOTIFICATION;
  }

  /**
   * Returns true if the consent is in Implicit mode
   */

  function isImplicitMode() {
    return config.mode === MODE_IMPLICIT;
  }

  /**
   * Returns true if the consent is in Explicit mode
   */

  function isExplicitMode() {
    return config.mode === MODE_EXPLICIT;
  }


  /**
   * Creating iframe for given ID
   * @ iframeConfig
   * @ callback
   * @ frameId
   * @ consentSrc
   */

  function createIframe(iframeCss, callback, frameId, contentSrc) {
    if (doc.getElementById(frameId)) {
      return; // if exists don't run
    }

    var newIframe = null,
      styleElem = null,
      iframeStyleTag = null,
      iframeSrc = contentSrc || "about:blank",
      iframeStyles = [
        'position: fixed;',
        'background: transparent;',
        'opacity: 1;',
        iframeCss.split("\n").join("")
      ].join(""),

      iframeHtml = [
        '<iframe id="',
        frameId, '"',
        ' src="',
        iframeSrc,
        '"',
        ' frameborder="0" src=""',
        ' style="',
        iframeStyles, '" />'
      ].join("");

    newIframe = htmlToDom(iframeHtml);
    newIframe.noresize = "true";
    newIframe.border = "0";
    newIframe.frameBorder = "0";
    newIframe.scrolling = "no";
    newIframe.allowTransparency = "true";
    addEvent(newIframe, "load", callback);

    doc.body.appendChild(newIframe);
  }

  function appendHeadStyles() {
    var head = document.getElementsByTagName('head')[0];
    var iframeStyleTag = ['#', FRAME_ID_CONSENT,
      ' {',
      config.popup.iframeCss.split("\n").join(""),
      '}',
      '#', FRAME_ID_STATUS, ' {',
      config.status.iframeCss.split("\n").join(""),
      '}'].join("");
    var styleElem = createStyleElem(iframeStyleTag);

    head.appendChild(styleElem);
  }

  function createStyleElem(styles, ownerId) {
    var el = null;
    if (ownerId && document.getElementById(ownerId)) {
      el = document.getElementById(ownerId).contentWindow.document.createElement("style");
    } else {
      el = document.createElement("style");
    }

    el.setAttribute("type", "text/css");

    if (el.styleSheet) { // IE
      el.styleSheet.cssText = styles;
    } else { // the world
      var node = document.createTextNode(styles);
      el.appendChild(node);
    }
    return el;
  }

  /**
   * callback function when consent view loaded
   */

  function consentViewLoaded() {
    appendStyleSheet(config.popup.contentCss, FRAME_ID_CONSENT);
    renderContents(config.popup, FRAME_ID_CONSENT);
    // adjustViewForMobile();
    addEventsToConsentView();

    var iframe = document.getElementById(FRAME_ID_CONSENT);
    addEvent(window, "resize", function () {
        setTimeout(function () {
            autoResizeIframeHeight(iframe);
        }, 50);
    });

    setTimeout(function () {
        autoResizeIframeHeight(iframe);
    }, 50);

    if (config.onPostCreate) {
      var reason = getConsentCookieStatus();
      if (!reason) {
        reason = "CannotReadCookie";
      }
      config.onPostCreate(reason);
    }
    return false;
  }

  function userAgent(agent) {
    return navigator.userAgent.indexOf(agent) >= 0;
  }

  function adjustViewForMobile() {
    iframe = document.getElementById(FRAME_ID_CONSENT);
    if (userAgent("Android") || userAgent('iPhone') || userAgent('iPod')) {
      var height = iframe.contentWindow.document.body.scrollHeight;
      iframe.style.height = (height + 20) + "px";
    }
  }


  /**
   * callback function when status loaded
   */

  function statusLoaded() {
    appendStyleSheet(config.status.contentCss, FRAME_ID_STATUS);
    renderContents(config.status, FRAME_ID_STATUS);
    onPageReady(); // trigger when all popups have loaded
    addEventsToStatus();
  }

  function addEventsToConsentView() {
    var consentDocument = getConsentFrame();
    if (!consentDocument) {
      return;
    } else {
      consentDocument = consentDocument.contentWindow.document;
    }

    var acceptAction = consentDocument.getElementById(
    config.acceptButtonId),
      declineAction = consentDocument.getElementById(
      config.declineButtonId),
      dismissAction = consentDocument.getElementById(
      config.closeButtonId),
      privacyPolicyAction = consentDocument.getElementById(
      config.cookieAndPrivacyAndPolicyId);

    if (acceptAction !== null) {
      // bind Accept action
      addEvent(acceptAction, "click", function(event) {
        doAccept(config.mode + "ClickedAcceptButton");
        return false;
      });
    }

    if (declineAction !== null) {
      // bind Decline action
      addEvent(declineAction, "click", function(event) {
        doDecline(config.mode + "ClickedDeclineButton");
        return false;
      });
    }

    if (dismissAction !== null) {
      if (!isNotificationMode()) {
        dismissAction.style.display = "none";
      } else {
        // bind popup close button
        addEvent(dismissAction, "click", function(event) {
          doDismiss(config.mode + "ClickedDismissButton");
          return false;
        });
      }
    }
  }

  function addEventsToStatus() {
    var statusElem = document.getElementById(FRAME_ID_STATUS);
    if (statusElem !== null) {
      addEvent(
      statusElem.contentWindow.document.getElementsByTagName("body")[0], "click", showConsentView);
    }
  }


  /**
   * Append stylesheets to a given iframe's head
   */

  function appendStyleSheet(configStyles, frameId) {
    var baseStyleElem = null,
      stylesElem = null,
      iframeCss = configStyles,
      iframeRef = window.document.getElementById(frameId);

    if (!iframeRef) {
      return;
    }
    stylesElem = createStyleElem(iframeCss, frameId);

    var head = iframeRef.contentWindow.document.getElementsByTagName("head")[0];

    head.appendChild(stylesElem);

    if (config.baseCss && config.baseCss !== "") {
      baseStyleElem = document.createElement("link");
      baseStyleElem.id = frameId + "Style";
      baseStyleElem.rel = "stylesheet";
      baseStyleElem.href = config.baseCss;
      head.appendChild(baseStyleElem);
    }
  }


  /*
   * Logic to decide whether the status button view show
   */

  function shouldShowStatusView() {
    if (isPrivacyPage()) {
      return true;
    } else if (config.whenAcceptedHideStatus === false) {
      return true;
    } else if (isNotificationMode() && !isPrivacyPage() && isConsentCookieDeclined()) {
      return true;
    } else if (isImplicitMode() || isExplicitMode()) {
      return true;
    } else {
      return false;
    }
  }

  function validateAndShowStatusView() {
    if (shouldShowStatusView()) {
      showStatusView();
    }
  }

  /**
   * Render content for this iframe
   */

  function renderContents(iframeConfig, frameId) {
    var iframeRef = document.getElementById(frameId),
      // footerHtml contains accept and decline buttons
      footerHtml = shouldShowStatusView() ? iframeConfig.footerHtml : "",
      // headerHtml contains the close button
      headerHtml = shouldShowStatusView() ? "" : iframeConfig.headerHtml;

    if (!iframeRef) {
      return;
    }
    iframeRef.contentWindow.document.body.innerHTML = [
    HTML5_HEADER, iframeConfig.contentHtml, headerHtml, footerHtml, HTML5_FOOTER].join("");
  }

  /**
   * Creates consent box based on the cookies presents on the current domain.
   */

  function initailzeConsentView() {
    // Note: If the consent cookie exists, the user has been sampled in before.
    // Even the sampling rate has changed, user should not be sampled again.
    if (doesConsentCookieExist()) {
      validateAndShowStatusView();
      // Cookie is declined and always show the status
      if (isConsentCookieDeclined()) {
        showConsentViewAfterAnInterval();
      }
    } else {
      if (isSampledIn()) {
        // User landed first time, no cookie has been set
        if (isNotificationMode() || isImplicitMode()) {
          // set the cookie to Accepted by default
          doAccept(config.mode + "FirstVisit");

          writeCookie(CONSENT_COOKIE, STATUS_ACCEPTED, config.cookieExpiryDays, config.cookieDomain);
        }

        // shows the consent window only
        showConsentView();
        validateAndShowStatusView();
      } else {
        // If sampled out run all the scripts with reason
        executeScripts('SampledOut');
      }
    }
  }

  function generateProbabilty() {
    return parseFloat(Math.random().toFixed(2));
  }

  function isSampledIn() {
    if (config.sampleRate) {
      var sampling = getSampleRateCookie();
      if (sampling) {
        // the user has been sampled before
        if (sampling.rate >= sampling.prob) {
          return true;
        } else {
          setSampleRateCookie(config.sampleRate, sampling.prob);
          return config.sampleRate >= sampling.prob;
        }
      } else {
        // Generate prob
        var prob = generateProbabilty();
        // persist samping decision
        setSampleRateCookie(config.sampleRate, prob);
        return config.sampleRate >= prob;
      }
    } else {
      // show by default if no sample rate given
      return true;
    }
  }

  /**
   * Return a JSON object represent the sampling result.
   * Returns null if the cookie is not set or the cookie cannot be parsed.
   *
   * For example: { prob: 0.2, rate: 0.3 }
   */

  function getSampleRateCookie() {
    var value = readCookie(CONSENT_SAMPLE_COOKIE);
    var cookieValue = null;
    if (value) {
      // TODO: try and catch exception
      cookieValue = JSON.parse(value);
    }
    return cookieValue;
  }

  function setSampleRateCookie(currentSampleRate, probability) {
    var cookieValue = {
      prob: probability,
      rate: currentSampleRate
    };
    writeCookie(CONSENT_SAMPLE_COOKIE, JSON.stringify(cookieValue), config.cookieExpiryDays, config.cookieDomain);
  }

  function removeConsentView() {
    if (getConsentFrame()) {
      getConsentFrame().parentNode.removeChild(getConsentFrame());
    }
  }

  function removeStatusView() {
    if (!isPrivacyPage() && config.whenAcceptedHideStatus) {
      var statusElem = document.getElementById(FRAME_ID_STATUS);
      if (statusElem === undefined || statusElem === null) {
        return;
      }

      document.getElementById(FRAME_ID_STATUS).parentNode.removeChild(document.getElementById(
      FRAME_ID_STATUS));
    }
  }

  function initailzeConfiguration() {
    var x;
    for (x in defaultConfig) {
      if (defaultConfig.hasOwnProperty(x)) {
        opts[x] = defaultConfig[x];
      }
    }
    deepMerge(defaultConfig, newConfig);
    deepMerge(config, defaultConfig);

    setConfigfromTemplate(config.popup);
    setConfigfromTemplate(config.status);
  }

  function setConfigfromTemplate(parsedConfig) {
    parsedConfig.contentCss = template(parsedConfig.contentCss, config);
    parsedConfig.headerHtml = template(parsedConfig.headerHtml, config);
    parsedConfig.contentHtml = template(parsedConfig.contentHtml, config);
    parsedConfig.footerHtml = template(parsedConfig.footerHtml, config);
  }

  function deepMerge(target, source) { // merge two objects
    var key, original, next;
    for (key in source) {
      if (source.hasOwnProperty(key)) {
        original = target[key];
        next = source[key];
        if (original && next && typeof next === "object") {
          deepMerge(original, next);
        } else {
          target[key] = next;
        }
      }
    }
  }

  // utility method


  function htmlToDom(html) {
    var root = document.createElement("div");
    root.innerHTML = html;

    return root.firstChild;
  }

  /**
   * Reads Cookie for given cookie name
   * Returns null if the cookie is not defined
   **/

  function readCookie(name) {
    var r, cookie, value, cookies, nameSearchString, i, ii;
    nameSearchString = name + "=";
    cookies = document.cookie.split(";");
    r = /^\s+|\s+$/g;
    for (i = 0, ii = cookies.length; i < ii; i += 1) {
      cookie = cookies[i].replace(r, "");
      if (cookie.indexOf(nameSearchString) === 0) {
        value = unescape(cookie.substring(nameSearchString.length));
        if (value.length === 0) {
          return null;
        }
        return value;
      }
    }

    return null;
  }

  // utility method


  function writeCookie(name, value, days, domain) {
    if (domain) {
      doWriteCookie(name, value, -1);
    }
    doWriteCookie(name, value, days, domain);
  }

  function doWriteCookie(name, value, days, domain) {
    var date, expires, cookie;
    if (days) {
      date = new Date();
      date.setTime(date.getTime() + (days * 86400000));
      expires = "; expires=" + date.toGMTString();
    } else {
      expires = "";
    }
    cookie = escape(name) + "=" + escape(value) + expires + "; path=/;";
    if (domain) {
      cookie += " domain=" + domain;
    }

    document.cookie = cookie;
  }

  // utility method


  function addEvent(el, ev, fn) {
    if (el.addEventListener) {
      el.addEventListener(ev, fn, false);
    } else if (el.attachEvent) {
      el.attachEvent("on" + ev, fn);
    } else {
      el["on" + ev] = fn;
    }
  }

  // utility method


  function removeEvent(obj, type, fn) {
    if (window.addEventListener) {
      obj.removeEventListener(type, fn, false);
    } else if (document.attachEvent) {
      var eProp = type + fn;
      obj.detachEvent("on" + type, obj[eProp]);
      obj[eProp] = null;
      obj["e" + eProp] = null;
    }
  }

  // utility method


  function template(str, data) {
    var tmpl, func, c = {
      interpolate: /\{\{(.+?)\}\}/g
    };
    tmpl = "var __p=[],print=function(){__p.push.apply(__p,arguments);};" +
      'with(obj||{}){__p.push(\'' +
      str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(c.interpolate, function(match, code) {
      return "'," + code.replace(/\\'/g, "'") + ",'";
    }).replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/\t/g, '\\t') + "');}return __p.join('');";
    func = new Function('obj', tmpl);

    return func(data);
  }

  api = { // public interface
    config: config,
    isUnsupportedBrowser: isUnsupportedBrowser,
    consentViewLoaded: consentViewLoaded,
    statusLoaded: statusLoaded,
    readCookie: readCookie,
    writeCookie: writeCookie,
    getConsentCookieStatus: getConsentCookieStatus,
    doAccept: doAccept,
    doDecline: doDecline,
    initailzeConsentView: initailzeConsentView,
    showConsentView: showConsentView,
    showStatusView: showStatusView,
    removeConsentView: removeConsentView,
    clickedOutside: clickedOutside,
    canShowConsentViewAfterAnInterval: canShowConsentViewAfterAnInterval,
    isPrivacyPage: isPrivacyPage,
    isConsentCookieDeclined: isConsentCookieDeclined,
    isConsentCookieAccepted: isConsentCookieAccepted,
    isNotificationMode: isNotificationMode,
    isImplicitMode: isImplicitMode,
    isExplicitMode: isExplicitMode
  };

  // Public interface (properties and methods)
  return api;
  } // end module
  // Public API (assigns to my namespace)
  container.consent = createModule();

}(this.qubit || (this.qubit = {}),
  this,
  document,
  this.qcw || (this.qcw = false));
// end qubit.consent

Google Analytics
New Relic
