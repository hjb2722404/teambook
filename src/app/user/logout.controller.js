(function () {
  'use strict';

  angular
    .module('teambookWww')
    .controller('LogoutController', LogoutController);

  /** @ngInject */
  function LogoutController(user,$location) {
    user.logout();
    $location.path("/login");
  }
})();
