/**
 * Created by xiaolin.dai on 16/3/16.
 * Refactoring by hjb2722404 on 16/3/17
 */

(function() {
  'use strict';

  angular
    .module('teambookWww')
    .controller('CollegeController', CollegeController);

  /** @ngInject */
  function CollegeController($timeout,toastr,$scope) {
    var vm = this;

      vm.classAnimation = '';
      vm.creationDate = 1458021821396;
      vm.showToastr = showToastr;

      $scope.$on('catClick',function(e,data){
          $scope.$broadcast('changeCat',data);
      });

      activate();

      function activate() {
          $timeout(function() {
            vm.classAnimation = 'rubberBand';
          }, 4000);
      }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }










  }

})();
