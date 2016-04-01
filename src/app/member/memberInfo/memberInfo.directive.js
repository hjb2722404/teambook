(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('memberInfo', memberInfo);


  /** @ngInject */
  function memberInfo() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/member/memberInfo/member_info.html',
      scope: {},
      controller: MemberInfoController,
      controllerAs: 'vm',
      bindToController: true,
      replace:true
    };

    return directive;

    /** @ngInject */
    function MemberInfoController($location,userinfos) {
        var vm = this;

        var userId = $location.search().id;

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
