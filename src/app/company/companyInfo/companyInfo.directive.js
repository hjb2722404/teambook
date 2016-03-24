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
      bindToController: true,
      replace:true
    };

    return directive;

    /** @ngInject */
    function CompanyInfoController($location,companyinfos) {
        var vm = this;
        var companyId = $location.search().companyId;

        vm.companyInfos = [];
        getCompanyInfo(companyId);

        vm.isShowCard = false;

        function getCompanyInfo(companyId) {

            return companyinfos.getCompanyInfos(companyId)
                .then(function(res){
                    vm.companyInfos = res;
                })
                .catch();
        }
    }
  }

})();
