var app = angular.module("shoppingApp", []); 
app.controller("shoppingController", ['$scope', function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];

    $scope.addItemFunction = function() {
    	$scope.errorText="";
    	if(!$scope.addItemTextbox){
    		return;
    	}

    	if($scope.products.indexOf($scope.addItemTextbox)==-1){
    		$scope.products.push($scope.addItemTextbox);
    	}
    	else{
    		$scope.errorText= "The item is already present!";
    	}
    }

    $scope.removeItem = function(product){
    	errorText="";
    	$scope.products.splice(product,1);
    } 
}]);