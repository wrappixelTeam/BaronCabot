$(function () {

  // banner slider
  $('.banner-slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
      `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 5l-6 7l6 7"/></svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7"/></svg>`,
    ],
    responsive: {
      0: {
        nav: false,
      },
      600: {
        nav: true,
      }
    }
  })

  // gallery slider
  $('.gallery-slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 40,       // Space between images
    nav: false,       // Turn off arrows if you want a clean look like the design
    dots: true,       // Optional: Add dots at the bottom

    // RESPONSIVE CONFIGURATION
    responsive: {
      // Mobile: Show 1 full item with small peek
      0: {
        items: 1,
        stagePadding: 40
      },
      // Tablet: Transition
      600: {
        items: 1,
        stagePadding: 80
      },
      // Desktop: Show 2 Complete items + Half on both sides
      1000: {
        items: 2,          // The 2 complete images
        stagePadding: 100, // This pixel value forces the "half" view on edges
        center: false      // Keep false to align the 2 items correctly with padding
      }
    }
  })

  // construction update slider
  $('.construction-update-slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  })


  // our customers slider
  $('.our-customers-slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 8,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
      1200: {
        items: 4,
      }
    }
  })

  // scroll



  // Get all sections that have an ID defined
  const sections = document.querySelectorAll("section[id]");

  // Add an event listener listening for scroll
  window.addEventListener("scroll", navHighlighter);

  function navHighlighter() {

    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 150;
      sectionId = current.getAttribute("id");

      /*
      - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
      - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
      */
      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
      ) {
        document.querySelector(".nav-pills a[href*=" + sectionId + "]").classList.add("active");
      } else {
        document.querySelector(".nav-pills a[href*=" + sectionId + "]").classList.remove("active");
      }
    });
  }

});