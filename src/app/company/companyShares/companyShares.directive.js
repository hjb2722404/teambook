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
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function CompanySharesController($location,companyshares) {
        var vm = this;
        var companyId = $location.search().companyId;
        vm.companyShares = [];
        vm.shareTags = [];
        getCompanyShares(companyId);

        function getCompanyShares(companyId) {
            vm.companyShares = companyshares.getCompanyShares(companyId);

            angular.forEach(vm.companyShares,function(c,index){
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

            })

        }

    }
  }

})();
