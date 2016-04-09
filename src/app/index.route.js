(function () {
  'use strict';

  angular
    .module('teambookWww')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $stateProvider
      .state('company', {
        url: '/company',
        templateUrl: 'app/company/company.html',
        controller: 'CompanyController',
        controllerAs: 'company'
      });

    $stateProvider
      .state('college', {
          url: '/college',
          templateUrl: 'app/college/college.html',
          controller: 'CollegeController',
          controllerAs: 'college'
      });

    $stateProvider
      .state('editData', {
          url: '/editData',
          templateUrl: 'app/editData/editData.html',
          controller: 'editController',
          controllerAs: 'EditController'
      })
    $stateProvider
      .state('growthPath', {
          url: '/growthPath',
          templateUrl: 'app/growthPath/growthPath.html',
          controller: 'growthPath',
          controllerAs: 'GrowthPath'
      })

    $stateProvider
      .state('userFollow', {
          url: '/userFollow',
          templateUrl: 'app/userFollow/userFollow.html',
          controller: 'userFollow',
          controllerAs: 'UserFollow'
      })

    $stateProvider
      .state('shareEdit', {
          url: '/shareEdit',
          templateUrl: 'app/shareEdit/shareEdit.html',
          controller: 'shareEdit',
          controllerAs: 'ShareEdit'
      })

      $stateProvider
          .state('content', {
              url: '/shareContent',
              templateUrl: 'app/shareContent/shareContent.html',
              controller: 'ShareContentController',
              controllerAs: 'content'
          });

      $stateProvider
          .state('course', {
              url: '/courseDetail',
              templateUrl: 'app/courseDetail/course_detail.html',
              controller: 'CourseDetailController',
              controllerAs: 'course'
          });

      $stateProvider
          .state('member', {
              url: '/member',
              templateUrl: 'app/member/member.html',
              controller: 'MemberController',
              controllerAs: 'member'
          });

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/user/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      });

    $stateProvider
      .state('logout', {
        url: '/logout',
        controller: 'LogoutController',
        controllerAs: 'logout'
      });





    $urlRouterProvider.otherwise('/');
  }

})();
