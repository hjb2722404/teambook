(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('companydata', CompanyData);

    /** @ngInject */
    function CompanyData($http,$log,teambookConfig) {

        this.getCompanyData = getCompanyData;

        function getCompanyData(companyId) {

            return {
                "follows" : 40,
                "shares" : 28,
                "fans" : 36
            };

            //var apiHost = teambookConfig.apiHost;
            //
            //return $http.get(apiHost + '/aip/data?type=company&id='+companyId)
            //    .then(getCompanyDataComplete)
            //    .catch(getCompanyDataFailed);
            //
            //  function getCompanyDataComplete(response) {
            //      return response.data;
            //  }
            //
            //  function getCompanyDataFailed(error) {
            //      $log.error('XHR Failed for getCompanyData.\n' + angular.toJson(error.data, true));
            //  }
        }
    }

})();
