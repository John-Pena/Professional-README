// TODO: Create a function that returns a license badge based on which license is passed in
// If there is not license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return '';
    }
    return `
    ![badge](https://img.shields.io/badge/license-${license}-blue)
    `
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license) {
        return '';
    }
    return `
    This application is licensed by [${license}](https://opensource.org/license/${license})
    `
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) {
        return '';
    }
    return `
    ## License
    `
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.title}
    ${renderLicenseBadge(data.license)}

    ## Description
    ${data.description}

    ## Table of Contents
    1. [Description](#description)
    2. [Contributors](#contributors)
    3. [Installation](#installation)
    4. [Usage](#usage)
    5. [Test](#Test)
    6. [Questions](#questions)

    ## Contributors
    ${data.contributors}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Test
    ${data.projectTestApp}

    ## Questions
    If you have any questions, you can reach me at [email](mailto:${data.userEmail}). 
    <br />
    Checkout my [GitHub](https://github.com/${data.githubUsername}).

    ${renderLicenseSection(data.license)}
    ${renderLicenseLink(data.license)}
    `;
};

module.exports = generateMarkdown;
