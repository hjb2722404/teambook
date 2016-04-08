(function() {
  'use strict';

  angular
    .module('teambookWww')
    .controller('MemberController', MemberController);

  /** @ngInject */
  function MemberController($timeout,toastr,user,$location) {
    var vm = this;

    vm.classAnimation = '';
    vm.creationDate = 1458021821394;
    vm.showToastr = showToastr;


    activate();

    function activate() {
      user.checkAuth();
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