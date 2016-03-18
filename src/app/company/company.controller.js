/**
 * Created by xiaolin.dai on 16/3/16.
 */

(function() {
  'use strict';

  angular
    .module('teambookWww')
    .controller('CompanyController', CompanyController);

  /** @ngInject */
  function CompanyController($timeout,$location, companyinfos,companyshares,companyfollows,companyfans,companyvistors,companygoodmembers,toastr) {
    var vm = this;

      vm.companyInfos = [];
      vm.companyShares = [];
      vm.companyFollows = [];
      vm.companyFans = [];
      vm.companyCurVistors = [];
      vm.companyGoodMembers = [];
      vm.classAnimation = '';
      vm.creationDate = 1458021821396;
      vm.showToastr = showToastr;
      var companyId = $location.search().companyId;

      activate(companyId);

      function activate(companyId) {
          getCompanyInfo(companyId);
          getCompanyShares(companyId);
          getCompanyFollows(companyId);
          getCompanyFans(companyId);
          getCompanyCurVistors(companyId);
          getCompanyGoodMembers(companyId);
          $timeout(function() {
            vm.classAnimation = 'rubberBand';
          }, 4000);
      }

    //function showToastr() {
    //  toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //  vm.classAnimation = '';
    //}

      function getCompanyInfo(companyId) {
          vm.companyInfos =  companyinfos.getCompanyInfos(companyId);
      }

      function getCompanyShares(companyId) {
          vm.companyShares = companyshares.getCompanyShares(companyId);

          angular.forEach(vm.companyShares, function(companyShare) {
              companyShare.rank = Math.random();
          });
      }

      function getCompanyFollows(companyId) {
          vm.companyFollows =  companyfollows.getCompanyFollows(companyId);
      }

      function getCompanyFans(companyId) {
          vm.companyFans =  companyfans.getCompanyFans(companyId);
      }

      function getCompanyCurVistors(companyId) {
          vm.companyCurVistors =  companyvistors.getCompanyCurVistors(companyId);
      }

      function getCompanyGoodMembers(companyId) {
          vm.companyGoodMembers =  companygoodmembers.getCompanyGoodMembers(companyId);
      }
  }
})();
