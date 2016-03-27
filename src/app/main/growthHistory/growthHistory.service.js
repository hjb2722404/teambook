(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('growthHistory', GrowthHistory);

    /** @ngInject */
    function GrowthHistory($http,$log,teambookConfig) {

        this.getGrowthHistory = getGrowthHistory;

        function getGrowthHistory(userId) {

            //var response = {
            //    "size" : 3,
            //    "info" : "growth-history",
            //    "data" : [
            //        {
            //           "growthTitle" : "如何对自己的工作进行排序",
            //            "growthType" : "share",
            //            "growthTime" : "03-21"
            //        },
            //        {
            //            "growthTitle" : "如何对自己的工作进行排序",
            //            "growthType" : "study",
            //            "growthTime" : "03-21"
            //        },
            //        {
            //            "growthTitle" : "如何对自己的工作进行排序",
            //            "growthType" : "college",
            //            "growthTime" : "03-21"
            //        }
            //
            //
            //    ]
            //};

            var apiHost = teambookConfig.apiHost;

            return $http.get(apiHost + '/api/study/getStudyTrackByUserId?userId='+userId)
                .then(getGrowthHistoryComplete)
                .catch(getGrowthHistoryFailed);

              function getGrowthHistoryComplete(response) {
                  //console.log("growth:"+angular.toJson(response.data.data));
                  return response.data.data;

              }

              function getGrowthHistoryFailed(error) {
                  $log.error('XHR Failed for getGrowthHistory.\n' + angular.toJson(error.data, true));
              }
        }
    }

})();
