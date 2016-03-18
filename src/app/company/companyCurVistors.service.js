(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('companycurvistors', CompanyCurVistors);

    /** @ngInject */
    function CompanyCurVistors($http) {

        this.getCompanyCurVistors = getCompanyCurVistors;

        function getCompanyCurVistors(companyId) {

            var apiHost = teambookConfig.apiHost;

            return $http.get(apiHost + '/aip/Vistors?type=company&id='+companyId)
                .then(getCompanyCurVistorsComplete)
                .catch(getCompanyCurVistorsFailed);

              function getCompanyCurVistorsComplete(response) {
                  return response.data;
              }

              function getCompanyCurVistorsFailed(error) {
                  $log.error('XHR Failed for getCompanyCurVistors.\n' + angular.toJson(error.data, true));
              }
        }
    }

})();
