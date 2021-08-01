jQuery(function (a) {
  var s,
    e = ".bs.navbar-dropdown",
    t = {
      COLLAPSE: "collapse" + e,
      CLICK_DATA_API: "click" + e + ".data-api",
      SCROLL_DATA_API: "scroll" + e + ".data-api",
      RESIZE_DATA_API: "resize" + e + ".data-api",
      COLLAPSE_SHOW: "show.bs.collapse",
      COLLAPSE_HIDE: "hide.bs.collapse",
      DROPDOWN_COLLAPSE: "collapse.bs.nav-dropdown"
    },
    o = {
      IN: "in",
      OPENED: "opened",
      BG_COLOR: "bg-color",
      DROPDOWN_OPEN: "navbar-dropdown-open",
      SHORT: "navbar-short"
    },
    O = {
      BODY: "body",
      BASE: ".navbar-dropdown",
      TOGGLER: '.navbar-toggler[aria-expanded="true"]',
      TRANSPARENT: ".transparent",
      FIXED_TOP: ".navbar-fixed-top"
    };
  a(window)
    .on(t.SCROLL_DATA_API + " " + t.RESIZE_DATA_API, function (e) {
      clearTimeout(s),
        (s = setTimeout(function () {
          !(function (s) {
            "resize" === s.type &&
              (a(O.BODY).removeClass(o.DROPDOWN_OPEN),
              a(O.BASE).find(".navbar-collapse").removeClass("show"),
              a(O.BASE)
                .removeClass(o.OPENED)
                .find(O.TOGGLER)
                .each(function () {
                  a(a(this).attr("data-target"))
                    .removeClass(o.IN)
                    .add(this)
                    .attr("aria-expanded", "false");
                }));
            var e = a(this).scrollTop();
            a(O.BASE).each(function () {
              a(this).is(O.FIXED_TOP) &&
                (a(this).is(O.TRANSPARENT) &&
                  !a(this).hasClass(o.OPENED) &&
                  (e > 0
                    ? a(this).removeClass(o.BG_COLOR)
                    : a(this).addClass(o.BG_COLOR)),
                e > 0
                  ? a(this).addClass(o.SHORT)
                  : a(this).removeClass(o.SHORT));
            });
          })(e);
        }, 10));
    })
    .trigger(t.SCROLL_DATA_API),
    a(document)
      .on(t.CLICK_DATA_API, O.BASE, function (a) {
        a.targetWrapper = this;
      })
      .on(t.COLLAPSE_SHOW + " " + t.COLLAPSE_HIDE, function (s) {
        a(s.target)
          .closest(O.BASE)
          .each(function () {
            "show" == s.type
              ? (a(O.BODY).addClass(o.DROPDOWN_OPEN),
                a(this).addClass(o.OPENED))
              : (a(O.BODY).removeClass(o.DROPDOWN_OPEN),
                a(this).removeClass(o.OPENED),
                a(window).trigger(t.SCROLL_DATA_API),
                a(this).trigger(t.COLLAPSE));
          });
      })
      .on(t.DROPDOWN_COLLAPSE, function (s) {
        a(s.relatedTarget).closest(O.BASE).find(O.TOGGLER).trigger("click");
      });
});
