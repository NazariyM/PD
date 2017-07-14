import dotdotdot from 'dotdotdot';
// clear placeholder
(function () {
  const el = $('input, textarea');
  el.focus(function () {
    $(this).data('placeholder', $(this).attr('placeholder'));
    $(this).attr('placeholder', '');
  });
  el.blur(function () {
    $(this).attr('placeholder', $(this).data('placeholder'));
  });
}());

const $textOverflow = $('.js-dot');
$textOverflow.dotdotdot();

// pop-ups z-index in adv section
function initAdvPopups() {
  const $advPopups = $('.js-advantage-popups');
  const $advItems = $advPopups.find('.advantage__item');
  const $advItemCircle = $advPopups.find('.advantage__item-circle');

  $advItemCircle.on('mouseover hover tap', function () {
    $(this).parent().siblings().addClass('low-index');
  });
  $advItemCircle.on('mouseleave', () => {
    setTimeout(() => {
      $advItems.removeClass('low-index');
    }, 50);
  });
}
initAdvPopups();

function toggleBgImg() {
  const $toggleSection = $('.js-toggle-bg');
  const $timeBar = $toggleSection.find('.time-bar');
  const $btnDay = $timeBar.find('.time-bar__btn_day');
  const $btnNight = $timeBar.find('.time-bar__btn_night');
  const $bgDay = $toggleSection.find('.bg-day');
  const $bgNight = $toggleSection.find('.bg-night');

  $bgNight.hide();

  $btnDay.on('click', function (e) {
    e.preventDefault();
    $(this).addClass('is-active');
    $btnNight.removeClass('is-active');
    $bgDay.fadeIn();
    $bgNight.fadeOut();
  });

  $btnNight.on('click', function (e) {
    e.preventDefault();
    $(this).addClass('is-active');
    $btnDay.removeClass('is-active');
    $bgNight.fadeIn();
    $bgDay.fadeOut();
  });
}
toggleBgImg();