// import Ps from 'perfect-scrollbar';
//
// // const headerScroll = document.getElementById('js-header-scroll');
// const mainScroll = document.getElementById('js-stat-block-scroll');
// // Ps.initialize(headerScroll);
//
// Ps.initialize(mainScroll);

require('perfect-scrollbar/jquery')($);

const $statBlockScroll = $('.js-stat-block-scroll');
$statBlockScroll.perfectScrollbar();