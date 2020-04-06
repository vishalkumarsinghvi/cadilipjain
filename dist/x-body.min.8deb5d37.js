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
})({"wp-content/themes/x/framework/js/dist/site/x-body.min.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (e) {
  e.fn.hoverIntent = function (t, n, r) {
    var i = {
      interval: 100,
      sensitivity: 7,
      timeout: 0
    };
    _typeof(t) == "object" ? i = e.extend(i, t) : e.isFunction(n) ? i = e.extend(i, {
      over: t,
      out: n,
      selector: r
    }) : i = e.extend(i, {
      over: t,
      out: t,
      selector: n
    });

    var s,
        o,
        u,
        a,
        f = function f(e) {
      s = e.pageX;
      o = e.pageY;
    },
        l = function l(t, n) {
      n.hoverIntent_t = clearTimeout(n.hoverIntent_t);

      if (Math.abs(u - s) + Math.abs(a - o) < i.sensitivity) {
        e(n).off("mousemove.hoverIntent", f);
        n.hoverIntent_s = 1;
        return i.over.apply(n, [t]);
      }

      u = s;
      a = o;
      n.hoverIntent_t = setTimeout(function () {
        l(t, n);
      }, i.interval);
    },
        c = function c(e, t) {
      t.hoverIntent_t = clearTimeout(t.hoverIntent_t);
      t.hoverIntent_s = 0;
      return i.out.apply(t, [e]);
    },
        h = function h(t) {
      var n = jQuery.extend({}, t),
          r = this;
      r.hoverIntent_t && (r.hoverIntent_t = clearTimeout(r.hoverIntent_t));

      if (t.type == "mouseenter") {
        u = n.pageX;
        a = n.pageY;
        e(r).on("mousemove.hoverIntent", f);
        r.hoverIntent_s != 1 && (r.hoverIntent_t = setTimeout(function () {
          l(n, r);
        }, i.interval));
      } else {
        e(r).off("mousemove.hoverIntent", f);
        r.hoverIntent_s == 1 && (r.hoverIntent_t = setTimeout(function () {
          c(n, r);
        }, i.timeout));
      }
    };

    return this.on({
      "mouseenter.hoverIntent": h,
      "mouseleave.hoverIntent": h
    }, i.selector);
  };
})(jQuery);

(function (e) {
  e.fn.superfish = function (t) {
    var n = e.fn.superfish,
        r = n.c,
        i = e('<span class="' + r.arrowClass + '"> &#187;</span>'),
        s = function s(t) {
      var n = e(this),
          r = u(n);
      clearTimeout(r.sfTimer);
      n.showSuperfishUl().siblings().hideSuperfishUl();
    },
        o = function o() {
      var t = e(this),
          r = u(t),
          i = n.op;
      clearTimeout(r.sfTimer);
      r.sfTimer = setTimeout(function () {
        i.retainPath = e.inArray(t[0], i.$path) > -1;
        t.hideSuperfishUl();

        if (i.$path.length && t.parents("li." + i.hoverClass).length < 1) {
          i.onIdle.call(this);
          s.call(i.$path);
        }
      }, i.delay);
    },
        u = function u(t) {
      t.hasClass(r.menuClass) && e.error("Superfish requires you to update to a version of hoverIntent that supports event-delegation, such as this one: https://github.com/joeldbirch/onHoverIntent");
      var i = t.closest("." + r.menuClass)[0];
      n.op = n.o[i.serial];
      return i;
    },
        a = function a(t) {
      var r = "li:has(ul)";
      if (e.fn.hoverIntent && !n.op.disableHI) t.hoverIntent(s, o, r);else {
        t.on("mouseenter", r, s);
        t.on("mouseleave", r, o);
      }
      t.on("focusin", r, s);
      t.on("focusout", r, o);
    },
        f = function f(e) {
      e.addClass(r.anchorClass).append(i.clone());
    };

    return this.addClass(r.menuClass).each(function () {
      var i = this.serial = n.o.length,
          s = e.extend({}, n.defaults, t),
          o = e(this);
      s.$path = o.find("li." + s.pathClass).slice(0, s.pathLevels).each(function () {
        e(this).addClass(s.hoverClass + " " + r.bcClass).filter("li:has(ul)").removeClass(s.pathClass);
      });
      n.o[i] = n.op = s;
      a(o);
      o.find("li:has(ul)").each(function () {
        s.autoArrows && f(e(">a:first-child", this));
      }).not("." + r.bcClass).hideSuperfishUl();
      s.onInit.call(this);
    });
  };

  var t = e.fn.superfish;
  t.o = [];
  t.op = {};
  t.c = {
    bcClass: "sf-breadcrumb",
    menuClass: "sf-js-enabled",
    anchorClass: "sf-with-ul",
    arrowClass: "sf-sub-indicator"
  };
  t.defaults = {
    hoverClass: "sfHover",
    pathClass: "overideThisToUse",
    pathLevels: 1,
    delay: 800,
    animation: {
      opacity: "show"
    },
    speed: "normal",
    autoArrows: !0,
    disableHI: !1,
    onInit: function onInit() {},
    onBeforeShow: function onBeforeShow() {},
    onShow: function onShow() {},
    onHide: function onHide() {},
    onIdle: function onIdle() {}
  };
  e.fn.extend({
    hideSuperfishUl: function hideSuperfishUl() {
      var n = t.op,
          r = n.retainPath === !0 ? n.$path : "";
      n.retainPath = !1;
      var i = e("li." + n.hoverClass, this).add(this).not(r).removeClass(n.hoverClass).find(">ul").hide().css("visibility", "hidden");
      n.onHide.call(i);
      return this;
    },
    showSuperfishUl: function showSuperfishUl() {
      var e = t.op,
          n = this.addClass(e.hoverClass).find(">ul:hidden").css("visibility", "visible");
      e.onBeforeShow.call(n);
      n.animate(e.animation, e.speed, function () {
        e.onShow.call(n);
      });
      return this;
    }
  });
})(jQuery);

