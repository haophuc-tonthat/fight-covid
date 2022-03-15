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
