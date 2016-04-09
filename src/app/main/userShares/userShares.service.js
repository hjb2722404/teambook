(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('usershares', UserShares);

    /** @ngInject */
    function UserShares($http,$log,teambookConfig) {

        this.getUserShares = getUserShares;
        this.getRecommends = getRecommends;

        var apiHost = teambookConfig.apiHost;

        function getUserShares(userId,page,size,sort) {

            if (!size) {
                size = 8;
            }

            if(!page){
                page = 1;
            }

            if(!sort){
                sort = 'lasttime,asc'
            }

            return $http.get(apiHost + '/api/share/getShareListByUserId?userId=' + userId + '&page=' + page + '&size=' + size + '&sort=' + sort)
                .then(getUserSharesComplete)
                .catch(getUserSharesFailed);

            function getUserSharesComplete(response) {
                var results = response.data.data;
                results = dataFormat(results);
                return results;
            }

            function getUserSharesFailed(error) {
                $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
            }
        }

        function getRecommends(userId,page,size,sort) {

            if (!size) {
                size = 8;
            }

            if(!page){
                page = 1;
            }

            if(!sort){
                sort = 'lasttime,asc'
            }

            return $http.get(apiHost + '/api/share/recommendShare?userId=' + userId + '&page=' + page + '&size=' + size + '&sort=' + sort)
                .then(getRecommendsComplete)
                .catch(getRecommendsFailed);

            function getRecommendsComplete(response) {
                var results = response.data.data;
                results = dataFormat(results);
                return results;
            }

            function getRecommendsFailed(error) {
                $log.error('XHR Failed for getRecommends.\n' + angular.toJson(error.data, true));
            }
        }

        function dataFormat(res){
            angular.forEach(res,function(u,index){
                var title = u.name;
                var tags = [];
                var un = u.companyName;

                // if(title.length >13){
                //     u.shareShotTitle = title.substr(0,13) + '...';
                // }else {
                     u.shareShotTitle = title;
                // }

                // if(un.length>8){
                //     u.shareUserCompanyNameShot = un.substr(0,8)+'...'
                // }else{
                     u.shareUserCompanyNameShot = un;
                // }

                tags = u.tags.split(',');
                u.shareTagsArr = [];
                u.shareTagsArr[0] = tags[0];
                u.shareTagsArr[1] = tags[1];
            });

            return res;
        }
    }

})();
