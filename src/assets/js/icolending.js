window.onload = function(){

window._wpemojiSettings = {
  "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/2.3\/72x72\/",
  "ext": ".png",
  "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/2.3\/svg\/",
  "svgExt": ".svg",
  "source": {
    "concatemoji": "https:\/\/icodrops.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.9.1"
  }
};

! function (a, b, c) {
  function d(a, b) {
    var c = String.fromCharCode;
    l.clearRect(0, 0, k.width, k.height),
      l.fillText(c.apply(this, a), 0, 0);
    var d = k.toDataURL();
    l.clearRect(0, 0, k.width, k.height),
      l.fillText(c.apply(this, b), 0, 0);
    var e = k.toDataURL();
    return d === e
  }

  function e(a) {
    var b;
    if (!l || !l.fillText)
      return !1;
    switch (l.textBaseline = "top", l.font = "600 32px Arial", a) {
      case "flag":
        return !(b = d([55356, 56826, 55356, 56819], [55356, 56826, 8203, 55356, 56819])) &&
          (b = d([55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447], [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447]), !b);
      case "emoji":
        return b = d([55358, 56794, 8205, 9794, 65039], [55358, 56794, 8203, 9794, 65039]), !b
    }
    return !1
  }

  function f(a) {
    var c = b.createElement("script");
    c.src = a, c.defer = c.type = "text/javascript",
      b.getElementsByTagName("head")[0].appendChild(c)
  }
  var g, h, i, j, k = b.createElement("canvas"),
    l = k.getContext && k.getContext("2d");
  for (j = Array("flag", "emoji"), c.supports = {
      everything: !0,
      everythingExceptFlag: !0
    },
    i = 0; i < j.length; i++) c.supports[j[i]] = e(j[i]),
    c.supports.everything = c.supports.everything && c.supports[j[i]],
    "flag" !== j[i] && (c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && c.supports[j[i]]);
  c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && !c.supports.flag, c.DOMReady = !1, c.readyCallback = function () {
    c.DOMReady = !0
  }, c.supports.everything || (h = function () {
    c.readyCallback()
  }, b.addEventListener ? (b.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1)) : (a.attachEvent("onload", h), b.attachEvent("onreadystatechange", function () {
    "complete" === b.readyState && c.readyCallback()
  })), g = c.source || {}, g.concatemoji ? f(g.concatemoji) : g.wpemoji && g.twemoji && (f(g.twemoji), f(g.wpemoji)))
}(window, document, window._wpemojiSettings);
/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  function (a, b, c) {
    function d(c) {
      var d = b.console;
      f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
    }

    function e(b, c, e, f) {
      if (Object.defineProperty) try {
        return void Object.defineProperty(b, c, {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return d(f), e
          },
          set: function (a) {
            d(f), e = a
          }
        })
      } catch (g) {}
      a._definePropertyBroken = !0, b[c] = e
    }
    a.migrateVersion = "1.4.1";
    var f = {};
    a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function () {
      f = {}, a.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
    var g = a("<input/>", {
        size: 1
      }).attr("size") && a.attrFn,
      h = a.attr,
      i = a.attrHooks.value && a.attrHooks.value.get || function () {
        return null
      },
      j = a.attrHooks.value && a.attrHooks.value.set || function () {
        return c
      },
      k = /^(?:input|button)$/i,
      l = /^[238]$/,
      m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      n = /^(?:checked|selected)$/i;
    e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function (b, e, f, i) {
      var j = e.toLowerCase(),
        o = b && b.nodeType;
      return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
        get: function (b, d) {
          var e, f = a.prop(b, d);
          return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
        },
        set: function (b, c, d) {
          var e;
          return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
        }
      }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
    }, a.attrHooks.value = {
      get: function (a, b) {
        var c = (a.nodeName || "").toLowerCase();
        return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
      },
      set: function (a, b) {
        var c = (a.nodeName || "").toLowerCase();
        return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
      }
    };
    var o, p, q = a.fn.init,
      r = a.find,
      s = a.parseJSON,
      t = /^\s*</,
      u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    a.fn.init = function (b, e, f) {
      var g, h;
      return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
    }, a.fn.init.prototype = a.fn, a.find = function (a) {
      var b = Array.prototype.slice.call(arguments);
      if ("string" == typeof a && u.test(a)) try {
        document.querySelector(a)
      } catch (c) {
        a = a.replace(v, function (a, b, c, d) {
          return "[" + b + c + '"' + d + '"]'
        });
        try {
          document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
        } catch (e) {
          d("Attribute selector with '#' was not fixed: " + b[0])
        }
      }
      return r.apply(this, b)
    };
    var x;
    for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
    a.parseJSON = function (a) {
      return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
    }, a.uaMatch = function (a) {
      a = a.toLowerCase();
      var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
      return {
        browser: b[1] || "",
        version: b[2] || "0"
      }
    }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function () {
      function b(a, c) {
        return new b.fn.init(a, c)
      }
      a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function (d, e) {
        var f = a.fn.init.call(this, d, e, c);
        return f instanceof b ? f : b(f)
      }, b.fn.init.prototype = b.fn;
      var c = b(document);
      return d("jQuery.sub() is deprecated"), b
    }, a.fn.size = function () {
      return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
    };
    var y = !1;
    a.swap && a.each(["height", "width", "reliableMarginRight"], function (b, c) {
      var d = a.cssHooks[c] && a.cssHooks[c].get;
      d && (a.cssHooks[c].get = function () {
        var a;
        return y = !0, a = d.apply(this, arguments), y = !1, a
      })
    }), a.swap = function (a, b, c, e) {
      var f, g, h = {};
      y || d("jQuery.swap() is undocumented and deprecated");
      for (g in b) h[g] = a.style[g], a.style[g] = b[g];
      f = c.apply(a, e || []);
      for (g in b) a.style[g] = h[g];
      return f
    }, a.ajaxSetup({
      converters: {
        "text json": a.parseJSON
      }
    });
    var z = a.fn.data;
    a.fn.data = function (b) {
      var e, f, g = this[0];
      return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
    };
    var A = /\/(java|ecma)script/i;
    a.clean || (a.clean = function (b, c, e, f) {
      c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
      var g, h, i, j, k = [];
      if (a.merge(k, a.buildFragment(b, c).childNodes), e)
        for (i = function (a) {
            return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
          }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
      return k
    });
    var B = a.event.add,
      C = a.event.remove,
      D = a.event.trigger,
      E = a.fn.toggle,
      F = a.fn.live,
      G = a.fn.die,
      H = a.fn.load,
      I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
      J = new RegExp("\\b(?:" + I + ")\\b"),
      K = /(?:^|\s)hover(\.\S+|)\b/,
      L = function (b) {
        return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
      };
    a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function (a, b, c, e, f) {
      a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
    }, a.event.remove = function (a, b, c, d, e) {
      C.call(this, a, L(b) || "", c, d, e)
    }, a.each(["load", "unload", "error"], function (b, c) {
      a.fn[c] = function () {
        var a = Array.prototype.slice.call(arguments, 0);
        return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
      }
    }), a.fn.toggle = function (b, c) {
      if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
      d("jQuery.fn.toggle(handler, handler...) is deprecated");
      var e = arguments,
        f = b.guid || a.guid++,
        g = 0,
        h = function (c) {
          var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
          return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
        };
      for (h.guid = f; g < e.length;) e[g++].guid = f;
      return this.click(h)
    }, a.fn.live = function (b, c, e) {
      return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
    }, a.fn.die = function (b, c) {
      return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
    }, a.event.trigger = function (a, b, c, e) {
      return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
    }, a.each(I.split("|"), function (b, c) {
      a.event.special[c] = {
        setup: function () {
          var b = this;
          return b !== document && (a.event.add(document, c + "." + a.guid, function () {
            a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
          }), a._data(this, c, a.guid++)), !1
        },
        teardown: function () {
          return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
        }
      }
    }), a.event.special.ready = {
      setup: function () {
        this === document && d("'ready' event is deprecated")
      }
    };
    var M = a.fn.andSelf || a.fn.addBack,
      N = a.fn.find;
    if (a.fn.andSelf = function () {
        return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
      }, a.fn.find = function (a) {
        var b = N.apply(this, arguments);
        return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
      }, a.Callbacks) {
      var O = a.Deferred,
        P = [
          ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
          ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
          ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
        ];
      a.Deferred = function (b) {
        var c = O(),
          e = c.promise();
        return c.pipe = e.pipe = function () {
          var b = arguments;
          return d("deferred.pipe() is deprecated"), a.Deferred(function (d) {
            a.each(P, function (f, g) {
              var h = a.isFunction(b[f]) && b[f];
              c[g[1]](function () {
                var b = h && h.apply(this, arguments);
                b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
              })
            }), b = null
          }).promise()
        }, c.isResolved = function () {
          return d("deferred.isResolved is deprecated"), "resolved" === c.state()
        }, c.isRejected = function () {
          return d("deferred.isRejected is deprecated"), "rejected" === c.state()
        }, b && b.call(c, c), c
      }
    }
  }(jQuery, window);

