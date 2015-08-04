angular.module('routingSample', [], 
	// Specify the routing
 function($routeProvider, $locationProvider) {
  // Case 1
  $routeProvider.when(
  	'/Course/:courseId', 
  	{
    	templateUrl: '/Module6_Samples/routing/courses/course.html',
    	controller: CourseController
  	});
  // Case 2
  $routeProvider.when(
  	'/Course/:courseId/Term/:termId', 
  	{
    	templateUrl: '/Module6_Samples/routing/courses/syllabus.html',
    	controller: TermController
  	});
 
  $locationProvider.html5Mode(true);
});
 
 
 // Controllers
function MainController($scope, $route, 
						$routeParams, $location) {
  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;
}
 
function CourseController($scope, $routeParams) {
  $scope.name = "Course Controller...";
  $scope.params = $routeParams;
}
 
function TermController($scope, $routeParams) {
  $scope.name = "Term Controller...";
  $scope.params = $routeParams;
}

















