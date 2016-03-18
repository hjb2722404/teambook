(function () {
  'use strict';

  angular
    .module('teambookWww')
    .factory('user', User);

  /** @ngInject */
  function User($cookies, $http, $q, teambookConfig) {

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
     * @param username
     * @param password
     */
    function login(username, password) {

      var login_url = teambookConfig.apiBaseUrl + "/admin/user/login";

      return $http.post(login_url, {userName: username, password: password})
        .then(loginComplete)
        .catch(loginFailed);

      function loginComplete(res) {

        var user = res.data;
        $cookies.put(COOKIE_USER_NAME, user);
        return user;
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
      return $cookies.get(COOKIE_USER_NAME);
    }

    /**
     * 检查是否登陆
     * @param cb
     */
    function checkAuth() {

    }

  }
})();
