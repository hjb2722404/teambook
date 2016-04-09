(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('shareList', ShareList);


  /** @ngInject */
  function ShareList(shareLists,user) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/shareEdit/shareList/shareList.html',
      scope: {},
      controller: shareListController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function shareListController() {
      var vm = this;

      var userInstance = user.getUser();
      var userId = userInstance.data.id;
      vm.shareData = [];

      getShareList(userId);

      function getShareList(userId) {
        return shareLists.getShareLists(userId)
          .then(function(shareData){
            vm.shareData = shareData;
          })
          .catch();

      }

    }
  }

})();