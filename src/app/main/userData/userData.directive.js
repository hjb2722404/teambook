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
    function UserDataController(user,userdata) {
        var vm = this;

        var userIncetance = user.getUser();
        var userId = userIncetance.data.id;

        vm.userData = [];
        getUserData(userId);

        function getUserData(userId) {

            return userdata.getUserData(userId)
                .then(function(userData){
                    vm.userData = userData;
                })
                .cache();
        }

    }
  }

})();
