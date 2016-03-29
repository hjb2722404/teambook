(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('companygoodmembers', CompanyGoodMembers);

    /** @ngInject */
    function CompanyGoodMembers($http,$log,teambookConfig) {

        this.getCompanyGoodMembers = getCompanyGoodMembers;

        function getCompanyGoodMembers(companyId) {

            var apiHost = teambookConfig.apiHost;

            return $http.get(apiHost + '/api/company/getMostShareById?id='+companyId+'&sort=level')
                .then(getCompanyGoodMembersComplete)
                .catch(getCompanyGoodMembersFailed);

              function getCompanyGoodMembersComplete(response) {
                  return response.data.data;
              }

              function getCompanyGoodMembersFailed(error) {
                  $log.error('XHR Failed for getCompanyGoodMembers.\n' + angular.toJson(error.data, true));
              }
        }
    }

})();
