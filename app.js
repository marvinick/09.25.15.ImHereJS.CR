var imHere = angular.module('imHere', ['ui.router']);

imHere.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('welcome', {
    url:'',
    templateUrl: "partials/welcome.html"
  });

  $staeProvider.state('signin', {
    url:'/signins',
    templateUrl: "partials/signin.html",
    controller: "SigninsCtrl"
  });

});