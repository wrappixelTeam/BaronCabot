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

});