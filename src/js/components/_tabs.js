initTabs();
function initTabs() {
  const $tabs = $('.js-tabs');
  $tabs.each(function () {
    const $this = $(this);
    const $tabsNav = $this.find('.tabs__nav-item');
    const $tabsContent = $this.find('.tabs__content-item');

    $tabsContent.not(':first').hide();

    $tabsNav.on('click', function(ev) {
      ev.preventDefault();
      $tabsNav.removeClass('is-active').eq($(this).index()).addClass('is-active');
      $tabsContent.hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('is-active');
  });
}
