$(document).on("click", ".panel-heading", function (event) {
      event.preventDefault();
      $(this).next(".panel-content").slideToggle();
});
