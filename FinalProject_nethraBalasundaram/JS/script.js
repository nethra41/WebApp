angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('AccordionCtrl', function ($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: '(3 , 2)'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];
  
  
  
  $scope.TLB = [ '(3 , 2)', '(7 , 8)', '(0xe , 5)' ];
  $scope.pT = [ '(3) 2', '(7) 8', '(0xe) 5)' ];
  
  $scope.frame = [ 2, 5, 8, 1];
  $scope.tlb = [];
  $scope.pageTable = [];
  
  $scope.notFoundTLB = function(){
	$scope.classTLB = "bg-danger";
	$scope.classTLBs = "bg-danger";
  }
  $scope.notFoundPT = function(){
	$scope.classPT = "bg-danger";
	$scope.classPTs = "bg-danger";
  }
  $scope.updateOne = function(){
	$scope.state = "show";
	$scope.classTLB = "normal";
	$scope.classPT = "normal";
	$scope.frame2 = "bg-primary";
  }
  $scope.updateTwo = function(){
	$scope.state2 = "show2";
	$scope.classTLB = "normal";
	$scope.classPT = "normal";
	$scope.frame5 = "bg-primary";
  }
  $scope.updateThree = function(){
	$scope.state3 = "show3";
	$scope.state = "show3";
	$scope.classTLB = "normal";
	$scope.classPT = "normal";
	$scope.frame8 = "bg-primary";
  }
  $scope.updateFour = function(){
	$scope.state4 = "show4";
	$scope.state2 = "show4";
	$scope.classTLB = "normal";
	$scope.classPT = "normal";
  }
  $scope.FoundTLB = function(){
	$scope.classTLB = "bg-success";
	$scope.classTLBs = "bg-success";
  }
  $scope.FoundPT = function(){
	$scope.classPT = "bg-success";
	$scope.classPTs = "bg-success";
  }
  
  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
});