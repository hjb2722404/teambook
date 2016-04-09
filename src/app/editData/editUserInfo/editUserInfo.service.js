(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('getData', GetData);

    /** @ngInject */
    function GetData($http,$log,teambookConfig) {

        // 账号信息
        //this.getUserData = getUserData;
        // 教育经历
        //this.getEducation = getEducation;
        // 工作经验
        //this.getResume = getResume;
        // 个人荣誉
        //this.getHonor = getHonor;

        this.getDatas = getDatas;

        var apiHost = teambookConfig.apiHost;

        function getDatas(type,userId) {
            var httpUrl = '';
            switch (type) {
                case 'UserData':
                    httpUrl = apiHost + '/api/user/getUserById?id=' + userId;
                    break;
                case 'Education':
                    httpUrl = apiHost + '/api/resume/getUserEducationByUserId?userId=' + userId;
                    break;
                case 'Resume':
                    httpUrl = apiHost + '/api/resume/getUserResumeByUserId?userId=' + userId;
                    break;
                case 'Honor':
                    httpUrl = apiHost + '/api/resume/getUserHonerByUserId?userId=' + userId;
                    break;
                default:
                    httpUrl = '';
                    break;
            }
            return $http.get(httpUrl)
                        .then(getComplete)
                        .catch(getFailed);
        }
        // function getUserData(userId) {

        //     return $http.get(apiHost+'/api/user/getUserById?id='+userId)
        //         .then(getComplete)
        //         .catch(getFailed);
        // }
        // function getEducation(userId) {

        //     return $http.get(apiHost + '/api/resume/getUserEducationByUserId?userId=' + userId)
        //         .then(getComplete)
        //         .catch(getFailed);
        // }
        // function getResume(userId) {

        //     return $http.get(apiHost + '/api/resume/getUserResumeByUserId?userId=' + userId)
        //         .then(getComplete)
        //         .catch(getFailed);
        // }
        // function getHonor(userId) {

        //     return $http.get(apiHost + '/api/resume/getUserHonerByUserId?userId=' + userId)
        //         .then(getComplete)
        //         .catch(getFailed);
        // }

        function getComplete(response) {
            //console.log(angular.toJson(response.data.data));
            return response.data.data;
        }

        function getFailed(error) {
            $log.error('XHR Failed for getUser.\n' + angular.toJson(error.data, true));
        }

    }

})();
