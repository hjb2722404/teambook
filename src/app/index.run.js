(function() {
  'use strict';

  angular
    .module('teambookWww')
    .run(runBlock);

  /** @ngInject */
  function runBlock($location,$http,user,teambookConfig,toastr) {

    //$http.get(teambookConfig.apiBaseUrl + "/health").then(function(){}, function () {
    //  toastr.error("无法连接接口服务器,请联系管理员!");
    //});
    $location.pre = angular.copy($location.path());

    if(angular.isUndefined(user.getUser())){
      $location.path("/login");
    }

  }

})();
