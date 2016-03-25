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
    function UserCurVisitorsController(user,usercurvisitors) {
        var vm = this;
        var userInstance = user.getUser();
        var userId = userInstance.data.id;

        vm.userCurVisitors = [];
        getUserCurVisitors(userId,6);

        function getUserCurVisitors(userId,size) {

            return usercurvisitors.getUserCurVisitors(userId,size)
                .then(function(res){
                    vm.userCurVisitors = res.data;
                })
                .catch();

            //console.log(vm.userCurVisitors);
        }

    }
  }

})();
