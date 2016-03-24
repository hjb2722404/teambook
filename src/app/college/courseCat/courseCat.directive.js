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
      function CourseCatController($location,$scope) {
          var vm = this;
          var userId = $location.search().userId;

          vm.showCourse = showCourse;

          /*切换课程分类
          * @param cat:分类id
          * */
          function showCourse(cat) {
              //console.log($scope.$parent.catFilter);
              switch (cat) {
                  case "cat1":
                      $scope.$emit('catClick','行政');
                      break;
                  case "cat2":
                      $scope.$emit('catClick','技术');

                      break;
                  case "cat3":
                      $scope.$emit('catClick','财务');

                      break;
                  case "cat4":
                      $scope.$emit('catClick','市场');
                      break;
              }
          }
      }
  }

})();
