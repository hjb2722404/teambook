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
    function UserInfoController(userinfos,user) {
        var vm = this;

        var user = user.getUser();
        var userId = user.data.id;

        vm.isShowCard = false;

         vm.female = false;

        vm.userInfos = [];
        getUserInfo(userId);


        function getUserInfo(userId) {
            
            return userinfos.getUserInfos(userId)
                .then(function(userInfos){
                    vm.userInfos = userInfos;
                    if(vm.userInfos.gender == "2"){
                        vm.userInfos.userSex = "女";
                        vm.female =true;
                    }else{
                        vm.userInfos.userSex = "男";
                    }
                })
                .catch();


        }
    }
  }

})();
