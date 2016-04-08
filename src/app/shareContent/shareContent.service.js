(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('shareContents', ShareContents);

    /** @ngInject */
    function ShareContents($http,$log,teambookConfig) {

        this.getShareContents = getShareContents;

        function getShareContents(shareId) {

            var apiHost = teambookConfig.apiHost;
            console.log(apiHost+'/api/share/getShareById?id=' + shareId);

            return $http.get(apiHost + '/api/share/getShareById?id=' + shareId)
                .then(getContentComplete)
                .catch(getContentFailed);

            function getContentComplete(response) {
                return response.data.data;
            }

            function getContentFailed(error) {
                $log.error('XHR Failed for getContents.\n' + angular.toJson(error.data, true));
            }

            //return {
            //    "code" : "200",
            //    "msg" : "contents",
            //    "data" : {
            //        "id" : 1,
            //        "name" : "如何给自己的工作做重要度排序",
            //        "category" : "技术",
            //        "content" : "分享知识介绍",
            //        "tags" : "标签1,标签2,标签3",
            //        "surfaceImgUrl" : "./assets/images/course.jpg",
            //        "videoUrl" : "http://www.aaa.com/a/1.mp4",
            //        "attachemntUrl" : "http://www.aaa.com/a/1.ppt",
            //        "allowPublish" : "1",
            //        "score" : "7.8",
            //        "createTime" : "2013-11-22",
            //        "userId" :1,
            //        "userType" : 1,
            //        "playCount" : 225
            //    }
            //};
        }
    }

})();
