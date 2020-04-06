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
})({"wp-content/plugins/x-shortcodes/js/dist/site/x-shortcodes-body.min.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

jQuery(document).ready(function (e) {
  var t = e(window),
      n = t.height(),
      r = e(this);
  t.resize(function () {
    n = t.height();
  });

  e.fn.parallaxContentBand = function (r, i) {
    function u() {
      var e = t.scrollTop();
      s.each(function () {
        var t = s.offset().top,
            u = s.outerHeight();
        if (t + u < e || t > e + n) return;
        s.css("background-position", r + " " + Math.floor((o - e) * i) + "px");
      });
    }

    var s = e(this),
        o;
    s.each(function () {
      o = s.offset().top;
    });
    t.resize(function () {
      s.each(function () {
        o = s.offset().top;
      });
    });
    t.bind("scroll", u).resize(u);
    u();
  };

  e('.x-column[data-fade="true"]').each(function () {
    e(this).waypoint(function () {
      e(this).attr("data-fade-animation") === "in-from-top" ? e(this).animate({
        opacity: "1",
        top: "0"
      }, 750, "easeOutExpo") : e(this).attr("data-fade-animation") === "in-from-left" ? e(this).animate({
        opacity: "1",
        left: "0"
      }, 750, "easeOutExpo") : e(this).attr("data-fade-animation") === "in-from-right" ? e(this).animate({
        opacity: "1",
        right: "0"
      }, 750, "easeOutExpo") : e(this).attr("data-fade-animation") === "in-from-bottom" ? e(this).animate({
        opacity: "1",
        bottom: "0"
      }, 750, "easeOutExpo") : e(this).animate({
        opacity: "1"
      }, 750, "easeOutExpo");
    }, {
      offset: "65%"
    });
  });
  e('.x-recent-posts[data-fade="true"]').each(function () {
    e(this).waypoint(function () {
      e(this).find("a").each(function (t) {
        e(this).delay(t * 90).animate({
          opacity: "1"
        }, 750, "easeOutExpo");
      });
      setTimeout(function () {
        e(this).addClass("complete");
      }, e(this).find("a").length * 90 + 400);
    }, {
      offset: "75%"
    });
  });
  e(".x-skill-bar").each(function () {
    e(this).waypoint(function () {
      var t = e(this).attr("data-percentage");
      e(this).find(".bar").animate({
        width: t
      }, 750, "easeInOutExpo");
    }, {
      offset: "100%"
    });
  });
  e(".x-accordion-toggle[data-parent]").click(function () {
    e(this).closest(".x-accordion").find(".x-accordion-toggle:not(.collapsed)").addClass("collapsed");
  });
});
jQuery(window).load(function () {
  if (Modernizr.touch) jQuery(".x-content-band.bg-image.parallax, .x-content-band.bg-pattern.parallax").css("background-attachment", "scroll");else {
    jQuery(".x-content-band.bg-image.parallax").each(function () {
      var e = jQuery(this).attr("id");
      jQuery("#" + e + ".parallax").parallaxContentBand("50%", .1);
    });
    jQuery(".x-content-band.bg-pattern.parallax").each(function () {
      var e = jQuery(this).attr("id");
      jQuery("#" + e + ".parallax").parallaxContentBand("50%", .3);
    });
  }
});
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
  def: "easeOutQuad",
  swing: function swing(e, t, n, r, i) {
    return jQuery.easing[jQuery.easing.def](e, t, n, r, i);
  },
  easeInQuad: function easeInQuad(e, t, n, r, i) {
    return r * (t /= i) * t + n;
  },
  easeOutQuad: function easeOutQuad(e, t, n, r, i) {
    return -r * (t /= i) * (t - 2) + n;
  },
  easeInOutQuad: function easeInOutQuad(e, t, n, r, i) {
    return (t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n;
  },
  easeInCubic: function easeInCubic(e, t, n, r, i) {
    return r * (t /= i) * t * t + n;
  },
  easeOutCubic: function easeOutCubic(e, t, n, r, i) {
    return r * ((t = t / i - 1) * t * t + 1) + n;
  },
  easeInOutCubic: function easeInOutCubic(e, t, n, r, i) {
    return (t /= i / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n;
  },
  easeInQuart: function easeInQuart(e, t, n, r, i) {
    return r * (t /= i) * t * t * t + n;
  },
  easeOutQuart: function easeOutQuart(e, t, n, r, i) {
    return -r * ((t = t / i - 1) * t * t * t - 1) + n;
  },
  easeInOutQuart: function easeInOutQuart(e, t, n, r, i) {
    return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n;
  },
  easeInQuint: function easeInQuint(e, t, n, r, i) {
    return r * (t /= i) * t * t * t * t + n;
  },
  easeOutQuint: function easeOutQuint(e, t, n, r, i) {
    return r * ((t = t / i - 1) * t * t * t * t + 1) + n;
  },
  easeInOutQuint: function easeInOutQuint(e, t, n, r, i) {
    return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n;
  },
  easeInSine: function easeInSine(e, t, n, r, i) {
    return -r * Math.cos(t / i * (Math.PI / 2)) + r + n;
  },
  easeOutSine: function easeOutSine(e, t, n, r, i) {
    return r * Math.sin(t / i * (Math.PI / 2)) + n;
  },
  easeInOutSine: function easeInOutSine(e, t, n, r, i) {
    return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n;
  },
  easeInExpo: function easeInExpo(e, t, n, r, i) {
    return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n;
  },
  easeOutExpo: function easeOutExpo(e, t, n, r, i) {
    return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n;
  },
  easeInOutExpo: function easeInOutExpo(e, t, n, r, i) {
    return t == 0 ? n : t == i ? n + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n;
  },
  easeInCirc: function easeInCirc(e, t, n, r, i) {
    return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n;
  },
  easeOutCirc: function easeOutCirc(e, t, n, r, i) {
    return r * Math.sqrt(1 - (t = t / i - 1) * t) + n;
  },
  easeInOutCirc: function easeInOutCirc(e, t, n, r, i) {
    return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n;
  },
  easeInElastic: function easeInElastic(e, t, n, r, i) {
    var s = 1.70158,
        o = 0,
        u = r;
    if (t == 0) return n;
    if ((t /= i) == 1) return n + r;
    o || (o = i * .3);

    if (u < Math.abs(r)) {
      u = r;
      var s = o / 4;
    } else var s = o / (2 * Math.PI) * Math.asin(r / u);

    return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n;
  },
  easeOutElastic: function easeOutElastic(e, t, n, r, i) {
    var s = 1.70158,
        o = 0,
        u = r;
    if (t == 0) return n;
    if ((t /= i) == 1) return n + r;
    o || (o = i * .3);

    if (u < Math.abs(r)) {
      u = r;
      var s = o / 4;
    } else var s = o / (2 * Math.PI) * Math.asin(r / u);

    return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n;
  },
  easeInOutElastic: function easeInOutElastic(e, t, n, r, i) {
    var s = 1.70158,
        o = 0,
        u = r;
    if (t == 0) return n;
    if ((t /= i / 2) == 2) return n + r;
    o || (o = i * .3 * 1.5);

    if (u < Math.abs(r)) {
      u = r;
      var s = o / 4;
    } else var s = o / (2 * Math.PI) * Math.asin(r / u);

    return t < 1 ? -0.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n : u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n;
  },
  easeInBack: function easeInBack(e, t, n, r, i, s) {
    s == undefined && (s = 1.70158);
    return r * (t /= i) * t * ((s + 1) * t - s) + n;
  },
  easeOutBack: function easeOutBack(e, t, n, r, i, s) {
    s == undefined && (s = 1.70158);
    return r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n;
  },
  easeInOutBack: function easeInOutBack(e, t, n, r, i, s) {
    s == undefined && (s = 1.70158);
    return (t /= i / 2) < 1 ? r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n : r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n;
  },
  easeInBounce: function easeInBounce(e, t, n, r, i) {
    return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n;
  },
  easeOutBounce: function easeOutBounce(e, t, n, r, i) {
    return (t /= i) < 1 / 2.75 ? r * 7.5625 * t * t + n : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n;
  },
  easeInOutBounce: function easeInOutBounce(e, t, n, r, i) {
    return t < i / 2 ? jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n : jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n;
  }
});

(function (e) {
  e.flexslider = function (t, n) {
    var r = e(t);
    r.vars = e.extend({}, e.flexslider.defaults, n);
    var i = r.vars.namespace,
        s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        o = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && r.vars.touch,
        u = "click touchend MSPointerUp",
        a = "",
        f,
        l = r.vars.direction === "vertical",
        c = r.vars.reverse,
        h = r.vars.itemWidth > 0,
        p = r.vars.animation === "fade",
        d = r.vars.asNavFor !== "",
        v = {},
        m = !0;
    e.data(t, "flexslider", r);
    v = {
      init: function init() {
        r.animating = !1;
        r.currentSlide = parseInt(r.vars.startAt ? r.vars.startAt : 0, 10);
        isNaN(r.currentSlide) && (r.currentSlide = 0);
        r.animatingTo = r.currentSlide;
        r.atEnd = r.currentSlide === 0 || r.currentSlide === r.last;
        r.containerSelector = r.vars.selector.substr(0, r.vars.selector.search(" "));
        r.slides = e(r.vars.selector, r);
        r.container = e(r.containerSelector, r);
        r.count = r.slides.length;
        r.syncExists = e(r.vars.sync).length > 0;
        r.vars.animation === "slide" && (r.vars.animation = "swing");
        r.prop = l ? "top" : "marginLeft";
        r.args = {};
        r.manualPause = !1;
        r.stopped = !1;
        r.started = !1;
        r.startTimeout = null;

        r.transitions = !r.vars.video && !p && r.vars.useCSS && function () {
          var e = document.createElement("div"),
              t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];

          for (var n in t) {
            if (e.style[t[n]] !== undefined) {
              r.pfx = t[n].replace("Perspective", "").toLowerCase();
              r.prop = "-" + r.pfx + "-transform";
              return !0;
            }
          }

          return !1;
        }();

        r.ensureAnimationEnd = "";
        r.vars.controlsContainer !== "" && (r.controlsContainer = e(r.vars.controlsContainer).length > 0 && e(r.vars.controlsContainer));
        r.vars.manualControls !== "" && (r.manualControls = e(r.vars.manualControls).length > 0 && e(r.vars.manualControls));

        if (r.vars.randomize) {
          r.slides.sort(function () {
            return Math.round(Math.random()) - .5;
          });
          r.container.empty().append(r.slides);
        }

        r.doMath();
        r.setup("init");
        r.vars.controlNav && v.controlNav.setup();
        r.vars.directionNav && v.directionNav.setup();
        r.vars.keyboard && (e(r.containerSelector).length === 1 || r.vars.multipleKeyboard) && e(document).bind("keyup", function (e) {
          var t = e.keyCode;

          if (!r.animating && (t === 39 || t === 37)) {
            var n = t === 39 ? r.getTarget("next") : t === 37 ? r.getTarget("prev") : !1;
            r.flexAnimate(n, r.vars.pauseOnAction);
          }
        });
        r.vars.mousewheel && r.bind("mousewheel", function (e, t, n, i) {
          e.preventDefault();
          var s = t < 0 ? r.getTarget("next") : r.getTarget("prev");
          r.flexAnimate(s, r.vars.pauseOnAction);
        });
        r.vars.pausePlay && v.pausePlay.setup();
        r.vars.slideshow && r.vars.pauseInvisible && v.pauseInvisible.init();

        if (r.vars.slideshow) {
          r.vars.pauseOnHover && r.hover(function () {
            !r.manualPlay && !r.manualPause && r.pause();
          }, function () {
            !r.manualPause && !r.manualPlay && !r.stopped && r.play();
          });
          if (!r.vars.pauseInvisible || !v.pauseInvisible.isHidden()) r.vars.initDelay > 0 ? r.startTimeout = setTimeout(r.play, r.vars.initDelay) : r.play();
        }

        d && v.asNav.setup();
        o && r.vars.touch && v.touch();
        (!p || p && r.vars.smoothHeight) && e(window).bind("resize orientationchange focus", v.resize);
        r.find("img").attr("draggable", "false");
        setTimeout(function () {
          r.vars.start(r);
        }, 200);
      },
      asNav: {
        setup: function setup() {
          r.asNav = !0;
          r.animatingTo = Math.floor(r.currentSlide / r.move);
          r.currentItem = r.currentSlide;
          r.slides.removeClass(i + "active-slide").eq(r.currentItem).addClass(i + "active-slide");
          if (!s) r.slides.on(u, function (t) {
            t.preventDefault();
            var n = e(this),
                s = n.index(),
                o = n.offset().left - e(r).scrollLeft();
            if (o <= 0 && n.hasClass(i + "active-slide")) r.flexAnimate(r.getTarget("prev"), !0);else if (!e(r.vars.asNavFor).data("flexslider").animating && !n.hasClass(i + "active-slide")) {
              r.direction = r.currentItem < s ? "next" : "prev";
              r.flexAnimate(s, r.vars.pauseOnAction, !1, !0, !0);
            }
          });else {
            t._slider = r;
            r.slides.each(function () {
              var t = this;
              t._gesture = new MSGesture();
              t._gesture.target = t;
              t.addEventListener("MSPointerDown", function (e) {
                e.preventDefault();
                e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId);
              }, !1);
              t.addEventListener("MSGestureTap", function (t) {
                t.preventDefault();
                var n = e(this),
                    i = n.index();

                if (!e(r.vars.asNavFor).data("flexslider").animating && !n.hasClass("active")) {
                  r.direction = r.currentItem < i ? "next" : "prev";
                  r.flexAnimate(i, r.vars.pauseOnAction, !1, !0, !0);
                }
              });
            });
          }
        }
      },
      controlNav: {
        setup: function setup() {
          r.manualControls ? v.controlNav.setupManual() : v.controlNav.setupPaging();
        },
        setupPaging: function setupPaging() {
          var t = r.vars.controlNav === "thumbnails" ? "control-thumbs" : "control-paging",
              n = 1,
              s,
              o;
          r.controlNavScaffold = e('<ol class="' + i + "control-nav " + i + t + '"></ol>');
          if (r.pagingCount > 1) for (var f = 0; f < r.pagingCount; f++) {
            o = r.slides.eq(f);
            s = r.vars.controlNav === "thumbnails" ? '<img src="' + o.attr("data-thumb") + '"/>' : "<a>" + n + "</a>";

            if ("thumbnails" === r.vars.controlNav && !0 === r.vars.thumbCaptions) {
              var l = o.attr("data-thumbcaption");
              "" != l && undefined != l && (s += '<span class="' + i + 'caption">' + l + "</span>");
            }

            r.controlNavScaffold.append("<li>" + s + "</li>");
            n++;
          }
          r.controlsContainer ? e(r.controlsContainer).append(r.controlNavScaffold) : r.append(r.controlNavScaffold);
          v.controlNav.set();
          v.controlNav.active();
          r.controlNavScaffold.delegate("a, img", u, function (t) {
            t.preventDefault();

            if (a === "" || a === t.type) {
              var n = e(this),
                  s = r.controlNav.index(n);

              if (!n.hasClass(i + "active")) {
                r.direction = s > r.currentSlide ? "next" : "prev";
                r.flexAnimate(s, r.vars.pauseOnAction);
              }
            }

            a === "" && (a = t.type);
            v.setToClearWatchedEvent();
          });
        },
        setupManual: function setupManual() {
          r.controlNav = r.manualControls;
          v.controlNav.active();
          r.controlNav.bind(u, function (t) {
            t.preventDefault();

            if (a === "" || a === t.type) {
              var n = e(this),
                  s = r.controlNav.index(n);

              if (!n.hasClass(i + "active")) {
                s > r.currentSlide ? r.direction = "next" : r.direction = "prev";
                r.flexAnimate(s, r.vars.pauseOnAction);
              }
            }

            a === "" && (a = t.type);
            v.setToClearWatchedEvent();
          });
        },
        set: function set() {
          var t = r.vars.controlNav === "thumbnails" ? "img" : "a";
          r.controlNav = e("." + i + "control-nav li " + t, r.controlsContainer ? r.controlsContainer : r);
        },
        active: function active() {
          r.controlNav.removeClass(i + "active").eq(r.animatingTo).addClass(i + "active");
        },
        update: function update(t, n) {
          r.pagingCount > 1 && t === "add" ? r.controlNavScaffold.append(e("<li><a>" + r.count + "</a></li>")) : r.pagingCount === 1 ? r.controlNavScaffold.find("li").remove() : r.controlNav.eq(n).closest("li").remove();
          v.controlNav.set();
          r.pagingCount > 1 && r.pagingCount !== r.controlNav.length ? r.update(n, t) : v.controlNav.active();
        }
      },
      directionNav: {
        setup: function setup() {
          var t = e('<ul class="' + i + 'direction-nav"><li><a class="' + i + 'prev" href="#">' + r.vars.prevText + '</a></li><li><a class="' + i + 'next" href="#">' + r.vars.nextText + "</a></li></ul>");

          if (r.controlsContainer) {
            e(r.controlsContainer).append(t);
            r.directionNav = e("." + i + "direction-nav li a", r.controlsContainer);
          } else {
            r.append(t);
            r.directionNav = e("." + i + "direction-nav li a", r);
          }

          v.directionNav.update();
          r.directionNav.bind(u, function (t) {
            t.preventDefault();
            var n;

            if (a === "" || a === t.type) {
              n = e(this).hasClass(i + "next") ? r.getTarget("next") : r.getTarget("prev");
              r.flexAnimate(n, r.vars.pauseOnAction);
            }

            a === "" && (a = t.type);
            v.setToClearWatchedEvent();
          });
        },
        update: function update() {
          var e = i + "disabled";
          r.pagingCount === 1 ? r.directionNav.addClass(e).attr("tabindex", "-1") : r.vars.animationLoop ? r.directionNav.removeClass(e).removeAttr("tabindex") : r.animatingTo === 0 ? r.directionNav.removeClass(e).filter("." + i + "prev").addClass(e).attr("tabindex", "-1") : r.animatingTo === r.last ? r.directionNav.removeClass(e).filter("." + i + "next").addClass(e).attr("tabindex", "-1") : r.directionNav.removeClass(e).removeAttr("tabindex");
        }
      },
      pausePlay: {
        setup: function setup() {
          var t = e('<div class="' + i + 'pauseplay"><a></a></div>');

          if (r.controlsContainer) {
            r.controlsContainer.append(t);
            r.pausePlay = e("." + i + "pauseplay a", r.controlsContainer);
          } else {
            r.append(t);
            r.pausePlay = e("." + i + "pauseplay a", r);
          }

          v.pausePlay.update(r.vars.slideshow ? i + "pause" : i + "play");
          r.pausePlay.bind(u, function (t) {
            t.preventDefault();
            if (a === "" || a === t.type) if (e(this).hasClass(i + "pause")) {
              r.manualPause = !0;
              r.manualPlay = !1;
              r.pause();
            } else {
              r.manualPause = !1;
              r.manualPlay = !0;
              r.play();
            }
            a === "" && (a = t.type);
            v.setToClearWatchedEvent();
          });
        },
        update: function update(e) {
          e === "play" ? r.pausePlay.removeClass(i + "pause").addClass(i + "play").html(r.vars.playText) : r.pausePlay.removeClass(i + "play").addClass(i + "pause").html(r.vars.pauseText);
        }
      },
      touch: function touch() {
        var e,
            n,
            i,
            o,
            u,
            a,
            f = !1,
            d = 0,
            v = 0,
            m = 0;

        if (!s) {
          t.addEventListener("touchstart", g, !1);

          function g(s) {
            if (r.animating) s.preventDefault();else if (window.navigator.msPointerEnabled || s.touches.length === 1) {
              r.pause();
              o = l ? r.h : r.w;
              a = Number(new Date());
              d = s.touches[0].pageX;
              v = s.touches[0].pageY;
              i = h && c && r.animatingTo === r.last ? 0 : h && c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : h && r.currentSlide === r.last ? r.limit : h ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : c ? (r.last - r.currentSlide + r.cloneOffset) * o : (r.currentSlide + r.cloneOffset) * o;
              e = l ? v : d;
              n = l ? d : v;
              t.addEventListener("touchmove", y, !1);
              t.addEventListener("touchend", b, !1);
            }
          }

          function y(t) {
            d = t.touches[0].pageX;
            v = t.touches[0].pageY;
            u = l ? e - v : e - d;
            f = l ? Math.abs(u) < Math.abs(d - n) : Math.abs(u) < Math.abs(v - n);
            var s = 500;

            if (!f || Number(new Date()) - a > s) {
              t.preventDefault();

              if (!p && r.transitions) {
                r.vars.animationLoop || (u /= r.currentSlide === 0 && u < 0 || r.currentSlide === r.last && u > 0 ? Math.abs(u) / o + 2 : 1);
                r.setProps(i + u, "setTouch");
              }
            }
          }

          function b(s) {
            t.removeEventListener("touchmove", y, !1);

            if (r.animatingTo === r.currentSlide && !f && u !== null) {
              var l = c ? -u : u,
                  h = l > 0 ? r.getTarget("next") : r.getTarget("prev");
              r.canAdvance(h) && (Number(new Date()) - a < 550 && Math.abs(l) > 50 || Math.abs(l) > o / 2) ? r.flexAnimate(h, r.vars.pauseOnAction) : p || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0);
            }

            t.removeEventListener("touchend", b, !1);
            e = null;
            n = null;
            u = null;
            i = null;
          }
        } else {
          t.style.msTouchAction = "none";
          t._gesture = new MSGesture();
          t._gesture.target = t;
          t.addEventListener("MSPointerDown", w, !1);
          t._slider = r;
          t.addEventListener("MSGestureChange", E, !1);
          t.addEventListener("MSGestureEnd", S, !1);

          function w(e) {
            e.stopPropagation();
            if (r.animating) e.preventDefault();else {
              r.pause();

              t._gesture.addPointer(e.pointerId);

              m = 0;
              o = l ? r.h : r.w;
              a = Number(new Date());
              i = h && c && r.animatingTo === r.last ? 0 : h && c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : h && r.currentSlide === r.last ? r.limit : h ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : c ? (r.last - r.currentSlide + r.cloneOffset) * o : (r.currentSlide + r.cloneOffset) * o;
            }
          }

          function E(e) {
            e.stopPropagation();
            var n = e.target._slider;
            if (!n) return;
            var r = -e.translationX,
                s = -e.translationY;
            m += l ? s : r;
            u = m;
            f = l ? Math.abs(m) < Math.abs(-r) : Math.abs(m) < Math.abs(-s);

            if (e.detail === e.MSGESTURE_FLAG_INERTIA) {
              setImmediate(function () {
                t._gesture.stop();
              });
              return;
            }

            if (!f || Number(new Date()) - a > 500) {
              e.preventDefault();

              if (!p && n.transitions) {
                n.vars.animationLoop || (u = m / (n.currentSlide === 0 && m < 0 || n.currentSlide === n.last && m > 0 ? Math.abs(m) / o + 2 : 1));
                n.setProps(i + u, "setTouch");
              }
            }
          }

          function S(t) {
            t.stopPropagation();
            var r = t.target._slider;
            if (!r) return;

            if (r.animatingTo === r.currentSlide && !f && u !== null) {
              var s = c ? -u : u,
                  l = s > 0 ? r.getTarget("next") : r.getTarget("prev");
              r.canAdvance(l) && (Number(new Date()) - a < 550 && Math.abs(s) > 50 || Math.abs(s) > o / 2) ? r.flexAnimate(l, r.vars.pauseOnAction) : p || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0);
            }

            e = null;
            n = null;
            u = null;
            i = null;
            m = 0;
          }
        }
      },
      resize: function resize() {
        if (!r.animating && r.is(":visible")) {
          h || r.doMath();
          if (p) v.smoothHeight();else if (h) {
            r.slides.width(r.computedW);
            r.update(r.pagingCount);
            r.setProps();
          } else if (l) {
            r.viewport.height(r.h);
            r.setProps(r.h, "setTotal");
          } else {
            r.vars.smoothHeight && v.smoothHeight();
            r.newSlides.width(r.computedW);
            r.setProps(r.computedW, "setTotal");
          }
        }
      },
      smoothHeight: function smoothHeight(e) {
        if (!l || p) {
          var t = p ? r : r.viewport;
          e ? t.animate({
            height: r.slides.eq(r.animatingTo).height()
          }, e) : t.height(r.slides.eq(r.animatingTo).height());
        }
      },
      sync: function sync(t) {
        var n = e(r.vars.sync).data("flexslider"),
            i = r.animatingTo;

        switch (t) {
          case "animate":
            n.flexAnimate(i, r.vars.pauseOnAction, !1, !0);
            break;

          case "play":
            !n.playing && !n.asNav && n.play();
            break;

          case "pause":
            n.pause();
        }
      },
      uniqueID: function uniqueID(t) {
        t.find("[id]").each(function () {
          var t = e(this);
          t.attr("id", t.attr("id") + "_clone");
        });
        return t;
      },
      pauseInvisible: {
        visProp: null,
        init: function init() {
          var e = ["webkit", "moz", "ms", "o"];
          if ("hidden" in document) return "hidden";

          for (var t = 0; t < e.length; t++) {
            e[t] + "Hidden" in document && (v.pauseInvisible.visProp = e[t] + "Hidden");
          }

          if (v.pauseInvisible.visProp) {
            var n = v.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
            document.addEventListener(n, function () {
              v.pauseInvisible.isHidden() ? r.startTimeout ? clearTimeout(r.startTimeout) : r.pause() : r.started ? r.play() : r.vars.initDelay > 0 ? setTimeout(r.play, r.vars.initDelay) : r.play();
            });
          }
        },
        isHidden: function isHidden() {
          return document[v.pauseInvisible.visProp] || !1;
        }
      },
      setToClearWatchedEvent: function setToClearWatchedEvent() {
        clearTimeout(f);
        f = setTimeout(function () {
          a = "";
        }, 3e3);
      }
    };

    r.flexAnimate = function (t, n, s, u, a) {
      !r.vars.animationLoop && t !== r.currentSlide && (r.direction = t > r.currentSlide ? "next" : "prev");
      d && r.pagingCount === 1 && (r.direction = r.currentItem < t ? "next" : "prev");

      if (!r.animating && (r.canAdvance(t, a) || s) && r.is(":visible")) {
        if (d && u) {
          var f = e(r.vars.asNavFor).data("flexslider");
          r.atEnd = t === 0 || t === r.count - 1;
          f.flexAnimate(t, !0, !1, !0, a);
          r.direction = r.currentItem < t ? "next" : "prev";
          f.direction = r.direction;

          if (Math.ceil((t + 1) / r.visible) - 1 === r.currentSlide || t === 0) {
            r.currentItem = t;
            r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
            return !1;
          }

          r.currentItem = t;
          r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
          t = Math.floor(t / r.visible);
        }

        r.animating = !0;
        r.animatingTo = t;
        n && r.pause();
        r.vars.before(r);
        r.syncExists && !a && v.sync("animate");
        r.vars.controlNav && v.controlNav.active();
        h || r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
        r.atEnd = t === 0 || t === r.last;
        r.vars.directionNav && v.directionNav.update();

        if (t === r.last) {
          r.vars.end(r);
          r.vars.animationLoop || r.pause();
        }

        if (!p) {
          var m = l ? r.slides.filter(":first").height() : r.computedW,
              g,
              y,
              b;

          if (h) {
            g = r.vars.itemMargin;
            b = (r.itemW + g) * r.move * r.animatingTo;
            y = b > r.limit && r.visible !== 1 ? r.limit : b;
          } else r.currentSlide === 0 && t === r.count - 1 && r.vars.animationLoop && r.direction !== "next" ? y = c ? (r.count + r.cloneOffset) * m : 0 : r.currentSlide === r.last && t === 0 && r.vars.animationLoop && r.direction !== "prev" ? y = c ? 0 : (r.count + 1) * m : y = c ? (r.count - 1 - t + r.cloneOffset) * m : (t + r.cloneOffset) * m;

          r.setProps(y, "", r.vars.animationSpeed);

          if (r.transitions) {
            if (!r.vars.animationLoop || !r.atEnd) {
              r.animating = !1;
              r.currentSlide = r.animatingTo;
            }

            r.container.unbind("webkitTransitionEnd transitionend");
            r.container.bind("webkitTransitionEnd transitionend", function () {
              clearTimeout(r.ensureAnimationEnd);
              r.wrapup(m);
            });
            clearTimeout(r.ensureAnimationEnd);
            r.ensureAnimationEnd = setTimeout(function () {
              r.wrapup(m);
            }, r.vars.animationSpeed + 100);
          } else r.container.animate(r.args, r.vars.animationSpeed, r.vars.easing, function () {
            r.wrapup(m);
          });
        } else if (!o) {
          r.slides.eq(r.currentSlide).css({
            zIndex: 1
          }).animate({
            opacity: 0
          }, r.vars.animationSpeed, r.vars.easing);
          r.slides.eq(t).css({
            zIndex: 2
          }).animate({
            opacity: 1
          }, r.vars.animationSpeed, r.vars.easing, r.wrapup);
        } else {
          r.slides.eq(r.currentSlide).css({
            opacity: 0,
            zIndex: 1
          });
          r.slides.eq(t).css({
            opacity: 1,
            zIndex: 2
          });
          r.wrapup(m);
        }

        r.vars.smoothHeight && v.smoothHeight(r.vars.animationSpeed);
      }
    };

    r.wrapup = function (e) {
      !p && !h && (r.currentSlide === 0 && r.animatingTo === r.last && r.vars.animationLoop ? r.setProps(e, "jumpEnd") : r.currentSlide === r.last && r.animatingTo === 0 && r.vars.animationLoop && r.setProps(e, "jumpStart"));
      r.animating = !1;
      r.currentSlide = r.animatingTo;
      r.vars.after(r);
    };

    r.animateSlides = function () {
      !r.animating && m && r.flexAnimate(r.getTarget("next"));
    };

    r.pause = function () {
      clearInterval(r.animatedSlides);
      r.animatedSlides = null;
      r.playing = !1;
      r.vars.pausePlay && v.pausePlay.update("play");
      r.syncExists && v.sync("pause");
    };

    r.play = function () {
      r.playing && clearInterval(r.animatedSlides);
      r.animatedSlides = r.animatedSlides || setInterval(r.animateSlides, r.vars.slideshowSpeed);
      r.started = r.playing = !0;
      r.vars.pausePlay && v.pausePlay.update("pause");
      r.syncExists && v.sync("play");
    };

    r.stop = function () {
      r.pause();
      r.stopped = !0;
    };

    r.canAdvance = function (e, t) {
      var n = d ? r.pagingCount - 1 : r.last;
      return t ? !0 : d && r.currentItem === r.count - 1 && e === 0 && r.direction === "prev" ? !0 : d && r.currentItem === 0 && e === r.pagingCount - 1 && r.direction !== "next" ? !1 : e === r.currentSlide && !d ? !1 : r.vars.animationLoop ? !0 : r.atEnd && r.currentSlide === 0 && e === n && r.direction !== "next" ? !1 : r.atEnd && r.currentSlide === n && e === 0 && r.direction === "next" ? !1 : !0;
    };

    r.getTarget = function (e) {
      r.direction = e;
      return e === "next" ? r.currentSlide === r.last ? 0 : r.currentSlide + 1 : r.currentSlide === 0 ? r.last : r.currentSlide - 1;
    };

    r.setProps = function (e, t, n) {
      var i = function () {
        var n = e ? e : (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo,
            i = function () {
          if (h) return t === "setTouch" ? e : c && r.animatingTo === r.last ? 0 : c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : r.animatingTo === r.last ? r.limit : n;

          switch (t) {
            case "setTotal":
              return c ? (r.count - 1 - r.currentSlide + r.cloneOffset) * e : (r.currentSlide + r.cloneOffset) * e;

            case "setTouch":
              return c ? e : e;

            case "jumpEnd":
              return c ? e : r.count * e;

            case "jumpStart":
              return c ? r.count * e : e;

            default:
              return e;
          }
        }();

        return i * -1 + "px";
      }();

      if (r.transitions) {
        i = l ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)";
        n = n !== undefined ? n / 1e3 + "s" : "0s";
        r.container.css("-" + r.pfx + "-transition-duration", n);
        r.container.css("transition-duration", n);
      }

      r.args[r.prop] = i;
      (r.transitions || n === undefined) && r.container.css(r.args);
      r.container.css("transform", i);
    };

    r.setup = function (t) {
      if (!p) {
        var n, s;

        if (t === "init") {
          r.viewport = e('<div class="' + i + 'viewport"></div>').css({
            overflow: "hidden",
            position: "relative"
          }).appendTo(r).append(r.container);
          r.cloneCount = 0;
          r.cloneOffset = 0;

          if (c) {
            s = e.makeArray(r.slides).reverse();
            r.slides = e(s);
            r.container.empty().append(r.slides);
          }
        }

        if (r.vars.animationLoop && !h) {
          r.cloneCount = 2;
          r.cloneOffset = 1;
          t !== "init" && r.container.find(".clone").remove();
          v.uniqueID(r.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).appendTo(r.container);
          v.uniqueID(r.slides.last().clone().addClass("clone").attr("aria-hidden", "true")).prependTo(r.container);
        }

        r.newSlides = e(r.vars.selector, r);
        n = c ? r.count - 1 - r.currentSlide + r.cloneOffset : r.currentSlide + r.cloneOffset;

        if (l && !h) {
          r.container.height((r.count + r.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
          setTimeout(function () {
            r.newSlides.css({
              display: "block"
            });
            r.doMath();
            r.viewport.height(r.h);
            r.setProps(n * r.h, "init");
          }, t === "init" ? 100 : 0);
        } else {
          r.container.width((r.count + r.cloneCount) * 200 + "%");
          r.setProps(n * r.computedW, "init");
          setTimeout(function () {
            r.doMath();
            r.newSlides.css({
              width: r.computedW,
              "float": "left",
              display: "block"
            });
            r.vars.smoothHeight && v.smoothHeight();
          }, t === "init" ? 100 : 0);
        }
      } else {
        r.slides.css({
          width: "100%",
          "float": "left",
          marginRight: "-100%",
          position: "relative"
        });
        t === "init" && (o ? r.slides.css({
          opacity: 0,
          display: "block",
          webkitTransition: "opacity " + r.vars.animationSpeed / 1e3 + "s ease",
          zIndex: 1
        }).eq(r.currentSlide).css({
          opacity: 1,
          zIndex: 2
        }) : r.slides.css({
          opacity: 0,
          display: "block",
          zIndex: 1
        }).eq(r.currentSlide).css({
          zIndex: 2
        }).animate({
          opacity: 1
        }, r.vars.animationSpeed, r.vars.easing));
        r.vars.smoothHeight && v.smoothHeight();
      }

      h || r.slides.removeClass(i + "active-slide").eq(r.currentSlide).addClass(i + "active-slide");
      r.vars.init(r);
    };

    r.doMath = function () {
      var e = r.slides.first(),
          t = r.vars.itemMargin,
          n = r.vars.minItems,
          i = r.vars.maxItems;
      r.w = r.viewport === undefined ? r.width() : r.viewport.width();
      r.h = e.height();
      r.boxPadding = e.outerWidth() - e.width();

      if (h) {
        r.itemT = r.vars.itemWidth + t;
        r.minW = n ? n * r.itemT : r.w;
        r.maxW = i ? i * r.itemT - t : r.w;
        r.itemW = r.minW > r.w ? (r.w - t * (n - 1)) / n : r.maxW < r.w ? (r.w - t * (i - 1)) / i : r.vars.itemWidth > r.w ? r.w : r.vars.itemWidth;
        r.visible = Math.floor(r.w / r.itemW);
        r.move = r.vars.move > 0 && r.vars.move < r.visible ? r.vars.move : r.visible;
        r.pagingCount = Math.ceil((r.count - r.visible) / r.move + 1);
        r.last = r.pagingCount - 1;
        r.limit = r.pagingCount === 1 ? 0 : r.vars.itemWidth > r.w ? r.itemW * (r.count - 1) + t * (r.count - 1) : (r.itemW + t) * r.count - r.w - t;
      } else {
        r.itemW = r.w;
        r.pagingCount = r.count;
        r.last = r.count - 1;
      }

      r.computedW = r.itemW - r.boxPadding;
    };

    r.update = function (e, t) {
      r.doMath();

      if (!h) {
        e < r.currentSlide ? r.currentSlide += 1 : e <= r.currentSlide && e !== 0 && (r.currentSlide -= 1);
        r.animatingTo = r.currentSlide;
      }

      if (r.vars.controlNav && !r.manualControls) if (t === "add" && !h || r.pagingCount > r.controlNav.length) v.controlNav.update("add");else if (t === "remove" && !h || r.pagingCount < r.controlNav.length) {
        if (h && r.currentSlide > r.last) {
          r.currentSlide -= 1;
          r.animatingTo -= 1;
        }

        v.controlNav.update("remove", r.last);
      }
      r.vars.directionNav && v.directionNav.update();
    };

    r.addSlide = function (t, n) {
      var i = e(t);
      r.count += 1;
      r.last = r.count - 1;
      l && c ? n !== undefined ? r.slides.eq(r.count - n).after(i) : r.container.prepend(i) : n !== undefined ? r.slides.eq(n).before(i) : r.container.append(i);
      r.update(n, "add");
      r.slides = e(r.vars.selector + ":not(.clone)", r);
      r.setup();
      r.vars.added(r);
    };

    r.removeSlide = function (t) {
      var n = isNaN(t) ? r.slides.index(e(t)) : t;
      r.count -= 1;
      r.last = r.count - 1;
      isNaN(t) ? e(t, r.slides).remove() : l && c ? r.slides.eq(r.last).remove() : r.slides.eq(t).remove();
      r.doMath();
      r.update(n, "remove");
      r.slides = e(r.vars.selector + ":not(.clone)", r);
      r.setup();
      r.vars.removed(r);
    };

    v.init();
  };

  e(window).blur(function (e) {
    focused = !1;
  }).focus(function (e) {
    focused = !0;
  });
  e.flexslider.defaults = {
    namespace: "flex-",
    selector: ".slides > li",
    animation: "fade",
    easing: "swing",
    direction: "horizontal",
    reverse: !1,
    animationLoop: !0,
    smoothHeight: !1,
    startAt: 0,
    slideshow: !0,
    slideshowSpeed: 7e3,
    animationSpeed: 600,
    initDelay: 0,
    randomize: !1,
    thumbCaptions: !1,
    pauseOnAction: !0,
    pauseOnHover: !1,
    pauseInvisible: !0,
    useCSS: !0,
    touch: !0,
    video: !1,
    controlNav: !0,
    directionNav: !0,
    prevText: "Previous",
    nextText: "Next",
    keyboard: !0,
    multipleKeyboard: !1,
    mousewheel: !1,
    pausePlay: !1,
    pauseText: "Pause",
    playText: "Play",
    controlsContainer: "",
    manualControls: "",
    sync: "",
    asNavFor: "",
    itemWidth: 0,
    itemMargin: 0,
    minItems: 1,
    maxItems: 0,
    move: 0,
    allowOneSlide: !0,
    start: function start() {},
    before: function before() {},
    after: function after() {},
    end: function end() {},
    added: function added() {},
    removed: function removed() {},
    init: function init() {}
  };

  e.fn.flexslider = function (t) {
    t === undefined && (t = {});
    if (_typeof(t) == "object") return this.each(function () {
      var n = e(this),
          r = t.selector ? t.selector : ".slides > li",
          i = n.find(r);

      if (i.length === 1 && t.allowOneSlide === !0 || i.length === 0) {
        i.fadeIn(400);
        t.start && t.start(n);
      } else n.data("flexslider") === undefined && new e.flexslider(this, t);
    });
    var n = e(this).data("flexslider");

    switch (t) {
      case "play":
        n.play();
        break;

      case "pause":
        n.pause();
        break;

      case "stop":
        n.stop();
        break;

      case "next":
        n.flexAnimate(n.getTarget("next"), !0);
        break;

      case "prev":
      case "previous":
        n.flexAnimate(n.getTarget("prev"), !0);
        break;

      default:
        typeof t == "number" && n.flexAnimate(t, !0);
    }
  };
})(jQuery);

