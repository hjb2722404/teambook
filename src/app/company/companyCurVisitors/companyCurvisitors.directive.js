(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('companyCurVisitors', companyCurVisitors);


  /** @ngInject */
  function companyCurVisitors() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/company/companyCurVisitors/company_visitors.html',
      scope: {},
      controller: CompanyCurVisitorsController,
      controllerAs: 'vm',
      bindToController: true,
      replace:true
    };

    return directive;

    /** @ngInject */
    function CompanyCurVisitorsController($location,companycurvisitors) {
        var vm = this;
        var companyId = $location.search().companyId;
        if(!companyId){
            companyId = 1;
        }

        vm.companyCurVisitors = [];
        getCompanyCurVisitors(companyId);

        function getCompanyCurVisitors(companyId) {
            return companycurvisitors.getCompanyCurVisitors(companyId)
                .then(function(res){
                    vm.companyCurVisitors = res;
                })
                .catch();
        }

    }
  }

})();
