/**
 * @author Anton Shevchuk
 */
/* global define,require*/
require(['jquery'], function ($) {
  'use strict';
  $(function () {
    $(document).on('click', 'a.jqbook[data-type="append-style"]', appendStyle);
  });

  function appendStyle(event) {
    event.preventDefault();

    let $element = $(this);
    let $target = $($element.data('target'));

    $target.contents()
      .find('head')
      .append('<style>' + $element.text() + '</style>');

    return false;
  }
});
