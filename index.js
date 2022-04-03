// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'description',
            message: 'Write a description of your project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        }
    ])
}

// TODO: Create a function to write a README file
function writeFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// function call to initialize app
promptUser();
init();
