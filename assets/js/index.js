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


});


