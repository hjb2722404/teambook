(function() {
  'use strict';

  angular
      .module('teambookWww')
      .service('companyinfos', CompanyInfos);

  /** @ngInject */
  function CompanyInfos() {
    var data = {
        'companyName': '南京旭强信息科技有限公司',
        'companyId': 'c001',
        'description': '这里是企业的简单介绍，由企业的HR在Web控制台添加，主要介绍企业的一些概况，文化等内容',
        'logo': 'angular.png',
        'bgPic' : 'gulp.png'
    };

    this.getCompanyInfos = getCompanyInfos;

    function getCompanyInfos() {
      return data;
    }
  }

})();
