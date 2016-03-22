(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('companygoodmembers', CompanyGoodMembers);

    /** @ngInject */
    function CompanyGoodMembers($http,$log,teambookConfig) {

        this.getCompanyGoodMembers = getCompanyGoodMembers;

        function getCompanyGoodMembers(companyId) {

            var response = {
                "size" : 3,
                "info" : "goodmembers",
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

            //return $http.get(apiHost + '/aip/members?id='+companyId+'&sort=level')
            //    .then(getCompanyGoodMembersComplete)
            //    .catch(getCompanyGoodMembersFailed);
            //
            //  function getCompanyGoodMembersComplete(response) {
                  return response.data;
            //  }
            //
            //  function getCompanyGoodMembersFailed(error) {
            //      $log.error('XHR Failed for getCompanyGoodMembers.\n' + angular.toJson(error.data, true));
            //  }
        }
    }

})();
