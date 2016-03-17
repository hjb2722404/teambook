(function () {
  'use strict';

  angular
    .module('teambookWww')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($location,user,toastr) {
    var vm = this;

    vm.login = login;

    function login() {


      user.login(vm.username,vm.password)
        .then(loginComplete)
        .catch(loginFailed);

      function loginComplete(){
        if ($location.pre == "/login") {
          $location.pre = "/home";
        }

        $location.path($location.pre || "/home");
      }

      function loginFailed(e){
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

  }
})();
