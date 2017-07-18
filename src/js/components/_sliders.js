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
  slidesToShow: 3,
  responsive: [{
    breakpoint: 1023,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
}));

$aboutSlider.slick($.extend({}, aboutSldDefaults, {
  slidesToShow: 4,
  responsive: [{
    breakpoint: 1599,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 1023,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
}));

// plan look
const $planLook = $('.js-plan-look');
const $status = $('.js-status');

$planLook.on('init reInit afterChange', (event, slick, currentSlide, nextSlide) => {
  const i = (currentSlide || 0) + 1;
  $status.text(i);
});

$planLook.slick({
  slidesToScroll: 1,
  slidesToShow: 1,
  vertical: true,
  draggable: false,
  infinite: false,
  prevArrow: '<button type="button" class="plan__look-btn plan__look-btn_prev"><svg class="plan__look-btn-icon icon-sld-arr"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-sld-arr"></use></svg></button>',
  nextArrow: '<button type="button" class="plan__look-btn plan__look-btn_next"><svg class="plan__look-btn-icon icon-sld-arr"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-sld-arr"></use></svg></button>'
});