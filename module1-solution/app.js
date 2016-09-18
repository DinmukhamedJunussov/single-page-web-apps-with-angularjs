(function () {

'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function($scope){
	$scope.menu = "";
	$scope.check = "";
	$scope.message = function() {
		$scope.menuItems = $scope.menu.split(',');
		if( $scope.menuItems.length-1 == 0 )
			return "Please enter data first";
		else if($scope.menuItems.length-1 < 3)
			return "Enjoy!";
		else return "Too much!";
	};
});

})();