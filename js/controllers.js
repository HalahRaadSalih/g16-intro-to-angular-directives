var app = angular.module('app');

app.controller('IndexController', function($scope){
  $scope.customer = {
    name: "Halah",
    address: "Berkeley, CA"
  }
});
//home controller
app.controller('HomeController', function($scope){
});
