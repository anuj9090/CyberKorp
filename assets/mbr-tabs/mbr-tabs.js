function updateId(i) {
  0 !== $(i).find(".nav-tabs").length &&
    $(i)
      .outerFind('section[id^="tabs"]')
      .each(function () {
        var i = $(this).attr("id"),
          t = $(this).find(".nav-tabs .nav-item"),
          a = $(this).find(".tab-pane");
        a.removeClass("active").eq(0).addClass("active"),
          t
            .find("a")
            .removeClass("active")
            .removeAttr("aria-expanded")
            .eq(0)
            .addClass("active"),
          a.each(function () {
            $(this).attr("id", i + "_tab" + $(this).index());
          }),
          t.each(function () {
            $(this)
              .find("a")
              .attr("href", "#" + i + "_tab" + $(this).index());
          });
      });
}
$.fn.outerFind = function (i) {
  return this.find(i).addBack(i);
};
var isBuilder = $("html").hasClass("is-builder");
isBuilder
  ? $(document).on("add.cards", function (i) {
      updateId(i.target);
    })
  : void 0 === window.initTabsPlugin &&
    ((window.initTabsPlugin = !0),
    console.log("init tabs by plugin"),
    updateId(document.body));
