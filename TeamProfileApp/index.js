// PACKAGES REQUIRED ----------------------------------------------
// FOR IN TEMINAL QUESTIONS
const inquirer = require("inquirer");
// FOR CREATING FILES
const fs = require("fs");

// // CONSTRUCTOR FUNCTIONS ---------------------------------------------------------
// // EMPLOYEE CONSTRUCTOR
// function Employee(name, id, email) {
//     this.name  = name;
//     this.id    = id;
//     this.email = email;

//     this.getName = () => {
//         return this.name;
//     };
//     this.getId = () => {
//         return this.id;
//     };
//     this.getEmail = () => {
//         return this.id;
//     };
//     this.getRole = () => {
//         return "Employee";
//     };
// }

// // MANAGER CONSTRUCTOR
// function Manager(name, id, email, officeNumber) {
//     this.name         = name;
//     this.id           = id;
//     this.email        = email;
//     this.officeNumber = officeNumber;

//     this.getName = () => {
//         return this.name;
//     };
//     this.getId = () => {
//         return this.id;
//     };
//     this.getEmail = () => {
//         return this.id;
//     };
//     this.getOfficeNumber = () => {
//         return this.officeNumber;
//     };
//     this.getRole = () => {
//         return "Manager";
//     };
// }

// // ENGINEER CONSTRUCTOR
// function Engineer(name, id, email, gitHub) {
//     this.name   = name;
//     this.id     = id;
//     this.email  = email;
//     this.gitHub = gitHub;

//     this.getName = () => {
//         return this.name;
//     };
//     this.getId = () => {
//         return this.id;
//     };
//     this.getEmail = () => {
//         return this.id;
//     };
//     this.getGitHub = () => {
//         return this.gitHub;
//     };
//     this.getRole = () => {
//         return "Engineer";
//     };
// }

// // INTERN CONSTRUCTOR
// function Intern(name, id, email, school) {
//     this.name   = name;
//     this.id     = id;
//     this.email  = email;
//     this.school = school;

//     this.getName = () => {
//         return this.name;
//     };
//     this.getId = () => {
//         return this.id;
//     };
//     this.getEmail = () => {
//         return this.id;
//     };
//     this.getSchool = () => {
//         return this.school;
//     };
//     this.getRole = () => {
//         return "Intern";
//     };
// }

// QUESTION ARRAYS -------------------------------------
// EMPLOYEE CONSTRUCTOR
// function Employee(name, id, email) {
//     this.name  = name;
//     this.id    = id;
//     this.email = email; }
// MANAGER CONSTRUCTOR
// function Manager(name, id, email, officeNumber) {
//     this.officeNumber = officeNumber; }
// ENGINEER CONSTRUCTOR
// function Engineer(name, id, email, gitHub) {
//     this.gitHub = gitHub; }
// INTERN CONSTRUCTOR
// function Intern(name, id, email, school) {
//     this.school = school; }

// EMPLOYEE BASE ARRAY
const employeeQuestions = [
    {
        type: "list",
        name: "role",
        message: "Let's add a new employee!\n  You can exit this menu at any time with Ctrl+C \n  What role will this employee have?",
        choices: [
            "Employee",
            "Manager",
            "Engineer",
            "Intern",
        ],
        
    },
    {
        type: "input",
        name: "name",
        message: "Enter the employee name: "
    },
    {
        type: "input",
        name: "id",
        message: "Enter the employee ID: "
    },
    {
        type: "input",
        name: "email",
        message: "Enter the employee email: "
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter the office number: ",

        when(answers) {
            return answers.role === "Manager"
        }
    },
    {
        type: "input",
        name: "gitHub",
        message: "Enter the GitHub username: ",

        when(answers) {
            return answers.role === "Engineer"
        }
    },
    {
        type: "input",
        name: "school",
        message: "Enter the school name: ",

        when(answers) {
            return answers.role === "Intern"
        }
    },

]






// RUN ON LOAD ----------------------------------------------------
init();

// QUESTION FUNCTIONS ---------------------------------------------
// INITIALIZE APP, CONFIRM NEW README, TRIGGER Q's 
function init() {

    // ASK QUESTIONS
    inquirer.prompt(employeeQuestions)
    .then((answers) => {

        console.log(answers)
        // INIT FUNCTION FOR WRITING FILE
        // writeToFile("./app_output/README.md", reqAnswers, answers, optSections_yn);

    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Your console environment is not supported!")
        } else {
            console.log(error)
        }
    });

}




// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated