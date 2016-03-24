(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('companyGoodMembers', companyGoodMembers);


  /** @ngInject */
  function companyGoodMembers() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/company/companyGoodMembers/company_goodmembers.html',
      scope: {},
      controller: CompanyGoodMembersController,
      controllerAs: 'vm',
      bindToController: true,
        replace : true
    };

    return directive;

    /** @ngInject */
    function CompanyGoodMembersController($location,companygoodmembers) {
        var vm = this;
        var companyId = $location.search().companyId;
        vm.companyGoodMembers = [];

        getCompanyGoodMembers(companyId);

        function getCompanyGoodMembers(companyId) {
            vm.companyGoodMembers =  companygoodmembers.getCompanyGoodMembers(companyId);
        }

    }
  }

})();
