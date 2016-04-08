(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('getData', GetData);

    /** @ngInject */
    function GetData($http,$log,teambookConfig) {

        // 账号信息
        this.getUserData = getUserData;
        // 教育经历
        this.getEducation = getEducation;
        // 工作经验
        this.getResume = getResume;
        // 个人荣誉
        this.getHonor = getHonor;

        var apiHost = teambookConfig.apiHost;

        function getUserData(userId) {

            return $http.get(apiHost+'/api/user/getUserById?id='+userId)
                .then(getComplete)
                .catch(getFailed);
        }
        function getEducation(userId) {

            return $http.get(apiHost + '/api/resume/getUserEducationByUserId?userId=' + userId)
                .then(getComplete)
                .catch(getFailed);
        }
        function getResume(userId) {

            return $http.get(apiHost + '/api/resume/getUserResumeByUserId?userId=' + userId)
                .then(getComplete)
                .catch(getFailed);
        }
        function getHonor(userId) {

            return $http.get(apiHost + '/api/resume/getUserHonerByUserId?userId=' + userId)
                .then(getComplete)
                .catch(getFailed);
        }

        function getComplete(response) {
            console.log(angular.toJson(response.data.data));
            return response.data.data;
        }

        function getFailed(error) {
            $log.error('XHR Failed for getUser.\n' + angular.toJson(error.data, true));
        }

    }

})();
