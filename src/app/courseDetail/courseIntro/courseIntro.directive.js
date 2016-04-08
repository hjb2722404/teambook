(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('courseIntro', courseIntro);


  /** @ngInject */
  function courseIntro() {
      var directive = {
          restrict: 'E',
          templateUrl: 'app/courseDetail/courseIntro/course_intro.html',
          scope: {},
          controller: CourseIntroController,
          controllerAs: 'vm',
          bindToController: true,
          replace: true
      };

      return directive;

      /** @ngInject */
      function CourseIntroController($location,courseDetail) {
          var vm = this;
          var courseId = $location.search().id;
          vm.courseDetails =[];

          getCourseDetail(courseId);

          function getCourseDetail(courseId){
              return courseDetail.getcourseDetail(courseId)
                  .then(function(res){
                      vm.courseDetails = res;
                  })
                  .catch();
          }

      }
  }

})();
