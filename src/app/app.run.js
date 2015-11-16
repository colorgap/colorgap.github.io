(function() {
  'use strict';

  angular
    .module('colorgapgit')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
