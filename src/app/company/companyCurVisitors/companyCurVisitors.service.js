(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('companycurvisitors', CompanyCurVisitors);

    /** @ngInject */
    function CompanyCurVisitors($http,$log,teambookConfig) {

        this.getCompanyCurVisitors = getCompanyCurVisitors;

        function getCompanyCurVisitors(companyId) {


            var apiHost = teambookConfig.apiHost;

            return $http.get(apiHost + '/api/company/getVisitById?id='+companyId)
                .then(getCompanyCurVisitorsComplete)
                .catch(getCompanyCurVisitorsFailed);

              function getCompanyCurVisitorsComplete(response) {
                  return response.data.data;
              }

              function getCompanyCurVisitorsFailed(error) {
                  $log.error('XHR Failed for getCompanyCurVisitors.\n' + angular.toJson(error.data, true));
              }
        }
    }

})();
