$(document).ready(function () {
  $(".btn-close").click(function () {
    $(".menu-items").slideToggle();
    $(".icon").toggleClass("open");
  });
});

// header slider
$(function () {
  $("audio").audioPlayer();
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    // slideBy:3,
    center: true,
    lazyLoad: true,
    mouseDrag: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
});
// music-play slider
$(document).ready(function () {
  $(".owl-carousel2").owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    // slideBy:3,
    center: true,
    lazyLoad: true,
    mouseDrag: true,
    nav: true,
    autoplay: false,
    // autoplayTimeout:5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      580: {
        items: 4,
      },

      780: {
        items: 5,
      },
    },
  });
});
$(document).ready(function () {
  $(".icon-star-form").click(function () {
    $(this).toggleClass("star-active");
  });
  $(".form-btn").click(function () {
    alert("نظر شما با موفقیت ثبت شد !!!");
  });
});

$(document).ready(function () {
  $(".dark").click(function (e) {
    e.preventDefault();
    $("body").toggleClass("dark-them");
    $(".dark").toggleClass("light");
  });
});
$(document).ready(function () {
  $(".notVeiw").click(function () {
    if ($("#pass").attr("type") === "password") {
      $("#pass").attr("type", "text");
      $(".notVeiw").addClass("veiw");
    } else {
      $("#pass").attr("type", "password");
      $(".notVeiw").removeClass("veiw");
    }
  });
});
