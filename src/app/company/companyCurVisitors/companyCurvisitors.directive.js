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
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function CompanyCurVisitorsController($location,companycurvistors) {
        var vm = this;
        var companyId = $location.search().companyId;

        vm.companyCurVistors = [];
        getCompanyCurVistors(companyId);

        function getCompanyCurVistors(companyId) {
            vm.companyCurVistors =  companycurvistors.getCompanyCurVistors(companyId);
        }

    }
  }

})();
