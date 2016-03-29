(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('courses', Courses);

    /** @ngInject */
    function Courses($http,$log,teambookConfig) {

        this.getCourses = getCourses;

        function getCourses() {

            var apiHost = teambookConfig.apiHost;

            return $http.get(apiHost + '/api/course/getCourseList')
                .then(getCompanySharesComplete)
                .catch(getCompanySharesFailed);

            function getCompanySharesComplete(response) {

                var results = response.data.data;
                results = dataFormat(results);
                return results;
            }

            function getCompanySharesFailed(error) {
                $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
            }
        }

        function dataFormat(res){
            angular.forEach(res,function(c,index){
                var tags = [];
                tags = c.tags.split(',');
                c.courseTagsArr = tags;

                var cat = c.courseCategory;
                switch (cat) {
                    case 1:
                        c.catIndex = 'cat1';
                        break;
                    case 2:
                        c.catIndex = 'cat2';
                        break;
                    case 3:
                        c.catIndex = 'cat3';
                        break;
                    case 4:
                        c.catIndex = 'cat4';
                        break;
                    default :
                        c.catIndex ='';
                        break;
                }
            });
            return res;
        }
    }

})();
