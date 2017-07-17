/* eslint-disable no-trailing-spaces */
initParkingBlock();

function initParkingBlock() {
  const $parkingScheme = $('.js-parking-scheme');
  const $parkingSchemeItem = $parkingScheme.find('.parking__scheme-item');
  const $parkingInfo = $('.js-parking-info');
  const $status = $('.js-floor-status');

  $parkingScheme.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    const i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i);

  });
  $parkingScheme.on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $parkingInfo.fadeOut(500, function () {
      $(this).removeClass('is-visible').removeAttr('style');
      $('.parking__place').removeClass('is-active');
    });
  });

  $parkingScheme.slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    fade: true,
    draggable: false,
    infinite: false,
    prevArrow: '<button type="button" class="parking__scheme-btn parking__scheme-btn_prev"><svg class="parking__scheme-btn-icon icon-sld-arr"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-sld-arr"></use></svg></button>',
    nextArrow: '<button type="button" class="parking__scheme-btn parking__scheme-btn_next"><svg class="parking__scheme-btn-icon icon-sld-arr"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-sld-arr"></use></svg></button>'
  });

  $parkingSchemeItem.each(function () {
    const $this = $(this);
    const $parkingPlace = $this.find('.parking__place');

    $parkingPlace.on('click', function (event) {
      event.preventDefault();
      const $that = $(this);
      const placeNumber = $that.index() + 1;
      const placeArea = $that.attr('data-place-area');
      const placePrice = $that.attr('data-place-price');
      const parkingPlace = $('.js-parking-place');
      const parkingArea = $('.js-parking-area');
      const parkingPrice = $('.js-parking-price');

      $parkingInfo.addClass('is-visible');
      $that.addClass('is-active').siblings().removeClass('is-active');

      parkingPlace.text(placeNumber);
      parkingArea.text(placeArea);
      parkingPrice.text(placePrice);

    });
  });
}