(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('companyshares', CompanyShares);

    /** @ngInject */
    function CompanyShares($http,$log,teambookConfig) {

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

            return $http.get(apiHost + '/api/company/getSharesByCompanyId?companyId=' + companyId + '&page=' + page + '&size=' + size + '&sort=' + sort)
                .then(getCompanySharesComplete)
                .catch(getCompanySharesFailed);

            function getCompanySharesComplete(response) {
                var results = response.data.data;
                results = dataFormat(results);
                return results;
            }

            function getCompanySharesFailed(error) {
                $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
            }
        }

        function dataFormat(res){
            angular.forEach(res,function(c,index){
                var title = c.name;
                var tags = [];
                var cn = c.companyName;

                if(title.length >13){
                    c.shareShotTitle = title.substr(0,13) + '...';
                }else {
                    c.shareShotTitle = title;
                }

                if(cn.length>8){
                    c.shareCompanyNameShot = cn.substr(0,8)+'...'
                }else{
                    c.shareCompanyNameShot = cn;
                }

                tags = c.tags.split(',');
                c.shareTagsArr = [];
                c.shareTagsArr[0] = tags[0];
                c.shareTagsArr[1] = tags[1];

            });

            return res;
        }
    }

})();
