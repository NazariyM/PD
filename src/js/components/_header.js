/* eslint-disable no-trailing-spaces */
import {BODY, WINDOW} from '../helpers';

initMenu();
headerToggle();

function initMenu() {
  const $menu = $('.js-menu-list');

  $menu.each(() => {
    const $menuItemActive = $menu.find('.menu__list-item');
    const $menuLink = $menu.find('.menu__list-link');

    $menuLink.on('click', function (ev) {
      const $this = $(this);
      const $menuItem = $this.parent('.menu__list-item');
      const $menuSubList = $this.next('.menu__sub-list');

      if (!$this.is('[href]')) {
        $menuItem.addClass('is-active');
        $menuSubList.slideToggle(250).toggleClass('is-open');
        $menuItem.siblings().find('.menu__sub-list').slideUp(250).removeClass('is-open');
        $menuItem.siblings().not(ev.target).removeClass('is-active');

        if (!$menuSubList.hasClass('is-open')) {
          $menuItem.removeClass('is-active');
        } else {
          $menuItem.addClass('is-active');
        }
      }
    });

    $menuItemActive.each(function () {
      const $this = $(this);
      const $subMenu = $this.children();
      if ($this.hasClass('is-active')) $subMenu.trigger('click');
    });
  });
}

function headerToggle() {
  const $header = $('.js-header');
  const $hamburger = $('.js-hamburger');
  const $main = $('.main');

  $hamburger.on('click', function (e) {
    e.stopPropagation();
    const $this = $(this);
    $this.toggleClass('is-active');
    $header.toggleClass('is-visible');
    BODY.toggleClass('is-locked');
    $main.toggleClass('is-active');
  });

  $header.on('click', function (ev) {
    ev.stopPropagation();
  });

  BODY.on('click', function () {
    $hamburger.removeClass('is-active');
    $header.removeClass('is-visible');
    BODY.removeClass('is-locked');
    $main.removeClass('is-active');
  });

  WINDOW.on('resize', function () {
    $hamburger.removeClass('is-active');
    $header.removeClass('is-visible');
    BODY.removeClass('is-locked');
    $main.removeClass('is-active');
  });
}