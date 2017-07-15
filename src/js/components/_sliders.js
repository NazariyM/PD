import slick from 'slick-carousel';

const $aboutConceptSlider = $('.js-about-concept-slider');
const $aboutSlider = $('.js-about-slider');

const aboutSldDefaults = {
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToScroll: 1,
  speed: 500
};

$aboutConceptSlider.slick($.extend({}, aboutSldDefaults, {
  slidesToShow: 3
}));

$aboutSlider.slick($.extend({}, aboutSldDefaults, {
  slidesToShow: 4
}));


