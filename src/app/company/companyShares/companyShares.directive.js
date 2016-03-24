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
        vm.companyShares = [];
        vm.shareTags = [];
        vm.companyShares = getCompanyShares(companyId);
        vm.showMore = showMore;
        vm.page =1;

        function showMore(order){
            vm.page++;
            vm.moreShares = getCompanyShares(companyId,vm.page,6);
            var li ='';
            angular.forEach(vm.moreShares,function(share){
                li += '<li>'
                li += '<div class="litpic">';
                li += '<img src="'+share.shareLitpic+'" alt=""/>';
                li += '<div class="play-btn" ng-show="share.shareType == \'video\'"></div>';
                li += '</div>';
                li += '<div class="s-title">';
                li += '<h5>'+share.shareShotTitle+'</h5>';
                li += '</div>';
                li += '<div class="s-info">';
                li += '<div class="s-tag">';
                li += '<ul>';
                angular.forEach(share.shareTagsArr,function(tag){
                    li += '<li>';
                    li += ' <img src="./assets/images/tag.png" alt=""/><span>'+tag+'</span>';
                    li += '</li>';
                });
                li += '</ul>';
                li += '</div>';
                li += '<div class="s-views">';
                li += '<img src="./assets/images/views.png" alt=""/><span>'+share.shareViews+'</span>';
                li += '</div>';
                li += '</div>';
                li += '<div class="s-user">';
                li += '<img src="'+share.shareUserLogo+'" alt=""/><span class="s-user-name">'+share.shareUserName+'</span><span class="s-user-company">'+share.shareCompanyNameShot+'</span>';
                li += '</div>';
                li += '</li>';
            });
            if(order == "shareId"){
                angular.element(".new-ul").append(li);
            }else if(order ="shareUserName"){
                angular.element(".hot-ul").append(li);
            }
        }

        function getCompanyShares(companyId) {
            var results = companyshares.getCompanyShares(companyId);

            angular.forEach(results,function(c,index){
                var title = c.shareTitle;
                var tags = [];
                var cn = c.shareCompanyName;

                if(title.length >13){
                    c.shareShotTitle = c.shareTitle.substr(0,13) + '...';
                }else {
                    c.shareShotTitle = c.shareTitle;
                }

                if(cn.length>8){
                    c.shareCompanyNameShot = c.shareCompanyName.substr(0,8)+'...'
                }else{
                    c.shareCompanyNameShot = c.shareCompanyName;
                }

                 tags = c.shareTags.split(',');
                 c.shareTagsArr = [];
                c.shareTagsArr[0] = tags[0];
                c.shareTagsArr[1] = tags[1];

            });

            return results;

        }

    }
  }

})();
