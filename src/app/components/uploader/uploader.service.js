/**
 * 使用腾讯云
 */
(function () {
  'use strict';

  angular
    .module('teambookWww')
    .service('uploader', Uploader);

  /** @ngInject */
  function Uploader($http, teambookConfig) {
    var service = {
      upload: upload
    };

    return service;

    function upload(files,cb) {

      getSign(function (sign) {

      });
    }

  }

})();
