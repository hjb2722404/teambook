(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('userInfo', userInfo);


  /** @ngInject */
  function userInfo() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/main/userInfo/user_info.html',
      scope: {},
      controller: UserInfoController,
      controllerAs: 'vm',
      bindToController: true,
      replace:true
    };

    return directive;

    /** @ngInject */
    function UserInfoController($location,userinfos) {
        var vm = this;
        var userId = $location.search().userId;
         vm.female = false;

        vm.userInfos = [];
        getUserInfo(userId);

        vm.isShowCard = false;

        function getUserInfo(userId) {
            vm.userInfos =  userinfos.getUserInfos(userId);
            if(vm.userInfos.userSex == "女"){
                vm.female =true;
            }
        }
    }
  }

})();
