'use strict';

/* Controllers */

function PhoneListCtrl($scope, Phone) {
	$scope.phones = Phone.query();
	$scope.hello = "Hello World";
	$scope.orderProp = "age";

}

function PhoneDetailCtrl($scope, $routeParams, Phone) {
	
	$scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function( phone ) {
		$scope.mainImgUrl = phone.images[0];
	});
	
	// $http.get('phones/' + $scope.phoneId + '.json').success( function(data) {
	// 	$scope.phone = data;
	// 	$scope.mainImgUrl = data.images[0];
	// });
	
	$scope.setImage = function( imgName) {
		$scope.mainImgUrl = imgName;
	};
	
	$scope.helloWorld = function( name ) {
		alert('Hello ' + name || 'World')
	}
	
}
