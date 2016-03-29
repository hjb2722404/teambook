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
    function UserCurVisitorsController($location,user,usercurvisitors) {
        var vm = this;
        var userId;
        if($location.pre == "member"){
            userId = $location.search().id;
        }else{
            var userIncetance = user.getUser();
            userId = userIncetance.data.id;
        }
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
