/* eslint-disable no-trailing-spaces,one-var,prefer-const */
import { BODY, WINDOW } from '../helpers';

initFloorChoice();

function initFloorChoice() {
  const $svg = $('.js-floor-svg');
  const $genPlanSvg = $('.js-gen-plan-svg');

  if (!$svg.length) return;

  let $path = $svg.find('path'),
    href = $svg.data('href'),
    extension = $svg.data('extension'),
    $genPlanPath = $genPlanSvg.find('path'),
    genPlanExtension = $genPlanSvg.data('extension'),
    tooltipText = $svg.data('tip-text');

  showPathTooltip();
  hrefPath();
  hrefGenPlan();

  function showPathTooltip() {
    let tooltip;

    $path.on('mouseenter', function () {
      const $this = $(this);

      tooltip = $(`<div class="floors__tooltip" style="display: none;" data-floor="${$this.data('floor')}">
<div class="floors__tooltip-block">
  <span class="floors__tooltip-count">${$this.data('floor')}</span>
  <div class="floors__tooltip-text">${tooltipText}</div>
</div>
<div class="floors__tooltip-block">
  <span class="floors__tooltip-count">${$this.data('sale')}</span>
  <div class="floors__tooltip-text">в продаже</div>
</div>
</div>`);
      tooltip
        .insertBefore($svg)
        .fadeIn(250);
    });

    $path.on('mouseleave', () => {
      tooltip.fadeOut(1000, function () {
        $(this).remove();
      });
    });
  }

  function hrefPath() {
    $path.on('click', function () {
      if (typeof extension !== 'undefined') {
        window.location.href = href + $(this).data('floor') + extension;
      }
    });
  }

  function hrefGenPlan() {
    $genPlanPath.on('click', function () {
      if (typeof genPlanExtension !== 'undefined') {
        window.location.href = $(this).data('section-href') + genPlanExtension;
      }
    });
  }
}