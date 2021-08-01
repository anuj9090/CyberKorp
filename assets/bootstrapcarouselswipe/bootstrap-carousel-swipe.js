!(function (t) {
  "use strict";
  if (t.fn.carousel) {
    var s = function (i) {
      (this.$element = t(i)),
        (this.carousel = this.$element.data("bs.carousel")),
        (this.options = t.extend({}, s.DEFAULTS, this.carousel.options)),
        (this.startX = this.startY = this.startTime = this.cycling = this.$active = this.$items = this.$next = this.$prev = this.dx = null),
        this.$element
          .on("touchstart", t.proxy(this.touchstart, this))
          .on("touchmove", t.proxy(this.touchmove, this))
          .on("touchend", t.proxy(this.touchend, this));
    };
    (s.DEFAULTS = { swipe: 50 }),
      (s.prototype.touchstart = function (t) {
        if (this.options.swipe) {
          var s = t.originalEvent.touches ? t.originalEvent.touches[0] : t;
          (this.dx = 0),
            (this.startX = s.pageX),
            (this.startY = s.pageY),
            (this.cycling = null),
            (this.width = this.$element.width()),
            (this.startTime = t.timeStamp);
        }
      }),
      (s.prototype.touchmove = function (t) {
        if (this.options.swipe) {
          var s = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
            i = s.pageX - this.startX,
            e = s.pageY - this.startY;
          Math.abs(i) < Math.abs(e) ||
            (null === this.cycling &&
              ((this.cycling = !!this.carousel.interval),
              this.cycling && this.carousel.pause()),
            t.preventDefault(),
            (this.dx = (i / (this.width || 1)) * 100),
            this.swipe(this.dx));
        }
      }),
      (s.prototype.touchend = function (s) {
        if (this.options.swipe && this.$active) {
          var i = t()
              .add(this.$active)
              .add(this.$prev)
              .add(this.$next)
              .carousel_transition(!0),
            e = (s.timeStamp - this.startTime) / 1e3,
            n = Math.abs(this.dx / e);
          this.dx > 40 || (this.dx > 0 && n > this.options.swipe)
            ? this.carousel.prev()
            : this.dx < -40 || (this.dx < 0 && n > this.options.swipe)
            ? this.carousel.next()
            : this.$active
                .one(t.support.transition.end, function () {
                  i.removeClass("prev next");
                })
                .emulateTransitionEnd(
                  1e3 * this.$active.css("transition-duration").slice(0, -1)
                ),
            i.carousel_offset(!1),
            this.cycling && this.carousel.cycle(),
            (this.$active = null);
        }
      }),
      (s.prototype.swipe = function (t) {
        var s = this.$active || this.getActive();
        if (t < 0) {
          if (
            (this.$prev
              .carousel_offset(!1)
              .removeClass("prev")
              .carousel_transition(!0),
            !this.$next.length || this.$next.hasClass("active"))
          )
            return;
          this.$next
            .carousel_transition(!1)
            .addClass("next")
            .carousel_offset(t + 100);
        } else {
          if (
            (this.$next
              .carousel_offset(!1)
              .removeClass("next")
              .carousel_transition(!0),
            !this.$prev.length || this.$prev.hasClass("active"))
          )
            return;
          this.$prev
            .carousel_transition(!1)
            .addClass("prev")
            .carousel_offset(t - 100);
        }
        s.carousel_transition(!1).carousel_offset(t);
      }),
      (s.prototype.getActive = function () {
        return (
          (this.$active = this.$element.find(".item.active")),
          (this.$items = this.$active.parent().children()),
          (this.$next = this.$active.next()),
          !this.$next.length &&
            this.options.wrap &&
            (this.$next = this.$items.first()),
          (this.$prev = this.$active.prev()),
          !this.$prev.length &&
            this.options.wrap &&
            (this.$prev = this.$items.last()),
          this.$active
        );
      });
    var i = t.fn.carousel;
    (t.fn.carousel = function () {
      return (
        i.apply(this, arguments),
        this.each(function () {
          var i = t(this);
          i.data("bs.carousel.swipe") ||
            i.data("bs.carousel.swipe", new s(this));
        })
      );
    }),
      t.extend(t.fn.carousel, i),
      (t.fn.carousel_transition = function (s) {
        return (
          (s = s ? "" : "none"),
          this.each(function () {
            t(this).css("-webkit-transition", s).css("transition", s);
          })
        );
      });
    var e = (function () {
      if (!window.getComputedStyle) return !1;
      var t,
        s = document.createElement("p"),
        i = {
          webkitTransform: "-webkit-transform",
          OTransform: "-o-transform",
          msTransform: "-ms-transform",
          MozTransform: "-moz-transform",
          transform: "transform"
        };
      for (var e in (document.body.insertBefore(s, null), i))
        void 0 !== s.style[e] &&
          ((s.style[e] = "translate3d(1px,1px,1px)"),
          (t = window.getComputedStyle(s).getPropertyValue(i[e])));
      return (
        document.body.removeChild(s),
        void 0 !== t && t.length > 0 && "none" !== t
      );
    })();
    (t.fn.carousel_offset = function (s) {
      return this.each(function () {
        s
          ? e
            ? t(this).css("transform", "translate3d(" + s + "%, 0, 0)")
            : t(this).css("left", s + "%")
          : t(this).css({ transform: "", left: "" });
      });
    }),
      t(".carousel").carousel();
  }
})(jQuery);
