angular.module('Twitter', ['ngResource', 'myFilters']);

function TwitterController($scope, $resource) {
    $scope.twitter = $resource('cgi-bin/getTwitterData.php',
        {q:'angularjs', callback:'JSON_CALLBACK'},
        {get:{method:'JSONP'}});

    $scope.doSearch = function () {
        $scope.twitterResult = 
        	$scope.twitter.get({q:$scope.searchTerm});
        console.log($scope.twitterResult);
    };
    
    $scope.searchTerm = "moocs";
    $scope.doSearch();
}
