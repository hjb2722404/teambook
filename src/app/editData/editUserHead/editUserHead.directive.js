(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('editUserHead', editUserHead);


  /** @ngInject */
  function editUserHead() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/editData/editUserHead/editUserHead.html',
      scope: {},
      controller: editUserHeadController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function editUserHeadController(userinfos,user) {
      var vm = this;
      var userInstance = user.getUser();
      var userId = userInstance.data.id;
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