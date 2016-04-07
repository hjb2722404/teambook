(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('createShare', createShare);


  /** @ngInject */
  function createShare() {
      var directive = {
          restrict: 'E',
          templateUrl: 'app/main/createShare/create_share.html',
          scope: {},
          controller: CreateShareController,
          controllerAs: 'vm',
          bindToController: true,
          replace: true
      };

      return directive;


      /** @ngInject */
      function CreateShareController($location,user) {
          var vm = this;
          var userInstance = user.getUser();
          var userId = userInstance.data.id;

          vm.isShowBox = false;


          $("#pickFiles").on("click",function(){
            
          })

          $("#upFileBtn").on("click",function(){
              var secretId = "AKIDWayZfjyrDvSVssoYWb7ZrTdIhJ2CFyvk";
              if (!!secretId) {
                  accountDone('pickFiles',secretId,'false','false',null,'分类1');
              }
          });
          /**
           *
           * @param upBtnId 上传按钮ID
           * @param secretId 云api secretId
           * @param isTranscode 是否转码
           * @param isWatermark 是否设置水印
           * @param [transcodeNotifyUrl] 转码成功后的回调
           * @param [classId] 分类ID
           */
          function accountDone(upBtnId,secretId, isTranscode, isWatermark,transcodeNotifyUrl,classId) {
              var $             = qcVideo.get('$'),
                  ErrorCode     = qcVideo.get('ErrorCode'),
                  Log           = qcVideo.get('Log'),
                  JSON          = qcVideo.get('JSON'),
                  util          = qcVideo.get('util'),
                  Code          = qcVideo.get('Code'),
                  Version       = qcVideo.get('Version');

              var secret_key = "HeRddNQ0xYTRbLrHmmAXb0zhkhtdnZM2";
              qcVideo.uploader.init(
                  {
                    web_upload_url: 'http://vod.qcloud.com/v2/index.php',
                    secretId: secretId,
                    secertKey: secret_key,
                    //签名
                    getSignature: function(argStr,cd){
                      
                    },

                    upBtnId: upBtnId,
                    isTranscode: isTranscode,
                    isWatermark: isWatermark,
                    after_sha_start_upload: true,
                    transcodeNotifyUrl: transcodeNotifyUrl,
                    classId: classId
                  },
                  {
                    //回调 更新文件状态和进度
                    onFileUpdate: function(args){
                      
                      console.log(
                        '---文件名：' + args.name +
                        '---大小：' + util.getHStorage(args.size) +
                        '---状态：' + util.getFileStatusName(args.status) + 
                        '---进度：' + args.percent  + '%'
                      );

                    },
                    //文件状态发生变化
                    onFileStatus: function(info){
                      //$("#share-name").val("=====");
                      console.log(JSON.stringify(info));
                    },
                    //上传错误文件过滤提示
                    onFileerError: function(args){

                    }
                  }
              );
              $("#upLoad").on('click',function(){
                  qcVideo.uploader.startUpload();
              })
          }

      }
  }

})();
