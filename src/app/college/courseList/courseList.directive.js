(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('courseList', courseList);


  /** @ngInject */
  function courseList() {
      var directive = {
          restrict: 'E',
          templateUrl: 'app/college/courseList/course_list.html',
          scope: {},
          controller: CourseListController,
          controllerAs: 'vm',
          bindToController: true,
          replace: true
      };

      return directive;

      /** @ngInject */
      function CourseListController($location,courses,$scope) {
          var vm = this;
          var userId = $location.search().userId;
          vm.courses = [];
          vm.courses = getCourse();

          $scope.$on('changeCat',function(e,data){
              vm.catFilter = data;
          });

          function getCourse(){
              var results = courses.getCourses();

              angular.forEach(results,function(c,index){
                  var tags = [];
                  tags = c.courseTags.split(',');
                  c.courseTagsArr = tags;

              });

              return results;
          }
      }
  }

})();
