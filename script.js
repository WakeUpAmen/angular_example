var myapp = angular.module("mainApp", []);
myapp.controller("mainController",function($scope,$http)
{
	// read the json file
	$http.get("rest.json").success(function(data) {
	  $scope.contents = data;
	  console.log(data);
	  //debugger;
	 });
	$scope.getTags = function(myTags)
	{
	  $scope.tags = myTags
	}

});
