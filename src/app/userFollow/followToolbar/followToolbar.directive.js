(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('followToolbar', followToolbar);


  /** @ngInject */
  function followToolbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/userFollow/followToolbar/followToolbar.html',
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