/* eslint-disable no-trailing-spaces */
(function initStatBlock() {
  const $statBlock = $('.js-stat-block');
  const $statBlockItem = $statBlock.find('.stat-block__table-item');
  $statBlockItem.on('click', function() {
    const $this = $(this);
    const $statBlockContent = $this.find('.stat-block__table-content');

    $this.toggleClass('is-open');
    $statBlockContent.slideToggle();
  });
}());