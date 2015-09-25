var imHere = angular.module('imHere', ['ui.router']);

imHere.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('welcome', {
    url:'',
    templateUrl: "partials/welcome.html"
  });
});