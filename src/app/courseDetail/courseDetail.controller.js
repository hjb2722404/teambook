/**
 * Created by hjb2722404 on 2016/3/25.
 */
(function() {
    'use strict';

    angular
        .module('teambookWww')
        .controller('CourseDetailController', CourseDetailController);

    /** @ngInject */
    function CourseDetailController($timeout, toastr,user) {
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
