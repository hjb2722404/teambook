(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('acmeNavbar', acmeNavbar);


  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment,$state,$scope) {
      var vm = this;
      vm.$state = $state;
        vm.isHide = true;
      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();

        vm.search = function(){
            alert("ok");
        }
    }
  }

})();
