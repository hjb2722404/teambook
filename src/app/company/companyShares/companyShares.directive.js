(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('companyShares', companyShares);


  /** @ngInject */
  function companyShares() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/company/companyShares/company_shares.html',
      scope: {},
      controller: CompanySharesController,
      controllerAs: 'vm',
      bindToController: true,
        replace : true
    };

    return directive;

    /** @ngInject */
    function CompanySharesController($location,companyshares) {
        var vm = this;
        var companyId = $location.search().companyId;
        if(!companyId){
            companyId = 1;
        }
        vm.companyShares = [];
        getCompanyShares(companyId);

        vm.shareTags = [];
        vm.showMore = showMore;
        vm.page =1;

        function showMore(order){
            vm.page++;
            //vm.moreShares = getCompanyShares(companyId,vm.page,6);
            //var li ='';
            //angular.forEach(vm.moreShares,function(share){
            //    li += '<li>'
            //    li += '<div class="litpic">';
            //    li += '<img src="'+share.shareLitpic+'" alt=""/>';
            //    li += '<div class="play-btn" ng-show="share.shareType == \'video\'"></div>';
            //    li += '</div>';
            //    li += '<div class="s-title">';
            //    li += '<h5>'+share.shareShotTitle+'</h5>';
            //    li += '</div>';
            //    li += '<div class="s-info">';
            //    li += '<div class="s-tag">';
            //    li += '<ul>';
            //    angular.forEach(share.shareTagsArr,function(tag){
            //        li += '<li>';
            //        li += ' <img src="./assets/images/tag.png" alt=""/><span>'+tag+'</span>';
            //        li += '</li>';
            //    });
            //    li += '</ul>';
            //    li += '</div>';
            //    li += '<div class="s-views">';
            //    li += '<img src="./assets/images/views.png" alt=""/><span>'+share.shareViews+'</span>';
            //    li += '</div>';
            //    li += '</div>';
            //    li += '<div class="s-user">';
            //    li += '<img src="'+share.shareUserLogo+'" alt=""/><span class="s-user-name">'+share.shareUserName+'</span><span class="s-user-company">'+share.shareCompanyNameShot+'</span>';
            //    li += '</div>';
            //    li += '</li>';
            //});
            //if(order == "shareId"){
            //    angular.element(".new-ul").append(li);
            //}else if(order ="shareUserName"){
            //    angular.element(".hot-ul").append(li);
            //}
        }

        function getCompanyShares(companyId) {

            return companyshares.getCompanyShares(companyId)
                .then(function(res){
                    vm.companyShares = res;
                })
                .catch();
        }

    }
  }

})();
