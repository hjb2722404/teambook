(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('followList', FollowList);

    /** @ngInject */
    function FollowList($http,$log,teambookConfig) {

        this.getFollows = getFollows;
        this.getFans = getFans;

        function getFollows(userId) {

            var apiHost = teambookConfig.apiHost;

            return $http.get(apiHost + '/api/care/getCareListByUserId' + userId)
                .then(getComplete)
                .catch(getFailed);

            function getComplete(response) {
                
                return response.data.data;
            }

            function getFailed(error) {
                $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
            }
        }

    }

})();
