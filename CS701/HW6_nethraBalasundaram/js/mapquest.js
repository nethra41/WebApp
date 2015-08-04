var app = angular.module('myApp', []);
 
app.filter('setDecimal', function ($filter) {
    return function (input, places) {
        if (isNaN(input)) return input;
        // If we want 1 decimal place, we want to mult/div by 10
        // If we want 2 decimal places, we want to mult/div by 100, etc
        // So use the following to create that factor
        var factor = "1" + Array(+(places > 0 && places + 1)).join("0");
        return Math.round(input * factor) / factor;
    };
});

function MapController($scope, $http) {

	$scope.from = 'Boston, MA';
	$scope.to = 'Cambridge, MA';
	
	$scope.getData = function() {
	
	from = encodeFun($scope.from);
	to = encodeFun($scope.to);

	$http.jsonp('http://www.mapquestapi.com/directions/v1/route?key=mjtd%7Clu61200ynl%2Cas%3Do5-50ylq&from='+ from +'&to='+ to +'&callback=JSON_CALLBACK').success(function(data, status, headers, config) {
			$scope.route = data.route.legs[0].maneuvers;
			$scope.info = data.route;
		});
	}
}
