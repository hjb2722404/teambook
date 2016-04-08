(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('followHead', followHead);


  /** @ngInject */
  function followHead() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/userFollow/followHead/followHead.html',
      scope: {},
      controller: growthController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function growthController() {
      var vm = this;
      return vm;
    }
  }

})();