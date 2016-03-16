(function () {
  'use strict';

  angular
    .module('teambookWww')
    .config(config);

  /** @ngInject */
  function config($logProvider, $httpProvider,toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.transformRequest = function(obj){
      var str = [];
      for(var p in obj){
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
      return str.join("&");
    };

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 1000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.progressBar = true;
  }

  angular.module('teambookWww')
    .constant('teambookConfig', {

      apiBaseUrl: "http://localhost:8080"

    });

})();