! function (t, i, o, e) {
  function n(i, o) {
    this.el = i, this.$el = t(this.el), this.options = t.extend({}, l, o), this._defaults = l, this._name = a, this.init()
  }
  var a = "nivoLightbox",
    l = {
      effect: "fade",
      theme: "default",
      keyboardNav: !0,
      clickImgToClose: !1,
      clickOverlayToClose: !0,
      onInit: function () {},
      beforeShowLightbox: function () {},
      afterShowLightbox: function (t) {},
      beforeHideLightbox: function () {},
      afterHideLightbox: function () {},
      beforePrev: function (t) {},
      onPrev: function (t) {},
      beforeNext: function (t) {},
      onNext: function (t) {},
      errorMessage: "The requested content cannot be loaded. Please try again later."
    };
  n.prototype = {
    init: function () {
      var i = this;
      t("html").hasClass("nivo-lightbox-notouch") || t("html").addClass("nivo-lightbox-notouch"), "ontouchstart" in o && t("html").removeClass("nivo-lightbox-notouch"), this.$el.on("click", function (t) {
        i.showLightbox(t)
      }), this.options.keyboardNav && t("body").off("keyup").on("keyup", function (o) {
        var e = o.keyCode ? o.keyCode : o.which;
        27 == e && i.destructLightbox(), 37 == e && t(".nivo-lightbox-prev").trigger("click"), 39 == e && t(".nivo-lightbox-next").trigger("click")
      }), this.options.onInit.call(this)
    },
    showLightbox: function (i) {
      var o = this,
        e = this.$el,
        n = this.checkContent(e);
      if (n) {
        i.preventDefault(),
          this.options.beforeShowLightbox.call(this);
        var a = this.constructLightbox();
        if (a) {
          var l = a.find(".nivo-lightbox-content");
          if (l) {
            if (t("body").addClass("nivo-lightbox-body-effect-" + this.options.effect), this.processContent(l, e), this.$el.attr("data-lightbox-gallery")) {
              var h = t('[data-lightbox-gallery="' + this.$el.attr("data-lightbox-gallery") + '"]');
              t(".nivo-lightbox-nav").show(),
                t(".nivo-lightbox-prev").off("click").on("click", function (i) {
                  i.preventDefault();
                  var n = h.index(e);
                  e = h.eq(n - 1), t(e).length || (e = h.last()), t.when(o.options.beforePrev.call(this, [e])).done(function () {
                    o.processContent(l, e), o.options.onPrev.call(this, [e])
                  })
                }),
                t(".nivo-lightbox-next").off("click").on("click", function (i) {
                  i.preventDefault();
                  var n = h.index(e);
                  e = h.eq(n + 1), t(e).length || (e = h.first()), t.when(o.options.beforeNext.call(this, [e])).done(function () {
                    o.processContent(l, e), o.options.onNext.call(this, [e])
                  })
                })
            }
            setTimeout(function () {
              a.addClass("nivo-lightbox-open"), o.options.afterShowLightbox.call(this, [a])
            }, 1)
          }
        }
      }
    },
    checkContent: function (t) {
      var i = t.attr("href"),
        o = i.match(/(youtube|youtube-nocookie|youtu|vimeo)\.(com|be)\/(watch\?v=([\w-]+)|([\w-]+))/);
      return null !== i.match(/\.(jpeg|jpg|gif|png)$/i) || (!!o || ("ajax" == t.attr("data-lightbox-type") || ("#" == i.substring(0, 1) && "inline" == t.attr("data-lightbox-type") || "iframe" == t.attr("data-lightbox-type"))))
    },
    processContent: function (o, e) {
      var n = this,
        a = e.attr("href"),
        l = a.match(/(youtube|youtube-nocookie|youtu|vimeo)\.(com|be)\/(watch\?v=([\w-]+)|([\w-]+))/);
      if (o.html("").addClass("nivo-lightbox-loading"), this.isHidpi() && e.attr("data-lightbox-hidpi") && (a = e.attr("data-lightbox-hidpi")), null !== a.match(/\.(jpeg|jpg|gif|png)$/i)) {
        var h = t("<img>", {
          src: a,
          class: "nivo-lightbox-image-display"
        });
        h.one("load", function () {
          var e = t('<div class="nivo-lightbox-image" />');
          e.append(h), o.html(e).removeClass("nivo-lightbox-loading"), e.css({
            "line-height": t(".nivo-lightbox-content").height() + "px",
            height: t(".nivo-lightbox-content").height() + "px"
          }), t(i).resize(function () {
            e.css({
              "line-height": t(".nivo-lightbox-content").height() + "px",
              height: t(".nivo-lightbox-content").height() + "px"
            })
          })
        }).each(function () {
          this.complete && t(this).load()
        }), h.error(function () {
          var i = t('<div class="nivo-lightbox-error"><p>' + n.options.errorMessage + "</p></div>");
          o.html(i).removeClass("nivo-lightbox-loading")
        })
      } else if (l) {
        var s = "",
          r = "nivo-lightbox-video";
        if ("youtube" == l[1] && (s = "//www.youtube.com/embed/" + l[4], r = "nivo-lightbox-youtube"), "youtube-nocookie" == l[1] && (s = a, r = "nivo-lightbox-youtube"), "youtu" == l[1] && (s = "//www.youtube.com/embed/" + l[3], r = "nivo-lightbox-youtube"), "vimeo" == l[1] && (s = "//player.vimeo.com/video/" + l[3], r = "nivo-lightbox-vimeo"), s) {
          var c = t("<iframe>", {
            src: s,
            class: r,
            frameborder: 0,
            vspace: 0,
            hspace: 0,
            scrolling: "auto"
          });
          o.html(c), c.load(function () {
            o.removeClass("nivo-lightbox-loading")
          })
        }
      } else if ("ajax" == e.attr("data-lightbox-type")) t.ajax({
        url: a,
        cache: !1,
        success: function (e) {
          var n = t('<div class="nivo-lightbox-ajax" />');
          n.append(e), o.html(n).removeClass("nivo-lightbox-loading"), n.outerHeight() < o.height() && n.css({
            position: "relative",
            top: "50%",
            "margin-top": -(n.outerHeight() / 2) + "px"
          }), t(i).resize(function () {
            n.outerHeight() < o.height() && n.css({
              position: "relative",
              top: "50%",
              "margin-top": -(n.outerHeight() / 2) + "px"
            })
          })
        },
        error: function () {
          var i = t('<div class="nivo-lightbox-error"><p>' + n.options.errorMessage + "</p></div>");
          o.html(i).removeClass("nivo-lightbox-loading")
        }
      });
      else if ("#" == a.substring(0, 1) && "inline" == e.attr("data-lightbox-type"))
        if (t(a).length) {
          var g = t('<div class="nivo-lightbox-inline" />');
          g.append(t(a).clone().show()), o.html(g).removeClass("nivo-lightbox-loading"), g.outerHeight() < o.height() && g.css({
            position: "relative",
            top: "50%",
            "margin-top": -(g.outerHeight() / 2) + "px"
          }), t(i).resize(function () {
            g.outerHeight() < o.height() && g.css({
              position: "relative",
              top: "50%",
              "margin-top": -(g.outerHeight() / 2) + "px"
            })
          })
        } else {
          var v = t('<div class="nivo-lightbox-error"><p>' + n.options.errorMessage + "</p></div>");
          o.html(v).removeClass("nivo-lightbox-loading")
        }
      else {
        if ("iframe" != e.attr("data-lightbox-type")) return !1;
        var b = t("<iframe>", {
          src: a,
          class: "nivo-lightbox-item",
          frameborder: 0,
          vspace: 0,
          hspace: 0,
          scrolling: "auto"
        });
        o.html(b), b.load(function () {
          o.removeClass("nivo-lightbox-loading")
        })
      }
      if (e.attr("title")) {
        var x = t("<span>", {
          class: "nivo-lightbox-title"
        });
        x.text(e.attr("title")), t(".nivo-lightbox-title-wrap").html(x)
      } else t(".nivo-lightbox-title-wrap").html("")
    },
    constructLightbox: function () {
      if (t(".nivo-lightbox-overlay").length) return t(".nivo-lightbox-overlay");
      var i = t("<div>", {
          class: "nivo-lightbox-overlay nivo-lightbox-theme-" + this.options.theme + " nivo-lightbox-effect-" + this.options.effect
        }),
        o = t("<div>", {
          class: "nivo-lightbox-wrap"
        }),
        e = t("<div>", {
          class: "nivo-lightbox-content"
        }),
        n = t('<a href="#" class="nivo-lightbox-nav nivo-lightbox-prev">Previous</a><a href="#" class="nivo-lightbox-nav nivo-lightbox-next">Next</a>'),
        a = t('<a href="#" class="nivo-lightbox-close" title="Close">Close</a>'),
        l = t("<div>", {
          class: "nivo-lightbox-title-wrap"
        }),
        h = /*@cc_on!@*/ 0;
      h && i.addClass("nivo-lightbox-ie"), o.append(e), o.append(l), i.append(o), i.append(n), i.append(a), t("body").append(i);
      var s = this;
      return s.options.clickOverlayToClose && i.on("click", function (i) {
        (i.target === this || t(i.target).hasClass("nivo-lightbox-content") || t(i.target).hasClass("nivo-lightbox-image")) && s.destructLightbox()
      }), s.options.clickImgToClose && i.on("click", function (i) {
        (i.target === this || t(i.target).hasClass("nivo-lightbox-image-display")) && s.destructLightbox()
      }), a.on("click", function (t) {
        t.preventDefault(), s.destructLightbox()
      }), i
    },
    destructLightbox: function () {
      var i = this;
      this.options.beforeHideLightbox.call(this), t(".nivo-lightbox-overlay").removeClass("nivo-lightbox-open"), t(".nivo-lightbox-nav").hide(), t("body").removeClass("nivo-lightbox-body-effect-" + i.options.effect);
      var o = /*@cc_on!@*/ 0;
      o && (t(".nivo-lightbox-overlay iframe").attr("src", " "), t(".nivo-lightbox-overlay iframe").remove()), t(".nivo-lightbox-prev").off("click"), t(".nivo-lightbox-next").off("click"), t(".nivo-lightbox-content").empty(), this.options.afterHideLightbox.call(this)
    },
    isHidpi: function () {
      var t = "(-webkit-min-device-pixel-ratio: 1.5),                              (min--moz-device-pixel-ratio: 1.5),                              (-o-min-device-pixel-ratio: 3/2),                              (min-resolution: 1.5dppx)";
      return i.devicePixelRatio > 1 || !(!i.matchMedia || !i.matchMedia(t).matches)
    }
  }, t.fn[a] = function (i) {
    return this.each(function () {
      t.data(this, a) || t.data(this, a, new n(this, i))
    })
  }
}(jQuery, window, document);
var rlArgs = {
  "script": "nivo",
  "selector": "lightbox",
  "customEvents": "",
  "activeGalleries": "0",
  "effect": "fade",
  "clickOverlayToClose": "1",
  "keyboardNav": "1",
  "errorMessage": "The requested content cannot be loaded. Please try again later.",
  "woocommerce_gallery": "0"
};
(function ($) {
  $(document).on('ready' + rlArgs.customEvents, function () {
    $.event.trigger({
      type: 'doResponsiveLightbox',
      script: rlArgs.script,
      selector: rlArgs.selector,
      args: rlArgs
    });
  });
  $(document).on('doResponsiveLightbox', function (event) {
    var script = event.script,
      selector = event.selector,
      args = event.args;
    if (typeof script === 'undefined' || typeof selector === 'undefined') {
      return false;
    }
    var observe_script_dom = (function () {
      var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
        eventListenerSupported = window.addEventListener;
      return function (obj, only_added, callback) {
        if (MutationObserver) {
          var obs = new MutationObserver(function (mutations, observer) {
            if (only_added) {
              if (mutations[0].addedNodes.length)
                callback();
            } else {
              if (mutations[0].addedNodes.length || mutations[0].removedNodes.length)
                callback();
            }
          });
          obs.observe(obj, {
            childList: true,
            subtree: true
          });
        } else if (eventListenerSupported) {
          obj.addEventListener('DOMNodeInserted', callback, false);
          if (!only_added) {
            obj.addEventListener('DOMNodeRemoved', callback, false);
          }
        }
      }
    })();
    rl_view_image = function (script, url) {
      $.event.trigger({
        type: 'doLightboxViewImage',
        script: script,
        url: url
      });
    }
    rl_hide_image = function (script, url) {
      $.event.trigger({
        type: 'doLightboxHideImage',
        script: script,
        url: url
      });
    }
    setTimeout(function () {
      var flex = $('.flex-viewport');
      if (rlArgs.woocommerce_gallery === '1' && flex.length) {
        $('.zoomImg').css('cursor', 'pointer');
        $(document).on('click', '.flex-active-slide .zoomImg', function (e) {
          e.preventDefault();
          e.stopPropagation();
          flex.find('.flex-active-slide a[data-rel]').trigger('click');
        });
      }
    }, 10);
    switch (script) {
      case 'swipebox':
        var slide = $('#swipebox-overlay').find('.slide.current'),
          image_source = '',
          allow_hide = false,
          close_executed = false;
        $('a[rel*="' + rlArgs.selector + '"], a[data-rel*="' + rlArgs.selector + '"]').swipebox({
          useCSS: (rlArgs.animation === '1' ? true : false),
          useSVG: (rlArgs.useSVG === '1' ? true : false),
          hideCloseButtonOnMobile: (rlArgs.hideCloseButtonOnMobile === '1' ? true : false),
          removeBarsOnMobile: (rlArgs.removeBarsOnMobile === '1' ? true : false),
          hideBarsDelay: (rlArgs.hideBars === '1' ? parseInt(rlArgs.hideBarsDelay) : 0),
          videoMaxWidth: parseInt(rlArgs.videoMaxWidth),
          loopAtEnd: (rlArgs.loopAtEnd === '1' ? true : false),
          afterOpen: function () {
            close_executed = false;
            slide = $('#swipebox-overlay').find('.slide.current');
            var image = slide.find('img').attr('src');
            if (typeof image !== 'undefined') {
              image_source = image;
              rl_view_image(script, image_source);
            } else {
              image_source = '';
            }
            observe_script_dom(document.getElementById('swipebox-slider'), false, function () {
              if (image_source === '') {
                var image = slide.find('img').attr('src');
                if (typeof image !== 'undefined') {
                  image_source = image;
                  rl_view_image(script, image_source);
                } else {
                  image_source = '';
                }
              }
            });
          },
          nextSlide: function () {
            slide = $('#swipebox-overlay').find('.slide.current');
            var image = slide.find('img').attr('src');
            if (typeof image !== 'undefined') {
              image_source = image;
              rl_view_image(script, image_source);
            } else {
              image_source = '';
            }
          },
          prevSlide: function () {
            slide = $('#swipebox-overlay').find('.slide.current');
            var image = slide.find('img').attr('src');
            if (typeof image !== 'undefined') {
              image_source = image;
              rl_view_image(script, image_source);
            } else {
              image_source = '';
            }
          },
          afterClose: function () {
            close_executed = true;
            if (allow_hide) {
              rl_hide_image(script, image_source);
              allow_hide = false;
            }
          }
        });
        $(window).on('resize', function () {
          if (!close_executed) {
            allow_hide = true;
          }
        });
        break;
      case 'prettyphoto':
        var view_disabled = false,
          last_image = '';
        $('a[rel*="' + rlArgs.selector + '"], a[data-rel*="' + rlArgs.selector + '"]').prettyPhoto({
          hook: 'data-rel',
          animation_speed: rlArgs.animationSpeed,
          slideshow: (rlArgs.slideshow === '1' ? parseInt(rlArgs.slideshowDelay) : false),
          autoplay_slideshow: (rlArgs.slideshowAutoplay === '1' ? true : false),
          opacity: rlArgs.opacity,
          show_title: (rlArgs.showTitle === '1' ? true : false),
          allow_resize: (rlArgs.allowResize === '1' ? true : false),
          allow_expand: (rlArgs.allowExpand === '1' ? true : false),
          default_width: parseInt(rlArgs.width),
          default_height: parseInt(rlArgs.height),
          counter_separator_label: rlArgs.separator,
          theme: rlArgs.theme,
          horizontal_padding: parseInt(rlArgs.horizontalPadding),
          hideflash: (rlArgs.hideFlash === '1' ? true : false),
          wmode: rlArgs.wmode,
          autoplay: (rlArgs.videoAutoplay === '1' ? true : false),
          modal: (rlArgs.modal === '1' ? true : false),
          deeplinking: (rlArgs.deeplinking === '1' ? true : false),
          overlay_gallery: (rlArgs.overlayGallery === '1' ? true : false),
          keyboard_shortcuts: (rlArgs.keyboardShortcuts === '1' ? true : false),
          social_tools: (rlArgs.social === '1' ? '<div class="pp_social"><div class="twitter"><a href="//twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="//platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href=' + location.href + '&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div></div>' : ''),
          ie6_fallback: true,
          changepicturecallback: function () {
            if (view_disabled) {
              view_disabled = false;
              return;
            }
            last_image = $('#pp_full_res').find('img').attr('src');
            rl_view_image(script, last_image);
            if (rlArgs.allowExpand === '1') {
              $('a.pp_expand').on('click', function () {
                view_disabled = true;
              });
            }
          },
          callback: function () {
            rl_hide_image(script, last_image);
          }
        });
        break;
      case 'fancybox':
        var last_image = '';
        $('a[rel*="' + rlArgs.selector + '"], a[data-rel*="' + rlArgs.selector + '"]').fancybox({
          modal: (rlArgs.modal === '1' ? true : false),
          overlayShow: (rlArgs.showOverlay === '1' ? true : false),
          showCloseButton: (rlArgs.showCloseButton === '1' ? true : false),
          enableEscapeButton: (rlArgs.enableEscapeButton === '1' ? true : false),
          hideOnOverlayClick: (rlArgs.hideOnOverlayClick === '1' ? true : false),
          hideOnContentClick: (rlArgs.hideOnContentClick === '1' ? true : false),
          cyclic: (rlArgs.cyclic === '1' ? true : false),
          showNavArrows: (rlArgs.showNavArrows === '1' ? true : false),
          autoScale: (rlArgs.autoScale === '1' ? true : false),
          scrolling: rlArgs.scrolling,
          centerOnScroll: (rlArgs.centerOnScroll === '1' ? true : false),
          opacity: (rlArgs.opacity === '1' ? true : false),
          overlayOpacity: parseFloat(rlArgs.overlayOpacity / 100),
          overlayColor: rlArgs.overlayColor,
          titleShow: (rlArgs.titleShow === '1' ? true : false),
          titlePosition: rlArgs.titlePosition,
          transitionIn: rlArgs.transitions,
          transitionOut: rlArgs.transitions,
          easingIn: rlArgs.easings,
          easingOut: rlArgs.easings,
          speedIn: parseInt(rlArgs.speeds),
          speedOut: parseInt(rlArgs.speeds),
          changeSpeed: parseInt(rlArgs.changeSpeed),
          changeFade: parseInt(rlArgs.changeFade),
          padding: parseInt(rlArgs.padding),
          margin: parseInt(rlArgs.margin),
          width: parseInt(rlArgs.videoWidth),
          height: parseInt(rlArgs.videoHeight),
          onComplete: function () {
            last_image = $('#fancybox-content').find('img').attr('src');
            rl_view_image(script, last_image);
          },
          onClosed: function () {
            rl_hide_image(script, last_image);
          }
        });
        break;
      case 'nivo':
        $.each($('a[rel*="' + rlArgs.selector + '"], a[data-rel*="' + rlArgs.selector + '"]'), function () {
          var attr = $(this).attr('data-rel');
          if (typeof attr === 'undefined' || attr == false) {
            attr = $(this).attr('rel');
          }
          if (typeof attr !== 'undefined' && attr !== false) {
            var match = attr.match(new RegExp(rlArgs.selector + '\\-(gallery\\-(?:[\\da-z]{1,4}))', 'ig'));
            if (match !== null) {
              $(this).attr('data-lightbox-gallery', match[0]);
            }
          }
        });
        var observer_initialized = false,
          change_allowed = true,
          last_image = '';
        $('a[rel*="' + rlArgs.selector + '"], a[data-rel*="' + rlArgs.selector + '"]').nivoLightbox({
          effect: rlArgs.effect,
          clickOverlayToClose: (rlArgs.clickOverlayToClose === '1' ? true : false),
          keyboardNav: (rlArgs.keyboardNav === '1' ? true : false),
          errorMessage: rlArgs.errorMessage,
          afterShowLightbox: function (lightbox) {
            var content = $(lightbox)[0].find('.nivo-lightbox-content');
            if (!observer_initialized) {
              observer_initialized = true;
              observe_script_dom(document.getElementsByClassName('nivo-lightbox-content')[0], true, function () {
                if (change_allowed) {
                  last_image = content.find('.nivo-lightbox-image img').attr('src');
                  rl_view_image(script, last_image);
                  change_allowed = false;
                }
              });
            }
          },
          afterHideLightbox: function () {
            change_allowed = true;
            rl_hide_image(script, last_image);
          },
          onPrev: function (element) {
            change_allowed = false;
            last_image = element[0].attr('href');
            rl_view_image(script, last_image);
          },
          onNext: function (element) {
            change_allowed = false;
            last_image = element[0].attr('href');
            rl_view_image(script, last_image);
          }
        });
        break;
      case 'imagelightbox':
        var selectors = [],
          last_image = '';
        $('a[rel*="' + rlArgs.selector + '"], a[data-rel*="' + rlArgs.selector + '"]').each(function (i, item) {
          var attr = $(item).attr('data-rel');
          if (typeof attr !== 'undefined' && attr !== false && attr !== 'norl')
            selectors.push(attr);
          else {
            attr = $(item).attr('rel');
            if (typeof attr !== 'undefined' && attr !== false && attr !== 'norl')
              selectors.push(attr);
          }
        });
        if (selectors.length > 0) {
          selectors = $.unique(selectors);
          $(selectors).each(function (i, item) {
            $('a[data-rel="' + item + '"], a[rel="' + item + '"]').imageLightbox({
              animationSpeed: parseInt(rlArgs.animationSpeed),
              preloadNext: (rlArgs.preloadNext === '1' ? true : false),
              enableKeyboard: (rlArgs.enableKeyboard === '1' ? true : false),
              quitOnEnd: (rlArgs.quitOnEnd === '1' ? true : false),
              quitOnImgClick: (rlArgs.quitOnImageClick === '1' ? true : false),
              quitOnDocClick: (rlArgs.quitOnDocumentClick === '1' ? true : false),
              onLoadEnd: function () {
                last_image = $('#imagelightbox').attr('src');
                rl_view_image(script, last_image);
              },
              onEnd: function () {
                rl_hide_image(script, last_image);
              }
            });
          });
        }
        break;
      case 'tosrus':
        var selectors = [],
          last_image = '';
        $('a[rel*="' + rlArgs.selector + '"], a[data-rel*="' + rlArgs.selector + '"]').each(function (i, item) {
          var attr = $(item).attr('data-rel');
          if (typeof attr !== 'undefined' && attr !== false && attr !== 'norl')
            selectors.push(attr);
          else {
            attr = $(item).attr('rel');
            if (typeof attr !== 'undefined' && attr !== false && attr !== 'norl')
              selectors.push(attr);
          }
        });
        if (selectors.length > 0) {
          selectors = $.unique(selectors);
          $(selectors).each(function (i, item) {
            var tos = $('a[data-rel="' + item + '"], a[rel="' + item + '"]').tosrus({
              infinite: (rlArgs.infinite === '1' ? true : false),
              autoplay: {
                play: (rlArgs.autoplay === '1' ? true : false),
                pauseOnHover: (rlArgs.pauseOnHover === '1' ? true : false),
                timeout: rlArgs.timeout
              },
              effect: rlArgs.effect,
              keys: {
                prev: (rlArgs.keys === '1' ? true : false),
                next: (rlArgs.keys === '1' ? true : false),
                close: (rlArgs.keys === '1' ? true : false)
              },
              pagination: {
                add: (rlArgs.pagination === '1' ? true : false),
                type: rlArgs.paginationType
              },
              show: false,
              buttons: true,
              caption: {
                add: true,
                attributes: ["title"]
              },
              wrapper: {
                onClick: rlArgs.closeOnClick === '1' ? 'close' : 'toggleUI'
              }
            });
            tos.bind('sliding.tos', function (event, number) {
              last_image = $($(event.target).find('.tos-slider .tos-slide')[number]).find('img').attr('src');
              rl_view_image(script, last_image);
            });
            tos.bind('closing.tos', function () {
              rl_hide_image(script, last_image);
            });
          });
        }
        break;
      case 'featherlight':
        var selectors = [],
          last_image = '';
        $('a[rel*="' + rlArgs.selector + '"], a[data-rel*="' + rlArgs.selector + '"]').each(function (i, item) {
          var attr = $(item).attr('data-rel');
          if (typeof attr !== 'undefined' && attr !== false && attr !== 'norl')
            selectors.push(attr);
          else {
            attr = $(item).attr('rel');
            if (typeof attr !== 'undefined' && attr !== false && attr !== 'norl')
              selectors.push(attr);
          }
        });
        if (selectors.length > 0) {
          selectors = $.unique(selectors);
          $.extend($.featherlight.defaults, {
            openSpeed: parseInt(rlArgs.openSpeed),
            closeSpeed: parseInt(rlArgs.closeSpeed),
            closeOnClick: rlArgs.closeOnClick,
            closeOnEsc: (rlArgs.closeOnEsc === '1' ? true : false),
            afterOpen: function (event) {
              last_image = event.currentTarget.href;
              rl_view_image(script, last_image);
            },
            afterClose: function () {
              rl_hide_image(script, last_image);
            }
          });
          $(selectors).each(function (i, item) {
            if (/-gallery-/.test(item)) {
              $('a[data-rel="' + item + '"], a[rel="' + item + '"]').featherlightGallery({
                galleryFadeIn: parseInt(rlArgs.galleryFadeIn),
                galleryFadeOut: parseInt(rlArgs.galleryFadeOut),
                previousIcon: '&#10094;',
                nextIcon: '&#10095;'
              });
            } else if (/-video-/.test(item)) {
              $('a[data-rel="' + item + '"], a[rel="' + item + '"]').featherlight();
            } else {
              $('a[data-rel="' + item + '"], a[rel="' + item + '"]').featherlight();
            }
          });
        }
        break;
    }
  });
})(jQuery);

