(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('courseShares', courseShares);


  /** @ngInject */
  function courseShares() {
      var directive = {
          restrict: 'E',
          templateUrl: 'app/courseDetail/courseShares/course_shares.html',
          scope: {},
          controller: CourseSharesController,
          controllerAs: 'vm',
          bindToController: true,
          replace: true
      };

      return directive;

      /** @ngInject */
      function CourseSharesController($location,courseDetail) {
          var vm = this;
          var courseId = $location.search().id;
          vm.couseShareslist =[];

          getCourseChild(courseId);

          function getCourseChild(courseId){
              return courseDetail.getcourseChildren(courseId)
                  .then(function(res){
                      vm.couseShareslist = res;
                  })
                  .catch();
          }

      }
  }

})();
