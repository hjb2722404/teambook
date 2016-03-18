(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('companyfollows', CompanyFollows);

    /** @ngInject */
    function CompanyFollows($http) {


        this.getCompanyFollows = getCompanyFollows;

        function getCompanyFollows(companyId) {

            var apiHost = teambookConfig.apiHost;

            return $http.get(apiHost + '/aip/follows?type=company&id='+companyId)
                .then(getCompanyFollowsComplete)
                .catch(getCompanyFollowsFailed);

              function getCompanyFollowsComplete(response) {
                  return response.data;
              }

              function getCompanyFollowsFailed(error) {
                  $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
              }
        }
    }

})();
