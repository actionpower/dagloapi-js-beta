/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@mediapipe/tasks-audio@0.10.0/audio_bundle.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
  , audio = {}
  , audio_classifier = {}
  , calculator_pb = {}
  , googleProtobuf = {};
(function(exports) {
    var $jscomp = $jscomp || {};
    $jscomp.scope = {},
    $jscomp.findInternal = function(e, t, o) {
        e instanceof String && (e = String(e));
        for (var r = e.length, i = 0; i < r; i++) {
            var a = e[i];
            if (t.call(o, a, i, e))
                return {
                    i: i,
                    v: a
                }
        }
        return {
            i: -1,
            v: void 0
        }
    }
    ,
    $jscomp.ASSUME_ES5 = !1,
    $jscomp.ASSUME_NO_NATIVE_MAP = !1,
    $jscomp.ASSUME_NO_NATIVE_SET = !1,
    $jscomp.SIMPLE_FROUND_POLYFILL = !1,
    $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, o) {
        e != Array.prototype && e != Object.prototype && (e[t] = o.value)
    }
    ,
    $jscomp.getGlobal = function(e) {
        return "undefined" != typeof window && window === e ? e : void 0 !== commonjsGlobal && null != commonjsGlobal ? commonjsGlobal : e
    }
    ,
    $jscomp.global = $jscomp.getGlobal(commonjsGlobal),
    $jscomp.polyfill = function(e, t, o, r) {
        if (t) {
            for (o = $jscomp.global,
            e = e.split("."),
            r = 0; r < e.length - 1; r++) {
                var i = e[r];
                i in o || (o[i] = {}),
                o = o[i]
            }
            (t = t(r = o[e = e[e.length - 1]])) != r && null != t && $jscomp.defineProperty(o, e, {
                configurable: !0,
                writable: !0,
                value: t
            })
        }
    }
    ,
    $jscomp.polyfill("Array.prototype.findIndex", (function(e) {
        return e || function(e, t) {
            return $jscomp.findInternal(this, e, t).i
        }
    }
    ), "es6", "es3"),
    $jscomp.checkStringArgs = function(e, t, o) {
        if (null == e)
            throw new TypeError("The 'this' value for String.prototype." + o + " must not be null or undefined");
        if (t instanceof RegExp)
            throw new TypeError("First argument to String.prototype." + o + " must not be a regular expression");
        return e + ""
    }
    ,
    $jscomp.polyfill("String.prototype.endsWith", (function(e) {
        return e || function(e, t) {
            var o = $jscomp.checkStringArgs(this, e, "endsWith");
            e += "",
            void 0 === t && (t = o.length),
            t = Math.max(0, Math.min(0 | t, o.length));
            for (var r = e.length; 0 < r && 0 < t; )
                if (o[--t] != e[--r])
                    return !1;
            return 0 >= r
        }
    }
    ), "es6", "es3"),
    $jscomp.polyfill("Array.prototype.find", (function(e) {
        return e || function(e, t) {
            return $jscomp.findInternal(this, e, t).v
        }
    }
    ), "es6", "es3"),
    $jscomp.polyfill("String.prototype.startsWith", (function(e) {
        return e || function(e, t) {
            var o = $jscomp.checkStringArgs(this, e, "startsWith");
            e += "";
            var r = o.length
              , i = e.length;
            t = Math.max(0, Math.min(0 | t, o.length));
            for (var a = 0; a < i && t < r; )
                if (o[t++] != e[a++])
                    return !1;
            return a >= i
        }
    }
    ), "es6", "es3"),
    $jscomp.polyfill("String.prototype.repeat", (function(e) {
        return e || function(e) {
            var t = $jscomp.checkStringArgs(this, null, "repeat");
            if (0 > e || 1342177279 < e)
                throw new RangeError("Invalid count value");
            e |= 0;
            for (var o = ""; e; )
                1 & e && (o += t),
                (e >>>= 1) && (t += t);
            return o
        }
    }
    ), "es6", "es3");
    var COMPILED = !0
      , goog = goog || {};
    goog.global = commonjsGlobal || self,
    goog.exportPath_ = function(e, t, o) {
        e = e.split("."),
        o = o || goog.global,
        e[0]in o || void 0 === o.execScript || o.execScript("var " + e[0]);
        for (var r; e.length && (r = e.shift()); )
            e.length || void 0 === t ? o = o[r] && o[r] !== Object.prototype[r] ? o[r] : o[r] = {} : o[r] = t
    }
    ,
    goog.define = function(e, t) {
        return t
    }
    ,
    goog.FEATURESET_YEAR = 2012,
    goog.DEBUG = !0,
    goog.LOCALE = "en",
    goog.TRUSTED_SITE = !0,
    goog.STRICT_MODE_COMPATIBLE = !1,
    goog.DISALLOW_TEST_ONLY_CODE = !goog.DEBUG,
    goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1,
    goog.provide = function(e) {
        if (goog.isInModuleLoader_())
            throw Error("goog.provide cannot be used within a module.");
        goog.constructNamespace_(e)
    }
    ,
    goog.constructNamespace_ = function(e, t) {
        goog.exportPath_(e, t)
    }
    ,
    goog.getScriptNonce = function(e) {
        return e && e != goog.global ? goog.getScriptNonce_(e.document) : (null === goog.cspNonce_ && (goog.cspNonce_ = goog.getScriptNonce_(goog.global.document)),
        goog.cspNonce_)
    }
    ,
    goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/,
    goog.cspNonce_ = null,
    goog.getScriptNonce_ = function(e) {
        return (e = e.querySelector && e.querySelector("script[nonce]")) && (e = e.nonce || e.getAttribute("nonce")) && goog.NONCE_PATTERN_.test(e) ? e : ""
    }
    ,
    goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/,
    goog.module = function(e) {
        if ("string" != typeof e || !e || -1 == e.search(goog.VALID_MODULE_RE_))
            throw Error("Invalid module identifier");
        if (!goog.isInGoogModuleLoader_())
            throw Error("Module " + e + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
        if (goog.moduleLoaderState_.moduleName)
            throw Error("goog.module may only be called once per module.");
        goog.moduleLoaderState_.moduleName = e
    }
    ,
    goog.module.get = function(e) {
        return goog.module.getInternal_(e)
    }
    ,
    goog.module.getInternal_ = function(e) {
        return null
    }
    ,
    goog.ModuleType = {
        ES6: "es6",
        GOOG: "goog"
    },
    goog.moduleLoaderState_ = null,
    goog.isInModuleLoader_ = function() {
        return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_()
    }
    ,
    goog.isInGoogModuleLoader_ = function() {
        return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG
    }
    ,
    goog.isInEs6ModuleLoader_ = function() {
        if (goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6)
            return !0;
        var e = goog.global.$jscomp;
        return !!e && ("function" == typeof e.getCurrentModulePath && !!e.getCurrentModulePath())
    }
    ,
    goog.module.declareLegacyNamespace = function() {
        goog.moduleLoaderState_.declareLegacyNamespace = !0
    }
    ,
    goog.declareModuleId = function(e) {
        if (goog.moduleLoaderState_)
            goog.moduleLoaderState_.moduleName = e;
        else {
            var t = goog.global.$jscomp;
            if (!t || "function" != typeof t.getCurrentModulePath)
                throw Error('Module with namespace "' + e + '" has been loaded incorrectly.');
            t = t.require(t.getCurrentModulePath()),
            goog.loadedModules_[e] = {
                exports: t,
                type: goog.ModuleType.ES6,
                moduleId: e
            }
        }
    }
    ,
    goog.setTestOnly = function(e) {
        if (goog.DISALLOW_TEST_ONLY_CODE)
            throw e = e || "",
            Error("Importing test-only code into non-debug environment" + (e ? ": " + e : "."))
    }
    ,
    goog.forwardDeclare = function(e) {}
    ,
    goog.getObjectByName = function(e, t) {
        e = e.split("."),
        t = t || goog.global;
        for (var o = 0; o < e.length; o++)
            if (null == (t = t[e[o]]))
                return null;
        return t
    }
    ,
    goog.globalize = function(e, t) {
        for (var o in t = t || goog.global,
        e)
            t[o] = e[o]
    }
    ,
    goog.addDependency = function(e, t, o, r) {}
    ,
    goog.ENABLE_DEBUG_LOADER = !0,
    goog.logToConsole_ = function(e) {
        goog.global.console && goog.global.console.error(e)
    }
    ,
    goog.require = function(e) {}
    ,
    goog.requireType = function(e) {
        return {}
    }
    ,
    goog.basePath = "",
    goog.nullFunction = function() {}
    ,
    goog.abstractMethod = function() {
        throw Error("unimplemented abstract method")
    }
    ,
    goog.addSingletonGetter = function(e) {
        e.instance_ = void 0,
        e.getInstance = function() {
            return e.instance_ ? e.instance_ : (goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = e),
            e.instance_ = new e)
        }
    }
    ,
    goog.instantiatedSingletons_ = [],
    goog.LOAD_MODULE_USING_EVAL = !0,
    goog.SEAL_MODULE_EXPORTS = goog.DEBUG,
    goog.loadedModules_ = {},
    goog.DEPENDENCIES_ENABLED = !COMPILED,
    goog.TRANSPILE = "detect",
    goog.ASSUME_ES_MODULES_TRANSPILED = !1,
    goog.TRANSPILE_TO_LANGUAGE = "",
    goog.TRANSPILER = "transpile.js",
    goog.hasBadLetScoping = null,
    goog.useSafari10Workaround = function() {
        if (null == goog.hasBadLetScoping) {
            try {
                var a = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";')
            } catch (e) {
                a = !1
            }
            goog.hasBadLetScoping = a
        }
        return goog.hasBadLetScoping
    }
    ,
    goog.workaroundSafari10EvalBug = function(e) {
        return "(function(){" + e + "\n;})();\n"
    }
    ,
    goog.loadModule = function(e) {
        var t = goog.moduleLoaderState_;
        try {
            if (goog.moduleLoaderState_ = {
                moduleName: "",
                declareLegacyNamespace: !1,
                type: goog.ModuleType.GOOG
            },
            goog.isFunction(e))
                var o = e.call(void 0, {});
            else {
                if ("string" != typeof e)
                    throw Error("Invalid module definition");
                goog.useSafari10Workaround() && (e = goog.workaroundSafari10EvalBug(e)),
                o = goog.loadModuleFromSource_.call(void 0, e)
            }
            var r = goog.moduleLoaderState_.moduleName;
            if ("string" != typeof r || !r)
                throw Error('Invalid module name "' + r + '"');
            goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(r, o) : goog.SEAL_MODULE_EXPORTS && Object.seal && "object" == typeof o && null != o && Object.seal(o),
            goog.loadedModules_[r] = {
                exports: o,
                type: goog.ModuleType.GOOG,
                moduleId: goog.moduleLoaderState_.moduleName
            }
        } finally {
            goog.moduleLoaderState_ = t
        }
    }
    ,
    goog.loadModuleFromSource_ = function(a) {
        return eval(a),
        {}
    }
    ,
    goog.normalizePath_ = function(e) {
        e = e.split("/");
        for (var t = 0; t < e.length; )
            "." == e[t] ? e.splice(t, 1) : t && ".." == e[t] && e[t - 1] && ".." != e[t - 1] ? e.splice(--t, 2) : t++;
        return e.join("/")
    }
    ,
    goog.loadFileSync_ = function(e) {
        if (goog.global.CLOSURE_LOAD_FILE_SYNC)
            return goog.global.CLOSURE_LOAD_FILE_SYNC(e);
        try {
            var t = new goog.global.XMLHttpRequest;
            return t.open("get", e, !1),
            t.send(),
            0 == t.status || 200 == t.status ? t.responseText : null
        } catch (e) {
            return null
        }
    }
    ,
    goog.transpile_ = function(e, t, o) {
        var r = goog.global.$jscomp;
        r || (goog.global.$jscomp = r = {});
        var i = r.transpile;
        if (!i) {
            var a = goog.basePath + goog.TRANSPILER
              , n = goog.loadFileSync_(a);
            if (n) {
                if (function() {
                    (0,
                    eval)(n + "\n//# sourceURL=" + a)
                }
                .call(goog.global),
                goog.global.$gwtExport && goog.global.$gwtExport.$jscomp && !goog.global.$gwtExport.$jscomp.transpile)
                    throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(goog.global.$gwtExport));
                goog.global.$jscomp.transpile = goog.global.$gwtExport.$jscomp.transpile,
                i = (r = goog.global.$jscomp).transpile
            }
        }
        return i || (i = r.transpile = function(e, t) {
            return goog.logToConsole_(t + " requires transpilation but no transpiler was found."),
            e
        }
        ),
        i(e, t, o)
    }
    ,
    goog.typeOf = function(e) {
        var t = typeof e;
        if ("object" == t) {
            if (!e)
                return "null";
            if (e instanceof Array)
                return "array";
            if (e instanceof Object)
                return t;
            var o = Object.prototype.toString.call(e);
            if ("[object Window]" == o)
                return "object";
            if ("[object Array]" == o || "number" == typeof e.length && void 0 !== e.splice && void 0 !== e.propertyIsEnumerable && !e.propertyIsEnumerable("splice"))
                return "array";
            if ("[object Function]" == o || void 0 !== e.call && void 0 !== e.propertyIsEnumerable && !e.propertyIsEnumerable("call"))
                return "function"
        } else if ("function" == t && void 0 === e.call)
            return "object";
        return t
    }
    ,
    goog.isArray = function(e) {
        return "array" == goog.typeOf(e)
    }
    ,
    goog.isArrayLike = function(e) {
        var t = goog.typeOf(e);
        return "array" == t || "object" == t && "number" == typeof e.length
    }
    ,
    goog.isDateLike = function(e) {
        return goog.isObject(e) && "function" == typeof e.getFullYear
    }
    ,
    goog.isFunction = function(e) {
        return "function" == goog.typeOf(e)
    }
    ,
    goog.isObject = function(e) {
        var t = typeof e;
        return "object" == t && null != e || "function" == t
    }
    ,
    goog.getUid = function(e) {
        return Object.prototype.hasOwnProperty.call(e, goog.UID_PROPERTY_) && e[goog.UID_PROPERTY_] || (e[goog.UID_PROPERTY_] = ++goog.uidCounter_)
    }
    ,
    goog.hasUid = function(e) {
        return !!e[goog.UID_PROPERTY_]
    }
    ,
    goog.removeUid = function(e) {
        null !== e && "removeAttribute"in e && e.removeAttribute(goog.UID_PROPERTY_);
        try {
            delete e[goog.UID_PROPERTY_]
        } catch (e) {}
    }
    ,
    goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0),
    goog.uidCounter_ = 0,
    goog.getHashCode = goog.getUid,
    goog.removeHashCode = goog.removeUid,
    goog.cloneObject = function(e) {
        var t = goog.typeOf(e);
        if ("object" == t || "array" == t) {
            if ("function" == typeof e.clone)
                return e.clone();
            for (var o in t = "array" == t ? [] : {},
            e)
                t[o] = goog.cloneObject(e[o]);
            return t
        }
        return e
    }
    ,
    goog.bindNative_ = function(e, t, o) {
        return e.call.apply(e.bind, arguments)
    }
    ,
    goog.bindJs_ = function(e, t, o) {
        if (!e)
            throw Error();
        if (2 < arguments.length) {
            var r = Array.prototype.slice.call(arguments, 2);
            return function() {
                var o = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(o, r),
                e.apply(t, o)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
    ,
    goog.bind = function(e, t, o) {
        return Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_,
        goog.bind.apply(null, arguments)
    }
    ,
    goog.partial = function(e, t) {
        var o = Array.prototype.slice.call(arguments, 1);
        return function() {
            var t = o.slice();
            return t.push.apply(t, arguments),
            e.apply(this, t)
        }
    }
    ,
    goog.mixin = function(e, t) {
        for (var o in t)
            e[o] = t[o]
    }
    ,
    goog.now = goog.TRUSTED_SITE && Date.now || function() {
        return +new Date
    }
    ,
    goog.globalEval = function(e) {
        if (goog.global.execScript)
            goog.global.execScript(e, "JavaScript");
        else {
            if (!goog.global.eval)
                throw Error("goog.globalEval not available");
            if (null == goog.evalWorksForGlobals_) {
                try {
                    goog.global.eval("var _evalTest_ = 1;")
                } catch (e) {}
                if (void 0 !== goog.global._evalTest_) {
                    try {
                        delete goog.global._evalTest_
                    } catch (e) {}
                    goog.evalWorksForGlobals_ = !0
                } else
                    goog.evalWorksForGlobals_ = !1
            }
            if (goog.evalWorksForGlobals_)
                goog.global.eval(e);
            else {
                var t = goog.global.document
                  , o = t.createElement("script");
                o.type = "text/javascript",
                o.defer = !1,
                o.appendChild(t.createTextNode(e)),
                t.head.appendChild(o),
                t.head.removeChild(o)
            }
        }
    }
    ,
    goog.evalWorksForGlobals_ = null,
    goog.getCssName = function(e, t) {
        if ("." == String(e).charAt(0))
            throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + e);
        var o = function(e) {
            return goog.cssNameMapping_[e] || e
        }
          , r = function(e) {
            e = e.split("-");
            for (var t = [], r = 0; r < e.length; r++)
                t.push(o(e[r]));
            return t.join("-")
        };
        return r = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? o : r : function(e) {
            return e
        }
        ,
        e = t ? e + "-" + r(t) : r(e),
        goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(e) : e
    }
    ,
    goog.setCssNameMapping = function(e, t) {
        goog.cssNameMapping_ = e,
        goog.cssNameMappingStyle_ = t
    }
    ,
    goog.getMsg = function(e, t, o) {
        return o && o.html && (e = e.replace(/</g, "&lt;")),
        t && (e = e.replace(/\{\$([^}]+)}/g, (function(e, o) {
            return null != t && o in t ? t[o] : e
        }
        ))),
        e
    }
    ,
    goog.getMsgWithFallback = function(e, t) {
        return e
    }
    ,
    goog.exportSymbol = function(e, t, o) {
        goog.exportPath_(e, t, o)
    }
    ,
    goog.exportProperty = function(e, t, o) {
        e[t] = o
    }
    ,
    goog.inherits = function(e, t) {
        function o() {}
        o.prototype = t.prototype,
        e.superClass_ = t.prototype,
        e.prototype = new o,
        e.prototype.constructor = e,
        e.base = function(e, o, r) {
            for (var i = Array(arguments.length - 2), a = 2; a < arguments.length; a++)
                i[a - 2] = arguments[a];
            return t.prototype[o].apply(e, i)
        }
    }
    ,
    goog.scope = function(e) {
        if (goog.isInModuleLoader_())
            throw Error("goog.scope is not supported within a module.");
        e.call(goog.global)
    }
    ,
    goog.defineClass = function(e, t) {
        var o = t.constructor
          , r = t.statics;
        return o && o != Object.prototype.constructor || (o = function() {
            throw Error("cannot instantiate an interface (no constructor defined).")
        }
        ),
        o = goog.defineClass.createSealingConstructor_(o, e),
        e && goog.inherits(o, e),
        delete t.constructor,
        delete t.statics,
        goog.defineClass.applyProperties_(o.prototype, t),
        null != r && (r instanceof Function ? r(o) : goog.defineClass.applyProperties_(o, r)),
        o
    }
    ,
    goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG,
    goog.defineClass.createSealingConstructor_ = function(e, t) {
        if (!goog.defineClass.SEAL_CLASS_INSTANCES)
            return e;
        var o = !goog.defineClass.isUnsealable_(t)
          , r = function() {
            var t = e.apply(this, arguments) || this;
            return t[goog.UID_PROPERTY_] = t[goog.UID_PROPERTY_],
            this.constructor === r && o && Object.seal instanceof Function && Object.seal(t),
            t
        };
        return r
    }
    ,
    goog.defineClass.isUnsealable_ = function(e) {
        return e && e.prototype && e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]
    }
    ,
    goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
    goog.defineClass.applyProperties_ = function(e, t) {
        for (var o in t)
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        for (var r = 0; r < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; r++)
            o = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[r],
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
    }
    ,
    goog.tagUnsealableClass = function(e) {}
    ,
    goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable",
    goog.TRUSTED_TYPES_POLICY_NAME = "",
    goog.identity_ = function(e) {
        return e
    }
    ,
    goog.createTrustedTypesPolicy = function(e) {
        var t = null
          , o = goog.global.trustedTypes || goog.global.TrustedTypes;
        if (!o || !o.createPolicy)
            return t;
        try {
            t = o.createPolicy(e, {
                createHTML: goog.identity_,
                createScript: goog.identity_,
                createScriptURL: goog.identity_,
                createURL: goog.identity_
            })
        } catch (e) {
            goog.logToConsole_(e.message)
        }
        return t
    }
    ,
    goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base") : null,
    goog.object = {},
    goog.object.is = function(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    }
    ,
    goog.object.forEach = function(e, t, o) {
        for (var r in e)
            t.call(o, e[r], r, e)
    }
    ,
    goog.object.filter = function(e, t, o) {
        var r, i = {};
        for (r in e)
            t.call(o, e[r], r, e) && (i[r] = e[r]);
        return i
    }
    ,
    goog.object.map = function(e, t, o) {
        var r, i = {};
        for (r in e)
            i[r] = t.call(o, e[r], r, e);
        return i
    }
    ,
    goog.object.some = function(e, t, o) {
        for (var r in e)
            if (t.call(o, e[r], r, e))
                return !0;
        return !1
    }
    ,
    goog.object.every = function(e, t, o) {
        for (var r in e)
            if (!t.call(o, e[r], r, e))
                return !1;
        return !0
    }
    ,
    goog.object.getCount = function(e) {
        var t, o = 0;
        for (t in e)
            o++;
        return o
    }
    ,
    goog.object.getAnyKey = function(e) {
        for (var t in e)
            return t
    }
    ,
    goog.object.getAnyValue = function(e) {
        for (var t in e)
            return e[t]
    }
    ,
    goog.object.contains = function(e, t) {
        return goog.object.containsValue(e, t)
    }
    ,
    goog.object.getValues = function(e) {
        var t, o = [], r = 0;
        for (t in e)
            o[r++] = e[t];
        return o
    }
    ,
    goog.object.getKeys = function(e) {
        var t, o = [], r = 0;
        for (t in e)
            o[r++] = t;
        return o
    }
    ,
    goog.object.getValueByKeys = function(e, t) {
        var o = goog.isArrayLike(t)
          , r = o ? t : arguments;
        for (o = o ? 0 : 1; o < r.length; o++) {
            if (null == e)
                return;
            e = e[r[o]]
        }
        return e
    }
    ,
    goog.object.containsKey = function(e, t) {
        return null !== e && t in e
    }
    ,
    goog.object.containsValue = function(e, t) {
        for (var o in e)
            if (e[o] == t)
                return !0;
        return !1
    }
    ,
    goog.object.findKey = function(e, t, o) {
        for (var r in e)
            if (t.call(o, e[r], r, e))
                return r
    }
    ,
    goog.object.findValue = function(e, t, o) {
        return (t = goog.object.findKey(e, t, o)) && e[t]
    }
    ,
    goog.object.isEmpty = function(e) {
        for (var t in e)
            return !1;
        return !0
    }
    ,
    goog.object.clear = function(e) {
        for (var t in e)
            delete e[t]
    }
    ,
    goog.object.remove = function(e, t) {
        var o;
        return (o = t in e) && delete e[t],
        o
    }
    ,
    goog.object.add = function(e, t, o) {
        if (null !== e && t in e)
            throw Error('The object already contains the key "' + t + '"');
        goog.object.set(e, t, o)
    }
    ,
    goog.object.get = function(e, t, o) {
        return null !== e && t in e ? e[t] : o
    }
    ,
    goog.object.set = function(e, t, o) {
        e[t] = o
    }
    ,
    goog.object.setIfUndefined = function(e, t, o) {
        return t in e ? e[t] : e[t] = o
    }
    ,
    goog.object.setWithReturnValueIfNotSet = function(e, t, o) {
        return t in e ? e[t] : (o = o(),
        e[t] = o)
    }
    ,
    goog.object.equals = function(e, t) {
        for (var o in e)
            if (!(o in t) || e[o] !== t[o])
                return !1;
        for (var r in t)
            if (!(r in e))
                return !1;
        return !0
    }
    ,
    goog.object.clone = function(e) {
        var t, o = {};
        for (t in e)
            o[t] = e[t];
        return o
    }
    ,
    goog.object.unsafeClone = function(e) {
        var t = goog.typeOf(e);
        if ("object" == t || "array" == t) {
            if (goog.isFunction(e.clone))
                return e.clone();
            for (var o in t = "array" == t ? [] : {},
            e)
                t[o] = goog.object.unsafeClone(e[o]);
            return t
        }
        return e
    }
    ,
    goog.object.transpose = function(e) {
        var t, o = {};
        for (t in e)
            o[e[t]] = t;
        return o
    }
    ,
    goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
    goog.object.extend = function(e, t) {
        for (var o, r, i = 1; i < arguments.length; i++) {
            for (o in r = arguments[i])
                e[o] = r[o];
            for (var a = 0; a < goog.object.PROTOTYPE_FIELDS_.length; a++)
                o = goog.object.PROTOTYPE_FIELDS_[a],
                Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
        }
    }
    ,
    goog.object.create = function(e) {
        var t = arguments.length;
        if (1 == t && Array.isArray(arguments[0]))
            return goog.object.create.apply(null, arguments[0]);
        if (t % 2)
            throw Error("Uneven number of arguments");
        for (var o = {}, r = 0; r < t; r += 2)
            o[arguments[r]] = arguments[r + 1];
        return o
    }
    ,
    goog.object.createSet = function(e) {
        var t = arguments.length;
        if (1 == t && Array.isArray(arguments[0]))
            return goog.object.createSet.apply(null, arguments[0]);
        for (var o = {}, r = 0; r < t; r++)
            o[arguments[r]] = !0;
        return o
    }
    ,
    goog.object.createImmutableView = function(e) {
        var t = e;
        return Object.isFrozen && !Object.isFrozen(e) && (t = Object.create(e),
        Object.freeze(t)),
        t
    }
    ,
    goog.object.isImmutableView = function(e) {
        return !!Object.isFrozen && Object.isFrozen(e)
    }
    ,
    goog.object.getAllPropertyNames = function(e, t, o) {
        if (!e)
            return [];
        if (!Object.getOwnPropertyNames || !Object.getPrototypeOf)
            return goog.object.getKeys(e);
        for (var r = {}; e && (e !== Object.prototype || t) && (e !== Function.prototype || o); ) {
            for (var i = Object.getOwnPropertyNames(e), a = 0; a < i.length; a++)
                r[i[a]] = !0;
            e = Object.getPrototypeOf(e)
        }
        return goog.object.getKeys(r)
    }
    ,
    goog.object.getSuperClass = function(e) {
        return (e = Object.getPrototypeOf(e.prototype)) && e.constructor
    }
    ;
    var jspb = {
        asserts: {}
    };
    jspb.asserts.doAssertFailure = function(e, t, o, r) {
        var i = "Assertion failed";
        if (o) {
            i += ": " + o;
            var a = r
        } else
            e && (i += ": " + e,
            a = t);
        throw Error("" + i, a || [])
    }
    ,
    jspb.asserts.assert = function(e, t, o) {
        for (var r = [], i = 2; i < arguments.length; ++i)
            r[i - 2] = arguments[i];
        return e || jspb.asserts.doAssertFailure("", null, t, r),
        e
    }
    ,
    jspb.asserts.assertString = function(e, t, o) {
        for (var r = [], i = 2; i < arguments.length; ++i)
            r[i - 2] = arguments[i];
        return "string" != typeof e && jspb.asserts.doAssertFailure("Expected string but got %s: %s.", [goog.typeOf(e), e], t, r),
        e
    }
    ,
    jspb.asserts.assertArray = function(e, t, o) {
        for (var r = [], i = 2; i < arguments.length; ++i)
            r[i - 2] = arguments[i];
        return Array.isArray(e) || jspb.asserts.doAssertFailure("Expected array but got %s: %s.", [goog.typeOf(e), e], t, r),
        e
    }
    ,
    jspb.asserts.fail = function(e, t) {
        for (var o = [], r = 1; r < arguments.length; ++r)
            o[r - 1] = arguments[r];
        throw Error("Failure" + (e ? ": " + e : ""), o)
    }
    ,
    jspb.asserts.assertInstanceof = function(e, t, o, r) {
        for (var i = [], a = 3; a < arguments.length; ++a)
            i[a - 3] = arguments[a];
        return e instanceof t || jspb.asserts.doAssertFailure("Expected instanceof %s but got %s.", [jspb.asserts.getType(t), jspb.asserts.getType(e)], o, i),
        e
    }
    ,
    jspb.asserts.getType = function(e) {
        return e instanceof Function ? e.displayName || e.name || "unknown type name" : e instanceof Object ? e.constructor.displayName || e.constructor.name || Object.prototype.toString.call(e) : null === e ? "null" : typeof e
    }
    ,
    jspb.BinaryConstants = {},
    jspb.ConstBinaryMessage = function() {}
    ,
    jspb.BinaryMessage = function() {}
    ,
    jspb.BinaryConstants.FieldType = {
        INVALID: -1,
        DOUBLE: 1,
        FLOAT: 2,
        INT64: 3,
        UINT64: 4,
        INT32: 5,
        FIXED64: 6,
        FIXED32: 7,
        BOOL: 8,
        STRING: 9,
        GROUP: 10,
        MESSAGE: 11,
        BYTES: 12,
        UINT32: 13,
        ENUM: 14,
        SFIXED32: 15,
        SFIXED64: 16,
        SINT32: 17,
        SINT64: 18,
        FHASH64: 30,
        VHASH64: 31
    },
    jspb.BinaryConstants.WireType = {
        INVALID: -1,
        VARINT: 0,
        FIXED64: 1,
        DELIMITED: 2,
        START_GROUP: 3,
        END_GROUP: 4,
        FIXED32: 5
    },
    jspb.BinaryConstants.FieldTypeToWireType = function(e) {
        var t = jspb.BinaryConstants.FieldType
          , o = jspb.BinaryConstants.WireType;
        switch (e) {
        case t.INT32:
        case t.INT64:
        case t.UINT32:
        case t.UINT64:
        case t.SINT32:
        case t.SINT64:
        case t.BOOL:
        case t.ENUM:
        case t.VHASH64:
            return o.VARINT;
        case t.DOUBLE:
        case t.FIXED64:
        case t.SFIXED64:
        case t.FHASH64:
            return o.FIXED64;
        case t.STRING:
        case t.MESSAGE:
        case t.BYTES:
            return o.DELIMITED;
        case t.FLOAT:
        case t.FIXED32:
        case t.SFIXED32:
            return o.FIXED32;
        default:
            return o.INVALID
        }
    }
    ,
    jspb.BinaryConstants.INVALID_FIELD_NUMBER = -1,
    jspb.BinaryConstants.FLOAT32_EPS = 1401298464324817e-60,
    jspb.BinaryConstants.FLOAT32_MIN = 11754943508222875e-54,
    jspb.BinaryConstants.FLOAT32_MAX = 34028234663852886e22,
    jspb.BinaryConstants.FLOAT64_EPS = 5e-324,
    jspb.BinaryConstants.FLOAT64_MIN = 22250738585072014e-324,
    jspb.BinaryConstants.FLOAT64_MAX = 17976931348623157e292,
    jspb.BinaryConstants.TWO_TO_20 = 1048576,
    jspb.BinaryConstants.TWO_TO_23 = 8388608,
    jspb.BinaryConstants.TWO_TO_31 = 2147483648,
    jspb.BinaryConstants.TWO_TO_32 = 4294967296,
    jspb.BinaryConstants.TWO_TO_52 = 4503599627370496,
    jspb.BinaryConstants.TWO_TO_63 = 0x8000000000000000,
    jspb.BinaryConstants.TWO_TO_64 = 0x10000000000000000,
    jspb.BinaryConstants.ZERO_HASH = "\0\0\0\0\0\0\0\0",
    goog.debug = {},
    goog.debug.Error = function(e) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, goog.debug.Error);
        else {
            var t = Error().stack;
            t && (this.stack = t)
        }
        e && (this.message = String(e)),
        this.reportErrorToServer = !0
    }
    ,
    goog.inherits(goog.debug.Error, Error),
    goog.debug.Error.prototype.name = "CustomError",
    goog.dom = {},
    goog.dom.NodeType = {
        ELEMENT: 1,
        ATTRIBUTE: 2,
        TEXT: 3,
        CDATA_SECTION: 4,
        ENTITY_REFERENCE: 5,
        ENTITY: 6,
        PROCESSING_INSTRUCTION: 7,
        COMMENT: 8,
        DOCUMENT: 9,
        DOCUMENT_TYPE: 10,
        DOCUMENT_FRAGMENT: 11,
        NOTATION: 12
    },
    goog.asserts = {},
    goog.asserts.ENABLE_ASSERTS = goog.DEBUG,
    goog.asserts.AssertionError = function(e, t) {
        goog.debug.Error.call(this, goog.asserts.subs_(e, t)),
        this.messagePattern = e
    }
    ,
    goog.inherits(goog.asserts.AssertionError, goog.debug.Error),
    goog.asserts.AssertionError.prototype.name = "AssertionError",
    goog.asserts.DEFAULT_ERROR_HANDLER = function(e) {
        throw e
    }
    ,
    goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER,
    goog.asserts.subs_ = function(e, t) {
        for (var o = "", r = (e = e.split("%s")).length - 1, i = 0; i < r; i++)
            o += e[i] + (i < t.length ? t[i] : "%s");
        return o + e[r]
    }
    ,
    goog.asserts.doAssertFailure_ = function(e, t, o, r) {
        var i = "Assertion failed";
        if (o) {
            i += ": " + o;
            var a = r
        } else
            e && (i += ": " + e,
            a = t);
        e = new goog.asserts.AssertionError("" + i,a || []),
        goog.asserts.errorHandler_(e)
    }
    ,
    goog.asserts.setErrorHandler = function(e) {
        goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = e)
    }
    ,
    goog.asserts.assert = function(e, t, o) {
        return goog.asserts.ENABLE_ASSERTS && !e && goog.asserts.doAssertFailure_("", null, t, Array.prototype.slice.call(arguments, 2)),
        e
    }
    ,
    goog.asserts.assertExists = function(e, t, o) {
        return goog.asserts.ENABLE_ASSERTS && null == e && goog.asserts.doAssertFailure_("Expected to exist: %s.", [e], t, Array.prototype.slice.call(arguments, 2)),
        e
    }
    ,
    goog.asserts.fail = function(e, t) {
        goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (e ? ": " + e : ""),Array.prototype.slice.call(arguments, 1)))
    }
    ,
    goog.asserts.assertNumber = function(e, t, o) {
        return goog.asserts.ENABLE_ASSERTS && "number" != typeof e && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)),
        e
    }
    ,
    goog.asserts.assertString = function(e, t, o) {
        return goog.asserts.ENABLE_ASSERTS && "string" != typeof e && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)),
        e
    }
    ,
    goog.asserts.assertFunction = function(e, t, o) {
        return goog.asserts.ENABLE_ASSERTS && !goog.isFunction(e) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)),
        e
    }
    ,
    goog.asserts.assertObject = function(e, t, o) {
        return goog.asserts.ENABLE_ASSERTS && !goog.isObject(e) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)),
        e
    }
    ,
    goog.asserts.assertArray = function(e, t, o) {
        return goog.asserts.ENABLE_ASSERTS && !Array.isArray(e) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)),
        e
    }
    ,
    goog.asserts.assertBoolean = function(e, t, o) {
        return goog.asserts.ENABLE_ASSERTS && "boolean" != typeof e && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)),
        e
    }
    ,
    goog.asserts.assertElement = function(e, t, o) {
        return !goog.asserts.ENABLE_ASSERTS || goog.isObject(e) && e.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)),
        e
    }
    ,
    goog.asserts.assertInstanceof = function(e, t, o, r) {
        return !goog.asserts.ENABLE_ASSERTS || e instanceof t || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(t), goog.asserts.getType_(e)], o, Array.prototype.slice.call(arguments, 3)),
        e
    }
    ,
    goog.asserts.assertFinite = function(e, t, o) {
        return !goog.asserts.ENABLE_ASSERTS || "number" == typeof e && isFinite(e) || goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.", [e], t, Array.prototype.slice.call(arguments, 2)),
        e
    }
    ,
    goog.asserts.assertObjectPrototypeIsIntact = function() {
        for (var e in Object.prototype)
            goog.asserts.fail(e + " should not be enumerable in Object.prototype.")
    }
    ,
    goog.asserts.getType_ = function(e) {
        return e instanceof Function ? e.displayName || e.name || "unknown type name" : e instanceof Object ? e.constructor.displayName || e.constructor.name || Object.prototype.toString.call(e) : null === e ? "null" : typeof e
    }
    ,
    goog.array = {},
    goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE,
    goog.array.ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR,
    goog.array.peek = function(e) {
        return e[e.length - 1]
    }
    ,
    goog.array.last = goog.array.peek,
    goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function(e, t, o) {
        return goog.asserts.assert(null != e.length),
        Array.prototype.indexOf.call(e, t, o)
    }
    : function(e, t, o) {
        if (o = null == o ? 0 : 0 > o ? Math.max(0, e.length + o) : o,
        "string" == typeof e)
            return "string" != typeof t || 1 != t.length ? -1 : e.indexOf(t, o);
        for (; o < e.length; o++)
            if (o in e && e[o] === t)
                return o;
        return -1
    }
    ,
    goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function(e, t, o) {
        return goog.asserts.assert(null != e.length),
        Array.prototype.lastIndexOf.call(e, t, null == o ? e.length - 1 : o)
    }
    : function(e, t, o) {
        if (0 > (o = null == o ? e.length - 1 : o) && (o = Math.max(0, e.length + o)),
        "string" == typeof e)
            return "string" != typeof t || 1 != t.length ? -1 : e.lastIndexOf(t, o);
        for (; 0 <= o; o--)
            if (o in e && e[o] === t)
                return o;
        return -1
    }
    ,
    goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function(e, t, o) {
        goog.asserts.assert(null != e.length),
        Array.prototype.forEach.call(e, t, o)
    }
    : function(e, t, o) {
        for (var r = e.length, i = "string" == typeof e ? e.split("") : e, a = 0; a < r; a++)
            a in i && t.call(o, i[a], a, e)
    }
    ,
    goog.array.forEachRight = function(e, t, o) {
        var r = e.length
          , i = "string" == typeof e ? e.split("") : e;
        for (--r; 0 <= r; --r)
            r in i && t.call(o, i[r], r, e)
    }
    ,
    goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function(e, t, o) {
        return goog.asserts.assert(null != e.length),
        Array.prototype.filter.call(e, t, o)
    }
    : function(e, t, o) {
        for (var r = e.length, i = [], a = 0, n = "string" == typeof e ? e.split("") : e, s = 0; s < r; s++)
            if (s in n) {
                var p = n[s];
                t.call(o, p, s, e) && (i[a++] = p)
            }
        return i
    }
    ,
    goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function(e, t, o) {
        return goog.asserts.assert(null != e.length),
        Array.prototype.map.call(e, t, o)
    }
    : function(e, t, o) {
        for (var r = e.length, i = Array(r), a = "string" == typeof e ? e.split("") : e, n = 0; n < r; n++)
            n in a && (i[n] = t.call(o, a[n], n, e));
        return i
    }
    ,
    goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function(e, t, o, r) {
        return goog.asserts.assert(null != e.length),
        r && (t = goog.bind(t, r)),
        Array.prototype.reduce.call(e, t, o)
    }
    : function(e, t, o, r) {
        var i = o;
        return goog.array.forEach(e, (function(o, a) {
            i = t.call(r, i, o, a, e)
        }
        )),
        i
    }
    ,
    goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function(e, t, o, r) {
        return goog.asserts.assert(null != e.length),
        goog.asserts.assert(null != t),
        r && (t = goog.bind(t, r)),
        Array.prototype.reduceRight.call(e, t, o)
    }
    : function(e, t, o, r) {
        var i = o;
        return goog.array.forEachRight(e, (function(o, a) {
            i = t.call(r, i, o, a, e)
        }
        )),
        i
    }
    ,
    goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function(e, t, o) {
        return goog.asserts.assert(null != e.length),
        Array.prototype.some.call(e, t, o)
    }
    : function(e, t, o) {
        for (var r = e.length, i = "string" == typeof e ? e.split("") : e, a = 0; a < r; a++)
            if (a in i && t.call(o, i[a], a, e))
                return !0;
        return !1
    }
    ,
    goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function(e, t, o) {
        return goog.asserts.assert(null != e.length),
        Array.prototype.every.call(e, t, o)
    }
    : function(e, t, o) {
        for (var r = e.length, i = "string" == typeof e ? e.split("") : e, a = 0; a < r; a++)
            if (a in i && !t.call(o, i[a], a, e))
                return !1;
        return !0
    }
    ,
    goog.array.count = function(e, t, o) {
        var r = 0;
        return goog.array.forEach(e, (function(e, i, a) {
            t.call(o, e, i, a) && ++r
        }
        ), o),
        r
    }
    ,
    goog.array.find = function(e, t, o) {
        return 0 > (t = goog.array.findIndex(e, t, o)) ? null : "string" == typeof e ? e.charAt(t) : e[t]
    }
    ,
    goog.array.findIndex = function(e, t, o) {
        for (var r = e.length, i = "string" == typeof e ? e.split("") : e, a = 0; a < r; a++)
            if (a in i && t.call(o, i[a], a, e))
                return a;
        return -1
    }
    ,
    goog.array.findRight = function(e, t, o) {
        return 0 > (t = goog.array.findIndexRight(e, t, o)) ? null : "string" == typeof e ? e.charAt(t) : e[t]
    }
    ,
    goog.array.findIndexRight = function(e, t, o) {
        var r = e.length
          , i = "string" == typeof e ? e.split("") : e;
        for (--r; 0 <= r; r--)
            if (r in i && t.call(o, i[r], r, e))
                return r;
        return -1
    }
    ,
    goog.array.contains = function(e, t) {
        return 0 <= goog.array.indexOf(e, t)
    }
    ,
    goog.array.isEmpty = function(e) {
        return 0 == e.length
    }
    ,
    goog.array.clear = function(e) {
        if (!Array.isArray(e))
            for (var t = e.length - 1; 0 <= t; t--)
                delete e[t];
        e.length = 0
    }
    ,
    goog.array.insert = function(e, t) {
        goog.array.contains(e, t) || e.push(t)
    }
    ,
    goog.array.insertAt = function(e, t, o) {
        goog.array.splice(e, o, 0, t)
    }
    ,
    goog.array.insertArrayAt = function(e, t, o) {
        goog.partial(goog.array.splice, e, o, 0).apply(null, t)
    }
    ,
    goog.array.insertBefore = function(e, t, o) {
        var r;
        2 == arguments.length || 0 > (r = goog.array.indexOf(e, o)) ? e.push(t) : goog.array.insertAt(e, t, r)
    }
    ,
    goog.array.remove = function(e, t) {
        var o;
        return (o = 0 <= (t = goog.array.indexOf(e, t))) && goog.array.removeAt(e, t),
        o
    }
    ,
    goog.array.removeLast = function(e, t) {
        return 0 <= (t = goog.array.lastIndexOf(e, t)) && (goog.array.removeAt(e, t),
        !0)
    }
    ,
    goog.array.removeAt = function(e, t) {
        return goog.asserts.assert(null != e.length),
        1 == Array.prototype.splice.call(e, t, 1).length
    }
    ,
    goog.array.removeIf = function(e, t, o) {
        return 0 <= (t = goog.array.findIndex(e, t, o)) && (goog.array.removeAt(e, t),
        !0)
    }
    ,
    goog.array.removeAllIf = function(e, t, o) {
        var r = 0;
        return goog.array.forEachRight(e, (function(i, a) {
            t.call(o, i, a, e) && goog.array.removeAt(e, a) && r++
        }
        )),
        r
    }
    ,
    goog.array.concat = function(e) {
        return Array.prototype.concat.apply([], arguments)
    }
    ,
    goog.array.join = function(e) {
        return Array.prototype.concat.apply([], arguments)
    }
    ,
    goog.array.toArray = function(e) {
        var t = e.length;
        if (0 < t) {
            for (var o = Array(t), r = 0; r < t; r++)
                o[r] = e[r];
            return o
        }
        return []
    }
    ,
    goog.array.clone = goog.array.toArray,
    goog.array.extend = function(e, t) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            if (goog.isArrayLike(r)) {
                var i = e.length || 0
                  , a = r.length || 0;
                e.length = i + a;
                for (var n = 0; n < a; n++)
                    e[i + n] = r[n]
            } else
                e.push(r)
        }
    }
    ,
    goog.array.splice = function(e, t, o, r) {
        return goog.asserts.assert(null != e.length),
        Array.prototype.splice.apply(e, goog.array.slice(arguments, 1))
    }
    ,
    goog.array.slice = function(e, t, o) {
        return goog.asserts.assert(null != e.length),
        2 >= arguments.length ? Array.prototype.slice.call(e, t) : Array.prototype.slice.call(e, t, o)
    }
    ,
    goog.array.removeDuplicates = function(e, t, o) {
        t = t || e;
        var r = function(e) {
            return goog.isObject(e) ? "o" + goog.getUid(e) : (typeof e).charAt(0) + e
        };
        o = o || r,
        r = {};
        for (var i = 0, a = 0; a < e.length; ) {
            var n = e[a++]
              , s = o(n);
            Object.prototype.hasOwnProperty.call(r, s) || (r[s] = !0,
            t[i++] = n)
        }
        t.length = i
    }
    ,
    goog.array.binarySearch = function(e, t, o) {
        return goog.array.binarySearch_(e, o || goog.array.defaultCompare, !1, t)
    }
    ,
    goog.array.binarySelect = function(e, t, o) {
        return goog.array.binarySearch_(e, t, !0, void 0, o)
    }
    ,
    goog.array.binarySearch_ = function(e, t, o, r, i) {
        for (var a, n = 0, s = e.length; n < s; ) {
            var p = n + (s - n >>> 1)
              , g = o ? t.call(i, e[p], p, e) : t(r, e[p]);
            0 < g ? n = p + 1 : (s = p,
            a = !g)
        }
        return a ? n : -n - 1
    }
    ,
    goog.array.sort = function(e, t) {
        e.sort(t || goog.array.defaultCompare)
    }
    ,
    goog.array.stableSort = function(e, t) {
        for (var o = Array(e.length), r = 0; r < e.length; r++)
            o[r] = {
                index: r,
                value: e[r]
            };
        var i = t || goog.array.defaultCompare;
        for (goog.array.sort(o, (function(e, t) {
            return i(e.value, t.value) || e.index - t.index
        }
        )),
        r = 0; r < e.length; r++)
            e[r] = o[r].value
    }
    ,
    goog.array.sortByKey = function(e, t, o) {
        var r = o || goog.array.defaultCompare;
        goog.array.sort(e, (function(e, o) {
            return r(t(e), t(o))
        }
        ))
    }
    ,
    goog.array.sortObjectsByKey = function(e, t, o) {
        goog.array.sortByKey(e, (function(e) {
            return e[t]
        }
        ), o)
    }
    ,
    goog.array.isSorted = function(e, t, o) {
        t = t || goog.array.defaultCompare;
        for (var r = 1; r < e.length; r++) {
            var i = t(e[r - 1], e[r]);
            if (0 < i || 0 == i && o)
                return !1
        }
        return !0
    }
    ,
    goog.array.equals = function(e, t, o) {
        if (!goog.isArrayLike(e) || !goog.isArrayLike(t) || e.length != t.length)
            return !1;
        var r = e.length;
        o = o || goog.array.defaultCompareEquality;
        for (var i = 0; i < r; i++)
            if (!o(e[i], t[i]))
                return !1;
        return !0
    }
    ,
    goog.array.compare3 = function(e, t, o) {
        o = o || goog.array.defaultCompare;
        for (var r = Math.min(e.length, t.length), i = 0; i < r; i++) {
            var a = o(e[i], t[i]);
            if (0 != a)
                return a
        }
        return goog.array.defaultCompare(e.length, t.length)
    }
    ,
    goog.array.defaultCompare = function(e, t) {
        return e > t ? 1 : e < t ? -1 : 0
    }
    ,
    goog.array.inverseDefaultCompare = function(e, t) {
        return -goog.array.defaultCompare(e, t)
    }
    ,
    goog.array.defaultCompareEquality = function(e, t) {
        return e === t
    }
    ,
    goog.array.binaryInsert = function(e, t, o) {
        return 0 > (o = goog.array.binarySearch(e, t, o)) && (goog.array.insertAt(e, t, -(o + 1)),
        !0)
    }
    ,
    goog.array.binaryRemove = function(e, t, o) {
        return 0 <= (t = goog.array.binarySearch(e, t, o)) && goog.array.removeAt(e, t)
    }
    ,
    goog.array.bucket = function(e, t, o) {
        for (var r = {}, i = 0; i < e.length; i++) {
            var a = e[i]
              , n = t.call(o, a, i, e);
            void 0 !== n && (r[n] || (r[n] = [])).push(a)
        }
        return r
    }
    ,
    goog.array.toObject = function(e, t, o) {
        var r = {};
        return goog.array.forEach(e, (function(i, a) {
            r[t.call(o, i, a, e)] = i
        }
        )),
        r
    }
    ,
    goog.array.range = function(e, t, o) {
        var r = []
          , i = 0
          , a = e;
        if (void 0 !== t && (i = e,
        a = t),
        0 > (o = o || 1) * (a - i))
            return [];
        if (0 < o)
            for (e = i; e < a; e += o)
                r.push(e);
        else
            for (e = i; e > a; e += o)
                r.push(e);
        return r
    }
    ,
    goog.array.repeat = function(e, t) {
        for (var o = [], r = 0; r < t; r++)
            o[r] = e;
        return o
    }
    ,
    goog.array.flatten = function(e) {
        for (var t = [], o = 0; o < arguments.length; o++) {
            var r = arguments[o];
            if (Array.isArray(r))
                for (var i = 0; i < r.length; i += 8192) {
                    var a = goog.array.slice(r, i, i + 8192);
                    a = goog.array.flatten.apply(null, a);
                    for (var n = 0; n < a.length; n++)
                        t.push(a[n])
                }
            else
                t.push(r)
        }
        return t
    }
    ,
    goog.array.rotate = function(e, t) {
        return goog.asserts.assert(null != e.length),
        e.length && (0 < (t %= e.length) ? Array.prototype.unshift.apply(e, e.splice(-t, t)) : 0 > t && Array.prototype.push.apply(e, e.splice(0, -t))),
        e
    }
    ,
    goog.array.moveItem = function(e, t, o) {
        goog.asserts.assert(0 <= t && t < e.length),
        goog.asserts.assert(0 <= o && o < e.length),
        t = Array.prototype.splice.call(e, t, 1),
        Array.prototype.splice.call(e, o, 0, t[0])
    }
    ,
    goog.array.zip = function(e) {
        if (!arguments.length)
            return [];
        for (var t = [], o = arguments[0].length, r = 1; r < arguments.length; r++)
            arguments[r].length < o && (o = arguments[r].length);
        for (r = 0; r < o; r++) {
            for (var i = [], a = 0; a < arguments.length; a++)
                i.push(arguments[a][r]);
            t.push(i)
        }
        return t
    }
    ,
    goog.array.shuffle = function(e, t) {
        t = t || Math.random;
        for (var o = e.length - 1; 0 < o; o--) {
            var r = Math.floor(t() * (o + 1))
              , i = e[o];
            e[o] = e[r],
            e[r] = i
        }
    }
    ,
    goog.array.copyByIndex = function(e, t) {
        var o = [];
        return goog.array.forEach(t, (function(t) {
            o.push(e[t])
        }
        )),
        o
    }
    ,
    goog.array.concatMap = function(e, t, o) {
        return goog.array.concat.apply([], goog.array.map(e, t, o))
    }
    ,
    goog.crypt = {},
    goog.crypt.stringToByteArray = function(e) {
        for (var t = [], o = 0, r = 0; r < e.length; r++) {
            var i = e.charCodeAt(r);
            255 < i && (t[o++] = 255 & i,
            i >>= 8),
            t[o++] = i
        }
        return t
    }
    ,
    goog.crypt.byteArrayToString = function(e) {
        if (8192 >= e.length)
            return String.fromCharCode.apply(null, e);
        for (var t = "", o = 0; o < e.length; o += 8192) {
            var r = goog.array.slice(e, o, o + 8192);
            t += String.fromCharCode.apply(null, r)
        }
        return t
    }
    ,
    goog.crypt.byteArrayToHex = function(e, t) {
        return goog.array.map(e, (function(e) {
            return 1 < (e = e.toString(16)).length ? e : "0" + e
        }
        )).join(t || "")
    }
    ,
    goog.crypt.hexToByteArray = function(e) {
        goog.asserts.assert(0 == e.length % 2, "Key string length must be multiple of 2");
        for (var t = [], o = 0; o < e.length; o += 2)
            t.push(parseInt(e.substring(o, o + 2), 16));
        return t
    }
    ,
    goog.crypt.stringToUtf8ByteArray = function(e) {
        for (var t = [], o = 0, r = 0; r < e.length; r++) {
            var i = e.charCodeAt(r);
            128 > i ? t[o++] = i : (2048 > i ? t[o++] = i >> 6 | 192 : (55296 == (64512 & i) && r + 1 < e.length && 56320 == (64512 & e.charCodeAt(r + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r)),
            t[o++] = i >> 18 | 240,
            t[o++] = i >> 12 & 63 | 128) : t[o++] = i >> 12 | 224,
            t[o++] = i >> 6 & 63 | 128),
            t[o++] = 63 & i | 128)
        }
        return t
    }
    ,
    goog.crypt.utf8ByteArrayToString = function(e) {
        for (var t = [], o = 0, r = 0; o < e.length; ) {
            var i = e[o++];
            if (128 > i)
                t[r++] = String.fromCharCode(i);
            else if (191 < i && 224 > i) {
                var a = e[o++];
                t[r++] = String.fromCharCode((31 & i) << 6 | 63 & a)
            } else if (239 < i && 365 > i) {
                a = e[o++];
                var n = e[o++];
                i = ((7 & i) << 18 | (63 & a) << 12 | (63 & n) << 6 | 63 & e[o++]) - 65536,
                t[r++] = String.fromCharCode(55296 + (i >> 10)),
                t[r++] = String.fromCharCode(56320 + (1023 & i))
            } else
                a = e[o++],
                n = e[o++],
                t[r++] = String.fromCharCode((15 & i) << 12 | (63 & a) << 6 | 63 & n)
        }
        return t.join("")
    }
    ,
    goog.crypt.xorByteArray = function(e, t) {
        goog.asserts.assert(e.length == t.length, "XOR array lengths must match");
        for (var o = [], r = 0; r < e.length; r++)
            o.push(e[r] ^ t[r]);
        return o
    }
    ,
    goog.dom.asserts = {},
    goog.dom.asserts.assertIsLocation = function(e) {
        if (goog.asserts.ENABLE_ASSERTS) {
            var t = goog.dom.asserts.getWindow_(e);
            t && (!e || !(e instanceof t.Location) && e instanceof t.Element) && goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_(e))
        }
        return e
    }
    ,
    goog.dom.asserts.assertIsElementType_ = function(e, t) {
        if (goog.asserts.ENABLE_ASSERTS) {
            var o = goog.dom.asserts.getWindow_(e);
            o && void 0 !== o[t] && (e && (e instanceof o[t] || !(e instanceof o.Location || e instanceof o.Element)) || goog.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); got: %s", t, goog.dom.asserts.debugStringForType_(e)))
        }
        return e
    }
    ,
    goog.dom.asserts.assertIsHTMLAnchorElement = function(e) {
        return goog.dom.asserts.assertIsElementType_(e, "HTMLAnchorElement")
    }
    ,
    goog.dom.asserts.assertIsHTMLButtonElement = function(e) {
        return goog.dom.asserts.assertIsElementType_(e, "HTMLButtonElement")
    }
    ,
    goog.dom.asserts.assertIsHTMLLinkElement = function(e) {
        return goog.dom.asserts.assertIsElementType_(e, "HTMLLinkElement")
    }
    ,
    goog.dom.asserts.assertIsHTMLImageElement = function(e) {
        return goog.dom.asserts.assertIsElementType_(e, "HTMLImageElement")
    }
    ,
    goog.dom.asserts.assertIsHTMLAudioElement = function(e) {
        return goog.dom.asserts.assertIsElementType_(e, "HTMLAudioElement")
    }
    ,
    goog.dom.asserts.assertIsHTMLVideoElement = function(e) {
        return goog.dom.asserts.assertIsElementType_(e, "HTMLVideoElement")
    }
    ,
    goog.dom.asserts.assertIsHTMLInputElement = function(e) {
        return goog.dom.asserts.assertIsElementType_(e, "HTMLInputElement")
    }
    ,
    goog.dom.asserts.assertIsHTMLTextAreaElement = function(e) {
        return goog.dom.asserts.assertIsElementType_(e, "HTMLTextAreaElement")
    }
    ,
    goog.dom.asserts.assertIsHTMLCanvasElement = function(e) {
        return goog.dom.asserts.assertIsElementType_(e, "HTMLCanvasElement")
    }
    ,
    goog.dom.asserts.assertIsHTMLEmbedElement = function(e) {
        return goog.dom.asserts.assertIsElementType_(e, "HTMLEmbedElement")
    }
    ,
    goog.dom.asserts.assertIsHTMLFormElement = function(e) {
        return goog.dom.asserts.assertIsElementType_(e, "HTMLFormElement")
    }
    ,
    goog.dom.asserts.assertIsHTMLFrameElement = function(e) {
        return goog.dom.asserts.assertIsElementType_(e, "HTMLFrameElement")
    }
    ,
    goog.dom.asserts.assertIsHTMLIFrameElement = function(e) {
        return goog.dom.asserts.assertIsElementType_(e, "HTMLIFrameElement")
    }
    ,
    goog.dom.asserts.assertIsHTMLObjectElement = function(e) {
        return goog.dom.asserts.assertIsElementType_(e, "HTMLObjectElement")
    }
    ,
    goog.dom.asserts.assertIsHTMLScriptElement = function(e) {
        return goog.dom.asserts.assertIsElementType_(e, "HTMLScriptElement")
    }
    ,
    goog.dom.asserts.debugStringForType_ = function(e) {
        if (!goog.isObject(e))
            return void 0 === e ? "undefined" : null === e ? "null" : typeof e;
        try {
            return e.constructor.displayName || e.constructor.name || Object.prototype.toString.call(e)
        } catch (e) {
            return "<object could not be stringified>"
        }
    }
    ,
    goog.dom.asserts.getWindow_ = function(e) {
        try {
            var t = e && e.ownerDocument
              , o = t && (t.defaultView || t.parentWindow);
            if ((o = o || goog.global).Element && o.Location)
                return o
        } catch (e) {}
        return null
    }
    ,
    goog.functions = {},
    goog.functions.constant = function(e) {
        return function() {
            return e
        }
    }
    ,
    goog.functions.FALSE = function() {
        return !1
    }
    ,
    goog.functions.TRUE = function() {
        return !0
    }
    ,
    goog.functions.NULL = function() {
        return null
    }
    ,
    goog.functions.identity = function(e, t) {
        return e
    }
    ,
    goog.functions.error = function(e) {
        return function() {
            throw Error(e)
        }
    }
    ,
    goog.functions.fail = function(e) {
        return function() {
            throw e
        }
    }
    ,
    goog.functions.lock = function(e, t) {
        return t = t || 0,
        function() {
            return e.apply(this, Array.prototype.slice.call(arguments, 0, t))
        }
    }
    ,
    goog.functions.nth = function(e) {
        return function() {
            return arguments[e]
        }
    }
    ,
    goog.functions.partialRight = function(e, t) {
        var o = Array.prototype.slice.call(arguments, 1);
        return function() {
            var t = Array.prototype.slice.call(arguments);
            return t.push.apply(t, o),
            e.apply(this, t)
        }
    }
    ,
    goog.functions.withReturnValue = function(e, t) {
        return goog.functions.sequence(e, goog.functions.constant(t))
    }
    ,
    goog.functions.equalTo = function(e, t) {
        return function(o) {
            return t ? e == o : e === o
        }
    }
    ,
    goog.functions.compose = function(e, t) {
        var o = arguments
          , r = o.length;
        return function() {
            var e;
            r && (e = o[r - 1].apply(this, arguments));
            for (var t = r - 2; 0 <= t; t--)
                e = o[t].call(this, e);
            return e
        }
    }
    ,
    goog.functions.sequence = function(e) {
        var t = arguments
          , o = t.length;
        return function() {
            for (var e, r = 0; r < o; r++)
                e = t[r].apply(this, arguments);
            return e
        }
    }
    ,
    goog.functions.and = function(e) {
        var t = arguments
          , o = t.length;
        return function() {
            for (var e = 0; e < o; e++)
                if (!t[e].apply(this, arguments))
                    return !1;
            return !0
        }
    }
    ,
    goog.functions.or = function(e) {
        var t = arguments
          , o = t.length;
        return function() {
            for (var e = 0; e < o; e++)
                if (t[e].apply(this, arguments))
                    return !0;
            return !1
        }
    }
    ,
    goog.functions.not = function(e) {
        return function() {
            return !e.apply(this, arguments)
        }
    }
    ,
    goog.functions.create = function(e, t) {
        var o = function() {};
        return o.prototype = e.prototype,
        o = new o,
        e.apply(o, Array.prototype.slice.call(arguments, 1)),
        o
    }
    ,
    goog.functions.CACHE_RETURN_VALUE = !0,
    goog.functions.cacheReturnValue = function(e) {
        var t, o = !1;
        return function() {
            return goog.functions.CACHE_RETURN_VALUE ? (o || (t = e(),
            o = !0),
            t) : e()
        }
    }
    ,
    goog.functions.once = function(e) {
        var t = e;
        return function() {
            if (t) {
                var e = t;
                t = null,
                e()
            }
        }
    }
    ,
    goog.functions.debounce = function(e, t, o) {
        var r = 0;
        return function(i) {
            goog.global.clearTimeout(r);
            var a = arguments;
            r = goog.global.setTimeout((function() {
                e.apply(o, a)
            }
            ), t)
        }
    }
    ,
    goog.functions.throttle = function(e, t, o) {
        var r = 0
          , i = !1
          , a = []
          , n = function() {
            r = 0,
            i && (i = !1,
            s())
        }
          , s = function() {
            r = goog.global.setTimeout(n, t),
            e.apply(o, a)
        };
        return function(e) {
            a = arguments,
            r ? i = !0 : s()
        }
    }
    ,
    goog.functions.rateLimit = function(e, t, o) {
        var r = 0
          , i = function() {
            r = 0
        };
        return function(a) {
            r || (r = goog.global.setTimeout(i, t),
            e.apply(o, arguments))
        }
    }
    ,
    goog.dom.HtmlElement = function() {}
    ,
    goog.dom.TagName = function(e) {
        this.tagName_ = e
    }
    ,
    goog.dom.TagName.prototype.toString = function() {
        return this.tagName_
    }
    ,
    goog.dom.TagName.A = new goog.dom.TagName("A"),
    goog.dom.TagName.ABBR = new goog.dom.TagName("ABBR"),
    goog.dom.TagName.ACRONYM = new goog.dom.TagName("ACRONYM"),
    goog.dom.TagName.ADDRESS = new goog.dom.TagName("ADDRESS"),
    goog.dom.TagName.APPLET = new goog.dom.TagName("APPLET"),
    goog.dom.TagName.AREA = new goog.dom.TagName("AREA"),
    goog.dom.TagName.ARTICLE = new goog.dom.TagName("ARTICLE"),
    goog.dom.TagName.ASIDE = new goog.dom.TagName("ASIDE"),
    goog.dom.TagName.AUDIO = new goog.dom.TagName("AUDIO"),
    goog.dom.TagName.B = new goog.dom.TagName("B"),
    goog.dom.TagName.BASE = new goog.dom.TagName("BASE"),
    goog.dom.TagName.BASEFONT = new goog.dom.TagName("BASEFONT"),
    goog.dom.TagName.BDI = new goog.dom.TagName("BDI"),
    goog.dom.TagName.BDO = new goog.dom.TagName("BDO"),
    goog.dom.TagName.BIG = new goog.dom.TagName("BIG"),
    goog.dom.TagName.BLOCKQUOTE = new goog.dom.TagName("BLOCKQUOTE"),
    goog.dom.TagName.BODY = new goog.dom.TagName("BODY"),
    goog.dom.TagName.BR = new goog.dom.TagName("BR"),
    goog.dom.TagName.BUTTON = new goog.dom.TagName("BUTTON"),
    goog.dom.TagName.CANVAS = new goog.dom.TagName("CANVAS"),
    goog.dom.TagName.CAPTION = new goog.dom.TagName("CAPTION"),
    goog.dom.TagName.CENTER = new goog.dom.TagName("CENTER"),
    goog.dom.TagName.CITE = new goog.dom.TagName("CITE"),
    goog.dom.TagName.CODE = new goog.dom.TagName("CODE"),
    goog.dom.TagName.COL = new goog.dom.TagName("COL"),
    goog.dom.TagName.COLGROUP = new goog.dom.TagName("COLGROUP"),
    goog.dom.TagName.COMMAND = new goog.dom.TagName("COMMAND"),
    goog.dom.TagName.DATA = new goog.dom.TagName("DATA"),
    goog.dom.TagName.DATALIST = new goog.dom.TagName("DATALIST"),
    goog.dom.TagName.DD = new goog.dom.TagName("DD"),
    goog.dom.TagName.DEL = new goog.dom.TagName("DEL"),
    goog.dom.TagName.DETAILS = new goog.dom.TagName("DETAILS"),
    goog.dom.TagName.DFN = new goog.dom.TagName("DFN"),
    goog.dom.TagName.DIALOG = new goog.dom.TagName("DIALOG"),
    goog.dom.TagName.DIR = new goog.dom.TagName("DIR"),
    goog.dom.TagName.DIV = new goog.dom.TagName("DIV"),
    goog.dom.TagName.DL = new goog.dom.TagName("DL"),
    goog.dom.TagName.DT = new goog.dom.TagName("DT"),
    goog.dom.TagName.EM = new goog.dom.TagName("EM"),
    goog.dom.TagName.EMBED = new goog.dom.TagName("EMBED"),
    goog.dom.TagName.FIELDSET = new goog.dom.TagName("FIELDSET"),
    goog.dom.TagName.FIGCAPTION = new goog.dom.TagName("FIGCAPTION"),
    goog.dom.TagName.FIGURE = new goog.dom.TagName("FIGURE"),
    goog.dom.TagName.FONT = new goog.dom.TagName("FONT"),
    goog.dom.TagName.FOOTER = new goog.dom.TagName("FOOTER"),
    goog.dom.TagName.FORM = new goog.dom.TagName("FORM"),
    goog.dom.TagName.FRAME = new goog.dom.TagName("FRAME"),
    goog.dom.TagName.FRAMESET = new goog.dom.TagName("FRAMESET"),
    goog.dom.TagName.H1 = new goog.dom.TagName("H1"),
    goog.dom.TagName.H2 = new goog.dom.TagName("H2"),
    goog.dom.TagName.H3 = new goog.dom.TagName("H3"),
    goog.dom.TagName.H4 = new goog.dom.TagName("H4"),
    goog.dom.TagName.H5 = new goog.dom.TagName("H5"),
    goog.dom.TagName.H6 = new goog.dom.TagName("H6"),
    goog.dom.TagName.HEAD = new goog.dom.TagName("HEAD"),
    goog.dom.TagName.HEADER = new goog.dom.TagName("HEADER"),
    goog.dom.TagName.HGROUP = new goog.dom.TagName("HGROUP"),
    goog.dom.TagName.HR = new goog.dom.TagName("HR"),
    goog.dom.TagName.HTML = new goog.dom.TagName("HTML"),
    goog.dom.TagName.I = new goog.dom.TagName("I"),
    goog.dom.TagName.IFRAME = new goog.dom.TagName("IFRAME"),
    goog.dom.TagName.IMG = new goog.dom.TagName("IMG"),
    goog.dom.TagName.INPUT = new goog.dom.TagName("INPUT"),
    goog.dom.TagName.INS = new goog.dom.TagName("INS"),
    goog.dom.TagName.ISINDEX = new goog.dom.TagName("ISINDEX"),
    goog.dom.TagName.KBD = new goog.dom.TagName("KBD"),
    goog.dom.TagName.KEYGEN = new goog.dom.TagName("KEYGEN"),
    goog.dom.TagName.LABEL = new goog.dom.TagName("LABEL"),
    goog.dom.TagName.LEGEND = new goog.dom.TagName("LEGEND"),
    goog.dom.TagName.LI = new goog.dom.TagName("LI"),
    goog.dom.TagName.LINK = new goog.dom.TagName("LINK"),
    goog.dom.TagName.MAIN = new goog.dom.TagName("MAIN"),
    goog.dom.TagName.MAP = new goog.dom.TagName("MAP"),
    goog.dom.TagName.MARK = new goog.dom.TagName("MARK"),
    goog.dom.TagName.MATH = new goog.dom.TagName("MATH"),
    goog.dom.TagName.MENU = new goog.dom.TagName("MENU"),
    goog.dom.TagName.MENUITEM = new goog.dom.TagName("MENUITEM"),
    goog.dom.TagName.META = new goog.dom.TagName("META"),
    goog.dom.TagName.METER = new goog.dom.TagName("METER"),
    goog.dom.TagName.NAV = new goog.dom.TagName("NAV"),
    goog.dom.TagName.NOFRAMES = new goog.dom.TagName("NOFRAMES"),
    goog.dom.TagName.NOSCRIPT = new goog.dom.TagName("NOSCRIPT"),
    goog.dom.TagName.OBJECT = new goog.dom.TagName("OBJECT"),
    goog.dom.TagName.OL = new goog.dom.TagName("OL"),
    goog.dom.TagName.OPTGROUP = new goog.dom.TagName("OPTGROUP"),
    goog.dom.TagName.OPTION = new goog.dom.TagName("OPTION"),
    goog.dom.TagName.OUTPUT = new goog.dom.TagName("OUTPUT"),
    goog.dom.TagName.P = new goog.dom.TagName("P"),
    goog.dom.TagName.PARAM = new goog.dom.TagName("PARAM"),
    goog.dom.TagName.PICTURE = new goog.dom.TagName("PICTURE"),
    goog.dom.TagName.PRE = new goog.dom.TagName("PRE"),
    goog.dom.TagName.PROGRESS = new goog.dom.TagName("PROGRESS"),
    goog.dom.TagName.Q = new goog.dom.TagName("Q"),
    goog.dom.TagName.RP = new goog.dom.TagName("RP"),
    goog.dom.TagName.RT = new goog.dom.TagName("RT"),
    goog.dom.TagName.RTC = new goog.dom.TagName("RTC"),
    goog.dom.TagName.RUBY = new goog.dom.TagName("RUBY"),
    goog.dom.TagName.S = new goog.dom.TagName("S"),
    goog.dom.TagName.SAMP = new goog.dom.TagName("SAMP"),
    goog.dom.TagName.SCRIPT = new goog.dom.TagName("SCRIPT"),
    goog.dom.TagName.SECTION = new goog.dom.TagName("SECTION"),
    goog.dom.TagName.SELECT = new goog.dom.TagName("SELECT"),
    goog.dom.TagName.SMALL = new goog.dom.TagName("SMALL"),
    goog.dom.TagName.SOURCE = new goog.dom.TagName("SOURCE"),
    goog.dom.TagName.SPAN = new goog.dom.TagName("SPAN"),
    goog.dom.TagName.STRIKE = new goog.dom.TagName("STRIKE"),
    goog.dom.TagName.STRONG = new goog.dom.TagName("STRONG"),
    goog.dom.TagName.STYLE = new goog.dom.TagName("STYLE"),
    goog.dom.TagName.SUB = new goog.dom.TagName("SUB"),
    goog.dom.TagName.SUMMARY = new goog.dom.TagName("SUMMARY"),
    goog.dom.TagName.SUP = new goog.dom.TagName("SUP"),
    goog.dom.TagName.SVG = new goog.dom.TagName("SVG"),
    goog.dom.TagName.TABLE = new goog.dom.TagName("TABLE"),
    goog.dom.TagName.TBODY = new goog.dom.TagName("TBODY"),
    goog.dom.TagName.TD = new goog.dom.TagName("TD"),
    goog.dom.TagName.TEMPLATE = new goog.dom.TagName("TEMPLATE"),
    goog.dom.TagName.TEXTAREA = new goog.dom.TagName("TEXTAREA"),
    goog.dom.TagName.TFOOT = new goog.dom.TagName("TFOOT"),
    goog.dom.TagName.TH = new goog.dom.TagName("TH"),
    goog.dom.TagName.THEAD = new goog.dom.TagName("THEAD"),
    goog.dom.TagName.TIME = new goog.dom.TagName("TIME"),
    goog.dom.TagName.TITLE = new goog.dom.TagName("TITLE"),
    goog.dom.TagName.TR = new goog.dom.TagName("TR"),
    goog.dom.TagName.TRACK = new goog.dom.TagName("TRACK"),
    goog.dom.TagName.TT = new goog.dom.TagName("TT"),
    goog.dom.TagName.U = new goog.dom.TagName("U"),
    goog.dom.TagName.UL = new goog.dom.TagName("UL"),
    goog.dom.TagName.VAR = new goog.dom.TagName("VAR"),
    goog.dom.TagName.VIDEO = new goog.dom.TagName("VIDEO"),
    goog.dom.TagName.WBR = new goog.dom.TagName("WBR"),
    goog.dom.tags = {},
    goog.dom.tags.VOID_TAGS_ = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    },
    goog.dom.tags.isVoidTag = function(e) {
        return !0 === goog.dom.tags.VOID_TAGS_[e]
    }
    ,
    goog.html = {},
    goog.html.trustedtypes = {},
    goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#html") : null,
    goog.string = {},
    goog.string.TypedString = function() {}
    ,
    goog.string.Const = function(e, t) {
        this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = e === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && t || "",
        this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_
    }
    ,
    goog.string.Const.prototype.implementsGoogStringTypedString = !0,
    goog.string.Const.prototype.getTypedStringValue = function() {
        return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_
    }
    ,
    goog.DEBUG && (goog.string.Const.prototype.toString = function() {
        return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}"
    }
    ),
    goog.string.Const.unwrap = function(e) {
        return e instanceof goog.string.Const && e.constructor === goog.string.Const && e.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_ ? e.stringConstValueWithSecurityContract__googStringSecurityPrivate_ : (goog.asserts.fail("expected object of type Const, got '" + e + "'"),
        "type_error:Const")
    }
    ,
    goog.string.Const.from = function(e) {
        return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_,e)
    }
    ,
    goog.string.Const.TYPE_MARKER_ = {},
    goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {},
    goog.string.Const.EMPTY = goog.string.Const.from(""),
    goog.html.SafeScript = function() {
        this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = "",
        this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
    }
    ,
    goog.html.SafeScript.prototype.implementsGoogStringTypedString = !0,
    goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {},
    goog.html.SafeScript.fromConstant = function(e) {
        return 0 === (e = goog.string.Const.unwrap(e)).length ? goog.html.SafeScript.EMPTY : goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(e)
    }
    ,
    goog.html.SafeScript.fromConstantAndArgs = function(e, t) {
        for (var o = [], r = 1; r < arguments.length; r++)
            o.push(goog.html.SafeScript.stringify_(arguments[r]));
        return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("(" + goog.string.Const.unwrap(e) + ")(" + o.join(", ") + ");")
    }
    ,
    goog.html.SafeScript.fromJson = function(e) {
        return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(goog.html.SafeScript.stringify_(e))
    }
    ,
    goog.html.SafeScript.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString()
    }
    ,
    goog.DEBUG && (goog.html.SafeScript.prototype.toString = function() {
        return "SafeScript{" + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + "}"
    }
    ),
    goog.html.SafeScript.unwrap = function(e) {
        return goog.html.SafeScript.unwrapTrustedScript(e).toString()
    }
    ,
    goog.html.SafeScript.unwrapTrustedScript = function(e) {
        return e instanceof goog.html.SafeScript && e.constructor === goog.html.SafeScript && e.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeScriptWrappedValue_ : (goog.asserts.fail("expected object of type SafeScript, got '" + e + "' of type " + goog.typeOf(e)),
        "type_error:SafeScript")
    }
    ,
    goog.html.SafeScript.stringify_ = function(e) {
        return JSON.stringify(e).replace(/</g, "\\x3c")
    }
    ,
    goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function(e) {
        return (new goog.html.SafeScript).initSecurityPrivateDoNotAccessOrElse_(e)
    }
    ,
    goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(e) {
        return this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(e) : e,
        this
    }
    ,
    goog.html.SafeScript.EMPTY = goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(""),
    goog.fs = {},
    goog.fs.url = {},
    goog.fs.url.createObjectUrl = function(e) {
        return goog.fs.url.getUrlObject_().createObjectURL(e)
    }
    ,
    goog.fs.url.revokeObjectUrl = function(e) {
        goog.fs.url.getUrlObject_().revokeObjectURL(e)
    }
    ,
    goog.fs.url.UrlObject_ = function() {}
    ,
    goog.fs.url.UrlObject_.prototype.createObjectURL = function(e) {}
    ,
    goog.fs.url.UrlObject_.prototype.revokeObjectURL = function(e) {}
    ,
    goog.fs.url.getUrlObject_ = function() {
        var e = goog.fs.url.findUrlObject_();
        if (null != e)
            return e;
        throw Error("This browser doesn't seem to support blob URLs")
    }
    ,
    goog.fs.url.findUrlObject_ = function() {
        return void 0 !== goog.global.URL && void 0 !== goog.global.URL.createObjectURL ? goog.global.URL : void 0 !== goog.global.webkitURL && void 0 !== goog.global.webkitURL.createObjectURL ? goog.global.webkitURL : void 0 !== goog.global.createObjectURL ? goog.global : null
    }
    ,
    goog.fs.url.browserSupportsObjectUrls = function() {
        return null != goog.fs.url.findUrlObject_()
    }
    ,
    goog.fs.blob = {},
    goog.fs.blob.getBlob = function(e) {
        var t = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
        if (void 0 !== t) {
            t = new t;
            for (var o = 0; o < arguments.length; o++)
                t.append(arguments[o]);
            return t.getBlob()
        }
        return goog.fs.blob.getBlobWithProperties(goog.array.toArray(arguments))
    }
    ,
    goog.fs.blob.getBlobWithProperties = function(e, t, o) {
        var r = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
        if (void 0 !== r) {
            r = new r;
            for (var i = 0; i < e.length; i++)
                r.append(e[i], o);
            return r.getBlob(t)
        }
        if (void 0 !== goog.global.Blob)
            return r = {},
            t && (r.type = t),
            o && (r.endings = o),
            new Blob(e,r);
        throw Error("This browser doesn't seem to support creating Blobs")
    }
    ,
    goog.i18n = {},
    goog.i18n.bidi = {},
    goog.i18n.bidi.FORCE_RTL = !1,
    goog.i18n.bidi.IS_RTL = goog.i18n.bidi.FORCE_RTL || ("ar" == goog.LOCALE.substring(0, 2).toLowerCase() || "fa" == goog.LOCALE.substring(0, 2).toLowerCase() || "he" == goog.LOCALE.substring(0, 2).toLowerCase() || "iw" == goog.LOCALE.substring(0, 2).toLowerCase() || "ps" == goog.LOCALE.substring(0, 2).toLowerCase() || "sd" == goog.LOCALE.substring(0, 2).toLowerCase() || "ug" == goog.LOCALE.substring(0, 2).toLowerCase() || "ur" == goog.LOCALE.substring(0, 2).toLowerCase() || "yi" == goog.LOCALE.substring(0, 2).toLowerCase()) && (2 == goog.LOCALE.length || "-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) || 3 <= goog.LOCALE.length && "ckb" == goog.LOCALE.substring(0, 3).toLowerCase() && (3 == goog.LOCALE.length || "-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)) || 7 <= goog.LOCALE.length && ("-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) && ("adlm" == goog.LOCALE.substring(3, 7).toLowerCase() || "arab" == goog.LOCALE.substring(3, 7).toLowerCase() || "hebr" == goog.LOCALE.substring(3, 7).toLowerCase() || "nkoo" == goog.LOCALE.substring(3, 7).toLowerCase() || "rohg" == goog.LOCALE.substring(3, 7).toLowerCase() || "thaa" == goog.LOCALE.substring(3, 7).toLowerCase()) || 8 <= goog.LOCALE.length && ("-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)) && ("adlm" == goog.LOCALE.substring(4, 8).toLowerCase() || "arab" == goog.LOCALE.substring(4, 8).toLowerCase() || "hebr" == goog.LOCALE.substring(4, 8).toLowerCase() || "nkoo" == goog.LOCALE.substring(4, 8).toLowerCase() || "rohg" == goog.LOCALE.substring(4, 8).toLowerCase() || "thaa" == goog.LOCALE.substring(4, 8).toLowerCase()),
    goog.i18n.bidi.Format = {
        LRE: "‪",
        RLE: "‫",
        PDF: "‬",
        LRM: "‎",
        RLM: "‏"
    },
    goog.i18n.bidi.Dir = {
        LTR: 1,
        RTL: -1,
        NEUTRAL: 0
    },
    goog.i18n.bidi.RIGHT = "right",
    goog.i18n.bidi.LEFT = "left",
    goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT,
    goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT,
    goog.i18n.bidi.toDir = function(e, t) {
        return "number" == typeof e ? 0 < e ? goog.i18n.bidi.Dir.LTR : 0 > e ? goog.i18n.bidi.Dir.RTL : t ? null : goog.i18n.bidi.Dir.NEUTRAL : null == e ? null : e ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR
    }
    ,
    goog.i18n.bidi.ltrChars_ = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ऀ-῿‎Ⰰ-\ud801\ud804-\ud839\ud83c-\udbff豈-﬜︀-﹯﻽-￿",
    goog.i18n.bidi.rtlChars_ = "֑-ۯۺ-ࣿ‏\ud802-\ud803\ud83a-\ud83bיִ-﷿ﹰ-ﻼ",
    goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g,
    goog.i18n.bidi.stripHtmlIfNeeded_ = function(e, t) {
        return t ? e.replace(goog.i18n.bidi.htmlSkipReg_, "") : e
    }
    ,
    goog.i18n.bidi.rtlCharReg_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]"),
    goog.i18n.bidi.ltrCharReg_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]"),
    goog.i18n.bidi.hasAnyRtl = function(e, t) {
        return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
    }
    ,
    goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl,
    goog.i18n.bidi.hasAnyLtr = function(e, t) {
        return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
    }
    ,
    goog.i18n.bidi.ltrRe_ = new RegExp("^[" + goog.i18n.bidi.ltrChars_ + "]"),
    goog.i18n.bidi.rtlRe_ = new RegExp("^[" + goog.i18n.bidi.rtlChars_ + "]"),
    goog.i18n.bidi.isRtlChar = function(e) {
        return goog.i18n.bidi.rtlRe_.test(e)
    }
    ,
    goog.i18n.bidi.isLtrChar = function(e) {
        return goog.i18n.bidi.ltrRe_.test(e)
    }
    ,
    goog.i18n.bidi.isNeutralChar = function(e) {
        return !goog.i18n.bidi.isLtrChar(e) && !goog.i18n.bidi.isRtlChar(e)
    }
    ,
    goog.i18n.bidi.ltrDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.rtlChars_ + "]*[" + goog.i18n.bidi.ltrChars_ + "]"),
    goog.i18n.bidi.rtlDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.ltrChars_ + "]*[" + goog.i18n.bidi.rtlChars_ + "]"),
    goog.i18n.bidi.startsWithRtl = function(e, t) {
        return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
    }
    ,
    goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl,
    goog.i18n.bidi.startsWithLtr = function(e, t) {
        return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
    }
    ,
    goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr,
    goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/,
    goog.i18n.bidi.isNeutralText = function(e, t) {
        return e = goog.i18n.bidi.stripHtmlIfNeeded_(e, t),
        goog.i18n.bidi.isRequiredLtrRe_.test(e) || !goog.i18n.bidi.hasAnyLtr(e) && !goog.i18n.bidi.hasAnyRtl(e)
    }
    ,
    goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "][^" + goog.i18n.bidi.rtlChars_ + "]*$"),
    goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "][^" + goog.i18n.bidi.ltrChars_ + "]*$"),
    goog.i18n.bidi.endsWithLtr = function(e, t) {
        return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
    }
    ,
    goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr,
    goog.i18n.bidi.endsWithRtl = function(e, t) {
        return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
    }
    ,
    goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl,
    goog.i18n.bidi.rtlLocalesRe_ = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i,
    goog.i18n.bidi.isRtlLanguage = function(e) {
        return goog.i18n.bidi.rtlLocalesRe_.test(e)
    }
    ,
    goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g,
    goog.i18n.bidi.guardBracketInText = function(e, t) {
        return t = (void 0 === t ? goog.i18n.bidi.hasAnyRtl(e) : t) ? goog.i18n.bidi.Format.RLM : goog.i18n.bidi.Format.LRM,
        e.replace(goog.i18n.bidi.bracketGuardTextRe_, t + "$&" + t)
    }
    ,
    goog.i18n.bidi.enforceRtlInHtml = function(e) {
        return "<" == e.charAt(0) ? e.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + e + "</span>"
    }
    ,
    goog.i18n.bidi.enforceRtlInText = function(e) {
        return goog.i18n.bidi.Format.RLE + e + goog.i18n.bidi.Format.PDF
    }
    ,
    goog.i18n.bidi.enforceLtrInHtml = function(e) {
        return "<" == e.charAt(0) ? e.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + e + "</span>"
    }
    ,
    goog.i18n.bidi.enforceLtrInText = function(e) {
        return goog.i18n.bidi.Format.LRE + e + goog.i18n.bidi.Format.PDF
    }
    ,
    goog.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g,
    goog.i18n.bidi.leftRe_ = /left/gi,
    goog.i18n.bidi.rightRe_ = /right/gi,
    goog.i18n.bidi.tempRe_ = /%%%%/g,
    goog.i18n.bidi.mirrorCSS = function(e) {
        return e.replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_, "%%%%").replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT)
    }
    ,
    goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g,
    goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g,
    goog.i18n.bidi.normalizeHebrewQuote = function(e) {
        return e.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1״").replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1׳")
    }
    ,
    goog.i18n.bidi.wordSeparatorRe_ = /\s+/,
    goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/,
    goog.i18n.bidi.rtlDetectionThreshold_ = .4,
    goog.i18n.bidi.estimateDirection = function(e, t) {
        var o = 0
          , r = 0
          , i = !1;
        for (e = goog.i18n.bidi.stripHtmlIfNeeded_(e, t).split(goog.i18n.bidi.wordSeparatorRe_),
        t = 0; t < e.length; t++) {
            var a = e[t];
            goog.i18n.bidi.startsWithRtl(a) ? (o++,
            r++) : goog.i18n.bidi.isRequiredLtrRe_.test(a) ? i = !0 : goog.i18n.bidi.hasAnyLtr(a) ? r++ : goog.i18n.bidi.hasNumeralsRe_.test(a) && (i = !0)
        }
        return 0 == r ? i ? goog.i18n.bidi.Dir.LTR : goog.i18n.bidi.Dir.NEUTRAL : o / r > goog.i18n.bidi.rtlDetectionThreshold_ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR
    }
    ,
    goog.i18n.bidi.detectRtlDirectionality = function(e, t) {
        return goog.i18n.bidi.estimateDirection(e, t) == goog.i18n.bidi.Dir.RTL
    }
    ,
    goog.i18n.bidi.setElementDirAndAlign = function(e, t) {
        e && (t = goog.i18n.bidi.toDir(t)) && (e.style.textAlign = t == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT,
        e.dir = t == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr")
    }
    ,
    goog.i18n.bidi.setElementDirByTextDirectionality = function(e, t) {
        switch (goog.i18n.bidi.estimateDirection(t)) {
        case goog.i18n.bidi.Dir.LTR:
            e.dir = "ltr";
            break;
        case goog.i18n.bidi.Dir.RTL:
            e.dir = "rtl";
            break;
        default:
            e.removeAttribute("dir")
        }
    }
    ,
    goog.i18n.bidi.DirectionalString = function() {}
    ,
    goog.html.TrustedResourceUrl = function(e, t) {
        this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = e === goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && t || "",
        this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
    }
    ,
    goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = !0,
    goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString()
    }
    ,
    goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = !0,
    goog.html.TrustedResourceUrl.prototype.getDirection = function() {
        return goog.i18n.bidi.Dir.LTR
    }
    ,
    goog.html.TrustedResourceUrl.prototype.cloneWithParams = function(e, t) {
        var o = goog.html.TrustedResourceUrl.unwrap(this)
          , r = (o = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(o))[3] || "";
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(o[1] + goog.html.TrustedResourceUrl.stringifyParams_("?", o[2] || "", e) + goog.html.TrustedResourceUrl.stringifyParams_("#", r, t))
    }
    ,
    goog.DEBUG && (goog.html.TrustedResourceUrl.prototype.toString = function() {
        return "TrustedResourceUrl{" + this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "}"
    }
    ),
    goog.html.TrustedResourceUrl.unwrap = function(e) {
        return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(e).toString()
    }
    ,
    goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function(e) {
        return e instanceof goog.html.TrustedResourceUrl && e.constructor === goog.html.TrustedResourceUrl && e.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ : (goog.asserts.fail("expected object of type TrustedResourceUrl, got '" + e + "' of type " + goog.typeOf(e)),
        "type_error:TrustedResourceUrl")
    }
    ,
    goog.html.TrustedResourceUrl.format = function(e, t) {
        var o = goog.string.Const.unwrap(e);
        if (!goog.html.TrustedResourceUrl.BASE_URL_.test(o))
            throw Error("Invalid TrustedResourceUrl format: " + o);
        return e = o.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_, (function(e, r) {
            if (!Object.prototype.hasOwnProperty.call(t, r))
                throw Error('Found marker, "' + r + '", in format string, "' + o + '", but no valid label mapping found in args: ' + JSON.stringify(t));
            return (e = t[r])instanceof goog.string.Const ? goog.string.Const.unwrap(e) : encodeURIComponent(String(e))
        }
        )),
        goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(e)
    }
    ,
    goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g,
    goog.html.TrustedResourceUrl.BASE_URL_ = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
    goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
    goog.html.TrustedResourceUrl.formatWithParams = function(e, t, o, r) {
        return goog.html.TrustedResourceUrl.format(e, t).cloneWithParams(o, r)
    }
    ,
    goog.html.TrustedResourceUrl.fromConstant = function(e) {
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(e))
    }
    ,
    goog.html.TrustedResourceUrl.fromConstants = function(e) {
        for (var t = "", o = 0; o < e.length; o++)
            t += goog.string.Const.unwrap(e[o]);
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(t)
    }
    ,
    goog.html.TrustedResourceUrl.fromSafeScript = function(e) {
        return e = goog.fs.blob.getBlobWithProperties([goog.html.SafeScript.unwrap(e)], "text/javascript"),
        e = goog.fs.url.createObjectUrl(e),
        goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(e)
    }
    ,
    goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {},
    goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function(e) {
        return e = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(e) : e,
        new goog.html.TrustedResourceUrl(goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_,e)
    }
    ,
    goog.html.TrustedResourceUrl.stringifyParams_ = function(e, t, o) {
        if (null == o)
            return t;
        if ("string" == typeof o)
            return o ? e + encodeURIComponent(o) : "";
        for (var r in o) {
            var i = o[r];
            i = Array.isArray(i) ? i : [i];
            for (var a = 0; a < i.length; a++) {
                var n = i[a];
                null != n && (t || (t = e),
                t += (t.length > e.length ? "&" : "") + encodeURIComponent(r) + "=" + encodeURIComponent(String(n)))
            }
        }
        return t
    }
    ,
    goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {},
    goog.string.internal = {},
    goog.string.internal.startsWith = function(e, t) {
        return 0 == e.lastIndexOf(t, 0)
    }
    ,
    goog.string.internal.endsWith = function(e, t) {
        var o = e.length - t.length;
        return 0 <= o && e.indexOf(t, o) == o
    }
    ,
    goog.string.internal.caseInsensitiveStartsWith = function(e, t) {
        return 0 == goog.string.internal.caseInsensitiveCompare(t, e.substr(0, t.length))
    }
    ,
    goog.string.internal.caseInsensitiveEndsWith = function(e, t) {
        return 0 == goog.string.internal.caseInsensitiveCompare(t, e.substr(e.length - t.length, t.length))
    }
    ,
    goog.string.internal.caseInsensitiveEquals = function(e, t) {
        return e.toLowerCase() == t.toLowerCase()
    }
    ,
    goog.string.internal.isEmptyOrWhitespace = function(e) {
        return /^[\s\xa0]*$/.test(e)
    }
    ,
    goog.string.internal.trim = goog.TRUSTED_SITE && String.prototype.trim ? function(e) {
        return e.trim()
    }
    : function(e) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]
    }
    ,
    goog.string.internal.caseInsensitiveCompare = function(e, t) {
        return (e = String(e).toLowerCase()) < (t = String(t).toLowerCase()) ? -1 : e == t ? 0 : 1
    }
    ,
    goog.string.internal.newLineToBr = function(e, t) {
        return e.replace(/(\r\n|\r|\n)/g, t ? "<br />" : "<br>")
    }
    ,
    goog.string.internal.htmlEscape = function(e, t) {
        if (t)
            e = e.replace(goog.string.internal.AMP_RE_, "&amp;").replace(goog.string.internal.LT_RE_, "&lt;").replace(goog.string.internal.GT_RE_, "&gt;").replace(goog.string.internal.QUOT_RE_, "&quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.internal.NULL_RE_, "&#0;");
        else {
            if (!goog.string.internal.ALL_RE_.test(e))
                return e;
            -1 != e.indexOf("&") && (e = e.replace(goog.string.internal.AMP_RE_, "&amp;")),
            -1 != e.indexOf("<") && (e = e.replace(goog.string.internal.LT_RE_, "&lt;")),
            -1 != e.indexOf(">") && (e = e.replace(goog.string.internal.GT_RE_, "&gt;")),
            -1 != e.indexOf('"') && (e = e.replace(goog.string.internal.QUOT_RE_, "&quot;")),
            -1 != e.indexOf("'") && (e = e.replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;")),
            -1 != e.indexOf("\0") && (e = e.replace(goog.string.internal.NULL_RE_, "&#0;"))
        }
        return e
    }
    ,
    goog.string.internal.AMP_RE_ = /&/g,
    goog.string.internal.LT_RE_ = /</g,
    goog.string.internal.GT_RE_ = />/g,
    goog.string.internal.QUOT_RE_ = /"/g,
    goog.string.internal.SINGLE_QUOTE_RE_ = /'/g,
    goog.string.internal.NULL_RE_ = /\x00/g,
    goog.string.internal.ALL_RE_ = /[\x00&<>"']/,
    goog.string.internal.whitespaceEscape = function(e, t) {
        return goog.string.internal.newLineToBr(e.replace(/  /g, " &#160;"), t)
    }
    ,
    goog.string.internal.contains = function(e, t) {
        return -1 != e.indexOf(t)
    }
    ,
    goog.string.internal.caseInsensitiveContains = function(e, t) {
        return goog.string.internal.contains(e.toLowerCase(), t.toLowerCase())
    }
    ,
    goog.string.internal.compareVersions = function(e, t) {
        var o = 0;
        e = goog.string.internal.trim(String(e)).split("."),
        t = goog.string.internal.trim(String(t)).split(".");
        for (var r = Math.max(e.length, t.length), i = 0; 0 == o && i < r; i++) {
            var a = e[i] || ""
              , n = t[i] || "";
            do {
                if (a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""],
                n = /(\d*)(\D*)(.*)/.exec(n) || ["", "", "", ""],
                0 == a[0].length && 0 == n[0].length)
                    break;
                o = 0 == a[1].length ? 0 : parseInt(a[1], 10);
                var s = 0 == n[1].length ? 0 : parseInt(n[1], 10);
                o = goog.string.internal.compareElements_(o, s) || goog.string.internal.compareElements_(0 == a[2].length, 0 == n[2].length) || goog.string.internal.compareElements_(a[2], n[2]),
                a = a[3],
                n = n[3]
            } while (0 == o)
        }
        return o
    }
    ,
    goog.string.internal.compareElements_ = function(e, t) {
        return e < t ? -1 : e > t ? 1 : 0
    }
    ,
    goog.html.SafeUrl = function(e, t) {
        this.privateDoNotAccessOrElseSafeUrlWrappedValue_ = e === goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && t || "",
        this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
    }
    ,
    goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez",
    goog.html.SafeUrl.prototype.implementsGoogStringTypedString = !0,
    goog.html.SafeUrl.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString()
    }
    ,
    goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = !0,
    goog.html.SafeUrl.prototype.getDirection = function() {
        return goog.i18n.bidi.Dir.LTR
    }
    ,
    goog.DEBUG && (goog.html.SafeUrl.prototype.toString = function() {
        return "SafeUrl{" + this.privateDoNotAccessOrElseSafeUrlWrappedValue_ + "}"
    }
    ),
    goog.html.SafeUrl.unwrap = function(e) {
        return e instanceof goog.html.SafeUrl && e.constructor === goog.html.SafeUrl && e.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeUrlWrappedValue_ : (goog.asserts.fail("expected object of type SafeUrl, got '" + e + "' of type " + goog.typeOf(e)),
        "type_error:SafeUrl")
    }
    ,
    goog.html.SafeUrl.fromConstant = function(e) {
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(e))
    }
    ,
    goog.html.SAFE_MIME_TYPE_PATTERN_ = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
    goog.html.SafeUrl.isSafeMimeType = function(e) {
        return goog.html.SAFE_MIME_TYPE_PATTERN_.test(e)
    }
    ,
    goog.html.SafeUrl.fromBlob = function(e) {
        return e = goog.html.SafeUrl.isSafeMimeType(e.type) ? goog.fs.url.createObjectUrl(e) : goog.html.SafeUrl.INNOCUOUS_STRING,
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
    }
    ,
    goog.html.SafeUrl.fromMediaSource = function(e) {
        return goog.asserts.assert("MediaSource"in goog.global, "No support for MediaSource"),
        e = e instanceof MediaSource ? goog.fs.url.createObjectUrl(e) : goog.html.SafeUrl.INNOCUOUS_STRING,
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
    }
    ,
    goog.html.DATA_URL_PATTERN_ = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    goog.html.SafeUrl.fromDataUrl = function(e) {
        var t = (e = e.replace(/(%0A|%0D)/g, "")).match(goog.html.DATA_URL_PATTERN_);
        return t = t && goog.html.SafeUrl.isSafeMimeType(t[1]),
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t ? e : goog.html.SafeUrl.INNOCUOUS_STRING)
    }
    ,
    goog.html.SafeUrl.fromTelUrl = function(e) {
        return goog.string.internal.caseInsensitiveStartsWith(e, "tel:") || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
    }
    ,
    goog.html.SIP_URL_PATTERN_ = /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i,
    goog.html.SafeUrl.fromSipUrl = function(e) {
        return goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(e)) || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
    }
    ,
    goog.html.SafeUrl.fromFacebookMessengerUrl = function(e) {
        return goog.string.internal.caseInsensitiveStartsWith(e, "fb-messenger://share") || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
    }
    ,
    goog.html.SafeUrl.fromWhatsAppUrl = function(e) {
        return goog.string.internal.caseInsensitiveStartsWith(e, "whatsapp://send") || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
    }
    ,
    goog.html.SafeUrl.fromSmsUrl = function(e) {
        return goog.string.internal.caseInsensitiveStartsWith(e, "sms:") && goog.html.SafeUrl.isSmsUrlBodyValid_(e) || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
    }
    ,
    goog.html.SafeUrl.isSmsUrlBodyValid_ = function(e) {
        var t = e.indexOf("#");
        if (0 < t && (e = e.substring(0, t)),
        !(t = e.match(/[?&]body=/gi)))
            return !0;
        if (1 < t.length)
            return !1;
        if (!(e = e.match(/[?&]body=([^&]*)/)[1]))
            return !0;
        try {
            decodeURIComponent(e)
        } catch (e) {
            return !1
        }
        return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(e)
    }
    ,
    goog.html.SafeUrl.fromSshUrl = function(e) {
        return goog.string.internal.caseInsensitiveStartsWith(e, "ssh://") || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
    }
    ,
    goog.html.SafeUrl.sanitizeChromeExtensionUrl = function(e, t) {
        return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//, e, t)
    }
    ,
    goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function(e, t) {
        return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//, e, t)
    }
    ,
    goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function(e, t) {
        return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//, e, t)
    }
    ,
    goog.html.SafeUrl.sanitizeExtensionUrl_ = function(e, t, o) {
        return (e = e.exec(t)) ? (e = e[1],
        -1 == (o instanceof goog.string.Const ? [goog.string.Const.unwrap(o)] : o.map((function(e) {
            return goog.string.Const.unwrap(e)
        }
        ))).indexOf(e) && (t = goog.html.SafeUrl.INNOCUOUS_STRING)) : t = goog.html.SafeUrl.INNOCUOUS_STRING,
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
    }
    ,
    goog.html.SafeUrl.fromTrustedResourceUrl = function(e) {
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(e))
    }
    ,
    goog.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_,
    goog.html.SafeUrl.sanitize = function(e) {
        return e instanceof goog.html.SafeUrl ? e : (e = "object" == typeof e && e.implementsGoogStringTypedString ? e.getTypedStringValue() : String(e),
        goog.html.SAFE_URL_PATTERN_.test(e) || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e))
    }
    ,
    goog.html.SafeUrl.sanitizeAssertUnchanged = function(e, t) {
        return e instanceof goog.html.SafeUrl ? e : (e = "object" == typeof e && e.implementsGoogStringTypedString ? e.getTypedStringValue() : String(e),
        t && /^data:/i.test(e) && (t = goog.html.SafeUrl.fromDataUrl(e)).getTypedStringValue() == e ? t : (goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(e), "%s does not match the safe URL pattern", e) || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)))
    }
    ,
    goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {},
    goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function(e) {
        return new goog.html.SafeUrl(goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_,e)
    }
    ,
    goog.html.SafeUrl.ABOUT_BLANK = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank"),
    goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {},
    goog.html.SafeStyle = function() {
        this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = "",
        this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
    }
    ,
    goog.html.SafeStyle.prototype.implementsGoogStringTypedString = !0,
    goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {},
    goog.html.SafeStyle.fromConstant = function(e) {
        return 0 === (e = goog.string.Const.unwrap(e)).length ? goog.html.SafeStyle.EMPTY : (goog.asserts.assert(goog.string.internal.endsWith(e, ";"), "Last character of style string is not ';': " + e),
        goog.asserts.assert(goog.string.internal.contains(e, ":"), "Style string must contain at least one ':', to specify a \"name: value\" pair: " + e),
        goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(e))
    }
    ,
    goog.html.SafeStyle.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeStyleWrappedValue_
    }
    ,
    goog.DEBUG && (goog.html.SafeStyle.prototype.toString = function() {
        return "SafeStyle{" + this.privateDoNotAccessOrElseSafeStyleWrappedValue_ + "}"
    }
    ),
    goog.html.SafeStyle.unwrap = function(e) {
        return e instanceof goog.html.SafeStyle && e.constructor === goog.html.SafeStyle && e.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeStyleWrappedValue_ : (goog.asserts.fail("expected object of type SafeStyle, got '" + e + "' of type " + goog.typeOf(e)),
        "type_error:SafeStyle")
    }
    ,
    goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function(e) {
        return (new goog.html.SafeStyle).initSecurityPrivateDoNotAccessOrElse_(e)
    }
    ,
    goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(e) {
        return this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = e,
        this
    }
    ,
    goog.html.SafeStyle.EMPTY = goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(""),
    goog.html.SafeStyle.INNOCUOUS_STRING = "zClosurez",
    goog.html.SafeStyle.create = function(e) {
        var t, o = "";
        for (t in e) {
            if (!/^[-_a-zA-Z0-9]+$/.test(t))
                throw Error("Name allows only [-_a-zA-Z0-9], got: " + t);
            var r = e[t];
            null != r && (o += t + ":" + (r = Array.isArray(r) ? goog.array.map(r, goog.html.SafeStyle.sanitizePropertyValue_).join(" ") : goog.html.SafeStyle.sanitizePropertyValue_(r)) + ";")
        }
        return o ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(o) : goog.html.SafeStyle.EMPTY
    }
    ,
    goog.html.SafeStyle.sanitizePropertyValue_ = function(e) {
        if (e instanceof goog.html.SafeUrl)
            return 'url("' + goog.html.SafeUrl.unwrap(e).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (e = e instanceof goog.string.Const ? goog.string.Const.unwrap(e) : goog.html.SafeStyle.sanitizePropertyValueString_(String(e)),
        /[{;}]/.test(e))
            throw new goog.asserts.AssertionError("Value does not allow [{;}], got: %s.",[e]);
        return e
    }
    ,
    goog.html.SafeStyle.sanitizePropertyValueString_ = function(e) {
        var t = e.replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.URL_RE_, "url");
        return goog.html.SafeStyle.VALUE_RE_.test(t) ? goog.html.SafeStyle.COMMENT_RE_.test(e) ? (goog.asserts.fail("String value disallows comments, got: " + e),
        goog.html.SafeStyle.INNOCUOUS_STRING) : goog.html.SafeStyle.hasBalancedQuotes_(e) ? goog.html.SafeStyle.hasBalancedSquareBrackets_(e) ? goog.html.SafeStyle.sanitizeUrl_(e) : (goog.asserts.fail("String value requires balanced square brackets and one identifier per pair of brackets, got: " + e),
        goog.html.SafeStyle.INNOCUOUS_STRING) : (goog.asserts.fail("String value requires balanced quotes, got: " + e),
        goog.html.SafeStyle.INNOCUOUS_STRING) : (goog.asserts.fail("String value allows only " + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + " and simple functions, got: " + e),
        goog.html.SafeStyle.INNOCUOUS_STRING)
    }
    ,
    goog.html.SafeStyle.hasBalancedQuotes_ = function(e) {
        for (var t = !0, o = !0, r = 0; r < e.length; r++) {
            var i = e.charAt(r);
            "'" == i && o ? t = !t : '"' == i && t && (o = !o)
        }
        return t && o
    }
    ,
    goog.html.SafeStyle.hasBalancedSquareBrackets_ = function(e) {
        for (var t = !0, o = /^[-_a-zA-Z0-9]$/, r = 0; r < e.length; r++) {
            var i = e.charAt(r);
            if ("]" == i) {
                if (t)
                    return !1;
                t = !0
            } else if ("[" == i) {
                if (!t)
                    return !1;
                t = !1
            } else if (!t && !o.test(i))
                return !1
        }
        return t
    }
    ,
    goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ = "[-,.\"'%_!# a-zA-Z0-9\\[\\]]",
    goog.html.SafeStyle.VALUE_RE_ = new RegExp("^" + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + "+$"),
    goog.html.SafeStyle.URL_RE_ = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
    goog.html.SafeStyle.ALLOWED_FUNCTIONS_ = "calc cubic-bezier fit-content hsl hsla linear-gradient matrix minmax repeat rgb rgba (rotate|scale|translate)(X|Y|Z|3d)?".split(" "),
    goog.html.SafeStyle.FUNCTIONS_RE_ = new RegExp("\\b(" + goog.html.SafeStyle.ALLOWED_FUNCTIONS_.join("|") + ")\\([-+*/0-9a-z.%\\[\\], ]+\\)","g"),
    goog.html.SafeStyle.COMMENT_RE_ = /\/\*/,
    goog.html.SafeStyle.sanitizeUrl_ = function(e) {
        return e.replace(goog.html.SafeStyle.URL_RE_, (function(e, t, o, r) {
            var i = "";
            return o = o.replace(/^(['"])(.*)\1$/, (function(e, t, o) {
                return i = t,
                o
            }
            )),
            e = goog.html.SafeUrl.sanitize(o).getTypedStringValue(),
            t + i + e + i + r
        }
        ))
    }
    ,
    goog.html.SafeStyle.concat = function(e) {
        var t = ""
          , o = function(e) {
            Array.isArray(e) ? goog.array.forEach(e, o) : t += goog.html.SafeStyle.unwrap(e)
        };
        return goog.array.forEach(arguments, o),
        t ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(t) : goog.html.SafeStyle.EMPTY
    }
    ,
    goog.html.SafeStyleSheet = function() {
        this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = "",
        this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
    }
    ,
    goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = !0,
    goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {},
    goog.html.SafeStyleSheet.createRule = function(e, t) {
        if (goog.string.internal.contains(e, "<"))
            throw Error("Selector does not allow '<', got: " + e);
        var o = e.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
        if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(o))
            throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + e);
        if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(o))
            throw Error("() and [] in selector must be balanced, got: " + e);
        return t instanceof goog.html.SafeStyle || (t = goog.html.SafeStyle.create(t)),
        e = e + "{" + goog.html.SafeStyle.unwrap(t).replace(/</g, "\\3C ") + "}",
        goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(e)
    }
    ,
    goog.html.SafeStyleSheet.hasBalancedBrackets_ = function(e) {
        for (var t = {
            "(": ")",
            "[": "]"
        }, o = [], r = 0; r < e.length; r++) {
            var i = e[r];
            if (t[i])
                o.push(t[i]);
            else if (goog.object.contains(t, i) && o.pop() != i)
                return !1
        }
        return 0 == o.length
    }
    ,
    goog.html.SafeStyleSheet.concat = function(e) {
        var t = ""
          , o = function(e) {
            Array.isArray(e) ? goog.array.forEach(e, o) : t += goog.html.SafeStyleSheet.unwrap(e)
        };
        return goog.array.forEach(arguments, o),
        goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(t)
    }
    ,
    goog.html.SafeStyleSheet.fromConstant = function(e) {
        return 0 === (e = goog.string.Const.unwrap(e)).length ? goog.html.SafeStyleSheet.EMPTY : (goog.asserts.assert(!goog.string.internal.contains(e, "<"), "Forbidden '<' character in style sheet string: " + e),
        goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(e))
    }
    ,
    goog.html.SafeStyleSheet.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_
    }
    ,
    goog.DEBUG && (goog.html.SafeStyleSheet.prototype.toString = function() {
        return "SafeStyleSheet{" + this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + "}"
    }
    ),
    goog.html.SafeStyleSheet.unwrap = function(e) {
        return e instanceof goog.html.SafeStyleSheet && e.constructor === goog.html.SafeStyleSheet && e.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ : (goog.asserts.fail("expected object of type SafeStyleSheet, got '" + e + "' of type " + goog.typeOf(e)),
        "type_error:SafeStyleSheet")
    }
    ,
    goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function(e) {
        return (new goog.html.SafeStyleSheet).initSecurityPrivateDoNotAccessOrElse_(e)
    }
    ,
    goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(e) {
        return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = e,
        this
    }
    ,
    goog.html.SafeStyleSheet.EMPTY = goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(""),
    goog.labs = {},
    goog.labs.userAgent = {},
    goog.labs.userAgent.util = {},
    goog.labs.userAgent.util.getNativeUserAgentString_ = function() {
        var e = goog.labs.userAgent.util.getNavigator_();
        return e && (e = e.userAgent) ? e : ""
    }
    ,
    goog.labs.userAgent.util.getNavigator_ = function() {
        return goog.global.navigator
    }
    ,
    goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_(),
    goog.labs.userAgent.util.setUserAgent = function(e) {
        goog.labs.userAgent.util.userAgent_ = e || goog.labs.userAgent.util.getNativeUserAgentString_()
    }
    ,
    goog.labs.userAgent.util.getUserAgent = function() {
        return goog.labs.userAgent.util.userAgent_
    }
    ,
    goog.labs.userAgent.util.matchUserAgent = function(e) {
        var t = goog.labs.userAgent.util.getUserAgent();
        return goog.string.internal.contains(t, e)
    }
    ,
    goog.labs.userAgent.util.matchUserAgentIgnoreCase = function(e) {
        var t = goog.labs.userAgent.util.getUserAgent();
        return goog.string.internal.caseInsensitiveContains(t, e)
    }
    ,
    goog.labs.userAgent.util.extractVersionTuples = function(e) {
        for (var t, o = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, r = []; t = o.exec(e); )
            r.push([t[1], t[2], t[3] || void 0]);
        return r
    }
    ,
    goog.labs.userAgent.browser = {},
    goog.labs.userAgent.browser.matchOpera_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Opera")
    }
    ,
    goog.labs.userAgent.browser.matchIE_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE")
    }
    ,
    goog.labs.userAgent.browser.matchEdgeHtml_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Edge")
    }
    ,
    goog.labs.userAgent.browser.matchEdgeChromium_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Edg/")
    }
    ,
    goog.labs.userAgent.browser.matchOperaChromium_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("OPR")
    }
    ,
    goog.labs.userAgent.browser.matchFirefox_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Firefox") || goog.labs.userAgent.util.matchUserAgent("FxiOS")
    }
    ,
    goog.labs.userAgent.browser.matchSafari_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Safari") && !(goog.labs.userAgent.browser.matchChrome_() || goog.labs.userAgent.browser.matchCoast_() || goog.labs.userAgent.browser.matchOpera_() || goog.labs.userAgent.browser.matchEdgeHtml_() || goog.labs.userAgent.browser.matchEdgeChromium_() || goog.labs.userAgent.browser.matchOperaChromium_() || goog.labs.userAgent.browser.matchFirefox_() || goog.labs.userAgent.browser.isSilk() || goog.labs.userAgent.util.matchUserAgent("Android"))
    }
    ,
    goog.labs.userAgent.browser.matchCoast_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Coast")
    }
    ,
    goog.labs.userAgent.browser.matchIosWebview_ = function() {
        return (goog.labs.userAgent.util.matchUserAgent("iPad") || goog.labs.userAgent.util.matchUserAgent("iPhone")) && !goog.labs.userAgent.browser.matchSafari_() && !goog.labs.userAgent.browser.matchChrome_() && !goog.labs.userAgent.browser.matchCoast_() && !goog.labs.userAgent.browser.matchFirefox_() && goog.labs.userAgent.util.matchUserAgent("AppleWebKit")
    }
    ,
    goog.labs.userAgent.browser.matchChrome_ = function() {
        return (goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS")) && !goog.labs.userAgent.browser.matchEdgeHtml_()
    }
    ,
    goog.labs.userAgent.browser.matchAndroidBrowser_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Android") && !(goog.labs.userAgent.browser.isChrome() || goog.labs.userAgent.browser.isFirefox() || goog.labs.userAgent.browser.isOpera() || goog.labs.userAgent.browser.isSilk())
    }
    ,
    goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_,
    goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_,
    goog.labs.userAgent.browser.isEdge = goog.labs.userAgent.browser.matchEdgeHtml_,
    goog.labs.userAgent.browser.isEdgeChromium = goog.labs.userAgent.browser.matchEdgeChromium_,
    goog.labs.userAgent.browser.isOperaChromium = goog.labs.userAgent.browser.matchOperaChromium_,
    goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_,
    goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_,
    goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_,
    goog.labs.userAgent.browser.isIosWebview = goog.labs.userAgent.browser.matchIosWebview_,
    goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_,
    goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_,
    goog.labs.userAgent.browser.isSilk = function() {
        return goog.labs.userAgent.util.matchUserAgent("Silk")
    }
    ,
    goog.labs.userAgent.browser.getVersion = function() {
        function e(e) {
            return e = goog.array.find(e, r),
            o[e] || ""
        }
        var t = goog.labs.userAgent.util.getUserAgent();
        if (goog.labs.userAgent.browser.isIE())
            return goog.labs.userAgent.browser.getIEVersion_(t);
        t = goog.labs.userAgent.util.extractVersionTuples(t);
        var o = {};
        goog.array.forEach(t, (function(e) {
            o[e[0]] = e[1]
        }
        ));
        var r = goog.partial(goog.object.containsKey, o);
        return goog.labs.userAgent.browser.isOpera() ? e(["Version", "Opera"]) : goog.labs.userAgent.browser.isEdge() ? e(["Edge"]) : goog.labs.userAgent.browser.isEdgeChromium() ? e(["Edg"]) : goog.labs.userAgent.browser.isChrome() ? e(["Chrome", "CriOS", "HeadlessChrome"]) : (t = t[2]) && t[1] || ""
    }
    ,
    goog.labs.userAgent.browser.isVersionOrHigher = function(e) {
        return 0 <= goog.string.internal.compareVersions(goog.labs.userAgent.browser.getVersion(), e)
    }
    ,
    goog.labs.userAgent.browser.getIEVersion_ = function(e) {
        var t = /rv: *([\d\.]*)/.exec(e);
        if (t && t[1])
            return t[1];
        t = "";
        var o = /MSIE +([\d\.]+)/.exec(e);
        if (o && o[1])
            if (e = /Trident\/(\d.\d)/.exec(e),
            "7.0" == o[1])
                if (e && e[1])
                    switch (e[1]) {
                    case "4.0":
                        t = "8.0";
                        break;
                    case "5.0":
                        t = "9.0";
                        break;
                    case "6.0":
                        t = "10.0";
                        break;
                    case "7.0":
                        t = "11.0"
                    }
                else
                    t = "7.0";
            else
                t = o[1];
        return t
    }
    ,
    goog.html.SafeHtml = function() {
        this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "",
        this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_,
        this.dir_ = null
    }
    ,
    goog.html.SafeHtml.ENABLE_ERROR_MESSAGES = goog.DEBUG,
    goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE = !0,
    goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString = !0,
    goog.html.SafeHtml.prototype.getDirection = function() {
        return this.dir_
    }
    ,
    goog.html.SafeHtml.prototype.implementsGoogStringTypedString = !0,
    goog.html.SafeHtml.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString()
    }
    ,
    goog.DEBUG && (goog.html.SafeHtml.prototype.toString = function() {
        return "SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}"
    }
    ),
    goog.html.SafeHtml.unwrap = function(e) {
        return goog.html.SafeHtml.unwrapTrustedHTML(e).toString()
    }
    ,
    goog.html.SafeHtml.unwrapTrustedHTML = function(e) {
        return e instanceof goog.html.SafeHtml && e.constructor === goog.html.SafeHtml && e.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeHtmlWrappedValue_ : (goog.asserts.fail("expected object of type SafeHtml, got '" + e + "' of type " + goog.typeOf(e)),
        "type_error:SafeHtml")
    }
    ,
    goog.html.SafeHtml.htmlEscape = function(e) {
        if (e instanceof goog.html.SafeHtml)
            return e;
        var t = "object" == typeof e
          , o = null;
        return t && e.implementsGoogI18nBidiDirectionalString && (o = e.getDirection()),
        e = t && e.implementsGoogStringTypedString ? e.getTypedStringValue() : String(e),
        goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.htmlEscape(e), o)
    }
    ,
    goog.html.SafeHtml.htmlEscapePreservingNewlines = function(e) {
        return e instanceof goog.html.SafeHtml ? e : (e = goog.html.SafeHtml.htmlEscape(e),
        goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(e)), e.getDirection()))
    }
    ,
    goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function(e) {
        return e instanceof goog.html.SafeHtml ? e : (e = goog.html.SafeHtml.htmlEscape(e),
        goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.whitespaceEscape(goog.html.SafeHtml.unwrap(e)), e.getDirection()))
    }
    ,
    goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape,
    goog.html.SafeHtml.comment = function(e) {
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("\x3c!--" + goog.string.internal.htmlEscape(e) + "--\x3e", null)
    }
    ,
    goog.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/,
    goog.html.SafeHtml.URL_ATTRIBUTES_ = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    },
    goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    },
    goog.html.SafeHtml.create = function(e, t, o) {
        return goog.html.SafeHtml.verifyTagName(String(e)),
        goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(e), t, o)
    }
    ,
    goog.html.SafeHtml.verifyTagName = function(e) {
        if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(e))
            throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "Invalid tag name <" + e + ">." : "");
        if (e.toUpperCase()in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)
            throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "Tag name <" + e + "> is not allowed for SafeHtml." : "")
    }
    ,
    goog.html.SafeHtml.createIframe = function(e, t, o, r) {
        e && goog.html.TrustedResourceUrl.unwrap(e);
        var i = {};
        return i.src = e || null,
        i.srcdoc = t && goog.html.SafeHtml.unwrap(t),
        e = goog.html.SafeHtml.combineAttributes(i, {
            sandbox: ""
        }, o),
        goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", e, r)
    }
    ,
    goog.html.SafeHtml.createSandboxIframe = function(e, t, o, r) {
        if (!goog.html.SafeHtml.canUseSandboxIframe())
            throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "The browser does not support sandboxed iframes." : "");
        var i = {};
        return i.src = e ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(e)) : null,
        i.srcdoc = t || null,
        i.sandbox = "",
        e = goog.html.SafeHtml.combineAttributes(i, {}, o),
        goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", e, r)
    }
    ,
    goog.html.SafeHtml.canUseSandboxIframe = function() {
        return goog.global.HTMLIFrameElement && "sandbox"in goog.global.HTMLIFrameElement.prototype
    }
    ,
    goog.html.SafeHtml.createScriptSrc = function(e, t) {
        return goog.html.TrustedResourceUrl.unwrap(e),
        e = goog.html.SafeHtml.combineAttributes({
            src: e
        }, {}, t),
        goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", e)
    }
    ,
    goog.html.SafeHtml.createScript = function(e, t) {
        for (var o in t) {
            var r = o.toLowerCase();
            if ("language" == r || "src" == r || "text" == r || "type" == r)
                throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot set "' + r + '" attribute' : "")
        }
        for (o = "",
        e = goog.array.concat(e),
        r = 0; r < e.length; r++)
            o += goog.html.SafeScript.unwrap(e[r]);
        return e = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(o, goog.i18n.bidi.Dir.NEUTRAL),
        goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", t, e)
    }
    ,
    goog.html.SafeHtml.createStyle = function(e, t) {
        t = goog.html.SafeHtml.combineAttributes({
            type: "text/css"
        }, {}, t);
        var o = "";
        e = goog.array.concat(e);
        for (var r = 0; r < e.length; r++)
            o += goog.html.SafeStyleSheet.unwrap(e[r]);
        return e = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(o, goog.i18n.bidi.Dir.NEUTRAL),
        goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", t, e)
    }
    ,
    goog.html.SafeHtml.createMetaRefresh = function(e, t) {
        return e = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(e)),
        (goog.labs.userAgent.browser.isIE() || goog.labs.userAgent.browser.isEdge()) && goog.string.internal.contains(e, ";") && (e = "'" + e.replace(/'/g, "%27") + "'"),
        goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", {
            "http-equiv": "refresh",
            content: (t || 0) + "; url=" + e
        })
    }
    ,
    goog.html.SafeHtml.getAttrNameAndValue_ = function(e, t, o) {
        if (o instanceof goog.string.Const)
            o = goog.string.Const.unwrap(o);
        else if ("style" == t.toLowerCase()) {
            if (!goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE)
                throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "style" not supported.' : "");
            o = goog.html.SafeHtml.getStyleValue_(o)
        } else {
            if (/^on/i.test(t))
                throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + t + '" requires goog.string.Const value, "' + o + '" given.' : "");
            if (t.toLowerCase()in goog.html.SafeHtml.URL_ATTRIBUTES_)
                if (o instanceof goog.html.TrustedResourceUrl)
                    o = goog.html.TrustedResourceUrl.unwrap(o);
                else if (o instanceof goog.html.SafeUrl)
                    o = goog.html.SafeUrl.unwrap(o);
                else {
                    if ("string" != typeof o)
                        throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + t + '" on tag "' + e + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + o + '" given.' : "");
                    o = goog.html.SafeUrl.sanitize(o).getTypedStringValue()
                }
        }
        return o.implementsGoogStringTypedString && (o = o.getTypedStringValue()),
        goog.asserts.assert("string" == typeof o || "number" == typeof o, "String or number value expected, got " + typeof o + " with value: " + o),
        t + '="' + goog.string.internal.htmlEscape(String(o)) + '"'
    }
    ,
    goog.html.SafeHtml.getStyleValue_ = function(e) {
        if (!goog.isObject(e))
            throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof e + " given: " + e : "");
        return e instanceof goog.html.SafeStyle || (e = goog.html.SafeStyle.create(e)),
        goog.html.SafeStyle.unwrap(e)
    }
    ,
    goog.html.SafeHtml.createWithDir = function(e, t, o, r) {
        return (t = goog.html.SafeHtml.create(t, o, r)).dir_ = e,
        t
    }
    ,
    goog.html.SafeHtml.join = function(e, t) {
        var o = (e = goog.html.SafeHtml.htmlEscape(e)).getDirection()
          , r = []
          , i = function(e) {
            Array.isArray(e) ? goog.array.forEach(e, i) : (e = goog.html.SafeHtml.htmlEscape(e),
            r.push(goog.html.SafeHtml.unwrap(e)),
            e = e.getDirection(),
            o == goog.i18n.bidi.Dir.NEUTRAL ? o = e : e != goog.i18n.bidi.Dir.NEUTRAL && o != e && (o = null))
        };
        return goog.array.forEach(t, i),
        goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(r.join(goog.html.SafeHtml.unwrap(e)), o)
    }
    ,
    goog.html.SafeHtml.concat = function(e) {
        return goog.html.SafeHtml.join(goog.html.SafeHtml.EMPTY, Array.prototype.slice.call(arguments))
    }
    ,
    goog.html.SafeHtml.concatWithDir = function(e, t) {
        var o = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1));
        return o.dir_ = e,
        o
    }
    ,
    goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {},
    goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function(e, t) {
        return (new goog.html.SafeHtml).initSecurityPrivateDoNotAccessOrElse_(e, t)
    }
    ,
    goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(e, t) {
        return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(e) : e,
        this.dir_ = t,
        this
    }
    ,
    goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function(e, t, o) {
        var r = null
          , i = "<" + e + goog.html.SafeHtml.stringifyAttributes(e, t);
        return null == o ? o = [] : Array.isArray(o) || (o = [o]),
        goog.dom.tags.isVoidTag(e.toLowerCase()) ? (goog.asserts.assert(!o.length, "Void tag <" + e + "> does not allow content."),
        i += ">") : (r = goog.html.SafeHtml.concat(o),
        i += ">" + goog.html.SafeHtml.unwrap(r) + "</" + e + ">",
        r = r.getDirection()),
        (e = t && t.dir) && (r = /^(ltr|rtl|auto)$/i.test(e) ? goog.i18n.bidi.Dir.NEUTRAL : null),
        goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(i, r)
    }
    ,
    goog.html.SafeHtml.stringifyAttributes = function(e, t) {
        var o = "";
        if (t)
            for (var r in t) {
                if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(r))
                    throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Invalid attribute name "' + r + '".' : "");
                var i = t[r];
                null != i && (o += " " + goog.html.SafeHtml.getAttrNameAndValue_(e, r, i))
            }
        return o
    }
    ,
    goog.html.SafeHtml.combineAttributes = function(e, t, o) {
        var r, i = {};
        for (r in e)
            goog.asserts.assert(r.toLowerCase() == r, "Must be lower case"),
            i[r] = e[r];
        for (r in t)
            goog.asserts.assert(r.toLowerCase() == r, "Must be lower case"),
            i[r] = t[r];
        if (o)
            for (r in o) {
                var a = r.toLowerCase();
                if (a in e)
                    throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot override "' + a + '" attribute, got "' + r + '" with value "' + o[r] + '"' : "");
                a in t && delete i[a],
                i[r] = o[r]
            }
        return i
    }
    ,
    goog.html.SafeHtml.DOCTYPE_HTML = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>", goog.i18n.bidi.Dir.NEUTRAL),
    goog.html.SafeHtml.EMPTY = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("", goog.i18n.bidi.Dir.NEUTRAL),
    goog.html.SafeHtml.BR = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>", goog.i18n.bidi.Dir.NEUTRAL),
    goog.html.uncheckedconversions = {},
    goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function(e, t, o) {
        return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"),
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"),
        goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(t, o || null)
    }
    ,
    goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function(e, t) {
        return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"),
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"),
        goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(t)
    }
    ,
    goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function(e, t) {
        return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"),
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"),
        goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(t)
    }
    ,
    goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function(e, t) {
        return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"),
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"),
        goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(t)
    }
    ,
    goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function(e, t) {
        return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"),
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"),
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
    }
    ,
    goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function(e, t) {
        return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"),
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"),
        goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(t)
    }
    ,
    goog.dom.safe = {},
    goog.dom.safe.InsertAdjacentHtmlPosition = {
        AFTERBEGIN: "afterbegin",
        AFTEREND: "afterend",
        BEFOREBEGIN: "beforebegin",
        BEFOREEND: "beforeend"
    },
    goog.dom.safe.insertAdjacentHtml = function(e, t, o) {
        e.insertAdjacentHTML(t, goog.html.SafeHtml.unwrapTrustedHTML(o))
    }
    ,
    goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = {
        MATH: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    },
    goog.dom.safe.isInnerHtmlCleanupRecursive_ = goog.functions.cacheReturnValue((function() {
        if (goog.DEBUG && "undefined" == typeof document)
            return !1;
        var e = document.createElement("div")
          , t = document.createElement("div");
        return t.appendChild(document.createElement("div")),
        e.appendChild(t),
        !(goog.DEBUG && !e.firstChild) && (t = e.firstChild.firstChild,
        e.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(goog.html.SafeHtml.EMPTY),
        !t.parentElement)
    }
    )),
    goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function(e, t) {
        if (goog.dom.safe.isInnerHtmlCleanupRecursive_())
            for (; e.lastChild; )
                e.removeChild(e.lastChild);
        e.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(t)
    }
    ,
    goog.dom.safe.setInnerHtml = function(e, t) {
        if (goog.asserts.ENABLE_ASSERTS) {
            var o = e.tagName.toUpperCase();
            if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[o])
                throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + e.tagName + ".")
        }
        goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(e, t)
    }
    ,
    goog.dom.safe.setOuterHtml = function(e, t) {
        e.outerHTML = goog.html.SafeHtml.unwrapTrustedHTML(t)
    }
    ,
    goog.dom.safe.setFormElementAction = function(e, t) {
        t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t),
        goog.dom.asserts.assertIsHTMLFormElement(e).action = goog.html.SafeUrl.unwrap(t)
    }
    ,
    goog.dom.safe.setButtonFormAction = function(e, t) {
        t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t),
        goog.dom.asserts.assertIsHTMLButtonElement(e).formAction = goog.html.SafeUrl.unwrap(t)
    }
    ,
    goog.dom.safe.setInputFormAction = function(e, t) {
        t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t),
        goog.dom.asserts.assertIsHTMLInputElement(e).formAction = goog.html.SafeUrl.unwrap(t)
    }
    ,
    goog.dom.safe.setStyle = function(e, t) {
        e.style.cssText = goog.html.SafeStyle.unwrap(t)
    }
    ,
    goog.dom.safe.documentWrite = function(e, t) {
        e.write(goog.html.SafeHtml.unwrapTrustedHTML(t))
    }
    ,
    goog.dom.safe.setAnchorHref = function(e, t) {
        goog.dom.asserts.assertIsHTMLAnchorElement(e),
        t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t),
        e.href = goog.html.SafeUrl.unwrap(t)
    }
    ,
    goog.dom.safe.setImageSrc = function(e, t) {
        if (goog.dom.asserts.assertIsHTMLImageElement(e),
        !(t instanceof goog.html.SafeUrl)) {
            var o = /^data:image\//i.test(t);
            t = goog.html.SafeUrl.sanitizeAssertUnchanged(t, o)
        }
        e.src = goog.html.SafeUrl.unwrap(t)
    }
    ,
    goog.dom.safe.setAudioSrc = function(e, t) {
        if (goog.dom.asserts.assertIsHTMLAudioElement(e),
        !(t instanceof goog.html.SafeUrl)) {
            var o = /^data:audio\//i.test(t);
            t = goog.html.SafeUrl.sanitizeAssertUnchanged(t, o)
        }
        e.src = goog.html.SafeUrl.unwrap(t)
    }
    ,
    goog.dom.safe.setVideoSrc = function(e, t) {
        if (goog.dom.asserts.assertIsHTMLVideoElement(e),
        !(t instanceof goog.html.SafeUrl)) {
            var o = /^data:video\//i.test(t);
            t = goog.html.SafeUrl.sanitizeAssertUnchanged(t, o)
        }
        e.src = goog.html.SafeUrl.unwrap(t)
    }
    ,
    goog.dom.safe.setEmbedSrc = function(e, t) {
        goog.dom.asserts.assertIsHTMLEmbedElement(e),
        e.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t)
    }
    ,
    goog.dom.safe.setFrameSrc = function(e, t) {
        goog.dom.asserts.assertIsHTMLFrameElement(e),
        e.src = goog.html.TrustedResourceUrl.unwrap(t)
    }
    ,
    goog.dom.safe.setIframeSrc = function(e, t) {
        goog.dom.asserts.assertIsHTMLIFrameElement(e),
        e.src = goog.html.TrustedResourceUrl.unwrap(t)
    }
    ,
    goog.dom.safe.setIframeSrcdoc = function(e, t) {
        goog.dom.asserts.assertIsHTMLIFrameElement(e),
        e.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(t)
    }
    ,
    goog.dom.safe.setLinkHrefAndRel = function(e, t, o) {
        goog.dom.asserts.assertIsHTMLLinkElement(e),
        e.rel = o,
        goog.string.internal.caseInsensitiveContains(o, "stylesheet") ? (goog.asserts.assert(t instanceof goog.html.TrustedResourceUrl, 'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'),
        e.href = goog.html.TrustedResourceUrl.unwrap(t)) : e.href = t instanceof goog.html.TrustedResourceUrl ? goog.html.TrustedResourceUrl.unwrap(t) : t instanceof goog.html.SafeUrl ? goog.html.SafeUrl.unwrap(t) : goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitizeAssertUnchanged(t))
    }
    ,
    goog.dom.safe.setObjectData = function(e, t) {
        goog.dom.asserts.assertIsHTMLObjectElement(e),
        e.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t)
    }
    ,
    goog.dom.safe.setScriptSrc = function(e, t) {
        goog.dom.asserts.assertIsHTMLScriptElement(e),
        e.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t),
        (t = goog.getScriptNonce()) && e.setAttribute("nonce", t)
    }
    ,
    goog.dom.safe.setScriptContent = function(e, t) {
        goog.dom.asserts.assertIsHTMLScriptElement(e),
        e.text = goog.html.SafeScript.unwrapTrustedScript(t),
        (t = goog.getScriptNonce()) && e.setAttribute("nonce", t)
    }
    ,
    goog.dom.safe.setLocationHref = function(e, t) {
        goog.dom.asserts.assertIsLocation(e),
        t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t),
        e.href = goog.html.SafeUrl.unwrap(t)
    }
    ,
    goog.dom.safe.assignLocation = function(e, t) {
        goog.dom.asserts.assertIsLocation(e),
        t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t),
        e.assign(goog.html.SafeUrl.unwrap(t))
    }
    ,
    goog.dom.safe.replaceLocation = function(e, t) {
        t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t),
        e.replace(goog.html.SafeUrl.unwrap(t))
    }
    ,
    goog.dom.safe.openInWindow = function(e, t, o, r, i) {
        return e = e instanceof goog.html.SafeUrl ? e : goog.html.SafeUrl.sanitizeAssertUnchanged(e),
        t = t || goog.global,
        o = o instanceof goog.string.Const ? goog.string.Const.unwrap(o) : o || "",
        t.open(goog.html.SafeUrl.unwrap(e), o, r, i)
    }
    ,
    goog.dom.safe.parseFromStringHtml = function(e, t) {
        return goog.dom.safe.parseFromString(e, t, "text/html")
    }
    ,
    goog.dom.safe.parseFromString = function(e, t, o) {
        return e.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(t), o)
    }
    ,
    goog.dom.safe.createImageFromBlob = function(e) {
        if (!/^image\/.*/g.test(e.type))
            throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");
        var t = goog.global.URL.createObjectURL(e);
        return (e = new goog.global.Image).onload = function() {
            goog.global.URL.revokeObjectURL(t)
        }
        ,
        goog.dom.safe.setImageSrc(e, goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Image blob URL."), t)),
        e
    }
    ,
    goog.string.DETECT_DOUBLE_ESCAPING = !1,
    goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1,
    goog.string.Unicode = {
        NBSP: " "
    },
    goog.string.startsWith = goog.string.internal.startsWith,
    goog.string.endsWith = goog.string.internal.endsWith,
    goog.string.caseInsensitiveStartsWith = goog.string.internal.caseInsensitiveStartsWith,
    goog.string.caseInsensitiveEndsWith = goog.string.internal.caseInsensitiveEndsWith,
    goog.string.caseInsensitiveEquals = goog.string.internal.caseInsensitiveEquals,
    goog.string.subs = function(e, t) {
        for (var o = e.split("%s"), r = "", i = Array.prototype.slice.call(arguments, 1); i.length && 1 < o.length; )
            r += o.shift() + i.shift();
        return r + o.join("%s")
    }
    ,
    goog.string.collapseWhitespace = function(e) {
        return e.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
    }
    ,
    goog.string.isEmptyOrWhitespace = goog.string.internal.isEmptyOrWhitespace,
    goog.string.isEmptyString = function(e) {
        return 0 == e.length
    }
    ,
    goog.string.isEmpty = goog.string.isEmptyOrWhitespace,
    goog.string.isEmptyOrWhitespaceSafe = function(e) {
        return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(e))
    }
    ,
    goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe,
    goog.string.isBreakingWhitespace = function(e) {
        return !/[^\t\n\r ]/.test(e)
    }
    ,
    goog.string.isAlpha = function(e) {
        return !/[^a-zA-Z]/.test(e)
    }
    ,
    goog.string.isNumeric = function(e) {
        return !/[^0-9]/.test(e)
    }
    ,
    goog.string.isAlphaNumeric = function(e) {
        return !/[^a-zA-Z0-9]/.test(e)
    }
    ,
    goog.string.isSpace = function(e) {
        return " " == e
    }
    ,
    goog.string.isUnicodeChar = function(e) {
        return 1 == e.length && " " <= e && "~" >= e || "" <= e && "�" >= e
    }
    ,
    goog.string.stripNewlines = function(e) {
        return e.replace(/(\r\n|\r|\n)+/g, " ")
    }
    ,
    goog.string.canonicalizeNewlines = function(e) {
        return e.replace(/(\r\n|\r|\n)/g, "\n")
    }
    ,
    goog.string.normalizeWhitespace = function(e) {
        return e.replace(/\xa0|\s/g, " ")
    }
    ,
    goog.string.normalizeSpaces = function(e) {
        return e.replace(/\xa0|[ \t]+/g, " ")
    }
    ,
    goog.string.collapseBreakingSpaces = function(e) {
        return e.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    }
    ,
    goog.string.trim = goog.string.internal.trim,
    goog.string.trimLeft = function(e) {
        return e.replace(/^[\s\xa0]+/, "")
    }
    ,
    goog.string.trimRight = function(e) {
        return e.replace(/[\s\xa0]+$/, "")
    }
    ,
    goog.string.caseInsensitiveCompare = goog.string.internal.caseInsensitiveCompare,
    goog.string.numberAwareCompare_ = function(e, t, o) {
        if (e == t)
            return 0;
        if (!e)
            return -1;
        if (!t)
            return 1;
        for (var r = e.toLowerCase().match(o), i = t.toLowerCase().match(o), a = Math.min(r.length, i.length), n = 0; n < a; n++) {
            o = r[n];
            var s = i[n];
            if (o != s)
                return e = parseInt(o, 10),
                !isNaN(e) && (t = parseInt(s, 10),
                !isNaN(t) && e - t) ? e - t : o < s ? -1 : 1
        }
        return r.length != i.length ? r.length - i.length : e < t ? -1 : 1
    }
    ,
    goog.string.intAwareCompare = function(e, t) {
        return goog.string.numberAwareCompare_(e, t, /\d+|\D+/g)
    }
    ,
    goog.string.floatAwareCompare = function(e, t) {
        return goog.string.numberAwareCompare_(e, t, /\d+|\.\d+|\D+/g)
    }
    ,
    goog.string.numerateCompare = goog.string.floatAwareCompare,
    goog.string.urlEncode = function(e) {
        return encodeURIComponent(String(e))
    }
    ,
    goog.string.urlDecode = function(e) {
        return decodeURIComponent(e.replace(/\+/g, " "))
    }
    ,
    goog.string.newLineToBr = goog.string.internal.newLineToBr,
    goog.string.htmlEscape = function(e, t) {
        return e = goog.string.internal.htmlEscape(e, t),
        goog.string.DETECT_DOUBLE_ESCAPING && (e = e.replace(goog.string.E_RE_, "&#101;")),
        e
    }
    ,
    goog.string.E_RE_ = /e/g,
    goog.string.unescapeEntities = function(e) {
        return goog.string.contains(e, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document"in goog.global ? goog.string.unescapeEntitiesUsingDom_(e) : goog.string.unescapePureXmlEntities_(e) : e
    }
    ,
    goog.string.unescapeEntitiesWithDocument = function(e, t) {
        return goog.string.contains(e, "&") ? goog.string.unescapeEntitiesUsingDom_(e, t) : e
    }
    ,
    goog.string.unescapeEntitiesUsingDom_ = function(e, t) {
        var o = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        }
          , r = t ? t.createElement("div") : goog.global.document.createElement("div");
        return e.replace(goog.string.HTML_ENTITY_PATTERN_, (function(e, t) {
            var i = o[e];
            return i || ("#" == t.charAt(0) && (t = Number("0" + t.substr(1)),
            isNaN(t) || (i = String.fromCharCode(t))),
            i || (goog.dom.safe.setInnerHtml(r, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Single HTML entity."), e + " ")),
            i = r.firstChild.nodeValue.slice(0, -1)),
            o[e] = i)
        }
        ))
    }
    ,
    goog.string.unescapePureXmlEntities_ = function(e) {
        return e.replace(/&([^;]+);/g, (function(e, t) {
            switch (t) {
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "quot":
                return '"';
            default:
                return "#" != t.charAt(0) || (t = Number("0" + t.substr(1)),
                isNaN(t)) ? e : String.fromCharCode(t)
            }
        }
        ))
    }
    ,
    goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g,
    goog.string.whitespaceEscape = function(e, t) {
        return goog.string.newLineToBr(e.replace(/  /g, " &#160;"), t)
    }
    ,
    goog.string.preserveSpaces = function(e) {
        return e.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP)
    }
    ,
    goog.string.stripQuotes = function(e, t) {
        for (var o = t.length, r = 0; r < o; r++) {
            var i = 1 == o ? t : t.charAt(r);
            if (e.charAt(0) == i && e.charAt(e.length - 1) == i)
                return e.substring(1, e.length - 1)
        }
        return e
    }
    ,
    goog.string.truncate = function(e, t, o) {
        return o && (e = goog.string.unescapeEntities(e)),
        e.length > t && (e = e.substring(0, t - 3) + "..."),
        o && (e = goog.string.htmlEscape(e)),
        e
    }
    ,
    goog.string.truncateMiddle = function(e, t, o, r) {
        if (o && (e = goog.string.unescapeEntities(e)),
        r && e.length > t) {
            r > t && (r = t);
            var i = e.length - r;
            e = e.substring(0, t - r) + "..." + e.substring(i)
        } else
            e.length > t && (r = Math.floor(t / 2),
            i = e.length - r,
            e = e.substring(0, r + t % 2) + "..." + e.substring(i));
        return o && (e = goog.string.htmlEscape(e)),
        e
    }
    ,
    goog.string.specialEscapeChars_ = {
        "\0": "\\0",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\v": "\\x0B",
        '"': '\\"',
        "\\": "\\\\",
        "<": "\\u003C"
    },
    goog.string.jsEscapeCache_ = {
        "'": "\\'"
    },
    goog.string.quote = function(e) {
        e = String(e);
        for (var t = ['"'], o = 0; o < e.length; o++) {
            var r = e.charAt(o)
              , i = r.charCodeAt(0);
            t[o + 1] = goog.string.specialEscapeChars_[r] || (31 < i && 127 > i ? r : goog.string.escapeChar(r))
        }
        return t.push('"'),
        t.join("")
    }
    ,
    goog.string.escapeString = function(e) {
        for (var t = [], o = 0; o < e.length; o++)
            t[o] = goog.string.escapeChar(e.charAt(o));
        return t.join("")
    }
    ,
    goog.string.escapeChar = function(e) {
        if (e in goog.string.jsEscapeCache_)
            return goog.string.jsEscapeCache_[e];
        if (e in goog.string.specialEscapeChars_)
            return goog.string.jsEscapeCache_[e] = goog.string.specialEscapeChars_[e];
        var t = e.charCodeAt(0);
        if (31 < t && 127 > t)
            var o = e;
        else
            256 > t ? (o = "\\x",
            (16 > t || 256 < t) && (o += "0")) : (o = "\\u",
            4096 > t && (o += "0")),
            o += t.toString(16).toUpperCase();
        return goog.string.jsEscapeCache_[e] = o
    }
    ,
    goog.string.contains = goog.string.internal.contains,
    goog.string.caseInsensitiveContains = goog.string.internal.caseInsensitiveContains,
    goog.string.countOf = function(e, t) {
        return e && t ? e.split(t).length - 1 : 0
    }
    ,
    goog.string.removeAt = function(e, t, o) {
        var r = e;
        return 0 <= t && t < e.length && 0 < o && (r = e.substr(0, t) + e.substr(t + o, e.length - t - o)),
        r
    }
    ,
    goog.string.remove = function(e, t) {
        return e.replace(t, "")
    }
    ,
    goog.string.removeAll = function(e, t) {
        return t = new RegExp(goog.string.regExpEscape(t),"g"),
        e.replace(t, "")
    }
    ,
    goog.string.replaceAll = function(e, t, o) {
        return t = new RegExp(goog.string.regExpEscape(t),"g"),
        e.replace(t, o.replace(/\$/g, "$$$$"))
    }
    ,
    goog.string.regExpEscape = function(e) {
        return String(e).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }
    ,
    goog.string.repeat = String.prototype.repeat ? function(e, t) {
        return e.repeat(t)
    }
    : function(e, t) {
        return Array(t + 1).join(e)
    }
    ,
    goog.string.padNumber = function(e, t, o) {
        return -1 == (o = (e = void 0 !== o ? e.toFixed(o) : String(e)).indexOf(".")) && (o = e.length),
        goog.string.repeat("0", Math.max(0, t - o)) + e
    }
    ,
    goog.string.makeSafe = function(e) {
        return null == e ? "" : String(e)
    }
    ,
    goog.string.buildString = function(e) {
        return Array.prototype.join.call(arguments, "")
    }
    ,
    goog.string.getRandomString = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36)
    }
    ,
    goog.string.compareVersions = goog.string.internal.compareVersions,
    goog.string.hashCode = function(e) {
        for (var t = 0, o = 0; o < e.length; ++o)
            t = 31 * t + e.charCodeAt(o) >>> 0;
        return t
    }
    ,
    goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0,
    goog.string.createUniqueString = function() {
        return "goog_" + goog.string.uniqueStringCounter_++
    }
    ,
    goog.string.toNumber = function(e) {
        var t = Number(e);
        return 0 == t && goog.string.isEmptyOrWhitespace(e) ? NaN : t
    }
    ,
    goog.string.isLowerCamelCase = function(e) {
        return /^[a-z]+([A-Z][a-z]*)*$/.test(e)
    }
    ,
    goog.string.isUpperCamelCase = function(e) {
        return /^([A-Z][a-z]*)+$/.test(e)
    }
    ,
    goog.string.toCamelCase = function(e) {
        return String(e).replace(/\-([a-z])/g, (function(e, t) {
            return t.toUpperCase()
        }
        ))
    }
    ,
    goog.string.toSelectorCase = function(e) {
        return String(e).replace(/([A-Z])/g, "-$1").toLowerCase()
    }
    ,
    goog.string.toTitleCase = function(e, t) {
        return t = "string" == typeof t ? goog.string.regExpEscape(t) : "\\s",
        e.replace(new RegExp("(^" + (t ? "|[" + t + "]+" : "") + ")([a-z])","g"), (function(e, t, o) {
            return t + o.toUpperCase()
        }
        ))
    }
    ,
    goog.string.capitalize = function(e) {
        return String(e.charAt(0)).toUpperCase() + String(e.substr(1)).toLowerCase()
    }
    ,
    goog.string.parseInt = function(e) {
        return isFinite(e) && (e = String(e)),
        "string" == typeof e ? /^\s*-?0x/i.test(e) ? parseInt(e, 16) : parseInt(e, 10) : NaN
    }
    ,
    goog.string.splitLimit = function(e, t, o) {
        e = e.split(t);
        for (var r = []; 0 < o && e.length; )
            r.push(e.shift()),
            o--;
        return e.length && r.push(e.join(t)),
        r
    }
    ,
    goog.string.lastComponent = function(e, t) {
        if (!t)
            return e;
        "string" == typeof t && (t = [t]);
        for (var o = -1, r = 0; r < t.length; r++)
            if ("" != t[r]) {
                var i = e.lastIndexOf(t[r]);
                i > o && (o = i)
            }
        return -1 == o ? e : e.slice(o + 1)
    }
    ,
    goog.string.editDistance = function(e, t) {
        var o = []
          , r = [];
        if (e == t)
            return 0;
        if (!e.length || !t.length)
            return Math.max(e.length, t.length);
        for (var i = 0; i < t.length + 1; i++)
            o[i] = i;
        for (i = 0; i < e.length; i++) {
            r[0] = i + 1;
            for (var a = 0; a < t.length; a++)
                r[a + 1] = Math.min(r[a] + 1, o[a + 1] + 1, o[a] + Number(e[i] != t[a]));
            for (a = 0; a < o.length; a++)
                o[a] = r[a]
        }
        return r[t.length]
    }
    ,
    goog.labs.userAgent.engine = {},
    goog.labs.userAgent.engine.isPresto = function() {
        return goog.labs.userAgent.util.matchUserAgent("Presto")
    }
    ,
    goog.labs.userAgent.engine.isTrident = function() {
        return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE")
    }
    ,
    goog.labs.userAgent.engine.isEdge = function() {
        return goog.labs.userAgent.util.matchUserAgent("Edge")
    }
    ,
    goog.labs.userAgent.engine.isWebKit = function() {
        return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") && !goog.labs.userAgent.engine.isEdge()
    }
    ,
    goog.labs.userAgent.engine.isGecko = function() {
        return goog.labs.userAgent.util.matchUserAgent("Gecko") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident() && !goog.labs.userAgent.engine.isEdge()
    }
    ,
    goog.labs.userAgent.engine.getVersion = function() {
        var e = goog.labs.userAgent.util.getUserAgent();
        if (e) {
            e = goog.labs.userAgent.util.extractVersionTuples(e);
            var t, o = goog.labs.userAgent.engine.getEngineTuple_(e);
            if (o)
                return "Gecko" == o[0] ? goog.labs.userAgent.engine.getVersionForKey_(e, "Firefox") : o[1];
            if ((e = e[0]) && (t = e[2]) && (t = /Trident\/([^\s;]+)/.exec(t)))
                return t[1]
        }
        return ""
    }
    ,
    goog.labs.userAgent.engine.getEngineTuple_ = function(e) {
        if (!goog.labs.userAgent.engine.isEdge())
            return e[1];
        for (var t = 0; t < e.length; t++) {
            var o = e[t];
            if ("Edge" == o[0])
                return o
        }
    }
    ,
    goog.labs.userAgent.engine.isVersionOrHigher = function(e) {
        return 0 <= goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), e)
    }
    ,
    goog.labs.userAgent.engine.getVersionForKey_ = function(e, t) {
        return (e = goog.array.find(e, (function(e) {
            return t == e[0]
        }
        ))) && e[1] || ""
    }
    ,
    goog.labs.userAgent.platform = {},
    goog.labs.userAgent.platform.isAndroid = function() {
        return goog.labs.userAgent.util.matchUserAgent("Android")
    }
    ,
    goog.labs.userAgent.platform.isIpod = function() {
        return goog.labs.userAgent.util.matchUserAgent("iPod")
    }
    ,
    goog.labs.userAgent.platform.isIphone = function() {
        return goog.labs.userAgent.util.matchUserAgent("iPhone") && !goog.labs.userAgent.util.matchUserAgent("iPod") && !goog.labs.userAgent.util.matchUserAgent("iPad")
    }
    ,
    goog.labs.userAgent.platform.isIpad = function() {
        return goog.labs.userAgent.util.matchUserAgent("iPad")
    }
    ,
    goog.labs.userAgent.platform.isIos = function() {
        return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod()
    }
    ,
    goog.labs.userAgent.platform.isMacintosh = function() {
        return goog.labs.userAgent.util.matchUserAgent("Macintosh")
    }
    ,
    goog.labs.userAgent.platform.isLinux = function() {
        return goog.labs.userAgent.util.matchUserAgent("Linux")
    }
    ,
    goog.labs.userAgent.platform.isWindows = function() {
        return goog.labs.userAgent.util.matchUserAgent("Windows")
    }
    ,
    goog.labs.userAgent.platform.isChromeOS = function() {
        return goog.labs.userAgent.util.matchUserAgent("CrOS")
    }
    ,
    goog.labs.userAgent.platform.isChromecast = function() {
        return goog.labs.userAgent.util.matchUserAgent("CrKey")
    }
    ,
    goog.labs.userAgent.platform.isKaiOS = function() {
        return goog.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS")
    }
    ,
    goog.labs.userAgent.platform.getVersion = function() {
        var e = goog.labs.userAgent.util.getUserAgent()
          , t = "";
        return goog.labs.userAgent.platform.isWindows() ? t = (e = (t = /Windows (?:NT|Phone) ([0-9.]+)/).exec(e)) ? e[1] : "0.0" : goog.labs.userAgent.platform.isIos() ? t = (e = (t = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/).exec(e)) && e[1].replace(/_/g, ".") : goog.labs.userAgent.platform.isMacintosh() ? t = (e = (t = /Mac OS X ([0-9_.]+)/).exec(e)) ? e[1].replace(/_/g, ".") : "10" : goog.labs.userAgent.platform.isKaiOS() ? t = (e = (t = /(?:KaiOS)\/(\S+)/i).exec(e)) && e[1] : goog.labs.userAgent.platform.isAndroid() ? t = (e = (t = /Android\s+([^\);]+)(\)|;)/).exec(e)) && e[1] : goog.labs.userAgent.platform.isChromeOS() && (t = (e = (t = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/).exec(e)) && e[1]),
        t || ""
    }
    ,
    goog.labs.userAgent.platform.isVersionOrHigher = function(e) {
        return 0 <= goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), e)
    }
    ,
    goog.reflect = {},
    goog.reflect.object = function(e, t) {
        return t
    }
    ,
    goog.reflect.objectProperty = function(e, t) {
        return e
    }
    ,
    goog.reflect.sinkValue = function(e) {
        return goog.reflect.sinkValue[" "](e),
        e
    }
    ,
    goog.reflect.sinkValue[" "] = goog.nullFunction,
    goog.reflect.canAccessProperty = function(e, t) {
        try {
            return goog.reflect.sinkValue(e[t]),
            !0
        } catch (e) {}
        return !1
    }
    ,
    goog.reflect.cache = function(e, t, o, r) {
        return r = r ? r(t) : t,
        Object.prototype.hasOwnProperty.call(e, r) ? e[r] : e[r] = o(t)
    }
    ,
    goog.userAgent = {},
    goog.userAgent.ASSUME_IE = !1,
    goog.userAgent.ASSUME_EDGE = !1,
    goog.userAgent.ASSUME_GECKO = !1,
    goog.userAgent.ASSUME_WEBKIT = !1,
    goog.userAgent.ASSUME_MOBILE_WEBKIT = !1,
    goog.userAgent.ASSUME_OPERA = !1,
    goog.userAgent.ASSUME_ANY_VERSION = !1,
    goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA,
    goog.userAgent.getUserAgentString = function() {
        return goog.labs.userAgent.util.getUserAgent()
    }
    ,
    goog.userAgent.getNavigatorTyped = function() {
        return goog.global.navigator || null
    }
    ,
    goog.userAgent.getNavigator = function() {
        return goog.userAgent.getNavigatorTyped()
    }
    ,
    goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera(),
    goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE(),
    goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : goog.labs.userAgent.engine.isEdge(),
    goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE,
    goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko(),
    goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit(),
    goog.userAgent.isMobile_ = function() {
        return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile")
    }
    ,
    goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_(),
    goog.userAgent.SAFARI = goog.userAgent.WEBKIT,
    goog.userAgent.determinePlatform_ = function() {
        var e = goog.userAgent.getNavigatorTyped();
        return e && e.platform || ""
    }
    ,
    goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_(),
    goog.userAgent.ASSUME_MAC = !1,
    goog.userAgent.ASSUME_WINDOWS = !1,
    goog.userAgent.ASSUME_LINUX = !1,
    goog.userAgent.ASSUME_X11 = !1,
    goog.userAgent.ASSUME_ANDROID = !1,
    goog.userAgent.ASSUME_IPHONE = !1,
    goog.userAgent.ASSUME_IPAD = !1,
    goog.userAgent.ASSUME_IPOD = !1,
    goog.userAgent.ASSUME_KAIOS = !1,
    goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD,
    goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh();
    goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows(),
    goog.userAgent.isLegacyLinux_ = function() {
        return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS()
    }
    ,
    goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_(),
    goog.userAgent.isX11_ = function() {
        var e = goog.userAgent.getNavigatorTyped();
        return !!e && goog.string.contains(e.appVersion || "", "X11")
    }
    ,
    goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_(),
    goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid(),
    goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone(),
    goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad(),
    goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIpod(),
    goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIos(),
    goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_KAIOS : goog.labs.userAgent.platform.isKaiOS(),
    goog.userAgent.determineVersion_ = function() {
        var e = ""
          , t = goog.userAgent.getVersionRegexResult_();
        return t && (e = t ? t[1] : ""),
        goog.userAgent.IE && (null != (t = goog.userAgent.getDocumentMode_()) && t > parseFloat(e)) ? String(t) : e
    }
    ,
    goog.userAgent.getVersionRegexResult_ = function() {
        var e = goog.userAgent.getUserAgentString();
        return goog.userAgent.GECKO ? /rv:([^\);]+)(\)|;)/.exec(e) : goog.userAgent.EDGE ? /Edge\/([\d\.]+)/.exec(e) : goog.userAgent.IE ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e) : goog.userAgent.WEBKIT ? /WebKit\/(\S+)/.exec(e) : goog.userAgent.OPERA ? /(?:Version)[ \/]?(\S+)/.exec(e) : void 0
    }
    ,
    goog.userAgent.getDocumentMode_ = function() {
        var e = goog.global.document;
        return e ? e.documentMode : void 0
    }
    ,
    goog.userAgent.VERSION = goog.userAgent.determineVersion_(),
    goog.userAgent.compare = function(e, t) {
        return goog.string.compareVersions(e, t)
    }
    ,
    goog.userAgent.isVersionOrHigherCache_ = {},
    goog.userAgent.isVersionOrHigher = function(e) {
        return goog.userAgent.ASSUME_ANY_VERSION || goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_, e, (function() {
            return 0 <= goog.string.compareVersions(goog.userAgent.VERSION, e)
        }
        ))
    }
    ,
    goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher,
    goog.userAgent.isDocumentModeOrHigher = function(e) {
        return Number(goog.userAgent.DOCUMENT_MODE) >= e
    }
    ,
    goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher,
    goog.userAgent.DOCUMENT_MODE = function() {
        if (goog.global.document && goog.userAgent.IE) {
            var e = goog.userAgent.getDocumentMode_();
            return e || (parseInt(goog.userAgent.VERSION, 10) || void 0)
        }
    }(),
    goog.userAgent.product = {},
    goog.userAgent.product.ASSUME_FIREFOX = !1,
    goog.userAgent.product.ASSUME_IPHONE = !1,
    goog.userAgent.product.ASSUME_IPAD = !1,
    goog.userAgent.product.ASSUME_ANDROID = !1,
    goog.userAgent.product.ASSUME_CHROME = !1,
    goog.userAgent.product.ASSUME_SAFARI = !1,
    goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI,
    goog.userAgent.product.OPERA = goog.userAgent.OPERA,
    goog.userAgent.product.IE = goog.userAgent.IE,
    goog.userAgent.product.EDGE = goog.userAgent.EDGE,
    goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.labs.userAgent.browser.isFirefox(),
    goog.userAgent.product.isIphoneOrIpod_ = function() {
        return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod()
    }
    ,
    goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_(),
    goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad(),
    goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.labs.userAgent.browser.isAndroidBrowser(),
    goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.labs.userAgent.browser.isChrome(),
    goog.userAgent.product.isSafariDesktop_ = function() {
        return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos()
    }
    ,
    goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_(),
    goog.crypt.base64 = {},
    goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "+/=",
    goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "-_.",
    goog.crypt.base64.Alphabet = {
        DEFAULT: 0,
        NO_PADDING: 1,
        WEBSAFE: 2,
        WEBSAFE_DOT_PADDING: 3,
        WEBSAFE_NO_PADDING: 4
    },
    goog.crypt.base64.paddingChars_ = "=.",
    goog.crypt.base64.isPadding_ = function(e) {
        return goog.string.contains(goog.crypt.base64.paddingChars_, e)
    }
    ,
    goog.crypt.base64.byteToCharMaps_ = {},
    goog.crypt.base64.charToByteMap_ = null,
    goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ = goog.userAgent.GECKO || goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI || goog.userAgent.OPERA,
    goog.crypt.base64.HAS_NATIVE_ENCODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || "function" == typeof goog.global.btoa,
    goog.crypt.base64.HAS_NATIVE_DECODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || !goog.userAgent.product.SAFARI && !goog.userAgent.IE && "function" == typeof goog.global.atob,
    goog.crypt.base64.encodeByteArray = function(e, t) {
        goog.asserts.assert(goog.isArrayLike(e), "encodeByteArray takes an array as a parameter"),
        void 0 === t && (t = goog.crypt.base64.Alphabet.DEFAULT),
        goog.crypt.base64.init_(),
        t = goog.crypt.base64.byteToCharMaps_[t];
        for (var o = [], r = 0; r < e.length; r += 3) {
            var i = e[r]
              , a = r + 1 < e.length
              , n = a ? e[r + 1] : 0
              , s = r + 2 < e.length
              , p = s ? e[r + 2] : 0
              , g = i >> 2;
            i = (3 & i) << 4 | n >> 4,
            n = (15 & n) << 2 | p >> 6,
            p &= 63,
            s || (p = 64,
            a || (n = 64)),
            o.push(t[g], t[i], t[n] || "", t[p] || "")
        }
        return o.join("")
    }
    ,
    goog.crypt.base64.encodeString = function(e, t) {
        return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !t ? goog.global.btoa(e) : goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(e), t)
    }
    ,
    goog.crypt.base64.decodeString = function(e, t) {
        if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !t)
            return goog.global.atob(e);
        var o = "";
        return goog.crypt.base64.decodeStringInternal_(e, (function(e) {
            o += String.fromCharCode(e)
        }
        )),
        o
    }
    ,
    goog.crypt.base64.decodeStringToByteArray = function(e, t) {
        var o = [];
        return goog.crypt.base64.decodeStringInternal_(e, (function(e) {
            o.push(e)
        }
        )),
        o
    }
    ,
    goog.crypt.base64.decodeStringToUint8Array = function(e) {
        goog.asserts.assert(!goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"), "Browser does not support typed arrays");
        var t = e.length
          , o = 3 * t / 4;
        o % 3 ? o = Math.floor(o) : goog.crypt.base64.isPadding_(e[t - 1]) && (o = goog.crypt.base64.isPadding_(e[t - 2]) ? o - 2 : o - 1);
        var r = new Uint8Array(o)
          , i = 0;
        return goog.crypt.base64.decodeStringInternal_(e, (function(e) {
            r[i++] = e
        }
        )),
        r.subarray(0, i)
    }
    ,
    goog.crypt.base64.decodeStringInternal_ = function(e, t) {
        function o(t) {
            for (; r < e.length; ) {
                var o = e.charAt(r++)
                  , i = goog.crypt.base64.charToByteMap_[o];
                if (null != i)
                    return i;
                if (!goog.string.isEmptyOrWhitespace(o))
                    throw Error("Unknown base64 encoding at char: " + o)
            }
            return t
        }
        goog.crypt.base64.init_();
        for (var r = 0; ; ) {
            var i = o(-1)
              , a = o(0)
              , n = o(64)
              , s = o(64);
            if (64 === s && -1 === i)
                break;
            t(i << 2 | a >> 4),
            64 != n && (t(a << 4 & 240 | n >> 2),
            64 != s && t(n << 6 & 192 | s))
        }
    }
    ,
    goog.crypt.base64.init_ = function() {
        if (!goog.crypt.base64.charToByteMap_) {
            goog.crypt.base64.charToByteMap_ = {};
            for (var e = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(""), t = ["+/=", "+/", "-_=", "-_.", "-_"], o = 0; 5 > o; o++) {
                var r = e.concat(t[o].split(""));
                goog.crypt.base64.byteToCharMaps_[o] = r;
                for (var i = 0; i < r.length; i++) {
                    var a = r[i]
                      , n = goog.crypt.base64.charToByteMap_[a];
                    void 0 === n ? goog.crypt.base64.charToByteMap_[a] = i : goog.asserts.assert(n === i)
                }
            }
        }
    }
    ,
    jspb.utils = {},
    jspb.utils.split64Low = 0,
    jspb.utils.split64High = 0,
    jspb.utils.splitUint64 = function(e) {
        var t = e >>> 0;
        e = Math.floor((e - t) / jspb.BinaryConstants.TWO_TO_32) >>> 0,
        jspb.utils.split64Low = t,
        jspb.utils.split64High = e
    }
    ,
    jspb.utils.splitInt64 = function(e) {
        var t = 0 > e
          , o = (e = Math.abs(e)) >>> 0;
        e = Math.floor((e - o) / jspb.BinaryConstants.TWO_TO_32),
        e >>>= 0,
        t && (e = ~e >>> 0,
        4294967295 < (o = 1 + (~o >>> 0)) && (o = 0,
        4294967295 < ++e && (e = 0))),
        jspb.utils.split64Low = o,
        jspb.utils.split64High = e
    }
    ,
    jspb.utils.splitZigzag64 = function(e) {
        var t = 0 > e;
        e = 2 * Math.abs(e),
        jspb.utils.splitUint64(e),
        e = jspb.utils.split64Low;
        var o = jspb.utils.split64High;
        t && (0 == e ? 0 == o ? o = e = 4294967295 : (o--,
        e = 4294967295) : e--),
        jspb.utils.split64Low = e,
        jspb.utils.split64High = o
    }
    ,
    jspb.utils.splitFloat32 = function(e) {
        var t = 0 > e ? 1 : 0;
        if (0 === (e = t ? -e : e))
            0 < 1 / e ? (jspb.utils.split64High = 0,
            jspb.utils.split64Low = 0) : (jspb.utils.split64High = 0,
            jspb.utils.split64Low = 2147483648);
        else if (isNaN(e))
            jspb.utils.split64High = 0,
            jspb.utils.split64Low = 2147483647;
        else if (e > jspb.BinaryConstants.FLOAT32_MAX)
            jspb.utils.split64High = 0,
            jspb.utils.split64Low = (t << 31 | 2139095040) >>> 0;
        else if (e < jspb.BinaryConstants.FLOAT32_MIN)
            e = Math.round(e / Math.pow(2, -149)),
            jspb.utils.split64High = 0,
            jspb.utils.split64Low = (t << 31 | e) >>> 0;
        else {
            var o = Math.floor(Math.log(e) / Math.LN2);
            e *= Math.pow(2, -o),
            16777216 <= (e = Math.round(e * jspb.BinaryConstants.TWO_TO_23)) && ++o,
            jspb.utils.split64High = 0,
            jspb.utils.split64Low = (t << 31 | o + 127 << 23 | 8388607 & e) >>> 0
        }
    }
    ,
    jspb.utils.splitFloat64 = function(e) {
        var t = 0 > e ? 1 : 0;
        if (0 === (e = t ? -e : e))
            jspb.utils.split64High = 0 < 1 / e ? 0 : 2147483648,
            jspb.utils.split64Low = 0;
        else if (isNaN(e))
            jspb.utils.split64High = 2147483647,
            jspb.utils.split64Low = 4294967295;
        else if (e > jspb.BinaryConstants.FLOAT64_MAX)
            jspb.utils.split64High = (t << 31 | 2146435072) >>> 0,
            jspb.utils.split64Low = 0;
        else if (e < jspb.BinaryConstants.FLOAT64_MIN) {
            var o = e / Math.pow(2, -1074);
            e = o / jspb.BinaryConstants.TWO_TO_32,
            jspb.utils.split64High = (t << 31 | e) >>> 0,
            jspb.utils.split64Low = o >>> 0
        } else {
            var r = 0;
            if (2 <= (o = e))
                for (; 2 <= o && 1023 > r; )
                    r++,
                    o /= 2;
            else
                for (; 1 > o && -1022 < r; )
                    o *= 2,
                    r--;
            e = (o = e * Math.pow(2, -r)) * jspb.BinaryConstants.TWO_TO_20 & 1048575,
            o = o * jspb.BinaryConstants.TWO_TO_52 >>> 0,
            jspb.utils.split64High = (t << 31 | r + 1023 << 20 | e) >>> 0,
            jspb.utils.split64Low = o
        }
    }
    ,
    jspb.utils.splitHash64 = function(e) {
        var t = e.charCodeAt(0)
          , o = e.charCodeAt(1)
          , r = e.charCodeAt(2)
          , i = e.charCodeAt(3)
          , a = e.charCodeAt(4)
          , n = e.charCodeAt(5)
          , s = e.charCodeAt(6);
        e = e.charCodeAt(7),
        jspb.utils.split64Low = t + (o << 8) + (r << 16) + (i << 24) >>> 0,
        jspb.utils.split64High = a + (n << 8) + (s << 16) + (e << 24) >>> 0
    }
    ,
    jspb.utils.joinUint64 = function(e, t) {
        return t * jspb.BinaryConstants.TWO_TO_32 + (e >>> 0)
    }
    ,
    jspb.utils.joinInt64 = function(e, t) {
        var o = 2147483648 & t;
        return o && (t = ~t >>> 0,
        0 == (e = 1 + ~e >>> 0) && (t = t + 1 >>> 0)),
        e = jspb.utils.joinUint64(e, t),
        o ? -e : e
    }
    ,
    jspb.utils.toZigzag64 = function(e, t, o) {
        var r = t >> 31;
        return o(e << 1 ^ r, (t << 1 | e >>> 31) ^ r)
    }
    ,
    jspb.utils.joinZigzag64 = function(e, t) {
        return jspb.utils.fromZigzag64(e, t, jspb.utils.joinInt64)
    }
    ,
    jspb.utils.fromZigzag64 = function(e, t, o) {
        var r = -(1 & e);
        return o((e >>> 1 | t << 31) ^ r, t >>> 1 ^ r)
    }
    ,
    jspb.utils.joinFloat32 = function(e, t) {
        t = 2 * (e >> 31) + 1;
        var o = e >>> 23 & 255;
        return e &= 8388607,
        255 == o ? e ? NaN : 1 / 0 * t : 0 == o ? t * Math.pow(2, -149) * e : t * Math.pow(2, o - 150) * (e + Math.pow(2, 23))
    }
    ,
    jspb.utils.joinFloat64 = function(e, t) {
        var o = 2 * (t >> 31) + 1
          , r = t >>> 20 & 2047;
        return e = jspb.BinaryConstants.TWO_TO_32 * (1048575 & t) + e,
        2047 == r ? e ? NaN : 1 / 0 * o : 0 == r ? o * Math.pow(2, -1074) * e : o * Math.pow(2, r - 1075) * (e + jspb.BinaryConstants.TWO_TO_52)
    }
    ,
    jspb.utils.joinHash64 = function(e, t) {
        return String.fromCharCode(e >>> 0 & 255, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255, t >>> 0 & 255, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255)
    }
    ,
    jspb.utils.DIGITS = "0123456789abcdef".split(""),
    jspb.utils.ZERO_CHAR_CODE_ = 48,
    jspb.utils.A_CHAR_CODE_ = 97,
    jspb.utils.joinUnsignedDecimalString = function(e, t) {
        function o(e, t) {
            return e = e ? String(e) : "",
            t ? "0000000".slice(e.length) + e : e
        }
        if (2097151 >= t)
            return "" + jspb.utils.joinUint64(e, t);
        var r = (e >>> 24 | t << 8) >>> 0 & 16777215;
        return e = (16777215 & e) + 6777216 * r + 6710656 * (t = t >> 16 & 65535),
        r += 8147497 * t,
        t *= 2,
        1e7 <= e && (r += Math.floor(e / 1e7),
        e %= 1e7),
        1e7 <= r && (t += Math.floor(r / 1e7),
        r %= 1e7),
        o(t, 0) + o(r, t) + o(e, 1)
    }
    ,
    jspb.utils.joinSignedDecimalString = function(e, t) {
        var o = 2147483648 & t;
        return o && (t = ~t + (0 == (e = 1 + ~e >>> 0) ? 1 : 0) >>> 0),
        e = jspb.utils.joinUnsignedDecimalString(e, t),
        o ? "-" + e : e
    }
    ,
    jspb.utils.hash64ToDecimalString = function(e, t) {
        jspb.utils.splitHash64(e),
        e = jspb.utils.split64Low;
        var o = jspb.utils.split64High;
        return t ? jspb.utils.joinSignedDecimalString(e, o) : jspb.utils.joinUnsignedDecimalString(e, o)
    }
    ,
    jspb.utils.hash64ArrayToDecimalStrings = function(e, t) {
        for (var o = Array(e.length), r = 0; r < e.length; r++)
            o[r] = jspb.utils.hash64ToDecimalString(e[r], t);
        return o
    }
    ,
    jspb.utils.decimalStringToHash64 = function(e) {
        function t(e, t) {
            for (var o = 0; 8 > o && (1 !== e || 0 < t); o++)
                t = e * r[o] + t,
                r[o] = 255 & t,
                t >>>= 8
        }
        jspb.asserts.assert(0 < e.length);
        var o = !1;
        "-" === e[0] && (o = !0,
        e = e.slice(1));
        for (var r = [0, 0, 0, 0, 0, 0, 0, 0], i = 0; i < e.length; i++)
            t(10, e.charCodeAt(i) - jspb.utils.ZERO_CHAR_CODE_);
        return o && (function() {
            for (var e = 0; 8 > e; e++)
                r[e] = 255 & ~r[e]
        }(),
        t(1, 1)),
        goog.crypt.byteArrayToString(r)
    }
    ,
    jspb.utils.splitDecimalString = function(e) {
        jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e))
    }
    ,
    jspb.utils.toHexDigit_ = function(e) {
        return String.fromCharCode(10 > e ? jspb.utils.ZERO_CHAR_CODE_ + e : jspb.utils.A_CHAR_CODE_ - 10 + e)
    }
    ,
    jspb.utils.fromHexCharCode_ = function(e) {
        return e >= jspb.utils.A_CHAR_CODE_ ? e - jspb.utils.A_CHAR_CODE_ + 10 : e - jspb.utils.ZERO_CHAR_CODE_
    }
    ,
    jspb.utils.hash64ToHexString = function(e) {
        var t = Array(18);
        t[0] = "0",
        t[1] = "x";
        for (var o = 0; 8 > o; o++) {
            var r = e.charCodeAt(7 - o);
            t[2 * o + 2] = jspb.utils.toHexDigit_(r >> 4),
            t[2 * o + 3] = jspb.utils.toHexDigit_(15 & r)
        }
        return t.join("")
    }
    ,
    jspb.utils.hexStringToHash64 = function(e) {
        e = e.toLowerCase(),
        jspb.asserts.assert(18 == e.length),
        jspb.asserts.assert("0" == e[0]),
        jspb.asserts.assert("x" == e[1]);
        for (var t = "", o = 0; 8 > o; o++) {
            var r = jspb.utils.fromHexCharCode_(e.charCodeAt(2 * o + 2))
              , i = jspb.utils.fromHexCharCode_(e.charCodeAt(2 * o + 3));
            t = String.fromCharCode(16 * r + i) + t
        }
        return t
    }
    ,
    jspb.utils.hash64ToNumber = function(e, t) {
        jspb.utils.splitHash64(e),
        e = jspb.utils.split64Low;
        var o = jspb.utils.split64High;
        return t ? jspb.utils.joinInt64(e, o) : jspb.utils.joinUint64(e, o)
    }
    ,
    jspb.utils.numberToHash64 = function(e) {
        return jspb.utils.splitInt64(e),
        jspb.utils.joinHash64(jspb.utils.split64Low, jspb.utils.split64High)
    }
    ,
    jspb.utils.countVarints = function(e, t, o) {
        for (var r = 0, i = t; i < o; i++)
            r += e[i] >> 7;
        return o - t - r
    }
    ,
    jspb.utils.countVarintFields = function(e, t, o, r) {
        var i = 0;
        if (128 > (r = 8 * r + jspb.BinaryConstants.WireType.VARINT))
            for (; t < o && e[t++] == r; )
                for (i++; ; ) {
                    var a = e[t++];
                    if (0 == (128 & a))
                        break
                }
        else
            for (; t < o; ) {
                for (a = r; 128 < a; ) {
                    if (e[t] != (127 & a | 128))
                        return i;
                    t++,
                    a >>= 7
                }
                if (e[t++] != a)
                    break;
                for (i++; 0 != (128 & (a = e[t++])); )
                    ;
            }
        return i
    }
    ,
    jspb.utils.countFixedFields_ = function(e, t, o, r, i) {
        var a = 0;
        if (128 > r)
            for (; t < o && e[t++] == r; )
                a++,
                t += i;
        else
            for (; t < o; ) {
                for (var n = r; 128 < n; ) {
                    if (e[t++] != (127 & n | 128))
                        return a;
                    n >>= 7
                }
                if (e[t++] != n)
                    break;
                a++,
                t += i
            }
        return a
    }
    ,
    jspb.utils.countFixed32Fields = function(e, t, o, r) {
        return jspb.utils.countFixedFields_(e, t, o, 8 * r + jspb.BinaryConstants.WireType.FIXED32, 4)
    }
    ,
    jspb.utils.countFixed64Fields = function(e, t, o, r) {
        return jspb.utils.countFixedFields_(e, t, o, 8 * r + jspb.BinaryConstants.WireType.FIXED64, 8)
    }
    ,
    jspb.utils.countDelimitedFields = function(e, t, o, r) {
        var i = 0;
        for (r = 8 * r + jspb.BinaryConstants.WireType.DELIMITED; t < o; ) {
            for (var a = r; 128 < a; ) {
                if (e[t++] != (127 & a | 128))
                    return i;
                a >>= 7
            }
            if (e[t++] != a)
                break;
            i++;
            for (var n = 0, s = 1; n += (127 & (a = e[t++])) * s,
            s *= 128,
            0 != (128 & a); )
                ;
            t += n
        }
        return i
    }
    ,
    jspb.utils.debugBytesToTextFormat = function(e) {
        var t = '"';
        if (e) {
            e = jspb.utils.byteSourceToUint8Array(e);
            for (var o = 0; o < e.length; o++)
                t += "\\x",
                16 > e[o] && (t += "0"),
                t += e[o].toString(16)
        }
        return t + '"'
    }
    ,
    jspb.utils.debugScalarToTextFormat = function(e) {
        return "string" == typeof e ? goog.string.quote(e) : e.toString()
    }
    ,
    jspb.utils.stringToByteArray = function(e) {
        for (var t = new Uint8Array(e.length), o = 0; o < e.length; o++) {
            var r = e.charCodeAt(o);
            if (255 < r)
                throw Error("Conversion error: string contains codepoint outside of byte range");
            t[o] = r
        }
        return t
    }
    ,
    jspb.utils.byteSourceToUint8Array = function(e) {
        return e.constructor === Uint8Array ? e : e.constructor === ArrayBuffer || e.constructor === Array ? new Uint8Array(e) : e.constructor === String ? goog.crypt.base64.decodeStringToUint8Array(e) : e instanceof Uint8Array ? new Uint8Array(e.buffer,e.byteOffset,e.byteLength) : (jspb.asserts.fail("Type not convertible to Uint8Array."),
        new Uint8Array(0))
    }
    ,
    jspb.BinaryDecoder = function(e, t, o) {
        this.bytes_ = null,
        this.cursor_ = this.end_ = this.start_ = 0,
        this.error_ = !1,
        e && this.setBlock(e, t, o)
    }
    ,
    jspb.BinaryDecoder.instanceCache_ = [],
    jspb.BinaryDecoder.alloc = function(e, t, o) {
        if (jspb.BinaryDecoder.instanceCache_.length) {
            var r = jspb.BinaryDecoder.instanceCache_.pop();
            return e && r.setBlock(e, t, o),
            r
        }
        return new jspb.BinaryDecoder(e,t,o)
    }
    ,
    jspb.BinaryDecoder.prototype.free = function() {
        this.clear(),
        100 > jspb.BinaryDecoder.instanceCache_.length && jspb.BinaryDecoder.instanceCache_.push(this)
    }
    ,
    jspb.BinaryDecoder.prototype.clone = function() {
        return jspb.BinaryDecoder.alloc(this.bytes_, this.start_, this.end_ - this.start_)
    }
    ,
    jspb.BinaryDecoder.prototype.clear = function() {
        this.bytes_ = null,
        this.cursor_ = this.end_ = this.start_ = 0,
        this.error_ = !1
    }
    ,
    jspb.BinaryDecoder.prototype.getBuffer = function() {
        return this.bytes_
    }
    ,
    jspb.BinaryDecoder.prototype.setBlock = function(e, t, o) {
        this.bytes_ = jspb.utils.byteSourceToUint8Array(e),
        this.start_ = void 0 !== t ? t : 0,
        this.end_ = void 0 !== o ? this.start_ + o : this.bytes_.length,
        this.cursor_ = this.start_
    }
    ,
    jspb.BinaryDecoder.prototype.getEnd = function() {
        return this.end_
    }
    ,
    jspb.BinaryDecoder.prototype.setEnd = function(e) {
        this.end_ = e
    }
    ,
    jspb.BinaryDecoder.prototype.reset = function() {
        this.cursor_ = this.start_
    }
    ,
    jspb.BinaryDecoder.prototype.getCursor = function() {
        return this.cursor_
    }
    ,
    jspb.BinaryDecoder.prototype.setCursor = function(e) {
        this.cursor_ = e
    }
    ,
    jspb.BinaryDecoder.prototype.advance = function(e) {
        this.cursor_ += e,
        jspb.asserts.assert(this.cursor_ <= this.end_)
    }
    ,
    jspb.BinaryDecoder.prototype.atEnd = function() {
        return this.cursor_ == this.end_
    }
    ,
    jspb.BinaryDecoder.prototype.pastEnd = function() {
        return this.cursor_ > this.end_
    }
    ,
    jspb.BinaryDecoder.prototype.getError = function() {
        return this.error_ || 0 > this.cursor_ || this.cursor_ > this.end_
    }
    ,
    jspb.BinaryDecoder.prototype.readSplitVarint64 = function(e) {
        for (var t = 128, o = 0, r = 0, i = 0; 4 > i && 128 <= t; i++)
            o |= (127 & (t = this.bytes_[this.cursor_++])) << 7 * i;
        if (128 <= t && (o |= (127 & (t = this.bytes_[this.cursor_++])) << 28,
        r |= (127 & t) >> 4),
        128 <= t)
            for (i = 0; 5 > i && 128 <= t; i++)
                r |= (127 & (t = this.bytes_[this.cursor_++])) << 7 * i + 3;
        if (128 > t)
            return e(o >>> 0, r >>> 0);
        jspb.asserts.fail("Failed to read varint, encoding is invalid."),
        this.error_ = !0
    }
    ,
    jspb.BinaryDecoder.prototype.readSplitZigzagVarint64 = function(e) {
        return this.readSplitVarint64((function(t, o) {
            return jspb.utils.fromZigzag64(t, o, e)
        }
        ))
    }
    ,
    jspb.BinaryDecoder.prototype.readSplitFixed64 = function(e) {
        var t = this.bytes_
          , o = this.cursor_;
        this.cursor_ += 8;
        for (var r = 0, i = 0, a = o + 7; a >= o; a--)
            r = r << 8 | t[a],
            i = i << 8 | t[a + 4];
        return e(r, i)
    }
    ,
    jspb.BinaryDecoder.prototype.skipVarint = function() {
        for (; 128 & this.bytes_[this.cursor_]; )
            this.cursor_++;
        this.cursor_++
    }
    ,
    jspb.BinaryDecoder.prototype.unskipVarint = function(e) {
        for (; 128 < e; )
            this.cursor_--,
            e >>>= 7;
        this.cursor_--
    }
    ,
    jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function() {
        var e = this.bytes_
          , t = e[this.cursor_ + 0]
          , o = 127 & t;
        return 128 > t ? (this.cursor_ += 1,
        jspb.asserts.assert(this.cursor_ <= this.end_),
        o) : (o |= (127 & (t = e[this.cursor_ + 1])) << 7,
        128 > t ? (this.cursor_ += 2,
        jspb.asserts.assert(this.cursor_ <= this.end_),
        o) : (o |= (127 & (t = e[this.cursor_ + 2])) << 14,
        128 > t ? (this.cursor_ += 3,
        jspb.asserts.assert(this.cursor_ <= this.end_),
        o) : (o |= (127 & (t = e[this.cursor_ + 3])) << 21,
        128 > t ? (this.cursor_ += 4,
        jspb.asserts.assert(this.cursor_ <= this.end_),
        o) : (o |= (15 & (t = e[this.cursor_ + 4])) << 28,
        128 > t ? (this.cursor_ += 5,
        jspb.asserts.assert(this.cursor_ <= this.end_),
        o >>> 0) : (this.cursor_ += 5,
        128 <= e[this.cursor_++] && 128 <= e[this.cursor_++] && 128 <= e[this.cursor_++] && 128 <= e[this.cursor_++] && 128 <= e[this.cursor_++] && jspb.asserts.assert(!1),
        jspb.asserts.assert(this.cursor_ <= this.end_),
        o)))))
    }
    ,
    jspb.BinaryDecoder.prototype.readSignedVarint32 = function() {
        return ~~this.readUnsignedVarint32()
    }
    ,
    jspb.BinaryDecoder.prototype.readUnsignedVarint32String = function() {
        return this.readUnsignedVarint32().toString()
    }
    ,
    jspb.BinaryDecoder.prototype.readSignedVarint32String = function() {
        return this.readSignedVarint32().toString()
    }
    ,
    jspb.BinaryDecoder.prototype.readZigzagVarint32 = function() {
        var e = this.readUnsignedVarint32();
        return e >>> 1 ^ -(1 & e)
    }
    ,
    jspb.BinaryDecoder.prototype.readUnsignedVarint64 = function() {
        return this.readSplitVarint64(jspb.utils.joinUint64)
    }
    ,
    jspb.BinaryDecoder.prototype.readUnsignedVarint64String = function() {
        return this.readSplitVarint64(jspb.utils.joinUnsignedDecimalString)
    }
    ,
    jspb.BinaryDecoder.prototype.readSignedVarint64 = function() {
        return this.readSplitVarint64(jspb.utils.joinInt64)
    }
    ,
    jspb.BinaryDecoder.prototype.readSignedVarint64String = function() {
        return this.readSplitVarint64(jspb.utils.joinSignedDecimalString)
    }
    ,
    jspb.BinaryDecoder.prototype.readZigzagVarint64 = function() {
        return this.readSplitVarint64(jspb.utils.joinZigzag64)
    }
    ,
    jspb.BinaryDecoder.prototype.readZigzagVarintHash64 = function() {
        return this.readSplitZigzagVarint64(jspb.utils.joinHash64)
    }
    ,
    jspb.BinaryDecoder.prototype.readZigzagVarint64String = function() {
        return this.readSplitZigzagVarint64(jspb.utils.joinSignedDecimalString)
    }
    ,
    jspb.BinaryDecoder.prototype.readUint8 = function() {
        var e = this.bytes_[this.cursor_ + 0];
        return this.cursor_ += 1,
        jspb.asserts.assert(this.cursor_ <= this.end_),
        e
    }
    ,
    jspb.BinaryDecoder.prototype.readUint16 = function() {
        var e = this.bytes_[this.cursor_ + 0]
          , t = this.bytes_[this.cursor_ + 1];
        return this.cursor_ += 2,
        jspb.asserts.assert(this.cursor_ <= this.end_),
        e << 0 | t << 8
    }
    ,
    jspb.BinaryDecoder.prototype.readUint32 = function() {
        var e = this.bytes_[this.cursor_ + 0]
          , t = this.bytes_[this.cursor_ + 1]
          , o = this.bytes_[this.cursor_ + 2]
          , r = this.bytes_[this.cursor_ + 3];
        return this.cursor_ += 4,
        jspb.asserts.assert(this.cursor_ <= this.end_),
        (e << 0 | t << 8 | o << 16 | r << 24) >>> 0
    }
    ,
    jspb.BinaryDecoder.prototype.readUint64 = function() {
        var e = this.readUint32()
          , t = this.readUint32();
        return jspb.utils.joinUint64(e, t)
    }
    ,
    jspb.BinaryDecoder.prototype.readUint64String = function() {
        var e = this.readUint32()
          , t = this.readUint32();
        return jspb.utils.joinUnsignedDecimalString(e, t)
    }
    ,
    jspb.BinaryDecoder.prototype.readInt8 = function() {
        var e = this.bytes_[this.cursor_ + 0];
        return this.cursor_ += 1,
        jspb.asserts.assert(this.cursor_ <= this.end_),
        e << 24 >> 24
    }
    ,
    jspb.BinaryDecoder.prototype.readInt16 = function() {
        var e = this.bytes_[this.cursor_ + 0]
          , t = this.bytes_[this.cursor_ + 1];
        return this.cursor_ += 2,
        jspb.asserts.assert(this.cursor_ <= this.end_),
        (e << 0 | t << 8) << 16 >> 16
    }
    ,
    jspb.BinaryDecoder.prototype.readInt32 = function() {
        var e = this.bytes_[this.cursor_ + 0]
          , t = this.bytes_[this.cursor_ + 1]
          , o = this.bytes_[this.cursor_ + 2]
          , r = this.bytes_[this.cursor_ + 3];
        return this.cursor_ += 4,
        jspb.asserts.assert(this.cursor_ <= this.end_),
        e << 0 | t << 8 | o << 16 | r << 24
    }
    ,
    jspb.BinaryDecoder.prototype.readInt64 = function() {
        var e = this.readUint32()
          , t = this.readUint32();
        return jspb.utils.joinInt64(e, t)
    }
    ,
    jspb.BinaryDecoder.prototype.readInt64String = function() {
        var e = this.readUint32()
          , t = this.readUint32();
        return jspb.utils.joinSignedDecimalString(e, t)
    }
    ,
    jspb.BinaryDecoder.prototype.readFloat = function() {
        var e = this.readUint32();
        return jspb.utils.joinFloat32(e, 0)
    }
    ,
    jspb.BinaryDecoder.prototype.readDouble = function() {
        var e = this.readUint32()
          , t = this.readUint32();
        return jspb.utils.joinFloat64(e, t)
    }
    ,
    jspb.BinaryDecoder.prototype.readBool = function() {
        return !!this.bytes_[this.cursor_++]
    }
    ,
    jspb.BinaryDecoder.prototype.readEnum = function() {
        return this.readSignedVarint32()
    }
    ,
    jspb.BinaryDecoder.prototype.readString = function(e) {
        var t = this.bytes_
          , o = this.cursor_;
        e = o + e;
        for (var r = [], i = ""; o < e; ) {
            var a = t[o++];
            if (128 > a)
                r.push(a);
            else {
                if (192 > a)
                    continue;
                if (224 > a) {
                    var n = t[o++];
                    r.push((31 & a) << 6 | 63 & n)
                } else if (240 > a) {
                    n = t[o++];
                    var s = t[o++];
                    r.push((15 & a) << 12 | (63 & n) << 6 | 63 & s)
                } else if (248 > a) {
                    a = (7 & a) << 18 | (63 & (n = t[o++])) << 12 | (63 & (s = t[o++])) << 6 | 63 & t[o++],
                    a -= 65536,
                    r.push(55296 + (a >> 10 & 1023), 56320 + (1023 & a))
                }
            }
            8192 <= r.length && (i += String.fromCharCode.apply(null, r),
            r.length = 0)
        }
        return i += goog.crypt.byteArrayToString(r),
        this.cursor_ = o,
        i
    }
    ,
    jspb.BinaryDecoder.prototype.readStringWithLength = function() {
        var e = this.readUnsignedVarint32();
        return this.readString(e)
    }
    ,
    jspb.BinaryDecoder.prototype.readBytes = function(e) {
        if (0 > e || this.cursor_ + e > this.bytes_.length)
            return this.error_ = !0,
            jspb.asserts.fail("Invalid byte length!"),
            new Uint8Array(0);
        var t = this.bytes_.subarray(this.cursor_, this.cursor_ + e);
        return this.cursor_ += e,
        jspb.asserts.assert(this.cursor_ <= this.end_),
        t
    }
    ,
    jspb.BinaryDecoder.prototype.readVarintHash64 = function() {
        return this.readSplitVarint64(jspb.utils.joinHash64)
    }
    ,
    jspb.BinaryDecoder.prototype.readFixedHash64 = function() {
        var e = this.bytes_
          , t = this.cursor_
          , o = e[t + 0]
          , r = e[t + 1]
          , i = e[t + 2]
          , a = e[t + 3]
          , n = e[t + 4]
          , s = e[t + 5]
          , p = e[t + 6];
        return e = e[t + 7],
        this.cursor_ += 8,
        String.fromCharCode(o, r, i, a, n, s, p, e)
    }
    ,
    jspb.BinaryReader = function(e, t, o) {
        this.decoder_ = jspb.BinaryDecoder.alloc(e, t, o),
        this.fieldCursor_ = this.decoder_.getCursor(),
        this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER,
        this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID,
        this.error_ = !1,
        this.readCallbacks_ = null
    }
    ,
    jspb.BinaryReader.instanceCache_ = [],
    jspb.BinaryReader.alloc = function(e, t, o) {
        if (jspb.BinaryReader.instanceCache_.length) {
            var r = jspb.BinaryReader.instanceCache_.pop();
            return e && r.decoder_.setBlock(e, t, o),
            r
        }
        return new jspb.BinaryReader(e,t,o)
    }
    ,
    jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc,
    jspb.BinaryReader.prototype.free = function() {
        this.decoder_.clear(),
        this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER,
        this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID,
        this.error_ = !1,
        this.readCallbacks_ = null,
        100 > jspb.BinaryReader.instanceCache_.length && jspb.BinaryReader.instanceCache_.push(this)
    }
    ,
    jspb.BinaryReader.prototype.getFieldCursor = function() {
        return this.fieldCursor_
    }
    ,
    jspb.BinaryReader.prototype.getCursor = function() {
        return this.decoder_.getCursor()
    }
    ,
    jspb.BinaryReader.prototype.getBuffer = function() {
        return this.decoder_.getBuffer()
    }
    ,
    jspb.BinaryReader.prototype.getFieldNumber = function() {
        return this.nextField_
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "getFieldNumber", jspb.BinaryReader.prototype.getFieldNumber),
    jspb.BinaryReader.prototype.getWireType = function() {
        return this.nextWireType_
    }
    ,
    jspb.BinaryReader.prototype.isDelimited = function() {
        return this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "isDelimited", jspb.BinaryReader.prototype.isDelimited),
    jspb.BinaryReader.prototype.isEndGroup = function() {
        return this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "isEndGroup", jspb.BinaryReader.prototype.isEndGroup),
    jspb.BinaryReader.prototype.getError = function() {
        return this.error_ || this.decoder_.getError()
    }
    ,
    jspb.BinaryReader.prototype.setBlock = function(e, t, o) {
        this.decoder_.setBlock(e, t, o),
        this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER,
        this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID
    }
    ,
    jspb.BinaryReader.prototype.reset = function() {
        this.decoder_.reset(),
        this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER,
        this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID
    }
    ,
    jspb.BinaryReader.prototype.advance = function(e) {
        this.decoder_.advance(e)
    }
    ,
    jspb.BinaryReader.prototype.nextField = function() {
        if (this.decoder_.atEnd())
            return !1;
        if (this.getError())
            return jspb.asserts.fail("Decoder hit an error"),
            !1;
        this.fieldCursor_ = this.decoder_.getCursor();
        var e = this.decoder_.readUnsignedVarint32()
          , t = e >>> 3;
        return (e &= 7) != jspb.BinaryConstants.WireType.VARINT && e != jspb.BinaryConstants.WireType.FIXED32 && e != jspb.BinaryConstants.WireType.FIXED64 && e != jspb.BinaryConstants.WireType.DELIMITED && e != jspb.BinaryConstants.WireType.START_GROUP && e != jspb.BinaryConstants.WireType.END_GROUP ? (jspb.asserts.fail("Invalid wire type: %s (at position %s)", e, this.fieldCursor_),
        this.error_ = !0,
        !1) : (this.nextField_ = t,
        this.nextWireType_ = e,
        !0)
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "nextField", jspb.BinaryReader.prototype.nextField),
    jspb.BinaryReader.prototype.unskipHeader = function() {
        this.decoder_.unskipVarint(this.nextField_ << 3 | this.nextWireType_)
    }
    ,
    jspb.BinaryReader.prototype.skipMatchingFields = function() {
        var e = this.nextField_;
        for (this.unskipHeader(); this.nextField() && this.getFieldNumber() == e; )
            this.skipField();
        this.decoder_.atEnd() || this.unskipHeader()
    }
    ,
    jspb.BinaryReader.prototype.skipVarintField = function() {
        this.nextWireType_ != jspb.BinaryConstants.WireType.VARINT ? (jspb.asserts.fail("Invalid wire type for skipVarintField"),
        this.skipField()) : this.decoder_.skipVarint()
    }
    ,
    jspb.BinaryReader.prototype.skipDelimitedField = function() {
        if (this.nextWireType_ != jspb.BinaryConstants.WireType.DELIMITED)
            jspb.asserts.fail("Invalid wire type for skipDelimitedField"),
            this.skipField();
        else {
            var e = this.decoder_.readUnsignedVarint32();
            this.decoder_.advance(e)
        }
    }
    ,
    jspb.BinaryReader.prototype.skipFixed32Field = function() {
        this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED32 ? (jspb.asserts.fail("Invalid wire type for skipFixed32Field"),
        this.skipField()) : this.decoder_.advance(4)
    }
    ,
    jspb.BinaryReader.prototype.skipFixed64Field = function() {
        this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED64 ? (jspb.asserts.fail("Invalid wire type for skipFixed64Field"),
        this.skipField()) : this.decoder_.advance(8)
    }
    ,
    jspb.BinaryReader.prototype.skipGroup = function() {
        for (var e = this.nextField_; ; ) {
            if (!this.nextField()) {
                jspb.asserts.fail("Unmatched start-group tag: stream EOF"),
                this.error_ = !0;
                break
            }
            if (this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP) {
                this.nextField_ != e && (jspb.asserts.fail("Unmatched end-group tag"),
                this.error_ = !0);
                break
            }
            this.skipField()
        }
    }
    ,
    jspb.BinaryReader.prototype.skipField = function() {
        switch (this.nextWireType_) {
        case jspb.BinaryConstants.WireType.VARINT:
            this.skipVarintField();
            break;
        case jspb.BinaryConstants.WireType.FIXED64:
            this.skipFixed64Field();
            break;
        case jspb.BinaryConstants.WireType.DELIMITED:
            this.skipDelimitedField();
            break;
        case jspb.BinaryConstants.WireType.FIXED32:
            this.skipFixed32Field();
            break;
        case jspb.BinaryConstants.WireType.START_GROUP:
            this.skipGroup();
            break;
        default:
            jspb.asserts.fail("Invalid wire encoding for field.")
        }
    }
    ,
    jspb.BinaryReader.prototype.registerReadCallback = function(e, t) {
        null === this.readCallbacks_ && (this.readCallbacks_ = {}),
        jspb.asserts.assert(!this.readCallbacks_[e]),
        this.readCallbacks_[e] = t
    }
    ,
    jspb.BinaryReader.prototype.runReadCallback = function(e) {
        return jspb.asserts.assert(null !== this.readCallbacks_),
        e = this.readCallbacks_[e],
        jspb.asserts.assert(e),
        e(this)
    }
    ,
    jspb.BinaryReader.prototype.readAny = function(e) {
        this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(e);
        var t = jspb.BinaryConstants.FieldType;
        switch (e) {
        case t.DOUBLE:
            return this.readDouble();
        case t.FLOAT:
            return this.readFloat();
        case t.INT64:
            return this.readInt64();
        case t.UINT64:
            return this.readUint64();
        case t.INT32:
            return this.readInt32();
        case t.FIXED64:
            return this.readFixed64();
        case t.FIXED32:
            return this.readFixed32();
        case t.BOOL:
            return this.readBool();
        case t.STRING:
            return this.readString();
        case t.GROUP:
            jspb.asserts.fail("Group field type not supported in readAny()");
        case t.MESSAGE:
            jspb.asserts.fail("Message field type not supported in readAny()");
        case t.BYTES:
            return this.readBytes();
        case t.UINT32:
            return this.readUint32();
        case t.ENUM:
            return this.readEnum();
        case t.SFIXED32:
            return this.readSfixed32();
        case t.SFIXED64:
            return this.readSfixed64();
        case t.SINT32:
            return this.readSint32();
        case t.SINT64:
            return this.readSint64();
        case t.FHASH64:
            return this.readFixedHash64();
        case t.VHASH64:
            return this.readVarintHash64();
        default:
            jspb.asserts.fail("Invalid field type in readAny()")
        }
        return 0
    }
    ,
    jspb.BinaryReader.prototype.readMessage = function(e, t) {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var o = this.decoder_.getEnd()
          , r = this.decoder_.readUnsignedVarint32();
        r = this.decoder_.getCursor() + r,
        this.decoder_.setEnd(r),
        t(e, this),
        this.decoder_.setCursor(r),
        this.decoder_.setEnd(o)
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readMessage", jspb.BinaryReader.prototype.readMessage),
    jspb.BinaryReader.prototype.readGroup = function(e, t, o) {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP),
        jspb.asserts.assert(this.nextField_ == e),
        o(t, this),
        this.error_ || this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP || (jspb.asserts.fail("Group submessage did not end with an END_GROUP tag"),
        this.error_ = !0)
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readGroup", jspb.BinaryReader.prototype.readGroup),
    jspb.BinaryReader.prototype.getFieldDecoder = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var e = this.decoder_.readUnsignedVarint32()
          , t = this.decoder_.getCursor()
          , o = t + e;
        return e = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), t, e),
        this.decoder_.setCursor(o),
        e
    }
    ,
    jspb.BinaryReader.prototype.readInt32 = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readSignedVarint32()
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readInt32", jspb.BinaryReader.prototype.readInt32),
    jspb.BinaryReader.prototype.readInt32String = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readSignedVarint32String()
    }
    ,
    jspb.BinaryReader.prototype.readInt64 = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readSignedVarint64()
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readInt64", jspb.BinaryReader.prototype.readInt64),
    jspb.BinaryReader.prototype.readInt64String = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readSignedVarint64String()
    }
    ,
    jspb.BinaryReader.prototype.readUint32 = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readUnsignedVarint32()
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readUint32", jspb.BinaryReader.prototype.readUint32),
    jspb.BinaryReader.prototype.readUint32String = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readUnsignedVarint32String()
    }
    ,
    jspb.BinaryReader.prototype.readUint64 = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readUnsignedVarint64()
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readUint64", jspb.BinaryReader.prototype.readUint64),
    jspb.BinaryReader.prototype.readUint64String = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readUnsignedVarint64String()
    }
    ,
    jspb.BinaryReader.prototype.readSint32 = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readZigzagVarint32()
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readSint32", jspb.BinaryReader.prototype.readSint32),
    jspb.BinaryReader.prototype.readSint64 = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readZigzagVarint64()
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readSint64", jspb.BinaryReader.prototype.readSint64),
    jspb.BinaryReader.prototype.readSint64String = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readZigzagVarint64String()
    }
    ,
    jspb.BinaryReader.prototype.readFixed32 = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32),
        this.decoder_.readUint32()
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readFixed32", jspb.BinaryReader.prototype.readFixed32),
    jspb.BinaryReader.prototype.readFixed64 = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64),
        this.decoder_.readUint64()
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readFixed64", jspb.BinaryReader.prototype.readFixed64),
    jspb.BinaryReader.prototype.readFixed64String = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64),
        this.decoder_.readUint64String()
    }
    ,
    jspb.BinaryReader.prototype.readSfixed32 = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32),
        this.decoder_.readInt32()
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readSfixed32", jspb.BinaryReader.prototype.readSfixed32),
    jspb.BinaryReader.prototype.readSfixed32String = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32),
        this.decoder_.readInt32().toString()
    }
    ,
    jspb.BinaryReader.prototype.readSfixed64 = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64),
        this.decoder_.readInt64()
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readSfixed64", jspb.BinaryReader.prototype.readSfixed64),
    jspb.BinaryReader.prototype.readSfixed64String = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64),
        this.decoder_.readInt64String()
    }
    ,
    jspb.BinaryReader.prototype.readFloat = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32),
        this.decoder_.readFloat()
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readFloat", jspb.BinaryReader.prototype.readFloat),
    jspb.BinaryReader.prototype.readDouble = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64),
        this.decoder_.readDouble()
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readDouble", jspb.BinaryReader.prototype.readDouble),
    jspb.BinaryReader.prototype.readBool = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        !!this.decoder_.readUnsignedVarint32()
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readBool", jspb.BinaryReader.prototype.readBool),
    jspb.BinaryReader.prototype.readEnum = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readSignedVarint64()
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readEnum", jspb.BinaryReader.prototype.readEnum),
    jspb.BinaryReader.prototype.readString = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var e = this.decoder_.readUnsignedVarint32();
        return this.decoder_.readString(e)
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readString", jspb.BinaryReader.prototype.readString),
    jspb.BinaryReader.prototype.readBytes = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var e = this.decoder_.readUnsignedVarint32();
        return this.decoder_.readBytes(e)
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readBytes", jspb.BinaryReader.prototype.readBytes),
    jspb.BinaryReader.prototype.readVarintHash64 = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readVarintHash64()
    }
    ,
    jspb.BinaryReader.prototype.readSintHash64 = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readZigzagVarintHash64()
    }
    ,
    jspb.BinaryReader.prototype.readSplitVarint64 = function(e) {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readSplitVarint64(e)
    }
    ,
    jspb.BinaryReader.prototype.readSplitZigzagVarint64 = function(e) {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readSplitVarint64((function(t, o) {
            return jspb.utils.fromZigzag64(t, o, e)
        }
        ))
    }
    ,
    jspb.BinaryReader.prototype.readFixedHash64 = function() {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64),
        this.decoder_.readFixedHash64()
    }
    ,
    jspb.BinaryReader.prototype.readSplitFixed64 = function(e) {
        return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64),
        this.decoder_.readSplitFixed64(e)
    }
    ,
    jspb.BinaryReader.prototype.readPackedField_ = function(e) {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var t = this.decoder_.readUnsignedVarint32();
        t = this.decoder_.getCursor() + t;
        for (var o = []; this.decoder_.getCursor() < t; )
            o.push(e.call(this.decoder_));
        return o
    }
    ,
    jspb.BinaryReader.prototype.readPackedInt32 = function() {
        return this.readPackedField_(this.decoder_.readSignedVarint32)
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedInt32", jspb.BinaryReader.prototype.readPackedInt32),
    jspb.BinaryReader.prototype.readPackedInt32String = function() {
        return this.readPackedField_(this.decoder_.readSignedVarint32String)
    }
    ,
    jspb.BinaryReader.prototype.readPackedInt64 = function() {
        return this.readPackedField_(this.decoder_.readSignedVarint64)
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedInt64", jspb.BinaryReader.prototype.readPackedInt64),
    jspb.BinaryReader.prototype.readPackedInt64String = function() {
        return this.readPackedField_(this.decoder_.readSignedVarint64String)
    }
    ,
    jspb.BinaryReader.prototype.readPackedUint32 = function() {
        return this.readPackedField_(this.decoder_.readUnsignedVarint32)
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedUint32", jspb.BinaryReader.prototype.readPackedUint32),
    jspb.BinaryReader.prototype.readPackedUint32String = function() {
        return this.readPackedField_(this.decoder_.readUnsignedVarint32String)
    }
    ,
    jspb.BinaryReader.prototype.readPackedUint64 = function() {
        return this.readPackedField_(this.decoder_.readUnsignedVarint64)
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedUint64", jspb.BinaryReader.prototype.readPackedUint64),
    jspb.BinaryReader.prototype.readPackedUint64String = function() {
        return this.readPackedField_(this.decoder_.readUnsignedVarint64String)
    }
    ,
    jspb.BinaryReader.prototype.readPackedSint32 = function() {
        return this.readPackedField_(this.decoder_.readZigzagVarint32)
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedSint32", jspb.BinaryReader.prototype.readPackedSint32),
    jspb.BinaryReader.prototype.readPackedSint64 = function() {
        return this.readPackedField_(this.decoder_.readZigzagVarint64)
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedSint64", jspb.BinaryReader.prototype.readPackedSint64),
    jspb.BinaryReader.prototype.readPackedSint64String = function() {
        return this.readPackedField_(this.decoder_.readZigzagVarint64String)
    }
    ,
    jspb.BinaryReader.prototype.readPackedFixed32 = function() {
        return this.readPackedField_(this.decoder_.readUint32)
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedFixed32", jspb.BinaryReader.prototype.readPackedFixed32),
    jspb.BinaryReader.prototype.readPackedFixed64 = function() {
        return this.readPackedField_(this.decoder_.readUint64)
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedFixed64", jspb.BinaryReader.prototype.readPackedFixed64),
    jspb.BinaryReader.prototype.readPackedFixed64String = function() {
        return this.readPackedField_(this.decoder_.readUint64String)
    }
    ,
    jspb.BinaryReader.prototype.readPackedSfixed32 = function() {
        return this.readPackedField_(this.decoder_.readInt32)
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedSfixed32", jspb.BinaryReader.prototype.readPackedSfixed32),
    jspb.BinaryReader.prototype.readPackedSfixed64 = function() {
        return this.readPackedField_(this.decoder_.readInt64)
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedSfixed64", jspb.BinaryReader.prototype.readPackedSfixed64),
    jspb.BinaryReader.prototype.readPackedSfixed64String = function() {
        return this.readPackedField_(this.decoder_.readInt64String)
    }
    ,
    jspb.BinaryReader.prototype.readPackedFloat = function() {
        return this.readPackedField_(this.decoder_.readFloat)
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedFloat", jspb.BinaryReader.prototype.readPackedFloat),
    jspb.BinaryReader.prototype.readPackedDouble = function() {
        return this.readPackedField_(this.decoder_.readDouble)
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedDouble", jspb.BinaryReader.prototype.readPackedDouble),
    jspb.BinaryReader.prototype.readPackedBool = function() {
        return this.readPackedField_(this.decoder_.readBool)
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedBool", jspb.BinaryReader.prototype.readPackedBool),
    jspb.BinaryReader.prototype.readPackedEnum = function() {
        return this.readPackedField_(this.decoder_.readEnum)
    }
    ,
    goog.exportProperty(jspb.BinaryReader.prototype, "readPackedEnum", jspb.BinaryReader.prototype.readPackedEnum),
    jspb.BinaryReader.prototype.readPackedVarintHash64 = function() {
        return this.readPackedField_(this.decoder_.readVarintHash64)
    }
    ,
    jspb.BinaryReader.prototype.readPackedFixedHash64 = function() {
        return this.readPackedField_(this.decoder_.readFixedHash64)
    }
    ,
    jspb.BinaryEncoder = function() {
        this.buffer_ = []
    }
    ,
    jspb.BinaryEncoder.prototype.length = function() {
        return this.buffer_.length
    }
    ,
    jspb.BinaryEncoder.prototype.end = function() {
        var e = this.buffer_;
        return this.buffer_ = [],
        e
    }
    ,
    jspb.BinaryEncoder.prototype.writeSplitVarint64 = function(e, t) {
        for (jspb.asserts.assert(e == Math.floor(e)),
        jspb.asserts.assert(t == Math.floor(t)),
        jspb.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32),
        jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32); 0 < t || 127 < e; )
            this.buffer_.push(127 & e | 128),
            e = (e >>> 7 | t << 25) >>> 0,
            t >>>= 7;
        this.buffer_.push(e)
    }
    ,
    jspb.BinaryEncoder.prototype.writeSplitFixed64 = function(e, t) {
        jspb.asserts.assert(e == Math.floor(e)),
        jspb.asserts.assert(t == Math.floor(t)),
        jspb.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32),
        jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
        this.writeUint32(e),
        this.writeUint32(t)
    }
    ,
    jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function(e) {
        for (jspb.asserts.assert(e == Math.floor(e)),
        jspb.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32); 127 < e; )
            this.buffer_.push(127 & e | 128),
            e >>>= 7;
        this.buffer_.push(e)
    }
    ,
    jspb.BinaryEncoder.prototype.writeSignedVarint32 = function(e) {
        if (jspb.asserts.assert(e == Math.floor(e)),
        jspb.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31),
        0 <= e)
            this.writeUnsignedVarint32(e);
        else {
            for (var t = 0; 9 > t; t++)
                this.buffer_.push(127 & e | 128),
                e >>= 7;
            this.buffer_.push(1)
        }
    }
    ,
    jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function(e) {
        jspb.asserts.assert(e == Math.floor(e)),
        jspb.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_64),
        jspb.utils.splitInt64(e),
        this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
    }
    ,
    jspb.BinaryEncoder.prototype.writeSignedVarint64 = function(e) {
        jspb.asserts.assert(e == Math.floor(e)),
        jspb.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_63 && e < jspb.BinaryConstants.TWO_TO_63),
        jspb.utils.splitInt64(e),
        this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
    }
    ,
    jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function(e) {
        jspb.asserts.assert(e == Math.floor(e)),
        jspb.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31),
        this.writeUnsignedVarint32((e << 1 ^ e >> 31) >>> 0)
    }
    ,
    jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function(e) {
        jspb.asserts.assert(e == Math.floor(e)),
        jspb.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_63 && e < jspb.BinaryConstants.TWO_TO_63),
        jspb.utils.splitZigzag64(e),
        this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
    }
    ,
    jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function(e) {
        this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(e))
    }
    ,
    jspb.BinaryEncoder.prototype.writeZigzagVarintHash64 = function(e) {
        var t = this;
        jspb.utils.splitHash64(e),
        jspb.utils.toZigzag64(jspb.utils.split64Low, jspb.utils.split64High, (function(e, o) {
            t.writeSplitVarint64(e >>> 0, o >>> 0)
        }
        ))
    }
    ,
    jspb.BinaryEncoder.prototype.writeUint8 = function(e) {
        jspb.asserts.assert(e == Math.floor(e)),
        jspb.asserts.assert(0 <= e && 256 > e),
        this.buffer_.push(e >>> 0 & 255)
    }
    ,
    jspb.BinaryEncoder.prototype.writeUint16 = function(e) {
        jspb.asserts.assert(e == Math.floor(e)),
        jspb.asserts.assert(0 <= e && 65536 > e),
        this.buffer_.push(e >>> 0 & 255),
        this.buffer_.push(e >>> 8 & 255)
    }
    ,
    jspb.BinaryEncoder.prototype.writeUint32 = function(e) {
        jspb.asserts.assert(e == Math.floor(e)),
        jspb.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32),
        this.buffer_.push(e >>> 0 & 255),
        this.buffer_.push(e >>> 8 & 255),
        this.buffer_.push(e >>> 16 & 255),
        this.buffer_.push(e >>> 24 & 255)
    }
    ,
    jspb.BinaryEncoder.prototype.writeUint64 = function(e) {
        jspb.asserts.assert(e == Math.floor(e)),
        jspb.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_64),
        jspb.utils.splitUint64(e),
        this.writeUint32(jspb.utils.split64Low),
        this.writeUint32(jspb.utils.split64High)
    }
    ,
    jspb.BinaryEncoder.prototype.writeInt8 = function(e) {
        jspb.asserts.assert(e == Math.floor(e)),
        jspb.asserts.assert(-128 <= e && 128 > e),
        this.buffer_.push(e >>> 0 & 255)
    }
    ,
    jspb.BinaryEncoder.prototype.writeInt16 = function(e) {
        jspb.asserts.assert(e == Math.floor(e)),
        jspb.asserts.assert(-32768 <= e && 32768 > e),
        this.buffer_.push(e >>> 0 & 255),
        this.buffer_.push(e >>> 8 & 255)
    }
    ,
    jspb.BinaryEncoder.prototype.writeInt32 = function(e) {
        jspb.asserts.assert(e == Math.floor(e)),
        jspb.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31),
        this.buffer_.push(e >>> 0 & 255),
        this.buffer_.push(e >>> 8 & 255),
        this.buffer_.push(e >>> 16 & 255),
        this.buffer_.push(e >>> 24 & 255)
    }
    ,
    jspb.BinaryEncoder.prototype.writeInt64 = function(e) {
        jspb.asserts.assert(e == Math.floor(e)),
        jspb.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_63 && e < jspb.BinaryConstants.TWO_TO_63),
        jspb.utils.splitInt64(e),
        this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High)
    }
    ,
    jspb.BinaryEncoder.prototype.writeInt64String = function(e) {
        jspb.asserts.assert(e == Math.floor(e)),
        jspb.asserts.assert(+e >= -jspb.BinaryConstants.TWO_TO_63 && +e < jspb.BinaryConstants.TWO_TO_63),
        jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e)),
        this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High)
    }
    ,
    jspb.BinaryEncoder.prototype.writeFloat = function(e) {
        jspb.asserts.assert(1 / 0 === e || -1 / 0 === e || isNaN(e) || e >= -jspb.BinaryConstants.FLOAT32_MAX && e <= jspb.BinaryConstants.FLOAT32_MAX),
        jspb.utils.splitFloat32(e),
        this.writeUint32(jspb.utils.split64Low)
    }
    ,
    jspb.BinaryEncoder.prototype.writeDouble = function(e) {
        jspb.asserts.assert(1 / 0 === e || -1 / 0 === e || isNaN(e) || e >= -jspb.BinaryConstants.FLOAT64_MAX && e <= jspb.BinaryConstants.FLOAT64_MAX),
        jspb.utils.splitFloat64(e),
        this.writeUint32(jspb.utils.split64Low),
        this.writeUint32(jspb.utils.split64High)
    }
    ,
    jspb.BinaryEncoder.prototype.writeBool = function(e) {
        jspb.asserts.assert("boolean" == typeof e || "number" == typeof e),
        this.buffer_.push(e ? 1 : 0)
    }
    ,
    jspb.BinaryEncoder.prototype.writeEnum = function(e) {
        jspb.asserts.assert(e == Math.floor(e)),
        jspb.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31),
        this.writeSignedVarint32(e)
    }
    ,
    jspb.BinaryEncoder.prototype.writeBytes = function(e) {
        this.buffer_.push.apply(this.buffer_, e)
    }
    ,
    jspb.BinaryEncoder.prototype.writeVarintHash64 = function(e) {
        jspb.utils.splitHash64(e),
        this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
    }
    ,
    jspb.BinaryEncoder.prototype.writeFixedHash64 = function(e) {
        jspb.utils.splitHash64(e),
        this.writeUint32(jspb.utils.split64Low),
        this.writeUint32(jspb.utils.split64High)
    }
    ,
    jspb.BinaryEncoder.prototype.writeString = function(e) {
        var t = this.buffer_.length;
        jspb.asserts.assertString(e);
        for (var o = 0; o < e.length; o++) {
            var r = e.charCodeAt(o);
            if (128 > r)
                this.buffer_.push(r);
            else if (2048 > r)
                this.buffer_.push(r >> 6 | 192),
                this.buffer_.push(63 & r | 128);
            else if (65536 > r)
                if (55296 <= r && 56319 >= r && o + 1 < e.length) {
                    var i = e.charCodeAt(o + 1);
                    56320 <= i && 57343 >= i && (r = 1024 * (r - 55296) + i - 56320 + 65536,
                    this.buffer_.push(r >> 18 | 240),
                    this.buffer_.push(r >> 12 & 63 | 128),
                    this.buffer_.push(r >> 6 & 63 | 128),
                    this.buffer_.push(63 & r | 128),
                    o++)
                } else
                    this.buffer_.push(r >> 12 | 224),
                    this.buffer_.push(r >> 6 & 63 | 128),
                    this.buffer_.push(63 & r | 128)
        }
        return this.buffer_.length - t
    }
    ,
    jspb.arith = {},
    jspb.arith.UInt64 = function(e, t) {
        this.lo = e,
        this.hi = t
    }
    ,
    jspb.arith.UInt64.prototype.cmp = function(e) {
        return this.hi < e.hi || this.hi == e.hi && this.lo < e.lo ? -1 : this.hi == e.hi && this.lo == e.lo ? 0 : 1
    }
    ,
    jspb.arith.UInt64.prototype.rightShift = function() {
        return new jspb.arith.UInt64((this.lo >>> 1 | (1 & this.hi) << 31) >>> 0,this.hi >>> 1 >>> 0)
    }
    ,
    jspb.arith.UInt64.prototype.leftShift = function() {
        return new jspb.arith.UInt64(this.lo << 1 >>> 0,(this.hi << 1 | this.lo >>> 31) >>> 0)
    }
    ,
    jspb.arith.UInt64.prototype.msb = function() {
        return !!(2147483648 & this.hi)
    }
    ,
    jspb.arith.UInt64.prototype.lsb = function() {
        return !!(1 & this.lo)
    }
    ,
    jspb.arith.UInt64.prototype.zero = function() {
        return 0 == this.lo && 0 == this.hi
    }
    ,
    jspb.arith.UInt64.prototype.add = function(e) {
        return new jspb.arith.UInt64((this.lo + e.lo & 4294967295) >>> 0 >>> 0,((this.hi + e.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + e.lo ? 1 : 0) >>> 0)
    }
    ,
    jspb.arith.UInt64.prototype.sub = function(e) {
        return new jspb.arith.UInt64((this.lo - e.lo & 4294967295) >>> 0 >>> 0,((this.hi - e.hi & 4294967295) >>> 0) - (0 > this.lo - e.lo ? 1 : 0) >>> 0)
    }
    ,
    jspb.arith.UInt64.mul32x32 = function(e, t) {
        var o = 65535 & e
          , r = 65535 & t
          , i = t >>> 16;
        for (t = o * r + 65536 * (o * i & 65535) + 65536 * ((e >>>= 16) * r & 65535),
        o = e * i + (o * i >>> 16) + (e * r >>> 16); 4294967296 <= t; )
            t -= 4294967296,
            o += 1;
        return new jspb.arith.UInt64(t >>> 0,o >>> 0)
    }
    ,
    jspb.arith.UInt64.prototype.mul = function(e) {
        var t = jspb.arith.UInt64.mul32x32(this.lo, e);
        return (e = jspb.arith.UInt64.mul32x32(this.hi, e)).hi = e.lo,
        e.lo = 0,
        t.add(e)
    }
    ,
    jspb.arith.UInt64.prototype.div = function(e) {
        if (0 == e)
            return [];
        var t = new jspb.arith.UInt64(0,0)
          , o = new jspb.arith.UInt64(this.lo,this.hi);
        e = new jspb.arith.UInt64(e,0);
        for (var r = new jspb.arith.UInt64(1,0); !e.msb(); )
            e = e.leftShift(),
            r = r.leftShift();
        for (; !r.zero(); )
            0 >= e.cmp(o) && (t = t.add(r),
            o = o.sub(e)),
            e = e.rightShift(),
            r = r.rightShift();
        return [t, o]
    }
    ,
    jspb.arith.UInt64.prototype.toString = function() {
        for (var e = "", t = this; !t.zero(); ) {
            var o = (t = t.div(10))[0];
            e = t[1].lo + e,
            t = o
        }
        return "" == e && (e = "0"),
        e
    }
    ,
    jspb.arith.UInt64.fromString = function(e) {
        for (var t = new jspb.arith.UInt64(0,0), o = new jspb.arith.UInt64(0,0), r = 0; r < e.length; r++) {
            if ("0" > e[r] || "9" < e[r])
                return null;
            var i = parseInt(e[r], 10);
            o.lo = i,
            t = t.mul(10).add(o)
        }
        return t
    }
    ,
    jspb.arith.UInt64.prototype.clone = function() {
        return new jspb.arith.UInt64(this.lo,this.hi)
    }
    ,
    jspb.arith.Int64 = function(e, t) {
        this.lo = e,
        this.hi = t
    }
    ,
    jspb.arith.Int64.prototype.add = function(e) {
        return new jspb.arith.Int64((this.lo + e.lo & 4294967295) >>> 0 >>> 0,((this.hi + e.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + e.lo ? 1 : 0) >>> 0)
    }
    ,
    jspb.arith.Int64.prototype.sub = function(e) {
        return new jspb.arith.Int64((this.lo - e.lo & 4294967295) >>> 0 >>> 0,((this.hi - e.hi & 4294967295) >>> 0) - (0 > this.lo - e.lo ? 1 : 0) >>> 0)
    }
    ,
    jspb.arith.Int64.prototype.clone = function() {
        return new jspb.arith.Int64(this.lo,this.hi)
    }
    ,
    jspb.arith.Int64.prototype.toString = function() {
        var e = 0 != (2147483648 & this.hi)
          , t = new jspb.arith.UInt64(this.lo,this.hi);
        return e && (t = new jspb.arith.UInt64(0,0).sub(t)),
        (e ? "-" : "") + t.toString()
    }
    ,
    jspb.arith.Int64.fromString = function(e) {
        var t = 0 < e.length && "-" == e[0];
        return t && (e = e.substring(1)),
        null === (e = jspb.arith.UInt64.fromString(e)) ? null : (t && (e = new jspb.arith.UInt64(0,0).sub(e)),
        new jspb.arith.Int64(e.lo,e.hi))
    }
    ,
    jspb.BinaryWriter = function() {
        this.blocks_ = [],
        this.totalLength_ = 0,
        this.encoder_ = new jspb.BinaryEncoder,
        this.bookmarks_ = []
    }
    ,
    jspb.BinaryWriter.prototype.appendUint8Array_ = function(e) {
        var t = this.encoder_.end();
        this.blocks_.push(t),
        this.blocks_.push(e),
        this.totalLength_ += t.length + e.length
    }
    ,
    jspb.BinaryWriter.prototype.beginDelimited_ = function(e) {
        return this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
        e = this.encoder_.end(),
        this.blocks_.push(e),
        this.totalLength_ += e.length,
        e.push(this.totalLength_),
        e
    }
    ,
    jspb.BinaryWriter.prototype.endDelimited_ = function(e) {
        var t = e.pop();
        for (t = this.totalLength_ + this.encoder_.length() - t,
        jspb.asserts.assert(0 <= t); 127 < t; )
            e.push(127 & t | 128),
            t >>>= 7,
            this.totalLength_++;
        e.push(t),
        this.totalLength_++
    }
    ,
    jspb.BinaryWriter.prototype.writeSerializedMessage = function(e, t, o) {
        this.appendUint8Array_(e.subarray(t, o))
    }
    ,
    jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function(e, t, o) {
        null != e && null != t && null != o && this.writeSerializedMessage(e, t, o)
    }
    ,
    jspb.BinaryWriter.prototype.reset = function() {
        this.blocks_ = [],
        this.encoder_.end(),
        this.totalLength_ = 0,
        this.bookmarks_ = []
    }
    ,
    jspb.BinaryWriter.prototype.getResultBuffer = function() {
        jspb.asserts.assert(0 == this.bookmarks_.length);
        for (var e = new Uint8Array(this.totalLength_ + this.encoder_.length()), t = this.blocks_, o = t.length, r = 0, i = 0; i < o; i++) {
            var a = t[i];
            e.set(a, r),
            r += a.length
        }
        return t = this.encoder_.end(),
        e.set(t, r),
        r += t.length,
        jspb.asserts.assert(r == e.length),
        this.blocks_ = [e],
        e
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "getResultBuffer", jspb.BinaryWriter.prototype.getResultBuffer),
    jspb.BinaryWriter.prototype.getResultBase64String = function(e) {
        return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), e)
    }
    ,
    jspb.BinaryWriter.prototype.beginSubMessage = function(e) {
        this.bookmarks_.push(this.beginDelimited_(e))
    }
    ,
    jspb.BinaryWriter.prototype.endSubMessage = function() {
        jspb.asserts.assert(0 <= this.bookmarks_.length),
        this.endDelimited_(this.bookmarks_.pop())
    }
    ,
    jspb.BinaryWriter.prototype.writeFieldHeader_ = function(e, t) {
        jspb.asserts.assert(1 <= e && e == Math.floor(e)),
        this.encoder_.writeUnsignedVarint32(8 * e + t)
    }
    ,
    jspb.BinaryWriter.prototype.writeAny = function(e, t, o) {
        var r = jspb.BinaryConstants.FieldType;
        switch (e) {
        case r.DOUBLE:
            this.writeDouble(t, o);
            break;
        case r.FLOAT:
            this.writeFloat(t, o);
            break;
        case r.INT64:
            this.writeInt64(t, o);
            break;
        case r.UINT64:
            this.writeUint64(t, o);
            break;
        case r.INT32:
            this.writeInt32(t, o);
            break;
        case r.FIXED64:
            this.writeFixed64(t, o);
            break;
        case r.FIXED32:
            this.writeFixed32(t, o);
            break;
        case r.BOOL:
            this.writeBool(t, o);
            break;
        case r.STRING:
            this.writeString(t, o);
            break;
        case r.GROUP:
            jspb.asserts.fail("Group field type not supported in writeAny()");
            break;
        case r.MESSAGE:
            jspb.asserts.fail("Message field type not supported in writeAny()");
            break;
        case r.BYTES:
            this.writeBytes(t, o);
            break;
        case r.UINT32:
            this.writeUint32(t, o);
            break;
        case r.ENUM:
            this.writeEnum(t, o);
            break;
        case r.SFIXED32:
            this.writeSfixed32(t, o);
            break;
        case r.SFIXED64:
            this.writeSfixed64(t, o);
            break;
        case r.SINT32:
            this.writeSint32(t, o);
            break;
        case r.SINT64:
            this.writeSint64(t, o);
            break;
        case r.FHASH64:
            this.writeFixedHash64(t, o);
            break;
        case r.VHASH64:
            this.writeVarintHash64(t, o);
            break;
        default:
            jspb.asserts.fail("Invalid field type in writeAny()")
        }
    }
    ,
    jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function(e, t) {
        null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeUnsignedVarint32(t))
    }
    ,
    jspb.BinaryWriter.prototype.writeSignedVarint32_ = function(e, t) {
        null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeSignedVarint32(t))
    }
    ,
    jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function(e, t) {
        null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeUnsignedVarint64(t))
    }
    ,
    jspb.BinaryWriter.prototype.writeSignedVarint64_ = function(e, t) {
        null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeSignedVarint64(t))
    }
    ,
    jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function(e, t) {
        null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeZigzagVarint32(t))
    }
    ,
    jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function(e, t) {
        null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeZigzagVarint64(t))
    }
    ,
    jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function(e, t) {
        null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeZigzagVarint64String(t))
    }
    ,
    jspb.BinaryWriter.prototype.writeZigzagVarintHash64_ = function(e, t) {
        null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeZigzagVarintHash64(t))
    }
    ,
    jspb.BinaryWriter.prototype.writeInt32 = function(e, t) {
        null != t && (jspb.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31),
        this.writeSignedVarint32_(e, t))
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeInt32", jspb.BinaryWriter.prototype.writeInt32),
    jspb.BinaryWriter.prototype.writeInt32String = function(e, t) {
        null != t && (t = parseInt(t, 10),
        jspb.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31),
        this.writeSignedVarint32_(e, t))
    }
    ,
    jspb.BinaryWriter.prototype.writeInt64 = function(e, t) {
        null != t && (jspb.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_63 && t < jspb.BinaryConstants.TWO_TO_63),
        this.writeSignedVarint64_(e, t))
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeInt64", jspb.BinaryWriter.prototype.writeInt64),
    jspb.BinaryWriter.prototype.writeInt64String = function(e, t) {
        null != t && (t = jspb.arith.Int64.fromString(t),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeSplitVarint64(t.lo, t.hi))
    }
    ,
    jspb.BinaryWriter.prototype.writeUint32 = function(e, t) {
        null != t && (jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
        this.writeUnsignedVarint32_(e, t))
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeUint32", jspb.BinaryWriter.prototype.writeUint32),
    jspb.BinaryWriter.prototype.writeUint32String = function(e, t) {
        null != t && (t = parseInt(t, 10),
        jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
        this.writeUnsignedVarint32_(e, t))
    }
    ,
    jspb.BinaryWriter.prototype.writeUint64 = function(e, t) {
        null != t && (jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64),
        this.writeUnsignedVarint64_(e, t))
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeUint64", jspb.BinaryWriter.prototype.writeUint64),
    jspb.BinaryWriter.prototype.writeUint64String = function(e, t) {
        null != t && (t = jspb.arith.UInt64.fromString(t),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeSplitVarint64(t.lo, t.hi))
    }
    ,
    jspb.BinaryWriter.prototype.writeSint32 = function(e, t) {
        null != t && (jspb.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31),
        this.writeZigzagVarint32_(e, t))
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeSint32", jspb.BinaryWriter.prototype.writeSint32),
    jspb.BinaryWriter.prototype.writeSint64 = function(e, t) {
        null != t && (jspb.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_63 && t < jspb.BinaryConstants.TWO_TO_63),
        this.writeZigzagVarint64_(e, t))
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeSint64", jspb.BinaryWriter.prototype.writeSint64),
    jspb.BinaryWriter.prototype.writeSintHash64 = function(e, t) {
        null != t && this.writeZigzagVarintHash64_(e, t)
    }
    ,
    jspb.BinaryWriter.prototype.writeSint64String = function(e, t) {
        null != t && this.writeZigzagVarint64String_(e, t)
    }
    ,
    jspb.BinaryWriter.prototype.writeFixed32 = function(e, t) {
        null != t && (jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32),
        this.encoder_.writeUint32(t))
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeFixed32", jspb.BinaryWriter.prototype.writeFixed32),
    jspb.BinaryWriter.prototype.writeFixed64 = function(e, t) {
        null != t && (jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
        this.encoder_.writeUint64(t))
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeFixed64", jspb.BinaryWriter.prototype.writeFixed64),
    jspb.BinaryWriter.prototype.writeFixed64String = function(e, t) {
        null != t && (t = jspb.arith.UInt64.fromString(t),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
        this.encoder_.writeSplitFixed64(t.lo, t.hi))
    }
    ,
    jspb.BinaryWriter.prototype.writeSfixed32 = function(e, t) {
        null != t && (jspb.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32),
        this.encoder_.writeInt32(t))
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeSfixed32", jspb.BinaryWriter.prototype.writeSfixed32),
    jspb.BinaryWriter.prototype.writeSfixed64 = function(e, t) {
        null != t && (jspb.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_63 && t < jspb.BinaryConstants.TWO_TO_63),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
        this.encoder_.writeInt64(t))
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeSfixed64", jspb.BinaryWriter.prototype.writeSfixed64),
    jspb.BinaryWriter.prototype.writeSfixed64String = function(e, t) {
        null != t && (t = jspb.arith.Int64.fromString(t),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
        this.encoder_.writeSplitFixed64(t.lo, t.hi))
    }
    ,
    jspb.BinaryWriter.prototype.writeFloat = function(e, t) {
        null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32),
        this.encoder_.writeFloat(t))
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeFloat", jspb.BinaryWriter.prototype.writeFloat),
    jspb.BinaryWriter.prototype.writeDouble = function(e, t) {
        null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
        this.encoder_.writeDouble(t))
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeDouble", jspb.BinaryWriter.prototype.writeDouble),
    jspb.BinaryWriter.prototype.writeBool = function(e, t) {
        null != t && (jspb.asserts.assert("boolean" == typeof t || "number" == typeof t),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeBool(t))
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeBool", jspb.BinaryWriter.prototype.writeBool),
    jspb.BinaryWriter.prototype.writeEnum = function(e, t) {
        null != t && (jspb.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeSignedVarint32(t))
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeEnum", jspb.BinaryWriter.prototype.writeEnum),
    jspb.BinaryWriter.prototype.writeString = function(e, t) {
        null != t && (e = this.beginDelimited_(e),
        this.encoder_.writeString(t),
        this.endDelimited_(e))
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeString", jspb.BinaryWriter.prototype.writeString),
    jspb.BinaryWriter.prototype.writeBytes = function(e, t) {
        null != t && (t = jspb.utils.byteSourceToUint8Array(t),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
        this.encoder_.writeUnsignedVarint32(t.length),
        this.appendUint8Array_(t))
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeBytes", jspb.BinaryWriter.prototype.writeBytes),
    jspb.BinaryWriter.prototype.writeMessage = function(e, t, o) {
        null != t && (e = this.beginDelimited_(e),
        o(t, this),
        this.endDelimited_(e))
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeMessage", jspb.BinaryWriter.prototype.writeMessage),
    jspb.BinaryWriter.prototype.writeMessageSet = function(e, t, o) {
        null != t && (this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.START_GROUP),
        this.writeFieldHeader_(2, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeSignedVarint32(e),
        e = this.beginDelimited_(3),
        o(t, this),
        this.endDelimited_(e),
        this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.END_GROUP))
    }
    ,
    jspb.BinaryWriter.prototype.writeGroup = function(e, t, o) {
        null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.START_GROUP),
        o(t, this),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.END_GROUP))
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeGroup", jspb.BinaryWriter.prototype.writeGroup),
    jspb.BinaryWriter.prototype.writeFixedHash64 = function(e, t) {
        null != t && (jspb.asserts.assert(8 == t.length),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
        this.encoder_.writeFixedHash64(t))
    }
    ,
    jspb.BinaryWriter.prototype.writeVarintHash64 = function(e, t) {
        null != t && (jspb.asserts.assert(8 == t.length),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeVarintHash64(t))
    }
    ,
    jspb.BinaryWriter.prototype.writeSplitFixed64 = function(e, t, o) {
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
        this.encoder_.writeSplitFixed64(t, o)
    }
    ,
    jspb.BinaryWriter.prototype.writeSplitVarint64 = function(e, t, o) {
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeSplitVarint64(t, o)
    }
    ,
    jspb.BinaryWriter.prototype.writeSplitZigzagVarint64 = function(e, t, o) {
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT);
        var r = this.encoder_;
        jspb.utils.toZigzag64(t, o, (function(e, t) {
            r.writeSplitVarint64(e >>> 0, t >>> 0)
        }
        ))
    }
    ,
    jspb.BinaryWriter.prototype.writeRepeatedInt32 = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeSignedVarint32_(e, t[o])
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedInt32", jspb.BinaryWriter.prototype.writeRepeatedInt32),
    jspb.BinaryWriter.prototype.writeRepeatedInt32String = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeInt32String(e, t[o])
    }
    ,
    jspb.BinaryWriter.prototype.writeRepeatedInt64 = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeSignedVarint64_(e, t[o])
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedInt64", jspb.BinaryWriter.prototype.writeRepeatedInt64),
    jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64 = function(e, t, o, r) {
        if (null != t)
            for (var i = 0; i < t.length; i++)
                this.writeSplitFixed64(e, o(t[i]), r(t[i]))
    }
    ,
    jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64 = function(e, t, o, r) {
        if (null != t)
            for (var i = 0; i < t.length; i++)
                this.writeSplitVarint64(e, o(t[i]), r(t[i]))
    }
    ,
    jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64 = function(e, t, o, r) {
        if (null != t)
            for (var i = 0; i < t.length; i++)
                this.writeSplitZigzagVarint64(e, o(t[i]), r(t[i]))
    }
    ,
    jspb.BinaryWriter.prototype.writeRepeatedInt64String = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeInt64String(e, t[o])
    }
    ,
    jspb.BinaryWriter.prototype.writeRepeatedUint32 = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeUnsignedVarint32_(e, t[o])
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedUint32", jspb.BinaryWriter.prototype.writeRepeatedUint32),
    jspb.BinaryWriter.prototype.writeRepeatedUint32String = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeUint32String(e, t[o])
    }
    ,
    jspb.BinaryWriter.prototype.writeRepeatedUint64 = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeUnsignedVarint64_(e, t[o])
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedUint64", jspb.BinaryWriter.prototype.writeRepeatedUint64),
    jspb.BinaryWriter.prototype.writeRepeatedUint64String = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeUint64String(e, t[o])
    }
    ,
    jspb.BinaryWriter.prototype.writeRepeatedSint32 = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeZigzagVarint32_(e, t[o])
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedSint32", jspb.BinaryWriter.prototype.writeRepeatedSint32),
    jspb.BinaryWriter.prototype.writeRepeatedSint64 = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeZigzagVarint64_(e, t[o])
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedSint64", jspb.BinaryWriter.prototype.writeRepeatedSint64),
    jspb.BinaryWriter.prototype.writeRepeatedSint64String = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeZigzagVarint64String_(e, t[o])
    }
    ,
    jspb.BinaryWriter.prototype.writeRepeatedSintHash64 = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeZigzagVarintHash64_(e, t[o])
    }
    ,
    jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeFixed32(e, t[o])
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedFixed32", jspb.BinaryWriter.prototype.writeRepeatedFixed32),
    jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeFixed64(e, t[o])
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedFixed64", jspb.BinaryWriter.prototype.writeRepeatedFixed64),
    jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeFixed64String(e, t[o])
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedFixed64String", jspb.BinaryWriter.prototype.writeRepeatedFixed64String),
    jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeSfixed32(e, t[o])
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedSfixed32", jspb.BinaryWriter.prototype.writeRepeatedSfixed32),
    jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeSfixed64(e, t[o])
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedSfixed64", jspb.BinaryWriter.prototype.writeRepeatedSfixed64),
    jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeSfixed64String(e, t[o])
    }
    ,
    jspb.BinaryWriter.prototype.writeRepeatedFloat = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeFloat(e, t[o])
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedFloat", jspb.BinaryWriter.prototype.writeRepeatedFloat),
    jspb.BinaryWriter.prototype.writeRepeatedDouble = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeDouble(e, t[o])
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedDouble", jspb.BinaryWriter.prototype.writeRepeatedDouble),
    jspb.BinaryWriter.prototype.writeRepeatedBool = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeBool(e, t[o])
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedBool", jspb.BinaryWriter.prototype.writeRepeatedBool),
    jspb.BinaryWriter.prototype.writeRepeatedEnum = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeEnum(e, t[o])
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedEnum", jspb.BinaryWriter.prototype.writeRepeatedEnum),
    jspb.BinaryWriter.prototype.writeRepeatedString = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeString(e, t[o])
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedString", jspb.BinaryWriter.prototype.writeRepeatedString),
    jspb.BinaryWriter.prototype.writeRepeatedBytes = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeBytes(e, t[o])
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedBytes", jspb.BinaryWriter.prototype.writeRepeatedBytes),
    jspb.BinaryWriter.prototype.writeRepeatedMessage = function(e, t, o) {
        if (null != t)
            for (var r = 0; r < t.length; r++) {
                var i = this.beginDelimited_(e);
                o(t[r], this),
                this.endDelimited_(i)
            }
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedMessage", jspb.BinaryWriter.prototype.writeRepeatedMessage),
    jspb.BinaryWriter.prototype.writeRepeatedGroup = function(e, t, o) {
        if (null != t)
            for (var r = 0; r < t.length; r++)
                this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.START_GROUP),
                o(t[r], this),
                this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.END_GROUP)
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedGroup", jspb.BinaryWriter.prototype.writeRepeatedGroup),
    jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeFixedHash64(e, t[o])
    }
    ,
    jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function(e, t) {
        if (null != t)
            for (var o = 0; o < t.length; o++)
                this.writeVarintHash64(e, t[o])
    }
    ,
    jspb.BinaryWriter.prototype.writePackedInt32 = function(e, t) {
        if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var o = 0; o < t.length; o++)
                this.encoder_.writeSignedVarint32(t[o]);
            this.endDelimited_(e)
        }
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedInt32", jspb.BinaryWriter.prototype.writePackedInt32),
    jspb.BinaryWriter.prototype.writePackedInt32String = function(e, t) {
        if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var o = 0; o < t.length; o++)
                this.encoder_.writeSignedVarint32(parseInt(t[o], 10));
            this.endDelimited_(e)
        }
    }
    ,
    jspb.BinaryWriter.prototype.writePackedInt64 = function(e, t) {
        if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var o = 0; o < t.length; o++)
                this.encoder_.writeSignedVarint64(t[o]);
            this.endDelimited_(e)
        }
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedInt64", jspb.BinaryWriter.prototype.writePackedInt64),
    jspb.BinaryWriter.prototype.writePackedSplitFixed64 = function(e, t, o, r) {
        if (null != t) {
            e = this.beginDelimited_(e);
            for (var i = 0; i < t.length; i++)
                this.encoder_.writeSplitFixed64(o(t[i]), r(t[i]));
            this.endDelimited_(e)
        }
    }
    ,
    jspb.BinaryWriter.prototype.writePackedSplitVarint64 = function(e, t, o, r) {
        if (null != t) {
            e = this.beginDelimited_(e);
            for (var i = 0; i < t.length; i++)
                this.encoder_.writeSplitVarint64(o(t[i]), r(t[i]));
            this.endDelimited_(e)
        }
    }
    ,
    jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64 = function(e, t, o, r) {
        if (null != t) {
            e = this.beginDelimited_(e);
            for (var i = this.encoder_, a = 0; a < t.length; a++)
                jspb.utils.toZigzag64(o(t[a]), r(t[a]), (function(e, t) {
                    i.writeSplitVarint64(e >>> 0, t >>> 0)
                }
                ));
            this.endDelimited_(e)
        }
    }
    ,
    jspb.BinaryWriter.prototype.writePackedInt64String = function(e, t) {
        if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var o = 0; o < t.length; o++) {
                var r = jspb.arith.Int64.fromString(t[o]);
                this.encoder_.writeSplitVarint64(r.lo, r.hi)
            }
            this.endDelimited_(e)
        }
    }
    ,
    jspb.BinaryWriter.prototype.writePackedUint32 = function(e, t) {
        if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var o = 0; o < t.length; o++)
                this.encoder_.writeUnsignedVarint32(t[o]);
            this.endDelimited_(e)
        }
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedUint32", jspb.BinaryWriter.prototype.writePackedUint32),
    jspb.BinaryWriter.prototype.writePackedUint32String = function(e, t) {
        if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var o = 0; o < t.length; o++)
                this.encoder_.writeUnsignedVarint32(parseInt(t[o], 10));
            this.endDelimited_(e)
        }
    }
    ,
    jspb.BinaryWriter.prototype.writePackedUint64 = function(e, t) {
        if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var o = 0; o < t.length; o++)
                this.encoder_.writeUnsignedVarint64(t[o]);
            this.endDelimited_(e)
        }
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedUint64", jspb.BinaryWriter.prototype.writePackedUint64),
    jspb.BinaryWriter.prototype.writePackedUint64String = function(e, t) {
        if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var o = 0; o < t.length; o++) {
                var r = jspb.arith.UInt64.fromString(t[o]);
                this.encoder_.writeSplitVarint64(r.lo, r.hi)
            }
            this.endDelimited_(e)
        }
    }
    ,
    jspb.BinaryWriter.prototype.writePackedSint32 = function(e, t) {
        if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var o = 0; o < t.length; o++)
                this.encoder_.writeZigzagVarint32(t[o]);
            this.endDelimited_(e)
        }
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedSint32", jspb.BinaryWriter.prototype.writePackedSint32),
    jspb.BinaryWriter.prototype.writePackedSint64 = function(e, t) {
        if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var o = 0; o < t.length; o++)
                this.encoder_.writeZigzagVarint64(t[o]);
            this.endDelimited_(e)
        }
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedSint64", jspb.BinaryWriter.prototype.writePackedSint64),
    jspb.BinaryWriter.prototype.writePackedSint64String = function(e, t) {
        if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var o = 0; o < t.length; o++)
                this.encoder_.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(t[o]));
            this.endDelimited_(e)
        }
    }
    ,
    jspb.BinaryWriter.prototype.writePackedSintHash64 = function(e, t) {
        if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var o = 0; o < t.length; o++)
                this.encoder_.writeZigzagVarintHash64(t[o]);
            this.endDelimited_(e)
        }
    }
    ,
    jspb.BinaryWriter.prototype.writePackedFixed32 = function(e, t) {
        if (null != t && t.length)
            for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            this.encoder_.writeUnsignedVarint32(4 * t.length),
            e = 0; e < t.length; e++)
                this.encoder_.writeUint32(t[e])
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedFixed32", jspb.BinaryWriter.prototype.writePackedFixed32),
    jspb.BinaryWriter.prototype.writePackedFixed64 = function(e, t) {
        if (null != t && t.length)
            for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            this.encoder_.writeUnsignedVarint32(8 * t.length),
            e = 0; e < t.length; e++)
                this.encoder_.writeUint64(t[e])
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedFixed64", jspb.BinaryWriter.prototype.writePackedFixed64),
    jspb.BinaryWriter.prototype.writePackedFixed64String = function(e, t) {
        if (null != t && t.length)
            for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            this.encoder_.writeUnsignedVarint32(8 * t.length),
            e = 0; e < t.length; e++) {
                var o = jspb.arith.UInt64.fromString(t[e]);
                this.encoder_.writeSplitFixed64(o.lo, o.hi)
            }
    }
    ,
    jspb.BinaryWriter.prototype.writePackedSfixed32 = function(e, t) {
        if (null != t && t.length)
            for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            this.encoder_.writeUnsignedVarint32(4 * t.length),
            e = 0; e < t.length; e++)
                this.encoder_.writeInt32(t[e])
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedSfixed32", jspb.BinaryWriter.prototype.writePackedSfixed32),
    jspb.BinaryWriter.prototype.writePackedSfixed64 = function(e, t) {
        if (null != t && t.length)
            for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            this.encoder_.writeUnsignedVarint32(8 * t.length),
            e = 0; e < t.length; e++)
                this.encoder_.writeInt64(t[e])
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedSfixed64", jspb.BinaryWriter.prototype.writePackedSfixed64),
    jspb.BinaryWriter.prototype.writePackedSfixed64String = function(e, t) {
        if (null != t && t.length)
            for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            this.encoder_.writeUnsignedVarint32(8 * t.length),
            e = 0; e < t.length; e++)
                this.encoder_.writeInt64String(t[e])
    }
    ,
    jspb.BinaryWriter.prototype.writePackedFloat = function(e, t) {
        if (null != t && t.length)
            for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            this.encoder_.writeUnsignedVarint32(4 * t.length),
            e = 0; e < t.length; e++)
                this.encoder_.writeFloat(t[e])
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedFloat", jspb.BinaryWriter.prototype.writePackedFloat),
    jspb.BinaryWriter.prototype.writePackedDouble = function(e, t) {
        if (null != t && t.length)
            for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            this.encoder_.writeUnsignedVarint32(8 * t.length),
            e = 0; e < t.length; e++)
                this.encoder_.writeDouble(t[e])
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedDouble", jspb.BinaryWriter.prototype.writePackedDouble),
    jspb.BinaryWriter.prototype.writePackedBool = function(e, t) {
        if (null != t && t.length)
            for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            this.encoder_.writeUnsignedVarint32(t.length),
            e = 0; e < t.length; e++)
                this.encoder_.writeBool(t[e])
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedBool", jspb.BinaryWriter.prototype.writePackedBool),
    jspb.BinaryWriter.prototype.writePackedEnum = function(e, t) {
        if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var o = 0; o < t.length; o++)
                this.encoder_.writeEnum(t[o]);
            this.endDelimited_(e)
        }
    }
    ,
    goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedEnum", jspb.BinaryWriter.prototype.writePackedEnum),
    jspb.BinaryWriter.prototype.writePackedFixedHash64 = function(e, t) {
        if (null != t && t.length)
            for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            this.encoder_.writeUnsignedVarint32(8 * t.length),
            e = 0; e < t.length; e++)
                this.encoder_.writeFixedHash64(t[e])
    }
    ,
    jspb.BinaryWriter.prototype.writePackedVarintHash64 = function(e, t) {
        if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var o = 0; o < t.length; o++)
                this.encoder_.writeVarintHash64(t[o]);
            this.endDelimited_(e)
        }
    }
    ,
    jspb.Map = function(e, t) {
        this.arr_ = e,
        this.valueCtor_ = t,
        this.map_ = {},
        this.arrClean = !0,
        0 < this.arr_.length && this.loadFromArray_()
    }
    ,
    goog.exportSymbol("jspb.Map", jspb.Map),
    jspb.Map.prototype.loadFromArray_ = function() {
        for (var e = 0; e < this.arr_.length; e++) {
            var t = this.arr_[e]
              , o = t[0];
            this.map_[o.toString()] = new jspb.Map.Entry_(o,t[1])
        }
        this.arrClean = !0
    }
    ,
    jspb.Map.prototype.toArray = function() {
        if (this.arrClean) {
            if (this.valueCtor_) {
                var e, t = this.map_;
                for (e in t)
                    if (Object.prototype.hasOwnProperty.call(t, e)) {
                        var o = t[e].valueWrapper;
                        o && o.toArray()
                    }
            }
        } else {
            for (this.arr_.length = 0,
            (t = this.stringKeys_()).sort(),
            e = 0; e < t.length; e++) {
                var r = this.map_[t[e]];
                (o = r.valueWrapper) && o.toArray(),
                this.arr_.push([r.key, r.value])
            }
            this.arrClean = !0
        }
        return this.arr_
    }
    ,
    goog.exportProperty(jspb.Map.prototype, "toArray", jspb.Map.prototype.toArray),
    jspb.Map.prototype.toObject = function(e, t) {
        for (var o = this.toArray(), r = [], i = 0; i < o.length; i++) {
            var a = this.map_[o[i][0].toString()];
            this.wrapEntry_(a);
            var n = a.valueWrapper;
            n ? (jspb.asserts.assert(t),
            r.push([a.key, t(e, n)])) : r.push([a.key, a.value])
        }
        return r
    }
    ,
    goog.exportProperty(jspb.Map.prototype, "toObject", jspb.Map.prototype.toObject),
    jspb.Map.fromObject = function(e, t, o) {
        t = new jspb.Map([],t);
        for (var r = 0; r < e.length; r++) {
            var i = e[r][0]
              , a = o(e[r][1]);
            t.set(i, a)
        }
        return t
    }
    ,
    goog.exportProperty(jspb.Map, "fromObject", jspb.Map.fromObject),
    jspb.Map.ArrayIteratorIterable_ = function(e) {
        this.idx_ = 0,
        this.arr_ = e
    }
    ,
    jspb.Map.ArrayIteratorIterable_.prototype.next = function() {
        return this.idx_ < this.arr_.length ? {
            done: !1,
            value: this.arr_[this.idx_++]
        } : {
            done: !0,
            value: void 0
        }
    }
    ,
    "undefined" != typeof Symbol && (jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator] = function() {
        return this
    }
    ),
    jspb.Map.prototype.getLength = function() {
        return this.stringKeys_().length
    }
    ,
    goog.exportProperty(jspb.Map.prototype, "getLength", jspb.Map.prototype.getLength),
    jspb.Map.prototype.clear = function() {
        this.map_ = {},
        this.arrClean = !1
    }
    ,
    goog.exportProperty(jspb.Map.prototype, "clear", jspb.Map.prototype.clear),
    jspb.Map.prototype.del = function(e) {
        e = e.toString();
        var t = this.map_.hasOwnProperty(e);
        return delete this.map_[e],
        this.arrClean = !1,
        t
    }
    ,
    goog.exportProperty(jspb.Map.prototype, "del", jspb.Map.prototype.del),
    jspb.Map.prototype.getEntryList = function() {
        var e = []
          , t = this.stringKeys_();
        t.sort();
        for (var o = 0; o < t.length; o++) {
            var r = this.map_[t[o]];
            e.push([r.key, r.value])
        }
        return e
    }
    ,
    goog.exportProperty(jspb.Map.prototype, "getEntryList", jspb.Map.prototype.getEntryList),
    jspb.Map.prototype.entries = function() {
        var e = []
          , t = this.stringKeys_();
        t.sort();
        for (var o = 0; o < t.length; o++) {
            var r = this.map_[t[o]];
            e.push([r.key, this.wrapEntry_(r)])
        }
        return new jspb.Map.ArrayIteratorIterable_(e)
    }
    ,
    goog.exportProperty(jspb.Map.prototype, "entries", jspb.Map.prototype.entries),
    jspb.Map.prototype.keys = function() {
        var e = []
          , t = this.stringKeys_();
        t.sort();
        for (var o = 0; o < t.length; o++)
            e.push(this.map_[t[o]].key);
        return new jspb.Map.ArrayIteratorIterable_(e)
    }
    ,
    goog.exportProperty(jspb.Map.prototype, "keys", jspb.Map.prototype.keys),
    jspb.Map.prototype.values = function() {
        var e = []
          , t = this.stringKeys_();
        t.sort();
        for (var o = 0; o < t.length; o++)
            e.push(this.wrapEntry_(this.map_[t[o]]));
        return new jspb.Map.ArrayIteratorIterable_(e)
    }
    ,
    goog.exportProperty(jspb.Map.prototype, "values", jspb.Map.prototype.values),
    jspb.Map.prototype.forEach = function(e, t) {
        var o = this.stringKeys_();
        o.sort();
        for (var r = 0; r < o.length; r++) {
            var i = this.map_[o[r]];
            e.call(t, this.wrapEntry_(i), i.key, this)
        }
    }
    ,
    goog.exportProperty(jspb.Map.prototype, "forEach", jspb.Map.prototype.forEach),
    jspb.Map.prototype.set = function(e, t) {
        var o = new jspb.Map.Entry_(e);
        return this.valueCtor_ ? (o.valueWrapper = t,
        o.value = t.toArray()) : o.value = t,
        this.map_[e.toString()] = o,
        this.arrClean = !1,
        this
    }
    ,
    goog.exportProperty(jspb.Map.prototype, "set", jspb.Map.prototype.set),
    jspb.Map.prototype.wrapEntry_ = function(e) {
        return this.valueCtor_ ? (e.valueWrapper || (e.valueWrapper = new this.valueCtor_(e.value)),
        e.valueWrapper) : e.value
    }
    ,
    jspb.Map.prototype.get = function(e) {
        if (e = this.map_[e.toString()])
            return this.wrapEntry_(e)
    }
    ,
    goog.exportProperty(jspb.Map.prototype, "get", jspb.Map.prototype.get),
    jspb.Map.prototype.has = function(e) {
        return e.toString()in this.map_
    }
    ,
    goog.exportProperty(jspb.Map.prototype, "has", jspb.Map.prototype.has),
    jspb.Map.prototype.serializeBinary = function(e, t, o, r, i) {
        var a = this.stringKeys_();
        a.sort();
        for (var n = 0; n < a.length; n++) {
            var s = this.map_[a[n]];
            t.beginSubMessage(e),
            o.call(t, 1, s.key),
            this.valueCtor_ ? r.call(t, 2, this.wrapEntry_(s), i) : r.call(t, 2, s.value),
            t.endSubMessage()
        }
    }
    ,
    goog.exportProperty(jspb.Map.prototype, "serializeBinary", jspb.Map.prototype.serializeBinary),
    jspb.Map.deserializeBinary = function(e, t, o, r, i, a, n) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            var s = t.getFieldNumber();
            1 == s ? a = o.call(t) : 2 == s && (e.valueCtor_ ? (jspb.asserts.assert(i),
            n || (n = new e.valueCtor_),
            r.call(t, n, i)) : n = r.call(t))
        }
        jspb.asserts.assert(null != a),
        jspb.asserts.assert(null != n),
        e.set(a, n)
    }
    ,
    goog.exportProperty(jspb.Map, "deserializeBinary", jspb.Map.deserializeBinary),
    jspb.Map.prototype.stringKeys_ = function() {
        var e, t = this.map_, o = [];
        for (e in t)
            Object.prototype.hasOwnProperty.call(t, e) && o.push(e);
        return o
    }
    ,
    jspb.Map.Entry_ = function(e, t) {
        this.key = e,
        this.value = t,
        this.valueWrapper = void 0
    }
    ,
    jspb.ExtensionFieldInfo = function(e, t, o, r, i) {
        this.fieldIndex = e,
        this.fieldName = t,
        this.ctor = o,
        this.toObjectFn = r,
        this.isRepeated = i
    }
    ,
    goog.exportSymbol("jspb.ExtensionFieldInfo", jspb.ExtensionFieldInfo),
    jspb.ExtensionFieldBinaryInfo = function(e, t, o, r, i, a) {
        this.fieldInfo = e,
        this.binaryReaderFn = t,
        this.binaryWriterFn = o,
        this.binaryMessageSerializeFn = r,
        this.binaryMessageDeserializeFn = i,
        this.isPacked = a
    }
    ,
    goog.exportSymbol("jspb.ExtensionFieldBinaryInfo", jspb.ExtensionFieldBinaryInfo),
    jspb.ExtensionFieldInfo.prototype.isMessageType = function() {
        return !!this.ctor
    }
    ,
    goog.exportProperty(jspb.ExtensionFieldInfo.prototype, "isMessageType", jspb.ExtensionFieldInfo.prototype.isMessageType),
    jspb.Message = function() {}
    ,
    goog.exportSymbol("jspb.Message", jspb.Message),
    jspb.Message.GENERATE_TO_OBJECT = !0,
    goog.exportProperty(jspb.Message, "GENERATE_TO_OBJECT", jspb.Message.GENERATE_TO_OBJECT),
    jspb.Message.GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE,
    goog.exportProperty(jspb.Message, "GENERATE_FROM_OBJECT", jspb.Message.GENERATE_FROM_OBJECT),
    jspb.Message.GENERATE_TO_STRING = !0,
    jspb.Message.ASSUME_LOCAL_ARRAYS = !1,
    jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS = !0,
    jspb.Message.SUPPORTS_UINT8ARRAY_ = "function" == typeof Uint8Array,
    jspb.Message.prototype.getJsPbMessageId = function() {
        return this.messageId_
    }
    ,
    goog.exportProperty(jspb.Message.prototype, "getJsPbMessageId", jspb.Message.prototype.getJsPbMessageId),
    jspb.Message.getIndex_ = function(e, t) {
        return t + e.arrayIndexOffset_
    }
    ,
    jspb.Message.hiddenES6Property_ = function() {}
    ,
    jspb.Message.getFieldNumber_ = function(e, t) {
        return t - e.arrayIndexOffset_
    }
    ,
    jspb.Message.initialize = function(e, t, o, r, i, a) {
        if (e.wrappers_ = null,
        t || (t = o ? [o] : []),
        e.messageId_ = o ? String(o) : void 0,
        e.arrayIndexOffset_ = 0 === o ? -1 : 0,
        e.array = t,
        jspb.Message.initPivotAndExtensionObject_(e, r),
        e.convertedPrimitiveFields_ = {},
        jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS || (e.repeatedFields = i),
        i)
            for (t = 0; t < i.length; t++)
                (o = i[t]) < e.pivot_ ? (o = jspb.Message.getIndex_(e, o),
                e.array[o] = e.array[o] || jspb.Message.EMPTY_LIST_SENTINEL_) : (jspb.Message.maybeInitEmptyExtensionObject_(e),
                e.extensionObject_[o] = e.extensionObject_[o] || jspb.Message.EMPTY_LIST_SENTINEL_);
        if (a && a.length)
            for (t = 0; t < a.length; t++)
                jspb.Message.computeOneofCase(e, a[t])
    }
    ,
    goog.exportProperty(jspb.Message, "initialize", jspb.Message.initialize),
    jspb.Message.EMPTY_LIST_SENTINEL_ = goog.DEBUG && Object.freeze ? Object.freeze([]) : [],
    jspb.Message.isArray_ = function(e) {
        return jspb.Message.ASSUME_LOCAL_ARRAYS ? e instanceof Array : Array.isArray(e)
    }
    ,
    jspb.Message.isExtensionObject_ = function(e) {
        return !(null === e || "object" != typeof e || jspb.Message.isArray_(e) || jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array)
    }
    ,
    jspb.Message.initPivotAndExtensionObject_ = function(e, t) {
        var o = e.array.length
          , r = -1;
        if (o && (r = o - 1,
        o = e.array[r],
        jspb.Message.isExtensionObject_(o)))
            return e.pivot_ = jspb.Message.getFieldNumber_(e, r),
            void (e.extensionObject_ = o);
        -1 < t ? (e.pivot_ = Math.max(t, jspb.Message.getFieldNumber_(e, r + 1)),
        e.extensionObject_ = null) : e.pivot_ = Number.MAX_VALUE
    }
    ,
    jspb.Message.maybeInitEmptyExtensionObject_ = function(e) {
        var t = jspb.Message.getIndex_(e, e.pivot_);
        e.array[t] || (e.extensionObject_ = e.array[t] = {})
    }
    ,
    jspb.Message.toObjectList = function(e, t, o) {
        for (var r = [], i = 0; i < e.length; i++)
            r[i] = t.call(e[i], o, e[i]);
        return r
    }
    ,
    goog.exportProperty(jspb.Message, "toObjectList", jspb.Message.toObjectList),
    jspb.Message.toObjectExtension = function(e, t, o, r, i) {
        for (var a in o) {
            var n = o[a]
              , s = r.call(e, n);
            if (null != s) {
                for (var p in n.fieldName)
                    if (n.fieldName.hasOwnProperty(p))
                        break;
                t[p] = n.toObjectFn ? n.isRepeated ? jspb.Message.toObjectList(s, n.toObjectFn, i) : n.toObjectFn(i, s) : s
            }
        }
    }
    ,
    goog.exportProperty(jspb.Message, "toObjectExtension", jspb.Message.toObjectExtension),
    jspb.Message.serializeBinaryExtensions = function(e, t, o, r) {
        for (var i in o) {
            var a = o[i]
              , n = a.fieldInfo;
            if (!a.binaryWriterFn)
                throw Error("Message extension present that was generated without binary serialization support");
            var s = r.call(e, n);
            if (null != s)
                if (n.isMessageType()) {
                    if (!a.binaryMessageSerializeFn)
                        throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");
                    a.binaryWriterFn.call(t, n.fieldIndex, s, a.binaryMessageSerializeFn)
                } else
                    a.binaryWriterFn.call(t, n.fieldIndex, s)
        }
    }
    ,
    goog.exportProperty(jspb.Message, "serializeBinaryExtensions", jspb.Message.serializeBinaryExtensions),
    jspb.Message.readBinaryExtension = function(e, t, o, r, i) {
        var a = o[t.getFieldNumber()];
        if (a) {
            if (o = a.fieldInfo,
            !a.binaryReaderFn)
                throw Error("Deserializing extension whose generated code does not support binary format");
            if (o.isMessageType()) {
                var n = new o.ctor;
                a.binaryReaderFn.call(t, n, a.binaryMessageDeserializeFn)
            } else
                n = a.binaryReaderFn.call(t);
            o.isRepeated && !a.isPacked ? (t = r.call(e, o)) ? t.push(n) : i.call(e, o, [n]) : i.call(e, o, n)
        } else
            t.skipField()
    }
    ,
    goog.exportProperty(jspb.Message, "readBinaryExtension", jspb.Message.readBinaryExtension),
    jspb.Message.getField = function(e, t) {
        if (t < e.pivot_) {
            t = jspb.Message.getIndex_(e, t);
            var o = e.array[t];
            return o === jspb.Message.EMPTY_LIST_SENTINEL_ ? e.array[t] = [] : o
        }
        if (e.extensionObject_)
            return (o = e.extensionObject_[t]) === jspb.Message.EMPTY_LIST_SENTINEL_ ? e.extensionObject_[t] = [] : o
    }
    ,
    goog.exportProperty(jspb.Message, "getField", jspb.Message.getField),
    jspb.Message.getRepeatedField = function(e, t) {
        return jspb.Message.getField(e, t)
    }
    ,
    goog.exportProperty(jspb.Message, "getRepeatedField", jspb.Message.getRepeatedField),
    jspb.Message.getOptionalFloatingPointField = function(e, t) {
        return null == (e = jspb.Message.getField(e, t)) ? e : +e
    }
    ,
    goog.exportProperty(jspb.Message, "getOptionalFloatingPointField", jspb.Message.getOptionalFloatingPointField),
    jspb.Message.getBooleanField = function(e, t) {
        return null == (e = jspb.Message.getField(e, t)) ? e : !!e
    }
    ,
    goog.exportProperty(jspb.Message, "getBooleanField", jspb.Message.getBooleanField),
    jspb.Message.getRepeatedFloatingPointField = function(e, t) {
        var o = jspb.Message.getRepeatedField(e, t);
        if (e.convertedPrimitiveFields_ || (e.convertedPrimitiveFields_ = {}),
        !e.convertedPrimitiveFields_[t]) {
            for (var r = 0; r < o.length; r++)
                o[r] = +o[r];
            e.convertedPrimitiveFields_[t] = !0
        }
        return o
    }
    ,
    goog.exportProperty(jspb.Message, "getRepeatedFloatingPointField", jspb.Message.getRepeatedFloatingPointField),
    jspb.Message.getRepeatedBooleanField = function(e, t) {
        var o = jspb.Message.getRepeatedField(e, t);
        if (e.convertedPrimitiveFields_ || (e.convertedPrimitiveFields_ = {}),
        !e.convertedPrimitiveFields_[t]) {
            for (var r = 0; r < o.length; r++)
                o[r] = !!o[r];
            e.convertedPrimitiveFields_[t] = !0
        }
        return o
    }
    ,
    goog.exportProperty(jspb.Message, "getRepeatedBooleanField", jspb.Message.getRepeatedBooleanField),
    jspb.Message.bytesAsB64 = function(e) {
        return null == e || "string" == typeof e ? e : jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array ? goog.crypt.base64.encodeByteArray(e) : (jspb.asserts.fail("Cannot coerce to b64 string: " + goog.typeOf(e)),
        null)
    }
    ,
    goog.exportProperty(jspb.Message, "bytesAsB64", jspb.Message.bytesAsB64),
    jspb.Message.bytesAsU8 = function(e) {
        return null == e || e instanceof Uint8Array ? e : "string" == typeof e ? goog.crypt.base64.decodeStringToUint8Array(e) : (jspb.asserts.fail("Cannot coerce to Uint8Array: " + goog.typeOf(e)),
        null)
    }
    ,
    goog.exportProperty(jspb.Message, "bytesAsU8", jspb.Message.bytesAsU8),
    jspb.Message.bytesListAsB64 = function(e) {
        return jspb.Message.assertConsistentTypes_(e),
        e.length && "string" != typeof e[0] ? goog.array.map(e, jspb.Message.bytesAsB64) : e
    }
    ,
    goog.exportProperty(jspb.Message, "bytesListAsB64", jspb.Message.bytesListAsB64),
    jspb.Message.bytesListAsU8 = function(e) {
        return jspb.Message.assertConsistentTypes_(e),
        !e.length || e[0]instanceof Uint8Array ? e : goog.array.map(e, jspb.Message.bytesAsU8)
    }
    ,
    goog.exportProperty(jspb.Message, "bytesListAsU8", jspb.Message.bytesListAsU8),
    jspb.Message.assertConsistentTypes_ = function(e) {
        if (goog.DEBUG && e && 1 < e.length) {
            var t = goog.typeOf(e[0]);
            goog.array.forEach(e, (function(e) {
                goog.typeOf(e) != t && jspb.asserts.fail("Inconsistent type in JSPB repeated field array. Got " + goog.typeOf(e) + " expected " + t)
            }
            ))
        }
    }
    ,
    jspb.Message.getFieldWithDefault = function(e, t, o) {
        return null == (e = jspb.Message.getField(e, t)) ? o : e
    }
    ,
    goog.exportProperty(jspb.Message, "getFieldWithDefault", jspb.Message.getFieldWithDefault),
    jspb.Message.getBooleanFieldWithDefault = function(e, t, o) {
        return null == (e = jspb.Message.getBooleanField(e, t)) ? o : e
    }
    ,
    goog.exportProperty(jspb.Message, "getBooleanFieldWithDefault", jspb.Message.getBooleanFieldWithDefault),
    jspb.Message.getFloatingPointFieldWithDefault = function(e, t, o) {
        return null == (e = jspb.Message.getOptionalFloatingPointField(e, t)) ? o : e
    }
    ,
    goog.exportProperty(jspb.Message, "getFloatingPointFieldWithDefault", jspb.Message.getFloatingPointFieldWithDefault),
    jspb.Message.getFieldProto3 = jspb.Message.getFieldWithDefault,
    goog.exportProperty(jspb.Message, "getFieldProto3", jspb.Message.getFieldProto3),
    jspb.Message.getMapField = function(e, t, o, r) {
        if (e.wrappers_ || (e.wrappers_ = {}),
        t in e.wrappers_)
            return e.wrappers_[t];
        var i = jspb.Message.getField(e, t);
        if (!i) {
            if (o)
                return;
            i = [],
            jspb.Message.setField(e, t, i)
        }
        return e.wrappers_[t] = new jspb.Map(i,r)
    }
    ,
    goog.exportProperty(jspb.Message, "getMapField", jspb.Message.getMapField),
    jspb.Message.setField = function(e, t, o) {
        return jspb.asserts.assertInstanceof(e, jspb.Message),
        t < e.pivot_ ? e.array[jspb.Message.getIndex_(e, t)] = o : (jspb.Message.maybeInitEmptyExtensionObject_(e),
        e.extensionObject_[t] = o),
        e
    }
    ,
    goog.exportProperty(jspb.Message, "setField", jspb.Message.setField),
    jspb.Message.setProto3IntField = function(e, t, o) {
        return jspb.Message.setFieldIgnoringDefault_(e, t, o, 0)
    }
    ,
    goog.exportProperty(jspb.Message, "setProto3IntField", jspb.Message.setProto3IntField),
    jspb.Message.setProto3FloatField = function(e, t, o) {
        return jspb.Message.setFieldIgnoringDefault_(e, t, o, 0)
    }
    ,
    goog.exportProperty(jspb.Message, "setProto3FloatField", jspb.Message.setProto3FloatField),
    jspb.Message.setProto3BooleanField = function(e, t, o) {
        return jspb.Message.setFieldIgnoringDefault_(e, t, o, !1)
    }
    ,
    goog.exportProperty(jspb.Message, "setProto3BooleanField", jspb.Message.setProto3BooleanField),
    jspb.Message.setProto3StringField = function(e, t, o) {
        return jspb.Message.setFieldIgnoringDefault_(e, t, o, "")
    }
    ,
    goog.exportProperty(jspb.Message, "setProto3StringField", jspb.Message.setProto3StringField),
    jspb.Message.setProto3BytesField = function(e, t, o) {
        return jspb.Message.setFieldIgnoringDefault_(e, t, o, "")
    }
    ,
    goog.exportProperty(jspb.Message, "setProto3BytesField", jspb.Message.setProto3BytesField),
    jspb.Message.setProto3EnumField = function(e, t, o) {
        return jspb.Message.setFieldIgnoringDefault_(e, t, o, 0)
    }
    ,
    goog.exportProperty(jspb.Message, "setProto3EnumField", jspb.Message.setProto3EnumField),
    jspb.Message.setProto3StringIntField = function(e, t, o) {
        return jspb.Message.setFieldIgnoringDefault_(e, t, o, "0")
    }
    ,
    goog.exportProperty(jspb.Message, "setProto3StringIntField", jspb.Message.setProto3StringIntField),
    jspb.Message.setFieldIgnoringDefault_ = function(e, t, o, r) {
        return jspb.asserts.assertInstanceof(e, jspb.Message),
        o !== r ? jspb.Message.setField(e, t, o) : t < e.pivot_ ? e.array[jspb.Message.getIndex_(e, t)] = null : (jspb.Message.maybeInitEmptyExtensionObject_(e),
        delete e.extensionObject_[t]),
        e
    }
    ,
    jspb.Message.addToRepeatedField = function(e, t, o, r) {
        return jspb.asserts.assertInstanceof(e, jspb.Message),
        t = jspb.Message.getRepeatedField(e, t),
        null != r ? t.splice(r, 0, o) : t.push(o),
        e
    }
    ,
    goog.exportProperty(jspb.Message, "addToRepeatedField", jspb.Message.addToRepeatedField),
    jspb.Message.setOneofField = function(e, t, o, r) {
        return jspb.asserts.assertInstanceof(e, jspb.Message),
        (o = jspb.Message.computeOneofCase(e, o)) && o !== t && void 0 !== r && (e.wrappers_ && o in e.wrappers_ && (e.wrappers_[o] = void 0),
        jspb.Message.setField(e, o, void 0)),
        jspb.Message.setField(e, t, r)
    }
    ,
    goog.exportProperty(jspb.Message, "setOneofField", jspb.Message.setOneofField),
    jspb.Message.computeOneofCase = function(e, t) {
        for (var o, r, i = 0; i < t.length; i++) {
            var a = t[i]
              , n = jspb.Message.getField(e, a);
            null != n && (o = a,
            r = n,
            jspb.Message.setField(e, a, void 0))
        }
        return o ? (jspb.Message.setField(e, o, r),
        o) : 0
    }
    ,
    goog.exportProperty(jspb.Message, "computeOneofCase", jspb.Message.computeOneofCase),
    jspb.Message.getWrapperField = function(e, t, o, r) {
        if (e.wrappers_ || (e.wrappers_ = {}),
        !e.wrappers_[o]) {
            var i = jspb.Message.getField(e, o);
            (r || i) && (e.wrappers_[o] = new t(i))
        }
        return e.wrappers_[o]
    }
    ,
    goog.exportProperty(jspb.Message, "getWrapperField", jspb.Message.getWrapperField),
    jspb.Message.getRepeatedWrapperField = function(e, t, o) {
        return jspb.Message.wrapRepeatedField_(e, t, o),
        (t = e.wrappers_[o]) == jspb.Message.EMPTY_LIST_SENTINEL_ && (t = e.wrappers_[o] = []),
        t
    }
    ,
    goog.exportProperty(jspb.Message, "getRepeatedWrapperField", jspb.Message.getRepeatedWrapperField),
    jspb.Message.wrapRepeatedField_ = function(e, t, o) {
        if (e.wrappers_ || (e.wrappers_ = {}),
        !e.wrappers_[o]) {
            for (var r = jspb.Message.getRepeatedField(e, o), i = [], a = 0; a < r.length; a++)
                i[a] = new t(r[a]);
            e.wrappers_[o] = i
        }
    }
    ,
    jspb.Message.setWrapperField = function(e, t, o) {
        jspb.asserts.assertInstanceof(e, jspb.Message),
        e.wrappers_ || (e.wrappers_ = {});
        var r = o ? o.toArray() : o;
        return e.wrappers_[t] = o,
        jspb.Message.setField(e, t, r)
    }
    ,
    goog.exportProperty(jspb.Message, "setWrapperField", jspb.Message.setWrapperField),
    jspb.Message.setOneofWrapperField = function(e, t, o, r) {
        jspb.asserts.assertInstanceof(e, jspb.Message),
        e.wrappers_ || (e.wrappers_ = {});
        var i = r ? r.toArray() : r;
        return e.wrappers_[t] = r,
        jspb.Message.setOneofField(e, t, o, i)
    }
    ,
    goog.exportProperty(jspb.Message, "setOneofWrapperField", jspb.Message.setOneofWrapperField),
    jspb.Message.setRepeatedWrapperField = function(e, t, o) {
        jspb.asserts.assertInstanceof(e, jspb.Message),
        e.wrappers_ || (e.wrappers_ = {}),
        o = o || [];
        for (var r = [], i = 0; i < o.length; i++)
            r[i] = o[i].toArray();
        return e.wrappers_[t] = o,
        jspb.Message.setField(e, t, r)
    }
    ,
    goog.exportProperty(jspb.Message, "setRepeatedWrapperField", jspb.Message.setRepeatedWrapperField),
    jspb.Message.addToRepeatedWrapperField = function(e, t, o, r, i) {
        jspb.Message.wrapRepeatedField_(e, r, t);
        var a = e.wrappers_[t];
        return a || (a = e.wrappers_[t] = []),
        o = o || new r,
        e = jspb.Message.getRepeatedField(e, t),
        null != i ? (a.splice(i, 0, o),
        e.splice(i, 0, o.toArray())) : (a.push(o),
        e.push(o.toArray())),
        o
    }
    ,
    goog.exportProperty(jspb.Message, "addToRepeatedWrapperField", jspb.Message.addToRepeatedWrapperField),
    jspb.Message.toMap = function(e, t, o, r) {
        for (var i = {}, a = 0; a < e.length; a++)
            i[t.call(e[a])] = o ? o.call(e[a], r, e[a]) : e[a];
        return i
    }
    ,
    goog.exportProperty(jspb.Message, "toMap", jspb.Message.toMap),
    jspb.Message.prototype.syncMapFields_ = function() {
        if (this.wrappers_)
            for (var e in this.wrappers_) {
                var t = this.wrappers_[e];
                if (Array.isArray(t))
                    for (var o = 0; o < t.length; o++)
                        t[o] && t[o].toArray();
                else
                    t && t.toArray()
            }
    }
    ,
    jspb.Message.prototype.toArray = function() {
        return this.syncMapFields_(),
        this.array
    }
    ,
    goog.exportProperty(jspb.Message.prototype, "toArray", jspb.Message.prototype.toArray),
    jspb.Message.GENERATE_TO_STRING && (jspb.Message.prototype.toString = function() {
        return this.syncMapFields_(),
        this.array.toString()
    }
    ),
    jspb.Message.prototype.getExtension = function(e) {
        if (this.extensionObject_) {
            this.wrappers_ || (this.wrappers_ = {});
            var t = e.fieldIndex;
            if (e.isRepeated) {
                if (e.isMessageType())
                    return this.wrappers_[t] || (this.wrappers_[t] = goog.array.map(this.extensionObject_[t] || [], (function(t) {
                        return new e.ctor(t)
                    }
                    ))),
                    this.wrappers_[t]
            } else if (e.isMessageType())
                return !this.wrappers_[t] && this.extensionObject_[t] && (this.wrappers_[t] = new e.ctor(this.extensionObject_[t])),
                this.wrappers_[t];
            return this.extensionObject_[t]
        }
    }
    ,
    goog.exportProperty(jspb.Message.prototype, "getExtension", jspb.Message.prototype.getExtension),
    jspb.Message.prototype.setExtension = function(e, t) {
        this.wrappers_ || (this.wrappers_ = {}),
        jspb.Message.maybeInitEmptyExtensionObject_(this);
        var o = e.fieldIndex;
        return e.isRepeated ? (t = t || [],
        e.isMessageType() ? (this.wrappers_[o] = t,
        this.extensionObject_[o] = goog.array.map(t, (function(e) {
            return e.toArray()
        }
        ))) : this.extensionObject_[o] = t) : e.isMessageType() ? (this.wrappers_[o] = t,
        this.extensionObject_[o] = t ? t.toArray() : t) : this.extensionObject_[o] = t,
        this
    }
    ,
    goog.exportProperty(jspb.Message.prototype, "setExtension", jspb.Message.prototype.setExtension),
    jspb.Message.difference = function(e, t) {
        if (!(e instanceof t.constructor))
            throw Error("Messages have different types.");
        var o = e.toArray();
        t = t.toArray();
        var r = []
          , i = 0
          , a = o.length > t.length ? o.length : t.length;
        for (e.getJsPbMessageId() && (r[0] = e.getJsPbMessageId(),
        i = 1); i < a; i++)
            jspb.Message.compareFields(o[i], t[i]) || (r[i] = t[i]);
        return new e.constructor(r)
    }
    ,
    goog.exportProperty(jspb.Message, "difference", jspb.Message.difference),
    jspb.Message.equals = function(e, t) {
        return e == t || !(!e || !t) && e instanceof t.constructor && jspb.Message.compareFields(e.toArray(), t.toArray())
    }
    ,
    goog.exportProperty(jspb.Message, "equals", jspb.Message.equals),
    jspb.Message.compareExtensions = function(e, t) {
        e = e || {},
        t = t || {};
        var o, r = {};
        for (o in e)
            r[o] = 0;
        for (o in t)
            r[o] = 0;
        for (o in r)
            if (!jspb.Message.compareFields(e[o], t[o]))
                return !1;
        return !0
    }
    ,
    goog.exportProperty(jspb.Message, "compareExtensions", jspb.Message.compareExtensions),
    jspb.Message.compareFields = function(e, t) {
        if (e == t)
            return !0;
        if (!goog.isObject(e) || !goog.isObject(t))
            return !!("number" == typeof e && isNaN(e) || "number" == typeof t && isNaN(t)) && String(e) == String(t);
        if (e.constructor != t.constructor)
            return !1;
        if (jspb.Message.SUPPORTS_UINT8ARRAY_ && e.constructor === Uint8Array) {
            if (e.length != t.length)
                return !1;
            for (var o = 0; o < e.length; o++)
                if (e[o] != t[o])
                    return !1;
            return !0
        }
        if (e.constructor === Array) {
            var r = void 0
              , i = void 0
              , a = Math.max(e.length, t.length);
            for (o = 0; o < a; o++) {
                var n = e[o]
                  , s = t[o];
                if (n && n.constructor == Object && (jspb.asserts.assert(void 0 === r),
                jspb.asserts.assert(o === e.length - 1),
                r = n,
                n = void 0),
                s && s.constructor == Object && (jspb.asserts.assert(void 0 === i),
                jspb.asserts.assert(o === t.length - 1),
                i = s,
                s = void 0),
                !jspb.Message.compareFields(n, s))
                    return !1
            }
            return !r && !i || (r = r || {},
            i = i || {},
            jspb.Message.compareExtensions(r, i))
        }
        if (e.constructor === Object)
            return jspb.Message.compareExtensions(e, t);
        throw Error("Invalid type in JSPB array")
    }
    ,
    goog.exportProperty(jspb.Message, "compareFields", jspb.Message.compareFields),
    jspb.Message.prototype.cloneMessage = function() {
        return jspb.Message.cloneMessage(this)
    }
    ,
    goog.exportProperty(jspb.Message.prototype, "cloneMessage", jspb.Message.prototype.cloneMessage),
    jspb.Message.prototype.clone = function() {
        return jspb.Message.cloneMessage(this)
    }
    ,
    goog.exportProperty(jspb.Message.prototype, "clone", jspb.Message.prototype.clone),
    jspb.Message.clone = function(e) {
        return jspb.Message.cloneMessage(e)
    }
    ,
    goog.exportProperty(jspb.Message, "clone", jspb.Message.clone),
    jspb.Message.cloneMessage = function(e) {
        return new e.constructor(jspb.Message.clone_(e.toArray()))
    }
    ,
    jspb.Message.copyInto = function(e, t) {
        jspb.asserts.assertInstanceof(e, jspb.Message),
        jspb.asserts.assertInstanceof(t, jspb.Message),
        jspb.asserts.assert(e.constructor == t.constructor, "Copy source and target message should have the same type."),
        e = jspb.Message.clone(e);
        for (var o = t.toArray(), r = e.toArray(), i = o.length = 0; i < r.length; i++)
            o[i] = r[i];
        t.wrappers_ = e.wrappers_,
        t.extensionObject_ = e.extensionObject_
    }
    ,
    goog.exportProperty(jspb.Message, "copyInto", jspb.Message.copyInto),
    jspb.Message.clone_ = function(e) {
        if (Array.isArray(e)) {
            for (var t = Array(e.length), o = 0; o < e.length; o++) {
                var r = e[o];
                null != r && (t[o] = "object" == typeof r ? jspb.Message.clone_(jspb.asserts.assert(r)) : r)
            }
            return t
        }
        if (jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array)
            return new Uint8Array(e);
        for (o in t = {},
        e)
            null != (r = e[o]) && (t[o] = "object" == typeof r ? jspb.Message.clone_(jspb.asserts.assert(r)) : r);
        return t
    }
    ,
    jspb.Message.registerMessageType = function(e, t) {
        t.messageId = e
    }
    ,
    goog.exportProperty(jspb.Message, "registerMessageType", jspb.Message.registerMessageType),
    jspb.Message.messageSetExtensions = {},
    jspb.Message.messageSetExtensionsBinary = {},
    jspb.Export = {},
    exports.Map = jspb.Map,
    exports.Message = jspb.Message,
    exports.BinaryReader = jspb.BinaryReader,
    exports.BinaryWriter = jspb.BinaryWriter,
    exports.ExtensionFieldInfo = jspb.ExtensionFieldInfo,
    exports.ExtensionFieldBinaryInfo = jspb.ExtensionFieldBinaryInfo,
    exports.exportSymbol = goog.exportSymbol,
    exports.inherits = goog.inherits,
    exports.object = {
        extend: goog.object.extend
    },
    exports.typeOf = goog.typeOf
}
)(googleProtobuf);
var calculator_options_pb = {};
!function(e) {
    var t = googleProtobuf
      , o = t
      , r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof window && window || void 0 !== r && r || "undefined" != typeof self && self || function() {
        return this
    }
    .call(null) || Function("return this")();
    o.exportSymbol("proto.mediapipe.CalculatorOptions", null, r),
    proto.mediapipe.CalculatorOptions = function(e) {
        t.Message.initialize(this, e, 0, 2, null, null)
    }
    ,
    o.inherits(proto.mediapipe.CalculatorOptions, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.CalculatorOptions.displayName = "proto.mediapipe.CalculatorOptions"),
    proto.mediapipe.CalculatorOptions.extensions = {},
    proto.mediapipe.CalculatorOptions.extensionsBinary = {},
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.CalculatorOptions.prototype.toObject = function(e) {
        return proto.mediapipe.CalculatorOptions.toObject(e, this)
    }
    ,
    proto.mediapipe.CalculatorOptions.toObject = function(e, o) {
        var r, i = {
            mergeFields: null == (r = t.Message.getBooleanField(o, 1)) ? void 0 : r
        };
        return t.Message.toObjectExtension(o, i, proto.mediapipe.CalculatorOptions.extensions, proto.mediapipe.CalculatorOptions.prototype.getExtension, e),
        e && (i.$jspbMessageInstance = o),
        i
    }
    ),
    proto.mediapipe.CalculatorOptions.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.CalculatorOptions;
        return proto.mediapipe.CalculatorOptions.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.CalculatorOptions.deserializeBinaryFromReader = function(e, o) {
        for (; o.nextField() && !o.isEndGroup(); ) {
            if (1 === o.getFieldNumber()) {
                var r = o.readBool();
                e.setMergeFields(r)
            } else
                t.Message.readBinaryExtension(e, o, proto.mediapipe.CalculatorOptions.extensionsBinary, proto.mediapipe.CalculatorOptions.prototype.getExtension, proto.mediapipe.CalculatorOptions.prototype.setExtension)
        }
        return e
    }
    ,
    proto.mediapipe.CalculatorOptions.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.CalculatorOptions.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.CalculatorOptions.serializeBinaryToWriter = function(e, o) {
        var r;
        null != (r = t.Message.getField(e, 1)) && o.writeBool(1, r),
        t.Message.serializeBinaryExtensions(e, o, proto.mediapipe.CalculatorOptions.extensionsBinary, proto.mediapipe.CalculatorOptions.prototype.getExtension)
    }
    ,
    proto.mediapipe.CalculatorOptions.prototype.getMergeFields = function() {
        return t.Message.getBooleanFieldWithDefault(this, 1, !1)
    }
    ,
    proto.mediapipe.CalculatorOptions.prototype.setMergeFields = function(e) {
        return t.Message.setField(this, 1, e)
    }
    ,
    proto.mediapipe.CalculatorOptions.prototype.clearMergeFields = function() {
        return t.Message.setField(this, 1, void 0)
    }
    ,
    proto.mediapipe.CalculatorOptions.prototype.hasMergeFields = function() {
        return null != t.Message.getField(this, 1)
    }
    ,
    o.object.extend(e, proto.mediapipe)
}(calculator_options_pb);
var any_pb = {};
!function(e) {
    var t = googleProtobuf
      , o = t
      , r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof window && window || void 0 !== r && r || "undefined" != typeof self && self || function() {
        return this
    }
    .call(null) || Function("return this")();
    o.exportSymbol("proto.google.protobuf.Any", null, r),
    proto.google.protobuf.Any = function(e) {
        t.Message.initialize(this, e, 0, -1, null, null)
    }
    ,
    o.inherits(proto.google.protobuf.Any, t.Message),
    o.DEBUG && !COMPILED && (proto.google.protobuf.Any.displayName = "proto.google.protobuf.Any"),
    t.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.Any.prototype.toObject = function(e) {
        return proto.google.protobuf.Any.toObject(e, this)
    }
    ,
    proto.google.protobuf.Any.toObject = function(e, o) {
        var r = {
            typeUrl: t.Message.getFieldWithDefault(o, 1, ""),
            value: o.getValue_asB64()
        };
        return e && (r.$jspbMessageInstance = o),
        r
    }
    ),
    proto.google.protobuf.Any.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.google.protobuf.Any;
        return proto.google.protobuf.Any.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.google.protobuf.Any.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = t.readString();
                e.setTypeUrl(o);
                break;
            case 2:
                o = t.readBytes();
                e.setValue(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.google.protobuf.Any.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.google.protobuf.Any.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.google.protobuf.Any.serializeBinaryToWriter = function(e, t) {
        var o = void 0;
        (o = e.getTypeUrl()).length > 0 && t.writeString(1, o),
        (o = e.getValue_asU8()).length > 0 && t.writeBytes(2, o)
    }
    ,
    proto.google.protobuf.Any.prototype.getTypeUrl = function() {
        return t.Message.getFieldWithDefault(this, 1, "")
    }
    ,
    proto.google.protobuf.Any.prototype.setTypeUrl = function(e) {
        return t.Message.setProto3StringField(this, 1, e)
    }
    ,
    proto.google.protobuf.Any.prototype.getValue = function() {
        return t.Message.getFieldWithDefault(this, 2, "")
    }
    ,
    proto.google.protobuf.Any.prototype.getValue_asB64 = function() {
        return t.Message.bytesAsB64(this.getValue())
    }
    ,
    proto.google.protobuf.Any.prototype.getValue_asU8 = function() {
        return t.Message.bytesAsU8(this.getValue())
    }
    ,
    proto.google.protobuf.Any.prototype.setValue = function(e) {
        return t.Message.setProto3BytesField(this, 2, e)
    }
    ,
    o.object.extend(e, proto.google.protobuf),
    proto.google.protobuf.Any.prototype.getTypeName = function() {
        return this.getTypeUrl().split("/").pop()
    }
    ,
    proto.google.protobuf.Any.prototype.pack = function(e, t, o) {
        o || (o = "type.googleapis.com/"),
        "/" != o.substr(-1) ? this.setTypeUrl(o + "/" + t) : this.setTypeUrl(o + t),
        this.setValue(e)
    }
    ,
    proto.google.protobuf.Any.prototype.unpack = function(e, t) {
        return this.getTypeName() == t ? e(this.getValue_asU8()) : null
    }
}(any_pb);
var mediapipe_options_pb = {};
!function(e) {
    var t = googleProtobuf
      , o = t
      , r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof window && window || void 0 !== r && r || "undefined" != typeof self && self || function() {
        return this
    }
    .call(null) || Function("return this")();
    o.exportSymbol("proto.mediapipe.MediaPipeOptions", null, r),
    proto.mediapipe.MediaPipeOptions = function(e) {
        t.Message.initialize(this, e, 0, 1, null, null)
    }
    ,
    o.inherits(proto.mediapipe.MediaPipeOptions, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.MediaPipeOptions.displayName = "proto.mediapipe.MediaPipeOptions"),
    proto.mediapipe.MediaPipeOptions.extensions = {},
    proto.mediapipe.MediaPipeOptions.extensionsBinary = {},
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.MediaPipeOptions.prototype.toObject = function(e) {
        return proto.mediapipe.MediaPipeOptions.toObject(e, this)
    }
    ,
    proto.mediapipe.MediaPipeOptions.toObject = function(e, o) {
        var r = {};
        return t.Message.toObjectExtension(o, r, proto.mediapipe.MediaPipeOptions.extensions, proto.mediapipe.MediaPipeOptions.prototype.getExtension, e),
        e && (r.$jspbMessageInstance = o),
        r
    }
    ),
    proto.mediapipe.MediaPipeOptions.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.MediaPipeOptions;
        return proto.mediapipe.MediaPipeOptions.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.MediaPipeOptions.deserializeBinaryFromReader = function(e, o) {
        for (; o.nextField() && !o.isEndGroup(); ) {
            o.getFieldNumber();
            t.Message.readBinaryExtension(e, o, proto.mediapipe.MediaPipeOptions.extensionsBinary, proto.mediapipe.MediaPipeOptions.prototype.getExtension, proto.mediapipe.MediaPipeOptions.prototype.setExtension)
        }
        return e
    }
    ,
    proto.mediapipe.MediaPipeOptions.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.MediaPipeOptions.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.MediaPipeOptions.serializeBinaryToWriter = function(e, o) {
        t.Message.serializeBinaryExtensions(e, o, proto.mediapipe.MediaPipeOptions.extensionsBinary, proto.mediapipe.MediaPipeOptions.prototype.getExtension)
    }
    ,
    o.object.extend(e, proto.mediapipe)
}(mediapipe_options_pb);
var packet_factory_pb = {};
!function(e) {
    var t = googleProtobuf
      , o = t
      , r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof window && window || void 0 !== r && r || "undefined" != typeof self && self || function() {
        return this
    }
    .call(null) || Function("return this")();
    o.exportSymbol("proto.mediapipe.PacketFactoryConfig", null, r),
    o.exportSymbol("proto.mediapipe.PacketFactoryOptions", null, r),
    o.exportSymbol("proto.mediapipe.PacketManagerConfig", null, r),
    proto.mediapipe.PacketFactoryOptions = function(e) {
        t.Message.initialize(this, e, 0, 1, null, null)
    }
    ,
    o.inherits(proto.mediapipe.PacketFactoryOptions, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.PacketFactoryOptions.displayName = "proto.mediapipe.PacketFactoryOptions"),
    proto.mediapipe.PacketFactoryOptions.extensions = {},
    proto.mediapipe.PacketFactoryOptions.extensionsBinary = {},
    proto.mediapipe.PacketFactoryConfig = function(e) {
        t.Message.initialize(this, e, 0, 500, null, null)
    }
    ,
    o.inherits(proto.mediapipe.PacketFactoryConfig, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.PacketFactoryConfig.displayName = "proto.mediapipe.PacketFactoryConfig"),
    proto.mediapipe.PacketManagerConfig = function(e) {
        t.Message.initialize(this, e, 0, -1, proto.mediapipe.PacketManagerConfig.repeatedFields_, null)
    }
    ,
    o.inherits(proto.mediapipe.PacketManagerConfig, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.PacketManagerConfig.displayName = "proto.mediapipe.PacketManagerConfig"),
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.PacketFactoryOptions.prototype.toObject = function(e) {
        return proto.mediapipe.PacketFactoryOptions.toObject(e, this)
    }
    ,
    proto.mediapipe.PacketFactoryOptions.toObject = function(e, o) {
        var r = {};
        return t.Message.toObjectExtension(o, r, proto.mediapipe.PacketFactoryOptions.extensions, proto.mediapipe.PacketFactoryOptions.prototype.getExtension, e),
        e && (r.$jspbMessageInstance = o),
        r
    }
    ),
    proto.mediapipe.PacketFactoryOptions.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.PacketFactoryOptions;
        return proto.mediapipe.PacketFactoryOptions.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.PacketFactoryOptions.deserializeBinaryFromReader = function(e, o) {
        for (; o.nextField() && !o.isEndGroup(); ) {
            o.getFieldNumber();
            t.Message.readBinaryExtension(e, o, proto.mediapipe.PacketFactoryOptions.extensionsBinary, proto.mediapipe.PacketFactoryOptions.prototype.getExtension, proto.mediapipe.PacketFactoryOptions.prototype.setExtension)
        }
        return e
    }
    ,
    proto.mediapipe.PacketFactoryOptions.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.PacketFactoryOptions.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.PacketFactoryOptions.serializeBinaryToWriter = function(e, o) {
        t.Message.serializeBinaryExtensions(e, o, proto.mediapipe.PacketFactoryOptions.extensionsBinary, proto.mediapipe.PacketFactoryOptions.prototype.getExtension)
    }
    ,
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.PacketFactoryConfig.prototype.toObject = function(e) {
        return proto.mediapipe.PacketFactoryConfig.toObject(e, this)
    }
    ,
    proto.mediapipe.PacketFactoryConfig.toObject = function(e, o) {
        var r, i = {
            packetFactory: null == (r = t.Message.getField(o, 1)) ? void 0 : r,
            outputSidePacket: null == (r = t.Message.getField(o, 2)) ? void 0 : r,
            externalOutput: null == (r = t.Message.getField(o, 1002)) ? void 0 : r,
            options: (r = o.getOptions()) && proto.mediapipe.PacketFactoryOptions.toObject(e, r)
        };
        return e && (i.$jspbMessageInstance = o),
        i
    }
    ),
    proto.mediapipe.PacketFactoryConfig.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.PacketFactoryConfig;
        return proto.mediapipe.PacketFactoryConfig.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.PacketFactoryConfig.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = t.readString();
                e.setPacketFactory(o);
                break;
            case 2:
                o = t.readString();
                e.setOutputSidePacket(o);
                break;
            case 1002:
                o = t.readString();
                e.setExternalOutput(o);
                break;
            case 3:
                o = new proto.mediapipe.PacketFactoryOptions;
                t.readMessage(o, proto.mediapipe.PacketFactoryOptions.deserializeBinaryFromReader),
                e.setOptions(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.PacketFactoryConfig.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.PacketFactoryConfig.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.PacketFactoryConfig.serializeBinaryToWriter = function(e, o) {
        var r = void 0;
        null != (r = t.Message.getField(e, 1)) && o.writeString(1, r),
        null != (r = t.Message.getField(e, 2)) && o.writeString(2, r),
        null != (r = t.Message.getField(e, 1002)) && o.writeString(1002, r),
        null != (r = e.getOptions()) && o.writeMessage(3, r, proto.mediapipe.PacketFactoryOptions.serializeBinaryToWriter)
    }
    ,
    proto.mediapipe.PacketFactoryConfig.prototype.getPacketFactory = function() {
        return t.Message.getFieldWithDefault(this, 1, "")
    }
    ,
    proto.mediapipe.PacketFactoryConfig.prototype.setPacketFactory = function(e) {
        return t.Message.setField(this, 1, e)
    }
    ,
    proto.mediapipe.PacketFactoryConfig.prototype.clearPacketFactory = function() {
        return t.Message.setField(this, 1, void 0)
    }
    ,
    proto.mediapipe.PacketFactoryConfig.prototype.hasPacketFactory = function() {
        return null != t.Message.getField(this, 1)
    }
    ,
    proto.mediapipe.PacketFactoryConfig.prototype.getOutputSidePacket = function() {
        return t.Message.getFieldWithDefault(this, 2, "")
    }
    ,
    proto.mediapipe.PacketFactoryConfig.prototype.setOutputSidePacket = function(e) {
        return t.Message.setField(this, 2, e)
    }
    ,
    proto.mediapipe.PacketFactoryConfig.prototype.clearOutputSidePacket = function() {
        return t.Message.setField(this, 2, void 0)
    }
    ,
    proto.mediapipe.PacketFactoryConfig.prototype.hasOutputSidePacket = function() {
        return null != t.Message.getField(this, 2)
    }
    ,
    proto.mediapipe.PacketFactoryConfig.prototype.getExternalOutput = function() {
        return t.Message.getFieldWithDefault(this, 1002, "")
    }
    ,
    proto.mediapipe.PacketFactoryConfig.prototype.setExternalOutput = function(e) {
        return t.Message.setField(this, 1002, e)
    }
    ,
    proto.mediapipe.PacketFactoryConfig.prototype.clearExternalOutput = function() {
        return t.Message.setField(this, 1002, void 0)
    }
    ,
    proto.mediapipe.PacketFactoryConfig.prototype.hasExternalOutput = function() {
        return null != t.Message.getField(this, 1002)
    }
    ,
    proto.mediapipe.PacketFactoryConfig.prototype.getOptions = function() {
        return t.Message.getWrapperField(this, proto.mediapipe.PacketFactoryOptions, 3)
    }
    ,
    proto.mediapipe.PacketFactoryConfig.prototype.setOptions = function(e) {
        return t.Message.setWrapperField(this, 3, e)
    }
    ,
    proto.mediapipe.PacketFactoryConfig.prototype.clearOptions = function() {
        return this.setOptions(void 0)
    }
    ,
    proto.mediapipe.PacketFactoryConfig.prototype.hasOptions = function() {
        return null != t.Message.getField(this, 3)
    }
    ,
    proto.mediapipe.PacketManagerConfig.repeatedFields_ = [1],
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.PacketManagerConfig.prototype.toObject = function(e) {
        return proto.mediapipe.PacketManagerConfig.toObject(e, this)
    }
    ,
    proto.mediapipe.PacketManagerConfig.toObject = function(e, o) {
        var r = {
            packetList: t.Message.toObjectList(o.getPacketList(), proto.mediapipe.PacketFactoryConfig.toObject, e)
        };
        return e && (r.$jspbMessageInstance = o),
        r
    }
    ),
    proto.mediapipe.PacketManagerConfig.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.PacketManagerConfig;
        return proto.mediapipe.PacketManagerConfig.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.PacketManagerConfig.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            if (1 === t.getFieldNumber()) {
                var o = new proto.mediapipe.PacketFactoryConfig;
                t.readMessage(o, proto.mediapipe.PacketFactoryConfig.deserializeBinaryFromReader),
                e.addPacket(o)
            } else
                t.skipField()
        }
        return e
    }
    ,
    proto.mediapipe.PacketManagerConfig.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.PacketManagerConfig.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.PacketManagerConfig.serializeBinaryToWriter = function(e, t) {
        var o;
        (o = e.getPacketList()).length > 0 && t.writeRepeatedMessage(1, o, proto.mediapipe.PacketFactoryConfig.serializeBinaryToWriter)
    }
    ,
    proto.mediapipe.PacketManagerConfig.prototype.getPacketList = function() {
        return t.Message.getRepeatedWrapperField(this, proto.mediapipe.PacketFactoryConfig, 1)
    }
    ,
    proto.mediapipe.PacketManagerConfig.prototype.setPacketList = function(e) {
        return t.Message.setRepeatedWrapperField(this, 1, e)
    }
    ,
    proto.mediapipe.PacketManagerConfig.prototype.addPacket = function(e, o) {
        return t.Message.addToRepeatedWrapperField(this, 1, e, proto.mediapipe.PacketFactoryConfig, o)
    }
    ,
    proto.mediapipe.PacketManagerConfig.prototype.clearPacketList = function() {
        return this.setPacketList([])
    }
    ,
    o.object.extend(e, proto.mediapipe)
}(packet_factory_pb);
var packet_generator_pb = {};
!function(e) {
    var t = googleProtobuf
      , o = t
      , r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof window && window || void 0 !== r && r || "undefined" != typeof self && self || function() {
        return this
    }
    .call(null) || Function("return this")();
    o.exportSymbol("proto.mediapipe.PacketGeneratorConfig", null, r),
    o.exportSymbol("proto.mediapipe.PacketGeneratorOptions", null, r),
    proto.mediapipe.PacketGeneratorOptions = function(e) {
        t.Message.initialize(this, e, 0, 2, null, null)
    }
    ,
    o.inherits(proto.mediapipe.PacketGeneratorOptions, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.PacketGeneratorOptions.displayName = "proto.mediapipe.PacketGeneratorOptions"),
    proto.mediapipe.PacketGeneratorOptions.extensions = {},
    proto.mediapipe.PacketGeneratorOptions.extensionsBinary = {},
    proto.mediapipe.PacketGeneratorConfig = function(e) {
        t.Message.initialize(this, e, 0, 500, proto.mediapipe.PacketGeneratorConfig.repeatedFields_, null)
    }
    ,
    o.inherits(proto.mediapipe.PacketGeneratorConfig, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.PacketGeneratorConfig.displayName = "proto.mediapipe.PacketGeneratorConfig"),
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.PacketGeneratorOptions.prototype.toObject = function(e) {
        return proto.mediapipe.PacketGeneratorOptions.toObject(e, this)
    }
    ,
    proto.mediapipe.PacketGeneratorOptions.toObject = function(e, o) {
        var r = {
            mergeFields: t.Message.getBooleanFieldWithDefault(o, 1, !0)
        };
        return t.Message.toObjectExtension(o, r, proto.mediapipe.PacketGeneratorOptions.extensions, proto.mediapipe.PacketGeneratorOptions.prototype.getExtension, e),
        e && (r.$jspbMessageInstance = o),
        r
    }
    ),
    proto.mediapipe.PacketGeneratorOptions.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.PacketGeneratorOptions;
        return proto.mediapipe.PacketGeneratorOptions.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.PacketGeneratorOptions.deserializeBinaryFromReader = function(e, o) {
        for (; o.nextField() && !o.isEndGroup(); ) {
            if (1 === o.getFieldNumber()) {
                var r = o.readBool();
                e.setMergeFields(r)
            } else
                t.Message.readBinaryExtension(e, o, proto.mediapipe.PacketGeneratorOptions.extensionsBinary, proto.mediapipe.PacketGeneratorOptions.prototype.getExtension, proto.mediapipe.PacketGeneratorOptions.prototype.setExtension)
        }
        return e
    }
    ,
    proto.mediapipe.PacketGeneratorOptions.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.PacketGeneratorOptions.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.PacketGeneratorOptions.serializeBinaryToWriter = function(e, o) {
        var r;
        null != (r = t.Message.getField(e, 1)) && o.writeBool(1, r),
        t.Message.serializeBinaryExtensions(e, o, proto.mediapipe.PacketGeneratorOptions.extensionsBinary, proto.mediapipe.PacketGeneratorOptions.prototype.getExtension)
    }
    ,
    proto.mediapipe.PacketGeneratorOptions.prototype.getMergeFields = function() {
        return t.Message.getBooleanFieldWithDefault(this, 1, !0)
    }
    ,
    proto.mediapipe.PacketGeneratorOptions.prototype.setMergeFields = function(e) {
        return t.Message.setField(this, 1, e)
    }
    ,
    proto.mediapipe.PacketGeneratorOptions.prototype.clearMergeFields = function() {
        return t.Message.setField(this, 1, void 0)
    }
    ,
    proto.mediapipe.PacketGeneratorOptions.prototype.hasMergeFields = function() {
        return null != t.Message.getField(this, 1)
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.repeatedFields_ = [2, 1002, 3, 1003],
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.PacketGeneratorConfig.prototype.toObject = function(e) {
        return proto.mediapipe.PacketGeneratorConfig.toObject(e, this)
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.toObject = function(e, o) {
        var r, i = {
            packetGenerator: null == (r = t.Message.getField(o, 1)) ? void 0 : r,
            inputSidePacketList: null == (r = t.Message.getRepeatedField(o, 2)) ? void 0 : r,
            externalInputList: null == (r = t.Message.getRepeatedField(o, 1002)) ? void 0 : r,
            outputSidePacketList: null == (r = t.Message.getRepeatedField(o, 3)) ? void 0 : r,
            externalOutputList: null == (r = t.Message.getRepeatedField(o, 1003)) ? void 0 : r,
            options: (r = o.getOptions()) && proto.mediapipe.PacketGeneratorOptions.toObject(e, r)
        };
        return e && (i.$jspbMessageInstance = o),
        i
    }
    ),
    proto.mediapipe.PacketGeneratorConfig.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.PacketGeneratorConfig;
        return proto.mediapipe.PacketGeneratorConfig.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = t.readString();
                e.setPacketGenerator(o);
                break;
            case 2:
                o = t.readString();
                e.addInputSidePacket(o);
                break;
            case 1002:
                o = t.readString();
                e.addExternalInput(o);
                break;
            case 3:
                o = t.readString();
                e.addOutputSidePacket(o);
                break;
            case 1003:
                o = t.readString();
                e.addExternalOutput(o);
                break;
            case 4:
                o = new proto.mediapipe.PacketGeneratorOptions;
                t.readMessage(o, proto.mediapipe.PacketGeneratorOptions.deserializeBinaryFromReader),
                e.setOptions(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.PacketGeneratorConfig.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.serializeBinaryToWriter = function(e, o) {
        var r = void 0;
        null != (r = t.Message.getField(e, 1)) && o.writeString(1, r),
        (r = e.getInputSidePacketList()).length > 0 && o.writeRepeatedString(2, r),
        (r = e.getExternalInputList()).length > 0 && o.writeRepeatedString(1002, r),
        (r = e.getOutputSidePacketList()).length > 0 && o.writeRepeatedString(3, r),
        (r = e.getExternalOutputList()).length > 0 && o.writeRepeatedString(1003, r),
        null != (r = e.getOptions()) && o.writeMessage(4, r, proto.mediapipe.PacketGeneratorOptions.serializeBinaryToWriter)
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.getPacketGenerator = function() {
        return t.Message.getFieldWithDefault(this, 1, "")
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.setPacketGenerator = function(e) {
        return t.Message.setField(this, 1, e)
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.clearPacketGenerator = function() {
        return t.Message.setField(this, 1, void 0)
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.hasPacketGenerator = function() {
        return null != t.Message.getField(this, 1)
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.getInputSidePacketList = function() {
        return t.Message.getRepeatedField(this, 2)
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.setInputSidePacketList = function(e) {
        return t.Message.setField(this, 2, e || [])
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.addInputSidePacket = function(e, o) {
        return t.Message.addToRepeatedField(this, 2, e, o)
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.clearInputSidePacketList = function() {
        return this.setInputSidePacketList([])
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.getExternalInputList = function() {
        return t.Message.getRepeatedField(this, 1002)
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.setExternalInputList = function(e) {
        return t.Message.setField(this, 1002, e || [])
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.addExternalInput = function(e, o) {
        return t.Message.addToRepeatedField(this, 1002, e, o)
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.clearExternalInputList = function() {
        return this.setExternalInputList([])
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.getOutputSidePacketList = function() {
        return t.Message.getRepeatedField(this, 3)
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.setOutputSidePacketList = function(e) {
        return t.Message.setField(this, 3, e || [])
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.addOutputSidePacket = function(e, o) {
        return t.Message.addToRepeatedField(this, 3, e, o)
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.clearOutputSidePacketList = function() {
        return this.setOutputSidePacketList([])
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.getExternalOutputList = function() {
        return t.Message.getRepeatedField(this, 1003)
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.setExternalOutputList = function(e) {
        return t.Message.setField(this, 1003, e || [])
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.addExternalOutput = function(e, o) {
        return t.Message.addToRepeatedField(this, 1003, e, o)
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.clearExternalOutputList = function() {
        return this.setExternalOutputList([])
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.getOptions = function() {
        return t.Message.getWrapperField(this, proto.mediapipe.PacketGeneratorOptions, 4)
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.setOptions = function(e) {
        return t.Message.setWrapperField(this, 4, e)
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.clearOptions = function() {
        return this.setOptions(void 0)
    }
    ,
    proto.mediapipe.PacketGeneratorConfig.prototype.hasOptions = function() {
        return null != t.Message.getField(this, 4)
    }
    ,
    o.object.extend(e, proto.mediapipe)
}(packet_generator_pb);
var status_handler_pb = {};
!function(e) {
    var t = googleProtobuf
      , o = t
      , r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof window && window || void 0 !== r && r || "undefined" != typeof self && self || function() {
        return this
    }
    .call(null) || Function("return this")()
      , i = mediapipe_options_pb;
    o.object.extend(proto, i),
    o.exportSymbol("proto.mediapipe.StatusHandlerConfig", null, r),
    proto.mediapipe.StatusHandlerConfig = function(e) {
        t.Message.initialize(this, e, 0, 500, proto.mediapipe.StatusHandlerConfig.repeatedFields_, null)
    }
    ,
    o.inherits(proto.mediapipe.StatusHandlerConfig, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.StatusHandlerConfig.displayName = "proto.mediapipe.StatusHandlerConfig"),
    proto.mediapipe.StatusHandlerConfig.repeatedFields_ = [2, 1002],
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.StatusHandlerConfig.prototype.toObject = function(e) {
        return proto.mediapipe.StatusHandlerConfig.toObject(e, this)
    }
    ,
    proto.mediapipe.StatusHandlerConfig.toObject = function(e, o) {
        var r, a = {
            statusHandler: null == (r = t.Message.getField(o, 1)) ? void 0 : r,
            inputSidePacketList: null == (r = t.Message.getRepeatedField(o, 2)) ? void 0 : r,
            externalInputList: null == (r = t.Message.getRepeatedField(o, 1002)) ? void 0 : r,
            options: (r = o.getOptions()) && i.MediaPipeOptions.toObject(e, r)
        };
        return e && (a.$jspbMessageInstance = o),
        a
    }
    ),
    proto.mediapipe.StatusHandlerConfig.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.StatusHandlerConfig;
        return proto.mediapipe.StatusHandlerConfig.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.StatusHandlerConfig.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = t.readString();
                e.setStatusHandler(o);
                break;
            case 2:
                o = t.readString();
                e.addInputSidePacket(o);
                break;
            case 1002:
                o = t.readString();
                e.addExternalInput(o);
                break;
            case 3:
                o = new i.MediaPipeOptions;
                t.readMessage(o, i.MediaPipeOptions.deserializeBinaryFromReader),
                e.setOptions(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.StatusHandlerConfig.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.StatusHandlerConfig.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.StatusHandlerConfig.serializeBinaryToWriter = function(e, o) {
        var r = void 0;
        null != (r = t.Message.getField(e, 1)) && o.writeString(1, r),
        (r = e.getInputSidePacketList()).length > 0 && o.writeRepeatedString(2, r),
        (r = e.getExternalInputList()).length > 0 && o.writeRepeatedString(1002, r),
        null != (r = e.getOptions()) && o.writeMessage(3, r, i.MediaPipeOptions.serializeBinaryToWriter)
    }
    ,
    proto.mediapipe.StatusHandlerConfig.prototype.getStatusHandler = function() {
        return t.Message.getFieldWithDefault(this, 1, "")
    }
    ,
    proto.mediapipe.StatusHandlerConfig.prototype.setStatusHandler = function(e) {
        return t.Message.setField(this, 1, e)
    }
    ,
    proto.mediapipe.StatusHandlerConfig.prototype.clearStatusHandler = function() {
        return t.Message.setField(this, 1, void 0)
    }
    ,
    proto.mediapipe.StatusHandlerConfig.prototype.hasStatusHandler = function() {
        return null != t.Message.getField(this, 1)
    }
    ,
    proto.mediapipe.StatusHandlerConfig.prototype.getInputSidePacketList = function() {
        return t.Message.getRepeatedField(this, 2)
    }
    ,
    proto.mediapipe.StatusHandlerConfig.prototype.setInputSidePacketList = function(e) {
        return t.Message.setField(this, 2, e || [])
    }
    ,
    proto.mediapipe.StatusHandlerConfig.prototype.addInputSidePacket = function(e, o) {
        return t.Message.addToRepeatedField(this, 2, e, o)
    }
    ,
    proto.mediapipe.StatusHandlerConfig.prototype.clearInputSidePacketList = function() {
        return this.setInputSidePacketList([])
    }
    ,
    proto.mediapipe.StatusHandlerConfig.prototype.getExternalInputList = function() {
        return t.Message.getRepeatedField(this, 1002)
    }
    ,
    proto.mediapipe.StatusHandlerConfig.prototype.setExternalInputList = function(e) {
        return t.Message.setField(this, 1002, e || [])
    }
    ,
    proto.mediapipe.StatusHandlerConfig.prototype.addExternalInput = function(e, o) {
        return t.Message.addToRepeatedField(this, 1002, e, o)
    }
    ,
    proto.mediapipe.StatusHandlerConfig.prototype.clearExternalInputList = function() {
        return this.setExternalInputList([])
    }
    ,
    proto.mediapipe.StatusHandlerConfig.prototype.getOptions = function() {
        return t.Message.getWrapperField(this, i.MediaPipeOptions, 3)
    }
    ,
    proto.mediapipe.StatusHandlerConfig.prototype.setOptions = function(e) {
        return t.Message.setWrapperField(this, 3, e)
    }
    ,
    proto.mediapipe.StatusHandlerConfig.prototype.clearOptions = function() {
        return this.setOptions(void 0)
    }
    ,
    proto.mediapipe.StatusHandlerConfig.prototype.hasOptions = function() {
        return null != t.Message.getField(this, 3)
    }
    ,
    o.object.extend(e, proto.mediapipe)
}(status_handler_pb);
var stream_handler_pb = {};
!function(e) {
    var t = googleProtobuf
      , o = t
      , r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof window && window || void 0 !== r && r || "undefined" != typeof self && self || function() {
        return this
    }
    .call(null) || Function("return this")()
      , i = mediapipe_options_pb;
    o.object.extend(proto, i),
    o.exportSymbol("proto.mediapipe.InputStreamHandlerConfig", null, r),
    o.exportSymbol("proto.mediapipe.OutputStreamHandlerConfig", null, r),
    proto.mediapipe.InputStreamHandlerConfig = function(e) {
        t.Message.initialize(this, e, 0, -1, null, null)
    }
    ,
    o.inherits(proto.mediapipe.InputStreamHandlerConfig, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.InputStreamHandlerConfig.displayName = "proto.mediapipe.InputStreamHandlerConfig"),
    proto.mediapipe.OutputStreamHandlerConfig = function(e) {
        t.Message.initialize(this, e, 0, -1, proto.mediapipe.OutputStreamHandlerConfig.repeatedFields_, null)
    }
    ,
    o.inherits(proto.mediapipe.OutputStreamHandlerConfig, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.OutputStreamHandlerConfig.displayName = "proto.mediapipe.OutputStreamHandlerConfig"),
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.InputStreamHandlerConfig.prototype.toObject = function(e) {
        return proto.mediapipe.InputStreamHandlerConfig.toObject(e, this)
    }
    ,
    proto.mediapipe.InputStreamHandlerConfig.toObject = function(e, o) {
        var r, a = {
            inputStreamHandler: t.Message.getFieldWithDefault(o, 1, "DefaultInputStreamHandler"),
            options: (r = o.getOptions()) && i.MediaPipeOptions.toObject(e, r)
        };
        return e && (a.$jspbMessageInstance = o),
        a
    }
    ),
    proto.mediapipe.InputStreamHandlerConfig.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.InputStreamHandlerConfig;
        return proto.mediapipe.InputStreamHandlerConfig.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.InputStreamHandlerConfig.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = t.readString();
                e.setInputStreamHandler(o);
                break;
            case 3:
                o = new i.MediaPipeOptions;
                t.readMessage(o, i.MediaPipeOptions.deserializeBinaryFromReader),
                e.setOptions(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.InputStreamHandlerConfig.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.InputStreamHandlerConfig.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.InputStreamHandlerConfig.serializeBinaryToWriter = function(e, o) {
        var r = void 0;
        null != (r = t.Message.getField(e, 1)) && o.writeString(1, r),
        null != (r = e.getOptions()) && o.writeMessage(3, r, i.MediaPipeOptions.serializeBinaryToWriter)
    }
    ,
    proto.mediapipe.InputStreamHandlerConfig.prototype.getInputStreamHandler = function() {
        return t.Message.getFieldWithDefault(this, 1, "DefaultInputStreamHandler")
    }
    ,
    proto.mediapipe.InputStreamHandlerConfig.prototype.setInputStreamHandler = function(e) {
        return t.Message.setField(this, 1, e)
    }
    ,
    proto.mediapipe.InputStreamHandlerConfig.prototype.clearInputStreamHandler = function() {
        return t.Message.setField(this, 1, void 0)
    }
    ,
    proto.mediapipe.InputStreamHandlerConfig.prototype.hasInputStreamHandler = function() {
        return null != t.Message.getField(this, 1)
    }
    ,
    proto.mediapipe.InputStreamHandlerConfig.prototype.getOptions = function() {
        return t.Message.getWrapperField(this, i.MediaPipeOptions, 3)
    }
    ,
    proto.mediapipe.InputStreamHandlerConfig.prototype.setOptions = function(e) {
        return t.Message.setWrapperField(this, 3, e)
    }
    ,
    proto.mediapipe.InputStreamHandlerConfig.prototype.clearOptions = function() {
        return this.setOptions(void 0)
    }
    ,
    proto.mediapipe.InputStreamHandlerConfig.prototype.hasOptions = function() {
        return null != t.Message.getField(this, 3)
    }
    ,
    proto.mediapipe.OutputStreamHandlerConfig.repeatedFields_ = [2],
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.OutputStreamHandlerConfig.prototype.toObject = function(e) {
        return proto.mediapipe.OutputStreamHandlerConfig.toObject(e, this)
    }
    ,
    proto.mediapipe.OutputStreamHandlerConfig.toObject = function(e, o) {
        var r, a = {
            outputStreamHandler: t.Message.getFieldWithDefault(o, 1, "InOrderOutputStreamHandler"),
            inputSidePacketList: null == (r = t.Message.getRepeatedField(o, 2)) ? void 0 : r,
            options: (r = o.getOptions()) && i.MediaPipeOptions.toObject(e, r)
        };
        return e && (a.$jspbMessageInstance = o),
        a
    }
    ),
    proto.mediapipe.OutputStreamHandlerConfig.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.OutputStreamHandlerConfig;
        return proto.mediapipe.OutputStreamHandlerConfig.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.OutputStreamHandlerConfig.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = t.readString();
                e.setOutputStreamHandler(o);
                break;
            case 2:
                o = t.readString();
                e.addInputSidePacket(o);
                break;
            case 3:
                o = new i.MediaPipeOptions;
                t.readMessage(o, i.MediaPipeOptions.deserializeBinaryFromReader),
                e.setOptions(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.OutputStreamHandlerConfig.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.OutputStreamHandlerConfig.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.OutputStreamHandlerConfig.serializeBinaryToWriter = function(e, o) {
        var r = void 0;
        null != (r = t.Message.getField(e, 1)) && o.writeString(1, r),
        (r = e.getInputSidePacketList()).length > 0 && o.writeRepeatedString(2, r),
        null != (r = e.getOptions()) && o.writeMessage(3, r, i.MediaPipeOptions.serializeBinaryToWriter)
    }
    ,
    proto.mediapipe.OutputStreamHandlerConfig.prototype.getOutputStreamHandler = function() {
        return t.Message.getFieldWithDefault(this, 1, "InOrderOutputStreamHandler")
    }
    ,
    proto.mediapipe.OutputStreamHandlerConfig.prototype.setOutputStreamHandler = function(e) {
        return t.Message.setField(this, 1, e)
    }
    ,
    proto.mediapipe.OutputStreamHandlerConfig.prototype.clearOutputStreamHandler = function() {
        return t.Message.setField(this, 1, void 0)
    }
    ,
    proto.mediapipe.OutputStreamHandlerConfig.prototype.hasOutputStreamHandler = function() {
        return null != t.Message.getField(this, 1)
    }
    ,
    proto.mediapipe.OutputStreamHandlerConfig.prototype.getInputSidePacketList = function() {
        return t.Message.getRepeatedField(this, 2)
    }
    ,
    proto.mediapipe.OutputStreamHandlerConfig.prototype.setInputSidePacketList = function(e) {
        return t.Message.setField(this, 2, e || [])
    }
    ,
    proto.mediapipe.OutputStreamHandlerConfig.prototype.addInputSidePacket = function(e, o) {
        return t.Message.addToRepeatedField(this, 2, e, o)
    }
    ,
    proto.mediapipe.OutputStreamHandlerConfig.prototype.clearInputSidePacketList = function() {
        return this.setInputSidePacketList([])
    }
    ,
    proto.mediapipe.OutputStreamHandlerConfig.prototype.getOptions = function() {
        return t.Message.getWrapperField(this, i.MediaPipeOptions, 3)
    }
    ,
    proto.mediapipe.OutputStreamHandlerConfig.prototype.setOptions = function(e) {
        return t.Message.setWrapperField(this, 3, e)
    }
    ,
    proto.mediapipe.OutputStreamHandlerConfig.prototype.clearOptions = function() {
        return this.setOptions(void 0)
    }
    ,
    proto.mediapipe.OutputStreamHandlerConfig.prototype.hasOptions = function() {
        return null != t.Message.getField(this, 3)
    }
    ,
    o.object.extend(e, proto.mediapipe)
}(stream_handler_pb),
function(e) {
    var t = googleProtobuf
      , o = t
      , r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof window && window || void 0 !== r && r || "undefined" != typeof self && self || function() {
        return this
    }
    .call(null) || Function("return this")()
      , i = calculator_options_pb;
    o.object.extend(proto, i);
    var a = any_pb;
    o.object.extend(proto, a);
    var n = mediapipe_options_pb;
    o.object.extend(proto, n);
    var s = packet_factory_pb;
    o.object.extend(proto, s);
    var p = packet_generator_pb;
    o.object.extend(proto, p);
    var g = status_handler_pb;
    o.object.extend(proto, g);
    var l = stream_handler_pb;
    o.object.extend(proto, l),
    o.exportSymbol("proto.mediapipe.CalculatorGraphConfig", null, r),
    o.exportSymbol("proto.mediapipe.CalculatorGraphConfig.Node", null, r),
    o.exportSymbol("proto.mediapipe.ExecutorConfig", null, r),
    o.exportSymbol("proto.mediapipe.InputCollection", null, r),
    o.exportSymbol("proto.mediapipe.InputCollection.InputType", null, r),
    o.exportSymbol("proto.mediapipe.InputCollectionSet", null, r),
    o.exportSymbol("proto.mediapipe.InputStreamInfo", null, r),
    o.exportSymbol("proto.mediapipe.ProfilerConfig", null, r),
    proto.mediapipe.ExecutorConfig = function(e) {
        t.Message.initialize(this, e, 0, -1, null, null)
    }
    ,
    o.inherits(proto.mediapipe.ExecutorConfig, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.ExecutorConfig.displayName = "proto.mediapipe.ExecutorConfig"),
    proto.mediapipe.InputCollection = function(e) {
        t.Message.initialize(this, e, 0, 500, proto.mediapipe.InputCollection.repeatedFields_, null)
    }
    ,
    o.inherits(proto.mediapipe.InputCollection, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.InputCollection.displayName = "proto.mediapipe.InputCollection"),
    proto.mediapipe.InputCollectionSet = function(e) {
        t.Message.initialize(this, e, 0, -1, proto.mediapipe.InputCollectionSet.repeatedFields_, null)
    }
    ,
    o.inherits(proto.mediapipe.InputCollectionSet, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.InputCollectionSet.displayName = "proto.mediapipe.InputCollectionSet"),
    proto.mediapipe.InputStreamInfo = function(e) {
        t.Message.initialize(this, e, 0, -1, null, null)
    }
    ,
    o.inherits(proto.mediapipe.InputStreamInfo, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.InputStreamInfo.displayName = "proto.mediapipe.InputStreamInfo"),
    proto.mediapipe.ProfilerConfig = function(e) {
        t.Message.initialize(this, e, 0, -1, proto.mediapipe.ProfilerConfig.repeatedFields_, null)
    }
    ,
    o.inherits(proto.mediapipe.ProfilerConfig, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.ProfilerConfig.displayName = "proto.mediapipe.ProfilerConfig"),
    proto.mediapipe.CalculatorGraphConfig = function(e) {
        t.Message.initialize(this, e, 0, 500, proto.mediapipe.CalculatorGraphConfig.repeatedFields_, null)
    }
    ,
    o.inherits(proto.mediapipe.CalculatorGraphConfig, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.CalculatorGraphConfig.displayName = "proto.mediapipe.CalculatorGraphConfig"),
    proto.mediapipe.CalculatorGraphConfig.Node = function(e) {
        t.Message.initialize(this, e, 0, 500, proto.mediapipe.CalculatorGraphConfig.Node.repeatedFields_, null)
    }
    ,
    o.inherits(proto.mediapipe.CalculatorGraphConfig.Node, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.CalculatorGraphConfig.Node.displayName = "proto.mediapipe.CalculatorGraphConfig.Node"),
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.ExecutorConfig.prototype.toObject = function(e) {
        return proto.mediapipe.ExecutorConfig.toObject(e, this)
    }
    ,
    proto.mediapipe.ExecutorConfig.toObject = function(e, o) {
        var r, i = {
            name: t.Message.getFieldWithDefault(o, 1, ""),
            type: t.Message.getFieldWithDefault(o, 2, ""),
            options: (r = o.getOptions()) && n.MediaPipeOptions.toObject(e, r)
        };
        return e && (i.$jspbMessageInstance = o),
        i
    }
    ),
    proto.mediapipe.ExecutorConfig.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.ExecutorConfig;
        return proto.mediapipe.ExecutorConfig.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.ExecutorConfig.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = t.readString();
                e.setName(o);
                break;
            case 2:
                o = t.readString();
                e.setType(o);
                break;
            case 3:
                o = new n.MediaPipeOptions;
                t.readMessage(o, n.MediaPipeOptions.deserializeBinaryFromReader),
                e.setOptions(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.ExecutorConfig.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.ExecutorConfig.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.ExecutorConfig.serializeBinaryToWriter = function(e, t) {
        var o = void 0;
        (o = e.getName()).length > 0 && t.writeString(1, o),
        (o = e.getType()).length > 0 && t.writeString(2, o),
        null != (o = e.getOptions()) && t.writeMessage(3, o, n.MediaPipeOptions.serializeBinaryToWriter)
    }
    ,
    proto.mediapipe.ExecutorConfig.prototype.getName = function() {
        return t.Message.getFieldWithDefault(this, 1, "")
    }
    ,
    proto.mediapipe.ExecutorConfig.prototype.setName = function(e) {
        return t.Message.setProto3StringField(this, 1, e)
    }
    ,
    proto.mediapipe.ExecutorConfig.prototype.getType = function() {
        return t.Message.getFieldWithDefault(this, 2, "")
    }
    ,
    proto.mediapipe.ExecutorConfig.prototype.setType = function(e) {
        return t.Message.setProto3StringField(this, 2, e)
    }
    ,
    proto.mediapipe.ExecutorConfig.prototype.getOptions = function() {
        return t.Message.getWrapperField(this, n.MediaPipeOptions, 3)
    }
    ,
    proto.mediapipe.ExecutorConfig.prototype.setOptions = function(e) {
        return t.Message.setWrapperField(this, 3, e)
    }
    ,
    proto.mediapipe.ExecutorConfig.prototype.clearOptions = function() {
        return this.setOptions(void 0)
    }
    ,
    proto.mediapipe.ExecutorConfig.prototype.hasOptions = function() {
        return null != t.Message.getField(this, 3)
    }
    ,
    proto.mediapipe.InputCollection.repeatedFields_ = [2, 1002],
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.InputCollection.prototype.toObject = function(e) {
        return proto.mediapipe.InputCollection.toObject(e, this)
    }
    ,
    proto.mediapipe.InputCollection.toObject = function(e, o) {
        var r, i = {
            name: t.Message.getFieldWithDefault(o, 1, ""),
            sidePacketNameList: null == (r = t.Message.getRepeatedField(o, 2)) ? void 0 : r,
            externalInputNameList: null == (r = t.Message.getRepeatedField(o, 1002)) ? void 0 : r,
            inputType: t.Message.getFieldWithDefault(o, 3, 0),
            fileName: t.Message.getFieldWithDefault(o, 4, "")
        };
        return e && (i.$jspbMessageInstance = o),
        i
    }
    ),
    proto.mediapipe.InputCollection.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.InputCollection;
        return proto.mediapipe.InputCollection.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.InputCollection.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = t.readString();
                e.setName(o);
                break;
            case 2:
                o = t.readString();
                e.addSidePacketName(o);
                break;
            case 1002:
                o = t.readString();
                e.addExternalInputName(o);
                break;
            case 3:
                o = t.readEnum();
                e.setInputType(o);
                break;
            case 4:
                o = t.readString();
                e.setFileName(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.InputCollection.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.InputCollection.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.InputCollection.serializeBinaryToWriter = function(e, t) {
        var o = void 0;
        (o = e.getName()).length > 0 && t.writeString(1, o),
        (o = e.getSidePacketNameList()).length > 0 && t.writeRepeatedString(2, o),
        (o = e.getExternalInputNameList()).length > 0 && t.writeRepeatedString(1002, o),
        0 !== (o = e.getInputType()) && t.writeEnum(3, o),
        (o = e.getFileName()).length > 0 && t.writeString(4, o)
    }
    ,
    proto.mediapipe.InputCollection.InputType = {
        UNKNOWN: 0,
        RECORDIO: 1,
        FOREIGN_RECORDIO: 2,
        FOREIGN_CSV_TEXT: 3,
        INVALID_UPPER_BOUND: 4
    },
    proto.mediapipe.InputCollection.prototype.getName = function() {
        return t.Message.getFieldWithDefault(this, 1, "")
    }
    ,
    proto.mediapipe.InputCollection.prototype.setName = function(e) {
        return t.Message.setProto3StringField(this, 1, e)
    }
    ,
    proto.mediapipe.InputCollection.prototype.getSidePacketNameList = function() {
        return t.Message.getRepeatedField(this, 2)
    }
    ,
    proto.mediapipe.InputCollection.prototype.setSidePacketNameList = function(e) {
        return t.Message.setField(this, 2, e || [])
    }
    ,
    proto.mediapipe.InputCollection.prototype.addSidePacketName = function(e, o) {
        return t.Message.addToRepeatedField(this, 2, e, o)
    }
    ,
    proto.mediapipe.InputCollection.prototype.clearSidePacketNameList = function() {
        return this.setSidePacketNameList([])
    }
    ,
    proto.mediapipe.InputCollection.prototype.getExternalInputNameList = function() {
        return t.Message.getRepeatedField(this, 1002)
    }
    ,
    proto.mediapipe.InputCollection.prototype.setExternalInputNameList = function(e) {
        return t.Message.setField(this, 1002, e || [])
    }
    ,
    proto.mediapipe.InputCollection.prototype.addExternalInputName = function(e, o) {
        return t.Message.addToRepeatedField(this, 1002, e, o)
    }
    ,
    proto.mediapipe.InputCollection.prototype.clearExternalInputNameList = function() {
        return this.setExternalInputNameList([])
    }
    ,
    proto.mediapipe.InputCollection.prototype.getInputType = function() {
        return t.Message.getFieldWithDefault(this, 3, 0)
    }
    ,
    proto.mediapipe.InputCollection.prototype.setInputType = function(e) {
        return t.Message.setProto3EnumField(this, 3, e)
    }
    ,
    proto.mediapipe.InputCollection.prototype.getFileName = function() {
        return t.Message.getFieldWithDefault(this, 4, "")
    }
    ,
    proto.mediapipe.InputCollection.prototype.setFileName = function(e) {
        return t.Message.setProto3StringField(this, 4, e)
    }
    ,
    proto.mediapipe.InputCollectionSet.repeatedFields_ = [1],
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.InputCollectionSet.prototype.toObject = function(e) {
        return proto.mediapipe.InputCollectionSet.toObject(e, this)
    }
    ,
    proto.mediapipe.InputCollectionSet.toObject = function(e, o) {
        var r = {
            inputCollectionList: t.Message.toObjectList(o.getInputCollectionList(), proto.mediapipe.InputCollection.toObject, e)
        };
        return e && (r.$jspbMessageInstance = o),
        r
    }
    ),
    proto.mediapipe.InputCollectionSet.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.InputCollectionSet;
        return proto.mediapipe.InputCollectionSet.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.InputCollectionSet.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            if (1 === t.getFieldNumber()) {
                var o = new proto.mediapipe.InputCollection;
                t.readMessage(o, proto.mediapipe.InputCollection.deserializeBinaryFromReader),
                e.addInputCollection(o)
            } else
                t.skipField()
        }
        return e
    }
    ,
    proto.mediapipe.InputCollectionSet.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.InputCollectionSet.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.InputCollectionSet.serializeBinaryToWriter = function(e, t) {
        var o;
        (o = e.getInputCollectionList()).length > 0 && t.writeRepeatedMessage(1, o, proto.mediapipe.InputCollection.serializeBinaryToWriter)
    }
    ,
    proto.mediapipe.InputCollectionSet.prototype.getInputCollectionList = function() {
        return t.Message.getRepeatedWrapperField(this, proto.mediapipe.InputCollection, 1)
    }
    ,
    proto.mediapipe.InputCollectionSet.prototype.setInputCollectionList = function(e) {
        return t.Message.setRepeatedWrapperField(this, 1, e)
    }
    ,
    proto.mediapipe.InputCollectionSet.prototype.addInputCollection = function(e, o) {
        return t.Message.addToRepeatedWrapperField(this, 1, e, proto.mediapipe.InputCollection, o)
    }
    ,
    proto.mediapipe.InputCollectionSet.prototype.clearInputCollectionList = function() {
        return this.setInputCollectionList([])
    }
    ,
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.InputStreamInfo.prototype.toObject = function(e) {
        return proto.mediapipe.InputStreamInfo.toObject(e, this)
    }
    ,
    proto.mediapipe.InputStreamInfo.toObject = function(e, o) {
        var r = {
            tagIndex: t.Message.getFieldWithDefault(o, 1, ""),
            backEdge: t.Message.getBooleanFieldWithDefault(o, 2, !1)
        };
        return e && (r.$jspbMessageInstance = o),
        r
    }
    ),
    proto.mediapipe.InputStreamInfo.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.InputStreamInfo;
        return proto.mediapipe.InputStreamInfo.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.InputStreamInfo.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = t.readString();
                e.setTagIndex(o);
                break;
            case 2:
                o = t.readBool();
                e.setBackEdge(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.InputStreamInfo.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.InputStreamInfo.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.InputStreamInfo.serializeBinaryToWriter = function(e, t) {
        var o = void 0;
        (o = e.getTagIndex()).length > 0 && t.writeString(1, o),
        (o = e.getBackEdge()) && t.writeBool(2, o)
    }
    ,
    proto.mediapipe.InputStreamInfo.prototype.getTagIndex = function() {
        return t.Message.getFieldWithDefault(this, 1, "")
    }
    ,
    proto.mediapipe.InputStreamInfo.prototype.setTagIndex = function(e) {
        return t.Message.setProto3StringField(this, 1, e)
    }
    ,
    proto.mediapipe.InputStreamInfo.prototype.getBackEdge = function() {
        return t.Message.getBooleanFieldWithDefault(this, 2, !1)
    }
    ,
    proto.mediapipe.InputStreamInfo.prototype.setBackEdge = function(e) {
        return t.Message.setProto3BooleanField(this, 2, e)
    }
    ,
    proto.mediapipe.ProfilerConfig.repeatedFields_ = [8],
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.ProfilerConfig.prototype.toObject = function(e) {
        return proto.mediapipe.ProfilerConfig.toObject(e, this)
    }
    ,
    proto.mediapipe.ProfilerConfig.toObject = function(e, o) {
        var r, i = {
            histogramIntervalSizeUsec: t.Message.getFieldWithDefault(o, 1, 0),
            numHistogramIntervals: t.Message.getFieldWithDefault(o, 2, 0),
            enableInputOutputLatency: t.Message.getBooleanFieldWithDefault(o, 3, !1),
            enableProfiler: t.Message.getBooleanFieldWithDefault(o, 4, !1),
            enableStreamLatency: t.Message.getBooleanFieldWithDefault(o, 5, !1),
            usePacketTimestampForAddedPacket: t.Message.getBooleanFieldWithDefault(o, 6, !1),
            traceLogCapacity: t.Message.getFieldWithDefault(o, 7, 0),
            traceEventTypesDisabledList: null == (r = t.Message.getRepeatedField(o, 8)) ? void 0 : r,
            traceLogPath: t.Message.getFieldWithDefault(o, 9, ""),
            traceLogCount: t.Message.getFieldWithDefault(o, 10, 0),
            traceLogIntervalUsec: t.Message.getFieldWithDefault(o, 11, 0),
            traceLogMarginUsec: t.Message.getFieldWithDefault(o, 12, 0),
            traceLogDurationEvents: t.Message.getBooleanFieldWithDefault(o, 13, !1),
            traceLogIntervalCount: t.Message.getFieldWithDefault(o, 14, 0),
            traceLogDisabled: t.Message.getBooleanFieldWithDefault(o, 15, !1),
            traceEnabled: t.Message.getBooleanFieldWithDefault(o, 16, !1),
            traceLogInstantEvents: t.Message.getBooleanFieldWithDefault(o, 17, !1),
            calculatorFilter: t.Message.getFieldWithDefault(o, 18, "")
        };
        return e && (i.$jspbMessageInstance = o),
        i
    }
    ),
    proto.mediapipe.ProfilerConfig.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.ProfilerConfig;
        return proto.mediapipe.ProfilerConfig.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.ProfilerConfig.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = t.readInt64();
                e.setHistogramIntervalSizeUsec(o);
                break;
            case 2:
                o = t.readInt64();
                e.setNumHistogramIntervals(o);
                break;
            case 3:
                o = t.readBool();
                e.setEnableInputOutputLatency(o);
                break;
            case 4:
                o = t.readBool();
                e.setEnableProfiler(o);
                break;
            case 5:
                o = t.readBool();
                e.setEnableStreamLatency(o);
                break;
            case 6:
                o = t.readBool();
                e.setUsePacketTimestampForAddedPacket(o);
                break;
            case 7:
                o = t.readInt64();
                e.setTraceLogCapacity(o);
                break;
            case 8:
                for (var r = t.isDelimited() ? t.readPackedInt32() : [t.readInt32()], i = 0; i < r.length; i++)
                    e.addTraceEventTypesDisabled(r[i]);
                break;
            case 9:
                o = t.readString();
                e.setTraceLogPath(o);
                break;
            case 10:
                o = t.readInt32();
                e.setTraceLogCount(o);
                break;
            case 11:
                o = t.readInt64();
                e.setTraceLogIntervalUsec(o);
                break;
            case 12:
                o = t.readInt64();
                e.setTraceLogMarginUsec(o);
                break;
            case 13:
                o = t.readBool();
                e.setTraceLogDurationEvents(o);
                break;
            case 14:
                o = t.readInt32();
                e.setTraceLogIntervalCount(o);
                break;
            case 15:
                o = t.readBool();
                e.setTraceLogDisabled(o);
                break;
            case 16:
                o = t.readBool();
                e.setTraceEnabled(o);
                break;
            case 17:
                o = t.readBool();
                e.setTraceLogInstantEvents(o);
                break;
            case 18:
                o = t.readString();
                e.setCalculatorFilter(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.ProfilerConfig.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.ProfilerConfig.serializeBinaryToWriter = function(e, t) {
        var o = void 0;
        0 !== (o = e.getHistogramIntervalSizeUsec()) && t.writeInt64(1, o),
        0 !== (o = e.getNumHistogramIntervals()) && t.writeInt64(2, o),
        (o = e.getEnableInputOutputLatency()) && t.writeBool(3, o),
        (o = e.getEnableProfiler()) && t.writeBool(4, o),
        (o = e.getEnableStreamLatency()) && t.writeBool(5, o),
        (o = e.getUsePacketTimestampForAddedPacket()) && t.writeBool(6, o),
        0 !== (o = e.getTraceLogCapacity()) && t.writeInt64(7, o),
        (o = e.getTraceEventTypesDisabledList()).length > 0 && t.writePackedInt32(8, o),
        (o = e.getTraceLogPath()).length > 0 && t.writeString(9, o),
        0 !== (o = e.getTraceLogCount()) && t.writeInt32(10, o),
        0 !== (o = e.getTraceLogIntervalUsec()) && t.writeInt64(11, o),
        0 !== (o = e.getTraceLogMarginUsec()) && t.writeInt64(12, o),
        (o = e.getTraceLogDurationEvents()) && t.writeBool(13, o),
        0 !== (o = e.getTraceLogIntervalCount()) && t.writeInt32(14, o),
        (o = e.getTraceLogDisabled()) && t.writeBool(15, o),
        (o = e.getTraceEnabled()) && t.writeBool(16, o),
        (o = e.getTraceLogInstantEvents()) && t.writeBool(17, o),
        (o = e.getCalculatorFilter()).length > 0 && t.writeString(18, o)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.getHistogramIntervalSizeUsec = function() {
        return t.Message.getFieldWithDefault(this, 1, 0)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.setHistogramIntervalSizeUsec = function(e) {
        return t.Message.setProto3IntField(this, 1, e)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.getNumHistogramIntervals = function() {
        return t.Message.getFieldWithDefault(this, 2, 0)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.setNumHistogramIntervals = function(e) {
        return t.Message.setProto3IntField(this, 2, e)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.getEnableInputOutputLatency = function() {
        return t.Message.getBooleanFieldWithDefault(this, 3, !1)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.setEnableInputOutputLatency = function(e) {
        return t.Message.setProto3BooleanField(this, 3, e)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.getEnableProfiler = function() {
        return t.Message.getBooleanFieldWithDefault(this, 4, !1)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.setEnableProfiler = function(e) {
        return t.Message.setProto3BooleanField(this, 4, e)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.getEnableStreamLatency = function() {
        return t.Message.getBooleanFieldWithDefault(this, 5, !1)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.setEnableStreamLatency = function(e) {
        return t.Message.setProto3BooleanField(this, 5, e)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.getUsePacketTimestampForAddedPacket = function() {
        return t.Message.getBooleanFieldWithDefault(this, 6, !1)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.setUsePacketTimestampForAddedPacket = function(e) {
        return t.Message.setProto3BooleanField(this, 6, e)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.getTraceLogCapacity = function() {
        return t.Message.getFieldWithDefault(this, 7, 0)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.setTraceLogCapacity = function(e) {
        return t.Message.setProto3IntField(this, 7, e)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.getTraceEventTypesDisabledList = function() {
        return t.Message.getRepeatedField(this, 8)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.setTraceEventTypesDisabledList = function(e) {
        return t.Message.setField(this, 8, e || [])
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.addTraceEventTypesDisabled = function(e, o) {
        return t.Message.addToRepeatedField(this, 8, e, o)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.clearTraceEventTypesDisabledList = function() {
        return this.setTraceEventTypesDisabledList([])
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.getTraceLogPath = function() {
        return t.Message.getFieldWithDefault(this, 9, "")
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.setTraceLogPath = function(e) {
        return t.Message.setProto3StringField(this, 9, e)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.getTraceLogCount = function() {
        return t.Message.getFieldWithDefault(this, 10, 0)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.setTraceLogCount = function(e) {
        return t.Message.setProto3IntField(this, 10, e)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.getTraceLogIntervalUsec = function() {
        return t.Message.getFieldWithDefault(this, 11, 0)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.setTraceLogIntervalUsec = function(e) {
        return t.Message.setProto3IntField(this, 11, e)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.getTraceLogMarginUsec = function() {
        return t.Message.getFieldWithDefault(this, 12, 0)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.setTraceLogMarginUsec = function(e) {
        return t.Message.setProto3IntField(this, 12, e)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.getTraceLogDurationEvents = function() {
        return t.Message.getBooleanFieldWithDefault(this, 13, !1)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.setTraceLogDurationEvents = function(e) {
        return t.Message.setProto3BooleanField(this, 13, e)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.getTraceLogIntervalCount = function() {
        return t.Message.getFieldWithDefault(this, 14, 0)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.setTraceLogIntervalCount = function(e) {
        return t.Message.setProto3IntField(this, 14, e)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.getTraceLogDisabled = function() {
        return t.Message.getBooleanFieldWithDefault(this, 15, !1)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.setTraceLogDisabled = function(e) {
        return t.Message.setProto3BooleanField(this, 15, e)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.getTraceEnabled = function() {
        return t.Message.getBooleanFieldWithDefault(this, 16, !1)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.setTraceEnabled = function(e) {
        return t.Message.setProto3BooleanField(this, 16, e)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.getTraceLogInstantEvents = function() {
        return t.Message.getBooleanFieldWithDefault(this, 17, !1)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.setTraceLogInstantEvents = function(e) {
        return t.Message.setProto3BooleanField(this, 17, e)
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.getCalculatorFilter = function() {
        return t.Message.getFieldWithDefault(this, 18, "")
    }
    ,
    proto.mediapipe.ProfilerConfig.prototype.setCalculatorFilter = function(e) {
        return t.Message.setProto3StringField(this, 18, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.repeatedFields_ = [1, 6, 7, 9, 10, 15, 16, 17, 14, 1002],
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.CalculatorGraphConfig.prototype.toObject = function(e) {
        return proto.mediapipe.CalculatorGraphConfig.toObject(e, this)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.toObject = function(e, o) {
        var r, i = {
            nodeList: t.Message.toObjectList(o.getNodeList(), proto.mediapipe.CalculatorGraphConfig.Node.toObject, e),
            packetFactoryList: t.Message.toObjectList(o.getPacketFactoryList(), s.PacketFactoryConfig.toObject, e),
            packetGeneratorList: t.Message.toObjectList(o.getPacketGeneratorList(), p.PacketGeneratorConfig.toObject, e),
            numThreads: t.Message.getFieldWithDefault(o, 8, 0),
            statusHandlerList: t.Message.toObjectList(o.getStatusHandlerList(), g.StatusHandlerConfig.toObject, e),
            inputStreamList: null == (r = t.Message.getRepeatedField(o, 10)) ? void 0 : r,
            outputStreamList: null == (r = t.Message.getRepeatedField(o, 15)) ? void 0 : r,
            inputSidePacketList: null == (r = t.Message.getRepeatedField(o, 16)) ? void 0 : r,
            outputSidePacketList: null == (r = t.Message.getRepeatedField(o, 17)) ? void 0 : r,
            maxQueueSize: t.Message.getFieldWithDefault(o, 11, 0),
            reportDeadlock: t.Message.getBooleanFieldWithDefault(o, 21, !1),
            inputStreamHandler: (r = o.getInputStreamHandler()) && l.InputStreamHandlerConfig.toObject(e, r),
            outputStreamHandler: (r = o.getOutputStreamHandler()) && l.OutputStreamHandlerConfig.toObject(e, r),
            executorList: t.Message.toObjectList(o.getExecutorList(), proto.mediapipe.ExecutorConfig.toObject, e),
            profilerConfig: (r = o.getProfilerConfig()) && proto.mediapipe.ProfilerConfig.toObject(e, r),
            pb_package: t.Message.getFieldWithDefault(o, 19, ""),
            type: t.Message.getFieldWithDefault(o, 20, ""),
            options: (r = o.getOptions()) && n.MediaPipeOptions.toObject(e, r),
            graphOptionsList: t.Message.toObjectList(o.getGraphOptionsList(), a.Any.toObject, e)
        };
        return e && (i.$jspbMessageInstance = o),
        i
    }
    ),
    proto.mediapipe.CalculatorGraphConfig.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.CalculatorGraphConfig;
        return proto.mediapipe.CalculatorGraphConfig.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = new proto.mediapipe.CalculatorGraphConfig.Node;
                t.readMessage(o, proto.mediapipe.CalculatorGraphConfig.Node.deserializeBinaryFromReader),
                e.addNode(o);
                break;
            case 6:
                o = new s.PacketFactoryConfig;
                t.readMessage(o, s.PacketFactoryConfig.deserializeBinaryFromReader),
                e.addPacketFactory(o);
                break;
            case 7:
                o = new p.PacketGeneratorConfig;
                t.readMessage(o, p.PacketGeneratorConfig.deserializeBinaryFromReader),
                e.addPacketGenerator(o);
                break;
            case 8:
                o = t.readInt32();
                e.setNumThreads(o);
                break;
            case 9:
                o = new g.StatusHandlerConfig;
                t.readMessage(o, g.StatusHandlerConfig.deserializeBinaryFromReader),
                e.addStatusHandler(o);
                break;
            case 10:
                o = t.readString();
                e.addInputStream(o);
                break;
            case 15:
                o = t.readString();
                e.addOutputStream(o);
                break;
            case 16:
                o = t.readString();
                e.addInputSidePacket(o);
                break;
            case 17:
                o = t.readString();
                e.addOutputSidePacket(o);
                break;
            case 11:
                o = t.readInt32();
                e.setMaxQueueSize(o);
                break;
            case 21:
                o = t.readBool();
                e.setReportDeadlock(o);
                break;
            case 12:
                o = new l.InputStreamHandlerConfig;
                t.readMessage(o, l.InputStreamHandlerConfig.deserializeBinaryFromReader),
                e.setInputStreamHandler(o);
                break;
            case 13:
                o = new l.OutputStreamHandlerConfig;
                t.readMessage(o, l.OutputStreamHandlerConfig.deserializeBinaryFromReader),
                e.setOutputStreamHandler(o);
                break;
            case 14:
                o = new proto.mediapipe.ExecutorConfig;
                t.readMessage(o, proto.mediapipe.ExecutorConfig.deserializeBinaryFromReader),
                e.addExecutor(o);
                break;
            case 18:
                o = new proto.mediapipe.ProfilerConfig;
                t.readMessage(o, proto.mediapipe.ProfilerConfig.deserializeBinaryFromReader),
                e.setProfilerConfig(o);
                break;
            case 19:
                o = t.readString();
                e.setPackage(o);
                break;
            case 20:
                o = t.readString();
                e.setType(o);
                break;
            case 1001:
                o = new n.MediaPipeOptions;
                t.readMessage(o, n.MediaPipeOptions.deserializeBinaryFromReader),
                e.setOptions(o);
                break;
            case 1002:
                o = new a.Any;
                t.readMessage(o, a.Any.deserializeBinaryFromReader),
                e.addGraphOptions(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.CalculatorGraphConfig.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.serializeBinaryToWriter = function(e, t) {
        var o = void 0;
        (o = e.getNodeList()).length > 0 && t.writeRepeatedMessage(1, o, proto.mediapipe.CalculatorGraphConfig.Node.serializeBinaryToWriter),
        (o = e.getPacketFactoryList()).length > 0 && t.writeRepeatedMessage(6, o, s.PacketFactoryConfig.serializeBinaryToWriter),
        (o = e.getPacketGeneratorList()).length > 0 && t.writeRepeatedMessage(7, o, p.PacketGeneratorConfig.serializeBinaryToWriter),
        0 !== (o = e.getNumThreads()) && t.writeInt32(8, o),
        (o = e.getStatusHandlerList()).length > 0 && t.writeRepeatedMessage(9, o, g.StatusHandlerConfig.serializeBinaryToWriter),
        (o = e.getInputStreamList()).length > 0 && t.writeRepeatedString(10, o),
        (o = e.getOutputStreamList()).length > 0 && t.writeRepeatedString(15, o),
        (o = e.getInputSidePacketList()).length > 0 && t.writeRepeatedString(16, o),
        (o = e.getOutputSidePacketList()).length > 0 && t.writeRepeatedString(17, o),
        0 !== (o = e.getMaxQueueSize()) && t.writeInt32(11, o),
        (o = e.getReportDeadlock()) && t.writeBool(21, o),
        null != (o = e.getInputStreamHandler()) && t.writeMessage(12, o, l.InputStreamHandlerConfig.serializeBinaryToWriter),
        null != (o = e.getOutputStreamHandler()) && t.writeMessage(13, o, l.OutputStreamHandlerConfig.serializeBinaryToWriter),
        (o = e.getExecutorList()).length > 0 && t.writeRepeatedMessage(14, o, proto.mediapipe.ExecutorConfig.serializeBinaryToWriter),
        null != (o = e.getProfilerConfig()) && t.writeMessage(18, o, proto.mediapipe.ProfilerConfig.serializeBinaryToWriter),
        (o = e.getPackage()).length > 0 && t.writeString(19, o),
        (o = e.getType()).length > 0 && t.writeString(20, o),
        null != (o = e.getOptions()) && t.writeMessage(1001, o, n.MediaPipeOptions.serializeBinaryToWriter),
        (o = e.getGraphOptionsList()).length > 0 && t.writeRepeatedMessage(1002, o, a.Any.serializeBinaryToWriter)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.repeatedFields_ = [3, 4, 5, 6, 8, 13, 17, 1005],
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.CalculatorGraphConfig.Node.prototype.toObject = function(e) {
        return proto.mediapipe.CalculatorGraphConfig.Node.toObject(e, this)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.toObject = function(e, o) {
        var r, n = {
            name: t.Message.getFieldWithDefault(o, 1, ""),
            calculator: t.Message.getFieldWithDefault(o, 2, ""),
            inputStreamList: null == (r = t.Message.getRepeatedField(o, 3)) ? void 0 : r,
            outputStreamList: null == (r = t.Message.getRepeatedField(o, 4)) ? void 0 : r,
            inputSidePacketList: null == (r = t.Message.getRepeatedField(o, 5)) ? void 0 : r,
            outputSidePacketList: null == (r = t.Message.getRepeatedField(o, 6)) ? void 0 : r,
            options: (r = o.getOptions()) && i.CalculatorOptions.toObject(e, r),
            nodeOptionsList: t.Message.toObjectList(o.getNodeOptionsList(), a.Any.toObject, e),
            sourceLayer: t.Message.getFieldWithDefault(o, 9, 0),
            bufferSizeHint: t.Message.getFieldWithDefault(o, 10, 0),
            inputStreamHandler: (r = o.getInputStreamHandler()) && l.InputStreamHandlerConfig.toObject(e, r),
            outputStreamHandler: (r = o.getOutputStreamHandler()) && l.OutputStreamHandlerConfig.toObject(e, r),
            inputStreamInfoList: t.Message.toObjectList(o.getInputStreamInfoList(), proto.mediapipe.InputStreamInfo.toObject, e),
            executor: t.Message.getFieldWithDefault(o, 14, ""),
            profilerConfig: (r = o.getProfilerConfig()) && proto.mediapipe.ProfilerConfig.toObject(e, r),
            maxInFlight: t.Message.getFieldWithDefault(o, 16, 0),
            optionValueList: null == (r = t.Message.getRepeatedField(o, 17)) ? void 0 : r,
            externalInputList: null == (r = t.Message.getRepeatedField(o, 1005)) ? void 0 : r
        };
        return e && (n.$jspbMessageInstance = o),
        n
    }
    ),
    proto.mediapipe.CalculatorGraphConfig.Node.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.CalculatorGraphConfig.Node;
        return proto.mediapipe.CalculatorGraphConfig.Node.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = t.readString();
                e.setName(o);
                break;
            case 2:
                o = t.readString();
                e.setCalculator(o);
                break;
            case 3:
                o = t.readString();
                e.addInputStream(o);
                break;
            case 4:
                o = t.readString();
                e.addOutputStream(o);
                break;
            case 5:
                o = t.readString();
                e.addInputSidePacket(o);
                break;
            case 6:
                o = t.readString();
                e.addOutputSidePacket(o);
                break;
            case 7:
                o = new i.CalculatorOptions;
                t.readMessage(o, i.CalculatorOptions.deserializeBinaryFromReader),
                e.setOptions(o);
                break;
            case 8:
                o = new a.Any;
                t.readMessage(o, a.Any.deserializeBinaryFromReader),
                e.addNodeOptions(o);
                break;
            case 9:
                o = t.readInt32();
                e.setSourceLayer(o);
                break;
            case 10:
                o = t.readInt32();
                e.setBufferSizeHint(o);
                break;
            case 11:
                o = new l.InputStreamHandlerConfig;
                t.readMessage(o, l.InputStreamHandlerConfig.deserializeBinaryFromReader),
                e.setInputStreamHandler(o);
                break;
            case 12:
                o = new l.OutputStreamHandlerConfig;
                t.readMessage(o, l.OutputStreamHandlerConfig.deserializeBinaryFromReader),
                e.setOutputStreamHandler(o);
                break;
            case 13:
                o = new proto.mediapipe.InputStreamInfo;
                t.readMessage(o, proto.mediapipe.InputStreamInfo.deserializeBinaryFromReader),
                e.addInputStreamInfo(o);
                break;
            case 14:
                o = t.readString();
                e.setExecutor(o);
                break;
            case 15:
                o = new proto.mediapipe.ProfilerConfig;
                t.readMessage(o, proto.mediapipe.ProfilerConfig.deserializeBinaryFromReader),
                e.setProfilerConfig(o);
                break;
            case 16:
                o = t.readInt32();
                e.setMaxInFlight(o);
                break;
            case 17:
                o = t.readString();
                e.addOptionValue(o);
                break;
            case 1005:
                o = t.readString();
                e.addExternalInput(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.CalculatorGraphConfig.Node.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.serializeBinaryToWriter = function(e, t) {
        var o = void 0;
        (o = e.getName()).length > 0 && t.writeString(1, o),
        (o = e.getCalculator()).length > 0 && t.writeString(2, o),
        (o = e.getInputStreamList()).length > 0 && t.writeRepeatedString(3, o),
        (o = e.getOutputStreamList()).length > 0 && t.writeRepeatedString(4, o),
        (o = e.getInputSidePacketList()).length > 0 && t.writeRepeatedString(5, o),
        (o = e.getOutputSidePacketList()).length > 0 && t.writeRepeatedString(6, o),
        null != (o = e.getOptions()) && t.writeMessage(7, o, i.CalculatorOptions.serializeBinaryToWriter),
        (o = e.getNodeOptionsList()).length > 0 && t.writeRepeatedMessage(8, o, a.Any.serializeBinaryToWriter),
        0 !== (o = e.getSourceLayer()) && t.writeInt32(9, o),
        0 !== (o = e.getBufferSizeHint()) && t.writeInt32(10, o),
        null != (o = e.getInputStreamHandler()) && t.writeMessage(11, o, l.InputStreamHandlerConfig.serializeBinaryToWriter),
        null != (o = e.getOutputStreamHandler()) && t.writeMessage(12, o, l.OutputStreamHandlerConfig.serializeBinaryToWriter),
        (o = e.getInputStreamInfoList()).length > 0 && t.writeRepeatedMessage(13, o, proto.mediapipe.InputStreamInfo.serializeBinaryToWriter),
        (o = e.getExecutor()).length > 0 && t.writeString(14, o),
        null != (o = e.getProfilerConfig()) && t.writeMessage(15, o, proto.mediapipe.ProfilerConfig.serializeBinaryToWriter),
        0 !== (o = e.getMaxInFlight()) && t.writeInt32(16, o),
        (o = e.getOptionValueList()).length > 0 && t.writeRepeatedString(17, o),
        (o = e.getExternalInputList()).length > 0 && t.writeRepeatedString(1005, o)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.getName = function() {
        return t.Message.getFieldWithDefault(this, 1, "")
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.setName = function(e) {
        return t.Message.setProto3StringField(this, 1, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.getCalculator = function() {
        return t.Message.getFieldWithDefault(this, 2, "")
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.setCalculator = function(e) {
        return t.Message.setProto3StringField(this, 2, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.getInputStreamList = function() {
        return t.Message.getRepeatedField(this, 3)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.setInputStreamList = function(e) {
        return t.Message.setField(this, 3, e || [])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.addInputStream = function(e, o) {
        return t.Message.addToRepeatedField(this, 3, e, o)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.clearInputStreamList = function() {
        return this.setInputStreamList([])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.getOutputStreamList = function() {
        return t.Message.getRepeatedField(this, 4)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.setOutputStreamList = function(e) {
        return t.Message.setField(this, 4, e || [])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.addOutputStream = function(e, o) {
        return t.Message.addToRepeatedField(this, 4, e, o)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.clearOutputStreamList = function() {
        return this.setOutputStreamList([])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.getInputSidePacketList = function() {
        return t.Message.getRepeatedField(this, 5)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.setInputSidePacketList = function(e) {
        return t.Message.setField(this, 5, e || [])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.addInputSidePacket = function(e, o) {
        return t.Message.addToRepeatedField(this, 5, e, o)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.clearInputSidePacketList = function() {
        return this.setInputSidePacketList([])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.getOutputSidePacketList = function() {
        return t.Message.getRepeatedField(this, 6)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.setOutputSidePacketList = function(e) {
        return t.Message.setField(this, 6, e || [])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.addOutputSidePacket = function(e, o) {
        return t.Message.addToRepeatedField(this, 6, e, o)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.clearOutputSidePacketList = function() {
        return this.setOutputSidePacketList([])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.getOptions = function() {
        return t.Message.getWrapperField(this, i.CalculatorOptions, 7)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.setOptions = function(e) {
        return t.Message.setWrapperField(this, 7, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.clearOptions = function() {
        return this.setOptions(void 0)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.hasOptions = function() {
        return null != t.Message.getField(this, 7)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.getNodeOptionsList = function() {
        return t.Message.getRepeatedWrapperField(this, a.Any, 8)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.setNodeOptionsList = function(e) {
        return t.Message.setRepeatedWrapperField(this, 8, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.addNodeOptions = function(e, o) {
        return t.Message.addToRepeatedWrapperField(this, 8, e, proto.google.protobuf.Any, o)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.clearNodeOptionsList = function() {
        return this.setNodeOptionsList([])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.getSourceLayer = function() {
        return t.Message.getFieldWithDefault(this, 9, 0)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.setSourceLayer = function(e) {
        return t.Message.setProto3IntField(this, 9, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.getBufferSizeHint = function() {
        return t.Message.getFieldWithDefault(this, 10, 0)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.setBufferSizeHint = function(e) {
        return t.Message.setProto3IntField(this, 10, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.getInputStreamHandler = function() {
        return t.Message.getWrapperField(this, l.InputStreamHandlerConfig, 11)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.setInputStreamHandler = function(e) {
        return t.Message.setWrapperField(this, 11, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.clearInputStreamHandler = function() {
        return this.setInputStreamHandler(void 0)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.hasInputStreamHandler = function() {
        return null != t.Message.getField(this, 11)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.getOutputStreamHandler = function() {
        return t.Message.getWrapperField(this, l.OutputStreamHandlerConfig, 12)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.setOutputStreamHandler = function(e) {
        return t.Message.setWrapperField(this, 12, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.clearOutputStreamHandler = function() {
        return this.setOutputStreamHandler(void 0)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.hasOutputStreamHandler = function() {
        return null != t.Message.getField(this, 12)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.getInputStreamInfoList = function() {
        return t.Message.getRepeatedWrapperField(this, proto.mediapipe.InputStreamInfo, 13)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.setInputStreamInfoList = function(e) {
        return t.Message.setRepeatedWrapperField(this, 13, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.addInputStreamInfo = function(e, o) {
        return t.Message.addToRepeatedWrapperField(this, 13, e, proto.mediapipe.InputStreamInfo, o)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.clearInputStreamInfoList = function() {
        return this.setInputStreamInfoList([])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.getExecutor = function() {
        return t.Message.getFieldWithDefault(this, 14, "")
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.setExecutor = function(e) {
        return t.Message.setProto3StringField(this, 14, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.getProfilerConfig = function() {
        return t.Message.getWrapperField(this, proto.mediapipe.ProfilerConfig, 15)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.setProfilerConfig = function(e) {
        return t.Message.setWrapperField(this, 15, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.clearProfilerConfig = function() {
        return this.setProfilerConfig(void 0)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.hasProfilerConfig = function() {
        return null != t.Message.getField(this, 15)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.getMaxInFlight = function() {
        return t.Message.getFieldWithDefault(this, 16, 0)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.setMaxInFlight = function(e) {
        return t.Message.setProto3IntField(this, 16, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.getOptionValueList = function() {
        return t.Message.getRepeatedField(this, 17)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.setOptionValueList = function(e) {
        return t.Message.setField(this, 17, e || [])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.addOptionValue = function(e, o) {
        return t.Message.addToRepeatedField(this, 17, e, o)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.clearOptionValueList = function() {
        return this.setOptionValueList([])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.getExternalInputList = function() {
        return t.Message.getRepeatedField(this, 1005)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.setExternalInputList = function(e) {
        return t.Message.setField(this, 1005, e || [])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.addExternalInput = function(e, o) {
        return t.Message.addToRepeatedField(this, 1005, e, o)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.Node.prototype.clearExternalInputList = function() {
        return this.setExternalInputList([])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.getNodeList = function() {
        return t.Message.getRepeatedWrapperField(this, proto.mediapipe.CalculatorGraphConfig.Node, 1)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.setNodeList = function(e) {
        return t.Message.setRepeatedWrapperField(this, 1, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.addNode = function(e, o) {
        return t.Message.addToRepeatedWrapperField(this, 1, e, proto.mediapipe.CalculatorGraphConfig.Node, o)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.clearNodeList = function() {
        return this.setNodeList([])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.getPacketFactoryList = function() {
        return t.Message.getRepeatedWrapperField(this, s.PacketFactoryConfig, 6)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.setPacketFactoryList = function(e) {
        return t.Message.setRepeatedWrapperField(this, 6, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.addPacketFactory = function(e, o) {
        return t.Message.addToRepeatedWrapperField(this, 6, e, proto.mediapipe.PacketFactoryConfig, o)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.clearPacketFactoryList = function() {
        return this.setPacketFactoryList([])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.getPacketGeneratorList = function() {
        return t.Message.getRepeatedWrapperField(this, p.PacketGeneratorConfig, 7)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.setPacketGeneratorList = function(e) {
        return t.Message.setRepeatedWrapperField(this, 7, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.addPacketGenerator = function(e, o) {
        return t.Message.addToRepeatedWrapperField(this, 7, e, proto.mediapipe.PacketGeneratorConfig, o)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.clearPacketGeneratorList = function() {
        return this.setPacketGeneratorList([])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.getNumThreads = function() {
        return t.Message.getFieldWithDefault(this, 8, 0)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.setNumThreads = function(e) {
        return t.Message.setProto3IntField(this, 8, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.getStatusHandlerList = function() {
        return t.Message.getRepeatedWrapperField(this, g.StatusHandlerConfig, 9)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.setStatusHandlerList = function(e) {
        return t.Message.setRepeatedWrapperField(this, 9, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.addStatusHandler = function(e, o) {
        return t.Message.addToRepeatedWrapperField(this, 9, e, proto.mediapipe.StatusHandlerConfig, o)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.clearStatusHandlerList = function() {
        return this.setStatusHandlerList([])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.getInputStreamList = function() {
        return t.Message.getRepeatedField(this, 10)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.setInputStreamList = function(e) {
        return t.Message.setField(this, 10, e || [])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.addInputStream = function(e, o) {
        return t.Message.addToRepeatedField(this, 10, e, o)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.clearInputStreamList = function() {
        return this.setInputStreamList([])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.getOutputStreamList = function() {
        return t.Message.getRepeatedField(this, 15)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.setOutputStreamList = function(e) {
        return t.Message.setField(this, 15, e || [])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.addOutputStream = function(e, o) {
        return t.Message.addToRepeatedField(this, 15, e, o)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.clearOutputStreamList = function() {
        return this.setOutputStreamList([])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.getInputSidePacketList = function() {
        return t.Message.getRepeatedField(this, 16)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.setInputSidePacketList = function(e) {
        return t.Message.setField(this, 16, e || [])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.addInputSidePacket = function(e, o) {
        return t.Message.addToRepeatedField(this, 16, e, o)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.clearInputSidePacketList = function() {
        return this.setInputSidePacketList([])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.getOutputSidePacketList = function() {
        return t.Message.getRepeatedField(this, 17)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.setOutputSidePacketList = function(e) {
        return t.Message.setField(this, 17, e || [])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.addOutputSidePacket = function(e, o) {
        return t.Message.addToRepeatedField(this, 17, e, o)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.clearOutputSidePacketList = function() {
        return this.setOutputSidePacketList([])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.getMaxQueueSize = function() {
        return t.Message.getFieldWithDefault(this, 11, 0)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.setMaxQueueSize = function(e) {
        return t.Message.setProto3IntField(this, 11, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.getReportDeadlock = function() {
        return t.Message.getBooleanFieldWithDefault(this, 21, !1)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.setReportDeadlock = function(e) {
        return t.Message.setProto3BooleanField(this, 21, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.getInputStreamHandler = function() {
        return t.Message.getWrapperField(this, l.InputStreamHandlerConfig, 12)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.setInputStreamHandler = function(e) {
        return t.Message.setWrapperField(this, 12, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.clearInputStreamHandler = function() {
        return this.setInputStreamHandler(void 0)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.hasInputStreamHandler = function() {
        return null != t.Message.getField(this, 12)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.getOutputStreamHandler = function() {
        return t.Message.getWrapperField(this, l.OutputStreamHandlerConfig, 13)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.setOutputStreamHandler = function(e) {
        return t.Message.setWrapperField(this, 13, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.clearOutputStreamHandler = function() {
        return this.setOutputStreamHandler(void 0)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.hasOutputStreamHandler = function() {
        return null != t.Message.getField(this, 13)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.getExecutorList = function() {
        return t.Message.getRepeatedWrapperField(this, proto.mediapipe.ExecutorConfig, 14)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.setExecutorList = function(e) {
        return t.Message.setRepeatedWrapperField(this, 14, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.addExecutor = function(e, o) {
        return t.Message.addToRepeatedWrapperField(this, 14, e, proto.mediapipe.ExecutorConfig, o)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.clearExecutorList = function() {
        return this.setExecutorList([])
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.getProfilerConfig = function() {
        return t.Message.getWrapperField(this, proto.mediapipe.ProfilerConfig, 18)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.setProfilerConfig = function(e) {
        return t.Message.setWrapperField(this, 18, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.clearProfilerConfig = function() {
        return this.setProfilerConfig(void 0)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.hasProfilerConfig = function() {
        return null != t.Message.getField(this, 18)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.getPackage = function() {
        return t.Message.getFieldWithDefault(this, 19, "")
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.setPackage = function(e) {
        return t.Message.setProto3StringField(this, 19, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.getType = function() {
        return t.Message.getFieldWithDefault(this, 20, "")
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.setType = function(e) {
        return t.Message.setProto3StringField(this, 20, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.getOptions = function() {
        return t.Message.getWrapperField(this, n.MediaPipeOptions, 1001)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.setOptions = function(e) {
        return t.Message.setWrapperField(this, 1001, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.clearOptions = function() {
        return this.setOptions(void 0)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.hasOptions = function() {
        return null != t.Message.getField(this, 1001)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.getGraphOptionsList = function() {
        return t.Message.getRepeatedWrapperField(this, a.Any, 1002)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.setGraphOptionsList = function(e) {
        return t.Message.setRepeatedWrapperField(this, 1002, e)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.addGraphOptions = function(e, o) {
        return t.Message.addToRepeatedWrapperField(this, 1002, e, proto.google.protobuf.Any, o)
    }
    ,
    proto.mediapipe.CalculatorGraphConfig.prototype.clearGraphOptionsList = function() {
        return this.setGraphOptionsList([])
    }
    ,
    o.object.extend(e, proto.mediapipe)
}(calculator_pb);
var audio_classifier_graph_options_pb = {}
  , classifier_options_pb = {};
!function(e) {
    var t = googleProtobuf
      , o = t
      , r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof window && window || void 0 !== r && r || "undefined" != typeof self && self || function() {
        return this
    }
    .call(null) || Function("return this")();
    o.exportSymbol("proto.mediapipe.tasks.components.processors.proto.ClassifierOptions", null, r),
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions = function(e) {
        t.Message.initialize(this, e, 0, -1, proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.repeatedFields_, null)
    }
    ,
    o.inherits(proto.mediapipe.tasks.components.processors.proto.ClassifierOptions, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.displayName = "proto.mediapipe.tasks.components.processors.proto.ClassifierOptions"),
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.repeatedFields_ = [4, 5],
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.prototype.toObject = function(e) {
        return proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.toObject(e, this)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.toObject = function(e, o) {
        var r, i = {
            displayNamesLocale: t.Message.getFieldWithDefault(o, 1, "en"),
            maxResults: t.Message.getFieldWithDefault(o, 2, -1),
            scoreThreshold: null == (r = t.Message.getOptionalFloatingPointField(o, 3)) ? void 0 : r,
            categoryAllowlistList: null == (r = t.Message.getRepeatedField(o, 4)) ? void 0 : r,
            categoryDenylistList: null == (r = t.Message.getRepeatedField(o, 5)) ? void 0 : r
        };
        return e && (i.$jspbMessageInstance = o),
        i
    }
    ),
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.tasks.components.processors.proto.ClassifierOptions;
        return proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = t.readString();
                e.setDisplayNamesLocale(o);
                break;
            case 2:
                o = t.readInt32();
                e.setMaxResults(o);
                break;
            case 3:
                o = t.readFloat();
                e.setScoreThreshold(o);
                break;
            case 4:
                o = t.readString();
                e.addCategoryAllowlist(o);
                break;
            case 5:
                o = t.readString();
                e.addCategoryDenylist(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.serializeBinaryToWriter = function(e, o) {
        var r = void 0;
        null != (r = t.Message.getField(e, 1)) && o.writeString(1, r),
        null != (r = t.Message.getField(e, 2)) && o.writeInt32(2, r),
        null != (r = t.Message.getField(e, 3)) && o.writeFloat(3, r),
        (r = e.getCategoryAllowlistList()).length > 0 && o.writeRepeatedString(4, r),
        (r = e.getCategoryDenylistList()).length > 0 && o.writeRepeatedString(5, r)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.prototype.getDisplayNamesLocale = function() {
        return t.Message.getFieldWithDefault(this, 1, "en")
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.prototype.setDisplayNamesLocale = function(e) {
        return t.Message.setField(this, 1, e)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.prototype.clearDisplayNamesLocale = function() {
        return t.Message.setField(this, 1, void 0)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.prototype.hasDisplayNamesLocale = function() {
        return null != t.Message.getField(this, 1)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.prototype.getMaxResults = function() {
        return t.Message.getFieldWithDefault(this, 2, -1)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.prototype.setMaxResults = function(e) {
        return t.Message.setField(this, 2, e)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.prototype.clearMaxResults = function() {
        return t.Message.setField(this, 2, void 0)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.prototype.hasMaxResults = function() {
        return null != t.Message.getField(this, 2)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.prototype.getScoreThreshold = function() {
        return t.Message.getFloatingPointFieldWithDefault(this, 3, 0)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.prototype.setScoreThreshold = function(e) {
        return t.Message.setField(this, 3, e)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.prototype.clearScoreThreshold = function() {
        return t.Message.setField(this, 3, void 0)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.prototype.hasScoreThreshold = function() {
        return null != t.Message.getField(this, 3)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.prototype.getCategoryAllowlistList = function() {
        return t.Message.getRepeatedField(this, 4)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.prototype.setCategoryAllowlistList = function(e) {
        return t.Message.setField(this, 4, e || [])
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.prototype.addCategoryAllowlist = function(e, o) {
        return t.Message.addToRepeatedField(this, 4, e, o)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.prototype.clearCategoryAllowlistList = function() {
        return this.setCategoryAllowlistList([])
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.prototype.getCategoryDenylistList = function() {
        return t.Message.getRepeatedField(this, 5)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.prototype.setCategoryDenylistList = function(e) {
        return t.Message.setField(this, 5, e || [])
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.prototype.addCategoryDenylist = function(e, o) {
        return t.Message.addToRepeatedField(this, 5, e, o)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.ClassifierOptions.prototype.clearCategoryDenylistList = function() {
        return this.setCategoryDenylistList([])
    }
    ,
    o.object.extend(e, proto.mediapipe.tasks.components.processors.proto)
}(classifier_options_pb);
var base_options_pb = {}
  , acceleration_pb = {}
  , inference_calculator_pb = {};
!function(e) {
    var t = googleProtobuf
      , o = t
      , r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof window && window || void 0 !== r && r || "undefined" != typeof self && self || function() {
        return this
    }
    .call(null) || Function("return this")()
      , i = calculator_pb;
    o.object.extend(proto, i);
    var a = calculator_options_pb;
    o.object.extend(proto, a),
    o.exportSymbol("proto.mediapipe.InferenceCalculatorOptions", null, r),
    o.exportSymbol("proto.mediapipe.InferenceCalculatorOptions.Delegate", null, r),
    o.exportSymbol("proto.mediapipe.InferenceCalculatorOptions.Delegate.DelegateCase", null, r),
    o.exportSymbol("proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu", null, r),
    o.exportSymbol("proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.Api", null, r),
    o.exportSymbol("proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.InferenceUsage", null, r),
    o.exportSymbol("proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi", null, r),
    o.exportSymbol("proto.mediapipe.InferenceCalculatorOptions.Delegate.TfLite", null, r),
    o.exportSymbol("proto.mediapipe.InferenceCalculatorOptions.Delegate.Xnnpack", null, r),
    proto.mediapipe.InferenceCalculatorOptions = function(e) {
        t.Message.initialize(this, e, 0, -1, null, null)
    }
    ,
    o.inherits(proto.mediapipe.InferenceCalculatorOptions, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.InferenceCalculatorOptions.displayName = "proto.mediapipe.InferenceCalculatorOptions"),
    proto.mediapipe.InferenceCalculatorOptions.Delegate = function(e) {
        t.Message.initialize(this, e, 0, -1, null, proto.mediapipe.InferenceCalculatorOptions.Delegate.oneofGroups_)
    }
    ,
    o.inherits(proto.mediapipe.InferenceCalculatorOptions.Delegate, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.InferenceCalculatorOptions.Delegate.displayName = "proto.mediapipe.InferenceCalculatorOptions.Delegate"),
    proto.mediapipe.InferenceCalculatorOptions.Delegate.TfLite = function(e) {
        t.Message.initialize(this, e, 0, -1, null, null)
    }
    ,
    o.inherits(proto.mediapipe.InferenceCalculatorOptions.Delegate.TfLite, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.InferenceCalculatorOptions.Delegate.TfLite.displayName = "proto.mediapipe.InferenceCalculatorOptions.Delegate.TfLite"),
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu = function(e) {
        t.Message.initialize(this, e, 0, -1, null, null)
    }
    ,
    o.inherits(proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.displayName = "proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu"),
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi = function(e) {
        t.Message.initialize(this, e, 0, -1, null, null)
    }
    ,
    o.inherits(proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.displayName = "proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi"),
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Xnnpack = function(e) {
        t.Message.initialize(this, e, 0, -1, null, null)
    }
    ,
    o.inherits(proto.mediapipe.InferenceCalculatorOptions.Delegate.Xnnpack, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.InferenceCalculatorOptions.Delegate.Xnnpack.displayName = "proto.mediapipe.InferenceCalculatorOptions.Delegate.Xnnpack"),
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.InferenceCalculatorOptions.prototype.toObject = function(e) {
        return proto.mediapipe.InferenceCalculatorOptions.toObject(e, this)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.toObject = function(e, o) {
        var r, i = {
            modelPath: null == (r = t.Message.getField(o, 1)) ? void 0 : r,
            useGpu: t.Message.getBooleanFieldWithDefault(o, 2, !1),
            useNnapi: t.Message.getBooleanFieldWithDefault(o, 3, !1),
            cpuNumThread: t.Message.getFieldWithDefault(o, 4, -1),
            delegate: (r = o.getDelegate()) && proto.mediapipe.InferenceCalculatorOptions.Delegate.toObject(e, r)
        };
        return e && (i.$jspbMessageInstance = o),
        i
    }
    ),
    proto.mediapipe.InferenceCalculatorOptions.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.InferenceCalculatorOptions;
        return proto.mediapipe.InferenceCalculatorOptions.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = t.readString();
                e.setModelPath(o);
                break;
            case 2:
                o = t.readBool();
                e.setUseGpu(o);
                break;
            case 3:
                o = t.readBool();
                e.setUseNnapi(o);
                break;
            case 4:
                o = t.readInt32();
                e.setCpuNumThread(o);
                break;
            case 5:
                o = new proto.mediapipe.InferenceCalculatorOptions.Delegate;
                t.readMessage(o, proto.mediapipe.InferenceCalculatorOptions.Delegate.deserializeBinaryFromReader),
                e.setDelegate(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.InferenceCalculatorOptions.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.serializeBinaryToWriter = function(e, o) {
        var r = void 0;
        null != (r = t.Message.getField(e, 1)) && o.writeString(1, r),
        null != (r = t.Message.getField(e, 2)) && o.writeBool(2, r),
        null != (r = t.Message.getField(e, 3)) && o.writeBool(3, r),
        null != (r = t.Message.getField(e, 4)) && o.writeInt32(4, r),
        null != (r = e.getDelegate()) && o.writeMessage(5, r, proto.mediapipe.InferenceCalculatorOptions.Delegate.serializeBinaryToWriter)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.oneofGroups_ = [[1, 2, 3, 4]],
    proto.mediapipe.InferenceCalculatorOptions.Delegate.DelegateCase = {
        DELEGATE_NOT_SET: 0,
        TFLITE: 1,
        GPU: 2,
        NNAPI: 3,
        XNNPACK: 4
    },
    proto.mediapipe.InferenceCalculatorOptions.Delegate.prototype.getDelegateCase = function() {
        return t.Message.computeOneofCase(this, proto.mediapipe.InferenceCalculatorOptions.Delegate.oneofGroups_[0])
    }
    ,
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.InferenceCalculatorOptions.Delegate.prototype.toObject = function(e) {
        return proto.mediapipe.InferenceCalculatorOptions.Delegate.toObject(e, this)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.toObject = function(e, t) {
        var o, r = {
            tflite: (o = t.getTflite()) && proto.mediapipe.InferenceCalculatorOptions.Delegate.TfLite.toObject(e, o),
            gpu: (o = t.getGpu()) && proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.toObject(e, o),
            nnapi: (o = t.getNnapi()) && proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.toObject(e, o),
            xnnpack: (o = t.getXnnpack()) && proto.mediapipe.InferenceCalculatorOptions.Delegate.Xnnpack.toObject(e, o)
        };
        return e && (r.$jspbMessageInstance = t),
        r
    }
    ),
    proto.mediapipe.InferenceCalculatorOptions.Delegate.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.InferenceCalculatorOptions.Delegate;
        return proto.mediapipe.InferenceCalculatorOptions.Delegate.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = new proto.mediapipe.InferenceCalculatorOptions.Delegate.TfLite;
                t.readMessage(o, proto.mediapipe.InferenceCalculatorOptions.Delegate.TfLite.deserializeBinaryFromReader),
                e.setTflite(o);
                break;
            case 2:
                o = new proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu;
                t.readMessage(o, proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.deserializeBinaryFromReader),
                e.setGpu(o);
                break;
            case 3:
                o = new proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi;
                t.readMessage(o, proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.deserializeBinaryFromReader),
                e.setNnapi(o);
                break;
            case 4:
                o = new proto.mediapipe.InferenceCalculatorOptions.Delegate.Xnnpack;
                t.readMessage(o, proto.mediapipe.InferenceCalculatorOptions.Delegate.Xnnpack.deserializeBinaryFromReader),
                e.setXnnpack(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.InferenceCalculatorOptions.Delegate.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.serializeBinaryToWriter = function(e, t) {
        var o = void 0;
        null != (o = e.getTflite()) && t.writeMessage(1, o, proto.mediapipe.InferenceCalculatorOptions.Delegate.TfLite.serializeBinaryToWriter),
        null != (o = e.getGpu()) && t.writeMessage(2, o, proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.serializeBinaryToWriter),
        null != (o = e.getNnapi()) && t.writeMessage(3, o, proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.serializeBinaryToWriter),
        null != (o = e.getXnnpack()) && t.writeMessage(4, o, proto.mediapipe.InferenceCalculatorOptions.Delegate.Xnnpack.serializeBinaryToWriter)
    }
    ,
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.InferenceCalculatorOptions.Delegate.TfLite.prototype.toObject = function(e) {
        return proto.mediapipe.InferenceCalculatorOptions.Delegate.TfLite.toObject(e, this)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.TfLite.toObject = function(e, t) {
        var o = {};
        return e && (o.$jspbMessageInstance = t),
        o
    }
    ),
    proto.mediapipe.InferenceCalculatorOptions.Delegate.TfLite.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.InferenceCalculatorOptions.Delegate.TfLite;
        return proto.mediapipe.InferenceCalculatorOptions.Delegate.TfLite.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.TfLite.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            t.getFieldNumber();
            t.skipField()
        }
        return e
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.TfLite.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.InferenceCalculatorOptions.Delegate.TfLite.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.TfLite.serializeBinaryToWriter = function(e, t) {}
    ,
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.toObject = function(e) {
        return proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.toObject(e, this)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.toObject = function(e, o) {
        var r, i = {
            useAdvancedGpuApi: t.Message.getBooleanFieldWithDefault(o, 1, !1),
            api: t.Message.getFieldWithDefault(o, 4, 0),
            allowPrecisionLoss: t.Message.getBooleanFieldWithDefault(o, 3, !0),
            cachedKernelPath: null == (r = t.Message.getField(o, 2)) ? void 0 : r,
            serializedModelDir: null == (r = t.Message.getField(o, 7)) ? void 0 : r,
            modelToken: null == (r = t.Message.getField(o, 8)) ? void 0 : r,
            usage: t.Message.getFieldWithDefault(o, 5, 2)
        };
        return e && (i.$jspbMessageInstance = o),
        i
    }
    ),
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu;
        return proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = t.readBool();
                e.setUseAdvancedGpuApi(o);
                break;
            case 4:
                o = t.readEnum();
                e.setApi(o);
                break;
            case 3:
                o = t.readBool();
                e.setAllowPrecisionLoss(o);
                break;
            case 2:
                o = t.readString();
                e.setCachedKernelPath(o);
                break;
            case 7:
                o = t.readString();
                e.setSerializedModelDir(o);
                break;
            case 8:
                o = t.readString();
                e.setModelToken(o);
                break;
            case 5:
                o = t.readEnum();
                e.setUsage(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.serializeBinaryToWriter = function(e, o) {
        var r = void 0;
        null != (r = t.Message.getField(e, 1)) && o.writeBool(1, r),
        null != (r = t.Message.getField(e, 4)) && o.writeEnum(4, r),
        null != (r = t.Message.getField(e, 3)) && o.writeBool(3, r),
        null != (r = t.Message.getField(e, 2)) && o.writeString(2, r),
        null != (r = t.Message.getField(e, 7)) && o.writeString(7, r),
        null != (r = t.Message.getField(e, 8)) && o.writeString(8, r),
        null != (r = t.Message.getField(e, 5)) && o.writeEnum(5, r)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.Api = {
        ANY: 0,
        OPENGL: 1,
        OPENCL: 2
    },
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.InferenceUsage = {
        UNSPECIFIED: 0,
        FAST_SINGLE_ANSWER: 1,
        SUSTAINED_SPEED: 2
    },
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.getUseAdvancedGpuApi = function() {
        return t.Message.getBooleanFieldWithDefault(this, 1, !1)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.setUseAdvancedGpuApi = function(e) {
        return t.Message.setField(this, 1, e)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.clearUseAdvancedGpuApi = function() {
        return t.Message.setField(this, 1, void 0)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.hasUseAdvancedGpuApi = function() {
        return null != t.Message.getField(this, 1)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.getApi = function() {
        return t.Message.getFieldWithDefault(this, 4, 0)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.setApi = function(e) {
        return t.Message.setField(this, 4, e)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.clearApi = function() {
        return t.Message.setField(this, 4, void 0)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.hasApi = function() {
        return null != t.Message.getField(this, 4)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.getAllowPrecisionLoss = function() {
        return t.Message.getBooleanFieldWithDefault(this, 3, !0)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.setAllowPrecisionLoss = function(e) {
        return t.Message.setField(this, 3, e)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.clearAllowPrecisionLoss = function() {
        return t.Message.setField(this, 3, void 0)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.hasAllowPrecisionLoss = function() {
        return null != t.Message.getField(this, 3)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.getCachedKernelPath = function() {
        return t.Message.getFieldWithDefault(this, 2, "")
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.setCachedKernelPath = function(e) {
        return t.Message.setField(this, 2, e)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.clearCachedKernelPath = function() {
        return t.Message.setField(this, 2, void 0)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.hasCachedKernelPath = function() {
        return null != t.Message.getField(this, 2)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.getSerializedModelDir = function() {
        return t.Message.getFieldWithDefault(this, 7, "")
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.setSerializedModelDir = function(e) {
        return t.Message.setField(this, 7, e)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.clearSerializedModelDir = function() {
        return t.Message.setField(this, 7, void 0)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.hasSerializedModelDir = function() {
        return null != t.Message.getField(this, 7)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.getModelToken = function() {
        return t.Message.getFieldWithDefault(this, 8, "")
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.setModelToken = function(e) {
        return t.Message.setField(this, 8, e)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.clearModelToken = function() {
        return t.Message.setField(this, 8, void 0)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.hasModelToken = function() {
        return null != t.Message.getField(this, 8)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.getUsage = function() {
        return t.Message.getFieldWithDefault(this, 5, 2)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.setUsage = function(e) {
        return t.Message.setField(this, 5, e)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.clearUsage = function() {
        return t.Message.setField(this, 5, void 0)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu.prototype.hasUsage = function() {
        return null != t.Message.getField(this, 5)
    }
    ,
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.prototype.toObject = function(e) {
        return proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.toObject(e, this)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.toObject = function(e, o) {
        var r, i = {
            cacheDir: null == (r = t.Message.getField(o, 1)) ? void 0 : r,
            modelToken: null == (r = t.Message.getField(o, 2)) ? void 0 : r,
            acceleratorName: null == (r = t.Message.getField(o, 3)) ? void 0 : r
        };
        return e && (i.$jspbMessageInstance = o),
        i
    }
    ),
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi;
        return proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = t.readString();
                e.setCacheDir(o);
                break;
            case 2:
                o = t.readString();
                e.setModelToken(o);
                break;
            case 3:
                o = t.readString();
                e.setAcceleratorName(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.serializeBinaryToWriter = function(e, o) {
        var r = void 0;
        null != (r = t.Message.getField(e, 1)) && o.writeString(1, r),
        null != (r = t.Message.getField(e, 2)) && o.writeString(2, r),
        null != (r = t.Message.getField(e, 3)) && o.writeString(3, r)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.prototype.getCacheDir = function() {
        return t.Message.getFieldWithDefault(this, 1, "")
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.prototype.setCacheDir = function(e) {
        return t.Message.setField(this, 1, e)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.prototype.clearCacheDir = function() {
        return t.Message.setField(this, 1, void 0)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.prototype.hasCacheDir = function() {
        return null != t.Message.getField(this, 1)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.prototype.getModelToken = function() {
        return t.Message.getFieldWithDefault(this, 2, "")
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.prototype.setModelToken = function(e) {
        return t.Message.setField(this, 2, e)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.prototype.clearModelToken = function() {
        return t.Message.setField(this, 2, void 0)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.prototype.hasModelToken = function() {
        return null != t.Message.getField(this, 2)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.prototype.getAcceleratorName = function() {
        return t.Message.getFieldWithDefault(this, 3, "")
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.prototype.setAcceleratorName = function(e) {
        return t.Message.setField(this, 3, e)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.prototype.clearAcceleratorName = function() {
        return t.Message.setField(this, 3, void 0)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi.prototype.hasAcceleratorName = function() {
        return null != t.Message.getField(this, 3)
    }
    ,
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.InferenceCalculatorOptions.Delegate.Xnnpack.prototype.toObject = function(e) {
        return proto.mediapipe.InferenceCalculatorOptions.Delegate.Xnnpack.toObject(e, this)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Xnnpack.toObject = function(e, o) {
        var r = {
            numThreads: t.Message.getFieldWithDefault(o, 1, -1)
        };
        return e && (r.$jspbMessageInstance = o),
        r
    }
    ),
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Xnnpack.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.InferenceCalculatorOptions.Delegate.Xnnpack;
        return proto.mediapipe.InferenceCalculatorOptions.Delegate.Xnnpack.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Xnnpack.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            if (1 === t.getFieldNumber()) {
                var o = t.readInt32();
                e.setNumThreads(o)
            } else
                t.skipField()
        }
        return e
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Xnnpack.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.InferenceCalculatorOptions.Delegate.Xnnpack.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Xnnpack.serializeBinaryToWriter = function(e, o) {
        var r;
        null != (r = t.Message.getField(e, 1)) && o.writeInt32(1, r)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Xnnpack.prototype.getNumThreads = function() {
        return t.Message.getFieldWithDefault(this, 1, -1)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Xnnpack.prototype.setNumThreads = function(e) {
        return t.Message.setField(this, 1, e)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Xnnpack.prototype.clearNumThreads = function() {
        return t.Message.setField(this, 1, void 0)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.Xnnpack.prototype.hasNumThreads = function() {
        return null != t.Message.getField(this, 1)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.prototype.getTflite = function() {
        return t.Message.getWrapperField(this, proto.mediapipe.InferenceCalculatorOptions.Delegate.TfLite, 1)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.prototype.setTflite = function(e) {
        return t.Message.setOneofWrapperField(this, 1, proto.mediapipe.InferenceCalculatorOptions.Delegate.oneofGroups_[0], e)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.prototype.clearTflite = function() {
        return this.setTflite(void 0)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.prototype.hasTflite = function() {
        return null != t.Message.getField(this, 1)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.prototype.getGpu = function() {
        return t.Message.getWrapperField(this, proto.mediapipe.InferenceCalculatorOptions.Delegate.Gpu, 2)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.prototype.setGpu = function(e) {
        return t.Message.setOneofWrapperField(this, 2, proto.mediapipe.InferenceCalculatorOptions.Delegate.oneofGroups_[0], e)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.prototype.clearGpu = function() {
        return this.setGpu(void 0)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.prototype.hasGpu = function() {
        return null != t.Message.getField(this, 2)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.prototype.getNnapi = function() {
        return t.Message.getWrapperField(this, proto.mediapipe.InferenceCalculatorOptions.Delegate.Nnapi, 3)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.prototype.setNnapi = function(e) {
        return t.Message.setOneofWrapperField(this, 3, proto.mediapipe.InferenceCalculatorOptions.Delegate.oneofGroups_[0], e)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.prototype.clearNnapi = function() {
        return this.setNnapi(void 0)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.prototype.hasNnapi = function() {
        return null != t.Message.getField(this, 3)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.prototype.getXnnpack = function() {
        return t.Message.getWrapperField(this, proto.mediapipe.InferenceCalculatorOptions.Delegate.Xnnpack, 4)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.prototype.setXnnpack = function(e) {
        return t.Message.setOneofWrapperField(this, 4, proto.mediapipe.InferenceCalculatorOptions.Delegate.oneofGroups_[0], e)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.prototype.clearXnnpack = function() {
        return this.setXnnpack(void 0)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.Delegate.prototype.hasXnnpack = function() {
        return null != t.Message.getField(this, 4)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.ext = new t.ExtensionFieldInfo(336783863,{
        ext: 0
    },proto.mediapipe.InferenceCalculatorOptions,proto.mediapipe.InferenceCalculatorOptions.toObject,0),
    a.CalculatorOptions.extensionsBinary[336783863] = new t.ExtensionFieldBinaryInfo(proto.mediapipe.InferenceCalculatorOptions.ext,t.BinaryReader.prototype.readMessage,t.BinaryWriter.prototype.writeMessage,proto.mediapipe.InferenceCalculatorOptions.serializeBinaryToWriter,proto.mediapipe.InferenceCalculatorOptions.deserializeBinaryFromReader,!1),
    a.CalculatorOptions.extensions[336783863] = proto.mediapipe.InferenceCalculatorOptions.ext,
    proto.mediapipe.InferenceCalculatorOptions.prototype.getModelPath = function() {
        return t.Message.getFieldWithDefault(this, 1, "")
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.prototype.setModelPath = function(e) {
        return t.Message.setField(this, 1, e)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.prototype.clearModelPath = function() {
        return t.Message.setField(this, 1, void 0)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.prototype.hasModelPath = function() {
        return null != t.Message.getField(this, 1)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.prototype.getUseGpu = function() {
        return t.Message.getBooleanFieldWithDefault(this, 2, !1)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.prototype.setUseGpu = function(e) {
        return t.Message.setField(this, 2, e)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.prototype.clearUseGpu = function() {
        return t.Message.setField(this, 2, void 0)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.prototype.hasUseGpu = function() {
        return null != t.Message.getField(this, 2)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.prototype.getUseNnapi = function() {
        return t.Message.getBooleanFieldWithDefault(this, 3, !1)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.prototype.setUseNnapi = function(e) {
        return t.Message.setField(this, 3, e)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.prototype.clearUseNnapi = function() {
        return t.Message.setField(this, 3, void 0)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.prototype.hasUseNnapi = function() {
        return null != t.Message.getField(this, 3)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.prototype.getCpuNumThread = function() {
        return t.Message.getFieldWithDefault(this, 4, -1)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.prototype.setCpuNumThread = function(e) {
        return t.Message.setField(this, 4, e)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.prototype.clearCpuNumThread = function() {
        return t.Message.setField(this, 4, void 0)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.prototype.hasCpuNumThread = function() {
        return null != t.Message.getField(this, 4)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.prototype.getDelegate = function() {
        return t.Message.getWrapperField(this, proto.mediapipe.InferenceCalculatorOptions.Delegate, 5)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.prototype.setDelegate = function(e) {
        return t.Message.setWrapperField(this, 5, e)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.prototype.clearDelegate = function() {
        return this.setDelegate(void 0)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.prototype.hasDelegate = function() {
        return null != t.Message.getField(this, 5)
    }
    ,
    proto.mediapipe.InferenceCalculatorOptions.ext = new t.ExtensionFieldInfo(336783863,{
        ext: 0
    },proto.mediapipe.InferenceCalculatorOptions,proto.mediapipe.InferenceCalculatorOptions.toObject,0),
    a.CalculatorOptions.extensionsBinary[336783863] = new t.ExtensionFieldBinaryInfo(proto.mediapipe.InferenceCalculatorOptions.ext,t.BinaryReader.prototype.readMessage,t.BinaryWriter.prototype.writeMessage,proto.mediapipe.InferenceCalculatorOptions.serializeBinaryToWriter,proto.mediapipe.InferenceCalculatorOptions.deserializeBinaryFromReader,!1),
    a.CalculatorOptions.extensions[336783863] = proto.mediapipe.InferenceCalculatorOptions.ext,
    o.object.extend(e, proto.mediapipe)
}(inference_calculator_pb),
function(e) {
    var t = googleProtobuf
      , o = t
      , r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof window && window || void 0 !== r && r || "undefined" != typeof self && self || function() {
        return this
    }
    .call(null) || Function("return this")()
      , i = inference_calculator_pb;
    o.object.extend(proto, i),
    o.exportSymbol("proto.mediapipe.tasks.core.proto.Acceleration", null, r),
    o.exportSymbol("proto.mediapipe.tasks.core.proto.Acceleration.DelegateCase", null, r),
    proto.mediapipe.tasks.core.proto.Acceleration = function(e) {
        t.Message.initialize(this, e, 0, -1, null, proto.mediapipe.tasks.core.proto.Acceleration.oneofGroups_)
    }
    ,
    o.inherits(proto.mediapipe.tasks.core.proto.Acceleration, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.tasks.core.proto.Acceleration.displayName = "proto.mediapipe.tasks.core.proto.Acceleration"),
    proto.mediapipe.tasks.core.proto.Acceleration.oneofGroups_ = [[1, 2, 4, 5]],
    proto.mediapipe.tasks.core.proto.Acceleration.DelegateCase = {
        DELEGATE_NOT_SET: 0,
        XNNPACK: 1,
        GPU: 2,
        TFLITE: 4,
        NNAPI: 5
    },
    proto.mediapipe.tasks.core.proto.Acceleration.prototype.getDelegateCase = function() {
        return t.Message.computeOneofCase(this, proto.mediapipe.tasks.core.proto.Acceleration.oneofGroups_[0])
    }
    ,
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.tasks.core.proto.Acceleration.prototype.toObject = function(e) {
        return proto.mediapipe.tasks.core.proto.Acceleration.toObject(e, this)
    }
    ,
    proto.mediapipe.tasks.core.proto.Acceleration.toObject = function(e, t) {
        var o, r = {
            xnnpack: (o = t.getXnnpack()) && i.InferenceCalculatorOptions.Delegate.Xnnpack.toObject(e, o),
            gpu: (o = t.getGpu()) && i.InferenceCalculatorOptions.Delegate.Gpu.toObject(e, o),
            tflite: (o = t.getTflite()) && i.InferenceCalculatorOptions.Delegate.TfLite.toObject(e, o),
            nnapi: (o = t.getNnapi()) && i.InferenceCalculatorOptions.Delegate.Nnapi.toObject(e, o)
        };
        return e && (r.$jspbMessageInstance = t),
        r
    }
    ),
    proto.mediapipe.tasks.core.proto.Acceleration.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.tasks.core.proto.Acceleration;
        return proto.mediapipe.tasks.core.proto.Acceleration.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.tasks.core.proto.Acceleration.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = new i.InferenceCalculatorOptions.Delegate.Xnnpack;
                t.readMessage(o, i.InferenceCalculatorOptions.Delegate.Xnnpack.deserializeBinaryFromReader),
                e.setXnnpack(o);
                break;
            case 2:
                o = new i.InferenceCalculatorOptions.Delegate.Gpu;
                t.readMessage(o, i.InferenceCalculatorOptions.Delegate.Gpu.deserializeBinaryFromReader),
                e.setGpu(o);
                break;
            case 4:
                o = new i.InferenceCalculatorOptions.Delegate.TfLite;
                t.readMessage(o, i.InferenceCalculatorOptions.Delegate.TfLite.deserializeBinaryFromReader),
                e.setTflite(o);
                break;
            case 5:
                o = new i.InferenceCalculatorOptions.Delegate.Nnapi;
                t.readMessage(o, i.InferenceCalculatorOptions.Delegate.Nnapi.deserializeBinaryFromReader),
                e.setNnapi(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.tasks.core.proto.Acceleration.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.tasks.core.proto.Acceleration.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.tasks.core.proto.Acceleration.serializeBinaryToWriter = function(e, t) {
        var o = void 0;
        null != (o = e.getXnnpack()) && t.writeMessage(1, o, i.InferenceCalculatorOptions.Delegate.Xnnpack.serializeBinaryToWriter),
        null != (o = e.getGpu()) && t.writeMessage(2, o, i.InferenceCalculatorOptions.Delegate.Gpu.serializeBinaryToWriter),
        null != (o = e.getTflite()) && t.writeMessage(4, o, i.InferenceCalculatorOptions.Delegate.TfLite.serializeBinaryToWriter),
        null != (o = e.getNnapi()) && t.writeMessage(5, o, i.InferenceCalculatorOptions.Delegate.Nnapi.serializeBinaryToWriter)
    }
    ,
    proto.mediapipe.tasks.core.proto.Acceleration.prototype.getXnnpack = function() {
        return t.Message.getWrapperField(this, i.InferenceCalculatorOptions.Delegate.Xnnpack, 1)
    }
    ,
    proto.mediapipe.tasks.core.proto.Acceleration.prototype.setXnnpack = function(e) {
        return t.Message.setOneofWrapperField(this, 1, proto.mediapipe.tasks.core.proto.Acceleration.oneofGroups_[0], e)
    }
    ,
    proto.mediapipe.tasks.core.proto.Acceleration.prototype.clearXnnpack = function() {
        return this.setXnnpack(void 0)
    }
    ,
    proto.mediapipe.tasks.core.proto.Acceleration.prototype.hasXnnpack = function() {
        return null != t.Message.getField(this, 1)
    }
    ,
    proto.mediapipe.tasks.core.proto.Acceleration.prototype.getGpu = function() {
        return t.Message.getWrapperField(this, i.InferenceCalculatorOptions.Delegate.Gpu, 2)
    }
    ,
    proto.mediapipe.tasks.core.proto.Acceleration.prototype.setGpu = function(e) {
        return t.Message.setOneofWrapperField(this, 2, proto.mediapipe.tasks.core.proto.Acceleration.oneofGroups_[0], e)
    }
    ,
    proto.mediapipe.tasks.core.proto.Acceleration.prototype.clearGpu = function() {
        return this.setGpu(void 0)
    }
    ,
    proto.mediapipe.tasks.core.proto.Acceleration.prototype.hasGpu = function() {
        return null != t.Message.getField(this, 2)
    }
    ,
    proto.mediapipe.tasks.core.proto.Acceleration.prototype.getTflite = function() {
        return t.Message.getWrapperField(this, i.InferenceCalculatorOptions.Delegate.TfLite, 4)
    }
    ,
    proto.mediapipe.tasks.core.proto.Acceleration.prototype.setTflite = function(e) {
        return t.Message.setOneofWrapperField(this, 4, proto.mediapipe.tasks.core.proto.Acceleration.oneofGroups_[0], e)
    }
    ,
    proto.mediapipe.tasks.core.proto.Acceleration.prototype.clearTflite = function() {
        return this.setTflite(void 0)
    }
    ,
    proto.mediapipe.tasks.core.proto.Acceleration.prototype.hasTflite = function() {
        return null != t.Message.getField(this, 4)
    }
    ,
    proto.mediapipe.tasks.core.proto.Acceleration.prototype.getNnapi = function() {
        return t.Message.getWrapperField(this, i.InferenceCalculatorOptions.Delegate.Nnapi, 5)
    }
    ,
    proto.mediapipe.tasks.core.proto.Acceleration.prototype.setNnapi = function(e) {
        return t.Message.setOneofWrapperField(this, 5, proto.mediapipe.tasks.core.proto.Acceleration.oneofGroups_[0], e)
    }
    ,
    proto.mediapipe.tasks.core.proto.Acceleration.prototype.clearNnapi = function() {
        return this.setNnapi(void 0)
    }
    ,
    proto.mediapipe.tasks.core.proto.Acceleration.prototype.hasNnapi = function() {
        return null != t.Message.getField(this, 5)
    }
    ,
    o.object.extend(e, proto.mediapipe.tasks.core.proto)
}(acceleration_pb);
var external_file_pb = {};
!function(e) {
    var t = googleProtobuf
      , o = t
      , r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof window && window || void 0 !== r && r || "undefined" != typeof self && self || function() {
        return this
    }
    .call(null) || Function("return this")();
    o.exportSymbol("proto.mediapipe.tasks.core.proto.ExternalFile", null, r),
    o.exportSymbol("proto.mediapipe.tasks.core.proto.FileDescriptorMeta", null, r),
    o.exportSymbol("proto.mediapipe.tasks.core.proto.FilePointerMeta", null, r),
    proto.mediapipe.tasks.core.proto.ExternalFile = function(e) {
        t.Message.initialize(this, e, 0, -1, null, null)
    }
    ,
    o.inherits(proto.mediapipe.tasks.core.proto.ExternalFile, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.tasks.core.proto.ExternalFile.displayName = "proto.mediapipe.tasks.core.proto.ExternalFile"),
    proto.mediapipe.tasks.core.proto.FileDescriptorMeta = function(e) {
        t.Message.initialize(this, e, 0, -1, null, null)
    }
    ,
    o.inherits(proto.mediapipe.tasks.core.proto.FileDescriptorMeta, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.tasks.core.proto.FileDescriptorMeta.displayName = "proto.mediapipe.tasks.core.proto.FileDescriptorMeta"),
    proto.mediapipe.tasks.core.proto.FilePointerMeta = function(e) {
        t.Message.initialize(this, e, 0, -1, null, null)
    }
    ,
    o.inherits(proto.mediapipe.tasks.core.proto.FilePointerMeta, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.tasks.core.proto.FilePointerMeta.displayName = "proto.mediapipe.tasks.core.proto.FilePointerMeta"),
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.tasks.core.proto.ExternalFile.prototype.toObject = function(e) {
        return proto.mediapipe.tasks.core.proto.ExternalFile.toObject(e, this)
    }
    ,
    proto.mediapipe.tasks.core.proto.ExternalFile.toObject = function(e, o) {
        var r, i = {
            fileContent: o.getFileContent_asB64(),
            fileName: null == (r = t.Message.getField(o, 2)) ? void 0 : r,
            fileDescriptorMeta: (r = o.getFileDescriptorMeta()) && proto.mediapipe.tasks.core.proto.FileDescriptorMeta.toObject(e, r),
            filePointerMeta: (r = o.getFilePointerMeta()) && proto.mediapipe.tasks.core.proto.FilePointerMeta.toObject(e, r)
        };
        return e && (i.$jspbMessageInstance = o),
        i
    }
    ),
    proto.mediapipe.tasks.core.proto.ExternalFile.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.tasks.core.proto.ExternalFile;
        return proto.mediapipe.tasks.core.proto.ExternalFile.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.tasks.core.proto.ExternalFile.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = t.readBytes();
                e.setFileContent(o);
                break;
            case 2:
                o = t.readString();
                e.setFileName(o);
                break;
            case 3:
                o = new proto.mediapipe.tasks.core.proto.FileDescriptorMeta;
                t.readMessage(o, proto.mediapipe.tasks.core.proto.FileDescriptorMeta.deserializeBinaryFromReader),
                e.setFileDescriptorMeta(o);
                break;
            case 4:
                o = new proto.mediapipe.tasks.core.proto.FilePointerMeta;
                t.readMessage(o, proto.mediapipe.tasks.core.proto.FilePointerMeta.deserializeBinaryFromReader),
                e.setFilePointerMeta(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.tasks.core.proto.ExternalFile.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.tasks.core.proto.ExternalFile.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.tasks.core.proto.ExternalFile.serializeBinaryToWriter = function(e, o) {
        var r = void 0;
        null != (r = t.Message.getField(e, 1)) && o.writeBytes(1, r),
        null != (r = t.Message.getField(e, 2)) && o.writeString(2, r),
        null != (r = e.getFileDescriptorMeta()) && o.writeMessage(3, r, proto.mediapipe.tasks.core.proto.FileDescriptorMeta.serializeBinaryToWriter),
        null != (r = e.getFilePointerMeta()) && o.writeMessage(4, r, proto.mediapipe.tasks.core.proto.FilePointerMeta.serializeBinaryToWriter)
    }
    ,
    proto.mediapipe.tasks.core.proto.ExternalFile.prototype.getFileContent = function() {
        return t.Message.getFieldWithDefault(this, 1, "")
    }
    ,
    proto.mediapipe.tasks.core.proto.ExternalFile.prototype.getFileContent_asB64 = function() {
        return t.Message.bytesAsB64(this.getFileContent())
    }
    ,
    proto.mediapipe.tasks.core.proto.ExternalFile.prototype.getFileContent_asU8 = function() {
        return t.Message.bytesAsU8(this.getFileContent())
    }
    ,
    proto.mediapipe.tasks.core.proto.ExternalFile.prototype.setFileContent = function(e) {
        return t.Message.setField(this, 1, e)
    }
    ,
    proto.mediapipe.tasks.core.proto.ExternalFile.prototype.clearFileContent = function() {
        return t.Message.setField(this, 1, void 0)
    }
    ,
    proto.mediapipe.tasks.core.proto.ExternalFile.prototype.hasFileContent = function() {
        return null != t.Message.getField(this, 1)
    }
    ,
    proto.mediapipe.tasks.core.proto.ExternalFile.prototype.getFileName = function() {
        return t.Message.getFieldWithDefault(this, 2, "")
    }
    ,
    proto.mediapipe.tasks.core.proto.ExternalFile.prototype.setFileName = function(e) {
        return t.Message.setField(this, 2, e)
    }
    ,
    proto.mediapipe.tasks.core.proto.ExternalFile.prototype.clearFileName = function() {
        return t.Message.setField(this, 2, void 0)
    }
    ,
    proto.mediapipe.tasks.core.proto.ExternalFile.prototype.hasFileName = function() {
        return null != t.Message.getField(this, 2)
    }
    ,
    proto.mediapipe.tasks.core.proto.ExternalFile.prototype.getFileDescriptorMeta = function() {
        return t.Message.getWrapperField(this, proto.mediapipe.tasks.core.proto.FileDescriptorMeta, 3)
    }
    ,
    proto.mediapipe.tasks.core.proto.ExternalFile.prototype.setFileDescriptorMeta = function(e) {
        return t.Message.setWrapperField(this, 3, e)
    }
    ,
    proto.mediapipe.tasks.core.proto.ExternalFile.prototype.clearFileDescriptorMeta = function() {
        return this.setFileDescriptorMeta(void 0)
    }
    ,
    proto.mediapipe.tasks.core.proto.ExternalFile.prototype.hasFileDescriptorMeta = function() {
        return null != t.Message.getField(this, 3)
    }
    ,
    proto.mediapipe.tasks.core.proto.ExternalFile.prototype.getFilePointerMeta = function() {
        return t.Message.getWrapperField(this, proto.mediapipe.tasks.core.proto.FilePointerMeta, 4)
    }
    ,
    proto.mediapipe.tasks.core.proto.ExternalFile.prototype.setFilePointerMeta = function(e) {
        return t.Message.setWrapperField(this, 4, e)
    }
    ,
    proto.mediapipe.tasks.core.proto.ExternalFile.prototype.clearFilePointerMeta = function() {
        return this.setFilePointerMeta(void 0)
    }
    ,
    proto.mediapipe.tasks.core.proto.ExternalFile.prototype.hasFilePointerMeta = function() {
        return null != t.Message.getField(this, 4)
    }
    ,
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.tasks.core.proto.FileDescriptorMeta.prototype.toObject = function(e) {
        return proto.mediapipe.tasks.core.proto.FileDescriptorMeta.toObject(e, this)
    }
    ,
    proto.mediapipe.tasks.core.proto.FileDescriptorMeta.toObject = function(e, o) {
        var r, i = {
            fd: null == (r = t.Message.getField(o, 1)) ? void 0 : r,
            length: null == (r = t.Message.getField(o, 2)) ? void 0 : r,
            offset: null == (r = t.Message.getField(o, 3)) ? void 0 : r
        };
        return e && (i.$jspbMessageInstance = o),
        i
    }
    ),
    proto.mediapipe.tasks.core.proto.FileDescriptorMeta.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.tasks.core.proto.FileDescriptorMeta;
        return proto.mediapipe.tasks.core.proto.FileDescriptorMeta.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.tasks.core.proto.FileDescriptorMeta.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = t.readInt32();
                e.setFd(o);
                break;
            case 2:
                o = t.readInt64();
                e.setLength(o);
                break;
            case 3:
                o = t.readInt64();
                e.setOffset(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.tasks.core.proto.FileDescriptorMeta.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.tasks.core.proto.FileDescriptorMeta.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.tasks.core.proto.FileDescriptorMeta.serializeBinaryToWriter = function(e, o) {
        var r = void 0;
        null != (r = t.Message.getField(e, 1)) && o.writeInt32(1, r),
        null != (r = t.Message.getField(e, 2)) && o.writeInt64(2, r),
        null != (r = t.Message.getField(e, 3)) && o.writeInt64(3, r)
    }
    ,
    proto.mediapipe.tasks.core.proto.FileDescriptorMeta.prototype.getFd = function() {
        return t.Message.getFieldWithDefault(this, 1, 0)
    }
    ,
    proto.mediapipe.tasks.core.proto.FileDescriptorMeta.prototype.setFd = function(e) {
        return t.Message.setField(this, 1, e)
    }
    ,
    proto.mediapipe.tasks.core.proto.FileDescriptorMeta.prototype.clearFd = function() {
        return t.Message.setField(this, 1, void 0)
    }
    ,
    proto.mediapipe.tasks.core.proto.FileDescriptorMeta.prototype.hasFd = function() {
        return null != t.Message.getField(this, 1)
    }
    ,
    proto.mediapipe.tasks.core.proto.FileDescriptorMeta.prototype.getLength = function() {
        return t.Message.getFieldWithDefault(this, 2, 0)
    }
    ,
    proto.mediapipe.tasks.core.proto.FileDescriptorMeta.prototype.setLength = function(e) {
        return t.Message.setField(this, 2, e)
    }
    ,
    proto.mediapipe.tasks.core.proto.FileDescriptorMeta.prototype.clearLength = function() {
        return t.Message.setField(this, 2, void 0)
    }
    ,
    proto.mediapipe.tasks.core.proto.FileDescriptorMeta.prototype.hasLength = function() {
        return null != t.Message.getField(this, 2)
    }
    ,
    proto.mediapipe.tasks.core.proto.FileDescriptorMeta.prototype.getOffset = function() {
        return t.Message.getFieldWithDefault(this, 3, 0)
    }
    ,
    proto.mediapipe.tasks.core.proto.FileDescriptorMeta.prototype.setOffset = function(e) {
        return t.Message.setField(this, 3, e)
    }
    ,
    proto.mediapipe.tasks.core.proto.FileDescriptorMeta.prototype.clearOffset = function() {
        return t.Message.setField(this, 3, void 0)
    }
    ,
    proto.mediapipe.tasks.core.proto.FileDescriptorMeta.prototype.hasOffset = function() {
        return null != t.Message.getField(this, 3)
    }
    ,
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.tasks.core.proto.FilePointerMeta.prototype.toObject = function(e) {
        return proto.mediapipe.tasks.core.proto.FilePointerMeta.toObject(e, this)
    }
    ,
    proto.mediapipe.tasks.core.proto.FilePointerMeta.toObject = function(e, o) {
        var r, i = {
            pointer: null == (r = t.Message.getField(o, 1)) ? void 0 : r,
            length: null == (r = t.Message.getField(o, 2)) ? void 0 : r
        };
        return e && (i.$jspbMessageInstance = o),
        i
    }
    ),
    proto.mediapipe.tasks.core.proto.FilePointerMeta.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.tasks.core.proto.FilePointerMeta;
        return proto.mediapipe.tasks.core.proto.FilePointerMeta.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.tasks.core.proto.FilePointerMeta.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = t.readUint64();
                e.setPointer(o);
                break;
            case 2:
                o = t.readInt64();
                e.setLength(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.tasks.core.proto.FilePointerMeta.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.tasks.core.proto.FilePointerMeta.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.tasks.core.proto.FilePointerMeta.serializeBinaryToWriter = function(e, o) {
        var r = void 0;
        null != (r = t.Message.getField(e, 1)) && o.writeUint64(1, r),
        null != (r = t.Message.getField(e, 2)) && o.writeInt64(2, r)
    }
    ,
    proto.mediapipe.tasks.core.proto.FilePointerMeta.prototype.getPointer = function() {
        return t.Message.getFieldWithDefault(this, 1, 0)
    }
    ,
    proto.mediapipe.tasks.core.proto.FilePointerMeta.prototype.setPointer = function(e) {
        return t.Message.setField(this, 1, e)
    }
    ,
    proto.mediapipe.tasks.core.proto.FilePointerMeta.prototype.clearPointer = function() {
        return t.Message.setField(this, 1, void 0)
    }
    ,
    proto.mediapipe.tasks.core.proto.FilePointerMeta.prototype.hasPointer = function() {
        return null != t.Message.getField(this, 1)
    }
    ,
    proto.mediapipe.tasks.core.proto.FilePointerMeta.prototype.getLength = function() {
        return t.Message.getFieldWithDefault(this, 2, 0)
    }
    ,
    proto.mediapipe.tasks.core.proto.FilePointerMeta.prototype.setLength = function(e) {
        return t.Message.setField(this, 2, e)
    }
    ,
    proto.mediapipe.tasks.core.proto.FilePointerMeta.prototype.clearLength = function() {
        return t.Message.setField(this, 2, void 0)
    }
    ,
    proto.mediapipe.tasks.core.proto.FilePointerMeta.prototype.hasLength = function() {
        return null != t.Message.getField(this, 2)
    }
    ,
    o.object.extend(e, proto.mediapipe.tasks.core.proto)
}(external_file_pb),
function(e) {
    var t = googleProtobuf
      , o = t
      , r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof window && window || void 0 !== r && r || "undefined" != typeof self && self || function() {
        return this
    }
    .call(null) || Function("return this")()
      , i = acceleration_pb;
    o.object.extend(proto, i);
    var a = external_file_pb;
    o.object.extend(proto, a),
    o.exportSymbol("proto.mediapipe.tasks.core.proto.BaseOptions", null, r),
    proto.mediapipe.tasks.core.proto.BaseOptions = function(e) {
        t.Message.initialize(this, e, 0, -1, null, null)
    }
    ,
    o.inherits(proto.mediapipe.tasks.core.proto.BaseOptions, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.tasks.core.proto.BaseOptions.displayName = "proto.mediapipe.tasks.core.proto.BaseOptions"),
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.tasks.core.proto.BaseOptions.prototype.toObject = function(e) {
        return proto.mediapipe.tasks.core.proto.BaseOptions.toObject(e, this)
    }
    ,
    proto.mediapipe.tasks.core.proto.BaseOptions.toObject = function(e, o) {
        var r, n = {
            modelAsset: (r = o.getModelAsset()) && a.ExternalFile.toObject(e, r),
            useStreamMode: t.Message.getBooleanFieldWithDefault(o, 2, !1),
            acceleration: (r = o.getAcceleration()) && i.Acceleration.toObject(e, r)
        };
        return e && (n.$jspbMessageInstance = o),
        n
    }
    ),
    proto.mediapipe.tasks.core.proto.BaseOptions.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.tasks.core.proto.BaseOptions;
        return proto.mediapipe.tasks.core.proto.BaseOptions.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.tasks.core.proto.BaseOptions.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = new a.ExternalFile;
                t.readMessage(o, a.ExternalFile.deserializeBinaryFromReader),
                e.setModelAsset(o);
                break;
            case 2:
                o = t.readBool();
                e.setUseStreamMode(o);
                break;
            case 3:
                o = new i.Acceleration;
                t.readMessage(o, i.Acceleration.deserializeBinaryFromReader),
                e.setAcceleration(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.tasks.core.proto.BaseOptions.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.tasks.core.proto.BaseOptions.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.tasks.core.proto.BaseOptions.serializeBinaryToWriter = function(e, o) {
        var r = void 0;
        null != (r = e.getModelAsset()) && o.writeMessage(1, r, a.ExternalFile.serializeBinaryToWriter),
        null != (r = t.Message.getField(e, 2)) && o.writeBool(2, r),
        null != (r = e.getAcceleration()) && o.writeMessage(3, r, i.Acceleration.serializeBinaryToWriter)
    }
    ,
    proto.mediapipe.tasks.core.proto.BaseOptions.prototype.getModelAsset = function() {
        return t.Message.getWrapperField(this, a.ExternalFile, 1)
    }
    ,
    proto.mediapipe.tasks.core.proto.BaseOptions.prototype.setModelAsset = function(e) {
        return t.Message.setWrapperField(this, 1, e)
    }
    ,
    proto.mediapipe.tasks.core.proto.BaseOptions.prototype.clearModelAsset = function() {
        return this.setModelAsset(void 0)
    }
    ,
    proto.mediapipe.tasks.core.proto.BaseOptions.prototype.hasModelAsset = function() {
        return null != t.Message.getField(this, 1)
    }
    ,
    proto.mediapipe.tasks.core.proto.BaseOptions.prototype.getUseStreamMode = function() {
        return t.Message.getBooleanFieldWithDefault(this, 2, !1)
    }
    ,
    proto.mediapipe.tasks.core.proto.BaseOptions.prototype.setUseStreamMode = function(e) {
        return t.Message.setField(this, 2, e)
    }
    ,
    proto.mediapipe.tasks.core.proto.BaseOptions.prototype.clearUseStreamMode = function() {
        return t.Message.setField(this, 2, void 0)
    }
    ,
    proto.mediapipe.tasks.core.proto.BaseOptions.prototype.hasUseStreamMode = function() {
        return null != t.Message.getField(this, 2)
    }
    ,
    proto.mediapipe.tasks.core.proto.BaseOptions.prototype.getAcceleration = function() {
        return t.Message.getWrapperField(this, i.Acceleration, 3)
    }
    ,
    proto.mediapipe.tasks.core.proto.BaseOptions.prototype.setAcceleration = function(e) {
        return t.Message.setWrapperField(this, 3, e)
    }
    ,
    proto.mediapipe.tasks.core.proto.BaseOptions.prototype.clearAcceleration = function() {
        return this.setAcceleration(void 0)
    }
    ,
    proto.mediapipe.tasks.core.proto.BaseOptions.prototype.hasAcceleration = function() {
        return null != t.Message.getField(this, 3)
    }
    ,
    o.object.extend(e, proto.mediapipe.tasks.core.proto)
}(base_options_pb),
function(e) {
    var t = googleProtobuf
      , o = t
      , r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof window && window || void 0 !== r && r || "undefined" != typeof self && self || function() {
        return this
    }
    .call(null) || Function("return this")()
      , i = calculator_pb;
    o.object.extend(proto, i);
    var a = calculator_options_pb;
    o.object.extend(proto, a);
    var n = classifier_options_pb;
    o.object.extend(proto, n);
    var s = base_options_pb;
    o.object.extend(proto, s),
    o.exportSymbol("proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions", null, r),
    proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions = function(e) {
        t.Message.initialize(this, e, 0, -1, null, null)
    }
    ,
    o.inherits(proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.displayName = "proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions"),
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.prototype.toObject = function(e) {
        return proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.toObject(e, this)
    }
    ,
    proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.toObject = function(e, o) {
        var r, i = {
            baseOptions: (r = o.getBaseOptions()) && s.BaseOptions.toObject(e, r),
            classifierOptions: (r = o.getClassifierOptions()) && n.ClassifierOptions.toObject(e, r),
            defaultInputAudioSampleRate: null == (r = t.Message.getOptionalFloatingPointField(o, 3)) ? void 0 : r
        };
        return e && (i.$jspbMessageInstance = o),
        i
    }
    ),
    proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions;
        return proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = new s.BaseOptions;
                t.readMessage(o, s.BaseOptions.deserializeBinaryFromReader),
                e.setBaseOptions(o);
                break;
            case 2:
                o = new n.ClassifierOptions;
                t.readMessage(o, n.ClassifierOptions.deserializeBinaryFromReader),
                e.setClassifierOptions(o);
                break;
            case 3:
                o = t.readDouble();
                e.setDefaultInputAudioSampleRate(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.serializeBinaryToWriter = function(e, o) {
        var r = void 0;
        null != (r = e.getBaseOptions()) && o.writeMessage(1, r, s.BaseOptions.serializeBinaryToWriter),
        null != (r = e.getClassifierOptions()) && o.writeMessage(2, r, n.ClassifierOptions.serializeBinaryToWriter),
        null != (r = t.Message.getField(e, 3)) && o.writeDouble(3, r)
    }
    ,
    proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.ext = new t.ExtensionFieldInfo(451755788,{
        ext: 0
    },proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions,proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.toObject,0),
    a.CalculatorOptions.extensionsBinary[451755788] = new t.ExtensionFieldBinaryInfo(proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.ext,t.BinaryReader.prototype.readMessage,t.BinaryWriter.prototype.writeMessage,proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.serializeBinaryToWriter,proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.deserializeBinaryFromReader,!1),
    a.CalculatorOptions.extensions[451755788] = proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.ext,
    proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.prototype.getBaseOptions = function() {
        return t.Message.getWrapperField(this, s.BaseOptions, 1)
    }
    ,
    proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.prototype.setBaseOptions = function(e) {
        return t.Message.setWrapperField(this, 1, e)
    }
    ,
    proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.prototype.clearBaseOptions = function() {
        return this.setBaseOptions(void 0)
    }
    ,
    proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.prototype.hasBaseOptions = function() {
        return null != t.Message.getField(this, 1)
    }
    ,
    proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.prototype.getClassifierOptions = function() {
        return t.Message.getWrapperField(this, n.ClassifierOptions, 2)
    }
    ,
    proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.prototype.setClassifierOptions = function(e) {
        return t.Message.setWrapperField(this, 2, e)
    }
    ,
    proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.prototype.clearClassifierOptions = function() {
        return this.setClassifierOptions(void 0)
    }
    ,
    proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.prototype.hasClassifierOptions = function() {
        return null != t.Message.getField(this, 2)
    }
    ,
    proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.prototype.getDefaultInputAudioSampleRate = function() {
        return t.Message.getFloatingPointFieldWithDefault(this, 3, 0)
    }
    ,
    proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.prototype.setDefaultInputAudioSampleRate = function(e) {
        return t.Message.setField(this, 3, e)
    }
    ,
    proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.prototype.clearDefaultInputAudioSampleRate = function() {
        return t.Message.setField(this, 3, void 0)
    }
    ,
    proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.prototype.hasDefaultInputAudioSampleRate = function() {
        return null != t.Message.getField(this, 3)
    }
    ,
    proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.ext = new t.ExtensionFieldInfo(451755788,{
        ext: 0
    },proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions,proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.toObject,0),
    a.CalculatorOptions.extensionsBinary[451755788] = new t.ExtensionFieldBinaryInfo(proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.ext,t.BinaryReader.prototype.readMessage,t.BinaryWriter.prototype.writeMessage,proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.serializeBinaryToWriter,proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.deserializeBinaryFromReader,!1),
    a.CalculatorOptions.extensions[451755788] = proto.mediapipe.tasks.audio.audio_classifier.proto.AudioClassifierGraphOptions.ext,
    o.object.extend(e, proto.mediapipe.tasks.audio.audio_classifier.proto)
}(audio_classifier_graph_options_pb);
var classifications_pb = {}
  , classification_pb = {};
!function(e) {
    var t = googleProtobuf
      , o = t
      , r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof window && window || void 0 !== r && r || "undefined" != typeof self && self || function() {
        return this
    }
    .call(null) || Function("return this")();
    o.exportSymbol("proto.mediapipe.Classification", null, r),
    o.exportSymbol("proto.mediapipe.ClassificationList", null, r),
    o.exportSymbol("proto.mediapipe.ClassificationListCollection", null, r),
    proto.mediapipe.Classification = function(e) {
        t.Message.initialize(this, e, 0, -1, null, null)
    }
    ,
    o.inherits(proto.mediapipe.Classification, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.Classification.displayName = "proto.mediapipe.Classification"),
    proto.mediapipe.ClassificationList = function(e) {
        t.Message.initialize(this, e, 0, -1, proto.mediapipe.ClassificationList.repeatedFields_, null)
    }
    ,
    o.inherits(proto.mediapipe.ClassificationList, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.ClassificationList.displayName = "proto.mediapipe.ClassificationList"),
    proto.mediapipe.ClassificationListCollection = function(e) {
        t.Message.initialize(this, e, 0, -1, proto.mediapipe.ClassificationListCollection.repeatedFields_, null)
    }
    ,
    o.inherits(proto.mediapipe.ClassificationListCollection, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.ClassificationListCollection.displayName = "proto.mediapipe.ClassificationListCollection"),
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.Classification.prototype.toObject = function(e) {
        return proto.mediapipe.Classification.toObject(e, this)
    }
    ,
    proto.mediapipe.Classification.toObject = function(e, o) {
        var r, i = {
            index: null == (r = t.Message.getField(o, 1)) ? void 0 : r,
            score: null == (r = t.Message.getOptionalFloatingPointField(o, 2)) ? void 0 : r,
            label: null == (r = t.Message.getField(o, 3)) ? void 0 : r,
            displayName: null == (r = t.Message.getField(o, 4)) ? void 0 : r
        };
        return e && (i.$jspbMessageInstance = o),
        i
    }
    ),
    proto.mediapipe.Classification.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.Classification;
        return proto.mediapipe.Classification.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.Classification.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = t.readInt32();
                e.setIndex(o);
                break;
            case 2:
                o = t.readFloat();
                e.setScore(o);
                break;
            case 3:
                o = t.readString();
                e.setLabel(o);
                break;
            case 4:
                o = t.readString();
                e.setDisplayName(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.Classification.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.Classification.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.Classification.serializeBinaryToWriter = function(e, o) {
        var r = void 0;
        null != (r = t.Message.getField(e, 1)) && o.writeInt32(1, r),
        null != (r = t.Message.getField(e, 2)) && o.writeFloat(2, r),
        null != (r = t.Message.getField(e, 3)) && o.writeString(3, r),
        null != (r = t.Message.getField(e, 4)) && o.writeString(4, r)
    }
    ,
    proto.mediapipe.Classification.prototype.getIndex = function() {
        return t.Message.getFieldWithDefault(this, 1, 0)
    }
    ,
    proto.mediapipe.Classification.prototype.setIndex = function(e) {
        return t.Message.setField(this, 1, e)
    }
    ,
    proto.mediapipe.Classification.prototype.clearIndex = function() {
        return t.Message.setField(this, 1, void 0)
    }
    ,
    proto.mediapipe.Classification.prototype.hasIndex = function() {
        return null != t.Message.getField(this, 1)
    }
    ,
    proto.mediapipe.Classification.prototype.getScore = function() {
        return t.Message.getFloatingPointFieldWithDefault(this, 2, 0)
    }
    ,
    proto.mediapipe.Classification.prototype.setScore = function(e) {
        return t.Message.setField(this, 2, e)
    }
    ,
    proto.mediapipe.Classification.prototype.clearScore = function() {
        return t.Message.setField(this, 2, void 0)
    }
    ,
    proto.mediapipe.Classification.prototype.hasScore = function() {
        return null != t.Message.getField(this, 2)
    }
    ,
    proto.mediapipe.Classification.prototype.getLabel = function() {
        return t.Message.getFieldWithDefault(this, 3, "")
    }
    ,
    proto.mediapipe.Classification.prototype.setLabel = function(e) {
        return t.Message.setField(this, 3, e)
    }
    ,
    proto.mediapipe.Classification.prototype.clearLabel = function() {
        return t.Message.setField(this, 3, void 0)
    }
    ,
    proto.mediapipe.Classification.prototype.hasLabel = function() {
        return null != t.Message.getField(this, 3)
    }
    ,
    proto.mediapipe.Classification.prototype.getDisplayName = function() {
        return t.Message.getFieldWithDefault(this, 4, "")
    }
    ,
    proto.mediapipe.Classification.prototype.setDisplayName = function(e) {
        return t.Message.setField(this, 4, e)
    }
    ,
    proto.mediapipe.Classification.prototype.clearDisplayName = function() {
        return t.Message.setField(this, 4, void 0)
    }
    ,
    proto.mediapipe.Classification.prototype.hasDisplayName = function() {
        return null != t.Message.getField(this, 4)
    }
    ,
    proto.mediapipe.ClassificationList.repeatedFields_ = [1],
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.ClassificationList.prototype.toObject = function(e) {
        return proto.mediapipe.ClassificationList.toObject(e, this)
    }
    ,
    proto.mediapipe.ClassificationList.toObject = function(e, o) {
        var r = {
            classificationList: t.Message.toObjectList(o.getClassificationList(), proto.mediapipe.Classification.toObject, e)
        };
        return e && (r.$jspbMessageInstance = o),
        r
    }
    ),
    proto.mediapipe.ClassificationList.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.ClassificationList;
        return proto.mediapipe.ClassificationList.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.ClassificationList.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            if (1 === t.getFieldNumber()) {
                var o = new proto.mediapipe.Classification;
                t.readMessage(o, proto.mediapipe.Classification.deserializeBinaryFromReader),
                e.addClassification(o)
            } else
                t.skipField()
        }
        return e
    }
    ,
    proto.mediapipe.ClassificationList.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.ClassificationList.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.ClassificationList.serializeBinaryToWriter = function(e, t) {
        var o;
        (o = e.getClassificationList()).length > 0 && t.writeRepeatedMessage(1, o, proto.mediapipe.Classification.serializeBinaryToWriter)
    }
    ,
    proto.mediapipe.ClassificationList.prototype.getClassificationList = function() {
        return t.Message.getRepeatedWrapperField(this, proto.mediapipe.Classification, 1)
    }
    ,
    proto.mediapipe.ClassificationList.prototype.setClassificationList = function(e) {
        return t.Message.setRepeatedWrapperField(this, 1, e)
    }
    ,
    proto.mediapipe.ClassificationList.prototype.addClassification = function(e, o) {
        return t.Message.addToRepeatedWrapperField(this, 1, e, proto.mediapipe.Classification, o)
    }
    ,
    proto.mediapipe.ClassificationList.prototype.clearClassificationList = function() {
        return this.setClassificationList([])
    }
    ,
    proto.mediapipe.ClassificationListCollection.repeatedFields_ = [1],
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.ClassificationListCollection.prototype.toObject = function(e) {
        return proto.mediapipe.ClassificationListCollection.toObject(e, this)
    }
    ,
    proto.mediapipe.ClassificationListCollection.toObject = function(e, o) {
        var r = {
            classificationListList: t.Message.toObjectList(o.getClassificationListList(), proto.mediapipe.ClassificationList.toObject, e)
        };
        return e && (r.$jspbMessageInstance = o),
        r
    }
    ),
    proto.mediapipe.ClassificationListCollection.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.ClassificationListCollection;
        return proto.mediapipe.ClassificationListCollection.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.ClassificationListCollection.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            if (1 === t.getFieldNumber()) {
                var o = new proto.mediapipe.ClassificationList;
                t.readMessage(o, proto.mediapipe.ClassificationList.deserializeBinaryFromReader),
                e.addClassificationList(o)
            } else
                t.skipField()
        }
        return e
    }
    ,
    proto.mediapipe.ClassificationListCollection.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.ClassificationListCollection.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.ClassificationListCollection.serializeBinaryToWriter = function(e, t) {
        var o;
        (o = e.getClassificationListList()).length > 0 && t.writeRepeatedMessage(1, o, proto.mediapipe.ClassificationList.serializeBinaryToWriter)
    }
    ,
    proto.mediapipe.ClassificationListCollection.prototype.getClassificationListList = function() {
        return t.Message.getRepeatedWrapperField(this, proto.mediapipe.ClassificationList, 1)
    }
    ,
    proto.mediapipe.ClassificationListCollection.prototype.setClassificationListList = function(e) {
        return t.Message.setRepeatedWrapperField(this, 1, e)
    }
    ,
    proto.mediapipe.ClassificationListCollection.prototype.addClassificationList = function(e, o) {
        return t.Message.addToRepeatedWrapperField(this, 1, e, proto.mediapipe.ClassificationList, o)
    }
    ,
    proto.mediapipe.ClassificationListCollection.prototype.clearClassificationListList = function() {
        return this.setClassificationListList([])
    }
    ,
    o.object.extend(e, proto.mediapipe)
}(classification_pb),
function(e) {
    var t = googleProtobuf
      , o = t
      , r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof window && window || void 0 !== r && r || "undefined" != typeof self && self || function() {
        return this
    }
    .call(null) || Function("return this")()
      , i = classification_pb;
    o.object.extend(proto, i),
    o.exportSymbol("proto.mediapipe.tasks.components.containers.proto.ClassificationResult", null, r),
    o.exportSymbol("proto.mediapipe.tasks.components.containers.proto.Classifications", null, r),
    proto.mediapipe.tasks.components.containers.proto.Classifications = function(e) {
        t.Message.initialize(this, e, 0, -1, null, null)
    }
    ,
    o.inherits(proto.mediapipe.tasks.components.containers.proto.Classifications, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.tasks.components.containers.proto.Classifications.displayName = "proto.mediapipe.tasks.components.containers.proto.Classifications"),
    proto.mediapipe.tasks.components.containers.proto.ClassificationResult = function(e) {
        t.Message.initialize(this, e, 0, -1, proto.mediapipe.tasks.components.containers.proto.ClassificationResult.repeatedFields_, null)
    }
    ,
    o.inherits(proto.mediapipe.tasks.components.containers.proto.ClassificationResult, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.tasks.components.containers.proto.ClassificationResult.displayName = "proto.mediapipe.tasks.components.containers.proto.ClassificationResult"),
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.tasks.components.containers.proto.Classifications.prototype.toObject = function(e) {
        return proto.mediapipe.tasks.components.containers.proto.Classifications.toObject(e, this)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Classifications.toObject = function(e, o) {
        var r, a = {
            classificationList: (r = o.getClassificationList()) && i.ClassificationList.toObject(e, r),
            headIndex: null == (r = t.Message.getField(o, 2)) ? void 0 : r,
            headName: null == (r = t.Message.getField(o, 3)) ? void 0 : r
        };
        return e && (a.$jspbMessageInstance = o),
        a
    }
    ),
    proto.mediapipe.tasks.components.containers.proto.Classifications.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.tasks.components.containers.proto.Classifications;
        return proto.mediapipe.tasks.components.containers.proto.Classifications.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Classifications.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 4:
                var o = new i.ClassificationList;
                t.readMessage(o, i.ClassificationList.deserializeBinaryFromReader),
                e.setClassificationList(o);
                break;
            case 2:
                o = t.readInt32();
                e.setHeadIndex(o);
                break;
            case 3:
                o = t.readString();
                e.setHeadName(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Classifications.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.tasks.components.containers.proto.Classifications.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Classifications.serializeBinaryToWriter = function(e, o) {
        var r = void 0;
        null != (r = e.getClassificationList()) && o.writeMessage(4, r, i.ClassificationList.serializeBinaryToWriter),
        null != (r = t.Message.getField(e, 2)) && o.writeInt32(2, r),
        null != (r = t.Message.getField(e, 3)) && o.writeString(3, r)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Classifications.prototype.getClassificationList = function() {
        return t.Message.getWrapperField(this, i.ClassificationList, 4)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Classifications.prototype.setClassificationList = function(e) {
        return t.Message.setWrapperField(this, 4, e)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Classifications.prototype.clearClassificationList = function() {
        return this.setClassificationList(void 0)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Classifications.prototype.hasClassificationList = function() {
        return null != t.Message.getField(this, 4)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Classifications.prototype.getHeadIndex = function() {
        return t.Message.getFieldWithDefault(this, 2, 0)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Classifications.prototype.setHeadIndex = function(e) {
        return t.Message.setField(this, 2, e)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Classifications.prototype.clearHeadIndex = function() {
        return t.Message.setField(this, 2, void 0)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Classifications.prototype.hasHeadIndex = function() {
        return null != t.Message.getField(this, 2)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Classifications.prototype.getHeadName = function() {
        return t.Message.getFieldWithDefault(this, 3, "")
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Classifications.prototype.setHeadName = function(e) {
        return t.Message.setField(this, 3, e)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Classifications.prototype.clearHeadName = function() {
        return t.Message.setField(this, 3, void 0)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Classifications.prototype.hasHeadName = function() {
        return null != t.Message.getField(this, 3)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.ClassificationResult.repeatedFields_ = [1],
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.tasks.components.containers.proto.ClassificationResult.prototype.toObject = function(e) {
        return proto.mediapipe.tasks.components.containers.proto.ClassificationResult.toObject(e, this)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.ClassificationResult.toObject = function(e, o) {
        var r, i = {
            classificationsList: t.Message.toObjectList(o.getClassificationsList(), proto.mediapipe.tasks.components.containers.proto.Classifications.toObject, e),
            timestampMs: null == (r = t.Message.getField(o, 2)) ? void 0 : r
        };
        return e && (i.$jspbMessageInstance = o),
        i
    }
    ),
    proto.mediapipe.tasks.components.containers.proto.ClassificationResult.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.tasks.components.containers.proto.ClassificationResult;
        return proto.mediapipe.tasks.components.containers.proto.ClassificationResult.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.ClassificationResult.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = new proto.mediapipe.tasks.components.containers.proto.Classifications;
                t.readMessage(o, proto.mediapipe.tasks.components.containers.proto.Classifications.deserializeBinaryFromReader),
                e.addClassifications(o);
                break;
            case 2:
                o = t.readInt64();
                e.setTimestampMs(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.ClassificationResult.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.tasks.components.containers.proto.ClassificationResult.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.ClassificationResult.serializeBinaryToWriter = function(e, o) {
        var r = void 0;
        (r = e.getClassificationsList()).length > 0 && o.writeRepeatedMessage(1, r, proto.mediapipe.tasks.components.containers.proto.Classifications.serializeBinaryToWriter),
        null != (r = t.Message.getField(e, 2)) && o.writeInt64(2, r)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.ClassificationResult.prototype.getClassificationsList = function() {
        return t.Message.getRepeatedWrapperField(this, proto.mediapipe.tasks.components.containers.proto.Classifications, 1)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.ClassificationResult.prototype.setClassificationsList = function(e) {
        return t.Message.setRepeatedWrapperField(this, 1, e)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.ClassificationResult.prototype.addClassifications = function(e, o) {
        return t.Message.addToRepeatedWrapperField(this, 1, e, proto.mediapipe.tasks.components.containers.proto.Classifications, o)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.ClassificationResult.prototype.clearClassificationsList = function() {
        return this.setClassificationsList([])
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.ClassificationResult.prototype.getTimestampMs = function() {
        return t.Message.getFieldWithDefault(this, 2, 0)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.ClassificationResult.prototype.setTimestampMs = function(e) {
        return t.Message.setField(this, 2, e)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.ClassificationResult.prototype.clearTimestampMs = function() {
        return t.Message.setField(this, 2, void 0)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.ClassificationResult.prototype.hasTimestampMs = function() {
        return null != t.Message.getField(this, 2)
    }
    ,
    o.object.extend(e, proto.mediapipe.tasks.components.containers.proto)
}(classifications_pb);
var audio_task_runner = {}
  , task_runner = {}
  , graph_runner = {}
  , platform_utils = {};
function isWebKit(e=navigator) {
    const t = e.userAgent;
    return t.includes("Safari") && !t.includes("Chrome")
}
Object.defineProperty(platform_utils, "__esModule", {
    value: !0
}),
platform_utils.isWebKit = void 0,
platform_utils.isWebKit = isWebKit,
function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.createGraphRunner = e.createMediaPipeLib = e.GraphRunner = e.CALCULATOR_GRAPH_CONFIG_LISTENER_NAME = void 0;
    const t = platform_utils;
    e.CALCULATOR_GRAPH_CONFIG_LISTENER_NAME = "__graph_config__";
    class o {
        constructor(e, o) {
            this.autoResizeCanvas = !0,
            this.wasmModule = e,
            this.audioPtr = null,
            this.audioSize = 0,
            this.hasMultiStreamSupport = "function" == typeof this.wasmModule._addIntToInputStream,
            void 0 !== o ? this.wasmModule.canvas = o : "undefined" == typeof OffscreenCanvas || (0,
            t.isWebKit)() ? (console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),
            this.wasmModule.canvas = document.createElement("canvas")) : this.wasmModule.canvas = new OffscreenCanvas(1,1)
        }
        async initializeGraph(e) {
            const t = await fetch(e)
              , o = await t.arrayBuffer()
              , r = !(e.endsWith(".pbtxt") || e.endsWith(".textproto"));
            this.setGraph(new Uint8Array(o), r)
        }
        setGraphFromString(e) {
            this.setGraph((new TextEncoder).encode(e), !1)
        }
        setGraph(e, t) {
            const o = e.length
              , r = this.wasmModule._malloc(o);
            this.wasmModule.HEAPU8.set(e, r),
            t ? this.wasmModule._changeBinaryGraph(o, r) : this.wasmModule._changeTextGraph(o, r),
            this.wasmModule._free(r)
        }
        configureAudio(e, t, o, r, i) {
            this.wasmModule._configureAudio || console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),
            r = r || "input_audio",
            this.wrapStringPtr(r, (r=>{
                i = i || "audio_header",
                this.wrapStringPtr(i, (i=>{
                    this.wasmModule._configureAudio(r, i, e, t, o)
                }
                ))
            }
            ))
        }
        setAutoResizeCanvas(e) {
            this.autoResizeCanvas = e
        }
        setAutoRenderToScreen(e) {
            this.wasmModule._setAutoRenderToScreen(e)
        }
        bindTextureToStream(e, t) {
            if (!this.wasmModule.canvas)
                throw new Error("No OpenGL canvas configured.");
            t ? this.wasmModule._bindTextureToStream(t) : console.assert(this.wasmModule._bindTextureToCanvas());
            const o = this.wasmModule.canvas.getContext("webgl2") || this.wasmModule.canvas.getContext("webgl");
            if (!o)
                throw new Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");
            let r, i;
            return o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, o.RGBA, o.UNSIGNED_BYTE, e),
            e.videoWidth ? (r = e.videoWidth,
            i = e.videoHeight) : e.naturalWidth ? (r = e.naturalWidth,
            i = e.naturalHeight) : (r = e.width,
            i = e.height),
            !this.autoResizeCanvas || r === this.wasmModule.canvas.width && i === this.wasmModule.canvas.height || (this.wasmModule.canvas.width = r,
            this.wasmModule.canvas.height = i),
            [r, i]
        }
        processGl(e, t) {
            const [o,r] = this.bindTextureToStream(e)
              , i = this.wasmModule._malloc(16);
            this.wasmModule.HEAPU32[i / 4] = o,
            this.wasmModule.HEAPU32[i / 4 + 1] = r,
            this.wasmModule.HEAPF64[i / 8 + 1] = t,
            this.wasmModule._processGl(i),
            this.wasmModule._free(i)
        }
        wrapStringPtr(e, t) {
            this.hasMultiStreamSupport || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");
            const o = this.wasmModule.stringToNewUTF8(e);
            t(o),
            this.wasmModule._free(o)
        }
        wrapStringPtrPtr(e, t) {
            this.hasMultiStreamSupport || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");
            const o = new Uint32Array(e.length);
            for (let t = 0; t < e.length; t++)
                o[t] = this.wasmModule.stringToNewUTF8(e[t]);
            const r = this.wasmModule._malloc(4 * o.length);
            this.wasmModule.HEAPU32.set(o, r >> 2),
            t(r);
            for (const e of o)
                this.wasmModule._free(e);
            this.wasmModule._free(r)
        }
        getCalculatorGraphConfig(t, o) {
            const r = e.CALCULATOR_GRAPH_CONFIG_LISTENER_NAME;
            this.setListener(r, (e=>{
                t(e)
            }
            )),
            this.wrapStringPtr(r, (e=>{
                this.wasmModule._getGraphConfig(e, o)
            }
            )),
            delete this.wasmModule.simpleListeners[r]
        }
        setListener(e, t) {
            this.wasmModule.simpleListeners = this.wasmModule.simpleListeners || {},
            this.wasmModule.simpleListeners[e] = t
        }
        setVectorListener(e, t) {
            let o = [];
            this.wasmModule.simpleListeners = this.wasmModule.simpleListeners || {},
            this.wasmModule.simpleListeners[e] = (e,r,i)=>{
                r ? (t(o, i),
                o = []) : o.push(e)
            }
        }
        attachErrorListener(e) {
            this.wasmModule.errorListener = e
        }
        attachEmptyPacketListener(e, t) {
            this.wasmModule.emptyPacketListeners = this.wasmModule.emptyPacketListeners || {},
            this.wasmModule.emptyPacketListeners[e] = t
        }
        addAudioToStream(e, t, o) {
            this.addAudioToStreamWithShape(e, 0, 0, t, o)
        }
        addAudioToStreamWithShape(e, t, o, r, i) {
            const a = 4 * e.length;
            this.audioSize !== a && (this.audioPtr && this.wasmModule._free(this.audioPtr),
            this.audioPtr = this.wasmModule._malloc(a),
            this.audioSize = a),
            this.wasmModule.HEAPF32.set(e, this.audioPtr / 4),
            this.wrapStringPtr(r, (e=>{
                this.wasmModule._addAudioToInputStream(this.audioPtr, t, o, e, i)
            }
            ))
        }
        addGpuBufferToStream(e, t, o) {
            this.wrapStringPtr(t, (t=>{
                const [r,i] = this.bindTextureToStream(e, t);
                this.wasmModule._addBoundTextureToStream(t, r, i, o)
            }
            ))
        }
        addBoolToStream(e, t, o) {
            this.wrapStringPtr(t, (t=>{
                this.wasmModule._addBoolToInputStream(e, t, o)
            }
            ))
        }
        addDoubleToStream(e, t, o) {
            this.wrapStringPtr(t, (t=>{
                this.wasmModule._addDoubleToInputStream(e, t, o)
            }
            ))
        }
        addFloatToStream(e, t, o) {
            this.wrapStringPtr(t, (t=>{
                this.wasmModule._addFloatToInputStream(e, t, o)
            }
            ))
        }
        addIntToStream(e, t, o) {
            this.wrapStringPtr(t, (t=>{
                this.wasmModule._addIntToInputStream(e, t, o)
            }
            ))
        }
        addStringToStream(e, t, o) {
            this.wrapStringPtr(t, (t=>{
                this.wrapStringPtr(e, (e=>{
                    this.wasmModule._addStringToInputStream(e, t, o)
                }
                ))
            }
            ))
        }
        addStringRecordToStream(e, t, o) {
            this.wrapStringPtr(t, (t=>{
                this.wrapStringPtrPtr(Object.keys(e), (r=>{
                    this.wrapStringPtrPtr(Object.values(e), (i=>{
                        this.wasmModule._addFlatHashMapToInputStream(r, i, Object.keys(e).length, t, o)
                    }
                    ))
                }
                ))
            }
            ))
        }
        addProtoToStream(e, t, o, r) {
            this.wrapStringPtr(o, (o=>{
                this.wrapStringPtr(t, (t=>{
                    const i = this.wasmModule._malloc(e.length);
                    this.wasmModule.HEAPU8.set(e, i),
                    this.wasmModule._addProtoToInputStream(i, e.length, t, o, r),
                    this.wasmModule._free(i)
                }
                ))
            }
            ))
        }
        addEmptyPacketToStream(e, t) {
            this.wrapStringPtr(e, (e=>{
                this.wasmModule._addEmptyPacketToInputStream(e, t)
            }
            ))
        }
        addBoolToInputSidePacket(e, t) {
            this.wrapStringPtr(t, (t=>{
                this.wasmModule._addBoolToInputSidePacket(e, t)
            }
            ))
        }
        addDoubleToInputSidePacket(e, t) {
            this.wrapStringPtr(t, (t=>{
                this.wasmModule._addDoubleToInputSidePacket(e, t)
            }
            ))
        }
        addFloatToInputSidePacket(e, t) {
            this.wrapStringPtr(t, (t=>{
                this.wasmModule._addFloatToInputSidePacket(e, t)
            }
            ))
        }
        addIntToInputSidePacket(e, t) {
            this.wrapStringPtr(t, (t=>{
                this.wasmModule._addIntToInputSidePacket(e, t)
            }
            ))
        }
        addStringToInputSidePacket(e, t) {
            this.wrapStringPtr(t, (t=>{
                this.wrapStringPtr(e, (e=>{
                    this.wasmModule._addStringToInputSidePacket(e, t)
                }
                ))
            }
            ))
        }
        addProtoToInputSidePacket(e, t, o) {
            this.wrapStringPtr(o, (o=>{
                this.wrapStringPtr(t, (t=>{
                    const r = this.wasmModule._malloc(e.length);
                    this.wasmModule.HEAPU8.set(e, r),
                    this.wasmModule._addProtoToInputSidePacket(r, e.length, t, o),
                    this.wasmModule._free(r)
                }
                ))
            }
            ))
        }
        attachBoolListener(e, t) {
            this.setListener(e, t),
            this.wrapStringPtr(e, (e=>{
                this.wasmModule._attachBoolListener(e)
            }
            ))
        }
        attachBoolVectorListener(e, t) {
            this.setVectorListener(e, t),
            this.wrapStringPtr(e, (e=>{
                this.wasmModule._attachBoolVectorListener(e)
            }
            ))
        }
        attachIntListener(e, t) {
            this.setListener(e, t),
            this.wrapStringPtr(e, (e=>{
                this.wasmModule._attachIntListener(e)
            }
            ))
        }
        attachIntVectorListener(e, t) {
            this.setVectorListener(e, t),
            this.wrapStringPtr(e, (e=>{
                this.wasmModule._attachIntVectorListener(e)
            }
            ))
        }
        attachDoubleListener(e, t) {
            this.setListener(e, t),
            this.wrapStringPtr(e, (e=>{
                this.wasmModule._attachDoubleListener(e)
            }
            ))
        }
        attachDoubleVectorListener(e, t) {
            this.setVectorListener(e, t),
            this.wrapStringPtr(e, (e=>{
                this.wasmModule._attachDoubleVectorListener(e)
            }
            ))
        }
        attachFloatListener(e, t) {
            this.setListener(e, t),
            this.wrapStringPtr(e, (e=>{
                this.wasmModule._attachFloatListener(e)
            }
            ))
        }
        attachFloatVectorListener(e, t) {
            this.setVectorListener(e, t),
            this.wrapStringPtr(e, (e=>{
                this.wasmModule._attachFloatVectorListener(e)
            }
            ))
        }
        attachStringListener(e, t) {
            this.setListener(e, t),
            this.wrapStringPtr(e, (e=>{
                this.wasmModule._attachStringListener(e)
            }
            ))
        }
        attachStringVectorListener(e, t) {
            this.setVectorListener(e, t),
            this.wrapStringPtr(e, (e=>{
                this.wasmModule._attachStringVectorListener(e)
            }
            ))
        }
        attachProtoListener(e, t, o) {
            this.setListener(e, t),
            this.wrapStringPtr(e, (e=>{
                this.wasmModule._attachProtoListener(e, o || !1)
            }
            ))
        }
        attachProtoVectorListener(e, t, o) {
            this.setVectorListener(e, t),
            this.wrapStringPtr(e, (e=>{
                this.wasmModule._attachProtoVectorListener(e, o || !1)
            }
            ))
        }
        attachAudioListener(e, t, o) {
            this.wasmModule._attachAudioListener || console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),
            this.setListener(e, ((e,o)=>{
                const r = new Float32Array(e.buffer,e.byteOffset,e.length / 4);
                t(r, o)
            }
            )),
            this.wrapStringPtr(e, (e=>{
                this.wasmModule._attachAudioListener(e, o || !1)
            }
            ))
        }
        finishProcessing() {
            this.wasmModule._waitUntilIdle()
        }
        closeGraph() {
            this.wasmModule._closeGraph(),
            this.wasmModule.simpleListeners = void 0,
            this.wasmModule.emptyPacketListeners = void 0
        }
    }
    async function r(e) {
        if ("function" != typeof importScripts) {
            const t = document.createElement("script");
            return t.setAttribute("src", e),
            t.setAttribute("crossorigin", "anonymous"),
            new Promise((e=>{
                t.addEventListener("load", (()=>{
                    e()
                }
                ), !1),
                t.addEventListener("error", (()=>{
                    e()
                }
                ), !1),
                document.body.appendChild(t)
            }
            ))
        }
        importScripts(e.toString())
    }
    async function i(e, t, o, i, a) {
        const n = [];
        if (t && n.push(t),
        o && n.push(o),
        n.length && await Promise.all(n.map(r)),
        !self.ModuleFactory)
            throw new Error("ModuleFactory not set.");
        if (self.Module && a) {
            const e = self.Module;
            e.locateFile = a.locateFile,
            a.mainScriptUrlOrBlob && (e.mainScriptUrlOrBlob = a.mainScriptUrlOrBlob)
        }
        const s = await self.ModuleFactory(self.Module || a);
        return self.ModuleFactory = self.Module = void 0,
        new e(s,i)
    }
    e.GraphRunner = o,
    e.createMediaPipeLib = i,
    e.createGraphRunner = async function(e, t, r, a) {
        return i(o, e, t, r, a)
    }
}(graph_runner);
var register_model_resources_graph_service = {};
function SupportModelResourcesGraphService(e) {
    return class extends e {
        registerModelResourcesGraphService() {
            this.wasmModule._registerModelResourcesGraphService()
        }
    }
}
Object.defineProperty(register_model_resources_graph_service, "__esModule", {
    value: !0
}),
register_model_resources_graph_service.SupportModelResourcesGraphService = void 0,
register_model_resources_graph_service.SupportModelResourcesGraphService = SupportModelResourcesGraphService,
Object.defineProperty(task_runner, "__esModule", {
    value: !0
}),
task_runner.TaskRunner = task_runner.createTaskRunner = task_runner.CachedGraphRunner = void 0;
const inference_calculator_pb_1 = inference_calculator_pb
  , calculator_pb_1 = calculator_pb
  , acceleration_pb_1 = acceleration_pb
  , external_file_pb_1 = external_file_pb
  , graph_runner_1 = graph_runner
  , register_model_resources_graph_service_1 = register_model_resources_graph_service
  , NO_ASSETS = void 0
  , FREE_MEMORY_STREAM = "free_memory"
  , UNUSED_STREAM_SUFFIX = "_unused_out"
  , CachedGraphRunnerType = (0,
register_model_resources_graph_service_1.SupportModelResourcesGraphService)(graph_runner_1.GraphRunner);
class CachedGraphRunner extends CachedGraphRunnerType {
}
async function createTaskRunner(e, t, o, r) {
    const i = {
        locateFile: ()=>o.wasmBinaryPath.toString()
    }
      , a = await (0,
    graph_runner_1.createMediaPipeLib)(e, o.wasmLoaderPath, NO_ASSETS, t, i);
    return await a.setOptions(r),
    a
}
task_runner.CachedGraphRunner = CachedGraphRunner,
task_runner.createTaskRunner = createTaskRunner;
class TaskRunner {
    static async createInstance(e, t, o, r) {
        return createTaskRunner(e, t, o, r)
    }
    constructor(e) {
        this.graphRunner = e,
        this.processingErrors = [],
        this.latestOutputTimestamp = 0,
        this.graphRunner.setAutoRenderToScreen(!1)
    }
    applyOptions(e) {
        var t, o, r, i, a;
        const n = e.baseOptions || {};
        if ((null === (t = e.baseOptions) || void 0 === t ? void 0 : t.modelAssetBuffer) && (null === (o = e.baseOptions) || void 0 === o ? void 0 : o.modelAssetPath))
            throw new Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");
        if (!((null === (r = this.baseOptions.getModelAsset()) || void 0 === r ? void 0 : r.hasFileContent()) || (null === (i = e.baseOptions) || void 0 === i ? void 0 : i.modelAssetBuffer) || (null === (a = e.baseOptions) || void 0 === a ? void 0 : a.modelAssetPath)))
            throw new Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");
        return this.setAcceleration(n),
        n.modelAssetPath ? fetch(n.modelAssetPath.toString()).then((e=>{
            if (e.ok)
                return e.arrayBuffer();
            throw new Error(`Failed to fetch model: ${n.modelAssetPath} (${e.status})`)
        }
        )).then((e=>{
            this.setExternalFile(new Uint8Array(e)),
            this.refreshGraph(),
            this.onGraphRefreshed()
        }
        )) : (this.setExternalFile(n.modelAssetBuffer),
        this.refreshGraph(),
        this.onGraphRefreshed(),
        Promise.resolve())
    }
    onGraphRefreshed() {}
    getCalculatorGraphConfig() {
        let e;
        if (this.graphRunner.getCalculatorGraphConfig((t=>{
            e = calculator_pb_1.CalculatorGraphConfig.deserializeBinary(t)
        }
        )),
        !e)
            throw new Error("Failed to retrieve CalculatorGraphConfig");
        return e
    }
    setGraph(e, t) {
        this.graphRunner.attachErrorListener(((e,t)=>{
            this.processingErrors.push(new Error(t))
        }
        )),
        this.graphRunner.registerModelResourcesGraphService(),
        this.graphRunner.setGraph(e, t),
        this.keepaliveNode = void 0,
        this.handleErrors()
    }
    finishProcessing() {
        this.graphRunner.finishProcessing(),
        this.handleErrors()
    }
    setLatestOutputTimestamp(e) {
        this.latestOutputTimestamp = Math.max(this.latestOutputTimestamp, e)
    }
    getSynctheticTimestamp() {
        return this.latestOutputTimestamp + 1
    }
    handleErrors() {
        try {
            const e = this.processingErrors.length;
            if (1 === e)
                throw new Error(this.processingErrors[0].message);
            if (e > 1)
                throw new Error("Encountered multiple errors: " + this.processingErrors.map((e=>e.message)).join(", "))
        } finally {
            this.processingErrors = []
        }
    }
    setExternalFile(e) {
        const t = this.baseOptions.getModelAsset() || new external_file_pb_1.ExternalFile;
        e && t.setFileContent(e),
        this.baseOptions.setModelAsset(t)
    }
    setAcceleration(e) {
        let t = this.baseOptions.getAcceleration();
        t || (t = new acceleration_pb_1.Acceleration,
        t.setTflite(new inference_calculator_pb_1.InferenceCalculatorOptions.Delegate.TfLite)),
        "delegate"in e && ("GPU" === e.delegate ? t.setGpu(new inference_calculator_pb_1.InferenceCalculatorOptions.Delegate.Gpu) : t.setTflite(new inference_calculator_pb_1.InferenceCalculatorOptions.Delegate.TfLite)),
        this.baseOptions.setAcceleration(t)
    }
    addKeepaliveNode(e) {
        this.keepaliveNode = new calculator_pb_1.CalculatorGraphConfig.Node,
        this.keepaliveNode.setCalculator("PassThroughCalculator"),
        this.keepaliveNode.addInputStream(FREE_MEMORY_STREAM),
        this.keepaliveNode.addOutputStream(FREE_MEMORY_STREAM + UNUSED_STREAM_SUFFIX),
        e.addInputStream(FREE_MEMORY_STREAM),
        e.addNode(this.keepaliveNode)
    }
    keepStreamAlive(e) {
        this.keepaliveNode.addInputStream(e),
        this.keepaliveNode.addOutputStream(e + UNUSED_STREAM_SUFFIX)
    }
    freeKeepaliveStreams() {
        this.graphRunner.addBoolToStream(!0, FREE_MEMORY_STREAM, this.latestOutputTimestamp)
    }
    close() {
        this.keepaliveNode = void 0,
        this.graphRunner.closeGraph()
    }
}
task_runner.TaskRunner = TaskRunner,
Object.defineProperty(audio_task_runner, "__esModule", {
    value: !0
}),
audio_task_runner.AudioTaskRunner = void 0;
const task_runner_1 = task_runner;
class AudioTaskRunner extends task_runner_1.TaskRunner {
    constructor() {
        super(...arguments),
        this.defaultSampleRate = 48e3
    }
    static async createAudioInstance(e, t, o) {
        return task_runner_1.TaskRunner.createInstance(e, null, t, o)
    }
    setDefaultSampleRate(e) {
        this.defaultSampleRate = e
    }
    processAudioClip(e, t) {
        return this.process(e, null != t ? t : this.defaultSampleRate, this.getSynctheticTimestamp())
    }
}
audio_task_runner.AudioTaskRunner = AudioTaskRunner;
var classifier_options = {};
Object.defineProperty(classifier_options, "__esModule", {
    value: !0
}),
classifier_options.convertClassifierOptionsToProto = void 0;
const classifier_options_pb_1 = classifier_options_pb;
function convertClassifierOptionsToProto(e, t) {
    const o = t ? t.clone() : new classifier_options_pb_1.ClassifierOptions;
    return void 0 !== e.displayNamesLocale ? o.setDisplayNamesLocale(e.displayNamesLocale) : void 0 === e.displayNamesLocale && o.clearDisplayNamesLocale(),
    void 0 !== e.maxResults ? o.setMaxResults(e.maxResults) : "maxResults"in e && o.clearMaxResults(),
    void 0 !== e.scoreThreshold ? o.setScoreThreshold(e.scoreThreshold) : "scoreThreshold"in e && o.clearScoreThreshold(),
    void 0 !== e.categoryAllowlist ? o.setCategoryAllowlistList(e.categoryAllowlist) : "categoryAllowlist"in e && o.clearCategoryAllowlistList(),
    void 0 !== e.categoryDenylist ? o.setCategoryDenylistList(e.categoryDenylist) : "categoryDenylist"in e && o.clearCategoryDenylistList(),
    o
}
classifier_options.convertClassifierOptionsToProto = convertClassifierOptionsToProto;
var classifier_result = {};
Object.defineProperty(classifier_result, "__esModule", {
    value: !0
}),
classifier_result.convertFromClassificationResultProto = classifier_result.convertFromClassifications = void 0;
const DEFAULT_INDEX$1 = -1
  , DEFAULT_SCORE = 0;
function convertFromClassifications(e, t=DEFAULT_INDEX$1, o="") {
    return {
        categories: e.map((e=>{
            var t, o, r, i;
            return {
                index: null !== (t = e.getIndex()) && void 0 !== t ? t : DEFAULT_INDEX$1,
                score: null !== (o = e.getScore()) && void 0 !== o ? o : DEFAULT_SCORE,
                categoryName: null !== (r = e.getLabel()) && void 0 !== r ? r : "",
                displayName: null !== (i = e.getDisplayName()) && void 0 !== i ? i : ""
            }
        }
        )),
        headIndex: t,
        headName: o
    }
}
function convertFromClassificationsProto(e) {
    var t, o;
    return convertFromClassifications(null !== (o = null === (t = e.getClassificationList()) || void 0 === t ? void 0 : t.getClassificationList()) && void 0 !== o ? o : [], e.getHeadIndex(), e.getHeadName())
}
function convertFromClassificationResultProto(e) {
    const t = {
        classifications: e.getClassificationsList().map((e=>convertFromClassificationsProto(e)))
    };
    return e.hasTimestampMs() && (t.timestampMs = e.getTimestampMs()),
    t
}
classifier_result.convertFromClassifications = convertFromClassifications,
classifier_result.convertFromClassificationResultProto = convertFromClassificationResultProto;
var audio_classifier_options = {};
Object.defineProperty(audio_classifier_options, "__esModule", {
    value: !0
});
var audio_classifier_result = {};
Object.defineProperty(audio_classifier_result, "__esModule", {
    value: !0
}),
function(e) {
    var t = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(e, t, o, r) {
        void 0 === r && (r = o);
        var i = Object.getOwnPropertyDescriptor(t, o);
        i && !("get"in i ? !t.__esModule : i.writable || i.configurable) || (i = {
            enumerable: !0,
            get: function() {
                return t[o]
            }
        }),
        Object.defineProperty(e, r, i)
    }
    : function(e, t, o, r) {
        void 0 === r && (r = o),
        e[r] = t[o]
    }
    )
      , o = commonjsGlobal && commonjsGlobal.__exportStar || function(e, o) {
        for (var r in e)
            "default" === r || Object.prototype.hasOwnProperty.call(o, r) || t(o, e, r)
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.AudioClassifier = void 0;
    const r = calculator_pb
      , i = calculator_options_pb
      , a = audio_classifier_graph_options_pb
      , n = classifications_pb
      , s = base_options_pb
      , p = audio_task_runner
      , g = classifier_options
      , l = classifier_result
      , d = task_runner;
    o(audio_classifier_options, e),
    o(audio_classifier_result, e);
    const u = "audio_in"
      , c = "sample_rate"
      , f = "timestamped_classifications";
    class m extends p.AudioTaskRunner {
        static createFromOptions(e, t) {
            return p.AudioTaskRunner.createAudioInstance(m, e, t)
        }
        static createFromModelBuffer(e, t) {
            return p.AudioTaskRunner.createAudioInstance(m, e, {
                baseOptions: {
                    modelAssetBuffer: t
                }
            })
        }
        static createFromModelPath(e, t) {
            return p.AudioTaskRunner.createInstance(m, null, e, {
                baseOptions: {
                    modelAssetPath: t
                }
            })
        }
        constructor(e, t) {
            super(new d.CachedGraphRunner(e,t)),
            this.classificationResults = [],
            this.options = new a.AudioClassifierGraphOptions,
            this.options.setBaseOptions(new s.BaseOptions)
        }
        get baseOptions() {
            return this.options.getBaseOptions()
        }
        set baseOptions(e) {
            this.options.setBaseOptions(e)
        }
        setOptions(e) {
            return this.options.setClassifierOptions((0,
            g.convertClassifierOptionsToProto)(e, this.options.getClassifierOptions())),
            this.applyOptions(e)
        }
        classify(e, t) {
            return this.processAudioClip(e, t)
        }
        process(e, t, o) {
            return this.graphRunner.addDoubleToStream(t, c, o),
            this.graphRunner.addAudioToStreamWithShape(e, 1, e.length, u, o),
            this.classificationResults = [],
            this.finishProcessing(),
            [...this.classificationResults]
        }
        addJsAudioClassificationResults(e) {
            e.forEach((e=>{
                const t = n.ClassificationResult.deserializeBinary(e);
                this.classificationResults.push((0,
                l.convertFromClassificationResultProto)(t))
            }
            ))
        }
        refreshGraph() {
            const e = new r.CalculatorGraphConfig;
            e.addInputStream(u),
            e.addInputStream(c),
            e.addOutputStream(f);
            const t = new i.CalculatorOptions;
            t.setExtension(a.AudioClassifierGraphOptions.ext, this.options);
            const o = new r.CalculatorGraphConfig.Node;
            o.setCalculator("mediapipe.tasks.audio.audio_classifier.AudioClassifierGraph"),
            o.addInputStream("AUDIO:" + u),
            o.addInputStream("SAMPLE_RATE:" + c),
            o.addOutputStream("TIMESTAMPED_CLASSIFICATIONS:" + f),
            o.setOptions(t),
            e.addNode(o),
            this.graphRunner.attachProtoVectorListener(f, ((e,t)=>{
                this.addJsAudioClassificationResults(e),
                this.setLatestOutputTimestamp(t)
            }
            )),
            this.graphRunner.attachEmptyPacketListener(f, (e=>{
                this.setLatestOutputTimestamp(e)
            }
            ));
            const n = e.serializeBinary();
            this.setGraph(new Uint8Array(n), !0)
        }
    }
    e.AudioClassifier = m
}(audio_classifier);
var audio_embedder = {}
  , audio_embedder_graph_options_pb = {}
  , embedder_options_pb = {};
!function(e) {
    var t = googleProtobuf
      , o = t
      , r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof window && window || void 0 !== r && r || "undefined" != typeof self && self || function() {
        return this
    }
    .call(null) || Function("return this")();
    o.exportSymbol("proto.mediapipe.tasks.components.processors.proto.EmbedderOptions", null, r),
    proto.mediapipe.tasks.components.processors.proto.EmbedderOptions = function(e) {
        t.Message.initialize(this, e, 0, -1, null, null)
    }
    ,
    o.inherits(proto.mediapipe.tasks.components.processors.proto.EmbedderOptions, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.tasks.components.processors.proto.EmbedderOptions.displayName = "proto.mediapipe.tasks.components.processors.proto.EmbedderOptions"),
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.tasks.components.processors.proto.EmbedderOptions.prototype.toObject = function(e) {
        return proto.mediapipe.tasks.components.processors.proto.EmbedderOptions.toObject(e, this)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.EmbedderOptions.toObject = function(e, o) {
        var r, i = {
            l2Normalize: null == (r = t.Message.getBooleanField(o, 1)) ? void 0 : r,
            quantize: null == (r = t.Message.getBooleanField(o, 2)) ? void 0 : r
        };
        return e && (i.$jspbMessageInstance = o),
        i
    }
    ),
    proto.mediapipe.tasks.components.processors.proto.EmbedderOptions.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.tasks.components.processors.proto.EmbedderOptions;
        return proto.mediapipe.tasks.components.processors.proto.EmbedderOptions.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.EmbedderOptions.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = t.readBool();
                e.setL2Normalize(o);
                break;
            case 2:
                o = t.readBool();
                e.setQuantize(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.EmbedderOptions.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.tasks.components.processors.proto.EmbedderOptions.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.EmbedderOptions.serializeBinaryToWriter = function(e, o) {
        var r = void 0;
        null != (r = t.Message.getField(e, 1)) && o.writeBool(1, r),
        null != (r = t.Message.getField(e, 2)) && o.writeBool(2, r)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.EmbedderOptions.prototype.getL2Normalize = function() {
        return t.Message.getBooleanFieldWithDefault(this, 1, !1)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.EmbedderOptions.prototype.setL2Normalize = function(e) {
        return t.Message.setField(this, 1, e)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.EmbedderOptions.prototype.clearL2Normalize = function() {
        return t.Message.setField(this, 1, void 0)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.EmbedderOptions.prototype.hasL2Normalize = function() {
        return null != t.Message.getField(this, 1)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.EmbedderOptions.prototype.getQuantize = function() {
        return t.Message.getBooleanFieldWithDefault(this, 2, !1)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.EmbedderOptions.prototype.setQuantize = function(e) {
        return t.Message.setField(this, 2, e)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.EmbedderOptions.prototype.clearQuantize = function() {
        return t.Message.setField(this, 2, void 0)
    }
    ,
    proto.mediapipe.tasks.components.processors.proto.EmbedderOptions.prototype.hasQuantize = function() {
        return null != t.Message.getField(this, 2)
    }
    ,
    o.object.extend(e, proto.mediapipe.tasks.components.processors.proto)
}(embedder_options_pb),
function(e) {
    var t = googleProtobuf
      , o = t
      , r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof window && window || void 0 !== r && r || "undefined" != typeof self && self || function() {
        return this
    }
    .call(null) || Function("return this")()
      , i = calculator_pb;
    o.object.extend(proto, i);
    var a = calculator_options_pb;
    o.object.extend(proto, a);
    var n = embedder_options_pb;
    o.object.extend(proto, n);
    var s = base_options_pb;
    o.object.extend(proto, s),
    o.exportSymbol("proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions", null, r),
    proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions = function(e) {
        t.Message.initialize(this, e, 0, -1, null, null)
    }
    ,
    o.inherits(proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.displayName = "proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions"),
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.prototype.toObject = function(e) {
        return proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.toObject(e, this)
    }
    ,
    proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.toObject = function(e, t) {
        var o, r = {
            baseOptions: (o = t.getBaseOptions()) && s.BaseOptions.toObject(e, o),
            embedderOptions: (o = t.getEmbedderOptions()) && n.EmbedderOptions.toObject(e, o)
        };
        return e && (r.$jspbMessageInstance = t),
        r
    }
    ),
    proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions;
        return proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = new s.BaseOptions;
                t.readMessage(o, s.BaseOptions.deserializeBinaryFromReader),
                e.setBaseOptions(o);
                break;
            case 2:
                o = new n.EmbedderOptions;
                t.readMessage(o, n.EmbedderOptions.deserializeBinaryFromReader),
                e.setEmbedderOptions(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.serializeBinaryToWriter = function(e, t) {
        var o = void 0;
        null != (o = e.getBaseOptions()) && t.writeMessage(1, o, s.BaseOptions.serializeBinaryToWriter),
        null != (o = e.getEmbedderOptions()) && t.writeMessage(2, o, n.EmbedderOptions.serializeBinaryToWriter)
    }
    ,
    proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.ext = new t.ExtensionFieldInfo(487277289,{
        ext: 0
    },proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions,proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.toObject,0),
    a.CalculatorOptions.extensionsBinary[487277289] = new t.ExtensionFieldBinaryInfo(proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.ext,t.BinaryReader.prototype.readMessage,t.BinaryWriter.prototype.writeMessage,proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.serializeBinaryToWriter,proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.deserializeBinaryFromReader,!1),
    a.CalculatorOptions.extensions[487277289] = proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.ext,
    proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.prototype.getBaseOptions = function() {
        return t.Message.getWrapperField(this, s.BaseOptions, 1)
    }
    ,
    proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.prototype.setBaseOptions = function(e) {
        return t.Message.setWrapperField(this, 1, e)
    }
    ,
    proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.prototype.clearBaseOptions = function() {
        return this.setBaseOptions(void 0)
    }
    ,
    proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.prototype.hasBaseOptions = function() {
        return null != t.Message.getField(this, 1)
    }
    ,
    proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.prototype.getEmbedderOptions = function() {
        return t.Message.getWrapperField(this, n.EmbedderOptions, 2)
    }
    ,
    proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.prototype.setEmbedderOptions = function(e) {
        return t.Message.setWrapperField(this, 2, e)
    }
    ,
    proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.prototype.clearEmbedderOptions = function() {
        return this.setEmbedderOptions(void 0)
    }
    ,
    proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.prototype.hasEmbedderOptions = function() {
        return null != t.Message.getField(this, 2)
    }
    ,
    proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.ext = new t.ExtensionFieldInfo(487277289,{
        ext: 0
    },proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions,proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.toObject,0),
    a.CalculatorOptions.extensionsBinary[487277289] = new t.ExtensionFieldBinaryInfo(proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.ext,t.BinaryReader.prototype.readMessage,t.BinaryWriter.prototype.writeMessage,proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.serializeBinaryToWriter,proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.deserializeBinaryFromReader,!1),
    a.CalculatorOptions.extensions[487277289] = proto.mediapipe.tasks.audio.audio_embedder.proto.AudioEmbedderGraphOptions.ext,
    o.object.extend(e, proto.mediapipe.tasks.audio.audio_embedder.proto)
}(audio_embedder_graph_options_pb);
var embeddings_pb = {};
!function(e) {
    var t = googleProtobuf
      , o = t
      , r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof window && window || void 0 !== r && r || "undefined" != typeof self && self || function() {
        return this
    }
    .call(null) || Function("return this")();
    o.exportSymbol("proto.mediapipe.tasks.components.containers.proto.Embedding", null, r),
    o.exportSymbol("proto.mediapipe.tasks.components.containers.proto.Embedding.EmbeddingCase", null, r),
    o.exportSymbol("proto.mediapipe.tasks.components.containers.proto.EmbeddingResult", null, r),
    o.exportSymbol("proto.mediapipe.tasks.components.containers.proto.FloatEmbedding", null, r),
    o.exportSymbol("proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding", null, r),
    proto.mediapipe.tasks.components.containers.proto.FloatEmbedding = function(e) {
        t.Message.initialize(this, e, 0, -1, proto.mediapipe.tasks.components.containers.proto.FloatEmbedding.repeatedFields_, null)
    }
    ,
    o.inherits(proto.mediapipe.tasks.components.containers.proto.FloatEmbedding, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.tasks.components.containers.proto.FloatEmbedding.displayName = "proto.mediapipe.tasks.components.containers.proto.FloatEmbedding"),
    proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding = function(e) {
        t.Message.initialize(this, e, 0, -1, null, null)
    }
    ,
    o.inherits(proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding.displayName = "proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding"),
    proto.mediapipe.tasks.components.containers.proto.Embedding = function(e) {
        t.Message.initialize(this, e, 0, -1, null, proto.mediapipe.tasks.components.containers.proto.Embedding.oneofGroups_)
    }
    ,
    o.inherits(proto.mediapipe.tasks.components.containers.proto.Embedding, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.tasks.components.containers.proto.Embedding.displayName = "proto.mediapipe.tasks.components.containers.proto.Embedding"),
    proto.mediapipe.tasks.components.containers.proto.EmbeddingResult = function(e) {
        t.Message.initialize(this, e, 0, -1, proto.mediapipe.tasks.components.containers.proto.EmbeddingResult.repeatedFields_, null)
    }
    ,
    o.inherits(proto.mediapipe.tasks.components.containers.proto.EmbeddingResult, t.Message),
    o.DEBUG && !COMPILED && (proto.mediapipe.tasks.components.containers.proto.EmbeddingResult.displayName = "proto.mediapipe.tasks.components.containers.proto.EmbeddingResult"),
    proto.mediapipe.tasks.components.containers.proto.FloatEmbedding.repeatedFields_ = [1],
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.tasks.components.containers.proto.FloatEmbedding.prototype.toObject = function(e) {
        return proto.mediapipe.tasks.components.containers.proto.FloatEmbedding.toObject(e, this)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.FloatEmbedding.toObject = function(e, o) {
        var r, i = {
            valuesList: null == (r = t.Message.getRepeatedFloatingPointField(o, 1)) ? void 0 : r
        };
        return e && (i.$jspbMessageInstance = o),
        i
    }
    ),
    proto.mediapipe.tasks.components.containers.proto.FloatEmbedding.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.tasks.components.containers.proto.FloatEmbedding;
        return proto.mediapipe.tasks.components.containers.proto.FloatEmbedding.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.FloatEmbedding.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            if (1 === t.getFieldNumber())
                for (var o = t.isDelimited() ? t.readPackedFloat() : [t.readFloat()], r = 0; r < o.length; r++)
                    e.addValues(o[r]);
            else
                t.skipField()
        }
        return e
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.FloatEmbedding.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.tasks.components.containers.proto.FloatEmbedding.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.FloatEmbedding.serializeBinaryToWriter = function(e, t) {
        var o;
        (o = e.getValuesList()).length > 0 && t.writePackedFloat(1, o)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.FloatEmbedding.prototype.getValuesList = function() {
        return t.Message.getRepeatedFloatingPointField(this, 1)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.FloatEmbedding.prototype.setValuesList = function(e) {
        return t.Message.setField(this, 1, e || [])
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.FloatEmbedding.prototype.addValues = function(e, o) {
        return t.Message.addToRepeatedField(this, 1, e, o)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.FloatEmbedding.prototype.clearValuesList = function() {
        return this.setValuesList([])
    }
    ,
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding.prototype.toObject = function(e) {
        return proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding.toObject(e, this)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding.toObject = function(e, t) {
        var o = {
            values: t.getValues_asB64()
        };
        return e && (o.$jspbMessageInstance = t),
        o
    }
    ),
    proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding;
        return proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            if (1 === t.getFieldNumber()) {
                var o = t.readBytes();
                e.setValues(o)
            } else
                t.skipField()
        }
        return e
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding.serializeBinaryToWriter = function(e, o) {
        var r;
        null != (r = t.Message.getField(e, 1)) && o.writeBytes(1, r)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding.prototype.getValues = function() {
        return t.Message.getFieldWithDefault(this, 1, "")
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding.prototype.getValues_asB64 = function() {
        return t.Message.bytesAsB64(this.getValues())
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding.prototype.getValues_asU8 = function() {
        return t.Message.bytesAsU8(this.getValues())
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding.prototype.setValues = function(e) {
        return t.Message.setField(this, 1, e)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding.prototype.clearValues = function() {
        return t.Message.setField(this, 1, void 0)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding.prototype.hasValues = function() {
        return null != t.Message.getField(this, 1)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Embedding.oneofGroups_ = [[1, 2]],
    proto.mediapipe.tasks.components.containers.proto.Embedding.EmbeddingCase = {
        EMBEDDING_NOT_SET: 0,
        FLOAT_EMBEDDING: 1,
        QUANTIZED_EMBEDDING: 2
    },
    proto.mediapipe.tasks.components.containers.proto.Embedding.prototype.getEmbeddingCase = function() {
        return t.Message.computeOneofCase(this, proto.mediapipe.tasks.components.containers.proto.Embedding.oneofGroups_[0])
    }
    ,
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.tasks.components.containers.proto.Embedding.prototype.toObject = function(e) {
        return proto.mediapipe.tasks.components.containers.proto.Embedding.toObject(e, this)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Embedding.toObject = function(e, o) {
        var r, i = {
            floatEmbedding: (r = o.getFloatEmbedding()) && proto.mediapipe.tasks.components.containers.proto.FloatEmbedding.toObject(e, r),
            quantizedEmbedding: (r = o.getQuantizedEmbedding()) && proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding.toObject(e, r),
            headIndex: null == (r = t.Message.getField(o, 3)) ? void 0 : r,
            headName: null == (r = t.Message.getField(o, 4)) ? void 0 : r
        };
        return e && (i.$jspbMessageInstance = o),
        i
    }
    ),
    proto.mediapipe.tasks.components.containers.proto.Embedding.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.tasks.components.containers.proto.Embedding;
        return proto.mediapipe.tasks.components.containers.proto.Embedding.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Embedding.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = new proto.mediapipe.tasks.components.containers.proto.FloatEmbedding;
                t.readMessage(o, proto.mediapipe.tasks.components.containers.proto.FloatEmbedding.deserializeBinaryFromReader),
                e.setFloatEmbedding(o);
                break;
            case 2:
                o = new proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding;
                t.readMessage(o, proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding.deserializeBinaryFromReader),
                e.setQuantizedEmbedding(o);
                break;
            case 3:
                o = t.readInt32();
                e.setHeadIndex(o);
                break;
            case 4:
                o = t.readString();
                e.setHeadName(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Embedding.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.tasks.components.containers.proto.Embedding.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Embedding.serializeBinaryToWriter = function(e, o) {
        var r = void 0;
        null != (r = e.getFloatEmbedding()) && o.writeMessage(1, r, proto.mediapipe.tasks.components.containers.proto.FloatEmbedding.serializeBinaryToWriter),
        null != (r = e.getQuantizedEmbedding()) && o.writeMessage(2, r, proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding.serializeBinaryToWriter),
        null != (r = t.Message.getField(e, 3)) && o.writeInt32(3, r),
        null != (r = t.Message.getField(e, 4)) && o.writeString(4, r)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Embedding.prototype.getFloatEmbedding = function() {
        return t.Message.getWrapperField(this, proto.mediapipe.tasks.components.containers.proto.FloatEmbedding, 1)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Embedding.prototype.setFloatEmbedding = function(e) {
        return t.Message.setOneofWrapperField(this, 1, proto.mediapipe.tasks.components.containers.proto.Embedding.oneofGroups_[0], e)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Embedding.prototype.clearFloatEmbedding = function() {
        return this.setFloatEmbedding(void 0)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Embedding.prototype.hasFloatEmbedding = function() {
        return null != t.Message.getField(this, 1)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Embedding.prototype.getQuantizedEmbedding = function() {
        return t.Message.getWrapperField(this, proto.mediapipe.tasks.components.containers.proto.QuantizedEmbedding, 2)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Embedding.prototype.setQuantizedEmbedding = function(e) {
        return t.Message.setOneofWrapperField(this, 2, proto.mediapipe.tasks.components.containers.proto.Embedding.oneofGroups_[0], e)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Embedding.prototype.clearQuantizedEmbedding = function() {
        return this.setQuantizedEmbedding(void 0)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Embedding.prototype.hasQuantizedEmbedding = function() {
        return null != t.Message.getField(this, 2)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Embedding.prototype.getHeadIndex = function() {
        return t.Message.getFieldWithDefault(this, 3, 0)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Embedding.prototype.setHeadIndex = function(e) {
        return t.Message.setField(this, 3, e)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Embedding.prototype.clearHeadIndex = function() {
        return t.Message.setField(this, 3, void 0)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Embedding.prototype.hasHeadIndex = function() {
        return null != t.Message.getField(this, 3)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Embedding.prototype.getHeadName = function() {
        return t.Message.getFieldWithDefault(this, 4, "")
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Embedding.prototype.setHeadName = function(e) {
        return t.Message.setField(this, 4, e)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Embedding.prototype.clearHeadName = function() {
        return t.Message.setField(this, 4, void 0)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.Embedding.prototype.hasHeadName = function() {
        return null != t.Message.getField(this, 4)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.EmbeddingResult.repeatedFields_ = [1],
    t.Message.GENERATE_TO_OBJECT && (proto.mediapipe.tasks.components.containers.proto.EmbeddingResult.prototype.toObject = function(e) {
        return proto.mediapipe.tasks.components.containers.proto.EmbeddingResult.toObject(e, this)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.EmbeddingResult.toObject = function(e, o) {
        var r, i = {
            embeddingsList: t.Message.toObjectList(o.getEmbeddingsList(), proto.mediapipe.tasks.components.containers.proto.Embedding.toObject, e),
            timestampMs: null == (r = t.Message.getField(o, 2)) ? void 0 : r
        };
        return e && (i.$jspbMessageInstance = o),
        i
    }
    ),
    proto.mediapipe.tasks.components.containers.proto.EmbeddingResult.deserializeBinary = function(e) {
        var o = new t.BinaryReader(e)
          , r = new proto.mediapipe.tasks.components.containers.proto.EmbeddingResult;
        return proto.mediapipe.tasks.components.containers.proto.EmbeddingResult.deserializeBinaryFromReader(r, o)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.EmbeddingResult.deserializeBinaryFromReader = function(e, t) {
        for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
            case 1:
                var o = new proto.mediapipe.tasks.components.containers.proto.Embedding;
                t.readMessage(o, proto.mediapipe.tasks.components.containers.proto.Embedding.deserializeBinaryFromReader),
                e.addEmbeddings(o);
                break;
            case 2:
                o = t.readInt64();
                e.setTimestampMs(o);
                break;
            default:
                t.skipField()
            }
        }
        return e
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.EmbeddingResult.prototype.serializeBinary = function() {
        var e = new t.BinaryWriter;
        return proto.mediapipe.tasks.components.containers.proto.EmbeddingResult.serializeBinaryToWriter(this, e),
        e.getResultBuffer()
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.EmbeddingResult.serializeBinaryToWriter = function(e, o) {
        var r = void 0;
        (r = e.getEmbeddingsList()).length > 0 && o.writeRepeatedMessage(1, r, proto.mediapipe.tasks.components.containers.proto.Embedding.serializeBinaryToWriter),
        null != (r = t.Message.getField(e, 2)) && o.writeInt64(2, r)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.EmbeddingResult.prototype.getEmbeddingsList = function() {
        return t.Message.getRepeatedWrapperField(this, proto.mediapipe.tasks.components.containers.proto.Embedding, 1)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.EmbeddingResult.prototype.setEmbeddingsList = function(e) {
        return t.Message.setRepeatedWrapperField(this, 1, e)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.EmbeddingResult.prototype.addEmbeddings = function(e, o) {
        return t.Message.addToRepeatedWrapperField(this, 1, e, proto.mediapipe.tasks.components.containers.proto.Embedding, o)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.EmbeddingResult.prototype.clearEmbeddingsList = function() {
        return this.setEmbeddingsList([])
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.EmbeddingResult.prototype.getTimestampMs = function() {
        return t.Message.getFieldWithDefault(this, 2, 0)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.EmbeddingResult.prototype.setTimestampMs = function(e) {
        return t.Message.setField(this, 2, e)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.EmbeddingResult.prototype.clearTimestampMs = function() {
        return t.Message.setField(this, 2, void 0)
    }
    ,
    proto.mediapipe.tasks.components.containers.proto.EmbeddingResult.prototype.hasTimestampMs = function() {
        return null != t.Message.getField(this, 2)
    }
    ,
    o.object.extend(e, proto.mediapipe.tasks.components.containers.proto)
}(embeddings_pb);
var embedder_options = {};
Object.defineProperty(embedder_options, "__esModule", {
    value: !0
}),
embedder_options.convertEmbedderOptionsToProto = void 0;
const embedder_options_pb_1 = embedder_options_pb;
function convertEmbedderOptionsToProto(e, t) {
    const o = t ? t.clone() : new embedder_options_pb_1.EmbedderOptions;
    return void 0 !== e.l2Normalize ? o.setL2Normalize(e.l2Normalize) : "l2Normalize"in e && o.clearL2Normalize(),
    void 0 !== e.quantize ? o.setQuantize(e.quantize) : "quantize"in e && o.clearQuantize(),
    o
}
embedder_options.convertEmbedderOptionsToProto = convertEmbedderOptionsToProto;
var embedder_result = {};
Object.defineProperty(embedder_result, "__esModule", {
    value: !0
}),
embedder_result.convertFromEmbeddingResultProto = void 0;
const DEFAULT_INDEX = -1;
function convertFromEmbeddingsProto(e) {
    var t, o, r, i;
    const a = {
        headIndex: null !== (t = e.getHeadIndex()) && void 0 !== t ? t : DEFAULT_INDEX,
        headName: null !== (o = e.getHeadName()) && void 0 !== o ? o : ""
    };
    if (e.hasFloatEmbedding())
        a.floatEmbedding = e.getFloatEmbedding().getValuesList();
    else {
        const t = null !== (i = null === (r = e.getQuantizedEmbedding()) || void 0 === r ? void 0 : r.getValues()) && void 0 !== i ? i : "";
        a.quantizedEmbedding = "string" == typeof t ? Uint8Array.from(atob(t), (e=>e.charCodeAt(0))) : t
    }
    return a
}
function convertFromEmbeddingResultProto(e) {
    return {
        embeddings: e.getEmbeddingsList().map((e=>convertFromEmbeddingsProto(e))),
        timestampMs: e.getTimestampMs()
    }
}
embedder_result.convertFromEmbeddingResultProto = convertFromEmbeddingResultProto;
var audio_embedder_options = {};
Object.defineProperty(audio_embedder_options, "__esModule", {
    value: !0
});
var audio_embedder_result = {};
Object.defineProperty(audio_embedder_result, "__esModule", {
    value: !0
}),
function(e) {
    var t = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(e, t, o, r) {
        void 0 === r && (r = o);
        var i = Object.getOwnPropertyDescriptor(t, o);
        i && !("get"in i ? !t.__esModule : i.writable || i.configurable) || (i = {
            enumerable: !0,
            get: function() {
                return t[o]
            }
        }),
        Object.defineProperty(e, r, i)
    }
    : function(e, t, o, r) {
        void 0 === r && (r = o),
        e[r] = t[o]
    }
    )
      , o = commonjsGlobal && commonjsGlobal.__exportStar || function(e, o) {
        for (var r in e)
            "default" === r || Object.prototype.hasOwnProperty.call(o, r) || t(o, e, r)
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.AudioEmbedder = void 0;
    const r = calculator_pb
      , i = calculator_options_pb
      , a = audio_embedder_graph_options_pb
      , n = embeddings_pb
      , s = base_options_pb
      , p = audio_task_runner
      , g = embedder_options
      , l = embedder_result
      , d = task_runner;
    o(audio_embedder_options, e),
    o(audio_embedder_result, e);
    const u = "audio_in"
      , c = "sample_rate"
      , f = "embeddings_out"
      , m = "timestamped_embeddings_out";
    class h extends p.AudioTaskRunner {
        static createFromOptions(e, t) {
            return p.AudioTaskRunner.createAudioInstance(h, e, t)
        }
        static createFromModelBuffer(e, t) {
            return p.AudioTaskRunner.createAudioInstance(h, e, {
                baseOptions: {
                    modelAssetBuffer: t
                }
            })
        }
        static createFromModelPath(e, t) {
            return p.AudioTaskRunner.createAudioInstance(h, e, {
                baseOptions: {
                    modelAssetPath: t
                }
            })
        }
        constructor(e, t) {
            super(new d.CachedGraphRunner(e,t)),
            this.embeddingResults = [],
            this.options = new a.AudioEmbedderGraphOptions,
            this.options.setBaseOptions(new s.BaseOptions)
        }
        get baseOptions() {
            return this.options.getBaseOptions()
        }
        set baseOptions(e) {
            this.options.setBaseOptions(e)
        }
        setOptions(e) {
            return this.options.setEmbedderOptions((0,
            g.convertEmbedderOptionsToProto)(e, this.options.getEmbedderOptions())),
            this.applyOptions(e)
        }
        embed(e, t) {
            return this.processAudioClip(e, t)
        }
        process(e, t, o) {
            return this.graphRunner.addDoubleToStream(t, c, o),
            this.graphRunner.addAudioToStreamWithShape(e, 1, e.length, u, o),
            this.embeddingResults = [],
            this.finishProcessing(),
            this.embeddingResults
        }
        refreshGraph() {
            const e = new r.CalculatorGraphConfig;
            e.addInputStream(u),
            e.addInputStream(c),
            e.addOutputStream(f),
            e.addOutputStream(m);
            const t = new i.CalculatorOptions;
            t.setExtension(a.AudioEmbedderGraphOptions.ext, this.options);
            const o = new r.CalculatorGraphConfig.Node;
            o.setCalculator("mediapipe.tasks.audio.audio_embedder.AudioEmbedderGraph"),
            o.addInputStream("AUDIO:" + u),
            o.addInputStream("SAMPLE_RATE:" + c),
            o.addOutputStream("EMBEDDINGS:" + f),
            o.addOutputStream("TIMESTAMPED_EMBEDDINGS:" + m),
            o.setOptions(t),
            e.addNode(o),
            this.graphRunner.attachProtoListener(f, ((e,t)=>{
                const o = n.EmbeddingResult.deserializeBinary(e);
                this.embeddingResults.push((0,
                l.convertFromEmbeddingResultProto)(o)),
                this.setLatestOutputTimestamp(t)
            }
            )),
            this.graphRunner.attachEmptyPacketListener(f, (e=>{
                this.setLatestOutputTimestamp(e)
            }
            )),
            this.graphRunner.attachProtoVectorListener(m, ((e,t)=>{
                for (const t of e) {
                    const e = n.EmbeddingResult.deserializeBinary(t);
                    this.embeddingResults.push((0,
                    l.convertFromEmbeddingResultProto)(e))
                }
                this.setLatestOutputTimestamp(t)
            }
            )),
            this.graphRunner.attachEmptyPacketListener(m, (e=>{
                this.setLatestOutputTimestamp(e)
            }
            ));
            const s = e.serializeBinary();
            this.setGraph(new Uint8Array(s), !0)
        }
    }
    e.AudioEmbedder = h
}(audio_embedder);
var fileset_resolver = {};
let supportsSimd;
Object.defineProperty(fileset_resolver, "__esModule", {
    value: !0
}),
fileset_resolver.FilesetResolver = void 0;
const WASM_SIMD_CHECK = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]);
async function isSimdSupported() {
    if (void 0 === supportsSimd)
        try {
            await WebAssembly.instantiate(WASM_SIMD_CHECK),
            supportsSimd = !0
        } catch (e) {
            supportsSimd = !1
        }
    return supportsSimd
}
async function createFileset(e, t="") {
    const o = await isSimdSupported() ? "wasm_internal" : "wasm_nosimd_internal";
    return {
        wasmLoaderPath: `${t}/${e}_${o}.js`,
        wasmBinaryPath: `${t}/${e}_${o}.wasm`
    }
}
class FilesetResolver$1 {
    static isSimdSupported() {
        return isSimdSupported()
    }
    static forAudioTasks(e) {
        return createFileset("audio", e)
    }
    static forTextTasks(e) {
        return createFileset("text", e)
    }
    static forVisionTasks(e) {
        return createFileset("vision", e)
    }
}
fileset_resolver.FilesetResolver = FilesetResolver$1,
Object.defineProperty(audio, "__esModule", {
    value: !0
});
var FilesetResolver_1 = audio.FilesetResolver = AudioEmbedder_1 = audio.AudioEmbedder = AudioClassifier_1 = audio.AudioClassifier = void 0;
const audio_classifier_1 = audio_classifier
  , audio_embedder_1 = audio_embedder
  , fileset_resolver_1 = fileset_resolver
  , AudioClassifier = audio_classifier_1.AudioClassifier;
var AudioClassifier_1 = audio.AudioClassifier = AudioClassifier;
const AudioEmbedder = audio_embedder_1.AudioEmbedder;
var AudioEmbedder_1 = audio.AudioEmbedder = AudioEmbedder;
const FilesetResolver = fileset_resolver_1.FilesetResolver;
FilesetResolver_1 = audio.FilesetResolver = FilesetResolver;
export {AudioClassifier_1 as AudioClassifier, AudioEmbedder_1 as AudioEmbedder, FilesetResolver_1 as FilesetResolver, audio as default};
