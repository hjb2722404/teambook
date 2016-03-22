(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('userData', userData);


  /** @ngInject */
  function userData() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/main/userData/user_data.html',
      scope: {},
      controller: UserDataController,
      controllerAs: 'vm',
      bindToController: true,
      replace :true
    };

    return directive;

    /** @ngInject */
    function UserDataController($location,userdata) {
        var vm = this;
        var userId = $location.search().userId;

        vm.userData = [];
        getUserData(userId);

        function getUserData(userId) {
            vm.userData =  userdata.getUserData(userId);
        }

    }
  }

})();
