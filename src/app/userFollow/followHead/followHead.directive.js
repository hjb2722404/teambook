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
      controller: followHeadController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function followHeadController() {

      var vm = this;
      return vm;
    }
  }

})();