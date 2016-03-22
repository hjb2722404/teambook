(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('growthHistory', GrowthHistory);

    /** @ngInject */
    function GrowthHistory($http,$log,teambookConfig) {

        this.getGrowthHistory = getGrowthHistory;

        function getGrowthHistory(userId) {

            var response = {
                "size" : 3,
                "info" : "growth-history",
                "data" : [
                    {
                        "userLogo" : "./assets/images/user2.png" ,
                        "userName" : "用户一",
                        "userZhiwei" : "技术部 研发总监",
                        "weekShare" : 6 ,
                        "weekLearn" : 13
                    },

                    {
                        "userLogo" : "./assets/images/user4.png" ,
                        "userName" : "用户二",
                        "userZhiwei" : "技术部 研发总监",
                        "weekShare" : 6 ,
                        "weekLearn" : 13
                    },

                    {
                        "userLogo" : "./assets/images/user5.png" ,
                        "userName" : "用户三",
                        "userZhiwei" : "技术部 研发总监",
                        "weekShare" : 6 ,
                        "weekLearn" : 13
                    }
                ]
            };

            //var apiHost = teambookConfig.apiHost;

            //return $http.get(apiHost + '/aip/members?id='+userId+'&sort=level')
            //    .then(getGrowthHistoryComplete)
            //    .catch(getGrowthHistoryFailed);
            //
            //  function getGrowthHistoryComplete(response) {
                  return response.data;
            //  }
            //
            //  function getGrowthHistoryFailed(error) {
            //      $log.error('XHR Failed for getGrowthHistory.\n' + angular.toJson(error.data, true));
            //  }
        }
    }

})();
