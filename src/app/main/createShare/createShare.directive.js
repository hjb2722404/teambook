(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('createShare', createShare);


  /** @ngInject */
  function createShare() {
      var directive = {
          restrict: 'E',
          templateUrl: 'app/main/createShare/create_share.html',
          scope: {},
          controller: CreateShareController,
          controllerAs: 'vm',
          bindToController: true,
          replace: true
      };

      return directive;

      /** @ngInject */
      function CreateShareController($location) {
          var vm = this;
          var userId = $location.search().userId;
      }
  }

})();
