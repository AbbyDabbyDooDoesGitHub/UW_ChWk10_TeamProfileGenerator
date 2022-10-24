// PACKAGES REQUIRED ----------------------------------------------
// FOR IN TEMINAL QUESTIONS
const inquirer = require("inquirer");
// FOR CREATING FILES
const fs = require("fs");
// FOR EMPLOYEE CONSTRUCTOR
const buildEmployee = require("./employee");



// RUN ON LOAD ----------------------------------------------------
var teamObjectArray = [];
var formattedTeam   = "";


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

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Let's put your team together!\n  Enter the name of your team manager: "
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
    },
    {
        name: 'confirmNew',
        message: 'Would you like to add another team member?\n  Type \"n\" if you are done building your team.',
        type: 'confirm',
        default: false
    },

]


// EMPLOYEE BASE ARRAY
const employeeQuestions = [
    {
        type: "list",
        name: "role",
        message: "Let's add a new employee!\n  You can exit this menu at any time with Ctrl+C \n  What role will this employee have?",
        choices: [
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
    {
        name: 'confirmNew',
        message: 'Would you like to add another team member?\n  Type \"n\" if you are done building your team.',
        type: 'confirm',
        default: false
    },

]


// RUN ON LOAD ----------------------------------------------------
init();

// QUESTION FUNCTIONS ---------------------------------------------
// INITIALIZE APP, CONFIRM NEW README, TRIGGER Q's 
function init() {

    // ASK QUESTIONS
    inquirer.prompt(managerQuestions)
    .then((answers) => {

        console.log(answers);

        formatEmployee(answers);
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

// FORMAT THE RESPONSE 
function formatEmployee(answers) {

    const newEmployee = buildEmployee(answers);

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

    var prevFormattedTeam = formattedTeam;

    formattedTeam = prevFormattedTeam + "----------------\nEmployee name is "+ answers.name + "\nEmployee ID is "+ answers.id + "\nEmployee email is "+ answers.email+"\n----------------\n\n\n";

    askEmployeeQs(answers);

}

// TRIGGER EMPLOYEE Q's 
function askEmployeeQs(prevAnswers) {

    if (prevAnswers.confirmNew === true) {

        // ASK QUESTIONS
        inquirer.prompt(employeeQuestions)
        .then((answers) => {

            console.log(answers);

            formatEmployee(answers);

        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Your console environment is not supported!")
            } else {
                console.log(error)
            }
        });
    } else {
        console.log("Ready to generate html");
        console.log("Formatted team cards: \n\n"+ formattedTeam);
    }

}




// // GIVEN a command-line application that accepts user input
// // WHEN I am prompted for my team members and their information
// // WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

