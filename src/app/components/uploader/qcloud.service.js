/**
 * 使用腾讯云
 */
(function () {
  'use strict';

  angular
    .module('teambookWww')
    .service('qcloud', QCloudService);

  /** @ngInject */
  function QCloudService($q, $http, $cookies, $log, Upload,teambookConfig) {

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
     */
    function getAppSign() {

      var qcloud = $cookies.get(COOKIE_QCLOUD_COS);
      if (qcloud && qcloud.sign) {
        return {
          then: function () {

          }
        };
      } else {
        var getSignUrl = teambookConfig.apiHost + "/api/qcloud/getSign";
        return $http.get(getSignUrl)
          .then(getSignComplete)
          .catch(getSignFailed);
      }


      function getSignComplete(res) {
        if (res.data.code == 200) {
          $cookies.put(COOKIE_QCLOUD_COS, res.data.data);
          return res.data.data;
        }
        $log.error('XHR Failed for get Sign.\n' + res.msg);
        return $q.reject(res);
      }

      function getSignFailed(error) {
        $log.error('XHR Failed for getSign.\n' + angular.toJson(error.data, true));
        return $q.reject(error);
      }

    }

    function updateFolder(files, cb) {

    }

    function updateFile(fileContent) {


    }

    function deleteFolder(files, cb) {

    }

    function deleteFile(files, cb) {

    }

    function getFolderStat(files, cb) {

    }

    function getFileStat(files, cb) {

    }

    function createFolder(files, cb) {

    }

    function getFolderList() {

    }

    function uploadFile(file) {

      return getAppSign()
        .then(function (qcloud) {
          var remotePath = generatorFilename(file.name);
          var upload_url = teambookConfig.cosapi_cgi_url + "/"
            + qcloud.appId + "/" + qcloud.bucketName + encodeURI(remotePath)
            + "?sign=" + encodeURIComponent(qcloud.sign);


          return Upload.upload({
            url: upload_url,
            data: {op: 'upload', 'fileContent': file}
          });

        })
        .catch(function (res) {
          return $q.reject(res);
        });
    }

    /**
     * 当前时间戳 + 4位随机数
     * @returns {*}
     */
    function generatorFilename(filename) {
      var filenameSplits = filename.split("."),
          suffix = filenameSplits[filenameSplits.length -1];

      return new Date().getTime() + parseInt(Math.random() * 1000) + "." + suffix;
    }
  }

})();
