(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('companydata', CompanyData);

    /** @ngInject */
    function CompanyData($http,$log,teambookConfig) {

        this.getCompanyData = getCompanyData;

        function getCompanyData(companyId) {

            var apiHost = teambookConfig.apiHost;

            return $http.get(apiHost + '/api/company/getSocialById?id='+companyId)
                .then(getCompanyDataComplete)
                .catch(getCompanyDataFailed);

              function getCompanyDataComplete(response) {
                  return response.data.data;
              }

              function getCompanyDataFailed(error) {
                  $log.error('XHR Failed for getCompanyData.\n' + angular.toJson(error.data, true));
              }
        }
    }

})();
