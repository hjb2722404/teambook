(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('uploader', UploaderDirective);


  /** @ngInject */
  function UploaderDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/uploader/uploader.html',
      scope: {
        type: '=',
        single:'='
      },
      controller: UpladerController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function UpladerController(uploader) {
      var vm = this;


    }
  }

})();
