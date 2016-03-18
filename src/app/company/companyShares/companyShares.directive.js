(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('companyShares', companyShares);


  /** @ngInject */
  function companyShares() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/company/companyShares/company_shares.html',
      scope: {},
      controller: CompanySharesController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function CompanySharesController($location,companyshares) {
        var vm = this;
        var companyId = $location.search().companyId;

        vm.companyShares = [];
        getCompanyShares(companyId);

        function getCompanyShares(companyId) {
            vm.companyShares = companyshares.getCompanyShares(companyId);

            angular.forEach(vm.companyShares, function(companyShare) {
                companyShare.rank = Math.random();
            });
        }

    }
  }

})();
