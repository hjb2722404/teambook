(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('usercurvisitors', UserCurVisitors);

    /** @ngInject */
    function UserCurVisitors($http,$log,teambookConfig) {

        this.getUserCurVisitors = getUserCurVisitors;

        function getUserCurVisitors(userId,size) {

            //var response = {
            //    "size" : 6,
            //    "info" : "visitor",
            //    "data" : [
            //        {
            //            "userName" : "用户一" ,
            //            "visitTime" : "3月17日" ,
            //            "userLogo" : "./assets/images/user2.png"
            //        },
            //
            //        {
            //            "userName" : "用户二" ,
            //            "visitTime" : "3月17日" ,
            //            "userLogo" : "./assets/images/user3.png"
            //        },
            //
            //        {
            //            "userName" : "用户三" ,
            //            "visitTime" : "3月17日" ,
            //            "userLogo" : "./assets/images/user4.png"
            //        },
            //
            //        {
            //            "userName" : "用户四" ,
            //            "visitTime" : "3月17日" ,
            //            "userLogo" : "./assets/images/user5.png"
            //        },
            //
            //        {
            //            "userName" : "用户五" ,
            //            "visitTime" : "3月17日" ,
            //            "userLogo" : "./assets/images/user.png"
            //        },
            //
            //        {
            //            "userName" : "用户六" ,
            //            "visitTime" : "3月17日" ,
            //            "userLogo" : "./assets/images/user1.png"
            //        }
            //    ]
            //};
            var apiHost = teambookConfig.apiHost;
            return $http.get(apiHost + '/api/visit/getVisitUserByUserId?userId='+userId+'&showNum='+size)
                .then(getUserCurVisitorsComplete)
                .catch(getUserCurVisitorsFailed);

              function getUserCurVisitorsComplete(response) {
                  return response.data;
              }

              function getUserCurVisitorsFailed(error) {
                  $log.error('XHR Failed for getUserCurVisitors.\n' + angular.toJson(error.data, true));
              }
        }
    }

})();