function CopyToClipboard(containerid) {
  try {
    window.getSelection().removeAllRanges();
  } catch (e) {
    document.selection.empty();
  }
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("Copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("Copy");
  }
};
(function ($) {
  var tooltip;
  var arrow;
  var arrowWidth;
  var arrowHeight;
  var content;
  var win;

  function getState(el, options) {
    var s = {};
    var elementHeight = el.outerHeight();
    var elementWidth = el.outerWidth();
    var offset = el.offset();
    s.height = tooltip.outerHeight(true);
    s.width = tooltip.outerWidth(true);
    s.offset = {};
    s.offset.top = offset.top;
    s.offset.left = offset.left;
    s.offset.right = s.offset.left + elementWidth;
    s.offset.bottom = s.offset.top + elementHeight;
    s.offset.hCenter = s.offset.left + Math.floor(elementWidth / 2);
    s.offset.vCenter = s.offset.top + Math.floor(elementHeight / 2);
    s.css = {};
    s.on = {};
    s.off = {};
    s.arrow = {};
    return s;
  }

  function checkBounds(s, direction, margin, slide) {
    var bound, alternate;
    margin = parseInt(margin);
    slide = parseInt(slide);
    switch (direction) {
      case 'top':
        bound = win.scrollTop();
        if (s.offset.top - s.height - margin - slide < bound) alternate = 'bottom';
        s.on.top = s.offset.top - s.height - margin;
        s.off.top = s.on.top + slide;
        s.css.top = s.on.top - slide;
        s.css.left = getCenter(s, true);
        break;
      case 'left':
        bound = win.scrollLeft();
        if (s.offset.left - s.width - margin - slide < bound) alternate = 'right';
        s.on.left = s.offset.left - s.width - margin;
        s.off.left = s.on.left + slide;
        s.css.top = getCenter(s, false);
        s.css.left = s.on.left - slide;
        break;
      case 'bottom':
        bound = win.scrollTop() + win.height();
        if (s.offset.bottom + s.height + margin + slide > bound) alternate = 'top';
        s.on.top = s.offset.bottom + margin;
        s.off.top = s.offset.bottom - slide + margin;
        s.css.top = s.on.top + slide;
        s.css.left = getCenter(s, true);
        break;
      case 'right':
        bound = win.scrollLeft() + win.width();
        if (s.offset.right + s.width + margin + slide > bound) alternate = 'left';
        s.on.left = s.offset.right + margin;
        s.off.left = s.on.left - slide;
        s.css.left = s.on.left + slide;
        s.css.top = getCenter(s, false);
        break;
    }
    if (alternate && !s.over) {
      s.over = true;
      checkBounds(s, alternate, margin, slide);
    } else {
      s.direction = direction;
      getArrowOffset(s, direction);
      checkSlide(s, direction);
    }
  }

  function checkSlide(s, dir) {
    var offset;
    if (dir == 'top' || dir == 'bottom') {
      offset = win.scrollLeft() - s.css.left + 5;
      if (offset > 0) {
        s.css.left += Math.abs(offset);
        s.arrow.left -= offset;
      }
      offset = (s.css.left + s.width) - (win.scrollLeft() + win.width()) + 5;
      if (offset > 0) {
        s.css.left -= Math.abs(offset);
        s.arrow.left += offset;
      }
    } else if (dir == 'left' || dir == 'right') {
      offset = win.scrollTop() - s.css.top + 5;
      if (offset > 0) {
        s.css.top += Math.abs(offset);
        s.arrow.top -= offset;
      }
      offset = (s.css.top + s.height) - (win.scrollTop() + win.height()) + 5;
      if (offset > 0) {
        s.css.top -= Math.abs(offset);
        s.arrow.top += offset;
      }
    }
  }

  function getArrowOffset(s, dir) {
    if (dir == 'left' || dir == 'right') {
      s.arrow.top = Math.floor((s.height / 2) - (arrowHeight / 2));
    } else {
      s.arrow.left = Math.floor((s.width / 2) - (arrowWidth / 2));
    }
    s.arrow[getInverseDirection(dir)] = -arrowHeight;
  }

  function getInverseDirection(dir) {
    switch (dir) {
      case 'top':
        return 'bottom';
      case 'bottom':
        return 'top';
      case 'left':
        return 'right';
      case 'right':
        return 'left';
    }
  }

  function getCenter(s, horizontal) {
    if (horizontal) {
      return s.offset.hCenter + (-s.width / 2);
    } else {
      return s.offset.vCenter + (-s.height / 2);
    }
  }

  function animateTooltip(s, options, el, fn) {
    var color = getDefault('color', options, el, 'white');
    var duration = getDefault('duration', options, el, 150);
    tooltip.attr('class', color + ' ' + s.direction);
    tooltip.stop(true, true).css(s.css);
    arrow.attr('style', '').css(s.arrow);
    tooltip.animate(s.on, {
      duration: duration,
      queue: false,
      complete: fn
    });
    tooltip.fadeIn(duration);
  }

  function animateTooltipOut(s, options, el, fn) {
    var duration = getDefault('duration', options, el, 100);
    tooltip.animate(s.off, {
      duration: duration,
      queue: false,
      complete: fn
    });
    tooltip.fadeOut(duration);
  }

  function unescapeHTML(html) {
    if (/&/.test(html)) {
      html = $('<p/>').html(html).text();
    }
    return html;
  }

  function setContent(el, title) {
    var html;
    try {
      var ref = $(document.body).find(title);
    } catch (e) {}
    if (ref && ref.length > 0) {
      html = ref.html();
    } else {
      html = unescapeHTML(title);
    }
    content.html(html);
  }

  function getDefault(name, options, el, defaultValue) {
    return or(options[name], el.data('tooltip-' + name), defaultValue);
  }

  function or() {
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i] !== undefined) {
        return arguments[i];
      }
    }
  }
  jQuery.fn.tooltip = function (options) {
    options = options || {};
    this.each(function () {
      var el = $(this);
      var title = el.attr('title');
      if (!title) return;
      var animating = false;
      var state;
      var timer;
      el.unbind('mouseenter').mouseenter(function () {
        var delay = getDefault('delay', options, el, 300);
        clearTimeout(timer);
        timer = setTimeout(function () {
          var margin = getDefault('margin', options, el, 20);
          var slide = getDefault('slide', options, el, 10);
          var direction = getDefault('direction', options, el, 'top');
          var t = el.attr('title');
          if (t) {
            title = t;
          }
          el.removeAttr('title');
          setContent(el, options.html || title);
          state = getState(el, options);
          checkBounds(state, direction, margin, slide);
          animateTooltip(state, options, el, function () {
            animating = false;
          });
          animating = true;
        }, delay);
      });
      el.unbind('mouseleave').mouseleave(function () {
        clearTimeout(timer);
        if (!state) return;
        if (animating) {
          tooltip.fadeOut(100, function () {
            animating = false;
          });
        } else {
          animateTooltipOut(state, options, el, function () {
            animating = false;
          });
        }
        state = null;
        animating = true;
      });
    });
  };
  $(document).ready(function () {
    tooltip = $('<div id="tooltip" />').appendTo(document.body).css('position', 'absolute').hide();
    arrow = $('<div class="arrow" />').appendTo(tooltip);
    content = $('<div class="content" />').appendTo(tooltip);
    win = $(window);
    arrowWidth = arrow.width();
    arrowHeight = arrow.height();
    $('.tooltip').tooltip();
  });
})(jQuery);
jQuery.fn.sortElements = (function () {
  var sort = [].sort;
  return function (comparator, getSortable) {
    getSortable = getSortable || function () {
      return this;
    };
    var placements = this.map(function () {
      var sortElement = getSortable.call(this),
        parentNode = sortElement.parentNode,
        nextSibling = parentNode.insertBefore(document.createTextNode(''), sortElement.nextSibling);
      return function () {
        if (parentNode === this) {
          throw new Error("You can't sort elements if any one is a descendant of another.");
        }
        parentNode.insertBefore(this, nextSibling);
        parentNode.removeChild(nextSibling);
      };
    });
    return sort.call(this, comparator).each(function (i) {
      placements[i].call(getSortable.call(this));
    });
  };
})();
(function ($) {
  $(window).load(function () {
    var footer_state = $('footer').html();
    if ($(window).width() <= '977') {
      $('.new_footer_col_three').after($('.new_footer_col_one'));
    };
    if ($(window).width() <= '576') {
      $('.new_footer_col_four').after($('.new_footer_col_one'));
    };
    $(window).on('resize', function () {
      if ($(window).width() <= '977') {
        $('.new_footer_col_three').after($('.new_footer_col_one'));
      };
      if ($(window).width() <= '576') {
        $('.new_footer_col_four').after($('.new_footer_col_one'));
      };
      if ($(window).width() >= '991') {
        $('footer').html(footer_state);
      }
    });
    var title = '';
    $('#careg_ico .meta_icon > div').hover(function () {
      title = $(this).attr('title');
      $(this).attr('rel', title);
      $(this).attr('title', '');
    }, function () {
      $(this).attr('title', title);
    });
    var title_bounty = '';
    $('#careg_ico #bounty .bounty-field .hk').hover(function () {
      title_bounty = $(this).attr('title');
      $(this).attr('rel', title_bounty);
      $(this).attr('title', '');
    }, function () {
      $(this).attr('title', title_bounty);
    });
  });
  $(document).ready(function () {
    $('#subscribe form').on('submit', function () {
      console.log($(this));
      if ($(this).find('#email_chimp').val() != '') {
        $('.cp-input.cp-email').val($(this).find('#email_chimp').val());
        $('.cp-submit').click();
        if ($('.cp-email').hasClass('cp-input-error')) {
          $('#email_chimp').addClass('error');
          alert('Please enter correct email!');
        } else {
          $('#email_chimp').attr('class', 'suc');
          alert('Thank you!');
        }
      } else {
        $('#email_chimp').addClass('error');
        alert('Enter email!');
      }
      return false;
    });
    if ($('#page').html().split('\n').length > 30) {
      document.querySelector('html').id = "admin";
    }
    var redy_state = $('#ico-header').html();
    if ($(window).width() <= '767') {
      $('#ico-menu').append($('#search'));
      $('#search').wrap('<li></li>');
      $('#nav-toogle-button').live('click', function () {
        $('#ico-header').toggleClass('white');
        $('#nav-toogle-button').toggleClass('open_ff');
        $('#search').toggleClass('sm-hidden');
        if ($('#ico-header').hasClass('white')) {
          $('#site-navigation').addClass('toggled');
        } else {
          $('#site-navigation').removeClass('toggled');
        }
      });
      $('#closebtn').live('click', function () {
        $('#nav-toogle-button').click();
        $('#site-navigation').removeClass('toggled');
      });
      $('#menubtn').live('click', function () {
        $('#nav-toogle-button').click();
        $('#site-navigation').addClass('toggled');
      });
    }
    var redy_state_mobile = $('#ico-header').html();
    $(window).on('resize', function (e) {
      if ($(window).width() <= '767') {}
      if ($(window).width() >= '768') {
        $('#ico-header').html(redy_state);
      }
    });
    // var odin = $('.val1').text();
    // var dva = $('.val2').text();
    // var chetire = $('.val4').text();
    // if ($('body').hasClass('page-template-ico-stats') == true) {}
    // if ($('body').hasClass('archive') == true) {
    //   $('#careg_ico .categ_new_tabs ul li:eq(1) sub').text(odin);
    //   $('#careg_ico .categ_new_tabs ul li:eq(2) sub').text(dva);
    //   $('#careg_ico .categ_new_tabs ul li:eq(3) sub').text(chetire);
    //   $('#careg_ico .categ_new_tabs ul li:eq(0) sub').text(Number(dva) + Number(odin));
    // };
    var eth_h = 'ethereum';
    var btc_b = 'bitcoin';
    var prcbtc = '';
    $.ajax({
      cache: true,
      async: false,
      url: 'https://api.coinmarketcap.com/v1/ticker/?convert=USD&limit=3',
      dataType: 'json',
      success: function (data) {
        for (var i = 0; i < data.length; i++) {
          if (data[i].id == eth_h) {
            ETH = '<div class="eth">ETH $' + Math.round(data[i].price_usd) + ' ';
            if (data[i].percent_change_24h < 0) {
              ETH += '<span class="red">' + parseFloat(data[i].percent_change_24h).toFixed(1) + '%</span></div>'
            } else {
              ETH += '<span class="green">+' + parseFloat(data[i].percent_change_24h).toFixed(1) + '%</span></div>'
            };
          }
          if (data[i].id == btc_b) {
            BTC = '<div class="btc">BTC $' + Math.round(data[i].price_usd) + ' ';
            if (data[i].percent_change_24h < 0) {
              BTC += '<span class="red">' + parseFloat(data[i].percent_change_24h).toFixed(1) + '%</span></div>'
            } else {
              BTC += '<span class="green">+' + parseFloat(data[i].percent_change_24h).toFixed(1) + '%</span></div>'
            };
          }
        }

        $('.valute').prepend(ETH);
        $('.valute').prepend(BTC);
      }
    });
    
    var offset = 300,
      offset_opacity = 1200,
      scroll_top_duration = 700,
      $back_to_top = $('.cd-top');
    $(window).scroll(function () {
      ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
      if ($(this).scrollTop() > offset_opacity) {
        $back_to_top.addClass('cd-fade-out');
      }
    });
    $back_to_top.on('click', function (event) {
      event.preventDefault();
      $('body,html').animate({
        scrollTop: 0,
      }, scroll_top_duration);
    });
    if ($('#bounty').length == 1) {
      if ($("#careg_ico").hasClass('home_bbb')) {
        $('#careg_ico .tabs__content:eq(0)').append('<div id="view_all" class="white-desk ico-card"><a href="/bounty-list/"><span>View all list</span><span><img src="/wp-content/themes/ico-drops-2-0/img/home_right.svg"></span></a></div>');
        $('#careg_ico .tabs__content:eq(1)').append('<div id="view_all" class="white-desk ico-card"><a href="/bounty-list/"><span>View all list</span><span><img src="/wp-content/themes/ico-drops-2-0/img/home_right.svg"></span></a></div>');
      } else {
        $('#careg_ico .tabs__content:eq(0)').append('<div class="col-md-12 col-12 a_ico showmore"><span>BACK TO TOP</span><span><i class="fa fa-arrow-up" aria-hidden="true"></i></span></div>');
        $('#careg_ico .tabs__content:eq(1)').append('<div class="col-md-12 col-12 a_ico showmore"><span>BACK TO TOP</span><span><i class="fa fa-arrow-up" aria-hidden="true"></i></span></div>');
      }
      $('.showmore').on('click', function () {
        $('html, body').animate({
          scrollTop: 0
        }, 500);
      });
      $('#bounty .categ_new_tabs li:not(.active_tab_category)').live('click', function () {
        $(this).addClass('active_tab_category').siblings().removeClass('active_tab_category')
        $('#bounty').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
    }
    if ($('#post-7').length == 1) {
      $('#post-7 #statas .a_ico').each(function () {
        inverse = true;
        $('#careg_ico.home_stats').find('#statas .a_ico #new_column_categ_invisted span:eq(0)').sortElements(function (a, b) {
          if ($.text([a]).replace(/[^-0-9]/gim, '') == '') {
            aa = 0;
          } else {
            aa = parseInt($.text([a]).replace(/[^-0-9]/gim, ''));
          }
          if ($.text([b]).replace(/[^-0-9]/gim, '') == '') {
            bb = 0;
          } else {
            bb = parseInt($.text([b]).replace(/[^-0-9]/gim, ''));
          }
          return aa > bb ? inverse ? -1 : 1 : inverse ? 1 : -1;
        }, function () {
          return this.parentNode.parentNode.parentNode.parentNode;
        });
        inverse = !inverse;
      });
      $('#post-7 #statas .a_ico:gt(3)').remove();
      $('#post-7 #statas_two .a_ico').each(function () {
        inverse = true;
        $('#careg_ico.home_stats').find('#statas_two #jkj').sortElements(function (a, b) {
          if ($.text([a]).replace(/[^-0-9]/gim, '') == '') {
            aa = -9999;
          } else {
            aa = parseFloat($.text([a]).replace(/[^+-.0-9]/gim, ''));
          }
          if ($.text([b]).replace(/[^-0-9]/gim, '') == '') {
            bb = -9999;
          } else {
            bb = parseFloat($.text([b]).replace(/[^+-.0-9]/gim, ''));
          }
          return aa > bb ? inverse ? -1 : 1 : inverse ? 1 : -1;
        }, function () {
          return this.parentNode.parentNode.parentNode.parentNode;
        });
        inverse = !inverse;
      });
      $('#post-7 #statas_two .a_ico:gt(3)').remove();
    }
    if ($('#search_page').length == 1) {
      $('#search_page .category-desk:eq(0)').append('<div class="col-md-12 col-12 a_ico showmore"><span>BACK TO TOP</span><span><i class="fa fa-arrow-up" aria-hidden="true"></i></span></div>');
      $('.showmore').on('click', function () {
        $('html, body').animate({
          scrollTop: 0
        }, 500);
      });
    }
    if ($('#statas').length == 1) {
      var c_click = 0;
      var table = $('.page-template-ico-stats .tabs__content');
      $('.tabs__content #btc_roi').each(function () {
        var th = $(this),
          thIndex = th.index(),
          inverse = true;
        th.click(function () {
          c_click++;
          if (localStorage.getItem("ind") != $(this).index()) {
            c_click = 1;
          }
          localStorage.setItem("ind", $(this).index());
          if (c_click % 3 == 0) {
            c_click = 0;
            inverse = true;
            th.html('BTC Roi');
            th.parents('.categ_top_table').find('span').attr('class', '');
            th.parents('.categ_top_table').find('span > div').remove();
            th.parents('.tabs__content.active').find('.a_ico .wff #nhj').sortElements(function (a, b) {
              aa = $.text([a]);
              bb = $.text([b]);
              return aa > bb ? inverse ? -1 : 1 : inverse ? 1 : -1;
            }, function () {
              return this.parentNode.parentNode.parentNode.parentNode.parentNode;
            });
            inverse = !inverse;
          } else {
            if (!th.hasClass('dep')) {
              inverse = true;
            }
            if (th.find('div').length == 0) {
              th.parents('.categ_top_table').find('span').attr('class', '');
              th.parents('.categ_top_table').find('span > div').remove();
            }
            th.toggleClass('dep');
            if (th.hasClass('dep')) {
              th.html('BTC Roi<div class="down_arrow"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100.000000pt" height="56.000000pt" viewBox="0 0 100.000000 56.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,56.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M17 542 c-10 -10 -17 -32 -17 -48 0 -25 35 -64 233 -262 214 -214 235 -232 267 -232 32 0 53 18 268 233 202 203 232 236 232 263 0 66 13 64 -502 64 -438 0 -466 -1 -481 -18z"/></g></svg><div>');
            }
            if (!th.hasClass('dep')) {
              th.html('BTC Roi<div class="down_arrow rotate"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100.000000pt" height="56.000000pt" viewBox="0 0 100.000000 56.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,56.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M233 328 c-205 -204 -233 -236 -233 -264 0 -66 -14 -64 502 -64 438 0 466 1 481 18 10 10 17 32 17 48 0 25 -35 64 -233 262 -213 213 -235 232 -267 232 -31 0 -53 -19 -267 -232z"/></g></svg><div>');
            }
            $(this).parents('.tabs__content').find('.a_ico .st_r_btc .roi-amount').sortElements(function (a, b) {
              return parseFloat($.text([a])) > parseFloat($.text([b])) ? inverse ? -1 : 1 : inverse ? 1 : -1;
            }, function () {
              return this.parentNode.parentNode.parentNode.parentNode;
            });
            if (th.hasClass('dep')) {
              inverse = !inverse;
            }
          }
        });
      });
      $('.tabs__content #eth_roi').each(function () {
        var th = $(this),
          thIndex = th.index(),
          inverse = true;
        th.click(function () {
          c_click++;
          if (localStorage.getItem("ind") != $(this).index()) {
            c_click = 1;
          }
          localStorage.setItem("ind", $(this).index());
          if (c_click % 3 == 0) {
            c_click = 0;
            inverse = true;
            th.html('ETH Roi');
            th.parents('.categ_top_table').find('span').attr('class', '');
            th.parents('.categ_top_table').find('span > div').remove();
            th.parents('.tabs__content.active').find('.a_ico .wff #nhj').sortElements(function (a, b) {
              aa = $.text([a]);
              bb = $.text([b]);
              return aa > bb ? inverse ? -1 : 1 : inverse ? 1 : -1;
            }, function () {
              return this.parentNode.parentNode.parentNode.parentNode.parentNode;
            });
            inverse = !inverse;
          } else {
            if (!th.hasClass('dep')) {
              inverse = true;
            }
            if (th.find('div').length == 0) {
              th.parents('.categ_top_table').find('span').attr('class', '');
              th.parents('.categ_top_table').find('span > div').remove();
            }
            th.toggleClass('dep');
            if (th.hasClass('dep')) {
              th.html('ETH Roi<div class="down_arrow"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100.000000pt" height="56.000000pt" viewBox="0 0 100.000000 56.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,56.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M17 542 c-10 -10 -17 -32 -17 -48 0 -25 35 -64 233 -262 214 -214 235 -232 267 -232 32 0 53 18 268 233 202 203 232 236 232 263 0 66 13 64 -502 64 -438 0 -466 -1 -481 -18z"/></g></svg><div>');
            }
            if (!th.hasClass('dep')) {
              th.html('ETH Roi<div class="down_arrow rotate"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100.000000pt" height="56.000000pt" viewBox="0 0 100.000000 56.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,56.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M233 328 c-205 -204 -233 -236 -233 -264 0 -66 -14 -64 502 -64 438 0 466 1 481 18 10 10 17 32 17 48 0 25 -35 64 -233 262 -213 213 -235 232 -267 232 -31 0 -53 -19 -267 -232z"/></g></svg><div>');
            }
            $(this).parents('.tabs__content').find('.a_ico .st_r_eth .roi-amount').sortElements(function (a, b) {
              return parseFloat($.text([a])) > parseFloat($.text([b])) ? inverse ? -1 : 1 : inverse ? 1 : -1;
            }, function () {
              return this.parentNode.parentNode.parentNode.parentNode;
            });
            if (th.hasClass('dep')) {
              inverse = !inverse;
            }
          }
        });
      });
      $('.tabs__content #usd_roi').each(function () {
        var th = $(this),
          thIndex = th.index(),
          inverse = true;
        th.click(function () {
          c_click++;
          if (localStorage.getItem("ind") != $(this).index()) {
            c_click = 1;
          }
          localStorage.setItem("ind", $(this).index());
          if (c_click % 3 == 0) {
            c_click = 0;
            inverse = true;
            th.html('USD Roi');
            th.parents('.categ_top_table').find('span').attr('class', '');
            th.parents('.categ_top_table').find('span > div').remove();
            th.parents('.tabs__content.active').find('.a_ico .wff #nhj').sortElements(function (a, b) {
              aa = $.text([a]);
              bb = $.text([b]);
              return aa > bb ? inverse ? -1 : 1 : inverse ? 1 : -1;
            }, function () {
              return this.parentNode.parentNode.parentNode.parentNode.parentNode;
            });
            inverse = !inverse;
          } else {
            if (!th.hasClass('dep')) {
              inverse = true;
            }
            if (th.find('div').length == 0) {
              th.parents('.categ_top_table').find('span').attr('class', '');
              th.parents('.categ_top_table').find('span > div').remove();
            }
            th.toggleClass('dep');
            if (th.hasClass('dep')) {
              th.html('USD Roi<div class="down_arrow"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100.000000pt" height="56.000000pt" viewBox="0 0 100.000000 56.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,56.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M17 542 c-10 -10 -17 -32 -17 -48 0 -25 35 -64 233 -262 214 -214 235 -232 267 -232 32 0 53 18 268 233 202 203 232 236 232 263 0 66 13 64 -502 64 -438 0 -466 -1 -481 -18z"/></g></svg><div>');
            }
            if (!th.hasClass('dep')) {
              th.html('USD Roi<div class="down_arrow rotate"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100.000000pt" height="56.000000pt" viewBox="0 0 100.000000 56.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,56.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M233 328 c-205 -204 -233 -236 -233 -264 0 -66 -14 -64 502 -64 438 0 466 1 481 18 10 10 17 32 17 48 0 25 -35 64 -233 262 -213 213 -235 232 -267 232 -31 0 -53 -19 -267 -232z"/></g></svg><div>');
            }
            $(this).parents('.tabs__content').find('.a_ico .st_r_usd .roi-amount').sortElements(function (a, b) {
              return parseFloat($.text([a])) > parseFloat($.text([b])) ? inverse ? -1 : 1 : inverse ? 1 : -1;
            }, function () {
              return this.parentNode.parentNode.parentNode.parentNode;
            });
            if (th.hasClass('dep')) {
              inverse = !inverse;
            }
          }
        });
      });
      $('#hchange').each(function () {
        var th = $(this),
          thIndex = th.index(),
          inverse = true;
        th.click(function () {
          c_click++;
          if (localStorage.getItem("ind") != $(this).index()) {
            c_click = 1;
          }
          localStorage.setItem("ind", $(this).index());
          if (c_click % 3 == 0) {
            c_click = 0;
            inverse = true;
            th.html('24h change');
            th.parents('.categ_top_table').find('span').attr('class', '');
            th.parents('.categ_top_table').find('span > div').remove();
            table.find('#statas_two .a_ico .wff #nhj').sortElements(function (a, b) {
              aa = $.text([a]);
              bb = $.text([b]);
              return aa > bb ? inverse ? -1 : 1 : inverse ? 1 : -1;
            }, function () {
              return this.parentNode.parentNode.parentNode.parentNode.parentNode;
            });
            inverse = !inverse;
          } else {
            if (!th.hasClass('dep')) {
              inverse = true;
            }
            if (th.find('div').length == 0) {
              th.parents('.categ_top_table').find('span').attr('class', '');
              th.parents('.categ_top_table').find('span > div').remove();
            }
            th.toggleClass('dep');
            if (th.hasClass('dep')) {
              th.html('24h change<div class="down_arrow"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100.000000pt" height="56.000000pt" viewBox="0 0 100.000000 56.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,56.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M17 542 c-10 -10 -17 -32 -17 -48 0 -25 35 -64 233 -262 214 -214 235 -232 267 -232 32 0 53 18 268 233 202 203 232 236 232 263 0 66 13 64 -502 64 -438 0 -466 -1 -481 -18z"/></g></svg><div>');
            }
            if (!th.hasClass('dep')) {
              th.html('24h change<div class="down_arrow rotate"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100.000000pt" height="56.000000pt" viewBox="0 0 100.000000 56.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,56.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M233 328 c-205 -204 -233 -236 -233 -264 0 -66 -14 -64 502 -64 438 0 466 1 481 18 10 10 17 32 17 48 0 25 -35 64 -233 262 -213 213 -235 232 -267 232 -31 0 -53 -19 -267 -232z"/></g></svg><div>');
            }
            table.find('#statas_two .a_ico #change_day > span').sortElements(function (a, b) {
              if ($.text([a]).replace(/[^-0-9]/gim, '') == '') {
                aa = -9999;
              } else {
                aa = parseFloat($.text([a]).replace(/[^+-.0-9]/gim, ''));
              }
              if ($.text([b]).replace(/[^-0-9]/gim, '') == '') {
                bb = -9999;
              } else {
                bb = parseFloat($.text([b]).replace(/[^+-.0-9]/gim, ''));
              }
              return aa > bb ? inverse ? -1 : 1 : inverse ? 1 : -1;
            }, function () {
              return this.parentNode.parentNode.parentNode.parentNode;
            });
            inverse = !inverse;
          }
        });
      });
      $('#hvolume').each(function () {
        var th = $(this),
          thIndex = th.index(),
          inverse = true;
        th.click(function () {
          c_click++;
          if (localStorage.getItem("ind") != $(this).index()) {
            c_click = 1;
          }
          localStorage.setItem("ind", $(this).index());
          if (c_click % 3 == 0) {
            c_click = 0;
            inverse = true;
            th.html('24h Volume');
            th.parents('.categ_top_table').find('span').attr('class', '');
            th.parents('.categ_top_table').find('span > div').remove();
            table.find('#statas_two .a_ico .wff #nhj').sortElements(function (a, b) {
              aa = $.text([a]);
              bb = $.text([b]);
              return aa > bb ? inverse ? -1 : 1 : inverse ? 1 : -1;
            }, function () {
              return this.parentNode.parentNode.parentNode.parentNode.parentNode;
            });
            inverse = !inverse;
          } else {
            if (!th.hasClass('dep')) {
              inverse = true;
            }
            if (th.find('div').length == 0) {
              th.parents('.categ_top_table').find('span').attr('class', '');
              th.parents('.categ_top_table').find('span > div').remove();
            }
            th.toggleClass('dep');
            if (th.hasClass('dep')) {
              th.html('24h Volume<div class="down_arrow"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100.000000pt" height="56.000000pt" viewBox="0 0 100.000000 56.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,56.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M17 542 c-10 -10 -17 -32 -17 -48 0 -25 35 -64 233 -262 214 -214 235 -232 267 -232 32 0 53 18 268 233 202 203 232 236 232 263 0 66 13 64 -502 64 -438 0 -466 -1 -481 -18z"/></g></svg><div>');
            }
            if (!th.hasClass('dep')) {
              th.html('24h Volume<div class="down_arrow rotate"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100.000000pt" height="56.000000pt" viewBox="0 0 100.000000 56.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,56.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M233 328 c-205 -204 -233 -236 -233 -264 0 -66 -14 -64 502 -64 438 0 466 1 481 18 10 10 17 32 17 48 0 25 -35 64 -233 262 -213 213 -235 232 -267 232 -31 0 -53 -19 -267 -232z"/></g></svg><div>');
            }
            table.find('#statas_two .a_ico #st_volume').sortElements(function (a, b) {
              if ($.text([a]).replace(/[^-0-9]/gim, '') == '') {
                aa = 0;
              } else {
                aa = parseInt($.text([a]).replace(/[^-0-9]/gim, ''));
              }
              if ($.text([b]).replace(/[^-0-9]/gim, '') == '') {
                bb = 0;
              } else {
                bb = parseInt($.text([b]).replace(/[^-0-9]/gim, ''));
              }
              return aa > bb ? inverse ? -1 : 1 : inverse ? 1 : -1;
            }, function () {
              return this.parentNode.parentNode.parentNode;
            });
            inverse = !inverse;
          }
        });
      });
      $('#mcap').each(function () {
        var th = $(this),
          thIndex = th.index(),
          inverse = true;
        th.click(function () {
          c_click++;
          if (localStorage.getItem("ind") != $(this).index()) {
            c_click = 1;
          }
          localStorage.setItem("ind", $(this).index());
          if (c_click % 3 == 0) {
            c_click = 0;
            inverse = true;
            th.html('Market Cap');
            th.parents('.categ_top_table').find('span').attr('class', '');
            th.parents('.categ_top_table').find('span > div').remove();
            table.find('#statas_two .a_ico .wff #nhj').sortElements(function (a, b) {
              aa = $.text([a]);
              bb = $.text([b]);
              return aa > bb ? inverse ? -1 : 1 : inverse ? 1 : -1;
            }, function () {
              return this.parentNode.parentNode.parentNode.parentNode.parentNode;
            });
            inverse = !inverse;
          } else {
            if (!th.hasClass('dep')) {
              inverse = true;
            }
            if (th.find('div').length == 0) {
              th.parents('.categ_top_table').find('span').attr('class', '');
              th.parents('.categ_top_table').find('span > div').remove();
            }
            th.toggleClass('dep');
            if (th.hasClass('dep')) {
              th.html('Market Cap<div class="down_arrow"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100.000000pt" height="56.000000pt" viewBox="0 0 100.000000 56.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,56.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M17 542 c-10 -10 -17 -32 -17 -48 0 -25 35 -64 233 -262 214 -214 235 -232 267 -232 32 0 53 18 268 233 202 203 232 236 232 263 0 66 13 64 -502 64 -438 0 -466 -1 -481 -18z"/></g></svg><div>');
            }
            if (!th.hasClass('dep')) {
              th.html('Market Cap<div class="down_arrow rotate"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100.000000pt" height="56.000000pt" viewBox="0 0 100.000000 56.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,56.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M233 328 c-205 -204 -233 -236 -233 -264 0 -66 -14 -64 502 -64 438 0 466 1 481 18 10 10 17 32 17 48 0 25 -35 64 -233 262 -213 213 -235 232 -267 232 -31 0 -53 -19 -267 -232z"/></g></svg><div>');
            }
            table.find('#statas_two .a_ico #market_cap').sortElements(function (a, b) {
              if ($.text([a]).replace(/[^-0-9]/gim, '') == '') {
                aa = 0;
              } else {
                aa = parseInt($.text([a]).replace(/[^-0-9]/gim, ''));
              }
              if ($.text([b]).replace(/[^-0-9]/gim, '') == '') {
                bb = 0;
              } else {
                bb = parseInt($.text([b]).replace(/[^-0-9]/gim, ''));
              }
              return aa > bb ? inverse ? -1 : 1 : inverse ? 1 : -1;
            }, function () {
              return this.parentNode.parentNode.parentNode;
            });
            inverse = !inverse;
          }
        });
      });
      $('#raised').each(function () {
        var th = $(this),
          thIndex = th.index(),
          inverse = true;
        th.click(function () {
          c_click++;
          if (localStorage.getItem("ind") != $(this).index()) {
            c_click = 1;
          }
          localStorage.setItem("ind", $(this).index());
          if (c_click % 3 == 0) {
            c_click = 0;
            inverse = true;
            th.html('Raised');
            th.parents('.categ_top_table').find('span').attr('class', '');
            th.parents('.categ_top_table').find('span > div').remove();
            table.find('#statas .a_ico .wff #nhj').sortElements(function (a, b) {
              aa = $.text([a]);
              bb = $.text([b]);
              return aa > bb ? inverse ? -1 : 1 : inverse ? 1 : -1;
            }, function () {
              return this.parentNode.parentNode.parentNode.parentNode.parentNode;
            });
            inverse = !inverse;
          } else {
            if (!th.hasClass('dep')) {
              inverse = true;
            }
            if (th.find('div').length == 0) {
              th.parents('.categ_top_table').find('span').attr('class', '');
              th.parents('.categ_top_table').find('span > div').remove();
            }
            th.toggleClass('dep');
            if (th.hasClass('dep')) {
              th.html('Raised<div class="down_arrow"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100.000000pt" height="56.000000pt" viewBox="0 0 100.000000 56.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,56.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M17 542 c-10 -10 -17 -32 -17 -48 0 -25 35 -64 233 -262 214 -214 235 -232 267 -232 32 0 53 18 268 233 202 203 232 236 232 263 0 66 13 64 -502 64 -438 0 -466 -1 -481 -18z"/></g></svg><div>');
            }
            if (!th.hasClass('dep')) {
              th.html('Raised<div class="down_arrow rotate"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100.000000pt" height="56.000000pt" viewBox="0 0 100.000000 56.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,56.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M233 328 c-205 -204 -233 -236 -233 -264 0 -66 -14 -64 502 -64 438 0 466 1 481 18 10 10 17 32 17 48 0 25 -35 64 -233 262 -213 213 -235 232 -267 232 -31 0 -53 -19 -267 -232z"/></g></svg><div>');
            }
            table.find('#statas .a_ico #new_column_categ_invisted span').not('.prec').sortElements(function (a, b) {
              if ($.text([a]).replace(/[^-0-9]/gim, '') == '') {
                aa = 0;
              } else {
                aa = parseInt($.text([a]).replace(/[^-0-9]/gim, ''));
              }
              if ($.text([b]).replace(/[^-0-9]/gim, '') == '') {
                bb = 0;
              } else {
                bb = parseInt($.text([b]).replace(/[^-0-9]/gim, ''));
              }
              return aa > bb ? inverse ? -1 : 1 : inverse ? 1 : -1;
            }, function () {
              return this.parentNode.parentNode.parentNode.parentNode;
            });
            inverse = !inverse;
          }
        });
      });
      $('#month').each(function () {
        var th = $(this),
          thIndex = th.index(),
          inverse = true;
        th.click(function () {
          localStorage.setItem("ind", $(this).index());
          if (!th.hasClass('dep')) {
            inverse = true;
          }
          if (th.find('div').length == 0) {
            th.parents('.categ_top_table').find('span').attr('class', '');
            th.parents('.categ_top_table').find('span > div').remove();
          }
          th.toggleClass('dep');
          if (th.hasClass('dep')) {
            th.html('Month<div class="down_arrow"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100.000000pt" height="56.000000pt" viewBox="0 0 100.000000 56.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,56.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M17 542 c-10 -10 -17 -32 -17 -48 0 -25 35 -64 233 -262 214 -214 235 -232 267 -232 32 0 53 18 268 233 202 203 232 236 232 263 0 66 13 64 -502 64 -438 0 -466 -1 -481 -18z"/></g></svg><div>');
          }
          if (!th.hasClass('dep')) {
            th.html('Month<div class="down_arrow rotate"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100.000000pt" height="56.000000pt" viewBox="0 0 100.000000 56.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,56.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M233 328 c-205 -204 -233 -236 -233 -264 0 -66 -14 -64 502 -64 438 0 466 1 481 18 10 10 17 32 17 48 0 25 -35 64 -233 262 -213 213 -235 232 -267 232 -31 0 -53 -19 -267 -232z"/></g></svg><div>');
          }
          table.find('#statas .a_ico .wff #nhj').sortElements(function (a, b) {
            aa = $.text([a]);
            bb = $.text([b]);
            return aa > bb ? inverse ? -1 : 1 : inverse ? 1 : -1;
          }, function () {
            return this.parentNode.parentNode.parentNode.parentNode.parentNode;
          });
          inverse = !inverse;
        });
      });
      if ($('#careg_ico.home_stats').length == 1) {
        $('#careg_ico.home_stats .category-desk').append('<div id="view_all" class="white-desk ico-card"><a href="/ico-stats/"><span>View all list</span><span><img src="/wp-content/themes/ico-drops-2-0/img/home_right.svg"></span></a></div>');
        $('#stats_tabs li:not(.active_tab_category)').live('click', function () {
          $(this).addClass('active_tab_category').siblings().removeClass('active_tab_category')
          $('#careg_ico.home_stats').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
      } else {
        $('.category-desk').append('<div class="col-md-12 col-12 a_ico showmore"><span>BACK TO TOP</span><span><i class="fa fa-arrow-up" aria-hidden="true"></i></span></div>');
        $('.showmore').on('click', function () {
          $('html, body').animate({
            scrollTop: 0
          }, 500);
        });
        $('#stats_tabs li:not(.active_tab_category)').live('click', function () {
          $(this).addClass('active_tab_category').siblings().removeClass('active_tab_category')
          $('#careg_ico').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
      }
    }
    var title_for_tabs = [];
    var active_icos = '';
    if ($('.page-template-sandbox').length == 1) {
      $('#careg_ico .categ_new_tabs ul li:not(.active_tab_category)').live('click', function () {
        $('#careg_ico .tabs__caption li:eq(' + $(this).index() + ')').click();
        $(this).addClass('active_tab_category').siblings().removeClass('active_tab_category')
        $('#careg_ico').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
    }
    if (true) {//location.pathname.match(/category/gi) == 'category'
      $('#careg_ico .categ_new_tabs ul li:not(.active_tab_category)').live('click', function () {
        $('#careg_ico .tabs__caption li:eq(' + $(this).index() + ')').click();
        $(this).addClass('active_tab_category').siblings().removeClass('active_tab_category')
        $('#careg_ico').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
      $('#careg_ico .tabs__caption li:not(.active)').live('click', function () {
        $(this).addClass('active').siblings().removeClass('active')
        $('#careg_ico').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
      $('#careg_ico .tabs__content:eq(0)').append('<div class="col-md-12 col-12 a_ico showmore"><span>BACK TO TOP</span><span><i class="fa fa-arrow-up" aria-hidden="true"></i></span></div>');
      $('#careg_ico .tabs__content:eq(1)').append('<div class="col-md-12 col-12 a_ico showmore"><span>BACK TO TOP</span><span><i class="fa fa-arrow-up" aria-hidden="true"></i></span></div>');
      $('#careg_ico .tabs__content:eq(2)').append('<div class="col-md-12 col-12 a_ico showmore"><span>BACK TO TOP</span><span><i class="fa fa-arrow-up" aria-hidden="true"></i></span></div>');
      $('.showmore').on('click', function () {
        $('html, body').animate({
          scrollTop: 0
        }, 500);
      });
      $(window).on('resize', function () {
        if ($(window).width() <= '990') {
          if ($('.tabs').length < 1) {
            $('#careg_ico .tabs__content').wrapAll('<div class="tabs"></div>');
            $('#careg_ico .tabs__caption li:not(.active)').live('click', function () {
              $('#careg_ico .categ_new_tabs ul li:eq(' + $(this).index() + ')').click();
              $(this).addClass('active').siblings().removeClass('active')
              $('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
            });
          } else if ($(window).width() > '972') {
            $('#careg_ico .tabs__caption').remove();
            $('.active_i').remove();
            if ($('.valute .eth').length == '0' || $('.valute .btc').length == '0') {
              $('.valute').prepend(ETH);
              $('.valute').prepend(BTC);
            }
          }
        }
      });
    } else {
      var title_for_tabs = [];
      var active_ico = '';
      if ($(window).width() <= '991') {
        $('#post-7 .row').wrapAll('<div class="tabs"></div>');
        $('#post-7 .row .valute').after('<ul id="hom_tab" class="tabs__caption"></ul>');
        $('#post-7 .row .col-12.col-lg-4').wrap('<div id="hom_content" class="tabs__content"></div>');
        for (var i = 0; i < $('#post-7 .row .col-12.col-lg-4').length; i++) {
          if (i == 0) {
            active_ico = '<div class="active_i">' + $('#post-7 .row .col-12.col-lg-4:eq(' + i + ') sup').text() + ' ICOs</div>';
            $('#post-7 .row .col-12.col-lg-4:eq(' + i + ') .category-table-header').before(active_ico);
            title_for_tabs[i] = '<li class="active">' + $('#post-7 .row .col-12.col-lg-4:eq(' + i + ')').find($('.category-table-header h2 a')).html() + '</li>';
            $('#post-7 .row .col-12.col-lg-4:eq(0)').parent().addClass('active');
          } else {
            active_ico = '<div class="active_i">' + $('#post-7 .row .col-12.col-lg-4:eq(' + i + ') sup').text() + ' ICOs</div>';
            $('#post-7 .row .col-12.col-lg-4:eq(' + i + ') .category-table-header').before(active_ico);
            title_for_tabs[i] = '<li>' + $('#post-7 .row .col-12.col-lg-4:eq(' + i + ')').find($('.category-table-header h2 a')).html() + '</li>';
          }
          $('.tabs__caption').append(title_for_tabs[i]);
        }
        $('#hom_tab.tabs__caption li:not(.active)').live('click', function () {
          $(this).addClass('active').siblings().removeClass('active').closest('div.row').find('#hom_content.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
      }
      if ($(window).width() > '990') {
        $('.tabs__content .col-12.col-lg-4').unwrap('.tabs__content');
      }
      $(window).on('resize', function () {
        if ($(window).width() >= '767' && $('#ico-header').hasClass('white')) {
          $('#nav-toogle-button').click();
          $('#ico-header').html(redy_state);
        }
        if ($(window).width() <= '990' && $('.tabs__caption').length == 0) {
          $('#post-7 .row .valute').after('<ul id="hom_tab" class="tabs__caption"></ul>');
          $('#post-7 .row .col-12.col-lg-4').wrap('<div id="hom_content" class="tabs__content"></div>');
          for (var i = 0; i < $('#post-7 .row .col-12.col-lg-4').length; i++) {
            if (i == 0) {
              active_ico = '<div class="active_i">' + $('#post-7 .row .col-12.col-lg-4:eq(' + i + ') sup').text() + ' ICOs</div>';
              $('#post-7 .row .col-12.col-lg-4:eq(' + i + ') .category-table-header').before(active_ico);
              title_for_tabs[i] = '<li class="active">' + $('#post-7 .row .col-12.col-lg-4:eq(' + i + ')').find($('.category-table-header h2 a')).html() + '</li>';
              $('#post-7 .row .col-12.col-lg-4:eq(0)').parent().addClass('active');
            } else {
              active_ico = '<div class="active_i">' + $('#post-7 .row .col-12.col-lg-4:eq(' + i + ') sup').text() + ' ICOs</div>';
              $('#post-7 .row .col-12.col-lg-4:eq(' + i + ') .category-table-header').before(active_ico);
              title_for_tabs[i] = '<li>' + $('#post-7 .row .col-12.col-lg-4:eq(' + i + ')').find($('.category-table-header h2 a')).html() + '</li>';
            }
            $('.tabs__caption').append(title_for_tabs[i]);
          }
          $('#hom_tab.tabs__caption li:not(.active)').live('click', function () {
            $(this).addClass('active').siblings().removeClass('active').closest('div.row').find('#hom_content.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
          });
        } else if ($(window).width() > '990') {
          $('.tabs__caption').remove();
          $('.active_i').remove();
          $('.tabs__content .col-12.col-lg-4').unwrap('.tabs__content');
          if ($('#post-7 .row .valute .eth').length == '0' || $('#post-7 .row .valute .btc').length == '0') {
            $('#post-7 .row .valute').prepend(ETH);
            $('#post-7 .row .valute').prepend(BTC);
          }
        }
      });
    }
    $('.ico-card').each(function () {
      $(this).wrap('<a id="n_color" href=' + $(this).find('h3 a').attr('href') + '></a>');
    });
  });
})(jQuery);
jQuery(window).on('load', function () {
  startclock();
});

function stopclock() {
  if (timerRunning) clearTimeout(timerID);
  timerRunning = false;
  document.cookie = "time=0";
}

function showtime() {
  var now = new Date();
  var my = now.getTime();
  now = new Date(my - diffms);
  document.cookie = "time=" + now.toLocaleString();
  timerID = setTimeout('showtime()', 10000);
  timerRunning = true;
}

function startclock() {
  stopclock();
  showtime();
}
var timerID = null;
var timerRunning = false;
var x = new Date();
var now = x.getTime();
var gmt = 1513605961 * 1000;
var diffms = (now - gmt);
var wpcf7 = {
  "apiSettings": {
    "root": "https:\/\/icodrops.com\/wp-json\/contact-form-7\/v1",
    "namespace": "contact-form-7\/v1"
  },
  "recaptcha": {
    "messages": {
      "empty": "Please verify that you are not a robot."
    }
  },
  "cached": "1"
};
(function ($) {
  'use strict';
  if (typeof wpcf7 === 'undefined' || wpcf7 === null) {
    return;
  }
  wpcf7 = $.extend({
    cached: 0,
    inputs: []
  }, wpcf7);
  $(function () {
    wpcf7.supportHtml5 = (function () {
      var features = {};
      var input = document.createElement('input');
      features.placeholder = 'placeholder' in input;
      var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
      $.each(inputTypes, function (index, value) {
        input.setAttribute('type', value);
        features[value] = input.type !== 'text';
      });
      return features;
    })();
    $('div.wpcf7 > form').each(function () {
      var $form = $(this);
      wpcf7.initForm($form);
      if (wpcf7.cached) {
        wpcf7.refill($form);
      }
    });
  });
  wpcf7.getId = function (form) {
    return parseInt($('input[name="_wpcf7"]', form).val(), 10);
  };
  wpcf7.initForm = function (form) {
    var $form = $(form);
    $form.submit(function (event) {
      if (typeof window.FormData !== 'function') {
        return;
      }
      wpcf7.submit($form);
      event.preventDefault();
    });
    $('.wpcf7-submit', $form).after('<span class="ajax-loader"></span>');
    wpcf7.toggleSubmit($form);
    $form.on('click', '.wpcf7-acceptance', function () {
      wpcf7.toggleSubmit($form);
    });
    $('.wpcf7-exclusive-checkbox', $form).on('click', 'input:checkbox', function () {
      var name = $(this).attr('name');
      $form.find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
    });
    $('.wpcf7-list-item.has-free-text', $form).each(function () {
      var $freetext = $(':input.wpcf7-free-text', this);
      var $wrap = $(this).closest('.wpcf7-form-control');
      if ($(':checkbox, :radio', this).is(':checked')) {
        $freetext.prop('disabled', false);
      } else {
        $freetext.prop('disabled', true);
      }
      $wrap.on('change', ':checkbox, :radio', function () {
        var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
        if ($cb.is(':checked')) {
          $freetext.prop('disabled', false).focus();
        } else {
          $freetext.prop('disabled', true);
        }
      });
    });
    if (!wpcf7.supportHtml5.placeholder) {
      $('[placeholder]', $form).each(function () {
        $(this).val($(this).attr('placeholder'));
        $(this).addClass('placeheld');
        $(this).focus(function () {
          if ($(this).hasClass('placeheld')) {
            $(this).val('').removeClass('placeheld');
          }
        });
        $(this).blur(function () {
          if ('' === $(this).val()) {
            $(this).val($(this).attr('placeholder'));
            $(this).addClass('placeheld');
          }
        });
      });
    }
    if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
      $form.find('input.wpcf7-date[type="date"]').each(function () {
        $(this).datepicker({
          dateFormat: 'yy-mm-dd',
          minDate: new Date($(this).attr('min')),
          maxDate: new Date($(this).attr('max'))
        });
      });
    }
    if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
      $form.find('input.wpcf7-number[type="number"]').each(function () {
        $(this).spinner({
          min: $(this).attr('min'),
          max: $(this).attr('max'),
          step: $(this).attr('step')
        });
      });
    }
    $('.wpcf7-character-count', $form).each(function () {
      var $count = $(this);
      var name = $count.attr('data-target-name');
      var down = $count.hasClass('down');
      var starting = parseInt($count.attr('data-starting-value'), 10);
      var maximum = parseInt($count.attr('data-maximum-value'), 10);
      var minimum = parseInt($count.attr('data-minimum-value'), 10);
      var updateCount = function (target) {
        var $target = $(target);
        var length = $target.val().length;
        var count = down ? starting - length : length;
        $count.attr('data-current-value', count);
        $count.text(count);
        if (maximum && maximum < length) {
          $count.addClass('too-long');
        } else {
          $count.removeClass('too-long');
        }
        if (minimum && length < minimum) {
          $count.addClass('too-short');
        } else {
          $count.removeClass('too-short');
        }
      };
      $(':input[name="' + name + '"]', $form).each(function () {
        updateCount(this);
        $(this).keyup(function () {
          updateCount(this);
        });
      });
    });
    $form.on('change', '.wpcf7-validates-as-url', function () {
      var val = $.trim($(this).val());
      if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== val.indexOf('.')) {
        val = val.replace(/^\/+/, '');
        val = 'http://' + val;
      }
      $(this).val(val);
    });
  };
  wpcf7.submit = function (form) {
    if (typeof window.FormData !== 'function') {
      return;
    }
    var $form = $(form);
    $('.ajax-loader', $form).addClass('is-active');
    $('[placeholder].placeheld', $form).each(function (i, n) {
      $(n).val('');
    });
    wpcf7.clearResponse($form);
    var formData = new FormData($form.get(0));
    var detail = {
      id: $form.closest('div.wpcf7').attr('id'),
      status: 'init',
      inputs: [],
      formData: formData
    };
    $.each($form.serializeArray(), function (i, field) {
      if ('_wpcf7' == field.name) {
        detail.contactFormId = field.value;
      } else if ('_wpcf7_version' == field.name) {
        detail.pluginVersion = field.value;
      } else if ('_wpcf7_locale' == field.name) {
        detail.contactFormLocale = field.value;
      } else if ('_wpcf7_unit_tag' == field.name) {
        detail.unitTag = field.value;
      } else if ('_wpcf7_container_post' == field.name) {
        detail.containerPostId = field.value;
      } else if (field.name.match(/^_wpcf7_\w+_free_text_/)) {
        var owner = field.name.replace(/^_wpcf7_\w+_free_text_/, '');
        detail.inputs.push({
          name: owner + '-free-text',
          value: field.value
        });
      } else if (field.name.match(/^_/)) {} else {
        detail.inputs.push(field);
      }
    });
    wpcf7.triggerEvent($form.closest('div.wpcf7'), 'beforesubmit', detail);
    var ajaxSuccess = function (data, status, xhr, $form) {
      detail.id = $(data.into).attr('id');
      detail.status = data.status;
      var $message = $('.wpcf7-response-output', $form);
      switch (data.status) {
        case 'validation_failed':
          $.each(data.invalidFields, function (i, n) {
            $(n.into, $form).each(function () {
              wpcf7.notValidTip(this, n.message);
              $('.wpcf7-form-control', this).addClass('wpcf7-not-valid');
              $('[aria-invalid]', this).attr('aria-invalid', 'true');
            });
          });
          $message.addClass('wpcf7-validation-errors');
          $form.addClass('invalid');
          wpcf7.triggerEvent(data.into, 'invalid', detail);
          break;
        case 'spam':
          $message.addClass('wpcf7-spam-blocked');
          $form.addClass('spam');
          $('[name="g-recaptcha-response"]', $form).each(function () {
            if ('' === $(this).val()) {
              var $recaptcha = $(this).closest('.wpcf7-form-control-wrap');
              wpcf7.notValidTip($recaptcha, wpcf7.recaptcha.messages.empty);
            }
          });
          wpcf7.triggerEvent(data.into, 'spam', detail);
          break;
        case 'mail_sent':
          $message.addClass('wpcf7-mail-sent-ok');
          $form.addClass('sent');
          if (data.onSentOk) {
            $.each(data.onSentOk, function (i, n) {
              eval(n)
            });
          }
          wpcf7.triggerEvent(data.into, 'mailsent', detail);
          break;
        case 'mail_failed':
        case 'acceptance_missing':
        default:
          $message.addClass('wpcf7-mail-sent-ng');
          $form.addClass('failed');
          wpcf7.triggerEvent(data.into, 'mailfailed', detail);
      }
      wpcf7.refill($form, data);
      if (data.onSubmit) {
        $.each(data.onSubmit, function (i, n) {
          eval(n)
        });
      }
      wpcf7.triggerEvent(data.into, 'submit', detail);
      if ('mail_sent' == data.status) {
        $form.each(function () {
          this.reset();
        });
      }
      $form.find('[placeholder].placeheld').each(function (i, n) {
        $(n).val($(n).attr('placeholder'));
      });
      $message.html('').append(data.message).slideDown('fast');
      $message.attr('role', 'alert');
      $('.screen-reader-response', $form.closest('.wpcf7')).each(function () {
        var $response = $(this);
        $response.html('').attr('role', '').append(data.message);
        if (data.invalidFields) {
          var $invalids = $('<ul></ul>');
          $.each(data.invalidFields, function (i, n) {
            if (n.idref) {
              var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
            } else {
              var $li = $('<li></li>').append(n.message);
            }
            $invalids.append($li);
          });
          $response.append($invalids);
        }
        $response.attr('role', 'alert').focus();
      });
    };
    $.ajax({
      type: 'POST',
      url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/feedback'),
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    }).done(function (data, status, xhr) {
      ajaxSuccess(data, status, xhr, $form);
      $('.ajax-loader', $form).removeClass('is-active');
    }).fail(function (xhr, status, error) {
      var $e = $('<div class="ajax-error"></div>').text(error.message);
      $form.after($e);
    });
  };
  wpcf7.triggerEvent = function (target, name, detail) {
    var $target = $(target);
    var event = new CustomEvent('wpcf7' + name, {
      bubbles: true,
      detail: detail
    });
    $target.get(0).dispatchEvent(event);
    $target.trigger('wpcf7:' + name, detail);
    $target.trigger(name + '.wpcf7', detail);
  };
  wpcf7.toggleSubmit = function (form, state) {
    var $form = $(form);
    var $submit = $('input:submit', $form);
    if (typeof state !== 'undefined') {
      $submit.prop('disabled', !state);
      return;
    }
    if ($form.hasClass('wpcf7-acceptance-as-validation')) {
      return;
    }
    $submit.prop('disabled', false);
    $('input:checkbox.wpcf7-acceptance', $form).each(function () {
      var $a = $(this);
      if ($a.hasClass('wpcf7-invert') && $a.is(':checked') || !$a.hasClass('wpcf7-invert') && !$a.is(':checked')) {
        $submit.prop('disabled', true);
        return false;
      }
    });
  };
  wpcf7.notValidTip = function (target, message) {
    var $target = $(target);
    $('.wpcf7-not-valid-tip', $target).remove();
    $('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(message).appendTo($target);
    if ($target.is('.use-floating-validation-tip *')) {
      var fadeOut = function (target) {
        $(target).not(':hidden').animate({
          opacity: 0
        }, 'fast', function () {
          $(this).css({
            'z-index': -100
          });
        });
      };
      $target.on('mouseover', '.wpcf7-not-valid-tip', function () {
        fadeOut(this);
      });
      $target.on('focus', ':input', function () {
        fadeOut($('.wpcf7-not-valid-tip', $target));
      });
    }
  };
  wpcf7.refill = function (form, data) {
    var $form = $(form);
    var refillCaptcha = function ($form, items) {
      $.each(items, function (i, n) {
        $form.find(':input[name="' + i + '"]').val('');
        $form.find('img.wpcf7-captcha-' + i).attr('src', n);
        var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
        $form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
      });
    };
    var refillQuiz = function ($form, items) {
      $.each(items, function (i, n) {
        $form.find(':input[name="' + i + '"]').val('');
        $form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
        $form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
      });
    };
    if (typeof data === 'undefined') {
      $.ajax({
        type: 'GET',
        url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/refill'),
        dataType: 'json'
      }).done(function (data, status, xhr) {
        if (data.captcha) {
          refillCaptcha($form, data.captcha);
        }
        if (data.quiz) {
          refillQuiz($form, data.quiz);
        }
      });
    } else {
      if (data.captcha) {
        refillCaptcha($form, data.captcha);
      }
      if (data.quiz) {
        refillQuiz($form, data.quiz);
      }
    }
  };
  wpcf7.clearResponse = function (form) {
    var $form = $(form);
    $form.removeClass('invalid spam sent failed');
    $form.siblings('.screen-reader-response').html('').attr('role', '');
    $('.wpcf7-not-valid-tip', $form).remove();
    $('[aria-invalid]', $form).attr('aria-invalid', 'false');
    $('.wpcf7-form-control', $form).removeClass('wpcf7-not-valid');
    $('.wpcf7-response-output', $form).hide().empty().removeAttr('role').removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked');
  };
  wpcf7.apiSettings.getRoute = function (path) {
    var url = wpcf7.apiSettings.root;
    url = url.replace(wpcf7.apiSettings.namespace, wpcf7.apiSettings.namespace + path);
    return url;
  };
})(jQuery);
(function () {
  if (typeof window.CustomEvent === "function") return false;

  function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }
  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();
(function () {
  var searchTrigger = document.getElementById('sm-search-icon');
  var searchBox = document.getElementById('search');
  searchTrigger.onclick = function () {
    if (-1 !== searchBox.className.indexOf('sm-hidden')) {
      searchBox.className = searchBox.className.replace(' sm-hidden', '');
    } else {
      searchBox.className += ' sm-hidden';
    }
  };
  var container, button, menu, links, i, len;
  container = document.getElementById('site-navigation');
  if (!container) {
    return;
  }
  button = container.getElementsByTagName('button')[0];
  if ('undefined' === typeof button) {
    return;
  }
  menu = container.getElementsByTagName('ul')[0];
  if ('undefined' === typeof menu) {
    button.style.display = 'none';
    return;
  }
  menu.setAttribute('aria-expanded', 'false');
  if (-1 === menu.className.indexOf('nav-menu')) {
    menu.className += ' nav-menu';
  }
  button.onclick = function () {
    if (-1 !== container.className.indexOf('toggled')) {
      container.className = container.className.replace(' toggled', '');
      button.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-expanded', 'false');
    } else {
      container.className += ' toggled';
      button.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-expanded', 'true');
    }
  };
  links = menu.getElementsByTagName('a');
  for (i = 0, len = links.length; i < len; i++) {
    links[i].addEventListener('focus', toggleFocus, true);
    links[i].addEventListener('blur', toggleFocus, true);
  }

  function toggleFocus() {
    var self = this;
    while (-1 === self.className.indexOf('nav-menu')) {
      if ('li' === self.tagName.toLowerCase()) {
        if (-1 !== self.className.indexOf('focus')) {
          self.className = self.className.replace(' focus', '');
        } else {
          self.className += ' focus';
        }
      }
      self = self.parentElement;
    }
  }
  (function (container) {
    var touchStartFn, i, parentLink = container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');
  }(container));
})();
(function () {
  var isIe = /(trident|msie)/i.test(navigator.userAgent);
  if (isIe && document.getElementById && window.addEventListener) {
    window.addEventListener('hashchange', function () {
      var id = location.hash.substring(1),
        element;
      if (!(/^[A-z0-9_-]+$/.test(id))) {
        return;
      }
      element = document.getElementById(id);
      if (element) {
        if (!(/^(?:a|select|input|button|textarea)$/i.test(element.tagName))) {
          element.tabIndex = -1;
        }
        element.focus();
      }
    }, false);
  }
})();
var a3_lazyload_params = {
  "apply_images": "1",
  "apply_videos": ""
};
var a3_lazyload_params = {
  "apply_images": "1",
  "apply_videos": ""
};
(function (e, t, n, r) {
  function w(e, t) {
    return e[t] === r ? l[t] : e[t]
  }

  function E() {
    var e = t.pageYOffset;
    return e === r ? a.scrollTop : e
  }

  function S(e, t) {
    var n = l["on" + e];
    if (n) {
      if (p(n)) {
        n.call(t[0])
      } else {
        if (n.addClass) {
          t.addClass(n.addClass)
        }
        if (n.removeClass) {
          t.removeClass(n.removeClass)
        }
      }
    }
    t.trigger("lazy" + e, [t]);
    C()
  }

  function x(t) {
    S(t.type, e(this).off(o, x))
  }

  function T(n) {
    if (!g.length) {
      return
    }
    n = n || l.forceLoad;
    y = Infinity;
    var r = E(),
      s = t.innerHeight || a.clientHeight,
      u = t.innerWidth || a.clientWidth,
      f, c;
    for (f = 0, c = g.length; f < c; f++) {
      var h = g[f],
        d = h[0],
        v = h[i],
        b = false,
        w = n,
        T;
      if (!m(a, d)) {
        b = true
      } else if (n || !v.visibleOnly || d.offsetWidth || d.offsetHeight) {
        if (!w) {
          var N = d.getBoundingClientRect(),
            C = v.edgeX,
            k = v.edgeY;
          T = N.top + r - k - s;
          w = T <= r && N.bottom > -k && N.left <= u + C && N.right > -C
        }
        if (w) {
          S("show", h);
          var L = v.srcAttr,
            A = p(L) ? L(h) : d.getAttribute(L);
          if (A) {
            h.on(o, x);
            d.src = A
          }
          b = true
        } else {
          if (T < y) {
            y = T
          }
        }
      }
      if (b) {
        g.splice(f--, 1);
        c--
      }
    }
    if (!c) {
      S("complete", e(a))
    }
  }

  function N() {
    if (b > 1) {
      b = 1;
      T();
      setTimeout(N, l.throttle)
    } else {
      b = 0
    }
  }

  function C(e) {
    if (!g.length) {
      return
    }
    if (e && e.type === "scroll" && e.currentTarget === t) {
      if (y >= E()) {
        return
      }
    }
    if (!b) {
      setTimeout(N, 0)
    }
    b = 2
  }

  function k() {
    h.lazyLoadXT()
  }

  function L() {
    T(true)
  }
  var i = "lazyLoadXT",
    s = "lazied",
    o = "load error",
    u = "lazy-hidden",
    a = n.documentElement || n.body,
    f = t.onscroll === r || !!t.operamini || !a.getBoundingClientRect,
    l = {
      autoInit: true,
      selector: "img[data-src]",
      blankImage: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      throttle: 99,
      forceLoad: f,
      loadEvent: "pageshow",
      updateEvent: "load orientationchange resize scroll touchmove focus",
      forceEvent: "",
      oninit: {
        removeClass: "lazy"
      },
      onshow: {
        addClass: u
      },
      onload: {
        removeClass: u,
        addClass: "lazy-loaded"
      },
      onerror: {
        removeClass: u
      },
      checkDuplicates: true
    },
    c = {
      srcAttr: "data-src",
      edgeX: 0,
      edgeY: 0,
      visibleOnly: true
    },
    h = e(t),
    p = e.isFunction,
    d = e.extend,
    v = e.data || function (t, n) {
      return e(t).data(n)
    },
    m = e.contains || function (e, t) {
      while (t = t.parentNode) {
        if (t === e) {
          return true
        }
      }
      return false
    },
    g = [],
    y = 0,
    b = 0;
  e[i] = d(l, c, e[i]);
  e.fn[i] = function (n) {
    n = n || {};
    var r = w(n, "blankImage"),
      o = w(n, "checkDuplicates"),
      u = w(n, "scrollContainer"),
      a = {},
      f;
    e(u).on("scroll", C);
    for (f in c) {
      a[f] = w(n, f)
    }
    return this.each(function (u, f) {
      if (f === t) {
        e(l.selector).lazyLoadXT(n)
      } else {
        if (o && v(f, s)) {
          return
        }
        var c = e(f).data(s, 1);
        if (r && f.tagName === "IMG" && !f.src) {
          f.src = r
        }
        c[i] = d({}, a);
        S("init", c);
        g.push(c)
      }
    })
  };
  e(n).ready(function () {
    S("start", h);
    h.on(l.loadEvent, k).on(l.updateEvent, C).on(l.forceEvent, L);
    e(n).on(l.updateEvent, C);
    if (l.autoInit) {
      k()
    }
  })
})(window.jQuery || window.Zepto || window.$, window, document);
(function (e) {
  var t = e.lazyLoadXT;
  t.selector += ",video,iframe[data-src],embed[data-src]";
  t.videoPoster = "data-poster";
  e(document).on("lazyshow", "video", function (n, r) {
    var i = r.lazyLoadXT.srcAttr,
      s = e.isFunction(i);
    r.attr("poster", r.attr(t.videoPoster)).children("source,track").each(function (t, n) {
      var r = e(n);
      r.attr("src", s ? i(r) : r.attr(i))
    });
    this.load();
    e(this).removeClass("lazy-hidden")
  });
  e(document).on("lazyshow", "embed", function (t, n) {
    e(this).removeClass("lazy-hidden")
  })
})(window.jQuery || window.Zepto || window.$);

! function (t, r, e, n) {
  function s(r, e) {
    return Math[e].apply(null, t.map(r, function (t) {
      return t[o]
    }))
  }

  function a(t) {
    return t[o] >= g[o] || t[o] === d
  }

  function c(t) {
    return t[o] === d
  }

  function i(n) {
    var i = n.attr(u.srcsetAttr);
    if (!i) return !1;
    var l = t.map(i.split(","), function (t) {
      return {
        url: x.exec(t)[1],
        w: parseFloat((f.exec(t) || p)[1]),
        h: parseFloat((w.exec(t) || p)[1]),
        x: parseFloat((h.exec(t) || m)[1])
      }
    });
    if (!l.length) return !1;
    var A, v, E = e.documentElement;
    g = {
      w: r.innerWidth || E.clientWidth,
      h: r.innerHeight || E.clientHeight,
      x: r.devicePixelRatio || 1
    };
    for (A in g) o = A, d = s(l, "max"), l = t.grep(l, a);
    for (A in g) o = A, d = s(l, "min"), l = t.grep(l, c);
    return v = l[0].url, u.srcsetExtended && (v = (n.attr(u.srcsetBaseAttr) || "") + v + (n.attr(u.srcsetExtAttr) || "")), v
  }
  var o, d, u = t.lazyLoadXT,
    l = function () {
      return "srcset" in new Image
    }(),
    x = /^\s*(\S*)/,
    f = /\S\s+(\d+)w/,
    w = /\S\s+(\d+)h/,
    h = /\S\s+([\d\.]+)x/,
    p = [0, 1 / 0],
    m = [0, 1],
    A = {
      srcsetAttr: "data-srcset",
      srcsetExtended: !1,
      srcsetBaseAttr: "data-srcset-base",
      srcsetExtAttr: "data-srcset-ext"
    },
    g = {
      w: 0,
      h: 0,
      x: 0
    };
  for (o in A) u[o] === n && (u[o] = A[o]);
  u.selector += ",img[" + u.srcsetAttr + "]", t(e).on("lazyshow", "img", function (t, r) {
    var e = r.attr(u.srcsetAttr);
    e && (!u.srcsetExtended && l ? (r.attr("srcset", e), r.attr("data-srcset", "")) : r.lazyLoadXT.srcAttr = i)
  })
}(window.jQuery || window.Zepto || window.$, window, document);
var a3_lazyload_extend_params = {
  "edgeY": "10"
};
var a3_lazyload_extend_params = {
  "edgeY": "10"
};
jQuery.lazyLoadXT.updateEvent = 'load orientationchange resize scroll touchmove focus click customlazyloadxtevent';
jQuery.lazyLoadXT.edgeY = a3_lazyload_extend_params.edgeY;
jQuery(document).ready(function ($) {
  jQuery(document).on('mouseenter', '.site-header-cart', function () {
    jQuery(document).trigger('customlazyloadxtevent');
  });
  jQuery(document).on('mouseenter', '.widget_shopping_cart', function () {
    jQuery(document).trigger('customlazyloadxtevent');
  });
  jQuery(document).on('mouseover', '#wp-admin-bar-top-secondary', function () {
    jQuery(document).trigger('customlazyloadxtevent');
  });
});
jQuery(window).on('ajaxComplete', function () {
  setTimeout(function () {
    jQuery(window).lazyLoadXT();
  }, 1000);
});
! function (a, b) {
  "use strict";

  function c() {
    if (!e) {
      e = !0;
      var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
        h = !!navigator.userAgent.match(/Trident.*rv:11\./),
        i = b.querySelectorAll("iframe.wp-embedded-content");
      for (c = 0; c < i.length; c++) {
        if (d = i[c], !d.getAttribute("data-secret")) f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f);
        if (g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
      }
    }
  }
  var d = !1,
    e = !1;
  if (b.querySelector)
    if (a.addEventListener) d = !0;
  if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
    if (a.wp.receiveEmbedMessage = function (c) {
        var d = c.data;
        if (d.secret || d.message || d.value)
          if (!/[^a-zA-Z0-9]/.test(d.secret)) {
            var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
              k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
            for (e = 0; e < k.length; e++) k[e].style.display = "none";
            for (e = 0; e < j.length; e++)
              if (f = j[e], c.source === f.contentWindow) {
                if (f.removeAttribute("style"), "height" === d.message) {
                  if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
                  else if (~~g < 200) g = 200;
                  f.height = g
                }
                if ("link" === d.message)
                  if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
                    if (b.activeElement === f) a.top.location.href = d.value
              } else;
          }
      }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);
/*! Idle Timer v1.0.1 2014-03-21 | https://github.com/thorst/jquery-idletimer | (c) 2014 Paul Irish | Licensed MIT */
! function (a) {
  a.idleTimer = function (b, c) {
    var d;
    "object" == typeof b ? (d = b, b = null) : "number" == typeof b && (d = {
      timeout: b
    }, b = null), c = c || document, d = a.extend({
      idle: !1,
      timeout: 3e4,
      events: "mousemove keydown wheel DOMMouseScroll mousewheel mousedown touchstart touchmove MSPointerDown MSPointerMove"
    }, d);
    var e = a(c),
      f = e.data("idleTimerObj") || {},
      g = function (b) {
        var d = a.data(c, "idleTimerObj") || {};
        d.idle = !d.idle, d.olddate = +new Date;
        var e = a.Event((d.idle ? "idle" : "active") + ".idleTimer");
        a(c).trigger(e, [c, a.extend({}, d), b])
      },
      h = function (b) {
        var d = a.data(c, "idleTimerObj") || {};
        if (null == d.remaining) {
          if ("mousemove" === b.type) {
            if (b.pageX === d.pageX && b.pageY === d.pageY) return;
            if ("undefined" == typeof b.pageX && "undefined" == typeof b.pageY) return;
            var e = +new Date - d.olddate;
            if (200 > e) return
          }
          clearTimeout(d.tId), d.idle && g(b), d.lastActive = +new Date, d.pageX = b.pageX, d.pageY = b.pageY, d.tId = setTimeout(g, d.timeout)
        }
      },
      i = function () {
        var b = a.data(c, "idleTimerObj") || {};
        b.idle = b.idleBackup, b.olddate = +new Date, b.lastActive = b.olddate, b.remaining = null, clearTimeout(b.tId), b.idle || (b.tId = setTimeout(g, b.timeout))
      },
      j = function () {
        var b = a.data(c, "idleTimerObj") || {};
        null == b.remaining && (b.remaining = b.timeout - (+new Date - b.olddate), clearTimeout(b.tId))
      },
      k = function () {
        var b = a.data(c, "idleTimerObj") || {};
        null != b.remaining && (b.idle || (b.tId = setTimeout(g, b.remaining)), b.remaining = null)
      },
      l = function () {
        var b = a.data(c, "idleTimerObj") || {};
        clearTimeout(b.tId), e.removeData("idleTimerObj"), e.off("._idleTimer")
      },
      m = function () {
        var b = a.data(c, "idleTimerObj") || {};
        if (b.idle) return 0;
        if (null != b.remaining) return b.remaining;
        var d = b.timeout - (+new Date - b.lastActive);
        return 0 > d && (d = 0), d
      };
    if (null === b && "undefined" != typeof f.idle) return i(), e;
    if (null === b);
    else {
      if (null !== b && "undefined" == typeof f.idle) return !1;
      if ("destroy" === b) return l(), e;
      if ("pause" === b) return j(), e;
      if ("resume" === b) return k(), e;
      if ("reset" === b) return i(), e;
      if ("getRemainingTime" === b) return m();
      if ("getElapsedTime" === b) return +new Date - f.olddate;
      if ("getLastActiveTime" === b) return f.lastActive;
      if ("isIdle" === b) return f.idle
    }
    return e.on(a.trim((d.events + " ").split(" ").join("._idleTimer ")), function (a) {
      h(a)
    }), f = a.extend({}, {
      olddate: +new Date,
      lastActive: +new Date,
      idle: d.idle,
      idleBackup: d.idle,
      timeout: d.timeout,
      remaining: null,
      tId: null,
      pageX: null,
      pageY: null
    }), f.idle || (f.tId = setTimeout(g, f.timeout)), a.data(c, "idleTimerObj", f), e
  }, a.fn.idleTimer = function (b) {
    return this[0] ? a.idleTimer(b, this[0]) : this
  }
}(jQuery);
! function (a) {
  "use strict";

  function b() {
    var a = "none";
    return jQuery(".cp-info-bar").each(function (b, c) {
      if (jQuery(this).hasClass("priority_infobar")) return a = jQuery(this)
    }), a
  }

  function c(a) {
    return "/" === a.substr(-1) ? a.substr(0, a.length - 1) : a
  }

  function d(a) {
    if (void 0 !== a) {
      a = a.split("|");
      var b = !1,
        c = !1,
        d = !1;
      c = DetectTierTablet(), d = DetectTierIphone(), jQuery.each(a, function () {
        var a = jQuery(this).selector;
        ("desktop" == a && !d && !c || "tablet" == a && c || "mobile" == a && d) && (b = !0)
      })
    } else b = !1;
    return b
  }

  function e(a) {
    var b = jQuery(".cp-impress-nonce").val(),
      c = {
        action: "smile_update_impressions",
        impression: !0,
        styles: a,
        option: "smile_info_bar_styles",
        security: b
      };
  }

  function f(a, b, c) {
    var d = jQuery("#cp-push-down-support").val(),
      e = jQuery("#cp-top-offset-container").val(),
      f = jQuery("#wpadminbar").outerHeight(),
      g = a.outerHeight();
    if ("" == e) var h = jQuery("body").offset().top,
      i = {
        margin_top: jQuery("body").css("margin-top"),
        top: jQuery("body").css("top")
      };
    else if (jQuery(e).length > 0) var h = jQuery(e).offset().top,
      i = {
        margin_top: jQuery(e).css("margin-top"),
        top: jQuery(e).css("top")
      };
    if (void 0 !== i) {
      var j = JSON.stringify(i);
      jQuery("#cp-top-offset-container").attr("data-offset_def_settings", j)
    }
    var k = g + h - f,
      l = g + h,
      m = (jQuery(d).outerHeight(), l - 0);
    return c && (m = f + g, k = g), 1 == b ? jQuery(d).stop().animate({
      top: m + "px"
    }, 1200) : jQuery(d).css("top", m + "px"), k
  }

  function g() {
    jQuery(".cp-info-bar").each(function () {
      var a = jQuery(this).data("placeholder-color"),
        b = jQuery(this).data("class"),
        c = a,
        d = "." + b + " ::-webkit-input-placeholder {color: " + c + "!important;} ." + b + " :-moz-placeholder {color: " + c + "!important;} ." + b + " ::-moz-placeholder {color: " + c + "!important;}";
      jQuery("<style type='text/css'>" + d + "</style>").appendTo("head")
    })
  }

  function h(a) {
    var b = parseInt(jQuery(a).outerHeight()),
      c = jQuery(window).outerWidth();
    (window.navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && (c > 768 ? jQuery(a).find(".cp-info-bar-body").css({
      height: b + "px"
    }) : jQuery(a).find(".cp-info-bar-body").css({
      height: "auto"
    }))
  }

  function i(a) {
    var b = jQuery(a).data("class");
    jQuery(a).find("li").each(function () {
      if (0 == jQuery(this).parents(".cp_social_networks").length) {
        var a = jQuery(this),
          c = a.parents("div").attr("class").split(" ")[0],
          d = a.index() + 1,
          e = a.find(".cp_font").css("font-size"),
          f = a.find("span").css("color"),
          g = a.parent(),
          g = g[0].nodeName.toLowerCase();
        "ul" == g ? "none" == a.closest("ul").css("list-style-type") && a.closest("ul").css("list-style-type", "disc") : "none" == a.closest("ol").css("list-style-type") && a.closest("ol").css("list-style-type", "decimal"), jQuery(this).find("span").each(function () {
          var a = jQuery(this).css("color");
          a.length > 0 && (f = a)
        });
        var h = "";
        jQuery(".cp-li-color-css-" + d).remove(), jQuery(".cp-li-font-css-" + d).remove(), e && (h = "font-size:" + e, jQuery("head").append('<style class="cp-li-font-css' + d + '">.' + b + " ." + c + " li:nth-child(" + d + "){ " + h + "}</style>")), f && jQuery("head").append('<style class="cp-li-color-css' + d + '">.' + b + " ." + c + " li:nth-child(" + d + "){ color: " + f + ";}</style>")
      }
    })
  }

  function j(a) {
    setTimeout(function () {
      var b = (a.data("toggle"), a.data("toggle-visible") || null);
      k(a, !1, b)
    }, 300)
  }

  function k(a, b, c) {
    var d = a.data("push-down") || null,
      e = a.data("animate-push-page"),
      g = jQuery("#cp-top-offset-container").val();
    if (d && !c && a.hasClass("cp-pos-top")) {
      var h = f(a, e, b);
      1 == e ? "" == g ? jQuery("body").stop().animate({
        marginTop: h + "px"
      }, 900) : jQuery(g).stop().animate({
        marginTop: h + "px"
      }, 900) : "" == g ? jQuery("body").css("margin-top", h + "px") : jQuery(g).css("margin-top", h + "px")
    }
  }

  function l() {
    jQuery(".cp-info-bar").each(function (a, b) {
      var c = jQuery(b);
      c.find(".cp-ifb-toggle-btn").click(function () {
        var a = jQuery(this),
          b = a.closest(".cp-info-bar"),
          d = "smile-slideInDown",
          f = b.data("exit-animation"),
          g = b.data("entry-animation"),
          h = b.find(".cp-info-bar-body"),
          i = b.data("toggle-visible"),
          j = b.data("impression-added"),
          l = b.data("info_bar-id");
        if (1 == i && void 0 === j && !b.hasClass("cp-disabled-impression")) {
          e([l]), b.data("impression-added", "true")
        }
        var m = !1;
        k(b, m, null), b.removeClass(g), b.removeClass(f), b.hasClass("cp-pos-bottom") && (d = "smile-slideInUp");
        var n = b.attr("class");
        a.removeClass("cp-ifb-show smile-animated " + d), b.attr("class", n), b.attr("class", n + " smile-animated " + g), b.removeClass("cp-ifb-hide"), a.addClass("cp-ifb-hide"), h.addClass("cp-flex"), b.find(".ib-close").css({
          visibility: "visible"
        });
        var m = !0;
        k(c, m)
      }), c.find(".ib-close").click(function () {
        var a = jQuery(this).parents(".cp-info-bar"),
          b = a.find(".cp-ifb-toggle-btn"),
          c = a.find(".cp-info-bar-body"),
          d = "smile-slideInDown",
          e = a.data("exit-animation"),
          f = a.data("entry-animation"),
          g = a.data("toggle"),
          h = a.find(".form-main").attr("class");
        if (1 == g) {
          a.hasClass("cp-pos-bottom") && (d = "smile-slideInUp"), a.removeClass(f);
          var i = a.attr("class");
          a.attr("class", i + " " + e), setTimeout(function () {
            b.removeClass("cp-ifb-hide"), b.addClass("cp-ifb-show smile-animated " + d), a.removeClass("smile-animated"), a.removeClass(e), a.addClass("cp-ifb-hide"), c.removeClass("cp-flex"), a.find(".ib-close").css({
              visibility: "hidden"
            }), void 0 !== h && (a.find("#smile-optin-form")[0].reset(), a.find(".cp-form-processing-wrap").css("display", "none"), a.find(".cp-form-processing").removeAttr("style"), a.find(".cp-msg-on-submit").removeAttr("style"), a.find(".cp-m-success").remove(), a.find(".cp-m-error").remove())
          }, 1500)
        }
      })
    })
  }

  function m(b) {
    var c = b,
      d = a(window),
      e = d.scrollTop(),
      f = e + d.height(),
      g = c.offset().top;
    return g + c.height() <= f && g >= e
  }

  function n() {
    jQuery(".cp-info_bar-inline-end").each(function (a) {
      var b = jQuery(this),
        c = m(b),
        d = b.data("style");
      if (c) {
        var f = Array();
        jQuery("[data-info_bar-style=" + d + "]").hasClass("cp_impression_counted") || jQuery("[data-info_bar-style=" + d + "]").hasClass("cp-disabled-impression") || (f.push(d), e(f)), jQuery("[data-info_bar-style=" + d + "]").each(function () {
          b.addClass("cp_impression_counted")
        })
      }
    })
  }

  function o() {
    var a = jQuery(window).width();
    jQuery(".cp_social_networks").each(function () {
      var b = jQuery(this),
        c = b.data("column-no"),
        d = "";
      a < 768 ? (b.removeClass("cp_social_networks"), b.removeClass(c), d = b.attr("class"), b.attr("class", "cp_social_networks cp_social_autowidth  " + d)) : (b.removeClass("cp_social_networks"), b.removeClass("cp_social_autowidth"), b.removeClass(c), d = b.attr("class"), b.attr("class", "cp_social_networks  " + c + " " + d))
    })
  }! function (a) {
    a.fn.fitText = function (b, c) {
      var d = b || 1,
        e = a.extend({
          minFontSize: Number.NEGATIVE_INFINITY,
          maxFontSize: Number.POSITIVE_INFINITY
        }, c);
      return this.each(function () {
        var b = a(this),
          c = function () {
            b.css("font-size", Math.max(Math.min(b.width() / (10 * d), parseFloat(e.maxFontSize)), parseFloat(e.minFontSize)))
          };
        c(), a(window).on("resize.fittext orientationchange.fittext", c)
      })
    }
  }(jQuery), jQuery.fn.isReferrer = function (a, b, d) {
    var e = !0;
    b = c(b.replace(/.*?:\/\//g, ""));
    var f = a.split(",");
    return jQuery.each(f, function (a, f) {
      f = c(f), b = b.replace("www.", "");
      var g = b.split(".");
      f.match(/./gim).length, g[0];
      f = c(f.replace(/.*?:\/\//g, "")), f = f.replace("www.", "");
      var h = f.split("*"); - 1 !== b.indexOf("reddit.com") ? b = "reddit.com" : -1 !== b.indexOf("t.co") && (b = "twitter.com"), -1 !== b.indexOf("plus.google.co") ? b = "plus.google.com" : -1 !== b.indexOf("google.co") && (b = "google.com");
      var i = h[0];
      if (i = c(i), "display" == d) {
        if (-1 !== f.indexOf("*")) return i == b ? (e = !0, !1) : -1 !== b.indexOf(i) ? (e = !0, !1) : (e = !1, !1);
        if (f == b) return e = !0, !1;
        if (-1 !== b.indexOf(i)) return e = !0, !1;
        e = !1
      } else if ("hide" == d) {
        if (-1 !== f.indexOf("*")) return i == b ? (e = !1, !1) : -1 !== b.indexOf(i) ? (e = !1, !1) : (e = !0, !1);
        if (f == b) return e = !1, !1;
        if (-1 !== b.indexOf(i)) return e = !1, !1;
        e = !0
      }
    }), e
  };
  jQuery.fn.windowSize = function () {
    var a = this.find(".cp-content-container"),
      b = this.find(".cp-info-bar"),
      c = this.find(".cp-info-bar-content"),
      d = this.find(".cp-info-bar-body");
    b.removeAttr("style"), c.removeAttr("style"), a.removeAttr("style"), d.removeAttr("style");
    var e = jQuery(window).width() + 30,
      f = jQuery(window).height();
    jQuery(this).find("iframe").css("width", e), a.css({
      "max-width": e + "px",
      width: "100%",
      height: f + "px",
      padding: "0",
      margin: "0 auto"
    }), c.css({
      "max-width": e + "px",
      width: "100%"
    }), b.css({
      "max-width": e + "px",
      width: "100%",
      left: "0",
      right: "0"
    }), d.css({
      "max-width": e + "px",
      width: "100%",
      height: f + "px"
    })
  }, jQuery.fn.isScheduled = function () {
    var a = new Date(gmt),
      b = this.data("timezonename"),
      c = this.data("tz-offset"),
      d = (a.toGMTString(), a.toLocaleString()),
      e = this.data("scheduled"),
      f = new Date,
      g = f.getTime() + 6e4 * f.getTimezoneOffset(),
      h = new Date(g + 36e5 * c);
    if (void 0 !== e && 1 == e) {
      var i = this.data("start"),
        j = this.data("end");
      return i = Date.parse(i), j = Date.parse(j), (d = "system" == b ? Date.parse(f) : Date.parse(h)) >= i && d <= j
    }
    return !0
  };
  var p = function (a, b, c) {
      if (c) {
        var d = new Date;
        d.setTime(d.getTime() + 24 * c * 60 * 60 * 1e3);
        var e = "; expires=" + d.toGMTString()
      } else var e = "";
      document.cookie = a + "=" + b + e + "; path=/"
    },
    q = function (a) {
      for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
        for (var e = c[d];
          " " == e.charAt(0);) e = e.substring(1, e.length);
        if (0 == e.indexOf(b)) return e.substring(b.length, e.length)
      }
      return null
    },
    r = function (a) {
      if (a.hasClass("cp-pos-top")) a.css("top", "0");
      else if (a.hasClass("ib-fixed")) a.css("top", "auto");
      else {
        var b = a.data("toggle"),
          c = jQuery("body").parent("html").height(),
          d = a.find(".cp-ifb-toggle-btn").outerHeight(),
          e = a.find(".cp-info-bar-body").outerHeight();
        1 == b && (c = c - e + d), a.hasClass("cp-info-bar-inline") || a.css("top", c + "px"), a.css("min-height", e + "px")
      }
      if (jQuery("body").hasClass("admin-bar") && a.hasClass("cp-pos-top")) {
        var f = jQuery("#wpadminbar").outerHeight();
        a.hasClass("cp-info-bar-inline") || a.css("top", f + "px")
      }
    },
    s = function (a) {
      p(a, "", -1)
    };
  jQuery(window).on("load", function () {
    Array();
    jQuery(".cp-info-bar").each(function (a) {
      var b = jQuery(this),
        c = (b.data("class-id"), b.data("dev-mode"), b.data("info_bar-id"));
      s("temp_" + c), h(this), i(this)
    })
  }), jQuery(window).resize(function () {
    jQuery(".cp-info-bar").each(function (a) {
      r(jQuery(this))
    }), o()
  }), jQuery(window).on("load", function () {
    var a = Array();
    jQuery(".cp-ib-onload").each(function (b) {
      var c = jQuery(this),
        f = (c.data("exit-intent"), c.data("dev-mode")),
        g = c.data("info_bar-id"),
        h = (c.attr("id"), c.data("option"), c.data("info_bar-style")),
        i = c,
        k = c.data("onload-delay"),
        k = 1e3 * k,
        l = c.data("load-on-refresh"),
        m = c.data("hide-on-devices"),
        n = d(m),
        o = (jQuery(window).scrollTop(), jQuery(document).height(), jQuery(window).height(), c.data("onscroll-value"), c.data("toggle-visible"));
      r(i);
      var t = !1,
        u = i.isScheduled(),
        v = c.data("parent-style");
      if (void 0 !== v) var g = v;
      else var g = c.data("info_bar-id");
      var w = "temp_" + g;
      if ("disabled" == l) {
        q(g + "-refresh") ? t = !0 : (p(g + "-refresh", !0, 1), t = !1)
      } else t = !0, s(g + "-refresh");
      var x = q(g),
        y = q(w);
      w ? "enabled" == f && y && (x = !0) : p(w, !0, 1), n && (t = !1);
      var z = c.data("push-down");
      z = parseInt(z);
      var A = jQuery(this),
        B = "";
      setTimeout(function () {
        B = A.outerHeight()
      }, 100);
      var C = c.data("referrer-domain"),
        D = c.data("referrer-check"),
        E = document.referrer.toLowerCase(),
        F = !1;
      F = void 0 === C || "" === C || i.isReferrer(C, E, D), !x && k && t && u && F && setTimeout(function () {
        if (jQuery(".ib-display").length <= 0) {
          if (i.hasClass("cp_impression_counted") || i.hasClass("cp-disabled-impression") || (a.push(h), 0 !== a.length && void 0 === o && (e(a), jQuery("[data-info_bar-style=" + h + "]").each(function (a) {
              jQuery(this).addClass("cp_impression_counted")
            }))), i.hasClass("cp-pos-top")) {
            if (jQuery("body").hasClass("admin-bar")) {
              var b = jQuery("#wpadminbar").outerHeight();
              i.css("top", b + "px")
            }
          } else {
            var c = i.find(".cp-info-bar-body").outerHeight();
            i.css("min-height", c + "px")
          }
          j(i), jQuery(document).trigger("resize"), i.addClass("ib-display"), jQuery(document).trigger("infobarOpen", [i]), setTimeout(function () {
            var a = i.find(".cp-submit").data("animation");
            i.find(".cp-submit").addClass(a)
          }, 2e3)
        }
      }, parseInt(k)), "enabled" == f && s(g)
    })
  });
  var t = !0;
  jQuery(document).scroll(function (a) {
    if (t) {
      n();
      var b = 100 * jQuery(window).scrollTop() / (jQuery(document).height() - jQuery(window).height()),
        c = b.toFixed(0),
        f = Array();
      jQuery(".cp-ib-onload").each(function (a) {
        var b = jQuery(this),
          g = (b.data("exit-intent"), b.data("class"), b.data("dev-mode")),
          h = (b.data("option"), b.data("info_bar-style")),
          i = b,
          k = b.data("onscroll-value"),
          l = b.data("hide-on-devices"),
          m = d(l),
          n = b.data("toggle-visible"),
          o = b.data("parent-style");
        if (void 0 !== o) var r = o;
        else var r = b.data("info_bar-id");
        var u = "temp_" + r;
        b.find(".cp-impress-nonce").val();
        "enabled" == g && s(r);
        var v = q(r),
          w = q(u);
        u ? "enabled" == g && w && (v = !0) : p(u, !0, 1);
        var x = i.isScheduled();
        m && (v = k = x = !1);
        var y = b.data("push-down");
        y = parseInt(y);
        var z = (b.outerHeight(), b.data("referrer-domain")),
          A = b.data("referrer-check"),
          B = document.referrer.toLowerCase(),
          C = !1;
        C = void 0 === z || "" === z || i.isReferrer(z, B, A), !v && k && x && C && jQuery(".ib-display").length <= 0 && c >= k && setTimeout(function () {
          if (j(i), i.hasClass("cp_impression_counted") || i.hasClass("cp-disabled-impression") || (f.push(h), 0 !== f.length && void 0 === n && (e(f), jQuery("[data-info_bar-style=" + h + "]").each(function (a) {
              b.addClass("cp_impression_counted")
            }))), i.hasClass("cp-pos-top")) {
            if (jQuery("body").hasClass("admin-bar")) {
              var a = jQuery("#wpadminbar").outerHeight();
              i.css("top", a + "px")
            }
          } else {
            var c = i.find(".cp-info-bar-body").outerHeight();
            i.css("min-height", c + "px")
          }
          i.addClass("ib-display"), t = !1, jQuery(document).trigger("infobarOpen", [i]), setTimeout(function () {
            var a = i.find(".cp-submit").data("animation");
            i.find(".cp-submit").addClass(a)
          }, 2e3)
        }, 100)
      })
    }
  });
  var u = !0;
  jQuery(document).scroll(function (a) {
    if (u) {
      var b = jQuery(window).scrollTop(),
        c = Array();
      jQuery(".ib-after-post").each(function (a) {
        var f = jQuery(this),
          g = (f.data("exit-intent"), f.data("class"), f.data("dev-mode")),
          h = f.data("after-content-value"),
          i = (f.data("option"), f.data("info_bar-style")),
          k = f,
          l = jQuery(".cp-load-after-post").offset().top - 30,
          m = f.data("hide-on-devices"),
          n = d(m),
          o = f.data("toggle-visible"),
          r = (f.find(".cp-impress-nonce").val(), f.data("parent-style"));
        if (void 0 !== r) var t = r;
        else var t = f.data("info_bar-id");
        var v = "temp_" + t;
        "enabled" == g && s(t);
        var w = q(t),
          x = q(v);
        v ? "enabled" == g && x && (w = !0) : p(v, !0, 1);
        var y = k.isScheduled();
        l -= jQuery(window).height() * h / 100, n && (w = l = y = !1);
        var z = f.data("push-down"),
          z = parseInt(z),
          A = (f.outerHeight(), f.data("referrer-domain")),
          B = f.data("referrer-check"),
          C = document.referrer.toLowerCase(),
          D = !1;
        if (D = void 0 === A || "" === A || k.isReferrer(A, C, B), !w && l && y && D && jQuery(".ib-display").length <= 0 && b >= l) {
          if (j(k), k.hasClass("cp-pos-top")) {
            if (jQuery("body").hasClass("admin-bar")) {
              var E = jQuery("#wpadminbar").outerHeight();
              k.css("top", E + "px")
            }
          } else {
            var F = k.find(".cp-info-bar-body").outerHeight();
            k.css("min-height", F + "px")
          }
          k.addClass("ib-display"), u = !1, jQuery(document).trigger("infobarOpen", [k]), k.hasClass("cp_impression_counted") || k.hasClass("cp-disabled-impression") || (c.push(i), 0 !== c.length && void 0 === o && (e(c), jQuery("[data-info_bar-style=" + i + "]").each(function (a) {
            f.addClass("cp_impression_counted")
          }))), setTimeout(function () {
            var a = k.find(".ib-subscribe").data("animation");
            k.find(".ib-subscribe").addClass(a)
          }, 2e3)
        }
      })
    }
  }), jQuery(document).on("mouseleave", function (a) {
    var c = Array(),
      f = b();
    jQuery(".cp-ib-onload").each(function (b) {
      var g = jQuery(this);
      if ("none" !== f) {
        var h = f;
        g = h
      }
      var i = g.data("exit-intent"),
        k = (g.data("class-id"), g.data("dev-mode")),
        l = (g.data("option"), g.data("info_bar-style")),
        h = g,
        m = g.data("hide-on-devices"),
        n = d(m),
        o = g.data("toggle-visible"),
        r = (g.find(".cp-impress-nonce").val(), g.data("parent-style"));
      if (void 0 !== r) var t = r;
      else var t = g.data("info_bar-id");
      var u = "temp_" + t;
      "enabled" == k && s(t);
      var v = q(t),
        w = q(u);
      u ? "enabled" == k && w && (v = !0) : p(u, !0, 1);
      g.data("inactive-time");
      var x = g.data("push-down"),
        x = parseInt(x),
        y = (g.outerHeight(), h.isScheduled());
      n && (i = y = !1);
      var z = g.data("referrer-domain"),
        A = g.data("referrer-check"),
        B = document.referrer.toLowerCase(),
        C = !1;
      if (C = void 0 === z || "" === z || h.isReferrer(z, B, A), !v && C && "enabled" == i && y && a.clientY <= 0 && jQuery(".ib-display").length <= 0) {
        if (j(h), h.hasClass("cp-pos-top")) {
          if (jQuery("body").hasClass("admin-bar")) {
            var D = jQuery("#wpadminbar").outerHeight();
            h.css("top", D + "px")
          }
        } else {
          var E = h.find(".cp-info-bar-body").outerHeight();
          h.css("min-height", E + "px")
        }
        jQuery(document).trigger("playYoutube"), h.addClass("ib-display"), jQuery(document).trigger("infobarOpen", [h]), h.hasClass("cp_impression_counted") || h.hasClass("cp-disabled-impression") || (c.push(l), 0 !== c.length && void 0 === o && (e(c), jQuery("[data-info_bar-style=" + l + "]").each(function (a) {
          g.addClass("cp_impression_counted")
        }))), setTimeout(function () {
          var a = h.find(".cp-submit").data("animation");
          h.find(".cp-submit").addClass(a)
        }, 2e3)
      }
    })
  }), jQuery(document).ready(function () {
    jQuery(".blinking-cursor").remove(), l(), o(), n(), jQuery(".cp-info-bar").each(function (a) {
      if (jQuery("body").hasClass("admin-bar")) {
        var b = jQuery("#wpadminbar").outerHeight();
        jQuery(this).hasClass("cp-pos-top") && !jQuery(this).hasClass("cp-info-bar-inline") && jQuery(this).css("top", b + "px")
      }
      var c = jQuery(this).data("inactive-time");
      void 0 !== c && (c *= 1e3, jQuery(document).idleTimer({
        timeout: c,
        idle: !1
      }))
    }), jQuery(".ib-close").click(function (a) {
      a.preventDefault();
      var b = jQuery(this).parents(".cp-info-bar");
      jQuery(document).trigger("cp_close_info_bar", [b])
    })
  }), jQuery(document).on("cp_close_info_bar", function (a, b) {
    var c = b.data("entry-animation"),
      d = b.data("exit-animation"),
      e = b.data("closed-cookie-time"),
      f = b.data("info_bar-id"),
      g = b.data("animate-push-page"),
      h = b.data("push-down") || null,
      i = b.data("parent-style");
    if (void 0 !== i) var f = i;
    else var f = b.data("info_bar-id");
    var j = "temp_" + f;
    if (b.hasClass("cp-ifb-with-toggle") || (b.removeClass(c), b.addClass(d)), b.hasClass("cp-pos-top")) {
      if (h) {
        var k = jQuery("#cp-top-offset-container").val(),
          l = jQuery("#cp-top-offset-container").data("offset_def_settings"),
          m = l.margin_top,
          n = l.top;
        1 == g ? "" == k ? jQuery("body").animate({
          marginTop: m,
          top: n
        }) : jQuery(k).animate({
          "margin-top": m,
          top: n
        }) : "" == k ? jQuery("body").css({
          "margin-top": m,
          top: n
        }) : jQuery(k).css({
          "margin-top": m,
          top: n
        })
      }
      if (1 == jQuery(".ib-display").length) {
        var o = jQuery("#wpadminbar").outerHeight(),
          q = jQuery("#cp-push-down-support").val();
        jQuery("#wpadminbar").length ? 1 == g ? jQuery(q).animate({
          top: o
        }, 1e3) : jQuery(q).css("top", o) : 1 == g ? jQuery(q).animate({
          top: "0px"
        }, 1e3) : jQuery(q).css("top", "0px")
      }
    }
    p(j, !0, 1), e && p(f, !0, e), (b.hasClass("cp-hide-inline-style") || b.hasClass("cp-close-ifb")) && (d = "cp-overlay-none"), b.hasClass("cp-close-ifb") && setTimeout(function () {
      b.hide(), b.removeClass("ib-display"), b.removeClass(d), b.addClass(c), jQuery("html").css("overflow-x", "auto")
    }, 3e3), "cp-overlay-none" !== d ? setTimeout(function () {
      b.hasClass("cp-ifb-with-toggle") || (b.hide(), b.removeClass("ib-display"), b.removeClass(d), b.addClass(c)), jQuery("html").css("overflow-x", "auto")
    }, 3e3) : setTimeout(function () {
      b.hasClass("cp-ifb-with-toggle") || (b.hide(), b.removeClass("ib-display"), d = "cp-overlay-none", b.removeClass(d), b.addClass(c)), jQuery("html").css("overflow-x", "auto")
    }, 100)
  }), jQuery(document).on("idle.idleTimer", function (a, c, f) {
    var g = Array(),
      h = b();
    jQuery(".cp-ib-onload").each(function (a) {
      var b = jQuery(this);
      if ("none" !== h) {
        var c = h;
        b = c
      }
      var f = (b.data("class-id"), b.data("dev-mode")),
        i = (b.data("option"), b.data("info_bar-style")),
        c = b,
        k = b.data("hide-on-devices"),
        l = d(k),
        m = b.data("toggle-visible"),
        n = (b.find(".cp-impress-nonce").val(), b.data("parent-style"));
      if (void 0 !== n) var o = n;
      else var o = b.data("info_bar-id");
      var r = "temp_" + o;
      "enabled" == f && s(o);
      var t = q(o),
        u = q(r);
      r ? "enabled" == f && u && (t = !0) : p(r, !0, 1);
      var v = !1;
      void 0 !== b.data("inactive-time") && (v = !0);
      var w = b.data("push-down");
      w = parseInt(w);
      b.outerHeight();
      l && (v = !1);
      var x = b.data("referrer-domain"),
        y = b.data("referrer-check"),
        z = document.referrer.toLowerCase(),
        A = !1;
      if (A = void 0 === x || "" === x || c.isReferrer(x, z, y), !t && v && A && jQuery(".ib-display").length <= 0) {
        if (j(c), c.hasClass("cp-pos-top")) {
          if (jQuery("body").hasClass("admin-bar")) {
            var B = jQuery("#wpadminbar").height();
            c.css("top", B + "px")
          }
        } else {
          var C = c.find(".cp-info-bar-body").outerHeight();
          c.css("min-height", C + "px")
        }
        c.addClass("ib-display"), jQuery(document).trigger("infobarOpen", [c]), c.hasClass("cp_impression_counted") || c.hasClass("cp-disabled-impression") || (g.push(i), 0 !== g.length && void 0 === m && (e(g), jQuery("[data-info_bar-style=" + i + "]").each(function (a) {
          b.addClass("cp_impression_counted")
        }))), setTimeout(function () {
          var a = c.find(".cp-submit").data("animation");
          c.find(".cp-submit").addClass(a)
        }, 2e3)
      }
    })
  }), jQuery(document).on("idle.idleTimer", function (a, b, c) {
    if (jQuery(".ib-display").hasClass("cp-close-after-x")) {
      var d = jQuery(".ib-display");
      jQuery(document).trigger("cp_close_info_bar", [d])
    }
  }), jQuery(document).ready(function () {
    var a = {};
    jQuery.each(jQuery(".cp-info-bar"), function () {
      var b = jQuery(this),
        c = jQuery(this).data("custom-class");
      void 0 !== c && "" !== c && (c = c.split(" "), jQuery.each(c, function (c, d) {
        void 0 !== d && "" !== d && (a[d] = b)
      }))
    }), jQuery.each(a, function (a, b) {
      "" != a && "undefined" != a && null != a && jQuery("." + a).click(function (a) {
        var c = b,
          d = Array();
        if (!c.hasClass("cp-form-submit-success")) {
          var f = (c.data("exit-intent"), c.data("custom-class"), c.data("info_bar-id"), c.data("option"), c.data("info_bar-style")),
            g = c,
            h = (jQuery(this).find(".cp-impress-nonce").val(), c.data("push-down")),
            h = parseInt(h);
          c.outerHeight();
          if (jQuery(".ib-display").length <= 0) {
            if (j(g), g.hasClass("cp-pos-top")) {
              if (jQuery("body").hasClass("admin-bar")) {
                var i = jQuery("#wpadminbar").outerHeight();
                g.css("top", i + "px")
              }
            } else {
              var k = g.find(".cp-info-bar-body").outerHeight();
              g.css("min-height", k + "px")
            }
          }
        }
      })
    })
  }), jQuery(document).ready(g), jQuery(document).on("ib_conversion_done", function (a, b) {
    if (!jQuery(b).parents(".cp-form-container").find(".cp-email").length > 0) {
      jQuery(b).parents(".cp-form-container").find('[name="only_conversion"]').length > 0 && jQuery(b).addClass("cp-disabled")
    }
  }), jQuery(document).on("infobarOpen", function (b, c) {
    var d = c.data("close-btnonload-delay");
    (d = Math.round(1e3 * d)) && setTimeout(function () {
      c.find(".ib-close").removeClass("cp-hide-close")
    }, d);
    var e = c.data("close-after");
    jQuery.idleTimer("destroy"), void 0 !== e && (e *= 1e3, setTimeout(function () {
      c.addClass("cp-close-after-x")
    }, e), jQuery(document).idleTimer({
      timeout: e,
      idle: !1
    })), jQuery(".kleo-carousel-features-pager").length > 0 && setTimeout(function () {
      a(window).trigger("resize")
    }, 1500)
  });
  var v = [];
  jQuery.each(jQuery(".cp-info-bar"), function () {
    var a = jQuery(this).data("scroll-class");
    void 0 !== a && "" !== a && (a = a.split(" "), jQuery.each(a, function (a, b) {
      jQuery(b).length > 0 && v.push(b)
    }))
  });
  var w = !0;
  jQuery.each(v, function (a, b) {
    jQuery(document).scroll(function (a) {
      if (w) {
        n();
        var c = 100 * jQuery(window).scrollTop() / (jQuery(document).height() - jQuery(window).height()),
          f = (c.toFixed(0), Array());
        jQuery(".cp-ib-onload").each(function (a) {
          var c = jQuery(this);
          if (c.data("scroll-class") == b) {
            var g = (c.data("exit-intent"), c.data("class"), c.data("dev-mode")),
              h = (c.data("option"), c.data("info_bar-style")),
              i = c,
              k = b,
              l = "";
            if (void 0 !== k && " " !== k) {
              var m = (jQuery(k).outerHeight(), jQuery(k).position());
              void 0 !== m && " " !== m && (l = jQuery(k).cp_ifb_isOnScreen())
            }
            var n = c.data("hide-on-devices"),
              o = d(n),
              r = c.data("toggle-visible"),
              t = c.data("parent-style");
            if (void 0 !== t) var u = t;
            else var u = c.data("info_bar-id");
            var v = "temp_" + u;
            "enabled" == g && s(u);
            var x = q(u),
              y = q(v);
            v ? "enabled" == g && y && (x = !0) : p(v, !0, 1);
            var z = i.isScheduled();
            o && (x = l = z = !1);
            var A = c.data("push-down");
            A = parseInt(A);
            var B = (jQuery(this).outerHeight(), c.data("referrer-domain")),
              C = c.data("referrer-check"),
              D = document.referrer.toLowerCase(),
              E = !1;
            if (E = void 0 === B || "" === B || i.isReferrer(B, D, C), !x && l && z && E && jQuery(".ib-display").length <= 0 && 1 == l) {
              if (j(i), i.hasClass("cp_impression_counted") || i.hasClass("cp-disabled-impression") || (f.push(h), 0 !== f.length && void 0 === r && (e(f), jQuery("[data-info_bar-style=" + h + "]").each(function (a) {
                  c.addClass("cp_impression_counted")
                }))), i.hasClass("cp-pos-top")) {
                if (jQuery("body").hasClass("admin-bar")) {
                  var F = jQuery("#wpadminbar").outerHeight();
                  i.css("top", F + "px")
                }
              } else {
                var G = i.find(".cp-info-bar-body").outerHeight();
                i.css("min-height", G + "px")
              }
              i.addClass("ib-display"), w = !1, jQuery(document).trigger("infobarOpen", [i]), setTimeout(function () {
                var a = i.find(".cp-submit").data("animation");
                i.find(".cp-submit").addClass(a)
              }, 2e3)
            }
          }
        })
      }
    })
  }), jQuery.fn.cp_ifb_isOnScreen = function () {
    var b = a(window),
      c = {
        top: b.scrollTop(),
        left: b.scrollLeft()
      };
    c.right = c.left + b.width(), c.bottom = c.top + b.height();
    var d = this.offset();
    return d.right = d.left + this.outerWidth(), d.bottom = d.top + this.outerHeight(), !(c.right < d.left || c.left > d.right || c.bottom < d.top || c.top > d.bottom)
  }
}(jQuery),
function (a) {
  "use strict";

  function b(a) {
    return new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i).test(a)
  }

  function c(a, c) {
    return !c.trim() || (a.hasClass("cp-email") ? !b(c) : !!a.hasClass("cp-textfeild") && 0 == /^[a-zA-Z0-9- ]*$/.test(c))
  }

  function d(a) {
    var d = jQuery(a),
      g = d.serialize(),
      h = jQuery(a).parents(".global_info_bar_container").find(".cp-msg-on-submit"),
      i = (jQuery(a).parents(".global_info_bar_container").find(".cp-form-container"), jQuery(a).parents(".global_info_bar_container").find(".cp-form-processing")),
      j = jQuery(a).parents(".global_info_bar_container"),
      k = jQuery(a).parents(".global_info_bar_container").find(".cp-form-processing-wrap"),
      l = jQuery(a).parents(".global_info_bar_container"),
      m = j.find(".cp-tooltip-icon").data("classes"),
      n = jQuery(a).parents(".global_info_bar_container").find(".ib-close"),
      o = j.data("conversion-cookie-time"),
      p = jQuery(a).parents(".global_info_bar_container").data("redirect-lead-data"),
      q = jQuery(a).parents(".global_info_bar_container").data("redirect-to"),
      r = jQuery(a).parents(".global_info_bar_container").data("form-action"),
      s = jQuery(a).parents(".global_info_bar_container").data("form-action-time"),
      s = parseInt(1e3 * s),
      t = j.data("parent-style");
    if (void 0 !== t) var u = t;
    else var u = j.data("info_bar-id");
    var v = "",
      w = !0,
      x = "";
    d.find(".cp-input").each(function (a) {
      var b = jQuery(this);
      if (!b.hasClass("cp-submit-button")) {
        var d = b.attr("name"),
          e = b.val(),
          f = d.replace(/param/gi, function (a) {
            return ""
          });
        f = f.replace("[", ""), f = f.replace("]", ""), v += 0 != a ? "&" : "", v += f + "=" + e;
        !!b.attr("required") && (c(b, e) ? (w = !1, b.addClass("cp-input-error")) : b.removeClass("cp-input-error"))
      }
    });
    var y = 0,
      z = "";
    d.find("select, textarea, input").each(function (a, c) {
      if (jQuery(c).prop("required"))
        if (jQuery(c).val())
          if (jQuery(c).hasClass("cp-email")) {
            var d = jQuery(c).val();
            if (b(d)) jQuery(c).removeClass("cp-error");
            else {
              setTimeout(function () {
                jQuery(c).addClass("cp-error")
              }, 100), y++;
              var e = jQuery(c).attr("name") || "";
              console.log(e + " is required \n")
            }
          } else jQuery(c).removeClass("cp-error");
      else y++, setTimeout(function () {
        jQuery(c).addClass("cp-error")
      }, 100), e = jQuery(c).attr("name"), z += e + " is required \n"
    }), y > 0 ? console.log(z) : (k.show(), h.fadeOut(120, function () {
      jQuery(this).show().css({
        visibility: "hidden"
      }), n.show().css({
        visibility: "hidden"
      })
    }), i.hide().css({
      visibility: "visible"
    }))
  }

  function e(a, b) {
    if (window.ActiveXObject) {
      if (window.ActiveXObject && document.execCommand) {
        var c = window.open(a, "_blank");
        c.document.close(), c.document.execCommand("SaveAs", !0, b || a), c.close()
      }
    } else {
      var d = document.createElement("a");
      d.href = a, d.target = "_blank";
      var e = a.substring(a.lastIndexOf("/") + 1);
      if (d.download = b || e, navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) && navigator.userAgent.search("Chrome") < 0) document.location = d.href;
      else {
        var f = new MouseEvent("click", {
          view: window,
          bubbles: !0,
          cancelable: !1
        });
        d.dispatchEvent(f), (window.URL || window.webkitURL).revokeObjectURL(d.href)
      }
    }
  }
  var f = function (a, b, c) {
    if (c) {
      var d = new Date;
      d.setTime(d.getTime() + 24 * c * 60 * 60 * 1e3);
      var e = "; expires=" + d.toGMTString()
    } else var e = "";
    document.cookie = a + "=" + b + e + "; path=/"
  };
  jQuery(document).ready(function () {
    jQuery(".cp-info-bar-container").find("#smile-optin-form").each(function (a, b) {
      jQuery(b).find("input").keypress(function (a) {
        13 == a.which && (a.preventDefault(), d(b))
      }), jQuery(b).find(".btn-subscribe").click(function (a) {
        if (a.preventDefault, jQuery(b).find(".cp-input").removeClass("cp-error"), !jQuery(this).hasClass("cp-disabled")) {
          d(b), jQuery(document).trigger("ib_conversion_done", [this]);
          var c = jQuery(this).attr("data-redirect-link") || "",
            e = jQuery(this).attr("data-redirect-link-target") || "_blank";
          "undefined" != c && "" != c && (navigator.userAgent.toLowerCase().match(/(ipad|iphone)/) ? document.location = c : window.open(c, e))
        }
        a.preventDefault()
      })
    }), jQuery(document).on("click", ".cp-form-submit-error", function (a) {
      var b = jQuery(this).find(".cp-form-processing-wrap"),
        c = jQuery(this).find(".cp-tooltip-icon").data("classes"),
        d = jQuery(this).find(".cp-msg-on-submit");
      jQuery(this).find(".cp-form-processing");
      b.hide(), jQuery(this).removeClass("cp-form-submit-error"), d.html(""), d.removeAttr("style"), jQuery("head").append('<style class="cp-tooltip-css">.tip.' + c + "{display:block }</style>")
    })
  })
}(jQuery);
var countVars = {
  "disqusShortname": "icodrops"
};
var disqus_shortname = countVars.disqusShortname;

//(function () {
//    var nodes = document.getElementsByTagName('span');
//    for (var i = 0, url; i < nodes.length; i++) {
//        if (nodes[i].className.indexOf('dsq-postid') != -1 && nodes[i].parentNode.tagName == 'A') {
//            nodes[i].parentNode.setAttribute('data-disqus-identifier', nodes[i].getAttribute('data-dsqidentifier'));
//            url = nodes[i].parentNode.href.split('#', 1);
//            if (url.length == 1) {
//                url = url[0];
//            } else {
//                url = url[1];
//            }
//            nodes[i].parentNode.href = url + '#disqus_thread';
//        }
//    }
//    var s = document.createElement('script');
//    s.async = true; s.type = 'text/javascript';
//    s.src = './js/count.js';
//    (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
//}());

(function (d, w, c) {
  (w[c] = w[c] || []).push(function () {
    try {
      w.yaCounter45725799 = new Ya.Metrika({
        id: 45725799,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
      });
    } catch (e) {}
  });
  var n = d.getElementsByTagName("script")[0],
    s = d.createElement("script"),
    f = function () {
      n.parentNode.insertBefore(s, n);
    };
  s.type = "text/javascript";
  s.async = true;
  s.src = "https://mc.yandex.ru/metrika/watch.js";
  if (w.opera == "[object Opera]") {
    d.addEventListener("DOMContentLoaded", f, false);
  } else {
    f();
  }
})(document, window, "yandex_metrika_callbacks");

};
