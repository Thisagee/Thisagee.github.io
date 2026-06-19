/* ==============================
   SCROLL.JS
   A simple script that highlights
   the active link in the navbar
   as you scroll down the page
============================== */

window.addEventListener('scroll', function () {

  /* Get all sections on the page */
  var sections = document.querySelectorAll('div[id]');

  /* Get all links in the navbar */
  var navLinks = document.querySelectorAll('#nav-links a');

  /* Loop through each section */
  sections.forEach(function (section) {

    /* Find where the section starts and ends */
    var sectionTop = section.offsetTop - 80;
    var sectionBottom = sectionTop + section.offsetHeight;

    /* Check if the user has scrolled to this section */
    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {

      /* Reset all nav links to their default color */
      navLinks.forEach(function (link) {
        link.style.color = '#ccddff';
      });

      /* Highlight the matching nav link */
      var matchingLink = document.querySelector('#nav-links a[href="#' + section.id + '"]');
      if (matchingLink) {
        matchingLink.style.color = 'white';
      }
    }
  });

});
