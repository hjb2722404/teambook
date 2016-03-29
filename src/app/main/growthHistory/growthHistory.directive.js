(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('growthHistory', growthHistory);


  /** @ngInject */
  function growthHistory() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/main/growthHistory/growth_history.html',
      scope: {},
      controller: GrowthHistoryController,
      controllerAs: 'vm',
      bindToController: true,
      replace:true
    };

    return directive;

    /** @ngInject */
    function GrowthHistoryController($location,user,growthHistory) {
        var vm = this;
        var userId;
        if($location.pre == "member"){
            userId = $location.search().id;
        }else{
            var userIncetance = user.getUser();
            userId = userIncetance.data.id;
        }
        vm.growthHistory = [];

        getGrowthHistory(userId);
        function intToString(int){
            if(int <10){
                return "0"+int;
            }else{
                return ""+int;
            }
        }

        function getGrowthHistory(userId) {

            return growthHistory.getGrowthHistory(userId)
                .then(function(res){
                    vm.growthHistory = res;

                    angular.forEach(vm.growthHistory,function(g,index){
                        var str = g.trackTime;
                        str = str.replace(/-/g,"/");
                        var date = new Date(str);
                        g.tmpTime = date;
                        var curDate = new Date();
                        if(date.getMonth() == curDate.getMonth() && date.getDate()==curDate.getDate()){
                            var hour = intToString(date.getHours());
                            var minutes = intToString(date.getMinutes());
                            var seconds = intToString(date.getSeconds());
                            g.localTime = hour+':'+minutes+':'+seconds;
                        }else{
                            var month = intToString(date.getMonth()+1);
                            var day = intToString(date.getDate());
                            g.localTime = month + "-" +day;
                        }

                        switch(g.trackType){
                            case "1" :
                                g.typeImg = "./assets/images/taren.png";
                                break;
                            case "2" :
                                g.typeImg = "./assets/images/ziji.png";
                                break;
                            case "3" :
                                g.typeImg = "./assets/images/qiye.png";
                                break;
                        }

                    });
                })
                .catch();
        }

    }
  }

})();
