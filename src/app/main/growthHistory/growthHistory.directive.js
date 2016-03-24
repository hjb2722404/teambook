(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('growthHistory', growthHistory);


  /** @ngInject */
  function growthHistory() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/main/growthHistory/growth_history.html',
      scope: {},
      controller: GrowthHistoryController,
      controllerAs: 'vm',
      bindToController: true,
      replace:true
    };

    return directive;

    /** @ngInject */
    function GrowthHistoryController(user,growthHistory) {
        var vm = this;
        var userInstance = user.getUser();
        var userId = userInstance.data.id;
        vm.growthHistory = [];

        getGrowthHistory(userId);

        function getGrowthHistory(userId) {

            return growthHistory.getGrowthHistory(userId)
                .then(function(historys){
                    vm.growthHistory = historys;
                })
                .catch();

            vm.growthHistory =  growthHistory.getGrowthHistory(userId);
        }

    }
  }

})();
