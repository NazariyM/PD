/* eslint-disable no-trailing-spaces */
initTechMap();

function initTechMap() {
  const $techMap = $('.js-tech-map');
  const $techMapDot = $techMap.find('.tech-map__dot');

  $techMapDot.on('click', function (ev) {
    const $this = $(this);
    const $techMapDots = $this.siblings();
    const $techMapInfo = $this.find('.tech-map__info');

    ev.stopPropagation();
    $this.addClass('is-active');
    $techMapDots.removeClass('is-active');
    $techMapDots.find('.tech-map__info').slideUp(200);
    $techMapInfo.slideDown(300);

    $techMap.on('click', function () {
      $this.removeClass('is-active');
      $techMapInfo.slideUp(200);
    });
  });
}