(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('shareCon', shareCon);


  /** @ngInject */
  function shareCon() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/shareContent/shareCon/share_con.html',
      scope: {},
      controller: ShareConController,
      controllerAs: 'vm',
      bindToController: true,
      replace:true
    };

    return directive;

    /** @ngInject */
    function ShareConController($location,shareContents,userinfos) {
        var vm = this;
        var shareId = $location.search().shareId;
        vm.shareCons = [];
        vm.userInfo = [];
        vm.dom = angular.element("#share-video");
        $(function(){
          getShareCons(1);
        });
        


        function getShareCons(shareId) {

            return shareContents.getShareContents(shareId)
                .then(function(res){
                    vm.shareCons = res;
                    var userId = res.userId;
                    vm.shareCons.tags = vm.shareCons.tags.replace(',','/');
                    
                     userinfos.getUserInfos(userId)
                         .then(function(response){
                            vm.userInfo =  response;
                              // 腾讯云video标签的代码

                              new qcVideo.Player("id_video",{
                                  "auto_play":"1",
                                  "file_id":"14651978969257210548",
                                  "app_id":"1251994458",
                                  "width":1000,
                                  "height":500,
                                  "remember":1
                              });
                              console.log("视频加载完成？");

                          })
                         .catch();

                })
                .catch();
        }
    }
  }

})();
