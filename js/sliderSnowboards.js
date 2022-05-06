
var swiper = new Swiper(".snowboards__content", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides:true,
  loop:true,
  loopedSliders:5,
  slidesPerView:1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1006:
    {
      slidesPerView:4.5,
      spaceBetween:150,
    },

    555:
    {
      slidesPerView:3.5,
      spaceBetween:70,
    },

    270:
    {
      slidesPerView:2,
      spaceBetween:40,
    },
  },

  sliderToClickedSlide: true,
  keyboard: {
    enabled: true,
  },
});
