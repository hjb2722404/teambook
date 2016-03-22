(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('userShares', userShares);


  /** @ngInject */
  function userShares() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/main/userShares/user_shares.html',
      scope: {},
      controller: UserSharesController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function UserSharesController($location,usershares) {
        var vm = this;
        var userId = $location.search().userId;
        vm.userShares = [];
        vm.shareTags = [];
        vm.userShares = getUserShares(userId);
        vm.showMore = showMore;
        vm.page =1;

        function showMore(order){
            vm.page++;
            vm.moreShares = getUserShares(userId,vm.page,6);
            var li = '<li ng-repeat="share in vm.moreShares | filter :query | orderBy : \''+order+'\'">';
            li += '<div class="litpic">';
            li += '<img src="{{share.shareLitpic}}" alt=""/>';
            li += '<div class="play-btn" ng-show="share.shareType == \'video\'"></div>';
            li += '</div>';
            li += '<div class="s-title">';
            li += '<h5>{{share.shareShotTitle}}</h5>';
            li += '</div>';
            li += '<div class="s-info">';
            li += '<div class="s-tag">';
            li += '<ul>';
            li += '<li ng-repeat="tag in share.shareTagsArr">';
            li += ' <img src="./assets/images/tag.png" alt=""/><span>{{tag}}</span>';
            li += '</li>';
            li += '</ul>';
            li += '</div>';
            li += '<div class="s-views">';
            li += '<img src="./assets/images/views.png" alt=""/><span>{{share.shareViews}}</span>';
            li += '</div>';
            li += '</div>';
            li += '<div class="s-user">';
            li += '<img src="{{share.shareUserLogo}}" alt=""/><span class="s-user-name">{{share.shareUserName}}</span><span class="s-user-cp">{{share.shareUserCompanyNameShot}}</span>';
            li += '</div>';
            li += '</li>';
            if(order == "shareId"){
                angular.element(".new-share ul").append(li);
            }else if(order ="shareUserName"){
                angular.element(".hot-share ul").append(li);
            }
        }

        function getUserShares(userId) {
            var results = usershares.getUserShares(userId);

            angular.forEach(results,function(u,index){
                var title = u.shareTitle;
                var tags = [];
                var un = u.shareUserCompanyName;

                if(title.length >13){
                    u.shareShotTitle = u.shareTitle.substr(0,13) + '...';
                }else {
                    u.shareShotTitle = u.shareTitle;
                }

                if(un.length>8){
                    u.shareUserCompanyNameShot = u.shareUserCompanyName.substr(0,8)+'...'
                }else{
                    u.shareUserCompanyNameShot = u.shareUserCompanyName;
                }

                 tags = u.shareTags.split(',');
                 u.shareTagsArr = [];
                u.shareTagsArr[0] = tags[0];
                u.shareTagsArr[1] = tags[1];

            });

            return results;

        }

    }
  }

})();
