!(function (e) {
  var t,
    i = e("html").hasClass("is-builder");
  e.extend(e.easing, {
    easeInOutCubic: function (e, t, i, n, a) {
      return (t /= a / 2) < 1
        ? (n / 2) * t * t * t + i
        : (n / 2) * ((t -= 2) * t * t + 2) + i;
    }
  }),
    (e.fn.outerFind = function (e) {
      return this.find(e).addBack(e);
    }),
    (e.fn.scrollEnd = function (t, i) {
      e(this).scroll(function () {
        var n = e(this);
        n.data("scrollTimeout") && clearTimeout(n.data("scrollTimeout")),
          n.data("scrollTimeout", setTimeout(t, i));
      });
    }),
    (e.fn.footerReveal = function () {
      var t = e(this),
        i = t.prev(),
        n = e(window),
        a = !!document.documentMode;
      function o() {
        !a && t.outerHeight() <= n.outerHeight()
          ? (t.css({ "z-index": -999, position: "fixed", bottom: 0 }),
            t.css({ width: i.outerWidth() }),
            i.css({ "margin-bottom": t.outerHeight() }))
          : (t.css({ "z-index": "", position: "", bottom: "" }),
            t.css({ width: "" }),
            i.css({ "margin-bottom": "" }));
      }
      return (
        o(),
        n.on("load resize", function () {
          o();
        }),
        this
      );
    }),
    jQuery,
    (t = "smartresize"),
    (jQuery.fn[t] = function (e) {
      return e
        ? this.bind(
            "resize",
            ((i = e),
            function () {
              var e = this,
                t = arguments;
              o ? clearTimeout(o) : a && i.apply(e, t),
                (o = setTimeout(function () {
                  a || i.apply(e, t), (o = null);
                }, n || 100));
            })
          )
        : this.trigger(t);
      var i, n, a, o;
    }),
    (e.isMobile = function (t) {
      var i = [],
        n = {
          blackberry: "BlackBerry",
          android: "Android",
          windows: "IEMobile",
          opera: "Opera Mini",
          ios: "iPhone|iPad|iPod"
        };
      return (
        "*" == (t = "undefined" == e.type(t) ? "*" : t.toLowerCase())
          ? (i = e.map(n, function (e) {
              return e;
            }))
          : t in n && i.push(n[t]),
        !(!i.length || !navigator.userAgent.match(new RegExp(i.join("|"), "i")))
      );
    });
  var n,
    a,
    o,
    s,
    r,
    d =
      ((n = e(
        '<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">'
      ).appendTo("body")),
      (a = n[0]),
      (o = parseInt(window.innerHeight / 2, 10)),
      (s = parseInt(
        (window.getComputedStyle ? getComputedStyle(a, null) : a.currentStyle)
          .height,
        10
      )),
      n.remove(),
      s == o);
  if (
    (e(function () {
      var t, n, a;
      function o() {
        e(this).css("height", (9 * e(this).parent().width()) / 16);
      }
      function s(t) {
        setTimeout(function () {
          e(t)
            .outerFind(".mbr-parallax-background")
            .jarallax({ speed: 0.6 })
            .css("position", "relative");
        }, 0);
      }
      e("html").addClass(e.isMobile() ? "mobile" : "desktop"),
        e(window).scroll(function () {
          e(".mbr-navbar--sticky").each(function () {
            var t = e(window).scrollTop() > 10 ? "addClass" : "removeClass";
            e(this)
              [t]("mbr-navbar--stuck")
              .not(".mbr-navbar--open")
              [t]("mbr-navbar--short");
          });
        }),
        e.isMobile() && navigator.userAgent.match(/Chrome/i)
          ? ((t = e(window).width()),
            (n = e(window).height()),
            ((a = [t, t])[n > t ? 0 : 1] = n),
            e(window).smartresize(function () {
              var t = e(window).height();
              e.inArray(t, a) < 0 && (t = a[e(window).width() > t ? 1 : 0]),
                e(".mbr-section--full-height").css("height", t + "px");
            }))
          : d ||
            (e(window).smartresize(function () {
              e(".mbr-section--full-height").css(
                "height",
                e(window).height() + "px"
              );
            }),
            e(document).on("add.cards", function (t) {
              e("html").hasClass("mbr-site-loaded") &&
                e(t.target).outerFind(".mbr-section--full-height").length &&
                e(window).resize();
            })),
        e(window).smartresize(function () {
          e(".mbr-section--16by9").each(o);
        }),
        e(document).on("add.cards changeParameter.cards", function (t) {
          var i = e(t.target).outerFind(".mbr-section--16by9");
          i.length
            ? i.attr("data-16by9", "true").each(o)
            : e(t.target)
                .outerFind("[data-16by9]")
                .css("height", "")
                .removeAttr("data-16by9");
        }),
        e.fn.jarallax &&
          !e.isMobile() &&
          (e(window).on("update.parallax", function (t) {
            setTimeout(function () {
              var t = e(".mbr-parallax-background");
              t.jarallax("coverImage"),
                t.jarallax("clipContainer"),
                t.jarallax("onScroll");
            }, 0);
          }),
          i
            ? (e(document).on("add.cards", function (t) {
                s(t.target), e(window).trigger("update.parallax");
              }),
              e(document).on("changeParameter.cards", function (t, i, n, a) {
                if ("bg" === i)
                  switch (
                    ((o = t.target),
                    e(o).jarallax("destroy").css("position", ""),
                    a)
                  ) {
                    case "type":
                      !0 === n.parallax && s(t.target);
                      break;
                    case "value":
                      "image" === n.type && !0 === n.parallax && s(t.target);
                      break;
                    case "parallax":
                      !0 === n.parallax && s(t.target);
                  }
                var o;
                e(window).trigger("update.parallax");
              }))
            : s(document.body),
          e(window).on("shown.bs.tab", function (t) {
            e(window).trigger("update.parallax");
          }));
      var r,
        c,
        l = 0,
        u = null,
        h = !e.isMobile();
      function m(t) {
        e(t)
          .outerFind("[data-bg-video]")
          .each(function () {
            var t = e(this).attr("data-bg-video"),
              n = t.match(
                /(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/
              ),
              a = e('<div class="mbr-background-video-preview">')
                .hide()
                .css({ backgroundSize: "cover", backgroundPosition: "center" });
            if (
              (e("> *:eq(0)", this).before(a),
              n && (/youtube/g.test(n[3]) || /vimeo/g.test(n[3])))
            ) {
              if (n && /youtube/g.test(n[3])) {
                var o =
                  "http" + ("https:" === location.protocol ? "s" : "") + ":";
                (o += "//img.youtube.com/vi/" + n[6] + "/maxresdefault.jpg"),
                  e("<img>")
                    .on("load", function () {
                      if (120 === (this.naturalWidth || this.width)) {
                        var e = this.src.split("/").pop();
                        switch (e) {
                          case "maxresdefault.jpg":
                            this.src = this.src.replace(e, "sddefault.jpg");
                            break;
                          case "sddefault.jpg":
                            this.src = this.src.replace(e, "hqdefault.jpg");
                            break;
                          default:
                            i &&
                              a
                                .css(
                                  "background-image",
                                  'url("images/no-video.jpg")'
                                )
                                .show();
                        }
                      } else a.css("background-image", 'url("' + this.src + '")').show();
                    })
                    .attr("src", o),
                  !e.fn.YTPlayer ||
                    i ||
                    e.isMobile() ||
                    e("> *:eq(1)", this)
                      .before('<div class="mbr-background-video"></div>')
                      .prev()
                      .YTPlayer({
                        videoURL: n[6],
                        containment: "self",
                        showControls: !1,
                        mute: !0
                      });
              } else if (n && /vimeo/g.test(n[3])) {
                var s = new XMLHttpRequest();
                s.open(
                  "GET",
                  "https://vimeo.com/api/v2/video/" + n[6] + ".json",
                  !0
                ),
                  (s.onreadystatechange = function () {
                    if (4 === this.readyState)
                      if (this.status >= 200 && this.status < 400) {
                        var e = JSON.parse(this.responseText);
                        a.css(
                          "background-image",
                          'url("' + e[0].thumbnail_large + '")'
                        ).show();
                      } else
                        i &&
                          a
                            .css(
                              "background-image",
                              'url("images/no-video.jpg")'
                            )
                            .show();
                  }),
                  s.send(),
                  (s = null),
                  !e.fn.vimeo_player ||
                    i ||
                    e.isMobile() ||
                    e("> *:eq(1)", this)
                      .before('<div class="mbr-background-video"></div>')
                      .prev()
                      .vimeo_player({
                        videoURL: t,
                        containment: "self",
                        showControls: !1,
                        mute: !0
                      });
              }
            } else i && a.css("background-image", 'url("images/video-placeholder.jpg")').show();
          });
      }
      e(window).scroll(function () {
        c && clearTimeout(c);
        var t = e(window).scrollTop(),
          i = t <= l || h;
        if (((l = t), u)) {
          var n = t > u.breakPoint;
          i
            ? n != u.fixed &&
              (h
                ? ((u.fixed = n), e(u.elm).toggleClass("is-fixed"))
                : (c = setTimeout(function () {
                    (u.fixed = n), e(u.elm).toggleClass("is-fixed");
                  }, 40)))
            : ((u.fixed = !1), e(u.elm).removeClass("is-fixed"));
        }
      }),
        e(document).on("add.cards delete.cards", function (t) {
          r && clearTimeout(r),
            (r = setTimeout(function () {
              u && ((u.fixed = !1), e(u.elm).removeClass("is-fixed")),
                e(".mbr-fixed-top:first").each(function () {
                  (u = {
                    breakPoint: e(this).offset().top + 3 * e(this).height(),
                    fixed: !1,
                    elm: this
                  }),
                    e(window).scroll();
                });
            }, 650));
        }),
        e(window).smartresize(function () {
          e(".mbr-embedded-video").each(function () {
            e(this).height(
              (e(this).width() * parseInt(e(this).attr("height") || 315)) /
                parseInt(e(this).attr("width") || 560)
            );
          });
        }),
        e(document).on("add.cards", function (t) {
          e("html").hasClass("mbr-site-loaded") &&
            e(t.target).outerFind("iframe").length &&
            e(window).resize();
        }),
        i
          ? e(document).on("add.cards", function (e) {
              m(e.target);
            })
          : m(document.body),
        e(document).on("changeParameter.cards", function (t, i, n, a) {
          if ("bg" === i)
            switch (a) {
              case "type":
                e(t.target).find(".mbr-background-video-preview").remove(),
                  "video" === n.type && m(t.target);
                break;
              case "value":
                "video" === n.type &&
                  (e(t.target).find(".mbr-background-video-preview").remove(),
                  m(t.target));
            }
        }),
        i || e("body > *:not(style, script)").trigger("add.cards"),
        e("html").addClass("mbr-site-loaded"),
        e(window).resize().scroll(),
        i ||
          e(document).click(function (t) {
            try {
              var i = t.target;
              if (e(i).parents().hasClass("carousel")) return;
              do {
                if (i.hash) {
                  var n = /#bottom|#top/g.test(i.hash);
                  e(n ? "body" : i.hash).each(function () {
                    t.preventDefault();
                    var n = e(i).parents().hasClass("navbar-fixed-top")
                        ? 60
                        : 0,
                      a =
                        "#bottom" == i.hash
                          ? e(this).height() - e(window).height()
                          : e(this).offset().top - n;
                    e(this).hasClass("panel-collapse") ||
                      e(this).hasClass("tab-pane") ||
                      e("html, body")
                        .stop()
                        .animate({ scrollTop: a }, 800, "easeInOutCubic");
                  });
                  break;
                }
              } while ((i = i.parentNode));
            } catch (t) {}
          }),
        e(".cols-same-height .mbr-figure").each(function () {
          var t = e(this),
            i = t.children("img"),
            n = t.parent(),
            a = i[0].width,
            o = i[0].height;
          function s() {
            if ((i.css({ width: "", maxWidth: "", marginLeft: "" }), o && a)) {
              var e = o / a;
              t.addClass({
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
              });
              var s = n.height() / n.width();
              if (s > e) {
                var r = (100 * (s - e)) / e;
                i.css({
                  width: r + 100 + "%",
                  maxWidth: r + 100 + "%",
                  marginLeft: -r / 2 + "%"
                });
              }
            }
          }
          i.one("load", function () {
            (a = i[0].width), (o = i[0].height), s();
          }),
            e(window).on("resize", s),
            s();
        });
    }),
    i ||
      (e.fn.socialLikes &&
        e(document).on("add.cards", function (t) {
          e(t.target)
            .outerFind(".mbr-social-likes")
            .on("counter.social-likes", function (t, i, n) {
              n > 999 &&
                e(".social-likes__counter", t.target).html(
                  Math.floor(n / 1e3) + "k"
                );
            })
            .socialLikes({ initHtml: !1 });
        }),
      e(document).on("add.cards", function (t) {
        e(t.target).hasClass("mbr-reveal") && e(t.target).footerReveal();
      }),
      e(document).ready(function () {
        if (!e.isMobile() && e("input[name=animation]").length) {
          e("input[name=animation]").remove();
          var t = e(
            "p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, select, textarea, .input-group, .form-control, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info"
          )
            .not(function () {
              return e(this)
                .parents()
                .is(
                  "a, p, .navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop"
                );
            })
            .not(function () {
              return e(this).parents().is("form") && e(this).is("li");
            })
            .addClass("hidden animated");
          var i = e(window);
          i.on("scroll resize", function () {
            var i = window.innerHeight,
              n = document.documentElement.scrollTop || document.body.scrollTop,
              a = n + i - 50;
            e.each(t, function () {
              var t = e(this),
                i = t[0],
                o = i.offsetHeight,
                s = (function (e) {
                  var t = 0;
                  do {
                    (t += e.offsetTop || 0), (e = e.offsetParent);
                  } while (e);
                  return t;
                })(i);
              ((s + o >= n && s <= a) ||
                (function (e) {
                  if ("none" !== e.parents(".carousel-item").css("display"))
                    return !1;
                  var t = e.parents(".carousel-item").parent();
                  if (t.find(".carousel-item.active .hidden.animated").lenght)
                    return !1;
                  if (t.attr("data-visible") > 1) {
                    var i = t.attr("data-visible");
                    return (
                      !!(
                        e.parents().is(".cloneditem-" + (i - 1)) &&
                        e
                          .parents(".cloneditem-" + (i - 1))
                          .attr("data-cloned-index") >= i
                      ) || (e.removeClass("animated hidden"), !1)
                    );
                  }
                  return !0;
                })(t)) &&
                t.hasClass("hidden") &&
                t
                  .removeClass("hidden")
                  .addClass("fadeInUp")
                  .one(
                    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                    function () {
                      t.removeClass("animated fadeInUp");
                    }
                  );
            });
          }),
            i.trigger("scroll");
        }
      }),
      e(".nav-dropdown").length &&
        e(".nav-dropdown").swipe({
          swipeLeft: function (t, i, n, a, o) {
            e(".navbar-close").click();
          }
        })),
    e(document).ready(function () {
      if (e(".mbr-arrow-up").length) {
        var t = e("#scrollToTop"),
          i = e("body,html"),
          n = e(window);
        t.css("display", "none"),
          n.scroll(function () {
            e(this).scrollTop() > 0 ? t.fadeIn() : t.fadeOut();
          }),
          t.click(function () {
            return i.animate({ scrollTop: 0 }, 400), !1;
          });
      }
    }),
    i ||
      e(".mbr-arrow").on("click", function (t) {
        var i = e(t.target).closest("section").next();
        i.hasClass("engine") && (i = i.closest("section").next());
        var n = i.offset();
        e("html, body").stop().animate({ scrollTop: n.top }, 800, "linear");
      }),
    e("nav.navbar").length)
  ) {
    var c = e("nav.navbar").height();
    e(".mbr-after-navbar.mbr-fullscreen").css("padding-top", c + "px");
  }
  if (
    (!i &&
      (window.navigator.userAgent.indexOf("MSIE ") > 0 ||
        navigator.userAgent.match(/Trident.*rv\:11\./)) &&
      e(document).on("add.cards", function (t) {
        var i = e(t.target);
        i.hasClass("mbr-fullscreen") &&
          e(window).on("load resize", function () {
            i.css("height", "auto"),
              i.outerHeight() <= e(window).height() && i.css("height", "1px");
          }),
          (i.hasClass("mbr-slider") || i.hasClass("mbr-gallery")) &&
            (i
              .find(".carousel-indicators")
              .addClass("ie-fix")
              .find("li")
              .css({ display: "inline-block", width: "30px" }),
            i.hasClass("mbr-slider") &&
              i
                .find(".full-screen .slider-fullscreen-image")
                .css("height", "1px"));
      }),
    e(document).ready(function () {
      if (!i) {
        e(".modalWindow-video iframe").each(function () {
          var t = e(this).attr("data-src");
          e(this).removeAttr("data-src");
          var i = t.match(
            /(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/
          );
          -1 !== t.indexOf("youtu")
            ? e(this).attr(
                "src",
                "https://youtube.com/embed/" + i[6] + "?rel=0&enablejsapi=1"
              )
            : -1 !== t.indexOf("vimeo") &&
              e(this).attr(
                "src",
                "https://player.vimeo.com/video/" + i[6] + "?autoplay=0&loop=0"
              );
        }),
          e("[data-modal]").click(function () {
            !(function (t) {
              var i = e(t).parents("section").find("iframe")[0],
                n = e(i).attr("src");
              if (
                (t.parents("section").css("z-index", "5000"),
                -1 !== n.indexOf("youtu") &&
                  i.contentWindow.postMessage(
                    '{"event":"command","func":"playVideo","args":""}',
                    "*"
                  ),
                -1 !== n.indexOf("vimeo"))
              ) {
                var a = new Vimeo.Player(e(i));
                a.play();
              }
              e(t)
                .parents("section")
                .find(e(t).attr("data-modal"))
                .css("display", "table")
                .click(function () {
                  -1 !== n.indexOf("youtu") &&
                    i.contentWindow.postMessage(
                      '{"event":"command","func":"pauseVideo","args":""}',
                      "*"
                    ),
                    -1 !== n.indexOf("vimeo") && a.pause(),
                    e(this).css("display", "none").off("click"),
                    t.parents("section").css("z-index", "0");
                });
            })(e(this));
          });
      }
    }),
    !i && !e.isMobile())
  ) {
    var l = e("section.menu"),
      u = e(window).width();
    l.find(".navbar").hasClass("collapsed") ||
      (u > 991 &&
        (l.find("ul.navbar-nav li.dropdown").hover(
          function () {
            e(this).hasClass("open") || e(this).find("a")[0].click();
          },
          function () {
            e(this).hasClass("open") && e(this).find("a")[0].click();
          }
        ),
        l.find("ul.navbar-nav li.dropdown .dropdown-menu .dropdown").hover(
          function () {
            e(this).hasClass("open") || e(this).find("a")[0].click();
          },
          function () {
            e(this).hasClass("open") && e(this).find("a")[0].click();
          }
        )));
  }
  function h(t) {
    var i = e(t),
      n = i.attr("ID") + "-carousel";
    i.find(".carousel").attr("id", n),
      i.find(".carousel-controls a").attr("href", "#" + n),
      i.find(".carousel-indicators li").attr("data-target", "#" + n),
      (function (t) {
        e(t).find(".carousel-item:first").addClass("active");
      })(i);
  }
  function m(e) {
    e.stopPropagation(), e.preventDefault();
  }
  if (
    ((e.fn.outerFind = function (e) {
      return this.find(e).addBack(e);
    }),
    i ||
      (void 0 === window.initClientPlugin &&
        0 != e(document.body).find(".clients").length &&
        ((window.initClientPlugin = !0),
        e(document.body)
          .find(".clients")
          .each(function (t, i) {
            var n, a, o, s;
            e(this).attr("data-isinit") ||
              (h(e(this)),
              (n = e(this)),
              (a = e(n)),
              (o = a.find(".carousel-item").length),
              (s = a.find(".carousel-inner").attr("data-visible")),
              o < s && (s = o),
              a
                .find(".carousel-inner")
                .attr("class", "carousel-inner slides" + s),
              a.find(".clonedCol").remove(),
              a.find(".carousel-item .col-md-12").each(function () {
                s < 2
                  ? e(this).attr("class", "col-md-12")
                  : "5" == s
                  ? e(this).attr("class", "col-md-12 col-lg-15")
                  : e(this).attr("class", "col-md-12 col-lg-" + 12 / s);
              }),
              a.find(".carousel-item").each(function () {
                for (var t = e(this), i = 1; i < s; i++) {
                  (t = t.next()).length || (t = e(this).siblings(":first"));
                  var n = t.index();
                  t.find(".col-md-12:first")
                    .clone()
                    .addClass("cloneditem-" + i)
                    .addClass("clonedCol")
                    .attr("data-cloned-index", n)
                    .appendTo(e(this).children().eq(0));
                }
              }));
          })),
      void 0 === window.initPopupBtnPlugin &&
        0 != e(document.body).find("section.popup-btn-cards").length &&
        ((window.initPopupBtnPlugin = !0),
        e("section.popup-btn-cards .card-wrapper").each(function (t, i) {
          e(this).addClass("popup-btn");
        })),
      void 0 === window.initTestimonialsPlugin &&
        0 != e(document.body).find(".testimonials-slider").length &&
        ((window.initTestimonialsPlugin = !0),
        e(".testimonials-slider").each(function () {
          h(this);
        })),
      void 0 === window.initSwitchArrowPlugin &&
        ((window.initSwitchArrowPlugin = !0),
        e(document).ready(function () {
          0 != e(".accordionStyles").length &&
            e('.accordionStyles .card-header a[role="button"]').each(
              function () {
                e(this).hasClass("collapsed") || e(this).addClass("collapsed");
              }
            );
        }),
        e('.accordionStyles .card-header a[role="button"]').click(function () {
          var t = e(this).closest(".accordionStyles").attr("id");
          if (
            !e(this)
              .closest(".card")
              .find(".panel-collapse")
              .hasClass("collapsing")
          )
            if (-1 != t.indexOf("toggle"))
              e(this).hasClass("collapsed")
                ? e(this)
                    .find("span.sign")
                    .removeClass("mbri-arrow-down")
                    .addClass("mbri-arrow-up")
                : e(this)
                    .find("span.sign")
                    .removeClass("mbri-arrow-up")
                    .addClass("mbri-arrow-down");
            else if (-1 != t.indexOf("accordion")) {
              e(this)
                .closest(".accordionStyles ")
                .children(".card")
                .each(function () {
                  e(this)
                    .find("span.sign")
                    .removeClass("mbri-arrow-up")
                    .addClass("mbri-arrow-down");
                }),
                e(this).hasClass("collapsed") &&
                  e(this)
                    .find("span.sign")
                    .removeClass("mbri-arrow-down")
                    .addClass("mbri-arrow-up");
            }
        })),
      void 0 === window.initTabsPlugin &&
        ((window.initTabsPlugin = !0),
        (r = document.body),
        0 !== e(r).find(".nav-tabs").length &&
          e(r)
            .outerFind('section[id^="tabs"]')
            .each(function () {
              var t = e(this).attr("id"),
                i = e(this).find(".nav-tabs .nav-item"),
                n = e(this).find(".tab-pane");
              n.removeClass("active").eq(0).addClass("active"),
                i
                  .find("a")
                  .removeClass("active")
                  .removeAttr("aria-expanded")
                  .eq(0)
                  .addClass("active"),
                n.each(function () {
                  e(this).attr("id", t + "_tab" + e(this).index());
                }),
                i.each(function () {
                  e(this)
                    .find("a")
                    .attr("href", "#" + t + "_tab" + e(this).index());
                });
            })),
      0 != e(".mbr-slider.carousel").length &&
        e(".mbr-slider.carousel").each(function () {
          var t = e(this),
            i = t.find(".carousel-control"),
            n = t.find(".carousel-indicators li");
          t.on("slide.bs.carousel", function () {
            i.bind("click", function (e) {
              m(e);
            }),
              n.bind("click", function (e) {
                m(e);
              }),
              t.carousel({ keyboard: !1 });
          }).on("slid.bs.carousel", function () {
            i.unbind("click"),
              n.unbind("click"),
              t.carousel({ keyboard: !0 }),
              t.find(".carousel-item.active").length > 1 &&
                (t.find(".carousel-item.active").eq(1).removeClass("active"),
                t
                  .find(".carousel-control li.active")
                  .eq(1)
                  .removeClass("active"));
          });
        })),
    i)
  )
    e(document).on("add.cards", function (t) {
      if (e(t.target).find(".form-with-styler").length) {
        var i = e(t.target).find(".form-with-styler");
        e(i)
          .find('select:not("[multiple]")')
          .each(function () {
            e(this).styler();
          }),
          e(i)
            .find("input[type=number]")
            .each(function () {
              e(this).styler(),
                e(this).parent().parent().removeClass("form-control");
            }),
          e(i)
            .find("input[type=date]")
            .each(function () {
              e(this).datetimepicker &&
                e(this).datetimepicker({ format: "Y-m-d", timepicker: !1 });
            }),
          e(i)
            .find("input[type=time]")
            .each(function () {
              e(this).datetimepicker &&
                e(this).datetimepicker({ format: "H:i", datepicker: !1 });
            });
      }
    });
  else {
    e("section .form-with-styler").each(function () {
      e(this)
        .find('select:not("[multiple]")')
        .each(function () {
          e(this).styler();
        }),
        e(this)
          .find("input[type=number]")
          .each(function () {
            e(this).styler(),
              e(this).parent().parent().removeClass("form-control");
          }),
        navigator.userAgent.match(/Android/i) ||
          navigator.userAgent.match(/webOS/i) ||
          navigator.userAgent.match(/iPhone/i) ||
          navigator.userAgent.match(/iPad/i) ||
          navigator.userAgent.match(/iPod/i) ||
          navigator.userAgent.match(/BlackBerry/i) ||
          navigator.userAgent.match(/Windows Phone/i) ||
          navigator.userAgent.match(/Firefox/i) ||
          !e(this).datetimepicker ||
          (e(this)
            .find("input[type=date]")
            .each(function () {
              e(this).datetimepicker({ format: "Y-m-d", timepicker: !1 });
            }),
          e(this)
            .find("input[type=time]")
            .each(function () {
              e(this).datetimepicker({ format: "H:i", datepicker: !1 });
            }));
    });
  }
  e(document).on("change", 'input[type="range"]', function (t) {
    e(t.target).parents(".form-group").find(".value")[0].innerHTML =
      t.target.value;
  });
})(jQuery),
  (function () {
    try {
      document
        .getElementsByClassName("engine")[0]
        .getElementsByTagName("a")[0]
        .removeAttribute("rel");
    } catch (e) {}
    if (!document.getElementById("top-1")) {
      var e = document.createElement("section");
      (e.id = "top-1"),
        (e.className = "engine"),
        (e.innerHTML =
          '<a href="https://mobirise.ws">Mobirise Website Builder</a> v5.0.2'),
        document.body.insertBefore(e, document.body.childNodes[0]);
    }
  })();
