export const {
  // export like variables
  DOC,
  WIN,
  HTML,
  BODY,
  ACTIVE,
  SHOW,
  OPEN,
  touch
} = {
  //variables and values
  DOC     : $(document),
  WIN     : $(window),
  HTML    : $('html'),
  BODY    : $('body'),
  ACTIVE  : 'is-active',
  SHOW    : 'is-show',
  OPEN    : 'is-open',

  //detect functions
  touch() {
    return 'ontouchstart' in window;
  }
};

// detect
if (!touch()) {
  BODY.addClass('no-touch');
}