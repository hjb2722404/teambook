(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('userinfos', UserInfos);

    /** @ngInject */
    function UserInfos($http,$log,teambookConfig) {

        this.getUserInfos = getUserInfos;

        function getUserInfos(userId) {

            var apiHost = teambookConfig.apiHost;

            //return $http.get(apiHost + '/aip/user?id=' + userId)
            //return $http.get('app/main/userInfo/userInfo.json')
            //    .then(getUserComplete)
            //    .catch(getUserFailed);
            //
            //function getUserComplete(response) {
            //    return response.data;
            //}
            //
            //function getUserFailed(error) {
            //    $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
            //}
            return {
                "userId" : 1,
                "userName" : "小雅",
                "userDec" : "一段话介绍一下自己吧",
                "userLevel" : 6,
                "userIsVip" : true,
                "userZhiwei" : "设计部 UI设计师",
                "userLogo" : "./assets/images/user-logo.png",
                "userCompany" : "南京旭强信息有限科技公司",
                "userEmail" : "123@123.com",
                "userSex" : "女"
            }
        }
    }

})();
