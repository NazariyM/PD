// export const {
//   // export like variables
//   DOC,
//   WIN,
//   HTML,
//   BODY,
//   ACTIVE,
//   SHOW,
//   OPEN,
//   touch
// } = {
//   // variables and values
//   DOC: $(document),
//   WIN: $(window),
//   HTML: $('html'),
//   BODY: $('body'),
//   ACTIVE: 'is-active',
//   SHOW: 'is-show',
//   OPEN: 'is-open',
//
//   // detect functions
//   touch() {
//     return 'ontouchstart' in window;
//   }
// };
//
// // detect
// if (!touch()) {
//   BODY.addClass('no-touch');
// }

const BODY = $('body'),
  WINDOW  = $(window);

const echo = (arg) => {
  console.log(arg);
};

// detect device width
const detectDevice = (w) => {
  if (!window.matchMedia) return false;
  return window.matchMedia(`(max-width: ${w}px)`).matches;
};
// let detectMob = detectDevice(767);

// detect touch device
const isTouchDevice = () => 'ontouchstart' in window;
if (!isTouchDevice()) { BODY.addClass('no-touch'); }

export { BODY, WINDOW, echo, detectDevice, isTouchDevice };