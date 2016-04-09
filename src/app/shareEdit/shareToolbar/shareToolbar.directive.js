(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('shareToolbar', ShareToolbar);


  /** @ngInject */
  function ShareToolbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/shareEdit/shareToolbar/shareToolbar.html',
      scope: {},
      controller: shareToolbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function shareToolbarController() {
      var vm = this;
      return vm;
    }
  }

})();