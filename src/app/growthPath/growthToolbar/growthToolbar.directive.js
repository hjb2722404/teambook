(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('growthToolbar', growthToolbar);


  /** @ngInject */
  function growthToolbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/growthPath/growthToolbar/growthToolbar.html',
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