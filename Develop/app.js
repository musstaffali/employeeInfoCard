const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputPath = path.resolve(__dirname, "output", "team.html");
const render = require("./lib/htmlRenderer");

const employees = [];


function createApp(){
function managerPrompt(){

    // Inquirer Prompt #1
    console.log("Please build your team")
    inquirer.prompt([

        // Questions about the manager 

        {
            type: "input",
            message: " \n \n What is your manager's name? \n \n ",
            name: "ManagerName",
            
        },
        {
            type: "input",
            message: " \n \n What is your manager's id? \n \n ",
            name: "ManagersIDNumber",
        
        },
        {
            type: "input",
            message: " \n \n What is your manager's email? \n \n ",
            name: "managerEmail",
        },
        {
            type: "input",
            message: " \n \n What is your manager's office number? \n \n ",
            name: "ManagerOfficeNumber",
        }

    ]).then( managerAnswers => {
            const manager = new Manager(managerAnswers.ManagerName, managerAnswers.ManagersIDNumber, managerAnswers.managerEmail, managerAnswers.ManagerOfficeNumber);
            employees.push(manager);

            teamPrompt()
        });
    }
function teamPrompt() {
                inquirer.prompt([
                    {
                        type: "list",
                        message: " \n \n Which type of team member would you like to add? \n \n ",
                        name: "employee",
                        choices: [
                            "Engineer",
                            "Intern",
                            "No more team members"
                        ]
                    }]).then(function (typeAnswers) {
                        if (typeAnswers.employee === "Engineer") {
                            engineerPrompt()
                            function engineerPrompt() {
                                inquirer.prompt([
                                    {
                                        type: "input",
                                        message: " \n \n What is your engineer's name? \n \n ",
                                        name: "engineerName",
                                    },
                                    {
                                        type: "input",
                                        message: " \n \n What is your engineer's id? \n \n ",
                                        name: "managerIDNumber",
                                    },
                                    {
                                        type: "input",
                                        message: " \n \n What is your engineer's email? \n \n ",
                                        name: "engineerEmail",
                                    },
                                    {
                                        type: "input",
                                        message: " \n \n What is your engineer's Github? \n \n ",
                                        name: "engineerGitHubUsername",
                                    }]).then(function (engineerAnswers) {
                                        const engineer = new Engineer(engineerAnswers.engineerName, engineerAnswers.managerIDNumber, engineerAnswers.engineerEmail, engineerAnswers.engineerGitHubUsername);
                                        employees.push(engineer);
                                        teamPrompt();
                                    })
                            }
                        } else if (typeAnswers.employee === "Intern") {
                            internPrompt()
                            function internPrompt() {
                                inquirer.prompt([
                                    {
                                        type: "input",
                                        message: " \n \n What is your intern's name? \n \n ",
                                        name: "internName",
                                    },
                                    {
                                        type: "input",
                                        message: " \n \n What is your intern's id? \n \n ",
                                        name: "internIDNumber",
                                    },
                                    {
                                        type: "input",
                                        message: " \n \n What is your intern's email? \n \n ",
                                        name: "internEmail",
                                    },
                                    {
                                        type: "input",
                                        message: " \n \n What is your intern's Github? \n \n ",
                                        name: "internSchool",
                                    }]).then(function (internAnswers) {
                                        const intern = new Intern(internAnswers.internName, internAnswers.internIDNumber, internAnswers.internEmail, internAnswers.internSchool);
                                        employees.push(intern);
                                        teamPrompt();
                                    })
                            }
                            console.log("Team successfully created!");
                        } else {
                            fs.writeFileSync(outputPath, render(employees), "utf-8");
                        }
                    })
            }
        
        managerPrompt();
}
createApp();
