(function () {
  'use strict';

  angular
    .module('teambookWww')
    .factory('user', User);

  /** @ngInject */
  function User($cookies,$location,  $http, $q, teambookConfig,toastr) {

    var COOKIE_USER_NAME = "user";

    var service = {
      login: login,
      logout: logout,
      getUser: getUser,
      checkAuth: checkAuth
    };

    return service;

    /**
     * 提供登陆操作
     * @param cb 回调函数
     * @param username
     * @param password
     */
    function login(username, password,autoLogin) {

        if(autoLogin){
            var date = new Date();
            date.setDate(date.getDate() + 7);
            var expires = date;
        }else{
            expires = null;
        }
      var login_url = teambookConfig.apiHost + "/api/user/login";

      return $http.post(login_url, {username: username, password: password})
        .then(loginComplete)
        .catch(loginFailed);

      function loginComplete(res) {

          if(res.data.data){
              var user = res.data;
              $cookies.putObject(COOKIE_USER_NAME, user,{"expires":expires});
              return user;
          }
          else {
              toastr.error(res.data.msg);
              return false;
          }
      }

      function loginFailed(error) {
        return $q.reject(error);
      }


    }

    /**
     * 用户登出
     * @param cb
     */
    function logout() {
      $cookies.remove(COOKIE_USER_NAME);
    }

    /**
     * 获取授权的用户
     * @param cb
     */
    function getUser() {
      return $cookies.getObject(COOKIE_USER_NAME);
    }

    /**
     * 检查是否登陆
     * @param cb
     */
    function checkAuth() {
        if(!getUser()){
            $location.path('/login');
        }
    }
  }
})();
