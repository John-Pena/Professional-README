// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of the project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title of the project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please povide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provde a description!');
                    return false;
                }
            }
        },
        {
            // table of content section
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation intructions',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please provide instructions on how to install');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who contributed to the project?',
            validate: contributorInput => {
                if (contributorInput) {
                    return true;
                } else {
                    console.log('Please provide a contributor');
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
