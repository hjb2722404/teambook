(function () {
  'use strict';

  angular
    .module('teambookWww')
    .factory('user', User);

  /** @ngInject */
  function User($cookies, $http, teambookConfig, toastr) {

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
     * @param cb
     */
    function login(user, cb) {

      function loginSuccessFun(res) {
        user = angular.extend(user, res);
        $cookies.put(COOKIE_USER_NAME, user);
        cb && cb();
      }

      function loginErrorFun(res) {
        switch (res.status) {
          case 401:
            toastr.error("用户名或者密码错误");
            break;
          case 403:
            toastr.error("没有权限执行该操作");
            break;
          default:
            toastr.error("系统错误");
            break;
        }

      }

      $http.post(teambookConfig.apiBaseUrl + "/admin/user/login", user).then(loginSuccessFun, loginErrorFun);
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
