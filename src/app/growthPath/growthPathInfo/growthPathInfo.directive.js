(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('growthPathInfo', growthPathInfo);


  /** @ngInject */
  function growthPathInfo() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/growthPath/growthPathInfo/growthPathInfo.html',
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