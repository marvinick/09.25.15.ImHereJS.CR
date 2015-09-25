imHere.controller('AttendancesCtrl', ['$scope', 'StudentsFactory',function AttendancesCtrl($scope, StudentsFactory) {

  $scope.students = StudentsFactory.students;
  $scope.StudentsFactory = StudentsFactory;

  $scope.signStudentIn = function(student) {
    student.signIn = true;
  };

}]);

