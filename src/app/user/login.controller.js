(function () {
  'use strict';

  angular
    .module('teambookWww')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(user,$location,$log) {
    var vm = this;

    vm.login = login;

    function login() {

      user.login(function(){

        if($location.pre == "/login"){
          $location.pre = "/home";
        }

        $location.path($location.pre || "/home");

      });

    }

  }
})();
