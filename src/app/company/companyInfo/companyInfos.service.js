(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('companyinfos', CompanyInfos);

    /** @ngInject */
    function CompanyInfos($http) {

        this.getCompanyInfos = getCompanyInfos;

        function getCompanyInfos(companyId) {

            var apiHost = teambookConfig.apiHost;

            return $http.get(apiHost + '/aip/company?id=' + companyId)
                .then(getCompanyComplete)
                .catch(getCompanyFailed);

            function getCompanyComplete(response) {
                return response.data;
            }

            function getCompanyFailed(error) {
                $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
            }
        }
    }

})();
