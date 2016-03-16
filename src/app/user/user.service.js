(function () {
  'use strict';

  angular
    .module('teambookWww')
    .factory('user', User);

  /** @ngInject */
  function User($cookies) {

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
    function login(cb) {
      $cookies.put(COOKIE_USER_NAME, {username:"xiaolin"});
      cb && cb();
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
