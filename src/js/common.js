import dotdotdot from 'dotdotdot';
// clear placeholder
(function() {
  const el = $('input, textarea');
  el.focus(function() {
    $(this).data('placeholder', $(this).attr('placeholder'));
    $(this).attr('placeholder', '');
  });
  el.blur(function() {
    $(this).attr('placeholder', $(this).data('placeholder'));
  });
}());

const $textOverflow = $('.js-dot');
$textOverflow.dotdotdot();