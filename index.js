// CONSTRUCTOR FUNCTIONS ---------------------------------------------------------
// EMPLOYEE CONSTRUCTOR
function Employee(name, id, email) {
    this.name  = name;
    this.id    = id;
    this.email = email;

    this.getName = () => {
        return this.name;
    };
    this.getId = () => {
        return this.id;
    };
    this.getEmail = () => {
        return this.id;
    };
    this.getRole = () => {
        return "Employee";
    };
}

// MANAGER CONSTRUCTOR
function Manager(name, id, email, officeNumber) {
    this.name         = name;
    this.id           = id;
    this.email        = email;
    this.officeNumber = officeNumber;

    this.getName = () => {
        return this.name;
    };
    this.getId = () => {
        return this.id;
    };
    this.getEmail = () => {
        return this.id;
    };
    this.getOfficeNumber = () => {
        return this.officeNumber;
    };
    this.getRole = () => {
        return "Manager";
    };
}

// ENGINEER CONSTRUCTOR
function Engineer(name, id, email, gitHub) {
    this.name   = name;
    this.id     = id;
    this.email  = email;
    this.gitHub = gitHub;

    this.getName = () => {
        return this.name;
    };
    this.getId = () => {
        return this.id;
    };
    this.getEmail = () => {
        return this.id;
    };
    this.getGitHub = () => {
        return this.gitHub;
    };
    this.getRole = () => {
        return "Engineer";
    };
}

// INTERN CONSTRUCTOR
function Intern(name, id, email, school) {
    this.name   = name;
    this.id     = id;
    this.email  = email;
    this.school = school;

    this.getName = () => {
        return this.name;
    };
    this.getId = () => {
        return this.id;
    };
    this.getEmail = () => {
        return this.id;
    };
    this.getSchool = () => {
        return this.school;
    };
    this.getRole = () => {
        return "Intern";
    };
}