+function (e) {
  "use strict";

  function t(n, r) {
    var i,
        s = e.proxy(this.process, this);
    this.$element = e(n).is("body") ? e(window) : e(n);
    this.$body = e("body");
    this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", s);
    this.options = e.extend({}, t.DEFAULTS, r);
    this.selector = (this.options.target || (i = e(n).attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "") || "") + " .x-nav li > a";
    this.offsets = e([]);
    this.targets = e([]);
    this.activeTarget = null;
    this.refresh();
    this.process();
  }

  t.DEFAULTS = {
    offset: 10
  };

  t.prototype.refresh = function () {
    var t = this.$element[0] == window ? "offset" : "position";
    this.offsets = e([]);
    this.targets = e([]);
    var n = this,
        r = this.$body.find(this.selector).map(function () {
      var r = e(this),
          i = r.data("target") || r.attr("href"),
          s = /^#\w/.test(i) && e(i);
      return s && s.length && [[s[t]().top + (!e.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), i]] || null;
    }).sort(function (e, t) {
      return e[0] - t[0];
    }).each(function () {
      n.offsets.push(this[0]);
      n.targets.push(this[1]);
    });
  };

  t.prototype.process = function () {
    var e = this.$scrollElement.scrollTop() + this.options.offset,
        t = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
        n = t - this.$scrollElement.height(),
        r = this.offsets,
        i = this.targets,
        s = this.activeTarget,
        o;
    if (e >= n) return s != (o = i.last()[0]) && this.activate(o);

    for (o = r.length; o--;) {
      s != i[o] && e >= r[o] && (!r[o + 1] || e <= r[o + 1]) && this.activate(i[o]);
    }
  };

  t.prototype.activate = function (t) {
    this.activeTarget = t;
    e(this.selector).parents(".current-menu-item").removeClass("current-menu-item");
    var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
        r = e(n).parents("li").addClass("current-menu-item");
    r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("current-menu-item"));
    r.trigger("activate.bs.scrollspy");
  };

  var n = e.fn.scrollspy;

  e.fn.scrollspy = function (n) {
    return this.each(function () {
      var r = e(this),
          i = r.data("bs.scrollspy"),
          s = _typeof(n) == "object" && n;
      i || r.data("bs.scrollspy", i = new t(this, s));
      typeof n == "string" && i[n]();
    });
  };

  e.fn.scrollspy.Constructor = t;

  e.fn.scrollspy.noConflict = function () {
    e.fn.scrollspy = n;
    return this;
  };

  e(window).on("load", function () {
    e('[data-spy="scroll"]').each(function () {
      var t = e(this);
      t.scrollspy(t.data());
    });
  });
}(jQuery);
jQuery(document).ready(function (e) {
  var t = e("body"),
      n = t.outerHeight(),
      r = e("#wpadminbar").outerHeight(),
      i = e(".x-navbar").outerHeight();
  e('.x-nav-scrollspy > li > a[href^="#"]').click(function (t) {
    t.preventDefault();
    var n = e(this).attr("href");
    e("html, body").animate({
      scrollTop: e(n).offset().top - r - i + 1
    }, 850, "easeInOutExpo");
  });
  t.scrollspy({
    target: ".x-nav-collapse",
    offset: r + i
  });
  e(window).resize(function () {
    t.scrollspy("refresh");
  });
  var s = 0,
      o = setInterval(function () {
    s += 1;
    var e = t.outerHeight();
    e !== n && t.scrollspy("refresh");
    s === 10 && clearInterval(o);
  }, 500);
});

