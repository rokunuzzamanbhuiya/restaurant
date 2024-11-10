(function ($) {
  ("use strict");

  /*
  Template Name: Restaurant Website - Taste The Authentic Saudi Cuisine
  Author: Rokunuzzaman Bhuiya
  Description: Restaurant Website - Taste The Authentic Saudi Cuisine
  File Description: Main JS file of the template
*/

  // var windowOn = $(window);

  // windowOn.on("load", function () {
  //   wowAnimation();
  // });

  /*=============================================
	=    		Preloader			      =
=============================================*/
  function preloader() {
    $("#preloader").delay(0).fadeOut();
  }

  $(window).on("load", function () {
    preloader();
  });

  /*=============================================
	=        Mouse Active          =
=============================================*/
  $(".slider-drag").on("mouseenter", function () {
    $(".mouseCursor").addClass("cursor-big");
  });
  $(".slider-drag").on("mouseleave", function () {
    $(".mouseCursor").removeClass("cursor-big");
  });

  $("a,.sub-menu,button").on("mouseenter", function () {
    $(".mouseCursor").addClass("opacity-0");
  });
  $("a,.sub-menu,button").on("mouseleave", function () {
    $(".mouseCursor").removeClass("opacity-0");
  });

  //Mouse Custom Cursor
  function itCursor() {
    var myCursor = jQuery(".mouseCursor");
    if (myCursor.length) {
      if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          $("body").on("mouseenter", "button, a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
          }),
          $("body").on("mouseleave", "button, a, .cursor-pointer", function () {
            ($(this).is("a", "button") &&
              $(this).closest(".cursor-pointer").length) ||
              (e.classList.remove("cursor-hover"),
              t.classList.remove("cursor-hover"));
          }),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
  }
  itCursor();

  /*=============================================
	=    		3. Mobile Menu			      =
=============================================*/

  // offcanvas toogle
  $(".ts-offcanvas-toogle").on("click", function () {
    $(".ts-offcanvas").addClass("ts-offcanvas-open");
    $(".ts-offcanvas-overlay").addClass("ts-offcanvas-overlay-open");
  });
  $(".ts-offcanvas-close-toggle,.ts-offcanvas-overlay,.ts-click-close").on(
    "click",
    function () {
      $(".ts-offcanvas").removeClass("ts-offcanvas-open");
      $(".ts-offcanvas-overlay").removeClass("ts-offcanvas-overlay-open");
    }
  );

  // mobile menu
  var tsMenuWrap = $(".ts-mobile-menu-active > ul").clone();
  var tsSideMenu = $(".ts-offcanvas-menu nav");
  tsSideMenu.append(tsMenuWrap);
  if ($(tsSideMenu).find(".sub-menu, .ts-mega-menu").length != 0) {
    $(tsSideMenu)
      .find(".sub-menu, .ts-mega-menu")
      .parent()
      .append(
        '<button class="ts-menu-close"><i class="fas fa-chevron-right"></i></button>'
      );
  }

  var sideMenuList = $(
    ".ts-offcanvas-menu nav > ul > li button.ts-menu-close, .ts-offcanvas-menu nav > ul li.has-dropdown > a"
  );
  $(sideMenuList).on("click", function (e) {
    e.preventDefault();
    if (!$(this).parent().hasClass("active")) {
      $(this).parent().addClass("active");
      $(this).siblings(".sub-menu, .ts-mega-menu").slideDown();
    } else {
      $(this).siblings(".sub-menu, .ts-mega-menu").slideUp();
      $(this).parent().removeClass("active");
    }
  });

  /*=============================================
  	=    Menu sticky & Scroll to top      =
  =============================================*/
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $("#ts-sticky-header").removeClass("ts-sticky-menu");
      // $(".scroll-to-target").removeClass("open");
    } else {
      $("#ts-sticky-header").addClass("ts-sticky-menu");
      // $(".scroll-to-target").addClass("open");
    }
  });

  /*=============================================
  	=    Scroll to top      =
  =============================================*/
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".scroll-to-target").removeClass("open");
    } else {
      $(".scroll-to-target").addClass("open");
    }
  });

  /*=============================================
  	=    		Scroll Up  	         =
  =============================================*/
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  }

  /*=============================================
	=       Data Background Image 		      =
=============================================*/
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

  /*=============================================
	=       Data Background Color 		      =
=============================================*/
  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });

  /*=============================================
	=       Data Color 		      =
=============================================*/
  $("[data-color]").each(function () {
    $(this).css("color", $(this).attr("data-color"));
  });

  /*=============================================
  	=  Testimonial Swiper Slider Active		=
  =============================================*/

  // testimonial slider
  var swiper = new Swiper(".ts-testimonial-active", {
    slidesPerView: 1,
    spaceBetween: 30,

    paginationClickable: true,
    mousewheelControl: true,
    loop: true,
    speed: 700,
    // watchSlidesProgress: true,

    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // mousewheel: {
    //   invert: true,
    // },
    autoplay: {
      delay: 6000,
    },
    navigation: {
      nextEl: ".ts-swiper-test-button-next",
      prevEl: ".ts-swiper-test-button-prev",
    },
  });

  /*=============================================
	=    		Magnific Popup		      =
=============================================*/
  /* magnificPopup image view */
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: false,
    },
  });

  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe",
  });
})(jQuery);
