(function () {
    'use strict';

    angular
        .module('teambookWww')
        .service('courses', Courses);

    /** @ngInject */
    function Courses($http,$log,teambookConfig) {

        this.getCourses = getCourses;

        function getCourses() {

            //var response = {
            //    "size " : 9,
            //    "info" : "courses",
            //    "data" : [
            //        {
            //            "courseId" : 1,
            //            "courseTitle" : "iOS开发中高级视频教程1",
            //            "courseDec" : "这里是视频的简短的介绍文字，不大于50字，无则用上方的大标题的标题代替，可以换一行",
            //            "courseUpTime" : "2016-03-20 15:20:36",
            //            "courseLitpic" : "./assets/images/course.jpg",
            //            "courseTags" : "标签1,标签2,标签3",
            //            "courseTeacher" : "刘娜",
            //            "courseCompany" : "南京市旭强信息科技有限公司",
            //            "courseCat" : "行政",
            //            "teacherLogo" : "./assets/images/user-small.png",
            //            "courseViews" : 300
            //        },
            //
            //        {
            //            "courseId" : 2,
            //            "courseTitle" : "iOS开发中高级视频教程2",
            //            "courseDec" : "这里是视频的简短的介绍文字，不大于50字，无则用上方的大标题的标题代替，可以换一行",
            //            "courseUpTime" : "2016-03-20 15:20:36",
            //            "courseLitpic" : "./assets/images/course.jpg",
            //            "courseTags" : "标签1,标签2,标签3",
            //            "courseTeacher" : "刘娜",
            //            "courseCompany" : "南京市旭强信息科技有限公司",
            //            "courseCat" : "行政",
            //            "teacherLogo" : "./assets/images/user1-small.png",
            //            "courseViews" : 300
            //        },
            //
            //
            //        {
            //            "courseId" : 3,
            //            "courseTitle" : "iOS开发中高级视频教程3",
            //            "courseDec" : "这里是视频的简短的介绍文字，不大于50字，无则用上方的大标题的标题代替，可以换一行",
            //            "courseUpTime" : "2016-03-20 15:20:36",
            //            "courseLitpic" : "./assets/images/course.jpg",
            //            "courseTags" : "标签1,标签2,标签3",
            //            "courseTeacher" : "刘娜",
            //            "courseCompany" : "南京市旭强信息科技有限公司",
            //            "courseCat" : "财务",
            //            "teacherLogo" : "./assets/images/user1-small.png",
            //            "courseViews" : 300
            //        },
            //
            //
            //        {
            //            "courseId" : 4,
            //            "courseTitle" : "iOS开发中高级视频教程4",
            //            "courseDec" : "这里是视频的简短的介绍文字，不大于50字，无则用上方的大标题的标题代替，可以换一行",
            //            "courseUpTime" : "2016-03-20 15:20:36",
            //            "courseLitpic" : "./assets/images/course.jpg",
            //            "courseTags" : "标签1,标签2,标签3",
            //            "courseTeacher" : "刘娜",
            //            "courseCompany" : "南京市旭强信息科技有限公司",
            //            "courseCat" : "财务",
            //            "teacherLogo" : "./assets/images/user1-small.png",
            //            "courseViews" : 300
            //        },
            //
            //
            //        {
            //            "courseId" : 5,
            //            "courseTitle" : "iOS开发中高级视频教程5",
            //            "courseDec" : "这里是视频的简短的介绍文字，不大于50字，无则用上方的大标题的标题代替，可以换一行",
            //            "courseUpTime" : "2016-03-20 15:20:36",
            //            "courseLitpic" : "./assets/images/course.jpg",
            //            "courseTags" : "标签1,标签2,标签3",
            //            "courseTeacher" : "刘娜",
            //            "courseCompany" : "南京市旭强信息科技有限公司",
            //            "courseCat" : "财务",
            //            "teacherLogo" : "./assets/images/user1-small.png",
            //            "courseViews" : 300
            //        },
            //
            //
            //        {
            //            "courseId" : 6,
            //            "courseTitle" : "iOS开发中高级视频教程6",
            //            "courseDec" : "这里是视频的简短的介绍文字，不大于50字，无则用上方的大标题的标题代替，可以换一行",
            //            "courseUpTime" : "2016-03-20 15:20:36",
            //            "courseLitpic" : "./assets/images/course.jpg",
            //            "courseTags" : "标签1,标签2,标签3",
            //            "courseTeacher" : "刘娜",
            //            "courseCompany" : "南京市旭强信息科技有限公司",
            //            "courseCat" : "技术",
            //            "teacherLogo" : "./assets/images/user1-small.png",
            //            "courseViews" : 300
            //        },
            //
            //
            //        {
            //            "courseId" : 7,
            //            "courseTitle" : "iOS开发中高级视频教程7",
            //            "courseDec" : "这里是视频的简短的介绍文字，不大于50字，无则用上方的大标题的标题代替，可以换一行",
            //            "courseUpTime" : "2016-03-20 15:20:36",
            //            "courseLitpic" : "./assets/images/course.jpg",
            //            "courseTags" : "标签1,标签2,标签3",
            //            "courseTeacher" : "刘娜",
            //            "courseCompany" : "南京市旭强信息科技有限公司",
            //            "courseCat" : "市场",
            //            "teacherLogo" : "./assets/images/user1-small.png",
            //            "courseViews" : 300
            //        },
            //
            //
            //        {
            //            "courseId" : 8,
            //            "courseTitle" : "iOS开发中高级视频教程8",
            //            "courseDec" : "这里是视频的简短的介绍文字，不大于50字，无则用上方的大标题的标题代替，可以换一行",
            //            "courseUpTime" : "2016-03-20 15:20:36",
            //            "courseLitpic" : "./assets/images/course.jpg",
            //            "courseTags" : "标签1,标签2,标签3",
            //            "courseTeacher" : "刘娜",
            //            "courseCompany" : "南京市旭强信息科技有限公司",
            //            "courseCat" : "财务",
            //            "teacherLogo" : "./assets/images/user1-small.png",
            //            "courseViews" : 300
            //        },
            //
            //
            //        {
            //            "courseId" : 9,
            //            "courseTitle" : "iOS开发中高级视频教程9",
            //            "courseDec" : "这里是视频的简短的介绍文字，不大于50字，无则用上方的大标题的标题代替，可以换一行",
            //            "courseUpTime" : "2016-03-20 15:20:36",
            //            "courseLitpic" : "./assets/images/course.jpg",
            //            "courseTags" : "标签1,标签2,标签3",
            //            "courseTeacher" : "刘娜",
            //            "courseCompany" : "南京市旭强信息科技有限公司",
            //            "courseCat" : "技术",
            //            "teacherLogo" : "./assets/images/user1-small.png",
            //            "courseViews" : 300
            //        },
            //
            //
            //        {
            //            "courseId" : 10,
            //            "courseTitle" : "iOS开发中高级视频教程10",
            //            "courseDec" : "这里是视频的简短的介绍文字，不大于50字，无则用上方的大标题的标题代替，可以换一行",
            //            "courseUpTime" : "2016-03-20 15:20:36",
            //            "courseLitpic" : "./assets/images/course.jpg",
            //            "courseTags" : "标签1,标签2,标签3",
            //            "courseTeacher" : "刘娜",
            //            "courseCompany" : "南京市旭强信息科技有限公司",
            //            "courseCat" : "市场",
            //            "teacherLogo" : "./assets/images/user1-small.png",
            //            "courseViews" : 300
            //        }
            //
            //
            //    ]
            //};

            if (!size) {
                size = 8;
            }

            if(!page){
                page = 1;
            }

            if(!sort){
                sort = 'lasttime,asc'
            }

            var apiHost = teambookConfig.apiHost;

            return $http.get(apiHost + '/aip/shares?type=company&id=' + companyId + '&page=' + page + '&size=' + size + '&sort=' + sort)
                .then(getCompanySharesComplete)
                .catch(getCompanySharesFailed);

            function getCompanySharesComplete(response) {
                return response.data;
            }

            function getCompanySharesFailed(error) {
                $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
            }
        }
    }

})();
