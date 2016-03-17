/**
 * 使用腾讯云
 */
(function () {
  'use strict';

  angular
    .module('teambookWww')
    .service('qcloud', QCloud);

  /** @ngInject */
  function QCloud($http, $cookies, teambookConfig) {

    var COOKIE_QCLOUD_COS = "qcloud_cos";

    var service = {
      getAppSign: getAppSign,
      updateFolder: updateFolder,
      updateFile: updateFile,
      deleteFolder: deleteFolder,
      deleteFile: deleteFile,
      getFolderStat: getFolderStat,
      getFileStat: getFileStat,
      createFolder: createFolder,
      getFolderList: getFolderList,
      uploadFile: uploadFile
    };

    return service;

    /**
     * 获取签名,如果本地缓存有,则直接callback,否则
     * 从业务服务器上获取签名,然后根据有效期缓存
     * @param cb
     */
    function getAppSign(success, error) {

      function successFn(res) {
        $cookies.put(COOKIE_QCLOUD_COS, res);
        success && success(res.sign);
      }

      function errorFn(res) {
        error && error(res);
      }

      var qcloud = $cookies.get(COOKIE_QCLOUD_COS);
      if (qcloud && qcloud.sign) {
        success(qcloud);
      } else {
        $http.get(teambookConfig.apiBaseUrl + "/api/qcloud/getSign").then(successFn, errorFn);
      }

    }

    function updateFolder(files, cb) {

      getAppSign(function (qcloud) {
        var upload_url = teambookConfig.cosapi_cgi_url + qcloud.appId + "/" + qcloud.buketName + encodeURI(remotePath)
      });


    }

    function updateFile(fileContent, success,error) {

      function uploadFileSuccessFn(res){
        success && success(res);
      }

      function uploadFileErrorFn(res){
        error && error(res);
      }

      getAppSign(function (qcloud) {

        var remotePath = md5(fileContent);
        var upload_url = teambookConfig.cosapi_cgi_url
          + qcloud.appId + "/" + qcloud.buketName + encodeURI(remotePath)
          + "?sign=" + encodeURIComponent(qcloud.sign);

        var formData = new FormData();
        formData.append('op', 'upload');
        formData.append('fileContent', fileContent);

        $http.post(upload_url).then(uploadFileSuccessFn,uploadFileErrorFn);

      });


    }

    function deleteFolder(files, cb) {

      getAppSign(function (sign) {

      });


    }

    function deleteFile(files, cb) {

      getAppSign(function (sign) {

      });


    }

    function getFolderStat(files, cb) {

      getAppSign(function (sign) {

      });


    }

    function getFileStat(files, cb) {

      getAppSign(function (sign) {

      });


    }

    function createFolder(files, cb) {

      getAppSign(function (sign) {

      });


    }

    function getFolderList(files, cb) {

      getAppSign(function (sign) {

      });


    }

    function uploadFile(files, cb) {

      getAppSign(function (sign) {

      });


    }


  }

})();
