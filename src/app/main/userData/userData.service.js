(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('userdata', UserData);

    /** @ngInject */
    function UserData($http,$log,teambookConfig) {

        this.getUserData = getUserData;

        function getUserData(userId) {

            var apiHost = teambookConfig.apiHost;

            return $http.get(apiHost + '/api/user/getSocialByUserId?userId=' + userId)
                .then(getUserDataComplete)
                .catch(getUserDataFailed);

            function getUserDataComplete(response) {

                return response.data.data;

            }

            function getUserDataFailed(error) {
                $log.error('XHR Failed for getUserData.\n' + angular.toJson(error.data, true));
            }
        }
    }

})();
