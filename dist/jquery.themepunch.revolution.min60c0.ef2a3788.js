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
})({"wp-content/plugins/revslider/rs-plugin/js/jquery.themepunch.revolution.min60c0.js":[function(require,module,exports) {
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 4.5.0 (23.04.2013)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
**************************************************************************/
function revslider_showDoubleJqueryError(e) {
  var t = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
  t += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
  t += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
  t += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
  t = "<span style='font-size:16px;color:#BC0C06;'>" + t + "</span>";
  jQuery(e).show().html(t);
}

(function (e, t) {
  function n(e) {
    var t = [],
        n;
    var r = window.location.href.slice(window.location.href.indexOf(e) + 1).split("_");

    for (var i = 0; i < r.length; i++) {
      r[i] = r[i].replace("%3D", "=");
      n = r[i].split("=");
      t.push(n[0]);
      t[n[0]] = n[1];
    }

    return t;
  }

  function r(n, i) {
    try {
      if (i.hideThumbsUnderResoluition != 0 && i.navigationType == "thumb") {
        if (i.hideThumbsUnderResoluition > e(window).width()) e(".tp-bullets").css({
          display: "none"
        });else e(".tp-bullets").css({
          display: "block"
        });
      }
    } catch (s) {}

    n.find(".defaultimg").each(function (t) {
      g(e(this), i);
    });
    var o = n.parent();

    if (e(window).width() < i.hideSliderAtLimit) {
      n.trigger("stoptimer");
      if (o.css("display") != "none") o.data("olddisplay", o.css("display"));
      o.css({
        display: "none"
      });
    } else {
      if (n.is(":hidden")) {
        if (o.data("olddisplay") != t && o.data("olddisplay") != "undefined" && o.data("olddisplay") != "none") o.css({
          display: o.data("olddisplay")
        });else o.css({
          display: "block"
        });
        n.trigger("restarttimer");
        setTimeout(function () {
          r(n, i);
        }, 150);
      }
    }

    var u = 0;
    if (i.forceFullWidth == "on") u = 0 - i.container.parent().offset().left;

    try {
      n.parent().find(".tp-bannershadow").css({
        width: i.width,
        left: u
      });
    } catch (s) {}

    var a = n.find(">ul >li:eq(" + i.act + ") .slotholder");
    var f = n.find(">ul >li:eq(" + i.next + ") .slotholder");
    S(n, i);
    f.find(".defaultimg").css({
      opacity: 0
    });
    a.find(".defaultimg").css({
      opacity: 1
    });
    f.find(".defaultimg").each(function () {
      var r = e(this);

      if (r.data("kenburn") != t) {
        r.data("kenburn").restart();
        D(n, i, true);
      }
    });
    var l = n.find(">ul >li:eq(" + i.next + ")");
    J(l, i, true);
    m(n, i);
  }

  function s() {
    var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos",, "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"];
    var t = false;

    for (i in e) {
      if (navigator.userAgent.split(e[i]).length > 1) {
        t = true;
      }
    }

    return t;
  }

  function o(t, n) {
    var r = e('<div style="display:none;"/>').appendTo(e("body"));
    r.html("<!--[if " + (n || "") + " IE " + (t || "") + "]><a>&nbsp;</a><![endif]-->");
    var i = r.find("a").length;
    r.remove();
    return i;
  }

  function u(e, t) {
    C(t, e);
  }

  function a(n, r) {
    var i = n.parent();

    if (r.navigationType == "thumb" || r.navsecond == "both") {
      i.append('<div class="tp-bullets tp-thumbs ' + r.navigationStyle + '"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>');
    }

    var s = i.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer");
    var o = s.parent();
    o.width(r.thumbWidth * r.thumbAmount);
    o.height(r.thumbHeight);
    o.parent().width(r.thumbWidth * r.thumbAmount);
    o.parent().height(r.thumbHeight);
    n.find(">ul:first >li").each(function (e) {
      var i = n.find(">ul:first >li:eq(" + e + ")");
      var o = i.find(".defaultimg").css("backgroundColor");
      if (i.data("thumb") != t) var u = i.data("thumb");else var u = i.find("img:first").attr("src");
      s.append('<div class="bullet thumb" style="background-color:' + o + ";position:relative;width:" + r.thumbWidth + "px;height:" + r.thumbHeight + "px;background-image:url(" + u + ') !important;background-size:cover;background-position:center center;"></div>');
      var a = s.find(".bullet:first");
    });
    var a = 10;
    s.find(".bullet").each(function (t) {
      var i = e(this);
      if (t == r.slideamount - 1) i.addClass("last");
      if (t == 0) i.addClass("first");
      i.width(r.thumbWidth);
      i.height(r.thumbHeight);
      if (a < i.outerWidth(true)) a = i.outerWidth(true);
      i.click(function () {
        if (r.transition == 0 && i.index() != r.act) {
          r.next = i.index();
          u(r, n);
        }
      });
    });
    var c = a * n.find(">ul:first >li").length;
    var h = s.parent().width();
    r.thumbWidth = a;

    if (h < c) {
      e(document).mousemove(function (t) {
        e("body").data("mousex", t.pageX);
      });
      s.parent().mouseenter(function () {
        var t = e(this);
        t.addClass("over");
        var r = t.offset();
        var i = e("body").data("mousex") - r.left;
        var s = t.width();
        var o = t.find(".bullet:first").outerWidth(true);
        var u = o * n.find(">ul:first >li").length;
        var a = u - s + 15;
        var f = a / s;
        i = i - 30;
        var c = 0 - i * f;
        if (c > 0) c = 0;
        if (c < 0 - u + s) c = 0 - u + s;
        l(t, c, 200);
      });
      s.parent().mousemove(function () {
        var t = e(this);
        var r = t.offset();
        var i = e("body").data("mousex") - r.left;
        var s = t.width();
        var o = t.find(".bullet:first").outerWidth(true);
        var u = o * n.find(">ul:first >li").length - 1;
        var a = u - s + 15;
        var f = a / s;
        i = i - 3;
        if (i < 6) i = 0;
        if (i + 3 > s - 6) i = s;
        var c = 0 - i * f;
        if (c > 0) c = 0;
        if (c < 0 - u + s) c = 0 - u + s;
        l(t, c, 0);
      });
      s.parent().mouseleave(function () {
        var t = e(this);
        t.removeClass("over");
        f(n);
      });
    }
  }

  function f(e) {
    var t = e.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer");
    var n = t.parent();
    var r = n.offset();
    var i = n.find(".bullet:first").outerWidth(true);
    var s = n.find(".bullet.selected").index() * i;
    var o = n.width();
    var i = n.find(".bullet:first").outerWidth(true);
    var u = i * e.find(">ul:first >li").length;
    var a = u - o;
    var f = a / o;
    var c = 0 - s;
    if (c > 0) c = 0;
    if (c < 0 - u + o) c = 0 - u + o;

    if (!n.hasClass("over")) {
      l(n, c, 200);
    }
  }

  function l(e, t, n) {
    TweenLite.to(e.find(".tp-thumbcontainer"), .2, {
      left: t,
      ease: Power3.easeOut,
      overwrite: "auto"
    });
  }

  function c(t, n) {
    if (n.navigationType == "bullet" || n.navigationType == "both") {
      t.parent().append('<div class="tp-bullets simplebullets ' + n.navigationStyle + '"></div>');
    }

    var r = t.parent().find(".tp-bullets");
    t.find(">ul:first >li").each(function (e) {
      var n = t.find(">ul:first >li:eq(" + e + ") img:first").attr("src");
      r.append('<div class="bullet"></div>');
      var i = r.find(".bullet:first");
    });
    r.find(".bullet").each(function (r) {
      var i = e(this);
      if (r == n.slideamount - 1) i.addClass("last");
      if (r == 0) i.addClass("first");
      i.click(function () {
        var e = false;

        if (n.navigationArrows == "withbullet" || n.navigationArrows == "nexttobullets") {
          if (i.index() - 1 == n.act) e = true;
        } else {
          if (i.index() == n.act) e = true;
        }

        if (n.transition == 0 && !e) {
          if (n.navigationArrows == "withbullet" || n.navigationArrows == "nexttobullets") {
            n.next = i.index() - 1;
          } else {
            n.next = i.index();
          }

          u(n, t);
        }
      });
    });
    r.append('<div class="tpclear"></div>');
    m(t, n);
  }

  function h(e, n) {
    var r = e.find(".tp-bullets");
    var i = "";
    var s = n.navigationStyle;
    if (n.navigationArrows == "none") i = "visibility:hidden;display:none";
    n.soloArrowStyle = "default";
    if (n.navigationArrows != "none" && n.navigationArrows != "nexttobullets") s = n.soloArrowStyle;
    e.parent().append('<div style="' + i + '" class="tp-leftarrow tparrows ' + s + '"></div>');
    e.parent().append('<div style="' + i + '" class="tp-rightarrow tparrows ' + s + '"></div>');
    e.parent().find(".tp-rightarrow").click(function () {
      if (n.transition == 0) {
        if (e.data("showus") != t && e.data("showus") != -1) n.next = e.data("showus") - 1;else n.next = n.next + 1;
        e.data("showus", -1);
        if (n.next >= n.slideamount) n.next = 0;
        if (n.next < 0) n.next = 0;
        if (n.act != n.next) u(n, e);
      }
    });
    e.parent().find(".tp-leftarrow").click(function () {
      if (n.transition == 0) {
        n.next = n.next - 1;
        n.leftarrowpressed = 1;
        if (n.next < 0) n.next = n.slideamount - 1;
        u(n, e);
      }
    });
    m(e, n);
  }

  function p(n, r) {
    e(document).keydown(function (e) {
      if (r.transition == 0 && e.keyCode == 39) {
        if (n.data("showus") != t && n.data("showus") != -1) r.next = n.data("showus") - 1;else r.next = r.next + 1;
        n.data("showus", -1);
        if (r.next >= r.slideamount) r.next = 0;
        if (r.next < 0) r.next = 0;
        if (r.act != r.next) u(r, n);
      }

      if (r.transition == 0 && e.keyCode == 37) {
        r.next = r.next - 1;
        r.leftarrowpressed = 1;
        if (r.next < 0) r.next = r.slideamount - 1;
        u(r, n);
      }
    });
    m(n, r);
  }

  function d(t, n) {
    if (n.touchenabled == "on") {
      var r = Hammer(t, {
        drag_block_vertical: n.drag_block_vertical,
        drag_lock_to_axis: true,
        swipe_velocity: n.swipe_velocity,
        swipe_max_touches: n.swipe_max_touches,
        swipe_min_touches: n.swipe_min_touches,
        prevent_default: false
      });
      r.on("swipeleft", function () {
        if (n.transition == 0) {
          n.next = n.next + 1;
          if (n.next == n.slideamount) n.next = 0;
          u(n, t);
        }
      });
      r.on("swiperight", function () {
        if (n.transition == 0) {
          n.next = n.next - 1;
          n.leftarrowpressed = 1;
          if (n.next < 0) n.next = n.slideamount - 1;
          u(n, t);
        }
      });
      r.on("swipeup", function () {
        e("html, body").animate({
          scrollTop: t.offset().top + t.height() + "px"
        });
      });
      r.on("swipedown", function () {
        e("html, body").animate({
          scrollTop: t.offset().top - e(window).height() + "px"
        });
      });
    }
  }

  function v(e, t) {
    var n = e.parent().find(".tp-bullets");
    var r = e.parent().find(".tparrows");

    if (n == null) {
      e.append('<div class=".tp-bullets"></div>');
      var n = e.parent().find(".tp-bullets");
    }

    if (r == null) {
      e.append('<div class=".tparrows"></div>');
      var r = e.parent().find(".tparrows");
    }

    e.data("hidethumbs", t.hideThumbs);
    n.addClass("hidebullets");
    r.addClass("hidearrows");

    if (s()) {
      e.hammer().on("touch", function () {
        e.addClass("hovered");
        if (t.onHoverStop == "on") e.trigger("stoptimer");
        clearTimeout(e.data("hidethumbs"));
        n.removeClass("hidebullets");
        r.removeClass("hidearrows");
      });
      e.hammer().on("release", function () {
        e.removeClass("hovered");
        e.trigger("playtimer");
        if (!e.hasClass("hovered") && !n.hasClass("hovered")) e.data("hidethumbs", setTimeout(function () {
          n.addClass("hidebullets");
          r.addClass("hidearrows");
          e.trigger("playtimer");
        }, t.hideNavDelayOnMobile));
      });
    } else {
      n.hover(function () {
        t.overnav = true;
        if (t.onHoverStop == "on") e.trigger("stoptimer");
        n.addClass("hovered");
        clearTimeout(e.data("hidethumbs"));
        n.removeClass("hidebullets");
        r.removeClass("hidearrows");
      }, function () {
        t.overnav = false;
        e.trigger("playtimer");
        n.removeClass("hovered");
        if (!e.hasClass("hovered") && !n.hasClass("hovered")) e.data("hidethumbs", setTimeout(function () {
          n.addClass("hidebullets");
          r.addClass("hidearrows");
        }, t.hideThumbs));
      });
      r.hover(function () {
        t.overnav = true;
        if (t.onHoverStop == "on") e.trigger("stoptimer");
        n.addClass("hovered");
        clearTimeout(e.data("hidethumbs"));
        n.removeClass("hidebullets");
        r.removeClass("hidearrows");
      }, function () {
        t.overnav = false;
        e.trigger("playtimer");
        n.removeClass("hovered");
      });
      e.on("mouseenter", function () {
        e.addClass("hovered");
        if (t.onHoverStop == "on") e.trigger("stoptimer");
        clearTimeout(e.data("hidethumbs"));
        n.removeClass("hidebullets");
        r.removeClass("hidearrows");
      });
      e.on("mouseleave", function () {
        e.removeClass("hovered");
        e.trigger("playtimer");
        if (!e.hasClass("hovered") && !n.hasClass("hovered")) e.data("hidethumbs", setTimeout(function () {
          n.addClass("hidebullets");
          r.addClass("hidearrows");
        }, t.hideThumbs));
      });
    }
  }

  function m(t, n) {
    var r = t.parent();
    var i = r.find(".tp-bullets");

    if (n.navigationType == "thumb") {
      i.find(".thumb").each(function (t) {
        var r = e(this);
        r.css({
          width: n.thumbWidth * n.bw + "px",
          height: n.thumbHeight * n.bh + "px"
        });
      });
      var s = i.find(".tp-mask");
      s.width(n.thumbWidth * n.thumbAmount * n.bw);
      s.height(n.thumbHeight * n.bh);
      s.parent().width(n.thumbWidth * n.thumbAmount * n.bw);
      s.parent().height(n.thumbHeight * n.bh);
    }

    var o = r.find(".tp-leftarrow");
    var u = r.find(".tp-rightarrow");
    if (n.navigationType == "thumb" && n.navigationArrows == "nexttobullets") n.navigationArrows = "solo";

    if (n.navigationArrows == "nexttobullets") {
      o.prependTo(i).css({
        "float": "left"
      });
      u.insertBefore(i.find(".tpclear")).css({
        "float": "left"
      });
    }

    var a = 0;
    if (n.forceFullWidth == "on") a = 0 - n.container.parent().offset().left;
    var f = 0,
        l = 0;

    if (n.navigationInGrid == "on") {
      f = t.width() > n.startwidth ? (t.width() - n.startwidth) / 2 : 0, l = t.height() > n.startheight ? (t.height() - n.startheight) / 2 : 0;
    }

    if (n.navigationArrows != "none" && n.navigationArrows != "nexttobullets") {
      o.css({
        position: "absolute"
      });
      u.css({
        position: "absolute"
      });
      if (n.soloArrowLeftValign == "center") o.css({
        top: "50%",
        marginTop: n.soloArrowLeftVOffset - Math.round(o.innerHeight() / 2) + "px"
      });
      if (n.soloArrowLeftValign == "bottom") o.css({
        top: "auto",
        bottom: 0 + n.soloArrowLeftVOffset + "px"
      });
      if (n.soloArrowLeftValign == "top") o.css({
        bottom: "auto",
        top: 0 + n.soloArrowLeftVOffset + "px"
      });
      if (n.soloArrowLeftHalign == "center") o.css({
        left: "50%",
        marginLeft: a + n.soloArrowLeftHOffset - Math.round(o.innerWidth() / 2) + "px"
      });
      if (n.soloArrowLeftHalign == "left") o.css({
        left: f + n.soloArrowLeftHOffset + a + "px"
      });
      if (n.soloArrowLeftHalign == "right") o.css({
        right: f + n.soloArrowLeftHOffset - a + "px"
      });
      if (n.soloArrowRightValign == "center") u.css({
        top: "50%",
        marginTop: n.soloArrowRightVOffset - Math.round(u.innerHeight() / 2) + "px"
      });
      if (n.soloArrowRightValign == "bottom") u.css({
        top: "auto",
        bottom: 0 + n.soloArrowRightVOffset + "px"
      });
      if (n.soloArrowRightValign == "top") u.css({
        bottom: "auto",
        top: 0 + n.soloArrowRightVOffset + "px"
      });
      if (n.soloArrowRightHalign == "center") u.css({
        left: "50%",
        marginLeft: a + n.soloArrowRightHOffset - Math.round(u.innerWidth() / 2) + "px"
      });
      if (n.soloArrowRightHalign == "left") u.css({
        left: f + n.soloArrowRightHOffset + a + "px"
      });
      if (n.soloArrowRightHalign == "right") u.css({
        right: f + n.soloArrowRightHOffset - a + "px"
      });
      if (o.position() != null) o.css({
        top: Math.round(parseInt(o.position().top, 0)) + "px"
      });
      if (u.position() != null) u.css({
        top: Math.round(parseInt(u.position().top, 0)) + "px"
      });
    }

    if (n.navigationArrows == "none") {
      o.css({
        visibility: "hidden"
      });
      u.css({
        visibility: "hidden"
      });
    }

    if (n.navigationVAlign == "center") i.css({
      top: "50%",
      marginTop: n.navigationVOffset - Math.round(i.innerHeight() / 2) + "px"
    });
    if (n.navigationVAlign == "bottom") i.css({
      bottom: 0 + n.navigationVOffset + "px"
    });
    if (n.navigationVAlign == "top") i.css({
      top: 0 + n.navigationVOffset + "px"
    });
    if (n.navigationHAlign == "center") i.css({
      left: "50%",
      marginLeft: a + n.navigationHOffset - Math.round(i.innerWidth() / 2) + "px"
    });
    if (n.navigationHAlign == "left") i.css({
      left: 0 + n.navigationHOffset + a + "px"
    });
    if (n.navigationHAlign == "right") i.css({
      right: 0 + n.navigationHOffset - a + "px"
    });
  }

  function g(n, r) {
    r.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css({
      height: r.container.height()
    });
    r.container.closest(".rev_slider_wrapper").css({
      height: r.container.height()
    });
    r.width = parseInt(r.container.width(), 0);
    r.height = parseInt(r.container.height(), 0);
    r.bw = r.width / r.startwidth;
    r.bh = r.height / r.startheight;
    if (r.bh > r.bw) r.bh = r.bw;
    if (r.bh < r.bw) r.bw = r.bh;
    if (r.bw < r.bh) r.bh = r.bw;

    if (r.bh > 1) {
      r.bw = 1;
      r.bh = 1;
    }

    if (r.bw > 1) {
      r.bw = 1;
      r.bh = 1;
    }

    r.height = Math.round(r.startheight * (r.width / r.startwidth));
    if (r.height > r.startheight && r.autoHeight != "on") r.height = r.startheight;

    if (r.fullScreen == "on") {
      r.height = r.bw * r.startheight;
      var i = r.container.parent().width();
      var s = e(window).height();

      if (r.fullScreenOffsetContainer != t) {
        try {
          var o = r.fullScreenOffsetContainer.split(",");
          e.each(o, function (t, n) {
            s = s - e(n).outerHeight(true);
            if (s < r.minFullScreenHeight) s = r.minFullScreenHeight;
          });
        } catch (u) {}
      }

      r.container.parent().height(s);
      r.container.css({
        height: "100%"
      });
      r.height = s;
    } else {
      r.container.height(r.height);
    }

    r.slotw = Math.ceil(r.width / r.slots);
    if (r.fullSreen == "on") r.sloth = Math.ceil(e(window).height() / r.slots);else r.sloth = Math.ceil(r.height / r.slots);
    if (r.autoHeight == "on") r.sloth = Math.ceil(n.height() / r.slots);
  }

  function y(n, r) {
    n.find(".tp-caption").each(function () {
      e(this).addClass(e(this).data("transition"));
      e(this).addClass("start");
    });
    n.find(">ul:first").css({
      overflow: "hidden",
      width: "100%",
      height: "100%",
      maxHeight: n.parent().css("maxHeight")
    });

    if (r.autoHeight == "on") {
      n.find(">ul:first").css({
        overflow: "hidden",
        width: "100%",
        height: "100%",
        maxHeight: "none"
      });
      n.css({
        maxHeight: "none"
      });
      n.parent().css({
        maxHeight: "none"
      });
    }

    n.find(">ul:first >li").each(function (n) {
      var r = e(this);
      r.css({
        width: "100%",
        height: "100%",
        overflow: "hidden"
      });

      if (r.data("link") != t) {
        var i = r.data("link");
        var s = "_self";
        var o = 60;
        if (r.data("slideindex") == "back") o = 0;
        var u = r.data("linktoslide");
        if (r.data("target") != t) s = r.data("target");

        if (i == "slide") {
          r.append('<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' + o + ';" data-x="0" data-y="0" data-linktoslide="' + u + '" data-start="0"><a style="width:100%;height:100%;display:block"><span style="width:100%;height:100%;display:block"></span></a></div>');
        } else {
          u = "no";
          r.append('<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' + o + ';" data-x="0" data-y="0" data-linktoslide="' + u + '" data-start="0"><a style="width:100%;height:100%;display:block" target="' + s + '" href="' + i + '"><span style="width:100%;height:100%;display:block"></span></a></div>');
        }
      }
    });
    n.parent().css({
      overflow: "visible"
    });
    n.find(">ul:first >li >img").each(function (n) {
      var i = e(this);
      i.addClass("defaultimg");

      if (i.data("lazyload") != t && i.data("lazydone") != 1) {} else {
        g(i, r);
      }

      i.wrap('<div class="slotholder" style="width:100%;height:100%;"' + 'data-duration="' + i.data("duration") + '"' + 'data-zoomstart="' + i.data("zoomstart") + '"' + 'data-zoomend="' + i.data("zoomend") + '"' + 'data-rotationstart="' + i.data("rotationstart") + '"' + 'data-rotationend="' + i.data("rotationend") + '"' + 'data-ease="' + i.data("ease") + '"' + 'data-duration="' + i.data("duration") + '"' + 'data-bgpositionend="' + i.data("bgpositionend") + '"' + 'data-bgposition="' + i.data("bgposition") + '"' + 'data-duration="' + i.data("duration") + '"' + 'data-kenburns="' + i.data("kenburns") + '"' + 'data-easeme="' + i.data("ease") + '"' + 'data-bgfit="' + i.data("bgfit") + '"' + 'data-bgfitend="' + i.data("bgfitend") + '"' + 'data-owidth="' + i.data("owidth") + '"' + 'data-oheight="' + i.data("oheight") + '"' + "></div>");
      if (r.dottedOverlay != "none" && r.dottedOverlay != t) i.closest(".slotholder").append('<div class="tp-dottedoverlay ' + r.dottedOverlay + '"></div>');
      var s = i.attr("src");
      var u = i.data("lazyload");
      var a = i.data("bgfit");
      var f = i.data("bgrepeat");
      var l = i.data("bgposition");
      if (a == t) a = "cover";
      if (f == t) f = "no-repeat";
      if (l == t) l = "center center";
      var c = i.closest(".slotholder");
      i.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="' + i.data("lazyload") + '" data-bgfit="' + a + '"data-bgposition="' + l + '" data-bgrepeat="' + f + '" data-lazydone="' + i.data("lazydone") + '" src="' + s + '" data-src="' + s + '" style="background-color:' + i.css("backgroundColor") + ";background-repeat:" + f + ";background-image:url(" + s + ");background-size:" + a + ";background-position:" + l + ';width:100%;height:100%;"></div>');

      if (o(8)) {
        c.find(".tp-bgimg").css({
          backgroundImage: "none",
          "background-image": "none"
        });
        c.find(".tp-bgimg").append('<img class="ieeightfallbackimage defaultimg" src="' + s + '" style="width:100%">');
      }

      i.css({
        opacity: 0
      });
      i.data("li-id", n);
    });
  }

  function b(e, n, r, i) {
    var s = e;
    var u = s.find(".defaultimg");
    var a = s.data("zoomstart");
    var f = s.data("rotationstart");
    if (u.data("currotate") != t) f = u.data("currotate");
    if (u.data("curscale") != t) a = u.data("curscale");
    g(u, n);
    var l = u.data("src");
    var c = u.css("background-color");
    var h = n.width;
    var p = n.height;
    if (n.autoHeight == "on") p = n.container.height();
    var d = u.data("fxof");
    if (d == t) d = 0;
    fullyoff = 0;
    var v = 0;
    var m = u.data("bgfit");
    var y = u.data("bgrepeat");
    var b = u.data("bgposition");
    if (m == t) m = "cover";
    if (y == t) y = "no-repeat";
    if (b == t) b = "center center";

    if (o(8)) {
      s.data("kenburns", "off");
    }

    if (s.data("kenburns") == "on") {
      m = a;
      if (m.toString().length < 4) m = H(m, s, n);
    }

    if (o(8)) {
      var w = l;
      l = "";
    }

    if (i == "horizontal") {
      if (!r) var v = 0 - n.slotw;

      for (var S = 0; S < n.slots; S++) {
        s.append('<div class="slot" style="position:absolute;' + "top:" + (0 + fullyoff) + "px;" + "left:" + (d + S * n.slotw) + "px;" + "overflow:hidden;width:" + (n.slotw + .6) + "px;" + "height:" + p + 'px">' + '<div class="slotslide" style="position:absolute;' + "top:0px;left:" + v + "px;" + "width:" + (n.slotw + .6) + "px;" + "height:" + p + 'px;overflow:hidden;">' + '<div style="background-color:' + c + ";" + "position:absolute;top:0px;" + "left:" + (0 - S * n.slotw) + "px;" + "width:" + h + "px;height:" + p + "px;" + "background-image:url(" + l + ");" + "background-repeat:" + y + ";" + "background-size:" + m + ";background-position:" + b + ';">' + "</div></div></div>");
        if (a != t && f != t) TweenLite.set(s.find(".slot").last(), {
          rotationZ: f
        });

        if (o(8)) {
          s.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + w + '" style="width:100%;height:auto">');
          E(s, n);
        }
      }
    } else {
      if (!r) var v = 0 - n.sloth;

      for (var S = 0; S < n.slots + 2; S++) {
        s.append('<div class="slot" style="position:absolute;' + "top:" + (fullyoff + S * n.sloth) + "px;" + "left:" + d + "px;" + "overflow:hidden;" + "width:" + h + "px;" + "height:" + n.sloth + 'px">' + '<div class="slotslide" style="position:absolute;' + "top:" + v + "px;" + "left:0px;width:" + h + "px;" + "height:" + n.sloth + "px;" + 'overflow:hidden;">' + '<div style="background-color:' + c + ";" + "position:absolute;" + "top:" + (0 - S * n.sloth) + "px;" + "left:0px;" + "width:" + h + "px;height:" + p + "px;" + "background-image:url(" + l + ");" + "background-repeat:" + y + ";" + "background-size:" + m + ";background-position:" + b + ';">' + "</div></div></div>");
        if (a != t && f != t) TweenLite.set(s.find(".slot").last(), {
          rotationZ: f
        });

        if (o(8)) {
          s.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + w + '" style="width:100%;height:auto;">');
          E(s, n);
        }
      }
    }
  }

  function w(e, n, r) {
    var i = e;
    var s = i.find(".defaultimg");
    var u = i.data("zoomstart");
    var a = i.data("rotationstart");
    if (s.data("currotate") != t) a = s.data("currotate");
    if (s.data("curscale") != t) u = s.data("curscale") * 100;
    g(s, n);
    var f = s.data("src");
    var l = s.css("backgroundColor");
    var c = n.width;
    var h = n.height;
    if (n.autoHeight == "on") h = n.container.height();
    var p = s.data("fxof");
    if (p == t) p = 0;
    fullyoff = 0;
    var d = 0;

    if (o(8)) {
      var v = f;
      f = "";
    }

    var m = 0;
    if (n.sloth > n.slotw) m = n.sloth;else m = n.slotw;

    if (!r) {
      var d = 0 - m;
    }

    n.slotw = m;
    n.sloth = m;
    var y = 0;
    var b = 0;
    var w = s.data("bgfit");
    var S = s.data("bgrepeat");
    var x = s.data("bgposition");
    if (w == t) w = "cover";
    if (S == t) S = "no-repeat";
    if (x == t) x = "center center";

    if (i.data("kenburns") == "on") {
      w = u;
      if (w.toString().length < 4) w = H(w, i, n);
    }

    for (var T = 0; T < n.slots; T++) {
      b = 0;

      for (var N = 0; N < n.slots; N++) {
        i.append('<div class="slot" ' + 'style="position:absolute;' + "top:" + (fullyoff + b) + "px;" + "left:" + (p + y) + "px;" + "width:" + m + "px;" + "height:" + m + "px;" + 'overflow:hidden;">' + '<div class="slotslide" data-x="' + y + '" data-y="' + b + '" ' + 'style="position:absolute;' + "top:" + 0 + "px;" + "left:" + 0 + "px;" + "width:" + m + "px;" + "height:" + m + "px;" + 'overflow:hidden;">' + '<div style="position:absolute;' + "top:" + (0 - b) + "px;" + "left:" + (0 - y) + "px;" + "width:" + c + "px;" + "height:" + h + "px;" + "background-color:" + l + ";" + "background-image:url(" + f + ");" + "background-repeat:" + S + ";" + "background-size:" + w + ";background-position:" + x + ';">' + "</div></div></div>");
        b = b + m;

        if (o(8)) {
          i.find(".slot ").last().find(".slotslide").append('<img src="' + v + '">');
          E(i, n);
        }

        if (u != t && a != t) TweenLite.set(i.find(".slot").last(), {
          rotationZ: a
        });
      }

      y = y + m;
    }
  }

  function E(e, t) {
    if (o(8)) {
      var n = e.find(".ieeightfallbackimage");
      var r = n.width(),
          i = n.height();
      if (t.startwidth / t.startheight < e.data("owidth") / e.data("oheight")) n.css({
        width: "auto",
        height: "100%"
      });else n.css({
        width: "100%",
        height: "auto"
      });
      setTimeout(function () {
        var r = n.width(),
            i = n.height();
        if (e.data("bgposition") == "center center") n.css({
          position: "absolute",
          top: t.height / 2 - i / 2 + "px",
          left: t.width / 2 - r / 2 + "px"
        });
        if (e.data("bgposition") == "center top" || e.data("bgposition") == "top center") n.css({
          position: "absolute",
          top: "0px",
          left: t.width / 2 - r / 2 + "px"
        });
        if (e.data("bgposition") == "center bottom" || e.data("bgposition") == "bottom center") n.css({
          position: "absolute",
          bottom: "0px",
          left: t.width / 2 - r / 2 + "px"
        });
        if (e.data("bgposition") == "right top" || e.data("bgposition") == "top right") n.css({
          position: "absolute",
          top: "0px",
          right: "0px"
        });
        if (e.data("bgposition") == "right bottom" || e.data("bgposition") == "bottom right") n.css({
          position: "absolute",
          bottom: "0px",
          right: "0px"
        });
        if (e.data("bgposition") == "right center" || e.data("bgposition") == "center right") n.css({
          position: "absolute",
          top: t.height / 2 - i / 2 + "px",
          right: "0px"
        });
        if (e.data("bgposition") == "left bottom" || e.data("bgposition") == "bottom left") n.css({
          position: "absolute",
          bottom: "0px",
          left: "0px"
        });
        if (e.data("bgposition") == "left center" || e.data("bgposition") == "center left") n.css({
          position: "absolute",
          top: t.height / 2 - i / 2 + "px",
          left: "0px"
        });
      }, 20);
    }
  }

  function S(n, r, i) {
    if (i == t) i == 80;
    setTimeout(function () {
      n.find(".slotholder .slot").each(function () {
        clearTimeout(e(this).data("tout"));
        e(this).remove();
      });
      r.transition = 0;
    }, i);
  }

  function x(n, r) {
    n.find("img, .defaultimg").each(function (n) {
      var i = e(this);

      if (i.data("lazyload") != i.attr("src") && r < 3 && i.data("lazyload") != t && i.data("lazyload") != "undefined") {
        if (i.data("lazyload") != t && i.data("lazyload") != "undefined") {
          i.attr("src", i.data("lazyload"));
          var s = new Image();

          s.onload = function (e) {
            i.data("lazydone", 1);
            if (i.hasClass("defaultimg")) T(i, s);
          };

          s.error = function () {
            i.data("lazydone", 1);
          };

          s.src = i.attr("src");

          if (s.complete) {
            if (i.hasClass("defaultimg")) T(i, s);
            i.data("lazydone", 1);
          }
        }
      } else {
        if ((i.data("lazyload") === t || i.data("lazyload") === "undefined") && i.data("lazydone") != 1) {
          var s = new Image();

          s.onload = function () {
            if (i.hasClass("defaultimg")) T(i, s);
            i.data("lazydone", 1);
          };

          s.error = function () {
            i.data("lazydone", 1);
          };

          if (i.attr("src") != t && i.attr("src") != "undefined") {
            s.src = i.attr("src");
          } else s.src = i.data("src");

          if (s.complete) {
            if (i.hasClass("defaultimg")) {
              T(i, s);
            }

            i.data("lazydone", 1);
          }
        }
      }
    });
  }

  function T(e, t) {
    var n = e.closest("li");
    var r = t.width;
    var i = t.height;
    n.data("owidth", r);
    n.data("oheight", i);
    n.find(".slotholder").data("owidth", r);
    n.find(".slotholder").data("oheight", i);
    n.data("loadeddone", 1);
  }

  function C(e, n) {
    try {
      var r = e.find(">ul:first-child >li:eq(" + n.act + ")");
    } catch (i) {
      var r = e.find(">ul:first-child >li:eq(1)");
    }

    n.lastslide = n.act;
    var s = e.find(">ul:first-child >li:eq(" + n.next + ")");
    var u = s.find(".defaultimg");
    n.bannertimeronpause = true;
    e.trigger("stoptimer");
    n.cd = 0;

    if (u.data("lazyload") != t && u.data("lazyload") != "undefined" && u.data("lazydone") != 1) {
      if (!o(8)) u.css({
        backgroundImage: 'url("' + s.find(".defaultimg").data("lazyload") + '")'
      });else {
        u.attr("src", s.find(".defaultimg").data("lazyload"));
      }
      u.data("src", s.find(".defaultimg").data("lazyload"));
      u.data("lazydone", 1);
      u.data("orgw", 0);
      s.data("loadeddone", 1);
      TweenLite.set(e.find(".tp-loader"), {
        display: "block",
        opacity: 0
      });
      TweenLite.to(e.find(".tp-loader"), .3, {
        autoAlpha: 1
      });
      N(s, function () {
        k(n, u, e);
      }, n);
    } else {
      if (s.data("loadeddone") === t) {
        s.data("loadeddone", 1);
        N(s, function () {
          k(n, u, e);
        }, n);
      } else k(n, u, e);
    }
  }

  function k(e, t, n) {
    e.bannertimeronpause = false;
    e.cd = 0;
    n.trigger("nulltimer");
    TweenLite.to(n.find(".tp-loader"), .3, {
      autoAlpha: 0
    });
    g(t, e);
    m(n, e);
    g(t, e);
    L(n, e);
  }

  function L(n, r) {
    function x() {
      e.each(v, function (e, t) {
        if (t[0] == p || t[8] == p) {
          l = t[1];
          d = t[2];
          y = E;
        }

        E = E + 1;
      });
    }

    n.trigger("revolution.slide.onbeforeswap");
    r.transition = 1;
    r.videoplaying = false;

    try {
      var i = n.find(">ul:first-child >li:eq(" + r.act + ")");
    } catch (s) {
      var i = n.find(">ul:first-child >li:eq(1)");
    }

    r.lastslide = r.act;
    var u = n.find(">ul:first-child >li:eq(" + r.next + ")");
    var a = i.find(".slotholder");
    var f = u.find(".slotholder");
    i.css({
      visibility: "visible"
    });
    u.css({
      visibility: "visible"
    });

    if (f.data("kenburns") == "on") {
      _(n, r);

      TweenLite.set(n.find(".kenburnimg img"), {
        autoAlpha: 0
      });
    }

    if (r.ie) {
      if (p == "boxfade") p = "boxslide";
      if (p == "slotfade-vertical") p = "slotzoom-vertical";
      if (p == "slotfade-horizontal") p = "slotzoom-horizontal";
    }

    if (u.data("delay") != t) {
      r.cd = 0;
      r.delay = u.data("delay");
    } else {
      r.delay = r.origcd;
    }

    n.trigger("restarttimer");
    i.css({
      left: "0px",
      top: "0px"
    });
    u.css({
      left: "0px",
      top: "0px"
    });

    if (u.data("differentissplayed") == "prepared") {
      u.data("differentissplayed", "done");
      u.data("transition", u.data("savedtransition"));
      u.data("slotamount", u.data("savedslotamount"));
      u.data("masterspeed", u.data("savedmasterspeed"));
    }

    if (u.data("fstransition") != t && u.data("differentissplayed") != "done") {
      u.data("savedtransition", u.data("transition"));
      u.data("savedslotamount", u.data("slotamount"));
      u.data("savedmasterspeed", u.data("masterspeed"));
      u.data("transition", u.data("fstransition"));
      u.data("slotamount", u.data("fsslotamount"));
      u.data("masterspeed", u.data("fsmasterspeed"));
      u.data("differentissplayed", "prepared");
    }

    var l = 0;
    var c = u.data("transition").split(",");
    var h = u.data("nexttransid");

    if (h == t) {
      h = 0;
      u.data("nexttransid", h);
    } else {
      h = h + 1;
      if (h == c.length) h = 0;
      u.data("nexttransid", h);
    }

    var p = c[h];
    var d = 0;

    if (r.parallax == "scroll" && r.parallaxFirstGo == t) {
      r.parallaxFirstGo = true;
      M(n, r);
      setTimeout(function () {
        M(n, r);
      }, 210);
      setTimeout(function () {
        M(n, r);
      }, 420);
    }

    if (p == "slidehorizontal") {
      p = "slideleft";
      if (r.leftarrowpressed == 1) p = "slideright";
    }

    if (p == "slidevertical") {
      p = "slideup";
      if (r.leftarrowpressed == 1) p = "slidedown";
    }

    var v = [["boxslide", 0, 1, 10, 0, "box", false, null, 0], ["boxfade", 1, 0, 10, 0, "box", false, null, 1], ["slotslide-horizontal", 2, 0, 0, 200, "horizontal", true, false, 2], ["slotslide-vertical", 3, 0, 0, 200, "vertical", true, false, 3], ["curtain-1", 4, 3, 0, 0, "horizontal", true, true, 4], ["curtain-2", 5, 3, 0, 0, "horizontal", true, true, 5], ["curtain-3", 6, 3, 25, 0, "horizontal", true, true, 6], ["slotzoom-horizontal", 7, 0, 0, 400, "horizontal", true, true, 7], ["slotzoom-vertical", 8, 0, 0, 0, "vertical", true, true, 8], ["slotfade-horizontal", 9, 0, 0, 500, "horizontal", true, null, 9], ["slotfade-vertical", 10, 0, 0, 500, "vertical", true, null, 10], ["fade", 11, 0, 1, 300, "horizontal", true, null, 11], ["slideleft", 12, 0, 1, 0, "horizontal", true, true, 12], ["slideup", 13, 0, 1, 0, "horizontal", true, true, 13], ["slidedown", 14, 0, 1, 0, "horizontal", true, true, 14], ["slideright", 15, 0, 1, 0, "horizontal", true, true, 15], ["papercut", 16, 0, 0, 600, "", null, null, 16], ["3dcurtain-horizontal", 17, 0, 20, 100, "vertical", false, true, 17], ["3dcurtain-vertical", 18, 0, 10, 100, "horizontal", false, true, 18], ["cubic", 19, 0, 20, 600, "horizontal", false, true, 19], ["cube", 19, 0, 20, 600, "horizontal", false, true, 20], ["flyin", 20, 0, 4, 600, "vertical", false, true, 21], ["turnoff", 21, 0, 1, 1600, "horizontal", false, true, 22], ["incube", 22, 0, 20, 600, "horizontal", false, true, 23], ["cubic-horizontal", 23, 0, 20, 500, "vertical", false, true, 24], ["cube-horizontal", 23, 0, 20, 500, "vertical", false, true, 25], ["incube-horizontal", 24, 0, 20, 500, "vertical", false, true, 26], ["turnoff-vertical", 25, 0, 1, 1600, "horizontal", false, true, 27], ["fadefromright", 12, 1, 1, 0, "horizontal", true, true, 28], ["fadefromleft", 15, 1, 1, 0, "horizontal", true, true, 29], ["fadefromtop", 14, 1, 1, 0, "horizontal", true, true, 30], ["fadefrombottom", 13, 1, 1, 0, "horizontal", true, true, 31], ["fadetoleftfadefromright", 12, 2, 1, 0, "horizontal", true, true, 32], ["fadetorightfadetoleft", 15, 2, 1, 0, "horizontal", true, true, 33], ["fadetobottomfadefromtop", 14, 2, 1, 0, "horizontal", true, true, 34], ["fadetotopfadefrombottom", 13, 2, 1, 0, "horizontal", true, true, 35], ["parallaxtoright", 12, 3, 1, 0, "horizontal", true, true, 36], ["parallaxtoleft", 15, 3, 1, 0, "horizontal", true, true, 37], ["parallaxtotop", 14, 3, 1, 0, "horizontal", true, true, 38], ["parallaxtobottom", 13, 3, 1, 0, "horizontal", true, true, 39], ["scaledownfromright", 12, 4, 1, 0, "horizontal", true, true, 40], ["scaledownfromleft", 15, 4, 1, 0, "horizontal", true, true, 41], ["scaledownfromtop", 14, 4, 1, 0, "horizontal", true, true, 42], ["scaledownfrombottom", 13, 4, 1, 0, "horizontal", true, true, 43], ["zoomout", 13, 5, 1, 0, "horizontal", true, true, 44], ["zoomin", 13, 6, 1, 0, "horizontal", true, true, 45], ["notransition", 26, 0, 1, 0, "horizontal", true, null, 46]];
    var m = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
    var g = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
    var l = 0;
    var d = 1;
    var y = 0;
    var E = 0;
    var S = new Array();

    if (p == "random") {
      p = Math.round(Math.random() * v.length - 1);
      if (p > v.length - 1) p = v.length - 1;
    }

    if (p == "random-static") {
      p = Math.round(Math.random() * m.length - 1);
      if (p > m.length - 1) p = m.length - 1;
      p = m[p];
    }

    if (p == "random-premium") {
      p = Math.round(Math.random() * g.length - 1);
      if (p > g.length - 1) p = g.length - 1;
      p = g[p];
    }

    if (r.isJoomla == true && p == 16) {
      p = Math.round(Math.random() * g.length - 2) + 1;
      if (p > g.length - 1) p = g.length - 1;
      p = g[p];
    }

    x();

    if (o(8) && l > 15 && l < 28) {
      p = Math.round(Math.random() * m.length - 1);
      if (p > m.length - 1) p = m.length - 1;
      p = m[p];
      E = 0;
      x();
    }

    var T = -1;
    if (r.leftarrowpressed == 1 || r.act > r.next) T = 1;
    r.leftarrowpressed = 0;
    if (l > 26) l = 26;
    if (l < 0) l = 0;
    var N = 300;
    if (u.data("masterspeed") != t && u.data("masterspeed") > 99 && u.data("masterspeed") < 4001) N = u.data("masterspeed");
    S = v[y];
    n.parent().find(".bullet").each(function () {
      var t = e(this);
      t.removeClass("selected");

      if (r.navigationArrows == "withbullet" || r.navigationArrows == "nexttobullets") {
        if (t.index() - 1 == r.next) t.addClass("selected");
      } else {
        if (t.index() == r.next) t.addClass("selected");
      }
    });
    n.find(">li").each(function () {
      var t = e(this);
      if (t.index != r.act && t.index != r.next) t.css({
        "z-index": 16
      });
    });
    i.css({
      "z-index": 18
    });
    u.css({
      "z-index": 20
    });
    u.css({
      opacity: 0
    });

    if (i.index() != u.index() && r.firststart != 1) {
      Y(i, r);
    }

    J(u, r);

    if (u.data("slotamount") == t || u.data("slotamount") < 1) {
      r.slots = Math.round(Math.random() * 12 + 4);
      if (p == "boxslide") r.slots = Math.round(Math.random() * 6 + 3);else if (p == "flyin") r.slots = Math.round(Math.random() * 4 + 1);
    } else {
      r.slots = u.data("slotamount");
    }

    if (u.data("rotate") == t) r.rotate = 0;else if (u.data("rotate") == 999) r.rotate = Math.round(Math.random() * 360);else r.rotate = u.data("rotate");
    if (!e.support.transition || r.ie || r.ie9) r.rotate = 0;

    if (r.firststart == 1) {
      i.css({
        opacity: 0
      });
      r.firststart = 0;
    }

    N = N + S[4];
    if ((l == 4 || l == 5 || l == 6) && r.slots < 3) r.slots = 3;
    if (S[3] != 0) r.slots = Math.min(r.slots, S[3]);
    if (l == 9) r.slots = r.width / 20;
    if (l == 10) r.slots = r.height / 20;

    if (S[5] == "box") {
      if (S[7] != null) w(a, r, S[7]);
      if (S[6] != null) w(f, r, S[6]);
    } else if (S[5] == "vertical" || S[5] == "horizontal") {
      if (S[7] != null) b(a, r, S[7], S[5]);
      if (S[6] != null) b(f, r, S[6], S[5]);
    }

    if (l < 12 || l > 16) u.css({
      opacity: 1
    });

    if (l == 0) {
      f.find(".defaultimg").css({
        opacity: 0
      });
      var C = Math.ceil(r.height / r.sloth);
      var k = 0;
      f.find(".slotslide").each(function (t) {
        var s = e(this);
        k = k + 1;
        if (k == C) k = 0;
        TweenLite.fromTo(s, N / 600, {
          opacity: 0,
          top: 0 - r.sloth,
          left: 0 - r.slotw,
          rotation: r.rotate
        }, {
          opacity: 1,
          transformPerspective: 600,
          top: 0,
          left: 0,
          scale: 1,
          rotation: 0,
          delay: (t * 15 + k * 30) / 1500,
          ease: Power2.easeOut,
          onComplete: function onComplete() {
            if (t == r.slots * r.slots - 1) {
              q(n, r, f, a, u, i);
            }
          }
        });
      });
    }

    if (l == 1) {
      f.find(".defaultimg").css({
        opacity: 0
      });
      var L;
      f.find(".slotslide").each(function (t) {
        var n = e(this);
        rand = Math.random() * N + 300;
        rand2 = Math.random() * 500 + 200;
        if (rand + rand2 > L) L = rand2 + rand2;
        TweenLite.fromTo(n, rand / 1e3, {
          opacity: 0,
          transformPerspective: 600,
          rotation: r.rotate
        }, {
          opacity: 1,
          ease: Power2.easeInOut,
          rotation: 0,
          delay: rand2 / 1e3
        });
      });
      setTimeout(function () {
        q(n, r, f, a, u, i);
      }, N + 300);
    }

    if (l == 2) {
      f.find(".defaultimg").css({
        opacity: 0
      });
      a.find(".slotslide").each(function () {
        var t = e(this);
        TweenLite.to(t, N / 1e3, {
          left: r.slotw,
          rotation: 0 - r.rotate,
          onComplete: function onComplete() {
            q(n, r, f, a, u, i);
          }
        });
      });
      f.find(".slotslide").each(function () {
        var t = e(this);
        TweenLite.fromTo(t, N / 1e3, {
          left: 0 - r.slotw,
          rotation: r.rotate,
          transformPerspective: 600
        }, {
          left: 0,
          rotation: 0,
          ease: Power2.easeOut,
          onComplete: function onComplete() {
            q(n, r, f, a, u, i);
          }
        });
      });
    }

    if (l == 3) {
      f.find(".defaultimg").css({
        opacity: 0
      });
      a.find(".slotslide").each(function () {
        var t = e(this);
        TweenLite.to(t, N / 1e3, {
          top: r.sloth,
          rotation: r.rotate,
          transformPerspective: 600,
          onComplete: function onComplete() {
            q(n, r, f, a, u, i);
          }
        });
      });
      f.find(".slotslide").each(function () {
        var t = e(this);
        TweenLite.fromTo(t, N / 1e3, {
          top: 0 - r.sloth,
          rotation: r.rotate,
          transformPerspective: 600
        }, {
          top: 0,
          rotation: 0,
          ease: Power2.easeOut,
          onComplete: function onComplete() {
            q(n, r, f, a, u, i);
          }
        });
      });
    }

    if (l == 4 || l == 5) {
      f.find(".defaultimg").css({
        opacity: 0
      });
      setTimeout(function () {
        a.find(".defaultimg").css({
          opacity: 0
        });
      }, 100);
      var A = N / 1e3;
      var O = A;
      a.find(".slotslide").each(function (t) {
        var n = e(this);
        var i = t * A / r.slots;
        if (l == 5) i = (r.slots - t - 1) * A / r.slots / 1.5;
        TweenLite.to(n, A * 3, {
          transformPerspective: 600,
          top: 0 + r.height,
          opacity: .5,
          rotation: r.rotate,
          ease: Power2.easeInOut,
          delay: i
        });
      });
      f.find(".slotslide").each(function (t) {
        var s = e(this);
        var o = t * A / r.slots;
        if (l == 5) o = (r.slots - t - 1) * A / r.slots / 1.5;
        TweenLite.fromTo(s, A * 3, {
          top: 0 - r.height,
          opacity: .5,
          rotation: r.rotate,
          transformPerspective: 600
        }, {
          top: 0,
          opacity: 1,
          rotation: 0,
          ease: Power2.easeInOut,
          delay: o,
          onComplete: function onComplete() {
            if (t == r.slots - 1) {
              q(n, r, f, a, u, i);
            }
          }
        });
      });
    }

    if (l == 6) {
      if (r.slots < 2) r.slots = 2;
      f.find(".defaultimg").css({
        opacity: 0
      });
      setTimeout(function () {
        a.find(".defaultimg").css({
          opacity: 0
        });
      }, 100);
      a.find(".slotslide").each(function (t) {
        var n = e(this);
        if (t < r.slots / 2) var i = (t + 2) * 60;else var i = (2 + r.slots - t) * 60;
        TweenLite.to(n, (N + i) / 1e3, {
          top: 0 + r.height,
          opacity: 1,
          rotation: r.rotate,
          transformPerspective: 600,
          ease: Power2.easeInOut
        });
      });
      f.find(".slotslide").each(function (t) {
        var s = e(this);
        if (t < r.slots / 2) var o = (t + 2) * 60;else var o = (2 + r.slots - t) * 60;
        TweenLite.fromTo(s, (N + o) / 1e3, {
          top: 0 - r.height,
          opacity: 1,
          rotation: r.rotate,
          transformPerspective: 600
        }, {
          top: 0,
          opacity: 1,
          rotation: 0,
          ease: Power2.easeInOut,
          onComplete: function onComplete() {
            if (t == Math.round(r.slots / 2)) {
              q(n, r, f, a, u, i);
            }
          }
        });
      });
    }

    if (l == 7) {
      N = N * 2;
      f.find(".defaultimg").css({
        opacity: 0
      });
      setTimeout(function () {
        a.find(".defaultimg").css({
          opacity: 0
        });
      }, 100);
      a.find(".slotslide").each(function () {
        var t = e(this).find("div");
        TweenLite.to(t, N / 1e3, {
          left: 0 - r.slotw / 2 + "px",
          top: 0 - r.height / 2 + "px",
          width: r.slotw * 2 + "px",
          height: r.height * 2 + "px",
          opacity: 0,
          rotation: r.rotate,
          transformPerspective: 600,
          ease: Power2.easeOut
        });
      });
      f.find(".slotslide").each(function (t) {
        var s = e(this).find("div");
        TweenLite.fromTo(s, N / 1e3, {
          left: 0,
          top: 0,
          opacity: 0,
          transformPerspective: 600
        }, {
          left: 0 - t * r.slotw + "px",
          ease: Power2.easeOut,
          top: 0 + "px",
          width: r.width,
          height: r.height,
          opacity: 1,
          rotation: 0,
          delay: .1,
          onComplete: function onComplete() {
            q(n, r, f, a, u, i);
          }
        });
      });
    }

    if (l == 8) {
      N = N * 3;
      f.find(".defaultimg").css({
        opacity: 0
      });
      a.find(".slotslide").each(function () {
        var t = e(this).find("div");
        TweenLite.to(t, N / 1e3, {
          left: 0 - r.width / 2 + "px",
          top: 0 - r.sloth / 2 + "px",
          width: r.width * 2 + "px",
          height: r.sloth * 2 + "px",
          transformPerspective: 600,
          opacity: 0,
          rotation: r.rotate
        });
      });
      f.find(".slotslide").each(function (t) {
        var s = e(this).find("div");
        TweenLite.fromTo(s, N / 1e3, {
          left: 0,
          top: 0,
          opacity: 0,
          transformPerspective: 600
        }, {
          left: 0 + "px",
          top: 0 - t * r.sloth + "px",
          width: f.find(".defaultimg").data("neww") + "px",
          height: f.find(".defaultimg").data("newh") + "px",
          opacity: 1,
          rotation: 0,
          onComplete: function onComplete() {
            q(n, r, f, a, u, i);
          }
        });
      });
    }

    if (l == 9 || l == 10) {
      f.find(".defaultimg").css({
        opacity: 0
      });
      var D = 0;
      f.find(".slotslide").each(function (t) {
        var n = e(this);
        D++;
        TweenLite.fromTo(n, N / 1e3, {
          opacity: 0,
          transformPerspective: 600,
          left: 0,
          top: 0
        }, {
          opacity: 1,
          ease: Power2.easeInOut,
          delay: t * 4 / 1e3
        });
      });
      setTimeout(function () {
        q(n, r, f, a, u, i);
      }, N + D * 4);
    }

    if (l == 11 || l == 26) {
      f.find(".defaultimg").css({
        opacity: 0,
        position: "relative"
      });
      var D = 0;
      if (l == 26) N = 0;
      f.find(".slotslide").each(function (t) {
        var n = e(this);
        TweenLite.fromTo(n, N / 1e3, {
          opacity: 0
        }, {
          opacity: 1,
          ease: Power2.easeInOut
        });
      });
      setTimeout(function () {
        q(n, r, f, a, u, i);
      }, N + 15);
    }

    if (l == 12 || l == 13 || l == 14 || l == 15) {
      setTimeout(function () {
        a.find(".defaultimg").css({
          opacity: 0
        });
      }, 100);
      f.find(".defaultimg").css({
        opacity: 0
      });
      var P = r.width;
      var H = r.height;
      var B = f.find(".slotslide");

      if (r.fullWidth == "on" || r.fullSreen == "on") {
        P = B.width();
        H = B.height();
      }

      var j = 0;
      var F = 0;
      if (l == 12) j = P;else if (l == 15) j = 0 - P;else if (l == 13) F = H;else if (l == 14) F = 0 - H;
      var I = 1;
      var R = 1;
      var U = 1;
      var z = Power2.easeInOut;
      var W = Power2.easeInOut;
      var X = N / 1e3;
      var V = X;
      if (d == 1) I = 0;
      if (d == 2) I = 0;

      if (d == 3) {
        z = Power2.easeInOut;
        W = Power1.easeInOut;
        i.css({
          position: "absolute",
          "z-index": 20
        });
        u.css({
          position: "absolute",
          "z-index": 15
        });
        X = N / 1200;
      }

      if (d == 4 || d == 5) R = .6;
      if (d == 6) R = 1.4;

      if (d == 5 || d == 6) {
        U = 1.4;
        I = 0;
        P = 0;
        H = 0;
        j = 0;
        F = 0;
      }

      if (d == 6) U = .6;
      TweenLite.fromTo(B, X, {
        left: j,
        top: F,
        scale: U,
        opacity: I,
        rotation: r.rotate
      }, {
        opacity: 1,
        rotation: 0,
        left: 0,
        top: 0,
        scale: 1,
        ease: W,
        onComplete: function onComplete() {
          q(n, r, f, a, u, i);
          i.css({
            position: "absolute",
            "z-index": 18
          });
          u.css({
            position: "absolute",
            "z-index": 20
          });
        }
      });
      var $ = a.find(".slotslide");

      if (d == 4 || d == 5) {
        P = 0;
        H = 0;
      }

      if (d != 1) {
        if (l == 12) TweenLite.to($, V, {
          left: 0 - P + "px",
          scale: R,
          opacity: I,
          rotation: r.rotate,
          ease: z
        });else if (l == 15) TweenLite.to($, V, {
          left: P + "px",
          scale: R,
          opacity: I,
          rotation: r.rotate,
          ease: z
        });else if (l == 13) TweenLite.to($, V, {
          top: 0 - H + "px",
          scale: R,
          opacity: I,
          rotation: r.rotate,
          ease: z
        });else if (l == 14) TweenLite.to($, V, {
          top: H + "px",
          scale: R,
          opacity: I,
          rotation: r.rotate,
          ease: z
        });
      }

      u.css({
        opacity: 1
      });
    }

    if (l == 16) {
      i.css({
        position: "absolute",
        "z-index": 20
      });
      u.css({
        position: "absolute",
        "z-index": 15
      });
      i.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>');
      i.find(".tp-half-one").clone(true).appendTo(i).addClass("tp-half-two");
      i.find(".tp-half-two").removeClass("tp-half-one");
      var P = r.width;
      var H = r.height;
      if (r.autoHeight == "on") H = n.height();
      i.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:' + P + "px;height:" + H + 'px;"></div>');
      i.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:' + P + "px;height:" + H + 'px;"></div>');
      i.find(".tp-half-two .defaultimg").css({
        position: "absolute",
        top: "-50%"
      });
      i.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px"></div>');
      TweenLite.set(i.find(".tp-half-two"), {
        width: P,
        height: H,
        overflow: "hidden",
        zIndex: 15,
        position: "absolute",
        top: H / 2,
        left: "0px",
        transformPerspective: 600,
        transformOrigin: "center bottom"
      });
      TweenLite.set(i.find(".tp-half-one"), {
        width: P,
        height: H / 2,
        overflow: "visible",
        zIndex: 10,
        position: "absolute",
        top: "0px",
        left: "0px",
        transformPerspective: 600,
        transformOrigin: "center top"
      });
      var K = i.find(".defaultimg");
      var Q = Math.round(Math.random() * 20 - 10);
      var G = Math.round(Math.random() * 20 - 10);
      var Z = Math.round(Math.random() * 20 - 10);
      var et = Math.random() * .4 - .2;
      var tt = Math.random() * .4 - .2;
      var nt = Math.random() * 1 + 1;
      var rt = Math.random() * 1 + 1;
      TweenLite.fromTo(i.find(".tp-half-one"), N / 1e3, {
        width: P,
        height: H / 2,
        position: "absolute",
        top: "0px",
        left: "0px",
        transformPerspective: 600,
        transformOrigin: "center top"
      }, {
        scale: nt,
        rotation: Q,
        y: 0 - H - H / 4,
        ease: Power2.easeInOut
      });
      setTimeout(function () {
        TweenLite.set(i.find(".tp-half-one"), {
          overflow: "hidden"
        });
      }, 50);
      TweenLite.fromTo(i.find(".tp-half-one"), N / 2e3, {
        opacity: 1,
        transformPerspective: 600,
        transformOrigin: "center center"
      }, {
        opacity: 0,
        delay: N / 2e3
      });
      TweenLite.fromTo(i.find(".tp-half-two"), N / 1e3, {
        width: P,
        height: H,
        overflow: "hidden",
        position: "absolute",
        top: H / 2,
        left: "0px",
        transformPerspective: 600,
        transformOrigin: "center bottom"
      }, {
        scale: rt,
        rotation: G,
        y: H + H / 4,
        ease: Power2.easeInOut
      });
      TweenLite.fromTo(i.find(".tp-half-two"), N / 2e3, {
        opacity: 1,
        transformPerspective: 600,
        transformOrigin: "center center"
      }, {
        opacity: 0,
        delay: N / 2e3
      });
      if (i.html() != null) TweenLite.fromTo(u, (N - 200) / 1e3, {
        opacity: 0,
        scale: .8,
        x: r.width * et,
        y: H * tt,
        rotation: Z,
        transformPerspective: 600,
        transformOrigin: "center center"
      }, {
        rotation: 0,
        scale: 1,
        x: 0,
        y: 0,
        opacity: 1,
        ease: Power2.easeInOut
      });
      f.find(".defaultimg").css({
        opacity: 1
      });
      setTimeout(function () {
        i.css({
          position: "absolute",
          "z-index": 18
        });
        u.css({
          position: "absolute",
          "z-index": 20
        });
        f.find(".defaultimg").css({
          opacity: 1
        });
        a.find(".defaultimg").css({
          opacity: 0
        });

        if (i.find(".tp-half-one").length > 0) {
          i.find(".tp-half-one .defaultimg").unwrap();
          i.find(".tp-half-one .slotholder").unwrap();
        }

        i.find(".tp-half-two").remove();
        r.transition = 0;
        r.act = r.next;
      }, N);
      u.css({
        opacity: 1
      });
    }

    if (l == 17) {
      f.find(".defaultimg").css({
        opacity: 0
      });
      f.find(".slotslide").each(function (t) {
        var s = e(this);
        TweenLite.fromTo(s, N / 800, {
          opacity: 0,
          rotationY: 0,
          scale: .9,
          rotationX: -110,
          transformPerspective: 600,
          transformOrigin: "center center"
        }, {
          opacity: 1,
          top: 0,
          left: 0,
          scale: 1,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          ease: Power3.easeOut,
          delay: t * .06,
          onComplete: function onComplete() {
            if (t == r.slots - 1) q(n, r, f, a, u, i);
          }
        });
      });
    }

    if (l == 18) {
      f.find(".defaultimg").css({
        opacity: 0
      });
      f.find(".slotslide").each(function (t) {
        var s = e(this);
        TweenLite.fromTo(s, N / 500, {
          opacity: 0,
          rotationY: 310,
          scale: .9,
          rotationX: 10,
          transformPerspective: 600,
          transformOrigin: "center center"
        }, {
          opacity: 1,
          top: 0,
          left: 0,
          scale: 1,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          ease: Power3.easeOut,
          delay: t * .06,
          onComplete: function onComplete() {
            if (t == r.slots - 1) q(n, r, f, a, u, i);
          }
        });
      });
    }

    if (l == 19 || l == 22) {
      f.find(".defaultimg").css({
        opacity: 0
      });
      setTimeout(function () {
        a.find(".defaultimg").css({
          opacity: 0
        });
      }, 100);
      var it = u.css("z-index");
      var st = i.css("z-index");
      var ot = 90;
      var I = 1;
      if (T == 1) ot = -90;

      if (l == 19) {
        var ut = "center center -" + r.height / 2;
        I = 0;
      } else {
        var ut = "center center " + r.height / 2;
      }

      TweenLite.fromTo(f, N / 2e3, {
        transformPerspective: 600,
        z: 0,
        x: 0,
        rotationY: 0
      }, {
        rotationY: 1,
        ease: Power1.easeInOut,
        z: -40
      });
      TweenLite.fromTo(f, N / 2e3, {
        transformPerspective: 600,
        z: -40,
        rotationY: 1
      }, {
        rotationY: 0,
        z: 0,
        ease: Power1.easeInOut,
        x: 0,
        delay: 3 * (N / 4e3)
      });
      TweenLite.fromTo(a, N / 2e3, {
        transformPerspective: 600,
        z: 0,
        x: 0,
        rotationY: 0
      }, {
        rotationY: 1,
        x: 0,
        ease: Power1.easeInOut,
        z: -40
      });
      TweenLite.fromTo(a, N / 2e3, {
        transformPerspective: 600,
        z: -40,
        x: 0,
        rotationY: 1
      }, {
        rotationY: 0,
        z: 0,
        x: 0,
        ease: Power1.easeInOut,
        delay: 3 * (N / 4e3)
      });
      f.find(".slotslide").each(function (t) {
        var s = e(this);
        TweenLite.fromTo(s, N / 1e3, {
          left: 0,
          rotationY: r.rotate,
          opacity: I,
          top: 0,
          scale: .8,
          transformPerspective: 600,
          transformOrigin: ut,
          rotationX: ot
        }, {
          left: 0,
          rotationY: 0,
          opacity: 1,
          top: 0,
          z: 0,
          scale: 1,
          rotationX: 0,
          delay: t * 50 / 1e3,
          ease: Power2.easeInOut,
          onComplete: function onComplete() {
            if (t == r.slots - 1) q(n, r, f, a, u, i);
          }
        });
        TweenLite.to(s, .1, {
          opacity: 1,
          delay: t * 50 / 1e3 + N / 3e3
        });
      });
      a.find(".slotslide").each(function (t) {
        var s = e(this);
        var o = -90;
        if (T == 1) o = 90;
        TweenLite.fromTo(s, N / 1e3, {
          opacity: 1,
          rotationY: 0,
          top: 0,
          z: 0,
          scale: 1,
          transformPerspective: 600,
          transformOrigin: ut,
          rotationX: 0
        }, {
          opacity: 1,
          rotationY: r.rotate,
          top: 0,
          scale: .8,
          rotationX: o,
          delay: t * 50 / 1e3,
          ease: Power2.easeInOut,
          onComplete: function onComplete() {
            if (t == r.slots - 1) q(n, r, f, a, u, i);
          }
        });
        TweenLite.to(s, .1, {
          opacity: 0,
          delay: t * 50 / 1e3 + (N / 1e3 - N / 1e4)
        });
      });
    }

    if (l == 20) {
      f.find(".defaultimg").css({
        opacity: 0
      });
      setTimeout(function () {
        a.find(".defaultimg").css({
          opacity: 0
        });
      }, 100);
      var it = u.css("z-index");
      var st = i.css("z-index");

      if (T == 1) {
        var at = -r.width;
        var ot = 70;
        var ut = "left center -" + r.height / 2;
      } else {
        var at = r.width;
        var ot = -70;
        var ut = "right center -" + r.height / 2;
      }

      f.find(".slotslide").each(function (t) {
        var s = e(this);
        TweenLite.fromTo(s, N / 1500, {
          left: at,
          rotationX: 40,
          z: -600,
          opacity: I,
          top: 0,
          transformPerspective: 600,
          transformOrigin: ut,
          rotationY: ot
        }, {
          left: 0,
          delay: t * 50 / 1e3,
          ease: Power2.easeInOut
        });
        TweenLite.fromTo(s, N / 1e3, {
          rotationX: 40,
          z: -600,
          opacity: I,
          top: 0,
          scale: 1,
          transformPerspective: 600,
          transformOrigin: ut,
          rotationY: ot
        }, {
          rotationX: 0,
          opacity: 1,
          top: 0,
          z: 0,
          scale: 1,
          rotationY: 0,
          delay: t * 50 / 1e3,
          ease: Power2.easeInOut,
          onComplete: function onComplete() {
            if (t == r.slots - 1) q(n, r, f, a, u, i);
          }
        });
        TweenLite.to(s, .1, {
          opacity: 1,
          delay: t * 50 / 1e3 + N / 2e3
        });
      });
      a.find(".slotslide").each(function (t) {
        var s = e(this);

        if (T != 1) {
          var o = -r.width;
          var l = 70;
          var c = "left center -" + r.height / 2;
        } else {
          var o = r.width;
          var l = -70;
          var c = "right center -" + r.height / 2;
        }

        TweenLite.fromTo(s, N / 1e3, {
          opacity: 1,
          rotationX: 0,
          top: 0,
          z: 0,
          scale: 1,
          left: 0,
          transformPerspective: 600,
          transformOrigin: c,
          rotationY: 0
        }, {
          opacity: 1,
          rotationX: 40,
          top: 0,
          z: -600,
          left: o,
          scale: .8,
          rotationY: l,
          delay: t * 50 / 1e3,
          ease: Power2.easeInOut,
          onComplete: function onComplete() {
            if (t == r.slots - 1) q(n, r, f, a, u, i);
          }
        });
        TweenLite.to(s, .1, {
          opacity: 0,
          delay: t * 50 / 1e3 + (N / 1e3 - N / 1e4)
        });
      });
    }

    if (l == 21 || l == 25) {
      f.find(".defaultimg").css({
        opacity: 0
      });
      setTimeout(function () {
        a.find(".defaultimg").css({
          opacity: 0
        });
      }, 100);
      var it = u.css("z-index");
      var st = i.css("z-index");

      if (T == 1) {
        var at = -r.width;
        var ot = 110;

        if (l == 25) {
          var ut = "center top 0";
          rot2 = -ot;
          ot = r.rotate;
        } else {
          var ut = "left center 0";
          rot2 = r.rotate;
        }
      } else {
        var at = r.width;
        var ot = -110;

        if (l == 25) {
          var ut = "center bottom 0";
          rot2 = -ot;
          ot = r.rotate;
        } else {
          var ut = "right center 0";
          rot2 = r.rotate;
        }
      }

      f.find(".slotslide").each(function (t) {
        var s = e(this);
        TweenLite.fromTo(s, N / 1500, {
          left: 0,
          rotationX: rot2,
          z: 0,
          opacity: 0,
          top: 0,
          scale: 1,
          transformPerspective: 600,
          transformOrigin: ut,
          rotationY: ot
        }, {
          left: 0,
          rotationX: 0,
          top: 0,
          z: 0,
          scale: 1,
          rotationY: 0,
          delay: t * 100 / 1e3 + N / 1e4,
          ease: Power2.easeInOut,
          onComplete: function onComplete() {
            if (t == r.slots - 1) q(n, r, f, a, u, i);
          }
        });
        TweenLite.to(s, .3, {
          opacity: 1,
          delay: t * 100 / 1e3 + N * .2 / 2e3 + N / 1e4
        });
      });

      if (T != 1) {
        var at = -r.width;
        var ot = 90;

        if (l == 25) {
          var ut = "center top 0";
          rot2 = -ot;
          ot = r.rotate;
        } else {
          var ut = "left center 0";
          rot2 = r.rotate;
        }
      } else {
        var at = r.width;
        var ot = -90;

        if (l == 25) {
          var ut = "center bottom 0";
          rot2 = -ot;
          ot = r.rotate;
        } else {
          var ut = "right center 0";
          rot2 = r.rotate;
        }
      }

      a.find(".slotslide").each(function (t) {
        var n = e(this);
        TweenLite.fromTo(n, N / 3e3, {
          left: 0,
          rotationX: 0,
          z: 0,
          opacity: 1,
          top: 0,
          scale: 1,
          transformPerspective: 600,
          transformOrigin: ut,
          rotationY: 0
        }, {
          left: 0,
          rotationX: rot2,
          top: 0,
          z: 0,
          scale: 1,
          rotationY: ot,
          delay: t * 100 / 1e3,
          ease: Power1.easeInOut
        });
        TweenLite.to(n, .2, {
          opacity: 0,
          delay: t * 50 / 1e3 + (N / 3e3 - N / 1e4)
        });
      });
    }

    if (l == 23 || l == 24) {
      f.find(".defaultimg").css({
        opacity: 0
      });
      setTimeout(function () {
        a.find(".defaultimg").css({
          opacity: 0
        });
      }, 100);
      var it = u.css("z-index");
      var st = i.css("z-index");
      var ot = -90;
      if (T == 1) ot = 90;
      var I = 1;

      if (l == 23) {
        var ut = "center center -" + r.width / 2;
        I = 0;
      } else {
        var ut = "center center " + r.width / 2;
      }

      var ft = 0;
      TweenLite.fromTo(f, N / 2e3, {
        transformPerspective: 600,
        z: 0,
        x: 0,
        rotationY: 0
      }, {
        rotationY: 1,
        ease: Power1.easeInOut,
        z: -90
      });
      TweenLite.fromTo(f, N / 2e3, {
        transformPerspective: 600,
        z: -90,
        rotationY: 1
      }, {
        rotationY: 0,
        z: 0,
        ease: Power1.easeInOut,
        x: 0,
        delay: 3 * (N / 4e3)
      });
      TweenLite.fromTo(a, N / 2e3, {
        transformPerspective: 600,
        z: 0,
        x: 0,
        rotationY: 0
      }, {
        rotationY: 1,
        x: 0,
        ease: Power1.easeInOut,
        z: -90
      });
      TweenLite.fromTo(a, N / 2e3, {
        transformPerspective: 600,
        z: -90,
        x: 0,
        rotationY: 1
      }, {
        rotationY: 0,
        z: 0,
        x: 0,
        ease: Power1.easeInOut,
        delay: 3 * (N / 4e3)
      });
      f.find(".slotslide").each(function (t) {
        var s = e(this);
        TweenLite.fromTo(s, N / 1e3, {
          left: ft,
          rotationX: r.rotate,
          opacity: I,
          top: 0,
          scale: 1,
          transformPerspective: 600,
          transformOrigin: ut,
          rotationY: ot
        }, {
          left: 0,
          rotationX: 0,
          opacity: 1,
          top: 0,
          z: 0,
          scale: 1,
          rotationY: 0,
          delay: t * 50 / 1e3,
          ease: Power2.easeInOut,
          onComplete: function onComplete() {
            if (t == r.slots - 1) q(n, r, f, a, u, i);
          }
        });
        TweenLite.to(s, .1, {
          opacity: 1,
          delay: t * 50 / 1e3 + N / 3e3
        });
      });
      ot = 90;
      if (T == 1) ot = -90;
      a.find(".slotslide").each(function (t) {
        var s = e(this);
        TweenLite.fromTo(s, N / 1e3, {
          left: 0,
          opacity: 1,
          rotationX: 0,
          top: 0,
          z: 0,
          scale: 1,
          transformPerspective: 600,
          transformOrigin: ut,
          rotationY: 0
        }, {
          left: ft,
          opacity: 1,
          rotationX: r.rotate,
          top: 0,
          scale: 1,
          rotationY: ot,
          delay: t * 50 / 1e3,
          ease: Power2.easeInOut,
          onComplete: function onComplete() {
            if (t == r.slots - 1) q(n, r, f, a, u, i);
          }
        });
        TweenLite.to(s, .1, {
          opacity: 0,
          delay: t * 50 / 1e3 + (N / 1e3 - N / 1e4)
        });
      });
    }

    var lt = {};
    lt.slideIndex = r.next + 1;
    n.trigger("revolution.slide.onchange", lt);
    setTimeout(function () {
      n.trigger("revolution.slide.onafterswap");
    }, N);
    n.trigger("revolution.slide.onvideostop");
  }

  function A(e, t) {}

  function O(t, n) {
    t.find(">ul:first-child >li").each(function () {
      var t = e(this);

      for (var r = 0; r < 10; r++) {
        t.find(".rs-parallaxlevel-" + r).wrapAll('<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;" class="tp-parallax-container" data-parallaxlevel="' + n.parallaxLevels[r] + '"></div>');
      }
    });

    if (n.parallax == "mouse" || n.parallax == "scroll+mouse" || n.parallax == "mouse+scroll") {
      t.on("mousemove.hoverdir, mouseleave.hoverdir", function (n) {
        switch (n.type) {
          case "mousemove":
            var r = t.offset().top,
                i = t.offset().left,
                s = r + t.height() / 2,
                o = i + t.width() / 2,
                u = o - n.pageX,
                a = s - n.pageY;
            e(".tp-parallax-container").each(function () {
              var t = e(this),
                  n = parseInt(t.data("parallaxlevel"), 0) / 100,
                  r = u * n,
                  i = a * n;
              TweenLite.to(t, .2, {
                x: r,
                y: i,
                ease: Power3.easeOut
              });
            });
            break;

          case "mouseleave":
            e(".tp-parallax-container").each(function () {
              var t = e(this);
              TweenLite.to(t, .4, {
                x: 0,
                y: 0,
                ease: Power3.easeOut
              });
            });
            break;
        }
      });
      if (s()) window.ondeviceorientation = function (n) {
        var r = Math.round(n.beta || 0),
            i = Math.round(n.gamma || 0);
        e(".logo-container").html("Portrait");

        if (e(window).width() > e(window).height()) {
          var s = i;
          i = r;
          r = s;
          e(".logo-container").html("Landscape");
        }

        var o = 360 / t.width() * i,
            u = 180 / t.height() * r;
        e(".tp-parallax-container").each(function () {
          var t = e(this),
              n = parseInt(t.data("parallaxlevel"), 0) / 100,
              r = o * n,
              i = u * n;
          TweenLite.to(t, .2, {
            x: r,
            y: i,
            ease: Power3.easeOut
          });
        });
      };
    }

    if (n.parallax == "scroll" || n.parallax == "scroll+mouse" || n.parallax == "mouse+scroll") {
      e(window).on("scroll", function (e) {
        M(t, n);
      });
    }
  }

  function M(t, n) {
    var r = t.offset().top,
        i = e(window).scrollTop(),
        s = r + t.height() / 2,
        o = r + t.height() / 2 - i,
        u = e(window).height() / 2,
        a = u - o;
    if (s < u) a = a - (u - s);
    e(".tp-parallax-container").each(function () {
      var t = e(this),
          n = parseInt(t.data("parallaxlevel"), 0) / 100,
          r = a * n;
      TweenLite.to(t, .2, {
        y: r,
        ease: Power3.easeOut
      });
    });

    if (n.parallaxBgFreeze != "on") {
      var f = n.parallaxLevels[0] / 100,
          l = a * f;
      TweenLite.to(t, .2, {
        y: l,
        ease: Power3.easeOut
      });
    }
  }

  function _(t, n) {
    try {
      var r = t.find(">ul:first-child >li:eq(" + n.act + ")");
    } catch (i) {
      var r = t.find(">ul:first-child >li:eq(1)");
    }

    n.lastslide = n.act;
    var s = t.find(">ul:first-child >li:eq(" + n.next + ")");
    var o = r.find(".slotholder");
    var u = s.find(".slotholder");
    u.find(".defaultimg").each(function () {
      var t = e(this);
      TweenLite.killTweensOf(t, false);
      TweenLite.set(t, {
        scale: 1,
        rotationZ: 0
      });
      t.data("bgposition", u.data("bgposition"));
      t.data("currotate", u.data("rotationstart"));
      t.data("curscale", u.data("bgfit"));
    });
  }

  function D(n, r, i) {
    try {
      var s = n.find(">ul:first-child >li:eq(" + r.act + ")");
    } catch (u) {
      var s = n.find(">ul:first-child >li:eq(1)");
    }

    r.lastslide = r.act;
    var a = n.find(">ul:first-child >li:eq(" + r.next + ")");
    var f = s.find(".slotholder");
    var l = a.find(".slotholder");
    var c = l.data("bgposition"),
        h = l.data("bgpositionend"),
        p = l.data("zoomstart") / 100,
        d = l.data("zoomend") / 100,
        v = l.data("rotationstart"),
        m = l.data("rotationend"),
        g = l.data("bgfit"),
        y = l.data("bgfitend"),
        b = l.data("easeme"),
        w = l.data("duration") / 1e3,
        E = 100;
    if (g == t) g = 100;
    if (y == t) y = 100;
    g = H(g, l, r);
    y = H(y, l, r);
    E = H(100, l, r);
    if (p == t) p = 1;
    if (d == t) d = 1;
    if (v == t) v = 0;
    if (m == t) m = 0;
    if (p < 1) p = 1;
    if (d < 1) d = 1;
    var S = new Object();
    S.w = parseInt(E.split(" ")[0], 0), S.h = parseInt(E.split(" ")[1], 0);
    l.find(".defaultimg").each(function () {
      var t = e(this);
      if (l.find(".kenburnimg").length == 0) l.append('<div class="kenburnimg" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;"><img src="' + t.attr("src") + '" style="-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;position:absolute;width:' + S.w + "%;height:" + S.h + '%;"></div>');
      var n = l.find(".kenburnimg img");
      var i = P(r, c, g, n),
          s = P(r, h, y, n);
      t.data("kenburn", TweenLite.fromTo(n, w, {
        autoAlpha: 1,
        transformPerspective: 1200,
        transformOrigin: "0% 0%",
        top: 0,
        left: 0,
        scale: i.w,
        x: i.x,
        y: i.y
      }, {
        autoAlpha: 1,
        rotationZ: m,
        ease: b,
        x: s.x,
        y: s.y,
        scale: s.w,
        onUpdate: function onUpdate() {
          var e = n[0]._gsTransform.scaleX;
          var i = e * n.width() - r.width,
              s = e * n.height() - r.height,
              u = Math.abs(n[0]._gsTransform.x / i * 100),
              a = Math.abs(n[0]._gsTransform.y / s * 100);
          t.data("bgposition", u + "% " + a + "%");
          if (!o(8)) t.data("currotate", I(n));
          if (!o(8)) t.data("curscale", S.w * e + "%  " + (S.h * e + "%"));
          TweenLite.set(t, {
            rotation: t.data("currotate"),
            backgroundPosition: t.data("bgposition"),
            backgroundSize: t.data("curscale")
          });
        }
      }));
    });
  }

  function P(e, t, n, r) {
    var i = new Object();
    i.w = parseInt(n.split(" ")[0], 0) / 100;

    switch (t) {
      case "left top":
      case "top left":
        i.x = 0;
        i.y = 0;
        break;

      case "center top":
      case "top center":
        i.x = ((0 - r.width()) * i.w + e.width) / 2;
        i.y = 0;
        break;

      case "top right":
      case "right top":
        i.x = (0 - r.width()) * i.w + e.width;
        i.y = 0;
        break;

      case "center left":
      case "left center":
        i.x = 0;
        i.y = ((0 - r.height()) * i.w + e.height) / 2;
        break;

      case "center center":
        i.x = ((0 - r.width()) * i.w + e.width) / 2;
        i.y = ((0 - r.height()) * i.w + e.height) / 2;
        break;

      case "center right":
      case "right center":
        i.x = (0 - r.width()) * i.w + e.width;
        i.y = ((0 - r.height()) * i.w + e.height) / 2;
        break;

      case "bottom left":
      case "left bottom":
        i.x = 0;
        i.y = (0 - r.height()) * i.w + e.height;
        break;

      case "bottom center":
      case "center bottom":
        i.x = ((0 - r.width()) * i.w + e.width) / 2;
        i.y = (0 - r.height()) * i.w + e.height;
        break;

      case "bottom right":
      case "right bottom":
        i.x = (0 - r.width()) * i.w + e.width;
        i.y = (0 - r.height()) * i.w + e.height;
        break;
    }

    return i;
  }

  function H(e, t, n) {
    var r = t.data("owidth");
    var i = t.data("oheight");
    var s = n.container.width() / r;
    var o = i * s;
    var u = o / n.container.height() * e;
    return e + "% " + u + "%";
  }

  function B(e) {
    var t = e.css("-webkit-transform") || e.css("-moz-transform") || e.css("-ms-transform") || e.css("-o-transform") || e.css("transform");
    return t;
  }

  function j(e) {
    return e.replace(/^matrix(3d)?\((.*)\)$/, "$2").split(/, /);
  }

  function F(e) {
    var t = j(B(e)),
        n = 1;

    if (t[0] !== "none") {
      var r = t[0],
          i = t[1],
          s = 10;
      n = Math.round(Math.sqrt(r * r + i * i) * s) / s;
    }

    return n;
  }

  function I(e) {
    var t = e.css("-webkit-transform") || e.css("-moz-transform") || e.css("-ms-transform") || e.css("-o-transform") || e.css("transform");

    if (t !== "none") {
      var n = t.split("(")[1].split(")")[0].split(",");
      var r = n[0];
      var i = n[1];
      var s = Math.round(Math.atan2(i, r) * (180 / Math.PI));
    } else {
      var s = 0;
    }

    return s < 0 ? s += 360 : s;
  }

  function q(e, t, n, r, i, s) {
    S(e, t);
    n.find(".defaultimg").css({
      opacity: 1
    });
    if (i.index() != s.index()) r.find(".defaultimg").css({
      opacity: 0
    });
    t.act = t.next;
    f(e);

    if (n.data("kenburns") == "on") {
      D(e, t);
    }
  }

  function R(t) {
    var n = t.target.getVideoEmbedCode();
    var r = e("#" + n.split('id="')[1].split('"')[0]);
    var i = r.closest(".tp-simpleresponsive");
    var s = r.parent().data("player");

    if (t.data == YT.PlayerState.PLAYING) {
      var o = i.find(".tp-bannertimer");
      var u = o.data("opt");
      if (r.closest(".tp-caption").data("volume") == "mute") s.mute();
      u.videoplaying = true;
      i.trigger("stoptimer");
      i.trigger("revolution.slide.onvideoplay");
    } else {
      var o = i.find(".tp-bannertimer");
      var u = o.data("opt");

      if (t.data != -1) {
        u.videoplaying = false;
        i.trigger("playtimer");
        i.trigger("revolution.slide.onvideostop");
      }
    }

    if (t.data == 0 && u.nextslideatend == true) u.container.revnext();
  }

  function U(e, t, n) {
    if (e.addEventListener) e.addEventListener(t, n, false);else e.attachEvent(t, n, false);
  }

  function z(t, n) {
    var r = $f(t);
    var i = e("#" + t);
    var s = i.closest(".tp-simpleresponsive");
    r.addEvent("ready", function (e) {
      if (n) r.api("play");
      r.addEvent("play", function (e) {
        var t = s.find(".tp-bannertimer");
        var n = t.data("opt");
        n.videoplaying = true;
        s.trigger("stoptimer");
        if (i.closest(".tp-caption").data("volume") == "mute") r.api("setVolume", "0");
      });
      r.addEvent("finish", function (e) {
        var t = s.find(".tp-bannertimer");
        var n = t.data("opt");
        n.videoplaying = false;
        s.trigger("playtimer");
        s.trigger("revolution.slide.onvideoplay");
        if (n.nextslideatend == true) n.container.revnext();
      });
      r.addEvent("pause", function (e) {
        var t = s.find(".tp-bannertimer");
        var n = t.data("opt");
        n.videoplaying = false;
        s.trigger("playtimer");
        s.trigger("revolution.slide.onvideostop");
      });
    });
  }

  function W(e, t) {
    var n = t.width();
    var r = t.height();
    var i = e.data("mediaAspect");
    var s = n / r;
    e.css({
      position: "absolute"
    });
    var o = e.find("video");

    if (s < i) {
      e.width(r * i).height(r);
      e.css("top", 0).css("left", -(r * i - n) / 2).css("height", r);
    } else {
      e.width(n).height(n / i);
      e.css("top", -(n / i - r) / 2).css("left", 0).css("height", n / i);
    }
  }

  function X() {
    var e = new Object();
    e.x = 0;
    e.y = 0;
    e.rotationX = 0;
    e.rotationY = 0;
    e.rotationZ = 0;
    e.scale = 1;
    e.scaleX = 1;
    e.scaleY = 1;
    e.skewX = 0;
    e.skewY = 0;
    e.opacity = 0;
    e.transformOrigin = "center, center";
    e.transformPerspective = 400;
    e.rotation = 0;
    return e;
  }

  function V(t, n) {
    var r = n.split(";");
    e.each(r, function (e, n) {
      n = n.split(":");
      var r = n[0],
          i = n[1];
      if (r == "rotationX") t.rotationX = parseInt(i, 0);
      if (r == "rotationY") t.rotationY = parseInt(i, 0);
      if (r == "rotationZ") t.rotationZ = parseInt(i, 0);
      if (r == "rotationZ") t.rotation = parseInt(i, 0);
      if (r == "scaleX") t.scaleX = parseFloat(i);
      if (r == "scaleY") t.scaleY = parseFloat(i);
      if (r == "opacity") t.opacity = parseFloat(i);
      if (r == "skewX") t.skewX = parseInt(i, 0);
      if (r == "skewY") t.skewY = parseInt(i, 0);
      if (r == "x") t.x = parseInt(i, 0);
      if (r == "y") t.y = parseInt(i, 0);
      if (r == "z") t.z = parseInt(i, 0);
      if (r == "transformOrigin") t.transformOrigin = i.toString();
      if (r == "transformPerspective") t.transformPerspective = parseInt(i, 0);
    });
    return t;
  }

  function $(t) {
    var n = t.split("animation:");
    var r = new Object();
    r.animation = V(X(), n[1]);
    var i = n[0].split(";");
    e.each(i, function (e, t) {
      t = t.split(":");
      var n = t[0],
          i = t[1];
      if (n == "typ") r.typ = i;
      if (n == "speed") r.speed = parseInt(i, 0) / 1e3;
      if (n == "start") r.start = parseInt(i, 0) / 1e3;
      if (n == "elementdelay") r.elementdelay = parseFloat(i);
      if (n == "ease") r.ease = i;
    });
    return r;
  }

  function J(n, r, i) {
    var o = 0;
    var u = 0;
    var a = n.find(".tp-caption"),
        f = r.container.find(".tp-static-layers").find(".tp-caption");
    if (f.length > 0) a.push(f);
    a.each(function (n) {
      var a = -1;
      var f = e(this);

      if (f.hasClass("tp-static-layer")) {
        if (!f.hasClass("tp-is-shown")) {
          if (f.data("startslide") <= r.next && f.data("endslide") >= r.next || f.data("startslide") == r.next || f.data("endslide") == r.next) {
            f.addClass("tp-is-shown");
            a = 1;
          } else {
            a = 0;
          }
        } else {
          if (f.data("endslide") == r.next || f.data("startslide") > r.next || f.data("endslide") < r.next) {
            a = 2;
            f.removeClass("tp-is-shown");
          } else {
            a = 0;
          }
        }
      }

      o = r.width / 2 - r.startwidth * r.bw / 2;
      var l = r.bw;
      var c = r.bh;
      if (r.fullScreen == "on") u = r.height / 2 - r.startheight * r.bh / 2;
      if (r.autoHeight == "on") u = r.container.height() / 2 - r.startheight * r.bh / 2;
      if (u < 0) u = 0;
      var h = 0;

      if (r.width < r.hideCaptionAtLimit && f.data("captionhidden") == "on") {
        f.addClass("tp-hidden-caption");
        h = 1;
      } else {
        if (r.width < r.hideAllCaptionAtLimit || r.width < r.hideAllCaptionAtLilmit) {
          f.addClass("tp-hidden-caption");
          h = 1;
        } else {
          f.removeClass("tp-hidden-caption");
        }
      }

      if (h == 0) {
        if (f.data("linktoslide") != t && !f.hasClass("hasclicklistener")) {
          f.addClass("hasclicklistener");
          f.css({
            cursor: "pointer"
          });

          if (f.data("linktoslide") != "no") {
            f.click(function () {
              var t = e(this);
              var n = t.data("linktoslide");

              if (n != "next" && n != "prev") {
                r.container.data("showus", n);
                r.container.parent().find(".tp-rightarrow").click();
              } else if (n == "next") r.container.parent().find(".tp-rightarrow").click();else if (n == "prev") r.container.parent().find(".tp-leftarrow").click();
            });
          }
        }

        if (o < 0) o = 0;
        var p = "iframe" + Math.round(Math.random() * 1e3 + 1);

        if (f.find("iframe").length > 0 || f.find("video").length > 0) {
          if (f.data("autoplayonlyfirsttime") == true || f.data("autoplayonlyfirsttime") == "true") {
            f.data("autoplay", true);
          }

          f.find("iframe").each(function () {
            var n = e(this);

            if (s()) {
              var o = n.attr("src");
              n.attr("src", "");
              n.attr("src", o);
            }

            r.nextslideatend = f.data("nextslideatend");

            if (f.data("thumbimage") != t && f.data("thumbimage").length > 2 && f.data("autoplay") != true && !i) {
              f.find(".tp-thumb-image").remove();
              f.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url(' + f.data("thumbimage") + '); background-size:cover"></div>');
            }

            if (n.attr("src").toLowerCase().indexOf("youtube") >= 0) {
              if (!n.hasClass("HasListener")) {
                try {
                  n.attr("id", p);
                  var u;
                  var a = setInterval(function () {
                    if (YT != t) if (_typeof(YT.Player) != t && typeof YT.Player != "undefined") {
                      if (f.data("autoplay") == true) {
                        u = new YT.Player(p, {
                          events: {
                            onStateChange: R,
                            onReady: function onReady(e) {
                              e.target.playVideo();
                            }
                          }
                        });
                      } else u = new YT.Player(p, {
                        events: {
                          onStateChange: R
                        }
                      });

                      n.addClass("HasListener");
                      f.data("player", u);
                      clearInterval(a);
                    }
                  }, 100);
                } catch (l) {}
              } else {
                if (f.data("autoplay") == true) {
                  var u = f.data("player");
                  f.data("timerplay", setTimeout(function () {
                    if (f.data("forcerewind") == "on") u.seekTo(0);
                    u.playVideo();
                  }, f.data("start")));
                }
              }

              f.find(".tp-thumb-image").click(function () {
                TweenLite.to(e(this), .3, {
                  opacity: 0,
                  ease: Power3.easeInOut,
                  onComplete: function onComplete() {
                    f.find(".tp-thumb-image").remove();
                  }
                });
                var t = f.data("player");
                t.playVideo();
              });
            } else {
              if (n.attr("src").toLowerCase().indexOf("vimeo") >= 0) {
                if (!n.hasClass("HasListener")) {
                  n.addClass("HasListener");
                  n.attr("id", p);
                  var c = n.attr("src");
                  var h = {},
                      d = c,
                      v = /([^&=]+)=([^&]*)/g,
                      m;

                  while (m = v.exec(d)) {
                    h[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
                  }

                  if (h["player_id"] != t) c = c.replace(h["player_id"], p);else c = c + "&player_id=" + p;

                  try {
                    c = c.replace("api=0", "api=1");
                  } catch (l) {}

                  c = c + "&api=1";
                  n.attr("src", c);
                  var u = f.find("iframe")[0];
                  var g = setInterval(function () {
                    if ($f != t) if (_typeof($f(p).api) != t && typeof $f(p).api != "undefined") {
                      $f(u).addEvent("ready", function () {
                        z(p, f.data("autoplay"));
                      });
                      clearInterval(g);
                    }
                  }, 100);
                } else {
                  if (f.data("autoplay") == true) {
                    var n = f.find("iframe");
                    var y = n.attr("id");
                    var g = setInterval(function () {
                      if ($f != t) if (_typeof($f(y).api) != t && typeof $f(y).api != "undefined") {
                        var e = $f(y);
                        f.data("timerplay", setTimeout(function () {
                          if (f.data("forcerewind") == "on") e.api("seekTo", 0);
                          e.api("play");
                        }, f.data("start")));
                        clearInterval(g);
                      }
                    }, 100);
                  }
                }

                f.find(".tp-thumb-image").click(function () {
                  TweenLite.to(e(this), .3, {
                    opacity: 0,
                    ease: Power3.easeInOut,
                    onComplete: function onComplete() {
                      f.find(".tp-thumb-image").remove();
                    }
                  });
                  var n = f.find("iframe");
                  var r = n.attr("id");
                  var i = setInterval(function () {
                    if ($f != t) if (_typeof($f(r).api) != t && typeof $f(r).api != "undefined") {
                      var e = $f(r);
                      e.api("play");
                      clearInterval(i);
                    }
                  }, 100);
                });
              }
            }
          });

          if (f.find("video").length > 0) {
            f.find("video").each(function (n) {
              var i = e(this);
              var s = this;

              if (!i.parent().hasClass("html5vid")) {
                i.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:auto;height:auto"></div>');
              }

              var o = e(this).parent();
              if (s.addEventListener) s.addEventListener("loadedmetadata", function () {
                o.data("metaloaded", 1);
              });else s.attachEvent("loadedmetadata", function () {
                o.data("metaloaded", 1);
              });

              if (!i.hasClass("HasListener")) {
                i.addClass("HasListener");
                s.addEventListener("play", function () {
                  o.addClass("videoisplaying");
                  o.find(".tp-poster").remove();
                  if (f.data("volume") == "mute") s.muted = true;
                  r.container.trigger("revolution.slide.onvideoplay");
                  r.videoplaying = true;
                  r.container.trigger("stoptimer");
                });
                s.addEventListener("pause", function () {
                  o.removeClass("videoisplaying");
                  r.videoplaying = false;
                  r.container.trigger("playtimer");
                  r.container.trigger("revolution.slide.onvideostop");
                });
                s.addEventListener("ended", function () {
                  o.removeClass("videoisplaying");
                  r.videoplaying = false;
                  r.container.trigger("playtimer");
                  r.container.trigger("revolution.slide.onvideostop");
                  if (r.nextslideatend == true) r.container.revnext();
                });
              }

              if (i.attr("poster") != t && o.find(".tp-poster").length == 0) o.append('<div class="tp-poster" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;background:url(' + i.attr("poster") + '); background-position:center center;background-size:100%;background-repeat:no-repeat;"></div>');

              if (i.attr("control") == t && o.find(".tp-video-play-button").length == 0) {
                o.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><div class="tp-revstop"></div></div>');
                o.find(".tp-video-play-button").click(function () {
                  if (o.hasClass("videoisplaying")) s.pause();else s.play();
                });
              }

              if (i.attr("control") == t) {
                o.find("video, .tp-poster").click(function () {
                  if (o.hasClass("videoisplaying")) s.pause();else s.play();
                });
              }

              if (f.data("forcecover") == 1) {
                W(o, r.container);
                o.addClass("fullcoveredvideo");
                f.addClass("fullcoveredvideo");
              }

              if (f.data("forcecover") == 1 || f.hasClass("fullscreenvideo")) {
                o.css({
                  width: "100%",
                  height: "100%"
                });
              }

              var u = false;
              if (f.data("autoplayonlyfirsttime") == true || f.data("autoplayonlyfirsttime") == "true") u = true;
              clearInterval(o.data("interval"));
              o.data("interval", setInterval(function () {
                if (o.data("metaloaded") == 1 || s.duration != NaN) {
                  clearInterval(o.data("interval"));
                  if (f.data("dottedoverlay") != "none" && f.data("dottedoverlay") != t) if (f.find(".tp-dottedoverlay").length != 1) o.append('<div class="tp-dottedoverlay ' + f.data("dottedoverlay") + '"></div>');
                  var n = 16 / 9;
                  if (f.data("aspectratio") == "4:3") n = 4 / 3;
                  o.data("mediaAspect", n);

                  if (o.closest(".tp-caption").data("forcecover") == 1) {
                    W(o, r.container);
                    o.addClass("fullcoveredvideo");
                  }

                  i.css({
                    display: "block"
                  });
                  r.nextslideatend = f.data("nextslideatend");

                  if (f.data("autoplay") == true || u == true) {
                    var a = e("body").find("#" + r.container.attr("id")).find(".tp-bannertimer");
                    setTimeout(function () {
                      r.videoplaying = true;
                      r.container.trigger("stoptimer");
                    }, 200);
                    if (f.data("forcerewind") == "on" && !o.hasClass("videoisplaying")) if (s.currentTime > 0) s.currentTime = 0;
                    if (f.data("volume") == "mute") s.muted = true;
                    o.data("timerplay", setTimeout(function () {
                      if (f.data("forcerewind") == "on" && !o.hasClass("videoisplaying")) if (s.currentTime > 0) s.currentTime = 0;
                      if (f.data("volume") == "mute") s.muted = true;
                      setTimeout(function () {
                        s.play();
                      }, 500);
                    }, 10 + f.data("start")));
                  }

                  if (o.data("ww") == t) o.data("ww", i.attr("width"));
                  if (o.data("hh") == t) o.data("hh", i.attr("height"));

                  if (!f.hasClass("fullscreenvideo") && f.data("forcecover") == 1) {
                    try {
                      o.width(o.data("ww") * r.bw);
                      o.height(o.data("hh") * r.bh);
                    } catch (l) {}
                  }

                  clearInterval(o.data("interval"));
                }
              }), 100);
            });
          }

          if (f.data("autoplay") == true) {
            var d = e("body").find("#" + r.container.attr("id")).find(".tp-bannertimer");
            setTimeout(function () {
              r.videoplaying = true;
              r.container.trigger("stoptimer");
            }, 200);
            r.videoplaying = true;
            r.container.trigger("stoptimer");

            if (f.data("autoplayonlyfirsttime") == true || f.data("autoplayonlyfirsttime") == "true") {
              f.data("autoplay", false);
              f.data("autoplayonlyfirsttime", false);
            }
          }
        }

        var v = 0;
        var m = 0;

        if (f.find("img").length > 0) {
          var g = f.find("img");
          if (g.data("ww") == t) g.data("ww", g.width());
          if (g.data("hh") == t) g.data("hh", g.height());
          var y = g.data("ww");
          var b = g.data("hh");
          g.width(y * r.bw);
          g.height(b * r.bh);
          v = g.width();
          m = g.height();
        } else {
          if (f.find("iframe").length > 0 || f.find("video").length > 0) {
            var w = false;
            var g = f.find("iframe");

            if (g.length == 0) {
              g = f.find("video");
              w = true;
            }

            g.css({
              display: "block"
            });
            if (f.data("ww") == t) f.data("ww", g.width());
            if (f.data("hh") == t) f.data("hh", g.height());
            var y = f.data("ww");
            var b = f.data("hh");
            var E = f;
            if (E.data("fsize") == t) E.data("fsize", parseInt(E.css("font-size"), 0) || 0);
            if (E.data("pt") == t) E.data("pt", parseInt(E.css("paddingTop"), 0) || 0);
            if (E.data("pb") == t) E.data("pb", parseInt(E.css("paddingBottom"), 0) || 0);
            if (E.data("pl") == t) E.data("pl", parseInt(E.css("paddingLeft"), 0) || 0);
            if (E.data("pr") == t) E.data("pr", parseInt(E.css("paddingRight"), 0) || 0);
            if (E.data("mt") == t) E.data("mt", parseInt(E.css("marginTop"), 0) || 0);
            if (E.data("mb") == t) E.data("mb", parseInt(E.css("marginBottom"), 0) || 0);
            if (E.data("ml") == t) E.data("ml", parseInt(E.css("marginLeft"), 0) || 0);
            if (E.data("mr") == t) E.data("mr", parseInt(E.css("marginRight"), 0) || 0);
            if (E.data("bt") == t) E.data("bt", parseInt(E.css("borderTop"), 0) || 0);
            if (E.data("bb") == t) E.data("bb", parseInt(E.css("borderBottom"), 0) || 0);
            if (E.data("bl") == t) E.data("bl", parseInt(E.css("borderLeft"), 0) || 0);
            if (E.data("br") == t) E.data("br", parseInt(E.css("borderRight"), 0) || 0);
            if (E.data("lh") == t) E.data("lh", parseInt(E.css("lineHeight"), 0) || 0);
            var S = r.width;
            var x = r.height;
            if (S > r.startwidth) S = r.startwidth;
            if (x > r.startheight) x = r.startheight;
            if (!f.hasClass("fullscreenvideo")) f.css({
              "font-size": E.data("fsize") * r.bw + "px",
              "padding-top": E.data("pt") * r.bh + "px",
              "padding-bottom": E.data("pb") * r.bh + "px",
              "padding-left": E.data("pl") * r.bw + "px",
              "padding-right": E.data("pr") * r.bw + "px",
              "margin-top": E.data("mt") * r.bh + "px",
              "margin-bottom": E.data("mb") * r.bh + "px",
              "margin-left": E.data("ml") * r.bw + "px",
              "margin-right": E.data("mr") * r.bw + "px",
              "border-top": E.data("bt") * r.bh + "px",
              "border-bottom": E.data("bb") * r.bh + "px",
              "border-left": E.data("bl") * r.bw + "px",
              "border-right": E.data("br") * r.bw + "px",
              "line-height": E.data("lh") * r.bh + "px",
              height: b * r.bh + "px"
            });else {
              o = 0;
              u = 0;
              f.data("x", 0);
              f.data("y", 0);
              var T = r.height;
              if (r.autoHeight == "on") T = r.container.height();
              f.css({
                width: r.width,
                height: T
              });
            }

            if (w == false) {
              g.width(y * r.bw);
              g.height(b * r.bh);
            } else if (f.data("forcecover") != 1 && !f.hasClass("fullscreenvideo")) {
              g.width(y * r.bw);
              g.height(b * r.bh);
            }

            v = g.width();
            m = g.height();
          } else {
            f.find(".tp-resizeme, .tp-resizeme *").each(function () {
              G(e(this), r);
            });

            if (f.hasClass("tp-resizeme")) {
              f.find("*").each(function () {
                G(e(this), r);
              });
            }

            G(f, r);
            m = f.outerHeight(true);
            v = f.outerWidth(true);
            var N = f.outerHeight();
            var C = f.css("backgroundColor");
            f.find(".frontcorner").css({
              borderWidth: N + "px",
              left: 0 - N + "px",
              borderRight: "0px solid transparent",
              borderTopColor: C
            });
            f.find(".frontcornertop").css({
              borderWidth: N + "px",
              left: 0 - N + "px",
              borderRight: "0px solid transparent",
              borderBottomColor: C
            });
            f.find(".backcorner").css({
              borderWidth: N + "px",
              right: 0 - N + "px",
              borderLeft: "0px solid transparent",
              borderBottomColor: C
            });
            f.find(".backcornertop").css({
              borderWidth: N + "px",
              right: 0 - N + "px",
              borderLeft: "0px solid transparent",
              borderTopColor: C
            });
          }
        }

        if (r.fullScreenAlignForce == "on") {
          o = 0;
          u = 0;
        }

        if (f.data("voffset") == t) f.data("voffset", 0);
        if (f.data("hoffset") == t) f.data("hoffset", 0);
        var k = f.data("voffset") * l;
        var L = f.data("hoffset") * l;
        var A = r.startwidth * l;
        var O = r.startheight * l;

        if (r.fullScreenAlignForce == "on") {
          A = r.container.width();
          O = r.container.height();
        }

        if (f.data("x") == "center" || f.data("xcenter") == "center") {
          f.data("xcenter", "center");
          f.data("x", A / 2 - f.outerWidth(true) / 2 + L);
        }

        if (f.data("x") == "left" || f.data("xleft") == "left") {
          f.data("xleft", "left");
          f.data("x", 0 / l + L);
        }

        if (f.data("x") == "right" || f.data("xright") == "right") {
          f.data("xright", "right");
          f.data("x", (A - f.outerWidth(true) + L) / l);
        }

        if (f.data("y") == "center" || f.data("ycenter") == "center") {
          f.data("ycenter", "center");
          f.data("y", O / 2 - f.outerHeight(true) / 2 + k);
        }

        if (f.data("y") == "top" || f.data("ytop") == "top") {
          f.data("ytop", "top");
          f.data("y", 0 / r.bh + k);
        }

        if (f.data("y") == "bottom" || f.data("ybottom") == "bottom") {
          f.data("ybottom", "bottom");
          f.data("y", (O - f.outerHeight(true) + k) / l);
        }

        if (f.data("start") == t) f.data("start", 1e3);
        var M = f.data("easing");
        if (M == t) M = "Power1.easeOut";

        var _ = f.data("start") / 1e3;

        var D = f.data("speed") / 1e3;
        if (f.data("x") == "center" || f.data("xcenter") == "center") var P = f.data("x") + o;else {
          var P = l * f.data("x") + o;
        }
        if (f.data("y") == "center" || f.data("ycenter") == "center") var H = f.data("y") + u;else {
          var H = r.bh * f.data("y") + u;
        }
        TweenLite.set(f, {
          top: H,
          left: P,
          overwrite: "auto"
        });
        if (a == 0) i = true;

        if (!i) {
          if (f.data("timeline") != t) f.data("timeline").clear();

          function _B() {
            setTimeout(function () {
              f.css({
                transform: "none",
                "-moz-transform": "none",
                "-webkit-transform": "none"
              });
            }, 100);
          }

          function _j() {
            f.data("timer", setTimeout(function () {
              if (f.hasClass("fullscreenvideo")) f.css({
                display: "block"
              });
            }, f.data("start")));
          }

          var F = new TimelineLite({
            smoothChildTiming: true,
            onStart: _j
          });

          if (r.fullScreenAlignForce == "on") {}

          var I = f;
          if (f.data("mySplitText") != t) f.data("mySplitText").revert();

          if (f.data("splitin") == "chars" || f.data("splitin") == "words" || f.data("splitin") == "lines" || f.data("splitout") == "chars" || f.data("splitout") == "words" || f.data("splitout") == "lines") {
            if (f.find("a").length > 0) f.data("mySplitText", new SplitText(f.find("a"), {
              type: "lines,words,chars",
              charsClass: "tp-splitted",
              wordsClass: "tp-splitted",
              linesClass: "tp-splitted"
            }));else f.data("mySplitText", new SplitText(f, {
              type: "lines,words,chars",
              charsClass: "tp-splitted",
              wordsClass: "tp-splitted",
              linesClass: "tp-splitted"
            }));
            f.addClass("splitted");
          }

          if (f.data("splitin") == "chars") I = f.data("mySplitText").chars;
          if (f.data("splitin") == "words") I = f.data("mySplitText").words;
          if (f.data("splitin") == "lines") I = f.data("mySplitText").lines;
          var q = X();
          var U = X();
          if (f.data("repeat") != t) repeatV = f.data("repeat");
          if (f.data("yoyo") != t) yoyoV = f.data("yoyo");
          if (f.data("repeatdelay") != t) repeatdelayV = f.data("repeatdelay");
          if (f.hasClass("customin")) q = V(q, f.data("customin"));else if (f.hasClass("randomrotate")) {
            q.scale = Math.random() * 3 + 1;
            q.rotation = Math.round(Math.random() * 200 - 100);
            q.x = Math.round(Math.random() * 200 - 100);
            q.y = Math.round(Math.random() * 200 - 100);
          } else if (f.hasClass("lfr") || f.hasClass("skewfromright")) q.x = 15 + r.width;else if (f.hasClass("lfl") || f.hasClass("skewfromleft")) q.x = -15 - v;else if (f.hasClass("sfl") || f.hasClass("skewfromleftshort")) q.x = -50;else if (f.hasClass("sfr") || f.hasClass("skewfromrightshort")) q.x = 50;else if (f.hasClass("lft")) q.y = -25 - m;else if (f.hasClass("lfb")) q.y = 25 + r.height;else if (f.hasClass("sft")) q.y = -50;else if (f.hasClass("sfb")) q.y = 50;
          if (f.hasClass("skewfromright") || f.hasClass("skewfromrightshort")) q.skewX = -85;else if (f.hasClass("skewfromleft") || f.hasClass("skewfromleftshort")) q.skewX = 85;
          if (f.hasClass("fade") || f.hasClass("sft") || f.hasClass("sfl") || f.hasClass("sfb") || f.hasClass("skewfromleftshort") || f.hasClass("sfr") || f.hasClass("skewfromrightshort")) q.opacity = 0;

          if (K().toLowerCase() == "safari") {
            q.rotationX = 0;
            q.rotationY = 0;
          }

          var J = f.data("elementdelay") == t ? 0 : f.data("elementdelay");
          U.ease = q.ease = f.data("easing") == t ? Power1.easeInOut : f.data("easing");
          q.data = new Object();
          q.data.oldx = q.x;
          q.data.oldy = q.y;
          U.data = new Object();
          U.data.oldx = U.x;
          U.data.oldy = U.y;
          q.x = q.x * l;
          q.y = q.y * l;
          var Q = new TimelineLite();

          if (a != 2) {
            if (f.hasClass("customin")) {
              var _TweenLite$set;

              if (I != f) F.add(TweenLite.set(f, (_TweenLite$set = {
                opacity: 1,
                scaleX: 1,
                scaleY: 1,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                skewX: 0,
                skewY: 0,
                z: 0,
                x: 0,
                y: 0,
                visibility: "visible"
              }, _defineProperty(_TweenLite$set, "opacity", 1), _defineProperty(_TweenLite$set, "delay", 0), _defineProperty(_TweenLite$set, "overwrite", "all"), _TweenLite$set)));
              q.visibility = "hidden";
              U.visibility = "visible";
              U.overwrite = "all";
              U.opacity = 1;
              U.onComplete = _B();
              U.delay = _;
              F.add(Q.staggerFromTo(I, D, q, U, J), "frame0");
            } else {
              var _TweenLite$set2;

              q.visibility = "visible";
              q.transformPerspective = 600;
              if (I != f) F.add(TweenLite.set(f, (_TweenLite$set2 = {
                opacity: 1,
                scaleX: 1,
                scaleY: 1,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                skewX: 0,
                skewY: 0,
                z: 0,
                x: 0,
                y: 0,
                visibility: "visible"
              }, _defineProperty(_TweenLite$set2, "opacity", 1), _defineProperty(_TweenLite$set2, "delay", 0), _defineProperty(_TweenLite$set2, "overwrite", "all"), _TweenLite$set2)));
              U.visibility = "visible";
              U.delay = _;
              U.onComplete = _B();
              U.opacity = 1;

              if (f.hasClass("randomrotate") && I != f) {
                for (var n = 0; n < I.length; n++) {
                  var Y = new Object();
                  var tt = new Object();
                  e.extend(Y, q);
                  e.extend(tt, U);
                  q.scale = Math.random() * 3 + 1;
                  q.rotation = Math.round(Math.random() * 200 - 100);
                  q.x = Math.round(Math.random() * 200 - 100);
                  q.y = Math.round(Math.random() * 200 - 100);
                  if (n != 0) tt.delay = _ + n * J;
                  F.append(TweenLite.fromTo(I[n], D, Y, tt), "frame0");
                }
              } else F.add(Q.staggerFromTo(I, D, q, U, J), "frame0");
            }
          }

          f.data("timeline", F);
          var nt = new Array();

          if (f.data("frames") != t) {
            var rt = f.data("frames");
            rt = rt.replace(/\s+/g, "");
            rt = rt.replace("{", "");
            var it = rt.split("}");
            e.each(it, function (e, t) {
              if (t.length > 0) {
                var n = $(t);
                Z(f, r, n, "frame" + (e + 10), l);
              }
            });
          }

          F = f.data("timeline");

          if (f.data("end") != t && (a == -1 || a == 2)) {
            et(f, r, f.data("end") / 1e3, q, "frame99", l);
          } else {
            et(f, r, 999999, q, "frame99", l);
          }

          F = f.data("timeline");
          f.data("timeline", F);
          f.find(".rs-pendulum").each(function () {
            var n = e(this);

            if (n.data("timeline") == t) {
              n.data("timeline", new TimelineLite());
              var r = n.data("startdeg") == t ? -20 : n.data("startdeg"),
                  i = n.data("enddeg") == t ? 20 : n.data("enddeg");
              speed = n.data("speed") == t ? 2 : n.data("speed"), origin = n.data("origin") == t ? "50% 50%" : n.data("origin"), easing = n.data("ease") == t ? Power2.easeInOut : n.data("ease");
              n.data("timeline").append(new TweenLite.fromTo(n, speed, {
                rotation: r,
                transformOrigin: origin
              }, {
                rotation: i,
                ease: easing
              }));
              n.data("timeline").append(new TweenLite.fromTo(n, speed, {
                rotation: i,
                transformOrigin: origin
              }, {
                rotation: r,
                ease: easing,
                onComplete: function onComplete() {
                  n.data("timeline").restart();
                }
              }));
            }
          });
          f.find(".rs-slideloop").each(function () {
            var n = e(this);

            if (n.data("timeline") == t) {
              n.data("timeline", new TimelineLite());
              var r = n.data("xs") == t ? 0 : n.data("xs"),
                  i = n.data("ys") == t ? 0 : n.data("ys");
              xe = n.data("xe") == t ? 0 : n.data("xe"), ye = n.data("ye") == t ? 0 : n.data("ye"), speed = n.data("speed") == t ? 2 : n.data("speed"), easing = n.data("ease") == t ? Power2.easeInOut : n.data("ease");
              n.data("timeline").append(new TweenLite.fromTo(n, speed, {
                x: r,
                y: i
              }, {
                x: xe,
                y: ye,
                ease: easing
              }));
              n.data("timeline").append(new TweenLite.fromTo(n, speed, {
                x: xe,
                y: ye
              }, {
                x: r,
                y: i,
                onComplete: function onComplete() {
                  n.data("timeline").restart();
                }
              }));
            }
          });
          f.find(".rs-pulse").each(function () {
            var n = e(this);

            if (n.data("timeline") == t) {
              n.data("timeline", new TimelineLite());
              var r = n.data("zoomstart") == t ? 0 : n.data("zoomstart"),
                  i = n.data("zoomend") == t ? 0 : n.data("zoomend");
              speed = n.data("speed") == t ? 2 : n.data("speed"), easing = n.data("ease") == t ? Power2.easeInOut : n.data("ease");
              n.data("timeline").append(new TweenLite.fromTo(n, speed, {
                scale: r
              }, {
                scale: i,
                ease: easing
              }));
              n.data("timeline").append(new TweenLite.fromTo(n, speed, {
                scale: i
              }, {
                scale: r,
                onComplete: function onComplete() {
                  n.data("timeline").restart();
                }
              }));
            }
          });
          f.find(".rs-wave").each(function () {
            var n = e(this);

            if (n.data("timeline") == t) {
              n.data("timeline", new TimelineLite());
              var r = n.data("angle") == t ? 10 : n.data("angle"),
                  i = n.data("radius") == t ? 10 : n.data("radius"),
                  s = n.data("speed") == t ? -20 : n.data("speed"),
                  o = n.data("origin") == t ? -20 : n.data("origin"),
                  u = {
                a: 0,
                ang: r,
                element: n,
                unit: i
              };
              n.data("timeline").append(new TweenLite.fromTo(u, s, {
                a: 360
              }, {
                a: 0,
                ease: Linear.easeNone,
                onUpdate: function onUpdate() {
                  var e = u.a * (Math.PI / 180);
                  TweenLite.to(u.element, .1, {
                    x: Math.cos(e) * u.unit,
                    y: u.unit * (1 - Math.sin(e))
                  });
                },
                onComplete: function onComplete() {
                  n.data("timeline").restart();
                }
              }));
            }
          });
        }
      }

      if (i) {
        if (f.data("timeline") != t) {
          var st = f.data("timeline").getTweensOf();
          e.each(st, function (e, n) {
            if (n.vars.data != t) {
              var r = n.vars.data.oldx * l;
              var i = n.vars.data.oldy * l;

              if (n.progress() != 1 && n.progress() != 0) {
                try {
                  n.vars.x = r;
                  n.vary.y = i;
                } catch (s) {}
              } else {
                if (n.progress() == 1) {
                  TweenLite.set(n.target, {
                    x: r,
                    y: i
                  });
                }
              }
            }
          });
        }
      }
    });
    var l = e("body").find("#" + r.container.attr("id")).find(".tp-bannertimer");
    l.data("opt", r);
  }

  function K() {
    var e = navigator.appName,
        t = navigator.userAgent,
        n;
    var r = t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if (r && (n = t.match(/version\/([\.\d]+)/i)) != null) r[2] = n[1];
    r = r ? [r[1], r[2]] : [e, navigator.appVersion, "-?"];
    return r[0];
  }

  function Q() {
    var e = navigator.appName,
        t = navigator.userAgent,
        n;
    var r = t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if (r && (n = t.match(/version\/([\.\d]+)/i)) != null) r[2] = n[1];
    r = r ? [r[1], r[2]] : [e, navigator.appVersion, "-?"];
    return r[1];
  }

  function G(e, n) {
    if (e.data("fsize") == t) e.data("fsize", parseInt(e.css("font-size"), 0) || 0);
    if (e.data("pt") == t) e.data("pt", parseInt(e.css("paddingTop"), 0) || 0);
    if (e.data("pb") == t) e.data("pb", parseInt(e.css("paddingBottom"), 0) || 0);
    if (e.data("pl") == t) e.data("pl", parseInt(e.css("paddingLeft"), 0) || 0);
    if (e.data("pr") == t) e.data("pr", parseInt(e.css("paddingRight"), 0) || 0);
    if (e.data("mt") == t) e.data("mt", parseInt(e.css("marginTop"), 0) || 0);
    if (e.data("mb") == t) e.data("mb", parseInt(e.css("marginBottom"), 0) || 0);
    if (e.data("ml") == t) e.data("ml", parseInt(e.css("marginLeft"), 0) || 0);
    if (e.data("mr") == t) e.data("mr", parseInt(e.css("marginRight"), 0) || 0);
    if (e.data("bt") == t) e.data("bt", parseInt(e.css("borderTopWidth"), 0) || 0);
    if (e.data("bb") == t) e.data("bb", parseInt(e.css("borderBottomWidth"), 0) || 0);
    if (e.data("bl") == t) e.data("bl", parseInt(e.css("borderLeftWidth"), 0) || 0);
    if (e.data("br") == t) e.data("br", parseInt(e.css("borderRightWidth"), 0) || 0);
    if (e.data("ls") == t) e.data("ls", parseInt(e.css("letterSpacing"), 0) || 0);
    if (e.data("lh") == t) e.data("lh", parseInt(e.css("lineHeight"), 0) || 0);
    if (e.data("minwidth") == t) e.data("minwidth", parseInt(e.css("minWidth"), 0) || 0);
    if (e.data("minheight") == t) e.data("minheight", parseInt(e.css("minHeight"), 0) || 0);
    if (e.data("maxwidth") == t) e.data("maxwidth", parseInt(e.css("maxWidth"), 0) || "none");
    if (e.data("maxheight") == t) e.data("maxheight", parseInt(e.css("maxHeight"), 0) || "none");
    if (e.data("wan") == t) e.data("wan", e.css("-webkit-transition"));
    if (e.data("moan") == t) e.data("moan", e.css("-moz-animation-transition"));
    if (e.data("man") == t) e.data("man", e.css("-ms-animation-transition"));
    if (e.data("ani") == t) e.data("ani", e.css("transition"));

    if (!e.hasClass("tp-splitted")) {
      e.css("-webkit-transition", "none");
      e.css("-moz-transition", "none");
      e.css("-ms-transition", "none");
      e.css("transition", "none");
      TweenLite.set(e, {
        fontSize: Math.round(e.data("fsize") * n.bw) + "px",
        letterSpacing: Math.floor(e.data("ls") * n.bw) + "px",
        paddingTop: Math.round(e.data("pt") * n.bh) + "px",
        paddingBottom: Math.round(e.data("pb") * n.bh) + "px",
        paddingLeft: Math.round(e.data("pl") * n.bw) + "px",
        paddingRight: Math.round(e.data("pr") * n.bw) + "px",
        marginTop: e.data("mt") * n.bh + "px",
        marginBottom: e.data("mb") * n.bh + "px",
        marginLeft: e.data("ml") * n.bw + "px",
        marginRight: e.data("mr") * n.bw + "px",
        borderTopWidth: Math.round(e.data("bt") * n.bh) + "px",
        borderBottomWidth: Math.round(e.data("bb") * n.bh) + "px",
        borderLeftWidth: Math.round(e.data("bl") * n.bw) + "px",
        borderRightWidth: Math.round(e.data("br") * n.bw) + "px",
        lineHeight: Math.round(e.data("lh") * n.bh) + "px",
        minWidth: e.data("minwidth") * n.bw + "px",
        minHeight: e.data("minheight") * n.bh + "px",
        overwrite: "auto"
      });
      setTimeout(function () {
        e.css("-webkit-transition", e.data("wan"));
        e.css("-moz-transition", e.data("moan"));
        e.css("-ms-transition", e.data("man"));
        e.css("transition", e.data("ani"));
      }, 30);
      if (e.data("maxheight") != "none") e.css({
        maxHeight: e.data("maxheight") * n.bh + "px"
      });
      if (e.data("maxwidth") != "none") e.css({
        maxWidth: e.data("maxwidth") * n.bw + "px"
      });
    }
  }

  function Y(t, n) {
    t.find(".tp-caption").each(function (t) {
      var n = e(this);

      if (n.find("iframe").length > 0) {
        try {
          var r = n.find("iframe");
          var i = r.attr("id");
          var s = $f(i);
          s.api("pause");
          clearTimeout(n.data("timerplay"));
        } catch (o) {}

        try {
          var u = n.data("player");
          u.stopVideo();
          clearTimeout(n.data("timerplay"));
        } catch (o) {}
      }

      if (n.find("video").length > 0) {
        try {
          n.find("video").each(function (t) {
            var n = e(this).parent();
            var r = n.attr("id");
            clearTimeout(n.data("timerplay"));
            var i = this;
            i.pause();
          });
        } catch (o) {}
      }

      try {
        var a = n.data("timeline");
        var f = a.getLabelTime("frame99");
        var l = a.time();

        if (f > l) {
          var c = a.getTweensOf(n);
          e.each(c, function (e, t) {
            if (e != 0) t.pause();
          });
          if (n.css("opacity") != 0) a.play("frame99");else a.progress(1, false);
        }
      } catch (o) {}
    });
  }

  function Z(e, n, r, i, s) {
    var o = e.data("timeline");
    var u = new TimelineLite();
    var a = e;
    if (r.typ == "chars") a = e.data("mySplitText").chars;else if (r.typ == "words") a = e.data("mySplitText").words;else if (r.typ == "lines") a = e.data("mySplitText").lines;
    r.animation.ease = r.ease;
    if (r.animation.rotationZ != t) r.animation.rotation = r.animation.rotationZ;
    r.animation.data = new Object();
    r.animation.data.oldx = r.animation.x;
    r.animation.data.oldy = r.animation.y;
    r.animation.x = r.animation.x * s;
    r.animation.y = r.animation.y * s;
    o.add(u.staggerTo(a, r.speed, r.animation, r.elementdelay), r.start);
    o.addLabel(i, r.start);
    e.data("timeline", o);
  }

  function et(e, n, r, i, s, o) {
    var u = e.data("timeline");
    var a = new TimelineLite();
    var f = X();
    var l = e.data("endspeed") == t ? e.data("speed") : e.data("endspeed");
    f.ease = e.data("endeasing") == t ? Power1.easeInOut : e.data("endeasing");
    l = l / 1e3;

    if (e.hasClass("ltr") || e.hasClass("ltl") || e.hasClass("str") || e.hasClass("stl") || e.hasClass("ltt") || e.hasClass("ltb") || e.hasClass("stt") || e.hasClass("stb") || e.hasClass("skewtoright") || e.hasClass("skewtorightshort") || e.hasClass("skewtoleft") || e.hasClass("skewtoleftshort") || e.hasClass("fadeout") || e.hasClass("randomrotateout")) {
      if (e.hasClass("skewtoright") || e.hasClass("skewtorightshort")) f.skewX = 35;else if (e.hasClass("skewtoleft") || e.hasClass("skewtoleftshort")) f.skewX = -35;
      if (e.hasClass("ltr") || e.hasClass("skewtoright")) f.x = n.width + 60;else if (e.hasClass("ltl") || e.hasClass("skewtoleft")) f.x = 0 - (n.width + 60);else if (e.hasClass("ltt")) f.y = 0 - (n.height + 60);else if (e.hasClass("ltb")) f.y = n.height + 60;else if (e.hasClass("str") || e.hasClass("skewtorightshort")) {
        f.x = 50;
        f.opacity = 0;
      } else if (e.hasClass("stl") || e.hasClass("skewtoleftshort")) {
        f.x = -50;
        f.opacity = 0;
      } else if (e.hasClass("stt")) {
        f.y = -50;
        f.opacity = 0;
      } else if (e.hasClass("stb")) {
        f.y = 50;
        f.opacity = 0;
      } else if (e.hasClass("randomrotateout")) {
        f.x = Math.random() * n.width;
        f.y = Math.random() * n.height;
        f.scale = Math.random() * 2 + .3;
        f.rotation = Math.random() * 360 - 180;
        f.opacity = 0;
      } else if (e.hasClass("fadeout")) {
        f.opacity = 0;
      }
      if (e.hasClass("skewtorightshort")) f.x = 270;else if (e.hasClass("skewtoleftshort")) f.x = -270;
      f.data = new Object();
      f.data.oldx = f.x;
      f.data.oldy = f.y;
      f.x = f.x * o;
      f.y = f.y * o;
      f.overwrite = "auto";
      var c = e;
      var c = e;
      if (e.data("splitout") == "chars") c = e.data("mySplitText").chars;else if (e.data("splitout") == "words") c = e.data("mySplitText").words;else if (e.data("splitout") == "lines") c = e.data("mySplitText").lines;
      var h = e.data("endelementdelay") == t ? 0 : e.data("endelementdelay");
      u.add(a.staggerTo(c, l, f, h), r);
    } else if (e.hasClass("customout")) {
      f = V(f, e.data("customout"));
      var c = e;
      if (e.data("splitout") == "chars") c = e.data("mySplitText").chars;else if (e.data("splitout") == "words") c = e.data("mySplitText").words;else if (e.data("splitout") == "lines") c = e.data("mySplitText").lines;
      var h = e.data("endelementdelay") == t ? 0 : e.data("endelementdelay");

      f.onStart = function () {
        TweenLite.set(e, {
          transformPerspective: f.transformPerspective,
          transformOrigin: f.transformOrigin,
          overwrite: "auto"
        });
      };

      f.data = new Object();
      f.data.oldx = f.x;
      f.data.oldy = f.y;
      f.x = f.x * o;
      f.y = f.y * o;
      u.add(a.staggerTo(c, l, f, h), r);
    } else {
      i.delay = 0;
      u.add(TweenLite.to(e, l, i), r);
    }

    u.addLabel(s, r);
    e.data("timeline", u);
  }

  function tt(t, n) {
    t.children().each(function () {
      try {
        e(this).die("click");
      } catch (t) {}

      try {
        e(this).die("mouseenter");
      } catch (t) {}

      try {
        e(this).die("mouseleave");
      } catch (t) {}

      try {
        e(this).unbind("hover");
      } catch (t) {}
    });

    try {
      t.die("click", "mouseenter", "mouseleave");
    } catch (r) {}

    clearInterval(n.cdint);
    t = null;
  }

  function nt(n, r) {
    r.cd = 0;
    r.loop = 0;
    if (r.stopAfterLoops != t && r.stopAfterLoops > -1) r.looptogo = r.stopAfterLoops;else r.looptogo = 9999999;
    if (r.stopAtSlide != t && r.stopAtSlide > -1) r.lastslidetoshow = r.stopAtSlide;else r.lastslidetoshow = 999;
    r.stopLoop = "off";
    if (r.looptogo == 0) r.stopLoop = "on";

    if (r.slideamount > 1 && !(r.stopAfterLoops == 0 && r.stopAtSlide == 1)) {
      var i = n.find(".tp-bannertimer");
      n.on("stoptimer", function () {
        i.data("tween").pause();
        if (r.hideTimerBar == "on") i.css({
          visibility: "hidden"
        });
      });
      n.on("starttimer", function () {
        if (r.conthover != 1 && r.videoplaying != true && r.width > r.hideSliderAtLimit && r.bannertimeronpause != true && r.overnav != true) if (r.stopLoop == "on" && r.next == r.lastslidetoshow - 1) {} else {
          i.css({
            visibility: "visible"
          });
          i.data("tween").play();
        }
        if (r.hideTimerBar == "on") i.css({
          visibility: "hidden"
        });
      });
      n.on("restarttimer", function () {
        if (r.stopLoop == "on" && r.next == r.lastslidetoshow - 1) {} else {
          i.css({
            visibility: "visible"
          });
          i.data("tween", TweenLite.fromTo(i, r.delay / 1e3, {
            width: "0%"
          }, {
            width: "100%",
            ease: Linear.easeNone,
            onComplete: _o,
            delay: 1
          }));
        }

        if (r.hideTimerBar == "on") i.css({
          visibility: "hidden"
        });
      });
      n.on("nulltimer", function () {
        i.data("tween").pause(0);
        if (r.hideTimerBar == "on") i.css({
          visibility: "hidden"
        });
      });

      function _o() {
        if (e("body").find(n).length == 0) {
          tt(n, r);
          clearInterval(r.cdint);
        }

        if (n.data("conthover-changed") == 1) {
          r.conthover = n.data("conthover");
          n.data("conthover-changed", 0);
        }

        r.act = r.next;
        r.next = r.next + 1;

        if (r.next > n.find(">ul >li").length - 1) {
          r.next = 0;
          r.looptogo = r.looptogo - 1;

          if (r.looptogo <= 0) {
            r.stopLoop = "on";
          }
        }

        if (r.stopLoop == "on" && r.next == r.lastslidetoshow - 1) {
          n.find(".tp-bannertimer").css({
            visibility: "hidden"
          });
          n.trigger("revolution.slide.onstop");
        } else {
          i.data("tween").restart();
        }

        C(n, r);
      }

      i.data("tween", TweenLite.fromTo(i, r.delay / 1e3, {
        width: "0%"
      }, {
        width: "100%",
        ease: Linear.easeNone,
        onComplete: _o,
        delay: 1
      }));
      i.data("opt", r);
      n.hover(function () {
        if (r.onHoverStop == "on" && !s()) {
          n.trigger("stoptimer");
          n.trigger("revolution.slide.onpause");
          var i = n.find(">ul >li:eq(" + r.next + ") .slotholder");
          i.find(".defaultimg").each(function () {
            var n = e(this);

            if (n.data("kenburn") != t) {
              n.data("kenburn").pause();
            }
          });
        }
      }, function () {
        if (n.data("conthover") != 1) {
          n.trigger("revolution.slide.onresume");
          n.trigger("starttimer");
          var i = n.find(">ul >li:eq(" + r.next + ") .slotholder");
          i.find(".defaultimg").each(function () {
            var n = e(this);

            if (n.data("kenburn") != t) {
              n.data("kenburn").play();
            }
          });
        }
      });
    }
  }

  e.fn.extend({
    revolution: function revolution(i) {
      e.fn.revolution.defaults = {
        delay: 9e3,
        startheight: 500,
        startwidth: 960,
        fullScreenAlignForce: "off",
        autoHeight: "off",
        hideTimerBar: "off",
        hideThumbs: 200,
        hideNavDelayOnMobile: 1500,
        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 3,
        navigationType: "bullet",
        navigationArrows: "solo",
        navigationInGrid: "off",
        hideThumbsOnMobile: "off",
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off",
        hideThumbsUnderResoluition: 0,
        navigationStyle: "round",
        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 0,
        navigationVOffset: 20,
        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowLeftVOffset: 0,
        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        soloArrowRightVOffset: 0,
        keyboardNavigation: "on",
        touchenabled: "on",
        onHoverStop: "on",
        stopAtSlide: -1,
        stopAfterLoops: -1,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLimit: 0,
        hideSliderAtLimit: 0,
        shadow: 0,
        fullWidth: "off",
        fullScreen: "off",
        minFullScreenHeight: 0,
        fullScreenOffsetContainer: "",
        dottedOverlay: "none",
        forceFullWidth: "off",
        spinner: "spinner0",
        swipe_velocity: .4,
        swipe_max_touches: 1,
        swipe_min_touches: 1,
        drag_block_vertical: false,
        isJoomla: false,
        parallax: "off",
        parallaxLevels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
        parallaxBgFreeze: "off"
      };
      i = e.extend({}, e.fn.revolution.defaults, i);
      return this.each(function () {
        var o = i;
        o.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
        if (o.fullWidth != "on" && o.fullScreen != "on") o.autoHeight = "off";
        if (o.fullScreen == "on") o.autoHeight = "on";
        if (o.fullWidth != "on" && o.fullScreen != "on") forceFulWidth = "off";
        var u = e(this);
        if (o.fullWidth == "on" && o.autoHeight == "off") u.css({
          maxHeight: o.startheight + "px"
        });
        if (s() && o.hideThumbsOnMobile == "on" && o.navigationType == "thumb") o.navigationType = "none";
        if (s() && o.hideBulletsOnMobile == "on" && o.navigationType == "bullet") o.navigationType = "none";
        if (s() && o.hideBulletsOnMobile == "on" && o.navigationType == "both") o.navigationType = "none";
        if (s() && o.hideArrowsOnMobile == "on") o.navigationArrows = "none";

        if (o.forceFullWidth == "on") {
          var f = u.parent().offset().left;
          var l = u.parent().css("marginBottom");
          var m = u.parent().css("marginTop");
          if (l == t) l = 0;
          if (m == t) m = 0;
          u.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:' + m + ";margin-bottom:" + l + '" class="forcefullwidth_wrapper_tp_banner"></div>');
          u.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + u.height() + 'px"></div>');
          u.css({
            backgroundColor: u.parent().css("backgroundColor"),
            backgroundImage: u.parent().css("backgroundImage")
          });
          u.parent().css({
            left: 0 - f + "px",
            position: "absolute",
            width: e(window).width()
          });
          o.width = e(window).width();
        }

        try {
          if (o.hideThumbsUnderResolution > e(window).width() && o.hideThumbsUnderResolution != 0) {
            u.parent().find(".tp-bullets.tp-thumbs").css({
              display: "none"
            });
          } else {
            u.parent().find(".tp-bullets.tp-thumbs").css({
              display: "block"
            });
          }
        } catch (g) {}

        if (!u.hasClass("revslider-initialised")) {
          u.addClass("revslider-initialised");
          if (u.attr("id") == t) u.attr("id", "revslider-" + Math.round(Math.random() * 1e3 + 5));
          o.firefox13 = false;
          o.ie = !e.support.opacity;
          o.ie9 = document.documentMode == 9;
          o.origcd = o.delay;
          var b = e.fn.jquery.split("."),
              w = parseFloat(b[0]),
              E = parseFloat(b[1]),
              S = parseFloat(b[2] || "0");

          if (w == 1 && E < 7) {
            u.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + b + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>");
          }

          if (w > 1) o.ie = false;
          if (!e.support.transition) e.fn.transition = e.fn.animate;
          u.find(".caption").each(function () {
            e(this).addClass("tp-caption");
          });

          if (s()) {
            u.find(".tp-caption").each(function () {
              if (e(this).data("autoplay") == true) e(this).data("autoplay", false);
            });
          }

          var x = 0;
          var T = 0;
          var N = 0;
          var k = "http";

          if (location.protocol === "https:") {
            k = "https";
          }

          u.find(".tp-caption iframe").each(function (t) {
            try {
              if (e(this).attr("src").indexOf("you") > 0 && x == 0) {
                x = 1;
                var n = document.createElement("script");
                var r = "https";
                n.src = r + "://www.youtube.com/iframe_api";
                var i = document.getElementsByTagName("script")[0];
                var s = true;
                e("head").find("*").each(function () {
                  if (e(this).attr("src") == r + "://www.youtube.com/iframe_api") s = false;
                });

                if (s) {
                  i.parentNode.insertBefore(n, i);
                }
              }
            } catch (o) {}
          });
          u.find(".tp-caption iframe").each(function (t) {
            try {
              if (e(this).attr("src").indexOf("vim") > 0 && T == 0) {
                T = 1;
                var n = document.createElement("script");
                n.src = k + "://a.vimeocdn.com/js/froogaloop2.min.js";
                var r = document.getElementsByTagName("script")[0];
                var i = true;
                e("head").find("*").each(function () {
                  if (e(this).attr("src") == k + "://a.vimeocdn.com/js/froogaloop2.min.js") i = false;
                });
                if (i) r.parentNode.insertBefore(n, r);
              }
            } catch (s) {}
          });
          u.find(".tp-caption video").each(function (t) {
            e(this).removeClass("video-js").removeClass("vjs-default-skin");
            e(this).attr("preload", "");
            e(this).css({
              display: "none"
            });
          });

          if (o.shuffle == "on") {
            for (var L = 0; L < u.find(">ul:first-child >li").length; L++) {
              var A = Math.round(Math.random() * u.find(">ul:first-child >li").length);
              u.find(">ul:first-child >li:eq(" + A + ")").prependTo(u.find(">ul:first-child"));
            }
          }

          o.slots = 4;
          o.act = -1;
          o.next = 0;
          if (o.startWithSlide != t) o.next = o.startWithSlide;
          var M = n("#")[0];

          if (M.length < 9) {
            if (M.split("slide").length > 1) {
              var _ = parseInt(M.split("slide")[1], 0);

              if (_ < 1) _ = 1;
              if (_ > u.find(">ul:first >li").length) _ = u.find(">ul:first >li").length;
              o.next = _ - 1;
            }
          }

          o.firststart = 1;
          if (o.navigationHOffset == t) o.navOffsetHorizontal = 0;
          if (o.navigationVOffset == t) o.navOffsetVertical = 0;
          u.append('<div class="tp-loader ' + o.spinner + '">' + '<div class="dot1"></div>' + '<div class="dot2"></div>' + '<div class="bounce1"></div>' + '<div class="bounce2"></div>' + '<div class="bounce3"></div>' + "</div>");
          if (u.find(".tp-bannertimer").length == 0) u.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
          var D = u.find(".tp-bannertimer");

          if (D.length > 0) {
            D.css({
              width: "0%"
            });
          }

          u.addClass("tp-simpleresponsive");
          o.container = u;
          o.slideamount = u.find(">ul:first >li").length;
          if (u.height() == 0) u.height(o.startheight);
          if (o.startwidth == t || o.startwidth == 0) o.startwidth = u.width();
          if (o.startheight == t || o.startheight == 0) o.startheight = u.height();
          o.width = u.width();
          o.height = u.height();
          o.bw = o.startwidth / u.width();
          o.bh = o.startheight / u.height();

          if (o.width != o.startwidth) {
            o.height = Math.round(o.startheight * (o.width / o.startwidth));
            u.height(o.height);
          }

          if (o.shadow != 0) {
            u.parent().append('<div class="tp-bannershadow tp-shadow' + o.shadow + '"></div>');
            var f = 0;
            if (o.forceFullWidth == "on") f = 0 - o.container.parent().offset().left;
            u.parent().find(".tp-bannershadow").css({
              width: o.width,
              left: f
            });
          }

          u.find("ul").css({
            display: "none"
          });
          var P = u;
          u.find("ul").css({
            display: "block"
          });
          y(u, o);
          if (o.parallax != "off") O(u, o);
          if (o.slideamount > 1) c(u, o);
          if (o.slideamount > 1) a(u, o);
          if (o.slideamount > 1) h(u, o);
          if (o.keyboardNavigation == "on") p(u, o);
          d(u, o);
          if (o.hideThumbs > 0) v(u, o);
          C(u, o);
          if (o.slideamount > 1) nt(u, o);
          setTimeout(function () {
            u.trigger("revolution.slide.onloaded");
          }, 500);
          e("body").data("rs-fullScreenMode", false);
          e(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function () {
            e("body").data("rs-fullScreenMode", !e("body").data("rs-fullScreenMode"));

            if (e("body").data("rs-fullScreenMode")) {
              setTimeout(function () {
                e(window).trigger("resize");
              }, 200);
            }
          });
          e(window).resize(function () {
            if (e("body").find(u) != 0) if (o.forceFullWidth == "on") {
              var t = o.container.closest(".forcefullwidth_wrapper_tp_banner").offset().left;
              o.container.parent().css({
                left: 0 - t + "px",
                width: e(window).width()
              });
            }

            if (u.outerWidth(true) != o.width || u.is(":hidden")) {
              r(u, o);
            }
          });

          try {
            if (o.hideThumbsUnderResoluition != 0 && o.navigationType == "thumb") {
              if (o.hideThumbsUnderResoluition > e(window).width()) e(".tp-bullets").css({
                display: "none"
              });else e(".tp-bullets").css({
                display: "block"
              });
            }
          } catch (g) {}

          u.find(".tp-scrollbelowslider").on("click", function () {
            var t = 0;

            try {
              t = e("body").find(o.fullScreenOffsetContainer).height();
            } catch (n) {}

            try {
              t = t - e(this).data("scrolloffset");
            } catch (n) {}

            e("body,html").animate({
              scrollTop: u.offset().top + u.find(">ul >li").height() - t + "px"
            }, {
              duration: 400
            });
          });
          var H = u.parent();

          if (e(window).width() < o.hideSliderAtLimit) {
            u.trigger("stoptimer");
            if (H.css("display") != "none") H.data("olddisplay", H.css("display"));
            H.css({
              display: "none"
            });
          }
        }
      });
    },
    revscroll: function revscroll(t) {
      return this.each(function () {
        var n = e(this);
        e("body,html").animate({
          scrollTop: n.offset().top + n.find(">ul >li").height() - t + "px"
        }, {
          duration: 400
        });
      });
    },
    revredraw: function revredraw(t) {
      return this.each(function () {
        var t = e(this);
        var n = t.parent().find(".tp-bannertimer");
        var i = n.data("opt");
        r(t, i);
      });
    },
    revpause: function revpause(t) {
      return this.each(function () {
        var t = e(this);
        t.data("conthover", 1);
        t.data("conthover-changed", 1);
        t.trigger("revolution.slide.onpause");
        var n = t.parent().find(".tp-bannertimer");
        var r = n.data("opt");
        r.bannertimeronpause = true;
        t.trigger("stoptimer");
      });
    },
    revresume: function revresume(t) {
      return this.each(function () {
        var t = e(this);
        t.data("conthover", 0);
        t.data("conthover-changed", 1);
        t.trigger("revolution.slide.onresume");
        var n = t.parent().find(".tp-bannertimer");
        var r = n.data("opt");
        r.bannertimeronpause = false;
        t.trigger("starttimer");
      });
    },
    revnext: function revnext(t) {
      return this.each(function () {
        var t = e(this);
        t.parent().find(".tp-rightarrow").click();
      });
    },
    revprev: function revprev(t) {
      return this.each(function () {
        var t = e(this);
        t.parent().find(".tp-leftarrow").click();
      });
    },
    revmaxslide: function revmaxslide(t) {
      return e(this).find(">ul:first-child >li").length;
    },
    revcurrentslide: function revcurrentslide(t) {
      var n = e(this);
      var r = n.parent().find(".tp-bannertimer");
      var i = r.data("opt");
      return i.act;
    },
    revlastslide: function revlastslide(t) {
      var n = e(this);
      var r = n.parent().find(".tp-bannertimer");
      var i = r.data("opt");
      return i.lastslide;
    },
    revshowslide: function revshowslide(t) {
      return this.each(function () {
        var n = e(this);
        n.data("showus", t);
        n.parent().find(".tp-rightarrow").click();
      });
    }
  });

  var N = function N(n, r, i) {
    x(n, 0);
    var s = setInterval(function () {
      i.bannertimeronpause = true;
      i.container.trigger("stoptimer");
      i.cd = 0;
      var o = 0;
      n.find("img, .defaultimg").each(function (t) {
        if (e(this).data("lazydone") != 1) {
          o++;
        }
      });
      if (o > 0) x(n, o);else {
        clearInterval(s);
        if (r != t) r();
      }
    }, 100);
  };
})(jQuery);

(function (e) {
  "use strict";

  var t = e.GreenSockGlobals || e,
      n = function n(e) {
    var n,
        r = e.split("."),
        i = t;

    for (n = 0; r.length > n; n++) {
      i[r[n]] = i = i[r[n]] || {};
    }

    return i;
  },
      r = n("com.greensock.utils"),
      i = function i(e) {
    var t = e.nodeType,
        n = "";

    if (1 === t || 9 === t || 11 === t) {
      if ("string" == typeof e.textContent) return e.textContent;

      for (e = e.firstChild; e; e = e.nextSibling) {
        n += i(e);
      }
    } else if (3 === t || 4 === t) return e.nodeValue;

    return n;
  },
      s = document,
      o = s.defaultView ? s.defaultView.getComputedStyle : function () {},
      u = /([A-Z])/g,
      a = function a(e, t, n, r) {
    var i;
    return (n = n || o(e, null)) ? (e = n.getPropertyValue(t.replace(u, "-$1").toLowerCase()), i = e || n.length ? e : n[t]) : e.currentStyle && (n = e.currentStyle, i = n[t]), r ? i : parseInt(i, 10) || 0;
  },
      f = function f(e) {
    return e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0]) ? !0 : !1;
  },
      l = function l(e) {
    var t,
        n,
        r,
        i = [],
        s = e.length;

    for (t = 0; s > t; t++) {
      if (n = e[t], f(n)) for (r = n.length, r = 0; n.length > r; r++) {
        i.push(n[r]);
      } else i.push(n);
    }

    return i;
  },
      c = ")eefec303079ad17405c",
      h = /(?:<br>|<br\/>|<br \/>)/gi,
      p = s.all && !s.addEventListener,
      d = "<div style='position:relative;display:inline-block;" + (p ? "*display:inline;*zoom:1;'" : "'"),
      v = function v(e) {
    e = e || "";
    var t = -1 !== e.indexOf("++"),
        n = 1;
    return t && (e = e.split("++").join("")), function () {
      return d + (e ? " class='" + e + (t ? n++ : "") + "'>" : ">");
    };
  },
      m = r.SplitText = t.SplitText = function (e, t) {
    if ("string" == typeof e && (e = m.selector(e)), !e) throw "cannot split a null element.";
    this.elements = f(e) ? l(e) : [e], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = t || {}, this.split(t);
  },
      g = function g(e, t, n, r, u) {
    h.test(e.innerHTML) && (e.innerHTML = e.innerHTML.replace(h, c));

    var f,
        l,
        p,
        d,
        m,
        g,
        y,
        b,
        w,
        E,
        S,
        x,
        T,
        N = i(e),
        C = t.type || t.split || "chars,words,lines",
        k = -1 !== C.indexOf("lines") ? [] : null,
        L = -1 !== C.indexOf("words"),
        A = -1 !== C.indexOf("chars"),
        O = "absolute" === t.position || t.absolute === !0,
        M = O ? "&#173; " : " ",
        _ = -999,
        D = o(e),
        P = a(e, "paddingLeft", D),
        H = a(e, "borderBottomWidth", D) + a(e, "borderTopWidth", D),
        B = a(e, "borderLeftWidth", D) + a(e, "borderRightWidth", D),
        j = a(e, "paddingTop", D) + a(e, "paddingBottom", D),
        F = a(e, "paddingLeft", D) + a(e, "paddingRight", D),
        I = a(e, "textAlign", D, !0),
        q = e.clientHeight,
        R = e.clientWidth,
        U = N.length,
        z = "</div>",
        W = v(t.wordsClass),
        X = v(t.charsClass),
        V = -1 !== (t.linesClass || "").indexOf("++"),
        $ = t.linesClass;

    for (V && ($ = $.split("++").join("")), p = W(), d = 0; U > d; d++) {
      g = N.charAt(d), ")" === g && N.substr(d, 20) === c ? (p += z + "<BR/>", d !== U - 1 && (p += " " + W()), d += 19) : " " === g && " " !== N.charAt(d - 1) && d !== U - 1 ? (p += z, d !== U - 1 && (p += M + W())) : p += A && " " !== g ? X() + g + "</div>" : g;
    }

    for (e.innerHTML = p + z, m = e.getElementsByTagName("*"), U = m.length, y = [], d = 0; U > d; d++) {
      y[d] = m[d];
    }

    if (k || O) for (d = 0; U > d; d++) {
      b = y[d], l = b.parentNode === e, (l || O || A && !L) && (w = b.offsetTop, k && l && w !== _ && "BR" !== b.nodeName && (f = [], k.push(f), _ = w), O && (b._x = b.offsetLeft, b._y = w, b._w = b.offsetWidth, b._h = b.offsetHeight), k && (L !== l && A || (f.push(b), b._x -= P), l && d && (y[d - 1]._wordEnd = !0)));
    }

    for (d = 0; U > d; d++) {
      b = y[d], l = b.parentNode === e, "BR" !== b.nodeName ? (O && (S = b.style, L || l || (b._x += b.parentNode._x, b._y += b.parentNode._y), S.left = b._x + "px", S.top = b._y + "px", S.position = "absolute", S.display = "block", S.width = b._w + 1 + "px", S.height = b._h + "px"), L ? l ? r.push(b) : A && n.push(b) : l ? (e.removeChild(b), y.splice(d--, 1), U--) : !l && A && (w = !k && !O && b.nextSibling, e.appendChild(b), w || e.appendChild(s.createTextNode(" ")), n.push(b))) : k || O ? (e.removeChild(b), y.splice(d--, 1), U--) : L || e.appendChild(b);
    }

    if (k) {
      for (O && (E = s.createElement("div"), e.appendChild(E), x = E.offsetWidth + "px", w = E.offsetParent === e ? 0 : e.offsetLeft, e.removeChild(E)), S = e.style.cssText, e.style.cssText = "display:none;"; e.firstChild;) {
        e.removeChild(e.firstChild);
      }

      for (T = !O || !L && !A, d = 0; k.length > d; d++) {
        for (f = k[d], E = s.createElement("div"), E.style.cssText = "display:block;text-align:" + I + ";position:" + (O ? "absolute;" : "relative;"), $ && (E.className = $ + (V ? d + 1 : "")), u.push(E), U = f.length, m = 0; U > m; m++) {
          "BR" !== f[m].nodeName && (b = f[m], E.appendChild(b), T && (b._wordEnd || L) && E.appendChild(s.createTextNode(" ")), O && (0 === m && (E.style.top = b._y + "px", E.style.left = P + w + "px"), b.style.top = "0px", w && (b.style.left = b._x - w + "px")));
        }

        L || A || (E.innerHTML = i(E).split(String.fromCharCode(160)).join(" ")), O && (E.style.width = x, E.style.height = b._h + "px"), e.appendChild(E);
      }

      e.style.cssText = S;
    }

    O && (q > e.clientHeight && (e.style.height = q - j + "px", q > e.clientHeight && (e.style.height = q + H + "px")), R > e.clientWidth && (e.style.width = R - F + "px", R > e.clientWidth && (e.style.width = R + B + "px")));
  },
      y = m.prototype;

  y.split = function (e) {
    this.isSplit && this.revert(), this.vars = e || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;

    for (var t = 0; this.elements.length > t; t++) {
      this._originals[t] = this.elements[t].innerHTML, g(this.elements[t], this.vars, this.chars, this.words, this.lines);
    }

    return this.isSplit = !0, this;
  }, y.revert = function () {
    if (!this._originals) throw "revert() call wasn't scoped properly.";

    for (var e = this._originals.length; --e > -1;) {
      this.elements[e].innerHTML = this._originals[e];
    }

    return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this;
  }, m.selector = e.$ || e.jQuery || function (t) {
    return e.$ ? (m.selector = e.$, e.$(t)) : s ? s.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t;
  };
})(window || {});
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62454" + '/');

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
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","wp-content/plugins/revslider/rs-plugin/js/jquery.themepunch.revolution.min60c0.js"], null)
//# sourceMappingURL=/jquery.themepunch.revolution.min60c0.ef2a3788.js.map