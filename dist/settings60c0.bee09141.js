// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"wp-content/plugins/revslider/rs-plugin/css/settings60c0.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../font/revicons90c6.eot":[["revicons90c6.128b8c8b.eot","wp-content/plugins/revslider/rs-plugin/font/revicons90c6.eot"],"wp-content/plugins/revslider/rs-plugin/font/revicons90c6.eot"],"./../font/revicons90c6.woff":[["revicons90c6.c89e6c3d.woff","wp-content/plugins/revslider/rs-plugin/font/revicons90c6.woff"],"wp-content/plugins/revslider/rs-plugin/font/revicons90c6.woff"],"./../font/revicons90c6.ttf":[["revicons90c6.5814f067.ttf","wp-content/plugins/revslider/rs-plugin/font/revicons90c6.ttf"],"wp-content/plugins/revslider/rs-plugin/font/revicons90c6.ttf"],"./../font/revicons90c6.svg":[["revicons90c6.ce2bd2fa.svg","wp-content/plugins/revslider/rs-plugin/font/revicons90c6.svg"],"wp-content/plugins/revslider/rs-plugin/font/revicons90c6.svg"],"./../assets/gridtile.png":[["gridtile.749e50a1.png","wp-content/plugins/revslider/rs-plugin/assets/gridtile.png"],"wp-content/plugins/revslider/rs-plugin/assets/gridtile.png"],"./../assets/gridtile_white.png":[["gridtile_white.2e0a6167.png","wp-content/plugins/revslider/rs-plugin/assets/gridtile_white.png"],"wp-content/plugins/revslider/rs-plugin/assets/gridtile_white.png"],"./../assets/gridtile_3x3.png":[["gridtile_3x3.b3e64acc.png","wp-content/plugins/revslider/rs-plugin/assets/gridtile_3x3.png"],"wp-content/plugins/revslider/rs-plugin/assets/gridtile_3x3.png"],"./../assets/gridtile_3x3_white.png":[["gridtile_3x3_white.bad87e86.png","wp-content/plugins/revslider/rs-plugin/assets/gridtile_3x3_white.png"],"wp-content/plugins/revslider/rs-plugin/assets/gridtile_3x3_white.png"],"./../assets/shadow1.png":[["shadow1.c9449775.png","wp-content/plugins/revslider/rs-plugin/assets/shadow1.png"],"wp-content/plugins/revslider/rs-plugin/assets/shadow1.png"],"./../assets/shadow2.png":[["shadow2.df2a501e.png","wp-content/plugins/revslider/rs-plugin/assets/shadow2.png"],"wp-content/plugins/revslider/rs-plugin/assets/shadow2.png"],"./../assets/shadow3.png":[["shadow3.1ee95db9.png","wp-content/plugins/revslider/rs-plugin/assets/shadow3.png"],"wp-content/plugins/revslider/rs-plugin/assets/shadow3.png"],"./../images/gradient/g30.png":[["g30.2373e3d4.png","wp-content/plugins/revslider/rs-plugin/images/gradient/g30.png"],"wp-content/plugins/revslider/rs-plugin/images/gradient/g30.png"],"./../images/gradient/g40.png":[["g40.22912135.png","wp-content/plugins/revslider/rs-plugin/images/gradient/g40.png"],"wp-content/plugins/revslider/rs-plugin/images/gradient/g40.png"],"./../assets/boxed_bgtile.png":[["boxed_bgtile.720c9cc8.png","wp-content/plugins/revslider/rs-plugin/assets/boxed_bgtile.png"],"wp-content/plugins/revslider/rs-plugin/assets/boxed_bgtile.png"],"./../assets/navigdots_bgtile.png":[["navigdots_bgtile.b3afc69b.png","wp-content/plugins/revslider/rs-plugin/assets/navigdots_bgtile.png"],"wp-content/plugins/revslider/rs-plugin/assets/navigdots_bgtile.png"],"./../assets/bullet.png":[["bullet.ede746f0.png","wp-content/plugins/revslider/rs-plugin/assets/bullet.png"],"wp-content/plugins/revslider/rs-plugin/assets/bullet.png"],"./../assets/bullets.png":[["bullets.6880af7a.png","wp-content/plugins/revslider/rs-plugin/assets/bullets.png"],"wp-content/plugins/revslider/rs-plugin/assets/bullets.png"],"./../assets/bullets2.png":[["bullets2.64dac6fc.png","wp-content/plugins/revslider/rs-plugin/assets/bullets2.png"],"wp-content/plugins/revslider/rs-plugin/assets/bullets2.png"],"./../assets/bullet_boxed.png":[["bullet_boxed.a70adaaa.png","wp-content/plugins/revslider/rs-plugin/assets/bullet_boxed.png"],"wp-content/plugins/revslider/rs-plugin/assets/bullet_boxed.png"],"./../assets/navigdots.png":[["navigdots.8c969823.png","wp-content/plugins/revslider/rs-plugin/assets/navigdots.png"],"wp-content/plugins/revslider/rs-plugin/assets/navigdots.png"],"./../assets/large_left.png":[["large_left.37126b70.png","wp-content/plugins/revslider/rs-plugin/assets/large_left.png"],"wp-content/plugins/revslider/rs-plugin/assets/large_left.png"],"./../assets/large_right.png":[["large_right.ecdb330f.png","wp-content/plugins/revslider/rs-plugin/assets/large_right.png"],"wp-content/plugins/revslider/rs-plugin/assets/large_right.png"],"./../assets/small_left.png":[["small_left.996e9da6.png","wp-content/plugins/revslider/rs-plugin/assets/small_left.png"],"wp-content/plugins/revslider/rs-plugin/assets/small_left.png"],"./../assets/small_right.png":[["small_right.0ce3dd8a.png","wp-content/plugins/revslider/rs-plugin/assets/small_right.png"],"wp-content/plugins/revslider/rs-plugin/assets/small_right.png"],"./../assets/arrow_left.png":[["arrow_left.645b65bd.png","wp-content/plugins/revslider/rs-plugin/assets/arrow_left.png"],"wp-content/plugins/revslider/rs-plugin/assets/arrow_left.png"],"./../assets/arrow_right.png":[["arrow_right.58ce5c8b.png","wp-content/plugins/revslider/rs-plugin/assets/arrow_right.png"],"wp-content/plugins/revslider/rs-plugin/assets/arrow_right.png"],"./../assets/small_left_boxed.png":[["small_left_boxed.73909318.png","wp-content/plugins/revslider/rs-plugin/assets/small_left_boxed.png"],"wp-content/plugins/revslider/rs-plugin/assets/small_left_boxed.png"],"./../assets/small_right_boxed.png":[["small_right_boxed.775fd2e5.png","wp-content/plugins/revslider/rs-plugin/assets/small_right_boxed.png"],"wp-content/plugins/revslider/rs-plugin/assets/small_right_boxed.png"],"./../assets/arrowleft.png":[["arrowleft.18bf3707.png","wp-content/plugins/revslider/rs-plugin/assets/arrowleft.png"],"wp-content/plugins/revslider/rs-plugin/assets/arrowleft.png"],"./../assets/arrowright.png":[["arrowright.205ee47b.png","wp-content/plugins/revslider/rs-plugin/assets/arrowright.png"],"wp-content/plugins/revslider/rs-plugin/assets/arrowright.png"],"./../assets/arrow_left2.png":[["arrow_left2.7d764e31.png","wp-content/plugins/revslider/rs-plugin/assets/arrow_left2.png"],"wp-content/plugins/revslider/rs-plugin/assets/arrow_left2.png"],"./../assets/arrow_right2.png":[["arrow_right2.d3096d72.png","wp-content/plugins/revslider/rs-plugin/assets/arrow_right2.png"],"wp-content/plugins/revslider/rs-plugin/assets/arrow_right2.png"],"./../assets/timer.png":[["timer.2a89b8f1.png","wp-content/plugins/revslider/rs-plugin/assets/timer.png"],"wp-content/plugins/revslider/rs-plugin/assets/timer.png"],"./../assets/coloredbg.png":[["coloredbg.665ae552.png","wp-content/plugins/revslider/rs-plugin/assets/coloredbg.png"],"wp-content/plugins/revslider/rs-plugin/assets/coloredbg.png"],"./../assets/loader.gif":[["loader.f4b2298f.gif","wp-content/plugins/revslider/rs-plugin/assets/loader.gif"],"wp-content/plugins/revslider/rs-plugin/assets/loader.gif"],"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63999" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"node_modules/parcel/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"node_modules/parcel/src/builtins/bundle-url.js"}],"node_modules/parcel/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;

    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };

    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("node_modules/parcel/src/builtins/bundle-loader.js");b.register("js",require("node_modules/parcel/src/builtins/loaders/browser/js-loader.js"));b.load([]);
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/settings60c0.bee09141.js.map