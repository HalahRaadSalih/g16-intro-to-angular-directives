var app = angular.module('app');

app.directive('gsAngularLogo', function(){
  return{
    template: '<img src="https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w749-h794/AngularJS-Shield-large.png">'
  }
});


app.directive('myCustomer', function(){
  return {
    templateUrl: 'templates/my-customer.html'
  }
});
