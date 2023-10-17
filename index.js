const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const render = require("./src/page-template.js");

// creating an empty array to store team members
const teamMembers = [];

// defining the questions for each role, manager engineer and intern
const questions = {
  manager: ["name", "id", "email", "officeNumber"],
  engineer: ["name", "id", "email", "github"],
  intern: ["name", "id", "email", "school"],
};

// this is the function to add a team member takes in role and memberConstructor arguments
const addMember = (role, memberConstructor) => {
  inquirer
    .prompt(
      /* the inquirer library is used to prompt the user with questions specific to the role 
      from the questions. 
      
      we use the map function to generate an array of question objects based on the role
      */
      questions[role].map((name) => ({
        type: "input",
        name,
        // message displayed to the user constructed using the role and name
        message: `${role.charAt(0).toUpperCase() + role.slice(1)}'s ${name}:`,
      }))
    )
    .then((answers) => {
      /* after the user answers the questions, 
      this callback function is executed with the collected answers
      
      create a member object and push it to the teamMembers array
      */
      const member = new memberConstructor(
        ...questions[role].map((name) => answers[name])
      );
      teamMembers.push(member);
      creatingTeam();
    });
};

// this function to create the team members 
const creatingTeam = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Choose an option:",
        choices: ["Add a Manager", "Add an Engineer", "Add an Intern", "Finish building the Team"],
      },
    ])
    .then((answers) => {
      switch (answers.choice) {
        // adding a manager to the team
        case "Add a Manager":
          addMember("manager", Manager); 
          break;
        // adding an engineer to the team
        case "Add an Engineer":
          addMember("engineer", Engineer);
          break;
        // adding an intern to the team
        case "Add an Intern":
          addMember("intern", Intern);
          break;
        // finishing building the team!!!!
        case "Finish building the Team":
          const html = render(teamMembers);
          const folderPath = "./output";
          const outputPath = path.join(folderPath, "team.html");
          fs.writeFileSync(outputPath, html);
          console.log("Team HTML generated");
          break;
      }
    });
};

// create the team members
creatingTeam();