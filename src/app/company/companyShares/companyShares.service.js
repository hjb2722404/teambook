(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('companyshares', CompanyShares);

    /** @ngInject */
    function CompanyShares($http,$log,teambookConfig) {

        this.getCompanyShares = getCompanyShares;

        function getCompanyShares(companyId,page,size,sort) {

            var response = {
                "size " : 9,
                "info" : "share",
                "data" : [
                    {
                        "shareId" : 3,
                        "shareTitle" : "3如何对自己的工作进行排序方法",
                        "shareLitpic" : "./assets/images/video-litpic.png",
                        "shareTags" : "标签,标签2,标签3",
                        "shareViews" :300,
                        "shareUserName" : "刘娜",
                        "shareUserLogo" : "./assets/images/user1-small.png",
                        "shareCompanyName" : "南京旭强信息科技有限",
                        "shareType" : "video"
                    },

                    {
                        "shareId" : 6,
                        "shareTitle" : "6如何对自己的工作进行排序",
                        "shareLitpic" : "./assets/images/video-litpic.png",
                        "shareTags" : "标签1,标签2,标签3",
                        "shareViews" :300,
                        "shareUserName" : "刘娜",
                        "shareUserLogo" : "./assets/images/user2-small.png",
                        "shareCompanyName" : "南京旭强信息科技有限公司",
                        "shareType" : "video"
                    },

                    {
                        "shareId" : 2,
                        "shareTitle" : "2如何对自己的工作进行排序",
                        "shareLitpic" : "./assets/images/doc-litpic.png",
                        "shareTags" : "标签1,标签2,标签3",
                        "shareViews" :300,
                        "shareUserName" : "刘娜",
                        "shareUserLogo" : "./assets/images/user-small.png",
                        "shareCompanyName" : "南京旭强信息科技有限公司",
                        "shareType" : "doc"
                    },

                    {
                        "shareId" : 1,
                        "shareTitle" : "1如何对自己的工作进行排序",
                        "shareLitpic" : "./assets/images/video-litpic.png",
                        "shareTags" : "标签1,标签2,标签3",
                        "shareViews" :300,
                        "shareUserName" : "刘娜",
                        "shareUserLogo" : "./assets/images/user3-small.png",
                        "shareCompanyName" : "南京旭强信息科技有限公司",
                        "shareType" : "video"
                    },

                    {
                        "shareId" : 5,
                        "shareTitle" : "5如何对自己的工作进行排序",
                        "shareLitpic" : "./assets/images/doc-litpic.png",
                        "shareTags" : "标签1,标签2,标签3",
                        "shareViews" :300,
                        "shareUserName" : "刘娜",
                        "shareUserLogo" : "./assets/images/user4-small.png",
                        "shareCompanyName" : "南京旭强信息科技有限公司",
                        "shareType" : "doc"
                    },

                    {
                        "shareId" : 4,
                        "shareTitle" : "4如何对自己的工作进行排序",
                        "shareLitpic" : "./assets/images/video-litpic.png",
                        "shareTags" : "标签1,标签2,标签3",
                        "shareViews" :300,
                        "shareUserName" : "刘娜",
                        "shareUserLogo" : "./assets/images/user5-small.png",
                        "shareCompanyName" : "南京旭强信息科技有限公司",
                        "shareType" : "video"
                    },

                    {
                        "shareId" : 8,
                        "shareTitle" : "8如何对自己的工作进行排序",
                        "shareLitpic" : "./assets/images/doc-litpic.png",
                        "shareTags" : "标签1,标签2,标签3",
                        "shareViews" :300,
                        "shareUserName" : "刘娜",
                        "shareUserLogo" : "./assets/images/user6-small.png",
                        "shareCompanyName" : "南京旭强信息科技有限公司",
                        "shareType" : "doc"
                    },

                    {
                        "shareId" : 7,
                        "shareTitle" : "7如何对自己的工作进行排序",
                        "shareLitpic" : "./assets/images/video-litpic.png",
                        "shareTags" : "标签1,标签2,标签3",
                        "shareViews" :300,
                        "shareUserName" : "刘娜",
                        "shareUserLogo" : "./assets/images/user7-small.png",
                        "shareCompanyName" : "南京旭强信息科技有限公司",
                        "shareType" : "video"
                    }
                ]
            };

            //if (!size) {
            //    size = 8;
            //}
            //
            //if(!page){
            //    page = 1;
            //}
            //
            //if(!sort){
            //    sort = 'lasttime,asc'
            //}
            //
            //var apiHost = teambookConfig.apiHost;
            //
            //return $http.get(apiHost + '/aip/shares?type=company&id=' + companyId + '&page=' + page + '&size=' + size + '&sort=' + sort)
            //    .then(getCompanySharesComplete)
            //    .catch(getCompanySharesFailed);
            //
            //function getCompanySharesComplete(response) {
                return response.data;
            //}
            //
            //function getCompanySharesFailed(error) {
            //    $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
            //}
        }
    }

})();
