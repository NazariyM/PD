/* eslint-disable no-trailing-spaces,one-var,prefer-const */
import { BODY, WINDOW } from '../helpers';

initFloorChoice();

function initFloorChoice() {
  const $svg = $('.js-floor-svg');
  // if (!$floorSvg.length) return;

  let $path = $svg.find('path'),
    href = $svg.data('href'),
    extension = $svg.data('extension');

  showPathTooltip();
  hrefPath();

  function showPathTooltip() {
    let tooltip,
      offset = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ];

    $path.on('mouseenter', function () {
      let $this = $(this),
        positionX = $this[0].getBoundingClientRect().left - $svg.offset().left,
        positionY = $this[0].getBoundingClientRect().top + $(window).scrollTop() - $svg.offset().top;

      tooltip = $(`<div class="floors__tooltip" style="display: none;" data-floor="${$this.data('floor')}">
<div class="floors__tooltip-block">
  <span class="floors__tooltip-count">${$this.data('floor')}</span>
  <div class="floors__tooltip-text">этаж</div>
</div>
<div class="floors__tooltip-block">
  <span class="floors__tooltip-count">${$this.data('sale')}</span>
  <div class="floors__tooltip-text">в продаже</div>
</div>
</div>`);
      tooltip
        .insertBefore($svg)
        .css({
          top: positionY + +offset[$this.data('floor')],
          left: positionX - tooltip.outerWidth() + 700
        })
        .fadeIn(250);
    });

    $path.on('mouseleave', () => {
      tooltip.fadeOut(250, function () {
        $(this).remove();
      });
    });
  }

  function hrefPath() {
    $path.on('click', function () {
      window.location.href = href + $(this).data('floor') + '.html';
      // if (typeof extension !== 'undefined') {
      //   window.location.href = href + $(this).data('floor') + extension;
      // }
    });
  }
}
