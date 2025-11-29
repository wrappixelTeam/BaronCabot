$(function () {


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


  // Contact Info slider
  $('.contact-info-slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    items:1,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  })

});