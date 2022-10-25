// IMPORT REQUIREMENTS ---------------------------------------------------------
const Employee  = require("./employee");


// CONSTRUCTOR FUNCTIONS ---------------------------------------------------------
// INTERN SUBCLASS CONSTRUCTOR
class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email);

        this.school = school;
        this.role   = "Intern";

        this.getSchool = () => {
        return this.school;
        };

        this.getRole = () => {
        return this.role;
        };

    }
}


// EXPORT BUILD ENGINEER FUNCTION ------------------------------------------------
module.exports = Intern;