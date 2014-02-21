try{(function () {

/**
 * @author Inz. Piotr (Peter) Fronc <peter.fronc@qubitdigital.com>
 */
(function () {
  /**
   * Bind function should be already native in most browsers.
   * If not, we must use very basic replacement here.
   * We may inject recommended by:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
   * /Global_Objects/Function/bind
   * Template, but for now it will stay simple.
   * It is recommended that you pass specific arguments using closures.
   * 
   * @param {type} ctx
   * @param {type} ref
   * @returns {unresolved}
   */
  Function.prototype.bind = Function.prototype.bind || function (ctx) {
    var _this = this;
    return function () {
      _this.apply(ctx, arguments);
    };
  };
}());


var global = (function () { return eval("this"); }());
global.NAMESPACE = global;


/*
 * Opentag, a tag deployment platform
 * Copyright 2011-2013, Qubit Group
 * http://opentag.qubitproducts.com
 */

(function () {
  
  /**
   * @class qubit.qtag.Utils
   * @singleton
   * 
   * Author: Inz. Piotr (Peter) Fronc <peter.fronc@qubitdigital.com>
   */
  function Utils() {}

  /**
   * ## Utility method getting the browser's URL.
   * @returns {document.location.href}
   */
  Utils.getUrl = function () {
    return document.location.href;
  };

  Utils.getQueryParam = function (param) {
    var i, ii, params, url, query, queries, splitQuery;
    url = Utils.getUrl();
    if (url.indexOf("?") > 0) {
      queries = url.substring(url.indexOf("?") + 1).split("&");
      for (i = 0, ii = queries.length; i < ii; i += 1) {
        query = queries[i];
        if (query.indexOf("=") > 0) {
          splitQuery = query.split("=");
          if ((splitQuery.length === 2) && (splitQuery[0] === param)) {
            return splitQuery[1];
          }
        }
      }
    }
    return null;
  };
  
  /**
   * 
   * @param {Object} value
   * @returns {Boolean}
   */
  Utils.variableExists = function (value) {
    return (value !== undefined) && (value !== null);
  };

  /**
   * 
   * @param {String} elementId
   * @returns {unresolved}
   */
  Utils.getElementValue = function (elementId) {
    var el = document.getElementById(elementId);
    if (el) {
      return el.textContent || el.innerText;
    }
    return null;
  };
  
  /**
   * 
   * @param {qtag.qubit.BaseTag} tag
   * @returns {Boolean}
   */
  Utils.determineIfSync = function (tag) {
    var i, ii, script, scripts, src;
    scripts = document.getElementsByTagName("script");
    for (i = 0, ii = scripts.length; i < ii; i += 1) {
      script = scripts[i];
      src = script.getAttribute("src");
      //removed "opentag", white labelling!!!
      if (!!src && (src.indexOf("" + 
          tag.config.qTagClientId + "-" + tag.config.profileName +
          ".js") > 0)) {
        return (script.getAttribute("async") === null && 
            //handle ie7
            (script.getAttribute("defer") === false ||
            //handle ie8
            script.getAttribute("defer") === "" ||
            //handle chrome/firefox
            script.getAttribute("defer") === null));
      } 
    }
    return true;
  };
  
  /**
   * 
   * @param {qubit.qtag.pagevariable.BaseVariable} pageVar
   * @param {String} token
   * @param {String} str
   * @returns {String}
   */
  Utils.substituteArray = function (pageVar, token, str) {
    var start, end, index, tok;
    index = pageVar.value.indexOf("[#]");
    start = pageVar.value.substring(0, index);
    end = pageVar.value.substring(index + 3);
    str = str.replace(new RegExp(token + "\\.length", "g"), start + ".length"); 
    str = str.replace(new RegExp(token + "(\\[.*?\\])", "g"), start + "$1" + end);
    return str;
  };

  /**
   * Prepares string to be quoted and evaluable.
   * @param {String} string
   * @returns {String} quoted string or the input parameter if parameter is not
   *  a string.
   */
  Utils.prepareQuotedString = function (string) {
    if (typeof(string) === "string") {
      return "\"" + (string.replace(/\"/g, "\\\"")) + "\"";
    } else {
      return string;
    }
  };

  /**
   * 
   * @param {String} path
   * @param {Object} instance
   * @param {Object} pckg
   * @param {Boolean} noOverride
   * @returns {Object}
   */
  Utils.namespace = function (path, instance, pckg, noOverride) {
    var files = path.split("."),
      //access eval INDIRECT so it is called globally
      current = Utils.NAMESPACE_BASE || (function () {return eval("this"); }()),
      last = null,
      lastName = null,
      i;
    
    current = pckg || current;
    
    for (i = 0; i < files.length - 1; i += 1) {
      last = current;
      lastName = files[i];
      current[lastName] = current[lastName] || {};
      current = current[lastName];
    }
    
    last = current;
    lastName = files[files.length - 1];
    
    if (instance) {
      if (last[lastName] === undefined || !noOverride) {
        last[lastName] = instance;
      }
    } else {
       last[lastName] = last[lastName] || {};
    }
    
    return last[lastName];
  };

  /**
   * Utility for simple class declaration (not definition).
   * It does similiar job as namespace with addition of adding CLASS_NAME
   * and PACKAGE_NAME on prototype. It also sets superclass to extending class
   * instance.
   * 
   * @param {String} path
   * @param {Object} instance
   * @param {Function} extendingClass
   * @param {Object} pckg
   * @param {Object} config
   * @returns {undefined}
   */
  Utils.clazz = function (path, instance, extendingClass, pckg, config) {
    Utils.namespace(path, instance, pckg, true);
    if (typeof(extendingClass) === "function") {
      instance.superclass = extendingClass;
      instance.prototype = new instance.superclass(config);
    }
    if (instance.prototype) {
      var names = path.split(".");
      instance.prototype.CLASS_NAME = names[names.length - 1];
      names.splice(names.length - 1, 1);
      instance.prototype.PACKAGE_NAME = names.join(".");
    }
    return 
  };

  /**
   * Utility for class creation.
   * 
   * @param {Object} config
   * @param {String} classPath
   * @param {Function} extendingClass
   * @returns {undefined}
   */
  Utils.defineClass = function (config, classPath, extendingClass) {
    //create class
//    var clazz = new Function(
//      "if (" + classPath + ".superclass) {" +
//      "  " + classPath + ".superclass.apply(this, arguments)" +
//      "}" +
//      "if (this.CONSTR) {" +
//      "  this.CONSTR.apply(this, arguments);" +
//      "} else {" +
//      "  " +
//      "}"
//    );

//or:
    var CONSTR = config.CONSTR;
    
    var clazz = function () {
      if (CONSTR) {
         CONSTR.apply(this, arguments);
      } else if (clazz.superclass) {
        clazz.superclass.apply(this, arguments);
      }
    };
    
    clazz.CONSTR = CONSTR;
    clazz.superclass = extendingClass;
    
    //publish class
    this.clazz(classPath, clazz, extendingClass);
    
    //pass prototype objects
    for (var prop in config) {
      if (config.hasOwnProperty(prop) && prop !== "CONSTR") {
        clazz.prototype[prop] = config[prop];
      }
    }
  };
  
  /**
   * Important compat utility for keys listing on objects.
   * @param {Object} obj
   * @returns {Array}
   */
  Utils.keys = function (obj) {
    if (obj instanceof Object) {
      if (Object.keys) {
        return Object.keys(obj);
      }
      var keys = [];
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          keys.push(prop);
        }
      }
      return keys;
    } else {
      throw "keys() called on non-object!";
    }
  };


  /**
   * Cross-browser source element resolving function from DOM event object.
   * 
   * @param {Object} evt
   * @returns {Node}
   */
  Utils.getSrcElement = function (evt) {
    var elem;
    evt = evt || window.event;
    if (evt.srcElement) {
      elem = evt.srcElement;
    } else if (evt.target) {
      elem = evt.target;
    }
    return elem;
  };

  /*
   * Local function taking as argument and array and a string that will be 
   * added to the array if it does not equal (===) to any of items.
   * 
   * @param {Array} array
   * @param {Object} obj
   * @returns {undefined}
   */
  Utils.addToArrayIfNotExist = function (array, obj) {
    var i = 0, exists = false;
    for (; i < array.length; i += 1) {
      if (array[i] === obj) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      array.push(obj);
    } 
  };
  
  /*
   * Local function taking as argument and array and a string that will be  
   * removed from the array if it equals (===) to any of array items.
   * 
   * @param {Array} array
   * @param {Object} obj
   * @returns {undefined}
   */
  Utils.removeFromArray = function (array, obj) {
    var i = 0;
    for (; i < array.length; i += 1) {
      if (array[i] === obj) {
        array.splice(i, 1);
      }
    }
  };
  
  /**
   * Cross browser add className wrapper.
   * Nowadays, browsers support "classList" property - still not all of them.
   * 
   * @param {Node} node
   * @param {String} name
   * @returns {undefined}
   */
  Utils.addClass = function (node, name) {
    var classes;
    try {
      node.classList.add(name);
    } catch (ex) {
      classes = node.className.split(" ");
      addToArrayIfNotExist(classes, name);
      node.className = classes.join(" ");
    }
  };
  
  /**
   * Cross browser remove className wrapper.
   * Nowadays, browsers support "classList" property - still not all of them.
   * 
   * @param {Node} node
   * @param {String} name
   * @returns {undefined}
   */
  Utils.removeClass = function (node, name) {
    var classes;
    try {
      node.classList.remove(name);
    } catch (ex) {
      classes = node.className.split(" ");
      removeFromArray(classes, name);
      node.className = classes.join(" ");
    }
  };
  

  Utils.namespace("qubit.qtag");
  
  qubit.qtag.Utils = qubit.qtag.Utils || Utils;
}());

var q = {};


q.html = {};


q.html.fileLoader = {};

/**
 * Load a file at url, optionally calling functions before and after it 
 * is loaded
 * @param url The url to load
 * @param preLoadAction A function called before the url is loaded. If it 
                        returns false or throws an exception it will 
                        prevent the url from loading. Takes the url as 
                        an argument.
 * @param postLoadHandler A function called after the url is loaded. 
 *                        Takes the url as an argument.
 */
q.html.fileLoader.load = function (url, preLoadAction, postLoadHandler,
    parentNode, async, attributes) {
  var scriptEl, preLoadResult, loadError, doPostLoad, loaded;
  loaded = false;

  doPostLoad = function (loadFailed) {
    return function () {
      if (!loaded) {
        loaded = true;
        if (loadFailed && !loadError) {
          loadError = {
            url: document.location.href
          };
        }
        postLoadHandler(url, loadError, loadFailed);
      }
    };
  };
  
  //try to run the preLoadAction.
  try {
    if (preLoadAction) {
      preLoadResult = preLoadAction(url);
    }
  } catch (e) {
    preLoadResult = false;
    postLoadHandler(url, "Exception loading pre", true);
  } finally {
    if (preLoadResult !== false) {
      //create the javascript element.
      scriptEl = q.html.fileLoader.createScriptEl(url, async, 
          false, attributes);
      //assign the post load handler to run when it has loaded, 
      //if it exists.
      if (postLoadHandler) {
        scriptEl.onload = doPostLoad(false);
        scriptEl.onerror = doPostLoad(true);
        scriptEl.onreadystatechange = function () {
          if ((this.readyState === "complete") || 
              (this.readyState === "loaded")) {
            setTimeout(function () {
              doPostLoad(false)();
            }, 1);
          }
        };
      }
      if (!parentNode) {
        parentNode = window.document.getElementsByTagName("head")[0];
      }
      
      parentNode.appendChild(scriptEl);
      //The script is not loaded until it is added to the script.
      
    }
  }
};
q.html.fileLoader.createScriptEl = function (path, async, forceReload, attr) {
  var a, scriptEl = document.createElement("script");
  scriptEl.type = "text/javascript";
  scriptEl.src = q.html.fileLoader.tidyUrl(path) + 
    (forceReload ? ("?" + new Date().getTime()) : "");
  //Makes FF (version < 4) behave like IE/WebKit 
  //(this is on bydefault on FF4+)
  //See: https://developer.mozilla.org/en/html/element/script
  if (async !== false) {
    scriptEl.async = "true";
    scriptEl.defer = "true";
  } else {
    //TODO investigate whether scriptEl.async = false is enough in all browsers
    //in that case we don't need this mysterious if statement
    scriptEl.async = "false";
    if (scriptEl.async !== false) {
      scriptEl.async = false;
    }
    scriptEl.defer = "false";
  }
  for (a in attr) {
    if (attr.hasOwnProperty(a)) {
      scriptEl.setAttribute(a, attr[a]);
    }
  }
  return scriptEl;
};

q.html.fileLoader.tidyUrl = function (path) {
  if (path.substring(0, 5) === 'http:') {
    return path;
  }
  if (path.substring(0, 6) === 'https:') {
    return path;
  }
  return "//" + path;
};
/*global XDomainRequest */




q.html.PostData = function (url, data, type) {

  var _post, agent, isIe, isIe9, isOldIe, fullUrl, loaded, 
    retry, retryDelay, retryCount;

  retryCount = 5;
  retryDelay = 2000;
  loaded = false;

  retry = function () {
    if (retryCount > 0) {
      setTimeout(function () {
        if (!loaded) {
          retryCount -= 1;
          _post();
        }
      }, retryDelay);
    }
  };

  agent = navigator.userAgent.toLowerCase();
  isIe = agent.indexOf("msie") !== -1;
  isIe9 = agent.indexOf("msie 9") !== -1;
  isOldIe = ((agent.indexOf('msie 7') !== -1) ||
    (agent.indexOf('msie 6') !== -1));
  fullUrl = ("https:" === document.location.protocol ? "https:" : "http:") +
    url;
  type = type || "POST";

  _post = function () {
    var xhr;
    try {
      xhr = null;

      try {
        xhr = new XMLHttpRequest();
      } catch (e1) {

      }

      if (xhr && !isIe) {
        xhr.open(type, fullUrl, true);
      } else if (typeof XDomainRequest !== "undefined") {
        xhr = new XDomainRequest();
        xhr.open(type, fullUrl);
      } else {
        xhr = null;
      }

      try {
        xhr.withCredentials = false;
      } catch (e2) {

      }
      if (xhr.setRequestHeader) {
        xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      }
      xhr.onload = function () {
        loaded = true;
      };
      xhr.onreadystatechange = function () {};
      xhr.ontimeout = function () {};
      xhr.onerror = function () {};
      xhr.onprogress = function () {};

      xhr.send(data);

    } catch (err) {
      try {
        try {
          q.html.fileLoader.load(fullUrl);
        } catch (err2) {
          if (window.console && window.console.log) {
            window.console.log(err);
          }
        }
      } catch (e) {
      }
    }
    retry();
  };
  if (isOldIe) {
    q.html.fileLoader.load(fullUrl);
    return;
  } else {
    _post();
  }
};
/*jslint evil: true */


q.html.GlobalEval = {};

//TODO: write unit test for this.

//Adapted from http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
q.html.GlobalEval.globalEval = function (src) {
  if (window.execScript) {
    window.execScript(src);
  } else {
    var fn = function () {
      window["eval"].call(window, src);
    };
    fn();
  }
};
/*jslint evil: true */



/*global escape, unescape*/

//this is quite redundant package, simpler method can be used

q.html.HtmlInjector = {};

q.html.HtmlInjector.inject = function (el, injectStart, str, cb, parentNode) {
  var i, ii, d, scriptsRaw, scripts, script, contents;
  if (str.toLowerCase().indexOf("<script") >= 0) {
    d = document.createElement("div");
    //In IE, if you don't put a char here and the only thing the HTML contains
    //is a script element, the inner html doesn't get set.
    d.innerHTML = "a" + str;
    scriptsRaw = d.getElementsByTagName("script");
    //Make copy of the raw array that is given by the browser, as the
    //raw array changes as the dom changes.
    scripts = [];
    for (i = 0, ii = scriptsRaw.length; i < ii; i += 1) {
      scripts.push(scriptsRaw[i]);
    }
    contents = [];
    for (i = 0, ii = scripts.length; i < ii; i += 1) {
      script = scripts[i];
      var s = {
        attributes: q.html.HtmlInjector.getAttributes(script)
      };
      if (script.src) {
        s.src = script.src;
      } else {
        s.script = script.innerHTML;
      }
      contents.push(s);
      //Note: this line changes the length of scriptsRaw.
      script.parentNode.removeChild(script);
    }
    if (d.innerHTML) {
      //Remove first character in the html, put in above
      if (d.innerHTML.length > 0) {
        d.innerHTML = d.innerHTML.substring(1);
      }
    }
    q.html.HtmlInjector.doInject(el, injectStart, d);
    q.html.HtmlInjector.loadScripts(contents, 0, cb, el);
    //use document fragments if adding to multiple elements!
  } else {
    d = document.createElement("div");
    d.innerHTML = str;
    q.html.HtmlInjector.doInject(el, injectStart, d);
    if (cb) {
      cb();
    }
  }
};

q.html.HtmlInjector.doInject = function (el, injectStart, d) {
  if (d.childNodes.length > 0) {
    var fragment = document.createDocumentFragment();
    while (d.childNodes.length > 0) {
      fragment.appendChild(d.removeChild(d.childNodes[0]));
    }
    if (injectStart) {
      q.html.HtmlInjector.injectAtStart(el, fragment);
    } else {
      q.html.HtmlInjector.injectAtEnd(el, fragment);
    }
  }
};
q.html.HtmlInjector.injectAtStart = function (el, fragment) {
  if (el.childNodes.length === 0) {
    el.appendChild(fragment);
  } else {
    el.insertBefore(fragment, el.childNodes[0]);
  }
  
};
q.html.HtmlInjector.injectAtEnd = function (el, fragment, counter) {
  if (!counter) {
    counter = 1;
  }
  if ((el === document.body) && 
      (document.readyState !== "complete") && 
      (counter < 50)) {
    setTimeout(function () {
      q.html.HtmlInjector.injectAtEnd(el, fragment, counter + 1);
    }, 100);
  } else {
    el.appendChild(fragment);
  }
};
q.html.HtmlInjector.loadScripts = function (contents, i, cb, parentNode) {
  var ii, c, foundSrc = false;
  for (ii = contents.length; i < ii; i += 1) {
    c = contents[i];
    if (c.src) {
      foundSrc = true;
      break;
    } else {
      q.html.GlobalEval.globalEval(c.script);
    }
  }
  if (foundSrc) {
    q.html.fileLoader.load(
      c.src,
      null,
      function () {
        q.html.HtmlInjector.loadScripts(contents, i + 1, cb, parentNode);
      },
      parentNode,
      false,
      c.attributes
    );
  }
  if (cb && (i === ii)) {
    cb();
  }
};
q.html.HtmlInjector.getAttributes = function (node) {
  var a, aLength, attributes, val, name, map = {};
  if (node) {
    attributes = node.attributes;
    aLength = attributes.length;
    for (a = 0; a < aLength; a++) {
      val = attributes[a].value;
      name = attributes[a].name.toLowerCase();
      if ((val !== "") && ((name === "id") || (name === "class") ||
          (name === "charset") || (name.substr(0,5) === "data-"))) {
        map[name] = val;
      }
    }
    return map;
  }
};


(function () {
  var DOMContentLoaded,
    isReady = false,
    readyWait = 1,
    readyList,
    readyComplete, 
    bindReadyComplete, 
    doScrollCheck;
  readyComplete = function (wait) {
    var f;
    // A third-party is pushing the ready event forwards
    if (wait === true) {
      readyWait -= 1;
    }
  
    // Make sure that the DOM is not already loaded
    if (!readyWait || (wait !== true && !isReady)) {
      // Make sure body exists, at least, 
      // in case IE gets a little overzealous (ticket #5443).
      if (!document.body) {
        return setTimeout(readyComplete, 1);
      }
  
      // Remember that the DOM is ready
      isReady = true;
  
      // If a normal DOM Ready event fired, decrement, and wait if need be
      if (wait !== true) {
        readyWait -= 1;
        if (readyWait > 0) {
          return;
        }
      }
  
      // While there are functions bound, to execute
      while (readyList.length > 0) {
        f = readyList.shift();
        f();
      }
    }
  };
  

  //The DOM ready check for Internet Explorer
  doScrollCheck = function () {
    if (isReady) {
      return;
    }

    try {
      // If IE is used, use the trick by Diego Perini
      // http://javascript.nwbox.com/IEContentLoaded/
      document.documentElement.doScroll("left");
    } catch (e) {
      setTimeout(doScrollCheck, 1);
      return;
    }

    // and execute any waiting functions
    readyComplete();
  };
  
  bindReadyComplete = function () {
    if (readyList) {
      return;
    }
  
    readyList = [];
  
    // Catch cases where $(document).ready() is called after the
    // browser event has already occurred.
    if (document.readyState === "complete") {
      // Handle it asynchronously to allow scripts 
      // the opportunity to delay ready
      return setTimeout(readyComplete, 1);
    }
  
    // Mozilla, Opera and webkit nightlies currently support this event
    if (document.addEventListener) {
      // Use the handy event callback
      document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
  
      // A fallback to window.onload, that will always work
      window.addEventListener("load", readyComplete, false);
  
    // If IE event model is used
    } else if (document.attachEvent) {
      // ensure firing before onload,
      // maybe late but safe also for iframes
      document.attachEvent("onreadystatechange", DOMContentLoaded);
  
      // A fallback to window.onload, that will always work
      window.attachEvent("onload", readyComplete);
  
      // If IE and not a frame
      // continually check to see if the document is ready
      var toplevel = false;
  
      try {
        toplevel = (window.frameElement === null) || 
          (window.frameElement === undefined);
      } catch (e) {}
  
      if (document.documentElement.doScroll && toplevel) {
        doScrollCheck();
      }
    }
  };
  
  //Handle when the DOM is ready
  q.html.ready = function (fn) {
    // Attach the listeners
    bindReadyComplete();

    // Add the callback
    if (isReady) {
      setTimeout(fn, 1);
    } else {
      readyList.push(fn);
    }
  };
  
  //Cleanup functions for the document ready method
  if (document.addEventListener) {
    DOMContentLoaded = function () {
      document.removeEventListener("DOMContentLoaded", 
          DOMContentLoaded, false);
      readyComplete();
    };

  } else if (document.attachEvent) {
    DOMContentLoaded = function () {
      // Make sure body exists, at least, in case IE gets a 
      // little overzealous (ticket #5443).
      if (document.readyState === "complete") {
        document.detachEvent("onreadystatechange", DOMContentLoaded);
        readyComplete();
      }
    };
  }
}());


q.cookie = {};

q.cookie.PageView = {};
q.cookie.PageView.update = function () {
  var a, r;
  r = function _() {
    return (Math.floor(1 + Math.random() * 65536)).toString(36).substring(1);
  };
  if (!window.__pageViewId__) {
    a = new Date().getTime().toString(36);
    window.__pageViewId__ = a + r() + r() + r();
  }
  return window.__pageViewId__;
};


/*global escape, unescape*/


q.html.simplecookie = {};

q.html.simplecookie.readCookie = function (name) {
  var r, cookie, value, cookies, nameSearchString, i, ii;
  nameSearchString = name + "=";
  cookies = document.cookie.split(';');
  r = /^\s+|\s+$/g;
  for (i = 0, ii = cookies.length; i < ii; i += 1) {
    cookie = cookies[i].replace(r, '');
    if (cookie.indexOf(nameSearchString) === 0) {
      value = unescape(cookie.substring(nameSearchString.length));
      if (value.length === 0) {
        return null;
      }
      return value;
    }
  }
  return null;
};
q.html.simplecookie.readAllCookies = function (name) {
  var r, cookie, value, cookies, nameSearchString, i, ii, values;
  nameSearchString = name + "=";
  cookies = document.cookie.split(';');
  r = /^\s+|\s+$/g;
  values = [];
  for (i = 0, ii = cookies.length; i < ii; i += 1) {
    cookie = cookies[i].replace(r, '');
    if (cookie.indexOf(nameSearchString) === 0) {
      value = unescape(cookie.substring(nameSearchString.length));
      if (value.length > 0) {
        values.push(value);
      }
    }
  }
  return values;
};
q.html.simplecookie.writeCookie = function (name, value, days, domain) {
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
};
/*EXCLUDE: JSON*/
/*
    http://www.JSON.org/json2.js
    2011-02-23

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false, regexp: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON = {};
// ALWAYS OVERWRITE JSON LOCALLY, ASSUME THIS FILE WILL ALWAYS BE IN CLOSURE
// if (!JSON || window.forceJSONRewrite) {
//     JSON = {};
// }

(function () {
    "use strict";

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    // PROTECTING AGAINST PROTOTYPE.JS
    // don't rely on Date, Number, String and Boolean prototypes
    
    // if (typeof Date.prototype.toJSON !== 'function') {

    //     Date.prototype.toJSON = function (key) {

    //         return isFinite(this.valueOf()) ?
    //             this.getUTCFullYear()     + '-' +
    //             f(this.getUTCMonth() + 1) + '-' +
    //             f(this.getUTCDate())      + 'T' +
    //             f(this.getUTCHours())     + ':' +
    //             f(this.getUTCMinutes())   + ':' +
    //             f(this.getUTCSeconds())   + 'Z' : null;
    //     };

    //     String.prototype.toJSON      =
    //         Number.prototype.toJSON  =
    //         Boolean.prototype.toJSON = function (key) {
    //             return this.valueOf();
    //         };
    // }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string' ? c :
                '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }

    // PROTECTION AGAINST PROTOTYPE.JS
    // we'll use this function to stringify Date
    function stringifyDate(key) {
        return isFinite(key.valueOf()) ?
            key.getUTCFullYear()     + '-' +
            f(key.getUTCMonth() + 1) + '-' +
            f(key.getUTCDate())      + 'T' +
            f(key.getUTCHours())     + ':' +
            f(key.getUTCMinutes())   + ':' +
            f(key.getUTCSeconds())   + 'Z' : null;
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];


        // PROTECTION AGAINST PROTOTYPE.JS
        // don't call value.toJSON, only specially treat Date, Number, String and Boolean

// If the value has a toJSON method, call it to obtain a replacement value.

        // if (value && typeof value === 'object' &&
        //         typeof value.toJSON === 'function') {
        //     value = value.toJSON(key);
        // }

        if (value instanceof Date) {
            value = stringifyDate(value);
        } else if ((value instanceof String) || (value instanceof Number) || (value instanceof Boolean)) {
            value = value.valueOf();
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' : gap ?
                '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
                '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
/*UVListener package*/


(function () {

  var UVListener = {
      callbacks: {},
      unfired_events: [],
      early_callbacks: null,
      currentUV: null
    },
    uv,
    uvLocation = "universal_variable",
    starterId = 0,
    POLL_DELAY_MS = 500,
    timer;

  /*** INTERNAL FUNCTIONS ***/

  UVListener._isArray = function (input) {
    return (Object.prototype.toString.call(input) === "[object Array]");
  };

  // Determines if a given subelement (denoted by keyString) has changed
  UVListener._targetChanged = function (keyString, old, newObject) {
    var oldAsObject, oldTarget, newTarget;
    if (newObject === null) {
      if (old === "null") {
        return false;
      } else {
        return true;
      }
    } else if (newObject === undefined) {
      if (old === newObject) {
        return false;
      } else {
        return true;
      }
    } else {
      oldAsObject = JSON.parse(old);
      oldTarget = UVListener._getNested(oldAsObject, keyString);
      newTarget = UVListener._getNested(newObject, keyString);
      return !UVListener._jsonIsEqual(oldTarget, newTarget);
    }
  };

  // Go through all the things that have been pushed 
  // before the API has loaded
  UVListener._processCallbacks = function () {
    var i;
    if (UVListener.early_callbacks && UVListener.early_callbacks.length > 0) {
      for (i = 0; i < UVListener.early_callbacks.length; i += 1) {
        UVListener.push(UVListener.early_callbacks[i]);
      }
      UVListener.early_callbacks = null;
    }
  };

  // Get all the keys out of a string in an array format
  UVListener._keyStringToArr = function (keyString) {
    keyString = keyString.trim();
    // 
    if (keyString === "") {
      return [];
    } else {
      // convert indexes to properties
      keyString = keyString.replace(/\[(\w+)\]/g, ".$1");
      // strip a leading dot
      keyString = keyString.replace(/^\./, ""); 
      return keyString.split(".");
    }
  };

  // Get the value of a nested thing in an object.
  // e.g. UVListener._getNested(universal_variable, "transaction.total")
  UVListener._getNested = function (object, keyString) {
    var arr = UVListener._keyStringToArr(keyString),
      n;
    while (arr.length > 0) {
      n = arr.shift();
      if (object.hasOwnProperty(n)) {
        object = object[n];
      } else {
        return;
      }
    }
    return object;
  };

  // Compare the two arguments using JSON.stringify
  UVListener._jsonIsEqual = function (obj1, obj2) {
    if (typeof obj1 !== "string") {
      obj1 = JSON.stringify(obj1, UVListener._stripEvents);
    }
    if (typeof obj2 !== "string") {
      obj2 = JSON.stringify(obj2, UVListener._stripEvents);
    }
    return obj1 === obj2;
  };

  // Causes JSON.stringify to skip the events object, if passed as the second
  // argument: JSON.stringify(object, UVListener._stripEvents)
  UVListener._stripEvents = function (key, value) {
    if (key !== "events") {
      return value;
    } else {
      return undefined;
    }
  };

  UVListener._on = function (type, func) {
    var typeArray, key;
    // Separate type from keyString
    typeArray = type.split(":");
    type = typeArray[0];
    key = typeArray[1];
    UVListener.callbacks[type] = UVListener.callbacks[type] || [];
    // Include keyString in the callback object (if specified)
    if (key) {
      UVListener.callbacks[type].push({
        keyString: key,
        func: func
      });
    } else {
      UVListener.callbacks[type].push({
        func: func
      });
    }
  };

  UVListener._trigger = function (type, data) {
    var i, keyString;
    // Are there any callbacks which might be relevant?
    if (UVListener.callbacks[type]) {
      // Loop through all potentially relevant callbacks
      for (i = 0; i < UVListener.callbacks[type].length; i += 1) {
        // Make sure the callback has a function we can use
        if (typeof UVListener.callbacks[type][i].func === "function") {
          // Determine if there's an associated keyString
          keyString = UVListener.callbacks[type][i].keyString;
          if (keyString) {
            // Handle the keyString if we know how
            if (type === "change" && 
                UVListener._targetChanged(keyString, UVListener.currentUV, uv)) {
              UVListener.callbacks[type][i].func(data);
            } // Place logic for other types which use keyStrings here.
          // If there's no keyString, just callback 
          } else {
            UVListener.callbacks[type][i].func(data);
          }
        } 
      }
    }
  };

  // Modified push function for uv.events array
  UVListener._eventsPush = function (evt) {
    var i, ii;
    uv.events[uv.events.length] = evt;
    evt.time = evt.time || (new Date()).getTime();
    if (UVListener.callbacks.event) {
      i = 0; ii = UVListener.callbacks.event.length;
      for (i; i < ii; i += 1) {
        UVListener.callbacks.event[i].func(evt);
      }
    }
    evt.has_fired = true;
  };

  UVListener._getUnfiredEvents = function () {
    var i = 0;
    for (i = 0; i < uv.events.length; i += 1) {
      if (!uv.events[i].has_fired) {
        //Event hasn't fired, re-insert it now that push is redefined.
        UVListener.unfired_events.push(uv.events.splice(i, 1)[0]);
        i -= 1; //The remaining events have shifted backward.
      }
    }
  };

  UVListener._fireEvents = function () {
    while (UVListener.unfired_events.length > 0) {
      uv.events.push(UVListener.unfired_events.shift());
    }
  };

  UVListener._resetEventsPush = function () {
    uv.events = uv.events || [];
    if (uv.events.push.toString().indexOf("[native code]") !== -1) {
      uv.events.push = UVListener._eventsPush;
      UVListener._getUnfiredEvents();
      UVListener._fireEvents();
    }
  };

  UVListener._checkForChanges = function () {
    // Only check if we actually have some callbacks registered
    if (UVListener.callbacks.change && UVListener.callbacks.change.length > 0) {
      if (!UVListener._jsonIsEqual(UVListener.currentUV, uv)) {
        // If UV changed, trigger "change" callbacks.
        UVListener._trigger("change", uv);
        // After triggering, log the new UV as current.
        UVListener.currentUV = JSON.stringify(uv, UVListener._stripEvents);
      }
    }
  };

  UVListener._setUVLocation = function (newLoc) {
    uvLocation = newLoc;
    UVListener._initUV();
  };

  UVListener._initUV = function () {
    window[uvLocation] = window[uvLocation] || {
      events: []
    };
    uv = window[uvLocation];
    if (!uv.events) {
      uv.events = [];
    }
  };

  /*** INTENDED API ***/

  /* USAGE
    Change listening:

    Fire a callback function on any change to UV:
      window.uv_listener.push(["on", "change", callback]);

    Fire a callback function on any change to specific part of UV:
      window.uv_listener.push(["on", "change:keyString", callback])
    where "keyString" is a property path within the UV. For example:
      "change:transaction" will fire if the transaction object is changed
      "change:basket.line_items.length" will fire if products are added to ore
        removed from the basket

    Event listening:
      window.uv_listener.push(["on", "event", callback])
    Note that the callback is expected to take an argument (the event object)
      and also do the processing to determine if the event is relevant.
  */

  UVListener.push = function (data) {
    if (!UVListener._isArray(data)) {
      return;
    }
    if (data[0] === "on") {
      UVListener._on(data[1], data[2]);
    } else if (data[0] === "trigger" && data[1]) {
      UVListener._trigger(data[1]);
    }
  };

  /*** INITIALIZATION ***/

  UVListener.init = function (testing, uvLoc) {
    if (uvLoc) {
      uvLocation = uvLoc;
    }
    UVListener._initUV();
    // Hold onto anything pushed to uv_listener before initialization
    // This is a little awkward now that the desired uv_listener is an object
    if (!window.uv_listener || UVListener._isArray(window.uv_listener)) {
      // Store the current uv_listener if the old is an array
      UVListener.early_callbacks = window.uv_listener || null;
      window.uv_listener = UVListener;
      if (!testing) {
        UVListener.start();
      }
    } else {
      if (uvLoc) {
        // If init is called with a specified location, ensure we're using that
        // This is necessary because typically qTracker will come second,
        // and it would not actually update window.UVListener, but it's also the
        // place where we tend to set custom locations.
        window.uv_listener._setUVLocation(uvLocation);
      }
    }
    
  };

  UVListener.start = function () {
    // Store a dump of the current UV
    UVListener.currentUV = JSON.stringify(uv, UVListener._stripEvents);

    // Begin polling
    timer = setInterval(function () {
      UVListener._resetEventsPush();
      UVListener._checkForChanges();
    }, POLL_DELAY_MS);
    
    // Process things added before the API loads
    UVListener._processCallbacks();
  };

  q.html.UVListener = UVListener;
}());
/*NO LOG*/

/* jshint white: false */

(function () {
  
  var Utils = qubit.qtag.Utils;
  var c = window.console;
  
  /**
   * @class qubit.qtag.Log
   * 
   * ## Logging class
   * 
   * ALWAYS USE LOGGER IN A SEPARATE LINES. Lines containing logger 
   * may be deleted by compression process.
   * 
   * Author: Inz. Piotr (Peter) Fronc <peter.fronc@qubitdigital.com>
   */
  function Log(prefix) {
    this.prefix = prefix || "";
  }

  /**
   * Static property used to define finest level.
   * @property {Number} [LEVEL_FINEST=3]
   */
  Log.LEVEL_FINEST = 3;
  /**
   * Static property used to define fine level.
   * @property {Number} [LEVEL_FINE=2]
   */
  Log.LEVEL_FINE = 2;
  /**
   * Static property used to define informative level.
   * @property {Number} [LEVEL_INFO=1]
   */
  Log.LEVEL_INFO = 1;
  /**
   * Static property used to define severe level.
   * @property {Number} [LEVEL_ERROR=0]
   */
  Log.LEVEL_ERROR = 0;
  
  /**
   * @property {Number} [LEVEL_NONE=-1]
   * Static property used to define no logging level.
   */
  Log.LEVEL_NONE = -1;
  
  /**
   * @property LEVEL
   * 
   * `Log.LEVEL` property is used to controll globally current and default loggin
   * level.
   * Choose from Log.LEVEL_* properties to adjust system logging output.
   * 
   * Example:


        var Log = qubit.qtag.Log;
        qubit.qtag.Log.LEVEL = Log.LEVEL_FINEST;

   *  will enable all logs to 
   * be at output.
   * 
 

        var Log = qubit.qtag.Log;
        Log.LEVEL = Log.LEVEL_NONE;
   * will disable any logs.
   */
  Log.LEVEL = Log.LEVEL_NONE;
  Log.LEVEL = Log.LEVEL_FINEST;/*D*///line deleted during merge
  
  /**
   * @protected
   * Print method.
   * Override this method if you prefer different logging output.
   * By default all messages are redirected to console.
   * This method is used by all logging methods as final output.
   * 
   * @param {String} message Message to be logged. 
   * @returns {undefined}
   */
  Log.prototype.print = function (message) {
    if (c && c.log) {
      c.log(message);
    }
  };
  
  //it is important it is not in one line. New build will strip logs for release
  /**
   * @method
   * Finest level logging function.
   * 
   * @param {String} message Message to be logged.
   * @param {Boolean} plain If true, message object will be logged as plain as 
   *    passed directly to console. It's usefull if your console supports JSON 
   *    style browsing objects.
   * @returns {undefined}
   */
  Log.prototype.
    FINEST = function (message, plain) {
      if (Log.LEVEL >= Log.LEVEL_FINEST) {
        if (plain) {
          this.print(message, plain);
        } else {
          this.print("FINEST: " + this.prefix + message);
        }
      }
    };
    
  /**
   * @method
   * Fine level logging function.
   * 
   * @param {String} message Message to be logged.
   * @param {Boolean} plain If true, message object will be logged as plain as 
   *    passed directly to console. It's usefull if your console supports JSON 
   *    style browsing objects.
   * @returns {undefined}
   */
  Log.prototype.
    FINE = function (message, plain) {
      if (Log.LEVEL >= Log.LEVEL_FINE) {
        if (plain) {
          this.print(message, plain);
        } else {
          this.print("FINE: " + this.prefix + message);
        }
      }
    };
  
  /**
   * @method
   * Information level logging function.
   * 
   * @param {String} message Message to be logged.
   * @param {Boolean} plain If true, message object will be logged as plain as 
   *    passed directly to console. It's usefull if your console supports JSON 
   *    style browsing objects.
   * @returns {undefined}
   */
  Log.prototype.
    INFO = function (message, plain) {
      if (Log.LEVEL >= Log.LEVEL_INFO) {
        if (plain) {
          this.print(message, plain);
        } else {
          this.print("INFO: " + this.prefix + message);
        }
      }
    };
  
  /**
   * @method
   * Severe/Error level logging function.
   * 
   * @param {String} message Message to be logged.
   * @param {Boolean} plain If true, message object will be logged as plain as 
   *    passed directly to console. It's usefull if your console supports JSON 
   *    style browsing objects.
   * @returns {undefined}
   */
  Log.prototype.
    ERROR = function (message, plain) {
      if (Log.LEVEL >= Log.LEVEL_ERROR) {
        if (plain) {
          this.print(message, plain);
        } else {
          this.print("ERROR: " + this.prefix + message);
        }
      }
    };
  
  Utils.namespace("qubit.qtag.Log", Log);
}());



/*EXCLUDE: NO-SEND*/

(function () {
  
  var Utils = qubit.qtag.Utils;
  
  /**
   * Ping processing class.
   * It requires QTag instance passed to work correctly.
   * 
   * @class qubit.qtag.Ping
   * @param {qubit.qtag.deprecated.QTag} tag QTag instance
   */
  function Ping(tag) {
    this.tagManager = tag;
  }
  
  /**
   * 
   * @param {Object} config
   * @returns {undefined}
   */
  Ping.prototype.sendLoadTimes = function (config) {
    var loaderId, pingString, pingStrings, times, loadTimes;
    if (!this.tagManager.isTellingLoadTimes) {
      return;
    }
    pingString = "c=" + config.qTagClientId + "&" +
      "p=" + config.profileName + "&" +
      "l=" + (config.tellLoadTimesProbability) + "&" +
      "pv=" + q.cookie.PageView.update() + "&" +
      "d=";
    pingStrings = [];
    loadTimes = this.tagManager.loadTimes;
    for (loaderId in loadTimes) {
      if (loadTimes.hasOwnProperty(loaderId)) {
        times = this.tagManager.loadTimes[loaderId];
        pingStrings.push('"' + loaderId + '":' + (times.end - times.start));
        delete this.tagManager.loadTimes[loaderId];
      }
    }
    pingString += encodeURIComponent("{" + pingStrings.join(',') + "}");
    if (config.pingServerUrl) {
      q.html.PostData("//" + config.pingServerUrl + 
        "/tag2?" + pingString, null, "GET");
    }
    this.sendErrors(config); 
  };
  
  /**
   * 
   * @param {Object} config
   * @returns {undefined}
   */
  Ping.prototype.sendErrors = function (config) {
    if (!window.openTag_sendErrors) {
      return;
    }
    var loaderId, err, msg, errMsgs = [];
    for (loaderId in this.tagManager.errors) {
      if (this.tagManager.errors.hasOwnProperty(loaderId)) {
        err = this.tagManager.errors[loaderId];
        errMsgs.push("{r: '" + err.reason + "',u:'" + err.url + 
          "',l:'" + err.lineNumber + "'}");
      }
    }
    if (errMsgs.length > 0) {
      if (window.console && window.console.log) {
        window.console.log(errMsgs.join(","));
      }
      msg = "c=" + config.qTagClientId + "&" + 
        "p=" + config.profileName + "&" +
        "pv=" + q.cookie.PageView.update() + "&" +
        "e=" + ("[" + errMsgs.join(",") + "]");
      if (config.pingServerUrl) {
        q.html.PostData("//" + config.pingServerUrl + "/tag_err?" +
          msg, null, "GET");
      }
    }
  };

  /*session*/
  /**
   * 
   * @param {type} loaders
   * @param {Object} config
   * @returns {undefined}
   */
  Ping.prototype.handleDedupe = function (loaders, config) {
    this.sendDedupePings(this.determineDedupeLoaders(loaders), config);
  };

  /**
   * 
   * @param {type} currentLoaders
   * @param {type} filters
   * @returns {Array}
   */
  Ping.prototype.determineDedupeLoaders = function (currentLoaders, filters) {
    var loaders, i, ii, loader;

    loaders = [];
    for (i in currentLoaders) {
      if (currentLoaders.hasOwnProperty(i)) {
        loader = currentLoaders[i];
        if ((loader.dedupe === this.tagManager.DEDUPE_URL_FILTER) && 
            (loader.state === this.tagManager.NOT_LOADED)) {
          loaders.push(loader);
        }
      }
    }
    return loaders;
  };

  /**
   * 
   * @param {type} loaders
   * @param {Object} config
   * @returns {undefined}
   */
  Ping.prototype.sendDedupePings = function (loaders, config) {
    var i, ii, loader, pingString, pingStrings;
    if (this.tagManager.isTellingLoadTimes) {
      pingString = "c=" + config.qTagClientId + "&" +
        "p=" + config.profileName + "&" +
        "l=" + (config.tellLoadTimesProbability) + "&" +
        "pv=" + q.cookie.PageView.update() + "&" +
        "dd=";
      pingStrings = [];
      for (i = 0, ii = loaders.length; i < ii; i += 1) {
        loader = loaders[i];
        pingStrings.push(loader.id);
      }
      pingString += encodeURIComponent("[" + pingStrings.join(',') + "]");
      if (config.pingServerUrl && pingStrings.length > 0) {
        q.html.PostData("//" + config.pingServerUrl + 
          "/tag2?" + pingString, null, "GET");
      }
    }
  };
  
  /*~session*/
  Utils.namespace("qubit.qtag.Ping", Ping);
}());
/*EXCLUDE: SESSION*/


q.cookie.SimpleSessionCounter = {};
//Qubit Session Tracker
q.cookie.SimpleSessionCounter._cookieName = "_qst_s";
q.cookie.SimpleSessionCounter._sessionCookie = "_qsst_s";
q.cookie.SimpleSessionCounter.update = function (domain) {
  var c, s, ga, mins = 30;
  c = q.html.simplecookie.readCookie(
    q.cookie.SimpleSessionCounter._cookieName
  );
  s = q.html.simplecookie.readCookie(
    q.cookie.SimpleSessionCounter._sessionCookie
  );
  if (!c) {
    c = 1;
  } else {
    c = parseInt(c, 10);
    if (!s || (parseInt(s, 10) < (new Date().getTime() - mins * 60 * 1000))) {
      c += 1;
    }
  }
  q.html.simplecookie.writeCookie(q.cookie.SimpleSessionCounter._cookieName, 
      c, 365, domain);
  q.html.simplecookie.writeCookie(q.cookie.SimpleSessionCounter._sessionCookie, 
    new Date().getTime().toString(), null, domain);
  return c;
};
/*EXCLUDE: SESSION*/





(function () {
  /**
   * Session utilities singleton class.
   * Cannot be instantieted nor extended.
   * 
   * @class qubit.qtag.Session
   * @singleton
   */
  var Session = {};

  var SimpleCookie = q.html.simplecookie,
    Utils = qubit.qtag.Utils;

  Session.setupSession = function (config) {
    var session, i, cookie, cookieText, cookieName, now;
    session = {};
    session.sessionCount = q.cookie.SimpleSessionCounter
            .update(config.qtag_domain);
    cookieName = "qtag_" + config.profileName;
    cookie = SimpleCookie.readCookie(cookieName);

    if (cookie) {
      try {
        cookie = JSON.parse(cookie);
      } catch (e) {
        cookie = {
          sc: 0,
          sessionCount: 0,
          pageViews: 0,
          sessionStartTime: 0,
          referrer: [],
          sessionLandingPage: "",
          __v: {}
        };
      }
    } else {
      cookie = {
        sc: 0,
        sessionCount: 0,
        pageViews: 0,
        sessionStartTime: 0,
        referrer: [],
        sessionLandingPage: "",
        __v: {}
      };
    }
    now = new Date().getTime();
    //At this point session.sessionCount is from SimpleSessionCounter
    //cookie.sc is the last simpleSessionCounter result we have
    //we do this to see if there is a change in it
    if (session.sessionCount !== parseInt(cookie.sc, 10)) {
      cookie.sessionStartTime = now;
      cookie.sc = session.sessionCount;
      cookie.sessionCount += 1;
      cookie.referrer.push({
        url: Session.getReferrer(),
        landing: Utils.getUrl().substring(0, 300),
        time: now
      });
      cookie.sessionLandingPage = Utils.getUrl().substring(0, 300);
    } else if (Session.isReferrerDifferent()) {
      //If the referrer is different, then update it.
      if (!Session
              .referrerIsSameAsPrevious(cookie.referrer, now, 30 * 60 * 1000)) {
        cookie.referrer.push({
          url: Session.getReferrer(),
          landing: Utils.getUrl().substring(0, 300),
          time: now
        });
        cookie.sessionLandingPage = Utils.getUrl().substring(0, 300);
        cookie.sessionStartTime = now;
        cookie.sessionCount += 1;
      }
    }
    //Always set the saved session count to be the used sessionCount
    session.sessionCount = cookie.sessionCount;
    session.sessionStartTime = cookie.sessionStartTime;
    session.pageStartTime = now;
    cookie.pageViews += 1;
    session.pageViews = cookie.pageViews;
    session.sessionLandingPage = cookie.sessionLandingPage;

    session.referrer = cookie.referrer;
    if (session.referrer.length > 5) {
      session.referrer.splice(2, session.referrer.length - 5);
    }

    cookieText = JSON.stringify(cookie);

    i = 0;

    while ((cookieText.length > config.maxCookieLength) && (i < 5)) {
      if (cookie.referrer.length >= 3) {
        cookie.referrer.splice(2, 1);
      } else if (cookie.referrer.length === 2) {
        cookie.referrer = [cookie.referrer[0]];
      } else if (cookie.referrer.length === 1) {
        cookie.referrer = [];
      }
      cookieText = JSON.stringify(cookie);
      i += 1;
    }

    session.referrer = cookie.referrer;

    SimpleCookie.writeCookie(cookieName, cookieText, -100, "");
    SimpleCookie.writeCookie(cookieName, cookieText, 365, config.qtag_domain);

    session.setVariable = function (key, value, time) {
      var t = (!!time) ? time : 0;
      cookie.__v[key] = [value, t];
      SimpleCookie.writeCookie(cookieName, JSON.stringify(cookie), 365, 
          config.qtag_domain);
    };
    session.getCookie = SimpleCookie.readCookie;
    session.getVariable = function (key) {
      var v, t, now;
      v = cookie.__v[key];
      if (v) {
        t = v[1];
        if ((t === 0) || (t > new Date().getTime())) {
          return v[0];
        }
      }
      return null;
    };
    session.on = function (event, el, fn) {
      if (el.attachEvent) {
        el.attachEvent("on" + event, fn);
      } else if (el.addEventListener) {
        el.addEventListener(event, fn, false);
      }
    };
    return session;
  };
  
  /**
   * 
   * @param {type} referrers
   * @param {type} now
   * @param {type} overlapDuration
   * @returns {Boolean}
   */
  Session.referrerIsSameAsPrevious = function (referrers, now, overlapDuration) {
    var url, landing, lastReferrer;
    if (referrers.length > 0) {
      url = Session.getReferrer();
      landing = Utils.getUrl().substring(0, 300);
      lastReferrer = referrers[referrers.length - 1];

      return (lastReferrer.url === url) && 
        (lastReferrer.landing === landing) && 
        ((lastReferrer.time + overlapDuration) > now);
    }
    return false;
  };
  
  /**
   * 
   * @returns {Boolean}
   */
  Session.isReferrerDifferent = function () {
    var start, end, ref;
    ref = Session.getReferrer();
    start = ref.indexOf("://");
    //If it can't find a protocol, something weird is going on. 
    //Return it and track it on the server.
    if (start === -1) {
      return true;
    }
    start += 3;
    try {
      if (ref.substring(start).indexOf(Session.getDomain()) !== 0) {
        return true;
      }
      return false;
    } catch (ex) {
      return true;
    }
  };

  /**
   * 
   * @returns {String}
   */
  Session.getReferrer = function () {
    if (document.referrer) {
      return document.referrer.substring(0, 300);
    }
    return "direct";
  };

/**
 * 
 * @returns {Document.location.host|Node.location.host|HTMLDocument.location.host|DOMString}
 */
  Session.getDomain = function () {
    return document.location.host;
  };

  Utils.namespace("qubit.qtag.Session", Session);

}());

/*debug*/ //there is a cross reference conflict with tagManager - unfortunately.
// Create the container corresponding to this tagManager script (1-1)

(function () {

  var SimpleCookie = q.html.simplecookie;
  var Utils = qubit.qtag.Utils;
  var QTag;
  
  /**
   * @class qubit.qtag.DebugTool
   * ## DebugTool class
   * DebugTool creates the interface for pleasant tags
   * navigation and issues tracking.
   * It works out magically 
   * 
   * @param {qubit.qtag.BaseTag} tag tag manager instance that debug
   * tool can use for inspection.
   */
  function DebugTool(tag) {
    QTag = qubit.qtag.deprecated.QTag; //cross dependency problems
    this.tagManager = tag;
    return this;
  }
  
  /**
   * The init method.
   * @method init
   * @description awesome init 
   * @returns {undefined}
   */
  DebugTool.prototype.init = function () {
    this.loadDependencies(function () {
      // Create the Container model that has a 1-1 relationship
      // with this tagManager script
      DebugTool.Lodash = window.__qubitLodash;
      DebugTool.Backbone = window.__qubitBackbone;

      this.initContainer();
      // Add the Container model to the global Account collection
      // this allows for viewing multiple Containers
      window.__qubitOpentagDebug = window.__qubitOpentagDebug ||
        new DebugTool.Backbone.Collection();
      window.__qubitOpentagDebug.add(this.container);
      
      this.tagManager.setup();
    }.bind(this));
  };
  
  /** 
   * @description
   * Gets page variables.
   * 
   * @returns {qubit.qtag.BasePageVariable}
   */
  DebugTool.prototype.getPageVars = function () {
    return this.tagManager.getConfig().pageVars;
  };
  
  /**
   * 
   * @returns {_L5.DebugTool.tagManager.getConfig.filters}
   */
  DebugTool.prototype.getFilters = function () {
    return this.tagManager.getConfig().filters;
  };
  
  /**
   * 
   * @returns {_L5.DebugTool.tagManager.getConfig.scriptLoaders}
   */
  DebugTool.prototype.getScriptLoaders = function () {
    return this.tagManager.getConfig().scriptLoaders;
  };
  
  /**
   * 
   * @returns {_L5.DebugTool.tagManager.getConfig.qTagClientId}
   */
  DebugTool.prototype.getQTagClientId = function () {
    return this.tagManager.getConfig().qTagClientId;
  };
  
  /**
   * 
   * @param {type} qTagLoader
   * @returns {undefined}
   */
  DebugTool.prototype.markFailed = function (qTagLoader) {
    // Hack due to nature of sync param checking ##
    this.container.tags.get(qTagLoader.id).parameters.each(function (parameter) {
      parameter.set("state", "failure");
    });
  };

  // Function to escape HTML
  // Used to escape custom starters/scripts for tool
  /**
   * 
   * @param {type} html
   * @returns {Node.innerHTML}
   */
  DebugTool.escapeHTML = function (html) {
    return document.createElement("div")
      .appendChild(document.createTextNode(html))
      .parentNode
      .innerHTML;
  };

  /**
   * 
   * @param {type} e
   * @param {type} pageVar
   * @param {type} qTagLoader
   * @returns {undefined}
   */
  DebugTool.prototype.processExpressionError = function (e, pageVar, qTagLoader) {
    var parameter, pageVarId;
    if (qTagLoader.DONE_LOADING) {
      DebugTool.Lodash.each(this.getPageVars(), function (v, k) {
        if (v === pageVar) {
          pageVarId = k;
        }
      });
      parameter = this.container.parameters.get(pageVarId);
      this.appendError(parameter, {
        "context": "Error evaluating expression",
        "message": e.message
      });
    }
  };

  DebugTool.prototype.initContainer = function () {
    var _, Backbone, ErrorModel, globalFilters, globalParameters,
      Container, container, Tag, Tags, getTags,
      Filter, Filters, getFilters, filterCollection,
      Parameter, Parameters, getParameters, parameterCollection,
      Dependency, Dependencies, getDependencies;
      
    var _this = this; //It was a LUCK it was referring correctly before(!)
    
    _        = DebugTool.Lodash;
    Backbone = DebugTool.Backbone;

    // Model & Collection definitions
    Container = Backbone.Model.extend({
      toJSON: function (options) {
        var obj = _.clone(this.attributes);
        obj.tags = this.tags.toJSON();
        obj.filters = this.filters.toJSON();
        obj.parameters = this.parameters.toJSON();
        return obj;
      }
    });

    ErrorModel = Backbone.Model.extend({
      initialize: function () {
        var errors = [], self = this;
        errors.push = function (error) {
          self.trigger("error", error.context, error.message);
          return Array.prototype.push.call(this, error);
        };
        this.set("errors", errors);
      }
    });

    Parameter = ErrorModel.extend({
      defaults: {
        value: null,
        state: "pending"
      }
    });

    Filter = ErrorModel.extend({
      defaults: {
        matches: false
      }
    });

    Dependency = ErrorModel.extend({
      defaults: {
        state: "pending"
      }
    });

    Tag = ErrorModel.extend({
      defaults: {
        state: "pending"
      },
      toJSON: function (options) {
        var obj = _.clone(this.attributes);
        obj.parameters = this.parameters.toJSON();
        obj.filters = this.filters.toJSON();
        obj.dependencies = this.dependencies.toJSON();
        return obj;
      }
    });

    Tags = Backbone.Collection.extend({
      model: Tag,
      comparator: function (a) {
        return a.get("name");
      }
    });
    Filters = Backbone.Collection.extend({
      model: Filter,
      comparator: function (a) {
        return -a.get("priority");
      }
    });
    Parameters = Backbone.Collection.extend({ model: Parameter });
    Dependencies = Backbone.Collection.extend({ model: Dependency });

    // Model & Collection instantiations
    globalFilters = new Filters();
    globalParameters = new Parameters();

    // Returns a collection of Filter models related to a tag
    // while adding to the container's global filter collection
    getFilters = function (scriptLoader) {
      var filterCollection = new Filters();

      _.each(_this.getFilters(), function (filterInst) {
        var filter, filterOptions, middle, patternType;

        if (_.indexOf(filterInst.scriptLoaderKeys, scriptLoader.id) === -1) {
          return;
        }

        filterOptions = {
          id: filterInst.id,
          name: filterInst.name,
          pattern: filterInst.pattern,
          priority: filterInst.priority,
          type: (filterInst.filterType === QTag.FILTER_TYPE_INCLUDE) ?
            "include" : "exclude",
          customScript: "",
          customStarter: filterInst.starter || "", // always have starter?
          starterTriggered: false
        };

        filterOptions.description = "Tag is " + filterOptions.type + "d";
        middle = " based on the URL matching the ";
        patternType = filterInst.patternType;
        if (patternType.length === 3) {
          filterOptions.basedOn = "session variables";
          filterOptions.customScript = filterInst.pattern;
          filterOptions.pattern = "";
          filterOptions.description +=
            " based on custom script:<br/>" +
            "<pre><code class='language-javascript'>" +
            DebugTool.escapeHTML(filterInst.pattern) +
            "</code></pre><br/>" +
            "and custom starter:<br/>" +
            "<pre><code class='language-javascript'>" +
            DebugTool.escapeHTML(filterInst.starter) +
            "</code></pre>";
          if (patternType === QTag.DEDUPE_FN) {
            filterOptions.basedOn += " (dedupe)";
          }
        } else if (patternType.length < 3) {
          // Always matches
          if (patternType === QTag.ALL || patternType === "1" + QTag.ALL) {
            filterOptions.basedOn = "always matches";
            filterOptions.description += " on every URL";
          }
          // Substring
          if (patternType.indexOf(QTag.SUBSTRING) !== -1) {
            filterOptions.basedOn = "substring";
            filterOptions.description += middle + "substring <em>" +
              filterInst.pattern + "</em> (case insensitive)";
          }
          // Regex
          if (patternType.indexOf(QTag.REGEX) !== -1) {
            filterOptions.basedOn = "regex";
            filterOptions.description += middle + "regular expression <em>" +
              filterInst.pattern + "</em> (case sensitive)";
          }
          // Matches exactly
          if (patternType.indexOf(QTag.EXACT_MATCH) !== -1) {
            filterOptions.basedOn = "matches exactly";
            filterOptions.description += middle + "pattern <em>" +
              filterInst.pattern + "</em> exactly (case insensitive)";
          }
          // Is dedupe filter
          if (patternType.length === 2) {
            filterOptions.basedOn += " (dedupe)";
          }
        }

        // If already exists in container use that
        // (Only for default id -1 at this stage)
        if (globalFilters.contains(filterInst.id)) {
          filter = globalFilters.get(filterInst.id);
        } else {
          filter = new Filter(filterOptions);
          globalFilters.add(filter);
        }

        filterCollection.add(filter);
      });

      return filterCollection;
    };

    // Returns a collection of Parameter models for a tag
    // while adding to the container's global parameter collection
    getParameters = function (scriptLoader) {
      var parameterCollection = new Parameters();
      _.each(_this.getPageVars(), function (pageVar, pageVarId) {
        var parameterOptions, parameter, types = {};

        if (!_.has(scriptLoader.pageVars, pageVarId)) {
          return;
        }

        types[QTag.JS_VALUE] = "javascript expression";
        types[QTag.QUERY_PARAM] = "query parameter";
        types[QTag.COOKIE_VALUE] = "cookie value";
        types[QTag.ELEMENT_VALUE] = "DOM element";

        parameterOptions = {
          id: pageVarId,
          name: pageVar.name,
          type: types[pageVar.type],
          expression: pageVar.value,
          token: scriptLoader.pageVars[pageVarId]
        };

        // If already exists in container use that
        if (globalParameters.contains(pageVarId)) {
          parameter = globalParameters.get(pageVarId);
        } else {
          parameter = new Parameter(parameterOptions);
          globalParameters.add(parameter);
        }

        parameterCollection.add(parameter);
      });

      return parameterCollection;
    };

    // Returns a collection of Dependency models for a tag
    getDependencies = function (scriptLoader) {
      var dependencyIdArray, dependencies, dependencyName;
      dependencyIdArray = scriptLoader.dependencies;
      dependencies = new Dependencies();

      if (dependencyIdArray.length) {
        _.each(dependencyIdArray, function (dependencyId) {
          dependencyName =
            _.find(_this.getScriptLoaders(),
              function (scriptLoader) {
                return scriptLoader.id === String(dependencyId);
              }).name;
          dependencies.add({
            id: String(dependencyId),
            name: dependencyName
          });
        });
      }

      return dependencies;
    };

    // Returns a collection of Tag models
    getTags = function () {
      var tagCollection = new Tags();
      _.each(_this.getScriptLoaders(), function (scriptLoader) {
        var tag, tagOptions, key;

        tagOptions = {
          id: scriptLoader.id,
          name: scriptLoader.name,
          needsConsent: scriptLoader.needsConsent,
          async: scriptLoader.async,
          usesDocWrite: scriptLoader.usesDocWrite,
          position: (scriptLoader.positionId === 1) ?
            "start" : "end",
          dedupe: false,
          loadTime: null
        };

        if (scriptLoader.html.length) {
          tagOptions.type = "html";
          tagOptions.html = scriptLoader.html;
          switch (scriptLoader.locationId) {
          case 1:
            tagOptions.location = "head";
            break;
          case 2:
            tagOptions.location = "body";
            break;
          case 3:
            tagOptions.location = "element";
            tagOptions.locationDetail = scriptLoader.locationDetail;
            break; // TODO: Otherwise body?
          }
        } else {
          tagOptions.type = "url";
          tagOptions.pre = scriptLoader.pre;
          tagOptions.url = scriptLoader.url;
          tagOptions.post = scriptLoader.post;
        }

        // Checks if tag has dedupe checked
        _.each(_this.getFilters(), function (filter) {
          if (_.indexOf(filter.scriptLoaderKeys, scriptLoader.id) !== -1) {
            if (_this.tagManager.getFilterType(filter) !== QTag.NORMAL_FILTER) {
              tagOptions.dedupe = true;
            }
          }
        });

        tag = new Tag(tagOptions);
        tag.parameters = getParameters(scriptLoader);
        tag.filters = getFilters(scriptLoader);
        tag.dependencies = getDependencies(scriptLoader);

        tagCollection.add(tag);
      });

      return tagCollection;
    };

    container = new Container({
      clientId: _this.tagManager.getConfig().qTagClientId,
      name: _this.tagManager.getConfig().containerName,
      id: _this.tagManager.getConfig().profileName,
      delayDocWrite: _this.tagManager.getConfig().delayDocWrite,
      async: !Utils.determineIfSync(_this.tagManager)
    });

    container.tags = getTags();
    container.filters = globalFilters;
    container.parameters = globalParameters;

    this.container = container;
  };

  // When it changes a Tag's state it changes it's state in all
  // depender's versions too
  DebugTool.prototype.changeTagAndDependencyState = function (id, state) {
    var tags = this.container.tags;
    tags.get(id).set("state", state);
    tags.each(function (tag) {
      if (tag.dependencies.get(id)) {
        tag.dependencies.get(id).set("state", state);
      }
    });
  };

  // Add error object to specified model's 'errors' attribute
  // if it doesn't already exist
  DebugTool.prototype.appendError = function (model, error) {
    var _ = DebugTool.Lodash, currentContexts;
    currentContexts = _.pluck(model.get("errors"), "context");
    // Check it doesn't already exist
    if (_.indexOf(currentContexts, error.context) !== -1) {
      return;
    }
    return model.get("errors").push(error);
  };

  DebugTool.prototype.addError = function (object, exception, message) {
    this.appendError(object, {
      "message": exception.message,
      "context": message
    });
  };

  DebugTool.prototype.addFilterError = function (filter, exception, message) {
    var filterModel = this.container.filters.get(filter.id);
    this.addError(filterModel, {
      "message": exception.message,
      "context": message
    });
  };

  DebugTool.prototype.addTagError = function (tag, exception, message) {
    this.appendError(tag, {
      "message":
        (Object.prototype.toString.apply(exception) === "[object Object]") ?
         JSON.stringify(exception) : exception,
      "context": message
    });
  };

  /* ***********************************************************************
   * 
   * 
   *  
   *      STATIC HELPERS AREA 
   *
   *
   *
   * ***********************************************************************/
  // Adds the debug-tool iframe to the DOM
  
  /**
   * Adds debbuger tool to a page.
   * 
   * @returns undefined
   */
  DebugTool.addTool = function () {
    var tool, cfBase = "//cdnjs.cloudflare.com/ajax/libs/",
      requirePath = cfBase + "require.js/2.1.8/require.min.js";

    tool = {
      // Initialize addition of debug-tool iframe to the DOM
      init: function () {
        // Don't load tool inside an iframe
        if (window.self !== window.top) {
          return;
        }
        tool.create();
        tool.waitForBody();
        return tool;
      },

      // Wait for client site's body to insert debug-tool iframe
      waitForBody: function () {
        if (document.body) {
          tool.add(document.body);
        } else {
          setTimeout(tool.waitForBody, 10);
        }
      },

      // Wait for head in dynamic debug-tool iframe so we can load
      // scripts into it
      waitForIframeHead: function () {
        var toolWindow = tool.el && tool.el.contentWindow;
        if (toolWindow && toolWindow.document &&
            toolWindow.document.getElementsByTagName("head")[0]) {
          tool.insertiFrameScripts(
            toolWindow.document.getElementsByTagName("head")[0]
          );
        } else {
          setTimeout(tool.waitForIframeHead, 10);
        }
      },

      // Create the dynamic iframe
      create: function () {
        var iframe;
        iframe = tool.el = document.createElement("iframe");
        iframe.id = "qubit-opentag-debug-tool";
        iframe.frameBorder = 0;
        tool.addStyleSheet(tool.css);
      },

      // Add the dynamic iframe to the DOM
      add: function (body) {
        body.appendChild(tool.el);
        // Make sure iframe has DOCTYPE declaration for
        // Browsers that don't have DOCTYPE frame inheritance
        tool.el.contentWindow.document.open();
        tool.el.contentWindow.document.write(
          "<!doctype html>" +
            "<html>" +
              "<head></head>" +
              "<body></body>" +
            "</html>"
        );
        tool.el.contentWindow.document.close();
        tool.el.style.display = "none";
        tool.waitForIframeHead();
      },

      // Insert scripts to the iframe's head
      insertiFrameScripts: function (iframeHead) {
        var charset, toolJs, meta;
        if (/MSIE/.test(navigator.userAgent)) {
          meta = document.createElement("meta");
          meta.setAttribute("http-equiv", "X-UA-Compatible");
          meta.setAttribute("content", "IE=edge,chrome=1");
          iframeHead.appendChild(meta);
        }
        // UTF-8 meta tag
        charset = document.createElement("meta");
        charset.setAttribute("http-equiv", "Content-Type");
        charset.setAttribute("content", "text/html; charset=utf-8");
        // Add require data-main Debug tool built app
        toolJs = document.createElement("script");
        toolJs.src = requirePath; 
        toolJs.setAttribute("data-main",
            "https://d30zzqe6nnxnd7.cloudfront.net/debug-tool/debug-tool.min.js");
        // TODO: If Mobile / Old Browser
        iframeHead.appendChild(charset);
        iframeHead.appendChild(toolJs);
      },

      css:
        "#qubit-opentag-debug-tool {" +
          "z-index: 2147483646;" +
          "width: 250px;" +
          "height: 100%;" +
          "position: fixed;" +
          "top: 0; right: 0;" +
          "overflow-y: hidden;" +
        "}",

      addStyleSheet: function (css) {
        var head, styleElement;
        head = document.getElementsByTagName('head')[0];
        styleElement = document.createElement('style');
        styleElement.setAttribute('type', 'text/css');
        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = css;
        } else {
          styleElement.appendChild(document.createTextNode(css));
        }
        head.appendChild(styleElement);
        return styleElement;
      }
    };

    return tool.init();
  };

  DebugTool.prototype.loadDependencies = function (callback) {
    var pollForAccount;
    // Only load tool & JS libraries once
    if (!DebugTool.depsLoaded) {
      DebugTool.depsLoaded = true;
      // Load scripts that the debug-tool models require
      this.initToolScripts(function (_, Backbone) {
        // Puts Qubit version Backbone on the window so that multiple qtags
        // can use only one script
        window.__qubitLodash = _;
        window.__qubitBackbone = Backbone;
        callback();
      });

      if (DebugTool.showDebugTool()) {
        // Add debug-tool iframe to body
        DebugTool.addTool();
      }
    } else {
      // There is an Opentag script already on the page:
      // Wait for first loaded tagManager script to load libraries, then
      // add to window.__qubitOpentagDebug Collection
      pollForAccount = function () { // TODO: Check synchronous Container
        if (window.__qubitOpentagDebug) {
          callback();
        } else {
          setTimeout(pollForAccount, 50);
        }
      };
      pollForAccount();
    }
  };

  // Asynchronously load scripts for debug-tool Models in order
  DebugTool.prototype.initToolScripts = function (callback) {///
    var loadScripts, onComplete, callScript,
      cfBase = "//cdnjs.cloudflare.com/ajax/libs/";

    var lodashPath = cfBase + "lodash.js/1.3.1/lodash.compat.min.js";
    var backbonePath = cfBase + "backbone.js/1.0.0/backbone-min.js";
    var scriptsToLoad = [lodashPath, backbonePath];

    if (Utils.determineIfSync(this.tagManager)) {
      this.initToolScriptsSync(scriptsToLoad);

      callback(
        window._.noConflict(),
        window.Backbone.noConflict()
      );
    } else {
      onComplete = function () {
        // Pass no conflicted frameworks to callback
        callback(
          window._.noConflict(),
          window.Backbone.noConflict()
        );
      };

      callScript = function (url, callback) {
        var called = false;
        return function () {
          if (!called && (!this.readyState ||
            this.readyState === "loaded" || //needed in IE8
            this.readyState === "complete")) {
            called = true;
            callback();
          }
        };
      };

      loadScripts = function (scripts, callback) {
        var loadNext, filePath, script, head;
        loadNext = function () {
          if (!scripts.length) {
            return onComplete();
          }
          filePath = scripts.shift();
          script = document.createElement("script");
          script.src = filePath;
          script.async = "async";
          script.onload = script.onreadystatechange = 
            callScript(filePath, loadNext);
          head = document.head || document.getElementsByTagName('head')[0];
          head.appendChild(script);
        };
        loadNext();
      };

      loadScripts(scriptsToLoad);
    }
  };

  DebugTool.prototype.initToolScriptsSync = function (scripts) {
    var scriptString, request, script, head, i;
    for (i = 0; i < scripts.length; i += 1) {
      request = new XMLHttpRequest();
      request.open('GET', scripts[i], false);
      request.send(null);

      if (request.status === 200) {
        script = document.createElement("script");
        script.innerHTML = request.responseText;
        head = document.head || document.getElementsByTagName("head")[0];
        head.appendChild(script);
      }
    }
  };

  DebugTool.showDebugTool = function () {
    return SimpleCookie.readCookie("opentag_debug_tool") ||
      (document.location.href.indexOf("opentag_debug_tool") >= 0);
  };
  
  Utils.namespace("qubit.qtag.DebugTool", DebugTool);
  
}());
/*~debug*/



