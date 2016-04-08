(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('growthLists', growthLists);

    /** @ngInject */
    function growthLists($http,$log,teambookConfig) {

        this.getGrowthLists = getGrowthLists;

        function getGrowthLists(userId) {

            var apiHost = teambookConfig.apiHost;
            return $http.get(apiHost + '/api/study/getStudyRecordByUserId?userId='+userId)
                .then(growthComplete)
                .catch(growthFailed);

            function growthComplete(response) {
                //console.log(angular.toJson(response.data.data));
                return response.data.data;
            }

            function growthFailed(error) {
                $log.error('XHR Failed for getUser.\n' + angular.toJson(error.data, true));
            }
        }
    }

})();
