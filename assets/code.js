/**
 * @author Anton Shevchuk
 */
/* global define,require*/
require(['jquery'], function ($) {
  'use strict';
  $(function () {
    $('a.jqbook[data-type="append-style"]').click(appendStyle);
  });

  function appendStyle() {
    let $element = $(this);
    let $target = $($element.attr('href'));

    $target.contents()
      .find('head')
      .append('<style>' + $element.text() + '</style>');

    return false;
  }
});
