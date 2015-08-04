angular.module('contactManager', [],
	// routing cases
  function($routeProvider) {
    $routeProvider.when('/index', {
      templateUrl: 'contacts/index.html'
    })
    .when('/info/:id', {
      templateUrl: 'contacts/info.html',
      controller: 'InfoController'
    })
    .when('/add', {
      templateUrl: 'contacts/add.html',
      controller: 'AddController'
    })
    .when('/edit/:id', {
      templateUrl: 'contacts/edit.html',
      controller: 'EditController'
    })
    .when('/remove/:id', {
      templateUrl: 'contacts/remove.html',
      controller: 'RemoveController'
    })
    .otherwise({
      redirectTo: '/index'
    });
  });
  
// Controllers

function ContactController($scope) {
	$scope.contacts = [{
		name : 'Suresh Kalathur',
		phone : '617-358-0006',
		address : ['808 Commonwealth Ave, Room 250', 
		           'Boston, MA 02215']
	}];
}

function InfoController($scope, $routeParams) {
	$scope.contact = $scope.contacts[$routeParams.id];
}

function AddController($scope, $location) {
	$scope.contact = {};
	$scope.add = function() {
		$scope.contacts.push($scope.contact);
		$location.url('/');
	};
}

function EditController($scope, $routeParams, $location) {
	$scope.contact = $scope.contacts[$routeParams.id];
	$scope.edit = function() {
		$scope.contacts[$routeParams.id] = $scope.contact;
		$location.url('/');
	};
}

function RemoveController($scope, $routeParams, $location) {
	$scope.contact = $scope.contacts[$routeParams.id];
	$scope.remove = function() {
		$scope.contacts.splice($routeParams.id, 1);
		$location.url('/');
	};
	$scope.back = function() {
		$location.url('/');
	};
}



