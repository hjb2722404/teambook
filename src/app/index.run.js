(function() {
  'use strict';

  angular
    .module('teambookWww')
    .run(runBlock);

  /** @ngInject */
  function runBlock(user,$location) {

    $location.pre = angular.copy($location.path());

    if($.isEmptyObject(user.getUser())){
      $location.path("/login");
    }

  }

})();