/*
 * Opentag, a tag deployment platform
 * Copyright 2011-2013, Qubit Group
 * http://opentag.qubitproducts.com
 */

(function () {
  
  /**
   * @class qubit.Tags
   * @singleton
   * 
   * Single storage object.
   * Tags class is used to gather information about tags in the system.
   * It stores references to tags and allows accessing them from one central
   * place.
   * This class cannot be instantieited.
   * @type Plain object.
   */
  var Tags = {},
    log = new qubit.qtag.Log("Tags: "),/*L*/
    Utils = qubit.qtag.Utils,
    tags = {},
    tagsArray = [],
    containers = {};
  
  /**
   * 
   * @param {qubit.qtag.deprecated.QTag} tag
   * @returns {undefined}
   */
  Tags.registerTag = function (tag) {
    var id = tag.getConfig().profileName;
    //note, qubit.qtag pname is its id inreality
    if (tags[id]) {

    }
    
    tags[id] = tag;
    
    Utils.addToArrayIfNotExist(tagsArray, tag);
  };
  
  /**
   * 
   * @param {String} id
   * @returns {unresolved}
   */
  Tags.getTag = function (id) {

    return tags[id];
  };
  
  /**
   * Get all QTag instances.
   * 
   * @returns Array[QTag]
   */
  Tags.getAllTags = function () {

    return tags;
  };
  
  /**
   * Page variable
   * @param {String} tagId
   * @param {String} scriptId
   * @param {String} varId
   * @returns {Object}
   */
  Tags.getVariableValue = function (tagId, scriptId, varId) {
    try {


      var tag = tags[tagId];
      var config = tag.getConfig();
      var script = config.scriptLoaders[scriptId];
      var pv = config.pageVars[varId];

      if (Utils.variableExists(pv.pageValue)) {


        return pv.pageValue;
      }

      var defVal = String(script.pageVars[varId].defaultValue);
      //Utils.prepareQuotedString(script.pageVars[varId].defaultValue);


      return defVal; //can be undefined!
    } catch (e) {


    }
  };

  /**
   * Function used to set any object at variable value, it will recognise
   * 
   * @param {String} name token name that identifies the variable.
   * @param {qubit.qtag.pagevariable.BaseVariable} object qubit.qtag.pagevariable.BaseVariable
   * instance. 
   * @returns {undefined}
   */
  Tags.setPageVariable = function (name, object) {
    throw "implement";
  };
  /**
   * Function used to get page variable instance.
   * 
   * @param {String} name token name that identifies the variable.
   * @return {qubit.qtag.pagevariable.BaseVariable} object qubit.qtag.pagevariable.BaseVariable
   * instance. 
   */
  Tags.getPageVariable = function (name) {
    throw "implement";
  };
  /**
   * Function used to set any object as variable value, it will recognise
   * it's type and convert it to qubit.qtag.pagevariable.BaseVariable.
   * @param {String} name token name that identifies the variable.
   * @param {Object} object Any object
   * @returns {undefined}
   */
  Tags.setPageVariableByValue = function (name, object) {
    throw "implement";
  };

  
  /**
   * @property 
   * @type Array
   */
  Tags.containers = [];

  Tags.registerContainer = function (container) {
    containers[container.name] = container;
  };

  //load once only
  Utils.namespace("qubit.Tags", Tags);
})();
















