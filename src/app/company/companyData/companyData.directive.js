(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('companyData', companyData);


  /** @ngInject */
  function companyData() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/company/companyData/company_data.html',
      scope: {},
      controller: CompanyDataController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function CompanyDataController($location,companydata) {
        var vm = this;
        var companyId = $location.search().companyId;

        vm.companyData = [];
        getCompanyData(companyId);

        function getCompanyData(companyId) {
            vm.companyData =  companydata.getCompanyData(companyId);
        }

    }
  }

})();