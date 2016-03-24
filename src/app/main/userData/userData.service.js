(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('userdata', UserData);

    /** @ngInject */
    function UserData($http,$log,teambookConfig) {

        this.getUserData = getUserData;

        function getUserData(userId) {

            //return {
            //    "follows" : 40,
            //    "shares" : 28,
            //    "fans" : 36
            //};
            var apiHost = teambookConfig.apiHost;

            return $http.get(apiHost + '/api/user/getSocialByUserId?userId=' + userId)
                .then(getUserDataComplete)
                .catch(getUserDataFailed);

            function getUserDataComplete(response) {

                console.log(response.data);
                return response.data;

            }

            function getUserDataFailed(error) {
                $log.error('XHR Failed for getUserData.\n' + angular.toJson(error.data, true));
            }
        }
    }

})();
