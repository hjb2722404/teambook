(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('userCurVisitors', userCurVisitors);


  /** @ngInject */
  function userCurVisitors() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/main/userCurVisitors/user_visitors.html',
      scope: {},
      controller: UserCurVisitorsController,
      controllerAs: 'vm',
      bindToController: true,
      replace:true
    };

    return directive;

    /** @ngInject */
    function UserCurVisitorsController($location,usercurvisitors) {
        var vm = this;
        var userId = $location.search().userId;

        vm.userCurVisitors = [];
        getUserCurVisitors(userId);

        function getUserCurVisitors(userId) {
            vm.userCurVisitors =  usercurvisitors.getUserCurVisitors(userId);
            //console.log(vm.userCurVisitors);
        }

    }
  }

})();
