function ajax(e, t, n, s, a) {
  var o = new XMLHttpRequest();
  o.open(e, t),
    o.setRequestHeader("Accept", "application/json"),
    (o.onreadystatechange = function () {
      o.readyState === XMLHttpRequest.DONE &&
        (200 === o.status
          ? s(o.response, o.responseType)
          : a(o.status, o.response, o.responseType));
    }),
    o.send(n);
}
window.addEventListener("DOMContentLoaded", function () {
  var e = document.getElementById("my-form"),
    t = document.getElementById("my-form-status");
  function n() {
    e.reset(),
      t.classList.add("success"),
      (t.innerHTML = "Thanks! We Will Soon Get In Touch With You ");
  }
  function s() {
    t.classList.add("error"),
      (t.innerHTML =
        "Oops! There was a problem. Please check the form and try again");
  }
  e.addEventListener("submit", function (t) {
    t.preventDefault();
    var a = new FormData(e);
    ajax(e.method, e.action, a, n, s);
  });
});
