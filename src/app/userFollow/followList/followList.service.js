(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('followLists', FollowLists);

    /** @ngInject */
    function FollowLists($http,$log,teambookConfig) {

        this.getLists = getLists;

        function getLists(userId) {

            var apiHost = teambookConfig.apiHost;
            return $http.get(apiHost + '/api/fan/getFanUserByUserId?userId='+userId)
                .then(getCompanySharesComplete)
                .catch(getCompanySharesFailed);

            function getCompanySharesComplete(response) {
                console.log(response.data.data);
                return response.data.data;
            }

            function getCompanySharesFailed(error) {
                $log.error('XHR Failed for getUser.\n' + angular.toJson(error.data, true));
            }
        }
    }

})();
