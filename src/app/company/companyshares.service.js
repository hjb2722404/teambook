(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('companyshares', CompanyShares);

    /** @ngInject */
    function CompanyShares($http) {

        this.getCompanyShares = getCompanyShares;

        function getCompanyShares(companyId,page,size,sort) {

            if (!size) {
                size = 8;
            }

            if(!page){
                page = 1;
            }

            if(!sort){
                sort = 'lasttime,asc'
            }

            var apiHost = teambookConfig.apiHost;

            return $http.get(apiHost + '/aip/shares?type=company&id=' + companyId + '&page=' + page + '&size=' + size + '&sort=' + sort)
                .then(getCompanySharesComplete)
                .catch(getCompanySharesFailed);

            function getCompanySharesComplete(response) {
                return response.data;
            }

            function getCompanySharesFailed(error) {
                $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
            }
        }
    }

})();
