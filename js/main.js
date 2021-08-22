// uses to initialize and set current page as the active class for the navbar
$(document).ready(function () {
  M.updateTextFields();
  var $listItems = $("ul.navbar li");

  $listItems.click(function () {
    console.log($(this));
    $listItems.removeClass("active");
    $(this).addClass("active");
  });
});

// https://materializecss.com/navbar.html
// Initialization
// After including the sidenav-trigger line into your navbar, all you have to do now initialize the plugin.
$(document).ready(function () {
  $(".sidenav").sidenav();
});
