/**
 * @author Anton Shevchuk
 */
/* global define,require*/
require(['jquery'], function ($) {
  'use strict';
  $(function () {
    $(document)
      .on('click', 'a.jqbook[data-type="append-style"]', appendStyle)
      .on('click', 'a.jqbook[data-type="append-script"]', appendScript)
      .on('click', 'a.jqbook[data-type="highlight"]', highlight)
      .on('click', 'button.jqbook.sticky', switchSticky)
      .on('click', 'button.jqbook.reload', reload)
      .on('click', 'button.jqbook.run', runScript);
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

  function appendScript(event) {
    event.preventDefault();

    let $element = $(this);
    let $target = $($element.data('target'));

    $target.contents()
      .find('head')
      .append('<script>' + $element.text() + '</script>');

    return false;
  }

  function runScript(event) {
    event.preventDefault();

    let $element = $(this);
    let $target = $($element.data('target'));

    $target.contents()
      .find('head')
      .append('<script>' + $element.next().text() + '</script>');

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

  function reload(event) {
    event.preventDefault();

    let $iframe = $(this).parent('div.jqbook').find('iframe');
    $iframe.attr('src', $iframe.attr('src'));

    return false;
  }
});
