import 'lazysizes';
import siteHeader from './modules/site-header';
import allclick from './modules/allclick';
import modal from './modules/modal';
import searchModal from './modules/search-modal';
import swiper from './modules/swipers';
// FIXME import stickyHeader from './modules/sticky-header';

siteHeader.init(); 
allclick.init();
modal.init(); 
swiper.init();

// dynamic imports - swipers
if (document.querySelectorAll('[data-swiper]').length > 0) {
  import(/* webpackChunkName: "swipers" */ './modules/swipers').then(swipers => {
    swipers = swipers.default;

    if (document.querySelectorAll('[data-swiper="hero"]').length > 0) {
      let slider = Array.from(document.querySelectorAll('[data-swiper="hero"]'));
      slider.forEach((item) => {
        swipers.initHeroSlider();
      });
    }
    if (document.querySelectorAll('[data-swiper="cards"]').length > 0) {
      let slider = Array.from(document.querySelectorAll('[data-swiper="cards"]'));
      slider.forEach((item) => {
        swipers.initCardSlider();
      });
    }
    if (document.querySelectorAll('[data-swiper="image-carousel"]').length > 0) {
      let slider = Array.from(document.querySelectorAll('[data-swiper="image-carousel"]'));
      slider.forEach((item) => {
        swipers.initCarousel();
      });
    }
    if (document.querySelectorAll('[data-swiper="video-carousel"]').length > 0) {
      let slider = Array.from(document.querySelectorAll('[data-swiper="video-carousel"]'));
      slider.forEach((item) => {
        swipers.initVideogallery();
      });
    }
  });
}