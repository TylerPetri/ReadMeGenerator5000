
const inquirer = require('inquirer')
const fs = require('fs')

const generateFile = questions => {return `
## ${questions.Title}

## Description

${questions.Description}

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)

## Installation

${questions.Installation}

## Usage

${questions.Usage}

## License

${questions.License}

## Contributing

${questions.Contributing}

## Tests

${questions.Tests}

## Questions
`}

async function init(){
    const questions = await inquirer.prompt([
        {
            message: "What is the title of your readme?",
            name: 'Title'
        },
        {
            message: "Enter description",
            name: 'Description'
        },
        {
            message: "Enter installation instructions",
            name: "Installation"
        },
        {
            message: "Enter usage information",
            name: "Usage"
        },
        {
            message: "Enter contribution guidelines",
            name: "Contributing"
        },
        { 
            message: "Enter test instructions", 
            name: "Tests"
        },
        {
            type: "list",
            message: "Choose license",
            choices: ['Apache 2.0','Boost Software 1.0','BSD 3-Clause','BSD 2-Clause','CC0','Attribution 4.0 International',
                        'Attribution-ShareAlike 4.0 International','Attribution-NonCommercial 4.0 International','Attribution-NoDerivates 4.0 International','Attribution-NonCommercial-ShareAlike 4.0 International',
                        'Attribution-NonCommercial-NoDerivatives 4.0 International','Eclipse Public 1.0','GNU GPL v3','GNU GPL v2','GNU AGPL v3','GNU LGPL v3','GNU FDL v1.3',
                        'IBM Public License Version 1.0', 'ISC','MIT','Mozilla Public 2.0','Attribution (BY)','Open Database (OBbL)','Public Domain Dedication and License (PDDL)',
                        'Perl','Artistic 2.0','SIL Open Font 1.1', 'Unlicense','The Do What the Fuck You Want to Public License','zlib/libpng'],
            name: "License"
        },
        {
            message: "Enter github username",
            name: "GitHub profile"
        },
        {
            message: "Enter email address",
            name: "Email"
        }
            
    ]) 
    fs.writeFileSync("README.md", generateFile(questions))
}

// TODO: Create a function to write README file
// fs.writeFileSync('README.md', questions)

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
init();