(function (e, t, n) {
  "use strict";

  var r = e.document,
      i = r.documentElement,
      s = e.Modernizr,
      o = function o(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  },
      u = "Moz Webkit O Ms".split(" "),
      a = function a(e) {
    var t = i.style,
        n;
    if (typeof t[e] == "string") return e;
    e = o(e);

    for (var r = 0, s = u.length; r < s; r++) {
      n = u[r] + e;
      if (typeof t[n] == "string") return n;
    }
  },
      f = a("transform"),
      l = a("transitionProperty"),
      c = {
    csstransforms: function csstransforms() {
      return !!f;
    },
    csstransforms3d: function csstransforms3d() {
      var e = !!a("perspective");

      if (e && "webkitPerspective" in i.style) {
        var n = t("<style>@media (transform-3d),(-webkit-transform-3d){#modernizr{height:3px}}</style>").appendTo("head"),
            r = t('<div id="modernizr" />').appendTo("html");
        e = r.height() === 3;
        r.remove();
        n.remove();
      }

      return e;
    },
    csstransitions: function csstransitions() {
      return !!l;
    }
  },
      h;

  if (s) for (h in c) {
    s.hasOwnProperty(h) || s.addTest(h, c[h]);
  } else {
    s = e.Modernizr = {
      _version: "1.6ish: miniModernizr for Isotope"
    };
    var p = " ",
        d;

    for (h in c) {
      d = c[h]();
      s[h] = d;
      p += " " + (d ? "" : "no-") + h;
    }

    t("html").addClass(p);
  }

  if (s.csstransforms) {
    var v = s.csstransforms3d ? {
      translate: function translate(e) {
        return "translate3d(" + e[0] + "px, " + e[1] + "px, 0) ";
      },
      scale: function scale(e) {
        return "scale3d(" + e + ", " + e + ", 1) ";
      }
    } : {
      translate: function translate(e) {
        return "translate(" + e[0] + "px, " + e[1] + "px) ";
      },
      scale: function scale(e) {
        return "scale(" + e + ") ";
      }
    },
        m = function m(e, n, r) {
      var i = t.data(e, "isoTransform") || {},
          s = {},
          o,
          u = {},
          a;
      s[n] = r;
      t.extend(i, s);

      for (o in i) {
        a = i[o];
        u[o] = v[o](a);
      }

      var l = u.translate || "",
          c = u.scale || "",
          h = l + c;
      t.data(e, "isoTransform", i);
      e.style[f] = h;
    };

    t.cssNumber.scale = !0;
    t.cssHooks.scale = {
      set: function set(e, t) {
        m(e, "scale", t);
      },
      get: function get(e, n) {
        var r = t.data(e, "isoTransform");
        return r && r.scale ? r.scale : 1;
      }
    };

    t.fx.step.scale = function (e) {
      t.cssHooks.scale.set(e.elem, e.now + e.unit);
    };

    t.cssNumber.translate = !0;
    t.cssHooks.translate = {
      set: function set(e, t) {
        m(e, "translate", t);
      },
      get: function get(e, n) {
        var r = t.data(e, "isoTransform");
        return r && r.translate ? r.translate : [0, 0];
      }
    };
  }

  var g, y;

  if (s.csstransitions) {
    g = {
      WebkitTransitionProperty: "webkitTransitionEnd",
      MozTransitionProperty: "transitionend",
      OTransitionProperty: "oTransitionEnd otransitionend",
      transitionProperty: "transitionend"
    }[l];
    y = a("transitionDuration");
  }

  var b = t.event,
      w = t.event.handle ? "handle" : "dispatch",
      E;
  b.special.smartresize = {
    setup: function setup() {
      t(this).bind("resize", b.special.smartresize.handler);
    },
    teardown: function teardown() {
      t(this).unbind("resize", b.special.smartresize.handler);
    },
    handler: function handler(e, t) {
      var n = this,
          r = arguments;
      e.type = "smartresize";
      E && clearTimeout(E);
      E = setTimeout(function () {
        b[w].apply(n, r);
      }, t === "execAsap" ? 0 : 100);
    }
  };

  t.fn.smartresize = function (e) {
    return e ? this.bind("smartresize", e) : this.trigger("smartresize", ["execAsap"]);
  };

  t.Isotope = function (e, n, r) {
    this.element = t(n);

    this._create(e);

    this._init(r);
  };

  var S = ["width", "height"],
      x = t(e);
  t.Isotope.settings = {
    resizable: !0,
    layoutMode: "masonry",
    containerClass: "isotope",
    itemClass: "isotope-item",
    hiddenClass: "isotope-hidden",
    hiddenStyle: {
      opacity: 0,
      scale: .001
    },
    visibleStyle: {
      opacity: 1,
      scale: 1
    },
    containerStyle: {
      position: "relative",
      overflow: "hidden"
    },
    animationEngine: "best-available",
    animationOptions: {
      queue: !1,
      duration: 800
    },
    sortBy: "original-order",
    sortAscending: !0,
    resizesContainer: !0,
    transformsEnabled: !0,
    itemPositionDataEnabled: !1
  };
  t.Isotope.prototype = {
    _create: function _create(e) {
      this.options = t.extend({}, t.Isotope.settings, e);
      this.styleQueue = [];
      this.elemCount = 0;
      var n = this.element[0].style;
      this.originalStyle = {};
      var r = S.slice(0);

      for (var i in this.options.containerStyle) {
        r.push(i);
      }

      for (var s = 0, o = r.length; s < o; s++) {
        i = r[s];
        this.originalStyle[i] = n[i] || "";
      }

      this.element.css(this.options.containerStyle);

      this._updateAnimationEngine();

      this._updateUsingTransforms();

      var u = {
        "original-order": function originalOrder(e, t) {
          t.elemCount++;
          return t.elemCount;
        },
        random: function random() {
          return Math.random();
        }
      };
      this.options.getSortData = t.extend(this.options.getSortData, u);
      this.reloadItems();
      this.offset = {
        left: parseInt(this.element.css("padding-left") || 0, 10),
        top: parseInt(this.element.css("padding-top") || 0, 10)
      };
      var a = this;
      setTimeout(function () {
        a.element.addClass(a.options.containerClass);
      }, 0);
      this.options.resizable && x.bind("smartresize.isotope", function () {
        a.resize();
      });
      this.element.delegate("." + this.options.hiddenClass, "click", function () {
        return !1;
      });
    },
    _getAtoms: function _getAtoms(e) {
      var t = this.options.itemSelector,
          n = t ? e.filter(t).add(e.find(t)) : e,
          r = {
        position: "absolute"
      };
      n = n.filter(function (e, t) {
        return t.nodeType === 1;
      });

      if (this.usingTransforms) {
        r.left = 0;
        r.top = 0;
      }

      n.css(r).addClass(this.options.itemClass);
      this.updateSortData(n, !0);
      return n;
    },
    _init: function _init(e) {
      this.$filteredAtoms = this._filter(this.$allAtoms);

      this._sort();

      this.reLayout(e);
    },
    option: function option(e) {
      if (t.isPlainObject(e)) {
        this.options = t.extend(!0, this.options, e);
        var n;

        for (var r in e) {
          n = "_update" + o(r);
          this[n] && this[n]();
        }
      }
    },
    _updateAnimationEngine: function _updateAnimationEngine() {
      var e = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, ""),
          t;

      switch (e) {
        case "css":
        case "none":
          t = !1;
          break;

        case "jquery":
          t = !0;
          break;

        default:
          t = !s.csstransitions;
      }

      this.isUsingJQueryAnimation = t;

      this._updateUsingTransforms();
    },
    _updateTransformsEnabled: function _updateTransformsEnabled() {
      this._updateUsingTransforms();
    },
    _updateUsingTransforms: function _updateUsingTransforms() {
      var e = this.usingTransforms = this.options.transformsEnabled && s.csstransforms && s.csstransitions && !this.isUsingJQueryAnimation;

      if (!e) {
        delete this.options.hiddenStyle.scale;
        delete this.options.visibleStyle.scale;
      }

      this.getPositionStyles = e ? this._translate : this._positionAbs;
    },
    _filter: function _filter(e) {
      var t = this.options.filter === "" ? "*" : this.options.filter;
      if (!t) return e;
      var n = this.options.hiddenClass,
          r = "." + n,
          i = e.filter(r),
          s = i;

      if (t !== "*") {
        s = i.filter(t);
        var o = e.not(r).not(t).addClass(n);
        this.styleQueue.push({
          $el: o,
          style: this.options.hiddenStyle
        });
      }

      this.styleQueue.push({
        $el: s,
        style: this.options.visibleStyle
      });
      s.removeClass(n);
      return e.filter(t);
    },
    updateSortData: function updateSortData(e, n) {
      var r = this,
          i = this.options.getSortData,
          s,
          o;
      e.each(function () {
        s = t(this);
        o = {};

        for (var e in i) {
          !n && e === "original-order" ? o[e] = t.data(this, "isotope-sort-data")[e] : o[e] = i[e](s, r);
        }

        t.data(this, "isotope-sort-data", o);
      });
    },
    _sort: function _sort() {
      var e = this.options.sortBy,
          t = this._getSorter,
          n = this.options.sortAscending ? 1 : -1,
          r = function r(_r, i) {
        var s = t(_r, e),
            o = t(i, e);

        if (s === o && e !== "original-order") {
          s = t(_r, "original-order");
          o = t(i, "original-order");
        }

        return (s > o ? 1 : s < o ? -1 : 0) * n;
      };

      this.$filteredAtoms.sort(r);
    },
    _getSorter: function _getSorter(e, n) {
      return t.data(e, "isotope-sort-data")[n];
    },
    _translate: function _translate(e, t) {
      return {
        translate: [e, t]
      };
    },
    _positionAbs: function _positionAbs(e, t) {
      return {
        left: e,
        top: t
      };
    },
    _pushPosition: function _pushPosition(e, t, n) {
      t = Math.round(t + this.offset.left);
      n = Math.round(n + this.offset.top);
      var r = this.getPositionStyles(t, n);
      this.styleQueue.push({
        $el: e,
        style: r
      });
      this.options.itemPositionDataEnabled && e.data("isotope-item-position", {
        x: t,
        y: n
      });
    },
    layout: function layout(e, t) {
      var n = this.options.layoutMode;
      this["_" + n + "Layout"](e);

      if (this.options.resizesContainer) {
        var r = this["_" + n + "GetContainerSize"]();
        this.styleQueue.push({
          $el: this.element,
          style: r
        });
      }

      this._processStyleQueue(e, t);

      this.isLaidOut = !0;
    },
    _processStyleQueue: function _processStyleQueue(e, n) {
      var r = this.isLaidOut ? this.isUsingJQueryAnimation ? "animate" : "css" : "css",
          i = this.options.animationOptions,
          o = this.options.onLayout,
          u,
          a,
          f,
          l;

      a = function a(e, t) {
        t.$el[r](t.style, i);
      };

      if (this._isInserting && this.isUsingJQueryAnimation) a = function a(e, t) {
        u = t.$el.hasClass("no-transition") ? "css" : r;
        t.$el[u](t.style, i);
      };else if (n || o || i.complete) {
        var c = !1,
            h = [n, o, i.complete],
            p = this;
        f = !0;

        l = function l() {
          if (c) return;
          var t;

          for (var n = 0, r = h.length; n < r; n++) {
            t = h[n];
            typeof t == "function" && t.call(p.element, e, p);
          }

          c = !0;
        };

        if (this.isUsingJQueryAnimation && r === "animate") {
          i.complete = l;
          f = !1;
        } else if (s.csstransitions) {
          var d = 0,
              v = this.styleQueue[0],
              m = v && v.$el,
              b;

          while (!m || !m.length) {
            b = this.styleQueue[d++];
            if (!b) return;
            m = b.$el;
          }

          var w = parseFloat(getComputedStyle(m[0])[y]);

          if (w > 0) {
            a = function a(e, t) {
              t.$el[r](t.style, i).one(g, l);
            };

            f = !1;
          }
        }
      }
      t.each(this.styleQueue, a);
      f && l();
      this.styleQueue = [];
    },
    resize: function resize() {
      this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout();
    },
    reLayout: function reLayout(e) {
      this["_" + this.options.layoutMode + "Reset"]();
      this.layout(this.$filteredAtoms, e);
    },
    addItems: function addItems(e, t) {
      var n = this._getAtoms(e);

      this.$allAtoms = this.$allAtoms.add(n);
      t && t(n);
    },
    insert: function insert(e, t) {
      this.element.append(e);
      var n = this;
      this.addItems(e, function (e) {
        var r = n._filter(e);

        n._addHideAppended(r);

        n._sort();

        n.reLayout();

        n._revealAppended(r, t);
      });
    },
    appended: function appended(e, t) {
      var n = this;
      this.addItems(e, function (e) {
        n._addHideAppended(e);

        n.layout(e);

        n._revealAppended(e, t);
      });
    },
    _addHideAppended: function _addHideAppended(e) {
      this.$filteredAtoms = this.$filteredAtoms.add(e);
      e.addClass("no-transition");
      this._isInserting = !0;
      this.styleQueue.push({
        $el: e,
        style: this.options.hiddenStyle
      });
    },
    _revealAppended: function _revealAppended(e, t) {
      var n = this;
      setTimeout(function () {
        e.removeClass("no-transition");
        n.styleQueue.push({
          $el: e,
          style: n.options.visibleStyle
        });
        n._isInserting = !1;

        n._processStyleQueue(e, t);
      }, 10);
    },
    reloadItems: function reloadItems() {
      this.$allAtoms = this._getAtoms(this.element.children());
    },
    remove: function remove(e, t) {
      this.$allAtoms = this.$allAtoms.not(e);
      this.$filteredAtoms = this.$filteredAtoms.not(e);

      var n = this,
          r = function r() {
        e.remove();
        t && t.call(n.element);
      };

      if (e.filter(":not(." + this.options.hiddenClass + ")").length) {
        this.styleQueue.push({
          $el: e,
          style: this.options.hiddenStyle
        });

        this._sort();

        this.reLayout(r);
      } else r();
    },
    shuffle: function shuffle(e) {
      this.updateSortData(this.$allAtoms);
      this.options.sortBy = "random";

      this._sort();

      this.reLayout(e);
    },
    destroy: function destroy() {
      var e = this.usingTransforms,
          t = this.options;
      this.$allAtoms.removeClass(t.hiddenClass + " " + t.itemClass).each(function () {
        var t = this.style;
        t.position = "";
        t.top = "";
        t.left = "";
        t.opacity = "";
        e && (t[f] = "");
      });
      var n = this.element[0].style;

      for (var r in this.originalStyle) {
        n[r] = this.originalStyle[r];
      }

      this.element.unbind(".isotope").undelegate("." + t.hiddenClass, "click").removeClass(t.containerClass).removeData("isotope");
      x.unbind(".isotope");
    },
    _getSegments: function _getSegments(e) {
      var t = this.options.layoutMode,
          n = e ? "rowHeight" : "columnWidth",
          r = e ? "height" : "width",
          i = e ? "rows" : "cols",
          s = this.element[r](),
          u,
          a = this.options[t] && this.options[t][n] || this.$filteredAtoms["outer" + o(r)](!0) || s;
      u = Math.floor(s / a);
      u = Math.max(u, 1);
      this[t][i] = u;
      this[t][n] = a;
    },
    _checkIfSegmentsChanged: function _checkIfSegmentsChanged(e) {
      var t = this.options.layoutMode,
          n = e ? "rows" : "cols",
          r = this[t][n];

      this._getSegments(e);

      return this[t][n] !== r;
    },
    _masonryReset: function _masonryReset() {
      this.masonry = {};

      this._getSegments();

      var e = this.masonry.cols;
      this.masonry.colYs = [];

      while (e--) {
        this.masonry.colYs.push(0);
      }
    },
    _masonryLayout: function _masonryLayout(e) {
      var n = this,
          r = n.masonry;
      e.each(function () {
        var e = t(this),
            i = Math.ceil(e.outerWidth(!0) / r.columnWidth);
        i = Math.min(i, r.cols);
        if (i === 1) n._masonryPlaceBrick(e, r.colYs);else {
          var s = r.cols + 1 - i,
              o = [],
              u,
              a;

          for (a = 0; a < s; a++) {
            u = r.colYs.slice(a, a + i);
            o[a] = Math.max.apply(Math, u);
          }

          n._masonryPlaceBrick(e, o);
        }
      });
    },
    _masonryPlaceBrick: function _masonryPlaceBrick(e, t) {
      var n = Math.min.apply(Math, t),
          r = 0;

      for (var i = 0, s = t.length; i < s; i++) {
        if (t[i] === n) {
          r = i;
          break;
        }
      }

      var o = this.masonry.columnWidth * r,
          u = n;

      this._pushPosition(e, o, u);

      var a = n + e.outerHeight(!0),
          f = this.masonry.cols + 1 - s;

      for (i = 0; i < f; i++) {
        this.masonry.colYs[r + i] = a;
      }
    },
    _masonryGetContainerSize: function _masonryGetContainerSize() {
      var e = Math.max.apply(Math, this.masonry.colYs);
      return {
        height: e
      };
    },
    _masonryResizeChanged: function _masonryResizeChanged() {
      return this._checkIfSegmentsChanged();
    },
    _fitRowsReset: function _fitRowsReset() {
      this.fitRows = {
        x: 0,
        y: 0,
        height: 0
      };
    },
    _fitRowsLayout: function _fitRowsLayout(e) {
      var n = this,
          r = this.element.width(),
          i = this.fitRows;
      e.each(function () {
        var e = t(this),
            s = e.outerWidth(!0),
            o = e.outerHeight(!0);

        if (i.x !== 0 && s + i.x > r) {
          i.x = 0;
          i.y = i.height;
        }

        n._pushPosition(e, i.x, i.y);

        i.height = Math.max(i.y + o, i.height);
        i.x += s;
      });
    },
    _fitRowsGetContainerSize: function _fitRowsGetContainerSize() {
      return {
        height: this.fitRows.height
      };
    },
    _fitRowsResizeChanged: function _fitRowsResizeChanged() {
      return !0;
    },
    _cellsByRowReset: function _cellsByRowReset() {
      this.cellsByRow = {
        index: 0
      };

      this._getSegments();

      this._getSegments(!0);
    },
    _cellsByRowLayout: function _cellsByRowLayout(e) {
      var n = this,
          r = this.cellsByRow;
      e.each(function () {
        var e = t(this),
            i = r.index % r.cols,
            s = Math.floor(r.index / r.cols),
            o = (i + .5) * r.columnWidth - e.outerWidth(!0) / 2,
            u = (s + .5) * r.rowHeight - e.outerHeight(!0) / 2;

        n._pushPosition(e, o, u);

        r.index++;
      });
    },
    _cellsByRowGetContainerSize: function _cellsByRowGetContainerSize() {
      return {
        height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
      };
    },
    _cellsByRowResizeChanged: function _cellsByRowResizeChanged() {
      return this._checkIfSegmentsChanged();
    },
    _straightDownReset: function _straightDownReset() {
      this.straightDown = {
        y: 0
      };
    },
    _straightDownLayout: function _straightDownLayout(e) {
      var n = this;
      e.each(function (e) {
        var r = t(this);

        n._pushPosition(r, 0, n.straightDown.y);

        n.straightDown.y += r.outerHeight(!0);
      });
    },
    _straightDownGetContainerSize: function _straightDownGetContainerSize() {
      return {
        height: this.straightDown.y
      };
    },
    _straightDownResizeChanged: function _straightDownResizeChanged() {
      return !0;
    },
    _masonryHorizontalReset: function _masonryHorizontalReset() {
      this.masonryHorizontal = {};

      this._getSegments(!0);

      var e = this.masonryHorizontal.rows;
      this.masonryHorizontal.rowXs = [];

      while (e--) {
        this.masonryHorizontal.rowXs.push(0);
      }
    },
    _masonryHorizontalLayout: function _masonryHorizontalLayout(e) {
      var n = this,
          r = n.masonryHorizontal;
      e.each(function () {
        var e = t(this),
            i = Math.ceil(e.outerHeight(!0) / r.rowHeight);
        i = Math.min(i, r.rows);
        if (i === 1) n._masonryHorizontalPlaceBrick(e, r.rowXs);else {
          var s = r.rows + 1 - i,
              o = [],
              u,
              a;

          for (a = 0; a < s; a++) {
            u = r.rowXs.slice(a, a + i);
            o[a] = Math.max.apply(Math, u);
          }

          n._masonryHorizontalPlaceBrick(e, o);
        }
      });
    },
    _masonryHorizontalPlaceBrick: function _masonryHorizontalPlaceBrick(e, t) {
      var n = Math.min.apply(Math, t),
          r = 0;

      for (var i = 0, s = t.length; i < s; i++) {
        if (t[i] === n) {
          r = i;
          break;
        }
      }

      var o = n,
          u = this.masonryHorizontal.rowHeight * r;

      this._pushPosition(e, o, u);

      var a = n + e.outerWidth(!0),
          f = this.masonryHorizontal.rows + 1 - s;

      for (i = 0; i < f; i++) {
        this.masonryHorizontal.rowXs[r + i] = a;
      }
    },
    _masonryHorizontalGetContainerSize: function _masonryHorizontalGetContainerSize() {
      var e = Math.max.apply(Math, this.masonryHorizontal.rowXs);
      return {
        width: e
      };
    },
    _masonryHorizontalResizeChanged: function _masonryHorizontalResizeChanged() {
      return this._checkIfSegmentsChanged(!0);
    },
    _fitColumnsReset: function _fitColumnsReset() {
      this.fitColumns = {
        x: 0,
        y: 0,
        width: 0
      };
    },
    _fitColumnsLayout: function _fitColumnsLayout(e) {
      var n = this,
          r = this.element.height(),
          i = this.fitColumns;
      e.each(function () {
        var e = t(this),
            s = e.outerWidth(!0),
            o = e.outerHeight(!0);

        if (i.y !== 0 && o + i.y > r) {
          i.x = i.width;
          i.y = 0;
        }

        n._pushPosition(e, i.x, i.y);

        i.width = Math.max(i.x + s, i.width);
        i.y += o;
      });
    },
    _fitColumnsGetContainerSize: function _fitColumnsGetContainerSize() {
      return {
        width: this.fitColumns.width
      };
    },
    _fitColumnsResizeChanged: function _fitColumnsResizeChanged() {
      return !0;
    },
    _cellsByColumnReset: function _cellsByColumnReset() {
      this.cellsByColumn = {
        index: 0
      };

      this._getSegments();

      this._getSegments(!0);
    },
    _cellsByColumnLayout: function _cellsByColumnLayout(e) {
      var n = this,
          r = this.cellsByColumn;
      e.each(function () {
        var e = t(this),
            i = Math.floor(r.index / r.rows),
            s = r.index % r.rows,
            o = (i + .5) * r.columnWidth - e.outerWidth(!0) / 2,
            u = (s + .5) * r.rowHeight - e.outerHeight(!0) / 2;

        n._pushPosition(e, o, u);

        r.index++;
      });
    },
    _cellsByColumnGetContainerSize: function _cellsByColumnGetContainerSize() {
      return {
        width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
      };
    },
    _cellsByColumnResizeChanged: function _cellsByColumnResizeChanged() {
      return this._checkIfSegmentsChanged(!0);
    },
    _straightAcrossReset: function _straightAcrossReset() {
      this.straightAcross = {
        x: 0
      };
    },
    _straightAcrossLayout: function _straightAcrossLayout(e) {
      var n = this;
      e.each(function (e) {
        var r = t(this);

        n._pushPosition(r, n.straightAcross.x, 0);

        n.straightAcross.x += r.outerWidth(!0);
      });
    },
    _straightAcrossGetContainerSize: function _straightAcrossGetContainerSize() {
      return {
        width: this.straightAcross.x
      };
    },
    _straightAcrossResizeChanged: function _straightAcrossResizeChanged() {
      return !0;
    }
  };

  t.fn.imagesLoaded = function (e) {
    function u() {
      e.call(n, r);
    }

    function a(e) {
      var n = e.target;

      if (n.src !== s && t.inArray(n, o) === -1) {
        o.push(n);

        if (--i <= 0) {
          setTimeout(u);
          r.unbind(".imagesLoaded", a);
        }
      }
    }

    var n = this,
        r = n.find("img").add(n.filter("img")),
        i = r.length,
        s = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
        o = [];
    i || u();
    r.bind("load.imagesLoaded error.imagesLoaded", a).each(function () {
      var e = this.src;
      this.src = s;
      this.src = e;
    });
    return n;
  };

  var T = function T(t) {
    e.console && e.console.error(t);
  };

  t.fn.isotope = function (e, n) {
    if (typeof e == "string") {
      var r = Array.prototype.slice.call(arguments, 1);
      this.each(function () {
        var n = t.data(this, "isotope");

        if (!n) {
          T("cannot call methods on isotope prior to initialization; attempted to call method '" + e + "'");
          return;
        }

        if (!t.isFunction(n[e]) || e.charAt(0) === "_") {
          T("no such method '" + e + "' for isotope instance");
          return;
        }

        n[e].apply(n, r);
      });
    } else this.each(function () {
      var r = t.data(this, "isotope");

      if (r) {
        r.option(e);

        r._init(n);
      } else t.data(this, "isotope", new t.Isotope(e, this, n));
    });

    return this;
  };
})(window, jQuery);

