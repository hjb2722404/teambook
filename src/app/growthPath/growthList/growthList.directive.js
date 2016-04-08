(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('growthList', growthList);


  /** @ngInject */
  function growthList(growthLists,user) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/growthPath/growthList/growthList.html',
      scope: {},
      controller: growthController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function growthController() {
      var vm = this;

      var userInstance = user.getUser();
      var userId = userInstance.data.id;

      vm.GrowthLists = [];

      getGrowthList(userId);

      function getGrowthList(userId) {

        return growthLists.getGrowthLists(userId)
          .then(function(growthLists){
            vm.GrowthLists = growthLists;
          })
          .catch();

      }

    }
  }

})();