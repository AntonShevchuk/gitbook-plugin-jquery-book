/**
 * @author Anton Shevchuk
 */
/* global define,require*/
require(['jquery'], function ($) {
  'use strict';
  $(function () {
    $(document).on('click', 'a.jqbook[data-type="append-style"]', appendStyle);
    $(document).on('click', 'a.jqbook[data-type="highlight"]', highlight);
    $(document).on('click', 'button', switchSticky);
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

  function highlight(event) {
    event.preventDefault();

    let $element = $(this);
    let $target = $($element.data('target'));

    $target.contents()
      .find('head')
      .append('<script>' + $element.text() + '.effect("highlight", 800)</script>');

    return false;
  }

  function switchSticky(event) {
    event.preventDefault();
    $(this).parent('div.jqbook').toggleClass('sticky');
    return false;
  }
});
