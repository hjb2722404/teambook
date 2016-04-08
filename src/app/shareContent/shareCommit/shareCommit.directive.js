(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('shareCommit', shareCommit);


  /** @ngInject */
  function shareCommit() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/shareContent/shareCommit/share_commit.html',
      scope: {},
      controller: ShareCommitController,
      controllerAs: 'vm',
      bindToController: true,
        replace : true
    };

    return directive;

    /** @ngInject */
    function ShareCommitController(usershares,user) {
        var vm = this;
        var userInstance = user.getUser();
        var shareId = userInstance.data.id;
        vm.shareCommit = [];
        vm.shareTags = [];
        vm.shareCommit = getShareCommit(shareId);
       
        function getShareCommit(shareId) {

            return usersharec.getShareCommit(shareId)
                .then(function(res){
                    var results = res;
                    return results;
                })
                .catch();


        }

    }
  }

})();
