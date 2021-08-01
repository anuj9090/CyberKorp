function setActiveCarouselItem(t) {
  $(t).find(".carousel-item:first").addClass("active");
}
function initTestimonialsCarousel(t) {
  var e = $(t),
    i = e.attr("ID") + "-carousel";
  e.find(".carousel").attr("id", i),
    e.find(".carousel-controls a").attr("href", "#" + i),
    e.find(".carousel-indicators li").attr("data-target", "#" + i),
    setActiveCarouselItem(e);
}
function initClientCarousel(t) {
  var e = $(t),
    i = e.find(".carousel-item").length,
    n = e.find(".carousel-inner").attr("data-visible");
  i < n && (n = i),
    e.find(".carousel-inner").attr("class", "carousel-inner slides" + n),
    e.find(".clonedCol").remove(),
    e.find(".carousel-item .col-md-12").each(function () {
      n < 2
        ? $(this).attr("class", "col-md-12")
        : "5" == n
        ? $(this).attr("class", "col-md-12 col-lg-15")
        : $(this).attr("class", "col-md-12 col-lg-" + 12 / n);
    }),
    e.find(".carousel-item").each(function () {
      for (var t = $(this), e = 1; e < n; e++) {
        (t = t.next()).length || (t = $(this).siblings(":first"));
        var i = t.index();
        t.find(".col-md-12:first")
          .clone()
          .addClass("cloneditem-" + e)
          .addClass("clonedCol")
          .attr("data-cloned-index", i)
          .appendTo($(this).children().eq(0));
      }
    });
}
function updateClientCarousel(t) {
  var e = $(t),
    i = e.find(".carousel-item").length,
    n = e.find(".carousel-inner").attr("data-visible");
  i < n && (n = i),
    e.find(".clonedCol").remove(),
    e.find(".carousel-item").each(function () {
      for (var t = $(this), e = 1; e < n; e++) {
        (t = t.next()).length || (t = $(this).siblings(":first"));
        var i = t.index();
        t.find(".col-md-12:first")
          .clone()
          .addClass("cloneditem-" + e)
          .addClass("clonedCol")
          .attr("data-cloned-index", i)
          .appendTo($(this).children().eq(0));
      }
    });
}
function clickHandler(t) {
  t.stopPropagation(), t.preventDefault();
  var e,
    i = $(t.target);
  e = i.closest(".clonedCol").length
    ? i.closest(".clonedCol").attr("data-cloned-index")
    : i.closest(".carousel-item").index();
  var n = $(i.closest(".carousel-inner").find(".carousel-item")[e]).find(
    "img"
  )[0];
  i.parents(".clonedCol").length > 0 && n.click();
}
var isBuilder = $("html").hasClass("is-builder");
isBuilder
  ? $(document)
      .on("add.cards", function (t) {
        $(t.target).hasClass("clients") &&
          (initTestimonialsCarousel(t.target),
          initClientCarousel(t.target),
          "add" === t.type &&
            $(t.target).on("slide.bs.carousel", function () {
              updateClientCarousel(t.target);
            }),
          $(t.target)
            .find(".carousel-item [mbr-media]")
            .on("click", function (t) {
              clickHandler(t);
            }),
          $(t.target).on("slide.bs.carousel", function () {
            $(t.target)
              .find(".carousel-item .clonedCol [mbr-media]")
              .off("click")
              .on("click", function (t) {
                clickHandler(t);
              });
          }));
      })
      .on("changeParameter.cards", function (t, e, i) {
        "slidesCount" == e &&
          0 == $(t.target).find(".carousel-item.active").length &&
          setActiveCarouselItem(t.target),
          initClientCarousel(t.target),
          updateClientCarousel(t.target),
          $(t.target)
            .find(".carousel-item [mbr-media]")
            .on("click", function (t) {
              clickHandler(t);
            }),
          $(t.target).on("slide.bs.carousel", function () {
            $(t.target)
              .find(".carousel-item .clonedCol [mbr-media]")
              .off("click")
              .on("click", function (t) {
                clickHandler(t);
              });
          });
      })
      .on("changeContent.cards", function (t, e) {
        updateClientCarousel(t.target);
        try {
          $(t.target).closest(".carousel").carousel("next");
        } catch (t) {}
      })
  : void 0 === window.initClientPlugin &&
    ((window.initClientPlugin = !0),
    $(document.body)
      .find(".clients")
      .each(function (t, e) {
        $(this).attr("data-isinit") ||
          (initTestimonialsCarousel($(this)), initClientCarousel($(this)));
      }));
