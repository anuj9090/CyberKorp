function setActiveCarouselItem(i) {
  $(i).find(".carousel-item:first").addClass("active");
}
function initTestimonialsCarousel(i) {
  var t = $(i),
    e = t.attr("ID") + "-carousel";
  t.find(".carousel").attr("id", e),
    t.find(".carousel-controls a").attr("href", "#" + e),
    t.find(".carousel-indicators li").attr("data-target", "#" + e),
    setActiveCarouselItem(t);
}
var isBuilder = $("html").hasClass("is-builder");
isBuilder
  ? $(document)
      .on("add.cards", function (i) {
        $(i.target).hasClass("testimonials-slider") &&
          initTestimonialsCarousel(i.target);
      })
      .on("changeParameter.cards", function (i, t, e) {
        "testimonialsSlides" === t &&
          0 == $(i.target).find(".carousel-item.active").length &&
          setActiveCarouselItem(i.target);
      })
  : void 0 === window.initTestimonialsPlugin &&
    ((window.initTestimonialsPlugin = !0),
    $(".testimonials-slider").each(function () {
      initTestimonialsCarousel(this);
    }));
