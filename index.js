const inq = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// User Input Questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Provide a project title. (Required)',
        validate: name => {
            if (name) {
                return true;
            }
            else {
                return 'Project Title Required' ;
            }
        }
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Provide a description of the project. '
    },
    {
        type: 'input',
        name: 'install',
        message: 'Provide insallation instructions for the project. '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide information on using the project.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide any information on guidelines for contributing. '
    },
    {
        type: 'list',
        name: 'license',
        message: 'Provide license information. ',
        choices: ['MIT', 'Apache 2.0', 'GNU AGLPv3', 'GNU GPLv3', 'Mozilla Public License 2.0', 'Boost Software License 1.0', 'Unlicensed'],
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide any information on testing. '
    },
    {
        type: 'input',
        name: 'github',
        message: 'Provide your Github username. '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide an email for future contact. '
    }
];

// Writing file 
function writeToFile(fileName, data) {

    fs.writeFile(`./generatedREADME/${fileName}`, data, err => {
        if (err) {
            console.log("ERROR Writing File\n" + err);
        }
        else {
            console.log("Created README");
        }
    });
}

function init() {
    return inq.prompt(questions);
}

// Initializing app
init().then(responses => generateMarkdown(responses)).
    then(generateREADME => writeToFile('README.md', generateREADME));
