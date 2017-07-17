/* eslint-disable no-trailing-spaces */
$(() => {
  $('.js-accordion > .accordion-item').click(function() {

    $(this).siblings('.accordion-item').removeClass('is-open').children('.accordion-panel').slideUp();
    $(this).toggleClass('is-open').children('.accordion-panel').slideToggle('ease-out');

  });
});