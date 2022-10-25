// IMPORT REQUIREMENTS ---------------------------------------------------------
const Employee  = require("./employee");


// CONSTRUCTOR FUNCTIONS ---------------------------------------------------------  
// MANAGER SUBCLASS CONSTRUCTOR
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email);

        this.officeNumber = officeNumber;
        this.role         = "Manager";

        this.getOfficeNumber = () => {
        return this.officeNumber;
        };

        this.getRole = () => {
        return this.role;
        };

    }
}


// EXPORT BUILD ENGINEER FUNCTION ------------------------------------------------
module.exports = Manager;