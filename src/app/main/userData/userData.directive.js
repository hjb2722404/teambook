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
      controller: UserDatasController,
      controllerAs: 'vm',
      bindToController: true,
      replace :true
    };

    return directive;

    /** @ngInject */
    function UserDatasController($location,user,userdata) {
        var vm = this;
        var userId;
        if($location.pre == "member"){
            userId = $location.search().id;
        }else{
            var userIncetance = user.getUser();
            userId = userIncetance.data.id;
        }

        vm.userDatas = [];
        getUserData(userId);

        function getUserData(userId) {

            return userdata.getUserData(userId)
                .then(function(res){
                    vm.userDatas = res;
                })
                .catch();
        }

    }
  }

})();
