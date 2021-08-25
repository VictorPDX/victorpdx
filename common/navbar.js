// https://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file
document.write(`
<!-- Navbar -->
<!-- https://materializecss.com/navbar.html -->
<nav class="purple darken-3 navbar-fixed">
  <div class="nav-wrapper">
    <!-- Mobile Collapse Button -->
    <a href="#" data-target="mobile-demo" class="sidenav-trigger">
      <i class="material-icons">menu</i></a
    >

    <ul class="left hide-on-med-and-down navbar">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About Me</a></li>
      <li><a href="work.html">My Work</a></li>
      <li><a href="school.html">My Projects</a></li>
      <li><a href="contact.html">Conact Me</a></li>
    </ul>
  </div>
</nav>
<!-- End Navbar -->

<!-- Side-Nav -->
<!-- mobile collapse button target -->
<ul class="sidenav  navbar" id="mobile-demo">
  <li><a href="index.html">Home</a></li>
  <li><a href="about.html">About Me</a></li>
  <li><a href="work.html">My Work</a></li>
  <li><a href="school.html">My Projects</a></li>
  <li><a href="contact.html">Conact Me</a></li>
</ul>
<!-- End Side-Nav -->

`);
