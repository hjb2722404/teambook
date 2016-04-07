(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('growthHead', growthHead);


  /** @ngInject */
  function growthHead() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/growthPath/growthHead/growthHead.html',
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