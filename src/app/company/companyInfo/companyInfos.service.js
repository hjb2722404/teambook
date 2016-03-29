(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('companyinfos', CompanyInfos);

    /** @ngInject */
    function CompanyInfos($http,$log,teambookConfig) {

        this.getCompanyInfos = getCompanyInfos;

        function getCompanyInfos(companyId) {

            var apiHost = teambookConfig.apiHost;

            return $http.get(apiHost + '/api/company/getCompanyById?id=' + companyId)
                .then(getCompanyComplete)
                .catch(getCompanyFailed);

            function getCompanyComplete(response) {
                return response.data.data;
            }

            function getCompanyFailed(error) {
                $log.error('XHR Failed for getCompany.\n' + angular.toJson(error.data, true));
            }
            //return {
            //    "companyId" : 1,
            //    "companyName" : "南京旭强信息科技有限公司",
            //    "companyDec" : "这里是公司简介",
            //    "companyLevel" : 10,
            //    "companyIsVip" : true,
            //    "companyTel" : "021-999999",
            //    "companyLogo" : "./assets/images/company-logo.png"
            //}
        }
    }

})();
