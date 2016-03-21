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

            //return $http.get(apiHost + '/aip/company?id=' + companyId)
            //return $http.get('app/company/companyInfo/companyInfo.json')
            //    .then(getCompanyComplete)
            //    .catch(getCompanyFailed);
            //
            //function getCompanyComplete(response) {
            //    return response.data;
            //}
            //
            //function getCompanyFailed(error) {
            //    $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
            //}
            return {
                "companyId" : 1,
                "companyName" : "南京旭强信息科技有限公司",
                "companyDec" : "这里是公司简介",
                "companyLevel" : 10,
                "companyIsVip" : true,
                "companyTel" : "021-999999",
                "companyLogo" : "./assets/images/company-logo.png"
            }
        }
    }

})();
