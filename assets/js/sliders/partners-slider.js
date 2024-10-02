const partnersElement = document.querySelector('.partners__sliders__block');
const partnersSliderElement = partnersElement.querySelector('.partners__slider');
const partnersSlidesCount = partnersSliderElement.querySelectorAll('.swiper-slide')?.length;

const partnersSliderRtlElement = partnersSliderElement.cloneNode(true);

partnersSliderRtlElement.classList.remove('partners__slider');
partnersSliderRtlElement.classList.add('partners__slider__rtl');

partnersElement.appendChild(partnersSliderRtlElement);

const options = {
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  slidesPerView: partnersSlidesCount <= 2 ? partnersSlidesCount - 1 : 1,
  spaceBetween: 2,
  breakpoints: {
    640: {
      slidesPerView: partnersSlidesCount <= 2 ? partnersSlidesCount - 1 : 2,
      spaceBetween: 2,
    },
    768: {
      slidesPerView: partnersSlidesCount <= 4 ? partnersSlidesCount - 1 : 4,
      spaceBetween: 4,
    },
    1024: {
      slidesPerView: partnersSlidesCount <= 5 ? partnersSlidesCount - 1 : 5,
      spaceBetween: 5,
    },
  },
}


export const partnersSlider = new Swiper(".partners__slider", options);
export const partnersSliderRtl = new Swiper(".partners__slider__rtl", options);

partnersSliderRtl?.changeLanguageDirection('rtl');