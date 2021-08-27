"use strict";

//  menu
$(function () {
  $('.menu-toggle').click(function () {
    $('nav').toggleClass('active');
  });
}); //右側聯絡我們，捲動到底隱藏

$(window).scroll(function () {
  if ($(this).scrollTop() > 3000) {
    $('.contact').fadeOut();
  } else {
    $('.contact').fadeIn();
  }
}); //師資，滑過顯示對應圖片

$(function () {
  $('ul.tabs li').hover(function () {
    var tab_id = $(this).attr('data-tab');
    $('.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  });
}); //課程介紹，滑過停留

$(function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    breakpoints: {
      '768': {
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column'
      }
    },
    slidesPerView: 2,
    freeMode: true,
    //默認為false;設置為true則變為free模式，slide會根據慣性滑動可能不止一格且不會貼合。
    resistance: false,
    //邊緣抵抗，值為false時禁用，將slide拖離邊緣時完全沒有抗力。
    speed: 3000,
    //速度
    spaceBetween: 30,
    grabCursor: true,
    //顯示掌型
    loop: true,
    loopFillGroupWithBlank: true,
    //在loop模式下，為group填充空白slide
    autoplay: {
      delay: 1000,
      disableOnInteraction: false //設置false，用戶操作swiper之後自動切換不會停止，每次都會重新啟動autoplay

    }
  });
}); //推薦mySwiper

$(function () {
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    slidesPerColumn: 3,
    slidesPerColumnFill: "row",
    slidesPerGroup: 6,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerColumn: 3,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30
      }
    }
  });
});
//# sourceMappingURL=all.js.map