//@TODO PF: put these into closed scope too.

(function () {
  
  var Tags = qubit.Tags,
    log = new qubit.qtag.Log(),/*D*/
    Utils = qubit.qtag.Utils,
    DebugTool = qubit.qtag.DebugTool,/*D*/
    SimpleCookie = q.html.simplecookie,
    GlobalEval = q.html.GlobalEval,
    FileLoader = q.html.fileLoader,
    HtmlInjector = q.html.HtmlInjector,
    LOG = function () {},
    LOG_FILTER = function () {},
    LOG_LOADER = function () {},
    ping = new qubit.qtag.Ping(QTag),//no-send
    Session = qubit.qtag.Session;

  /**
   * Console log printer.
   * @param {type} message
   * @returns {undefined}
   */
  function printOut(message) {
    if (window.console && window.console.log) {
      console.log(message);
    }
  }

  /**
   * @class qubit.qtag.deprecated.QTag
   * @singleton
   * 
   * QTag main object.
   * 
   * @param {type} filters
   * @param {type} scriptLoaders
   * @returns {QTag}
   */
  function QTag(config) {
    
    var delayDocWrite = !!window.otDelayDocWrite;
    
    this.config = {
      filters: [],
      pageVars: {},
      scriptLoaders: {},
      delayDocWrite: delayDocWrite,
      qTagClientId: "",
      containerName: "Opentag",
      profileName: "",
      tellLoadTimesProbability: 0,
      maxCookieLength: 3000,
      pingServerUrl: null,
      qtag_track_session: false,
      qtag_domain: ""
    };
    
    this.isSync = Utils.determineIfSync(this);
    this.config.async = !this.isSync;
    
    if (config) {
      for (var prop in config) {
        this.config[prop] = config[prop];
      }
    }
    
    //Load the loaders in QTag.docWriteUsers one after another.
    this.loadingSequentially = false;
    this.waitingForSyncWrites = true;
    this.sequentiallyLoadingDelayed = this.config.delayDocWrite;

    Tags.registerTag(this);

    window["__ot_vars__" + this.config.profileName] = this.config.pageVars;
    //@TODO is this anywhere used?
    
        /*log*/
    if (true) {
      this.debugTool = new DebugTool(this);
      this.debugTool.init();
    } else {
      /*~log*/
      if (!this.config.holdInitialSetup) {
        this.setup();
      }
    }/*L*/
  }

//DEPRECATED
  QTag.prototype.getConfig = function () {
    return {
      containerName: this.config.containerName,
      qTagClientId: this.config.qTagClientId,
      profileName: this.config.profileName,
      delayDocWrite: this.config.delayDocWrite,
      tellLoadTimesProbability: this.config.tellLoadTimesProbability,
      pingServerUrl: this.config.pingServerUrl,
      maxCookieLength: this.config.maxCookieLength,
      qtag_domain: this.config.qtag_domain,
      filters: this.config.filters,
      scriptLoaders: this.config.scriptLoaders,
      pageVars: this.config.pageVars,
      async: !this.isSync
    };
  };

  QTag.prototype.setup = function () {
    var matchedFilters, dedupeFilters, session = {};
    
    q.html.UVListener.init(); /*UVListener*/
    
    LOG(" ************************************");
    LOG(" * Welcome to Opentag debug console *");
    LOG(" ************************************");
    LOG("");
    LOG("Global State:");
    LOG(" * Opentag is synchonrous? " + this.isSync);
    LOG(" * Async document.writes are delayed " +
        "until after document.ready? " + this.config.delayDocWrite);/*L*/
    /*session*/
    if (this.config.qtag_track_session) {
      LOG("Setting up session.");
      session = Session.setupSession(this.getConfig());
    }
    /*~session*/

    this.docWriteUsers = [];
    this.errors = {};
    this.loadersAwaitingConsent = [];
    this.isTellingLoadTimes =
            this.config.tellLoadTimesProbability > Math.random();//what this is?
    if (this.isTellingLoadTimes) {
      this.loadTimes = {};
    }
    LOG("");
    LOG("Doing filter matching");
    matchedFilters = this.getFilterStates(Utils.getUrl(), session);
    /*log*/
    LOG("");
    LOG("Matching filters are:");
    (function () {
      var i, ii;
      for (i = 0, ii = matchedFilters.length; i < ii; i += 1) {
        LOG(" * " + matchedFilters[i].name);
      }
    }());
    LOG("");
    LOG("Get matching loaders for filters");
    /*~log*/
    var scriptLoaders = this.config.scriptLoaders;
    for (var key in scriptLoaders) {
      if (!scriptLoaders[key].scriptTimeout ||
            scriptLoaders[key].scriptTimeout < 0) {
        scriptLoaders[key].scriptTimeout = QTag.TAG_MAX_WAIT;
      }
    }

    this.qTagLoaders = this.getLoaders(matchedFilters);
    this.qTagLoaderCount = 0;
    this.loadTimesSent = false;
    this.loadersStarted = 0;
    this.loadersFinished = 0;
    this.canCallLoaded = false;
    this.alreadyFinalizerCalled = false;
    this.loadedSomeSync = false;
    this.initialLoadFinished = false;
    this.runStarters(session);
    this.initialLoadFinished = true;
    this.waitingForSyncWrites = false;
    /*session*/
    ping.handleDedupe(this.qTagLoaders, this.getConfig());//no-send
    /*~session*/
    if (this.config.delayDocWrite) {
      q.html.ready(function () {
        this.sequentiallyLoadingDelayed = false;
        this.loadLoadersSequentially();
      }.bind(this));
    } else {
      if (this.loadedSomeSync) {
        setTimeout(this.loadLoadersSequentially.bind(this), 100);
      } else {
        this.loadLoadersSequentially();
      }
      //If not delaying doc.write, still kick off any available script to run
      //in the body.
      q.html.ready(function () {
        this.loadLoadersSequentially();
      }.bind(this));
    }
    this.flushLoadTimes();
    if (this.canCallLoaded) {
      this.callAllLoaded();
    }
    window.opentag_consentCBs = window.opentag_consentCBs || [];
    window.opentag_consentGiven = window.opentag_consentGiven || function () {
      var i, ii, cb;
      for (i = 0, ii = window.opentag_consentCBs.length; i < ii; i += 1) {
        window.opentag_consentCBs[i]();
      } 
    }.bind(this);
    window.opentag_consentCBs.push(this.consentGiven.bind(this));
  };

  QTag.ALL = "1";
  QTag.SUBSTRING = "2";
  QTag.REGEX = "3";
  QTag.EXACT_MATCH = "4";
  QTag.FN = "100";
  QTag.DEDUPE_FN = "110";

  QTag.FILTER_TYPE_INCLUDE = "1";
  QTag.FILTER_TYPE_EXCLUDE = "2";

  QTag.NORMAL_FILTER = "1";
  QTag.DEDUPE_URL_FILTER = "2";
  QTag.DEDUPE_SESSION_FILTER = "3";

  QTag.JS_VALUE = "2";
  QTag.QUERY_PARAM = "3";
  QTag.COOKIE_VALUE = "4";
  QTag.ELEMENT_VALUE = "5";

  QTag.NOT_LOADED = 0;
  QTag.LOADING = 1;
  QTag.LOAD_FAILURE = 2;
  QTag.LOAD_SUCCESS = 3;

  /*debug*/
  var logs = {
    filters: {},
    scripts: {},
    other: []
  };

  //NOTE: LOG(,LOG_FILTER(,LOG_LOADER( are used to choose deleted lines
  //in the non-debug build!
  //keep (log) so it wont be excluded from merging process
  LOG = function (message, ignoreOther) {
    (log).INFO(message, true);
    if (!ignoreOther) {
      logs.other.push(message);
    }
  };

  LOG_FILTER = function (filter, message) {
    var msg, filterName = "[" + filter.id + "] " + filter.name + " (" +
      ((filter.filterType === QTag.FILTER_TYPE_INCLUDE) ?
        "INCLUDE" : "EXCLUDE") + ")";
    msg = " * Filter: " + filterName + " - " + message;
    (log).INFO(msg, true);
    logs.filters[filterName] = logs.filters[filterName] || [];
    logs.filters[filterName].push(message);
  };

  LOG_LOADER = function (qTagLoader, message) {
    (log).INFO(" * Script: " + qTagLoader.name + " - " + message, true);
    logs.scripts[qTagLoader.name] = 
      logs.scripts[qTagLoader.name] || [];
    logs.scripts[qTagLoader.name].push(message);
  };

  //global logs accessor
  window.opentag_logs = logs;

  QTag.prototype.log = LOG;
  QTag.prototype.logFilter = LOG_FILTER;
  QTag.prototype.logLoader = LOG_LOADER;
  /*~debug*/

  QTag.prototype.getFilterStates = function (url, session) {
    var i, ii, filter, loaderKeysSet = {}, matchedFilters = [],
      filterMatches;

    if ((!this.config.filters) || (!url)) {
      return matchedFilters;
    }

    for (i = 0, ii = this.config.filters.length; i < ii; i += 1) {
      filter = this.config.filters[i];
      filterMatches = this.doesFilterMatch(filter, url, session);
      LOG("");
      LOG_FILTER(filter, "Start testing");
      if (filterMatches) {
        LOG_FILTER(filter, "matches");
        this.debugTool.container.filters.get(filter.id)
          .set("matches", filterMatches);//debugTool
        //TODO: don't store loaders, just yet, only do filters,
        //do loaders after we have done them all so we can take into 
        //account PRIORITY!
        matchedFilters.push(filter);
      } else {
        LOG_FILTER(filter, "does NOT match");
      }
    }
    //The matched filters are sorted into reverse order
    //So that the least important one is done first and 
    //more important ones overwrite them.
    matchedFilters.sort(function (a, b) {
      return b.priority - a.priority;
    });
    return matchedFilters;
  };

  /**
   * @param filter An array containing objects which have a pattern type and 
   *   a filter type
   */
  QTag.prototype.getLoaders = function (matchedFilters, url) {
    var i, ii, loaderKeysSet = {}, loaders = {};

    //Update the loader key set with the matched filter 
    //Note that the order that they load is not important.
    //Only the priority of the filters.

    //loaderKeysSet is a mapping of loaderKeys to the 
    //type of filter by which it was loaded

    //This is because we only load a deduped script if 
    //it has first a url filter, then a session filter
    //Thus this allows us to keep track of this.

    for (i = 0, ii = matchedFilters.length; i < ii; i += 1) {
      this.updateLoaders(matchedFilters[i], loaderKeysSet);
    }
    for (i in loaderKeysSet) {
      if (loaderKeysSet.hasOwnProperty(i)) {
        loaders[i] = this.config.scriptLoaders[i];
        //Remember the type of filter this loader was put in by 
        loaders[i].dedupe = loaderKeysSet[i];
        //Set it to be unloaded
        loaders[i].state = QTag.NOT_LOADED;
        loaders[i].nextLoaders = {};
      }
    }
    return loaders;
  };


  /**
   * Update the loader key set with the given filter
   */
  QTag.prototype.updateLoaders = function (filter, loaderKeysSet) {
    var i, ii, type, scriptLoaderKeys = filter.scriptLoaderKeys, _this = this;
    /*log*/
    LOG("");
    LOG_FILTER(filter, "has the following matching tags.");
    (function () {
      var i, ii;
      for (i = 0, ii = scriptLoaderKeys.length; i < ii; i += 1) {
        LOG("    * " + _this.config.scriptLoaders[scriptLoaderKeys[i]].name);
      }
    }());
    /*~log*/
    //If it's an include
    if (filter.filterType === QTag.FILTER_TYPE_INCLUDE) {
      for (i = 0, ii = scriptLoaderKeys.length; i < ii; i += 1) {
        type = this.getFilterType(filter);
        //And its either normal, a deduped url filter 
        //or a dedupe session filter after a url filter 
        if ((type === QTag.NORMAL_FILTER) || 
            (type === QTag.DEDUPE_URL_FILTER) ||
            //Only run a dedupe session filter if a dedupe urlfilter exists for it
            (loaderKeysSet[scriptLoaderKeys[i]] === QTag.DEDUPE_URL_FILTER)) {
          //Add it to the set of keys of loaders which will get loaded
          //Remember the filter type by which the loader was activated
          loaderKeysSet[scriptLoaderKeys[i]] = type;
        }
      }
    //Otherwise remove it from the list
    } else if (filter.filterType === QTag.FILTER_TYPE_EXCLUDE) {
      for (i = 0, ii = scriptLoaderKeys.length; i < ii; i += 1) {
        delete loaderKeysSet[scriptLoaderKeys[i]];
      }
    }

    /*log*/
    LOG("");
    LOG(" * Loaded scripts after applying filter:");
    (function () {
      var i, ii;
      for (i in loaderKeysSet) {
        if (loaderKeysSet.hasOwnProperty(i)) {
          LOG("    * " + _this.config.scriptLoaders[i].name);
        }
      }
    }());
    /*~log*/
  };

  QTag.prototype.getFilterType = function (filter) {
    var x = parseInt(filter.patternType, 10);
    if ((x < 10) || (x === 100)) {
      return QTag.NORMAL_FILTER;
    }
    if ((x >= 10) && (x < 20)) {
      return QTag.DEDUPE_URL_FILTER;
    }
    if (x === 110) {
      return QTag.DEDUPE_SESSION_FILTER;
    }
  };

  QTag.prototype.runStarters = function (session) {
    var i, ii, filter;

    for (i = 0, ii = this.config.filters.length; i < ii; i += 1) {
      filter = this.config.filters[i];
      LOG("");
      LOG_FILTER(filter, "Starting filter");
      LOG_FILTER(filter, filter.starter === this.defaultStarter ? 
        "Using default starter" : "Using custom starter");/*L*/
      try {
        filter.starter(session, this.createStarterCb(filter));
      } catch (error) {
        /*log*/
        LOG_FILTER(filter, "Exception thrown while running starter");
        if (window.JSON) {
          LOG_FILTER(filter, JSON.stringify(error));
          //@todo JSON loaded only for this??
        }
        this.debugTool
          .addFilterError(//debugTool
            filter, error, "Error running custom starter"
           );//debugTool
        /*~log*/
      }
    }
  };

  QTag.prototype.createStarterCb = function (filter) {
    return function (rerun) {
      var i, ii, loader, loaders = [], filterModel;
      filterModel = this.debugTool.container.filters.get(filter.id);

      //For each loader in the current filter
      for (i = 0, ii = filter.scriptLoaderKeys.length; i < ii; i += 1) {
        loader = this.qTagLoaders[filter.scriptLoaderKeys[i]];
        //If the loader hasn't started loading
        //and is not a deduped script that has been activated 
        //by a url filter but not a session filter... 

        if (loader && rerun === true) {
          if (loader.state === QTag.LOAD_SUCCESS) {
            loader.state = QTag.NOT_LOADED; 
            loader.counted = false;
            /*log*/
            LOG_LOADER(loader, "Rerunning based on callback");
            if (filter.starter !== this.defaultStarter) {
              filterModel.set("starterTriggered", false);
            }
            /*~log*/
          } else {
            LOG_LOADER(loader, "Not rerunning starter because state is " + 
              loader.state);/*L*/
          }
        }

        if (loader && (loader.state === QTag.NOT_LOADED) && 
            (loader.dedupe !== QTag.DEDUPE_URL_FILTER)) {
          //If it is a deduped script that has had both a url and session filter
          //But this filter isn't the session filter (ie it's the url filter...)
          //Then don't load the loader yet (wait until the session filter)
          if (!((loader.dedupe === QTag.DEDUPE_SESSION_FILTER) && 
              (filter.patternType !== QTag.DEDUPE_FN))) {

            //Make sure it's not loaded twice
            if (!loader.counted) {
              loader.counted = true;
              loaders.push(loader);
            }
          }
        }
      }
      for (i = 0, ii = loaders.length; i < ii; i += 1) {
        loader = loaders[i];
        if (this.hasConsent() || !this.needsConsent(loader)) {
          filterModel.set("starterTriggered", true);/*L*/
          this.loadLoader(loader);
        } else {
          this.loadersAwaitingConsent.push(loader);
        }
      }
    }.bind(this);
  };

  QTag.prototype.hasConsent = function () {
    return SimpleCookie.readCookie("qubitconsent") === "Accepted";
  };

  QTag.prototype.needsConsent = function (loader) {
    return !!loader.needsConsent;
  };

  QTag.prototype.consentGiven = function () {
    var i, ii, loaders = this.loadersAwaitingConsent;
    for (i = 0, ii = loaders.length; i < ii; i += 1) {
      this.loadLoader(loaders[i]);
    }
  };
    /**
     * Checks to see if a url filter matches a url
     */
  QTag.prototype.doesFilterMatch = function (filter, url, session) {
    var matches = false;
    switch (filter.patternType) {
    case QTag.FN:
    case QTag.DEDUPE_FN:
      try {
        LOG_FILTER(filter, "test function. ");
        matches = filter.pattern(session);

        LOG(" * Filter: " + filter.name + 
            ": function returns true? " + matches);/*L*/
      } catch (e) {
        matches = false;
        LOG(" * Filter: " + filter.name + 
            ": function throws exception during exection.");/*L*/
        this.debugTool.addFilterError(filter, e, "Error running custom script");
      }

      break;
    case QTag.EXACT_MATCH:
    case "1" + QTag.EXACT_MATCH:
      if (url.toLowerCase() === filter.pattern.toLowerCase()) {
        matches = true;
      }
      LOG_FILTER(filter, "EXACT MATCH ");
      LOG_FILTER(filter, "matches? " + matches);
      LOG_FILTER(filter, "pattern - " + filter.pattern.toLowerCase());
      LOG_FILTER(filter, "url     - " + url.toLowerCase());
      break;
    case QTag.SUBSTRING:
    case "1" + QTag.SUBSTRING:
      if (url.toLowerCase().indexOf(filter.pattern.toLowerCase()) >= 0) {
        matches = true;
      }
      LOG_FILTER(filter, "SUBSTRING");
      LOG_FILTER(filter, "matches? " + matches);
      LOG_FILTER(filter, "pattern - " + filter.pattern.toLowerCase());
      LOG_FILTER(filter, "url     - " + url.toLowerCase());
      LOG_FILTER(filter, "matched at index - " + 
            url.toLowerCase().indexOf(filter.pattern.toLowerCase()));/*L*/
      break;
    case QTag.REGEX:
    case "1" + QTag.REGEX:
      // compile url pattern
      if (new RegExp(filter.pattern).test(url)) {
        matches = true;
      }
      LOG_FILTER(filter, "REGEX ");
      LOG_FILTER(filter, "matches? " + matches);
      LOG_FILTER(filter, "pattern - " + filter.pattern.toLowerCase());
      LOG_FILTER(filter, "url     - " + url.toLowerCase());
      break;
    case QTag.ALL:
    case "1" + QTag.ALL:
      matches = true;
      LOG_FILTER(filter, "MATCHES ANYTHING. ");
      break;
    }
    if (matches && !filter.starter) {
      filter.starter = this.defaultStarter;
    }
    return matches;
  };

  QTag.prototype.defaultStarter = function (session, cb) {
    cb();
  };

  QTag.TAG_MAX_WAIT = 10 * 1000;
  QTag.loadCheckInterval = 500;

  QTag.prototype.loadLoader = function (qTagLoader) {
    var err, tag;
    LOG("");
    LOG_LOADER(qTagLoader, "Starting loading");
    tag = this.debugTool.container.tags.get(qTagLoader.id);
    if ((qTagLoader.state === QTag.NOT_LOADED) && 
        this.dependenciesExist(qTagLoader)) {
      try {
        qTagLoader.state = QTag.LOADING;

        LOG_LOADER(qTagLoader, "State is now: LOADING");
        this.debugTool.changeTagAndDependencyState(qTagLoader.id, "loading");

        qTagLoader.startTime = new Date().valueOf();
        if (qTagLoader.usesDocWrite && !(this.isSync && !qTagLoader.async)) {
          //If it is going to use document.write, do it sequentially, 
          //because we need to reroute it
          this.docWriteUsers.push(qTagLoader);
          this.loadLoadersSequentially();
          LOG_LOADER(qTagLoader, "Added to document.write queue");

        } else {
          //Do it right now
          this.doWhenReady(
            qTagLoader,
            this.loadTagLoader.bind(this),
            function () {
            //TODO: handle the page loading really slowly better here
            /*log*/
            LOG_LOADER(qTagLoader, "Failed to load script after" + 
              qTagLoader.scriptTimeout + "ms time.");
            this.debugTool.changeTagAndDependencyState(qTagLoader.id, "failure");
            // trigger event on parameters that have not been found
            tag.parameters.each(function (parameter) {
              if (!parameter.get("value")) {
                parameter.set("state", "failure");
              }
            });
            /*~log*/
          }.bind(this));
        }
      } catch (e) {
        qTagLoader.state = QTag.LOAD_FAILURE;
        this.debugTool.changeTagAndDependencyState(qTagLoader.id, "failure");
        this.debugTool.addError(tag, e, "Error parsing script loader");

        err = {
          reason: "error parsing loader, " + qTagLoader.id + ": " + e.reason,
          url: document.location.href
        };

        this.errors[qTagLoader.id] = err;
        printOut(err);
      }
    }
  };

  QTag.prototype.dependenciesExist = function (qTagLoader) {
    var i, ii, dependencies, dependency, satisfied = true;
    LOG("");
    LOG_LOADER(qTagLoader, "Checking Dependencies Exist...");
    dependencies = qTagLoader.dependencies; 
    if (!dependencies) {
      return true;
    }
    for (i = 0, ii = dependencies.length; i < ii; i += 1) {
      dependency = this.qTagLoaders[dependencies[i]];
      if (!dependency) {
        LOG_LOADER(qTagLoader, "  -> does not exist");
        satisfied = false;
      } else if (dependency.state !== QTag.LOAD_SUCCESS) {
        LOG_LOADER(qTagLoader, "  -> is not yet loaded");
        dependency.nextLoaders[qTagLoader.id] = true;
        satisfied = false;
      } else {
        LOG_LOADER(qTagLoader, "  -> Exists");
      }
    }
    /*log*/
    if (satisfied) {
      LOG_LOADER(qTagLoader, "All dependencies are satisfied");
    } else {
      LOG_LOADER(qTagLoader, "NOT all dependencies are satisfied");
    }
    /*~log*/
    return satisfied;
  };

  /**
   * Tag runner.
   * 
   * @param {type} tag
   * @param {type} loader
   * @returns {undefined}
   */
  QTag.prototype.runTag = function (tag, loader) {
    this.qTagLoaderCount += 1;
    loader(tag);
  };

  //Load a tag loader with function f, when the element into which it is going to
  //be injected exists. If it doesn't exist after a few tries, then call 
  //timeouthandler
  QTag.prototype.doWhenReady = function (qTagLoader, loader, timeoutHandler) {
    if (this.canLoad(qTagLoader)) {
      //count only scripts that have dependencies covered: can be loaded
      this.runTag(qTagLoader, loader);
    } else {
      var passed = new Date().valueOf() - qTagLoader.startTime;
      if (passed < qTagLoader.scriptTimeout) {
        setTimeout(function () {
          this.doWhenReady(qTagLoader, loader, timeoutHandler);
        }.bind(this), QTag.loadCheckInterval);
      } else {
        qTagLoader.DONE_LOADING = true;
        //before exit, try defaults
        if (this.canLoad(qTagLoader, true)) {
          this.runTag(qTagLoader, loader);
        } else {
          timeoutHandler(qTagLoader);
        }
      }
    }
  };

  /**
   * Function checking if script parameter dependencies waiting time is timed out.
   * @param {type} qTagLoader
   * @returns {Boolean}
   */
  QTag.prototype.isPageVarsTimedOut = function (qTagLoader) {
    return qTagLoader.scriptTimeout < 
      (new Date().valueOf() - qTagLoader.startTime);
  };

  //Is the tag loader ready to be loaded?
  QTag.prototype.canLoad = function (qTagLoader, useDefaults) {
    var exists = this.elementExists(qTagLoader) && 
      this.pageVariablesExist(qTagLoader, useDefaults);

    return exists;
  };
  QTag.prototype.elementExists = function (qTagLoader) {
    LOG_LOADER(qTagLoader, "Does parent element exist?");  
    if (this.isSync && !qTagLoader.async) {
      LOG_LOADER(qTagLoader, " -> Bypassing check - " +
        "Script is synchonrous - " + /*L*/
        "and will just be directly injected into page"); /*L*/
      return true;
    } else if (qTagLoader.locationId === 2) {
      LOG_LOADER(qTagLoader, " -> Checking for body? " + !!document.body);
      return !!document.body;
    } else if (qTagLoader.locationId === 3) {
      LOG_LOADER(qTagLoader, " -> Checking for element with id " + 
        qTagLoader.locationDetail); /*L*/
      LOG_LOADER(qTagLoader, " -> Element exists? " + 
        !!document.getElementById(qTagLoader.locationDetail)); /*L*/
      return !!document.getElementById(qTagLoader.locationDetail);
    }
    LOG_LOADER(qTagLoader, " -> Assumimg head exists");
    return true;
  };


  QTag.prototype.pageVariablesExist =
          function (qTagLoader, useDefaults) {
    var key, exists, pageVar, parameter;
    if (!qTagLoader.pageVars) {
      return true;
    }
    LOG_LOADER(qTagLoader, "Checking page variables");
    for (key in qTagLoader.pageVars) {
      if (qTagLoader.pageVars.hasOwnProperty(key)) {
        try {
          pageVar = this.config.pageVars[key];
          exists = this.pageVariableExists(pageVar, qTagLoader, key, useDefaults);
          /*log*/
          parameter = this.debugTool.container.parameters.get(key);
          LOG_LOADER(qTagLoader, "Variable '" + this.config.pageVars[key].name + 
            "' exists? " + exists);

          if (exists) {
            var finalValue =
              Tags.getVariableValue(this.config.profileName, qTagLoader.id, key);

            parameter.set("value", finalValue)
              .set("isArray", pageVar.isArray)
              .set("state", "success");
          } else {
            if (parameter.get("state") !== "loading") {
              parameter.set("state", "loading");
            }
          }
          /*~log*/
          if (!exists) {
            return false;
          }
        } catch (e) {
          this.debugTool.addError(parameter, e, "Error checking parameter existence");
          return false;
        }
      }
    }
    return true;
  };

  /**
   * Evaulates and sets page variable - if defined in its scope.
   * @param {type} pageVar
   * @returns {evaluatePageValue.Anonym$0}
   */
  function evaluatePageValue(pageVar, qTagLoader, tag) {
    var arrSplit, i, j, firstLevelArray, firstLevelArrayValue,
      variableArray, variable, isArray = false;
    var type = pageVar.type;
    var value = pageVar.value;
    switch (type) {
    case QTag.JS_VALUE:
      try {
        if (value.indexOf("[#]") === -1) {
          GlobalEval.globalEval(
            "window.__var_test = (" + value + ")"
          );
          variable = window.__var_test;
        } else {
          variable = tag.getArrayPageVariableExists(pageVar);
          if (variable) {
            /*log*/
            // TODO: Do second level array and further
            variableArray = [];
            arrSplit = variable.split("[0]");
            GlobalEval.globalEval(
              "window.__var_test = (" + arrSplit[0] + ")"
            );
            firstLevelArray = window.__var_test;
            for (i = 0; i < firstLevelArray.length; i += 1) {
              GlobalEval.globalEval(
                "window.__var_test = (" + arrSplit[0] + "[" + i + "]" +
                  arrSplit[1] + ")"
              );
              firstLevelArrayValue = window.__var_test;
              variableArray.push(firstLevelArrayValue);
            }
            /*~log*/
            GlobalEval.globalEval(
              "window.__var_test = (" + variable + ")"
            );
            variable = window.__var_test;
            /*log*/
            variable = variableArray;
            /*~log*/
            isArray = true;
          }
        }
      } catch (e) {
        tag.debugTool.processExpressionError(e, pageVar, qTagLoader);
        variable = null;
      }
      break;
    case QTag.QUERY_PARAM:
      variable = Utils.getQueryParam(value);
      break;
    case QTag.COOKIE_VALUE:
      variable = SimpleCookie.readCookie(value);
      break;
    case QTag.ELEMENT_VALUE:
      variable = Utils.getElementValue(value);
      break;
    }

    return {pageValue: variable, isArray: isArray};
  }

  QTag.prototype.pageVariableExists =
          function (pageVar, qTagLoader, varKey, useDefaults) {
    var pv = evaluatePageValue(pageVar, qTagLoader, this);
    var exists = Utils.variableExists(pv.pageValue);

    if (exists) {
      pageVar.pageValue = pv.pageValue;
      pageVar.isArray = pv.isArray;
    } else if (useDefaults) {
      exists = Utils.variableExists(qTagLoader.pageVars[varKey].defaultValue);
    }

    return exists;
  };

  QTag.prototype.getArrayPageVariableExists = function (pageVar) {
    var i, ii, x, exists, arrayEmpty, curr, segments;
    exists = true;
    arrayEmpty = false;
    curr = "";
    segments = pageVar.value.split("[#]");
    //don't do the last segment (will not contain an array)
    for (i = 0, ii = segments.length - 1; exists && (i < ii); i += 1) {
      curr += segments[i];
      try {
        GlobalEval.globalEval("window.__var_test = (" + curr + ")");
        x = window.__var_test;
      } catch (e) { // TODO: add to parameter error
        exists = false;
      } 
      exists = exists && Utils.variableExists(x);
      if (exists) {
        if (x.length === 0) {
          arrayEmpty = true;
          break;
        } 
        curr += "[0]";
      }
    }
    if (!exists) {
      return null;
    } else {
      if (arrayEmpty) {
        return curr;
      } else {
        return pageVar.value.replace("[#]", "[0]");
      }
    }
  };

  QTag.prototype.loadLoadersSequentially = function () {
    var qTagLoader, i, ii, loaderOk;
    LOG("");
    LOG("Trying to load next script from document.write queue.");
    LOG(" * Queue state:");
    LOG("   * Waiting for initial synchronous script to finish?        " + 
      this.waitingForSyncWrites);/*L*/
    LOG("   * Waiting for document.ready?                              " + 
      this.sequentiallyLoadingDelayed);/*L*/
    LOG("   * Waiting for existing document.write script to terminate? " + 
      this.loadingSequentially);/*L*/
    LOG("   * Any document.write scripts left to load?                 " + 
      (this.docWriteUsers.length > 0));/*L*/
    if (!this.waitingForSyncWrites &&
        !this.sequentiallyLoadingDelayed &&
        !this.loadingSequentially &&
        (this.docWriteUsers.length > 0)) {

      LOG("Checks passed, loading next from queue.");
      LOG("");

      this.loadingSequentially = true;
      loaderOk = false;

      for (i = 0, ii = this.docWriteUsers.length; i < ii; i += 1) {
        qTagLoader = this.docWriteUsers[i];
        LOG("Checking '" + qTagLoader.name + "' to see if it is ready to " +
          "be loaded form document.write queue");/*L*/
        if (this.canLoad(qTagLoader)) {
          LOG("Good to load " + qTagLoader.name + 
            " from document.write queue");/*L*/
          this.docWriteUsers.splice(i, 1);
          loaderOk = true;
          
          
          
          break; //should be well visible
          
          
          
        } else {
          this.debugTool.changeTagAndDependencyState(qTagLoader.id, "failure");
          this.debugTool.markFailed(qTagLoader);
        }
      }

      if (loaderOk) {
        LOG("");
        LOG_LOADER(qTagLoader, 
          "Attempting to load from document.write queue");/*L*/
        this.doWhenReady(qTagLoader,
          this.loadLoaderSequentially.bind(this),
          function () {
          // TODO: This never gets fired because if loaderOk 
          // then canLoad is true ##
          this.loadLoadersSequentially();
        }.bind(this));
      } else {
        this.loadingSequentially = false;
        LOG("No scripts found to load from queue");// why this is here?
      }
    } else {
      LOG("Checks failed. Cannot load document.write scripts yet or " +
          "no scripts to run.");/*L*/
    }
  };

  //Load a particular loader which needs to have document.write redirected.
  QTag.prototype.loadLoaderSequentially = function (qTagLoader) {
    var text = [], finishHandler, injectOver;
    document.write = function (t) {
      text.push(t);
      LOG_LOADER(qTagLoader, 
        "Received call from document.write with contents:");/*L*/
      LOG_LOADER(qTagLoader, t);
    };
    document.writeln = function (t) {
      text.push(t);
      LOG_LOADER(qTagLoader, 
        "Received call from document.writeln with contents:");/*L*/
      LOG_LOADER(qTagLoader, t);
    };
    finishHandler = function () {
      LOG_LOADER(qTagLoader, 
        "Script finished, injecting document.write contents - " + /*L*/
        text.join("\n").length + " chars");/*L*/
      var el = this.getLocation(qTagLoader);

      //note that since there is no finish handler, this means that if 
      //we document.write an async script, then the post will run 
      //before it has loaded
      HtmlInjector.inject(el, qTagLoader.positionId === 1, 
        text.join("\n"), function () {});
    }.bind(this);
    qTagLoader.finishHandler = finishHandler;
    LOG_LOADER(qTagLoader, "Loading, with wrapped document.write");
    this.loadTagLoader(qTagLoader);
  };

  //Load a particular tag loader
  QTag.prototype.loadTagLoader = function (qTagLoader) {
    this.substituteValues(this.config.pageVars, qTagLoader);
    LOG_LOADER(qTagLoader, "Substituting values - initial values:");
    LOG_LOADER(qTagLoader, "pre:  " + qTagLoader._pre);
    LOG_LOADER(qTagLoader, "url:  " + qTagLoader._url);
    LOG_LOADER(qTagLoader, "post: " + qTagLoader._post);
    LOG_LOADER(qTagLoader, "html: " + qTagLoader._html);
    LOG_LOADER(qTagLoader, "Substitution complete - substituted values:");
    LOG_LOADER(qTagLoader, "pre:  " + qTagLoader.pre);
    LOG_LOADER(qTagLoader, "url:  " + qTagLoader.url);
    LOG_LOADER(qTagLoader, "post: " + qTagLoader.post);
    LOG_LOADER(qTagLoader, "html: " + qTagLoader.html);

    try {
      if (qTagLoader.url) {
        LOG_LOADER(qTagLoader, "URL based script");
        if (!qTagLoader.async && this.isSync) {
          LOG_LOADER(qTagLoader, "Script is synchonous and so is Opentag");
          LOG_LOADER(qTagLoader, "Will document.write script URL into page");
          this.loadTagLoaderSync(qTagLoader);
        } else {
          LOG_LOADER(qTagLoader, "Loading asynchronously");
          FileLoader.load(
            qTagLoader.url,
            this.getTimerStarter(qTagLoader),
            this.getTimerEnder(qTagLoader), // TODO change error to here in QCommon
            qTagLoader.parentNode,
            qTagLoader.async
          );
        }
      } else if (qTagLoader.html) {
        LOG_LOADER(qTagLoader, "Injecting html into page");
        this.injectHtml(qTagLoader);
      }
    } catch (e) {
      this.getTimerEnder(qTagLoader)(null, e, true);
    }
  };
  
  QTag.prototype._substituteValues = function (pageVars, qTagLoader, key) {
    var pageVar, pageVarKey, token, originKey = "_" + key, str, tag;
    tag = this.debugTool.container.tags.get(qTagLoader.id);
    if (!qTagLoader[originKey]) {
      qTagLoader[originKey] = qTagLoader[key];
      /*log*/
      if (tag.get(key) && tag.parameters.length) {
        tag.set(originKey, qTagLoader[key]);
      }
      /*~log*/
    }

    str = qTagLoader[originKey];
    var profileName = this.config.profileName;
    if (str && str.length > 0) {
      for (pageVarKey in qTagLoader.pageVars) {

        if (qTagLoader.pageVars.hasOwnProperty(pageVarKey)) {
          pageVar = pageVars[pageVarKey];
          token = "\\${" + qTagLoader.pageVars[pageVarKey].token + "}"; 

          var pageValue = pageVar.pageValue;

          //if variable is unset - try to grab defaults
          if (pageVar.pageValue === undefined) {
            LOG_LOADER(qTagLoader, "Setting defaults for unset page variable.");
            pageValue =
              Tags.getVariableValue(profileName, qTagLoader.id, pageVarKey);
            LOG_LOADER(qTagLoader,
              "Variable -> key: " + pageVarKey + ", value: " + pageValue);/*L*/
          }

          if (pageVar.isArray) {
            LOG_LOADER(qTagLoader, "Substituting " +
              token + " with array");/*L*/
            str = Utils.substituteArray(pageVar, token, str); 
          } else {
            if (pageValue instanceof Array) {//should be OBJECT??
              var acessorString = "qubit.Tags.getVariableValue(" +
                        profileName + "," +
                        qTagLoader.id + "," +
                        pageVarKey + ")";
              str = str.replace(new RegExp(token, "g"), acessorString);
              LOG_LOADER(qTagLoader, "Substituting " + token.substring(1) + 
                " with array.");/*L*/
            } else {
              pageValue = pageValue;
              LOG_LOADER(qTagLoader, "Substituting " + token + 
                " with " + pageValue);/*L*/
              str = str.replace(new RegExp(token, "g"), pageValue);
            }
          }
        }
      }
      /*log*/
      if (tag.get(key) && tag.parameters.length) {
        tag.set(key, str);
      }
      /*~log*/
      qTagLoader[key] = str;
    }
  };

  QTag.prototype.substituteValues = function (pageVars, qTagLoader) { ///DEPRECATED
    this._substituteValues(pageVars, qTagLoader, "html");
    this._substituteValues(pageVars, qTagLoader, "pre");
    this._substituteValues(pageVars, qTagLoader, "post");
    this._substituteValues(pageVars, qTagLoader, "url");
  };

  QTag.prototype.loadTagLoaderSync = function (qTagLoader) {
    var url, scr = "scr", value;
    this.getTimerStarter(qTagLoader)();
    url = FileLoader.tidyUrl(qTagLoader.url);
    value = "<" + scr + "ipt type='text/javascript' src='" + url + "'>" +
      "</" + scr + "ipt>";
    document.write(value);
    this.loadedSomeSync = true;
    this.getTimerEnder(qTagLoader)();
  };

  //Set up the html injector 
  QTag.prototype.injectHtml = function (qTagLoader) {
    var el = this.getLocation(qTagLoader);
    this.getTimerStarter(qTagLoader)();
    HtmlInjector.inject(el, qTagLoader.positionId === 1, 
        qTagLoader.html, this.getTimerEnder(qTagLoader));
  };

  //Get the element into which the qubit.qtag will be injected
  QTag.prototype.getLocation = function (qTagLoader) {
    var el;
    if (qTagLoader.locationId === 1) {
      el = document.getElementsByTagName("head")[0];
    } else if (qTagLoader.locationId === 2) {
      el = document.body;
    } else if (qTagLoader.locationId === 3) {
      el = document.getElementById(qTagLoader.locationDetail);
    } else {
      el = document.body;
    }
    return el;
  };

  QTag.prototype.getTimerStarter = function (qTagLoader) {
    var startTime;
    if (this.isTellingLoadTimes) {
      startTime = (new Date()).getTime();
      this.debugTool.container.tags.get(qTagLoader.id)
              .set("startTime", startTime);//debugTool
      this.loadTimes[qTagLoader.id] = {
        start: startTime
      };
    }
    /*log*/
    if (!!qTagLoader.url && !!qTagLoader.pre) {
      LOG_LOADER(qTagLoader, "Evaluating pre script");
    }
    /*~log*/
    return this.createStatementEvaluator(
      qTagLoader.url ? qTagLoader.pre : "", 
      true
    );
  };

  QTag.prototype.getTimerEnder = function (qTagLoader) {
    var run = false, tag;
    return function (url, error, loadFailed) {
      if (run) {
        return;
      }
      run = true;
      tag = this.debugTool.container.tags.get(qTagLoader.id);
      try {
        var startTime, endTime, errors;
        /*log*/
        if (loadFailed) {
          LOG_LOADER(qTagLoader, "Script load failed");
          if (window.JSON) {
            LOG_LOADER(qTagLoader, JSON.stringify(error));
          }
        }
        startTime = tag.get("startTime");
        tag.unset("startTime");
        /*~log*/

        if (this.isTellingLoadTimes) {
          endTime = (new Date()).getTime(); // what if this can't be set?
          tag.set("loadTime", endTime - startTime);/*L*/
          this.loadTimes[qTagLoader.id].end = endTime;
        }

        //If tag using document.write, call this to signal that 
        //the generated text can now be inserted
        if (qTagLoader.finishHandler) {
          qTagLoader.finishHandler();
        }

        /*log*/
        if (!loadFailed && !!qTagLoader.url && !!qTagLoader.post) {
          LOG_LOADER(qTagLoader, "Evaluating post script");
        }
        /*~log*/
        
        this.createStatementEvaluator(
          (!loadFailed && !!qTagLoader.url) ? qTagLoader.post : "", 
          false
        )();

        if (error) {
          this.errors[qTagLoader.id] = error;
          qTagLoader.state = QTag.LOAD_FAILURE;

          LOG_LOADER(qTagLoader, "State set to FAILURE");
          this.debugTool.changeTagAndDependencyState(qTagLoader.id, "failure");
          this.debugTool.addTagError(tag, error, "Error loading script");
        } else {
          qTagLoader.state = QTag.LOAD_SUCCESS;

          LOG_LOADER(qTagLoader, "State set to SUCCESS");
          this.debugTool.changeTagAndDependencyState(qTagLoader.id, "success");
        }

        LOG_LOADER(qTagLoader, 
          "Inject finished. Will now try loading another script " +/*L*/
          "from document.write queue.");/*L*/

        if (this.loadingSequentially) {
          this.loadingSequentially = false;
        }
        this.loadLoadersSequentially();

        if (!loadFailed) {
          LOG_LOADER(qTagLoader, "Loading any dependent scripts");
          this.loadDependentScripts(qTagLoader);
        }
      } catch (ex_ender) {
        this.debugTool.addError(tag, ex_ender, "Error injecting script");
        printOut(ex_ender);
      }
    }.bind(this);
  };

  QTag.prototype.loadDependentScripts = function (qTagLoader) {
    var i;
    for (i in qTagLoader.nextLoaders) {
      if (qTagLoader.nextLoaders.hasOwnProperty(i)) {
        if (this.qTagLoaders[i]) {
          LOG_LOADER(qTagLoader, "Loading dependent script " + 
            this.qTagLoaders[i].name);/*L*/
          this.loadLoader(this.qTagLoaders[i]);
        }
      }
    }
  };

  QTag.prototype.createStatementEvaluator = function (statement, start) {
    if ((!!statement) && (statement.length > 0)) {
      return function () {
        this.incrementLoadCounter(start);// eval allowed to throw here exc.
        GlobalEval.globalEval(statement);
      }.bind(this);
    } else {
      return function () {
        this.incrementLoadCounter(start);
      }.bind(this);
    }
  };

  QTag.prototype.incrementLoadCounter = function (start) {
    if (start) {
      this.loadersStarted += 1;
      this.canCallLoaded = false;
    } else {
      this.loadersFinished += 1;
    }
    this.flushLoadTimes();
  };

  QTag.prototype.flushLoadTimes = function () {
    if ((this.initialLoadFinished && 
        (this.loadersFinished === this.qTagLoaderCount)) || 
        (this.loadTimesSent &&
        (this.loadersStarted === this.loadersFinished)) &&
        Utils.keys(this.qTagLoaders).length === this.loadersFinished) {
//if(Utils.keys(this.scriptLoaders).length>3){alert(Utils.keys(this.qTagLoaders.length)}
      ping.sendLoadTimes(this.getConfig());//no-send
      this.canCallLoaded = true;
      if (this.initialLoadFinished) {
        //check if this is all done! current check doesnt check poissible
        //uncounted synchronously content (see runStarters loop)
        this.callAllLoaded();
      }
      this.loadTimesSent = true;
    } 
  };
  
  QTag.prototype.callAllLoaded = function () {};
  
















  
  Utils.namespace("qubit.qtag.deprecated.QTag", QTag);
}());





