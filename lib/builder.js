// IMPORT REQUIREMENTS ---------------------------------------------------------
const Manager  = require("./manager");
const Engineer = require("./engineer");
const Intern   = require("./intern");

  
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