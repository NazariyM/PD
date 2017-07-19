import { BODY, WINDOW } from '../helpers';

initChoice();

function initChoice() {
  const $floorSvg = $('.js-floor-svg');


// check width for IE/Edge and apply it to svg
  function checkWidth() {
    const width = WINDOW.width();
    const height = WINDOW.height();

    if (width > 320 && height < 1080) {
      $floorSvg.attr('width', width);
      $floorSvg.attr('height', height);
    }
  }

  function detectIE() {
    const ua = window.navigator.userAgent;

    const msie = ua.indexOf('MSIE');
    const trident = ua.indexOf('Trident/');

    if (msie > 0 || trident > 0) {
      WINDOW.on('resize', checkWidth);
    }
    return false;
  }
  detectIE();
}
