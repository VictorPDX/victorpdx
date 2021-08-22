document.write(`
<!-- JQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

<!-- Local assets -->
<script defer src="js/main.js"></script>
<link rel="stylesheet" href="stylesheets/index.css" />


<!-- include other html components common to multiple pages -->

<script>
  $(function () {
    $("#footer").load("common/_footer.html");
    // failed to behave the same since it was being inserted after the page was loaded
    // $("#navbar").load("_navbar.html");
  });
</script>




<!-- materialize -->

<link
  type="text/css"
  rel="stylesheet"
  href="stylesheets/materialize/css/materialize.min.css"
  media="screen,projection"
/>

<script
  type="text/javascript"
  src="js/materialize/js/materialize.min.js"
></script>

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


<!-- End materialize -->`);
