(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('companyfans', CompanyFans);

    /** @ngInject */
    function CompanyFans($http,$log,teambookConfig) {

        this.getCompanyFans = getCompanyFans;

        function getCompanyFans(companyId) {

            var apiHost = teambookConfig.apiHost;

            return $http.get(apiHost + '/aip/fans?type=company&id='+companyId)
                .then(getCompanyFansComplete)
                .catch(getCompanyFansFailed);

              function getCompanyFansComplete(response) {
                  return response.data;
              }

              function getCompanyFansFailed(error) {
                  $log.error('XHR Failed for getCompanyFans.\n' + angular.toJson(error.data, true));
              }
        }
    }

})();
