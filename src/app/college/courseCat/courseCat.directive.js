(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('courseCat', courseCat);


  /** @ngInject */
  function courseCat() {
      var directive = {
          restrict: 'E',
          templateUrl: 'app/college/courseCat/course_cat.html',
          scope: {},
          controller: CourseCatController,
          controllerAs: 'vm',
          bindToController: true,
          replace: true
      };

      return directive;

      /** @ngInject */
      function CourseCatController($location) {
          var vm = this;
          var userId = $location.search().userId;
      }
  }

})();
