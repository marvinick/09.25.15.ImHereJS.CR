var imHere = angular.module('imHere', ['ui.router']);

imHere.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('welcome', {
    url:'',
    templateUrl: "partials/welcome.html"
  });

  $stateProvider.state('students', {
    url:'/students',
    templateUrl: "partials/students.html",
    controller: "StudentsCtrl"
  });

  $stateProvider.state('attendances', {
    url:'/attendances',
    templateUrl: "partials/attendances.html",
    controller: "AttendancesCtrl"
  });

});