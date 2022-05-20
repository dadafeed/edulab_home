// 메인페이지 js

// 상단 띠 배너
const bannerClose = function () {
  $('.top-banner .top-banner__button').bind("click", function () {
    $('.top-banner').animate({ height: 0 }, 500);
  });
};
$(function ($) {
  bannerClose();
});

// 하트 버튼 토글
const toggleBtns = document.querySelectorAll('.empty-heart');
toggleBtns.forEach(function (el) {
  el.addEventListener("click", function () {
    el.classList.toggle('on')
  });
});

// 모바일 메인 슬라이더 slick
$('.main-slider').slick({
  autoplay: true,
  autoplaySpeed: 1800,
  infinite: true,
  dots: true,
  fade: true,
});

// pc 메인 슬라이더
(function ($) {
  "use strict";
  var swiper = new Swiper(".mainFirst", {
    observer: true,
    observeParents: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    }
  });
}(jQuery));

(function ($) {
  "use strict";
  var swiper = new Swiper(".mainSecond", {
    observer: true,
    observeParents: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    }
  });
}(jQuery));

(function ($) {
  "use strict";
  var swiper = new Swiper(".mainThird", {
    observer: true,
    observeParents: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    }
  });
}(jQuery));

// pc 벨트 배너 슬라이더
(function ($) {
  "use strict";
  var swiper = new Swiper(".beltBanner", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".belt-btn-next",
      prevEl: ".belt-btn-prev",
    },
  });
}(jQuery));

// 모바일 벨트 배너 슬라이더 swiper
var swiper = new Swiper(".mBeltBanner", {
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 과목별 강의 - 카드형 캐러셀 01
(function ($) {
  "use strict";
  var swiper = new Swiper('.subFirst', {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.subFirst-btn-next',
      prevEl: '.subFirst-btn-prev',
    },
  });
}(jQuery));

$('.subFirst-btn-next').removeClass('swiper-button-lock');
$('.subFirst-btn-next').removeClass('swiper-button-disabled');
$('.subFirst-btn-prev').removeClass('swiper-button-lock');

// 과목별 강의 - 카드형 캐러셀 02
(function ($) {
  "use strict";
  var swiper = new Swiper('.subSecond', {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.subSecond-btn-next',
      prevEl: '.subSecond-btn-prev',
    },
  });
}(jQuery));

$('.subSecond-btn-next').removeClass('swiper-button-lock');
$('.subSecond-btn-next').removeClass('swiper-button-disabled');
$('.subSecond-btn-prev').removeClass('swiper-button-lock');

// 과목별 강의 - 카드형 캐러셀 03
(function ($) {
  "use strict";
  var swiper = new Swiper('.subThird', {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.subThird-btn-next',
      prevEl: '.subThird-btn-prev',
    },
  });
}(jQuery));

$('.subThird-btn-next').removeClass('swiper-button-lock');
$('.subThird-btn-next').removeClass('swiper-button-disabled');
$('.subThird-btn-prev').removeClass('swiper-button-lock');

// 과목별 강의 - 카드형 캐러셀 04
(function ($) {
  "use strict";
  var swiper = new Swiper('.subFourth', {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.subFourth-btn-next',
      prevEl: '.subFourth-btn-prev',
    },
  });
}(jQuery));

$('.subFourth-btn-next').removeClass('swiper-button-lock');
$('.subFourth-btn-next').removeClass('swiper-button-disabled');
$('.subFourth-btn-prev').removeClass('swiper-button-lock');

// 과목별 강의 - 카드형 캐러셀 05
(function ($) {
  "use strict";
  var swiper = new Swiper('.subFifth', {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.subFifth-btn-next',
      prevEl: '.subFifth-btn-prev',
    },
  });
}(jQuery));

$('.subFifth-btn-next').removeClass('swiper-button-lock');
$('.subFifth-btn-next').removeClass('swiper-button-disabled');
$('.subFifth-btn-prev').removeClass('swiper-button-lock');