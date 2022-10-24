// CONSTRUCTOR FUNCTIONS ---------------------------------------------------------
// EMPLOYEE BASE CONSTRUCTOR
class Employee {

  constructor (name, id, email) {

    this.name  = name;
    this.id    = id;
    this.email = email;
    this.role  = "Employee";

  }
}

// MANAGER SUBCLASS CONSTRUCTOR
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {

    super(name, id, email);

    this.officeNumber = officeNumber;
    this.role         = "Manager";

  }
}

// ENGINEER SUBCLASS CONSTRUCTOR
class Engineer extends Employee {
  constructor(name, id, email, gitHub) {

    super(name, id, email);

    this.gitHub = gitHub;
    this.role   = "Engineer";

  }
}

// ENGINEER SUBCLASS CONSTRUCTOR
class Intern extends Employee {
  constructor(name, id, email, school) {

    super(name, id, email);

    this.school = school;
    this.role   = "Intern";

  }
}


// CREATE EMPLOYEE OBJECT ------------------------------------------------------
// FUNCTION TO BUILD EMPLOYEE
function buildEmployee (answers) {

  if (answers.role === "Engineer") {

    const employee = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);

    return employee;

  } else if (answers.role === "Intern") {

    const employee = new Intern(answers.name, answers.id, answers.email, answers.school);

    return employee;

  } else {

    const employee = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);

    return employee;

  }

}


// EXPORT BUILD EMPLOYEE FUNCTION ------------------------------------------------
module.exports = buildEmployee;