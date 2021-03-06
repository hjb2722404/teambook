(function() {
  'use strict';

  angular
    .module('teambookWww')
    .directive('editUserInfo', editUserInfo);


  /** @ngInject */
  function editUserInfo() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/editData/editUserInfo/editUserInfo.html',
      scope: {},
      controller: editUserInfoController,
      controllerAs: 'vm',
      bindToController: true
    };
    return directive;

    /** @ngInject */
    function editUserInfoController(getData,user) {

      var vm = this;
      var userInstance = user.getUser();
      var userId = userInstance.data.id;

      vm.userData = [];
      vm.Education = [];
      vm.Resume = [];
      vm.Honor = [];

      // getUserData(userId);
      // getEducation(userId);
      // getResume(userId);
      // getHonor(userId);

      getAllData('UserData',userId);
      getAllData('Education',userId);
      getAllData('Resume',userId);
      getAllData('Honor',userId);

      function getAllData(type,userId) {
          getData.getDatas(type,userId)
              .then(function(data){
                  switch (type) {
                    case 'UserData':
                        vm.userData = data;
                        if(vm.userData.gender == "2"){
                            vm.userData.userSex = "女";
                            vm.female =true;
                        }else{
                            vm.userData.userSex = "男";
                        }
                        break;
                    case 'Education':
                        vm.Education = data;
                        break;
                    case 'Resume':
                        vm.Resume = data;
                        break;
                    case 'Honor':
                        vm.Honor = data;
                        break;
                    default :
                        break; 
                  }
              })
      }

      // function getUserData(userId) {
          
      //   return getData.getUserData(userId)
      //       .then(function(userData){
      //           vm.userData = userData;
      //           if(vm.userData.gender == "2"){
      //               vm.userData.userSex = "女";
      //               vm.female =true;
      //           }else{
      //               vm.userData.userSex = "男";
      //           }
      //       })
      //       .catch();
      // }

      // function getEducation(userId) {

      //     return getData.getEducation(userId)
      //         .then(function(Education){
      //             vm.Education = Education;

      //         })
      //         .catch();
      // }

      // function getResume(userId) {

      //   return getData.getResume(userId)
      //         .then(function(Resume){
      //             vm.Resume = Resume;

      //         })
      //         .catch();
      // }

      // function getHonor(userId) {

      //   return getData.getHonor(userId)
      //       .then(function(Honor){
      //           vm.Honor = Honor;

      //       })
      //       .catch();
      // }

    }

  }

})();