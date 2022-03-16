// Open menu
$("#menu-toggle").click(function () {
  $("#menu").addClass("is-show");
});

// Close menu when click outside
$("html").click(function () {
  $("#menu").removeClass("is-show");
});
$("#menu-toggle").click(function (event) {
  event.stopPropagation();
});

let scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

// Change header style when scroll
let header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});
