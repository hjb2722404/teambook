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
