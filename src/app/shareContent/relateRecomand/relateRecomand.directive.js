(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('relateRecomand', relateRecomand);


  /** @ngInject */
  function relateRecomand() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/shareContent/relateRecomand/relate_recomand.html',
      scope: {},
      controller: RelateRecomandController,
      controllerAs: 'vm',
      bindToController: true,
        replace : true
    };

    return directive;

    /** @ngInject */
    function RelateRecomandController(usershares,user) {
        var vm = this;
        var userInstance = user.getUser();
        var shareId = userInstance.data.id;
        vm.relateRecomand = [];
        vm.shareTags = [];
        vm.relateRecomand = getRelateRecomand(shareId);
       
        function getRelateRecomand(shareId) {

            return usershares.getRelateRecomand(shareId)
                .then(function(res){
                    var results = res;
                    angular.forEach(results,function(s,index){
                        var title = s.name;
                        var tags = [];
                        var un = s.shareUserCompanyName;

                        if(title.length >13){
                            s.shareShotTitle = title.substr(0,13) + '...';
                        }else {
                            s.shareShotTitle = title;
                        }

                        if(un.length>8){
                            s.shareUserCompanyNameShot = s.shareUserCompanyName.substr(0,8)+'...'
                        }else{
                            s.shareUserCompanyNameShot = s.shareUserCompanyName;
                        }

                        tags = s.tags.split(',');
                        s.shareTagsArr = [];
                        s.shareTagsArr[0] = tags[0];
                        s.shareTagsArr[1] = tags[1];

                    });

                    return results;
                })
                .catch();


        }

    }
  }

})();
