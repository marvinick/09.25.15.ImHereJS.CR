imHere.controller('AttendancesCtrl', function AttendancesCtrl( $scope, StudentsFactory ) {
  $scope.students = StudentsFactory.students;
  $scope.signStudentIn = function(student) {
    student.signIn = true;
  };
});

