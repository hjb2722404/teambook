(function() {
  'use strict';

  angular
    .module('teambookWww')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
