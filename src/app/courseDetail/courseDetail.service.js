(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('courseDetail', courseDetail);

    /** @ngInject */
    function courseDetail($http,$log,teambookConfig) {

        this.getcourseDetail = getcourseDetail;
        this.getcourseChildren =getcourseChildren;

        function getcourseDetail(courseId) {

            var apiHost = teambookConfig.apiHost;

            return $http.get(apiHost + '/api/course/getCourseById?id=' + courseId)
                .then(getCourseComplete)
                .catch(getCourseFailed);

            function getCourseComplete(response) {
                return response.data.data;
            }

            function getCourseFailed(error) {
                $log.error('XHR Failed for getCourses.\n' + angular.toJson(error.data, true));
            }
            
        }

        function getcourseChildren(courseId) {

            var apiHost = teambookConfig.apiHost;

            return $http.get(apiHost + '/api/course/getCourseContentByCourseId?courseId=' + courseId)
                .then(getCourseComplete)
                .catch(getCourseFailed);

            function getCourseComplete(response) {
                var result =  response.data.data;
                result = dataFormat(result);
                return result;
            }

            function getCourseFailed(error) {
                $log.error('XHR Failed for getCourses.\n' + angular.toJson(error.data, true));
            }

        }

        function dataFormat(res){
            angular.forEach(res,function(s){
                var isStudy = s.isStudy;
                if(isStudy == 1){
                    s.isStudyState = "未学习";
                }else {
                    s.isStudyState = "已学习";
                }
            });

            return res;
        }
    }

})();
