const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
export const heroSlider = new Swiper('.hero__slider', {
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  slidesPerView: 1,

  navigation: {
    nextEl: '.hero__slider__button__next',
    prevEl: '.hero__slider__button__prev',
  },

  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      // progressContent.textContent = `${Math.ceil(time / 1000)}`;
    }
  }

});
