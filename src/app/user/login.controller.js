(function () {
  'use strict';

  angular
    .module('teambookWww')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(user, $location) {
    var vm = this;

    vm.login = login;

    function login() {

      var userForm = {
        username: vm.username,
        password: vm.password
      };
      user.login(userForm, function () {

        if ($location.pre == "/login") {
          $location.pre = "/home";
        }

        $location.path($location.pre || "/home");

      });

    }

  }
})();