(function () {

  var filters = [],
    pageVars = {},
    scriptLoaders = {},
    delayDocWrite = false,
    qTagClientId = "",
    containerName = "Opentag",
    profileName = "",
    tellLoadTimesProbability = 0,
    maxCookieLength = 3000,
    pingServerUrl = null,
    qtag_track_session = false,
    qtag_domain = "",
    scriptURL = null;

  /*INSERT_DATA*/


















  
  //defaults
  var mainConfig = {};
  
  // real part
  try {
    mainConfig.filters = filters;
  } catch (e) {}
  try {
    mainConfig.pageVars = pageVars;
  } catch (e) {}
  try {
    mainConfig.scriptLoaders = scriptLoaders;
  } catch (e) {}
  try {
    mainConfig.delayDocWrite = delayDocWrite;
  } catch (e) {}
  try {
    mainConfig.qTagClientId = qTagClientId;
  } catch (e) {}
  try {
    mainConfig.containerName = containerName;
  } catch (e) {}
  try {
    mainConfig.profileName = profileName;
  } catch (e) {}
  try {
    mainConfig.tellLoadTimesProbability = tellLoadTimesProbability;
  } catch (e) {}
  try {
    mainConfig.maxCookieLength = maxCookieLength;
  } catch (e) {}
  try {
    mainConfig.pingServerUrl = pingServerUrl;
  } catch (e) {}
  try {
    mainConfig.qtag_track_session = qtag_track_session;
  } catch (e) {}
  try {
    mainConfig.qtag_domain = qtag_domain;
  } catch (e) {}
  try {
    mainConfig.qTagClientId = qTagClientId;
  } catch (e) {}
  try {
    mainConfig.scriptURL = scriptURL;
  } catch (e) {}

  /*session*/
  mainConfig.qtag_track_session = true;
  /*~session*/
  
  var QTag = qubit.qtag.deprecated.QTag;
  var SimpleCookie = q.html.simplecookie;
  
  function debugMode() {
    var isDebug = false;
    if (SimpleCookie.readCookie("opentag_debug") ||
        SimpleCookie.readCookie("opentag_debug_tool") ||
        document.location.href.indexOf("opentag_debug") >= 0) {
      isDebug = true;
    }
    isDebug = false;/*L*/
    return isDebug;
  }
  
  var started = false;
  function Main(mainConfig) {
    /**exclude at tests**/
    if (started) {
      return;
    }
    started = true;
    if (debugMode()) {
      // Change the suffix depending on whether it is tool/log mode
      var debugScript = document.createElement("script");
      if (mainConfig.scriptURL) {
        debugScript.src = mainConfig.scriptURL;
      } else {
        debugScript.src = "//s3-eu-west-1.amazonaws.com/opentag/opentag-" +
          mainConfig.qTagClientId + "-" +
          mainConfig.profileName + "-debug.js";
      }
      document.getElementsByTagName("head")[0].appendChild(debugScript);
    } else {
      var tagsManager = new QTag(mainConfig);
    }
    /**~exclude at tests**/
  }
  
  new Main(mainConfig);
  
})();
}());} catch (e) {
  try {
    if (window.debug) {
      console.log(e);
    }
  } catch (ex) {}
}
