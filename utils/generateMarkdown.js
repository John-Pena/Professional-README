// TODO: Create a function that returns a license badge based on which license is passed in
// If there is not license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return '';
    } else {
        return `
        ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
        `;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge}

    <a name="description"></a>
    ## Description
    ${data.description}

    ## Table of Contents
    1. [ Description ](#description)
    2. [ Contributors ](#contributors)
    3. [ Installation ](#install)
    4. [ Usage ](#usage)
    5. [ Test Application ](#test-app)
    6. [ GitHub Username ](#github)
    7. [ Email ](#email)

    <a name="install"></a>
    ## Installation
    ${data.installation}

    <a name="usage"></a>
    ## Usage
    ${data.usage}

    <a name="test-app"></a>
    ## Application Test
    ${data.projectTestApp}

    <a name="github"></a>
    ## GitHub
    ${data.githubUsername}

    <a name="email"></a>
    ${data.userEmail}

    `;
}

module.exports = generateMarkdown;
