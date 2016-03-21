(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('companycurvisitors', CompanyCurVisitors);

    /** @ngInject */
    function CompanyCurVisitors($http,$log,teambookConfig) {

        this.getCompanyCurVisitors = getCompanyCurVisitors;

        function getCompanyCurVisitors(companyId) {

            var response = {
                "size" : 6,
                "info" : "visitor",
                "data" : [
                    {
                        "userName" : "用户一" ,
                        "visitTime" : "3月17日" ,
                        "userLogo" : "./assets/images/user2.png"
                    },

                    {
                        "userName" : "用户二" ,
                        "visitTime" : "3月17日" ,
                        "userLogo" : "./assets/images/user3.png"
                    },

                    {
                        "userName" : "用户三" ,
                        "visitTime" : "3月17日" ,
                        "userLogo" : "./assets/images/user4.png"
                    },

                    {
                        "userName" : "用户四" ,
                        "visitTime" : "3月17日" ,
                        "userLogo" : "./assets/images/user5.png"
                    },

                    {
                        "userName" : "用户五" ,
                        "visitTime" : "3月17日" ,
                        "userLogo" : "./assets/images/user.png"
                    },

                    {
                        "userName" : "用户六" ,
                        "visitTime" : "3月17日" ,
                        "userLogo" : "./assets/images/user1.png"
                    }
                ]
            };
            //var apiHost = teambookConfig.apiHost;
            //
            //return $http.get(apiHost + '/aip/Visitors?type=company&id='+companyId)
            //    .then(getCompanyCurVisitorsComplete)
            //    .catch(getCompanyCurVisitorsFailed);
            //
            //  function getCompanyCurVisitorsComplete(response) {
                  return response.data;
            //  }
            //
            //  function getCompanyCurVisitorsFailed(error) {
            //      $log.error('XHR Failed for getCompanyCurVisitors.\n' + angular.toJson(error.data, true));
            //  }
        }
    }

})();
