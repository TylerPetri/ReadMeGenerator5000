
const inquirer = require('inquirer')
const fs = require('fs')

const generateFile = questions => {return `
## ${questions.Title}

![License](https://img.shields.io/badge/License-${encodeURI(questions.License)}-${questions.Color}.svg)

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

For any additional questions see my [GitHub profile](http://github.com/${questions.GitHubProfile}) or contact ${questions.Email}

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
            choices: ['Apache 2.0','Boost 1.0','BSD 3-Clause','BSD 2-Clause','Attribution 4.0 International',
                        'Attribution-ShareAlike 4.0 International','Attribution-NonCommercial 4.0 International','Attribution-NoDerivates 4.0 International','Attribution-NonCommercial-ShareAlike 4.0 International',
                        'Attribution-NonCommercial-NoDervatives 4.0 International','Eclipse Public License 1.0','GNU GPL v3','GNU GPL v2','GNU AGPL v3','GNU LGPL v3','GNU FDL v1.3',
                        'IBM Public 1.0','ISC','MIT','Mozilla Public 2.0','Attribution License (BY)','Open database License (ODbL)','Public Domain Dedication and License (PDDL)',
                        'Perl','Artistic 2.0','SIL Open Font 1.1', 'Unlicense','The Do What the Fuck You Want to Public License','Zlib/Libpng'],
            name: "License",
            transformer: function (a) {
                
                    let badges = ['Apache 2.0','Boost 1.0','BSD 3--Clause','BSD 2--Clause','CC0 1.0','CC BY 4.0',
                    'CC BY--SA 4.0','CC BY--NC 4.0','CC BY--ND 4.0','CC BY--NC--SA 4.0',
                    'CC BY--NC--ND 4.0','EPL 1.0','GPLv3','GPL v2','AGPL v3','LGPL v3','FDL v1.3',
                    'IPL 1.0','ISC','MIT','MPL 2.0','ODC_BY','ODbL','PDDL',
                    'Perl','Artistic 2.0','OFL 1.1', 'Unlicense','WTFPL','Zlib']

                    let position = this.choices.infexOf(a)
                    return badges[position]
            }
        },
        {
            type: "list",
            message: "Choose badge color",
            choices: ['brightgreen','green','yellowgreen','yellow','orange','red','blue','lightrey',
                        'success','important','critical','informational','inactive','blueviolet','ff69b4','9cf'],
            name: "Color"
        },
        {
            message: "Enter github username",
            name: "GitHubProfile"
        },
        {
            message: "Enter email address",
            name: "Email"
        },
            
    ]) 
    fs.writeFileSync("README.md", generateFile(questions))
}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
init();
