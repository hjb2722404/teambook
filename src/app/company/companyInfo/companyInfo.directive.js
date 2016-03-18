(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('companyInfo', companyInfo);


  /** @ngInject */
  function companyInfo() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/company/companyInfo/company_info.html',
      scope: {},
      controller: CompanyInfoController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function CompanyInfoController($location,companyinfos) {
        var vm = this;
        var companyId = $location.search().companyId;

        vm.companyInfos = [];
        getCompanyInfo(companyId);

        function getCompanyInfo(companyId) {
            vm.companyInfos =  companyinfos.getCompanyInfos(companyId);
        }
    }
  }

})();
