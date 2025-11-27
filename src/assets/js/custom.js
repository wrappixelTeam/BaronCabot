$(function () {
  // 1. Header Scroll
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 60) {
      $("header").addClass("fixed-header");
    } else {
      $("header").removeClass("fixed-header");
    }
  });

  // 2. Aos
  AOS.init({
    once: true,
  });

  // Initialize all tooltips on the page
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  // 3. Define the Animation Function
  function animateCounter(element, duration = 1500) {
    // Safety check: ensure target exists
    if (!element.getAttribute("data-target")) return;

    const target = parseFloat(element.getAttribute("data-target"));
    let start = 0;
    const stepTime = 10;

    // Prevent division by zero if target is 0
    const increment = target > 0 ? target / (duration / stepTime) : 0;

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      // Formatting: toFixed(1) for decimals, change to (0) for whole numbers
      element.textContent = start.toFixed(1) + "%";
    }, stepTime);
  }

  // 4. Run for ALL counters found on the page
  const allCounters = document.querySelectorAll(".stat-number");

  allCounters.forEach((counter) => {
    animateCounter(counter);
  });

  // banner slider
  $('.banner-slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
      `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 5l-6 7l6 7"/></svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7"/></svg>`,
    ],
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
        items: 3,
      },
      1200: {
        items: 4,
      }
    }
  })

});