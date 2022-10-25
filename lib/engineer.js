// IMPORT REQUIREMENTS ---------------------------------------------------------
const Employee  = require("./employee");


// CONSTRUCTOR FUNCTIONS ---------------------------------------------------------
// ENGINEER SUBCLASS CONSTRUCTOR
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
  
      super(name, id, email);
  
      this.gitHub = gitHub;
      this.role   = "Engineer";
  
      this.getGitHub = () => {
        return this.gitHub;
      };
  
      this.getRole = () => {
        return this.role;
      };
  
    }
}

  
  
// EXPORT BUILD ENGINEER FUNCTION ------------------------------------------------
module.exports = Engineer;