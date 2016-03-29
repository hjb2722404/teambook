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
      bindToController: true,
        replace : true
    };

    return directive;

    /** @ngInject */
    function UserSharesController(usershares,user) {
        var vm = this;
        var userInstance = user.getUser();
        var userId = userInstance.data.id;
        vm.userShares = [];
        vm.recommends = [];
        vm.shareTags = [];
        getUserShares(userId);
        getRecommends(userId);
        vm.showMore = showMore;
        vm.page =1;

        function showMore(order){
            vm.page++;
            //vm.moreShares = getUserShares(userId,vm.page,6);
            //var li = '';
            //
            //angular.forEach(vm.moreShares,function(s,index){
            //    li += '<li>';
            //    li += '<div class="litpic">';
            //    li += '<img src="'+s.shareLitpic+'" alt=""/>';
            //    li += '<div class="play-btn" ng-show="share.shareType == \'video\'"></div>';
            //    li += '</div>';
            //    li += '<div class="s-title">';
            //    li += '<h5>'+s.shareShotTitle+'</h5>';
            //    li += '</div>';
            //    li += '<div class="s-info">';
            //    li += '<div class="s-tag">';
            //    li += '<ul>';
            //    angular.forEach(s.shareTagsArr,function(tag){
            //        li += '<li>';
            //        li += ' <img src="./assets/images/tag.png" alt=""/><span>'+tag+'</span>';
            //        li += '</li>';
            //    });
            //    li += '</ul>';
            //    li += '</div>';
            //    li += '<div class="s-views">';
            //    li += '<img src="./assets/images/views.png" alt=""/><span>'+s.shareViews+'</span>';
            //    li += '</div>';
            //    li += '</div>';
            //    li += '<div class="s-user">';
            //    li += '<img src="'+s.shareUserLogo+'" alt=""/><span class="s-user-name">'+s.shareUserName+'</span><span class="s-user-cp">'+s.shareUserCompanyNameShot+'</span>';
            //    li += '</div>';
            //    li += '</li>';
            //});
            //
            //if(order == "shareId"){
            //    angular.element(".new-ul").append(li);
            //}else if(order ="shareUserName"){
            //    angular.element(".hot-ul").append(li);
            //}
        }

        function getUserShares(userId) {

            return usershares.getUserShares(userId)
                .then(function(res){
                    vm.userShares = res;
                })
                .catch();
        }

        function getRecommends(userId) {

            return usershares.getRecommends(userId)
                .then(function(res){
                    vm.recommends = res;
                })
                .catch();
        }



    }
  }

})();