(function () {
  var e = [].indexOf || function (e) {
    for (var t = 0, n = this.length; t < n; t++) {
      if (t in this && this[t] === e) return t;
    }

    return -1;
  },
      t = [].slice;

  (function (e, t) {
    return typeof define == "function" && define.amd ? define("waypoints", ["jquery"], function (n) {
      return t(n, e);
    }) : t(e.jQuery, e);
  })(this, function (n, r) {
    var i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b;
    i = n(r);
    c = e.call(r, "ontouchstart") >= 0;
    u = {
      horizontal: {},
      vertical: {}
    };
    a = 1;
    l = {};
    f = "waypoints-context-id";
    d = "resize.waypoints";
    v = "scroll.waypoints";
    m = 1;
    g = "waypoints-waypoint-ids";
    y = "waypoint";
    b = "waypoints";

    s = function () {
      function e(e) {
        var t = this;
        this.$element = e;
        this.element = e[0];
        this.didResize = !1;
        this.didScroll = !1;
        this.id = "context" + a++;
        this.oldScroll = {
          x: e.scrollLeft(),
          y: e.scrollTop()
        };
        this.waypoints = {
          horizontal: {},
          vertical: {}
        };
        this.element[f] = this.id;
        l[this.id] = this;
        e.bind(v, function () {
          var e;

          if (!t.didScroll && !c) {
            t.didScroll = !0;

            e = function e() {
              t.doScroll();
              return t.didScroll = !1;
            };

            return r.setTimeout(e, n[b].settings.scrollThrottle);
          }
        });
        e.bind(d, function () {
          var e;

          if (!t.didResize) {
            t.didResize = !0;

            e = function e() {
              n[b]("refresh");
              return t.didResize = !1;
            };

            return r.setTimeout(e, n[b].settings.resizeThrottle);
          }
        });
      }

      e.prototype.doScroll = function () {
        var e,
            t = this;
        e = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left"
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up"
          }
        };
        c && (!e.vertical.oldScroll || !e.vertical.newScroll) && n[b]("refresh");
        n.each(e, function (e, r) {
          var i, s, o;
          o = [];
          s = r.newScroll > r.oldScroll;
          i = s ? r.forward : r.backward;
          n.each(t.waypoints[e], function (e, t) {
            var n, i;
            if (r.oldScroll < (n = t.offset) && n <= r.newScroll) return o.push(t);
            if (r.newScroll < (i = t.offset) && i <= r.oldScroll) return o.push(t);
          });
          o.sort(function (e, t) {
            return e.offset - t.offset;
          });
          s || o.reverse();
          return n.each(o, function (e, t) {
            if (t.options.continuous || e === o.length - 1) return t.trigger([i]);
          });
        });
        return this.oldScroll = {
          x: e.horizontal.newScroll,
          y: e.vertical.newScroll
        };
      };

      e.prototype.refresh = function () {
        var e,
            t,
            r,
            i = this;
        r = n.isWindow(this.element);
        t = this.$element.offset();
        this.doScroll();
        e = {
          horizontal: {
            contextOffset: r ? 0 : t.left,
            contextScroll: r ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left"
          },
          vertical: {
            contextOffset: r ? 0 : t.top,
            contextScroll: r ? 0 : this.oldScroll.y,
            contextDimension: r ? n[b]("viewportHeight") : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top"
          }
        };
        return n.each(e, function (e, t) {
          return n.each(i.waypoints[e], function (e, r) {
            var i, s, o, u, a;
            i = r.options.offset;
            o = r.offset;
            s = n.isWindow(r.element) ? 0 : r.$element.offset()[t.offsetProp];
            if (n.isFunction(i)) i = i.apply(r.element);else if (typeof i == "string") {
              i = parseFloat(i);
              r.options.offset.indexOf("%") > -1 && (i = Math.ceil(t.contextDimension * i / 100));
            }
            r.offset = s - t.contextOffset + t.contextScroll - i;
            if (r.options.onlyOnScroll && o != null || !r.enabled) return;
            if (o !== null && o < (u = t.oldScroll) && u <= r.offset) return r.trigger([t.backward]);
            if (o !== null && o > (a = t.oldScroll) && a >= r.offset) return r.trigger([t.forward]);
            if (o === null && t.oldScroll >= r.offset) return r.trigger([t.forward]);
          });
        });
      };

      e.prototype.checkEmpty = function () {
        if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
          this.$element.unbind([d, v].join(" "));
          return delete l[this.id];
        }
      };

      return e;
    }();

    o = function () {
      function e(e, t, r) {
        var i, s;
        r = n.extend({}, n.fn[y].defaults, r);
        r.offset === "bottom-in-view" && (r.offset = function () {
          var e;
          e = n[b]("viewportHeight");
          n.isWindow(t.element) || (e = t.$element.height());
          return e - n(this).outerHeight();
        });
        this.$element = e;
        this.element = e[0];
        this.axis = r.horizontal ? "horizontal" : "vertical";
        this.callback = r.handler;
        this.context = t;
        this.enabled = r.enabled;
        this.id = "waypoints" + m++;
        this.offset = null;
        this.options = r;
        t.waypoints[this.axis][this.id] = this;
        u[this.axis][this.id] = this;
        i = (s = this.element[g]) != null ? s : [];
        i.push(this.id);
        this.element[g] = i;
      }

      e.prototype.trigger = function (e) {
        if (!this.enabled) return;
        this.callback != null && this.callback.apply(this.element, e);
        if (this.options.triggerOnce) return this.destroy();
      };

      e.prototype.disable = function () {
        return this.enabled = !1;
      };

      e.prototype.enable = function () {
        this.context.refresh();
        return this.enabled = !0;
      };

      e.prototype.destroy = function () {
        delete u[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty();
      };

      e.getWaypointsByElement = function (e) {
        var t, r;
        r = e[g];
        if (!r) return [];
        t = n.extend({}, u.horizontal, u.vertical);
        return n.map(r, function (e) {
          return t[e];
        });
      };

      return e;
    }();

    p = {
      init: function init(e, t) {
        var r;
        t == null && (t = {});
        (r = t.handler) == null && (t.handler = e);
        this.each(function () {
          var e, r, i, u;
          e = n(this);
          i = (u = t.context) != null ? u : n.fn[y].defaults.context;
          n.isWindow(i) || (i = e.closest(i));
          i = n(i);
          r = l[i[0][f]];
          r || (r = new s(i));
          return new o(e, r, t);
        });
        n[b]("refresh");
        return this;
      },
      disable: function disable() {
        return p._invoke.call(this, "disable");
      },
      enable: function enable() {
        return p._invoke.call(this, "enable");
      },
      destroy: function destroy() {
        return p._invoke.call(this, "destroy");
      },
      prev: function prev(e, t) {
        return p._traverse.call(this, e, t, function (e, t, n) {
          if (t > 0) return e.push(n[t - 1]);
        });
      },
      next: function next(e, t) {
        return p._traverse.call(this, e, t, function (e, t, n) {
          if (t < n.length - 1) return e.push(n[t + 1]);
        });
      },
      _traverse: function _traverse(e, t, i) {
        var s, o;
        e == null && (e = "vertical");
        t == null && (t = r);
        o = h.aggregate(t);
        s = [];
        this.each(function () {
          var t;
          t = n.inArray(this, o[e]);
          return i(s, t, o[e]);
        });
        return this.pushStack(s);
      },
      _invoke: function _invoke(e) {
        this.each(function () {
          var t;
          t = o.getWaypointsByElement(this);
          return n.each(t, function (t, n) {
            n[e]();
            return !0;
          });
        });
        return this;
      }
    };

    n.fn[y] = function () {
      var e, r;
      r = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [];
      return p[r] ? p[r].apply(this, e) : n.isFunction(r) ? p.init.apply(this, arguments) : n.isPlainObject(r) ? p.init.apply(this, [null, r]) : r ? n.error("The " + r + " method does not exist in jQuery Waypoints.") : n.error("jQuery Waypoints needs a callback function or handler option.");
    };

    n.fn[y].defaults = {
      context: r,
      continuous: !0,
      enabled: !0,
      horizontal: !1,
      offset: 0,
      triggerOnce: !1
    };
    h = {
      refresh: function refresh() {
        return n.each(l, function (e, t) {
          return t.refresh();
        });
      },
      viewportHeight: function viewportHeight() {
        var e;
        return (e = r.innerHeight) != null ? e : i.height();
      },
      aggregate: function aggregate(e) {
        var t, r, i;
        t = u;
        e && (t = (i = l[n(e)[0][f]]) != null ? i.waypoints : void 0);
        if (!t) return [];
        r = {
          horizontal: [],
          vertical: []
        };
        n.each(r, function (e, i) {
          n.each(t[e], function (e, t) {
            return i.push(t);
          });
          i.sort(function (e, t) {
            return e.offset - t.offset;
          });
          r[e] = n.map(i, function (e) {
            return e.element;
          });
          return r[e] = n.unique(r[e]);
        });
        return r;
      },
      above: function above(e) {
        e == null && (e = r);
        return h._filter(e, "vertical", function (e, t) {
          return t.offset <= e.oldScroll.y;
        });
      },
      below: function below(e) {
        e == null && (e = r);
        return h._filter(e, "vertical", function (e, t) {
          return t.offset > e.oldScroll.y;
        });
      },
      left: function left(e) {
        e == null && (e = r);
        return h._filter(e, "horizontal", function (e, t) {
          return t.offset <= e.oldScroll.x;
        });
      },
      right: function right(e) {
        e == null && (e = r);
        return h._filter(e, "horizontal", function (e, t) {
          return t.offset > e.oldScroll.x;
        });
      },
      enable: function enable() {
        return h._invoke("enable");
      },
      disable: function disable() {
        return h._invoke("disable");
      },
      destroy: function destroy() {
        return h._invoke("destroy");
      },
      extendFn: function extendFn(e, t) {
        return p[e] = t;
      },
      _invoke: function _invoke(e) {
        var t;
        t = n.extend({}, u.vertical, u.horizontal);
        return n.each(t, function (t, n) {
          n[e]();
          return !0;
        });
      },
      _filter: function _filter(e, t, r) {
        var i, s;
        i = l[n(e)[0][f]];
        if (!i) return [];
        s = [];
        n.each(i.waypoints[t], function (e, t) {
          if (r(i, t)) return s.push(t);
        });
        s.sort(function (e, t) {
          return e.offset - t.offset;
        });
        return n.map(s, function (e) {
          return e.element;
        });
      }
    };

    n[b] = function () {
      var e, n;
      n = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [];
      return h[n] ? h[n].apply(null, e) : h.aggregate.call(null, n);
    };

    n[b].settings = {
      resizeThrottle: 100,
      scrollThrottle: 30
    };
    return i.load(function () {
      return n[b]("refresh");
    });
  });
}).call(this);
!function (e) {
  "use strict";

  var t = '[data-dismiss="alert"]',
      n = function n(_n) {
    e(_n).on("click", t, this.close);
  };

  n.prototype.close = function (t) {
    function s() {
      i.trigger("closed").remove();
    }

    var n = e(this),
        r = n.attr("data-target"),
        i;

    if (!r) {
      r = n.attr("href");
      r = r && r.replace(/.*(?=#[^\s]*$)/, "");
    }

    i = e(r);
    t && t.preventDefault();
    i.length || (i = n.hasClass("alert") ? n : n.parent());
    i.trigger(t = e.Event("close"));
    if (t.isDefaultPrevented()) return;
    i.removeClass("in");
    e.support.transition && i.hasClass("fade") ? i.on(e.support.transition.end, s) : s();
  };

  var r = e.fn.alert;

  e.fn.alert = function (t) {
    return this.each(function () {
      var r = e(this),
          i = r.data("alert");
      i || r.data("alert", i = new n(this));
      typeof t == "string" && i[t].call(r);
    });
  };

  e.fn.alert.Constructor = n;

  e.fn.alert.noConflict = function () {
    e.fn.alert = r;
    return this;
  };

  e(document).on("click.alert.data-api", t, n.prototype.close);
}(window.jQuery);
!function (e) {
  "use strict";

  var t = function t(_t, n) {
    this.$element = e(_t);
    this.options = e.extend({}, e.fn.collapse.defaults, n);
    this.options.parent && (this.$parent = e(this.options.parent));
    this.options.toggle && this.toggle();
  };

  t.prototype = {
    constructor: t,
    dimension: function dimension() {
      var e = this.$element.hasClass("width");
      return e ? "width" : "height";
    },
    show: function show() {
      var t, n, r, i;
      if (this.transitioning || this.$element.hasClass("in")) return;
      t = this.dimension();
      n = e.camelCase(["scroll", t].join("-"));
      r = this.$parent && this.$parent.find("> .x-accordion-group > .in");

      if (r && r.length) {
        i = r.data("collapse");
        if (i && i.transitioning) return;
        r.collapse("hide");
        i || r.data("collapse", null);
      }

      this.$element[t](0);
      this.transition("addClass", e.Event("show"), "shown");
      e.support.transition && this.$element[t](this.$element[0][n]);
    },
    hide: function hide() {
      var t;
      if (this.transitioning || !this.$element.hasClass("in")) return;
      t = this.dimension();
      this.reset(this.$element[t]());
      this.transition("removeClass", e.Event("hide"), "hidden");
      this.$element[t](0);
    },
    reset: function reset(e) {
      var t = this.dimension();
      this.$element.removeClass("collapse")[t](e || "auto")[0].offsetWidth;
      this.$element[e !== null ? "addClass" : "removeClass"]("collapse");
      return this;
    },
    transition: function transition(t, n, r) {
      var i = this,
          s = function s() {
        n.type == "show" && i.reset();
        i.transitioning = 0;
        i.$element.trigger(r);
      };

      this.$element.trigger(n);
      if (n.isDefaultPrevented()) return;
      this.transitioning = 1;
      this.$element[t]("in");
      e.support.transition && this.$element.hasClass("collapse") ? this.$element.one(e.support.transition.end, s) : s();
    },
    toggle: function toggle() {
      this[this.$element.hasClass("in") ? "hide" : "show"]();
    }
  };
  var n = e.fn.collapse;

  e.fn.collapse = function (n) {
    return this.each(function () {
      var r = e(this),
          i = r.data("collapse"),
          s = e.extend({}, e.fn.collapse.defaults, r.data(), _typeof(n) == "object" && n);
      i || r.data("collapse", i = new t(this, s));
      typeof n == "string" && i[n]();
    });
  };

  e.fn.collapse.defaults = {
    toggle: !0
  };
  e.fn.collapse.Constructor = t;

  e.fn.collapse.noConflict = function () {
    e.fn.collapse = n;
    return this;
  };

  e(document).on("click.collapse.data-api", "[data-toggle=collapse]", function (t) {
    var n = e(this),
        r,
        i = n.attr("data-target") || t.preventDefault() || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""),
        s = e(i).data("collapse") ? "toggle" : n.data();
    n[e(i).hasClass("in") ? "addClass" : "removeClass"]("collapsed");
    e(i).collapse(s);
  });
}(window.jQuery);
!function (e) {
  "use strict";

  var t = function t(_t2) {
    this.element = e(_t2);
  };

  t.prototype = {
    constructor: t,
    show: function show() {
      var t = this.element,
          n = t.closest("ul:not(.dropdown-menu)"),
          r = t.attr("data-target"),
          i,
          s,
          o;

      if (!r) {
        r = t.attr("href");
        r = r && r.replace(/.*(?=#[^\s]*$)/, "");
      }

      if (t.parent("li").hasClass("active")) return;
      i = n.find(".active:last a")[0];
      o = e.Event("show", {
        relatedTarget: i
      });
      t.trigger(o);
      if (o.isDefaultPrevented()) return;
      s = e(r);
      this.activate(t.parent("li"), n);
      this.activate(s, s.parent(), function () {
        t.trigger({
          type: "shown",
          relatedTarget: i
        });
      });
    },
    activate: function activate(t, n, r) {
      function o() {
        i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
        t.addClass("active");

        if (s) {
          t[0].offsetWidth;
          t.addClass("in");
        } else t.removeClass("fade");

        t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active");
        r && r();
      }

      var i = n.find("> .active"),
          s = r && e.support.transition && i.hasClass("fade");
      s ? i.one(e.support.transition.end, o) : o();
      i.removeClass("in");
    }
  };
  var n = e.fn.tab;

  e.fn.tab = function (n) {
    return this.each(function () {
      var r = e(this),
          i = r.data("tab");
      i || r.data("tab", i = new t(this));
      typeof n == "string" && i[n]();
    });
  };

  e.fn.tab.Constructor = t;

  e.fn.tab.noConflict = function () {
    e.fn.tab = n;
    return this;
  };

  e(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (t) {
    t.preventDefault();
    e(this).tab("show");
  });
}(window.jQuery);
!function (e) {
  "use strict";

  e(function () {
    e.support.transition = function () {
      var e = function () {
        var e = document.createElement("bootstrap"),
            t = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend"
        },
            n;

        for (n in t) {
          if (e.style[n] !== undefined) return t[n];
        }
      }();

      return e && {
        end: e
      };
    }();
  });
}(window.jQuery);
!function (e) {
  "use strict";

  var t = function t(e, _t3) {
    this.init("tooltip", e, _t3);
  };

  t.prototype = {
    constructor: t,
    init: function init(t, n, r) {
      var i, s, o, u, a;
      this.type = t;
      this.$element = e(n);
      this.options = this.getOptions(r);
      this.enabled = !0;
      o = this.options.trigger.split(" ");

      for (a = o.length; a--;) {
        u = o[a];
        if (u == "click") this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));else if (u != "manual") {
          i = u == "hover" ? "mouseenter" : "focus";
          s = u == "hover" ? "mouseleave" : "blur";
          this.$element.on(i + "." + this.type, this.options.selector, e.proxy(this.enter, this));
          this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.leave, this));
        }
      }

      this.options.selector ? this._options = e.extend({}, this.options, {
        trigger: "manual",
        selector: ""
      }) : this.fixTitle();
    },
    getOptions: function getOptions(t) {
      t = e.extend({}, e.fn[this.type].defaults, this.$element.data(), t);
      t.delay && typeof t.delay == "number" && (t.delay = {
        show: t.delay,
        hide: t.delay
      });
      return t;
    },
    enter: function enter(t) {
      var n = e.fn[this.type].defaults,
          r = {},
          i;
      this._options && e.each(this._options, function (e, t) {
        n[e] != t && (r[e] = t);
      }, this);
      i = e(t.currentTarget)[this.type](r).data(this.type);
      if (!i.options.delay || !i.options.delay.show) return i.show();
      clearTimeout(this.timeout);
      i.hoverState = "in";
      this.timeout = setTimeout(function () {
        i.hoverState == "in" && i.show();
      }, i.options.delay.show);
    },
    leave: function leave(t) {
      var n = e(t.currentTarget)[this.type](this._options).data(this.type);
      this.timeout && clearTimeout(this.timeout);
      if (!n.options.delay || !n.options.delay.hide) return n.hide();
      n.hoverState = "out";
      this.timeout = setTimeout(function () {
        n.hoverState == "out" && n.hide();
      }, n.options.delay.hide);
    },
    show: function show() {
      var t,
          n,
          r,
          i,
          s,
          o,
          u = e.Event("show");

      if (this.hasContent() && this.enabled) {
        this.$element.trigger(u);
        if (u.isDefaultPrevented()) return;
        t = this.tip();
        this.setContent();
        this.options.animation && t.addClass("fade");
        s = typeof this.options.placement == "function" ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement;
        t.detach().css({
          top: 0,
          left: 0,
          display: "block"
        });
        this.options.container ? t.appendTo(this.options.container) : t.insertAfter(this.$element);
        n = this.getPosition();
        r = t[0].offsetWidth;
        i = t[0].offsetHeight;

        switch (s) {
          case "bottom":
            o = {
              top: n.top + n.height,
              left: n.left + n.width / 2 - r / 2
            };
            break;

          case "top":
            o = {
              top: n.top - i,
              left: n.left + n.width / 2 - r / 2
            };
            break;

          case "left":
            o = {
              top: n.top + n.height / 2 - i / 2,
              left: n.left - r
            };
            break;

          case "right":
            o = {
              top: n.top + n.height / 2 - i / 2,
              left: n.left + n.width
            };
        }

        this.applyPlacement(o, s);
        this.$element.trigger("shown");
      }
    },
    applyPlacement: function applyPlacement(e, t) {
      var n = this.tip(),
          r = n[0].offsetWidth,
          i = n[0].offsetHeight,
          s,
          o,
          u,
          a;
      n.offset(e).addClass(t).addClass("in");
      s = n[0].offsetWidth;
      o = n[0].offsetHeight;

      if (t == "top" && o != i) {
        e.top = e.top + i - o;
        a = !0;
      }

      if (t == "bottom" || t == "top") {
        u = 0;

        if (e.left < 0) {
          u = e.left * -2;
          e.left = 0;
          n.offset(e);
          s = n[0].offsetWidth;
          o = n[0].offsetHeight;
        }

        this.replaceArrow(u - r + s, s, "left");
      } else this.replaceArrow(o - i, o, "top");

      a && n.offset(e);
    },
    replaceArrow: function replaceArrow(e, t, n) {
      this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "");
    },
    setContent: function setContent() {
      var e = this.tip(),
          t = this.getTitle();
      e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
      e.removeClass("fade in top bottom left right");
    },
    hide: function hide() {
      function i() {
        var t = setTimeout(function () {
          n.off(e.support.transition.end).detach();
        }, 500);
        n.one(e.support.transition.end, function () {
          clearTimeout(t);
          n.detach();
        });
      }

      var t = this,
          n = this.tip(),
          r = e.Event("hide");
      this.$element.trigger(r);
      if (r.isDefaultPrevented()) return;
      n.removeClass("in");
      e.support.transition && this.$tip.hasClass("fade") ? i() : n.detach();
      this.$element.trigger("hidden");
      return this;
    },
    fixTitle: function fixTitle() {
      var e = this.$element;
      (e.attr("title") || typeof e.attr("data-original-title") != "string") && e.attr("data-original-title", e.attr("title") || "").attr("title", "");
    },
    hasContent: function hasContent() {
      return this.getTitle();
    },
    getPosition: function getPosition() {
      var t = this.$element[0];
      return e.extend({}, typeof t.getBoundingClientRect == "function" ? t.getBoundingClientRect() : {
        width: t.offsetWidth,
        height: t.offsetHeight
      }, this.$element.offset());
    },
    getTitle: function getTitle() {
      var e,
          t = this.$element,
          n = this.options;
      e = t.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(t[0]) : n.title);
      return e;
    },
    tip: function tip() {
      return this.$tip = this.$tip || e(this.options.template);
    },
    arrow: function arrow() {
      return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    },
    validate: function validate() {
      if (!this.$element[0].parentNode) {
        this.hide();
        this.$element = null;
        this.options = null;
      }
    },
    enable: function enable() {
      this.enabled = !0;
    },
    disable: function disable() {
      this.enabled = !1;
    },
    toggleEnabled: function toggleEnabled() {
      this.enabled = !this.enabled;
    },
    toggle: function toggle(t) {
      var n = t ? e(t.currentTarget)[this.type](this._options).data(this.type) : this;
      n.tip().hasClass("in") ? n.hide() : n.show();
    },
    destroy: function destroy() {
      this.hide().$element.off("." + this.type).removeData(this.type);
    }
  };
  var n = e.fn.tooltip;

  e.fn.tooltip = function (n) {
    return this.each(function () {
      var r = e(this),
          i = r.data("tooltip"),
          s = _typeof(n) == "object" && n;
      i || r.data("tooltip", i = new t(this, s));
      typeof n == "string" && i[n]();
    });
  };

  e.fn.tooltip.Constructor = t;
  e.fn.tooltip.defaults = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1
  };

  e.fn.tooltip.noConflict = function () {
    e.fn.tooltip = n;
    return this;
  };
}(window.jQuery);
!function (e) {
  "use strict";

  var t = function t(e, _t4) {
    this.init("popover", e, _t4);
  };

  t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {
    constructor: t,
    setContent: function setContent() {
      var e = this.tip(),
          t = this.getTitle(),
          n = this.getContent();
      e.find(".popover-title")[this.options.html ? "html" : "text"](t);
      e.find(".popover-content")[this.options.html ? "html" : "text"](n);
      e.removeClass("fade top bottom left right in");
    },
    hasContent: function hasContent() {
      return this.getTitle() || this.getContent();
    },
    getContent: function getContent() {
      var e,
          t = this.$element,
          n = this.options;
      e = (typeof n.content == "function" ? n.content.call(t[0]) : n.content) || t.attr("data-content");
      return e;
    },
    tip: function tip() {
      this.$tip || (this.$tip = e(this.options.template));
      return this.$tip;
    },
    destroy: function destroy() {
      this.hide().$element.off("." + this.type).removeData(this.type);
    }
  });
  var n = e.fn.popover;

  e.fn.popover = function (n) {
    return this.each(function () {
      var r = e(this),
          i = r.data("popover"),
          s = _typeof(n) == "object" && n;
      i || r.data("popover", i = new t(this, s));
      typeof n == "string" && i[n]();
    });
  };

  e.fn.popover.Constructor = t;
  e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  });

  e.fn.popover.noConflict = function () {
    e.fn.popover = n;
    return this;
  };
}(window.jQuery);
jQuery(document).ready(function (e) {
  e('[data-toggle="tooltip"]').tooltip({
    animation: !0,
    html: !1,
    delay: {
      show: 0,
      hide: 300
    }
  });
  e('[data-toggle="popover"]').popover({
    animation: !0,
    html: !1,
    delay: {
      show: 0,
      hide: 300
    }
  });
});
jQuery(window).load(function () {
  jQuery(".x-flexslider-featured-gallery").flexslider({
    controlNav: !1,
    selector: ".x-slides > li",
    prevText: '<i class="x-icon-chevron-left"></i>',
    nextText: '<i class="x-icon-chevron-right"></i>',
    animation: "fade",
    easing: "easeInOutExpo",
    smoothHeight: !0,
    slideshow: !1
  });
  jQuery(".x-flexslider-flickr").flexslider({
    controlNav: !1,
    selector: ".x-slides > li",
    prevText: '<i class="x-icon-chevron-left"></i>',
    nextText: '<i class="x-icon-chevron-right"></i>',
    animation: "fade",
    easing: "easeInOutExpo",
    smoothHeight: !0,
    slideshow: !1
  });
});
},{}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","wp-content/plugins/x-shortcodes/js/dist/site/x-shortcodes-body.min.js"], null)
//# sourceMappingURL=/x-shortcodes-body.min.bd4671f0.js.map