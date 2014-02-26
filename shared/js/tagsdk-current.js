
var q = {};


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


q.html = {};


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


q.html.UVCommonValues = {};

q.html.UVCommonValues.keys = [
  "version",
  "page",
  "category",
  "subcategory",
  "user",
  "name",
  "username",
  "user_id",
  "email",
  "language",
  "returning",
  "facebook_id",
  "twitter_id",
  "listing",
  "items",
  "id",
  "sku",
  "url",
  "manufacturer",
  "color",
  "currency",
  "unit_price",
  "unit_sale_price",
  "basket",
  "subtotal",
  "subtotal_include_tax",
  "tax",
  "shipping_cost",
  "total",
  "line_items",
  "product",
  "sku_code",
  "quantity",
  "environment",
  "variation",
  "revision",
  "age",
  "gender",
  "first_order",
  "registered_today",
  "registered_in_current_session",
  "registration_date",
  "last_order_date",
  "last_transaction_payment_type"];

q.html.UVCommonValues.values = [
  "",
  true,
  false,
  "true",
  "false",
  "GBP",
  "USD",
  "production"
];




/*jslint evil: true*/
/*global window, console, q */


(function () {
  var UVCompressor = {}, level, uv;

  // Cover for browsers without array indexOf
  var indexOfArray = function (inputArray, elt, from) {
    var len = inputArray.length;
    from = Number(arguments[2]) || 0;
    from = (from < 0) ? Math.ceil(from) : Math.floor(from);
    if (from < 0) {
      from += len;
    }
    for (; from < len; from += 1) {
      if (inputArray.hasOwnProperty(from) && inputArray[from] === elt) {
        return from;
      }
    }
    return -1;
  };

  UVCompressor.replaceCommonValues = function (subjectVariable) {
    // Iterates over universal variable replacing keynames found in UVCommon Values with
    // corresponding ID's from UVCommonValues.js
    var i = 0, ii = subjectVariable.length, returnArray = [],
      rawKeyName, keyName, returnObject = {}, keyID;

    if (subjectVariable.constructor === Array) {
      for (; i < ii; i += 1) {
        returnArray.push(UVCompressor.replaceCommonValues(subjectVariable[i]));
      }
      return returnArray;
    } else if (subjectVariable.constructor === Object) {
      for (rawKeyName in subjectVariable) {
        if (subjectVariable[rawKeyName] !== undefined &&
          subjectVariable[rawKeyName] !== null &&
          (typeof subjectVariable[rawKeyName] !== "string" ||
            subjectVariable[rawKeyName].trim().length > 0)) {
          keyName = rawKeyName.trim();
          keyID = indexOfArray(q.html.UVCommonValues.keys, keyName);
          keyName = (keyID === -1 || level === 0) ? keyName : keyID;
          returnObject[keyName] = UVCompressor
            .replaceCommonValues(subjectVariable[rawKeyName]);
        }
      }
      return returnObject;
    } else {
      if (typeof subjectVariable === "string") {
        subjectVariable = subjectVariable.trim();
      }
      return subjectVariable;
    }
  };

  UVCompressor.restoreCommonValues = function (subjectVariable) {
    var i = 0, ii = subjectVariable.length, returnArray = [],
      keyName, returnObject = {}, key;

    if (subjectVariable.constructor === Array) {
      for (; i < ii; i += 1) {
        returnArray.push(UVCompressor.restoreCommonValues(subjectVariable[i]));
      }
      return returnArray;
    } else if (subjectVariable.constructor === Object) {
      for (key in subjectVariable) {
        if (subjectVariable.hasOwnProperty(key)) {
          keyName = (isNaN(Number(key))) ? key : q.html.UVCommonValues.keys[Number(key)];
          returnObject[keyName] = UVCompressor
            .restoreCommonValues(subjectVariable[key]);
        }
      }
      return returnObject;
    } else {
      return subjectVariable;
    }

  };

  UVCompressor.compress = function (options) {
    // Level 0 - Remove empty string/ null variables
    // Level 1 - Replace keys with ids

    level = (options.compressionLevel === undefined) ? 1 : options.compressionLevel;
    uv = options.universalVariable;

    return JSON.stringify(UVCompressor.replaceCommonValues(uv));

  };

  UVCompressor.decompress = function (compressedObjectJSON) {
    var compressedObject = JSON.parse(compressedObjectJSON);
    return JSON.stringify(UVCompressor.restoreCommonValues(compressedObject));
  };

  q.html.UVCompressor = UVCompressor;

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
    
    var names = classPath.split(".");
    var className = names[names.length - 1];

    //create class
    //@TODO create eval fix and do proper wrap.
    var clazz = eval("(function " + className + "() {" +
      "  if (" + classPath + ".superclass) {" +
      "    " + classPath + ".superclass.apply(this, arguments)" +
      "  }" + 
      "  if (" + classPath + "._CONSTRUCTOR) {" +
      "    " + classPath + "._CONSTRUCTOR.apply(this, arguments);" +
      "  } else {" +
      "    " +
      "  }" +
      "})"
    );

//or anonymous:

//    var clazz = function () {
//      if (CONSTR) {
//         CONSTR.apply(this, arguments);
//      } else if (clazz.superclass) {
//        clazz.superclass.apply(this, arguments);
//      }
//    };

    var _CONSTRUCTOR = config.CONSTRUCTOR;
    
    clazz._CONSTRUCTOR = _CONSTRUCTOR;
    clazz.superclass = extendingClass;
    
    //publish class
    this.clazz(classPath, clazz, extendingClass);
    
    //pass prototype objects
    for (var prop in config) {
      if (config.hasOwnProperty(prop) && prop !== "_CONSTRUCTOR") {
        clazz.prototype[prop] = config[prop];
      }
    }
    return clazz;
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
   * @returns {Number} objects position in array,
   *  if doesnt exist it will return -1. It means that object was appended at 
   *  the end of array.
   * if exists it will return its popsition.
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
      i = -1;
    }
    return i;
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
  function Log(prefix, clazz) {
    this.getPrefix = function () {
      var clz = "";
      if (clazz) {
        if (typeof clazz === "function") {
          clz = clazz(this.ref);
        } else if (clazz.CLASS_NAME) {
          clz = clazz.CLASS_NAME;
        } else if (clazz.constructor && clazz.constructor.name) {
          clz = clazz.constructor.name;
        }
        if (clz) {
          clz += " -> ";
        }
      }
      return (prefix || "") + clz;
    };
  }

  /**
   * Static property used to define finest level.
   * @property {Number} [LEVEL_FINEST=4]
   */
  Log.LEVEL_FINEST = 4;
  /**
   * Static property used to define fine level.
   * @property {Number} [LEVEL_FINE=3]
   */
  Log.LEVEL_FINE = 3;
  /**
   * Static property used to define informative level.
   * @property {Number} [LEVEL_INFO=2]
   */
  Log.LEVEL_INFO = 2;
  /**
   * Static property used to define severe level.
   * @property {Number} [LEVEL_WARN=1]
   */
  Log.LEVEL_WARN = 1;
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
  Log.LEVEL = Log.LEVEL_FINE;/*D*///line deleted during merge
  
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
  Log.prototype.print = function (message, style, plain) {
    if (c && c.log) {
      if (style || !plain){
        c.log("%c" + message, style +";font-family: ;");
      } else {
        c.log(message);
      }
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
          this.print(message, false, true);
        } else {
          this.print("FINEST: " + this.getPrefix() + message, "color:#CCCCCC;");
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
          this.print(message, false, true);
        } else {
          this.print("FINE: " + this.getPrefix() + message, "color:#999999;");
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
    INFO = function (message, plain, style) {
      if (Log.LEVEL >= Log.LEVEL_INFO) {
        if (plain) {
          this.print(message, false, true);
        } else {
          this.print("INFO: " + this.getPrefix() + message, ";");
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
    WARN = function (message, plain) {
      if (Log.LEVEL >= Log.LEVEL_WARN) {
        if (plain) {
          this.print(message, false, true);
        } else {
          this.print("WARN: " + this.getPrefix() + message, "color:#26A110;");
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
          this.print(message, false, true);
        } else {
          this.print("ERROR: " + this.getPrefix() + message, "color:red;");
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
      log.INFO("Tag with ID: " + id + " already exists. Overriding entry.");
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
    log.FINE("getTag with id:" + id);
    return tags[id];
  };
  
  /**
   * Get all QTag instances.
   * 
   * @returns Array[QTag]
   */
  Tags.getAllTags = function () {
    log.FINE("getTags");
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
      log.FINE("getVariableValue():");
      log.FINE([tagId, scriptId, varId], true);
      var tag = tags[tagId];
      var config = tag.getConfig();
      var script = config.scriptLoaders[scriptId];
      var pv = config.pageVars[varId];

      if (Utils.variableExists(pv.pageValue)) {
        log.FINE("Returning profile scope value of page variable:");
        log.FINE(pv.pageValue, true);
        return pv.pageValue;
      }

      var defVal = String(script.pageVars[varId].defaultValue);
      //Utils.prepareQuotedString(script.pageVars[varId].defaultValue);
      log.FINE("Returning SCRIPT DEFAULT value of page variable:");
      log.FINE(defVal, true);
      return defVal; //can be undefined!
    } catch (e) {
      log.ERROR("Unexpected error while getting variable: " + e);
      log.ERROR([tagId, scriptId, varId], true);
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
(function () {
  
  var json = {};

  function checkIfInstanceOf(object, instances) {
    for (var i = 0; i < instances.length; i++) {
      if ((typeof(instances[i]) === "function") && /*ie case*/
            object instanceof instances[i]) {
        return true;
      }
    }
    return false;
  }
  json.checkIfInstanceOf = checkIfInstanceOf;
  
  function checkIfTypeOf(object, types) {
    for (var i = 0; i < types.length; i++) {
      if (typeof(object) === types[i]) {
        return true;
      }
    }
    return false;
  }

  function checkIfNameOf(string, names) {
    for (var i = 0; i < names.length; i++) {
      if (string === names[i]) {
        return true;
      }
    }
    return false;
  }

  function objectExistsInParentElements(object, parentElements) {
    if (object instanceof Object) {
      for (var i = 0; i < parentElements.length; i++) {
        if (parentElements[i] === object) {
          return true;
        }
      }
    }
    return false;
  }
  
  function removeFromArray(object, array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === object) {
        array.splice(i, 1);
      }
    }
    return array;
  }

  function jsonString(object) {
    return "\"" + object.replace(/\\/g, "\\\\").replace(/\"/g, "\\\"") + "\"";
  }

  var _serialize = function (object, config, parentElements, level, levelMax) {
    if (!isNaN(levelMax) && level >= levelMax) {
      return undefined;
    }
    var excludedInstances, excludedTypes, excludedNames, own,
            includeFunctions = false, excludeOnTrue, dateAsString = true,
            raw = false;
    
    if (config) {
      raw = config.raw; //json type as default
      excludedInstances = config.excludedInstances;
      excludedTypes = config.excludedTypes;
      excludedNames = config.excludedNames;
      own = config.hasOwn;
      includeFunctions = config.includeFunctions;
      excludeOnTrue = config.excludeOnTrue;
      dateAsString = config.dateAsString;
    }
    
    if (object instanceof Date) {
      return (!raw || dateAsString) ?
        jsonString(object.toISOString()) : object.valueOf();
    } else if (!includeFunctions && typeof object === "function") {
      return undefined;
    } else if (typeof object === "number") {
      return String(object);
    } else if (typeof object === "string") {
      return jsonString(object);
    } else if (object === null) {
      return "null";
    } else if (object === undefined) {
      return raw ? "undefined" : undefined;
    } else if (typeof prop === "boolean") {
      return String(object);
    }
    
    if (objectExistsInParentElements(object, parentElements)) {
      return undefined;//"\"[parent contained]\"";
    }
    
    parentElements.push(object);
    ++level;
    
    if (object instanceof Array) {
      var strings = [];
      for (var i = 0; i < object.length; i++) {
        if (excludeOnTrue) {
          try {
            if (excludeOnTrue(object)) {
              continue;
            }
          } catch (ex) {}
        }
        if (excludedInstances && checkIfInstanceOf(object, excludedInstances)) {
          continue;
        }
        if (excludedTypes && checkIfTypeOf(object, excludedTypes)) {
          continue;
        }
        var el = _serialize(object[i], config, parentElements, level, levelMax);
        if (el !== undefined) {
          strings.push(el);
        }
      }
      removeFromArray(object, parentElements);
      return  "[" + strings.join(",") + "]";
    }

    var parts = [];
    for (var key in object) {
      var prop = object[key];
      if (own && !object.hasOwnProperty(key)) {
        continue;
      }
      if (excludeOnTrue) {
        try {
          if (excludeOnTrue(object)) {
            continue;
          }
        } catch (ex) {}
      }
      if (excludedInstances && checkIfInstanceOf(prop, excludedInstances)) {
        continue;
      }
      if (excludedTypes && checkIfTypeOf(prop, excludedTypes)) {
        continue;
      }
      if (excludedNames && checkIfNameOf(key, excludedNames)) {
        continue;
      }
      var objEl = _serialize(prop, config, parentElements, level, levelMax);
      if (objEl !== undefined) {
        var elString = ("\"" + key.replace(/\"/g, "\\\"") + "\":") + objEl;
        parts.push(elString);
      }
    }
    removeFromArray(object, parentElements);
    return "{" + parts.join(",") + "}";
  };

  /**
   * Exclusive and luxury javascript serializer.
   * 
   * Config object assignment:
   * 
   * <pre>
   *   config.excludedInstances Instanceof will be called
   *      on  excludeInstancess functions array
   *   config.excludedTypes array of objects that typeof
   *    will be called in order to exclude properties on object
   *   config.excludedNames array of strings that will be check
   *    on object's properties
   *   config.hasOwn if hasOwnProperty should apply for objects 
   *        (default false)
   *   config.includeFunctions if 
   *      functions should be included (default false)
   *   config.excludeOnTrue function that will take
   *      current objects property and must return boolean, if returns true,
   *      object will be added to serialized string
   *   config.level if specified, ho maximally deep
   *    properties generation can go.
   *   config.dateAsString = treat dates as strings (default true)
   *   config.raw dont use "json" specific output and serialize real values
   *     (undefines, dates as numbers)
   * </pre>
   * 
   * @param {type} object
   * @param {Object} config
   * @returns {String}
   */
  json.serialize = function (object, config) {
    var parentElements = [];
    var level;
    if (config) {
      level = config.level;
    }
    return _serialize(object, config, parentElements, 0, level);
  };

  window.json = json;
}());


(function(){
  var Utils = qubit.qtag.Utils;
  var log = new qubit.qtag.Log("Tags -> ");
  
  var tags = [];
  var containers = [];
  
  /**
   * @singleton
   * @class qubit.qtag.Tags
   * Global tags repository. This singleton object contains and manages all tags
   * in available scope. Each tag instance will automatically register in this
   * object.
   * @return {qubit.qtag.Tags} qubit.qtag.Tags object
   */
  var Tags = {};
  
  /**
   * Method used to register a qubit.qtag.BaseTag
   * @param {type} tag
   * @returns {undefined}
   */
  Tags.registerTag = function (tag) {
    log.FINE("registering tag instance:");
    log.FINE(tag, true);
    if (Utils.addToArrayIfNotExist(tags, tag) !== -1) {
      log.INFO("tag already exists in Tags registry.");
    }
  };
  
  /**
   * Find tag by name
   * @param {String} match string, String.match() function will be used.
   * @returns {Array(qubit.qtag.BaseTag)}
   */
  Tags.findTagByName = function (match) {
    var results = [];
    for(var i = 0; i < tags.length; i++) {
      if (tags[i].config.name.match(match)) {
        results.push(tags[i]);
      }
    }
    return results;
  };
  
  /**
   * Get all QTag instances map.
   * 
   * @returns Object
   */
  Tags.getTags = function () {
    log.FINE("getTags");
    return tags;
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
   * Registering container function.
   * @param {type} container
   * @returns {undefined}
   */
  Tags.registerContainer = function (container) {
    Utils.addToArrayIfNotExist(containers, container);
  };
  
  /**
   * Containers getter.
   * @returns {Array(qubit.qtag.Container)}
   */
  Tags.getContainers = function () {
    return containers;
  };

  Utils.namespace("qubit.qtag.Tags", Tags);
  
  log.print(
        "*** Welcome to Qubit TagSDK ***",
        "font-size: 22px; color:#CCC;"+
        "text-shadow:#fff 0px 1px 0, #555 0 -1px 0;");
})();



/*
 * Opentag, a tag deployment platform
 * Copyright 2011-2013, Qubit Group
 * http://opentag.qubitproducts.com
 */

(function(){
  var Utils = qubit.qtag.Utils;
  var log = new qubit.qtag.Log("Container -> ");

  /**
   * Tags Container class
   * Tags are normally grouped into container objects which define some of
   * the rules that apply to tags during load times.
   * See config object for more details.
   * 
   * Author: Inz. Piotr (Peter) Fronc <peter.fronc@qubitdigital.com>
   * 
   * @class qubit.qtag.Container
   * @param {config} config
   * 
   */
  function Container (config) {
    this.config = {/*CFG*/
      /**
       * @cfg cookieDomain
       * A cookie domain used if you page uses subdomains.
       * Typically you will want to leave it empty or set it to
       * ".masterdomain.com" like.
       */
      cookieDomain: "",
      /**
       * @cfg maximumLength
       * Maximum cookie length to be used by this tag. Set it to lower value
       * if serving pages use very long cookies.
       */
      maximumLength: 3000,
      /**
       * @cfg gzip
       * True by default, indicates if tags should be zipped with gzip standard.
       */
      gzip: true,
      /**
      * @cfg delayDocWrite
      * Indicates if all document.write calls should be delayed till entire 
      * document is loaded. Default is false.
      */
      delayDocWrite: false,
      /**
       * @cfg clientId
       * A client ID associated with this container.
       * Its old qTagClientId value.
       */
      clientId: "",
      /**
       * @cfg name
       * Container name. (Old containerName)
       */
      name: "Opentag",
      /**
       * @cfg profileName
       * Profile name (same as old profileName).
       */
      profileName: "",
      /**
       * @cfg
       * Seems that this setting triggers propability of isTellingLoadTimes
       * being set to true. You can choose values from 0.0 to 1.0 (float).
       * Old tellLoadTimesProbability
       */
      tellLoadTimesProbability: 0,
      /**
       * @cfg pingServerUrl
       * Ping server url setting.
       * Old pingServerUrl.
       */
      pingServerUrl: null,
      /**
       * @cfg trackSession
       * Indicates if container should track session.
       * Old qtag_track_session.
       */
      trackSession: false,
      /**
       * @cfg containerDomain
       * Domain for cookies used. Pages may use subdomains, in such a case its
       * good to specify master domain for cookie writer. Example:
       * 
       * Website uses subdomains: sub1.page.com and sub2.page.com, for such a
       * dsubddomains, cookie domain must be configured and in this case it
       *  would be ".page.com"
       * Old qtag_domain. 
       */
      containerDomain: ""
    };/*~CFG*/

    if (config) {

      for (var prop in config) {
        this.config = config[prop];
      }

      /**
       * Property indicates if tag is telling load times. Tag's
       * implementation does attach timestamps for all their loading.
       * This property is used to indicate if loading times will be reported
       * by this container.
       * @property isTellingLoadTimes
       * @type Boolean
       */
      this.isTellingLoadTimes =
          this.config.tellLoadTimesProbability > Math.random();

      this.setConfig(config);
      
      qubit.qtag.Tags.registerContainer(this);
      
    }
    
    return this;
  }

  /**
   * Tags that are bound to this container.
   * @property {Map<qubit.qtag.BaseTag>}
   */
  Container.prototype.tags = {};
  Container.prototype.pageVariables = {};

  /**
   * Function registering tag instance.
   * Registered tag will have injected extra configuration.
   * Container registers tags BY NAME. This is quite more strict than
   * qubit.qtag.Tags
   * @param {qubit.qtag.BaseTag} tag
   * @returns {undefined}
   */
  Container.prototype.registerTag = function (tag) {
    var name = tag.config.name;
    if (this.tags[name]) {
      log.FINE("Tag with name `" + name + "` already is registered!");
    } else {
      this.tags[name] = tag;
    }
  };

  /**
   * Config setter for current instance.
   * Use this setter as config changes will affect registered tags.
   * It is important to use this function to set any configuration as it may 
   * affect tags registered and this method will remember to update
   * them accordingly.
   * @param {Object} config with values to be set.
   * @returns {undefined}
   */
  Container.prototype.setConfig = function (config) {
    log.FINEST("Setting configuration:");
    log.FINEST(config, true);
    for (var prop in config) {
      this.config = config[prop];
    }
  };
  
  /**
   * Container and tags loading entry point.
   * 
   * @param {Object} config
   * @returns {undefined}
   */
  Container.prototype.startLoading = function (config) {
    log.FINE("starting loading")
    this.runFilteredTags();
  };

  /**
   * Function that will find tag by using it's name and return it if found.
   * @param {String} name
   * @returns {qubit.qtag.BaseTag} tag with specified name,
   *  undefined otherwise.
   */
  Container.prototype.getTagByname = function (name) {
    return this.tags[name];
  };

  /**
   * Function updates current state of page variables.
   * @returns {undefined}
   */
  Container.prototype.updatePageVariables = function () {
    throw "implement!"
  };

  /**
   * Gets page variable by using variable name.
   * Page variables are bound to container. Typically, page variables
   * are available across web page context.
   * @param {String} name
   * @returns {undefined}
   */
  Container.prototype.getPageVariableValue = function (name) {
    return this.pageVariables[name].getValue();
  };
  
  /**
   * Function calling tags to start execution.
   * @returns {undefined}
   */
  Container.prototype.runFilteredTags = function () {
    /**
     * Timestamp indicating if and when tags running was executed.
     * @property runningStarted
     * @type Number
     */
    this.runningStarted = new Date().valueOf();
    log.FINE("running started at " + this.runningStarted);
    for (var name in this.tags) {
      try {
        log.FINE("running tag named: " + name);
        this.tags[name].runIfFiltersPass();
      } catch (ex) {
        log.ERROR("Error running tag with name `" +
                this.tags[name] +
                "`. Error: " + ex)
      }
    }
    this.waitForAllTagsToFinish();
  };

  /**
   * Function used to trigger timer that awaits the tags to finish their
   * running.
   * @returns {undefined}
   */
  Container.prototype.waitForAllTagsToFinish = function () {
    if (this.allTagsFinished()) {
      /**
       * Property telling if and when all tags has been detected to finish
       * thir running.
       * @property runningFinished
       * @type Number
       */
      this.runningFinished = new Date().valueOf();
      log.INFO("Tags have ended their processing.");
      log.INFO("Finished in " + (this.runningFinished - this.runningStarted) +
               "ms");
      var runScripts = [], failedScripts = [];
      for (var prop in this.tags) {
        if (this.tags[prop].scriptExecuted > 0) {
          runScripts.push(this.tags[prop]);
        } else {
          failedScripts.push(this.tags[prop]);
        }
      }
      log.INFO("sucessfully run tags:");
      log.INFO(runScripts, true);
      log.INFO("failed tags:");
      log.INFO(failedScripts, true);
    } else {
      qubit.qtag.Timed.setTimeout(this.waitForAllTagsToFinish.bind(this), 30);
    }
  };
  
  /**
   * 
   * @returns {undefined}
   */
  Container.prototype.allTagsFinished = function () {
    for(var prop in this.tags) {
      var tag = this.tags[prop];
      if (tag instanceof qubit.qtag.BaseTag) {
        if (tag.filtersPassed() && !tag.finished()) {
          return false;
        }
      }
    }
    return true;
  };

  Container.prototype.CLASS_NAME = "Container";
  Container.prototype.PACKAGE_NAME = "qubit.qtag";

  Utils.namespace("qubit.qtag.Container", Container);
})();



(function(){
    var Utils = qubit.qtag.Utils;
    var log = new qubit.qtag.Log("Timer -> ");
    
    /**
     * Timer implementation. It is intended to replace (wrap) the setTimeout
     * method so overuse can be controlled. It shall support rate setup and 
     * runtime adjustment (slowing down etc.).
     * 
     * Author: Inz. Piotr (Peter) Fronc <peter.fronc@qubitdigital.com>
     * 
     * @class qubit.qtag.Timer
     * @param {Object} config
     * @returns {qubit.qtag.Timer}
     */
    function Timer (config) {
      if (config) {
        log.FINEST("Config:");
        log.FINEST(config, true);
       /**
        * @private
        * Please use setRate to update timers rate
        * @type Number
        */
        this._rate = config.rate || 30;
        if (config.start) {
          this.startPooling();
        }
      }
    }
    
    Timer.superclass = null;
    Timer.prototype = {};
    Timer.prototype.CLASS_NAME = "Timer";
    Timer.prototype.PACKAGE_NAME = "qubit.qtag";
    
    /**
     * @property
     * Array of pairs `{Date, Function}`
     * `Date` stands for timed out date.
     * `Function` is afunction refernece to call.
     */
    Timer.prototype.timers = [];
    
    /**
     * Function starts pooling.
     * @returns {undefined}
     */
    Timer.prototype.startPooling = function () {
      if (!this.started) {
        this.started = true;
        this._pool();
      }
    };
    
    /**
     * @private
     * @returns {undefined}
     */
    Timer.prototype._pool = function () {
      log.FINEST("Pooling in progress...");
      this.callTimers();
      if (this.timers.length !== 0) {
        setTimeout(this._pool.bind(this), this._rate);
      } else {
        this.started = false;
      }
    };
    
    /**
     * Worker clearing outdated timers. Used internally.
     * May be also called to instantly validate timers.
     * @returns {undefined}
     */
    Timer.prototype.callTimers = function () {
      for (var i = 0; i < this.timers.length; i++) {
        var timer = this.timers[i];
        var stamp = new Date().valueOf();
        if (stamp >= timer.time) {
          log.FINEST("Executing timer with ID: " + timer.id);
          log.FINEST(timer, true);
          timer.execute();
          this.timers.splice(i,1);
          --i;
        }
      }
    };
    
    /**
     * Function setting maximum interval time for this instance clock.
     * All setTiemout and setInterval will be no more often run than rate value.
     * @param {Number} time ms
     * @returns {undefined}
     */
    Timer.prototype.setRate = function (time) {
      this._rate = time;
    }
    
    var ids = 1;
    /**
     * Set timeout method.
     * Run `call' function after minimum of `time` in miliseconds.
     * @param {Function} call Function callback.
     * @param {Number} time Tiemout value in miliseconds.
     * @returns {unresolved}
     */
    Timer.prototype.setTimeout = function (call, time) {
      var timer = {
        id: ids++,
        time: new Date().valueOf() + +time,
        execute: call
      };
      this.timers.push(timer);
      this.startPooling();
      return timer;
    };
    
    /**
     * Set interval method.
     * Run `call' function every minimum of `time` in miliseconds.
     * @param {Function} call Function callback.
     * @param {Number} time Interval value in miliseconds.
     * @returns {unresolved}
     */
    Timer.prototype.setInterval = function (call, time) {
      log.FINEST("Native wrapper");
      return setInterval(call, time);
    };

    Utils.namespace("qubit.qtag.Timer", Timer); //singleton!
})();




(function(){
    var Utils = qubit.qtag.Utils;
    
    /**
     * Singleton instance of qubit.qtag.Timer class with default rate of 20ms.
     * 
     * Author: Inz. Piotr (Peter) Fronc <peter.fronc@qubitdigital.com>
     * @class qubit.qtag.Timed
     * @singleton
     * @static
     * @extends qubit.qtag.Timer
     */
    function Timed(){}
    
    Utils.namespace("qubit.qtag.Timed", new qubit.qtag.Timer({
      rate: 50
    }));
})();



(function(){
    var Utils = qubit.qtag.Utils;
    var log = new qubit.qtag.Log("TagsUtils -> ");
    
    /**
     * Singleton object used as static utility class.
     * @singleton
     * @class qubit.qtag.TagsUtils
     */
    var TagsUtils = {};
    
    TagsUtils.loadScript = function (config) {
      
      var loadingCheck = function (url, loadError, loadFailed) {
        if (loadFailed) {
          log.ERROR("Loading process error:");
          log.ERROR(loadError, true);
          config.onerror();
        } else {
          config.onsuccess();
        }
      };
      
      return q.html.fileLoader.load(
        config.url,
        false,//this.getTimerStarter(qTagLoader),
        loadingCheck,//this.getTimerEnder(qTagLoader),
        config.node,//qTagLoader.parentNode,
        config.async//qTagLoader.async
      );
    };
    
    TagsUtils.CLASS_NAME = "TagsUtils";
    TagsUtils.PACKAGE_NAME = "qubit.qtag";
    
    Utils.namespace("qubit.qtag.TagsUtils", TagsUtils);
})();





/*
 * Opentag, a tag deployment platform
 * Copyright 2011-2013, Qubit Group
 * http://opentag.qubitproducts.com
 */

(function () {
  var Utils = qubit.qtag.Utils;
  var Tags = qubit.qtag.Tags;
  var TagsUtils = qubit.qtag.TagsUtils;
  var Timed = qubit.qtag.Timed;
  var log = new qubit.qtag.Log("BaseTag -> ");

  /**
   * @class qubit.qtag.BaseTag
   * 
   * Father class of any tag, it has properties and API shared by all tags.
   * To check if object is a tag its instance must be compared to this class
   * prototype.
   * 
   * Author: Inz. Piotr (Peter) Fronc <peter.fronc@qubitdigital.com>
   * 
   * @param {Object} config Please see properties for configuration options.
   *  Each property can be set at initialization time via config object.
   */
  function BaseTag(config) {
    
    //makes top class dependant.
    this.log = new qubit.qtag.Log("", function () {
      return this.CLASS_NAME + "[" + this.config.name + "]";
    }.bind(this));
    
    this.config = {
      /**
       * Name of the tag. Note that Tag's name must be unique in container.
       * Default value will be always set if not passed in:
       * "Tag-" + new Date().valueOf()
       * Always remember to use name for your Tags.
       * @cfg name
       * @type {String}
       */
      name: "Tag-" + new Date().valueOf(),
      /**
       * Should this tag be asynchronous?
       * @cfg async
       * @type Boolean
       */
      async: false,
      /**
       * Is this tag active?
       * @cfg inactive
       * @type Boolean
       */
      inactive: false,
      /**
       * Is this tag dedupe?
       * @cfg dedupe
       * @type Boolean
       */
      dedupe: false,
      /**
       * Is this script nominated as a using document.write method?
       * @cfg usingWrite
       * @type Boolean
       */
      usingWrite: false,
      /**
       * Does this tag has defined custom timeout value defined?
       * @cfg timeout
       * @type Number
       */
      timeout: this.DEFAULT_VARIABLE_TIMEOUT,
      /**
       * Package property indicates where this tag will reside
       * (in what namespace). 
       * @cfg dependencies
       * @type Array array of qubit.qtag.BaseTag or String naming the scripts in
       * container instance (logical names used).
       */
      dependencies: [],
      /**
       * Page variables mapping object, it should contain `String to String`
       * or `String to Number` mappings only.
       * @cfg 
       */
      pageVariables: {},
      /**
       * Package property indicates where this tag will reside
       * (in what namespace). 
       * @cfg package
       * @type Object 
       */
      package: undefined,
      /**
       * If true, the tag can be instantiated only once.
       * @cfg singleton
       * @type Boolean
       */
      singleton: false
    };
    
    /**
     * Local filters of this tag.
     * Use getFilters for fetching all filters applying to this tag.
     * @private filters
     * @property Array[qubit.qtag.]
     */
    this._filters = [];
    
    if (config) {
      for (var prop in config) {
        this.config[prop] = config[prop];
      }
      
      //if container is passed - register itself.
      if (config.container) {
        try {
          config.container.registerTag(this);
        } catch (ex) {
          this.log.ERROR("Error while registering tag in container!");
          this.log.ERROR(ex, true);
          throw ex;
        }
      }
      
      try {
        Tags.registerTag(this);
      } catch (ex) {
        // RETHINK THIS, it looks usefull but...
      }
    }
  }
  
  /**
   *  Default timeout for page variables
   * that this tag instance depends on.
   * @property {Number} DEFAULT_VARIABLE_TIMEOUT
   */
  BaseTag.prototype.DEFAULT_VARIABLE_TIMEOUT = 5000;
  
  /**
   *  Default timeout for script to load.
   * @property {Number} DEFAULT_LOADING_TIMEOUT
   */
  BaseTag.prototype.DEFAULT_LOADING_TIMEOUT = 5 * 60 * 1000;
  
  /**
   * Private method delegating script execution. It calls `this.
   * @private
   * @returns {undefined}
   */
  BaseTag.prototype._executeScript = function () {
    this.log.INFO("executing main script...");
    try {
      this.script();
      this.log.INFO("executed without errors.")
    } catch (ex) {
      this.log.INFO("error while executing: " + ex);
      this.log.ERROR("There was and error while executing instance of tag: "
              + this.CLASS_NAME + " from package: " + this.PACKAGE_NAME);
      this.log.ERROR(ex, true);
      throw ex;
    } finally {
      this.after();
    }
  };
  
  BaseTag.prototype.log = function () {};
  
  /**
   * It gets ALL filters related to this tag in theirs order of load.
   * @returns {Array}
   */
  BaseTag.prototype.getFilters = function () {
    return [];
  };
  
  /**
   * Function will return true and only true when tag has started and finished
   * its duty (it does not indicate if job was sucessful and main script was
   * executed see `this.scriptExecuted` property).
   * @return {Boolean} 
   */
  BaseTag.prototype.finished = function () {
    return !!this.runIsFinished;
  };
  
  /**
   * Executing function as a tag exit point. If all parameters exist and all
   * fileters are passed this function will be called in order to execute
   * the tag. See also see `before` and `after` functions
   * @returns {undefined}
   */
  BaseTag.prototype.script = function () {
    this.log.WARN("Tag has empty script().");
  };
  
  /**
   * Callback triggered always before loading tag.
   * Can be called only once, any repeated calls will have no effect.
   * @returns {undefined}
   */
  BaseTag.prototype.before = function () {
    if (this.beforeRun) {
      return;
    }
    this.beforeRun = true;
  };
  
  /**
   * Callback triggered always after loading - if succesful.
   * Can be called only once, any repeated calls will have no effect.
   * @returns {undefined}
   */
  BaseTag.prototype.after = function () {
    if (this.afterRun) {
      return;
    }
    this.afterRun = true;
  };
  
  /**
   * Function used to run a tag. It is a wrapper around run function, before
   * running the tag, it does check on filters with `filtersPassed`.
   * Note that run triggers entire process for loading dependencies and the
   * tag if url based.
   * @returns {undefined}
   */
  BaseTag.prototype.runIfFiltersPass = function () {
    if (this.filtersPassed()) {
      this.setStatus(BaseTag.STATUS.STARTED);
      this.run();
    } else {
      this.setStatus(BaseTag.STATUS.FILTERS_FAILED);
    }
  };
  
  /**
   * Starting point for loading tag. Tags can often contain resources that have
   * to be fetched and this function initialises such processes where it is 
   * necessary. This function can be called only once, after that, each call
   * will be ignored.
   * If there is no dependencies to load, script will be invoked immediately.
   * @returns {undefined}
   */
  BaseTag.prototype.run = function () {
    /**
     * Indicates ONLY if run method has finished it's job.
     * It DOES NOT indicate if run job was not started.
     * @property 
     */
    this.runIsFinished = true;
    try {
      //once only run, no protection needed
      this.before();
    } catch (ex) {
      this.log.ERROR(ex, true);
      throw ex;//? we throw?
    }
    
    //once only run, no protection needed
    this.load();
    
    if (this.loadedDependencies) {
      this.log.INFO("tag is loaded, starting execution");
      if (!this._urlLoadTriggered && this.config.url) {
        this._urlLoadTriggered = true;
        this.log.INFO("tag has url option set to: " +
                 this.config.url);//L
        this.log.INFO("loading the url and delaying execution till url is loaded");
        this.loadURL();
      }
      
      if (!this.loadURLNotFinished) {
        this.log.INFO("tag is ready to execute main script...")
        if (this.scriptLoadingFailed) {
          this.log.ERROR("script URL dependency FAILED to load execution");
          this.scriptExecuted = -(new Date().valueOf());
          this.setStatus(BaseTag.STATUS.FAILED_TO_EXECUTE);
        } else {
          this.scriptExecuted = new Date().valueOf();
          this.setStatus(BaseTag.STATUS.EXECUTED);
          this._executeScript();
        }
      } else {
        this.runIsFinished = false;
      } 
    } else if (!this.loadingDependenciesFailed) {
      this.runIsFinished = false;
    }
    
    if (!this.runIsFinished) {
      Timed.setTimeout(this.run.bind(this), 80);
    } else {
      this.log.WARN("* POOLING DONE CHECK * POOLING DONE CHECK * POOLING DONE CHECK *");
    }
  };
  
  /**
   * Status properties used as a tag LED interface. Do not use it for internal
   * checks. This is quite usefull metric ordered status indicator.
   * 
   * consider this example:
   * 
   * 
   *    this.status > BaseTag.STATUS.FAILED_TO_LOAD_DEPENDENCIES
   *    
   * It translates to script being fully loaded with dependenciess and passed 
   * filters, but unfortune to have url script loading problems or final script 
   * execution itself.
   * 
   * This is very useful when creating automated debugging tools.
   * 
   * @class qubit.qtag.BaseTag.STATUS
   */
  BaseTag.STATUS = {
    INITIAL: 0,
    FILTERS_FAILED: 1,
    STARTED: 2,
    LOADING_DEPENDENCIES: 4,
    LOADED_DEPENDENCIES: 8,
    LOADING_URL: 16,
    LOADED_URL: 32,
    EXECUTED: 64,
    FAILED_TO_LOAD_DEPENDENCIES: 128,
    FAILED_TO_LOAD_URL: 256,
    FAILED_TO_EXECUTE: 512
  };
  
  BaseTag.prototype.setStatus = function (status) {
    this.status = (this.status | status);
  };
  
  
  /**
   * Property representing binary table with this tag's status
   * @property {BaseTag.STATUS} status
   */
  BaseTag.prototype.status = BaseTag.STATUS.INITIAL;
  
  /**
   * This is anonymous function that is good to be known if more
   * knowledge on how tag are loaded is necessary.
   * This function is directly used by `this.load()`
   * It is not avaialble on object's instance.
   * @private
   */
  function waitForDependencies() {
    /**
     * It indicates ONLY if waitForDependencies has finished it's job - NOT
     * if started.
     * @property
     * @type Boolean
     */
    this.waitForDependenciesFinished = true;
    if (this.dependenciesLoaded()) {
      /**
       * @property {Number} loaded Property telling if and when all loading
       * has been finished.
       */
      this.loadedDependencies = new Date().valueOf();
      this.onLoadSuccess();
    } else {
      if (this.loadingIsTimedOut()) {
        this.log.ERROR("timed out while loading dependencies for tag: ");
        this.loadingDependenciesFailed = new Date().valueOf();
        this.onLoadError();
      } else {
        //wait for dependencies, no matter what.
        //@TODO let it be done by a nicer tool... single timeout processor
        this.waitForDependenciesFinished = false;
        Timed.setTimeout(waitForDependencies.bind(this), 75);
      }
    }
    if (!this.waitForDependenciesFinished) {
      this.log.INFO("Waiting for dependencies has been finished.");//L
    }
  };
  
  /**
   * Checker indicating if all dependencies are satisfied.
   * @returns {undefined}
   */
  BaseTag.prototype.dependenciesLoaded = function () {
    return true;
  };
  
  /**
   * Method indicating if loading is timed out.
   * @returns {Boolean}
   */
  BaseTag.prototype.loadingIsTimedOut = function () {
    return (new Date().valueOf() - this.loadStarted) > 
            this.config.timeout;
  };
  
  /**
   * Function used as a worker for processing tag's dependencies and
   * loading them. It is a looping trigger to call "load" on dependencies.
   * @returns {undefined}
   */
  BaseTag.prototype.loadDependencies = function () {
    var deps = this.getDependencies();
    for (var i = 0; i < deps.length; i++) {
      deps[i].load();
    }
  };
  
  /**
   * @event
   * If there is any loading error, Tag SDK will call this function with the
   * error as a parameter. Override wherever necessary.
   * @param {String} error Error string.
   * @returns {undefined}
   */
  BaseTag.prototype.onLoadError = function (error) {
    //empty
  };
  
  /**
   * @event
   * Run when the tag script is loaded (not dependencies.)
   * @returns {undefined}
   */
  BaseTag.prototype.onScriptLoadSuccess = function () {
    
  };
  
  /**
   * 
   * @returns {undefined}
   */
  BaseTag.prototype.onScriptLoadError = function (error) {
    
  };
  
  /**
   * @event
   * Triggered when tag is fully loaded, together with dependencies.
   * @returns {undefined}
   */
  BaseTag.prototype.onLoadSuccess = function () {
  };
  
  /**
   * Dependencies getter function. Normally dependencies are expected to be a
   * list of script names in current container or instances references.
   * 
   * @returns {undefined}
   */
  BaseTag.prototype.getDependencies = function () {
    throw "implement getting dependencies!";
  };
  
  /**
   * Function used to load this tag itself and its dependencies.
   * Can be run only once. `load` function is an entry point for any process 
   * leading to run/execute the tag.
   * @returns {undefined}
   */
  BaseTag.prototype.load = function () {
    
    if (this.loadStarted) {
      return;
    }
    
    this.setStatus(BaseTag.STATUS.LOADING_DEPENDENCIES);
    
    this.log.INFO("Load started.");
    
    try {
      /**
       * @property {Number} loadStarted Timestamp telling when loading process has
       * started.
       */
      this.loadStarted = new Date().valueOf();
      this.loadDependencies();
    } catch (ex) {
      this.log.ERROR("load(): unexpected exception occured: " + ex);
    }
    
    waitForDependencies.call(this);
  };
  
  /**
   * Script URL loader. A private method,
   * created for BaseTag to load script.
   * @param {Function} optional callback
   * @param {String} url, overriding URL to use
   * @returns {undefined}
   */
  BaseTag.prototype.loadURL = function (callback, url) {
    var passedUrl = url || this.config.url;
    this.loadURLNotFinished = true;
    this.setStatus(BaseTag.STATUS.LOADING_URL);
    try {
      TagsUtils.loadScript({
        onsuccess: function () {
          this.log.INFO("succesfully loaded " + passedUrl);
          this.setStatus(BaseTag.STATUS.LOADED_URL);
          this.loadURLNotFinished = false;
          this.urlLoaded = new Date().valueOf();
          try {
            if (callback) {
              callback(true);
            }
          } finally {
            this.onScriptLoadSuccess();
          }
        }.bind(this),
        onerror: function () {
          this.log.ERROR("error loading " + passedUrl);
          this.setStatus(BaseTag.STATUS.FAILED_TO_LOAD_URL);
          this.loadURLNotFinished = false;
          this.urlLoaded = -new Date().valueOf();
          try{
            this.scriptLoadingFailed = true;
            if (callback) {
              callback(false);
            }
          } finally {
            this.onScriptLoadError();
          }
        }.bind(this),
        url: passedUrl,
        node: this.config.urlLocation || document.body,
        async: this.config.async
      });
    } catch (ex) {
      this.loadURLNotFinished = false;
    }
  };
  
  /**
   * Entry method used to check if all filters used by this tag are passed.
   * BaseTag searches for filters in this.config.**package**.filters location.
   * The location should indicate all filters used by this tag.
   * The **package* config property is a crucial tags property used to
   * configure antiore tags.
   * @returns {undefined}
   */
  BaseTag.prototype.filtersPassed = function () {
    //get filters!
    
    //order them
    //loop and execute - MATCH
    // if all passed return TRUE
    return true;
  };
  
  /**
   * Adding filter function.
   * @param {qubit.qtag.filter.BaseFilter}
   * @returns {undefined}
   */
  BaseTag.prototype.addFilter = function (filter) {
    throw "add filters!"
  };
  
  /**
   * Function getting script parameter value by token name.
   * 
   * [See parameters guide for more details](#!/guide/defining_parameter)
   * 
   * @param {String} name Token name used to search for value.
   * @returns {undefined}
   */
  BaseTag.prototype.getParameterByTokenName = function (name) {
    throw "add implementation!"
  };
  
  /**
   * Removing filter function.
   * @param {qubit.qtag.filter.BaseFilter}
   * @returns {undefined}
   */
  BaseTag.prototype.removeFilter = function (filter) {
    throw "add filters!"
  };
  
  Utils.namespace("qubit.qtag.BaseTag", BaseTag);
}());



(function () {
  var Utils = qubit.qtag.Utils;
  var log = new qubit.qtag.Log("LibraryTag -> ");
  
  /**
   * ## Library tag instance class.
   * This class is ment to be extended and used as a Tag Library base 
   * class.
   * 
   * Please see [Start Guide](#!/guide/getting_started)
   * and [Creating Library (Advanced)](#!/guide/creating_library)
   *
   * Please see 
   * 
   * Author: Inz. Piotr (Peter) Fronc <peter.fronc@qubitdigital.com>
   * 
   * @class qubit.qtag.LibraryTag
   * @extends qubit.qtag.BaseTag
   * @param {Object} config
   */
  function LibraryTag(config) {
    LibraryTag.superclass.apply(this, arguments);
  }
  
  LibraryTag.superclass = qubit.qtag.BaseTag;
  LibraryTag.prototype = new LibraryTag.superclass();
  LibraryTag.prototype.CLASS_NAME = "LibraryTag";
  LibraryTag.prototype.PACKAGE_NAME = "qubit.qtag";
  
  /**
   * @property {Object}
   */
  LibraryTag.prototype.config = {
    /*DATA*/
    /**
     * Optional, vendor's name.
     * @cfg {String} [vendor=null]
     */
    vendor: null,
    /**
     * Optional, image URL for library tag logo icon.
     * Image should be an 64x64 pixel sized.
     * @cfg {String} [imageUrl=null]
     */
    imageUrl: null,
    /**
     * Library description..
     * @cfg {String} [description="Provide description."]
     */
    description: "Provide description.",
    /**
     * Is library asynchoronous?
     * @cfg {String} [async=true]
     */
    async: true,
    /**
     * Is this a private library? Not published.
     * @cfg {Boolean} [isPrivate=false]
     */
    isPrivate: false,
    /**
     * HTML content to be appended to the page body
     * @cfg {String} [vendor=null]
     */
    html: "",
    /**
     * Optional, vendor's name.
     * @cfg {String} [vendor=null]
     */
    parameters: [
    ]
  };
  
  /**
   * @event 
   */
  LibraryTag.prototype.pre = function () {
    
  };
  
  /**
   * 
   * @event
   */
  LibraryTag.prototype.post = function () {
    
  };
  
  /**
   * Callback triggered always before loading tag.
   * Can be called only once, any repeated calls will have no effect.
   * @returns {undefined}
   */
  LibraryTag.prototype.before = function () {
    if (this.beforeRun) {
      return;
    }
    this.beforeRun = true;
    log.INFO("Running PRE script execution...");
    try {
      this.pre();
    } catch (ex) {
      log.ERROR(this.config.name + "exception while running pre: " + ex);
    }
  };
  
  /**
   * Callback triggered always before loading tag.
   * Can be called only once, any repeated calls will have no effect.
   * @returns {undefined}
   */
  LibraryTag.prototype.after = function () {
    if (this.afterRun) {
      return;
    }
    this.afterRun = true;
    log.INFO("Running POST script execution...");
    try {
      this.post();
    } catch (ex) {
      log.ERROR(this.config.name + "exception while running pre: " + ex);
    }
  };
  
  
  /**
   * Utils.defineClass wrapper for LibraryTag.
   * It has same effect as:
   * 
   * 
   *    qubit.qtag.Utils.defineClass(config, namespace, qubit.qtag.LibraryTag);
   * @static
   * @param {String} namespace full class name (with package) 
   * @param {String} config prototype config
   * @return {Function} reference to extended class
   */
  LibraryTag.define = function (namespace, config) {
    //config must be set in runtime - for each instance
    var clazzConfig = config.config;
    var constr = config.CONSTRUCTOR;
    config.config = undefined;
    config.CONSTRUCTOR = function () {
      for(var prop in clazzConfig) {
        this.config[prop] = clazzConfig[prop];
        if (constr) {
          constr.apply(this, arguments);
        }
      }
    };
    var ret = qubit.qtag.Utils.defineClass(config, namespace, LibraryTag);
    //register them also in qubit scope.
    Utils.namespace("qubit.qtag.libraries." + namespace, ret);
    return ret;
  };
  
  Utils.namespace("qubit.qtag.LibraryTag", LibraryTag);
}());


(function(){
  var Utils = qubit.qtag.Utils;
  var log = new qubit.qtag.Log("ConsentCookie: ");

  /**
   * ConsentCookie class
   * It is responsible for rendering and processing any cookie consent on
   * a page.
   * 
   * Author: Inz. Piotr (Peter) Fronc <peter.fronc@qubitdigital.com>
   * 
   * @class qubit.qtag.consent.ConsentCookie
   */
  function ConsentCookie (config) {
    this.config = {
      /**
       * @cfg {ConsentCookie.MODES} [mode=ConsentCookie.MODES.notification]
       * Cookie consent mode.
       */
      mode: ConsentCookie.MODES.notification,
      /**
       * @cfg {Number} [askAgain=2 * 60 * 1000]
       * Ask again time setting.
       */
      askAgain: 2 * 60 * 1000,
      /**
       * @cfg {Number} [sampleRate=100]
       * Sample rate percentage.
       */
      sampleRate: 100,
      /**
       * @cfg {String} 
       * [cookieAndPrivacyPolicyText="privacy and cookies policy"]
       * Cookie and privacy polict text.
       */
      cookieAndPrivacyPolicyText: "privacy and cookies policy",
      /**
       * @cfg {String} 
       * [cookieAndPrivacyPolicyLink="http://www.yoursite.com/privacy"]
       * Cookieand privacy policy link.
       */
      cookieAndPrivacyPolicyLink: "http://www.yoursite.com/privacy",
      /**
       * @cfg {Boolean} 
       * [hideStatusOnConsentGiven=true]
       * Should it hide status on consent given.
       */
      hideStatusOnConsentGiven: true
    };

    if (config) {
      for(var prop in config) {
        this.config[prop] = config[prop];
      }
    }
  }

  ConsentCookie.prototype.CLASS_NAME = "ConsentCookie";
  ConsentCookie.prototype.PACKAGE_NAME = "qubit.qtag.consent";

  /**
   * Modes.
   * @class qubit.qtag.consent.ConsentCookie.MODES
   * @static
   * @singleton
   * Code:
   
      ConsentCookie.MODES = {
        notification: "Notification Only",
        implicit: "Implicit consent",
        explicit: "Explicit Consent"
      }
   */
  ConsentCookie.MODES = {
    notification: "Notification Only",
    implicit: "Implicit consent",
    explicit: "Explicit Consent"
  };

  /**
   * Notification widget HTML & CSS fragments
   * @class qubit.qtag.consent.ConsentCookie.NOTIFICATION_WIDGET
   * @static
   * @singleton
   */
  ConsentCookie.NOTIFICATION_WIDGET = {
    /**
     * @property {String} HTML
     */
    HTML:
      "<div class=\"content\">\n" +
      "  <h1>Privacy and Cookies</h1>\n" +
      "  <p>\n" +
      "    For this website to run at its best, we ask the browser\n" +
      "    (like Google Chrome and Internet Explorer) for a little \n" +
      "    personal information. Nothing drastic, just enough to \n" +
      "    remember your preferences, login ID, and what you like to \n" +
      "    look at (on our site). Having this information to hand  \n" +
      "    helps us understand your needs and improve our\n" +
      "    service to you. \n" +
      "  </p>\n" +
      "  <p>\n" +
      "  If you would like to learn more about the information we \n" +
      "  store, how it is used or how to disable Cookies please read our\n" +
      "    <a href=\"{{cookieAndprivacyPolicyUrl}}\" \n" +
      "      target = \"_blank\"\n" +
      "      id=\"{{cookieAndPrivacyAndPolicyId}}\">\n" +
      "      {{cookieAndprivacyPolicyText}}\n" +
      "    </a>.\n" +
      "  </p>\n" +
      "</div>",
    /**
     * @property {String} IFRAME_CSS
     */
    IFRAME_CSS:
      "top: 0;\n" +
      "left: 0;\n" +
      "height: 185px;\n" +
      "width: 100%;\n" +
      "box-shadow: 0 0 20px 0px #888;\n" +
      "z-index: 2147483647;",
    /**
     * @property {String} CONTENT_CSS
     */
    CONTENT_CSS:
      "body {\n" +
      "  padding-top: 8px;\n" +
      "  text-align: center;\n" +
      "  background: url(https://d3c3cq33003psk.cloudfront.net/consent/img/cbg_w.png) repeat;\n" +
      "  font-size: 12px;\n" +
      "  line-height: 17px;\n" +
      "  font-family: arial, helvetica;\n" +
      "  color: #555;\n" +
      "  text-shadow: 0px 0px 1px #CCC;\n" +
      "}\n" +
      ".content {\n" +
      "  text-align: left;\n" +
      "  width: 800px;\n" +
      "  margin: 0 auto;\n" +
      "  padding-top: 5px;\n" +
      "}\n" +
      "body p {\n" +
      "  margin: 5px 0px;\n" +
      "}\n" +
      "a {\n" +
      "  color: #2e9dc5;\n" +
      "}\n" +
      "h1 {\n" +
      "  font-size: 1.4em;\n" +
      "}\n" +
      ".action-footer {\n" +
      "  margin-top: 0px;\n" +
      "}\n" +
      ".action-footer .button {\n" +
      "  padding: 5px 8px;\n" +
      "  line-height: 16px;\n" +
      "  cursor: pointer;\n" +
      "}\n" +
      "#{{closeButtonId}} {\n" +
      "  vertical-align: middle\n" +
      "  color: #939598;\n" +
      "  padding: 5px 10px 5px 10px;\n" +
      "  font-size: 13px;\n" +
      "  text-decoration: none;\n" +
      "  margin-top: 0px;\n" +
      "  float: right;\n" +
      "  cursor: pointer;\n" +
      "  border: 1px solid #EEE;\n" +
      "  background: #EEE;\n" +
      "  border-radius: 5px;\n" +
      "}\n" +
      ".action-footer #{{acceptButtonId}} {\n" +
      "  -moz-box-shadow:inset 0px 1px 0px 0px #bbdaf7;\n" +
      "  -webkit-box-shadow:inset 0px 1px 0px 0px #bbdaf7;\n" +
      "  box-shadow:inset 0px 1px 0px 0px #bbdaf7;\n" +
      "  background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #35b7de), color-stop(1, #0189a1) );\n" +
      "  background:-moz-linear-gradient( center top, #35b7de 5%, #0189a1 100% );\n" +
      "  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#35b7de\", endColorstr=\"#0189a1\");\n" +
      "  background-color:#35b7de;\n" +
      "  -moz-border-radius:4px;\n" +
      "  -webkit-border-radius:4px;\n" +
      "  border-radius:4px;\n" +
      "  border:1px solid #0189a1;\n" +
      "  display:inline-block;\n" +
      "  color:#fff;\n" +
      "  font-weight:normal;\n" +
      "  text-decoration:none;\n" +
      "  vertical-align: middle;\n" +
      "  float:right;\n" +
      "}\n" +
      ".action-footer #{{acceptButtonId}}:hover {\n" +
      "  background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #0189a1), color-stop(1, #35b7de) );\n" +
      "  background:-moz-linear-gradient( center top, #0189a1 5%, #35b7de 100% );\n" +
      "  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#0189a1\", endColorstr=\"#35b7de\");\n" +
      "  background-color:#0189a1;\n" +
      "}\n" +
      ".action-footer #{{acceptButtonId}}:active {\n" +
      "  position:relative;\n" +
      "  top: 1px;\n" +
      "}\n" +
      ".action-footer #{{declineButtonId}} {\n" +
      "  color: #555;\n" +
      "  float:right;\n" +
      "  margin-right: 15px;\n" +
      "}",
    /**
     * @property {String} ACCEPT_BUTTON
     */
    ACCEPT_BUTTON: "Enable Cookies",
    /**
     * @property {String} DECLINE_BUTTON
     */
    DECLINE_BUTTON: "No, Thank You"
  };

  /**
   * Status widget HTML & CSS fragments
   * @class qubit.qtag.consent.ConsentCookie.STATUS_WIDGET
   * @static
   * @singleton
   */
  ConsentCookie.STATUS_WIDGET = {
    /**
     * @property {String} HTML
     */
    HTML:
      "<div class=\"content\">\n" +
      "  <div class=\"icon\"></div>\n" +
      "  <div id=\"{{cookieStatusId}}\"></div>\n" +
      "</div>",
    /**
     * @property {String} IFRAME_CSS
     */
    IFRAME_CSS:
      "bottom: 0;\n" +
      "left: 0;\n" +
      "height: 20px;\n" +
      "width: 100%;\n" +
      "z-index: 2147483647;",
    /**
     * @property {String} CONTENT_CSS
     */
    CONTENT_CSS:
      "body {\n" +
      "  background: transparent;\n" +
      "  margin: 0;\n" +
      "  padding: 0;\n" +
      "  font-family: arial, helvetica;\n" +
      "  text-align: center;\n" +
      "  vertical-align: middle;\n" +
      "  font-size: 12px;\n" +
      "  line-height: 18px;\n" +
      "}\n" +
      ".content {\n" +
      "  width: 800px;\n" +
      "  margin: 0 auto;\n" +
      "  text-align: left;\n" +
      "}\n" +
      "html>body #{{cookieStatusId}} {\n" +
      "  width: auto;\n" +
      "}\n" +
      "#{{cookieStatusId}} {\n" +
      "  padding: 1px 10px 0px 22px;\n" +
      "  width: 11.5em;\n" +
      "  cursor: pointer; !important\n" +
      "}\n" +
      ".icon {\n" +
      "  background-image: url(\"https://d3c3cq33003psk.cloudfront.net/consent/img/background-image.png\");\n" +
      "  width: 20px;\n" +
      "  height: 20px;\n" +
      "  position: absolute;\n" +
      "  background-position: 6px -116px;\n" +
      "  background-repeat: no-repeat;\n" +
      "  z-index: 199999;\n" +
      "}\n" +
      ".declined #{{cookieStatusId}} {\n" +
      "  -webkit-box-shadow:inset 0px 1px 0px 0px #f5978e;\n" +
      "  box-shadow:inset 0px 1px 0px 0px #f5978e;\n" +
      "  background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #f24537), color-stop(1, #c62d1f) );\n" +
      "  background:-moz-linear-gradient( center top, #f24537 5%, #c62d1f 100% );\n" +
      "  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#f24537\", endColorstr=\"#c62d1f\");\n" +
      "  background-color:#f24537;\n" +
      "  -moz-border-radius:5px 5px 0px 0px;\n" +
      "  -webkit-border-radius:5px 5px 0px 0px;\n" +
      "  border-radius:5px 5px 0px 0px;\n" +
      "  border:1px solid #d02718;\n" +
      "  display:inline-block;\n" +
      "  color:#ffffff;\n" +
      "  font-family:arial;\n" +
      "  font-size:12px;\n" +
      "  text-decoration:none;\n" +
      "}\n" +
      ".declined #{{cookieStatusId}}:hover {\n" +
      "  background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #c62d1f), color-stop(1, #f24537) );\n" +
      "  background:-moz-linear-gradient( center top, #c62d1f 5%, #f24537 100% );\n" +
      "  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#c62d1f\", endColorstr=\"#f24537\");\n" +
      "  background-color:#c62d1f;\n" +
      "}\n" +
      ".declined #{{cookieStatusId}}:active {\n" +
      "  position:relative;\n" +
      "  top: 1px;\n" +
      "}\n" +
      ".accepted #{{cookieStatusId}} {\n" +
      "  -moz-box-shadow:inset 0px 1px 0px 0px #6ebf26;\n" +
      "  -webkit-box-shadow:inset 0px 1px 0px 0px #6ebf26;\n" +
      "  box-shadow:inset 0px 1px 0px 0px #6ebf26;\n" +
      "  background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #7ca814), color-stop(1, #5e8007) );\n" +
      "  background:-moz-linear-gradient( center top, #7ca814 5%,#5e8007 100% );\n" +
      "  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#7ca814\", endColorstr=\"#5e8007\");\n" +
      "  background-color:#7ca814;\n" +
      "  -moz-border-radius:5px 5px 0px 0px;\n" +
      "  -webkit-border-radius:5px 5px 0px 0px;\n" +
      "  border-radius:5px 5px 0px 0px;\n" +
      "  border:1px solid #619908;\n" +
      "  display:inline-block;\n" +
      "  color:#ffffff;\n" +
      "  font-family:arial;\n" +
      "  font-size:12px;\n" +
      "  font-weight:normal;\n" +
      "  text-decoration:none;\n" +
      "}\n" +
      ".accepted #{{cookieStatusId}}:hover {\n" +
      "  background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #5e8007), color-stop(1, #7ca814) );\n" +
      "  background:-moz-linear-gradient( center top, #5e8007 5%, #7ca814 100% );\n" +
      "  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#5e8007\", endColorstr=\"#7ca814\");\n" +
      "  background-color:#5e8007;\n" +
      "}\n" +
      ".accepted #{{cookieStatusId}}:active {\n" +
      "  position:relative;\n" +
      "  top: 1px;\n" +
      "}",
    /**
     * @property {String} ACCEPT_BUTTON
     */
    ACCEPT_BUTTON: "Cookies Enabled",
    /**
     * @property {String} DECLINE_BUTTON
     */
    DECLINE_BUTTON: "Cookies Disabled"
  };

  Utils.namespace("qubit.qtag.consent.ConsentCookie", ConsentCookie);
})();



(function () {
  var Utils = qubit.qtag.Utils;
  
  /**
   * Class representing a custom tag type. It inherits all default behaviour
   * from BaseTag.
   * 
   * ## How to implement basic tag.
   * 
   * 
   * See qtag.qubit.BaseTag-cfg for more details on config object.
   * 
   * Author: Inz. Piotr (Peter) Fronc <peter.fronc@qubitdigital.com>
   * 
   * @class qubit.qtag.CustomTag
   * @extends qubit.qtag.BaseTag
   * @param {Object} config
   */
  function CustomTag(config) {
    CustomTag.superclass.apply(this, arguments);
    this.config = {
      url: null,
      html: "",
      location: "beggining",
      locationObjectId: null,
      locationObject: "body",
      
    };
  }
  
  CustomTag.superclass = qubit.qtag.BaseTag;
  CustomTag.prototype = new CustomTag.superclass();
  CustomTag.prototype.CLASS_NAME = "CustomTag";
  
  Utils.namespace("qubit.qtag.CustomTag", CustomTag);
}());


(function () {
  var Utils = qubit.qtag.Utils;
  
  /**
   * 
   * Author: Inz. Piotr (Peter) Fronc <peter.fronc@qubitdigital.com>
   * 
   * @class qubit.qtag.filter.BaseFilter
   * Base filter class.
   * @param {Object} config
   */
  function BaseFilter (config) {
    this.config = {
      /**
       * @cfg order
       */
      order: 0,
      /**
       * @cfg include
       */
      include: true,
      /**
       * @cfg {String} [name="Filter-<timestamp>"]
       */
      name: "Filter-" + new Date().valueOf(),
      /**
       * @cfg {String} type
       */
      type: ""
    };
    if (config) {
      for (var prop in config) {
        this.config[prop] = config[prop];
      }
    }
  }
  
  BaseFilter.prototype.CLASS_NAME = "BaseFilter";
  BaseFilter.prototype.PACKAGE_NAME = "qubit.qtag.filter";
  
  /**
   * Filter function.
   * @returns {Boolean}
   */
  BaseFilter.prototype.filter = function () {
    return true;
  };
  
  Utils.namespace("qubit.qtag.filter.BaseFilter", BaseFilter);
}());


(function () {
  var Utils = qubit.qtag.Utils;
  
  /**
   * PatternType static class.
   * 
   * Author: Inz. Piotr (Peter) Fronc <peter.fronc@qubitdigital.com>
   * 
   * @class qubit.qtag.filter.pattern.PatternType
   * @singleton
   * @type type
   */
  var PatternType = {
    /**
     * @property {Object} CONTAINS
     */
    CONTAINS: {
      name: "Contains Type",
    },
    /**
     * @property {Object} MATCHES
     */
    MATCHES: {
      name: "Matches Exactly"
    },
    /**
     * @property {Object} STARTS
     */
    STARTS: {
      name: "Starts "
    }
  };
  
  Utils.namespace("qubit.qtag.filter.pattern.PatternType", PatternType);
}());





(function () {
  var Utils = qubit.qtag.Utils;
  
  /**
   * SessionVariable filter type.
   * 
   * Author: Inz. Piotr (Peter) Fronc <peter.fronc@qubitdigital.com>
   * 
   * @class qubit.qtag.filter.SessionVariableFilter
   * @extends qubit.qtag.filter.BaseFilter
   * @param {Object} config
   */
  function SessionVariableFilter(config) {
    this.config = {
      /**
       * @cfg {String}
       */
      patternType: "pattern here",
      /**
       * @cfg {String}
       */
      pattern: "pattern type here"
    };
    
    if (config) {
      for(var prop in config) {
        this.config[prop] = config[prop];
      }
    }
  }
  
  SessionVariableFilter.superclass = qubit.qtag.filter.BaseFilter;
  SessionVariableFilter.prototype = new SessionVariableFilter.superclass();
  SessionVariableFilter.prototype.CLASS_NAME = "SessionVariableFilter";
  SessionVariableFilter.prototype.PACKAGE_NAME = "qubit.qtag.filter";
  
  /**
   * Filter function.
   * @returns {undefined}
   */
  SessionVariableFilter.prototype.filter = function () {
    throw "not implemented yet!";
  };
  
  Utils.namespace("qubit.qtag.filter.SessionVariableFilter", SessionVariableFilter);
}());



(function () {
  var Utils = qubit.qtag.Utils;
  
  /**
   * URLFilter filter type.
   * 
   * Author: Inz. Piotr (Peter) Fronc <peter.fronc@qubitdigital.com>
   * 
   * @class qubit.qtag.filter.URLFilter
   * @extends qubit.qtag.filter.BaseFilter
   * @param {Object} config
   */
  function URLFilter(config) {
    this.config = {
      /**
       * @cfg {String}
       */
      patternType: "pattern here",
      /**
       * @cfg {String}
       */
      pattern: "pattern type here"
    };
    
    if (config) {
      for(var prop in config) {
        this.config[prop] = config[prop];
      }
    }
  }
  
  URLFilter.superclass = qubit.qtag.filter.BaseFilter;
  URLFilter.prototype = new URLFilter.superclass();
  URLFilter.prototype.CLASS_NAME = "URLFilter";
  URLFilter.prototype.PACKAGE_NAME = "qubit.qtag.filter";
  
  /**
   * Filter function.
   * @returns {undefined}
   */
  URLFilter.prototype.filter = function () {
    throw "not implemented yet!";
  };
  
  Utils.namespace("qubit.qtag.filter.URLFilter", URLFilter);
}());


(function () {
  
  var Utils = qubit.qtag.Utils;
  
  /**
   * 
   * Author: Inz. Piotr (Peter) Fronc <peter.fronc@qubitdigital.com>
   * 
   * @class qubit.qtag.pagevariable.BaseVariable
   * @param {Object} config
   */
  function BaseVariable (config) {
    if (config) {
      this.value = config.value;
    }
  }
  
  BaseVariable.prototype.CLASS_NAME = "BaseVariable";
  BaseVariable.prototype.PACKAGE_NAME = "qubit.qtag.pagevariable";
  
  /**
   * BaseVariable returns exactly whats set.
   * @returns {Object}
   */
  BaseVariable.prototype.getValue = function () {
    return this.value;
  };
  
  /**
   * Naturally, the value is always string, as its used to deduct real value.
   * @param {String} string
   * @returns {undefined}
   */
  BaseVariable.prototype.setValue = function (string) {
    this.value = string;
  };

  Utils.namespace("qubit.qtag.pagevariable.BaseVariable", BaseVariable);
}());



(function () {
  var Utils = qubit.qtag.Utils;
  
  /**
   * Cookie variable class.
   * 
   * Author: Inz. Piotr (Peter) Fronc <peter.fronc@qubitdigital.com>
   * 
   * @class qubit.qtag.pagevariable.Cookie
   * @extends qubit.qtag.pagevariable.BaseVariable
   * @param {Object} config
   */
  function Cookie(config) {
    Cookie.superclass.apply(this, arguments);
  }
  
  Cookie.superclass = qubit.qtag.pagevariable.BaseVariable;
  Cookie.prototype = new Cookie.superclass();
  Cookie.prototype.CLASS_NAME = "Cookie";
  Cookie.prototype.PACKAGE_NAME = "qubit.qtag.pagevariable";
  
  /**
   * 
   * @returns {undefined}
   */
  Cookie.prototype.getValue = function () {
    //qubit.cookieutils.getCookie(this.value);
  };
  
  Utils.namespace("qubit.qtag.pagevariable.Cookie", Cookie);
}());



(function () {
  var Utils = qubit.qtag.Utils;
  
  /**
   * DOM text content class.
   * 
   * Author: Inz. Piotr (Peter) Fronc <peter.fronc@qubitdigital.com>
   * 
   * @class qubit.qtag.pagevariable.DOMText
   * @extends qubit.qtag.pagevariable.BaseVariable
   * @param {Object} config
   */
  function DOMText(config) {
    DOMText.superclass.apply(this, arguments);
  }
  
  DOMText.superclass = qubit.qtag.pagevariable.BaseVariable;
  DOMText.prototype = new DOMText.superclass();
  DOMText.prototype.CLASS_NAME = "DOMText";
  DOMText.prototype.PACKAGE_NAME = "qubit.qtag.pagevariable";
  
  /**
   * Get the element text value with specified ID.
   * @returns {unresolved}
   */
  DOMText.prototype.getValue = function () {
    var el = document.getElementById(this.value);
    return el.innerHTML;
  };
  
  Utils.namespace("qubit.qtag.pagevariable.DOMText", DOMText);
}());



(function () {
  var Utils = qubit.qtag.Utils;
  
  /**
   * Exression type variable class.
   * 
   * Author: Inz. Piotr (Peter) Fronc <peter.fronc@qubitdigital.com>
   * 
   * @class qubit.qtag.pagevariable.Expression
   * @extends qubit.qtag.pagevariable.BaseVariable
   * @param {Object} config
   */
  function Expression(config) {
    Expression.superclass.apply(this, arguments);
  }
  
  Expression.superclass = qubit.qtag.pagevariable.BaseVariable;
  Expression.prototype = new Expression.superclass();
  Expression.prototype.CLASS_NAME = "Expression";
  Expression.prototype.PACKAGE_NAME = "qubit.qtag.pagevariable";
  
  Utils.namespace("qubit.qtag.pagevariable.Expression", Expression);
}());



(function () {
  var Utils = qubit.qtag.Utils;
  
  /**
   * URL query variable class.
   * 
   * Author: Inz. Piotr (Peter) Fronc <peter.fronc@qubitdigital.com>
   * 
   * @class qubit.qtag.pagevariable.URLQuery
   * @extends qubit.qtag.pagevariable.BaseVariable
   * @param {Object} config
   */
  function URLQuery(config) {
    URLQuery.superclass.apply(this, arguments);
  }
  
  URLQuery.superclass = qubit.qtag.pagevariable.BaseVariable;
  URLQuery.prototype = new URLQuery.superclass();
  URLQuery.prototype.CLASS_NAME = "URLQuery";
  URLQuery.prototype.PACKAGE_NAME = "qubit.qtag.pagevariable";
  
  Utils.namespace("qubit.qtag.pagevariable.URLQuery", URLQuery);
}());


(function(){
    var Utils = qubit.qtag.Utils;
    var log = new qubit.qtag.Log("TagParameter: ");
    
    /**
     * Tag Parameter class.
     * It is used to represent Tag parameter objects.
     * @class qubit.qtag.TagParameter
     */
    function TagParameter () {
      this.config = {
        /**
         * Parameter name.
         * @cfg {String} [name="ParameterAtTime" + new Date().valueOf()]
         */
        name: "ParameterAtTime" + new Date().valueOf(),
        /**
         * Token name.
         * @cfg
         */
        token: "TOKEN",
        /**
         * Description.
         * @cfg
         */
        description: "Default parameter description.",
        /**
         * Default parameter value to be used if page variable cannot be found.
         * @cfg 
         */
        defaultValue: undefined,
        /**
         * If this parameter can use default value. `defaultValue` will be never
         * used if this property is set to `false`
         * @cfg 
         */
        canHaveDefaults: true,
        /**
         * If defined, universal variable will be used to assign value.
         * @cfg {String} [uv=undefined]
         */
        uv: undefined
      };
    }

    TagParameter.prototype.CLASS_NAME = "TagParameter";
    TagParameter.prototype.PACKAGE_NAME = "qubit.qtag";
    
    /**
     * Function getting this parameters current value.
     * This is not a getter, it varies on configuration how the value
     * is retrieved.
     * @return {undefined}
     */
    TagParameter.prototype.getValue = function () {
      
    };
    
    Utils.namespace("qubit.qtag.TagParameter", TagParameter);
})();
