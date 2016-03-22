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
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function GrowthHistoryController($location,growthHistory) {
        var vm = this;
        var userId = $location.search().userId;
        vm.growthHistory = [];

        getGrowthHistory(userId);

        function getGrowthHistory(userId) {
            vm.growthHistory =  growthHistory.getGrowthHistory(userId);
        }

    }
  }

})();
