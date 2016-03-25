(function () {
  'use strict';

  angular
    .module('teambookWww')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope,$location, user, toastr, qcloud) {
    var vm = this;

    $scope.submit = function() {
      if ($scope.form.file.$valid && $scope.file) {
        $scope.upload($scope.file);
      }
    };

    // upload on file select or drop
    $scope.upload = function (file) {
      qcloud.uploadFile(file)
        .then(function (resp) {
          console.log('Success ' + resp.config.data.fileContent.name + 'uploaded. Response: ' + resp.data.data);
        }, function (resp) {
          console.log('Error status: ' + resp.status);
        }, function (evt) {
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          console.log('progress: ' + progressPercentage + '% ' + evt.config.data.fileContent.name);
        });
    };

    vm.login = login;
    vm.upload = upload;

    function login() {

      return user.login(vm.username, vm.password,vm.autoLogin)
        .then(loginComplete)
        .catch(loginFailed);
    }

    function upload(file) {

    }

    function loginComplete() {
      if ($location.pre == "/login") {
        $location.pre = "/home";
      }
      $location.path($location.pre || "/home");
    }

    function loginFailed(e) {
      switch (e.status) {
        case 401:
          toastr.error("用户名或者密码错误");
          break;
        case 403:
          toastr.error("没有权限执行该操作");
          break;
        default:
          toastr.error("系统错误");
          break;
      }
    }

  }
})();