(function (e, t, n) {
  function c(e) {
    var t = {},
        r = /^jQuery\d+$/;
    n.each(e.attributes, function (e, n) {
      n.specified && !r.test(n.name) && (t[n.name] = n.value);
    });
    return t;
  }

  function h(e, t) {
    var r = this,
        i = n(r);
    if (r.value == i.attr("placeholder") && i.hasClass("placeholder")) if (i.data("placeholder-password")) {
      i = i.hide().next().show().attr("id", i.removeAttr("id").data("placeholder-id"));
      if (e === !0) return i[0].value = t;
      i.focus();
    } else {
      r.value = "";
      i.removeClass("placeholder");
      r == d() && r.select();
    }
  }

  function p() {
    var e,
        t = this,
        r = n(t),
        i = this.id;

    if (t.value == "") {
      if (t.type == "password") {
        if (!r.data("placeholder-textinput")) {
          try {
            e = r.clone().attr({
              type: "text"
            });
          } catch (s) {
            e = n("<input>").attr(n.extend(c(this), {
              type: "text"
            }));
          }

          e.removeAttr("name").data({
            "placeholder-password": r,
            "placeholder-id": i
          }).bind("focus.placeholder", h);
          r.data({
            "placeholder-textinput": e,
            "placeholder-id": i
          }).before(e);
        }

        r = r.removeAttr("id").hide().prev().attr("id", i).show();
      }

      r.addClass("placeholder");
      r[0].value = r.attr("placeholder");
    } else r.removeClass("placeholder");
  }

  function d() {
    try {
      return t.activeElement;
    } catch (e) {}
  }

  var r = Object.prototype.toString.call(e.operamini) == "[object OperaMini]",
      i = "placeholder" in t.createElement("input") && !r,
      s = "placeholder" in t.createElement("textarea") && !r,
      o = n.fn,
      u = n.valHooks,
      a = n.propHooks,
      f,
      l;

  if (i && s) {
    l = o.placeholder = function () {
      return this;
    };

    l.input = l.textarea = !0;
  } else {
    l = o.placeholder = function () {
      var e = this;
      e.filter((i ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
        "focus.placeholder": h,
        "blur.placeholder": p
      }).data("placeholder-enabled", !0).trigger("blur.placeholder");
      return e;
    };

    l.input = i;
    l.textarea = s;
    f = {
      get: function get(e) {
        var t = n(e),
            r = t.data("placeholder-password");
        return r ? r[0].value : t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value;
      },
      set: function set(e, t) {
        var r = n(e),
            i = r.data("placeholder-password");
        if (i) return i[0].value = t;
        if (!r.data("placeholder-enabled")) return e.value = t;

        if (t == "") {
          e.value = t;
          e != d() && p.call(e);
        } else r.hasClass("placeholder") ? h.call(e, !0, t) || (e.value = t) : e.value = t;

        return r;
      }
    };

    if (!i) {
      u.input = f;
      a.value = f;
    }

    if (!s) {
      u.textarea = f;
      a.value = f;
    }

    n(function () {
      n(t).delegate("form", "submit.placeholder", function () {
        var e = n(".placeholder", this).each(h);
        setTimeout(function () {
          e.each(p);
        }, 10);
      });
    });
    n(e).bind("beforeunload.placeholder", function () {
      n(".placeholder").each(function () {
        this.value = "";
      });
    });
  }
})(this, document, jQuery);

jQuery(document).ready(function (e) {
  e(".sf-menu").superfish({
    delay: 650,
    speed: "fast"
  });
  var t = e("body"),
      n = t.outerHeight(),
      r = e("#wpadminbar").outerHeight(),
      i = e(".x-navbar").outerHeight();
  t.scrollspy({
    target: ".x-nav-collapse",
    offset: r + i
  });
  e('.x-nav-scrollspy > li > a[href^="#"]').click(function (t) {
    t.preventDefault();
    var n = e(this).attr("href");
    e("html, body").animate({
      scrollTop: e(n).offset().top - r - i + 1
    }, 850, "easeInOutExpo");
  });
  e(window).resize(function () {
    t.scrollspy("refresh");
  });
  var s = 0,
      o = setInterval(function () {
    s += 1;
    var e = t.outerHeight();
    e !== n && t.scrollspy("refresh");
    s === 10 && clearInterval(o);
  }, 500);
  e("input, textarea").placeholder();
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49567" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","wp-content/themes/x/framework/js/dist/site/x-body.min.js"], null)
//# sourceMappingURL=/x-body.min.8deb5d37.js.map