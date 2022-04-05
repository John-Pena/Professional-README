// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please povide a description of the project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is the application installed?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is this application used?',
    },
    {
        type: 'input',
        name: 'projectTestApp',
        message: 'How do we test the application?',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'What is your email address?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Would you like to add a license? (Optional)',
        choices: ['MIT', 'ISC', 'Apache-2.0'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please select a license');
                return false;
            }
        }
    }
];


// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((resp) => {
            const readME = markdown(resp);
            fs.writeFile('./README.md', readME, err => {
                if (err) throw new Error(err);
                console.log('README created! Checkout README.md in the directory to view.')
            });
        });
};

// function call to initialize app
init();
