(function () {
	'use strict';

	angular
		.module('teambookWww')
		.directive('followList', FollowList);

	/** @ngInject */
	function FollowList(followLists,user){
		var directive = {
			restrict: 'E',
			templateUrl: 'app/userFollow/followList/followList.html',
			scope: {},
			controller: followListController,
			controllerAs: 'vm',
			bindToController: true
		};

		return directive;

		/** @ngInject */
		function followListController() {
			var vm = this;

	      	var userInstance = user.getUser();
	      	var userId = userInstance.data.id;

	      	vm.dataList = [];
	      	getDataList(userId)

	      	function getDataList(userId) {

	      		return followLists.getLists(userId)
	      			.then(function(dataList){
	      				vm.dataList = dataList;
	      			})
	      			.catch();
	      	}
		}
	}
})();