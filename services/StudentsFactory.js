imHere.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [
    { name: "Pedro", signIn: false },
    { name: "Mamacita", signIn: false },
    { name: "Pepe", signIn: false },
    { name: "Hefe", signIn: false },
    { name: "Chica", signIn: false }
  ];

  factory.addStudent = function() {
    factory.students.push({ name: factory.studentName, signIn: false });
    factory.studentName = null;
  };

  return factory;
})