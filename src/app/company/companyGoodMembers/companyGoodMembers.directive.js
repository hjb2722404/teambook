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
        if(!companyId){
            companyId = 1;
        }

        getCompanyGoodMembers(companyId);

        function getCompanyGoodMembers(companyId) {
            return  companygoodmembers.getCompanyGoodMembers(companyId)
                .then(function(res){
                    vm.companyGoodMembers = res;
                })
                .catch();
        }

    }
  }

})();
