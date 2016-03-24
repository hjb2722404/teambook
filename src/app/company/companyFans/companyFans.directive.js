(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('companyFans', companyFans);


  /** @ngInject */
  function companyFans() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/company/companyFans/company_fans.html',
      scope: {},
      controller: CompanyFansController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function CompanyFansController($location,companyfans) {
        var vm = this;
        var companyId = $location.search().companyId;

        vm.companyFans = [];
        getCompanyFans(companyId);

        function getCompanyFans(companyId) {
           return  companyfans.getCompanyFans(companyId)
               .then(function(res){
                   vm.companyFans = res;
               })
               .catch();
        }

    }
  }

})();
