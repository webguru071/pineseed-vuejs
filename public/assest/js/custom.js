(function($) {
  "use strict";

  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 130) {
      $(".site-navigation").addClass("is-sticky");
    } else {
      $(".site-navigation").removeClass("is-sticky");
    }
  });

  /*===================================
     Slider
    =====================================*/

  $(".slider2").slick({
    autoplay: false,
    autoplaySpeed: 1500,
    asNavFor: ".slider3",
    arrows: false,
    dots: true
  });
  $(".slider3").slick({
    autoplay: false,
    autoplaySpeed: 1500,
    asNavFor: ".slider2",
    arrows: false
  });

  $(".logo-slider").owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: false,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2
      },
      360: {
        items: 2
      },
      576: {
        items: 3
      },
      1920: {
        items: 4
      },
      1200: {
        items: 4
      }
    }
  });
})(jQuery);
