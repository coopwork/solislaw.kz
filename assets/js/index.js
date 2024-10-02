import { heroSlider } from './sliders/hero-slider.js'
import { partnersSlider } from './sliders/partners-slider.js'
import { partnersSliderRtl } from './sliders/partners-slider.js'

document.addEventListener('DOMContentLoaded', () => {
  const slides = {
    heroSlider,
    partnersSlider,
    partnersSliderRtl,
  };


  AOS.init({
    once: true,
  });

  function headerScrollDetector() {
    const headerElement = document.querySelector('.main__header');
    let lastScrollTop = 0;

    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        headerElement.classList.add('shrinked')
      } else {
        headerElement.classList.remove('shrinked')
      }

      let scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop) {
        headerElement.classList.add('hide')
      } else {
        headerElement.classList.remove('hide')
      }

      lastScrollTop = scrollTop;
    });
  }
  headerScrollDetector()

});


