(function () {

'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function($scope){
	$scope.menu = "";
	$scope.message = ""; 

	$scope.check = function() {
		var menuItems = $scope.menu.split(',');
		if( $scope.menu.length == 0 )
			$scope.message = "Please enter data first";
		else if(menuItems.length-1 < 3)
			$scope.message = "Enjoy!";
		else $scope.message = "Too much!";
	};
});

})();