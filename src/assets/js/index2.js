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

});