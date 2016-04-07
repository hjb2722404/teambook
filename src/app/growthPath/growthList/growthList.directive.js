(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('growthList', growthList);


  /** @ngInject */
  function growthList() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/growthPath/growthList/growthList.html',
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