(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('shareLists', shareLists);

    /** @ngInject */
    function shareLists($http,$log,teambookConfig) {

        this.getShareLists = getShareLists;

        function getShareLists(userId) {

            var apiHost = teambookConfig.apiHost;
            return $http.get(apiHost + '/api/share/getShareListByUserId?userId='+userId)
                .then(shareComplete)
                .catch(shareFailed);

            function shareComplete(response) {
                //console.log(angular.toJson(response.data.data));
                return response.data.data;
            }

            function shareFailed(error) {
                $log.error('XHR Failed for getUser.\n' + angular.toJson(error.data, true));
            }
        }
    }

})();
