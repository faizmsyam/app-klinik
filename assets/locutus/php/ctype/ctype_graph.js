'use strict';

module.exports = function ctype_graph(text) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/ctype_graph/
  // original by: Brett Zamir (http://brett-zamir.me)
  //   example 1: ctype_graph('!%')
  //   returns 1: true

  var setlocale = require('../strings/setlocale');

  if (typeof text !== 'string') {
    return false;
  }

  // ensure setup of localization variables takes place
  setlocale('LC_ALL', 0);

  var $global = typeof window !== 'undefined' ? window : global;
  $global.$locutus = $global.$locutus || {};
  var $locutus = $global.$locutus;
  var p = $locutus.php;

  return text.search(p.locales[p.localeCategories.LC_CTYPE].LC_CTYPE.gr) !== -1;
};
//# sourceMappingURL=ctype_graph.js.map