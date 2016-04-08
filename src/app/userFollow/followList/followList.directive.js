(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('followList', followList);


  /** @ngInject */
  function followList() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/userFollow/followList/followList.html',
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