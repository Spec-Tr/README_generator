// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// Array of questions for user input
inquirer
    .prompt([
        {
            type: `input`,
            message: `What is your project called?:`,
            name: `title`
        },
        {
            type: `input`,
            message: `Describe your project:`,
            name: `description`
        },
        {
            type: `input`,
            message: `Are there any special steps required to install your project?:`,
            name: `install`
        },
        {
            type: `input`,
            message: `Do you have any notes about how to use your project?:`,
            name: `usage`
        },
        {
            type: `input`,
            message: `How should contributions be made?:`,
            name: `contribute`
        },
        {
            type: `input`,
            message: `Are there any speical instructions to test your project?:`,
            name: `test`
        },
        {
            type: `list`,
            message: `What license is your project using?`,
            name: `license`,
            choices: [`MIT`, `Mozilla Public License 2.0`, `Apache 2.0`, `The Unlicense`]
        },
        {
            type: `input`,
            message: `What is your Github username?`,
            name: `github`
        },
        {
            type: `input`,
            message: `What is your email address?`,
            name: `email`
        },
        {
            type: `input`,
            message: `Are there any individuals, groups, organizations or resources to be credited?`,
            name: `credits`
        }

    ])
    .then((response) => {
        let badge = '';
        if (response.license === 'MIT') {
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'  
        } else if (response.license === 'Mozilla Public License 2.0') {
            badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        } else if (response.license === 'Apache 2.0') {
            badge = '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        } else if (response.license === 'The Unlicense') {
            badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
        }

        const layout = `
# ${response.title}

${badge}

## Description
        
${response.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Questions](#questions)
- [Credits](#credits)
- [License](#license)
        
## Installation
        
${response.install}
        
## Usage
        
${response.usage}

## Contribution Guidelines

${response.contribute}

## Test Instructions

${response.test}

## Questions

Please direct all questions to my github or email.

Github: [${response.github}](https://github.com/${response.github})

Email: ${response.email}
        
## Credits
    
${response.credits}
        
## License
        
The repo is covered under the standard ${response.license} license. See LICENSE in repo for more info.`

        writeToFile(`./result/README.md`, layout);
    });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('README ready, located in results folder'))
}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
