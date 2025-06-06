document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    loop: true,
    autoplay: {
      delay: 3000, // 3 seconds between slides
      disableOnInteraction: true, // continues autoplay after user interactions
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
});
