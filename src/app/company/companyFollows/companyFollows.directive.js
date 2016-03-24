(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('companyFollows', companyFollows);


  /** @ngInject */
  function companyFollows() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/company/companyFollows/company_follows.html',
      scope: {},
      controller: CompanyFollowsController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function CompanyFollowsController($location,companyfollows) {
        var vm = this;
        var companyId = $location.search().companyId;

        vm.companyFollows = [];
        getCompanyFollows(companyId);

        function getCompanyFollows(companyId) {
           return companyfollows.getCompanyFollows(companyId)
               .then(function(res){
                   vm.companyFollows = res;
               })
               .catch();
        }

    }
  }

})();
