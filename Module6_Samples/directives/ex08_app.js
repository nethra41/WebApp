angular.module('app', ['alert-directive'])
 .controller('AlertController', function ($scope) {
    $scope.alerts = [
      { type: 'error', msg: 'Oops! Something is wrong.' }, 
      { type: 'success', msg: 'Good Job! It works.' }
    ];
  
    $scope.addAlert = function() {
      $scope.alerts.push({msg: "New alert! - " + ($scope.alerts.length + 1)});
    };
  
    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };
});